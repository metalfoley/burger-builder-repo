import React from 'react';

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
			<p>Continue to checkout?</p>
		</React.Fragment>
	)
}

export default OrderSummary;