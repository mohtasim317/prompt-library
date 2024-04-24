import { useContext, useState } from "react";
import { Dropdown } from "../../../Components";
import {
  DropdownContextInterface,
  DropdownOptionType,
  ModalContextInterface,
} from "../../../../types";
import { DropdownContext } from "../../../../Context/DropdownContext";
import { dropdownTypeMap } from "../../../../constants";
import "./EditDropdown.scss";
import { ModalContext } from "../../../../Context/ModalContext";

export default function EditDropdown() {
  const [currentDropdownOptions, setCurrentDropdownOptions] = useState<
    DropdownOptionType[]
  >([]);

  const [title, setTitle] = useState<string>("");

  const { dropdownsList, setDropdownsList } = useContext(
    DropdownContext
  ) as DropdownContextInterface;

  const { setShowModal, setModalType, setDropdownEditName } = useContext(
    ModalContext
  ) as ModalContextInterface;

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
    <div className="EditDropdownView">
      <div className="DropdownTitle">Edit Dropdown Title:</div>
      <input value={title} onChange={onInputChange}></input>
      <Dropdown
        title={title}
        currentDropdownOptions={currentDropdownOptions}
        setCurrentDropdownOptions={setCurrentDropdownOptions}
        dropdownType={dropdownTypeMap.freeFormEntry}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
