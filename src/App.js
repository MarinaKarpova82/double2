import './index.css';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import React from 'react';
import Items from './components/Items';




class App extends React.Component {
 
    constructor(props) 
    {
      super(props)
      this.state = {
        orders: [],
        products: [
          {id: '1', img: 'cot6.jpeg', title: 'Коть раз', price: 200, description: 'подгоревший'},
          {id: '2', img: 'cat.jpg', title: 'Коть два', price: 230, description: 'подгоревший'},
          {id: '3', img: 'cat2.jpg', title: 'Коть три', price: 999, description: 'подгоревший'},
          {id: '4', img: 'cot1.jpeg', title: 'Коть четыри', price: 5000, description: 'подгоревший'},
          {id: '5', img: 'cot2.jpeg', title: 'Коть пять', price: 750, description: 'подгоревший'},
          {id: '6', img: 'cot3.jpeg', title: 'Коть шесть', price: 5, description: 'подгоревший'},
          {id: '7', img: 'cot4.jpeg', title: 'Коть семь', price: 3000, description: 'подгоревший'},
          {id: '8', img: 'cot5.jpeg', title: 'Коть восемь', price: 5000, description: 'подгоревший'},
          {id: '9', img: 'nevdupl.jpg', title: 'Коть восемь', price: 5000, description: 'подгоревший'},
        ]
      }
      this.addToOrder = this.addToOrder.bind(this)
    }
   render(){
  return (
        <div className="App">
            <Header orders={this.state.orders}/>
            <Items products={this.state.products} onAdd={this.addToOrder}/>
        </div>
  ) 
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})

  }

}

export default App;

