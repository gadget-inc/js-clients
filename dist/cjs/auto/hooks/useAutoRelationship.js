"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoRelationship = exports.useRelationshipContext = exports.RelationshipContext = void 0;
const tslib_1 = require("tslib");
const client_hooks_1 = require("@gadgetinc/client-hooks");
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
    (0, client_hooks_1.assert)(formMetadata.model, "useAutoRelationship must be used within an AutoForm for a model");
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    return {
        path,
        metadata,
    };
};
exports.useAutoRelationship = useAutoRelationship;
//# sourceMappingURL=useAutoRelationship.js.map