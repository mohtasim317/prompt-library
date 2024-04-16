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
