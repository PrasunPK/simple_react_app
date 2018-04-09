import React, {Component} from 'react';
import logo from '../logo.svg';

const Header = ({profile, store}) => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-left">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Virtual Market</h1>
                </div>
                <div className="greetings">
                    <div className="store-detail">
                        Personal store<br/>{ (store && store.name) ? store.name : "Not set"}
                    </div>
                    <div className="firstName">Welcome<br/>{(profile && profile.firstName) ? profile.firstName : "Valued Customer"}</div>
                </div>
            </header>
        </div>
    );
};

export default Header;