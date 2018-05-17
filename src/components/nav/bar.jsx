import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import Typography from 'material-ui/Typography';
import { BrowserRouter as Router } from 'react-router-dom';

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
      this.setState({
         collapse: !this.state.collapse,
      });
   }

   toggle() {
      this.setState({
         dropdownOpen: !this.state.dropdownOpen
      });
   }

   render() {
      return (
         <Navbar light color="blue-grey lighten-5" expand="lg" fixed='top' style={{ marginBottom: 150 }}>
            <NavbarBrand href="/">
               <strong>Trump Twitter Tracker</strong>
            </NavbarBrand>
            {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
            <Collapse isOpen={this.state.collapse} navbar>
               <NavbarNav right >
                  <NavItem color="blue-grey lighten-5">
                     <NavLink to='/sun-burst'
                        className="nav-link">
                        Sun Burst
                      </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/word-cloud">Word Cloud</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/heat-map">
                        Heat Map
                        </NavLink>
                  </NavItem>
               </NavbarNav>
            </Collapse>
         </Navbar>
      );
   }
}