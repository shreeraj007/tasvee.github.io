import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";



function Header() {
    return (
        <div className="header">
        <Link to="/">
            <img className="header__logo" src="/images/logo.png" alt="logo" />
        </Link>
        <h1>TASVEE</h1>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className= "headerNav">
                <Link to="/login"><button class="logs-btn" type="button">Login</button></Link>
            </div>
        </div>
    );
}

export default Header;
