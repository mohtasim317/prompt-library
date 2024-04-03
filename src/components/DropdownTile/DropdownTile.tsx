import { DropdownTileType } from "../../types";

export default function DropdownTile({
  data,
  option,
  removeOption,
}: DropdownTileType) {
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <li {...data}>{option.dropdownOption} </li>
      {!option.dropdownOption.includes("Add") && (
        <button
          value={option.dropdownOption}
          style={{ width: "20%" }}
          onClick={removeOption}
        >
          x
        </button>
      )}
    </div>
  );
}
