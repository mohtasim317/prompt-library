import "./PromptTile.css";
import { MockDataType } from "../../types";

function PromptTile({ title, text, folder }: MockDataType) {
  return (
    <div className="PromptTile">
      <div className="TopRow">
        <div className="PromptTitle">{title}</div>
        <div className="PromptText">{text}</div>
      </div>
      <div className="PromptFolder">{folder}</div>
    </div>
  );
}

export default PromptTile;
