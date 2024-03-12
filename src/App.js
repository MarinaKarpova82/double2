import './index.css';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import React from 'react';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';
import { useTelegram } from './components/hooks/useTelegtam';


const telegram = useTelegram();
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          orders: [],
          products: [],
          showFullItem: false,
          fullItem: {},
          totalPrice: 0 // Добавляем переменную totalPrice для хранения общей суммы заказов
      };
      this.addToOrder = this.addToOrder.bind(this);
      this.deleteOrder = this.deleteOrder.bind(this);
      this.onShowItem = this.onShowItem.bind(this);
      this.onCloseDescription = this.onCloseDescription.bind(this);
  }

  calculateTotalPrice() {
      let total = 0;
      this.state.orders.forEach(order => {
          total += order.price;
      });
      this.setState({
          totalPrice: total
      });
  }

  addToOrder(order) {
      this.setState(prevState => ({
          orders: [...prevState.orders, order]
      }), () => {
          this.calculateTotalPrice();
      });
  }

  deleteOrder(orderId) {
      this.setState(prevState => ({
          orders: prevState.orders.filter(order => order.id !== orderId)
      }), () => {
          this.calculateTotalPrice();
      });
  }

  onShowItem(item) {
      this.setState({
          showFullItem: true,
          fullItem: item
      });
  }

  onCloseDescription() {
      this.setState({
          showFullItem: false
      });
  }

  render() {
      const telegram = useTelegram();

      return (
          <div className="App">
              <Header orders={this.state.orders} onDelete={this.deleteOrder} />
              <Items onShowItem={this.onShowItem} products={this.state.products} onAdd={this.addToOrder} />
              {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onCloseDescription={this.onCloseDescription} />}
              <div>
                  {this.state.orders.map(el => (
                      <Order onDelete={this.deleteOrder} key={el.id} item={el} />
                  ))}
                  <button className="MainButton" onClick={() => telegram.tg.MainButton.show()}>
                      Купить за {this.state.totalPrice}₽
                  </button>
              </div>
          </div>
      );
  }
}

export default App;

/* class App extends React.Component {
 
    constructor(props) 
    {
      super(props)
      this.state = {
        orders: [],
        products: [
          {id: '1', img: 'cat (1).jpg', title: 'Коть раз', price: 200, description: 'летучий', descriptionss: 'маленький крылатый котёнок рыже-белого окраса. сидит сидя.'},
          {id: '2', img: 'cat (2).jpg', title: 'Коть два', price: 230, description: 'летучий', descriptionss: 'горелый летучий кошк. питается исключительно мухами с красными глазами, не приемлет гусениц и жёлтые обои, будьте внимательны перед покупкой'},
          {id: '3', img: 'cat (3).jpg', title: 'Коть три', price: 999, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '4', img: 'cat (4).jpg', title: 'Коть четь', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '5', img: 'cat (5).jpg', title: 'Коть пять', price: 750, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '6', img: 'cat (6).jpg', title: 'Коть шесь', price: 5, description: 'летучий', descriptionss: 'Кот Бибуп. Бибуп спит, не тревожьте его...'},
          {id: '7', img: 'cat (7).jpg', title: 'Коть семь', price: 3000, description: 'летучий', descriptionss: 'Блеск данной модели столь велик, что в условиях эксплуатации прямо прописано смотреть нанего исключительно в сварочной маске. Внимательно ознакомьтесь с инструкцией перед покупкой и не дарите ему комплименты, иначе он может засиять ярче.'},
          {id: '8', img: 'cat (8).jpg', title: 'Коть вось', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
          {id: '9', img: 'cat (9).jpg', title: 'Коть девь', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий'},
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
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})

  }

}

export default App; */
