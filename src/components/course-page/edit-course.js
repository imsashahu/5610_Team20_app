import React, { useEffect, useState } from "react";
import Header from "../header";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, profileThunk } from "../../services/users/users-thunks";
import { ToastContainer, toast } from "react-toastify";
import editCourseService from "../../services/course/course-service.js";
import { useQuery } from "react-query";
import axios from "axios";

const EditCourse = () => {
  const { courseNumberInPath } = useParams();

  const { currentUser } = useSelector((state) => state.users);
  const [courseNumber, setCourseNumber] = useState(0);
  const [creditHour, setCreditHour] = useState(0);
  const [professors, setProfessors] = useState([]);
  const [locations, setLocations] = useState("");
  const [instructionalMethods, setInstructionalMethods] = useState("");
  const [description, setDescription] = useState("");

  const [isAddingNewInstructor, setIsAddingNewInstructor] = useState(false);
  const [newInstructor, setNewInstructor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(profileThunk());
    axios
      .get(
        `${process.env.BASE_API}/courses/${courseNumberInPath}` ||
          `http://localhost:4001/courses/${courseNumberInPath}`
      )
      .then((response) => {
        console.log("Loding data use react-query", response.data);
        const course = response.data[0];
        console.log("[useEffect] course", course);
        setCourseNumber(course.courseNumber);
        setCreditHour(course.creditHour);
        setProfessors(course.professors);
        setLocations(course.locations);
        setInstructionalMethods(course.instructionalMethods);
        setDescription(course.description);
      });
  }, []);

  const updateCourse = async () => {
    const updateData = {
      courseNumber,
      creditHour,
      professors,
      locations,
      instructionalMethods,
      description,
      currentUser,
    };
    axios.put(
      `${process.env.BASE_API}/courses/${courseNumber}` ||
        `http://localhost:4001/courses/${courseNumber}`,
      updateData
    );
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mb-2 d-flex justify-content-between">
          <div className="w-auto mt-2">
            <button className="btn btn-warning" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
          <div className="w-auto mt-2">
            <div className="fw-bold">
              <h3>Edit Course</h3>
            </div>
          </div>
          <div className="w-auto mt-2">
            <button
              className="btn btn-warning"
              onClick={async () => {
                if (false) {
                  // toast.error(<div>Please enter all fields.</div>, {
                  //   className: "custom-toast",
                  // });
                } else if (!currentUser) {
                  console.log("Current user is null!");
                  navigate(`/details/${courseNumber}`);
                } else {
                  updateCourse().then(() => {
                    navigate(`/details/${courseNumber}`);
                  });
                }
              }}
            >
              Save
            </button>
          </div>
        </div>

        {/*Credit Hour*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Credit Hour</label>
          <select
            className="form-control"
            value={creditHour}
            onChange={(e) => {
              setCreditHour(parseInt(e.target.value));
            }}
          >
            {[0, 1, 2, 3, 4, 5].map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>

        {/*Instructor*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Instructor</label>
          <ul className="list-group list-group-flush">
            {professors.map((professor) => (
              <li className="list-group-item">{professor}</li>
            ))}
          </ul>
        </div>
        {!isAddingNewInstructor && (
          <button
            className="btn btn-primary"
            onClick={() => setIsAddingNewInstructor(true)}
          >
            Add an instructor
          </button>
        )}
        {isAddingNewInstructor && (
          <div className="form-group">
            <label className="fs-5 mt-4">Add an instructor</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setNewInstructor(e.target.value);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                const updateData = {
                  professors: [...professors, newInstructor],
                };
                axios
                  .put(
                    `${process.env.BASE_API}/courses/${courseNumber}` ||
                      `http://localhost:4001/courses/${courseNumber}`,
                    updateData
                  )
                  .then(() => {
                    setProfessors([...professors, newInstructor]);
                    setNewInstructor("");
                    setIsAddingNewInstructor(false);
                  });
              }}
            >
              Confirm adding an instructor
            </button>
          </div>
        )}

        {/*Location*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Location</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              const value = e.target.value;
              const locationList = value.split(",").map((item) => item.trim());
              setLocations(locationList);
            }}
          />
        </div>

        {/*Instructional Method*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Instructional Method</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              const value = e.target.value;
              const methodList = value.split(",").map((item) => item.trim());
              setInstructionalMethods(methodList);
            }}
          />
        </div>

        {/*Description*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditCourse;
