import "./App.css";
import PromptList from "./components/PromptList/PromptList";
import FolderBar from "./components/FolderBar/FolderBar";
import PromptForm from "./components/PromptForm/PromptForm";
import { PromptContextProvider } from "./PromptContext";

function App() {
  return (
    <div className="App">
      <div className="NavRow">Nav Row Placeholder</div>
      <FolderBar />
      <PromptContextProvider>
        <>
          <PromptList />
          <PromptForm />
        </>
      </PromptContextProvider>
    </div>
  );
}

export default App;
