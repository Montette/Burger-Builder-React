import React from 'react';
import style from './Toolbar.css';
import Logo from '../../Logo/Logo.js';

const toolbar = (props) =>{

    return (
        <header className={style.Toolbar}>
        <div>menu</div>
            <Logo/>
            <nav>
                <ul>...</ul>
            </nav>
        </header>
    )
}

export default toolbar