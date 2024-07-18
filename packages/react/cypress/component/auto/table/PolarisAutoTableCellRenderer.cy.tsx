import React from "react";
import { PolarisAutoTableCellRenderer } from "../../../../src/auto/polaris/tableCells/PolarisAutoTableCellRenderer.js";
import { FieldType } from "../../../../src/metadata.js";
import { PolarisWrapper } from "../../../support/auto.js";

describe("PolarisAutoTableCellRenderer", () => {
  it("picks the correct cell renderer based on the field type", () => {
    cy.mountWithWrapper(
      <PolarisAutoTableCellRenderer
        column={{
          fieldType: FieldType.String,
        }}
        value="Hello, World!"
      />,
      PolarisWrapper
    );

    cy.contains("Hello, World!");

    cy.mountWithWrapper(
      <PolarisAutoTableCellRenderer
        column={{
          fieldType: FieldType.DateTime,
        }}
        value={new Date("2024-07-01T01:00:00.000Z")}
      />,
      PolarisWrapper
    );

    cy.contains("Jul 1, 2024 1:00 AM");

    cy.mountWithWrapper(
      <PolarisAutoTableCellRenderer
        column={{
          fieldType: FieldType.Enum,
        }}
        value={["foo", "bar"]}
      />,
      PolarisWrapper
    );
    cy.get(".Polaris-Tag").should("have.length", 2);
    cy.get(".Polaris-Tag").eq(0).should("have.text", "foo");
    cy.get(".Polaris-Tag").eq(1).should("have.text", "bar");
  });

  it("does not render anything if the value is null", () => {
    cy.mountWithWrapper(
      <PolarisAutoTableCellRenderer
        column={{
          fieldType: FieldType.String,
        }}
        value={null}
      />,
      PolarisWrapper
    );

    // .Polaris-Box comes from the PolarisWrapper, and it should not have any children
    cy.get(".Polaris-ShadowBevel > .Polaris-Box").children().should("have.length", 0);
  });
});
