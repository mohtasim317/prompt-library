import "./PromptList.css";
import { promptData } from "../../constants/constants";
import PromptTile from "../PromptTile/PromptTile";

function PromptList() {
  return (
    <div className="PromptList">
      <div className="ButtonBar">
        <button>New Prompt</button>
      </div>
      {promptData.map((prompt) => {
        return <PromptTile {...prompt} />;
      })}
    </div>
  );
}

export default PromptList;
