import { act, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoJSONInput } from "../../../src/auto/polaris/inputs/PolarisAutoJSONInput.js";
import { PolarisAutoSubmit } from "../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { testApi as api } from "../../apis.js";
import { mockUrqlClient } from "../../testWrappers.js";
import { mockWidgetFindBy } from "../support/helper.js";
import { PolarisMockedProviders } from "./PolarisMockedProviders.js";

describe("PolarisJSONInput", () => {
  it("should automatically set the pre-filled value when the form is pre-filled", async () => {
    const { getByLabelText } = render(<PolarisAutoForm action={api.widget.update} findBy="42" include={["metafields"]} />, {
      wrapper: PolarisMockedProviders,
    });
    mockUpdateWidgetFindBy();
    const input = getByLabelText("Metafields");
    expect(input).toHaveValue(`{
  "hello": "world!"
}`);
  });

  it("should be able to pass in custom properties from Polaris and submit with the proper value", async () => {
    const { getByLabelText, getByRole } = render(
      <PolarisAutoForm action={api.widget.update} findBy="42">
        <PolarisAutoJSONInput field="metafields" />
        <PolarisAutoSubmit />
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );
    mockUpdateWidgetFindBy();
    const input = getByLabelText("Metafields");

    const user = userEvent.setup();
    await act(async () => {
      await user.click(input);
      await user.clear(input);
      // The extra braces `{` at the beginning is to prevent it from throwing the error (Expected repeat modifier or release modifier or "}") from testing-library.
      // The formatting to test if the form submission is able to handle it.
      await user.type(
        input,
        `{{
          "updated":"value", "someNumber":         42, "bool": true,
          "nested": {{
            "key": "value"
          }
        }`
      );
      await user.click(getByRole("button"));
    });

    const formSubmitRequest = mockUrqlClient.executeMutation.mock.calls[0][0];
    const metafields = formSubmitRequest.variables.widget.metafields;
    expect(metafields).toEqual({
      updated: "value",
      someNumber: 42,
      bool: true,
      nested: {
        key: "value",
      },
    });
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
      metafields: { hello: "world!" },
    }
  );
};
