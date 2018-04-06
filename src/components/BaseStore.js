import React from "react";

const Store = ({store}) => (
    <div className="PersonalizedStore-Wrapper">
        <div className="PersonalizedStore">
            <div> Store name: { store ? store.name : "No store" } </div>
            <div> Store Location: { store ? store.location : "-" } </div>
            <input type="text" placeholder="Enter the store number"/>
            <button> Save</button>
        </div>
    </div>
);

export default Store;