import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../hooks/useTelegtam";
import './Header.css'


const Header = () => {
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

export default Header;