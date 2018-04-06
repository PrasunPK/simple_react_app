import React from "react";
import PersonalizedStore from "./BaseStore";

const Container = ({store}) => (
    <div className="Container-Wrapper">
        <div className="Container">
            <PersonalizedStore store={store}/>
        </div>
    </div>
);

export default Container;