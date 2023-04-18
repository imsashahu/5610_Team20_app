import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";

const SearchYoutube = () => {
  const [searchTerm, setSearchTerm] = useState();
  const data = useLoaderData();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  return (
    <>
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
            id="youtube"
            aria-label="Search"
            name="q"
            placeholder="5610"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <label htmlFor="youtube">
            Search Youtube Videos by Course Number, e.g. 5610
          </label>
        </div>
      </Form>

      {data !== null && data.data !== null ? (
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
            {data.data.map((course) => (
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
      ) : (
        <>{searchTerm !== undefined ? "No course found." : null}</>
      )}
    </>
  );
};

export default SearchYoutube;
