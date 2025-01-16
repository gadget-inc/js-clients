import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";
import type { AutoFormSubmitResult } from "../../../../src/auto/AutoFormContext.js";
import { PolarisSubmitResultBanner } from "../../../../src/auto/polaris/submit/PolarisSubmitResultBanner.js";
import type { ModelWithOneActionMetadata } from "../../../../src/metadata.js";
import { MockForm } from "../../MockForm.js";

describe("PolarisSubmitResultBanner", () => {
  const getWrapper = (submitResult: AutoFormSubmitResult) => ({ wrapper: MockForm({ submit: jest.fn<any>(), metadata, submitResult }) });

  describe("Successful form submission", () => {
    it("shows the model name the banner by default", async () => {
      const result = render(<PolarisSubmitResultBanner />, getWrapper({ isSuccessful: true }));
      expect(result.queryByText("Saved Widget successfully.")).toBeInTheDocument();
    });

    it("can override the success banner properties", async () => {
      const result = render(
        <PolarisSubmitResultBanner
          successBannerProps={{ title: "alternate success title" }}
          errorBannerProps={{ title: "alternate error title" }}
        />,
        getWrapper({ isSuccessful: true })
      );

      expect(result.queryByText("alternate success title")).toBeInTheDocument();
      expect(result.queryByText("alternate error title")).toBeNull();
    });

    it("does not show errors when successful", async () => {
      const result = render(
        <PolarisSubmitResultBanner
          successBannerProps={{ title: "alternate success title" }}
          errorBannerProps={{ title: "alternate error title" }}
        />,
        getWrapper({ isSuccessful: true, error: { message: "errorMessage", name: "errorName" } })
      );

      expect(result.queryByText("alternate success title")).toBeInTheDocument();
      expect(result.queryByText("alternate error title")).toBeNull();
    });
  });

  describe("Form submission errors", () => {
    it("shows the error message in the banner by default", async () => {
      const result = render(<PolarisSubmitResultBanner />, getWrapper({ error: { message: "errorMessage", name: "errorName" } }));
      expect(result.queryByText("errorMessage")).toBeInTheDocument();
      expect(result.queryByText("errorName")).toBeNull();
    });

    it("can override the success banner properties", async () => {
      const result = render(
        <PolarisSubmitResultBanner
          successBannerProps={{ title: "alternate success title" }}
          errorBannerProps={{ title: "alternate error title" }}
        />,
        getWrapper({ error: { message: "errorMessage", name: "errorName" } })
      );

      expect(result.queryByText("alternate success title")).toBeNull();
      expect(result.queryByText("alternate error title")).toBeInTheDocument();

      expect(result.queryByText("errorMessage")).toBeNull();
      expect(result.queryByText("errorName")).toBeNull();
    });
  });
});

const metadata: ModelWithOneActionMetadata = {
  key: "DataModel-Widget",
  name: "Widget",
  namespace: [],
  apiIdentifier: "widget",
  defaultRecord: {
    name: "",
    __typename: "Widget",
  },
  action: {
    name: "Create",
    apiIdentifier: "create",
    operatesWithRecordIdentity: false,
    isDeleteAction: false,
    inputFields: [
      {
        name: "Widget",
        apiIdentifier: "widget",
        fieldType: "Object",
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetObjectFieldConfig",
          fieldType: "Object",
          validations: [],

          fields: [
            {
              name: "name",
              apiIdentifier: "name",
              fieldType: "String",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
              },
            },
          ],
        },
        __typename: "GadgetObjectField",
      },
    ],
    triggers: [
      {
        specID: "gadget/trigger/graphql_api",
        __typename: "GadgetTrigger",
      },
    ],
    __typename: "GadgetAction",
  },
  __typename: "GadgetModel",
} as ModelWithOneActionMetadata;
