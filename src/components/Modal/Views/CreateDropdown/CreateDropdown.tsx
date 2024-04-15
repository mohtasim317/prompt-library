import { useContext, useState } from "react";
import Dropdown from "../../../DropDown/DropDown";
import {
  DropdownContextInterface,
  DropdownOptionType,
} from "../../../../types";
import { DropdownContext } from "../../../../Context/DropdownContext";
import { dropdownTypeMap } from "../../../../constants";
import "./CreateDropdown.scss";

export default function CreateDropdown() {
  const [currentDropdownOptions, setCurrentDropdownOptions] = useState<
    DropdownOptionType[]
  >([]);

  const [title, setTitle] = useState<string>("");

  const { dropdownsList, setDropdownsList } = useContext(
    DropdownContext
  ) as DropdownContextInterface;

  const handleSubmit = () => {
    if (!dropdownsList[title] && title !== "") {
      setDropdownsList((prev) => {
        const allDropdowns = { ...prev, [title]: currentDropdownOptions };
        localStorage.setItem("allDropdowns", JSON.stringify(allDropdowns));
        return allDropdowns;
      });

      setCurrentDropdownOptions([]);
      setTitle("");
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

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
