import { createElement } from "react";
import { Dropdown } from "../Components";
import { PromptContentProps } from "../../types";
import { dropdownTypeMap } from "../../constants";

function PromptContent({
  content,
  dropdownsList,
  promptTitle,
}: PromptContentProps) {
  function parsePromptContent(content: string) {
    const promptContentChildren = [];
    let currentStr: string = "";
    let dropdownIndex = 0;
    for (let i = 0; i < content.length; i++) {
      if (content[i] === "[") {
        promptContentChildren.push(currentStr);
        currentStr = "";
        continue;
      } else if (content[i] === "]") {
        if (currentStr && dropdownsList[currentStr]) {
          // insert <Dropdown> with props based on that title
          dropdownIndex++;
          promptContentChildren.push(
            createElement(Dropdown, {
              key: promptTitle + "-" + dropdownIndex,
              title: currentStr,
              currentDropdownOptions: dropdownsList[currentStr],
              dropdownType: dropdownTypeMap.singleSelect,
              disableOpenOnFocus: true,
              isCompact: true,
            })
          );
        }
        currentStr = "";
        continue;
      }
      currentStr += content[i];
    }
    if (currentStr) promptContentChildren.push(currentStr);
    return promptContentChildren;
  }

  return createElement(
    "div",
    { className: "PromptContent non-editable" },
    ...parsePromptContent(content)
  );
}
export default PromptContent;
