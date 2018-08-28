import React from 'react';
import style from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

// const modal = (props) => {

class Modal extends React.Component {

    shouldComponentUpdate (nextProps, nextState){
        return nextProps.show !== this.props.show
    }

    render(){
        return (
            <React.Fragment>
            <div className={style.Modal}
            style={{
                transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: this.props.show ? '1': '0'
            }}>
                {this.props.children}

            </div>
            <Backdrop
                    show={this.props.show} 
                    close={this.props.close}
            />
            </React.Fragment>
        )

    }
}

export default Modal;