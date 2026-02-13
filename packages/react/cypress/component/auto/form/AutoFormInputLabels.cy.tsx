/* eslint-disable jest/valid-expect */
import React from "react";
import { humanizeCamelCase } from "../../../../src/utils.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

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
      // PolarisWC: label may be in shadow DOM (s-text-field) or light DOM (e.g. RichText); includeShadowDom finds both
      if (name === SUITE_NAMES.POLARIS_WC) {
        cy.contains(fieldApiId + "_CustomLabel", { includeShadowDom: true }).should("exist");
      } else {
        cy.contains(fieldApiId + "_CustomLabel").should("exist");
      }
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
      // PolarisWC: label may be in shadow DOM (s-text-field) or light DOM (e.g. RichText); includeShadowDom finds both
      if (name === SUITE_NAMES.POLARIS_WC) {
        cy.contains(humanizeCamelCase(fieldName), { includeShadowDom: true }).should("exist");
      } else {
        cy.contains(humanizeCamelCase(fieldName)).should("exist");
      }
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
