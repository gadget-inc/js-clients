import { type ModelMetadata } from "src/metadata.js";
import type { useTable } from "../useTable.js";

export const InvalidModelErrorMessage = `"model" is not a valid Gadget model`;

export const validateAutoTableProps = (manager: Parameters<typeof useTable>[0]) => {
  if (!manager) {
    throw new Error(InvalidModelErrorMessage);
  }
};

export const validateAutoTableOptions = (props: { options: Parameters<typeof useTable>[1]; metadata?: ModelMetadata }) => {
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
