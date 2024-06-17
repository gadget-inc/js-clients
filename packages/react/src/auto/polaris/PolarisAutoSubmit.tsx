import { Button } from "@shopify/polaris";
import React from "react";
import { useAutoFormMetadata } from "../AutoFormContext.js";

export const PolarisAutoSubmit = (props: { children?: string | string[] }) => {
  const { submit } = useAutoFormMetadata();

  return (
    <Button submit onClick={submit}>
      {props.children || "Submit"}
    </Button>
  );
};
