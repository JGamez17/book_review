import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";

class NavBar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className="NavbarItems" >
                <div calssName="menu-icon" onClick={this.handleClick}>
                    <i
                        className={this.stateclicked ? "nav-menu active" : "nav-menu"}>
                    </i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.Name} href={item.url}>
                                    {item.titel}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}



export default Navbar; 