import React, {useState} from "react";
import Button from "../Button/Button";
import { useTelegram } from "../hooks/useTelegtam";
import './Header.css'
import { FaCartPlus } from "react-icons/fa6";
import Order from "../Order";


const showOrders = (props) => {
    return (
    <div>
        {props.orders.map(el => (
                        <Order key={el.id} item={el}/>
                    ))}
    </div>
    )
}

const showNothing = () => {
    return (<div className="empty"> <p>Здесть пока пусто...</p> </div>)
}

export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        
        <div>
            <span className="logo"></span>
            <ul className="nav"> 
                <li>Кнопочк</li>
                <li>Кнопочк</li>
                <li>Кнопочк</li>
            </ul>
            <FaCartPlus onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && (
                <div className="shop-cart">
                    {props.orders.lenght > 0 ? showOrders(props): showNothing()}
                </div>
            )}
        </div>
        
    </header>
  )
}


/* const Header = () => {
    const {user, onClose} = useTelegram();

    retorn (
        <div className={'header'}>
            <Button onClick={onClose} >Уйти</Button>
            <span className={'username'}>
                {user?.username}
            </span>

        </div>
    );
};

export default Header; */