import React from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import ProfileSummaryItem from "./profile-summary.js";
import {useNavigate} from "react-router-dom";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  if (!currentUser) {
    return (
        <div style={{ "overflow-y": "scroll" }}>
          <Header />
          <h2 className="container">Please login first.</h2>
        </div>
    )

  } else {
    return (
        <div style={{ "overflow-y": "scroll" }}>
          <Header />
          <ProfileSummaryItem />
          <div className="container"></div>
        </div>
    );
  }

};

export default Profile;
