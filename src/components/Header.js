import React, {Component} from 'react';
import logo from '../logo.svg';

const Header = ({profile}) => {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Virtual Market</h1>
                </div>
                <div className="greetings">
                    <span> {(profile && profile.firstName) ? profile.firstName : "Valued Customer"}</span>
                </div>
            </header>
        </div>
    );
};

export default Header;