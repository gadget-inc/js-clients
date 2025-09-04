/* eslint-disable jest/valid-expect */
import React from "react";
import { ActionErrorMessage, ActionSuccessMessage } from "../../../../src/auto/hooks/useTableBulkActions.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";
import { first50WidgetRecords, widgetModelMetadata } from "./metadata/widgetMetadata.js";

describeForEachAutoAdapter("AutoTable - Bulk actions", ({ name, adapter: { AutoTable }, wrapper }) => {
  const componentIdentifiers =
    name === SUITE_NAMES.POLARIS
      ? {
          selectAllCheckbox: `input[id="«r3»"]`,
          singleRowCheckbox: (recordId: string | number) => `input[id="Select-${recordId}"]`,
        }
      : {
          // SHADCN
          selectAllCheckbox: `button[id="AutoTableSelectAllCheckbox"]`,
          singleRowCheckbox: (recordId: string | number) => `button[id="AutoTableSingleRowCheckbox-${recordId}"]`,
        };

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

    cy.get(`button[aria-label="More actions"]`).click({ multiple: true, force: true });
    return cy.contains(label).click({ force: true });
  };

  const selectRecordIds = (ids: string[]) => {
    for (const id of ids) {
      cy.get(componentIdentifiers.singleRowCheckbox(id)).eq(0).click();
    }
  };

  let stubCallback: any;

  beforeEach(() => {
    cy.viewport("macbook-13");
    mockModelMetadata();
    mockGetWidgets();

    stubCallback = cy.stub();
    cy.mountWithWrapper(
      <AutoTable
        model={api.widget}
        actions={[
          "delete",
          { label: "Custom callback action", action: stubCallback },
          { label: "Relabeled model action", action: "delete" },
          { promoted: true, label: "(Promoted)Custom callback action", action: stubCallback },
          { promoted: true, label: "(Promoted)Relabeled model action", action: "delete" },
        ]}
      />,
      wrapper
    );

    cy.wait("@getModelMetadata");
    cy.wait("@getWidgets").its("request.body.variables").should("deep.equal", { first: 50 }); // No search value
  });

  it("can select and deselect all records on the current page", () => {
    cy.get(componentIdentifiers.selectAllCheckbox).eq(0).click();
    cy.contains("50 selected").should("exist");

    openBulkAction("Delete");

    cy.contains("Are you sure you want to run this action on 50 records?").should("exist");
    cy.get("button").contains("Close").click({ force: true });

    cy.get(componentIdentifiers.selectAllCheckbox).eq(0).click();
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

    cy.contains(ActionSuccessMessage);
    cy.get("button").contains("Close").click({ force: true });

    // Now ensure that error response appears in the modal
    selectRecordIds(["20", "21", "22"]);

    openBulkAction("Delete");

    mockBulkDeleteWidgets(bulkDeleteFailureResponse, "bulkDeleteWidgets2");

    cy.get("button").contains("Run").click();
    cy.wait("@bulkDeleteWidgets2");
    cy.contains(ActionErrorMessage);
  });

  describe.each([true, false])("Custom actions with promoted=%s", (promoted) => {
    beforeEach(() => {
      selectRecordIds(["10", "11", "12"]);
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

      cy.contains(ActionSuccessMessage);
      cy.get("button").contains("Close").click({ force: true });
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
