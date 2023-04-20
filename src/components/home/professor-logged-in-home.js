import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import CourseList from "./course-list";

const ProfessorLoggedInHome = () => {
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
        <div>TODO: implement professor logged-in home page</div>
      </div>
    </>
  );
};

export default ProfessorLoggedInHome;
