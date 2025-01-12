import type { ShadcnElements } from "./elements.js";
import { makeAutoButton } from "./ShadcnAutoButton.js";
export * from "./elements.js";

/**
 * Build the Autocomponents library for your shadcn presentation components.
 * Autocomponents will render these given components, so they need to take the same base props that mainline shadcn components do.
 */
export const makeAutocomponents = (elements: ShadcnElements) => {
  return {
    AutoButton: makeAutoButton(elements),
    //TODO:
    // AutoTable: makeAutoTable(elements),
    // AutoForm: makeAutoForm(elements),
  };
};
