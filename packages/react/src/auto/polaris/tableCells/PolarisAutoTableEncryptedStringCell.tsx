import { Icon, Tag, Text } from "@shopify/polaris";
import { HideIcon, ViewIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { defaultPlaceholderHiddenText } from "../../shared/defaults.js";

export const PolarisAutoTableEncryptedStringCell = (props: { value: any }) => {
  const { value } = props;

  const [isShown, setIsShown] = useState(false);

  const showHideToggleButton = (
    <div
      style={{
        display: "flex",
        marginLeft: "2px",
      }}
      onClick={(e) => {
        // Prevent the row's onClick handler from being called when the button is clicked
        e.stopPropagation();
        e.preventDefault();
        setIsShown(!isShown);
      }}
      role="EncryptedStringCellShowHideButton"
    >
      <Tag onClick={dummyFunctionToGetOnClickStyling}>
        <Icon source={isShown ? HideIcon : ViewIcon} />
      </Tag>
    </div>
  );

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ minWidth: 0, flex: 1 }}>
        <Tag>
          <Text as="span" tone="subdued" truncate>
            {isShown ? value : defaultPlaceholderHiddenText}
          </Text>
        </Tag>
      </div>
      {showHideToggleButton}
    </div>
  );
};

const dummyFunctionToGetOnClickStyling = () => undefined;
