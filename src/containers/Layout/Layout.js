import React, {Component} from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}
	toggleSideDrawerHandler = () => {
		this.setState( (prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}
	render () {
		return (
			<React.Fragment>
				<div>
					<Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
					<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
				</div>
				<main className={classes.content}>
					{this.props.children}
				</main>
			</React.Fragment>
		)
	}
}

export default Layout;