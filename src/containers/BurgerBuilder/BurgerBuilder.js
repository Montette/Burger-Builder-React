import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false

    }

    updatePurchaseState = (ingredients) =>{
        const sumOfIngredients =  Object.values(ingredients).reduce((a,b) => a + b);
        this.setState({purchasable: sumOfIngredients > 0})   
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
    
        this.setState({
            ingredients: updatedIngredients, totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){ 
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
    
        this.setState({
            ingredients: updatedIngredients, totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngredients); 
     }

     purchaseHandler = () => {
         this.setState({purchasing:true});
     }

     purchaseCancelHandler = () =>{
        this.setState({purchasing: false});
     }

     purchaseContinueHandler = () =>{
        // alert('You continue!')
        // const ingredients = {
        //     ...this.state.ingredients
        // }
        this.setState({loading: true})
        const data = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customer: {
                name: 'Max Kowalski',
                adress: {
                    street: 'Teststreet 2',
                    zipCode: '91230',
                    country: 'Poland'
                },
                email: 'test@test.pl'
            },
            deliveryMethod: 'fastest' 
        }
        axios.post('/orders.json', data)
            .then(response => {
                console.log(response);
            //     this.setState(prevState =>{
            //         return {

            //         }
            //     })
            // })
            this.setState({ loading: false, purchasing: false})
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false})
            })     
    }

    render(){
        let orderSummary = this.state.loading?
        <Spinner />:
        <OrderSummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            close={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
        /> 



        return(
            <React.Fragment>
                <Burger 
                ingredients={this.state.ingredients}
                />
                <BuildControls
                 controls = {this.state.ingredients} 
                 ingredientAdded={this.addIngredientHandler}
                 ingredientRemoved={this.removeIngredientHandler}  
                 price={this.state.totalPrice} 
                 purchase={this.state.purchasable}
                 showModal = {this.purchaseHandler}           
                 />
                 
                 <Modal
                 show={this.state.purchasing}
                 close={this.purchaseCancelHandler}
                 loading={this.state.loading}
                 >
                 {orderSummary}
                 </Modal>
                

            </React.Fragment>
        )
    }

}

export default withErrorHandler (BurgerBuilder)