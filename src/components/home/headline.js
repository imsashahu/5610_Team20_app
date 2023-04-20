import React from "react";

const Headline = () => {
  return (
    <div className="fw-bold display-4 mt-5 mb-5 text-dark">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <img
          src="/images/wikis-icon.png"
          width={48}
          height={48}
          className="me-3"
        />
        Rate Your Courses
      </div>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <img
          src="/images/projects-icon.png"
          width={48}
          height={48}
          className="me-3"
        />
        Find Your Next Courses
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="/images/docs-icon.png"
          width={48}
          height={48}
          className="me-3"
        />
        Boost Your Learning
      </div>
    </div>
  );
};

export default Headline;
