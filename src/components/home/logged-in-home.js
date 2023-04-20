import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { Link } from "react-router-dom";

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
      <div className="d-flex flex-column justify-content-center align-items-center fs-1 mt-5">
        <div>
          Welcome back,{` ${currentUser.role.toLowerCase()} `}
          <Link className="text-dark" to="/profile">
            {currentUser.username}
          </Link>
        </div>
        <div>Take a new course? Review it now!</div>
      </div>
    </>
  );
};

export default LoggedInHome;
