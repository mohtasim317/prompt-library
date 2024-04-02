import { createContext, useState } from "react";
import { PromptContextInterface } from "../types";

export const PromptContext = createContext<PromptContextInterface | null>(null);

export function PromptContextProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [selectedId, setSelectedId] = useState<number | null>(0);

  return (
    <PromptContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </PromptContext.Provider>
  );
}
