"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertFieldType = exports.multiref = void 0;
/** Allows the use of multiple refs with one component */
const multiref = (...refs) => {
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
exports.multiref = multiref;
const assertFieldType = (props) => {
    const { fieldApiIdentifier, actualFieldType, expectedFieldType } = props;
    if (actualFieldType !== expectedFieldType) {
        throw new Error(`Field "${fieldApiIdentifier}" is not a ${expectedFieldType} field. Only ${expectedFieldType} fields are supported for this input type`);
    }
};
exports.assertFieldType = assertFieldType;
//# sourceMappingURL=utils.js.map