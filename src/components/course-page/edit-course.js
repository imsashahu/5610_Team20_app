import React, { useEffect, useState } from "react";
import Header from "../header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const debug = false;

const EditCourse = () => {
  const { courseNumberInPath } = useParams();

  const { currentUser } = useSelector((state) => state.users);
  const [courseNumber, setCourseNumber] = useState(0);
  const [creditHour, setCreditHour] = useState(0);
  const [professors, setProfessors] = useState([]);
  const [locations, setLocations] = useState([]);
  const [instructionalMethods, setInstructionalMethods] = useState([]);
  const [description, setDescription] = useState("");

  // add new instructor
  const [isAddingNewInstructor, setIsAddingNewInstructor] = useState(false);
  const [newInstructor, setNewInstructor] = useState("");

  // add new location
  const [isAddingNewLocation, setIsAddingNewLocation] = useState(false);
  const [newLocation, setNewLocation] = useState("");

  // add new instructional method
  const [isAddingNewInstructionalMethod, setIsAddingNewInstructionalMethod] =
    useState(false);
  const [newInstructionalMethod, setNewInstructionalMethod] = useState("");

  const [isSeattleCampusChosen, setIsSeattleCampusChosen] = useState(false);
  const [isBostonCampusChosen, setIsBostonCampusChosen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(profileThunk());
    axios
      .get(
        process.env.BASE_API
          ? `${process.env.BASE_API}/courses/${courseNumberInPath}`
          : `http://localhost:4001/courses/${courseNumberInPath}`
      )
      .then((response) => {
        debug && console.log("Loding data use react-query", response.data);
        const course = response.data[0];
        debug && console.log("[useEffect] course", course);
        setCourseNumber(course.courseNumber);
        setCreditHour(course.creditHour);
        setProfessors(course.professors);
        setLocations(course.locations);
        course.locations.forEach((location) => {
          if (location === "Seattle") setIsSeattleCampusChosen(true);
          else if (location === "Boston") setIsBostonCampusChosen(true);
        });
        setInstructionalMethods(course.instructionalMethods);
        setDescription(course.description);
      });
  }, []);

  const newLocations = (l) => {
    l.filter((location) => {
      if (isSeattleCampusChosen) {
        return location !== "Seattle";
      }
    }).filter((location) => {
      if (isBostonCampusChosen) {
        return location !== "Boston";
      }
    });
  };

  const updateCourse = async () => {
    const newL = newLocations(locations);
    const updateData = {
      courseNumber,
      creditHour,
      professors,
      newL,
      instructionalMethods,
      description,
      currentUser,
    };
    axios.put(
      process.env.BASE_API
        ? `${process.env.BASE_API}/courses/${courseNumber}`
        : `http://localhost:4001/courses/${courseNumber}`,
      updateData
    );
  };

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
                  debug && console.log("Current user is null!");
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
            className="btn btn-warning"
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
              className="btn btn-warning mt-2"
              onClick={() => {
                const updateData = {
                  professors: [...professors, newInstructor],
                };
                axios
                  .put(
                    process.env.BASE_API
                      ? `${process.env.BASE_API}/courses/${courseNumber}`
                      : `http://localhost:4001/courses/${courseNumber}`,
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
          <ul className="list-group list-group-flush">
            {locations.map((location) => (
              <li className="list-group-item">{location}</li>
            ))}
          </ul>
        </div>

        {/* <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            checked={isSeattleCampusChosen}
            onChange={(e) => {
              setIsSeattleCampusChosen(e.target.checked);
            }}
          />
          <label class="form-check-label" for="inlineCheckbox1">
            Seattle
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            checked={isBostonCampusChosen}
            onChange={(e) => {
              setIsBostonCampusChosen(e.target.checked);
            }}
          />
          <label class="form-check-label" for="inlineCheckbox2">
            Boston
          </label>
        </div> */}

        {!isAddingNewLocation && (
          <button
            className="btn btn-warning"
            onClick={() => setIsAddingNewLocation(true)}
          >
            Add a location
          </button>
        )}
        {isAddingNewLocation && (
          <div className="form-group">
            <label className="fs-5 mt-4">Add an location</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setNewLocation(e.target.value);
              }}
            />
            <button
              className="btn btn-warning mt-2"
              onClick={() => {
                const updateData = {
                  locations: [...locations, newLocation],
                };
                axios
                  .put(
                    process.env.BASE_API
                      ? `${process.env.BASE_API}/courses/${courseNumber}`
                      : `http://localhost:4001/courses/${courseNumber}`,
                    updateData
                  )
                  .then(() => {
                    setLocations([...locations, newLocation]);
                    setNewLocation("");
                    setIsAddingNewLocation(false);
                  });
              }}
            >
              Confirm adding a location
            </button>
          </div>
        )}

        {/*Instructional Method*/}
        <div className="form-group">
          <label className="fs-5 mt-4">Instructional Method</label>
          <ul className="list-group list-group-flush">
            {instructionalMethods.map((instructionalMethod) => (
              <li className="list-group-item">{instructionalMethod}</li>
            ))}
          </ul>
        </div>
        {!isAddingNewInstructionalMethod && (
          <button
            className="btn btn-warning"
            onClick={() => {
              setIsAddingNewInstructionalMethod(true);
            }}
          >
            Add an instructional method
          </button>
        )}
        {isAddingNewInstructionalMethod && (
          <div className="form-group">
            <label className="fs-5 mt-4">Add an instructional method</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setNewInstructionalMethod(e.target.value);
              }}
            />
            <button
              className="btn btn-warning mt-2"
              onClick={() => {
                const updateData = {
                  instructionalMethods: [
                    ...instructionalMethods,
                    newInstructionalMethod,
                  ],
                };
                axios
                  .put(
                    process.env.BASE_API
                      ? `${process.env.BASE_API}/courses/${courseNumber}`
                      : `http://localhost:4001/courses/${courseNumber}`,
                    updateData
                  )
                  .then(() => {
                    setInstructionalMethods([
                      ...instructionalMethods,
                      newInstructionalMethod,
                    ]);
                    setNewInstructionalMethod("");
                    setIsAddingNewInstructionalMethod(false);
                  });
              }}
            >
              Confirm adding an instructional method
            </button>
          </div>
        )}

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
