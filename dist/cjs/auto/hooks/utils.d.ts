/** Allows the use of multiple refs with one component */
export declare const multiref: <T>(...refs: (React.Ref<T> | null | undefined)[]) => (value: T) => void;
