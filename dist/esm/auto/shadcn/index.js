import { makeAutoButton } from "./ShadcnAutoButton.js";
import { makeAutoForm } from "./ShadcnAutoForm.js";
export * from "./elements.js";
/**
 * Build the Autocomponents library for your shadcn presentation components.
 * Autocomponents will render these given components, so they need to take the same base props that mainline shadcn components do.
 */
export const makeAutocomponents = (elements) => {
    return {
        AutoButton: makeAutoButton(elements),
        AutoForm: makeAutoForm(elements),
        // AutoTable: makeAutoTable(elements),
    };
};
//# sourceMappingURL=index.js.map