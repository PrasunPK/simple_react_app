import React, {Component} from 'react';
import logo from '../logo.svg';

export class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Virtual Market</h1>
                    </div>
                    <div className="greetings">
                        <name> First name</name>
                    </div>
                </header>
            </div>
        );
    }
}