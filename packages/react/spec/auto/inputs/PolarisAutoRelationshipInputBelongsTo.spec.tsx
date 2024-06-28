import type { RenderResult } from "@testing-library/react";
import { act, render, screen } from "@testing-library/react";
import { UserEvent, userEvent } from "@testing-library/user-event";
import React from "react";
import { useRelationshipInputController } from "../../../src/auto/hooks/useRelationshipInputController.js";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.js";
import { RelatedModelOptions } from "../../../src/auto/polaris/inputs/PolarisAutoRelationshipInput.js";
import { PolarisAutoSubmit } from "../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import type { ActionMetadata } from "../../../src/metadata.js";
import { testApi as api } from "../../apis.js";
import { mockUrqlClient } from "../../testWrappers.js";
import { mockWidgetFindBy } from "../support/helper.js";
import { PolarisMockedProviders } from "./PolarisMockedProviders.js";

/**
 * The Polaris Combobox renders the selectable options in a way that is unaccessible to the testing library
 * This is a workaround to get the options to render in a way that can be interacted with
 */
const ListOfRelatedModelOptions = (props: {
  field: string;
  optionLabel?: string | ((record: Record<string, any>) => string);
  searchValue?: string;
}) => {
  const { field, optionLabel, searchValue } = props;

  const { relatedModel, metadata, pagination, search, selection } = useRelationshipInputController({
    field: field,
    optionLabel: optionLabel,
  });
  return (
    <>
      <p data-testid="metadataName">{metadata.name}</p>
      <p data-testid="searchValue">{search.value}</p>

      <p data-testid="selectionId">{selection.id}</p>
      <p data-testid="selectionId">{selection.label}</p>

      <button data-testid="setSearchButton" onClick={() => search.set(searchValue)} />
      <button data-testid="clearSearchButton" onClick={() => search.set(undefined)} />
      <button data-testid="nextPageButton" onClick={() => pagination.loadNextPageOfRecords()} />
      <button data-testid="resetPaginationButton" onClick={() => pagination.resetPagination()} />

      <RelatedModelOptions relatedModel={relatedModel} selection={selection} />
    </>
  );
};

