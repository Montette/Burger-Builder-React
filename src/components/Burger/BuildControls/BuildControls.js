import React from 'react';
import style from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';



const buildControls = (props) =>{

    let controls = Object.keys(props.controls)
    .map(ctrl=>{
        return <BuildControl 
        label={ctrl.charAt(0).toUpperCase() + ctrl.slice(1)} 
        key={ctrl} 
        added={()=> props.ingredientAdded(ctrl)}
        removed={()=> props.ingredientRemoved(ctrl)}
        isDisabled={props.controls[ctrl] === 0}
        />   
    })
    return (
        <div className={style.BuildControls}>
            <p>Current Price: <b>{props.price.toFixed(2)}$</b></p>
            {controls}
        </div>
    )
}

export default buildControls;