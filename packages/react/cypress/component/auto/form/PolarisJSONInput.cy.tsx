import React from "react";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoJSONInput } from "../../../../src/auto/polaris/inputs/PolarisAutoJsonInput.js";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";

describe("PolarisJSONInput", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("shows a inline error message when the value is not a valid JSON", () => {
    cy.mountWithWrapper(
      <PolarisAutoForm action={api.widget.create}>
        <PolarisAutoJSONInput field="metafields" />
      </PolarisAutoForm>,
      PolarisWrapper
    );

    cy.get(`textarea[name="widget.metafields"]`).type("not a valid JSON");
    // The error message only appears when the field is blurred
    cy.get(`textarea[name="widget.metafields"]`).blur();
    cy.contains(`Invalid JSON: Unexpected token 'o', "not a valid JSON" is not valid JSON`);
  });

  it("formats the JSON value when fetching the record", () => {
    cy.mountWithWrapper(
      <PolarisAutoForm action={api.widget.update} findBy="1368">
        <PolarisAutoJSONInput field="metafields" />
        <PolarisAutoSubmit />
      </PolarisAutoForm>,
      PolarisWrapper
    );

    cy.get(`textarea[name="widget.metafields"]`).should(
      "include.text",
      `{
  "hello": "world!"
}` // The JSON value is formatted with 2 spaces
    );
  });
});
