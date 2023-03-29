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
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/search/*"
        element={<Search />}
        action={({ request }) => {
          return redirect(`/search`);
        }}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/details" element={<Details />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route
    //       path="/search"
    //       element={<Search />}
    //       action={({ request }) => {
    //         return redirect("/search");
    //       }}
    //     />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
