import React from "react";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoRichTextInput } from "../../../../src/auto/polaris/inputs/LazyLoadedPolarisAutoRichTextInput.js";
import { useFormContext } from "../../../../src/useActionForm.js";
import { DebugFormState } from "../../../support/DebugFormState.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";

describe("PolarisAutoRichTextInput", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("renders a rich text editor for a rich text field", () => {
    cy.mountWithWrapper(
      <PolarisAutoForm action={api.widget.create} defaultValues={{}}>
        <PolarisAutoRichTextInput field="description" />
      </PolarisAutoForm>,
      PolarisWrapper
    );

    cy.get('[aria-label="editable markdown"] > p').clear().type("# foobar");
    cy.get("h1:contains('foobar')").should("exist");
  });

  it("reflects imperative changes made to the form state in the rich text editor", () => {
    const ChangeFormStateButton = () => {
      const { setValue } = useFormContext();
      return (
        <button data-testid="change" onClick={() => setValue("widget.description", { markdown: "here is some new text" })}>
          Change form state
        </button>
      );
    };

    cy.mountWithWrapper(
      <PolarisAutoForm action={api.widget.create} defaultValues={{}}>
        <PolarisAutoRichTextInput field="description" />
        <ChangeFormStateButton />
        <DebugFormState />
      </PolarisAutoForm>,
      PolarisWrapper
    );

    cy.get('[aria-label="editable markdown"] > p').should("exist");
    cy.get('[aria-label="editable markdown"] > p').should("have.text", "");
    cy.get('[data-testid="change"]').click();
    cy.get('[aria-label="editable markdown"] > p').should("have.text", "here is some new text");
  });
});
