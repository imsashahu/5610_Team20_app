import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "../review-card";

const ProfilePosts = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("currentUser", currentUser);
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:4001/reviews/${currentUser._id}`)
      .then((posts) => {
        setPosts(posts);
        return posts;
      });
  }, []);
  console.log(posts);

  return (
    <>
      {/* Demo all posts written by current user in group */}
      <div className="card container border-white">
        <div className="card-body">
          <div className="fw-bold mb-2" style={{ fontSize: "18px" }}>
            Post Summary
          </div>

          <div className="fs-1 justify-content-around align-items-center">
            {posts && posts.data.map((post) => <ReviewCard review={post} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePosts;
