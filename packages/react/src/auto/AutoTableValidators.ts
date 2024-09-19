import type { useTable } from "../useTable.js";

export const InvalidModelErrorMessage = `"model" is not a valid Gadget model`;

export const validateAutoTableProps = (manager: Parameters<typeof useTable>[0]) => {
  if (!manager) {
    throw new Error(InvalidModelErrorMessage);
  }
};
