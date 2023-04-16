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
            <label htmlFor="course">Search Course</label>
          </div>
        </Form>

        {data.data !== null || data.data.length === 0 ? (
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center align-middle" scope="col">
                  Course Number
                </th>
                <th className="text-center align-middle" scope="col">
                  Name
                </th>
                <th className="text-center align-middle" scope="col">
                  Professors
                </th>
                <th className="text-center align-middle" scope="col">
                  Average Rate
                </th>
                <th className="text-center align-middle" scope="col">
                  Reviews
                </th>
                {/* <th className="text-center align-middle" scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
              {data.data.map((course) => (
                <tr key={course.courseNumber}>
                  <th className="text-center align-middle" scope="row">
                    <Link to={`/courses/${course.courseNumber}`}>
                      {course.courseNumber}
                    </Link>
                  </th>
                  <td className="text-center align-middle text-truncate">
                    {course.courseName}
                  </td>
                  <td className="text-center align-middle">
                    {course.professors[0]}
                  </td>
                  <td className="text-center align-middle">
                    {course.averageRate}
                  </td>
                  <td className="text-center align-middle">
                    {course.numOfReviews}
                  </td>
                  {/* <td className="text-center align-middle">
                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-primary">Edit</button>
                      <button className="btn btn-danger ms-2">Delete</button>
                    </div>
                  </td> */}
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
