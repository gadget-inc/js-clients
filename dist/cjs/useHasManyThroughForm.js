"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasManyThroughForm = void 0;
const react_1 = require("react");
const AutoForm_js_1 = require("./auto/AutoForm.js");
const useAutoRelationship_js_1 = require("./auto/hooks/useAutoRelationship.js");
const useHasManyThroughController_js_1 = require("./auto/hooks/useHasManyThroughController.js");
const useRelatedModel_js_1 = require("./auto/hooks/useRelatedModel.js");
const useActionForm_js_1 = require("./useActionForm.js");
const useHasManyThroughForm = (props) => {
    const { field, children } = props;
    const { metadata } = (0, useAutoRelationship_js_1.useAutoRelationship)({ field });
    const { setValue } = (0, useActionForm_js_1.useFormContext)();
    const childPaths = children && (0, AutoForm_js_1.extractPathsFromChildren)(children);
    const hasChildForm = childPaths && childPaths.length > 0;
    const { fieldArrayPath, fieldArray, records, relatedModelOptions, inverseRelatedModelField, joinModelField, joinModelApiIdentifier } = (0, useHasManyThroughController_js_1.useHasManyThroughController)(props);
    const { fields, append, remove } = fieldArray;
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
    const metaDataPathPrefix = relationshipContext?.transformMetadataPath
        ? relationshipContext.transformMetadataPath(props.field)
        : pathPrefix;
    (0, react_1.useEffect)(() => {
        for (const [index, field] of fields.entries()) {
            if (inverseRelatedModelField &&
                field[inverseRelatedModelField] &&
                field[inverseRelatedModelField].id &&
                !("_link" in field)) {
                // use setValue so that we don't trigger a re-render
                setValue(`${fieldArrayPath}.${index}.${inverseRelatedModelField}._link`, field[inverseRelatedModelField].id);
            }
        }
    }, [setValue, inverseRelatedModelField, fields, fieldArrayPath]);
    const listboxId = `HasManyThroughListboxInPopover-${field}`;
    if (metadata?.configuration.__typename !== "GadgetHasManyThroughConfig") {
        throw new Error("AutoHasManyThroughForm can only be used for HasManyThrough fields");
    }
    const { search, searchFilterOptions: siblingModelOptions, relatedModel: { fetching: siblingRecordsLoading, records: siblingRecords }, pagination: siblingPagination, } = relatedModelOptions;
    const siblingModelName = metadata.name ?? "Unknown";
    const joinRecords = (0, react_1.useMemo)(() => {
        return fields.flatMap((field, idx) => {
            const record = records[idx];
            if (!record) {
                return [];
            }
            return [[field._fieldArrayKey, idx, record]];
        });
    }, [fields, records]);
    const primaryLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.primaryLabel);
    return {
        fields,
        append,
        remove,
        joinRecords,
        primaryLabel,
        hasChildForm,
        childPaths,
        listboxId,
        pathPrefix,
        metaDataPathPrefix,
        siblingModelName,
        siblingRecordsLoading,
        siblingRecords,
        siblingPagination,
        search,
        siblingModelOptions,
        metadata,
        joinModelField,
        joinModelApiIdentifier,
        inverseRelatedModelField,
        fieldArrayPath,
        fieldArray,
        field,
        records,
        children,
        relatedModelOptions,
    };
};
exports.useHasManyThroughForm = useHasManyThroughForm;
//# sourceMappingURL=useHasManyThroughForm.js.map