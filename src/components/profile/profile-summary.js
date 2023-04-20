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
        <div className="card-body" style={{ textAlign: "left" }}>
          <div className="fw-bold mb-2" style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={faUser} className="me-2" />
            {currentUser ? currentUser.role : "Undefined"}{" "}
          </div>
        </div>
      </div>

      <div className="card container border-white">
        <div className="card-body">
          <h4 className="card-title">
            <div className="mb-2" style={{ fontSize: "18px" }}>
              <span className="fw-bold">Username</span>: @
              {currentUser ? currentUser.username : "Undefined"}
            </div>
          </h4>

          <div className="d-flex justify-content-between align-items-center">
            <h4 className="card-title">
              <div className="mb-2" style={{ fontSize: "18px" }}>
                <span className="fw-bold">Email</span>:{" "}
                {currentUser ? currentUser.email : "Undefined"} <span> - </span>
                <Link to="/profile/edit-profile" style={{ color: "black" }}>
                  Edit Email
                </Link>
              </div>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSummaryItem;
