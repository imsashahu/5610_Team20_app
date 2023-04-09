import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  editFirstName,
  editLastName,
  editBio,
  editDOB,
} from "../profile/profile-reducer.js";
import Header from "../header/index.js";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);

  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [bio, setBio] = useState(profile.bio);
  const [dob, setDob] = useState(profile.dateOfBirth);

  const dispatch = useDispatch();

  const onClickSaveHandler = () => {
    dispatch(editFirstName(firstName));
    console.log("first name", firstName);
    dispatch(editLastName(lastName));
    dispatch(editBio(bio));
    dispatch(editDOB(dob));
  };

  return (
    <div>
      <Header />
      <div className="row mb-2">
        <div className="w-auto mt-2">
          <Link to="/profile" type="button" className="btn btn-warning me-2">
            Back
          </Link>
        </div>
        <div className="w-50 mt-1">
          <div className="fw-bold fs-5">
            <h3>Edit Profile</h3>
          </div>
        </div>
        <div className="w-auto mt-2">
          <Link
            type="button"
            className="btn btn-warning me-2"
            style={{ width: "fit-content" }}
            to="/profile"
            onClick={() => onClickSaveHandler()}
          >
            Save
          </Link>
        </div>
      </div>

      <div className="pt-3">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Please enter name"
            value={firstName + " " + lastName}
            onChange={(e) => {
              const [first, last] = e.target.value.split(" ");
              console.log(e.target.value.split(" "));
              setFirstName(first);
              setLastName(last);
            }}
          />
          <label for="floatingName">Name</label>
        </div>

        <div class="form-floating mb-3">
          <textarea
            className="form-control h-auto"
            placeholder="Leave a biography here"
            id="floatingBio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          ></textarea>
          <label for="floatingBio">Bio</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingDOB"
            placeholder="Please enter DOB"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
          <label for="floatingDOB">Birth date</label>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
