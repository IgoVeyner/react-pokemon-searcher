import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  handleClick = () => {
    this.setState({
      front: !this.state.front
    })
  }

  setSprite = () => {
    if (this.state.front) {
      return <img 
        alt="sprite" 
        src={this.props.data.sprites.front}
        />
    } else {
      return <img 
        alt="sprite" 
        src={this.props.data.sprites.back}
        />
    } 
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick} >
          <div className="image">
            {this.setSprite()}
          </div>
          <div className="content">
            <div className="header">{this.props.data.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.data.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
