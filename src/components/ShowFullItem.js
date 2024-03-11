import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
      <div>
        <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
        <p>{this.props.item.descriptionss}</p>
      </div>
      </div>
    )
  }
}

export default ShowFullItem