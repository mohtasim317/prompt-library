import "./App.css";
import PromptList from "./components/PromptList/PromptList";
import FolderBar from "./components/FolderBar/FolderBar";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <div className="NavRow">Nav Row Placeholder</div>
      <FolderBar />
      <PromptList setShowModal={setShowModal} />
      <div className="Modal">Modal PlaceHolder</div>
      {showModal && <Modal type="createDropdown" setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
