import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Sidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2];
  console.log("active:", active);

  return (
    <div className="list-group border-1">
      <a className="list-group-item">RateProf</a>
      <Link
        to="/"
        className={`border-0 list-group-item list-group-item-action d-flex align-items-center list-group-item ${
          active === undefined ? "active" : ""
        }`}
      >
        Home
      </Link>

      <Link
        to="/login"
        className={`border-0 list-group-item list-group-item-action d-flex align-items-center list-group-item ${
          active === "login" ? "active" : ""
        }`}
      >
        Login
      </Link>

      <Link
        to="/profile"
        className={`border-0 list-group-item list-group-item-action d-flex align-items-center list-group-item ${
          active === "profile" ? "active" : ""
        }`}
      >
        Profile
      </Link>

      <Link
        to="/search"
        className={`border-0 list-group-item list-group-item-action d-flex align-items-center list-group-item ${
          active === "search" ? "active" : ""
        }`}
      >
        Search
      </Link>

      <Link
        to="/details"
        className={`border-0 list-group-item list-group-item-action d-flex align-items-center list-group-item ${
          active === "detail" ? "active" : ""
        }`}
      >
        Details
      </Link>
    </div>
  );
};
export default Sidebar;
