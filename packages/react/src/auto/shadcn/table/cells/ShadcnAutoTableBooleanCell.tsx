import * as React from "react";
import type { ShadcnElements } from "../../elements.js";

export const makeShadcnAutoTableBooleanCell = (elements: Pick<ShadcnElements, "Label">) => {
  const { Label } = elements;

  function ShadcnAutoTableBooleanCell(props: { value: any }) {
    const { value } = props;

    const displayValue = value === true ? Checkmark : value === false ? Cross : null;

    return (
      <>
        <Label className="flex items-center justify-center">{displayValue}</Label>
      </>
    );
  }

  return (props: { value: any }) => {
    return <ShadcnAutoTableBooleanCell {...props} />;
  };
};

const Checkmark = "✓";
const Cross = "✗";
