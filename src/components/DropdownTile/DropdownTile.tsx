import { DropdownTileType } from "../../types";
import "./DropdownTile.scss";

export default function DropdownTile({
  data,
  option,
  handleRemoveOption,
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
      {!option.dropdownOption.includes(option.inputValue as string) && (
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
