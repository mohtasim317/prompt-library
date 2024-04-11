import { useContext, useState } from "react";
import Dropdown from "../../../DropDown/DropDown";
import {
  DropdownContextInterface,
  DropdownOptionType,
} from "../../../../types";
import { DropdownContext } from "../../../../Context/DropdownContext";
import "./CreateDropdown.css";
import { dropdownTypeMap } from "../../../../constants";

export default function CreateDropdown() {
  const [currentDropdownOptions, setCurrentDropdownOptions] = useState<
    DropdownOptionType[]
  >([]);

  const [title, setTitle] = useState<string>("");

  const { dropdownsList, setDropdownsList } = useContext(
    DropdownContext
  ) as DropdownContextInterface;

  function handleSubmit() {
    if (!dropdownsList[title] && title !== "") {
      setDropdownsList((prev) => {
        const allDropdowns = { ...prev, [title]: currentDropdownOptions };
        localStorage.setItem("allDropdowns", JSON.stringify(allDropdowns));
        return allDropdowns;
      });

      setCurrentDropdownOptions([]);
      setTitle("");
    }
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  return (
    <div className="CreateDropdownView">
      <div className="DropdownTitle">Dropdown Title:</div>
      <input value={title} onChange={onInputChange}></input>
      <div className="AddDropdownOptions">Add Dropdown Options:</div>
      <Dropdown
        currentDropdownOptions={currentDropdownOptions}
        setCurrentDropdownOptions={setCurrentDropdownOptions}
        dropdownType={dropdownTypeMap.freeFormEntry}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
