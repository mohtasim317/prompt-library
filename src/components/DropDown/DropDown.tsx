import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { DropdownProps, FilmOptionType } from "../../types";

const filter = createFilterOptions<FilmOptionType>();

export default function Dropdown({
  currentDropdownOptions,
  setCurrentDropdownOptions,
}: DropdownProps) {
  const [value, setValue] = useState<FilmOptionType | null>(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            dropdownOption: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setValue({
            dropdownOption: newValue.inputValue,
          });
          setCurrentDropdownOptions((prevState) => [
            ...prevState,
            { dropdownOption: newValue.inputValue ?? "" },
          ]);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;

        const isExisting = options.some(
          (option) => inputValue === option.dropdownOption
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            dropdownOption: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={currentDropdownOptions}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.dropdownOption;
      }}
      renderOption={(props, option) => (
        <li {...props}>{option.dropdownOption} </li>
      )}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Add Dropdown options" />
      )}
    />
  );
}
