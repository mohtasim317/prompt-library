import { useContext } from "react";
import { MockDataType, PromptContextInterface } from "../../types";
import { PromptContext } from "../../Context/PromptContext";
import "./PromptTile.scss";

function PromptTile({ id, title, text, folder }: MockDataType) {
  const { selectedId, setSelectedId, setPromptList } = useContext(
    PromptContext
  ) as PromptContextInterface;

  const selectTile = (e: React.MouseEvent<HTMLDivElement>) => {
    const tileId = parseInt(e?.currentTarget.id);
    if (selectedId != tileId) {
      setSelectedId(tileId);
    }
  };

  const removeTile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPromptList((prevPromptList) =>
      prevPromptList.filter((prompt) => prompt.id !== id)
    );

    // Deselect if it was the selected tile
    if (selectedId === id) {
      setSelectedId(null);
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
      <div className="BottomRow">
        <div className="PromptFolder">{folder}</div>
        <button className="RemoveTileButton" value={id} onClick={removeTile}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default PromptTile;
