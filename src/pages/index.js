import React from "react";
import { Routes, Route } from "react-router";
// import { Provider } from "react-redux";
// import reducer
// import { configureStore } from "@reduxjs/toolkit";

import Sidebar from "./sidebar/index.js";
import HomeComponent from "./home/index.js";
import DetailComponent from "./detail/index.js";
import Profile from "./profile/index.js";
import EditProfile from "./edit-profile/index.js";
import SearchComponent from "./search/index.js";
import LoginComponent from "./login/index.js";

// const store = configureStore({
//   reducer: {
//   },
// });

function Pages() {
  return (
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <Sidebar />
      </div>
      <div
        className="col-10 col-md-10 col-lg-7 col-xl-6"
        style={{ position: "relative" }}
      >
        {/* <List /> */}
        <Routes>
          <Route index element={<HomeComponent />} />
          <Route path="details" element={<DetailComponent />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<LoginComponent />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="search" element={<SearchComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default Pages;
