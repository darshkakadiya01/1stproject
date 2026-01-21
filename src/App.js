import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />

      <Routes>
        
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
