import React, { Component } from 'react';
import './styles/Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__left">
                    <img src="./assets/Logo/Logo-brainflix.png" alt="logo" />
                </div>
                <div className="header__right">
                    <form className="header__right--form">
                        <input type="text" className="header__right--input" placeholder="Search..." />
                        <button className="header__right--button"><i className="fa fa-search header__right--search"></i></button>
                    </form>
                    <button className="header__right--upload">+ Upload</button>
                </div>
            </div>
        );
    }
}

export default Header;
