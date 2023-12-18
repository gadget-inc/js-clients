import { GadgetConnection } from "@gadgetinc/api-client-core";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useActionForm, useFieldArray } from "../src/useActionForm.js";
import { useFindFirst } from "../src/useFindFirst.js";
import { transformDataRedux } from "../src/utils.js";
import { nestedExampleApi } from "./apis.js";
import { startPolly } from "./polly.js";
import { LiveClientWrapper, MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useActionFormNested", () => {
  describe("with polly", () => {
    startPolly({
      mode: process.env.POLLY_MODE ?? "replay",
      recordFailedRequests: true,
    });

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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question");
      });

      await act(async () => {
        await useActionFormHook.current.submit();
      });
    });

    test("can create a single HasMany relationship", async () => {
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question");
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.1.text", "test question - 2");
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "test answer - 1");
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "test answer - 1");

        (useActionFormHook.current as any).setValue("quiz.questions.1.text", "test question - 2");
        (useActionFormHook.current as any).setValue("quiz.questions.1.answers.0.text", "test answer - 2");
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "test answer - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.notification.enabled", true);
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "test answer - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.notification.enabled", true);

        (useActionFormHook.current as any).setValue("quiz.questions.1.text", "test question - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.1.answers.0.text", "test answer - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.1.answers.0.notification.enabled", true);
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "test answer - 1");
        (useActionFormHook.current as any).setValue(
          "quiz.questions.0.answers.0.recommendedProduct.productSuggestion.id",
          productSuggestionId
        );
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "test answer - 1");
        (useActionFormHook.current as any).setValue(
          "quiz.questions.0.answers.0.recommendedProduct.productSuggestion.id",
          productSuggestionId
        );
        (useActionFormHook.current as any).setValue(
          "quiz.questions.0.answers.0.recommendedProduct.anotherProductSuggestion.id",
          productSuggestionId
        );
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "test answer - 1");
        (useActionFormHook.current as any).setValue(
          "quiz.questions.0.answers.0.recommendedProduct.productSuggestionId",
          productSuggestionId
        );
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "test answer - 1");
        (useActionFormHook.current as any).setValue(
          "quiz.questions.0.answers.0.recommendedProduct.productSuggestionId",
          productSuggestionId
        );
        (useActionFormHook.current as any).setValue(
          "quiz.questions.0.answers.0.recommendedProduct.anotherProductSuggestionId",
          productSuggestionId
        );
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
        (useActionFormHook.current as any).setValue("text", "test quiz updated");
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz updated");
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz updated");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question updated");
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz updated");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question updated - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.1.text", "test question updated - 2");
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz updated");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question updated - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.1.text", "test question updated - 2");

        questionsFieldArrayHook.current.move(0, 1);
      });

      expect(useActionFormHook.current.formState.errors).toEqual({});

      await act(async () => {
        await useActionFormHook.current.submit();
      });
    });

    test("can update a single HasMany -> Multiple HasMany relationship", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.update, {
            findBy: "192",
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
      expect(formValues.quiz.questions[0].answers.length).toBe(2);
      expect(formValues.quiz.questions[1].answers.length).toBe(0);

      await act(async () => {
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz updated");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question updated - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.1.text", "test question updated - 2");

        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "test answer updated - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.1.text", "test answer updated - 2");
      });

      expect(useActionFormHook.current.formState.errors).toEqual({});

      await act(async () => {
        await useActionFormHook.current.submit();
      });
    });

    test("can update multiple HasMany -> HasMany relationships", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.update, {
            findBy: "193",
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
      expect(formValues.quiz.questions[0].answers.length).toBe(2);
      expect(formValues.quiz.questions[1].answers.length).toBe(2);

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz updated");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question updated - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.1.text", "test question updated - 2");

        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "test answer updated - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.1.text", "test answer updated - 2");

        (useActionFormHook.current as any).setValue("quiz.questions.1.answers.0.text", "test answer updated - 3");
        (useActionFormHook.current as any).setValue("quiz.questions.1.answers.1.text", "test answer updated - 4");
      });

      expect(useActionFormHook.current.formState.errors).toEqual({});

      await act(async () => {
        await useActionFormHook.current.submit();
      });
    });

    test("can update a single HasOne relationship", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.answer.update, {
            findBy: "187",
            select: {
              id: true,
              text: true,
              notification: {
                id: true,
                enabled: true,
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
      expect(formValues.answer).toBeDefined();
      expect(formValues.answer.notification).toBeDefined();

      await act(async () => {
        (useActionFormHook.current as any).setValue("answer.text", "test answers updated");
        (useActionFormHook.current as any).setValue("answer.notification.enabled", false);
      });

      expect(useActionFormHook.current.formState.errors).toEqual({});

      await act(async () => {
        await useActionFormHook.current.submit();
      });
    });

    test("can update a single BelongsTo relationship", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.answer.update, {
            findBy: "187",
            select: {
              id: true,
              text: true,
              question: {
                id: true,
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
      expect(formValues.answer).toBeDefined();
      expect(formValues.answer.question).toBeDefined();
      expect(formValues.answer.question.id).toBeDefined();

      await act(async () => {
        (useActionFormHook.current as any).setValue("answer.text", "test answers updated");
        (useActionFormHook.current as any).setValue("answer.question.id", 123);
      });

      expect(useActionFormHook.current.formState.errors).toEqual({});

      await act(async () => {
        await useActionFormHook.current.submit();
      });
    });

    test("can update a single BelongsTo relationship with support for Id prefix test", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.answer.update, {
            findBy: "187",
            select: {
              id: true,
              text: true,
              questionId: true,
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
      expect(formValues.answer).toBeDefined();
      expect(formValues.answer.questionId).toBeDefined();

      await act(async () => {
        (useActionFormHook.current as any).setValue("answer.text", "test answers updated");
        (useActionFormHook.current as any).setValue("answer.questionId", 123);
      });

      expect(useActionFormHook.current.formState.errors).toEqual({});

      await act(async () => {
        await useActionFormHook.current.submit();
      });
    });
  });

  describe("with mocking", () => {
    const mockAllModelsReference = {
      session: {
        shop: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
      },
      quiz: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
        questionables: {
          type: "HasMany",
          model: "questionable",
        },
        questions: {
          type: "HasMany",
          model: "question",
        },
      },
      question: {
        answers: {
          type: "HasMany",
          model: "answer",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
        quiz: {
          type: "BelongsTo",
          model: "quiz",
        },
      },
      answer: {
        question: {
          type: "BelongsTo",
          model: "question",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
        notification: {
          type: "HasOne",
          model: "notification",
        },
        questionable: {
          type: "BelongsTo",
          model: "questionable",
        },
        recommendedProduct: {
          type: "HasOne",
          model: "recommendedProduct",
        },
      },
      recommendedProduct: {
        productSuggestion: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
        answer: {
          type: "BelongsTo",
          model: "answer",
        },
        anotherProductSuggestion: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
      },
      notification: {
        sendOutDate: "DateTime",
        createdAt: "DateTime",
        updatedAt: "DateTime",
        notificationMessage: {
          type: "HasOne",
          model: "notificationMessage",
        },
        answer: {
          type: "BelongsTo",
          model: "answer",
        },
      },
      notificationMessage: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
        notificationMetadata: {
          type: "BelongsTo",
          model: "notificationMetadata",
        },
        notification: {
          type: "BelongsTo",
          model: "notification",
        },
      },
      notificationMetadata: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
        notificationMessages: {
          type: "HasMany",
          model: "notificationMessage",
        },
      },
      shopifyGdprRequest: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
        shop: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
      },
      shopifyProduct: {
        shopifyCreatedAt: "DateTime",
        publishedAt: "DateTime",
        createdAt: "DateTime",
        updatedAt: "DateTime",
        shopifyUpdatedAt: "DateTime",
        shop: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
      },
      shopifyShop: {
        syncs: {
          type: "HasMany",
          model: "shopifySync",
        },
        products: {
          type: "HasMany",
          model: "shopifyProduct",
        },
        shopifyCreatedAt: "DateTime",
        gdprRequests: {
          type: "HasMany",
          model: "shopifyGdprRequest",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
        shopifyUpdatedAt: "DateTime",
        recommendedProducts: {
          type: "HasMany",
          model: "recommendedProduct",
        },
      },
      shopifySync: {
        syncSince: "DateTime",
        createdAt: "DateTime",
        updatedAt: "DateTime",
        shop: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
      },
      questionable: {
        quiz: {
          type: "BelongsTo",
          model: "quiz",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
        answers: {
          type: "HasMany",
          model: "answer",
        },
      },
    };

    beforeEach(() => {
      jest.spyOn(nestedExampleApi.connection, "getCurrentModels").mockResolvedValue(mockAllModelsReference);
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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz updated");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question updated - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.1.text", "test question updated - 2");
        (useActionFormHook.current as any).setValue("quiz.questions.2.text", "test question updated - 3");

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
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz updated");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question updated - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.0.text", "answer updated - 1");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.1.text", "answer updated - 2");
        (useActionFormHook.current as any).setValue("quiz.questions.0.answers.2.text", "answer updated - 3");

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
                id: "123",
              },
            },
            recommendedProduct: {
              __typename: "RecommendedProduct",
              id: "1",
              answer: {
                id: "123",
              },
            },
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
                  id: true,
                },
              },
              recommendedProduct: {
                id: true,
                answer: {
                  id: true,
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
        (useActionFormHook.current as any).setValue("answer.notification.answer.id", "999");
        (useActionFormHook.current as any).setValue("answer.recommendedProduct.answer.id", "999");
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

  describe("transformData", () => {
    const mockAllModelsReference = {
      session: {
        shop: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
      },
      quiz: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
        questionables: {
          type: "HasMany",
          model: "questionable",
        },
        questions: {
          type: "HasMany",
          model: "question",
        },
      },
      question: {
        answers: {
          type: "HasMany",
          model: "answer",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
        quiz: {
          type: "BelongsTo",
          model: "quiz",
        },
      },
      answer: {
        question: {
          type: "BelongsTo",
          model: "question",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
        notification: {
          type: "HasOne",
          model: "notification",
        },
        questionable: {
          type: "BelongsTo",
          model: "questionable",
        },
        recommendedProduct: {
          type: "HasOne",
          model: "recommendedProduct",
        },
      },
      recommendedProduct: {
        productSuggestion: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
        answer: {
          type: "BelongsTo",
          model: "answer",
        },
        anotherProductSuggestion: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
      },
      notification: {
        sendOutDate: "DateTime",
        createdAt: "DateTime",
        updatedAt: "DateTime",
        notificationMessage: {
          type: "HasOne",
          model: "notificationMessage",
        },
        answer: {
          type: "BelongsTo",
          model: "answer",
        },
      },
      notificationMessage: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
        notificationMetadata: {
          type: "BelongsTo",
          model: "notificationMetadata",
        },
        notification: {
          type: "BelongsTo",
          model: "notification",
        },
      },
      notificationMetadata: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
        notificationMessages: {
          type: "HasMany",
          model: "notificationMessage",
        },
      },
      shopifyGdprRequest: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
        shop: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
      },
      shopifyProduct: {
        shopifyCreatedAt: "DateTime",
        publishedAt: "DateTime",
        createdAt: "DateTime",
        updatedAt: "DateTime",
        shopifyUpdatedAt: "DateTime",
        shop: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
      },
      shopifyShop: {
        syncs: {
          type: "HasMany",
          model: "shopifySync",
        },
        products: {
          type: "HasMany",
          model: "shopifyProduct",
        },
        shopifyCreatedAt: "DateTime",
        gdprRequests: {
          type: "HasMany",
          model: "shopifyGdprRequest",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
        shopifyUpdatedAt: "DateTime",
        recommendedProducts: {
          type: "HasMany",
          model: "recommendedProduct",
        },
      },
      shopifySync: {
        syncSince: "DateTime",
        createdAt: "DateTime",
        updatedAt: "DateTime",
        shop: {
          type: "BelongsTo",
          model: "shopifyShop",
        },
      },
      questionable: {
        quiz: {
          type: "BelongsTo",
          model: "quiz",
        },
        createdAt: "DateTime",
        updatedAt: "DateTime",
        answers: {
          type: "HasMany",
          model: "answer",
        },
      },
    };

    beforeEach(() => {
      jest.spyOn(nestedExampleApi.connection, "getCurrentModels").mockResolvedValue(mockAllModelsReference);
    });

    test("can handle deeply nested deletes", async () => {
      const defaultValues = {
        quiz: {
          title: "new quiz",
          body: "asdlkjf",
          questions: [
            {
              id: "16",
              text: "test",
              answers: [
                {
                  id: "22",
                  text: "estset",
                  recommendedProduct: {
                    id: "22",
                    image: null,
                    productSuggestion: {
                      id: "8746652729619",
                      __typename: "ShopifyProduct",
                    },
                    __typename: "RecommendedProduct",
                  },
                  __typename: "Answer",
                },
              ],
              __typename: "Question",
            },
          ],
        },
      };

      const data = {
        quiz: {
          title: "new quiz",
          body: "asdlkjf",
          questions: [
            {
              id: "16",
              text: "test",
              answers: [
                {
                  id: "22",
                  text: "estset",
                  recommendedProduct: {
                    id: "22",
                    image: null,
                    productSuggestion: {
                      id: "8746652729619",
                      __typename: "ShopifyProduct",
                    },
                    __typename: "RecommendedProduct",
                  },
                  __typename: "Answer",
                },
              ],
              __typename: "Question",
            },
            {
              text: "asdf", // New Question
              answers: [
                {
                  text: "answer 1",
                  recommendedProduct: {
                    productSuggestion: {
                      id: "8841987883283",
                    },
                  },
                },
              ],
            },
          ],
        },
      };

      const transformedData = await transformDataRedux(nestedExampleApi.quiz, defaultValues, data);

      expect(transformedData).toMatchInlineSnapshot(`
        {
          "quiz": {
            "body": "asdlkjf",
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": "22",
                        "recommendedProduct": {
                          "update": {
                            "id": "22",
                            "image": null,
                            "productSuggestion": {
                              "_link": "8746652729619",
                            },
                          },
                        },
                        "text": "estset",
                      },
                    },
                  ],
                  "id": "16",
                  "text": "test",
                },
              },
              {
                "create": {
                  "answers": [
                    {
                      "create": {
                        "recommendedProduct": {
                          "create": {
                            "productSuggestion": {
                              "_link": "8841987883283",
                            },
                          },
                        },
                        "text": "answer 1",
                      },
                    },
                  ],
                  "text": "asdf",
                },
              },
            ],
            "title": "new quiz",
          },
        }
      `);
    });
  });
});
