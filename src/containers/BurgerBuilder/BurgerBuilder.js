import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
	salad: 0.75,
	bacon: .65,
	cheese: 0.5,
	meat: 1.5
}

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		price: 4,
		purchaseable: false,
		purchasing: false
	}

	updatePurchaseState = (ingredients) => {
		const sum = Object.values(ingredients).reduce((prev, cur) => prev + cur, 0);
		this.setState({purchaseable: sum > 0});
	}

	changeIngredientHandler = (type, action) => {
		let ingredient = this.state.ingredients[type],
			currPrice = this.state.price,
			ingredientPrice = INGREDIENT_PRICES[type];

		const updatedCount = action === 'add' ? ingredient + 1 : ingredient - 1;
		const updatedIngredients = {...this.state.ingredients};
		const updatedPrice = action === 'add' ? currPrice + ingredientPrice : currPrice - ingredientPrice;

		updatedIngredients[type] = updatedCount;

		this.setState({
			ingredients: updatedIngredients,
			price: updatedPrice
		});
		
		this.updatePurchaseState(updatedIngredients);
	}

	purchaseHandler =() => {
		this.setState({purchasing: true});
	}

	render() {
		const disabledInfo = {...this.state.ingredients};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<React.Fragment>
				<Modal show={this.state.purchasing}>
					<OrderSummary ingredients={this.state.ingredients} />
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
					ingredientChanged={this.changeIngredientHandler}
					price={this.state.price}
					purchaseable={this.state.purchaseable}
					ordered={this.purchaseHandler}
					disabledInfo={disabledInfo}/>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;