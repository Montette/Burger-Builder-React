import React from 'react';
import style from './OrderSummary.css'

const orderSummary = (props) => {

    const ingredients = Object.keys(props.ingredients).map((key,index) => {
        return <li key={key+index}>{key.charAt(0).toUpperCase() + key.slice(1)}: {props.ingredients[key]}</li>
    })
    let price = props.price;
    return (
      
        <React.Fragment>
            <h3 className={style.Title}>Your Order</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>{ingredients}</ul>
            <p>Price: <b>{price.toFixed(2)}$</b></p>
            <p>Continue to checkout?</p>
            
        </React.Fragment>
            
      
    )
}

export default orderSummary;