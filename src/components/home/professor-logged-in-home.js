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
        <CourseList />
        <div>
          <img
            src="/images/projects-icon.png"
            width={48}
            height={48}
            className="me-3"
          />
          Click course above to edit course info!
        </div>
      </div>
    </>
  );
};

export default ProfessorLoggedInHome;
