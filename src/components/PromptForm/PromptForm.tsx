import { useContext, useEffect, useRef, useState } from "react";
import {
  DropdownContextInterface,
  DropdownOptionType,
  MockDataType,
  PromptContextInterface,
} from "../../types";
import { Dropdown } from "../Components";
import { DropdownContext, PromptContext } from "../../Context/Contexts";
import { dropdownTypeMap } from "../../constants";
import "./PromptForm.scss";
import PromptContent from "../PromptContent/PromptContent";

function PromptForm() {
  const { selectedId, setSelectedId, promptList, setPromptList } = useContext(
    PromptContext
  ) as PromptContextInterface;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
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
    let newPromptList;
    if (selectedId) {
      newPromptList = promptList.map((item) => {
        if (item.id === selectedId) {
          item.title = title;
          item.text = content;
        }
        return item;
      });
      setIsEditable(false);
    } else {
      const id = promptList.length
        ? promptList[promptList.length - 1].id + 1
        : 1;
      const newPromptData: MockDataType = {
        id,
        title,
        text: content,
      };
      newPromptList = [...promptList, newPromptData];
      setSelectedId(id);
    }
    setPromptList(newPromptList);
    setContent("");
    setTitle("");
  };

  const getFormData = (): MockDataType => {
    return promptList.filter((item) => item.id === selectedId)[0];
  };
  const enableEditMode = () => {
    setIsEditable(true);
    const formData = getFormData();
    setTitle(formData.title);
    setContent(formData.text);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // have run this post render, since if run on button click the dropdown has not rendered yet so focus won't work
    if (isDropdownVisible) {
      inputRef.current?.focus();
    }
  }, [isDropdownVisible]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // whenever the dropdown value changes update texarea content by appending that value
  const { promptDropdownSelection } = useContext(
    DropdownContext
  ) as DropdownContextInterface;
  useEffect(() => {
    const dropdownString = promptDropdownSelection
      ? ` [${promptDropdownSelection}]`
      : "";
    setContent((prev) => prev + dropdownString);
    textareaRef.current?.focus();
  }, [promptDropdownSelection]);

  let formContent;
  if (selectedId && !isEditable) {
    const formData = getFormData();
    formContent = (
      <>
        <div className="InsertTitle">{formData.title}</div>
        <PromptContent
          content={formData.text}
          dropdownsList={dropdownsList}
          promptTitle={title}
        />
        <div className="PromptFooter">
          <button onClick={enableEditMode}>Edit Template</button>
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
          value={title}
        ></input>
        <div className="TextareaContainer">
          <textarea
            className="PromptContent"
            ref={textareaRef}
            placeholder="Enter prompt text..."
            onChange={handleContentChange}
            value={content}
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
            title="promptDropdownSelector"
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
