import React from "react";
import "./auto-date-time-input.css";
declare const ShadcnAutoTimeInput: (props: {
    id?: string;
    timeString?: string;
    handleTimeInput: (time: string) => void;
}) => React.JSX.Element;
export default ShadcnAutoTimeInput;
