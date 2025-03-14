import type { ShadcnElements } from "./elements.js";
import { makeAutoButton } from "./ShadcnAutoButton.js";
import { makeAutoForm } from "./ShadcnAutoForm.js";
import { makeAutoTable } from "./ShadcnAutoTable.js";
export * from "./elements.js";
export type { ShadcnAutoFormProps as AutoFormProps } from "./ShadcnAutoForm.js";
export type { ShadcnAutoTableProps as AutoTableProps } from "./ShadcnAutoTable.js";
/**
 * Build the Autocomponents library for your shadcn presentation components.
 * Autocomponents will render these given components, so they need to take the same base props that mainline shadcn components do.
 */
export const makeAutocomponents = (elements: ShadcnElements) => {
  return {
    AutoButton: makeAutoButton(elements),
    AutoTable: makeAutoTable(elements),
    ...makeAutoForm(elements),
  };
};
