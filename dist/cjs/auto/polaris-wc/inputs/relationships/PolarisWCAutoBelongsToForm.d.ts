import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
/**
 * A belongsTo field form component for use within <AutoForm></AutoForm> components using Polaris Web Components.
 * This component allows related model records to be created or updated from the current model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBelongsToForm field="parentModel" >
 *     <AutoInput field="parentModelField" />
 *   </AutoBelongsToForm>
 * </AutoForm>
 * ```
 * @param props.field - The belongsTo field API identifier
 * @param props.label - The label of the belongTo form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/>.
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The belongsTo field form component
 */
export declare const PolarisWCAutoBelongsToForm: import("../../../AutoInput.js").AutoInputComponent<AutoRelationshipFormProps>;
