"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAutoInput = exports.autoRelationshipForm = exports.autoInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoFormContext_js_1 = require("./AutoFormContext.js");
const useAutoRelationship_js_1 = require("./hooks/useAutoRelationship.js");
const useFieldMetadata_js_1 = require("./hooks/useFieldMetadata.js");
const useSelectedPathsFromRecordLabel_js_1 = require("./hooks/useSelectedPathsFromRecordLabel.js");
function autoInput(Component) {
    const WrappedComponent = (props) => {
        const { hasCustomFormChildren, registerFields, fieldSet } = (0, AutoFormContext_js_1.useFieldsFromChildComponents)();
        const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
        const fieldApiIdentifier = (0, useFieldMetadata_js_1.useFieldApiIdentifier)(props.field);
        const fieldSetPath = (0, react_1.useMemo)(() => {
            if (relationshipContext) {
                return relationshipContext?.transformMetadataPath
                    ? relationshipContext.transformMetadataPath(fieldApiIdentifier)
                    : relationshipContext.transformPath(fieldApiIdentifier);
            }
            // Non relationship context - Use field name directly
            return fieldApiIdentifier;
        }, [relationshipContext, fieldApiIdentifier]);
        (0, react_1.useEffect)(() => {
            registerFields([fieldSetPath]);
        }, [registerFields, fieldSetPath]);
        if (hasCustomFormChildren && !fieldSet.has(fieldSetPath)) {
            // Do not render before registration
            return null;
        }
        return react_1.default.createElement(Component, { ...props });
    };
    WrappedComponent.__autoInput = true;
    return WrappedComponent;
}
exports.autoInput = autoInput;
function autoRelationshipForm(Component) {
    const WrappedComponent = (props) => {
        const { hasCustomFormChildren, registerFields, fieldSet } = (0, AutoFormContext_js_1.useFieldsFromChildComponents)();
        const { selectedPaths: displayedRecordPaths, metadata } = (0, useSelectedPathsFromRecordLabel_js_1.useSelectedPathsFromRecordLabel)(props);
        const relationshipTransformedPaths = (0, useFieldMetadata_js_1.useRelationshipTransformedMetaDataPaths)(props.field);
        const displayedRecordPathsToRegister = (0, react_1.useMemo)(() => {
            const fallbackMetaDataPathPrefix = getFallbackMetaDataPathPrefix(props.field, metadata);
            return displayedRecordPaths.map((path) => `${relationshipTransformedPaths?.metaDataPath ?? fallbackMetaDataPathPrefix}.${path}`);
        }, [displayedRecordPaths, props.field, relationshipTransformedPaths?.metaDataPath, metadata]);
        (0, react_1.useEffect)(() => {
            registerFields(displayedRecordPathsToRegister);
        }, [registerFields, displayedRecordPathsToRegister]);
        if (hasCustomFormChildren && !displayedRecordPathsToRegister.every((field) => fieldSet.has(field))) {
            // Do not render before registration
            return null;
        }
        return react_1.default.createElement(Component, { ...props });
    };
    WrappedComponent.__autoInput = true;
    return autoInput(WrappedComponent);
}
exports.autoRelationshipForm = autoRelationshipForm;
function isAutoInput(component) {
    return typeof component.type === "function" && "__autoInput" in component.type;
}
exports.isAutoInput = isAutoInput;
const getFallbackMetaDataPathPrefix = (field, metadata) => {
    const config = metadata?.configuration;
    if (config?.__typename === "GadgetHasManyThroughConfig") {
        // In HMT fields, the labels are based on the sibling model, but need to be routed through the join model
        const joinModelHasManyFieldApiIdentifier = config.joinModelHasManyFieldApiIdentifier;
        const inverseRelatedModelFieldApiId = config.inverseRelatedModelField?.apiIdentifier;
        const fallbackMetaDataPath = `${joinModelHasManyFieldApiIdentifier}.${inverseRelatedModelFieldApiId}`;
        return fallbackMetaDataPath;
    }
    return field;
};
//# sourceMappingURL=AutoInput.js.map