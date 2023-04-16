import React from "react";
import Header from "../header";

const Profile = () => {
  return (
    <div
      style={{ "overflow-y": "scroll", width: "100vw", "overflow-x": "hidden" }}
    >
      <Header />
      <h4>Profile</h4>
      <div className="container"></div>
    </div>
  );
};

export default Profile;
