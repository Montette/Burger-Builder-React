import React from 'react';
import style from './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawer from '../SideDrawer/SideDrawer';


const toolbar = (props) =>{

    return (
        <header className={style.Toolbar}>
            <button className={style.Button} onClick={props.clickMenu}>Menu</button>
            <div className={style.Logo}>
                <Logo/>
            </div>
            <nav className={style.Nav}>
                <NavigationItems styles={style.NavigationItems}/>
            </nav>
        </header>
    )
}

export default toolbar