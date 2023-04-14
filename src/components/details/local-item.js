import React from "react";
import "./index.css";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const LocalItem = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `../profile`;
        navigate(path);
    }
    const description = "Discusses Web development for sites that are dynamic, " +
        "data driven, and interactive. Focuses on the software development issues " +
        "of integrating multiple languages, assorted data technologies, and Web interaction. " +
        "Considers ASP.NET, C#, HTTP, HTML, CSS, XML, XSLT, JavaScript, AJAX, RSS/Atom, SQL, " +
        "and Web services. Each student must deploy individually designed Web experiments that " +
        "illustrate the Web technologies and at least one major integrative Web site project. " +
        "Students may work in teams with the permission of the instructor. Each student or team " +
        "must also create extensive documentation of their goals, plans, design decisions, " +
        "accomplishments, and user guidelines. All source files must be open and be automatically " +
        "served by a sources server."

    // const profile = useSelector(state => state.profile);
    return(
        // content in the middle
        <div className="col-10 col-md-8 col-lg-6 col-xl-6">
            <div className="row">
                {/*<div className="col-1">*/}
                {/*    <i className="bi bi-x-lg" onClick={() => routeChange()}/>*/}
                {/*</div>*/}
                {/*<div className="col-11">*/}
                {/*    <div className="fw-bold" style={{fontSize: 20}}>CS 5610 - 06</div>*/}
                {/*    <div className="fw-semibold" style={{fontSize: 20}}>Web Development</div>*/}
                {/*</div>*/}
            </div>
            <div className="position-relative">
                <img className="profile-banner-relative-pos" src={`/images/polyglot.png`} height={300} alt="profile-banner"/>
                {/*<img  className="position-absolute headshot-relative-pos rounded-circle " height={150} width={150} src={`/images/jose.jpg`} alt="headshot"/>*/}
                {/*<Link to="/tuiter/edit-profile" className="position-absolute btn btn-outline-dark rounded-pill button-relative-pos fw-bold">Edit profile</Link>*/}
            </div>

            {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>*/}

            {/*<div className="ms-4 fw-bold" style={{fontSize: 20}}>CS 5610 - 06</div>*/}
            <div className="ms-2 fw-bold" style={{fontSize: 20}}>CS 5610</div>
            <div className="ms-2 fw-semibold" style={{fontSize: 20}}>Web Development</div>
            <br/>
            <div className="ms-2 me-3 fw-bold">Section</div>
            <div className="ms-3 me-3 fw-normal">06</div>
            <div className="ms-2 me-3 fw-bold">Instructor</div>
            <div className="ms-3 me-3 fw-normal">Jose Annunziato</div>
            <div className="ms-2 me-3 fw-bold">Credit Hour(s)</div>
            <div className="ms-3 me-3 fw-normal">4</div>
            <div className="ms-2 me-3 fw-bold">Campus</div>
            <div className="ms-3 me-3 fw-normal">Boston</div>
            <div className="ms-2 me-3 fw-bold">Instructional Method</div>
            <div className="ms-3 me-3 fw-normal">Online</div>
            <div className="ms-2 me-3 fw-bold">Description</div>
            <div className="ms-3 me-3 fw-normal">{description}</div>
            <div className="ms-2 me-3 fw-bold">Related information from Wikipedia (do we need this?)</div>
            <div className="ms-3 me-3 fw-normal">XXXXXX</div>
            <div className="ms-2 me-3 fw-bold">Student Comments</div>
            <div className="ms-3 me-3 fw-semibold">Student1</div>
            <div className="ms-4 me-3 fw-normal">This is a great course!</div>
            <div className="ms-3 me-3 fw-semibold">Student2</div>
            <div className="ms-4 me-3 fw-normal">The professor is amazing!</div>
            <div className="ms-3 me-3 fw-semibold">Student3</div>
            <div className="ms-4 me-3 fw-normal">Highly recommended!</div>
            {/*<div className="row mt-3 ms-4 me-5" style={{color:'gray'}}>*/}
            {/*    <div className="col-4">*/}
            {/*        <i className="bi bi-pin-map" /> Boston*/}
            {/*    </div>*/}
            {/*    <div className="col-4">*/}
            {/*        <i className="bi bi-balloon" /> Spring 2023*/}
            {/*    </div>*/}
            {/*    <div className="col-4">*/}
            {/*        <i className="bi bi-calendar-event"/> 01/2023*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row mt-2 ms-3">*/}
            {/*    <div className="col-3">*/}
            {/*        <p className="fw-bold">100<span className="fw-light" style={{color:'gray'}}> Following</span></p>*/}
            {/*    </div>*/}
            {/*    <div className="col-3">*/}
            {/*        <p className="fw-bold">200<span className="fw-light" style={{color:'gray'}}> Followers</span></p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default LocalItem;