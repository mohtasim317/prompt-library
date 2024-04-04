import "./PromptForm.scss";
import { useContext, useState } from "react";
import { PromptContext } from "../../Context/PromptContext";
import { MockDataType, PromptContextInterface } from "../../types";

function PropmtForm() {
  const { selectedId, setSelectedId, promptList, setPromptList } = useContext(
    PromptContext
  ) as PromptContextInterface;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
    const newPromtList = [...promptList, newPromptData];
    setPromptList(newPromtList);
    localStorage.setItem("promptList", JSON.stringify(newPromtList));
    setSelectedId(id);
  };
  let formContent;
  if (selectedId) {
    const formData: MockDataType = promptList.filter(
      (item) => item.id === selectedId
    )[0];
    formContent = (
      <>
        <div className="prompt-title">{formData.title}</div>
        <div className="prompt-content">{formData.text}</div>
        <div className="prompt-footer">
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
          className="prompt-title"
          placeholder="Enter a title..."
          autoFocus
          onChange={handleTitleChange}
        ></input>
        <textarea
          className="prompt-content"
          placeholder="Enter prompt text..."
          onChange={handleContentChange}
        ></textarea>
        <div className="prompt-footer">
          <button>Copy</button>
          <button disabled={!title || !content} onClick={savePrompt}>
            Save
          </button>
        </div>
      </>
    );
  }
  return <div className="prompt-form">{formContent}</div>;
}

export default PropmtForm;
