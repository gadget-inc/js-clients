import React, { useCallback } from "react";
import type { PolarisFixedOptionsComboboxProps } from "../../../../src/auto/polaris/PolarisFixedOptionsCombobox.js";
import { PolarisFixedOptionsCombobox } from "../../../../src/auto/polaris/PolarisFixedOptionsCombobox.js";
import { PolarisWrapper } from "../../../support/auto.js";

const options = [
  { label: "Burnt red", value: "red" },
  { label: "Dragon green", value: "green" },
  { label: "Barbie pink", value: "pink" },
  { label: "Jet black", value: "black" },
];

const TestCombobox = (props: { initialValue: any; onChange?: (value: any) => void } & PolarisFixedOptionsComboboxProps) => {
  const [value, setValue] = React.useState<any>(props.initialValue);
  const change = useCallback(
    (value: any) => {
      setValue(value);
      props.onChange(value);
    },
    [props]
  );
  return <PolarisFixedOptionsCombobox {...props} value={value} options={options} onChange={change} />;
};

describe("PolarisFixedOptionsCombobox", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  describe("single mode", () => {
    it("shows the initially selected option in single mode", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(<TestCombobox initialValue={"pink"} options={options} onChange={onChangeSpy} />, PolarisWrapper);
      cy.get('[role="combobox"]').should("have.value", "Barbie pink");
    });

    it("starting from undefined, it shows the list of options and allows a new one to be selected", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(<TestCombobox initialValue={undefined} options={options} onChange={onChangeSpy} />, PolarisWrapper);
      cy.get('[role="combobox"]').click();
      cy.get('[data-listbox-option-value="pink"]').click();
      cy.get("@onChangeSpy").should("be.calledWith", "pink");

      cy.get('[role="combobox"]').click();
      cy.get('[data-listbox-option-value="green"]').click();
      cy.get("@onChangeSpy").should("be.calledWith", "green");
    });

    it("starting from an existing value, it shows the list of options and allows a new one to be selected", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(<TestCombobox initialValue={"pink"} options={options} onChange={onChangeSpy} />, PolarisWrapper);
      cy.get('[role="combobox"]').click();
      cy.get('[data-listbox-option-value="green"]').click();
      cy.get("@onChangeSpy").should("be.calledWith", "green");

      cy.get('[role="combobox"]').click();
      cy.get('[data-listbox-option-value="black"]').click();
      cy.get("@onChangeSpy").should("be.calledWith", "black");
    });
  });

  describe("multi mode", () => {
    it("shows the initially selected options in multi mode", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <TestCombobox allowMultiple initialValue={["pink", "green"]} options={options} onChange={onChangeSpy} />,
        PolarisWrapper
      );
      cy.get('[role="combobox"]').should("have.value", "");
      cy.contains("Barbie pink");
      cy.contains("Dragon green");
    });

    it("starting from undefined, it shows the list of options and allows new ones to be selected", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(<TestCombobox allowMultiple initialValue={undefined} options={options} onChange={onChangeSpy} />, PolarisWrapper);
      cy.get('[role="combobox"]').click();
      cy.get('[data-listbox-option-value="pink"]').click();
      cy.contains("Barbie pink");
      cy.get("@onChangeSpy").should("be.calledWith", ["pink"]);
      cy.get('[role="combobox"]').should("have.value", "");

      cy.get('[role="combobox"]').click();
      cy.get('[data-listbox-option-value="green"]').click();
      cy.contains("Barbie pink");
      cy.contains("Dragon green");
      cy.get("@onChangeSpy").should("be.calledWith", ["pink", "green"]);
      cy.get('[role="combobox"]').should("have.value", "");
    });

    it("starting from an existing list, it shows the list of options and allows new ones to be selected", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <TestCombobox allowMultiple initialValue={["black", "green"]} options={options} onChange={onChangeSpy} />,
        PolarisWrapper
      );
      cy.get('[role="combobox"]').click();
      cy.get('[data-listbox-option-value="pink"]').click();
      cy.contains("Barbie pink");
      cy.get("@onChangeSpy").should("be.calledWith", ["black", "green", "pink"]);
      cy.get('[role="combobox"]').should("have.value", "");
    });

    it("can remove elements from the list by clicking the x", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <TestCombobox allowMultiple initialValue={["black", "green"]} options={options} onChange={onChangeSpy} />,
        PolarisWrapper
      );
      cy.get('[aria-label="Remove Dragon green"]').click();
      cy.contains("Jet black");
      cy.should("not.contain", "Dragon green");
      cy.get("@onChangeSpy").should("be.calledWith", ["black"]);
      cy.get('[role="combobox"]').should("have.value", "");
    });
  });
});
