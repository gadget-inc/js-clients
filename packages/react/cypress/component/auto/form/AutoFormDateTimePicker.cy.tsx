import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import React, { useState } from "react";
import { elements } from "../../../../spec/auto/shadcn-defaults/index.js";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoDateTimePicker } from "../../../../src/auto/polaris/inputs/PolarisAutoDateTimePicker.js";
import { makeShadcnAutoDateTimePicker } from "../../../../src/auto/shadcn/inputs/ShadcnAutoDateTimePicker.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

const baseDate = new Date("2021-03-05T11:23:00.000Z");
const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const dateInLocalTZ = utcToZonedTime(baseDate, localTz);

const ShadcnAutoDateTimePicker = makeShadcnAutoDateTimePicker(elements);

const TestComponentWithCustomOnChange = () => {
  const [date, setDate] = useState(baseDate);
  return (
    <PolarisAutoForm action={api.widget.create}>
      <PolarisAutoDateTimePicker id="test" value={date} onChange={setDate} field="startsAt" />
    </PolarisAutoForm>
  );
};

const AutoDateTimePicker = (props: {
  suiteName?: string;
  field: string;
  label?: string;
  id?: string;
  onChange?: (date: Date) => void;
  value?: Date;
  includeTime?: boolean;
}) => {
  if (props.suiteName === SUITE_NAMES.POLARIS) {
    return <PolarisAutoDateTimePicker {...props} />;
  }

  if (props.suiteName === SUITE_NAMES.SHADCN) {
    return <ShadcnAutoDateTimePicker {...props} />;
  }

  throw new Error("Invalid suite name");
};

