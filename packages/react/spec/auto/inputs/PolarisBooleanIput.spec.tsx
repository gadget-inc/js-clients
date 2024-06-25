import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import React from "react";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisBooleanInput } from "../../../src/auto/polaris/inputs/PolarisBooleanInput.js";
import { testApi as api } from "../../apis.js";
import { MockClientProvider, mockUrqlClient } from "../../testWrappers.js";
import { mockWidgetActionMetadata } from "../support/mockWidgetResponses.js";

const PolarisMockedProviders = (props: { children: ReactNode }) => {
  return (
    <MockClientProvider api={api}>
      <AppProvider i18n={translations}>{props.children}</AppProvider>
    </MockClientProvider>
  );
};

describe("PolarisBooleanInput", () => {
  it("should automatically set the pre-filled value when the form is pre-filled", async () => {
    const { getByLabelText } = render(<PolarisAutoForm action={api.widget.create} findBy="42" />, { wrapper: PolarisMockedProviders });
    mockWidgetFindBy();
    const checkbox = getByLabelText("Is checked");
    expect(checkbox).toBeChecked();
  });

  it("should be able to pass in custom properties from Polaris", () => {
    const { getByLabelText } = render(
      <PolarisAutoForm action={api.widget.create} findBy="42">
        <PolarisBooleanInput field="name" label="I agree to do something" />
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );
    mockWidgetFindBy();
    const checkbox = getByLabelText("I agree to do something");
    expect(checkbox).toBeChecked();
  });
});

const mockWidgetFindBy = () => {
  mockWidgetActionMetadata();

  mockUrqlClient.executeQuery.pushResponse("widget", {
    stale: false,
    hasNext: false,
    data: {
      widget: {
        __typename: "Widget",
        id: "42",
        anything: {
          key: "value",
          example: true,
        },
        birthday: null,
        category: [],
        color: null,
        createdAt: "2024-06-24T18:55:29.621Z",
        description: {
          markdown: "example _rich_ **text**",
          truncatedHTML: "<p>example <em>rich</em> <strong>text</strong></p> ",
          __typename: "RichText",
        },
        embedding: null,
        inStock: true,
        inventoryCount: 123,
        isChecked: true,
        metafields: null,
        mustBeLongString: null,
        name: "example value for name",
        roles: [],
        secretKey: null,
        startsAt: null,
        updatedAt: "2024-06-24T18:55:29.621Z",
      },
      gadgetMeta: {
        hydrations: {
          updatedAt: "DateTime",
          startsAt: "DateTime",
          birthday: "DateTime",
          createdAt: "DateTime",
        },
        __typename: "GadgetApplicationMeta",
      },
    },
  });
};
