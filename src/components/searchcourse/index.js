import React from "react";
import Header from "../header";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const SearchCourse = () => {
  const data = useLoaderData();
  console.log("SearchCourse data", data);

  return (
    <>
      <Header />
      <div className="container">
        <div className="fs-1 d-flex justify-content-center align-items-center mt-4">
          NEU Seattle Campus Course Reviews
        </div>
        <Form
          className="col-12 col-lg-auto mt-3 mb-3 mb-lg-0 me-lg-3"
          type="text"
          method="get"
          action="/searchcourse"
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

        <div className="list-group">
          {data.data !== null || data.data.length === 0
            ? data.data.map((course) => (
                <li className="list-group-item" key={course._id}>
                  {course.courseNumber}
                </li>
              ))
            : "No course found."}
        </div>
      </div>
    </>
  );
};

export default SearchCourse;
