import React from "react";
import PersonalizedStore from "./BaseStore";

const Container = ({data}) => (
    <div className="Container-Wrapper">
        <div className="Container">
            <PersonalizedStore store={data}/>
        </div>
    </div>
);

export default Container;