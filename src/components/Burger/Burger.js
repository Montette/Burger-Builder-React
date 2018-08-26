import React from 'react'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import style from './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey=>{
        return  [...Array(props.ingredients[igKey])].map((_, index)=> {
           return  <BurgerIngredient key={igKey+index} type={igKey} />
        })   
    })
 return (
     <div className={style.Burger}>
        {transformedIngredients}
      </div>
 )
}

export default burger;


