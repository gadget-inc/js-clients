import { RenderResult, act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { PolarisBelongsToInput } from "../../../src/auto/polaris/inputs/PolarisBelongsToInput.js";
import { ActionMetadata } from "../../../src/metadata.js";
import { mockUrqlClient } from "../../testWrappers.js";
import { MockForm } from "../MockForm.js";

describe("PolarisBelongsToInput", () => {
  describe("for widget create", () => {
    test("it preloads the first findMany result", async () => {
      render(<PolarisBelongsToInput field="section" />, { wrapper: MockForm(jest.fn(), metadata) });

      expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
        first: 25,
      });
      expect(mockUrqlClient.executeQuery.mock.calls[0][0].query.definitions[0].name.value).toEqual("sections");
    });

    describe("when it loads data", () => {
      let result: RenderResult;
      let mockHandleSubmit: jest.Mock;

      beforeEach(() => {
        mockHandleSubmit = jest.fn();
        result = render(<PolarisBelongsToInput field="section" />, { wrapper: MockForm(mockHandleSubmit, metadata) });
        mockUrqlClient.executeQuery.pushResponse("sections", sectionsQueryResponse);
      });

      test("it renders the section input", async () => {
        expect(result.getByLabelText("Section")).toBeInTheDocument();
      });

      test("it fills in the section options based on the data", async () => {
        const user = userEvent.setup();

        await act(async () => {
          await user.selectOptions(screen.getByLabelText("Section"), [screen.getByText("Section Bar")]);
          await user.click(screen.getByRole("button"));
        });

        const formState = mockHandleSubmit.mock.calls[0][0];
        expect(formState).toEqual({
          widget: {
            section: { id: "2" },
          },
        });
      });
    });
  });
});

const metadata: ActionMetadata = {
  name: "Widget",
  action: {
    name: "Create",
    apiIdentifier: "create",
    inputFields: [
      {
        name: "Widget",
        apiIdentifier: "widget",
        fieldType: "Object",
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetObjectFieldConfig",
          fieldType: "Object",
          name: null,
          fields: [
            {
              name: "Section",
              apiIdentifier: "section",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                relatedModel: {
                  apiIdentifier: "section",
                  __typename: "GadgetModel",
                },
              },
            },
          ],
        },
        __typename: "GadgetObjectField",
      },
    ],
    __typename: "GadgetAction",
  },
  __typename: "GadgetModel",
} as ActionMetadata;

const sectionsQueryResponse = {
  stale: false,
  hasNext: false,
  data: {
    sections: {
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: "eyJpZCI6IjEifQ==",
        endCursor: "eyJpZCI6IjIifQ==",
        __typename: "PageInfo",
      },
      edges: [
        {
          cursor: "eyJpZCI6IjEifQ==",
          node: {
            __typename: "Section",
            id: "1",
            createdAt: "2024-06-13T16:04:34.448Z",
            name: "Section Foo",
            updatedAt: "2024-06-13T16:04:34.448Z",
          },
          __typename: "SectionEdge",
        },
        {
          cursor: "eyJpZCI6IjIifQ==",
          node: {
            __typename: "Section",
            id: "2",
            createdAt: "2024-06-13T16:04:37.261Z",
            name: "Section Bar",
            updatedAt: "2024-06-13T16:04:37.261Z",
          },
          __typename: "SectionEdge",
        },
      ],
      __typename: "SectionConnection",
    },
    gadgetMeta: {
      hydrations: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
};
