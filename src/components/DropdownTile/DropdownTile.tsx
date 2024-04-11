import { dropdownTypeMap } from "../../constants";
import { DropdownTileType } from "../../types";
import "./DropdownTile.scss";

export default function DropdownTile({
  data,
  option,
  handleRemoveOption,
  dropdownType,
}: DropdownTileType) {
  return (
    <div className="DropDownTile">
      <li
        style={
          !option.dropdownOption.includes("Add")
            ? { width: "85%" }
            : { width: "100%" }
        }
        {...data}
      >
        {option.dropdownOption}
      </li>
      {dropdownType === dropdownTypeMap.freeFormEntry &&
        !option.dropdownOption.includes(option.inputValue as string) && (
          <button
            className="RemoveButton"
            value={option.dropdownOption}
            onClick={handleRemoveOption}
          >
            X
          </button>
        )}
    </div>
  );
}
