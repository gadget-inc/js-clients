import type { ComponentProps } from "react";
import React from "react";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";
import "../styles/rich-text.css";
/**
 * Prefer using the LazyLoadedMUIAutoRichTextInput.tsx variant of this component to reduce the bundle size by default.
 */
export default function PolarisAutoRichTextInput(props: ComponentProps<typeof AutoRichTextInput>): React.JSX.Element;
