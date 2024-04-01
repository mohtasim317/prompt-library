import { createContext, useState } from "react";
import { PromptContextInterface, TitleAndDropDownType } from "./types";

export const PromptContext = createContext<PromptContextInterface | null>(null);

export function PromptContextProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [selectedId, setSelectedId] = useState<number | null>(0);
  const [dropdownsList, setDropdownsList] = useState<TitleAndDropDownType>({});

  return (
    <PromptContext.Provider
      value={{ selectedId, setSelectedId, dropdownsList, setDropdownsList }}
    >
      {children}
    </PromptContext.Provider>
  );
}
