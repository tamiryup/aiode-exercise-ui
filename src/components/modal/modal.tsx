import React from "react";
import "./modal.css";

interface ModalProps {
  setIsOpen(isOpen: boolean): any;
}

export function Modal({ setIsOpen, ...props }: ModalProps) {
  return (
    <div className="modal-container">
      <div className="dark-bg" onClick={() => setIsOpen(false)}></div>
    </div>
  );
}
