import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { Link } from "react-router-dom";
import CourseList from "./course-list";

const LoggedInHome = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("currentUser", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  return (
    <>
      {" "}
      <div className="d-flex flex-column justify-content-center align-items-center fs-3 mt-5">
        <div>Here is a curated list of courses for you</div>
        <CourseList />
        <div>TODO: implement admin logged-in home page</div>
      </div>
    </>
  );
};

export default LoggedInHome;
