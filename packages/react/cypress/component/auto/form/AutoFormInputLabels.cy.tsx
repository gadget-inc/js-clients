/* eslint-disable jest/valid-expect */
import React from "react";
import { PolarisAutoInput } from "../../../../src/auto/polaris/inputs/PolarisAutoInput.js";
import { makeShadcnAutoInput } from "../../../../src/auto/shadcn/inputs/ShadcnAutoInput.js";
import { humanizeCamelCase } from "../../../../src/utils.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

import { Button } from "../../../../spec/auto/shadcn-defaults/components/Button.js";
import { Checkbox } from "../../../../spec/auto/shadcn-defaults/components/Checkbox.js";
import { Input } from "../../../../spec/auto/shadcn-defaults/components/Input.js";
import { Label } from "../../../../spec/auto/shadcn-defaults/components/Label.js";

const AutoInput = (props: { suiteName: string; field: string; label?: string }) => {
  if (props.suiteName === "Polaris") {
    return <PolarisAutoInput {...props} />;
  }

  if (props.suiteName === "Shadcn") {
    const ShadcnAutoInput = makeShadcnAutoInput({ Input: Input, Label: Label, Checkbox: Checkbox, Button: Button });
    return <ShadcnAutoInput {...props} />;
  }

  throw new Error("Invalid suite name");
};

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

describeForEachAutoAdapter("AutoForm - input labels", ({ name, adapter: { AutoForm }, wrapper }) => {
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
