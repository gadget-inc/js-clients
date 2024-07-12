import React from "react";
import { PolarisAutoTableTextCell } from "../../../../src/auto/polaris/tableCells/PolarisAutoTableTextCell.js";

describe("PolarisAutoTableTextCell", () => {
  it("renders the string value", () => {
    cy.mount(<PolarisAutoTableTextCell value={"hello"} />);
    cy.get("span").should("have.text", "hello");
  });

  it("renders the rich text field value as plain text", () => {
    cy.mount(<PolarisAutoTableTextCell value={{ markdown: "# hello" }} />);
    cy.get("span").should("have.text", "# hello");
  });

  it("renders the JSON value", () => {
    cy.mount(<PolarisAutoTableTextCell value={{ hello: "world" }} />);
    cy.get("span").should("have.text", `{"hello":"world"}`);

    cy.mount(<PolarisAutoTableTextCell value={[{ hello: "array" }]} />);
    cy.get("span").should("have.text", `[{"hello":"array"}]`);
  });
});
