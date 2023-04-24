import React from "react";

const debug = false;

const CourseInfo = ({ course }) => {
  debug && console.log("[CourseInfo] course", course);

  return (
    <div className="align-items-center mt-4">
      {/* <div className="position-relative">
                {course && (
                    <img className="profile-banner-relative-pos" src={`/images/${course.bannerImage}`} height={300} alt="banner-image"/>
                )}
            </div> */}
      {/* <YoutubeVideoSearchResult searchTerm={"web development"} /> */}

      <br />
      <div className="ms-2 me-3 fw-bold">Credit Hour(s)</div>
      {course && <div className="ms-3 me-3 fw-normal">{course.creditHour}</div>}
      <div className="ms-2 me-3 fw-bold">Instructor(s)</div>
      {course && (
        <div className="ms-3 me-3 fw-normal">
          {course.professors.map((professor, index) =>
            displayList(professor, index, course.professors.length)
          )}
        </div>
      )}
      <div className="ms-2 me-3 fw-bold">Location(s)</div>
      {course && (
        <div className="ms-3 me-3 fw-normal">
          {course.locations.map((location, index) =>
            displayList(location, index, course.locations.length)
          )}
        </div>
      )}
      <div className="ms-2 me-3 fw-bold">Instructional Method(s)</div>
      {course && (
        <div className="ms-3 me-3 fw-normal">
          {course.instructionalMethods.map((instructionalMethod, index) =>
            displayList(
              instructionalMethod,
              index,
              course.instructionalMethods.length
            )
          )}
        </div>
      )}
      <div className="ms-2 me-3 fw-bold">Description</div>
      {course && (
        <div className="ms-3 me-3 fw-normal">{course.description}</div>
      )}
    </div>
  );
};

const displayList = (item, index, length) => {
  return (
    <span>
      {item}
      {index !== length - 1 ? ", " : ""}
    </span>
  );
};

export default CourseInfo;
