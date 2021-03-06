import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    query: "",
    newPokemon: {}
  }

  updateQuery = e => { this.setState({query: e.target.value}) }
  updateNewPokemon = newPokemon => { this.setState({newPokemon}) }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm updateNewPokemon={this.updateNewPokemon} />
        <br />
        <Search updateQuery={this.updateQuery} query={this.state.query}/>
        <br />
        <PokemonCollection query={this.state.query} new={this.state.newPokemon} updateNewPokemon={this.updateNewPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
