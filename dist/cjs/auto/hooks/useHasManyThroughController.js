"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasManyThroughInputController = exports.useHasManyThroughController = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const graphql_js_1 = require("../../internal/gql/graphql.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModel_js_1 = require("./useRelatedModel.js");
const utils_js_1 = require("./utils.js");
const useHasManyThroughController = (props) => {
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { path, metadata } = fieldMetadata;
    (0, utils_js_1.assertFieldType)({
        fieldApiIdentifier: props.field,
        actualFieldType: metadata.fieldType,
        expectedFieldType: graphql_js_1.GadgetFieldType.HasManyThrough,
    });
    const configuration = metadata.configuration;
    const joinModelHasManyFieldApiIdentifier = (0, api_client_core_1.assert)(configuration.joinModelHasManyFieldApiIdentifier, "joinModelHasManyFieldApiIdentifier is required for hasManyThrough fields");
    const relatedModelOptions = (0, useRelatedModel_js_1.useRelatedModelOptions)({
        field: props.field,
        optionLabel: props.primaryLabel,
        secondaryLabel: props.secondaryLabel,
        tertiaryLabel: props.tertiaryLabel,
    });
    const fieldArrayPath = path.replace(metadata.apiIdentifier, joinModelHasManyFieldApiIdentifier);
    const fieldArray = (0, useActionForm_js_1.useFieldArray)({ name: fieldArrayPath, keyName: "_fieldArrayKey" });
    const records = (0, react_1.useMemo)(() => {
        return fieldArray.fields.map((field) => {
            const { _fieldArrayKey, ...rest } = field;
            return rest;
        });
    }, [fieldArray.fields]);
    const inverseRelatedModelField = (0, react_1.useMemo)(() => {
        return metadata.configuration.inverseRelatedModelField?.apiIdentifier;
    }, [metadata.configuration]);
    return {
        fieldArrayPath,
        fieldMetadata,
        fieldArray,
        records,
        relatedModelOptions,
        inverseRelatedModelField,
        joinModelField: joinModelHasManyFieldApiIdentifier,
        joinModelApiIdentifier: configuration.joinModel?.apiIdentifier,
    };
};
exports.useHasManyThroughController = useHasManyThroughController;
const useHasManyThroughInputController = (props) => {
    const { fieldMetadata, fieldArray, records, relatedModelOptions, inverseRelatedModelField } = (0, exports.useHasManyThroughController)(props);
    const { relatedModel } = relatedModelOptions;
    const { remove, append } = fieldArray;
    const selectedRecords = (0, react_1.useMemo)(() => {
        const siblingRecords = [];
        const seenIds = new Set();
        for (const record of records) {
            if (inverseRelatedModelField && record[inverseRelatedModelField] && !seenIds.has(record[inverseRelatedModelField].id)) {
                siblingRecords.push(record[inverseRelatedModelField]);
                seenIds.add(record[inverseRelatedModelField].id);
            }
        }
        return siblingRecords;
    }, [records, inverseRelatedModelField]);
    const errorMessage = relatedModel.error?.message;
    const isLoading = relatedModel.fetching;
    const onRemoveRecord = (0, react_1.useCallback)((record) => {
        const index = records.findIndex((value) => inverseRelatedModelField && value[inverseRelatedModelField]?.id === record.id);
        if (index < 0) {
            return;
        }
        remove(index);
    }, [inverseRelatedModelField, records, remove]);
    const onSelectRecord = (0, react_1.useCallback)((record) => {
        const index = records.findIndex((value) => inverseRelatedModelField && value[inverseRelatedModelField]?.id === record.id);
        if (index >= 0) {
            remove(index);
        }
        else if (inverseRelatedModelField) {
            append({
                [inverseRelatedModelField]: { ...record, _link: record.id },
            });
        }
    }, [inverseRelatedModelField, records, remove, append]);
    return {
        fieldMetadata,
        relatedModelOptions,
        selectedRecords,
        errorMessage,
        isLoading,
        fieldArray,
        onSelectRecord,
        onRemoveRecord,
    };
};
exports.useHasManyThroughInputController = useHasManyThroughInputController;
//# sourceMappingURL=useHasManyThroughController.js.map