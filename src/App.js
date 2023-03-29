import React from "react";
import "./App.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Pages from "./pages/index.js";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Pages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
