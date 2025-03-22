import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import React from "react";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

const baseDate = new Date("2021-03-05T11:23:00.000Z");
const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const dateInLocalTZ = utcToZonedTime(baseDate, localTz);

describeForEachAutoAdapter("AutoFormDateTimePicker", ({ name, adapter: { AutoForm, AutoDateTimePicker, AutoSubmit }, wrapper }) => {
  const TestComponentWithCustomOnChange = () => {
    return (
      <AutoForm action={api.widget.update} findBy="999">
        <AutoDateTimePicker id="test" field="startsAt" />
        <AutoSubmit />
      </AutoForm>
    );
  };

  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const mockMetadataResponse = (props?: { defaultRecord?: Record<string, any>; includeTime?: boolean; isCreate?: boolean }) => {
    const { defaultRecord, includeTime, isCreate } = props ?? {};
    cy.mockModelActionMetadata(api, {
      modelName: "Widget",
      modelApiIdentifier: "widget",
      action: isCreate
        ? { apiIdentifier: "create", operatesWithRecordIdentity: false }
        : { apiIdentifier: "update", operatesWithRecordIdentity: true },
      triggers: apiTriggerOnly,
      inputFields: [
        {
          name: "Widget",
          apiIdentifier: "widget",
          fieldType: "Object",
          requiredArgumentForInput: false,
          configuration: {
            __typename: "GadgetObjectFieldConfig",
            fieldType: "Object",
            validations: [],
            name: null,
            fields: [
              {
                name: "Starts at",
                apiIdentifier: "startsAt",
                fieldType: "DateTime",
                requiredArgumentForInput: false,
                sortable: true,
                filterable: true,
                configuration: {
                  __typename: "GadgetDateTimeConfig",
                  fieldType: "DateTime",
                  includeTime: includeTime ?? false,
                  validations: [],
                },
              },
            ],
          },
          __typename: "GadgetObjectField",
        },
      ],
      defaultRecord: defaultRecord ?? {},
    });
  };

  const interceptWidgetQuery = (startsAt?: string | false) => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=widget`, times: 1 }, (req) => {
      req.reply({
        data: {
          widget: { id: "999", startsAt: startsAt === false ? undefined : startsAt ?? dateInLocalTZ, __typename: "Widget" },
        },
      });
    }).as("widget");
  };

  describe("date only", () => {
    it(
      "can show with a blank current value",
      // eslint-disable-next-line
      // @ts-ignore - This test passes in isolation but is flakey when run with the rest of the file
      { retries: 2 },
      () => {
        mockMetadataResponse();
        interceptWidgetQuery(false);
        cy.mountWithWrapper(
          <AutoForm action={api.widget.update} findBy="999">
            <AutoDateTimePicker field="startsAt" id="test" />
            <AutoSubmit />
          </AutoForm>,
          wrapper
        );
        cy.wait("@ModelCreateActionMetadata");
        cy.wait("@widget");

        if (name === SUITE_NAMES.POLARIS) {
          cy.get("#test-date").should("have.value", "");
          cy.get("#test-date").click();
          cy.get(".Polaris-DatePicker__Title").contains(`${new Date().getFullYear()}`);
        }

        if (name === SUITE_NAMES.SHADCN) {
          cy.get("#test-date").contains("YYYY-MM-DD");
          cy.get("#test-date").click();
          cy.get("button").contains(`${new Date().getFullYear()}`);
        }
      }
    );

    it(
      "can show the current value",
      // eslint-disable-next-line
      // @ts-ignore - This test passes in isolation but is flakey when run with the rest of the file
      { retries: 2 },
      () => {
        mockMetadataResponse();
        interceptWidgetQuery();
        cy.mountWithWrapper(
          <AutoForm action={api.widget.update} findBy="999">
            <AutoDateTimePicker id="test" field="startsAt" />
            <AutoSubmit />
          </AutoForm>,
          wrapper
        );
        cy.wait("@ModelCreateActionMetadata");
        cy.wait("@widget");

        if (name === SUITE_NAMES.POLARIS) {
          cy.get("#test-date").should("have.value", format(dateInLocalTZ, "yyyy-MM-dd"));
        }

        if (name === SUITE_NAMES.SHADCN) {
          cy.get("#test-date").contains(format(dateInLocalTZ, "yyyy-MM-dd"));
        }
      }
    );

    it("can change the date", () => {
      mockMetadataResponse();
      interceptWidgetQuery();

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="999">
          <AutoDateTimePicker id="test" field="startsAt" />
          <AutoSubmit />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@widget");
      cy.get("#test-date").click();
      if (name === SUITE_NAMES.POLARIS) {
        cy.get(`[aria-label='Thursday March 4 2021']`).click();
      } else if (name === SUITE_NAMES.SHADCN) {
        cy.get(`[data-day="2021-03-04"]`).click();
      }
    });

    it("can change the date across a DST boundary", () => {
      mockMetadataResponse();
      interceptWidgetQuery();

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="999">
          <AutoDateTimePicker id="test" field="startsAt" />
          <AutoSubmit />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@widget");
      cy.get("#test-date").click();

      if (name === SUITE_NAMES.POLARIS) {
        cy.get(`[aria-label='Wednesday March 17 2021']`).click();
      } else if (name === SUITE_NAMES.SHADCN) {
        cy.get(`[data-day="2021-03-17"]`).click();
      }
    });
  });
  describe("date and time", () => {
    it(
      "can show with a blank current value",
      // eslint-disable-next-line
      // @ts-ignore - This test passes in isolation but is flakey when run with the rest of the file
      { retries: 2 },
      () => {
        mockMetadataResponse({ includeTime: true });
        interceptWidgetQuery(false);

        cy.mountWithWrapper(
          <AutoForm action={api.widget.update} findBy="999">
            <AutoDateTimePicker id="test" field="startsAt" />
            <AutoSubmit />
          </AutoForm>,
          wrapper
        );
        cy.wait("@ModelCreateActionMetadata");
        cy.wait("@widget");
        // Test is flaky without waiting for the DOM to load
        cy.wait(100);

        if (name === SUITE_NAMES.POLARIS) {
          cy.get("#test-date").should("have.value", "");
          cy.get("#test-time").should("have.value", "");
        }

        if (name === SUITE_NAMES.SHADCN) {
          cy.get("#test-date").contains("YYYY-MM-DD HH:mm");
          cy.get("#test-date").click();
          cy.get("#test-time").should("have.value", "");
        }
      }
    );

    it(
      "can show the default field value from the metadata",
      // eslint-disable-next-line
      // @ts-ignore - This test passes in isolation but is flakey when run with the rest of the file
      { retries: 2 },
      () => {
        mockMetadataResponse({ defaultRecord: { startsAt: new Date("2024-07-10T04:00:00.000Z") }, isCreate: true, includeTime: true });
        cy.mountWithWrapper(
          <AutoForm action={api.widget.create}>
            <AutoDateTimePicker id="test" field="startsAt" />
            <AutoSubmit />
          </AutoForm>,
          wrapper
        );
        cy.wait("@ModelCreateActionMetadata");

        if (name === SUITE_NAMES.POLARIS) {
          cy.get("#test-date").should("have.value", "2024-07-10");
          cy.get("#test-time").should("have.value", "4:00 AM");
        }

        if (name === SUITE_NAMES.SHADCN) {
          cy.get("#test-date").contains("2024-07-10");
          cy.get("#test-date").click();
          cy.get("#test-time").should("have.value", "04:00");
        }
      }
    );

    it("can show the default field value from the defaultValues prop", () => {
      mockMetadataResponse({ includeTime: true });
      interceptWidgetQuery(false);

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="999" defaultValues={{ widget: { startsAt: new Date("2024-07-10T04:00:00.000Z") } }}>
          <AutoDateTimePicker id="test" field="startsAt" />
          <AutoSubmit />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@widget");

      if (name === SUITE_NAMES.POLARIS) {
        cy.get("#test-date").should("have.value", "2024-07-10");
        cy.get("#test-time").should("have.value", "4:00 AM");
      }

      if (name === SUITE_NAMES.SHADCN) {
        cy.get("#test-date").contains("2024-07-10");
        cy.get("#test-date").click();
        cy.get("#test-time").should("have.value", "04:00");
      }
    });

    it("can show the current value", () => {
      mockMetadataResponse({ includeTime: true });
      interceptWidgetQuery();

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="999">
          <AutoDateTimePicker id="test" field="startsAt" />
          <AutoSubmit />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@widget");

      if (name === SUITE_NAMES.POLARIS) {
        cy.get("#test-date").should("have.value", format(dateInLocalTZ, "yyyy-MM-dd"));
        cy.get("#test-time").should("have.value", format(dateInLocalTZ, "K:m aa"));
      }

      if (name === SUITE_NAMES.SHADCN) {
        cy.get("#test-date").contains(format(dateInLocalTZ, "yyyy-MM-dd"));
        cy.get("#test-date").click();
        cy.get("#test-time").should("have.value", format(dateInLocalTZ, "HH:mm"));
      }
    });

    it("can change the date", () => {
      mockMetadataResponse({ includeTime: true });
      interceptWidgetQuery();

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="999">
          <AutoDateTimePicker id="test" field="startsAt" />
          <AutoSubmit />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@widget");
      cy.get("#test-date").click();

      if (name === SUITE_NAMES.POLARIS) {
        cy.get(`[aria-label='Thursday March 4 2021']`).click();
      }

      if (name === SUITE_NAMES.SHADCN) {
        cy.get(`[aria-label='Thursday, March 4th, 2021']`).click();
      }
    });

    it("can enter an invalid time and show an error", () => {
      if (name === SUITE_NAMES.SHADCN) {
        // In shadcn, the time input is a `<input type="time">` which prevents invalid times from being entered
        return;
      }

      mockMetadataResponse({ includeTime: true });
      interceptWidgetQuery();

      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="999">
          <AutoDateTimePicker id="test" field="startsAt" />
          <AutoSubmit />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@widget");

      if (name === SUITE_NAMES.POLARIS) {
        cy.get("#test-time").click().clear().type("foo");
        cy.get("body").click();

        cy.contains("Invalid time format");
        cy.get("#test-time").click().clear();
        cy.get("#test-time").type("12:21 AM");
        cy.contains("Invalid time format").should("not.exist");
      }
    });

    it("can show the selected date", () => {
      mockMetadataResponse({ includeTime: true });
      interceptWidgetQuery();

      cy.mountWithWrapper(<TestComponentWithCustomOnChange />, wrapper);
      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@widget");
      cy.get("#test-date").click();

      if (name === SUITE_NAMES.POLARIS) {
        cy.get(`[aria-label='Thursday March 4 2021']`).click();
        cy.get("#test-date").click();
        cy.get(`[aria-label='Thursday March 4 2021']`).should("have.attr", "aria-pressed", "true");
      }

      cy.get("#test-date").click();

      if (name === SUITE_NAMES.SHADCN) {
        cy.get(`[aria-label='Thursday, March 4th, 2021']`).click();
        cy.get(`[aria-label='Thursday, March 4th, 2021, selected']`).should("exist");
      }
    });
  });
});
