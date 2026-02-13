/* eslint-disable jest/valid-expect */
import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";
import { mockGetWidgets, mockGetWidgetsWithSearch, mockModelMetadata } from "./helpers.js";

// Only using a single character at a time because each keypress does another API call
const sampleSearchValue1 = "a";
const sampleSearchValue2 = "W";

const searchedForWidgetName = "aWidgetThatIsSearchedFor";

describeForEachAutoAdapter("AutoTable - Search", ({ name, adapter: { AutoTable }, wrapper, clickOptions }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const getWCSearchInput = () => cy.get(`s-text-field`).shadow().find(`input`);

  const openSearchAndType = (value: string) => {
    if (name === SUITE_NAMES.POLARIS) {
      cy.get(`button[aria-label="Search and filter results"]`).click(clickOptions);
      cy.get(`input[type="text"]`).eq(0).click(clickOptions).type(value);
    } else if (name === SUITE_NAMES.POLARIS_WC) {
      getWCSearchInput().click(clickOptions).type(value);
    }
  };

  const typeInSearch = (value: string) => {
    if (name === SUITE_NAMES.POLARIS) {
      cy.get(`input[type="text"]`).eq(0).click(clickOptions).type(value);
    } else if (name === SUITE_NAMES.POLARIS_WC) {
      getWCSearchInput().type(value);
    }
  };

  const clearSearch = () => {
    if (name === SUITE_NAMES.POLARIS) {
      // Closing the search area should also clear the search value
      cy.contains(`Cancel`).click(clickOptions);
    } else if (name === SUITE_NAMES.POLARIS_WC) {
      getWCSearchInput().clear();
    }
  };

  it("Includes search values in the call to retrieve model records only when it is defined", () => {
    mockModelMetadata();
    mockGetWidgets();

    cy.mountWithWrapper(<AutoTable model={api.widget} />, wrapper);

    cy.wait("@getModelMetadata");
    cy.wait("@getWidgets").its("request.body.variables").should("deep.equal", { first: 50 }); // No search value

    mockGetWidgetsWithSearch(searchedForWidgetName);
    openSearchAndType(sampleSearchValue1);
    cy.wait("@getWidgetsWithSearch");
    cy.get("@getWidgetsWithSearch").its("request.body.variables").should("deep.equal", {
      first: 50,
      search: sampleSearchValue1, // Search value included
    });
    cy.contains(searchedForWidgetName).should("exist");

    mockGetWidgetsWithSearch(searchedForWidgetName);
    typeInSearch(sampleSearchValue2);
    cy.wait("@getWidgetsWithSearch");
    cy.get("@getWidgetsWithSearch")
      .its("request.body.variables")
      .should("deep.equal", {
        first: 50,
        search: sampleSearchValue1 + sampleSearchValue2, // complete Search value included after continuing to type
      });
    cy.contains(searchedForWidgetName).should("exist");

    mockGetWidgets();

    clearSearch();
    cy.wait("@getWidgets");
    cy.get("@getWidgets").its("request.body.variables").should("deep.equal", {
      first: 50, // NO search value included
    });
  });
});
