import React, { useEffect } from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import StudentLoggedInHome from "./student-logged-in-home";
import LoggedOutHome from "./logged-out-home";
import { Link } from "react-router-dom";
import AdminLoggedInHome from "./admin-logged-in-home";
import ProfessorLoggedInHome from "./professor-logged-in-home";

const HomeComponent = () => {
  /*
  1. No user is logged in. Show the logged out home page.
  2. A student is logged in. Show the student logged in home page.
  3. An admin is logged in. Show the admin logged in home page.
  4. A professor is logged in. Show the professor logged in home page.
  */
  const { currentUser } = useSelector((state) => state.users);
  console.log("currentUser role", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {!currentUser && <LoggedOutHome />}

        {currentUser && (
          <div className="d-flex flex-column justify-content-center align-items-center fs-3 mt-5">
            <div className="fs-3">
              Welcome back,{` ${currentUser.role.toLowerCase()} `}
              <Link className="text-dark" to="/profile">
                {currentUser.username}
              </Link>
            </div>
          </div>
        )}

        {currentUser && currentUser.role === "STUDENT" && (
          <StudentLoggedInHome />
        )}

        {currentUser && currentUser.role === "PROFESSOR" && (
          <ProfessorLoggedInHome />
        )}

        {currentUser && currentUser.role === "ADMIN" && <AdminLoggedInHome />}
      </div>
    </>
  );
};

export default HomeComponent;
