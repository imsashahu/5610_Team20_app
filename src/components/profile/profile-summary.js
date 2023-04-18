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
          <h3 className="card-title">
            <span className="me-2">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "rgb(228, 161, 27)" }}
              />
            </span>
            {currentUser ? currentUser.role : "Undefined"}{" "}
          </h3>
          <h4 className="card-title">
            <span className="me-2 mt-5">
              <FontAwesomeIcon
                icon={faMagnifyingGlassArrowRight}
                style={{ color: "rgb(228, 161, 27)" }}
              />
            </span>
            @{currentUser ? currentUser.username : "Undefined"}
          </h4>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="card-title">
              <span className="me-2 mt-5">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "rgb(228, 161, 27)" }}
                />
              </span>
              {currentUser ? currentUser.email : "Undefined"}
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
