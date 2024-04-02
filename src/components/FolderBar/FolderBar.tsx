import "./FolderBar.css";
import { useState } from "react";

function FolderBar() {
  const [showInputBox, setShowInputBox] = useState(false);
  const [folderList, setFolderList] = useState<string[]>([]);
  const [inputFolderName, setInputFolderName] = useState<string>("");

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      setFolderList((prevFolderList) => [...prevFolderList, inputFolderName]);
    }
  };

  return (
    <>
      <div className="FolderandDropDownSection">
        <div>
          <div>
            {folderList.length > 0 ? (
              folderList.map((folder) => {
                return <div>{folder}</div>;
              })
            ) : (
              <div>No Folders Added</div>
            )}
          </div>

          <button onClick={() => setShowInputBox((prevState) => !prevState)}>
            New Folder
          </button>

          {showInputBox && (
            <input
              type="text"
              onChange={(event) => setInputFolderName(event.target.value)}
              value={inputFolderName}
              onKeyDown={handleKeyDown}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default FolderBar;