describeForEachAutoAdapter("AutoFormDateTimePicker", ({ name, adapter: { AutoForm }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const mockMetadataResponse = (defaultRecord?: Record<string, any> | undefined) => {
    cy.mockModelActionMetadata(api, {
      modelName: "Widget",
      modelApiIdentifier: "widget",
      action: { apiIdentifier: "create", operatesWithRecordIdentity: false },
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

  describe("date only", () => {
    it("can show with a blank current value", () => {
      mockMetadataResponse();
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <AutoForm action={api.widget.create}>
          <AutoDateTimePicker suiteName={name} field="startsAt" id="test" onChange={onChangeSpy} />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");

      if (name === SUITE_NAMES.POLARIS) {
        cy.get("#test-date").should("have.value", "");
        cy.get("#test-date").click();
        cy.get(".Polaris-DatePicker__Title").contains(`${new Date().getFullYear()}`);
      }

      if (name === SUITE_NAMES.SHADCN) {
        cy.get("#test-date").contains("YYYY-MM-DD");
        cy.get("#test-date").click();
        cy.get(".rdp-month_caption").contains(`${new Date().getFullYear()}`);
      }
    });

    it("can show the current value", () => {
      mockMetadataResponse();
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <AutoForm action={api.widget.create}>
          <AutoDateTimePicker suiteName={name} id="test" includeTime value={baseDate} onChange={onChangeSpy} field="startsAt" />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");

      if (name === SUITE_NAMES.POLARIS) {
        cy.get("#test-date").should("have.value", format(dateInLocalTZ, "yyyy-MM-dd"));
      }

      if (name === SUITE_NAMES.SHADCN) {
        cy.get("#test-date").contains(format(dateInLocalTZ, "yyyy-MM-dd"));
      }
    });

    it("can change the date", async () => {
      mockMetadataResponse();
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <AutoForm action={api.widget.create}>
          <AutoDateTimePicker suiteName={name} id="test" value={baseDate} onChange={onChangeSpy} field="startsAt" />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");
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
      mockMetadataResponse();
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mountWithWrapper(
        <AutoForm action={api.widget.create}>
          <AutoDateTimePicker suiteName={name} id="test" value={baseDate} onChange={onChangeSpy} field="startsAt" />
        </AutoForm>,
        wrapper
      );
      cy.wait("@ModelCreateActionMetadata");
      cy.get("#test-date").click();
      cy.get(`[aria-label='Wednesday March 17 2021']`).click();
      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.get("@onChangeSpy")
        .should("have.been.called")
        .then(() => {
          expect(onChangeSpy.getCalls()[0].args[0].toISOString()).equal(new Date("2021-03-17T10:23:10.000Z").toISOString());
        });
    });

    // describe("date and time", () => {
    //   it("can show with a blank current value", () => {
    //     mockMetadataResponse();
    //     const onChangeSpy = cy.spy().as("onChangeSpy");
    //     cy.mountWithWrapper(
    //       <AutoForm action={api.widget.create}>
    //         <AutoDateTimePicker suiteName={name} id="test" includeTime onChange={onChangeSpy} field="startsAt" />
    //       </AutoForm>,
    //       wrapper
    //     );
    //     cy.wait("@ModelCreateActionMetadata");
    //     // Test is flaky without waiting for the DOM to load
    //     cy.wait(100);
    //     cy.get("#test-date").should("have.value", "");
    //     cy.get("#test-time").should("have.value", "");
    //   });

    //   it(
    //     "can show the default field value from the metadata",
    //     // eslint-disable-next-line
    //     // @ts-ignore - This test passes in isolation but is flakey when run with the rest of the file
    //     { retries: 2 },
    //     () => {
    //       mockMetadataResponse({ startsAt: "2024-07-10T04:00:00.000Z" });
    //       cy.mountWithWrapper(
    //         <AutoForm action={api.widget.create}>
    //           <AutoDateTimePicker suiteName={name} id="test" includeTime field="startsAt" />
    //         </AutoForm>,
    //         wrapper
    //       );
    //       cy.wait("@ModelCreateActionMetadata");
    //       cy.get("#test-date").should("have.value", "2024-07-10");
    //       cy.get("#test-time").should("have.value", "4:00 AM");
    //     }
    //   );

    //   it("can show the default field value from the defaultValues prop", () => {
    //     mockMetadataResponse();
    //     cy.mountWithWrapper(
    //       <AutoForm action={api.widget.create} defaultValues={{ widget: { startsAt: "2024-07-10T04:00:00.000Z" } }}>
    //         <AutoDateTimePicker suiteName={name} id="test" includeTime field="startsAt" />
    //       </AutoForm>,
    //       wrapper
    //     );
    //     cy.wait("@ModelCreateActionMetadata");
    //     cy.get("#test-date").should("have.value", "2024-07-10");
    //     cy.get("#test-time").should("have.value", "4:00 AM");
    //   });

    //   it("can show the current value", () => {
    //     mockMetadataResponse();
    //     const onChangeSpy = cy.spy().as("onChangeSpy");
    //     cy.mountWithWrapper(
    //       <AutoForm action={api.widget.create}>
    //         <AutoDateTimePicker suiteName={name} id="test" includeTime value={baseDate} onChange={onChangeSpy} field="startsAt" />
    //       </AutoForm>,
    //       wrapper
    //     );
    //     cy.wait("@ModelCreateActionMetadata");
    //     cy.get("#test-date").should("have.value", format(dateInLocalTZ, "yyyy-MM-dd"));
    //     cy.get("#test-time").should("have.value", format(dateInLocalTZ, "K:m aa"));
    //   });

    //   it("can change the date", () => {
    //     mockMetadataResponse();
    //     const onChangeSpy = cy.spy().as("onChangeSpy");
    //     cy.mountWithWrapper(
    //       <AutoForm action={api.widget.create}>
    //         <AutoDateTimePicker suiteName={name} id="test" includeTime value={baseDate} onChange={onChangeSpy} field="startsAt" />
    //       </AutoForm>,
    //       wrapper
    //     );
    //     cy.wait("@ModelCreateActionMetadata");
    //     cy.get("#test-date").click();
    //     cy.get(`[aria-label='Thursday March 4 2021']`).click();
    //     // eslint-disable-next-line jest/valid-expect-in-promise
    //     cy.get("@onChangeSpy")
    //       .should("have.been.called")
    //       .then(() => {
    //         expect(onChangeSpy.getCalls()[0].args[0].toISOString()).equal(new Date("2021-03-04T11:23:00.000Z").toISOString());
    //       });
    //   });

    //   it("can enter an invalid time and show an error", () => {
    //     mockMetadataResponse();
    //     const onChangeSpy = cy.spy().as("onChangeSpy");
    //     cy.mountWithWrapper(
    //       <AutoForm action={api.widget.create}>
    //         <AutoDateTimePicker suiteName={name} id="test" includeTime value={baseDate} onChange={onChangeSpy} field="startsAt" />
    //       </AutoForm>,
    //       wrapper
    //     );
    //     cy.wait("@ModelCreateActionMetadata");
    //     cy.get("#test-time").click().clear().type("foo");
    //     cy.get("body").click();
    //     cy.contains("Invalid time format");
    //     cy.get("#test-time").click().clear().type("12:21 AM");
    //     cy.contains("Invalid time format").should("not.exist");
    //   });

    // it("can show the selected date", () => {
    //   mockMetadataResponse();
    //   cy.mountWithWrapper(<TestComponentWithCustomOnChange />, PolarisWrapper);
    //   cy.wait("@ModelCreateActionMetadata");
    //   cy.get("#test-date").click();
    //   cy.get(`[aria-label='Thursday March 4 2021']`).click();
    //   cy.get("#test-date").click();
    //   cy.get(`[aria-label='Thursday March 4 2021']`).should("have.attr", "aria-pressed", "true");
    // });
  });
});
