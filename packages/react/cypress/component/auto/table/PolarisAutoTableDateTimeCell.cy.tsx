import React from "react";
import { PolarisAutoTableDateTimeCell } from "../../../../src/auto/polaris/tableCells/PolarisAutoTableDateTimeCell.js";

describe("PolarisAutoTableDateTimeCell", () => {
  it("renders the date as string with the time", () => {
    cy.mount(<PolarisAutoTableDateTimeCell value={new Date("2024-07-01T01:00:00.000Z")} includeTime={true} />);
    cy.get("span").should("have.text", "Jul 1, 2024 1:00 AM"); // Make sure the format defined in the component is correct
  });
  it("renders the date as string without the time", () => {
    cy.mount(<PolarisAutoTableDateTimeCell value={new Date("2024-07-01T01:00:00.000Z")} includeTime={false} />);
    cy.get("span").should("have.text", "Jul 1, 2024"); // Make sure the format defined in the component is correct
  });
});
