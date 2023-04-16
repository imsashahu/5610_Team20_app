import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <>
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Card subtitle
          </h6>
          <p className="card-text">{review.review}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
