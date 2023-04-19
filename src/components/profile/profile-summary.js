import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faMagnifyingGlassArrowRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const ProfileSummaryItem = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("currentUser", currentUser);

  return (
    <>
      <div className="card container border-white">
        <div className="card-body">
          <div className="fw-bold mb-2" style={{ fontSize: "20px" }}>
            Role: {currentUser ? currentUser.role : "Undefined"}{" "}
          </div>
        </div>
      </div>

      <div className="card container border-white">
        <div className="card-body">
          <h4 className="card-title">
            <div className="mb-2" style={{ fontSize: "18px" }}>
              Username: @{currentUser ? currentUser.username : "Undefined"}
            </div>
          </h4>

          <div className="d-flex justify-content-between align-items-center">
            <h4 className="card-title">
              <div className="mb-2" style={{ fontSize: "18px" }}>
                Email: {currentUser ? currentUser.email : "Undefined"}
              </div>
            </h4>
            <Link
              to="/profile/edit-profile"
              type="button"
              className="btn btn-warning"
            >
              Edit Email
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSummaryItem;
