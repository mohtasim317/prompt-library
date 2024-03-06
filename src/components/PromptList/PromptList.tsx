import "./PromptList.css";
import { promptData } from "../../constants/constants";
import PromptTile from "../PromptTile/PromptTile";

function PromptList() {
  return (
    <>
      <div>
        {promptData.map((prompt) => {
          return <PromptTile {...prompt} />;
        })}
      </div>
    </>
  );
}

export default PromptList;
