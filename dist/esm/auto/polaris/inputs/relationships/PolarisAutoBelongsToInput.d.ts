import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
/**
 * A belongsTo field input component for use within <AutoForm></AutoForm> components
 * This component is used to configure relationships with records from a related model
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBelongsToInput field="parentModel" label="Parent" />
 * </AutoForm>
 * ```
 * @param props.field - The belongsTo field API identifier
 * @param props.label - The label of the belongTo field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The belongsTo field input component
 */
export declare const PolarisAutoBelongsToInput: import("../../../AutoInput.js").AutoInputComponent<AutoRelationshipInputProps>;
