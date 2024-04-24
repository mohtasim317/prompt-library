import { ModalPropsType } from "../../types";
import CreateDropdown from "./Views/CreateDropdown/CreateDropdown";
import "./Modal.scss";

const ModalViews = {
  createDropdown: <CreateDropdown />,
  editDropdown: <EditDropdown />,

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
