import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery("profile", async () => {
    return axios
      .get(
        `${process.env.BASE_API}/courses/sorted/rate` ||
          "http://localhost:4001/courses/sorted/rate"
      )
      .then((response) => {
        console.log("Loding data use react-query", response.data);
        return response.data;
      });
  });

  return (
    <div className="fs-5">
      {!isLoading && (
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
            {data.map((course) => (
              <tr
                key={course.courseNumber}
                onClick={() => {
                  console.log("click row");
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
                  {course.averageRate.toFixed(1)}
                </td>
                <td style={{ textAlign: "right" }}>{course.numOfReviews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CourseList;
