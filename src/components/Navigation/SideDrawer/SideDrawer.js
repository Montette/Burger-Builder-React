import React from 'react';
import style from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) =>{

    return (
        <React.Fragment>

       
        <Backdrop show={'true'} />
        <div className={style.SideDrawer}>
             <div className={style.Logo}>
                <Logo/>
            </div>
           <nav>
                <NavigationItems />
            </nav>
        </div>
        </React.Fragment>
        
    )
}

export default sideDrawer