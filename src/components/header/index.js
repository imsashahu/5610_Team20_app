import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../services/users/users-thunks";

const Header = () => {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
              {currentUser && (
                  <Link to="/profile" className="nav-link px-2 text-white">
                    Hello {currentUser.username}!
                  </Link>
              )}
            </li>
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="nav-link px-2 text-white">
                Search
              </Link>
            </li>
          </ul>

          <div className="text-end">
            {!currentUser && (
              <div>
                <Link
                  type="button"
                  className="btn btn-outline-light me-2"
                  to="/login"
                >
                  Login
                </Link>
                <Link type="button" className="btn btn-warning" to="/signup">
                  <div>Sign-up</div>
                </Link>
              </div>
            )}

            {currentUser && (
              <button
                className="btn btn-danger d-flex justify-content-center align-items-center"
                onClick={() => {
                  dispatch(logoutThunk());
                  navigate("/");
                }}
              >
                <div>Logout</div>
              </button>
            )}

            {/* tested avatar */}
            {/* {currentUser && (
              <div class="dropdown text-end">
                <a
                  href="#"
                  className="d-block link-dark text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/images/anonymous-avatar.webp"
                    alt="mdo"
                    width="48"
                    height="48"
                    className="rounded-circle"
                  />
                </a>
                <ul className="dropdown-menu text-small">
                  <li>
                    <button className="dropdown-item ">
                      <Link
                        to="/profile"
                        className="nav-link px-2 text-dark d-flex justify-content-center align-items-center"
                      >
                        Profile
                      </Link>
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item d-flex justify-content-center align-items-center"
                      onClick={() => {
                        dispatch(logoutThunk());
                        navigate("/");
                      }}
                    >
                      <div>Logout</div>
                    </button>
                  </li>
                </ul>
              </div>
            )} */}

            {/*<Link*/}
            {/*  type="button"*/}
            {/*  className="btn btn-outline-light me-2"*/}
            {/*  to="/login"*/}
            {/*>*/}
            {/*  Login*/}
            {/*</Link>*/}
            {/*<Link type="button" className="btn btn-warning" to="/signup">*/}
            {/*  Sign-up*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
