import React from "react";
import type { AutoRelationshipFormProps } from "./interfaces/AutoRelationshipInputProps.js";
export interface AutoInputComponent<P> extends React.FC<P> {
    __autoInput: true;
}
export declare function autoInput<P extends {
    field: string;
}>(Component: React.FC<P>): AutoInputComponent<P>;
export declare function autoRelationshipForm<P extends AutoRelationshipFormProps>(Component: React.FC<P>): AutoInputComponent<P>;
export declare function isAutoInput(component: React.ReactElement): component is React.ReactElement<any, AutoInputComponent<any>>;
