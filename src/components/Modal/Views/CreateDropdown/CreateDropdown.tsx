import { useState } from "react";
import Dropdown from "../../../DropDown/DropDown";
import { FilmOptionType } from "../../../../types";

export default function CreateDropdown() {
  const [currentDropdownOptions, setCurrentDropdownOptions] = useState<
    FilmOptionType[]
  >([]);
  return (
    <div className="">
      <div>Dropdown Title:</div>
      <input></input>
      <div>Add Dropdown options:</div>
      <Dropdown
        currentDropdownOptions={currentDropdownOptions}
        setCurrentDropdownOptions={setCurrentDropdownOptions}
      />
      <button>Submit</button>
    </div>
  );
}
