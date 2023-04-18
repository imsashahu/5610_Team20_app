import React from "react";
import "./App.css";

import axios from "axios";
import { Provider } from "react-redux";
import usersReducer from "./reducers/users-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { createBrowserRouter } from "react-router-dom";
import { Route, createRoutesFromElements, RouterProvider } from "react-router";

import Home from "./components/home";
import Details from "./components/details";
import Profile from "./components/profile";
import ProfileUID from "./components/profile-uid";
import Search from "./components/searchcourse";
import Login from "./components/login";
import Signup from "./components/signup";
import CoursePage from "./components/course-page";
import EditProfile from "./components/profile/edit-profile";
import AddReview from "./components/add-review";

// get course reviews given a course number(e.g. search on "5610" should return all reviews for CS5610)
const getCourseReviews = async (searchTerm) => {
  let axiosUrl = `http://localhost:4001/courses/${searchTerm}`;
  return axios.get(axiosUrl).then((res) => {
    console.log("[getCourseReviews] courses", res.data);
    return res;
  });
};

// get related youtube videos given a course number(e.g. search on "5610" should return 5 related youtube videos for CS5610 web development)
const getYoutubeVideos = async (searchTerm) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&key=${apiKey}`;
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

// only data router can load data in Route's loader
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />

      {/* details */}
      <Route path="/details" element={<Details />} />
      <Route path="details/:courseNumber/add-review" element={<AddReview />} />
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

      {/* profile */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit-profile" element={<EditProfile />} />
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

      {/* registration and authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* search */}
      <Route
        path="/search"
        element={<Search />}
        loader={async ({ request }) => {
          let url = new URL(request.url);
          let searchTerm = url.searchParams.get("q");
          console.log("loader searchTerm", searchTerm);
          if (searchTerm === null) {
            console.log("searchTerm is null");
            return {};
          }
          let courseReviews = await getCourseReviews(searchTerm);
          let youtubeVideos = await getYoutubeVideos(searchTerm);
          let res = { courseReviews, youtubeVideos };
          console.log("res", res);
          return res;
        }}
      />
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
