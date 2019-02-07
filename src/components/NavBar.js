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
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;