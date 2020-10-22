import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/main/NavBar";
import Home from "./components/Home";
import Event from "./components/Event";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <Event />
    </React.Fragment>
  );
}

export default App;
