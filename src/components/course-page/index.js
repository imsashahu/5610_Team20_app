import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../header";
import ReviewCard from "../review-card";
import { useDispatch } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";

const CoursePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
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
          <Link
            to={`/details/${courseNumber}/add-review`}
            className="btn btn-outline-primary"
          >
            Leave a Review
          </Link>
        </div>
        <div className="fs-1 justify-content-around align-items-center mt-4">
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
