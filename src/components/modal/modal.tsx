import React from "react";
import "./modal.css";
import { useState } from "react";

interface ModalProps {
  setIsOpen(isOpen: boolean): any;
}

export function Modal({ setIsOpen, ...props }: ModalProps) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");

  return (
    <div className="modal-container">
      <div className="dark-bg" onClick={() => setIsOpen(false)}></div>
      <div className="solid-center">
        <form className="song-form">
          <div className="field-container">
            <h2 className="title-text">Song Title</h2>
            <input
              type="text"
              placeholder="Song Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></input>
          </div>
          <div className="field-container">
            <h2 className="title-text">Artist Name</h2>
            <input
              type="text"
              placeholder="Artist Name"
              value={artist}
              onChange={(event) => setArtist(event.target.value)}
            ></input>
          </div>
          <div className="field-container">
            <h2 className="title-text">Genre</h2>
            <input
              type="text"
              placeholder="Genre"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
            ></input>
          </div>
        </form>
        <div className="bottom-container">
          <button className="cancel" onClick={() => setIsOpen(false)}>
            CANCEL
          </button>
          <button className="done">DONE</button>
        </div>
      </div>
    </div>
  );
}
