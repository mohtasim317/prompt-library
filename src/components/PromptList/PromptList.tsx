import { useContext } from "react";
import PromptTile from "../PromptTile/PromptTile";
import { PromptContext } from "../../Context/PromptContext";
import { PromptContextInterface } from "../../types";
import "./PromptList.scss";

function PromptList() {
  const { selectedId, setSelectedId, promptList } = useContext(
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
      {promptList.map((prompt) => {
        return <PromptTile {...prompt} key={`${prompt.title}`} />;
      })}
    </div>
  );
}

export default PromptList;
