import { createContext, useEffect, useState } from "react";
import { MockDataType, PromptContextInterface } from "../types";

export const PromptContext = createContext<PromptContextInterface | null>(null);

export function PromptContextProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [selectedId, setSelectedId] = useState<number | null>(0);
  const [promptList, setPromptList] = useState<MockDataType[]>(() => {
    const promptDataList = JSON.parse(
      localStorage.getItem("promptList") || "[]"
    );
    return promptDataList;
  });

  useEffect(() => {
    // Save to localStorage whenever the promptList changes
    localStorage.setItem("promptList", JSON.stringify(promptList));
  }, [promptList]);

  return (
    <PromptContext.Provider
      value={{ selectedId, setSelectedId, promptList, setPromptList }}
    >
      {children}
    </PromptContext.Provider>
  );
}
