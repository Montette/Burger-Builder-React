import React from 'react';
import style from './Button.css';

const button = (props) => {

    return (
       <button onClick={props.click} className={[style.Button, style[props.btnType]].join(' ')}>{props.children}</button>
    )
}

export default button;