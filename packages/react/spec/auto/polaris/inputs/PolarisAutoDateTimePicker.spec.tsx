import { jest } from "@jest/globals";
import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoDateTimePicker } from "../../../../src/auto/polaris/inputs/PolarisAutoDateTimePicker.js";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { testApi as api } from "../../../apis.js";
import { mockUrqlClient } from "../../../testWrappers.js";
import { sleep } from "../../../utils.js";
import { mockWidgetFindBy } from "../../support/helper.js";
import { PolarisMockedProviders } from "./PolarisMockedProviders.js";

describe("PolarisDateTimePicker", () => {
  it("can change the time", async () => {
    const originalDateResolvedOptions = new Intl.DateTimeFormat().resolvedOptions();
    jest.spyOn(Intl.DateTimeFormat.prototype, "resolvedOptions").mockReturnValue({
      ...originalDateResolvedOptions,
      timeZone: "Etc/UTC",
    });

    const today = new Date();
    today.setHours(11);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    const onChangeSpy = jest.fn();
    render(
      <PolarisAutoForm action={api.widget.update} findBy={"42"}>
        <PolarisAutoDateTimePicker id="test" includeTime hideTimePopover onChange={onChangeSpy} field="startsAt" />
        <PolarisAutoSubmit />
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );

    mockUpdateWidgetFindBy();
    const user = userEvent.setup();
    await act(async () => {
      await user.click(screen.getByLabelText("Time"));
      await user.type(screen.getByLabelText("Time"), "11");
      await sleep(100);
      await user.type(screen.getByLabelText("Time"), ":");
      await sleep(100);
      await user.type(screen.getByLabelText("Time"), "00 ");
      await sleep(100);
      await user.type(screen.getByLabelText("Time"), "AM");
      await sleep(100);
      await user.click(screen.getByRole("button"));
    });

    const formSubmitRequest = mockUrqlClient.executeMutation.mock.calls[0][0];
    const startsAt = formSubmitRequest.variables.widget.startsAt;
    expect(startsAt).toEqual(today);
    expect(onChangeSpy).toHaveBeenCalledWith(today);
  });
});

const mockUpdateWidgetFindBy = () => {
  const startsAtDate = new Date();
  startsAtDate.setHours(11);
  startsAtDate.setMinutes(0);

  mockWidgetFindBy(
    {
      name: "Update",
      apiIdentifier: "update",
      operatesWithRecordIdentity: true,
    },
    {
      id: "42",
      startsAt: startsAtDate,
    }
  );
};
