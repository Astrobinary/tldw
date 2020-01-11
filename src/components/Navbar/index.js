import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSearch } from "@fortawesome/pro-light-svg-icons";

import "./navbar.scss";

const Navbar = () => (
    <nav className="Navbar">
        <section className="navbar-desktop">
            <Link className="nav-logo" to="/feed">
                TLDW
            </Link>

            <NavLink activeClassName="selected" className="nav-item" to="/feed">
                feed
            </NavLink>

            <NavLink activeClassName="selected" className="nav-item" to="/streamers">
                streamers
            </NavLink>

            <NavLink activeClassName="selected" className="nav-item" to="/games">
                games
            </NavLink>

            <NavLink activeClassName="selected" className="nav-item" to="/playlists">
                playlists
            </NavLink>

            <div className="nav-search" to="/">
                <FontAwesomeIcon className="icon" alt={"search"} icon={faSearch} />
                <input />
            </div>

            <div className="nav-login">
                {/* <img src={loginIcon} /> */}
                <FontAwesomeIcon className="icon" alt={"login"} icon={faSignIn} />

                <span>Login</span>
            </div>
        </section>
    </nav>
);

export default Navbar;
