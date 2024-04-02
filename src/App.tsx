import "./App.css";
import PromptList from "./components/PromptList/PromptList";
import FolderAndDropdownSection from "./components/FolderAndDropdownSection/FolderAndDropdownSection";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import PromptForm from "./components/PromptForm/PromptForm";
import { PromptContextProvider } from "./Context/PromptContext";
import { DropdownContextProvider } from "./Context/DropdownContext";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <DropdownContextProvider>
      <div className="App">
        <div className="NavRow">Nav Row Placeholder</div>
        <FolderAndDropdownSection setShowModal={setShowModal} />
        <PromptContextProvider>
          <>
            <PromptList />
            <PromptForm />
            {showModal && (
              <Modal type="createDropdown" setShowModal={setShowModal} />
            )}
          </>
        </PromptContextProvider>
      </div>
    </DropdownContextProvider>
  );
}

export default App;
