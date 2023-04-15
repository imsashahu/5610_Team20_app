import React from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import ProfileSummaryItem from "./profile-summary.js";

const Profile = () => {
  return (
    <div style={{ "overflow-y": "scroll" }}>
      <Header />
      <ProfileSummaryItem />
      <div className="container"></div>
    </div>
  );
};

export default Profile;
