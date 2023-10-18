import { act, renderHook } from "@testing-library/react";
import { assert, type IsExact } from "conditional-type-checks";
import { CombinedError } from "urql";
import { useActionForm } from "../src/useActionForm.js";
import { bulkExampleApi, fullAuthApi, relatedProductsApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useActionForm", () => {
  const _TestUseActionFormCanTypeRecordAsDefaultValues = async () => {
    const { submit, setValue } = useActionForm(relatedProductsApi.user.update, {
      defaultValues: { id: "123", email: "test@test.com" },
      onSuccess: (data) => {
        data.id;
        data.email;
      },
    });

    // @ts-expect-error Argument of type '"foo"' is not assignable to parameter
    setValue("foo", "1");

    setValue("email", "test@test.com");

    const { data, error, fetching } = await submit();

    if (data) {
      data.id;
      data.email;
    }

    if (error) {
      error.message;
      error.executionErrors;
    }

    assert<IsExact<typeof fetching, boolean>>(true);
  };

  const _TestUseActionFormCanTypeNestedRecordAsDefaultValues = () => {
    const { setValue } = useActionForm(relatedProductsApi.user.update, {
      defaultValues: { id: "123", user: { email: "test@test.com" } },
    });

    // @ts-expect-error Argument of type '"foo"' is not assignable to parameter
    setValue("foo", "1");

    setValue("user.email", "test@test.com");
  };

  const _TestUseActionFormCanTypeExtraArguments = async () => {
    const { submit, setValue } = useActionForm<
      (typeof relatedProductsApi.user.update)["optionsType"],
      (typeof relatedProductsApi.user.update)["schemaType"],
      typeof relatedProductsApi.user.update,
      { foo: string }
    >(relatedProductsApi.user.update, {
      defaultValues: { id: "123", user: { email: "test@test.com" } },
    });

    setValue("foo", "1");

    setValue("user.email", "test@test.com");

    const { data, error, fetching } = await submit();

    if (data) {
      data.id;
      data.email;
    }

    if (error) {
      error.message;
      error.executionErrors;
    }

    assert<IsExact<typeof fetching, boolean>>(true);
  };

  const _TestUseActionFormCanTypeGlobalActions = async () => {
    const {
      submit,
      setValue,
      formState: { errors },
    } = useActionForm(bulkExampleApi.flipAll, {
      onSuccess: (data) => {
        data.foo;
        data.bar;
      },
    });

    // @ts-expect-error Argument of type '"foo"' is not assignable to parameter
    setValue("foo", "1");

    setValue("why", "foobar");

    const { data, error, fetching } = await submit();

    assert<IsExact<typeof data, any>>(true);

    if (error) {
      error.message;
      error.executionErrors;
    }

    assert<IsExact<typeof fetching, boolean>>(true);

    errors?.why?.message;
  };

  const _TestUseActionFormTypesWhenDefaultValuesDifferFromTriggerInputs = async () => {
    const {
      register,
      formState: { errors },
    } = useActionForm(fullAuthApi.user.changePassword, {
      defaultValues: { id: "123", email: "test@test.com" },
    });

    register("currentPassword");
    register("newPassword");
    errors.user?.password?.message;
  };

  const _TestUseActionFormTypesWhenAdditionalFields = async () => {
    const {
      register,
      watch,
      formState: { errors },
    } = useActionForm<
      (typeof fullAuthApi.user.resetPassword)["optionsType"],
      (typeof fullAuthApi.user.resetPassword)["schemaType"],
      typeof fullAuthApi.user.resetPassword,
      { confirmPassword?: string }
    >(fullAuthApi.user.resetPassword, {
      defaultValues: { code: "abc123" },
    });

    register("password");
    register("confirmPassword", {
      validate: (value) => value === watch("password") || "The passwords do not match",
    });

    errors?.user?.password?.message;
    errors?.confirmPassword;
  };

  test("can be used with a create action", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.user.create, {
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("email")).toBeUndefined();
    expect(result.current.getValues("password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("email", "test@test.com");
      (result.current as any).setValue("password", "secret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("email")).toBe("test@test.com");
    expect(result.current.getValues("password")).toBe("secret");

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      user: {
        email: "test@test.com",
        password: "secret",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("createUser", {
      data: {
        createUser: {
          success: true,
          user: {
            id: "123",
            email: "test@test.com",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "email": "test@test.com",
            "id": "123",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "test@test.com" });
    expect(result.current.getValues("email")).toBe("test@test.com");
    expect(result.current.getValues("password")).toBe("secret");
  });

  test("can be used with a create action with nested fields", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.user.create, {
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("user.email", "test@test.com");
      (result.current as any).setValue("user.password", "secret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      user: {
        email: "test@test.com",
        password: "secret",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("createUser", {
      data: {
        createUser: {
          success: true,
          user: {
            id: "123",
            email: "test@test.com",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "email": "test@test.com",
            "id": "123",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "test@test.com" });
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");
  });

  test("can be used with a gloabal action", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(bulkExampleApi.flipAll, {
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(bulkExampleApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("why")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("why", "foobar");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("why")).toBe("foobar");

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      why: "foobar",
    });

    mockUrqlClient.executeMutation.pushResponse("flipAll", {
      data: {
        flipAll: {
          success: true,
          result: { flipped: true },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "flipped": true,
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ flipped: true });
    expect(result.current.getValues("why")).toBe("foobar");
  });

  test("can be used with a create action on an ambiguous model", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.ambiguous.create, {
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("ambiguous.ambiguous")).toBeUndefined();
    expect(result.current.getValues("ambiguous.booleanField")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("ambiguous.ambiguous", true);
      (result.current as any).setValue("ambiguous.booleanField", false);
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("ambiguous.ambiguous")).toBe(true);
    expect(result.current.getValues("ambiguous.booleanField")).toBe(false);

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      ambiguous: {
        ambiguous: true,
        booleanField: false,
      },
    });

    mockUrqlClient.executeMutation.pushResponse("createAmbiguous", {
      data: {
        createAmbiguous: {
          success: true,
          ambiguous: {
            id: "123",
            ambiguous: true,
            booleanField: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "ambiguous": true,
            "booleanField": false,
            "id": "123",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", ambiguous: true, booleanField: false });
    expect(result.current.getValues("ambiguous.ambiguous")).toBe(true);
    expect(result.current.getValues("ambiguous.booleanField")).toBe(false);
  });

  test("can handle errors during a create action", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.user.create, {
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.formState.submitCount).toBe(0);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("user.email", "test@test.com");
      (result.current as any).setValue("user.password", "secret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.formState.submitCount).toBe(0);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      user: {
        email: "test@test.com",
        password: "secret",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("createUser", {
      data: {
        createUser: {
          success: true,
          errors: [
            {
              message: "Record is invalid, one error needs to be corrected. Email is not unique.",
              code: "GGT_INVALID_RECORD",
              validationErrors: [{ apiIdentifier: "email", message: "is not unique." }],
            },
          ],
          user: null,
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": null,
          "error": [ErrorWrapper: [GraphQL] Record is invalid, one error needs to be corrected. Email is not unique.],
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.formState.submitCount).toBe(1);
    expect(result.current.error).toBeTruthy();
    expect((result.current.error as any).validationErrors).toMatchInlineSnapshot(`
      [
        {
          "apiIdentifier": "email",
          "message": "is not unique.",
        },
      ]
    `);
    expect(result.current.formState.errors).toMatchInlineSnapshot(`
      {
        "user": {
          "email": {
            "message": "is not unique.",
            "ref": undefined,
          },
        },
      }
    `);
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");

    await act(async () => {
      (result.current as any).setValue("user.email", "foo@test.com");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.formState.submitCount).toBe(1);
    expect(result.current.formState.errors).toEqual({});
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("foo@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");

    expect(mockUrqlClient.executeMutation.mock.calls[1][0].variables).toEqual({
      user: {
        email: "foo@test.com",
        password: "secret",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("createUser", {
      data: {
        createUser: {
          success: true,
          errors: [
            {
              message: "Invalid email or password.",
              code: "GGT_INVALID_EMAIL_PASSWORD",
            },
          ],
          user: null,
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": null,
          "error": [ErrorWrapper: [GraphQL] GGT_INVALID_EMAIL_PASSWORD: Invalid email or password.],
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.formState.submitCount).toBe(2);
    expect(result.current.error).toBeTruthy();
    expect((result.current.error as any).message).toMatchInlineSnapshot(
      `"[GraphQL] GGT_INVALID_EMAIL_PASSWORD: Invalid email or password."`
    );
    expect(result.current.formState.errors).toMatchInlineSnapshot(`
      {
        "root": {
          "message": "Invalid email or password.",
          "ref": undefined,
        },
      }
    `);
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("foo@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");

    await act(async () => {
      (result.current as any).setValue("user.password", "Abc123123!");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.formState.submitCount).toBe(2);
    expect(result.current.formState.errors).toEqual({});
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("foo@test.com");
    expect(result.current.getValues("user.password")).toBe("Abc123123!");

    expect(mockUrqlClient.executeMutation.mock.calls[2][0].variables).toEqual({
      user: {
        email: "foo@test.com",
        password: "Abc123123!",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("createUser", {
      data: null,
      error: new CombinedError({ networkError: new Error("Network error") }),
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": null,
          "error": [ErrorWrapper: [Network] Network error],
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.formState.submitCount).toBe(3);
    expect(result.current.error).toBeTruthy();
    expect((result.current.error as any).message).toMatchInlineSnapshot(`"[Network] Network error"`);
    expect(result.current.formState.errors).toMatchInlineSnapshot(`
      {
        "root": {
          "message": "Network error",
          "ref": undefined,
        },
      }
    `);
    expect(result.current.actionData).toMatchInlineSnapshot(`null`);
    expect(result.current.getValues("user.email")).toBe("foo@test.com");
    expect(result.current.getValues("user.password")).toBe("Abc123123!");

    await act(async () => {
      (result.current as any).setValue("user.password", "Abc123123!");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.formState.submitCount).toBe(3);
    expect(result.current.formState.errors).toEqual({});
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("foo@test.com");
    expect(result.current.getValues("user.password")).toBe("Abc123123!");

    expect(mockUrqlClient.executeMutation.mock.calls[2][0].variables).toEqual({
      user: {
        email: "foo@test.com",
        password: "Abc123123!",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("createUser", {
      data: {
        createUser: {
          success: true,
          user: {
            id: "123",
            email: "foo@test.com",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "email": "foo@test.com",
            "id": "123",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.formState.submitCount).toBe(4);
    expect(result.current.error).toBeFalsy();
    expect(result.current.formState.errors).toEqual({});
    expect(result.current.actionData).toMatchInlineSnapshot(`
      {
        "email": "foo@test.com",
        "id": "123",
      }
    `);
    expect(result.current.getValues("user.email")).toBe("foo@test.com");
    expect(result.current.getValues("user.password")).toBe("Abc123123!");

    await act(async () => {
      result.current.reset();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.formState.submitCount).toBe(0);
    expect(result.current.error).toBeFalsy();
    expect(result.current.formState.errors).toEqual({});
    expect(result.current.actionData).toMatchInlineSnapshot(`
      {
        "email": "foo@test.com",
        "id": "123",
      }
    `);
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();
  });

  test("can handle an form error", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.user.create, {
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    await act(async () => {
      result.current.register("user.email", { required: true });
      await result.current.submit();
    });

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.formState.errors).toMatchInlineSnapshot(`
      {
        "user": {
          "email": {
            "message": "",
            "ref": {
              "name": "user.email",
            },
            "type": "required",
          },
        },
      }
    `);

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(0);
  });

  test("can only send certain fields in the action", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.user.create, {
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
          send: ["user.email"],
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("user.email", "test@test.com");
      (result.current as any).setValue("user.password", "secret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      user: {
        email: "test@test.com",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("createUser", {
      data: {
        createUser: {
          success: true,
          user: {
            id: "123",
            email: "test@test.com",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "email": "test@test.com",
            "id": "123",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "test@test.com" });
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");
  });

  test("can be used with an update action when given an existing record as default values at the root level", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm<
          (typeof relatedProductsApi.user.update)["optionsType"],
          (typeof relatedProductsApi.user.update)["schemaType"],
          typeof relatedProductsApi.user.update,
          { password: string }
        >(relatedProductsApi.user.update, {
          defaultValues: {
            id: "123",
            email: "test@test.com",
            __typename: "User",
            createdAt: "2023-10-13T18:38:06.676Z",
            updatedAt: "2023-10-13T18:40:36.741Z",
          },
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("email")).toBe("test@test.com");
    expect(result.current.getValues("password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("email", "new@test.com");
      (result.current as any).setValue("password", "newsecret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("email")).toBe("new@test.com");
    expect(result.current.getValues("password")).toBe("newsecret");

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      id: "123",
      user: {
        email: "new@test.com",
        password: "newsecret",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "new@test.com",
            password: "newsecret",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "email": "new@test.com",
            "id": "123",
            "password": "newsecret",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "new@test.com", password: "newsecret" });
    expect(result.current.getValues("email")).toBe("new@test.com");
    expect(result.current.getValues("password")).toBe("newsecret");
  });

  test("can be used with an update action when given an existing record as default values at the record level", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm<
          (typeof relatedProductsApi.user.update)["optionsType"],
          (typeof relatedProductsApi.user.update)["schemaType"],
          typeof relatedProductsApi.user.update,
          { user: { password: string } }
        >(relatedProductsApi.user.update, {
          defaultValues: {
            id: "123",
            user: {
              email: "test@test.com",
            },
          },
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("user.email", "new@test.com");
      (result.current as any).setValue("user.password", "newsecret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("new@test.com");
    expect(result.current.getValues("user.password")).toBe("newsecret");

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      id: "123",
      user: {
        email: "new@test.com",
        password: "newsecret",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "new@test.com",
            password: "newsecret",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "email": "new@test.com",
            "id": "123",
            "password": "newsecret",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "new@test.com", password: "newsecret" });
    expect(result.current.getValues("user.email")).toBe("new@test.com");
    expect(result.current.getValues("user.password")).toBe("newsecret");
  });

  test("can be used with an update action when finding record by id", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.user.update, {
          findBy: "123",
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(true);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("user", {
      data: {
        user: {
          id: "123",
          email: "test@test.com",
          password: "secret",
          __typename: "User",
          createdAt: "2023-10-13T18:38:06.676Z",
          updatedAt: "2023-10-13T18:40:36.741Z",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("user.email", "new@test.com");
      (result.current as any).setValue("user.password", "newsecret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("new@test.com");
    expect(result.current.getValues("user.password")).toBe("newsecret");

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      id: "123",
      user: {
        email: "new@test.com",
        password: "newsecret",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "new@test.com",
            password: "newsecret",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "email": "new@test.com",
            "id": "123",
            "password": "newsecret",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "new@test.com", password: "newsecret" });
    expect(result.current.getValues("user.email")).toBe("new@test.com");
    expect(result.current.getValues("user.password")).toBe("newsecret");

    await act(async () => {
      result.current.reset();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "new@test.com", password: "newsecret" });
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");
  });

  test("can be used with an update action when finding record by id on an ambiguous model", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.ambiguous.update, {
          findBy: "123",
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(true);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("ambiguous.ambiguous")).toBeUndefined();
    expect(result.current.getValues("ambiguous.booleanField")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("ambiguous", {
      data: {
        ambiguous: {
          id: "123",
          ambiguous: "foo",
          booleanField: false,
          __typename: "Ambiguous",
          createdAt: "2023-10-13T18:38:06.676Z",
          updatedAt: "2023-10-13T18:40:36.741Z",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("ambiguous.ambiguous")).toBe("foo");
    expect(result.current.getValues("ambiguous.booleanField")).toBe(false);

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("ambiguous.ambiguous", "bar");
      (result.current as any).setValue("ambiguous.booleanField", true);
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("ambiguous.ambiguous")).toBe("bar");
    expect(result.current.getValues("ambiguous.booleanField")).toBe(true);

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      id: "123",
      ambiguous: {
        ambiguous: "bar",
        booleanField: true,
      },
    });

    mockUrqlClient.executeMutation.pushResponse("updateAmbiguous", {
      data: {
        updateAmbiguous: {
          success: true,
          ambiguous: {
            id: "123",
            ambiguous: "bar",
            booleanField: true,
            __typename: "Ambiguous",
            createdAt: "2023-10-13T18:38:06.676Z",
            updatedAt: "2023-10-13T18:40:36.741Z",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "__typename": "Ambiguous",
            "ambiguous": "bar",
            "booleanField": true,
            "createdAt": "2023-10-13T18:38:06.676Z",
            "id": "123",
            "updatedAt": "2023-10-13T18:40:36.741Z",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toMatchInlineSnapshot(`
      {
        "__typename": "Ambiguous",
        "ambiguous": "bar",
        "booleanField": true,
        "createdAt": "2023-10-13T18:38:06.676Z",
        "id": "123",
        "updatedAt": "2023-10-13T18:40:36.741Z",
      }
    `);
    expect(result.current.getValues("ambiguous.ambiguous")).toBe("bar");
    expect(result.current.getValues("ambiguous.booleanField")).toBe(true);
  });

  test("can be used with an update action when finding record by email", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.user.update, {
          findBy: { email: "test@test.com" },
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(true);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            {
              cursor: "123",
              node: {
                id: "123",
                email: "test@test.com",
                password: "secret",
                __typename: "User",
                createdAt: "2023-10-13T18:38:06.676Z",
                updatedAt: "2023-10-13T18:40:36.741Z",
              },
            },
          ],
          pageInfo: {
            startCursor: "123",
            endCursor: "123",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("user.email", "new@test.com");
      (result.current as any).setValue("user.password", "newsecret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("new@test.com");
    expect(result.current.getValues("user.password")).toBe("newsecret");

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      id: "123",
      user: {
        email: "new@test.com",
        password: "newsecret",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "new@test.com",
            password: "newsecret",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "email": "new@test.com",
            "id": "123",
            "password": "newsecret",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "new@test.com", password: "newsecret" });
    expect(result.current.getValues("user.email")).toBe("new@test.com");
    expect(result.current.getValues("user.password")).toBe("newsecret");
  });

  test("can be used with an update action when finding record by id and specifying a selection", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.user.update, {
          findBy: "123",
          select: { id: true },
          onSubmit: () => {
            submitted = true;
          },
          onSuccess: () => {
            success = true;
          },
          onError: () => {
            error = true;
          },
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(true);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
    expect(mockUrqlClient.executeQuery.mock.calls[0][0].query.loc.source.body).toMatchInlineSnapshot(`
      "query user($id: GadgetID!) {
        user(id: $id) {
          id
          __typename
        }
        gadgetMeta {
          hydrations(modelName: 
      "user")
        }
      }"
    `);

    mockUrqlClient.executeQuery.pushResponse("user", {
      data: {
        user: {
          id: "123",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("user.email", "new@test.com");
      (result.current as any).setValue("user.password", "newsecret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(true);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("new@test.com");
    expect(result.current.getValues("user.password")).toBe("newsecret");

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      id: "123",
      user: {
        email: "new@test.com",
        password: "newsecret",
      },
    });

    mockUrqlClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "new@test.com",
            password: "newsecret",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const result = await submitPromise;
      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "email": "new@test.com",
            "id": "123",
            "password": "newsecret",
          },
          "error": undefined,
          "fetching": false,
          "hasNext": false,
          "operation": null,
          "stale": false,
        }
      `);
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "new@test.com", password: "newsecret" });
    expect(result.current.getValues("user.email")).toBe("new@test.com");
    expect(result.current.getValues("user.password")).toBe("newsecret");
  });
});
