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
        products: [
          {id: '1', img: 'nevdupl.jpg', title: 'Коть раз', price: 200, description: 'подгоревший'},
          {id: '2', img: 'nevdupl.jpg', title: 'Коть два', price: 230, description: 'подгоревший'},
          {id: '3', img: 'nevdupl.jpg', title: 'Коть три', price: 999, description: 'подгоревший'},
          {id: '4', img: 'nevdupl.jpg', title: 'Коть четыри', price: 5000, description: 'подгоревший'},
          {id: '5', img: 'nevdupl.jpg', title: 'Коть пять', price: 750, description: 'подгоревший'},
          {id: '6', img: 'nevdupl.jpg', title: 'Коть шесть', price: 5, description: 'подгоревший'},
          {id: '7', img: 'nevdupl.jpg', title: 'Коть семь', price: 3000, description: 'подгоревший'},
          {id: '8', img: 'nevdupl.jpg', title: 'Коть восемь', price: 5000, description: 'подгоревший'},
        ]
      }
    }
   render(){
  return (
        <div className="App">
            <Header />
            <Items products={this.state.products}/>
        </div>
  ); 
  }
}

export default App;
