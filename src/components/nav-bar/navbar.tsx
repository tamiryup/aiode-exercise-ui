import React from "react";
import "./navbar.css";

export function NavBar() {
  return (
    <div className="nav-container">
      <button className="add-track invisible"></button>
      <div className="title-text">Mini Music Library Web Application</div>
      <button className="add-track">ADD TRACK</button>
    </div>
  );
}
