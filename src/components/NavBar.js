import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="main-nav">
            <div className="nav-wrap">
                <h1>
                    <NavLink to="/" exact>Check Your Rep</NavLink>
                </h1>
                <ul className="links">
                    <li><NavLink className="link" to="/about"> About</NavLink></li>
                    <li><NavLink className="link" to="/signup">Sign Up</NavLink></li>
                    <li><NavLink className="link" to="/login">Log In</NavLink></li>
                </ul>
            </div>
            <div className="hamburger-wrap">
                <div className="hamburger">
                    Hamburger
                </div>
            </div>
        </nav>
    );
}

export default NavBar;