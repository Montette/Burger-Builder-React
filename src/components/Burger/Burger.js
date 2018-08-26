import React from 'react'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import style from './Burger.css';

const burger = (props) => {
 return (
     <div className={style.Burger}>
        <BurgerIngredient type={'bread-top'}/>
        <BurgerIngredient type={'cheese'}/>
        <BurgerIngredient type={'meat'}/>
        <BurgerIngredient type={'bread-bottom'}/>
      </div>
 )
}

export default burger;