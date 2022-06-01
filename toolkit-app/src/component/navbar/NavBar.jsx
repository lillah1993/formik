import React from "react";
import "./NavBar.styles.scss"
import { NavLink } from "react-router-dom";

const NavBar = () => (
    <nav>
        <NavLink className="link" to="/">FIRSTPAGE</NavLink>
        <NavLink className="link" to="/secform">SECONDPAGE</NavLink>
        <NavLink className="link" to="/firstformikpage">1FORMIKPAGE</NavLink>
    </nav>
);

export default NavBar;