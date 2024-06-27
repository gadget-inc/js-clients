import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import { act, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { ReactNode } from "react";
import React from "react";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoHiddenInput } from "../../../src/auto/polaris/inputs/PolarisAutoHiddenInput.js";
import { PolarisAutoSubmit } from "../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { testApi as api } from "../../apis.js";
import { MockClientProvider, mockUrqlClient } from "../../testWrappers.js";
import { mockWidgetFindBy } from "../support/helper.js";
import { getWidgetModelMetadata } from "../support/widgetModel.js";

const PolarisMockedProviders = (props: { children: ReactNode }) => {
  return (
    <MockClientProvider api={api}>
      <AppProvider i18n={translations}>{props.children}</AppProvider>
    </MockClientProvider>
  );
};

describe("PolarisAutoHiddenInput", () => {
  it("should set the value", async () => {
    const user = userEvent.setup();

    const { getByRole } = render(
      <PolarisAutoForm action={api.widget.create}>
        <PolarisAutoHiddenInput field="name" value="Bob" />
        <PolarisAutoHiddenInput field="inventoryCount" value={42} />
        <PolarisAutoSubmit />
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );

    loadMockWidgetCreateMetadata();

    await act(async () => {
      await user.click(getByRole("button"));
    });

    const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
    const mutationName = mutation.query.definitions[0].name.value;
    const variables = mutation.variables.widget;

    expect(mutationName).toEqual("createWidget");
    expect(variables.inventoryCount).toEqual(42);
    expect(variables.name).toEqual("Bob");
  });

  it("should override the pre-filled value", async () => {
    const user = userEvent.setup();

    const { getByRole } = render(
      <PolarisAutoForm action={api.widget.update} findBy="42">
        <PolarisAutoHiddenInput field="name" value="Bob" />
        <PolarisAutoHiddenInput field="inventoryCount" value={9999} />
        <PolarisAutoSubmit />
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );

    mockUpdateWidgetFindBy();

    await act(async () => {
      await user.click(getByRole("button"));
    });

    const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
    const mutationName = mutation.query.definitions[0].name.value;
    const variables = mutation.variables.widget;
    const id = mutation.variables.id;

    expect(mutationName).toEqual("updateWidget");
    expect(variables.inventoryCount).toEqual(9999);
    // The name in the mocked data is "Alice", the value from the hidden input should override it
    expect(variables.name).toEqual("Bob");
    expect(id).toEqual("42");
  });

  it("the second AutoHiddenInput should override the first input when they point to the same field API identifier", async () => {
    const user = userEvent.setup();

    const { getByRole } = render(
      <PolarisAutoForm action={api.widget.update} findBy="42">
        <PolarisAutoHiddenInput field="name" value="Bob" />
        <PolarisAutoHiddenInput field="name" value="Alice" />
        <PolarisAutoSubmit />
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );

    mockUpdateWidgetFindBy();

    await act(async () => {
      await user.click(getByRole("button"));
    });

    const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
    const mutationName = mutation.query.definitions[0].name.value;
    const variables = mutation.variables.widget;

    expect(mutationName).toEqual("updateWidget");
    expect(variables.name).toEqual("Alice");
  });
});

function loadMockWidgetCreateMetadata() {
  expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
    modelApiIdentifier: "widget",
    modelNamespace: null,
    action: "create",
  });

  mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getWidgetModelMetadata({
      name: "Create",
      apiIdentifier: "create",
      operatesWithRecordIdentity: false,
    }),
  });
}

const mockUpdateWidgetFindBy = () => {
  mockWidgetFindBy(
    {
      name: "Update",
      apiIdentifier: "update",
      operatesWithRecordIdentity: true,
    },
    {
      id: "42",
      isChecked: true,
      inventoryCount: 1234,
      name: "Alice",
    }
  );
};
