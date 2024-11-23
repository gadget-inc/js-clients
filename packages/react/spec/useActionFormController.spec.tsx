import { Form, TextField } from "@shopify/polaris";
import React from "react";
import { Controller, useActionForm } from "../src/useActionForm.js";
import { relatedProductsApi } from "./apis.js";

describe("useActionFormController", () => {
  test("null is removed from possible form states to remain compatible with polaris", () => {
    const Component = () => {
      const { control, submit } = useActionForm(relatedProductsApi.user.create, {
        defaultValues: { id: "123" },
      });

      return (
        <Form onSubmit={submit}>
          <Controller
            name="email"
            control={control}
            render={({ field: { ref, ...fieldProps } }) => <TextField label="yay" autoComplete="off" {...fieldProps} />}
          />
        </Form>
      );
    };

    // this file just does type checks above
    expect(true).toBe(true);
  });
});
