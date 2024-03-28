import { ModalPropsType } from "../../types";
import "./Modal.css";

const obj = {
  createDropdown: <button>asd</button>,
};

function Modal({ setShowModal, type }: ModalPropsType) {
  return (
    <div className="ModalBackground">
      <div className="ModalContent">
        <button onClick={() => setShowModal(false)}>Close</button>
        {obj[type as keyof typeof obj]}
      </div>
    </div>
  );
}

export default Modal;
