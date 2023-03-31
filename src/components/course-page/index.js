import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../header";
import ReviewCard from "../review-card";

const CoursePage = () => {
  const data = useLoaderData();
  const courseInfo = data.data[0];
  const {
    courseNumber,
    courseName,
    averageRate,
    easiness,
    usefulness,
    numOfReviews,
    professors,
    reviews,
  } = courseInfo;

  return (
    <>
      <Header />
      <div className="container">
        <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
          <div>{`Course ${courseNumber} - ${courseName}`}</div>
        </div>
        <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
          <button className="btn btn-outline-primary">Leave a Review</button>
        </div>
        <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
          {reviews.length === 0 ? (
            <div>Be the first one to review course {courseNumber}</div>
          ) : (
            reviews.map((review) => <ReviewCard review={review} />)
          )}
        </div>
      </div>
    </>
  );
};

export default CoursePage;
