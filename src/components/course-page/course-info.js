import React, {useEffect, useState} from "react";
import axios from "axios";

const CourseInfo = ({ courseNumber }) => {
    const [course, setCourse] = useState();
    useEffect(() => {
        axios
            .get(`http://localhost:4001/courses/${courseNumber}`)
            .then((response) => {
                setCourse(response.data[0]);
                return response.data[0];
            });
    }, [courseNumber]);

    console.log(`http://localhost:4001/courses/${courseNumber}`);
    console.log("[CourseInfo] courseNumber", courseNumber);
    console.log("[CourseInfo] course", course);

    return(
        <div className="align-items-center mt-4">
            <div className="position-relative">
                <img className="profile-banner-relative-pos" src={`/images/polyglot.png`} height={300} alt="profile-banner"/>
            </div>

            <br/>
            <div className="ms-2 me-3 fw-bold">Credit Hour(s)</div>
            {course && (
                <div className="ms-3 me-3 fw-normal">{course.creditHour}</div>
            )}
            <div className="ms-2 me-3 fw-bold">Instructor(s)</div>
            {course && (
                <div className="ms-3 me-3 fw-normal">{course.professors[0]}</div>
            )}
            <div className="ms-2 me-3 fw-bold">Location(s)</div>
            {course && (
                <div className="ms-3 me-3 fw-normal">{course.locations[0]}</div>
            )}
            <div className="ms-2 me-3 fw-bold">Instructional Method(s)</div>
            {course && (
                <div className="ms-3 me-3 fw-normal">{course.instructionalMethods[0]}</div>
            )}
            <div className="ms-2 me-3 fw-bold">Description</div>
            {course && (
                <div className="ms-3 me-3 fw-normal">{course.description}</div>
            )}
            <br/>
            <div className="ms-2 me-3 fw-bold">Student Review(s)</div>
        </div>
    );
};

export default CourseInfo;