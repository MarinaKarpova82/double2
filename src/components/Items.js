import React, { Component } from 'react'
import Item from './Item'


export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.products.map(el => (
         <Item key={el.id} item={el} />
        ))}
      </main> 
    )
  }
}

export default Items