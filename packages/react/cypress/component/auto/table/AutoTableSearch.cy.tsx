/* eslint-disable jest/valid-expect */
import React from "react";
import { PolarisAutoTable } from "../../../../src/auto/polaris/PolarisAutoTable.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";
import { mockGetWidgets, mockGetWidgetsWithSearch, mockModelMetadata } from "./helpers.js";

// Only using a single character at a time because each keypress does another API call
const sampleSearchValue1 = "a";
const sampleSearchValue2 = "W";

const searchedForWidgetName = "aWidgetThatIsSearchedFor";

describe("AutoTable - Search", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("Includes search values in the call to retrieve model records only when it is defined", () => {
    mockModelMetadata();
    mockGetWidgets();

    cy.mountWithWrapper(<PolarisAutoTable model={api.widget} />, PolarisWrapper);

    cy.wait("@getModelMetadata");
    cy.wait("@getWidgets").its("request.body.variables").should("deep.equal", { first: 50 }); // No search value

    mockGetWidgetsWithSearch(searchedForWidgetName);
    cy.get(`button[aria-label="Search and filter results"]`).click();
    cy.get(`input[type="text"]`).eq(0).click().type(sampleSearchValue1);
    cy.wait("@getWidgetsWithSearch");
    cy.get("@getWidgetsWithSearch").its("request.body.variables").should("deep.equal", {
      first: 50,
      search: sampleSearchValue1, // Search value included
    });
    cy.contains(searchedForWidgetName).should("exist");

    mockGetWidgetsWithSearch(searchedForWidgetName);
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
