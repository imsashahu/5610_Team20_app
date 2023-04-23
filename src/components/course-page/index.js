import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../header";
import ReviewCard from "../review-card";
import CourseInfo from "./course-info";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import YoutubeVideoResult from "../youtube-video-result";
import { getYoutubeVideos } from "../../utils";
import { useLocation } from "react-router-dom";

const CoursePage = () => {
  const navigate = useNavigate();

  const { courseNumberInPath } = useParams();
  const { currentUser } = useSelector((state) => state.users);

  const [courseNumber, setCourseNumber] = useState(0);
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  const [courseInfo, setCourseInfo] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [reviews, setReviews] = useState([]);
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
    console.log(
      "[fetchYoutubeVideos in course page] trace the change of courseName 1",
      courseName
    );
  }, []);

  const location = useLocation();
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
      console.log(
        "[fetchYoutubeVideos in course page] trace the change of courseName 2",
        courseName
      );
    }
  }, [location]);

  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      if (
        courseName !== null &&
        courseName !== undefined &&
        courseName !== ""
      ) {
        console.log(
          "[fetchYoutubeVideos in course page] trace the change of courseName 3",
          courseName
        );
        const videos = await getYoutubeVideos(false, courseName);
        console.log("[fetchYoutubeVideos in course page] videos", videos);
        if (videos !== null && videos !== undefined) {
          setYoutubeVideos(videos);
        }
      }
    };

    fetchYoutubeVideos();
  }, [courseName]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
          <div>{`Course ${courseNumber} - ${courseName}`}</div>
        </div>
        <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
          {/* <button - Post A Review - warning for not logged in user> */}
          {!currentUser && (
            <button
              className="btn btn-warning"
              onClick={() => {
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
              }}
            >
              Leave a Review
            </button>
          )}

          {/* button - Post A Review - logged in, role is either "STUDENT" or "ADMIN" */}
          {currentUser &&
            (currentUser.role === "STUDENT" ||
              currentUser.role === "ADMIN") && (
              <button
                className="btn btn-warning"
                onClick={() => navigate("/add-review")}
              >
                Leave a Review
              </button>
            )}

          {/* <button - Edit Course> */}
          {currentUser &&
            (currentUser.role === "FACULTY" ||
              currentUser.role === "ADMIN") && (
              <button
                className="btn btn-warning"
                onClick={() => navigate(`/${courseNumber}/edit-course`)}
              >
                Edit Course Description
              </button>
            )}
        </div>

        {/*basic course information from our server*/}
        <CourseInfo course={courseInfo} />
        <br />

        {/*relevant videos from YouTube*/}
        <div className="ms-2 me-3 fw-bold">Relevant Videos on YouTube</div>
        {youtubeVideos.length === 0 ? (
          <div className="ms-3 me-3 fw-normal">
            No relevant videos on YouTube yet
          </div>
        ) : (
          <YoutubeVideoResult youtubeVideos={youtubeVideos} />
        )}
        <br />

        {/*student review(s) from our server*/}
        <div className="ms-2 me-3 fw-bold">Student Review(s)</div>
        <div className="fs-1 justify-content-around align-items-center mt-4">
          {reviews.length === 0 ? (
            <div className="ms-3 me-3 fw-normal">
              Be the first one to review course {courseNumber}
            </div>
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
