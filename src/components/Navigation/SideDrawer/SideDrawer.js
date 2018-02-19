import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.css';

const SideDrawer = (props) => {

	let openState = props.open ? 'Open' : 'Close';
	let attachedClasses = [classes.SideDrawer, classes[openState]];

	return (
		<React.Fragment>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</React.Fragment>
	);
}
export default SideDrawer;