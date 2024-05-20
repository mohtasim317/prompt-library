import { MouseEvent, forwardRef, useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import {
  DropdownProps,
  DropdownOptionType,
  DropdownContextInterface,
} from "../../types";
import DropdownTile from "../DropdownTile/DropdownTile";
import { dropdownTypeMap, DropdownTitleMap } from "../../constants";
import { DropdownContext } from "../../Context/Contexts";

const filter = createFilterOptions<DropdownOptionType>();

const Dropdown = forwardRef(function Dropdown(
  {
    currentDropdownOptions,
    setCurrentDropdownOptions,
    className,
    dropdownType,
    setDropdownVisible,
    title,
    disableOpenOnFocus,
    isCompact,
  }: DropdownProps,
  inputRef
) {
  const [selectedValue, setSelectedValue] = useState<DropdownOptionType | null>(
    null
  );
  const [inputValue, setInputValue] = useState<string>("");

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
      setSelectedValue(null);
      setInputValue(""); // clears the actual value in the input that gets set after a selection was made
    }
  };

  const { setPromptDropdownSelection } = useContext(
    DropdownContext
  ) as DropdownContextInterface;
  return (
    <Autocomplete
      value={selectedValue}
      inputValue={inputValue}
      className={className}
      onChange={(event, newSelectedValue) => {
        if (typeof newSelectedValue === "string") {
          setSelectedValue({
            dropdownOption: newSelectedValue,
          });
        } else if (newSelectedValue && newSelectedValue.inputValue) {
          setSelectedValue({
            dropdownOption: newSelectedValue.inputValue,
          });
          if (setCurrentDropdownOptions) {
            setCurrentDropdownOptions((prevState) => [
              ...prevState,
              { dropdownOption: newSelectedValue.inputValue as string },
            ]);
          }
          setInputValue(newSelectedValue.inputValue);
        } else {
          setSelectedValue(newSelectedValue);
          if (DropdownTitleMap.promptSelector === title) {
            setPromptDropdownSelection(newSelectedValue?.dropdownOption);
          }
          setInputValue(newSelectedValue?.dropdownOption || "");
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
          label={isCompact ? "" : "Add Dropdown Options:"}
          autoFocus
          placeholder={isCompact ? `Select a ${title}` : ""}
          inputRef={inputRef} // need to access the input ref from the prompt form to focus the input when visible
          inputProps={{
            ...params.inputProps,
            style: {
              ...(isCompact
                ? { height: 12, padding: 0, width: "fit-content", fontSize: 14 }
                : {}),
            },
            onChange: (event) => {
              setInputValue(event.currentTarget.value);
            },
          }}
        />
      )}
      blurOnSelect={
        dropdownType === dropdownTypeMap.singleSelect ? true : false
      }
      onBlur={handleOnBlur}
      openOnFocus={disableOpenOnFocus ? false : true}
    />
  );
});

export default Dropdown;
