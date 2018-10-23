import React from 'react';
import {
	Navbar,
	NavbarNav,
	NavbarToggler,
	Collapse,
	NavItem,
	NavLink
} from 'mdbreact';

export default class NavBar extends React.Component {
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
			<Navbar
				light
				color="blue-grey lighten-5"
				expand="lg"
				fixed="top"
				style={{ marginBottom: 250 }}
			>
				<NavLink to="/">
					<strong>Trump Twitter Tracker</strong>
				</NavLink>
				{!isWideEnough && <NavbarToggler onClick={this.onClick} />}
				<Collapse isOpen={collapse} navbar>
					<NavbarNav right>
						<NavItem color="blue-grey lighten-5">
							<NavLink to="/sunburst" className="nav-link">
								Word Types
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/wordcloud">Frequent Words</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/heatmap">Tweet Times</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/mentions">Mentions</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/hashtags">Hashtags</NavLink>
						</NavItem>
					</NavbarNav>
				</Collapse>
			</Navbar>
		);
	}
}
