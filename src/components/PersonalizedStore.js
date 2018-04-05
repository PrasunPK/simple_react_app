import {Component} from "react";
import React from "react";

export class PersonalizedStore extends Component {
    render() {
        return (
            <div className="PersonalizedStore-Wrapper">
                <div className="PersonalizedStore">
                    <input type="text" placeholder="Enter the store number"/>
                    <button> Save</button>
                </div>
            </div>
        );
    };
}