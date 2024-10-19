import { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const modal = (
    <div className="modal-overlay" onClick={() => onClose()}>
      <div className="modal-content">{children}</div>;
    </div>
  );

  const modalContainer = document.getElementById("modal-root")!;

  return createPortal(modal, modalContainer);
};
