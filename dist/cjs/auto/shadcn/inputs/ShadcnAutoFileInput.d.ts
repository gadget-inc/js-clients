import { default as React } from "react";
import { type AutoFileInputProps } from "../../shared/AutoInputTypes.js";
import { type ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoFileInput: ({ Input, Label, Button, Avatar, AvatarImage, AvatarFallback, }: Pick<ShadcnElements, "Input" | "Label" | "Button" | "Avatar" | "AvatarImage" | "AvatarFallback">) => import("../../AutoInput.js").AutoInputComponent<AutoFileInputProps & React.HtmlHTMLAttributes<HTMLDivElement>>;
