import React, {useState} from "react";
import Header from "../header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../../services/users/users-thunks";

const SignupComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const signUp = () => {
    if(password === "") {
      toast("Password is required.");
    } else if (password != repeatPassword) {
      console.log("password not match")
      toast("The passwords don't match");
    } else {
      try {
        dispatch(registerThunk({ username, password, email }));
        // navigate("/profile");
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      <Header />
      <h4>Signup</h4>
      <div className="form-group">
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
      <div className="form-group">
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
      <div className="form-group">
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
      <div className="form-group">
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
      <button onClick={signUp} className="btn btn-primary">
        Sign up!
      </button>
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
    </>
  );
};

export default SignupComponent;
