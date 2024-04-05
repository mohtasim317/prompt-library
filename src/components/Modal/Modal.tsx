import { ModalPropsType } from "../../types";
import CreateDropdown from "./Views/CreateDropdown/CreateDropdown";
import "./Modal.css";

const ModalViews = {
  createDropdown: <CreateDropdown />,
};

function Modal({ setShowModal, type }: ModalPropsType) {
  return (
    <div className="ModalBackground">
      <div className="ModalContent">
        <button
          className="CloseModalButton"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <div className="ModalView">
          {ModalViews[type as keyof typeof ModalViews]}
        </div>
      </div>
    </div>
  );
}

export default Modal;
