import React from 'react';
import style from './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawer from '../SideDrawer/SideDrawer';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const toolbar = (props) =>{

    return (
        <header className={style.Toolbar}>
           
            <DrawerToggle
            clickMenu={props.openMenu}
            />
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