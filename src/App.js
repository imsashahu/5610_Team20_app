import React from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { Route, createRoutesFromElements, RouterProvider } from "react-router";
import Home from "./components/home";
import Details from "./components/details";
import Profile from "./components/profile";
import Search from "./components/search";
import Login from "./components/login";
import Signup from "./components/signup";
import SearchCourse from "./components/searchcourse/index.js";
import axios from "axios";
import CoursePage from "./components/course-page";
import EditProfile from "./components/profile/edit-profile";
import { Provider } from "react-redux";
import profileReducer from "./components/profile/profile-reducer.js";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users-reducer"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/courses/:courseNumber"
        element={<CoursePage />}
        loader={async ({ params, request }) => {
          let axiosUrl = `http://localhost:4001/courses/${params.courseNumber}`;
          return axios.get(axiosUrl).then((res) => {
            console.log("courses", res.data);
            return res;
          });
        }}
      />
      <Route
        path="/courses"
        element={<SearchCourse />}
        loader={async ({ request }) => {
          let url = new URL(request.url);
          let searchTerm = url.searchParams.get("q");
          console.log("searchTerm", searchTerm);
          let axiosUrl =
            searchTerm === null
              ? `http://localhost:4001/courses`
              : `http://localhost:4001/courses/${searchTerm}`;
          return axios.get(axiosUrl).then((res) => {
            console.log("courses", res.data);
            return res;
          });
        }}
      />
      <Route path="/profile/edit-profile" element={<EditProfile />} />
      {/* <Route
        path="/search"
        element={<Search />}
        loader={async ({ request }) => {
          let url = new URL(request.url);
          let searchTerm = url.searchParams.get("q")?.trim();
          let queryParam = searchTerm?.split(" ").join("+");
          return await fetch(
            `https://openlibrary.org/search.json?q=${queryParam}`
          )
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Network response was not ok.");
            })
            .then((data) => {
              // Do something with the data, such as displaying it on the page or manipulating it
              console.log(data);
              return data;
            })
            .catch((error) => {
              // Handle errors that may have occurred during the request or response
              console.error("Error:", error);
            });
        }}
        action={async ({ request }) => {
          return redirect(`/search`);
        }}
      /> */}
    </>
  )
);

const store = configureStore({
  reducer: {
    profile: profileReducer,
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
