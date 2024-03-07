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