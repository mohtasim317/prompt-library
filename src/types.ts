import { Dispatch, SetStateAction } from "react";

export interface MockDataType {
  id: number;
  title: string;
  text: string;
  folder?: string;
}

export interface FolderAndDropdownSectionPropsType {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<ModalTypes>>;
}

export interface ModalPropsType {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}

export interface DropdownContextInterface {
  dropdownsList: TitleAndDropDownType;
  setDropdownsList: React.Dispatch<React.SetStateAction<TitleAndDropDownType>>;
  promptDropdownSelection: string | undefined;
  setPromptDropdownSelection: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

export interface PromptContextInterface {
  setSelectedId: Dispatch<SetStateAction<number | null>>;
  selectedId: number | null;
  promptList: MockDataType[];
  setPromptList: Dispatch<SetStateAction<MockDataType[]>>;
}

export interface ModalContextInterface {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  modalType: ModalTypes;
  setModalType: React.Dispatch<React.SetStateAction<ModalTypes>>;
  dropdownEditName: string;
  setDropdownEditName: React.Dispatch<React.SetStateAction<string>>;
}

export interface DropdownOptionType {
  inputValue?: string;
  dropdownOption: string;
}

export interface DropdownProps {
  currentDropdownOptions: DropdownOptionType[];
  setCurrentDropdownOptions?: React.Dispatch<
    React.SetStateAction<DropdownOptionType[]>
  >;
  className?: string;
  dropdownType: string;
  setDropdownVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

export interface TitleAndDropDownType {
  [title: string]: DropdownOptionType[];
}

export interface DropdownTileType {
  data: React.HTMLAttributes<HTMLLIElement>;
  option: DropdownOptionType;
  handleRemoveOption?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  dropdownType: string;
}

export type ModalTypes = "" | "createDropdown" | "editDropdown";
