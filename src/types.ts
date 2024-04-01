import { Dispatch, SetStateAction } from "react";

export interface MockDataType {
  id: number;
  title: string;
  text: string;
  folder: string;
}

export interface PromptListPropsType {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalPropsType {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}

export interface DropdownContextInterface {
  dropdownsList: TitleAndDropDownType;
  setDropdownsList: React.Dispatch<React.SetStateAction<TitleAndDropDownType>>;
}

export interface PromptContextInterface {
  setSelectedId: Dispatch<SetStateAction<number | null>>;
  selectedId: number | null;
}

export interface DropdownOptionType {
  inputValue?: string;
  dropdownOption: string;
}

export interface DropdownProps {
  currentDropdownOptions: DropdownOptionType[];
  setCurrentDropdownOptions: React.Dispatch<
    React.SetStateAction<DropdownOptionType[]>
  >;
}

export interface TitleAndDropDownType {
  [title: string]: DropdownOptionType[];
}
