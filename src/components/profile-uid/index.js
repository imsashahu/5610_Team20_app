import React from "react";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faHeart,
  faMagnifyingGlassArrowRight,
  faThumbsUp,
  faUser,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const ProfileUID = () => {
  const data = useLoaderData();
  console.log("Profile per UID data", data);
  return (
    <div style={{ "overflow-y": "scroll" }}>
      <Header />
      <div className="card container">
        <div className="card-body">
          <h3 className="card-title">
            <span className="me-2">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "rgb(228, 161, 27)" }}
              />
            </span>
            User Information
          </h3>
          <h4 className="card-title">
            <span className="me-2 mt-5">
              <FontAwesomeIcon
                icon={faMagnifyingGlassArrowRight}
                style={{ color: "rgb(228, 161, 27)" }}
              />
            </span>
            @{data.data.username ? data.data.username : "Undefined"}
          </h4>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="card-title">
              <span className="me-2 mt-5">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "rgb(228, 161, 27)" }}
                />
              </span>
              {data.data.email ? data.data.email : "Undefined"}
            </h4>
          </div>
        </div>
        <p>
          * User's name and following information are sensitive, and hiden from
          the public.
        </p>
      </div>

      <div className="container"></div>
    </div>
  );
};

export default ProfileUID;
