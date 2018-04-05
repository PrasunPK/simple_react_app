import React, {Component} from 'react';
import './App.css';
import {Header} from './components/Header'
import {LeftNav} from "./components/LeftNav";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <LeftNav/>
            </div>
        );
    }
}

export default App;
