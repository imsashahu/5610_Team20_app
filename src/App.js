import React from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { Route, createRoutesFromElements, RouterProvider } from "react-router";
import Home from "./components/home";
import Details from "./components/details";
import Profile from "./components/profile";
import ProfileUID from "./components/profile-uid";
import Search from "./components/searchcourse";
import Login from "./components/login";
import Signup from "./components/signup";
import axios from "axios";
import CoursePage from "./components/course-page";
import EditProfile from "./components/profile/edit-profile";
import EditCourse from "./components/course-page/edit-course";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users-reducer";
import AddReview from "./components/add-review";
import { search } from "fontawesome";
import { QueryClient, QueryClientProvider } from "react-query";
import { getYoutubeVideos } from "./utils";
import YoutubeVideoSearchResult from "./components/youtube-video-search-result";

const debug = false;

const getCourseReviews = async (searchTerm) => {
  let axiosUrl = process.env.BASE_API
    ? `${process.env.BASE_API}/courses/${searchTerm}`
    : `http://localhost:4001/courses/${searchTerm}`;
  return axios.get(axiosUrl).then((res) => {
    debug && console.log("[getCourseReviews] courses", res.data);
    return res;
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
          debug && console.log("uid", params.uid);
          let axiosUrl = process.env.BASE_API
            ? `${process.env.BASE_API}/api/users/id/${params.uid}`
            : `http://localhost:4001/api/users/id/${params.uid}`;
          return axios.get(axiosUrl).then((res) => {
            debug && console.log("UID", res.data);
            return res;
          });
        }}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/details/:courseNumberInPath"
        element={<CoursePage />}
        loader={async ({ params, request }) => {
          let axiosUrl = process.env.BASE_API
            ? `${process.env.BASE_API}/courses/${params.courseNumberInPath}`
            : `http://localhost:4001/courses/${params.courseNumberInPath}`;
          return axios.get(axiosUrl).then((res) => {
            debug && console.log("courses", res.data);
            return res;
          });
        }}
      />
      <Route path="details/:courseNumber/add-review" element={<AddReview />} />
      <Route path="add-review" element={<AddReview />} />
      <Route path=":courseNumberInPath/edit-course" element={<EditCourse />} />
      <Route
        path="/search"
        element={<Search />}
        loader={async ({ request }) => {
          let url = new URL(request.url);
          let searchTerm = url.searchParams.get("q");
          debug && console.log("loader searchTerm", searchTerm);
          if (searchTerm === null) {
            debug && console.log("searchTerm is null");
            return {};
          }
          let courseReviews = await getCourseReviews(searchTerm);
          let courseName = courseReviews.data[0].courseName;
          let youtubeVideos = await getYoutubeVideos(debug, courseName);
          let res = { courseReviews, youtubeVideos };
          debug && console.log("res", res);
          return res;
        }}
      />
      <Route path="/profile/edit-profile" element={<EditProfile />} />
      {/* <Route
        path="/youtube/:searchTermInPath"
        element={<YoutubeVideoSearchResult searchTerm={"fly in the web"} />}
      /> */}
    </>
  )
);

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
