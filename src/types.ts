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
}
