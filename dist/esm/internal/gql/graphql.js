/** The type of a given field of a model or other in-transit object within Gadget's type system */
export var GadgetFieldType;
(function (GadgetFieldType) {
    GadgetFieldType["Any"] = "Any";
    GadgetFieldType["Array"] = "Array";
    GadgetFieldType["BelongsTo"] = "BelongsTo";
    GadgetFieldType["Boolean"] = "Boolean";
    GadgetFieldType["Code"] = "Code";
    GadgetFieldType["Color"] = "Color";
    GadgetFieldType["Computed"] = "Computed";
    GadgetFieldType["DateTime"] = "DateTime";
    GadgetFieldType["Email"] = "Email";
    GadgetFieldType["EncryptedString"] = "EncryptedString";
    GadgetFieldType["Enum"] = "Enum";
    GadgetFieldType["File"] = "File";
    GadgetFieldType["HasMany"] = "HasMany";
    GadgetFieldType["HasManyThrough"] = "HasManyThrough";
    GadgetFieldType["HasOne"] = "HasOne";
    GadgetFieldType["Id"] = "ID";
    GadgetFieldType["Json"] = "JSON";
    GadgetFieldType["Money"] = "Money";
    GadgetFieldType["Null"] = "Null";
    GadgetFieldType["Number"] = "Number";
    GadgetFieldType["Object"] = "Object";
    GadgetFieldType["Password"] = "Password";
    GadgetFieldType["RecordState"] = "RecordState";
    GadgetFieldType["RichText"] = "RichText";
    GadgetFieldType["RoleAssignments"] = "RoleAssignments";
    GadgetFieldType["String"] = "String";
    GadgetFieldType["Url"] = "URL";
    GadgetFieldType["Vector"] = "Vector";
})(GadgetFieldType || (GadgetFieldType = {}));
/** A sort order for a field. Can be Ascending or Descending. */
export var SortOrder;
(function (SortOrder) {
    SortOrder["Ascending"] = "Ascending";
    SortOrder["Descending"] = "Descending";
})(SortOrder || (SortOrder = {}));
export const FieldMetadataFragmentDoc = {
    kind: "Document",
    definitions: [
        {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "FieldMetadata" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    { kind: "Field", name: { kind: "Name", value: "name" } },
                    { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                    { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                    { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
                    {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "sortable" } },
                                { kind: "Field", name: { kind: "Name", value: "filterable" } },
                            ],
                        },
                    },
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "configuration" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "options" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "color" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};
export const SubFieldsFragmentDoc = {
    kind: "Document",
    definitions: [
        {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "SubFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "configuration" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "fields" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "configuration" },
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [
                                                                    { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [
                                                                                { kind: "Field", name: { kind: "Name", value: "name" } },
                                                                                {
                                                                                    kind: "Field",
                                                                                    name: { kind: "Name", value: "fields" },
                                                                                    selectionSet: {
                                                                                        kind: "SelectionSet",
                                                                                        selections: [
                                                                                            { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                                                            {
                                                                                                kind: "Field",
                                                                                                name: { kind: "Name", value: "configuration" },
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [
                                                                                                        { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                                                                                        {
                                                                                                            kind: "InlineFragment",
                                                                                                            typeCondition: {
                                                                                                                kind: "NamedType",
                                                                                                                name: { kind: "Name", value: "GadgetObjectFieldConfig" },
                                                                                                            },
                                                                                                            selectionSet: {
                                                                                                                kind: "SelectionSet",
                                                                                                                selections: [
                                                                                                                    { kind: "Field", name: { kind: "Name", value: "name" } },
                                                                                                                    {
                                                                                                                        kind: "Field",
                                                                                                                        name: { kind: "Name", value: "fields" },
                                                                                                                        selectionSet: {
                                                                                                                            kind: "SelectionSet",
                                                                                                                            selections: [
                                                                                                                                { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                },
                                                                                            },
                                                                                        ],
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "FieldMetadata" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    { kind: "Field", name: { kind: "Name", value: "name" } },
                    { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                    { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                    { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
                    {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "sortable" } },
                                { kind: "Field", name: { kind: "Name", value: "filterable" } },
                            ],
                        },
                    },
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "configuration" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "options" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "color" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};
export const GetModelMetadataDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "GetModelMetadata" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
                    type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "gadgetMeta" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "model" },
                                    arguments: [
                                        {
                                            kind: "Argument",
                                            name: { kind: "Name", value: "apiIdentifier" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
                                        },
                                    ],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "fields" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } }],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "FieldMetadata" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    { kind: "Field", name: { kind: "Name", value: "name" } },
                    { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                    { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                    { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
                    {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "sortable" } },
                                { kind: "Field", name: { kind: "Name", value: "filterable" } },
                            ],
                        },
                    },
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "configuration" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "options" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "color" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};
export const ModelActionMetadataDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "ModelActionMetadata" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "model" } },
                    type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
                },
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "action" } },
                    type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "gadgetMeta" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "model" },
                                    arguments: [
                                        {
                                            kind: "Argument",
                                            name: { kind: "Name", value: "apiIdentifier" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "model" } },
                                        },
                                    ],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "action" },
                                                arguments: [
                                                    {
                                                        kind: "Argument",
                                                        name: { kind: "Name", value: "apiIdentifier" },
                                                        value: { kind: "Variable", name: { kind: "Name", value: "action" } },
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "inputFields" },
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [
                                                                    { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                                    { kind: "FragmentSpread", name: { kind: "Name", value: "SubFields" } },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "FieldMetadata" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    { kind: "Field", name: { kind: "Name", value: "name" } },
                    { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                    { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                    { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
                    {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "sortable" } },
                                { kind: "Field", name: { kind: "Name", value: "filterable" } },
                            ],
                        },
                    },
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "configuration" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "options" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "color" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "SubFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "configuration" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "fields" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "configuration" },
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [
                                                                    { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [
                                                                                { kind: "Field", name: { kind: "Name", value: "name" } },
                                                                                {
                                                                                    kind: "Field",
                                                                                    name: { kind: "Name", value: "fields" },
                                                                                    selectionSet: {
                                                                                        kind: "SelectionSet",
                                                                                        selections: [
                                                                                            { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                                                            {
                                                                                                kind: "Field",
                                                                                                name: { kind: "Name", value: "configuration" },
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [
                                                                                                        { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                                                                                        {
                                                                                                            kind: "InlineFragment",
                                                                                                            typeCondition: {
                                                                                                                kind: "NamedType",
                                                                                                                name: { kind: "Name", value: "GadgetObjectFieldConfig" },
                                                                                                            },
                                                                                                            selectionSet: {
                                                                                                                kind: "SelectionSet",
                                                                                                                selections: [
                                                                                                                    { kind: "Field", name: { kind: "Name", value: "name" } },
                                                                                                                    {
                                                                                                                        kind: "Field",
                                                                                                                        name: { kind: "Name", value: "fields" },
                                                                                                                        selectionSet: {
                                                                                                                            kind: "SelectionSet",
                                                                                                                            selections: [
                                                                                                                                { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                },
                                                                                            },
                                                                                        ],
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};
export const RolesMetadataDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "RolesMetadata" },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "gadgetMeta" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "roles" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                            { kind: "Field", name: { kind: "Name", value: "selectable" } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};
//# sourceMappingURL=graphql.js.map