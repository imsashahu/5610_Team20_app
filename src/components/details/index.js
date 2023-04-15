import React from "react";
import Header from "../header";
import LocalItem from "./local-item";

const DetailsComponent = () => {
    return (
        <>
            <Header />
            <h4>Details</h4>
            <div className="row mt-2">
                {/*left place holder*/}
                <div className="col-1 col-md-2 col-lg-3 col-xl-3">

                </div>

                {/*content in the middle*/}
                <LocalItem/>

                {/*right place holder*/}
                <div className="col-1 col-md-2 col-lg-3 col-xl-3">

                </div>
            </div>
        </>
    );
};

export default DetailsComponent;
