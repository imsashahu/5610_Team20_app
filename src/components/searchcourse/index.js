import React from "react";
import Header from "../header";
import { Link, useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const SearchCourse = () => {
  const data = useLoaderData();
  console.log("SearchCourse data", data);

  return (
    <>
      <Header />
      <div className="container">
        <div className="fs-1 d-flex justify-content-around align-items-center mt-4">
          <div>NEU Seattle Campus Course Reviews</div>
        </div>
        <Form
          className="col-12 col-lg-auto mt-3 mb-3 mb-lg-0 me-lg-3"
          type="text"
          method="get"
          action="/courses"
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="course"
              placeholder="cs5610"
              aria-label="Search"
              name="q"
            />
            <label htmlFor="course">Search Course by Course Number</label>
          </div>
        </Form>

        {data.data !== null || data.data.length === 0 ? (
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
          "No course found."
        )}
      </div>
    </>
  );
};

export default SearchCourse;
