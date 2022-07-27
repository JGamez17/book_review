import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom"

import "./NavBar.css";

class NavBar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className="NavbarItems" >
                <div className="menu-icon" onClick={this.handleClick}>
                    <i
                        className={this.stateclicked ? "nav-menu active" : "nav-menu"}>
                    </i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.Name} href={item.url}>
                                    {item.title}
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