import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
/**
 * A hasManyThrough field input component for use within <AutoForm></AutoForm> components
 * This component is used to configure relationships with the sibling model by creating and deleting records in the join model
 * @example
 * ```tsx
 * <AutoForm action={api.student.create}>
 *   <AutoHasManyThroughInput field="courses" />
 * </AutoForm>
 * ```
 * @param props.field - The hasManyThrough field API identifier
 * @param props.label - The label of the hasManyThrough field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasManyThrough field input component
 */
export declare const PolarisAutoHasManyThroughInput: import("../../../AutoInput.js").AutoInputComponent<AutoRelationshipInputProps>;
