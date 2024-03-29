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

// import React, { createContext, useState } from "react";

// interface PromptContextValue {
//   selectedId: number | null;
//   setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
// }

// export const PromptContext = createContext<PromptContextValue | null>(null);

// export function PromptContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }): JSX.Element {
//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   return (
//     <PromptContext.Provider value={{ selectedId, setSelectedId }}>
//       {children}
//     </PromptContext.Provider>
//   );
// }
