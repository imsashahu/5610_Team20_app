import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import Header from "../header";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const { courseReviews = {}, youtubeVideos = {} } = useLoaderData() ?? {};
  console.log("[SearchCourse] courseReviews", courseReviews);
  console.log("[SearchCourse] youtubeVideos", youtubeVideos);

  const isEmpty = (o) => Object.entries(o).length === 0;

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

        {/* youtube videos */}
        {!isEmpty(youtubeVideos) && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Youtube Channel</th>
                <th scope="col">Youtube Video</th>
              </tr>
            </thead>
            <tbody>
              {youtubeVideos.data.items.map((video) => (
                <tr key={video.id.videoId}>
                  <th scope="row">
                    <a
                      href={`https://www.youtube.com/channel/${video.snippet.channelId}`}
                    >
                      {video.snippet.channelTitle}
                    </a>
                  </th>
                  <td>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    >
                      {video.snippet.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!isEmpty(courseReviews) && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Course Number</th>
                <th scope="col">Name</th>
                <th scope="col">Professors</th>
                <th scope="col">Average Rate</th>
                <th scope="col">Reviews</th>
              </tr>
            </thead>
            <tbody>
              {courseReviews.data.map((course) => (
                <tr key={course.courseNumber}>
                  <th scope="row">
                    <Link to={`/details/${course.courseNumber}`}>
                      {course.courseNumber}
                    </Link>
                  </th>
                  <td>{course.courseName}</td>
                  <td>{course.professors[0]}</td>
                  <td>{course.averageRate}</td>
                  <td>{course.numOfReviews}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Search;
