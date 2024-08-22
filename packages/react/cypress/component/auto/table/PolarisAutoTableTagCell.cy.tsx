import React from "react";
import { PolarisAutoTableTagCell } from "../../../../src/auto/polaris/tableCells/PolarisAutoTableTagCell.js";
import { PolarisWrapper } from "../../../support/auto.js";

describe("PolarisAutoTableTextCell", () => {
  it("renders the string value", () => {
    cy.mountWithWrapper(<PolarisAutoTableTagCell value={"foo"} />, PolarisWrapper);
    cy.get(".Polaris-Tag").should("have.text", "foo");
  });

  it("renders an array of string as multiple tags", () => {
    cy.mountWithWrapper(<PolarisAutoTableTagCell value={["foo", "bar"]} />, PolarisWrapper);
    cy.get(".Polaris-Tag").should("have.length", 2);
    cy.get(".Polaris-Tag").eq(0).should("have.text", "foo");
    cy.get(".Polaris-Tag").eq(1).should("have.text", "bar");
  });

  it("handles null values", () => {
    cy.mountWithWrapper(<PolarisAutoTableTagCell value={["foo", null]} />, PolarisWrapper);
    cy.get(".Polaris-Tag").should("have.length", 1);
    cy.get(".Polaris-Tag").eq(0).should("have.text", "foo");
  });

  it("renders an array of roles as multiple tags", () => {
    cy.mountWithWrapper(
      <PolarisAutoTableTagCell
        value={[
          { name: "hello", key: "hello", __typename: "Role" },
          { name: "world", key: "world", __typename: "Role" },
        ]}
      />,
      PolarisWrapper
    );
    cy.get(".Polaris-Tag").should("have.length", 2);
    cy.get(".Polaris-Tag").eq(0).should("have.text", "hello");
    cy.get(".Polaris-Tag").eq(1).should("have.text", "world");
  });
});
