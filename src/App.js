import React from "react";
import "./App.css";
import { createBrowserRouter, redirect } from "react-router-dom";
import { Route, createRoutesFromElements, RouterProvider } from "react-router";
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
          let searchTerm = url.searchParams.get("q")?.trim();
          let queryParam = searchTerm.split(" ").join("+");
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
