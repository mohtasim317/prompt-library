import { useState } from "react";
import { PromptContextProvider } from "./Context/PromptContext";
import { DropdownContextProvider } from "./Context/DropdownContext";
import {
  FolderAndDropdownSection,
  Modal,
  PromptForm,
  PromptList,
} from "./components/Components";
import "./App.scss";
import { ModalTypes } from "./types";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalTypes>("");
  return (
    <DropdownContextProvider>
      <div className="App">
        <div className="NavRow">Nav Row Placeholder</div>
        <FolderAndDropdownSection
          setShowModal={setShowModal}
          setModalType={setModalType}
        />
        <PromptContextProvider>
          <>
            <PromptList />
            <PromptForm />
            {showModal && (
              <Modal type={modalType} setShowModal={setShowModal} />
            )}
          </>
        </PromptContextProvider>
      </div>
    </DropdownContextProvider>
  );
}

export default App;
