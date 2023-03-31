import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Form } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {/* a svg logo */}
          {/* <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap" />
            </svg>
          </a> */}

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/details" className="nav-link px-2 text-white">
                Details
              </Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link px-2 text-white">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/courses" className="nav-link px-2 text-white">
                Search Course
              </Link>
            </li>
          </ul>

          <Form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            type="text"
            method="get"
            action="/search"
          >
            <input
              type="text"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
              name="q"
            />
          </Form>

          <div className="text-end">
            <Link
              type="button"
              className="btn btn-outline-light me-2"
              to="/login"
            >
              Login
            </Link>
            <Link type="button" className="btn btn-warning" to="/signup">
              Sign-up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
