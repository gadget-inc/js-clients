import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import React from "react";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoPasswordInput } from "../../../../src/auto/polaris/inputs/PolarisAutoPasswordInput.js";
import { testApi as api } from "../../../apis.js";
import { mockUserFindBy } from "../../support/helper.js";
import { PolarisMockedProviders } from "./PolarisMockedProviders.js";

describe("PolarisPasswordInput", () => {
  let result: RenderResult;

  test("it renders the edit password button", async () => {
    result = render(
      <PolarisAutoForm action={api.user.update} findBy="1">
        <PolarisAutoPasswordInput field={"password"} />
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );
    await mockUpdateUserFindBy();
    const fieldNameLabel = result.queryByText("Password");
    expect(fieldNameLabel).toBeInTheDocument();

    expect(result.queryByRole("passwordEditPasswordButton")).toBeInTheDocument();
  });

  test("it can override the appearance of the edit password toggle button", async () => {
    result = render(
      <PolarisAutoForm action={api.user.update} findBy="1">
        <PolarisAutoPasswordInput field="password" suffix={"override here"} />
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );
    await mockUpdateUserFindBy();

    expect(result.queryByText("Password")).toBeInTheDocument(); // TItle
    expect(result.queryByRole("passwordEditPasswordButton")).toBeNull();
  });
});

const mockUpdateUserFindBy = async () => {
  await mockUserFindBy({
    name: "Update",
    apiIdentifier: "update",
    operatesWithRecordIdentity: true,
  });
};
