import React from "react";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { MUIAutoRichTextInput } from "./LazyLoadedMUIAutoRichTextInput.js";
import { MUIAutoBooleanInput } from "./MUIAutoBooleanInput.js";
import MUIAutoDateTimePicker from "./MUIAutoDateTimePicker.js";
import { MUIAutoEncryptedStringInput } from "./MUIAutoEncryptedStringInput.js";
import { MUIAutoEnumInput } from "./MUIAutoEnumInput.js";
import { MUIAutoFileInput } from "./MUIAutoFileInput.js";
import { MUIAutoIdInput } from "./MUIAutoIdInput.js";
import { MUIAutoJSONInput } from "./MUIAutoJSONInput.js";
import { MUIAutoPasswordInput } from "./MUIAutoPasswordInput.js";
import { MUIAutoRolesInput } from "./MUIAutoRolesInput.js";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";
import { MUIAutoBelongsToInput } from "./relationships/MUIAutoBelongsToInput.js";
import { MUIAutoHasManyInput } from "./relationships/MUIAutoHasManyInput.js";
export const MUIAutoInput = (props) => {
    const { metadata } = useFieldMetadata(props.field);
    const config = metadata.configuration;
    switch (config.fieldType) {
        case FieldType.Id: {
            return React.createElement(MUIAutoIdInput, { field: props.field, label: props.label });
        }
        case FieldType.String:
        case FieldType.Number:
        case FieldType.Email:
        case FieldType.Color:
        case FieldType.Url: {
            return React.createElement(MUIAutoTextInput, { field: props.field, label: props.label });
        }
        case FieldType.EncryptedString: {
            return React.createElement(MUIAutoEncryptedStringInput, { field: props.field, label: props.label });
        }
        case FieldType.Password: {
            return React.createElement(MUIAutoPasswordInput, { field: props.field, label: props.label });
        }
        case FieldType.Boolean: {
            return React.createElement(MUIAutoBooleanInput, { field: props.field, label: props.label });
        }
        case FieldType.DateTime: {
            return React.createElement(MUIAutoDateTimePicker, { field: props.field, label: props.label });
        }
        case FieldType.Json: {
            return React.createElement(MUIAutoJSONInput, { field: props.field, label: props.label });
        }
        case FieldType.Enum: {
            return React.createElement(MUIAutoEnumInput, { field: props.field, label: props.label });
        }
        case FieldType.File: {
            return React.createElement(MUIAutoFileInput, { field: props.field, label: props.label });
        }
        case FieldType.RoleAssignments: {
            return React.createElement(MUIAutoRolesInput, { field: props.field, label: props.label });
        }
        case FieldType.BelongsTo: {
            return React.createElement(MUIAutoBelongsToInput, { field: props.field, label: props.label });
        }
        case FieldType.HasOne: {
            // TODO - Update implementation of MUIAutoHasOneInput after 1-1 mapping maintenance system is updated in API
            // return <MUIAutoHasOneInput field={props.field}  label={props.label} />;
            return null;
        }
        case FieldType.HasMany: {
            return React.createElement(MUIAutoHasManyInput, { field: props.field, label: props.label });
        }
        case FieldType.HasManyThrough: {
            // TODO: implement HasManyThrough input with join model record create/delete/update
            return null;
        }
        case FieldType.RichText: {
            return React.createElement(MUIAutoRichTextInput, { field: props.field, label: props.label });
        }
        case FieldType.Money: {
            // TODO: implement money input
            return null;
        }
        // Not rendered as an input
        case FieldType.Vector:
        case FieldType.Computed:
            return null;
        default: {
            throw new Error(`Unsupported field type for MUI AutoForm: ${metadata.fieldType}`);
        }
    }
};
//# sourceMappingURL=MUIAutoInput.js.map