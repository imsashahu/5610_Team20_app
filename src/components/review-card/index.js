import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  profileThunk,
  findUserByIdThunk,
} from "../../services/users/users-thunks";
import { deleteReview } from "../../services/reviews/reviews-service";

const ReviewCard = ({ review }) => {
  const { currentUser } = useSelector((state) => state.users);
  const [user, setUser] = useState();
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    axios
      .get(
        `${process.env.BASE_API}/api/users/id/${review.postedBy}` ||
          `http://localhost:4001/api/users/id/${review.postedBy}`
      )
      .then((user) => {
        setUser(user);
        return user;
      });
  }, []);

  console.log("[ReiewCard] currentUser", currentUser);
  console.log(review);

  return (
    <>
      {!isDeleted && (
        <div
          className="card text-bg-light border-light mb-3"
          style={{ width: "100%" }}
        >
          <div className="card-header" style={{ fontSize: "15px" }}>
            <div className="card-text d-flex justify-content-between">
              <span>
                Prof. {review.professor},{" "}
                <a
                  href={`/details/${review.courseNumber}`}
                  style={{ color: "black" }}
                >
                  {review.courseNumber}
                </a>
              </span>

              {currentUser && currentUser.role === "ADMIN" && (
                <button
                  className="btn btn-danger"
                  onClick={async () => {
                    await deleteReview(review);
                    setIsDeleted(true);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          </div>

          <div className="card-body">
            <div className="card-text mb-2" style={{ fontSize: "15px" }}>
              {review.review}
            </div>

            <div
              className="card-text d-flex justify-content-between fw-bold"
              style={{ fontSize: "15px" }}
            >
              <span>
                Rate{" "}
                <span
                  className="badge text-dark rounded-pill ps-3 pe-3 ms-2"
                  style={{ fontSize: "16px", backgroundColor: "lightgrey" }}
                >
                  {review.rate}
                </span>
              </span>

              <span>
                Easiness{" "}
                <span
                  className="badge text-dark rounded-pill ps-3 pe-3 ms-2"
                  style={{ fontSize: "16px", backgroundColor: "lightgrey" }}
                >
                  {review.easiness}
                </span>
              </span>

              <span>
                Usefulness{" "}
                <span
                  className="badge text-dark rounded-pill ps-3 pe-3 ms-2"
                  style={{ fontSize: "16px", backgroundColor: "lightgrey" }}
                >
                  {review.usefulness}
                </span>
              </span>
            </div>
          </div>

          <div
            className="card-footer"
            style={{ fontSize: "12px", textAlign: "right" }}
          >
            <span>Posted by: @</span>
            {user && currentUser && user.data._id === currentUser._id && (
              <a href={`/profile`} style={{ color: "black" }}>
                {user.data.username}
              </a>
            )}
            {user && currentUser && user.data._id !== currentUser._id && (
              <a
                href={`/profile/${review.postedBy}`}
                style={{ color: "black" }}
              >
                {user.data.username}
              </a>
            )}
            {user && !currentUser && (
              <a
                href={`/profile/${review.postedBy}`}
                style={{ color: "black" }}
              >
                {user.data.username}
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewCard;
