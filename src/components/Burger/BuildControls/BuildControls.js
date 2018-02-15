import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];
const ADD = 'add';
const REMOVED = 'removed';

const BuildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>Price: <strong>{props.price.toFixed(2)}</strong></p>
		{controls.map(ctrl => (
			<BuildControl 
				added={() => props.ingredientChanged(ctrl.type, ADD)}
				removed={() => props.ingredientChanged(ctrl.type, REMOVED)}
				key={ctrl.label}
				label={ctrl.label} 
				isDisabled={props.disabledInfo[ctrl.type]}/>
		))}
		<button 
			className={classes.OrderButton}
			disabled={!props.purchaseable}
			onClick={props.ordered}>Order Now</button>
	</div>
)

export default BuildControls;