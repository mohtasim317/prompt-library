import { createContext, useState, Dispatch, SetStateAction } from "react";

export interface PromptContextInterface {
  setSelectedId: Dispatch<SetStateAction<number | null>>;
  selectedId: number | null;
}
export const PromptContext = createContext<PromptContextInterface | undefined>(
  undefined
);

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
