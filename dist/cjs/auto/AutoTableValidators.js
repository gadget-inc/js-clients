"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAutoTableProps = exports.InvalidModelErrorMessage = void 0;
exports.InvalidModelErrorMessage = `"model" is not a valid Gadget model`;
const validateAutoTableProps = (manager) => {
    if (!manager) {
        throw new Error(exports.InvalidModelErrorMessage);
    }
};
exports.validateAutoTableProps = validateAutoTableProps;
//# sourceMappingURL=AutoTableValidators.js.map