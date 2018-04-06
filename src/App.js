import React, {Component} from 'react';
import './App.css';
import PersonalizedStore from "./containers/Stores";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Header/>*/}
                <div className="AppBody">
                    {/*<LeftNav/>*/}
                    {/*<Container/>*/}
                    <PersonalizedStore/>
                </div>
            </div>
        );
    }
}

export default App;
