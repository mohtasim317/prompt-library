import "./PromptForm.scss";
import { useContext } from "react";
import { PromptContext } from "../../Context/PromptContext";
import { MockDataType, PromptContextInterface } from "../../types";
import { promptData } from "../../constants/constants";

function PropmtForm() {
  const { selectedId } = useContext(PromptContext) as PromptContextInterface;
  let formContent;
  if (selectedId) {
    const formData: MockDataType = promptData.filter(
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
        <div className="prompt-title">Define Desires and Outcomes</div>
        <textarea
          className="prompt-content"
          placeholder="Enter prompt text..."
        ></textarea>
        <div className="prompt-footer">
          <button>Copy</button>
          <button>Save</button>
        </div>
      </>
    );
  }
  return <div className="prompt-form">{formContent}</div>;
}

export default PropmtForm;
