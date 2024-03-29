import "./App.css";
import PromptList from "./components/PromptList/PromptList";
import FolderBar from "./components/FolderBar/FolderBar";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import PromptForm from "./components/PromptForm/PromptForm";
import { PromptContextProvider } from "./PromptContext";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <div className="NavRow">Nav Row Placeholder</div>
      <FolderBar />
      <PromptContextProvider>
        <>
          <PromptList setShowModal={setShowModal} />
          <PromptForm />
          {showModal && (
            <Modal type="createDropdown" setShowModal={setShowModal} />
          )}
        </>
      </PromptContextProvider>
    </div>
  );
}

export default App;
