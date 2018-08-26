import React from 'react';
import style from './Modal.css'

const modal = (props) => {

    return (
        <div className={style.Modal}
        style={{
            transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
            opacity: props.show ? '1': '0'
        }}>
            {props.children}
            <button>Purcharse</button>
            <button onClick={props.close}>Cancel</button>
        </div>
    )
}

export default modal;