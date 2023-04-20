import React, { useEffect } from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { Link } from "react-router-dom";
import Headline from "./headline";

const LoggedOutHome = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("currentUser", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <img
          src="/images/khoury-college.png"
          className="bg-dark border border-dark border-5"
        />
      </div>
      <Headline />
      <div className="fs-4">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <Link className="text-dark fw-bold" to="/login">
              Login
            </Link>{" "}
            to leave a review
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <Link className="text-dark fw-bold" to="/signup">
              Sign up
            </Link>{" "}
            if you do not have an account
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedOutHome;
