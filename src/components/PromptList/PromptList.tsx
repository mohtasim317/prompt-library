import "./PromptList.css";
import { promptData } from "../../constants/constants";
import PromptTile from "../PromptTile/PromptTile";
import { useContext } from "react";
import { PromptContext } from "../../Context/PromptContext";
import { PromptContextInterface } from "../../types";

function PromptList() {
  const { selectedId, setSelectedId } = useContext(
    PromptContext
  ) as PromptContextInterface;
  const deselectPrompt = () => {
    if (selectedId) {
      setSelectedId(null);
    }
  };
  return (
    <div className="PromptList">
      <div className="ButtonBar">
        <button onClick={deselectPrompt}>New Prompt</button>
      </div>
      {promptData.map((prompt) => {
        return <PromptTile {...prompt} key={`${prompt.title}`} />;
      })}
    </div>
  );
}

export default PromptList;
