import React, { useEffect } from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="fw-bold display-4 mt-5 mb-5 text-dark">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <img
              src="/images/wikis-icon.png"
              width={48}
              height={48}
              className="me-3"
            />
            Rate Your Courses
          </div>
          <div className="d-flex justify-content-center align-items-center mb-4">
            <img
              src="/images/projects-icon.png"
              width={48}
              height={48}
              className="me-3"
            />
            Find Your Next Courses
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="/images/docs-icon.png"
              width={48}
              height={48}
              className="me-3"
            />
            Boost Your Learning
          </div>
        </div>
        {currentUser && (
          <div className="d-flex flex-column justify-content-center align-items-center display-6">
            <div>
              Welcome back,{" "}
              <Link className="text-dark" to="/profile">
                {currentUser.username}
              </Link>
            </div>
            <div>Take a new course? Review it now!</div>
          </div>
        )}
        {!currentUser && (
          <>
            <div className="d-flex justify-content-center align-items-center display-6">
              <div>
                <Link className="" to="/login">
                  Login
                </Link>{" "}
                to leave a review
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center display-6">
              <div>
                <Link className="" to="/signup">
                  Sign up
                </Link>{" "}
                if you do not have an account
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomeComponent;
