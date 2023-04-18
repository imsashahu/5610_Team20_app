import React from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "../../utils";

const CourseReviewResult = ({ courseReviews }) => {
  return (
    <>
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
    </>
  );
};

export default CourseReviewResult;
