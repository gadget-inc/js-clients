/** Allows the use of multiple refs with one component */
export const multiref = (...refs) => {
    return (value) => {
        for (const ref of refs) {
            if (ref) {
                if (typeof ref == "function") {
                    ref(value);
                }
                else {
                    ref.current = value;
                }
            }
        }
    };
};
export const assertFieldType = (props) => {
    const { fieldApiIdentifier, actualFieldType, expectedFieldType } = props;
    if (actualFieldType !== expectedFieldType) {
        throw new Error(`Field "${fieldApiIdentifier}" is not a ${expectedFieldType} field. Only ${expectedFieldType} fields are supported for this input type`);
    }
};
//# sourceMappingURL=utils.js.map