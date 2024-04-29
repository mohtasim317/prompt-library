import { createElement } from "react";
import { Dropdown } from "../Components";
import { PromptContentProps } from "../../types";
import { dropdownTypeMap } from "../../constants";

function PromptContent(props: PromptContentProps) {
  const { content, dropdownsList } = props;
  function parsePromptContent(content: string) {
    const promptContentChildren = [];
    let currentStr: string = "";
    for (let i = 0; i < content.length; i++) {
      if (content[i] === "[") {
        promptContentChildren.push(currentStr);
        currentStr = "";
        continue;
      } else if (content[i] === "]") {
        if (currentStr && dropdownsList[currentStr]) {
          // insert <Dropdown> with props based on that title
          promptContentChildren.push(
            createElement(Dropdown, {
              title: currentStr,
              currentDropdownOptions: dropdownsList[currentStr],
              dropdownType: dropdownTypeMap.singleSelect,
              disableOpenOnFocus: true,
              isCompact: true,
            })
          );
        }
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
