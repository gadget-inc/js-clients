export var BackgroundActionOutcome;
(function (BackgroundActionOutcome) {
    BackgroundActionOutcome["Completed"] = "completed";
    BackgroundActionOutcome["Failed"] = "failed";
})(BackgroundActionOutcome || (BackgroundActionOutcome = {}));
export var BackgroundActionPriority;
(function (BackgroundActionPriority) {
    BackgroundActionPriority["Default"] = "DEFAULT";
    BackgroundActionPriority["High"] = "HIGH";
    BackgroundActionPriority["Low"] = "LOW";
    BackgroundActionPriority["Platform"] = "PLATFORM";
})(BackgroundActionPriority || (BackgroundActionPriority = {}));
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
                                    kind: "Field",
                                    name: { kind: "Name", value: "validations" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "pattern" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "min" } },
                                                        { kind: "Field", name: { kind: "Name", value: "max" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "joinModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseJoinModelField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseRelatedModelField" },
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
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
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
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
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
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
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
                                            { kind: "Field", name: { kind: "Name", value: "allowOther" } },
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
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
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
                                    kind: "Field",
                                    name: { kind: "Name", value: "validations" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "pattern" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "min" } },
                                                        { kind: "Field", name: { kind: "Name", value: "max" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "joinModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseJoinModelField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseRelatedModelField" },
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
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
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
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
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
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
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
                                            { kind: "Field", name: { kind: "Name", value: "allowOther" } },
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
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
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
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
                    type: { kind: "ListType", type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } },
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
                                    name: { kind: "Name", value: "modelAndRelatedModels" },
                                    arguments: [
                                        {
                                            kind: "Argument",
                                            name: { kind: "Name", value: "apiIdentifier" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
                                        },
                                        {
                                            kind: "Argument",
                                            name: { kind: "Name", value: "namespace" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
                                        },
                                    ],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "key" } },
                                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "fields" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "defaultDisplayField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "fieldType" } },
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
                                    kind: "Field",
                                    name: { kind: "Name", value: "validations" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "pattern" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "min" } },
                                                        { kind: "Field", name: { kind: "Name", value: "max" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "joinModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseJoinModelField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseRelatedModelField" },
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
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
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
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
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
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
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
                                            { kind: "Field", name: { kind: "Name", value: "allowOther" } },
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
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
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
                    variable: { kind: "Variable", name: { kind: "Name", value: "modelApiIdentifier" } },
                    type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
                },
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "modelNamespace" } },
                    type: { kind: "ListType", type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } },
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
                                    name: { kind: "Name", value: "modelAndRelatedModels" },
                                    arguments: [
                                        {
                                            kind: "Argument",
                                            name: { kind: "Name", value: "apiIdentifier" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "modelApiIdentifier" } },
                                        },
                                        {
                                            kind: "Argument",
                                            name: { kind: "Name", value: "namespace" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "modelNamespace" } },
                                        },
                                    ],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "key" } },
                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                            { kind: "Field", name: { kind: "Name", value: "defaultRecord" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "fields" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                        { kind: "FragmentSpread", name: { kind: "Name", value: "SubFields" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "defaultDisplayField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "model" },
                                    arguments: [
                                        {
                                            kind: "Argument",
                                            name: { kind: "Name", value: "apiIdentifier" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "modelApiIdentifier" } },
                                        },
                                        {
                                            kind: "Argument",
                                            name: { kind: "Name", value: "namespace" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "modelNamespace" } },
                                        },
                                    ],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "key" } },
                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                            { kind: "Field", name: { kind: "Name", value: "defaultRecord" } },
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
                                                        { kind: "Field", name: { kind: "Name", value: "operatesWithRecordIdentity" } },
                                                        { kind: "Field", name: { kind: "Name", value: "isDeleteAction" } },
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
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "triggers" },
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{ kind: "Field", name: { kind: "Name", value: "specID" } }],
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
                                    kind: "Field",
                                    name: { kind: "Name", value: "validations" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "pattern" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "min" } },
                                                        { kind: "Field", name: { kind: "Name", value: "max" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "joinModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseJoinModelField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseRelatedModelField" },
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
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
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
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
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
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
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
                                            { kind: "Field", name: { kind: "Name", value: "allowOther" } },
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
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
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
export const GlobalActionMetadataDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "GlobalActionMetadata" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
                    type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
                },
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
                    type: { kind: "ListType", type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } },
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
                                    name: { kind: "Name", value: "globalAction" },
                                    arguments: [
                                        {
                                            kind: "Argument",
                                            name: { kind: "Name", value: "apiIdentifier" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
                                        },
                                        {
                                            kind: "Argument",
                                            name: { kind: "Name", value: "namespace" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
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
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "triggers" },
                                                selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "specID" } }] },
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
                                    kind: "Field",
                                    name: { kind: "Name", value: "validations" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "pattern" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "min" } },
                                                        { kind: "Field", name: { kind: "Name", value: "max" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                        { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "InlineFragment",
                                                typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "specID" } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "joinModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseJoinModelField" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseRelatedModelField" },
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
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
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
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "relatedModel" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "inverseField" },
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
                                                    selections: [
                                                        { kind: "Field", name: { kind: "Name", value: "key" } },
                                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                                                    ],
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
                                            { kind: "Field", name: { kind: "Name", value: "allowOther" } },
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
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                                },
                                {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
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
                                            { kind: "Field", name: { kind: "Name", value: "key" } },
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