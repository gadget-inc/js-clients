import * as types from './graphql.js';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
declare const documents: {
    "\n  fragment FieldMetadata on GadgetField {\n    name\n    apiIdentifier\n    fieldType\n    requiredArgumentForInput\n    hasDefault\n    ... on GadgetModelField {\n      sortable\n      filterable\n    }\n    configuration {\n      __typename\n      fieldType\n      ... on GadgetHasManyConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetBelongsToConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetEnumConfig {\n        allowMultiple\n        options {\n          name\n          color\n        }\n      }\n    }\n  }\n": DocumentNode<types.FieldMetadataFragment, unknown>;
    "\n  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      model(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        apiIdentifier\n        namespace\n        name\n        fields {\n          ...FieldMetadata\n        }\n      }\n    }\n  }\n": DocumentNode<types.GetModelMetadataQuery, types.Exact<{
        apiIdentifier: string;
        namespace?: types.InputMaybe<string | string[]> | undefined;
    }>>;
    "\n  fragment SubFields on GadgetField {\n    configuration {\n      __typename\n      ... on GadgetObjectFieldConfig {\n        name\n        fields {\n          ...FieldMetadata\n          configuration {\n            __typename\n            ... on GadgetObjectFieldConfig {\n              name\n              fields {\n                ...FieldMetadata\n                configuration {\n                  __typename\n                  ... on GadgetObjectFieldConfig {\n                    name\n                    fields {\n                      ...FieldMetadata\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": DocumentNode<types.SubFieldsFragment, unknown>;
    "\n  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {\n    gadgetMeta {\n      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {\n        name\n        action(apiIdentifier: $action) {\n          name\n          apiIdentifier\n          operatesWithRecordIdentity\n          inputFields {\n            ...FieldMetadata\n            ...SubFields\n          }\n        }\n      }\n    }\n  }\n": DocumentNode<types.ModelActionMetadataQuery, types.Exact<{
        modelApiIdentifier: string;
        modelNamespace?: types.InputMaybe<string | string[]> | undefined;
        action: string;
    }>>;
    "\n  query RolesMetadata {\n    gadgetMeta {\n      roles {\n        name\n        selectable\n      }\n    }\n  }\n": DocumentNode<types.RolesMetadataQuery, types.Exact<{
        [key: string]: never;
    }>>;
};
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export declare function graphql(source: string): unknown;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function graphql(source: "\n  fragment FieldMetadata on GadgetField {\n    name\n    apiIdentifier\n    fieldType\n    requiredArgumentForInput\n    hasDefault\n    ... on GadgetModelField {\n      sortable\n      filterable\n    }\n    configuration {\n      __typename\n      fieldType\n      ... on GadgetHasManyConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetBelongsToConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetEnumConfig {\n        allowMultiple\n        options {\n          name\n          color\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FieldMetadata on GadgetField {\n    name\n    apiIdentifier\n    fieldType\n    requiredArgumentForInput\n    hasDefault\n    ... on GadgetModelField {\n      sortable\n      filterable\n    }\n    configuration {\n      __typename\n      fieldType\n      ... on GadgetHasManyConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetBelongsToConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetEnumConfig {\n        allowMultiple\n        options {\n          name\n          color\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function graphql(source: "\n  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      model(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        apiIdentifier\n        namespace\n        name\n        fields {\n          ...FieldMetadata\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      model(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        apiIdentifier\n        namespace\n        name\n        fields {\n          ...FieldMetadata\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function graphql(source: "\n  fragment SubFields on GadgetField {\n    configuration {\n      __typename\n      ... on GadgetObjectFieldConfig {\n        name\n        fields {\n          ...FieldMetadata\n          configuration {\n            __typename\n            ... on GadgetObjectFieldConfig {\n              name\n              fields {\n                ...FieldMetadata\n                configuration {\n                  __typename\n                  ... on GadgetObjectFieldConfig {\n                    name\n                    fields {\n                      ...FieldMetadata\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment SubFields on GadgetField {\n    configuration {\n      __typename\n      ... on GadgetObjectFieldConfig {\n        name\n        fields {\n          ...FieldMetadata\n          configuration {\n            __typename\n            ... on GadgetObjectFieldConfig {\n              name\n              fields {\n                ...FieldMetadata\n                configuration {\n                  __typename\n                  ... on GadgetObjectFieldConfig {\n                    name\n                    fields {\n                      ...FieldMetadata\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function graphql(source: "\n  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {\n    gadgetMeta {\n      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {\n        name\n        action(apiIdentifier: $action) {\n          name\n          apiIdentifier\n          operatesWithRecordIdentity\n          inputFields {\n            ...FieldMetadata\n            ...SubFields\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {\n    gadgetMeta {\n      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {\n        name\n        action(apiIdentifier: $action) {\n          name\n          apiIdentifier\n          operatesWithRecordIdentity\n          inputFields {\n            ...FieldMetadata\n            ...SubFields\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function graphql(source: "\n  query RolesMetadata {\n    gadgetMeta {\n      roles {\n        name\n        selectable\n      }\n    }\n  }\n"): (typeof documents)["\n  query RolesMetadata {\n    gadgetMeta {\n      roles {\n        name\n        selectable\n      }\n    }\n  }\n"];
export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
export {};
