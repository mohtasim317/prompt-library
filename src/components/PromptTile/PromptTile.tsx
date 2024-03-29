import "./PromptTile.css";
import { MockDataType } from "../../types";
import { PromptContext, PromptContextInterface } from "../../PromptContext";
import { useContext } from "react";

function PromptTile({ id, title, text, folder }: MockDataType) {
  const { setSelectedId } = useContext(PromptContext) as PromptContextInterface;
  const selectTile = (e: React.MouseEvent<HTMLDivElement>) => {
    const tileId = parseInt(e?.currentTarget.id);
    setSelectedId(tileId);
  };
  return (
    <div className="PromptTile" onClick={selectTile} id={`${id}`}>
      <div className="TopRow">
        <div className="PromptTitle">{title}</div>
        <div className="PromptText">{text}</div>
      </div>
      <div className="PromptFolder">{folder}</div>
    </div>
  );
}

export default PromptTile;
