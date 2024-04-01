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
  const [dropdownsList, setDropdownsList] = useState<TitleAndDropDownType>({});

  return (
    <DropdownContext.Provider value={{ dropdownsList, setDropdownsList }}>
      {children}
    </DropdownContext.Provider>
  );
}
