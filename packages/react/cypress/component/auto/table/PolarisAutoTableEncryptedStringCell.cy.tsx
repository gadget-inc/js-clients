import React from "react";
import { PolarisWrapper } from "../../../../cypress/support/auto.js";
import { PolarisAutoTableEncryptedStringCell } from "../../../../src/auto/polaris/tableCells/PolarisAutoTableEncryptedStringCell.js";
import { defaultPlaceholderHiddenText } from "../../../../src/auto/shared/defaults.js";

const sampleEncryptedValue = "nice encrypted value here";

describe("PolarisAutoTableEncryptedStringCell", () => {
  it("Should show/hide the value upon clicking the eye icon", () => {
    cy.mountWithWrapper(<PolarisAutoTableEncryptedStringCell value={sampleEncryptedValue} />, PolarisWrapper);

    // Initially hidden
    cy.contains(defaultPlaceholderHiddenText).should("exist");
    cy.contains(sampleEncryptedValue).should("not.exist");

    // Show
    cy.get(`div[role="EncryptedStringCellShowHideButton"]`).click();
    cy.contains(defaultPlaceholderHiddenText).should("not.exist");
    cy.contains(sampleEncryptedValue).should("exist");

    // Hide again
    cy.get(`div[role="EncryptedStringCellShowHideButton"]`).click();
    cy.contains(defaultPlaceholderHiddenText).should("exist");
    cy.contains(sampleEncryptedValue).should("not.exist");
  });
});
