import React from "react";
import { PolarisAutoTable } from "../../../../src/auto/polaris/PolarisAutoTable.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";

describe("AutoTable - Sort", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const mockModelMetadata = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.options.endpoint}?operation=GetModelMetadata`,
        times: 1,
      },
      (req) => {
        console.log("fetch metadata");
        req.reply(sortTestWidgetModelMetadata);
      }
    ).as("getModelMetadata");
  };

  const mockGetWidgets = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.options.endpoint}?operation=widgets`,
        times: 1,
      },
      (req) => {
        console.log("fetch unsorted data");
        req.reply(mockUnsortedIdContent);
      }
    ).as("getWidgets");
  };

  const mockGetWidgetsWithDescendingSort = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.options.endpoint}?operation=widgets`,
        times: 1,
      },
      (req) => {
        console.log("fetch sorted data");
        req.reply(mockDescendingSortedIdContent);
      }
    ).as("getWidgetsWithDescendingSort");
  };

  const mockGetWidgetsWithAscendingSort = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.options.endpoint}?operation=widgets`,
        times: 1,
      },
      (req) => {
        console.log("fetch sorted data");
        req.reply(mockAscendingSortedIdContent);
      }
    ).as("getWidgetsWithAscendingSort");
  };

  it("cycles through sorting directions when the column is selected", () => {
    mockModelMetadata();
    mockGetWidgets();
    cy.mountWithWrapper(<PolarisAutoTable model={api.widget} />, PolarisWrapper);
    cy.wait("@getModelMetadata");
    cy.wait("@getWidgets").its("request.body.variables").should("deep.equal", { first: 50 });

    mockGetWidgetsWithDescendingSort();
    cy.contains("Sortable Id").click({ force: true });
    cy.wait("@getWidgetsWithDescendingSort");
    cy.get("@getWidgetsWithDescendingSort")
      .its("request.body.variables")
      .should("deep.equal", {
        first: 50,
        sort: {
          sortableId: "Descending",
        },
      });

    mockGetWidgetsWithAscendingSort();
    cy.contains("Sortable Id").click({ force: true });
    cy.wait("@getWidgetsWithAscendingSort");
    cy.get("@getWidgetsWithAscendingSort")
      .its("request.body.variables")
      .should("deep.equal", {
        first: 50,
        sort: {
          sortableId: "Ascending",
        },
      });

    mockGetWidgets();
    cy.contains("Sortable Id").click({ force: true });
    cy.wait("@getWidgets");
    cy.get("@getWidgets").its("request.body.variables").should("deep.equal", {
      first: 50,
    });
  });

  it("displays the default sorting direction when it is set explicitly", () => {
    mockModelMetadata();
    mockGetWidgetsWithAscendingSort();
    cy.mountWithWrapper(<PolarisAutoTable model={api.widget} initialSort={{ id: "Ascending" }} />, PolarisWrapper);
    cy.get("@getWidgetsWithAscendingSort")
      .its("request.body.variables")
      .should("deep.equal", {
        first: 50,
        sort: {
          id: "Ascending",
        },
      });
  });
});

const sortTestWidgetModelMetadata = {
  data: {
    gadgetMeta: {
      model: {
        apiIdentifier: "sortWidget",
        namespace: [],
        name: "Sort Widget",
        fields: [
          {
            name: "Sortable Id",
            apiIdentifier: "sortableId",
            fieldType: "ID",
            requiredArgumentForInput: true,
            sortable: true,
            filterable: true,
            __typename: "GadgetModelField",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
              fieldType: "ID",
              validations: [
                {
                  __typename: "GadgetGenericFieldValidation",
                  name: "Uniqueness",
                  specID: "gadget/validation/unique",
                },
                {
                  __typename: "GadgetGenericFieldValidation",
                  name: "Required",
                  specID: "gadget/validation/required",
                },
              ],
            },
          },
          {
            name: "Sortable integer field",
            apiIdentifier: "sortableIntegerField",
            fieldType: "Number",
            requiredArgumentForInput: true,
            sortable: true,
            filterable: true,
            __typename: "GadgetModelField",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
              fieldType: "ID",
              validations: [
                {
                  __typename: "GadgetGenericFieldValidation",
                  name: "Uniqueness",
                  specID: "gadget/validation/unique",
                },
                {
                  __typename: "GadgetGenericFieldValidation",
                  name: "Required",
                  specID: "gadget/validation/required",
                },
              ],
            },
          },
        ],
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
};

const mockUnsortedIdContent = {
  data: {
    widgets: {
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: "eyJpZCI6IjcifQ==",
        endCursor: "eyJpZCI6IjU2In0=",
        __typename: "PageInfo",
      },
      edges: [
        {
          cursor: "eyJpZCI6IjcifQ==",
          node: {
            __typename: "Widget",
            sortableId: "0",
            sortableIntegerField: 17,
          },
          __typename: "WidgetEdge",
        },
        {
          cursor: "eyJpZCI6IjcifQ==",
          node: {
            __typename: "Widget",
            sortableId: "2",
            sortableIntegerField: 15,
          },
          __typename: "WidgetEdge",
        },
        {
          cursor: "eyJpZCI6IjcifQ==",
          node: {
            __typename: "Widget",
            sortableId: "1",
            sortableIntegerField: 16,
          },
          __typename: "WidgetEdge",
        },
      ],
      __typename: "WidgetConnection",
    },
  },
};

const mockDescendingSortedIdContent = {
  data: {
    widgets: {
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: "eyJpZCI6IjcifQ==",
        endCursor: "eyJpZCI6IjU2In0=",
        __typename: "PageInfo",
      },
      edges: [
        {
          cursor: "eyJpZCI6IjcifQ==",
          node: {
            __typename: "Widget",
            sortableId: "2",
            sortableIntegerField: 15,
          },
          __typename: "WidgetEdge",
        },
        {
          cursor: "eyJpZCI6IjcifQ==",
          node: {
            __typename: "Widget",
            sortableId: "1",
            sortableIntegerField: 16,
          },
          __typename: "WidgetEdge",
        },
        {
          cursor: "eyJpZCI6IjcifQ==",
          node: {
            __typename: "Widget",
            sortableId: "0",
            sortableIntegerField: 17,
          },
          __typename: "WidgetEdge",
        },
      ],
      __typename: "WidgetConnection",
    },
  },
};

const mockAscendingSortedIdContent = {
  data: {
    widgets: {
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: "eyJpZCI6IjcifQ==",
        endCursor: "eyJpZCI6IjU2In0=",
        __typename: "PageInfo",
      },
      edges: [
        {
          cursor: "eyJpZCI6IjcifQ==",
          node: {
            __typename: "Widget",
            sortableId: "0",
            sortableIntegerField: 17,
          },
          __typename: "WidgetEdge",
        },
        {
          cursor: "eyJpZCI6IjcifQ==",
          node: {
            __typename: "Widget",
            sortableId: "1",
            sortableIntegerField: 16,
          },
          __typename: "WidgetEdge",
        },
        {
          cursor: "eyJpZCI6IjcifQ==",
          node: {
            __typename: "Widget",
            sortableId: "2",
            sortableIntegerField: 15,
          },
          __typename: "WidgetEdge",
        },
      ],
      __typename: "WidgetConnection",
    },
  },
};
