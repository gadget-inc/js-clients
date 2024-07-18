/* eslint-disable jest/valid-expect */
import React from "react";
import { PolarisAutoTable } from "../../../../src/auto/polaris/PolarisAutoTable.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";
import { first50WidgetRecords, widgetModelMetadata } from "./metadata/widgetMetadata.js";

// Only using a single character at a time because each keypress does another API call
const sampleSearchValue1 = "a";
const sampleSearchValue2 = "W";

const searchedForWidgetName = "aWidgetThatIsSearchedFor";

describe("AutoTable - Search", () => {
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
        req.reply(widgetModelMetadata);
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
        req.reply(first50WidgetRecords);
      }
    ).as("getWidgets");
  };

  const mockGetWidgetsWithSearch = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.options.endpoint}?operation=widgets`,
        times: 1,
      },
      (req) => {
        req.reply(mockSearchResultWidget);
      }
    ).as("getWidgetsWithSearch");
  };

  it("Includes search values in the call to retrieve model records only when it is defined", () => {
    mockModelMetadata();
    mockGetWidgets();

    cy.mountWithWrapper(<PolarisAutoTable model={api.widget} />, PolarisWrapper);

    cy.wait("@getModelMetadata");
    cy.wait("@getWidgets").its("request.body.variables").should("deep.equal", { first: 50 }); // No search value

    mockGetWidgetsWithSearch();
    cy.get(`button[aria-label="Search and filter results"]`).click();
    cy.get(`input[type="text"]`).eq(0).click().type(sampleSearchValue1);
    cy.wait("@getWidgetsWithSearch");
    cy.get("@getWidgetsWithSearch").its("request.body.variables").should("deep.equal", {
      first: 50,
      search: sampleSearchValue1, // Search value included
    });
    cy.contains(searchedForWidgetName).should("exist");

    mockGetWidgetsWithSearch();
    cy.get(`input[type="text"]`).eq(0).click().type(sampleSearchValue2);
    cy.wait("@getWidgetsWithSearch");
    cy.get("@getWidgetsWithSearch")
      .its("request.body.variables")
      .should("deep.equal", {
        first: 50,
        search: sampleSearchValue1 + sampleSearchValue2, // complete Search value included after continuing to type
      });
    cy.contains(searchedForWidgetName).should("exist");

    mockGetWidgets();

    // Closing the search area should also clear the search value
    cy.contains(`Cancel`).click();
    cy.wait("@getWidgets");
    cy.get("@getWidgets").its("request.body.variables").should("deep.equal", {
      first: 50, // NO search value included
    });
  });
});

const mockSearchResultWidget = {
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
            id: "777",
            anything: null,
            birthday: "2002-02-02",
            category: [],
            color: null,
            createdAt: "2023-09-07T19:18:50.262Z",
            description: null,
            embedding: null,
            inStock: true,
            inventoryCount: 1,
            isChecked: false,
            metafields: null,
            mustBeLongString: null,
            name: searchedForWidgetName,
            roles: [],
            secretKey: "skey",
            startsAt: null,
            updatedAt: "2024-07-17T20:55:36.191Z",
          },
          __typename: "WidgetEdge",
        },
      ],

      __typename: "WidgetConnection",
    },
    gadgetMeta: {
      hydrations: {
        updatedAt: "DateTime",
        startsAt: "DateTime",
        birthday: "DateTime",
        createdAt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
  extensions: {
    logs: "https://ggt.link/logs/114412/62efa3ded4eaed65c4309ee48de15d3a",
    traceId: "62efa3ded4eaed65c4309ee48de15d3a",
  },
};
