import React, {Component} from 'react';
import './App.css';
import {Header} from './components/Header'
import {LeftNav} from "./components/LeftNav";
import {Container} from "./components/Container";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="AppBody">
                    <LeftNav/>
                    <Container/>
                </div>
            </div>
        );
    }
}

export default App;
