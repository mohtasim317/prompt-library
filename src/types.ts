import { Dispatch, SetStateAction } from "react";

export interface MockDataType {
  id: number;
  title: string;
  text: string;
  folder?: string;
}

export interface FolderAndDropdownSectionPropsType {
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
  promptList: MockDataType[];
  setPromptList: Dispatch<SetStateAction<MockDataType[]>>;
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

export interface DropdownTileType {
  data: React.HTMLAttributes<HTMLLIElement>;
  option: DropdownOptionType;
  handleRemoveOption: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
