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
        removed={()=> props.ingredientRemoved(ctrl)}/>   
    })
    return (
        <div className={style.BuildControls}>
            {controls}
        </div>
    )
}

export default buildControls;