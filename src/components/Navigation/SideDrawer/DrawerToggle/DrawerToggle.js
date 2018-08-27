import React from 'react';
import style from './DrawerToggle.css';


const drawerToggle = (props) =>{
   
    return (
        <div className={style.DrawerToggle} onClick={props.clickMenu} role="button" aria-label="open menu"><div></div></div>
        
    )
}

export default drawerToggle