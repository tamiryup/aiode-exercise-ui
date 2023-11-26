import React from "react";
import "./songs.page.css";
import { NavBar } from "components/nav-bar/navbar";
import { SongBox } from "components/songbox/songbox";

export function SongsPage() {
  return (
    <div className="content-wrapper">
      <div className="songs">
        <SongBox title="Fire and Rain" artist="James Taylor" genre="Chill" />
        <SongBox title="Fire and Rain" artist="James Taylor" genre="Chill" />
        <SongBox title="Fire and Rain" artist="James Taylor" genre="Chill" />
        <SongBox title="Fire and Rain" artist="James Taylor" genre="Chill" />
        <SongBox title="Fire and Rain" artist="James Taylor" genre="Chill" />
        <SongBox title="Fire and Rain" artist="James Taylor" genre="Chill" />
      </div>
    </div>
  );
}
