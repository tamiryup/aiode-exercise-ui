import React from "react";
import "./songs.page.css";
import { SongBox } from "components/songbox/songbox";
import { useAppSelector } from "hooks/hooks";
import { songsState } from "store/songs/songs.slice";
import { Song } from "store/songs/types";

export function SongsPage() {
  const { songs } = useAppSelector(songsState);

  return (
    <div className="content-wrapper">
      <div className="songs">
        {songs.map((song: Song, index) => {
          return (
            <SongBox
              key={index}
              title={song.title}
              artist={song.artist}
              genre={song.genre}
            />
          );
        })}
      </div>
    </div>
  );
}
