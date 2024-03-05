import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegtam';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/cart/cart';

function App() {
  
//const {onToggleButton} = useTelegram();

 useEffect( () => {
    tg.ready();
    }, []) 
    

  return (

    <div className="App">
      <Header />
      <Routes>
	<Route index element={<ProductList  />} /> 
  <Route path={'cart'} element={<Cart />} />
</Routes>
    </div>
  ); 
  }

export default App;
