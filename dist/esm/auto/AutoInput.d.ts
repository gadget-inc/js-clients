import React from "react";
export interface AutoInputComponent<P> extends React.FC<P> {
    __autoInput: true;
}
export declare function autoInput<P extends {
    field: string;
}>(Component: React.FC<P>): AutoInputComponent<P & {
    selectPaths?: string[];
}>;
export declare function isAutoInput(component: React.ReactElement): component is React.ReactElement<any, AutoInputComponent<any>>;
