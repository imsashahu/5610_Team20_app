import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { useQuery } from "react-query";
import axios from "axios";

const AdminLoggedInHome = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("currentUser", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  const { isLoading, error, data } = useQuery("profile", async () => {
    return axios.get(" http://localhost:4001/api/users").then((response) => {
      console.log("Loding data use react-query", response.data);
      return response.data;
    });
  });

  return (
    <>
      {" "}
      <div className="d-flex flex-column justify-content-center align-items-center fs-3 mt-5">
        <div>TODO: implement admin logged-in home page</div>
        {/* All users */}
        <div>
          <ul className="list-group">
            {data.map((user) => (
              <li className="list-group-item fs-6">{user.username}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminLoggedInHome;
