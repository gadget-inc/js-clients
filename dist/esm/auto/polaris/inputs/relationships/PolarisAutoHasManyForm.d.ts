import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
type HasManyFormProps = Omit<AutoRelationshipFormProps, "recordFilter">;
/**
 * A hasMany field form component for use within <AutoForm></AutoForm> components
 * This component allows related model records to be created, updated, or deleted from the current model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.author.create}>
 *   <AutoHasManyForm field="books" >
 *     <AutoInput field="title" />
 *   </AutoHasManyForm>
 * </AutoForm>
 * ```
 * @param props.field - The hasMany field API identifier
 * @param props.label - The label of the hasMany form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/> and will be rendered for each child record.
 * @param props.recordLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasMany field form component
 */
export declare const PolarisAutoHasManyForm: import("../../../AutoInput.js").AutoInputComponent<HasManyFormProps>;
export {};
