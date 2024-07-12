/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import * as types from "./graphql.js";

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
  "\n  fragment FieldMetadata on GadgetField {\n    name\n    apiIdentifier\n    fieldType\n    requiredArgumentForInput\n    ... on GadgetModelField {\n      sortable\n      filterable\n    }\n    configuration {\n      __typename\n      fieldType\n      validations {\n        __typename\n        ... on GadgetRegexFieldValidation {\n          name\n          specID\n          pattern\n        }\n        ... on GadgetRangeFieldValidation {\n          name\n          specID\n          min\n          max\n        }\n        ... on GadgetOnlyImageFileFieldValidation {\n          name\n          specID\n          allowAnimatedImages\n        }\n        ... on GadgetGenericFieldValidation {\n          name\n          specID\n        }\n      }\n      ... on GadgetHasManyConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n        inverseField {\n          apiIdentifier\n        }\n      }\n      ... on GadgetHasOneConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n        inverseField {\n          apiIdentifier\n        }\n      }\n      ... on GadgetBelongsToConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetEnumConfig {\n        allowMultiple\n        allowOther\n        options {\n          name\n          color\n        }\n      }\n      ... on GadgetDateTimeConfig {\n        includeTime\n      }\n    }\n  }\n":
    types.FieldMetadataFragmentDoc,
  "\n  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      model(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        apiIdentifier\n        namespace\n        name\n        fields {\n          ...FieldMetadata\n        }\n      }\n    }\n  }\n":
    types.GetModelMetadataDocument,
  "\n  fragment SubFields on GadgetField {\n    configuration {\n      __typename\n      ... on GadgetObjectFieldConfig {\n        name\n        fields {\n          ...FieldMetadata\n          configuration {\n            __typename\n            ... on GadgetObjectFieldConfig {\n              name\n              fields {\n                ...FieldMetadata\n                configuration {\n                  __typename\n                  ... on GadgetObjectFieldConfig {\n                    name\n                    fields {\n                      ...FieldMetadata\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n":
    types.SubFieldsFragmentDoc,
  "\n  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {\n    gadgetMeta {\n      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {\n        name\n        apiIdentifier\n        defaultRecord\n        action(apiIdentifier: $action) {\n          name\n          apiIdentifier\n          operatesWithRecordIdentity\n          inputFields {\n            ...FieldMetadata\n            ...SubFields\n          }\n        }\n      }\n    }\n  }\n":
    types.ModelActionMetadataDocument,
  "\n  query GlobalActionMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      globalAction(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        name\n        apiIdentifier\n        inputFields {\n          ...FieldMetadata\n          ...SubFields\n        }\n      }\n    }\n  }\n":
    types.GlobalActionMetadataDocument,
  "\n  query RolesMetadata {\n    gadgetMeta {\n      roles {\n        name\n        key\n        selectable\n      }\n    }\n  }\n":
    types.RolesMetadataDocument,
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
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment FieldMetadata on GadgetField {\n    name\n    apiIdentifier\n    fieldType\n    requiredArgumentForInput\n    ... on GadgetModelField {\n      sortable\n      filterable\n    }\n    configuration {\n      __typename\n      fieldType\n      validations {\n        __typename\n        ... on GadgetRegexFieldValidation {\n          name\n          specID\n          pattern\n        }\n        ... on GadgetRangeFieldValidation {\n          name\n          specID\n          min\n          max\n        }\n        ... on GadgetOnlyImageFileFieldValidation {\n          name\n          specID\n          allowAnimatedImages\n        }\n        ... on GadgetGenericFieldValidation {\n          name\n          specID\n        }\n      }\n      ... on GadgetHasManyConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n        inverseField {\n          apiIdentifier\n        }\n      }\n      ... on GadgetHasOneConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n        inverseField {\n          apiIdentifier\n        }\n      }\n      ... on GadgetBelongsToConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetEnumConfig {\n        allowMultiple\n        allowOther\n        options {\n          name\n          color\n        }\n      }\n      ... on GadgetDateTimeConfig {\n        includeTime\n      }\n    }\n  }\n"
): (typeof documents)["\n  fragment FieldMetadata on GadgetField {\n    name\n    apiIdentifier\n    fieldType\n    requiredArgumentForInput\n    ... on GadgetModelField {\n      sortable\n      filterable\n    }\n    configuration {\n      __typename\n      fieldType\n      validations {\n        __typename\n        ... on GadgetRegexFieldValidation {\n          name\n          specID\n          pattern\n        }\n        ... on GadgetRangeFieldValidation {\n          name\n          specID\n          min\n          max\n        }\n        ... on GadgetOnlyImageFileFieldValidation {\n          name\n          specID\n          allowAnimatedImages\n        }\n        ... on GadgetGenericFieldValidation {\n          name\n          specID\n        }\n      }\n      ... on GadgetHasManyConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n        inverseField {\n          apiIdentifier\n        }\n      }\n      ... on GadgetHasOneConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n        inverseField {\n          apiIdentifier\n        }\n      }\n      ... on GadgetBelongsToConfig {\n        relatedModel {\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetEnumConfig {\n        allowMultiple\n        allowOther\n        options {\n          name\n          color\n        }\n      }\n      ... on GadgetDateTimeConfig {\n        includeTime\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      model(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        apiIdentifier\n        namespace\n        name\n        fields {\n          ...FieldMetadata\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      model(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        apiIdentifier\n        namespace\n        name\n        fields {\n          ...FieldMetadata\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment SubFields on GadgetField {\n    configuration {\n      __typename\n      ... on GadgetObjectFieldConfig {\n        name\n        fields {\n          ...FieldMetadata\n          configuration {\n            __typename\n            ... on GadgetObjectFieldConfig {\n              name\n              fields {\n                ...FieldMetadata\n                configuration {\n                  __typename\n                  ... on GadgetObjectFieldConfig {\n                    name\n                    fields {\n                      ...FieldMetadata\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  fragment SubFields on GadgetField {\n    configuration {\n      __typename\n      ... on GadgetObjectFieldConfig {\n        name\n        fields {\n          ...FieldMetadata\n          configuration {\n            __typename\n            ... on GadgetObjectFieldConfig {\n              name\n              fields {\n                ...FieldMetadata\n                configuration {\n                  __typename\n                  ... on GadgetObjectFieldConfig {\n                    name\n                    fields {\n                      ...FieldMetadata\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {\n    gadgetMeta {\n      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {\n        name\n        apiIdentifier\n        defaultRecord\n        action(apiIdentifier: $action) {\n          name\n          apiIdentifier\n          operatesWithRecordIdentity\n          inputFields {\n            ...FieldMetadata\n            ...SubFields\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {\n    gadgetMeta {\n      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {\n        name\n        apiIdentifier\n        defaultRecord\n        action(apiIdentifier: $action) {\n          name\n          apiIdentifier\n          operatesWithRecordIdentity\n          inputFields {\n            ...FieldMetadata\n            ...SubFields\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GlobalActionMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      globalAction(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        name\n        apiIdentifier\n        inputFields {\n          ...FieldMetadata\n          ...SubFields\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GlobalActionMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      globalAction(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        name\n        apiIdentifier\n        inputFields {\n          ...FieldMetadata\n          ...SubFields\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query RolesMetadata {\n    gadgetMeta {\n      roles {\n        name\n        key\n        selectable\n      }\n    }\n  }\n"
): (typeof documents)["\n  query RolesMetadata {\n    gadgetMeta {\n      roles {\n        name\n        key\n        selectable\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any>
  ? TType
  : never;
