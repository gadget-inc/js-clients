"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnsureInHasManyThroughForm = exports.useIsInHasManyThroughJoinModelInput = exports.HasManyThroughJoinModelContext = exports.AutoHasManyThroughJoinModelForm = exports.useHasManyThroughInputController = exports.useHasManyThroughController = void 0;
const tslib_1 = require("tslib");
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = tslib_1.__importStar(require("react"));
const graphql_js_1 = require("../../internal/gql/graphql.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const useAutoRelationship_js_1 = require("./useAutoRelationship.js");
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
    const relatedModelOptions = (0, useRelatedModel_js_1.useRelatedModelOptions)(props);
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
    const { fieldMetadata, fieldArray, records, relatedModelOptions, inverseRelatedModelField } = (0, exports.useHasManyThroughController)({
        field: props.field,
        recordLabel: props.optionLabel,
        recordFilter: props.recordFilter,
    });
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
/**
 * A form for including join model fields in a hasManyThrough relationship.
 *
 * @example
 * ```tsx
 * //`course` hasMany `students` through `registration`
 *
 * <AutoForm action={api.course.create}>
 *   <AutoInput field="name" />
 *   <AutoHasManyThroughForm // `students` relationship field on `course` model
 *     field="students"
 *   >
 *     <AutoHasManyThroughJoinModelForm>
 *       <AutoInput // `isTuitionPaid` boolean field on `registration` model
 *         field="isTuitionPaid"
 *       />
 *     </AutoHasManyThroughJoinModelForm>
 *     <AutoInput
 *       field="firstName"
 *     />
 *   </AutoHasManyThroughForm>
 *   <AutoSubmit />
 * </AutoForm>
 *
 * ```
 *
 * @param props.children - Inputs on the join model inside AutoHasManyThroughForm.
 * @returns  Inputs on the join model inside AutoHasManyThroughForm.
 */
const AutoHasManyThroughJoinModelForm = (props) => {
    (0, exports.useEnsureInHasManyThroughForm)();
    return react_1.default.createElement(exports.HasManyThroughJoinModelContext.Provider, { value: true }, props.children);
};
exports.AutoHasManyThroughJoinModelForm = AutoHasManyThroughJoinModelForm;
/** Context to track if inside a HasManyThrough join model. */
exports.HasManyThroughJoinModelContext = (0, react_1.createContext)(null);
/** Export a hook that checks if inside the component. */
const useIsInHasManyThroughJoinModelInput = () => {
    return (0, react_1.useContext)(exports.HasManyThroughJoinModelContext) !== null;
};
exports.useIsInHasManyThroughJoinModelInput = useIsInHasManyThroughJoinModelInput;
/** Ensures component is used inside AutoHasManyThroughForm. */
const useEnsureInHasManyThroughForm = () => {
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    if (!relationshipContext || !relationshipContext.hasManyThrough) {
        throw new Error(`'AutoJoinModelInput' can only be used within a 'AutoHasManyThroughForm' component`);
    }
};
exports.useEnsureInHasManyThroughForm = useEnsureInHasManyThroughForm;
//# sourceMappingURL=useHasManyThroughController.js.map