import { ModalPropsType } from "../../types";
import "./Modal.css";

function Modal({ setShowModal }: ModalPropsType) {
  return (
    <div className="ModalBackground">
      <div className="ModalContent">
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
