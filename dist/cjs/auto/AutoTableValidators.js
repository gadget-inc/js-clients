"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAutoTableOptions = exports.validateAutoTableProps = exports.InvalidModelErrorMessage = void 0;
exports.InvalidModelErrorMessage = `"model" is not a valid Gadget model`;
const validateAutoTableProps = (manager) => {
    if (!manager) {
        throw new Error(exports.InvalidModelErrorMessage);
    }
};
exports.validateAutoTableProps = validateAutoTableProps;
const validateAutoTableOptions = (props) => {
    const { options, metadata } = props;
    if (!options) {
        return;
    }
    const cannotSearchInModel = metadata && !metadata.searchable;
    if (cannotSearchInModel) {
        if (options.searchable === true) {
            throw new Error(`Model "${metadata.apiIdentifier}" is not searchable and cannot have "searchable" set to true`);
        }
        if (options.search) {
            throw new Error(`Model "${metadata.apiIdentifier}" is not searchable and cannot have a passed in search value`);
        }
    }
};
exports.validateAutoTableOptions = validateAutoTableOptions;
//# sourceMappingURL=AutoTableValidators.js.map