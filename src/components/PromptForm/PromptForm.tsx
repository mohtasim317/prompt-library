import { useContext, useEffect, useRef, useState } from "react";
import { PromptContext } from "../../Context/PromptContext";
import {
  DropdownContextInterface,
  DropdownOptionType,
  MockDataType,
  PromptContextInterface,
} from "../../types";
import { Dropdown } from "../Components";
import { DropdownContext } from "../../Context/DropdownContext";
import { dropdownTypeMap } from "../../constants";
import "./PromptForm.scss";

function PromptForm() {
  const { selectedId, setSelectedId, promptList, setPromptList } = useContext(
    PromptContext
  ) as PromptContextInterface;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { dropdownsList } = useContext(
    DropdownContext
  ) as DropdownContextInterface;
  // populates the dropdown with the titles of all currectly available dropdowns
  const allDropdownList: DropdownOptionType[] = Object.keys(dropdownsList).map(
    (property) => {
      return { dropdownOption: property };
    }
  );

  const handleTitleChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleContentChange: React.FormEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setContent(e.currentTarget.value);
  };

  const savePrompt = () => {
    const id = promptList.length ? promptList[promptList.length - 1].id + 1 : 1;
    const newPromptData: MockDataType = {
      id,
      title,
      text: content,
    };
    const newPromptList = [...promptList, newPromptData];
    setPromptList(newPromptList);
    setSelectedId(id);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // have run this post render, since if run on button click the dropdown has not rendered yet so focus won't work
    if (isDropdownVisible) {
      inputRef.current?.focus();
    }
  }, [isDropdownVisible]);

  let formContent;
  if (selectedId) {
    const formData: MockDataType = promptList.filter(
      (item) => item.id === selectedId
    )[0];
    formContent = (
      <>
        <div className="InsertTitle">{formData.title}</div>
        <div className="PromptContent">{formData.text}</div>
        <div className="PromptFooter">
          <button>Edit Template</button>
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(formData.text);
            }}
          >
            Copy
          </button>
        </div>
      </>
    );
  } else {
    formContent = (
      <>
        <input
          className="InsertTitle"
          placeholder="Enter a title..."
          autoFocus
          onChange={handleTitleChange}
        ></input>
        <div className="TextareaContainer">
          <textarea
            className="PromptContent"
            placeholder="Enter prompt text..."
            onChange={handleContentChange}
          ></textarea>
          <button
            className={
              "InsertDropdownButton" + (isDropdownVisible ? " isHidden" : "")
            }
            onClick={() => setDropdownVisible((prev) => !prev)}
          >
            Insert Dropdown
          </button>
          <Dropdown
            ref={inputRef}
            currentDropdownOptions={allDropdownList}
            className={isDropdownVisible ? "" : "isHidden"}
            dropdownType={dropdownTypeMap.singleSelect}
            setDropdownVisible={setDropdownVisible}
          />
        </div>
        <div className="PromptFooter">
          <button>Copy</button>
          <button disabled={!title || !content} onClick={savePrompt}>
            Save
          </button>
        </div>
      </>
    );
  }
  return <div className="PromptForm">{formContent}</div>;
}

export default PromptForm;
