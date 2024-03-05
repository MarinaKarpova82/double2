import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegtam';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

function App() {
  
//const {onToggleButton} = useTelegram();

 useEffect( () => {
    tg.ready();
    }, []) 
    

  return (

    <div className="App">
      <ProductList />
    </div>,
    <div>blen</div>
  ); 
  }

export default App;
