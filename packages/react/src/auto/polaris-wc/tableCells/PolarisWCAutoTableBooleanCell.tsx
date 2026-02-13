import React from "react";

export const PolarisWCAutoTableBooleanCell = (props: { value: boolean }) => {
  const { value } = props;

  return (
    <s-stack direction="inline" alignItems="center">
      <s-icon type={value ? "check" : "x"} tone={value ? "success" : "neutral"} />
    </s-stack>
  );
};
