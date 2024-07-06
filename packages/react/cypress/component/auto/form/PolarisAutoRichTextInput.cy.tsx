import React from "react";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import PolarisAutoRichTextInput from "../../../../src/auto/polaris/inputs/PolarisAutoRichTextInput.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";

describe("PolarisAutoRichTextInput", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("renders a rich text editor for a rich text field", () => {
    cy.mountWithWrapper(
      <PolarisAutoForm action={api.widget.create}>
        <PolarisAutoRichTextInput field="description" />
      </PolarisAutoForm>,
      PolarisWrapper
    );

    cy.get('[aria-label="editable markdown"] > p').type("# foobar");
    cy.get("h1:contains('foobar')").should("exist");
  });
});
