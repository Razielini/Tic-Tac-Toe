import React, { Component } from 'react'
import Square from '../square-button/index.js'

export default class Board extends Component {
  renderSquare(i) {
    return <Square
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
          />
  }

  render () {
    return (
      <div>
        <div className="border-row">
          { this.renderSquare(0) }
          { this.renderSquare(1) }
          { this.renderSquare(2) }
        </div>
        <div className="border-row">
          { this.renderSquare(4) }
          { this.renderSquare(5) }
          { this.renderSquare(6) }
        </div>
        <div className="border-row">
          { this.renderSquare(7) }
          { this.renderSquare(8) }
          { this.renderSquare(9) }
        </div>
      </div>
    )
  }
}