import './index.css';
import './App.css'; 
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBW8Mzad07Dil6ib3Q4NMpqQ936l0PWilw",
  authDomain: "tg-bot-48b6a.firebaseapp.com",
  projectId: "tg-bot-48b6a",
  storageBucket: "tg-bot-48b6a.appspot.com",
  messagingSenderId: "865634902520",
  appId: "1:865634902520:web:db1fbed48ee164d16a760d",
  measurementId: "G-68RKYV17T6"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


/////с одеой картинкой
/* class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: ''
    };
  }

  componentDidMount() {
    const storageRef = ref(storage, 'images/1.jpg');
    getDownloadURL(storageRef)
      .then((url) => {
        this.setState({ imageUrl: url });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.imageUrl && <img src={this.state.imageUrl} alt="firebase-image" />}
      </div>
    );
  }
}

export default App; */

//////


class App extends React.Component {
 
    constructor(props) 
    {
      super(props)
      this.state = {
        orders: [],
        products: [
          {id: '1', img: '', title: 'Коть раз', price: 200, description: 'летучий', descriptionss: 'маленький крылатый котёнок рыже-белого окраса. сидит сидя.'},
          {id: '2', img: '', title: 'Коть два', price: 230, description: 'летучий', descriptionss: 'горелый летучий кошк. питается исключительно мухами с красными глазами, не приемлет гусениц и жёлтые обои, будьте внимательны перед покупкой'},
          {id: '3', img: '', title: 'Коть три', price: 999, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '4', img: '', title: 'Коть четь', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '5', img: '', title: 'Коть пять', price: 750, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '6', img: '', title: 'Коть шесь', price: 5, description: 'летучий', descriptionss: 'Кот Бибуп. Бибуп спит, не тревожьте его...'},
          {id: '7', img: '', title: 'Коть семь', price: 3000, description: 'летучий', descriptionss: 'Блеск данной модели столь велик, что в условиях эксплуатации прямо прописано смотреть нанего исключительно в сварочной маске. Внимательно ознакомьтесь с инструкцией перед покупкой и не дарите ему комплименты, иначе он может засиять ярче.'},
          {id: '8', img: '', title: 'Коть вось', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '9', img: '', title: 'Коть девь', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
        ],
        showFullItem: false,
        fullItem: {},
        totalPrice: 0,
       imagesLoaded: false ////
      }
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
      this.onShowItem = this.onShowItem.bind(this)
      this.onCloseDescription = this.onCloseDescription.bind(this);
    }
 ////////
 componentDidMount() {
  Promise.all(this.state.products.map(product => {
    const storageRef = ref(storage, `images/${product.id}.jpg`);
    return getDownloadURL(storageRef)
      .then((url) => {
        product.img = url;
        return product;
      })
      .catch((error) => {
        console.log(error);
        return product;
      });
  })).then(updatedProducts => {
    this.setState({ products: updatedProducts, imagesLoaded: true });
  });
}

////////// 

render() {
  return (
    <div className="App">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      {this.state.imagesLoaded ? (
        <Items onShowItem={this.onShowItem} products={this.state.products} onAdd={this.addToOrder} />
      ) : (
        <div>Loading...</div>
      )}
      {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onCloseDescription={this.onCloseDescription} />}
    </div>
  );
}
}
/*   
   render(){
 return (
        <div className="App">
            <Header orders={this.state.orders} onDelete={this.deleteOrder} />
            <Items onShowItem={this.onShowItem} products={this.state.products} onAdd={this.addToOrder}/>
            {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onCloseDescription={this.onCloseDescription} />}
        </div>
  ) 
  }

  */
  componentDidMount1() {
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
 
 /*  
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})

  }  */



}
 
export default App; 
