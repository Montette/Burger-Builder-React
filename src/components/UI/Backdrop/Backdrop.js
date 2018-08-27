import React from 'react';
import style from './Backdrop.css'

const backDrop = (props) => {

    return (  
        props.show ? <div className={style.Backdrop} onClick={props.close}></div> : null  
    )
}

export default backDrop;