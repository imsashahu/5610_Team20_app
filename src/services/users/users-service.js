import axios from "axios";
const USERS_API_URL = process.env.REACT_APP_BASE_API
  ? `${process.env.REACT_APP_BASE_API}/api/users`
  : "http://localhost:4001/api/users";

// configure axios to support cookies for passing credentials
const api = axios.create({ withCredentials: true });
export const findAllUsers = async () => {
  const response = await axios.get(USERS_API_URL);
  return response.data;
};

export const findUserById = (id) => {
  return axios.get(`${USERS_API_URL}/${id}`).then((response) => response.data);
};

export const createUser = (user) => {
  return axios.post(USERS_API_URL, user);
};

export const updateUser = (newUser) => {
  return axios.put(`${USERS_API_URL}/${newUser._id}`, newUser);
};

export const deleteUser = (id) => {
  return axios.delete(`${USERS_API_URL}/${id}`);
};

export const login = (user) => {
  return api.post(`${USERS_API_URL}/login`, user);
};

export const logout = () => {
  return api.post(`${USERS_API_URL}/logout`);
};

export const register = (user) => {
  return api.post(`${USERS_API_URL}/register`, user);
};

export const profile = () => {
  return api.get(`${USERS_API_URL}/profile`);
};

export const currentUser = () => {
  return axios.get(`${USERS_API_URL}/current`);
};
