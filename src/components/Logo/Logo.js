import React from 'react';
import style from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) =>{

    return (
        <div className={style.Logo}>
        <img src={burgerLogo} alt="BurgerBuilder"/>
        </div>
    )
}

export default logo