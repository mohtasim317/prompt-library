import "./PromptTile.css";
import { MockDataType } from "../../types";

function PromptTile({ title, text }: MockDataType) {
  return (
    <>
      <div>{title}</div>
      <div>{text}</div>
    </>
  );
}

export default PromptTile;
