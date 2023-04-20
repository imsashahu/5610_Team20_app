import React, { useEffect } from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import StudentLoggedInHome from "./student-logged-in-home";
import LoggedOutHome from "./logged-out-home";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("currentUser role", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  currentUser &&
    console.log("currentUser role", currentUser.role === "STUDENT");

  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center fs-3 mt-5">
          <div className="fs-3">
            Welcome back,{` ${currentUser.role.toLowerCase()} `}
            <Link className="text-dark" to="/profile">
              {currentUser.username}
            </Link>
          </div>
        </div>
        {!currentUser && <LoggedOutHome />}
        {currentUser && currentUser.role === "STUDENT" && (
          <StudentLoggedInHome />
        )}
      </div>
    </>
  );
};

export default HomeComponent;
