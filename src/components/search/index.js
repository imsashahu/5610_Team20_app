import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../header";

const SearchComponent = () => {
  const data = useLoaderData();
  console.log("data", data);
  return (
    <>
      <Header />
      <div className="container">
        <h4>Students' Comments about Course "{data.q}"</h4>
        <h4>Search Result for "{data.q}" from Public Library API</h4>
        <div>
          About {data.numFound === null ? "None" : data.numFound} results
        </div>
        <ul>
          {data.docs.slice(0, 9).map((doc) => (
            <li>{doc.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchComponent;
