import "./PromptForm.scss";
import { useContext } from "react";
import { PromptContext, PromptContextInterface } from "../../PromptContext";

function PropmtForm() {
  const { selectedId } = useContext(PromptContext) as PromptContextInterface;
  return (
    <div className="prompt-form">
      <div className="promt-title">Define Desires and Outcomes</div>
      <textarea
        className="promt-content"
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
