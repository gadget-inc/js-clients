"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoRelationship = exports.useRelationshipContext = exports.RelationshipContext = void 0;
const tslib_1 = require("tslib");
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
exports.RelationshipContext = react_1.default.createContext(undefined);
const useRelationshipContext = () => {
    return react_1.default.useContext(exports.RelationshipContext);
};
exports.useRelationshipContext = useRelationshipContext;
const useAutoRelationship = (props) => {
    const { field } = props;
    const formMetadata = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const model = (0, api_client_core_1.assert)(formMetadata.model, "useAutoRelationship must be used within an AutoForm for a model");
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const pathPrefix = path.replace(new RegExp(`^${model.apiIdentifier}\\.`), "");
    return {
        path,
        metadata,
        pathPrefix,
    };
};
exports.useAutoRelationship = useAutoRelationship;
//# sourceMappingURL=useAutoRelationship.js.map