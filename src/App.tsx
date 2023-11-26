import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SongsPage } from "pages/songs.page";
import { NavBar } from "components/nav-bar/navbar";
import { Modal } from "components/modal/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="wrapper"
        style={{ overflowY: isOpen ? "hidden" : "scroll" }}
      >
        <NavBar
          onAddTrack={() => {
            setIsOpen(true);
          }}
        />
        <SongsPage />
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}

export default App;
