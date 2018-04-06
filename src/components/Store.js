import React from "react";

const Store = ({onLoad, store}) => (
    <div className="PersonalizedStore-Wrapper" onLoad={onLoad}>
        <div className="PersonalizedStore">
            <div> {store.name} </div>
            <input type="text" placeholder="Enter the store number"/>
            <button> Save</button>
        </div>
    </div>
);

export default Store;