import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			let val = props.ingredients[igKey]
			return (
				<li key={igKey + val}>
					<span style={{textTransform: 'capitalize'}}>{igKey}: </span>
					{val}
				</li>
			)
		})

	return (
		<React.Fragment>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients: </p>
			<ul>
				{ingredientSummary}
			</ul>
			<p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
			<p>Continue to checkout?</p>
			<Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
			<Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
		</React.Fragment>
	)
}

export default OrderSummary;