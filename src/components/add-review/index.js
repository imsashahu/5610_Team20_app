import React from "react";
import Header from "../header";
import { Link, useLocation } from "react-router-dom";

const AddReview = () => {
  const path = useLocation().pathname;
  const lastSlashIndex = path.lastIndexOf("/");
  const prePath = path.substring(0, lastSlashIndex);
  console.log("path", path);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
          <div>Add Review</div>
        </div>
        <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
          <Link to={prePath} className="btn btn-outline-primary">
            Go back to review page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
