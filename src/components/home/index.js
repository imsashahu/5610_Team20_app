import React, { useEffect } from "react";
import Header from "../header";
import { useDispatch } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";

const HomeComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="fw-bold mt-2 mb-5">
          <div className="fs-1 d-flex justify-content-center align-items-center">
            Rate Your Courses
          </div>
          <div className="fs-1 d-flex justify-content-center align-items-center">
            Find Your Next Courses
          </div>
          <div className="fs-1 d-flex justify-content-center align-items-center">
            Boost Your Learning
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
