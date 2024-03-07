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
          {id: '1', img: 'cat (1).jpg', title: 'Коть раз', price: 200, description: 'подгоревший'},
          {id: '2', img: 'cat (2).jpg', title: 'Коть два', price: 230, description: 'подгоревший'},
          {id: '3', img: 'cat (3).jpg', title: 'Коть три', price: 999, description: 'подгоревший'},
          {id: '4', img: 'cat (4).jpg', title: 'Коть четыри', price: 5000, description: 'подгоревший'},
          {id: '5', img: 'cat (5).jpg', title: 'Коть пять', price: 750, description: 'подгоревший'},
          {id: '6', img: 'cat (6).jpg', title: 'Коть шесть', price: 5, description: 'подгоревший'},
          {id: '7', img: 'cat (7).jpg', title: 'Коть семь', price: 3000, description: 'подгоревший'},
          {id: '8', img: 'cat (8).jpg', title: 'Коть восемь', price: 5000, description: 'подгоревший'},
          {id: '9', img: 'cat (9).jpg', title: 'Коть восемь', price: 5000, description: 'подгоревший'},
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

