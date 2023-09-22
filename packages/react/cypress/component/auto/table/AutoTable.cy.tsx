import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoTable", ({ name, adapter: { AutoTable }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const nextPageSelector = {
    Polaris: ".Polaris-Pagination [aria-label=Next]",
    MUI: "[data-testid=next-page]",
  }[name];

  const previousPageSelector = {
    Polaris: ".Polaris-Pagination [aria-label=Previous]",
    MUI: "[data-testid=previous-page]",
  }[name];

  it("can render for a small number of rows", () => {
    cy.mountWithWrapper(<AutoTable manager={api.widget} />, wrapper);
    cy.contains("foo");
    cy.contains("bar");
    cy.contains("baz");
    cy.contains("1");
    cy.contains("2");
    cy.contains("3");
  });

  it("can render for only some fields", () => {
    cy.mountWithWrapper(<AutoTable manager={api.widget} select={{ id: true, name: false, inventoryCount: true }} />, wrapper);
    cy.contains("1");
    cy.contains("2");
    cy.contains("3");
  });

  it("can render for a large number of rows", () => {
    cy.mountWithWrapper(<AutoTable manager={api.gizmo} />, wrapper);
    cy.contains("gizmo 10");
  });

  it("can paginate forwards and backwards", () => {
    cy.mountWithWrapper(<AutoTable manager={api.gizmo} pageSize={50} />, wrapper);
    cy.contains("gizmo 11");
    cy.get(nextPageSelector!).click();
    cy.contains("gizmo 50");
    cy.contains("gizmo 99");
    cy.get(nextPageSelector!).click();
    cy.contains("gizmo 100");
    cy.contains("gizmo 149");
    cy.get(previousPageSelector!).click();
    cy.contains("gizmo 50");
    cy.get(previousPageSelector!).click();
    cy.contains("gizmo 1");
  });

  it("can start listing data at a certain page", async () => {
    const firstPage = await api.gizmo.findMany({ first: 50 });

    cy.mountWithWrapper(<AutoTable manager={api.gizmo} pageSize={50} initialCursor={firstPage.endCursor} />, wrapper);
    cy.contains("gizmo 50");
    cy.contains("gizmo 99");
    cy.get(nextPageSelector!).click();
    cy.contains("gizmo 100");
    cy.contains("gizmo 149");
    cy.get(previousPageSelector!).click();
    cy.contains("gizmo 50");
    cy.get(previousPageSelector!).click();
    cy.contains("gizmo 1");
  });

  it("renders an error if the backend returns one", () => {
    cy.intercept("POST", "https://js-clients-test--development.gadget.app/api/graphql?operation=gizmos", { forceNetworkError: true });

    cy.mountWithWrapper(<AutoTable manager={api.gizmo} />, wrapper);
    cy.contains("error");
  });
});