describe("PolarisAutoRelationshipInput - belongsTo fields", () => {
  let result: RenderResult;
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  const setupRenderResult = (opts: { searchValue?: string; optionLabel?: string | ((record: Record<string, any>) => string) }) => {
    const { searchValue, optionLabel } = opts;
    result = render(
      <PolarisAutoForm action={api.widget.update} findBy="42">
        <ListOfRelatedModelOptions field="section" searchValue={searchValue} optionLabel={optionLabel} />
        <PolarisAutoSubmit>RealSubmitButton</PolarisAutoSubmit>
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );
    mockUpdateWidgetFindBy();
  };

  const clickButton = async (buttonTestId: string) => {
    await act(async () => {
      await user.click(screen.getByTestId(buttonTestId));
    });
  };

  test("it preloads the selected value and the first findMany result", async () => {
    setupRenderResult({});

    // First call to get field metadata
    expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
      action: "update",
      modelApiIdentifier: "widget",
      modelNamespace: null,
    });
    expect(mockUrqlClient.executeQuery.mock.calls[0][0].query.definitions[0].name.value).toEqual("ModelActionMetadata");

    // Retrieving the existing record value
    expect(mockUrqlClient.executeQuery.mock.calls[1][0].variables).toEqual({ id: "42" });
    expect(mockUrqlClient.executeQuery.mock.calls[1][0].query.definitions[0].name.value).toEqual("widget");

    // Retrieving the first page of records for the related model
    expect(mockUrqlClient.executeQuery.mock.calls[2][0].variables).toEqual({ first: 25 });
    expect(mockUrqlClient.executeQuery.mock.calls[2][0].query.definitions[0].name.value).toEqual("sections");
  });

  test("it fills in the section options based on the data", async () => {
    setupRenderResult({});

    await act(async () => {
      await user.click(screen.getByText("Section Bar"));
      await user.click(screen.queryByText("RealSubmitButton")!);
    });

    const formSubmitRequest = mockUrqlClient.executeMutation.mock.calls[0][0];
    const linkedSectionId = formSubmitRequest.variables.widget.section._link;
    expect(linkedSectionId).toEqual("2");
  });

  test("it properly filters records based on the search value", async () => {
    setupRenderResult({ searchValue: "Section Bar" }); // At this point there is no search so everything is shown
    expect(screen.queryByText("Section Foo")).toBeInTheDocument();

    await clickButton("setSearchButton"); // It is filtered out after applying the search
    mockSectionQueryResponse([sectionBarEdge]); // Simulate search query response
    expect(screen.queryByText("Section Foo")).toBeNull();

    await clickButton("clearSearchButton"); // Clear the search to bring it back
    mockSectionQueryResponse(); // Simulate search query response
    expect(screen.queryByText("Section Foo")).toBeInTheDocument();
    expect(screen.queryByText("Section Bar")).toBeInTheDocument();

    await act(async () => {
      // Select Foo
      await user.click(screen.getByText("Section Foo"));
    });

    await clickButton("setSearchButton"); // Filter it out after it is already selected
    mockSectionQueryResponse([sectionBarEdge]);
    expect(screen.queryByText("Section Foo")).toBeNull();

    await act(async () => {
      await user.click(screen.queryByText("RealSubmitButton")!);
    });

    // Even though the search is applied and the selected value is not shown, the selected value is still submitted
    const formSubmitRequest = mockUrqlClient.executeMutation.mock.calls[3][0];
    const linkedSectionId = formSubmitRequest.variables.widget.section._link;
    expect(linkedSectionId).toEqual("1");
  });

  describe("optionsLabel", () => {
    test("it properly renders options with an `optionsLabel` string parameter", async () => {
      setupRenderResult({ optionLabel: "customField" });
      expect(screen.getByText(sectionFooEdge.node.customField)).toBeInTheDocument();
      expect(screen.getByText(sectionBarEdge.node.customField)).toBeInTheDocument();
    });

    test("it properly renders options with an `optionsLabel` function parameter", async () => {
      setupRenderResult({ optionLabel: (record) => `Name: ${record.name} id: ${record.id}` });
      expect(screen.getByText("Name: Section Foo id: 1")).toBeInTheDocument();
      expect(screen.getByText("Name: Section Bar id: 2")).toBeInTheDocument();
    });
  });
});

const mockUpdateWidgetFindBy = () => {
  mockWidgetFindBy(
    {
      name: "Update",
      apiIdentifier: "update",
      operatesWithRecordIdentity: true,
    },
    { id: "42" }
  );
  mockSectionQueryResponse();
};

const mockSectionQueryResponse = (edges?: any[]) => {
  mockUrqlClient.executeQuery.pushResponse("sections", getSectionsQueryResponse(edges));
};

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

const sectionFooEdge = {
  cursor: "eyJpZCI6IjEifQ==",
  node: {
    __typename: "Section",
    id: "1",
    createdAt: "2024-06-13T16:04:34.448Z",
    name: "Section Foo",
    customField: "Section Foo custom field",
    updatedAt: "2024-06-13T16:04:34.448Z",
  },
  __typename: "SectionEdge",
};

const sectionBarEdge = {
  cursor: "eyJpZCI6IjIifQ==",
  node: {
    __typename: "Section",
    id: "2",
    createdAt: "2024-06-13T16:04:37.261Z",
    name: "Section Bar",
    customField: "Section Bar custom field",
    updatedAt: "2024-06-13T16:04:37.261Z",
  },
  __typename: "SectionEdge",
};

const getSectionsQueryResponse = (edges?: any[]) => ({
  stale: false,
  hasNext: true,
  data: {
    sections: {
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: "eyJpZCI6IjEifQ==",
        endCursor: "eyJpZCI6IjIifQ==",
        __typename: "PageInfo",
      },
      edges: [...(edges ? edges : [sectionFooEdge, sectionBarEdge])],
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
});
