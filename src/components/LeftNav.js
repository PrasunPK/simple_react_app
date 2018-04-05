import React, {Component} from 'react';

export class LeftNav extends Component {
    render() {
        return (
            <div className="LeftNav-Wrapper">
                <div className="LeftNav">
                    <ul>
                        Yes
                        <li><a href="">Home</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                    <ul>
                        No
                        <li><a href="">No home</a></li>
                        <li><a href="">No news</a></li>
                        <li><a href="">No contact</a></li>
                        <li><a href="">No about</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}