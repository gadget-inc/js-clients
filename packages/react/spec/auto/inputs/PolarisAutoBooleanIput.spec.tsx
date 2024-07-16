import { act, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoBooleanInput } from "../../../src/auto/polaris/inputs/PolarisAutoBooleanInput.js";
import { PolarisAutoSubmit } from "../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { testApi as api } from "../../apis.js";
import { mockUrqlClient } from "../../testWrappers.js";
import { mockWidgetFindBy } from "../support/helper.js";
import { PolarisMockedProviders } from "./PolarisMockedProviders.js";

describe("PolarisBooleanInput", () => {
  it("should automatically set the pre-filled value when the form is pre-filled", async () => {
    const { getByLabelText } = render(
      <PolarisAutoForm action={api.widget.update} findBy="42" include={["isChecked", "name", "inventoryCount"]} />,
      {
        wrapper: PolarisMockedProviders,
      }
    );
    mockUpdateWidgetFindBy();
    const checkbox = getByLabelText("Is checked");
    expect(checkbox).toBeChecked();
  });

  it("should be able to pass in custom properties from Polaris and submit with the proper value", async () => {
    const { getByLabelText, getByRole } = render(
      <PolarisAutoForm action={api.widget.update} findBy="42">
        <PolarisAutoBooleanInput field="isChecked" label="I agree to do something" />
        <PolarisAutoSubmit />
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );
    mockUpdateWidgetFindBy();
    const checkbox = getByLabelText("I agree to do something");
    expect(checkbox).toBeChecked(); // Initially checked based on findBy value

    const user = userEvent.setup();
    await act(async () => {
      await user.click(checkbox); // set to false
      await user.click(getByRole("button"));
    });

    const formSubmitRequest = mockUrqlClient.executeMutation.mock.calls[0][0];
    const isChecked = formSubmitRequest.variables.widget.isChecked; // The actual variable name is used
    expect(isChecked).toEqual(false);
  });
});

const mockUpdateWidgetFindBy = () => {
  mockWidgetFindBy(
    {
      name: "Update",
      apiIdentifier: "update",
      operatesWithRecordIdentity: true,
    },
    {
      isChecked: true,
    }
  );
};
