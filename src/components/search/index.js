import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../header";

const SearchComponent = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Header />
      <div className="container">
        <h4>Search</h4>
        {data.length === 0 ? "No Search Keyword" : `Search Keyword: ${data}`}
      </div>
    </>
  );
};

export default SearchComponent;
