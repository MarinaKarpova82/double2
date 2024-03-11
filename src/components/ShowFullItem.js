import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
      <div>
        <p>{this.props.item.descriptionss}</p>
      </div>
      </div>
    )
  }
}

export default ShowFullItem