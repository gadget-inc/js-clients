"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasManyThroughForm = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useAutoRelationship_js_1 = require("./auto/hooks/useAutoRelationship.js");
const useHasManyThroughController_js_1 = require("./auto/hooks/useHasManyThroughController.js");
const useRelatedModel_js_1 = require("./auto/hooks/useRelatedModel.js");
const useActionForm_js_1 = require("./useActionForm.js");
const useHasManyThroughForm = (props) => {
    const { field, children, allowMultipleSelections } = props;
    const { metadata } = (0, useAutoRelationship_js_1.useAutoRelationship)({ field });
    const { setValue } = (0, useActionForm_js_1.useFormContext)();
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
    const { search, searchFilterOptions: rawSiblingModelOptions, relatedModel: { fetching: siblingRecordsLoading, records: siblingRecords }, pagination: siblingPagination, } = relatedModelOptions;
    const siblingModelName = metadata.name ?? "Unknown";
    const joinRecords = (0, react_1.useMemo)(() => {
        return fields.flatMap((field, idx) => {
            const record = records[idx];
            if (!record ||
                !inverseRelatedModelField ||
                !record[inverseRelatedModelField] // Do not consider join records that are not connected to a sibling model record
            ) {
                return [];
            }
            return [[field._fieldArrayKey, idx, record]];
        });
    }, [fields, records, inverseRelatedModelField]);
    const recordLabel = (0, useRelatedModel_js_1.useRecordLabelObjectFromProps)(props);
    const siblingModelOptions = (0, react_1.useMemo)(() => {
        if (!allowMultipleSelections && inverseRelatedModelField) {
            return rawSiblingModelOptions.filter((option) => !joinRecords.some((joinRecord) => {
                const rawJoinRecord = joinRecord[2];
                const siblingFromJoinRecord = rawJoinRecord[inverseRelatedModelField];
                return siblingFromJoinRecord && "id" in siblingFromJoinRecord && siblingFromJoinRecord.id === option.id;
            }));
        }
        return rawSiblingModelOptions;
    }, [rawSiblingModelOptions, allowMultipleSelections, inverseRelatedModelField, joinRecords]);
    return {
        fields,
        append,
        remove,
        joinRecords,
        listboxId,
        pathPrefix,
        metaDataPathPrefix,
        recordLabel,
        siblingModelName,
        siblingRecordsLoading,
        siblingRecords,
        siblingPagination,
        search,
        siblingModelOptions,
        metadata,
        joinModelField,
        joinModelApiIdentifier: (0, api_client_core_1.assert)(joinModelApiIdentifier, `The join model in the "${field}" hasManyThrough field is required`),
        inverseRelatedModelField: (0, api_client_core_1.assert)(inverseRelatedModelField, `The belongsTo field between the join model and sibling model in the "${field}" hasManyThrough field is required`),
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