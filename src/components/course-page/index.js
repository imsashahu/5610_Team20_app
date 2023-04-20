import React, { useState, useEffect } from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
  useParams,
  redirect,
} from "react-router-dom";
import Header from "../header";
import ReviewCard from "../review-card";
import CourseInfo from "./course-info";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CoursePage = () => {
  const { courseNumberInPath } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
    axios
      .get(`http://localhost:4001/courses/${courseNumberInPath}`)
      .then((response) => {
        const course = response.data[0];
        setCourseNumber(course.courseNumber);
        setCourseName(course.courseName);
        setReviews(course.reviews);
        setCourseInfo(course);
      });
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state && location.state.from === "previous-page") {
      // Re-fetch data here
      axios
        .get(`http://localhost:4001/courses/${courseNumber}`)
        .then((response) => {
          const course = response.data[0];
          setCourseNumber(course.courseNumber);
          setCourseName(course.courseName);
          setReviews(course.reviews);
          setCourseInfo(course);
        });
    }
  }, [location]);

  const data = useLoaderData();
  const [courseInfo, setCourseInfo] = useState(null);
  const [courseNumber, setCourseNumber] = useState(0);
  const [courseName, setCourseName] = useState("");
  const [reviews, setReviews] = useState([]);

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
                navigate(`/${courseNumber}/edit-course`);
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
