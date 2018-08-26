import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            breadTop:1,
            
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
            breadBottom: 1
        }
    }
    render(){
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div>controls</div>
            </React.Fragment>
        )
    }

}

export default BurgerBuilder