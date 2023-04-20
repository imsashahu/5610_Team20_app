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
      <div className="card container border-white">
        <div className="card-body">
          <h3 className="card-title">
            <div className="fw-bold mb-4" style={{ fontSize: "25px" }}>
              <FontAwesomeIcon icon={faUser} className="me-3" />
              Public Profile Page
            </div>
          </h3>

          <h4 className="card-title">
            <div className="mb-2" style={{ fontSize: "18px" }}>
              <span className="fw-bold">Username</span>: @
              {data.data.username ? data.data.username : "Undefined"}
            </div>
          </h4>

          <div className="d-flex justify-content-between align-items-center">
            <h4 className="card-title">
              <div className="mb-2" style={{ fontSize: "18px" }}>
                <span className="fw-bold">Email</span>:{" "}
                {data.data.email ? data.data.email : "Undefined"}{" "}
                <span> - </span>
                <a
                  href={`mailto:${data.data.email}?subject=Hello&body=Hi ${data.data.username},`}
                  style={{ color: "black" }}
                >
                  Send Email
                </a>
              </div>
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
