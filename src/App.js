import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='Movie' element={<Detail />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
