export const InvalidModelErrorMessage = `"model" is not a valid Gadget model`;
export const validateAutoTableProps = (manager) => {
    if (!manager) {
        throw new Error(InvalidModelErrorMessage);
    }
};
export const validateAutoTableOptions = (props) => {
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
//# sourceMappingURL=AutoTableValidators.js.map