import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, Link, useNavigate } from "react-router-dom";
import Header from "../header/index.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUserThunk } from "../../services/users/users-thunks";
import { Alert } from "bootstrap";

const EditProfile = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("currentUser", currentUser);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;

  const onClickSaveHandler = () => {
    if (emailRegExp.test(email)) {
      try {
        const newUser = { ...currentUser, email: email };
        console.log("saving");
        console.log("new user", newUser);
        console.log("email", email);
        dispatch(updateUserThunk(newUser));
        toast("Save successfully :)");
      } catch (err) {
        console.log("error");
        console.log(err);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    } else {
      toast("Not a valid email format.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mb-2 d-flex justify-content-between">
          <div className="w-auto mt-2">
            <Link to="/profile" type="button" className="btn btn-warning me-2">
              Back
            </Link>
          </div>
          <div className="w-auto mt-2">
            <div className="fw-bold">
              <h3>Edit Email</h3>
            </div>
          </div>
          <div className="w-auto mt-2">
            <Link
              type="button"
              className="btn btn-warning me-2"
              style={{ width: "fit-content" }}
              onClick={() => onClickSaveHandler()}
            >
              Save
            </Link>
          </div>
        </div>

        <div className="pt-3">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="changeEmail"
              placeholder="Please enter name"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="changeEmail">Email</label>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EditProfile;
