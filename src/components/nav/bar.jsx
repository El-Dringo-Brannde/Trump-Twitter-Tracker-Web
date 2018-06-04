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
            <NavbarBrand href="/Trump-Twitter-Tracker-Web/all">
               <strong>Trump Twitter Tracker</strong>
            </NavbarBrand>
            {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
            <Collapse isOpen={this.state.collapse} navbar>
               <NavbarNav right >
                  <NavItem color="blue-grey lighten-5">
                     <NavLink to='/Trump-Twitter-Tracker-Web/sunburst'
                        className="nav-link">
                        Word Types
                      </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/Trump-Twitter-Tracker-Web/wordcloud">Frequent Words</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/Trump-Twitter-Tracker-Web/heatmap">
                        Tweet Times
                        </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/Trump-Twitter-Tracker-Web/mentions">
                        Mentions
                        </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/Trump-Twitter-Tracker-Web/hashtags">
                        Hashtags
                        </NavLink>
                  </NavItem>
               </NavbarNav>
            </Collapse>
         </Navbar>
      );
   }
}