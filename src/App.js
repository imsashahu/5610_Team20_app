import React from "react";
import "./App.css";
import { createBrowserRouter, redirect } from "react-router-dom";
import {
  Route,
  Routes,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Home from "./components/home";
import Details from "./components/details";
import Profile from "./components/profile";
import Search from "./components/search";
import Login from "./components/login";
import Signup from "./components/signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/search"
        element={<Search />}
        loader={async ({ request }) => {
          let url = new URL(request.url);
          let searchTerm = url.searchParams.get("q");
          console.log("q", searchTerm);
          return searchTerm;
        }}
        action={async ({ request }) => {
          return redirect(`/search`);
        }}
      />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
