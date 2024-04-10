import { MouseEvent, forwardRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { DropdownProps, DropdownOptionType } from "../../types";
import DropdownTile from "../DropdownTile/DropdownTile";
import { dropdownTypeMap } from "../../constants";

const filter = createFilterOptions<DropdownOptionType>();

const Dropdown = forwardRef(function Dropdown(
  {
    currentDropdownOptions,
    setCurrentDropdownOptions,
    className,
    dropdownType,
    setDropdownVisible,
  }: DropdownProps,
  inputRef
) {
  const [value, setValue] = useState<DropdownOptionType | null>(null);

  const handleRemoveOption = (event: MouseEvent<HTMLButtonElement>) => {
    const input = (event.target as HTMLInputElement).value;
    setCurrentDropdownOptions &&
      setCurrentDropdownOptions((prevState) => {
        const filtered = prevState.filter((option) => {
          return option.dropdownOption !== input;
        });
        return filtered;
      });
  };

  const handleOnBlur = () => {
    if (dropdownType === dropdownTypeMap.singleSelect && setDropdownVisible) {
      setDropdownVisible(false);
    }
  };

  return (
    <Autocomplete
      value={value}
      className={className}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            dropdownOption: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setValue({
            dropdownOption: newValue.inputValue,
          });
          if (setCurrentDropdownOptions) {
            setCurrentDropdownOptions((prevState) => [
              ...prevState,
              { dropdownOption: newValue.inputValue as string },
            ]);
          }
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;

        const isExisting = options.some(
          (option) => inputValue === option.dropdownOption
        );
        if (
          dropdownType === dropdownTypeMap.freeFormEntry &&
          inputValue !== "" &&
          !isExisting
        ) {
          // only allow adding new values when the dropdown type is freeFormEntry
          filtered.push({
            inputValue,
            dropdownOption: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur={true}
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
      renderOption={(props, option) => {
        return (
          <DropdownTile
            data={props}
            option={option}
            {...(dropdownType === dropdownTypeMap.freeFormEntry
              ? { handleRemoveOption: handleRemoveOption }
              : {})}
            key={props.id}
            dropdownType={dropdownType}
          />
        );
      }}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label="Add Dropdown Options:"
          autoFocus
          inputRef={inputRef} // need to access the input ref from the prompt form to focus the input when visible
        />
      )}
      blurOnSelect={
        dropdownType === dropdownTypeMap.singleSelect ? true : false
      }
      onBlur={handleOnBlur}
      openOnFocus
    />
  );
});

export default Dropdown;
