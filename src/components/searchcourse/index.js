import React, {useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import Header from "../header";
import YoutubeVideoResult from "../youtube-video-result";
import CourseReviewResult from "../course-review-result";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/users/users-thunks";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const { courseReviews = {}, youtubeVideos = {} } = useLoaderData() ?? {};
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {/* <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
        <div>NEU Course Reviews</div>
      </div> */}
        <Form
          className="col-12 col-lg-auto mt-3 mb-3 mb-lg-0 me-lg-3"
          type="text"
          method="get"
          action="/search"
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="course"
              aria-label="Search"
              name="q"
              placeholder="5610"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <label htmlFor="course">
              Search Course by Course Number, e.g. 5610
            </label>
          </div>
        </Form>

        {/* course reviews */}
        <CourseReviewResult courseReviews={courseReviews} />
        {/* youtube videos */}
        <YoutubeVideoResult youtubeVideos={youtubeVideos} />
      </div>
    </>
  );
};

export default Search;
