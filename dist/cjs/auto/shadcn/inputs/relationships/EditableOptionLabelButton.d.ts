import React from "react";
import { type DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeShadcnEditableOptionLabelButton: ({ Badge, Button, Label }: Pick<ShadcnElements, "Badge" | "Button" | "Label">) => ({ option }: {
    option?: DisplayedRecordOption | null;
}) => React.JSX.Element;
