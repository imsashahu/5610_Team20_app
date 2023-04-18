import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  profileThunk,
  findUserByIdThunk,
} from "../../services/users/users-thunks";

const ReviewCard = ({ review }) => {
  const { currentUser } = useSelector((state) => state.users);
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:4001/api/users/id/${review.postedBy}`)
      .then((user) => {
        setUser(user);
        return user;
      });
  }, []);

  console.log("[ReiewCard] currentUser", currentUser);

  return (
    <>
      <div className="card text-bg-light mb-2" style={{ width: "100%" }}>
        <div class="card-header text-bg-secondary" style={{ fontSize: "20px" }}>
          Prof. {review.professor},{" "}
          <a
            href={`/details/${review.courseNumber}`}
            style={{ color: "white" }}
          >
            {review.courseNumber}
          </a>
        </div>

        <div className="card-body">
          <h5 class="card-title">{review.review}</h5>
        </div>

        <div class="card-footer" style={{ fontSize: "15px" }}>
          <span>Posted by: @</span>
          {user && currentUser && user.data._id === currentUser._id && (
            <a href={`/profile`} style={{ color: "black" }}>
              {user.data.username}
            </a>
          )}
          {user && currentUser && user.data._id !== currentUser._id && (
            <a href={`/profile/${review.postedBy}`} style={{ color: "black" }}>
              {user.data.username}
            </a>
          )}
          {user && !currentUser && (
            <a href={`/profile/${review.postedBy}`} style={{ color: "black" }}>
              {user.data.username}
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
