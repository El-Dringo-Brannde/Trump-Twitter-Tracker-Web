import React from 'react';
import {
   Navbar,
   NavbarBrand,
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
         <Navbar light color="blue-grey lighten-5" expand="lg" fixed='top' style={{ marginBottom: 250 }}>
            <NavLink to="/all">
               <strong>Trump Twitter Tracker</strong>
            </NavLink>
            {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
            <Collapse isOpen={this.state.collapse} navbar>
               <NavbarNav right >
                  <NavItem color="blue-grey lighten-5">
                     <NavLink to='/sunburst'
                        className="nav-link">
                        Word Types
                      </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/wordcloud">Frequent Words</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/heatmap">
                        Tweet Times
                        </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/mentions">
                        Mentions
                        </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/hashtags">
                        Hashtags
                        </NavLink>
                  </NavItem>
               </NavbarNav>
            </Collapse>
         </Navbar>
      );
   }
}