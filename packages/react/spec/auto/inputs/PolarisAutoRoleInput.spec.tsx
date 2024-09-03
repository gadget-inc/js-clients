import type { RenderResult } from "@testing-library/react";
import { act, render, screen } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoRolesInput } from "../../../src/auto/polaris/inputs/PolarisAutoRolesInput.js";
import { PolarisAutoSubmit } from "../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { testApi as api } from "../../apis.js";
import { mockUrqlClient } from "../../testWrappers.js";
import { mockWidgetFindBy } from "../support/helper.js";
import { PolarisMockedProviders } from "./PolarisMockedProviders.js";

describe("PolarisAutoRolesInput", () => {
  let result: RenderResult;
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
    setupRenderResult();
  });

  const setupRenderResult = () => {
    result = render(
      <PolarisAutoForm action={api.widget.update} findBy="42">
        <PolarisAutoRolesInput field={"roles"} />
        <PolarisAutoSubmit>RealSubmitButton</PolarisAutoSubmit>
      </PolarisAutoForm>,
      { wrapper: PolarisMockedProviders }
    );
    mockUpdateWidgetFindBy();
  };

  test("it preloads the selected role from the record and fetches all available role options", async () => {
    // First call to get field metadata
    expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
      action: "update",
      modelApiIdentifier: "widget",
      modelNamespace: null,
      includeRelatedFields: false,
    });
    expect(mockUrqlClient.executeQuery.mock.calls[0][0].query.definitions[0].name.value).toEqual("ModelActionMetadata");

    // Retrieving the existing record value
    expect(mockUrqlClient.executeQuery.mock.calls[1][0].variables).toEqual({ id: "42" });
    expect(mockUrqlClient.executeQuery.mock.calls[1][0].query.definitions[0].name.value).toEqual("widget");

    // Retrieving the first page of records for the related model
    expect(mockUrqlClient.executeQuery.mock.calls[2][0].variables).toEqual({}); // No variables passed into getting the roles metadata
    expect(mockUrqlClient.executeQuery.mock.calls[2][0].query.definitions[0].name.value).toEqual("RolesMetadata");

    // From the findBy response, show the selected roles
    expect(screen.queryByText("Custom role")).toBeInTheDocument();
    expect(screen.queryByText("signed-in")).toBeInTheDocument();

    // From the metadata response, don't show roles that are not currently selected in the record
    expect(screen.queryByText("system-admin")).toBeNull();
    expect(screen.queryByText("unauthenticated")).toBeNull();
    expect(screen.queryByText("Custom role 2")).toBeNull();
  });

  test("Sends a list of role keys on submission", async () => {
    await act(async () => {
      const removeSignedInRoleButton = result.container.querySelector(`button[aria-label="Remove signed-in"]`)!;
      await user.click(removeSignedInRoleButton);

      await user.click(screen.queryByText("RealSubmitButton")!);
    });

    const formSubmitRequest = mockUrqlClient.executeMutation.mock.calls[0][0];
    const submittedRoleIds = formSubmitRequest.variables.widget.roles;
    expect(submittedRoleIds).toEqual(["Role-abc123xyz"]);
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
      id: "42",
      roles: [
        {
          key: "signed-in",
          name: "signed-in",
          __typename: "Role",
        },

        {
          key: "Role-abc123xyz",
          name: "Custom role",
          __typename: "Role",
        },
      ],
    }
  );
  mockRolesMetadataQueryResponse();
};

const mockRolesMetadataQueryResponse = () => {
  mockUrqlClient.executeQuery.pushResponse("RolesMetadata", rolesMetadataQueryResponse);
};

const rolesMetadataQueryResponse = {
  stale: false,
  hasNext: false,
  data: {
    gadgetMeta: {
      roles: [
        {
          key: "signed-in",
          name: "signed-in",
          selectable: false,
          __typename: "GadgetRole",
        },
        {
          key: "sysadmin",
          name: "system-admin",
          selectable: true,
          __typename: "GadgetRole",
        },
        {
          key: "unauthenticated",
          name: "unauthenticated",
          selectable: false,
          __typename: "GadgetRole",
        },
        {
          key: "Role-abc123xyz",
          name: "Custom role",
          __typename: "Role",
        },
        {
          key: "Role-qwerty12345",
          name: "Custom role 2",
          __typename: "Role",
        },
      ],
      __typename: "GadgetApplicationMeta",
    },
  },
};
