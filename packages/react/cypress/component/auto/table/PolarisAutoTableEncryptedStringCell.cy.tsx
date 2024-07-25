import React from "react";
import { PolarisWrapper } from "../../../../cypress/support/auto.js";
import { PolarisAutoTableEncryptedStringCell } from "../../../../src/auto/polaris/tableCells/PolarisAutoTableEncryptedStringCell.js";

const sampleEncryptedValue = "nice encrypted value here";

describe("PolarisAutoTableEncryptedStringCell", () => {
  it("Should show/hide the value upon clicking the eye icon", () => {
    cy.mountWithWrapper(<PolarisAutoTableEncryptedStringCell value={sampleEncryptedValue} />, PolarisWrapper);

    // Initially hidden
    cy.contains("•".repeat(sampleEncryptedValue.length)).should("exist");
    cy.contains(sampleEncryptedValue).should("not.exist");

    // Show
    cy.get(`div[role="EncryptedStringCellShowHideButton"]`).click();
    cy.contains("•".repeat(sampleEncryptedValue.length)).should("not.exist");
    cy.contains(sampleEncryptedValue).should("exist");

    // Hide again
    cy.get(`div[role="EncryptedStringCellShowHideButton"]`).click();
    cy.contains("•".repeat(sampleEncryptedValue.length)).should("exist");
    cy.contains(sampleEncryptedValue).should("not.exist");
  });
});
