export const InvalidModelErrorMessage = `"model" is not a valid Gadget model`;
export const validateAutoTableProps = (manager) => {
    if (!manager) {
        throw new Error(InvalidModelErrorMessage);
    }
};
//# sourceMappingURL=AutoTableValidators.js.map