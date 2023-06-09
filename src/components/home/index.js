import React, { useEffect } from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import StudentLoggedInHome from "./student-logged-in-home";
import LoggedOutHome from "./logged-out-home";
import { Link } from "react-router-dom";
import AdminLoggedInHome from "./admin-logged-in-home";
import ProfessorLoggedInHome from "./professor-logged-in-home";

const debug = false;

const HomeComponent = () => {
  /*
  1. No user is logged in. Show the logged out home page.
  2. A student is logged in. Show the student logged in home page.
  3. An admin is logged in. Show the admin logged in home page.
  4. A professor is logged in. Show the professor logged in home page.
  */
  const { currentUser } = useSelector((state) => state.users);
  debug && console.log("currentUser role", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {/* No user logged in */}
        {!currentUser && <LoggedOutHome />}

        {/* User logged in. Show user's role and user name */}
        {currentUser && (
          <div className="d-flex flex-column justify-content-center align-items-center fs-3 mt-5">
            <div className="fs-3">
              <img
                src="/images/waving-hand.png"
                width={35}
                height={35}
                className="me-2"
              />
              Welcome back,{` ${currentUser.role.toLowerCase()} `}
              <Link className="text-dark" to="/profile">
                @{currentUser.username}
              </Link>
            </div>
          </div>
        )}

        {/* "STUDENT" role */}
        {currentUser && currentUser.role === "STUDENT" && (
          <StudentLoggedInHome />
        )}

        {/* "PROFESSOR" role */}
        {currentUser && currentUser.role === "FACULTY" && (
          <ProfessorLoggedInHome />
        )}

        {/* "ADMIN" role */}
        {currentUser && currentUser.role === "ADMIN" && <AdminLoggedInHome />}
      </div>
    </>
  );
};

export default HomeComponent;
