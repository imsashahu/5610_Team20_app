import React, { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Header from "../header";
import ReviewCard from "../review-card";
import CourseInfo from "./course-info";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { toast, ToastContainer } from "react-toastify";

const CoursePage = () => {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  console.log("[CourseInfo] courseInfo", courseInfo);

  return (
    <>
      <Header />
      <div className="container">
        <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
          <div>{`Course ${courseNumber} - ${courseName}`}</div>
        </div>
        <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              if (!currentUser) {
                // toast("Please log in to post a review.");
                toast.error(
                  <div>
                    Please&nbsp;
                    <Link to="/login" className="toast-link">
                      log in
                    </Link>
                    &nbsp;to post a review.
                  </div>,
                  {
                    className: "custom-toast",
                  }
                );
              } else {
                navigate("/add-review");
              }
            }}
          >
            Leave a Review
          </button>

          <button
            className="btn btn-outline-primary"
            onClick={() => {
              if (!currentUser) {
                // toast("Please log in to post a review.");
                toast.error(
                  <div>
                    Please&nbsp;
                    <Link to="/login" className="toast-link">
                      log in
                    </Link>
                    &nbsp;to post a review.
                  </div>,
                  {
                    className: "custom-toast",
                  }
                );
              } else {
                navigate("/edit-course");
              }
            }}
          >
            Edit Course Description
          </button>
        </div>
        <CourseInfo course={courseInfo} />
        <div className="fs-1 justify-content-around align-items-center mt-4">
          {reviews.length === 0 ? (
            <div>Be the first one to review course {courseNumber}</div>
          ) : (
            reviews.map((review) => <ReviewCard review={review} />)
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CoursePage;
