import React from "react";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
