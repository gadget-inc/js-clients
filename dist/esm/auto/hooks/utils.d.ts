import { type GadgetFieldType } from "../../internal/gql/graphql.js";
/** Allows the use of multiple refs with one component */
export declare const multiref: <T>(...refs: (React.Ref<T> | null | undefined)[]) => (value: T) => void;
export declare const assertFieldType: (props: {
    fieldApiIdentifier: string;
    actualFieldType: GadgetFieldType;
    expectedFieldType: GadgetFieldType;
}) => void;
