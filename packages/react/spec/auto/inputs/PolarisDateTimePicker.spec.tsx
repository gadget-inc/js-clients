import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React, { ReactNode } from "react";
import { PolarisDateTimePicker } from "../../../src/auto/polaris/PolarisDateTimePicker.js";

const PolarisWrapper = (props: { children: ReactNode }) => {
  return <AppProvider i18n={translations}>{props.children}</AppProvider>;
};

describe("PolarisDateTimePicker", () => {
  it("can change the time", async () => {
    const originalDateResolvedOptions = new Intl.DateTimeFormat().resolvedOptions();
    jest.spyOn(Intl.DateTimeFormat.prototype, "resolvedOptions").mockReturnValue({
      ...originalDateResolvedOptions,
      timeZone: "America/New_York",
    });
    const onChangeSpy = jest.fn();
    const user = userEvent.setup();
    const baseDate = new Date("2021-03-05T11:23:10.000Z");
    render(<PolarisDateTimePicker id="test" includeTime value={baseDate} onChange={onChangeSpy} />, { wrapper: PolarisWrapper });

    await act(async () => {
      await user.click(screen.getByLabelText("Time"));
      await user.clear(screen.getByLabelText("Time"));
      await user.type(screen.getByLabelText("Time"), "11:00 AM");
    });

    expect(onChangeSpy).toHaveBeenCalledWith(new Date("2021-03-05T16:00:00.000Z"));
  });
});
