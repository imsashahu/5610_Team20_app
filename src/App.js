import React from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { Route, createRoutesFromElements, RouterProvider } from "react-router";
import Home from "./components/home";
import Details from "./components/details";
import Profile from "./components/profile";
import ProfileUID from "./components/profile-uid";
import Search from "./components/search";
import Login from "./components/login";
import Signup from "./components/signup";
import SearchCourse from "./components/searchcourse/index.js";
import axios from "axios";
import CoursePage from "./components/course-page";
import EditProfile from "./components/profile/edit-profile";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users-reducer";
import AddReview from "./components/add-review";

const getCourseReviews = async (searchTerm) => {
  let axiosUrl = `http://localhost:4001/courses/${searchTerm}`;
  return axios.get(axiosUrl).then((res) => {
    console.log("[getCourseReviews] courses", res.data);
    return res;
  });
};

const getYoutubeVideos = async () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}`;
  console.log("youtube, searchTerm is not null");
  return axios
    .get(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      console.log("[getYoutubeVideos]", response.data.items);
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/profile/:uid"
        element={<ProfileUID />}
        loader={async ({ params, request }) => {
          console.log("uid", params.uid);
          let axiosUrl = `http://localhost:4001/api/users/id/${params.uid}`;
          return axios.get(axiosUrl).then((res) => {
            console.log("UID", res.data);
            return res;
          });
        }}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/details/:courseNumber"
        element={<CoursePage />}
        loader={async ({ params, request }) => {
          let axiosUrl = `http://localhost:4001/courses/${params.courseNumber}`;
          return axios.get(axiosUrl).then((res) => {
            console.log("courses", res.data);
            return res;
          });
        }}
      />
      <Route path="details/:courseNumber/add-review" element={<AddReview />} />
      <Route
        path="/search"
        element={<Search />}
        loader={async ({ request }) => {
          let url = new URL(request.url);
          let searchTerm = url.searchParams.get("q");
          console.log("loader searchTerm", searchTerm);
          if (searchTerm === null) {
            console.log("searchTerm is null");
            return null;
          }
          let courseReviews = await getCourseReviews(searchTerm);
          let youtebeVideos = await getYoutubeVideos();
          return courseReviews;
        }}
      />
      <Route path="/profile/edit-profile" element={<EditProfile />} />
    </>
  )
);

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
