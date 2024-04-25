import { createContext, useState } from "react";
import { ModalTypes, ModalContextInterface } from "../types";

export const ModalContext = createContext<ModalContextInterface | null>(null);

export function ModalContextProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalTypes>("");
  const [dropdownEditName, setDropdownEditName] = useState("");

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        modalType,
        setModalType,
        dropdownEditName,
        setDropdownEditName,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
