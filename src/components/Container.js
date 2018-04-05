import React, {Component} from "react";
import {PersonalizedStore} from "./PersonalizedStore";

export class Container extends Component {
    render() {
        return (
            <div className="Container-Wrapper">
                <div className="Container">
                    <PersonalizedStore/>
                </div>
            </div>
        );
    }
}
