import React, {Component} from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

export default class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			isWideEnough: false,
			dropdownOpen: false
		};
		this.onClick = this.onClick.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	onClick() {
		this.setState(prevState => ({
			collapse: !prevState.collapse
		}));
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	render() {
		const { isWideEnough, collapse } = this.state;
		return (
			<>
            <AppBar position="static">
               <Toolbar>
                  <Typography variant="h6">News</Typography>
                  <Button color="inherit">Login</Button>
               </Toolbar>
            </AppBar>
			</>
		);
	}
}
