/* eslint-disable jest/valid-expect */
import React from "react";
import { PolarisAutoTable } from "../../../../src/auto/polaris/PolarisAutoTable.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";
import { first50WidgetRecords, widgetModelMetadata } from "./metadata/widgetMetadata.js";

describe("AutoTable - Bulk actions", () => {
  const mockModelMetadata = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.options.endpoint}?operation=GetModelMetadata`,
        times: 1,
      },
      (req) => {
        req.reply(widgetModelMetadata);
      }
    ).as("getModelMetadata");
  };

  const mockGetWidgets = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.options.endpoint}?operation=widgets`,
        times: 1,
      },
      (req) => {
        req.reply(first50WidgetRecords);
      }
    ).as("getWidgets");
  };

  const mockBulkDeleteWidgets = (response: any, as: string) => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.options.endpoint}?operation=bulkDeleteWidgets`,
        times: 1,
      },
      (req) => {
        req.reply(response);
      }
    ).as(as);
  };

  const openBulkAction = (label: string, isPromoted = true) => {
    if (isPromoted) {
      return cy.contains(label).click({ force: true });
    }
    cy.get(`button[aria-label="More actions"]`).eq(1).click();
    return cy.contains(label).click({ force: true });
  };

  const selectRecordIds = (ids: string[]) => {
    for (const id of ids) {
      cy.get(`input[id="Select-${id}"]`).eq(0).click();
    }
  };

  let stubCallback: any;

  beforeEach(() => {
    cy.viewport("macbook-13");
    mockModelMetadata();
    mockGetWidgets();

    stubCallback = cy.stub();
    cy.mountWithWrapper(
      <PolarisAutoTable
        model={api.widget}
        actions={[
          "delete",
          { label: "Custom renderer action", promptComponent: SamplepromptComponent },
          { label: "Custom callback action", action: stubCallback },
          { label: "Relabeled model action", action: "delete" },
          { promoted: true, label: "(Promoted)Custom renderer action", promptComponent: SamplepromptComponent },
          { promoted: true, label: "(Promoted)Custom callback action", action: stubCallback },
          { promoted: true, label: "(Promoted)Relabeled model action", action: "delete" },
        ]}
      />,
      PolarisWrapper
    );

    cy.wait("@getModelMetadata");
    cy.wait("@getWidgets").its("request.body.variables").should("deep.equal", { first: 50 }); // No search value
  });

  it("can select and deselect all records on the current page", () => {
    cy.get(`input[id=":r3:"]`).eq(0).click();
    cy.contains("50 selected").should("exist");

    openBulkAction("Delete");

    cy.contains("Are you sure you want to run this action on 50 records?").should("exist");
    cy.get("button").contains("Close").click();

    cy.get(`input[id=":r3:"]`).eq(0).click();
    cy.get(`button[aria-label="Actions"]`).should("not.exist");
  });

  it("Can run the bulkDelete action with the selected IDs", () => {
    selectRecordIds(["10", "11", "12"]);
    openBulkAction("Delete");

    cy.contains("Are you sure you want to run this action on 3 records?").should("exist");

    mockBulkDeleteWidgets(bulkDeleteSuccessResponse, "bulkDeleteWidgets");
    mockGetWidgets();
    cy.get("button").contains("Run").click();
    cy.wait("@bulkDeleteWidgets")
      .its("request.body.variables")
      .should("deep.equal", { ids: ["10", "11", "12"] }); // selected IDs included

    cy.wait("@getWidgets").its("request.body.variables").should("deep.equal", { first: 50 }); // No search value

    cy.contains("Action completed successfully");
    cy.get("button").contains("Close").click();

    // Now ensure that error response appears in the modal
    selectRecordIds(["20", "21", "22"]);

    cy.get(`input[id="Select-20"]`).eq(0).click();
    cy.get(`input[id="Select-21"]`).eq(0).click();
    cy.get(`input[id="Select-22"]`).eq(0).click();
    openBulkAction("Delete");

    mockBulkDeleteWidgets(bulkDeleteFailureResponse, "bulkDeleteWidgets2");

    cy.get("button").contains("Run").click();
    cy.wait("@bulkDeleteWidgets2");

    cy.contains(bulkDeleteFailureMessage);
  });

  describe.each([true, false])("Custom actions with promoted=%s", (promoted) => {
    beforeEach(() => {
      selectRecordIds(["10", "11", "12"]);
    });

    it("Can run custom actions with passed in renderers", () => {
      openBulkAction(`${promoted ? `(Promoted)` : ""}Custom renderer action`, promoted);

      cy.contains("Selected record ids: 10,11,12").should("exist");
      cy.contains(`Selected record inventory count sum: 126`).should("exist");
    });

    it("Can run custom actions with passed in callbacks", () => {
      openBulkAction(`${promoted ? `(Promoted)` : ""}Custom callback action`, promoted).then(() => expect(stubCallback).to.be.called);
    });

    it("Can run relabeled Gadget actions", () => {
      openBulkAction(`${promoted ? `(Promoted)` : ""}Relabeled model action`, promoted);

      cy.contains("Are you sure you want to run this action on 3 records?").should("exist");

      mockBulkDeleteWidgets(bulkDeleteSuccessResponse, "bulkDeleteWidgets");
      mockGetWidgets();
      cy.get("button").contains("Run").click();
      cy.wait("@bulkDeleteWidgets")
        .its("request.body.variables")
        .should("deep.equal", { ids: ["10", "11", "12"] }); // selected IDs included

      cy.wait("@getWidgets").its("request.body.variables").should("deep.equal", { first: 50 }); // No search value

      cy.contains("Action completed successfully");
      cy.get("button").contains("Close").click();
    });
  });
});

const bulkDeleteSuccessResponse = {
  data: {
    bulkDeleteAutoTableTests: {
      success: true,
      errors: null,
      __typename: "BulkDeleteWidgetResult",
    },
    gadgetMeta: {
      hydrations: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
        dt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
  extensions: {
    logs: "https://ggt.link/logs/114412/b0bbfc5f8378c6a4f59ac98c859117e6",
    traceId: "b0bbfc5f8378c6a4f59ac98c859117e6",
  },
};

const bulkDeleteFailureMessage = "error message from bulkDelete response";
const bulkDeleteFailureResponse = {
  errors: [
    {
      message: bulkDeleteFailureMessage,
      locations: [
        {
          line: 2,
          column: 3,
        },
      ],
      path: ["bulkDeleteAutoTableTests"],
      extensions: {
        fromSandbox: false,
      },
    },
  ],
  data: {
    bulkDeleteAutoTableTests: null,
    gadgetMeta: {
      hydrations: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
        dt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
  extensions: {
    logs: "https://ggt.link/logs/114412/3faf15ad42c60f33ea5f012e99137263",
    traceId: "3faf15ad42c60f33ea5f012e99137263",
  },
};

const SamplepromptComponent = (props: { records: any[] }) => {
  const { records } = props;
  return (
    <div>
      <p>Selected record ids: {records.map((record) => record.id).join(",")}</p>
      <p>Selected record inventory count sum: {records.reduce((total, record) => total + (record.inventoryCount ?? 0), 0)}</p>
    </div>
  );
};
