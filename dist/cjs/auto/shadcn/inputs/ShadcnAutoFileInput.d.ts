import React, { type ReactNode } from "react";
import type { Control } from "../../../useActionForm.js";
import { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoFileInput: ({ Input, Label, Button, Avatar, AvatarImage, AvatarFallback, }: Pick<ShadcnElements, "Input" | "Label" | "Button" | "Avatar" | "AvatarImage" | "AvatarFallback">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>>;
