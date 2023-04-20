import React, { useState } from "react";
import Header from "../header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../services/users/users-thunks";
import { useNavigate } from "react-router-dom";

const SignupComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/; // Email should follow this rule
  const navigate = useNavigate();

  const signUp = () => {
    if (password === "") {
      toast("Password is required.");
    } else if (password != repeatPassword) {
      console.log("password not match");
      toast("The passwords don't match");
    } else if (!emailRegExp.test(email)) {
      console.log("email format does not follow");
      toast("The email does not follow");
    } else {
      try {
        dispatch(registerThunk({ username, password, email }));
        // toast("Signed up successfully!")
        navigate("/profile");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="form-group mt-3">
          <label>Role</label>
          <br />
          <select className={"form-control"}>
            <option value="faculty">FACULTY</option>
            <option selected value="student">
              STUDENT
            </option>
          </select>
        </div>

        <div className="form-group mt-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="form-group mt-3">
          <label>Repeat Password</label>
          <input
            type="password"
            className="form-control"
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
          />
        </div>

        <div className={"d-flex justify-content-center mt-4"}>
          <button onClick={signUp} className="btn btn-warning mt-2">
            Sign Up!
          </button>
        </div>

        <div>
          {currentUser && (
            <div>
              <h2>{currentUser.username}</h2>
              <h2>{currentUser.password}</h2>
              {currentUser.bio}
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default SignupComponent;
