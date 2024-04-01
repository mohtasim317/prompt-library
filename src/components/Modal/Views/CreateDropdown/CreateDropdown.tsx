import { useContext, useState } from "react";
import Dropdown from "../../../DropDown/DropDown";
import { DropdownOptionType, PromptContextInterface } from "../../../../types";
import { PromptContext } from "../../../../PromptContext";

export default function CreateDropdown() {
  const [currentDropdownOptions, setCurrentDropdownOptions] = useState<
    DropdownOptionType[]
  >([]);

  const [title, setTitle] = useState<string>("");

  const { dropdownsList, setDropdownsList } = useContext(
    PromptContext
  ) as PromptContextInterface;

  function handleSubmit() {
    if (!dropdownsList[title]) {
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
