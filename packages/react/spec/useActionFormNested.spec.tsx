import { GadgetConnection } from "@gadgetinc/api-client-core";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useActionForm, useFieldArray } from "../src/useActionForm.js";
import { useFindFirst } from "../src/useFindFirst.js";
import { nestedExampleApi } from "./apis.js";
import { startPolly } from "./polly.js";
import { LiveClientWrapper, MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useActionFormNested", () => {
  startPolly({
    mode: process.env.POLLY_MODE ?? "replay",
  });

  const mockAllModelsReference = {
    session: {
      shop: "BelongsTo",
      createdAt: "DateTime",
      updatedAt: "DateTime",
    },
    quiz: {
      createdAt: "DateTime",
      updatedAt: "DateTime",
      questions: "HasMany",
    },
    question: {
      answers: "HasMany",
      createdAt: "DateTime",
      updatedAt: "DateTime",
      quiz: "BelongsTo",
    },
    answer: {
      question: "BelongsTo",
      createdAt: "DateTime",
      updatedAt: "DateTime",
      notification: "HasOne",
      recommendedProduct: "HasOne",
    },
    recommendedProduct: {
      productSuggestion: "BelongsTo",
      createdAt: "DateTime",
      updatedAt: "DateTime",
      answer: "BelongsTo",
      anotherProductSuggestion: "BelongsTo",
    },
    notification: {
      sendOutDate: "DateTime",
      createdAt: "DateTime",
      updatedAt: "DateTime",
      notificationMessage: "HasOne",
      answer: "BelongsTo",
    },
    notificationMessage: {
      createdAt: "DateTime",
      updatedAt: "DateTime",
      notificationMetadata: "BelongsTo",
      notification: "BelongsTo",
    },
    notificationMetadata: {
      createdAt: "DateTime",
      updatedAt: "DateTime",
      notificationMessages: "HasMany",
    },
    shopifyGdprRequest: {
      createdAt: "DateTime",
      updatedAt: "DateTime",
      shop: "BelongsTo",
    },
    shopifyProduct: {
      shopifyCreatedAt: "DateTime",
      publishedAt: "DateTime",
      createdAt: "DateTime",
      updatedAt: "DateTime",
      shopifyUpdatedAt: "DateTime",
      shop: "BelongsTo",
    },
    shopifyShop: {
      syncs: "HasMany",
      products: "HasMany",
      shopifyCreatedAt: "DateTime",
      gdprRequests: "HasMany",
      createdAt: "DateTime",
      updatedAt: "DateTime",
      shopifyUpdatedAt: "DateTime",
      recommendedProducts: "HasMany",
    },
    shopifySync: {
      syncSince: "DateTime",
      createdAt: "DateTime",
      updatedAt: "DateTime",
      shop: "BelongsTo",
    },
  };

  test("when no referenceTypes are provided/fetched it should throw an error", async () => {
    jest.spyOn(GadgetConnection.prototype, "getCurrentModels").mockReturnValue(async () => {});

    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onError: (error) => {
            expect(error).toBeDefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question");
    });

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can create a single HasMany relationship", async () => {
    let returnedData: any;

    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question");
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can create multiple HasMany relationships", async () => {
    let returnedData: any;

    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onSuccess: (actionResult) => {
            returnedData = actionResult;
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.1.text", "test question - 2");
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can create a single HasMany -> HasMany relationship", async () => {
    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can create multiple HasMany -> HasMany relationships", async () => {
    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");

      useActionFormHook.current.setValue("quiz.questions.1.text", "test question - 2");
      useActionFormHook.current.setValue("quiz.questions.1.answers.0.text", "test answer - 2");
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can create a single HasMany -> HasMany -> HasOne relationship", async () => {
    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.notification.enabled", true);
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can create multiple HasMany -> HasMany -> HasOne relationships", async () => {
    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.notification.enabled", true);

      useActionFormHook.current.setValue("quiz.questions.1.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.1.answers.0.text", "test answer - 1");
      useActionFormHook.current.setValue("quiz.questions.1.answers.0.notification.enabled", true);
    });

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can create a single HasMany -> HasMany -> HasOne -> BelongsTo relationship", async () => {
    const { result: useFindFirstHook } = renderHook(() => useFindFirst(nestedExampleApi.shopifyProduct), {
      wrapper: LiveClientWrapper(nestedExampleApi),
    });

    await waitFor(() => expect(useFindFirstHook.current[0].fetching).toBe(false), { timeout: 3000 });

    expect(useFindFirstHook.current[0].data).toMatchInlineSnapshot(`
      {
        "__typename": "ShopifyProduct",
        "body": "example value for body",
        "compareAtPriceRange": null,
        "createdAt": "2023-12-12T16:22:25.001Z",
        "handle": null,
        "id": "123",
        "productCategory": null,
        "productType": null,
        "publishedAt": null,
        "publishedScope": null,
        "shopifyCreatedAt": "2023-12-01T05:00:00.000Z",
        "shopifyUpdatedAt": null,
        "status": null,
        "tags": null,
        "templateSuffix": null,
        "title": null,
        "updatedAt": "2023-12-12T16:22:25.001Z",
        "vendor": null,
      }
    `);

    const productSuggestionId = useFindFirstHook.current[0].data.id;

    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.recommendedProduct.productSuggestion.id", productSuggestionId);
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can create a single HasMany -> HasMany -> HasOne -> multiple BelongsTo relationship", async () => {
    const { result: useFindFirstHook } = renderHook(() => useFindFirst(nestedExampleApi.shopifyProduct), {
      wrapper: LiveClientWrapper(nestedExampleApi),
    });

    await waitFor(() => expect(useFindFirstHook.current[0].fetching).toBe(false), { timeout: 3000 });

    expect(useFindFirstHook.current[0].data).toMatchInlineSnapshot(`
      {
        "__typename": "ShopifyProduct",
        "body": "example value for body",
        "compareAtPriceRange": null,
        "createdAt": "2023-12-12T16:22:25.001Z",
        "handle": null,
        "id": "123",
        "productCategory": null,
        "productType": null,
        "publishedAt": null,
        "publishedScope": null,
        "shopifyCreatedAt": "2023-12-01T05:00:00.000Z",
        "shopifyUpdatedAt": null,
        "status": null,
        "tags": null,
        "templateSuffix": null,
        "title": null,
        "updatedAt": "2023-12-12T16:22:25.001Z",
        "vendor": null,
      }
    `);

    const productSuggestionId = useFindFirstHook.current[0].data.id;

    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.recommendedProduct.productSuggestion.id", productSuggestionId);
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.recommendedProduct.anotherProductSuggestion.id", productSuggestionId);
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can create a single HasMany -> HasMany -> HasOne -> BelongsTo relationship with support for Id prefix", async () => {
    const { result: useFindFirstHook } = renderHook(() => useFindFirst(nestedExampleApi.shopifyProduct), {
      wrapper: LiveClientWrapper(nestedExampleApi),
    });

    await waitFor(() => expect(useFindFirstHook.current[0].fetching).toBe(false), { timeout: 3000 });

    expect(useFindFirstHook.current[0].data).toMatchInlineSnapshot(`
      {
        "__typename": "ShopifyProduct",
        "body": "example value for body",
        "compareAtPriceRange": null,
        "createdAt": "2023-12-12T16:22:25.001Z",
        "handle": null,
        "id": "123",
        "productCategory": null,
        "productType": null,
        "publishedAt": null,
        "publishedScope": null,
        "shopifyCreatedAt": "2023-12-01T05:00:00.000Z",
        "shopifyUpdatedAt": null,
        "status": null,
        "tags": null,
        "templateSuffix": null,
        "title": null,
        "updatedAt": "2023-12-12T16:22:25.001Z",
        "vendor": null,
      }
    `);

    const productSuggestionId = useFindFirstHook.current[0].data.id;

    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.recommendedProduct.productSuggestionId", productSuggestionId);
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can create a single HasMany -> HasMany -> HasOne -> multiple BelongsTo relationship with support for Id prefix", async () => {
    const { result: useFindFirstHook } = renderHook(() => useFindFirst(nestedExampleApi.shopifyProduct), {
      wrapper: LiveClientWrapper(nestedExampleApi),
    });

    await waitFor(() => expect(useFindFirstHook.current[0].fetching).toBe(false), { timeout: 3000 });

    expect(useFindFirstHook.current[0].data).toMatchInlineSnapshot(`
      {
        "__typename": "ShopifyProduct",
        "body": "example value for body",
        "compareAtPriceRange": null,
        "createdAt": "2023-12-12T16:22:25.001Z",
        "handle": null,
        "id": "123",
        "productCategory": null,
        "productType": null,
        "publishedAt": null,
        "publishedScope": null,
        "shopifyCreatedAt": "2023-12-01T05:00:00.000Z",
        "shopifyUpdatedAt": null,
        "status": null,
        "tags": null,
        "templateSuffix": null,
        "title": null,
        "updatedAt": "2023-12-12T16:22:25.001Z",
        "vendor": null,
      }
    `);

    const productSuggestionId = useFindFirstHook.current[0].data.id;

    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.create, {
          defaultValues: {
            quiz: {
              text: "",
              questions: [{}],
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
            onSuccessRan = true;
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "questions": [
            {},
          ],
          "text": "",
        },
      }
    `);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.recommendedProduct.productSuggestionId", productSuggestionId);
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.recommendedProduct.anotherProductSuggestionId", productSuggestionId);
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can update root object", async () => {
    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.update, {
          findBy: "163",
          select: {
            id: true,
            text: true,
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false), { timeout: 3000 });

    const formValues = useActionFormHook.current.getValues();
    expect(formValues.quiz).toBeDefined();
    expect(formValues.quiz.text).toBeDefined();

    await act(async () => {
      useActionFormHook.current.setValue("text", "test quiz updated");
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can update root even if nested", async () => {
    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.update, {
          findBy: "163",
          select: {
            id: true,
            text: true,
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false), { timeout: 3000 });

    const formValues = useActionFormHook.current.getValues();
    expect(formValues.quiz).toBeDefined();
    expect(formValues.quiz.text).toBeDefined();

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz updated");
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can update a single HasMany relationship", async () => {
    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.update, {
          findBy: "164",
          select: {
            id: true,
            text: true,
            questions: {
              edges: {
                node: {
                  id: true,
                  text: true,
                },
              },
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false), { timeout: 3000 });

    const formValues = useActionFormHook.current.getValues();
    expect(formValues.quiz).toBeDefined();
    expect(formValues.quiz.text).toBeDefined();
    expect(formValues.quiz.questions).toBeDefined();
    expect(formValues.quiz.questions.length).toBe(1);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz updated");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question updated");
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can update multiple HasMany relationships", async () => {
    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.update, {
          findBy: "168",
          select: {
            id: true,
            text: true,
            questions: {
              edges: {
                node: {
                  id: true,
                  text: true,
                },
              },
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false), { timeout: 3000 });

    const formValues = useActionFormHook.current.getValues();
    expect(formValues.quiz).toBeDefined();
    expect(formValues.quiz.text).toBeDefined();
    expect(formValues.quiz.questions).toBeDefined();
    expect(formValues.quiz.questions.length).toBe(2);

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz updated");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question updated - 1");
      useActionFormHook.current.setValue("quiz.questions.1.text", "test question updated - 2");
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  test("can update multiple HasMany relationships that are reordered", async () => {
    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.update, {
          findBy: "168",
          select: {
            id: true,
            text: true,
            questions: {
              edges: {
                node: {
                  id: true,
                  text: true,
                },
              },
            },
          },
          onSuccess: (actionResult) => {
            expect(actionResult.id).toBeDefined();
          },
          onError: (error) => {
            expect(error).toBeUndefined();
          },
        }),
      {
        wrapper: LiveClientWrapper(nestedExampleApi),
      }
    );

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false), { timeout: 3000 });

    const formValues = useActionFormHook.current.getValues();
    expect(formValues.quiz).toBeDefined();
    expect(formValues.quiz.text).toBeDefined();
    expect(formValues.quiz.questions).toBeDefined();
    expect(formValues.quiz.questions.length).toBe(2);

    const { result: questionsFieldArrayHook } = renderHook(() =>
      useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
    );

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "test quiz updated");
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question updated - 1");
      useActionFormHook.current.setValue("quiz.questions.1.text", "test question updated - 2");

      questionsFieldArrayHook.current.move(0, 1);
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    await act(async () => {
      await useActionFormHook.current.submit();
    });
  });

  describe("with mocking", () => {
    beforeEach(() => {
      jest.spyOn(nestedExampleApi.connection, "getCurrentModels").mockReturnValue(mockAllModelsReference);
    });

    test("can update HasMany relationships that are reordered and one is deleted", async () => {
      const queryResponse = {
        data: {
          quiz: {
            __typename: "Quiz",
            id: "168",
            text: "quiz title",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "question text - 1",
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
                {
                  node: {
                    id: "2",
                    text: "question text - 2",
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
                {
                  node: {
                    id: "3",
                    text: "question text - 3",
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
              ],
              __typename: "QuestionConnection",
            },
          },
        },
      };

      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.update, {
            findBy: "168",
            select: {
              id: true,
              text: true,
              questions: {
                edges: {
                  node: {
                    id: true,
                    text: true,
                  },
                },
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        stale: false,
        hasNext: false,
        data: queryResponse.data,
      });

      let formValues: any;

      await act(async () => {
        formValues = useActionFormHook.current.getValues();
      });

      expect(formValues.quiz).toBeDefined();
      expect(formValues.quiz.text).toBeDefined();
      expect(formValues.quiz.questions).toBeDefined();
      expect(formValues.quiz.questions.length).toBe(3);

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz updated");
        useActionFormHook.current.setValue("quiz.questions.0.text", "test question updated - 1");
        useActionFormHook.current.setValue("quiz.questions.1.text", "test question updated - 2");
        useActionFormHook.current.setValue("quiz.questions.2.text", "test question updated - 3");

        questionsFieldArrayHook.current.move(0, 1);
        questionsFieldArrayHook.current.remove(2);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          quiz: {
            __typename: "Quiz",
            createdAt: "2023-12-12T15:20:11.728Z",
            id: "21",
            text: "test quiz",
            updatedAt: "2023-12-12T15:20:11.728Z",
          },
        },
        stale: false,
        hasNext: false,
      });

      const submitResult = mockUrqlClient.executeMutation.mock.calls[0][0].variables;

      expect(submitResult.quiz.questions.length).toBe(3);
      expect(submitResult.quiz.questions).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            update: {
              id: "1",
              text: "test question updated - 1",
            },
          }),
          expect.objectContaining({
            update: {
              id: "2",
              text: "test question updated - 2",
            },
          }),
          expect.objectContaining({
            delete: {
              id: "3",
            },
          }),
        ])
      );
    });

    test("can update HasMany -> HasMany relationships that are reordered and one is deleted", async () => {
      const queryResponse = {
        data: {
          quiz: {
            __typename: "Quiz",
            id: "168",
            text: "quiz title",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "question text - 1",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "1",
                            text: "answer text - 1",
                          },
                        },
                        {
                          node: {
                            id: "2",
                            text: "answer text - 2",
                          },
                        },
                        {
                          node: {
                            id: "3",
                            text: "answer text - 3",
                          },
                        },
                      ],
                    },
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
              ],
              __typename: "QuestionConnection",
            },
          },
        },
      };

      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.update, {
            findBy: "168",
            select: {
              id: true,
              text: true,
              questions: {
                edges: {
                  node: {
                    id: true,
                    text: true,
                    answers: {
                      edges: {
                        node: {
                          id: true,
                          text: true,
                        },
                      },
                    },
                  },
                },
              },
            },
            onError: (error) => {
              expect(error).toBeUndefined();
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        stale: false,
        hasNext: false,
        data: queryResponse.data,
      });

      let formValues: any;

      await act(async () => {
        formValues = useActionFormHook.current.getValues();
      });

      expect(formValues.quiz).toBeDefined();
      expect(formValues.quiz.text).toBeDefined();
      expect(formValues.quiz.questions).toBeDefined();
      expect(formValues.quiz.questions.length).toBe(1);
      expect(formValues.quiz.questions[0].answers.length).toBe(3);

      const { result: questions0AnswersFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions[0].answers" })
      );

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz updated");
        useActionFormHook.current.setValue("quiz.questions.0.text", "test question updated - 1");
        useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "answer updated - 1");
        useActionFormHook.current.setValue("quiz.questions.0.answers.1.text", "answer updated - 2");
        useActionFormHook.current.setValue("quiz.questions.0.answers.2.text", "answer updated - 3");

        questions0AnswersFieldArrayHook.current.move(0, 2);
        questions0AnswersFieldArrayHook.current.remove(2);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          quiz: {
            __typename: "Quiz",
            createdAt: "2023-12-12T15:20:11.728Z",
            id: "21",
            text: "test quiz",
            updatedAt: "2023-12-12T15:20:11.728Z",
          },
        },
        stale: false,
        hasNext: false,
      });

      const submitResult = mockUrqlClient.executeMutation.mock.calls[0][0].variables;

      expect(submitResult.quiz.questions.length).toBe(1);
      expect(submitResult.quiz.questions[0].update.answers.length).toBe(3);
      expect(submitResult.quiz.questions[0].update.answers).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            delete: {
              id: "1",
            },
          }),
          expect.objectContaining({
            update: {
              id: "2",
              text: "answer updated - 2",
            },
          }),
          expect.objectContaining({
            update: {
              id: "3",
              text: "answer updated - 3",
            },
          }),
        ])
      );
    });

    test("can update multiple HasOne -> BelongsTo relationships", async () => {
      const queryResponse = {
        data: {
          answer: {
            __typename: "Answer",
            id: "123",
            text: "answer text",
            notification: {
              __typename: "Notification",
              id: "1",
              enabled: false,
              answer: {
                id: "123"
              }
            },
            recommendedProduct: {
              __typename: "RecommendedProduct",
              id: "1",
              answer: {
                id: "123"
              }
            }
          },
        },
      };

      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.answer.update, {
            findBy: "168",
            select: {
              id: true,
              text: true,
              notification: {
                id: true,
                enabled: true,
                answer: {
                  id: true
                }
              },
              recommendedProduct: {
                id: true,
                answer: {
                  id: true,
                }
              }
            },
            onError: (error) => {
              expect(error).toBeUndefined();
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("answer", {
        stale: false,
        hasNext: false,
        data: queryResponse.data,
      });

      let formValues: any;

      await act(async () => {
        formValues = useActionFormHook.current.getValues();
      });

      expect(formValues.answer).toBeDefined();

      await act(async () => {
        useActionFormHook.current.setValue("answer.notification.answer.id", "999");
        useActionFormHook.current.setValue("answer.recommendedProduct.answer.id", "999");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

      mockUrqlClient.executeMutation.pushResponse("updateAnswer", {
        data: {
          answer: {
            __typename: "Answer",
            createdAt: "2023-12-12T15:20:11.728Z",
            id: "123",
            text: "test answer",
            updatedAt: "2023-12-12T15:20:11.728Z",
          },
        },
        stale: false,
        hasNext: false,
      });

      const submitResult = mockUrqlClient.executeMutation.mock.calls[0][0].variables;
      expect(submitResult.answer.notification.update.answer._link).toBe("999");
      expect(submitResult.answer.recommendedProduct.update.answer._link).toBe("999");
    });
  });

  // test("update HasMany -> HasMany -> HasOne -> HasOne -> BelongsTo", async () => {
  //   let returnedData: any;

  //   const { result: useActionFormHook } = renderHook(
  //     () =>
  //       useActionForm(nestedExampleApi.quiz.update, {
  //         findBy: "12",
  //         select: {
  //           id: true,
  //           text: true,
  //           questions: {
  //             edges: {
  //               node: {
  //                 id: true,
  //                 text: true,
  //                 answers: {
  //                   edges: {
  //                     node: {
  //                       id: true,
  //                       text: true,
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //         },

  //         onSuccess: (actionResult) => {
  //           returnedData = actionResult;
  //         },
  //       }),
  //     {
  //       wrapper: LiveClientWrapper(nestedExampleApi),
  //     }
  //   );

  //   await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

  //   expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
  //     {
  //       "quiz": {
  //         "__typename": "Quiz",
  //         "questions": [
  //           {
  //             "__typename": "Question",
  //             "answers": [
  //               {
  //                 "__typename": "Answer",
  //                 "id": "8",
  //                 "text": "Test answer - 1",
  //               },
  //             ],
  //             "id": "9",
  //             "text": "test",
  //           },
  //         ],
  //         "text": "Test Quiz",
  //       },
  //     }
  //   `);

  //   await act(async () => {
  //     // useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
  //     // useActionFormHook.current.setValue("quiz.questions.0.answers.0.notification.notificationMessage.notificationMetadata.id", "2");
  //   });

  //   let submitPromise: Promise<any>;

  //   await act(async () => {
  //     submitPromise = useActionFormHook.current.submit();
  //   });

  //   expect(useActionFormHook.current.formState.isSubmitting).toBe(true);

  //   await waitFor(() => {
  //     expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
  //   });

  //   expect(useActionFormHook.current.formState.errors).toEqual({});
  //   expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
  //   expect(returnedData).toMatchInlineSnapshot(`
  //     {
  //       "__typename": "Quiz",
  //       "id": "12",
  //       "questions": {
  //         "__typename": "QuestionConnection",
  //         "edges": [
  //           {
  //             "__typename": "QuestionEdge",
  //             "node": {
  //               "__typename": "Question",
  //               "answers": {
  //                 "__typename": "AnswerConnection",
  //                 "edges": [
  //                   {
  //                     "__typename": "AnswerEdge",
  //                     "node": {
  //                       "__typename": "Answer",
  //                       "id": "8",
  //                       "text": "Test answer - 1",
  //                     },
  //                   },
  //                 ],
  //               },
  //               "id": "9",
  //               "text": "test",
  //             },
  //           },
  //         ],
  //       },
  //       "text": "Test Quiz",
  //     }
  //   `);
  // });
});
