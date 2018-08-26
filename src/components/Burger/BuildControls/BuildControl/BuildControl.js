import React from 'react';
import style from './BuildControl.css';

const BuildControl = (props) => {

    return(
        <div className={style.BuildControl}>
            <p className={style.Label}>{props.label}</p>
            <button className={style.More} onClick={props.added}>More</button>
            <button className={style.Less} onClick={props.removed}>Less</button>
        </div>
        
    )
      
}

export default BuildControl;