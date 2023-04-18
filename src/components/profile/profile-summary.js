import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faHeart,
  faMagnifyingGlassArrowRight,
  faThumbsUp,
  faUser,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const ProfileSummaryItem = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("currentUser", currentUser);

  return (
    <>
      <div className="card container">
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

      {/* Demo all posts written by current user in group */}
      <div className="card container">
        <div className="card-body">
          <h3 className="card-title">
            <span className="me-2">
              <FontAwesomeIcon
                icon={faMessage}
                style={{ color: "rgb(228, 161, 27)" }}
              />
            </span>
            Posts
          </h3>
          <h5 className="card-title">ABC</h5>
        </div>
      </div>
    </>
  );
};

export default ProfileSummaryItem;
