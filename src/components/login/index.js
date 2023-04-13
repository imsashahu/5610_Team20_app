import React, { useState } from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../services/users/users-thunks";

const LoginComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const login = () => {
    try {
      dispatch(loginThunk({ username, password }));
      // navigate("/profile");
    } catch (err) {
      console.log("error");
      console.log(err);
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="fw-bold mt-2 mb-5">
          <h3>Login</h3>
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
        <button onClick={login} className="btn btn-warning mt-2">
          Login
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
      </div>
    </>
  );
};

export default LoginComponent;
