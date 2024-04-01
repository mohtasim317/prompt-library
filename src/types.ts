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

export interface PromptContextInterface {
  setSelectedId: Dispatch<SetStateAction<number | null>>;
  selectedId: number | null;
}

export interface FilmOptionType {
  inputValue?: string;
  dropdownOption: string;
}

export interface DropdownProps {
  currentDropdownOptions: FilmOptionType[];
  setCurrentDropdownOptions: React.Dispatch<
    React.SetStateAction<FilmOptionType[]>
  >;
}
