import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
      <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
