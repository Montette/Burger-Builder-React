import React from 'react';
import style from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) =>{
    let attachedClasses = props.open ? [style.SideDrawer, style.Open].join(' '):[style.SideDrawer, style.Closed].join(' ');
    return (
        <React.Fragment>
        <Backdrop show={props.open} close={props.clickBackdrop}/>
        <div className={attachedClasses}>
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