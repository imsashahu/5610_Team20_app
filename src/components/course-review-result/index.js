import React from "react";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../../utils";

const CourseReviewResult = ({ courseReviews }) => {
  const navigate = useNavigate();
  return (
    <>
      {!isEmpty(courseReviews) && (
        <table className="table table-hover text-dark">
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
              <tr
                key={course.courseNumber}
                onClick={() => {
                  console.log("click row");
                  navigate(`/details/${course.courseNumber}`);
                }}
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <td>{course.courseNumber}</td>
                <td>{course.courseName}</td>
                <td>{course.professors[0]}</td>
                <td style={{ textAlign: "center" }}>
                  {course.averageRate.toFixed(1)}
                </td>
                <td style={{ textAlign: "center" }}>{course.numOfReviews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CourseReviewResult;
