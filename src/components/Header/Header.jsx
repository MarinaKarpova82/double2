import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../hooks/useTelegtam";
import './Header.css'


export default function Header() {
  return (
    <header>
        
        <div>
            <span className="logo">kittystroph</span>
            <Button onClick={onClose} >Уйти</Button>
            <ul className="nav"> 
                <li>Контакты</li>
                <li>Я не придумала</li>
                <li>Я не придумала 2</li>
            </ul>
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