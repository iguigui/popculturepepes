import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Rooter = () => {
  return (
    <Routes>
      {/* Nested Router /:gallery/:token */}
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default Rooter;
