import React, { useEffect, useState } from "react";
import "./App.css";
import { SongsPage } from "pages/songs.page";
import { NavBar } from "components/nav-bar/navbar";
import { Modal } from "components/modal/modal";
import { getSongs } from "store/songs/songs.slice";
import { useAppDispatch } from "hooks/hooks";

function App() {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

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
