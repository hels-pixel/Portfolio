import { Component } from "react";
import NavItem from "./NavItem";
import dp from "../img/subtle grunge.jpg"

class SideNav extends Component {
  state = { activeNavItem: "" };

  handleNavItemOnClick = (item) => {
    if (this.state.activeNavItem.length > 0) {
      document
        .getElementById(this.state.activeNavItem)
        .classList.remove("active");
    }
    this.setState({ activeNavItem: item }, () => {
      document.getElementById(item).classList.add("active");
    });
  };

  render() {
    return (
      <nav className="sidenav">
        <ul>
          <NavItem
            item=".home"
            tolink="/"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item=".about"
            tolink="/about"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item=".education"
            tolink="/education"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item=".skills"
            tolink="/skills"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item=".contact"
            tolink="/contact"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
               
          
        </ul>
      </nav>
    );
        
  }
}

export default SideNav;





