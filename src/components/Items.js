import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <main>
        {this.props.products.map(el => (
          <h1>{el.title}</h1>
        ))}
      </main>
    )
  }
}

export default Item