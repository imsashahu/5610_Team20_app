import React, { useEffect } from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import LoggedInHome from "./logged-in-home";
import LoggedOutHome from "./logged-out-home";

const HomeComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("currentUser", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        {!currentUser && <LoggedOutHome />}
        {currentUser && <LoggedInHome />}
      </div>
    </>
  );
};

export default HomeComponent;
