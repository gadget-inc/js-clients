import { Button, styled } from "@mui/material";
import React from "react";

export interface MUIFileInputProps {
  label?: string;
  value?: File;
  onChange: (value: File) => void;
}
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const MUIFileInput = (props: MUIFileInputProps) => {
  return (
    <Button component="label" variant="contained">
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
};
