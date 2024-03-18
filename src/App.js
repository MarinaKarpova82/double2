import './index.css';
import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';
import firebase from 'firebase/app';
import 'firebase/storage';



firebase.initializeApp(firebaseConfig);



class App extends React.Component {
 
    constructor(props) 
    {
      super(props)
      this.state = {
        orders: [],
        products: [
          {id: '1', img: 'https://firebasestorage.googleapis.com/v0/b/tg-bot-48b6a.appspot.com/o/cat%20(1).jpg?alt=media&token=1ba34baf-a04d-4332-ba33-7002d5435fd8', title: 'Коть раз', price: 200, description: 'летучий', descriptionss: 'маленький крылатый котёнок рыже-белого окраса. сидит сидя.'},
          {id: '2', img: 'https://firebasestorage.googleapis.com/v0/b/tg-bot-48b6a.appspot.com/o/cat%20(2).jpg?alt=media&token=673156d8-ada1-4395-844e-44fbd868d4b7', title: 'Коть два', price: 230, description: 'летучий', descriptionss: 'горелый летучий кошк. питается исключительно мухами с красными глазами, не приемлет гусениц и жёлтые обои, будьте внимательны перед покупкой'},
          {id: '3', img: 'https://firebasestorage.googleapis.com/v0/b/tg-bot-48b6a.appspot.com/o/cat%20(3).jpg?alt=media&token=4ed15647-9b53-4dd1-9a5f-ff966d21ba8a', title: 'Коть три', price: 999, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '4', img: 'https://firebasestorage.googleapis.com/v0/b/tg-bot-48b6a.appspot.com/o/cat%20(3).jpg?alt=media&token=4ed15647-9b53-4dd1-9a5f-ff966d21ba8a', title: 'Коть четь', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '5', img: 'https://firebasestorage.googleapis.com/v0/b/tg-bot-48b6a.appspot.com/o/cat%20(3).jpg?alt=media&token=4ed15647-9b53-4dd1-9a5f-ff966d21ba8a', title: 'Коть пять', price: 750, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '6', img: 'https://firebasestorage.googleapis.com/v0/b/tg-bot-48b6a.appspot.com/o/cat%20(3).jpg?alt=media&token=4ed15647-9b53-4dd1-9a5f-ff966d21ba8a', title: 'Коть шесь', price: 5, description: 'летучий', descriptionss: 'Кот Бибуп. Бибуп спит, не тревожьте его...'},
          {id: '7', img: 'https://firebasestorage.googleapis.com/v0/b/tg-bot-48b6a.appspot.com/o/cat%20(3).jpg?alt=media&token=4ed15647-9b53-4dd1-9a5f-ff966d21ba8a', title: 'Коть семь', price: 3000, description: 'летучий', descriptionss: 'Блеск данной модели столь велик, что в условиях эксплуатации прямо прописано смотреть нанего исключительно в сварочной маске. Внимательно ознакомьтесь с инструкцией перед покупкой и не дарите ему комплименты, иначе он может засиять ярче.'},
          {id: '8', img: 'https://firebasestorage.googleapis.com/v0/b/tg-bot-48b6a.appspot.com/o/cat%20(3).jpg?alt=media&token=4ed15647-9b53-4dd1-9a5f-ff966d21ba8a', title: 'Коть вось', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '9', img: 'https://firebasestorage.googleapis.com/v0/b/tg-bot-48b6a.appspot.com/o/cat%20(3).jpg?alt=media&token=4ed15647-9b53-4dd1-9a5f-ff966d21ba8a', title: 'Коть девь', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
        ],
        showFullItem: false,
        fullItem: {},
        totalPrice: 0
      }
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
      this.onShowItem = this.onShowItem.bind(this)
      this.onCloseDescription = this.onCloseDescription.bind(this);
    }



  
   render(){
 return (
        <div className="App">
            <Header orders={this.state.orders} onDelete={this.deleteOrder} />
            <Items onShowItem={this.onShowItem} products={this.state.products} onAdd={this.addToOrder}/>
            {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onCloseDescription={this.onCloseDescription} />}
        </div>
  ) 
  }

  
  componentDidMount() {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
        this.setState({ orders: JSON.parse(savedOrders) });
    }
}

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  onCloseDescription() {
    this.setState({ showFullItem: false });
}

  deleteOrder(id) {

    this.setState({orders: this.state.orders.filter(el => el.id !== id)})

  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray) {
        const updatedOrders = [...this.state.orders, item];
        this.setState({ orders: updatedOrders });
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
    }
}
  /* addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})

  } */



}

export default App; 