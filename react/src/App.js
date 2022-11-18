import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./component/Main.js";
import Bom from './component/Bom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/bom" element={<Bom />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
