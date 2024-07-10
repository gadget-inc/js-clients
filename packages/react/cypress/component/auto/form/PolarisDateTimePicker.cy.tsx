import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import React from "react";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisDateTimePicker } from "../../../../src/auto/polaris/inputs/PolarisDateTimePicker.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";

const baseDate = new Date("2021-03-05T11:23:10.000Z");
const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const dateInLocalTZ = utcToZonedTime(baseDate, localTz);

describe("PolarisDateTimePicker", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  describe("date only", () => {
    it("can show with a blank current value", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.create}>
          <PolarisDateTimePicker field="startsAt" id="test" onChange={onChangeSpy} />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.get("#test-date").should("have.value", "");
    });

    it("can show the current value", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.create}>
          <PolarisDateTimePicker id="test" includeTime value={baseDate} onChange={onChangeSpy} field="startsAt" />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.get("#test-date").should("have.value", format(dateInLocalTZ, "yyyy-MM-dd"));
    });

    it("can change the date", async () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.create}>
          <PolarisDateTimePicker id="test" value={baseDate} onChange={onChangeSpy} field="startsAt" />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.get("#test-date").click();
      cy.get(`[aria-label='Thursday March 4 2021']`).click();
      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.get("@onChangeSpy")
        .should("have.been.called")
        .then(() => {
          expect(onChangeSpy.getCalls()[0].args[0].toISOString()).equal(new Date("2021-03-04T11:23:10.000Z").toISOString());
        });
    });

    it("can change the date across a DST boundary", async () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.create}>
          <PolarisDateTimePicker id="test" value={baseDate} onChange={onChangeSpy} field="startsAt" />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.get("#test-date").click();
      cy.get(`[aria-label='Wednesday March 17 2021']`).click();
      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.get("@onChangeSpy")
        .should("have.been.called")
        .then(() => {
          expect(onChangeSpy.getCalls()[0].args[0].toISOString()).equal(new Date("2021-03-17T10:23:10.000Z").toISOString());
        });
    });
  });

  describe("date and time", () => {
    it("can show with a blank current value", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.create}>
          <PolarisDateTimePicker id="test" includeTime onChange={onChangeSpy} field="startsAt" />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      // Test is flaky without waiting for the DOM to load
      cy.wait(100);
      cy.get("#test-date").should("have.value", "");
      cy.get("#test-time").should("have.value", "");
    });

    it("can show the current value", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.create}>
          <PolarisDateTimePicker id="test" includeTime value={baseDate} onChange={onChangeSpy} field="startsAt" />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.get("#test-date").should("have.value", format(dateInLocalTZ, "yyyy-MM-dd"));
      cy.get("#test-time").should("have.value", format(dateInLocalTZ, "K:m aa"));
    });

    it("can change the date", async () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.create}>
          <PolarisDateTimePicker id="test" includeTime value={baseDate} onChange={onChangeSpy} field="startsAt" />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.get("#test-date").click();
      cy.get(`[aria-label='Thursday March 4 2021']`).click();
      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.get("@onChangeSpy")
        .should("have.been.called")
        .then(() => {
          expect(onChangeSpy.getCalls()[0].args[0].toISOString()).equal(new Date("2021-03-04T11:23:10.000Z").toISOString());
        });
    });

    it("can enter an invalid time and show an error", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.create}>
          <PolarisDateTimePicker id="test" includeTime value={baseDate} onChange={onChangeSpy} field="startsAt" />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.get("#test-time").clear().type("foo");
      cy.get("body").click();
      cy.contains("Invalid time");
      cy.get("#test-time").clear().type("12:21 AM");
      cy.contains("Invalid time").should("not.exist");
    });
  });
});
