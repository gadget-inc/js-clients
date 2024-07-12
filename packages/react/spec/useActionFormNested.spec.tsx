import { $modelRelationships } from "@gadgetinc/api-client-core";
import type { MODE } from "@pollyjs/core";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useActionForm, useFieldArray } from "../src/useActionForm.js";
import { useFindFirst } from "../src/useFindFirst.js";
import { bulkExampleApi, hasManyThroughApi, nestedExampleApi } from "./apis.js";
import { startPolly } from "./polly.js";
import { LiveClientWrapper, MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useActionFormNested", () => {
  describe("with polly", () => {
    startPolly({
      mode: (process.env.POLLY_MODE ?? "replay") as MODE,
      recordFailedRequests: true,
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

      const productSuggestionId = useFindFirstHook?.current[0]?.data?.id;

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

      const productSuggestionId = useFindFirstHook?.current[0]?.data?.id;

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

      const productSuggestionId = useFindFirstHook?.current[0]?.data?.id;

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

      const productSuggestionId = useFindFirstHook?.current[0]?.data?.id;

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

      const formValues = useActionFormHook.current.getValues("quiz");
      expect(formValues).toBeDefined();
      expect(formValues?.text).toBeDefined();

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

      const formValues = useActionFormHook.current.getValues("quiz");
      expect(formValues).toBeDefined();
      expect(formValues?.text).toBeDefined();

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

      const formValues = useActionFormHook.current.getValues("quiz");
      expect(formValues).toBeDefined();
      expect(formValues?.text).toBeDefined();
      expect(formValues?.questions).toBeDefined();
      expect(formValues?.questions?.length).toBe(1);

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

      const formValues = useActionFormHook.current.getValues("quiz");
      expect(formValues).toBeDefined();
      expect(formValues?.text).toBeDefined();
      expect(formValues?.questions).toBeDefined();
      expect(formValues?.questions?.length).toBe(2);

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

      const formValues = useActionFormHook.current.getValues("quiz");
      expect(formValues).toBeDefined();
      expect(formValues?.text).toBeDefined();
      expect(formValues?.questions).toBeDefined();
      expect(formValues?.questions?.length).toBe(2);

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

      const formValues = useActionFormHook.current.getValues("quiz");
      expect(formValues).toBeDefined();
      expect(formValues?.text).toBeDefined();
      expect(formValues?.questions).toBeDefined();
      expect(formValues?.questions?.length).toBe(2);
      expect(formValues?.questions?.[0]?.answers?.length).toBe(2);
      expect(formValues?.questions?.[1]?.answers?.length).toBe(0);

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

      const formValues = useActionFormHook.current.getValues("answer");
      expect(formValues).toBeDefined();
      expect(formValues?.notification).toBeDefined();

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

      const formValues = useActionFormHook.current.getValues("answer");
      expect(formValues).toBeDefined();
      expect(formValues?.question).toBeDefined();

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

      const formValues = useActionFormHook.current.getValues("answer");
      expect(formValues).toBeDefined();

      await act(async () => {
        useActionFormHook.current.setValue("answer.text", "test answers updated");
        (useActionFormHook.current as any).setValue("answer.questionId", 123);
      });

      expect(useActionFormHook.current.formState.errors).toEqual({});

      await act(async () => {
        await useActionFormHook.current.submit();
      });
    });
  });

  describe("with mocking", () => {
    test("when no referenceTypes are provided/fetched it should throw an error", async () => {
      // mock older clients that are missing this property
      jest.replaceProperty(bulkExampleApi, $modelRelationships as any, undefined);

      const { result: useActionFormHook } = renderHook(() => useActionForm(bulkExampleApi.widget.create), {
        wrapper: MockClientWrapper(bulkExampleApi),
      });

      await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

      await act(async () => {
        (useActionFormHook.current as any).setValue("quiz.text", "test quiz");
        (useActionFormHook.current as any).setValue("quiz.questions.0.text", "test question");
      });

      await act(async () => {
        await expect(useActionFormHook.current.submit).rejects.toThrowError(
          "No Gadget model metadata found -- please ensure you are using the latest version of the API client for your app"
        );
      });
    });

    test("can update a JSON field that isn't a relationship", async () => {
      const queryResponse = {
        data: {
          recommendedProduct: {
            __typename: "RecommendedProduct",
            id: "193",
            productMetadata: [
              {
                id: "1",
                value: "foo",
              },
              {
                id: "2",
                value: "bar",
              },
            ],
          },
        },
      };

      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.recommendedProduct.update, {
            findBy: "193",
            select: {
              id: true,
              productMetadata: true,
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

      mockUrqlClient.executeQuery.pushResponse("recommendedProduct", {
        stale: false,
        hasNext: false,
        data: queryResponse.data,
      });

      await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false), { timeout: 3000 });

      const formValues = useActionFormHook.current.getValues("recommendedProduct");
      expect(formValues).toBeDefined();
      expect(formValues?.productMetadata).toBeDefined();
      expect(formValues?.productMetadata?.length).toBe(2);
      expect(formValues?.productMetadata?.[0]?.id).toBe("1");
      expect(formValues?.productMetadata?.[0]?.value).toBe("foo");
      expect(formValues?.productMetadata?.[1]?.id).toBe("2");
      expect(formValues?.productMetadata?.[1]?.value).toBe("bar");

      const { result: productMetadataFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "recommendedProduct.productMetadata" })
      );

      await act(async () => {
        productMetadataFieldArrayHook.current.remove(0);
      });

      expect(useActionFormHook.current.formState.errors).toEqual({});

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

      mockUrqlClient.executeMutation.pushResponse("updateRecommendedProduct", {
        data: {
          recommendedProduct: {
            __typename: "RecommendedProduct",
            createdAt: "2023-12-12T15:20:11.728Z",
            id: "193",
            productMetadata: [
              {
                id: "2",
                value: "bar",
              },
            ],
            updatedAt: "2023-12-12T15:20:11.728Z",
          },
        },
        stale: false,
        hasNext: false,
      });

      await act(async () => {
        await submitPromise;
      });

      const submitCall = mockUrqlClient.executeMutation.mock.calls[0][0].variables;
      expect(submitCall.recommendedProduct.productMetadata.length).toBe(1);
      expect(submitCall.recommendedProduct.productMetadata[0].id).toBe("2");
      expect(submitCall.recommendedProduct.productMetadata[0].value).toBe("bar");
    });

    test("can update multiple HasMany -> HasMany relationships", async () => {
      const queryResponse = {
        data: {
          quiz: {
            __typename: "Quiz",
            id: "193",
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
                            __typename: "Answer",
                          },
                        },
                        {
                          node: {
                            id: "2",
                            text: "answer text - 2",
                            __typename: "Answer",
                          },
                        },
                      ],
                    },
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
                {
                  node: {
                    id: "2",
                    text: "question text - 2",
                    __typename: "Question",
                    answers: {
                      edges: [],
                    },
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

      await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false), { timeout: 3000 });

      const formValues = useActionFormHook.current.getValues("quiz");
      expect(formValues).toBeDefined();
      expect(formValues?.text).toBeDefined();
      expect(formValues?.questions).toBeDefined();
      expect(formValues?.questions?.length).toBe(2);
      expect(formValues?.questions?.[0]?.answers?.length).toBe(2);
      expect(formValues?.questions?.[1]?.answers?.length).toBe(0);

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
            id: "193",
            text: "test quiz",
            updatedAt: "2023-12-12T15:20:11.728Z",
          },
        },
        stale: false,
        hasNext: false,
      });

      await act(async () => {
        await submitPromise;
      });

      const submitResult = mockUrqlClient.executeMutation.mock.calls[0][0].variables;
      expect(submitResult.quiz.questions.length).toBe(2);

      expect(submitResult.quiz.questions[0].update.answers.length).toBe(2);
      expect(submitResult.quiz.questions[0].update.answers[0].update.id).toBe("1");
      expect(submitResult.quiz.questions[0].update.answers[1].update.id).toBe("2");

      expect(submitResult.quiz.questions[1].update.answers.length).toBe(2);
      expect(submitResult.quiz.questions[1].update.answers[0].create).toBeDefined();
      expect(submitResult.quiz.questions[1].update.answers[1].create).toBeDefined();
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
      expect(formValues.quiz.questions.length).toBe(3);

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        useActionFormHook.current.setValue("quiz.questions.0.text", "test quiz updated");
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

      await act(async () => {
        await submitPromise;
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
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions.0.answers" })
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

      await act(async () => {
        await submitPromise;
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

    test("can update HasMany -> HasMany relationships that are reordered and one is deleted with shorthand pathing", async () => {
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
        useFieldArray({ control: useActionFormHook.current.control, name: "questions.0.answers" })
      );

      await act(async () => {
        (useActionFormHook.current as any).setValue("questions.0.text", "test question updated - 1");

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

      await act(async () => {
        await submitPromise;
      });

      const submitResult = mockUrqlClient.executeMutation.mock.calls[0][0].variables;
      expect(submitResult).toMatchInlineSnapshot(`
        {
          "id": "168",
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "delete": {
                        "id": "1",
                      },
                    },
                    {
                      "update": {
                        "id": "2",
                        "text": "answer text - 2",
                      },
                    },
                    {
                      "update": {
                        "id": "3",
                        "text": "answer text - 3",
                      },
                    },
                  ],
                  "id": "1",
                  "text": "test question updated - 1",
                },
              },
            ],
            "text": "quiz title",
          },
        }
      `);

      expect(submitResult.quiz.questions.length).toBe(1);
      expect(submitResult.quiz.questions[0].update.answers.length).toBe(3);
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

      await act(async () => {
        await submitPromise;
      });

      const submitResult = mockUrqlClient.executeMutation.mock.calls[0][0].variables;
      expect(submitResult.answer.notification.update.answer._link).toBe("999");
      expect(submitResult.answer.recommendedProduct.update.answer._link).toBe("999");
    });

    test("can update HasOne -> BelongsTo relationships with shorthand pathing", async () => {
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
        (useActionFormHook.current as any).setValue("notification.answer.id", "999");
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

      await act(async () => {
        await submitPromise;
      });

      const submitResult = mockUrqlClient.executeMutation.mock.calls[0][0].variables;
      expect(submitResult.answer.notification.update.answer._link).toBe("999");
      expect(submitResult).toMatchInlineSnapshot(`
        {
          "answer": {
            "notification": {
              "update": {
                "answer": {
                  "_link": "999",
                },
                "enabled": false,
                "id": "1",
              },
            },
            "text": "answer text",
          },
          "id": "123",
        }
      `);
    });

    describe("with HasManyThrough relationship", () => {
      const hasManyThroughMockMetadata = {
        session: { user: { type: "BelongsTo", model: "user" } },
        user: {},
        course: {
          students: {
            type: "HasManyThrough",
            model: "student",
            through: "registration",
          },
          registrations: {
            model: "registration",
            type: "HasMany",
          },
        },
        student: {
          courses: {
            type: "HasManyThrough",
            model: "course",
            through: "registration",
          },
          registrations: {
            model: "registration",
            type: "HasMany",
          },
        },
        registration: {
          student: {
            type: "BelongsTo",
            model: "student",
          },
          course: {
            type: "BelongsTo",
            model: "course",
          },
        },
      };

      test("can update parent", async () => {
        jest.replaceProperty(hasManyThroughApi, $modelRelationships as any, hasManyThroughMockMetadata);

        const queryResponse = {
          data: {
            student: {
              __typename: "Student",
              id: "123",
              fullName: "cool student",
              courses: {
                edges: [],
              },
            },
          },
        };

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(hasManyThroughApi.student.update, {
              findBy: "123",
              select: {
                id: true,
                fullName: true,
                courses: {
                  edges: {
                    node: {
                      id: true,
                      title: true,
                    },
                  },
                },
              },
              onError: (error) => {
                expect(error).toBeUndefined();
              },
            }),
          {
            wrapper: MockClientWrapper(hasManyThroughApi),
          }
        );

        expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

        mockUrqlClient.executeQuery.pushResponse("student", {
          stale: false,
          hasNext: false,
          data: queryResponse.data,
        });

        let formValues: any;

        await act(async () => {
          formValues = useActionFormHook.current.getValues();
        });

        expect(formValues.student).toBeDefined();

        await act(async () => {
          (useActionFormHook.current as any).setValue("student.fullName", "new name");
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
                  {
                    "id": "123",
                    "student": {
                      "courses": [],
                      "fullName": "new name",
                    },
                  }
              `);

        mockUrqlClient.executeMutation.pushResponse("updateStudent", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });

      test("can update parent and sibling directly", async () => {
        jest.replaceProperty(hasManyThroughApi, $modelRelationships as any, hasManyThroughMockMetadata);

        const queryResponse = {
          data: {
            student: {
              __typename: "Student",
              id: "123",
              fullName: "cool student",
              courses: {
                edges: [
                  {
                    node: {
                      id: "1",
                      title: "course 1",
                    },
                  },
                ],
              },
            },
          },
        };

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(hasManyThroughApi.student.update, {
              findBy: "123",
              select: {
                id: true,
                fullName: true,
                courses: {
                  edges: {
                    node: {
                      id: true,
                      title: true,
                    },
                  },
                },
              },
              onError: (error) => {
                expect(error).toBeUndefined();
              },
            }),
          {
            wrapper: MockClientWrapper(hasManyThroughApi),
          }
        );

        expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

        mockUrqlClient.executeQuery.pushResponse("student", {
          stale: false,
          hasNext: false,
          data: queryResponse.data,
        });

        let formValues: any;

        await act(async () => {
          formValues = useActionFormHook.current.getValues();
        });

        expect(formValues.student).toBeDefined();

        await act(async () => {
          (useActionFormHook.current as any).setValue("student.fullName", "new name");
          (useActionFormHook.current as any).setValue("student.courses.0.title", "course 1 - updated");
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
                  {
                    "id": "123",
                    "student": {
                      "courses": [
                        {
                          "update": {
                            "id": "1",
                            "title": "course 1 - updated",
                          },
                        },
                      ],
                      "fullName": "new name",
                    },
                  }
              `);

        mockUrqlClient.executeMutation.pushResponse("updateStudent", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });

      test("can update parent and siblings through join model", async () => {
        jest.replaceProperty(hasManyThroughApi, $modelRelationships as any, hasManyThroughMockMetadata);

        const queryResponse = {
          data: {
            student: {
              __typename: "Student",
              id: "123",
              fullName: "cool student",
              registrations: {
                edges: [
                  {
                    node: {
                      id: "1",
                      course: {
                        id: "1",
                        title: "Math",
                      },
                    },
                  },
                ],
              },
            },
          },
        };

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(hasManyThroughApi.student.update, {
              findBy: "123",
              select: {
                id: true,
                fullName: true,
                registrations: {
                  edges: {
                    node: {
                      id: true,
                      // courseId: true,
                      course: {
                        id: true,
                        title: true,
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
            wrapper: MockClientWrapper(hasManyThroughApi),
          }
        );

        expect(mockUrqlClient.executeQuery).toHaveBeenCalledTimes(1);

        mockUrqlClient.executeQuery.pushResponse("student", {
          stale: false,
          hasNext: false,
          data: queryResponse.data,
        });

        let formValues: any;

        await act(async () => {
          formValues = useActionFormHook.current.getValues();
        });

        expect(formValues.student).toMatchInlineSnapshot(`
          {
            "fullName": "cool student",
            "registrations": [
              {
                "course": {
                  "id": "1",
                  "title": "Math",
                },
                "id": "1",
              },
            ],
          }
        `);

        await act(async () => {
          (useActionFormHook.current as any).setValue("student.fullName", "new name");
          (useActionFormHook.current as any).setValue("student.registrations.0.course.title", "Course Updated Name - Math Basic");
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
          {
            "id": "123",
            "student": {
              "fullName": "new name",
              "registrations": [
                {
                  "update": {
                    "course": {
                      "update": {
                        "id": "1",
                        "title": "Course Updated Name - Math Basic",
                      },
                    },
                    "id": "1",
                  },
                },
              ],
            },
          }
        `);

        mockUrqlClient.executeMutation.pushResponse("updateStudent", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });

      test("can create parent and siblings through join model", async () => {
        jest.replaceProperty(hasManyThroughApi, $modelRelationships as any, hasManyThroughMockMetadata);

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(hasManyThroughApi.student.create, {
              onError: (error) => {
                expect(error).toBeUndefined();
              },
            }),
          {
            wrapper: MockClientWrapper(hasManyThroughApi),
          }
        );

        let formValues: any;

        await act(async () => {
          formValues = useActionFormHook.current.getValues();
        });

        expect(formValues.student).toBeUndefined();

        await act(async () => {
          (useActionFormHook.current as any).setValue("student.fullName", "new name");
          (useActionFormHook.current as any).setValue("student.registrations.0.course.title", "Math");
          (useActionFormHook.current as any).setValue("student.registrations.1.course.title", "Science");
          (useActionFormHook.current as any).setValue("student.registrations.2.course.title", "History");
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
          {
            "student": {
              "fullName": "new name",
              "registrations": [
                {
                  "create": {
                    "course": {
                      "create": {
                        "title": "Math",
                      },
                    },
                  },
                },
                {
                  "create": {
                    "course": {
                      "create": {
                        "title": "Science",
                      },
                    },
                  },
                },
                {
                  "create": {
                    "course": {
                      "create": {
                        "title": "History",
                      },
                    },
                  },
                },
              ],
            },
          }
        `);

        mockUrqlClient.executeMutation.pushResponse("createStudent", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });

      test("can update sibling through join model and some are reordered and one is deleted", async () => {
        jest.replaceProperty(hasManyThroughApi, $modelRelationships as any, hasManyThroughMockMetadata);

        const queryResponse = {
          data: {
            student: {
              __typename: "Student",
              fullName: "cool guy mgee",
              registrations: {
                edges: [
                  {
                    node: {
                      __typename: "Registration",
                      id: "1",
                      course: {
                        __typename: "Course",
                        id: "5",
                        title: "Science",
                      },
                    },
                  },
                  {
                    node: {
                      __typename: "Registration",
                      id: "2",
                      course: {
                        __typename: "Course",
                        id: "6",
                        title: "History",
                      },
                    },
                  },
                  {
                    node: {
                      __typename: "Registration",
                      id: "3",
                      course: {
                        __typename: "Course",
                        id: "7",
                        title: "Art",
                      },
                    },
                  },
                ],
              },
            },
          },
        };

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(hasManyThroughApi.student.update, {
              findBy: "123",
              select: {
                id: true,
                fullName: true,
                registrations: {
                  edges: {
                    node: {
                      id: true,
                      course: {
                        id: true,
                        title: true,
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
            wrapper: MockClientWrapper(hasManyThroughApi),
          }
        );

        expect(mockUrqlClient.executeQuery).toHaveBeenCalledTimes(1);

        mockUrqlClient.executeQuery.pushResponse("student", {
          stale: false,
          hasNext: false,
          data: queryResponse.data,
        });

        let formValues: any;

        await act(async () => {
          formValues = useActionFormHook.current.getValues();
        });

        expect(formValues.student).toBeDefined();
        expect(formValues.student.registrations).toBeDefined();
        expect(formValues.student.registrations.length).toBe(3);

        const { result: questionsFieldArrayHook } = renderHook(() =>
          useFieldArray({ control: useActionFormHook.current.control, name: "student.registrations" })
        );

        await act(async () => {
          (useActionFormHook.current as any).setValue("student.fullName", "cool guy mgee - updated");
          (useActionFormHook.current as any).setValue("student.registrations.0.course.title", "Science - updated");
          (useActionFormHook.current as any).setValue("student.registrations.1.course.title", "History - updated");

          questionsFieldArrayHook.current.move(0, 1);
          questionsFieldArrayHook.current.remove(2);
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
          {
            "student": {
              "fullName": "cool guy mgee - updated",
              "registrations": [
                {
                  "update": {
                    "course": {
                      "update": {
                        "id": "5",
                        "title": "Science - updated",
                      },
                    },
                    "id": "1",
                  },
                },
                {
                  "update": {
                    "course": {
                      "update": {
                        "id": "6",
                        "title": "History - updated",
                      },
                    },
                    "id": "2",
                  },
                },
                {
                  "delete": {
                    "id": "3",
                  },
                },
              ],
            },
          }
        `);

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);

        mockUrqlClient.executeMutation.pushResponse("updateStudent", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });

      test("can update sibling directly and some are reordered and one is deleted", async () => {
        jest.replaceProperty(hasManyThroughApi, $modelRelationships as any, hasManyThroughMockMetadata);

        const queryResponse = {
          data: {
            student: {
              __typename: "Student",
              courses: {
                edges: [
                  {
                    node: {
                      __typename: "Course",
                      id: "5",
                      title: "Science",
                    },
                  },
                  {
                    node: {
                      __typename: "Course",
                      id: "6",
                      title: "History",
                    },
                  },
                  {
                    node: {
                      __typename: "Course",
                      id: "7",
                      title: "Art",
                    },
                  },
                ],
              },
            },
          },
        };

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(hasManyThroughApi.student.update, {
              findBy: "123",
              select: {
                id: true,
                fullName: true,
                courses: {
                  edges: {
                    node: {
                      id: true,
                      title: true,
                    },
                  },
                },
              },
              onError: (error) => {
                expect(error).toBeUndefined();
              },
            }),
          {
            wrapper: MockClientWrapper(hasManyThroughApi),
          }
        );

        expect(mockUrqlClient.executeQuery).toHaveBeenCalledTimes(1);

        mockUrqlClient.executeQuery.pushResponse("student", {
          stale: false,
          hasNext: false,
          data: queryResponse.data,
        });

        let formValues: any;

        await act(async () => {
          formValues = useActionFormHook.current.getValues();
        });

        expect(formValues.student).toBeDefined();
        expect(formValues.student.courses).toBeDefined();
        expect(formValues.student.courses.length).toBe(3);

        const { result: questionsFieldArrayHook } = renderHook(() =>
          useFieldArray({ control: useActionFormHook.current.control, name: "student.courses" })
        );

        await act(async () => {
          (useActionFormHook.current as any).setValue("student.fullName", "cool guy mgee - updated");
          (useActionFormHook.current as any).setValue("student.courses.0.title", "Science - updated");
          (useActionFormHook.current as any).setValue("student.courses.1.title", "History - updated");

          questionsFieldArrayHook.current.move(0, 1);
          questionsFieldArrayHook.current.remove(2);
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
          {
            "student": {
              "courses": [
                {
                  "update": {
                    "id": "5",
                    "title": "Science - updated",
                  },
                },
                {
                  "update": {
                    "id": "6",
                    "title": "History - updated",
                  },
                },
                {
                  "delete": {
                    "id": "7",
                  },
                },
              ],
              "fullName": "cool guy mgee - updated",
            },
          }
        `);

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);

        mockUrqlClient.executeMutation.pushResponse("updateStudent", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });
    });

    describe("with BelongsTo relationships", () => {
      test("can update BelongsTo with shortform pathing", async () => {
        const queryResponse = {
          data: {
            answer: {
              __typename: "Answer",
              id: "123",
              text: "Answer create",
              question: {
                __typename: "Question",
                id: "1",
                text: "test",
              },
            },
          },
        };

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(nestedExampleApi.answer.update, {
              findBy: "123",
              select: {
                id: true,
                text: true,
                question: {
                  id: true,
                  text: true,
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

        (useActionFormHook.current as any).setValue("question.text", "new text");

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
          {
            "answer": {
              "question": {
                "update": {
                  "id": "1",
                  "text": "new text",
                },
              },
              "text": "Answer create",
            },
            "id": "123",
          }
        `);

        mockUrqlClient.executeMutation.pushResponse("updateAnswer", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });

      test("can update BelongsTo link", async () => {
        const queryResponse = {
          data: {
            answer: {
              __typename: "Answer",
              id: "123",
              text: "Answer create",
              question: {
                __typename: "Question",
                id: "1",
              },
            },
          },
        };

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(nestedExampleApi.answer.update, {
              findBy: "123",
              select: {
                id: true,
                text: true,
                question: {
                  id: true,
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
          (useActionFormHook.current as any).setValue("answer.question.id", "2");
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
          {
            "answer": {
              "question": {
                "_link": "2",
              },
              "text": "Answer create",
            },
            "id": "123",
          }
        `);

        mockUrqlClient.executeMutation.pushResponse("updateAnswer", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });

      test("can update multiple BelongsTo link", async () => {
        const queryResponse = {
          data: {
            answer: {
              __typename: "Answer",
              id: "123",
              text: "Answer create",
              question: {
                __typename: "Question",
                id: "1",
              },
            },
          },
        };

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(nestedExampleApi.answer.update, {
              findBy: "123",
              select: {
                id: true,
                text: true,
                question: {
                  id: true,
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
          (useActionFormHook.current as any).setValue("answer.question.id", "2");
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
          {
            "answer": {
              "question": {
                "_link": "2",
              },
              "text": "Answer create",
            },
            "id": "123",
          }
        `);

        mockUrqlClient.executeMutation.pushResponse("updateAnswer", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });

      test("can update BelongsTo", async () => {
        const queryResponse = {
          data: {
            answer: {
              __typename: "Answer",
              id: "123",
              text: "Answer create",
              question: {
                __typename: "Question",
                id: "1",
                text: "test",
              },
            },
          },
        };

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(nestedExampleApi.answer.update, {
              findBy: "123",
              select: {
                id: true,
                text: true,
                question: {
                  id: true,
                  text: true,
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
          (useActionFormHook.current as any).setValue("answer.question.text", "new text");
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
          {
            "answer": {
              "question": {
                "update": {
                  "id": "1",
                  "text": "new text",
                },
              },
              "text": "Answer create",
            },
            "id": "123",
          }
        `);

        mockUrqlClient.executeMutation.pushResponse("updateAnswer", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });

      test("can create BelongsTo", async () => {
        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(nestedExampleApi.answer.create, {
              onError: (error) => {
                expect(error).toBeUndefined();
              },
            }),
          {
            wrapper: MockClientWrapper(nestedExampleApi),
          }
        );

        let formValues: any;

        await act(async () => {
          formValues = useActionFormHook.current.getValues();
        });

        expect(formValues.answer).toBeUndefined();

        await act(async () => {
          (useActionFormHook.current as any).setValue("answer.question.text", "new text");
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
          {
            "answer": {
              "question": {
                "create": {
                  "text": "new text",
                },
              },
            },
          }
        `);

        mockUrqlClient.executeMutation.pushResponse("createAnswer", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });

      test("can delete BelongsTo", async () => {
        const queryResponse = {
          data: {
            answer: {
              __typename: "Answer",
              id: "123",
              text: "Answer create",
              question: {
                __typename: "Question",
                id: "1",
                text: "test",
              },
            },
          },
        };

        const { result: useActionFormHook } = renderHook(
          () =>
            useActionForm(nestedExampleApi.answer.update, {
              findBy: "123",
              select: {
                id: true,
                text: true,
                question: {
                  id: true,
                  text: true,
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
          (useActionFormHook.current as any).setValue("answer.question", {});
        });

        let submitPromise: Promise<any>;

        await act(async () => {
          submitPromise = useActionFormHook.current.submit();
        });

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
          {
            "answer": {
              "question": {
                "delete": {
                  "id": "1",
                },
              },
              "text": "Answer create",
            },
            "id": "123",
          }
        `);

        mockUrqlClient.executeMutation.pushResponse("updateAnswer", {
          data: {},
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await submitPromise;
        });
      });
    });
  });
});
