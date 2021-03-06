import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  handleSubmit = e => {
    const [pokeName, hp, front, back] = Array.from(e.target.querySelectorAll("input")).map(input => input.value)
    const newPokemon = {
      name: pokeName,
      hp,
      sprites: {
        front,
        back
      }
    }

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(data => {
      this.props.updateNewPokemon(data)
    })
  }
  
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
