import { act, renderHook } from "@testing-library/react";
import { useActionForm } from "../src/useActionForm.js";
import { relatedProductsApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useActionForm", () => {
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
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<void>;

    await act(async () => {
      (result.current as any).setValue("user.email", "test@test.com");
      (result.current as any).setValue("user.password", "secret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
      await submitPromise;
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "test@test.com" });
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");
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
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.formState.submitCount).toBe(0);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<void>;

    await act(async () => {
      (result.current as any).setValue("user.email", "test@test.com");
      (result.current as any).setValue("user.password", "secret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
      await submitPromise;
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
    expect(result.current.formState.isDirty).toBe(false);
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
      await submitPromise;
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
    expect(result.current.formState.isDirty).toBe(false);
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
      await submitPromise;
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(true);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.formState.submitCount).toBe(3);
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
    expect(result.current.formState.isDirty).toBe(false);
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
    expect(result.current.formState.isDirty).toBe(false);
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
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<void>;

    await act(async () => {
      (result.current as any).setValue("user.email", "test@test.com");
      (result.current as any).setValue("user.password", "secret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
      await submitPromise;
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "test@test.com" });
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");
  });

  test("can be used with an update action when given an existing record", async () => {
    let submitted = false;
    let success = false;
    let error = false;

    const { result } = renderHook(
      () =>
        useActionForm(relatedProductsApi.user.update, {
          record: {
            id: "123",
            email: "test@test.com",
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
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBeUndefined();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<void>;

    await act(async () => {
      (result.current as any).setValue("user.email", "new@test.com");
      (result.current as any).setValue("user.password", "newsecret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
      await submitPromise;
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
    expect(result.current.formState.isDirty).toBe(false);
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
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(submitted).toBe(false);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");

    let submitPromise: Promise<void>;

    await act(async () => {
      (result.current as any).setValue("user.email", "new@test.com");
      (result.current as any).setValue("user.password", "newsecret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
      await submitPromise;
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "new@test.com", password: "newsecret" });
    expect(result.current.getValues("user.email")).toBe("new@test.com");
    expect(result.current.getValues("user.password")).toBe("newsecret");
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
    expect(result.current.formState.isDirty).toBe(false);
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
          edges: [{ cursor: "123", node: { id: "123", email: "test@test.com", password: "secret" } }],
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
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBe("test@test.com");
    expect(result.current.getValues("user.password")).toBe("secret");

    let submitPromise: Promise<void>;

    await act(async () => {
      (result.current as any).setValue("user.email", "new@test.com");
      (result.current as any).setValue("user.password", "newsecret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
      await submitPromise;
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
    expect(result.current.formState.isDirty).toBe(false);
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
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(false);
    expect(result.current.formState.isSubmitSuccessful).toBe(false);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toBeFalsy();
    expect(result.current.getValues("user.email")).toBeUndefined();
    expect(result.current.getValues("user.password")).toBeUndefined();

    let submitPromise: Promise<void>;

    await act(async () => {
      (result.current as any).setValue("user.email", "new@test.com");
      (result.current as any).setValue("user.password", "newsecret");
      submitPromise = result.current.submit();
    });

    expect(submitted).toBe(true);
    expect(success).toBe(false);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
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
      await submitPromise;
    });

    expect(submitted).toBe(true);
    expect(success).toBe(true);
    expect(error).toBe(false);
    expect(result.current.formState.isLoading).toBe(false);
    expect(result.current.formState.isDirty).toBe(false);
    expect(result.current.formState.isSubmitted).toBe(true);
    expect(result.current.formState.isSubmitSuccessful).toBe(true);
    expect(result.current.formState.isSubmitting).toBe(false);
    expect(result.current.error).toBeFalsy();
    expect(result.current.actionData).toEqual({ id: "123", email: "new@test.com", password: "newsecret" });
    expect(result.current.getValues("user.email")).toBe("new@test.com");
    expect(result.current.getValues("user.password")).toBe("newsecret");
  });
});
