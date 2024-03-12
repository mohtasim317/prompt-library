import "./App.css";
import PromptList from "./components/PromptList/PromptList";
import FolderBar from "./components/FolderBar/FolderBar";

function App() {
  return (
    <div className="App">
      <div className="NavRow">Nav Row Placeholder</div>
      <FolderBar />
      <PromptList />
      <div className="Modal">Modal PlaceHolder</div>
    </div>
  );
}

export default App;
