import React, { Component } from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';
import classes from './Burger.css';

class Burger extends Component {

	render () {
		let transformedIngredients = Object.keys(this.props.ingredients)
			.map(igKey => {
				return [...Array(this.props.ingredients[igKey])].map( (_, i) => {
					return <BurgerIngredient key={igKey + i} type={igKey} />
				})
			})
			.reduce( (old, curr) => {
				return old.concat(curr);
			}, []);

		if (!transformedIngredients.length) {
			transformedIngredients = <p>Please start adding ingredients</p>
		}
		return (
			<div className={classes.Burger}>
				<BurgerIngredient type="bread-top" />
				{transformedIngredients}
				<BurgerIngredient type="bread-bottom" />
			</div>
		)
	}
}

Burger.propTypes = {
	ingredients: PropTypes.object
};

export default Burger;