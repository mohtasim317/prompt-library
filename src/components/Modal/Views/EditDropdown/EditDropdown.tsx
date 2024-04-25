import { useContext, useState } from "react";
import { Dropdown } from "../../../Components";
import {
  DropdownContextInterface,
  DropdownOptionType,
  ModalContextInterface,
} from "../../../../types";
import { DropdownContext, ModalContext } from "../../../../Context/Contexts";
import { dropdownTypeMap } from "../../../../constants";
import "./EditDropdown.scss";

export default function EditDropdown() {
  const { dropdownsList, setDropdownsList } = useContext(
    DropdownContext
  ) as DropdownContextInterface;

  const { dropdownEditName, setShowModal } = useContext(
    ModalContext
  ) as ModalContextInterface;

  const [currentDropdownOptions, setCurrentDropdownOptions] = useState<
    DropdownOptionType[]
  >(() => {
    const dropdownOptions = [...dropdownsList[dropdownEditName]];
    return dropdownOptions;
  });

  const [title, setTitle] = useState<string>(dropdownEditName);
  //dropdownEditName, title
  const handleSubmit = () => {
    if (title !== "") {
      if (dropdownEditName !== title) {
        if (!dropdownsList[title]) {
          setDropdownsList((prev) => {
            delete Object.assign(prev, { [title]: prev[dropdownEditName] })[
              dropdownEditName
            ];

            const allDropdowns = { ...prev, [title]: currentDropdownOptions };
            localStorage.setItem("allDropdowns", JSON.stringify(allDropdowns));
            return allDropdowns;
          });
        }
      } else {
        setDropdownsList((prev) => {
          const allDropdowns = { ...prev, [title]: currentDropdownOptions };
          localStorage.setItem("allDropdowns", JSON.stringify(allDropdowns));
          return allDropdowns;
        });
      }
    }
    setCurrentDropdownOptions([]);
    setTitle("");
    setShowModal(false);
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
