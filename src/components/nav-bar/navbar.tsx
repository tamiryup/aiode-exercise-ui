import React from "react";
import "./navbar.css";

interface NavBarProps {
  onAddTrack?: any;
}

export function NavBar({ onAddTrack, ...props }: NavBarProps) {
  return (
    <div className="nav-container">
      <button className="add-track invisible"></button>
      <div className="title-text">Mini Music Library Web Application</div>
      <button className="add-track" onClick={onAddTrack}>
        ADD TRACK
      </button>
    </div>
  );
}
