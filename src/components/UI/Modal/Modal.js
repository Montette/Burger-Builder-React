import React from 'react';
import style from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {

    return (
        <React.Fragment>
        <div className={style.Modal}
        style={{
            transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
            opacity: props.show ? '1': '0'
        }}>
            {props.children}

        </div>
        <Backdrop
                show={props.show} 
                close={props.close}
         />
        </React.Fragment>
    )
}

export default modal;