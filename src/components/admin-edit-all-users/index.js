import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const debug = false;

const AdminEditAllUsers = () => {
  const { currentUser } = useSelector((state) => state.users);
  debug && console.log("currentUser", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  const { isLoading, error, data } = useQuery("all-users", async () => {
    return axios
      .get(
        process.env.BASE_API
          ? `${process.env.BASE_API}/api/users`
          : "http://localhost:4001/api/users"
      )
      .then((response) => {
        console.log("Loding all users use react-query", response.data);
        return response.data;
      });
  });

  const navigate = useNavigate();

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data &&
            data.map((user, index) => (
              <tr className="fs-6">
                <th>{index}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/admin/edit-user/${user._id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminEditAllUsers;
