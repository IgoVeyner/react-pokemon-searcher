import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(data => {
      this.setState({pokemons: data})
    })
  }

  renderPokemons = () => {
    if (this.props.query !== "") {
      return this.state.pokemons.filter(pokemon => {
        return pokemon.name.startsWith(this.props.query)
      }).map(pokemon => <PokemonCard data={pokemon} /> )
    } else {
      if (this.state.pokemons.length === 0) {
        return "Loading..."
      } else {
        return this.state.pokemons.map(pokemon => <PokemonCard data={pokemon} />)
      }
    }
  }

  checkNewPokemon = () => {
    if (Object.keys(this.props.new).length === 4) {
      const pokemons = [...this.state.pokemons, this.props.new]
      this.props.updateNewPokemon({})
      this.setState({pokemons})
    }
  }

  render() {
    this.checkNewPokemon()

    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
