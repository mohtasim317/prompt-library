import "./PromptForm.scss";
import { useContext } from "react";
import { PromptContext } from "../../Context/PromptContext";
import { PromptContextInterface } from "../../types";

function PropmtForm() {
  const { selectedId } = useContext(PromptContext) as PromptContextInterface;
  return (
    <div className="prompt-form">
      <div className="prompt-title">Define Desires and Outcomes</div>
      <textarea
        className="prompt-content"
        placeholder="Enter prompt text..."
      ></textarea>
      <div className="prompt-footer">
        <button>Edit Template</button>
        <button>Copy</button>
        <button>Save</button>
      </div>
    </div>
  );
}

export default PropmtForm;
