"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphql = void 0;
const types = __importStar(require("./graphql.js"));
/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment FieldMetadata on GadgetField {\n    name\n    apiIdentifier\n    fieldType\n    requiredArgumentForInput\n    ... on GadgetModelField {\n      sortable\n      filterable\n    }\n    configuration {\n      __typename\n      fieldType\n      ... on GadgetHasManyConfig {\n        relatedModel {\n          apiIdentifier\n        }\n      }\n      ... on GadgetBelongsToConfig {\n        relatedModel {\n          apiIdentifier\n        }\n      }\n      ... on GadgetEnumConfig {\n        allowMultiple\n        options {\n          name\n          color\n        }\n      }\n    }\n  }\n": types.FieldMetadataFragmentDoc,
    "\n  query GetModelMetadata($apiIdentifier: String!) {\n    gadgetMeta {\n      model(apiIdentifier: $apiIdentifier) {\n        apiIdentifier\n        name\n        fields {\n          ...FieldMetadata\n        }\n      }\n    }\n  }\n": types.GetModelMetadataDocument,
    "\n  fragment SubFields on GadgetField {\n    configuration {\n      __typename\n      ... on GadgetObjectFieldConfig {\n        name\n        fields {\n          ...FieldMetadata\n          configuration {\n            __typename\n            ... on GadgetObjectFieldConfig {\n              name\n              fields {\n                ...FieldMetadata\n                configuration {\n                  __typename\n                  ... on GadgetObjectFieldConfig {\n                    name\n                    fields {\n                      ...FieldMetadata\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.SubFieldsFragmentDoc,
    "\n  query ModelActionMetadata($model: String!, $action: String!) {\n    gadgetMeta {\n      model(apiIdentifier: $model) {\n        name\n        action(apiIdentifier: $action) {\n          name\n          apiIdentifier\n          inputFields {\n            ...FieldMetadata\n            ...SubFields\n          }\n        }\n      }\n    }\n  }\n": types.ModelActionMetadataDocument,
    "\n  query RolesMetadata {\n    gadgetMeta {\n      roles {\n        name\n        selectable\n      }\n    }\n  }\n": types.RolesMetadataDocument,
};
function graphql(source) {
    return documents[source] ?? {};
}
exports.graphql = graphql;
//# sourceMappingURL=gql.js.map