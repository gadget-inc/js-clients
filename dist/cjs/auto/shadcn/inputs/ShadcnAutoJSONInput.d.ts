import React from "react";
import { type AutoJSONInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoJSONInput: ({ Label, Textarea }: Pick<ShadcnElements, "Input" | "Label" | "Textarea">) => import("../../AutoInput.js").AutoInputComponent<AutoJSONInputProps & Partial<Omit<React.HTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "defaultValue" | "defaultChecked">>>;
