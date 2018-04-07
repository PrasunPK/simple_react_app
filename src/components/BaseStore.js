import React from "react";

const Store = ({store, handleSave, handleChange}) => (
    <div className="PersonalizedStore-Wrapper">
        <div className="PersonalizedStore">
            <div> Store name: {store ? store.name : "No store"} </div>
            <div> Store Location: {store ? store.location : "-"} </div>
            <input type="number" id="personalized-store-id" placeholder="Enter the store number"
                   onChange={handleChange}/>
            <button onClick={handleSave}> Save</button>
        </div>
    </div>
);

export default Store;