"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphql = void 0;
const tslib_1 = require("tslib");
const types = tslib_1.__importStar(require("./graphql.js"));
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
    "\n  fragment FieldMetadata on GadgetField {\n    name\n    apiIdentifier\n    fieldType\n    requiredArgumentForInput\n    ... on GadgetModelField {\n      sortable\n      filterable\n    }\n    configuration {\n      __typename\n      fieldType\n      ... on GadgetHasManyConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetBelongsToConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetEnumConfig {\n        allowMultiple\n        options {\n          name\n          color\n        }\n      }\n    }\n  }\n": types.FieldMetadataFragmentDoc,
    "\n  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      model(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        apiIdentifier\n        namespace\n        name\n        fields {\n          ...FieldMetadata\n        }\n      }\n    }\n  }\n": types.GetModelMetadataDocument,
    "\n  fragment SubFields on GadgetField {\n    configuration {\n      __typename\n      ... on GadgetObjectFieldConfig {\n        name\n        fields {\n          ...FieldMetadata\n          configuration {\n            __typename\n            ... on GadgetObjectFieldConfig {\n              name\n              fields {\n                ...FieldMetadata\n                configuration {\n                  __typename\n                  ... on GadgetObjectFieldConfig {\n                    name\n                    fields {\n                      ...FieldMetadata\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.SubFieldsFragmentDoc,
    "\n  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {\n    gadgetMeta {\n      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {\n        name\n        action(apiIdentifier: $action) {\n          name\n          apiIdentifier\n          inputFields {\n            ...FieldMetadata\n            ...SubFields\n          }\n        }\n      }\n    }\n  }\n": types.ModelActionMetadataDocument,
    "\n  query RolesMetadata {\n    gadgetMeta {\n      roles {\n        name\n        selectable\n      }\n    }\n  }\n": types.RolesMetadataDocument,
};
function graphql(source) {
    return documents[source] ?? {};
}
exports.graphql = graphql;
//# sourceMappingURL=gql.js.map