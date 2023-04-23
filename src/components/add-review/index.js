import React, { useEffect, useState } from "react";
import Header from "../header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, profileThunk } from "../../services/users/users-thunks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addReview } from "../../services/reviews/reviews-service";
import { useQuery } from "react-query";
import axios from "axios";

const AddReview = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [courseNumber, setCourseNumber] = useState(0);
  console.log("courseNumber", courseNumber);
  const [professor, setProfessor] = useState("");
  const [yearTaken, setYearTaken] = useState(2023);
  const [rate, setRate] = useState(1);
  const [easiness, setEasiness] = useState(1);
  const [usefulness, setUsefulness] = useState(1);
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  const path = useLocation().pathname;
  const lastSlashIndex = path.lastIndexOf("/");
  const prePath = path.substring(0, lastSlashIndex);
  console.log("path", path);
  console.log("prePath", prePath);

  const postReview = async () => {
    console.log("[PostReview]currentUser", currentUser);
    console.log("[PostReview]currentUser._id", currentUser._id);
    const reviewData = {
      courseNumber,
      professor,
      yearTaken,
      rate,
      easiness,
      usefulness,
      review,
      postedBy: currentUser._id,
    };
    console.log("[PostReview]reviewData", reviewData);
    const returnedCourse = await addReview(reviewData);
    console.log("[PostReview]returnedCourse", returnedCourse);
  };

  const { isLoading, error, data } = useQuery("profile", async () => {
    return axios
      .get(
        process.env.BASE_API
          ? `${process.env.BASE_API}/all-course-numbers`
          : "http://localhost:4001/all-course-numbers"
      )
      .then((response) => {
        console.log("Loding data use react-query", response.data);
        return response.data;
      });
  });

  return (
    <div>
      <Header />
      <div className="container mb-4">
        <div className="row mb-2 d-flex justify-content-between">
          <div className="w-auto mt-2">
            <button className="btn btn-warning" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
          <div className="w-auto mt-2">
            <div className="fw-bold">
              <h3>Leave A Review</h3>
            </div>
          </div>
          <div className="w-auto mt-2">
            <button
              className="btn btn-warning"
              onClick={async () => {
                if (
                  !courseNumber ||
                  courseNumber === 0 ||
                  professor === "" ||
                  review === ""
                ) {
                  toast.error(<div>Please enter all fields.</div>, {
                    className: "custom-toast",
                  });
                } else if (!currentUser) {
                  console.log("Current user is null!");
                  navigate(-1);
                } else {
                  await postReview();
                  console.log("Successfully posted a new review!");
                  navigate(-1);
                }
              }}
            >
              Post Review
            </button>
          </div>
        </div>

        {/*Course Number*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Course Number</label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              console.log("course number is set to", e.target.value);
              setCourseNumber(e.target.value);
            }}
          >
            <option selected value={null}>
              Select Course
            </option>
            {!isLoading &&
              data.map((course) => {
                return <option value={course}>{course.toString()}</option>;
              })}
          </select>
        </div>

        {/* <div className="form-group">
          <label className="fs-4">Course Number</label>
          <input
            type="number"
            className="form-control"
            value={courseNumber}
            onChange={(e) => {
              setCourseNumber(e.target.value);
            }}
          />
        </div> */}

        {/*Professor*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Professor</label>
          <input
            type="text"
            className="form-control"
            value={professor}
            onChange={(e) => {
              setProfessor(e.target.value);
            }}
          />
        </div>

        {/*Year Taken*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Year Taken</label>
          <input
            type="number"
            className="form-control"
            min="1898"
            max="2100"
            step="1"
            value={yearTaken}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value >= 1898 && value <= 2100) {
                setYearTaken(value);
              }
            }}
          />
        </div>

        {/*Rate*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Rate</label>
          <div>
            <input
              type="range"
              className="form-range"
              min="1"
              max="5"
              step="1"
              value={rate}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value >= 1 && value <= 5) {
                  setRate(value);
                }
              }}
            />
            <div className="legend-container d-flex justify-content-between">
              <div className="legend">1</div>
              <div className="legend">2</div>
              <div className="legend">3</div>
              <div className="legend">4</div>
              <div className="legend">5</div>
            </div>
          </div>
        </div>

        {/*Easiness*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Easiness</label>
          <div>
            <input
              type="range"
              className="form-range"
              min="1"
              max="5"
              step="1"
              value={easiness}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value >= 1 && value <= 5) {
                  setEasiness(value);
                }
              }}
            />
            <div className="legend-container d-flex justify-content-between">
              <div className="legend">1</div>
              <div className="legend">2</div>
              <div className="legend">3</div>
              <div className="legend">4</div>
              <div className="legend">5</div>
            </div>
          </div>
        </div>

        {/*Usefulness*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Usefulness</label>
          <div>
            <input
              type="range"
              className="form-range"
              min="1"
              max="5"
              step="1"
              value={usefulness}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value >= 1 && value <= 5) {
                  setUsefulness(value);
                }
              }}
            />
            <div className="legend-container d-flex justify-content-between">
              <div className="legend">1</div>
              <div className="legend">2</div>
              <div className="legend">3</div>
              <div className="legend">4</div>
              <div className="legend">5</div>
            </div>
          </div>
        </div>

        {/*Review*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Review</label>
          <textarea
            type="text"
            className="form-control"
            rows={6}
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddReview;
