import { MouseEvent, useContext, useState } from "react";
import { DropdownContext } from "../../Context/DropdownContext";
import {
  DropdownContextInterface,
  FolderAndDropdownSectionPropsType,
} from "../../types";
import "./FolderAndDropdownSection.scss";

function FolderAndDropdownSection({
  setShowModal,
}: FolderAndDropdownSectionPropsType) {
  const [showInputBox, setShowInputBox] = useState(false);
  const [folderList, setFolderList] = useState<string[]>([]);
  const [inputFolderName, setInputFolderName] = useState<string>("");

  const { dropdownsList, setDropdownsList } = useContext(
    DropdownContext
  ) as DropdownContextInterface;

  const handleKeyDown = (event: { key: string }): void => {
    if (event.key === "Enter") {
      setFolderList((prevFolderList) => [...prevFolderList, inputFolderName]);
    }
  };

  const removeDropdown = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonValue = (event.target as HTMLInputElement).value;
    const newList = { ...dropdownsList };
    delete newList[buttonValue];
    setDropdownsList(newList);
    localStorage.setItem("allDropdowns", JSON.stringify(newList));
  };

  return (
    <div className="FolderandDropDownSection">
      <div className="FolderSection">
        <div>Folders</div>
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
        <div>Dropdowns</div>
        {Object.keys(dropdownsList).length === 0 ? (
          <>
            <div>No Dropdown added</div>
          </>
        ) : (
          <div>
            {Object.keys(dropdownsList).map((property, idx) => {
              return (
                <div className="DropDownView" key={`${property} + ${idx}`}>
                  <div className="Top">
                    <div>{property}:</div>
                    <button value={property} onClick={removeDropdown}>
                      x
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <button onClick={() => setShowModal((prevState) => !prevState)}>
        Create New Dropdown
      </button>
    </div>
  );
}

export default FolderAndDropdownSection;
