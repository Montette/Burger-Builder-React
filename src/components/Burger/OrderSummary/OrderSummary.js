import React from 'react';
import style from './OrderSummary.css';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const ingredients = Object.keys(props.ingredients).map((key,index) => {
        return <li key={key+index}>{key.charAt(0).toUpperCase() + key.slice(1)}: {props.ingredients[key]}</li>
    })

    return (
      
        <React.Fragment>
            <h3 className={style.Title}>Your Order</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>{ingredients}</ul>
            <p><b>Total price: {props.price.toFixed(2)}$</b></p>
            <p>Continue to checkout?</p>
            <div className={style.ButtonsContainer}>
            <Button
            btnType="Success"
            click={props.continue}
            >CONTINUE</Button>
            <Button
            click={props.close}
            btnType="Danger"
            >CLOSE</Button>
            </div>
            
            
        </React.Fragment>
            
      
    )
}

export default orderSummary;