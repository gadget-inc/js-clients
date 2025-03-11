/* eslint-disable jest/valid-expect */
import React from "react";
import { humanizeCamelCase } from "../../../../src/utils.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

const widgetFieldApiIds = [
  "name",
  "inventoryCount",
  "gizmos",
  "anything",
  "description",
  "category",
  "startsAt",
  "isChecked",
  "metafields",
  "roles",
  "secretKey",
  "section",
  "mustBeLongString",
];

describeForEachAutoAdapter("AutoForm - input labels", ({ name, adapter: { AutoForm, AutoInput }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("renders AutoInputs with custom labels", () => {
    cy.mountWithWrapper(
      <AutoForm action={api.widget.create}>
        {widgetFieldApiIds.map((fieldApiId) => (
          <AutoInput suiteName={name} field={fieldApiId} label={fieldApiId + "_CustomLabel"} key={fieldApiId} />
        ))}
      </AutoForm>,
      wrapper
    );

    for (const fieldApiId of widgetFieldApiIds) {
      cy.contains(fieldApiId + "_CustomLabel").should("exist");
    }
  });

  it("renders AutoInputs with default labels", () => {
    cy.mountWithWrapper(
      <AutoForm action={api.widget.create}>
        {widgetFieldApiIds.map((fieldApiId) => (
          <AutoInput suiteName={name} field={fieldApiId} key={fieldApiId} />
        ))}
      </AutoForm>,
      wrapper
    );

    for (const fieldName of widgetFieldNames) {
      cy.contains(humanizeCamelCase(fieldName)).should("exist");
    }
  });
});

const widgetFieldNames = [
  "Name",
  "Inventory count",
  "Gizmos",
  "Anything",
  "Description",
  "Category",
  "Starts at",
  "Is checked",
  "Metafields",
  "Roles",
  "Secret key",
  "Section",
  "Must be long string",
];
