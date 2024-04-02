import "./PromptTile.css";
import { MockDataType, PromptContextInterface } from "../../types";
import { PromptContext } from "../../Context/PromptContext";
import { useContext } from "react";

function PromptTile({ id, title, text, folder }: MockDataType) {
  const { selectedId, setSelectedId } = useContext(
    PromptContext
  ) as PromptContextInterface;
  const selectTile = (e: React.MouseEvent<HTMLDivElement>) => {
    const tileId = parseInt(e?.currentTarget.id);
    if (selectedId != tileId) {
      setSelectedId(tileId);
    }
  };
  return (
    <div
      className={"PromptTile" + (selectedId == id ? " is-selected" : "")}
      onClick={selectTile}
      id={`${id}`}
    >
      <div className="TopRow">
        <div className="PromptTitle">{title}</div>
        <div className="PromptText">{text}</div>
      </div>
      <div className="PromptFolder">{folder}</div>
    </div>
  );
}

export default PromptTile;
