import React, {useEffect} from "react";
import Header from "../header";
import {useDispatch} from "react-redux";
import {profileThunk} from "../../services/users/users-thunks";

const HomeComponent = () => {
  const dispatch = useDispatch();
  useEffect(()=> {dispatch(profileThunk());
  },[]);
  return (
    <>
      <Header />
      <div className="container">
        <div className="fw-bold mt-2 mb-5">
          <h3>Home</h3>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
