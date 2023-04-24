import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery(
    "courses-sorted-by-avg-rate",
    async () => {
      return axios
        .get(
          process.env.REACT_APP_BASE_API
            ? `${process.env.REACT_APP_BASE_API}/courses/sorted/rate`
            : "http://localhost:4001/courses/sorted/rate"
        )
        .then((response) => {
          console.log("Loding data use react-query", response.data);
          response.data.forEach((course) => {
            console.log("type", typeof course.averageRate);
          });
          return response.data;
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  );

  return (
    <div className="fs-5">
      {!isLoading && data && (
        <table className="table table-hover text-dark">
          <thead>
            <tr>
              <th scope="col">Course Number</th>
              <th scope="col">Name</th>
              <th scope="col">Average Rate</th>
              <th scope="col">Reviews</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((course, index) => {
                console.log("course", index, course);

                return (
                  <tr
                    key={course.courseNumber}
                    onClick={() => {
                      navigate(`/details/${course.courseNumber}`);
                    }}
                    style={{
                      cursor: "pointer",
                      textAlign: "right",
                    }}
                  >
                    {/* <Link
            to={`/details/${course.courseNumber}`}
            className="text-dark"
          > */}
                    <td scope="row">{course.courseNumber}</td>
                    <td>{course.courseName}</td>
                    <td style={{ textAlign: "right" }}>
                      {course.averageRate.toFixed(2)}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {course.numOfReviews}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CourseList;
