import React, { useEffect } from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { profileThunk } from "../../services/users/users-thunks";

import ProfileSummaryItem from "./profile-summary.js";
import ProfilePosts from "./profile-posts";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div style={{ "overflow-y": "scroll" }}>
        <Header />
        <h2 className="container">Please login first.</h2>
      </div>
    );
  } else {
    return (
      <div style={{ "overflow-y": "scroll" }}>
        <Header />
        <ProfileSummaryItem />
        <ProfilePosts />
        <div className="container"></div>
      </div>
    );
  }
};

export default Profile;
