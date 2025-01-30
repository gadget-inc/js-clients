import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { defaultPlaceholderHiddenText } from "../../../shared/defaults.js";
import type { ShadcnElements } from "../../elements.js";

export const makeShadcnAutoTableEncryptedStringCell = (elements: Pick<ShadcnElements, "Button" | "Label">) => {
  const { Button, Label } = elements;

  function ShadcnAutoTableEncryptedStringCell(props: { value: any }) {
    const { value } = props;
    const [isShown, setIsShown] = useState(false);

    // TODO - add context identifiers so that the passed in base component can differentiate how they are being used
    // const labelContextIdentifier = isShown ? EncryptedStringCellComponentIds.shownValueLabel : EncryptedStringCellComponentIds.hiddenValueLabel;
    // const buttonContextIdentifier = isShown ? EncryptedStringCellComponentIds.hideButton : EncryptedStringCellComponentIds.showButton;

    return (
      <>
        <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
          <div style={{ minWidth: 0, flex: 1, overflow: "hidden", textOverflow: "ellipsis" }}>
            <Label>{isShown ? value : defaultPlaceholderHiddenText}</Label>
          </div>
          <div style={{ flexShrink: 0 }}>
            <Button onClick={() => setIsShown(!isShown)}>{isShown ? hideButtonContent : showButtonContent}</Button>
          </div>
        </div>
      </>
    );
  }

  return ShadcnAutoTableEncryptedStringCell;
};

const showButtonContent = <Eye />;
const hideButtonContent = <EyeOff />;

const EncryptedStringCellComponentIds = {
  shownValueLabel: "encrypted-string-cell-shown-value-label",
  hiddenValueLabel: "encrypted-string-cell-hidden-value-label",
  showButton: "encrypted-string-cell-show-button",
  hideButton: "encrypted-string-cell-hide-button",
};
