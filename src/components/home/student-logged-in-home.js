import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import CourseList from "./course-list";

const debug = false;

const LoggedInHome = () => {
  const { currentUser } = useSelector((state) => state.users);
  debug && console.log("currentUser", currentUser);
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
            src="/images/docs-icon.png"
            width={48}
            height={48}
            className="me-3"
          />
          Took a new course? Review it now!
        </div>
      </div>
    </>
  );
};

export default LoggedInHome;
