import React from "react";
import PersonalizedStore from "./BaseStore";

const Container = ({store, handleSave, handleChange}) => (
    <div className="Container-Wrapper">
        <div className="Container">
            <PersonalizedStore store={store}
                               handleSave={handleSave}
                               handleChange={handleChange}/>
        </div>
    </div>
);

export default Container;