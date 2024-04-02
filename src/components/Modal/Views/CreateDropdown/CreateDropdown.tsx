import { useContext, useState } from "react";
import Dropdown from "../../../DropDown/DropDown";
import {
  DropdownContextInterface,
  DropdownOptionType,
} from "../../../../types";
import { DropdownContext } from "../../../../Context/DropdownContext";

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
        return { ...prev, [title]: currentDropdownOptions };
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
      <div>Dropdown Title:</div>
      <input value={title} onChange={onInputChange}></input>
      <div>Add Dropdown options:</div>
      <Dropdown
        currentDropdownOptions={currentDropdownOptions}
        setCurrentDropdownOptions={setCurrentDropdownOptions}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
