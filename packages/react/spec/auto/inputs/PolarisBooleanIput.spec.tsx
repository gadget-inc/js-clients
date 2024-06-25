import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import React from "react";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisBooleanInput } from "../../../src/auto/polaris/inputs/PolarisBooleanInput.js";
import { testApi as api } from "../../apis.js";
import { MockClientProvider, mockUrqlClient } from "../../testWrappers.js";
import { getWidgetModelMetadata, getWidgetRecord } from "../support/widgetModel.js";

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
      <PolarisAutoForm action={api.widget.update} findBy="42">
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
  mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getWidgetModelMetadata({
      name: "Update",
      apiIdentifier: "update",
      operatesWithRecordIdentity: true,
    }),
  });

  mockUrqlClient.executeQuery.pushResponse("widget", {
    stale: false,
    hasNext: false,
    data: getWidgetRecord({
      isChecked: true,
    }),
  });
};
