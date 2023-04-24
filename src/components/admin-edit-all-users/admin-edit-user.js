import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../header";

const debug = false;

const AdminEditUser = () => {
  const { currentUser } = useSelector((state) => state.users);
  debug && console.log("currentUser", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  const { userid } = useParams();

  const { isLoading, error, data } = useQuery("user", async () => {
    return axios
      .get(
        process.env.BASE_API
          ? `${process.env.BASE_API}/api/users/id/${userid}`
          : `http://localhost:4001/api/users/id/${userid}`
      )
      .then((response) => {
        console.log("Loding all users use react-query", response.data);
        return response.data;
      });
  });

  return (
    <>
      <Header />
      <div className="container">
        {!isLoading && data && (
          <div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={data.username}
              />
              <label for="floatingInput">User Name</label>
            </div>
            <div>email {data.email}</div>
            <div>Date of Birth {data.dateOfBirth}</div>
            <div>Role {data.role}</div>
            <div>Bio {data.bio}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminEditUser;
