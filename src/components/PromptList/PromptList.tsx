import "./PromptList.css";
import { promptData } from "../../constants/constants";
import PromptTile from "../PromptTile/PromptTile";
import { PromptListPropsType } from "../../types";

function PromptList({ setShowModal }: PromptListPropsType) {
  return (
    <div className="PromptList">
      <div className="ButtonBar">
        <button>New Prompt</button>
        <button onClick={() => setShowModal((prevState) => !prevState)}>
          Create New Dropdown
        </button>
      </div>
      {promptData.map((prompt) => {
        return <PromptTile {...prompt} />;
      })}
    </div>
  );
}

export default PromptList;
