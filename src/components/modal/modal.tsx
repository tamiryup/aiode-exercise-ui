import React from "react";
import "./modal.css";

interface ModalProps {
  setIsOpen(isOpen: boolean): any;
}

export function Modal({ setIsOpen, ...props }: ModalProps) {
  return (
    <div className="modal-container">
      <div className="dark-bg" onClick={() => setIsOpen(false)}></div>
      <div className="solid-center">
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
