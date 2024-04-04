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
            ? { width: "80%" }
            : { width: "100%" }
        }
        {...data}
      >
        {option.dropdownOption}
      </li>
      {!option.dropdownOption.includes("Add") && (
        <button
          className="RemoveButton"
          value={option.dropdownOption}
          onClick={handleRemoveOption}
        >
          x
        </button>
      )}
    </div>
  );
}
