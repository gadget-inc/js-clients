import { type AutoRolesInputProps, type StringOnlyLabel } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoRolesInputProps = StringOnlyLabel<AutoRolesInputProps> & {
    placeholder?: string;
    disabled?: boolean;
};
/**
 * A RoleList selector within AutoForm using Polaris Web Components.
 * Uses a searchable combobox for multiple role selection.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoRolesInput field="roles" />
 * </AutoForm>
 * ```
 * @param props.field - The RoleList field API identifier.
 * @param props.label - Label of the RoleList selector.
 * @returns The AutoRolesInput component
 */
export declare const PolarisWCAutoRolesInput: import("../../AutoInput.js").AutoInputComponent<PolarisWCAutoRolesInputProps>;
