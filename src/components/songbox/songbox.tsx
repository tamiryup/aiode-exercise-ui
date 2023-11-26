import React from "react";
import "./songbox.css";

interface SongBoxProps {
  title?: string;
  artist?: string;
  genre?: string;
}

export function SongBox({ title, artist, genre, ...props }: SongBoxProps) {
  return (
    <div className="songbox-container">
      <div className="song-container">
        <h3 className="title">{title}</h3>
        <h6 className="artist">by {artist}</h6>
      </div>
      <div className="genre-container">{genre?.toLocaleUpperCase()}</div>
    </div>
  );
}
