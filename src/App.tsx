import {
  PromptContextProvider,
  DropdownContextProvider,
  ModalContextProvider,
} from "./Context/Contexts";
import {
  FolderAndDropdownSection,
  Modal,
  PromptForm,
  PromptList,
} from "./components/Components";
import "./App.scss";

function App() {
  return (
    <DropdownContextProvider>
      <ModalContextProvider>
        <div className="App">
          <div className="NavRow">Nav Row Placeholder</div>
          <FolderAndDropdownSection />
          <PromptContextProvider>
            <>
              <PromptList />
              <PromptForm />
              <Modal />
            </>
          </PromptContextProvider>
        </div>
      </ModalContextProvider>
    </DropdownContextProvider>
  );
}

export default App;
