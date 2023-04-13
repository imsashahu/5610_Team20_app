import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpen,
  faCalendar,
  faHeart,
  faMagnifyingGlassArrowRight,
  faNoteSticky,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const ProfileSummaryItem = () => {
  const profile = useSelector((state) => state.profile);

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
            {profile.firstName} {profile.lastName}
          </h3>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">
              <span className="me-3 mt-5">
                <FontAwesomeIcon
                  icon={faMagnifyingGlassArrowRight}
                  style={{ color: "rgb(228, 161, 27)" }}
                />
              </span>
              {profile.handle}
            </h5>
            <Link
              to="/profile/edit-profile"
              type="button"
              className="btn btn-warning me-2"
            >
              Edit
            </Link>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <b>Bio</b>{" "}
            <FontAwesomeIcon
              icon={faNoteSticky}
              style={{ color: "rgb(228, 161, 27)" }}
            />{" "}
            {profile.bio}
          </li>
          <li class="list-group-item">
            <b>DOB</b>{" "}
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ color: "rgb(228, 161, 27)" }}
            />{" "}
            {profile.dateOfBirth}
          </li>
          <li class="list-group-item">
            <b>Major</b>{" "}
            <FontAwesomeIcon
              icon={faBookOpen}
              style={{ color: "rgb(228, 161, 27)" }}
            />{" "}
            {profile.major}
          </li>
        </ul>
      </div>

      <div className="card container">
        <div class="card-body">
          <h3 class="card-title">
            <span className="me-2">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "rgb(228, 161, 27)" }}
              />
            </span>
            Following
          </h3>
          <h5 class="card-title">ABC</h5>
        </div>
        {/* Link to following uers' profile page */}
      </div>

      <div className="card container">
        <div class="card-body">
          <h3 class="card-title">
            <span className="me-2">
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={{ color: "rgb(228, 161, 27)" }}
              />
            </span>
            Follower
          </h3>
          <h5 class="card-title">ABC</h5>
        </div>
        {/* Link to follower uers' profile page */}
      </div>
    </>
  );
};

export default ProfileSummaryItem;
