import {
  actionOperation,
  backgroundActionResultOperation,
  enqueueActionOperation,
  findManyOperation,
  findOneByFieldOperation,
  findOneOperation,
} from "../src/index.js";
import { MockBulkUpdateWidgetAction, MockGlobalAction, MockWidgetCreateAction } from "./mockActions.js";

describe("operation builders", () => {
  describe("findOneOperation", () => {
    test("findOneOperation should build a find one query for a model", () => {
      expect(findOneOperation("widget", "123", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        {
          "query": "query widget($id: GadgetID!) {
          widget(id: $id) {
            __typename
            id
            state
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "id": "123",
          },
        }
      `);
    });

    test("findOneOperation should build a find one query for a model with the select option", () => {
      expect(findOneOperation("widget", "123", { __typename: true, id: true, state: true }, "widget", { select: { id: true, name: true } }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widget($id: GadgetID!) {
          widget(id: $id) {
            id
            name
            __typename
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "id": "123",
          },
        }
      `);
    });

    test("findOneOperation should build a live query for a model", () => {
      expect(findOneOperation("widget", "123", { __typename: true, id: true, state: true }, "widget", { live: true }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widget($id: GadgetID!) @live {
          widget(id: $id) {
            __typename
            id
            state
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "id": "123",
          },
        }
      `);
    });

    test("findOneOperation should build a find one query for a model with one namespace", () => {
      expect(findOneOperation("widget", "123", { __typename: true, id: true, state: true }, "widget", null, ["outer"]))
        .toMatchInlineSnapshot(`
        {
          "query": "query widget($id: GadgetID!) {
          outer {
            widget(id: $id) {
              __typename
              id
              state
            }
            gadgetMeta {
              hydrations(modelName: "widget")
            }
          }
        }",
          "variables": {
            "id": "123",
          },
        }
      `);
    });

    test("findOneOperation should build a find one query for a model with multiple namespaces", () => {
      expect(
        findOneOperation("widget", "123", { __typename: true, id: true, state: true }, "widget", null, ["outer", "inner", "reallyInner"])
      ).toMatchInlineSnapshot(`
        {
          "query": "query widget($id: GadgetID!) {
          outer {
            inner {
              reallyInner {
                widget(id: $id) {
                  __typename
                  id
                  state
                }
                gadgetMeta {
                  hydrations(modelName: "widget")
                }
              }
            }
          }
        }",
          "variables": {
            "id": "123",
          },
        }
      `);
    });
  });

  describe("findManyOperation", () => {
    test("findManyOperation should build a findMany query for a model", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int) {
          widgets(after: $after, first: $first, before: $before, last: $last) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("findManyOperation should build a findMany query for a model with the select option", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { select: { id: true, name: true } }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int) {
          widgets(after: $after, first: $first, before: $before, last: $last) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                id
                name
                __typename
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("findManyOperation should build a findMany query with search if option provided", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { search: "Search Term" }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int, $search: String) {
          widgets(after: $after, first: $first, before: $before, last: $last, search: $search) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "search": "Search Term",
          },
        }
      `);
    });

    test("findManyOperation should build a findMany query with sort if option provided", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { sort: [{ id: "Ascending" }] }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int, $sort: [WidgetSort!]) {
          widgets(after: $after, first: $first, before: $before, last: $last, sort: $sort) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "sort": [
              {
                "id": "Ascending",
              },
            ],
          },
        }
      `);
    });

    test("findManyOperation should build a findMany query with filter if option provided", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { filter: [{ id: { equals: "1" } }] }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) {
          widgets(after: $after, first: $first, before: $before, last: $last, filter: $filter) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "filter": [
              {
                "id": {
                  "equals": "1",
                },
              },
            ],
          },
        }
      `);
    });

    test("findManyOperation should build a live findMany query for a model", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { live: true })).toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int) @live {
          widgets(after: $after, first: $first, before: $before, last: $last) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });
  });

  describe("findOneByFieldOperation", () => {
    test("findOneByFieldOperation should build a find by field query for a model", () => {
      expect(findOneByFieldOperation("widget", "foo", "bar", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        {
          "query": "query widget($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) {
          widget(after: $after, first: $first, before: $before, last: $last, filter: $filter) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "filter": {
              "foo": {
                "equals": "bar",
              },
            },
            "first": 2,
          },
        }
      `);
    });

    test("findOneByFieldOperation should build a findMany query for a model with the select option", () => {
      expect(
        findOneByFieldOperation("widget", "foo", "bar", { __typename: true, id: true, state: true }, "widget", {
          select: { id: true, name: true },
        })
      ).toMatchInlineSnapshot(`
        {
          "query": "query widget($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) {
          widget(after: $after, first: $first, before: $before, last: $last, filter: $filter) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                id
                name
                __typename
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "filter": {
              "foo": {
                "equals": "bar",
              },
            },
            "first": 2,
          },
        }
      `);
    });

    test("findOneByFieldOperation should build a live query", () => {
      expect(findOneByFieldOperation("widget", "foo", "bar", { __typename: true, id: true, state: true }, "widget", { live: true }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widget($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) @live {
          widget(after: $after, first: $first, before: $before, last: $last, filter: $filter) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "filter": {
              "foo": {
                "equals": "bar",
              },
            },
            "first": 2,
          },
        }
      `);
    });
  });

  describe("actionOperation", () => {
    test("actionOperation should build a mutation query for a model action", () => {
      expect(actionOperation("createWidget", { __typename: true, id: true, state: true }, "widget", "widget", {})).toMatchInlineSnapshot(`
        {
          "query": "mutation createWidget {
          createWidget {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
            widget {
              __typename
              id
              state
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for a model action given a select option", () => {
      expect(actionOperation("createWidget", { __typename: true, id: true, state: true }, "widget", "widget", {}, { select: { id: true } }))
        .toMatchInlineSnapshot(`
        {
          "query": "mutation createWidget {
          createWidget {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
            widget {
              id
              __typename
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for a delete model action", () => {
      expect(actionOperation("deleteWidget", null, "widget", "widget", {})).toMatchInlineSnapshot(`
        {
          "query": "mutation deleteWidget {
          deleteWidget {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for an action on the current session", () => {
      expect(
        actionOperation("logInViaEmail", { __typename: true, id: true, state: true }, "session", "session", {}, undefined, "currentSession")
      ).toMatchInlineSnapshot(`
        {
          "query": "mutation logInViaEmail {
          currentSession {
            logInViaEmail {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              session {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "currentSession.session")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for an action that has a return type", () => {
      expect(
        actionOperation(
          "createWidget",
          { __typename: true, id: true, state: true },
          "widget",
          "widget",
          {},
          { select: { id: true } },
          undefined,
          false,
          true
        )
      ).toMatchInlineSnapshot(`
        {
          "query": "mutation createWidget {
          createWidget {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
            result
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a bulk mutation query for an action that has a return type", () => {
      expect(
        actionOperation(
          "bulkCreateWidgets",
          { __typename: true, id: true, state: true },
          "widget",
          "widget",
          {},
          { select: { id: true } },
          undefined,
          true,
          true
        )
      ).toMatchInlineSnapshot(`
        {
          "query": "mutation bulkCreateWidgets {
          bulkCreateWidgets {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
            result
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for a model action with a string namespace", () => {
      expect(actionOperation("createWidget", { __typename: true, id: true, state: true }, "widget", "widget", {}, undefined, "outer"))
        .toMatchInlineSnapshot(`
        {
          "query": "mutation createWidget {
          outer {
            createWidget {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              widget {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "outer.widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for a model action with a single element string array namespace", () => {
      expect(actionOperation("createWidget", { __typename: true, id: true, state: true }, "widget", "widget", {}, undefined, ["outer"]))
        .toMatchInlineSnapshot(`
        {
          "query": "mutation createWidget {
          outer {
            createWidget {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              widget {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "outer.widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for a model action with a multi element array namespace", () => {
      expect(
        actionOperation("createWidget", { __typename: true, id: true, state: true }, "widget", "widget", {}, undefined, [
          "outer",
          "inner",
          "reallyInner",
        ])
      ).toMatchInlineSnapshot(`
        {
          "query": "mutation createWidget {
          outer {
            inner {
              reallyInner {
                createWidget {
                  success
                  errors {
                    message
                    code
                    ... on InvalidRecordError {
                      validationErrors {
                        message
                        apiIdentifier
                      }
                    }
                  }
                  widget {
                    __typename
                    id
                    state
                  }
                }
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "reallyInner.inner.outer.widget")
          }
        }",
          "variables": {},
        }
      `);
    });
  });

  describe("enqueueActionOperation", () => {
    test("enqueueActionOperation should build a mutation query for enqueuing model action", () => {
      expect(enqueueActionOperation("createWidget", {}, undefined)).toMatchInlineSnapshot(`
        {
          "query": "mutation enqueueCreateWidget($backgroundOptions: EnqueueBackgroundActionOptions) {
          background {
            createWidget(backgroundOptions: $backgroundOptions) {
              success
              errors {
                message
                code
              }
              backgroundAction {
                id
              }
            }
          }
        }",
          "variables": {
            "backgroundOptions": null,
          },
        }
      `);
    });

    test("enqueueActionOperation should build a mutation query for enqueuing a bulk action action", () => {
      expect(enqueueActionOperation("bulkCreateWidgets", {}, undefined, null, true)).toMatchInlineSnapshot(`
        {
          "query": "mutation enqueueBulkCreateWidgets($backgroundOptions: EnqueueBackgroundActionOptions) {
          background {
            bulkCreateWidgets(backgroundOptions: $backgroundOptions) {
              success
              errors {
                message
                code
              }
              backgroundActions {
                id
              }
            }
          }
        }",
          "variables": {
            "backgroundOptions": null,
          },
        }
      `);
    });

    test("enqueueActionOperation with startsAt as string", () => {
      expect(enqueueActionOperation("createWidget", {}, undefined, { startAt: "2024-03-18T18:14:08.257Z" })).toMatchInlineSnapshot(`
        {
          "query": "mutation enqueueCreateWidget($backgroundOptions: EnqueueBackgroundActionOptions) {
          background {
            createWidget(backgroundOptions: $backgroundOptions) {
              success
              errors {
                message
                code
              }
              backgroundAction {
                id
              }
            }
          }
        }",
          "variables": {
            "backgroundOptions": {
              "startAt": "2024-03-18T18:14:08.257Z",
            },
          },
        }
      `);
    });

    test("enqueueActionOperation with startsAt as Date", () => {
      expect(enqueueActionOperation("createWidget", {}, undefined, { startAt: new Date("2024-03-18T18:14:08.257Z") }))
        .toMatchInlineSnapshot(`
        {
          "query": "mutation enqueueCreateWidget($backgroundOptions: EnqueueBackgroundActionOptions) {
          background {
            createWidget(backgroundOptions: $backgroundOptions) {
              success
              errors {
                message
                code
              }
              backgroundAction {
                id
              }
            }
          }
        }",
          "variables": {
            "backgroundOptions": {
              "startAt": "2024-03-18T18:14:08.257Z",
            },
          },
        }
      `);
    });
  });

  describe("backgroundActionResultOperation", () => {
    test("builds query for action", async () => {
      expect(backgroundActionResultOperation("app-job-1234567", MockWidgetCreateAction, { select: { id: true } })).toMatchInlineSnapshot(`
        {
          "query": "subscription CreateWidgetBackgroundResult($id: String!) {
          backgroundAction(id: $id) {
            id
            outcome
            result {
              ... on CreateWidgetResult {
                success
                errors {
                  message
                  code
                  ... on InvalidRecordError {
                    validationErrors {
                      message
                      apiIdentifier
                    }
                  }
                }
                widget {
                  id
                  __typename
                }
              }
            }
          }
        }",
          "variables": {
            "id": "app-job-1234567",
          },
        }
      `);
    });

    test("builds query for globalAction", async () => {
      expect(backgroundActionResultOperation("app-job-1234567", MockGlobalAction)).toMatchInlineSnapshot(`
        {
          "query": "subscription FlipAllWidgetsBackgroundResult($id: String!) {
          backgroundAction(id: $id) {
            id
            outcome
            result {
              ... on FlipAllWidgetsResult {
                success
                errors {
                  message
                  code
                  ... on InvalidRecordError {
                    validationErrors {
                      message
                      apiIdentifier
                    }
                  }
                }
                result
              }
            }
          }
        }",
          "variables": {
            "id": "app-job-1234567",
          },
        }
      `);
    });

    test("builds query for one result of a bulk action", async () => {
      expect(backgroundActionResultOperation("app-job-1234567", MockBulkUpdateWidgetAction, { select: { id: true } }))
        .toMatchInlineSnapshot(`
        {
          "query": "subscription UpdateWidgetBackgroundResult($id: String!) {
          backgroundAction(id: $id) {
            id
            outcome
            result {
              ... on UpdateWidgetResult {
                success
                errors {
                  message
                  code
                  ... on InvalidRecordError {
                    validationErrors {
                      message
                      apiIdentifier
                    }
                  }
                }
                widget {
                  id
                  __typename
                }
              }
            }
          }
        }",
          "variables": {
            "id": "app-job-1234567",
          },
        }
      `);
    });
  });
});
