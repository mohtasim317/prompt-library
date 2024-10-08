import { createContext, useState } from "react";
import { DropdownContextInterface, TitleAndDropDownType } from "../types";

export const DropdownContext = createContext<DropdownContextInterface | null>(
  null
);

export function DropdownContextProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [dropdownsList, setDropdownsList] = useState<TitleAndDropDownType>(
    () => {
      const savedDropdowns = localStorage.getItem("allDropdowns") || "{}";
      const initialValue = JSON.parse(savedDropdowns);
      return initialValue;
    }
  );
  const [promptDropdownSelection, setPromptDropdownSelection] = useState<
    string | undefined
  >(undefined);
  return (
    <DropdownContext.Provider
      value={{
        dropdownsList,
        setDropdownsList,
        promptDropdownSelection,
        setPromptDropdownSelection,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}
