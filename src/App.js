import React, {Component} from 'react';
import './App.css';
import StoresContainer from "./containers/StoresContainer";
import {LeftNav} from "./components/LeftNav";
import Header from "./containers/HeaderContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="AppBody">
                    <LeftNav/>
                    <StoresContainer/>
                </div>
            </div>
        );
    }
}

export default App;
