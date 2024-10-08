import { useContext } from "react";
import { ModalContextInterface } from "../../types";
import { ModalContext } from "../../Context/ModalContext";
import CreateDropdown from "./Views/CreateDropdown/CreateDropdown";
import EditDropdown from "./Views/EditDropdown/EditDropdown";
import "./Modal.scss";

const ModalViews = {
  createDropdown: <CreateDropdown />,
  editDropdown: <EditDropdown />,
};

function Modal() {
  const { setShowModal, modalType, showModal } = useContext(
    ModalContext
  ) as ModalContextInterface;
  return (
    <>
      {showModal && (
        <div className="ModalBackground">
          <div className="ModalContent">
            <button
              className="CloseModalButton"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <div className="ModalView">
              {ModalViews[modalType as keyof typeof ModalViews]}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
