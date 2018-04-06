import React, {Component} from "react";
import PersonalizedStore from "./Store";

export class Container extends Component {
    render() {
        return (
            <div className="Container-Wrapper">
                <div className="Container">
                    <PersonalizedStore store={"name"}/>
                </div>
            </div>
        );
    }
}
