import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SongsPage } from "pages/songs.page";
import { NavBar } from "components/nav-bar/navbar";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <SongsPage />
    </div>
  );
}

export default App;
