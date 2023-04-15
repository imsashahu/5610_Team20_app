import React from "react";
import Header from "../header";
import LocalItem from "./local-item";

const DetailsComponent = () => {
    return (
        <>
            <Header />
            <h4>Details</h4>
            <div className="row mt-2">
                <LocalItem/>
            </div>
        </>
    );
};

export default DetailsComponent;
