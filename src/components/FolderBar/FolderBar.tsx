import { DropdownContext } from "../../Context/DropdownContext";
import { DropdownContextInterface } from "../../types";
import "./FolderBar.css";
import { useContext, useState } from "react";

function FolderBar() {
  const [showInputBox, setShowInputBox] = useState(false);
  const [folderList, setFolderList] = useState<string[]>([]);
  const [inputFolderName, setInputFolderName] = useState<string>("");

  const { dropdownsList } = useContext(
    DropdownContext
  ) as DropdownContextInterface;

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      setFolderList((prevFolderList) => [...prevFolderList, inputFolderName]);
    }
  };

  return (
    <>
      <div className="FolderandDropDownSection">
        <div className="FolderSection">
          <div>
            {folderList.length > 0 ? (
              folderList.map((folder) => {
                return <div>{folder}</div>;
              })
            ) : (
              <div>No Folders Added</div>
            )}
          </div>
          <div>
            <button onClick={() => setShowInputBox((prevState) => !prevState)}>
              New Folder
            </button>
          </div>

          {showInputBox && (
            <input
              type="text"
              onChange={(event) => setInputFolderName(event.target.value)}
              value={inputFolderName}
              onKeyDown={handleKeyDown}
            />
          )}
        </div>
        <div className="DropdownSection">
          {Object.keys(dropdownsList).length === 0 ? (
            <div>No Dropdown added</div>
          ) : (
            <div>
              {Object.keys(dropdownsList).map((key) => {
                const dropdownOptions = Object.values(dropdownsList[key]);
                return (
                  <div className="DropDownView">
                    {key}:
                    {dropdownOptions.map((dropdownOptionObject) => {
                      return <div>{dropdownOptionObject.dropdownOption}</div>;
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FolderBar;
