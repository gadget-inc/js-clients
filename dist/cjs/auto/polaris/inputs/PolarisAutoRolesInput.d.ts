import { type AutoRolesInputProps } from "../../shared/AutoInputTypes.js";
import type { PolarisFixedOptionsMultiComboboxProps } from "../PolarisFixedOptionsCombobox.js";
type PolarisAutoRolesInputProps = AutoRolesInputProps & Partial<PolarisFixedOptionsMultiComboboxProps>;
/**
 * A RoleList selector within AutoForm.
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
export declare const PolarisAutoRolesInput: import("../../AutoInput.js").AutoInputComponent<PolarisAutoRolesInputProps>;
export {};
