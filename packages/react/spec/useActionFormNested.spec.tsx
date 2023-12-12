import { act, renderHook, waitFor } from "@testing-library/react";
import { useActionForm } from "../src/useActionForm.js";
import { useFindFirst } from "../src/useFindFirst.js";
import { nestedExampleApi } from "./apis.js";
import { startPolly } from "./polly.js";
import { LiveClientWrapper } from "./testWrappers.js";

describe("useActionFormNested", () => {
  startPolly({
    mode: "passthrough",
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
      useActionFormHook.current.setValue("quiz.questions.0.text", "test question");
    });

    let submitPromise: Promise<any>;

    await act(async () => {
      submitPromise = useActionFormHook.current.submit();
    });

    await waitFor(
      () => {
        expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
      },
      { timeout: 3000 }
    );

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "createdAt": "2023-12-12T18:15:05.789Z",
        "id": "32",
        "text": "test quiz",
        "updatedAt": "2023-12-12T18:15:05.789Z",
      }
    `);
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

    let submitPromise: Promise<any>;

    await act(async () => {
      submitPromise = useActionFormHook.current.submit();
    });

    await waitFor(
      () => {
        expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
      },
      { timeout: 3000 }
    );

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "createdAt": "2023-12-12T18:15:06.193Z",
        "id": "33",
        "text": "test quiz",
        "updatedAt": "2023-12-12T18:15:06.193Z",
      }
    `);
  });

  test("can create a single HasMany -> HasMany relationship", async () => {
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
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");
    });

    let submitPromise: Promise<any>;

    await act(async () => {
      submitPromise = useActionFormHook.current.submit();
    });

    await waitFor(
      () => {
        expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
      },
      { timeout: 3000 }
    );

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "createdAt": "2023-12-12T18:15:06.664Z",
        "id": "34",
        "text": "test quiz",
        "updatedAt": "2023-12-12T18:15:06.664Z",
      }
    `);
  });

  test("can create multiple HasMany -> HasMany relationships", async () => {
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
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");

      useActionFormHook.current.setValue("quiz.questions.1.text", "test question - 2");
      useActionFormHook.current.setValue("quiz.questions.1.answers.0.text", "test answer - 2");
    });

    let submitPromise: Promise<any>;

    await act(async () => {
      submitPromise = useActionFormHook.current.submit();
    });

    await waitFor(
      () => {
        expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
      },
      { timeout: 3000 }
    );

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "createdAt": "2023-12-12T18:15:07.093Z",
        "id": "35",
        "text": "test quiz",
        "updatedAt": "2023-12-12T18:15:07.093Z",
      }
    `);
  });

  test("can create a single HasMany -> HasMany -> HasOne relationship", async () => {
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
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.notification.enabled", true);
    });

    let submitPromise: Promise<any>;

    await act(async () => {
      submitPromise = useActionFormHook.current.submit();
    });

    await waitFor(
      () => {
        expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
      },
      { timeout: 3000 }
    );

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "createdAt": "2023-12-12T18:15:07.563Z",
        "id": "36",
        "text": "test quiz",
        "updatedAt": "2023-12-12T18:15:07.563Z",
      }
    `);
  });

  test("can create multiple HasMany -> HasMany -> HasOne relationships", async () => {
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
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "test answer - 1");
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.notification.enabled", true);

      useActionFormHook.current.setValue("quiz.questions.1.text", "test question - 1");
      useActionFormHook.current.setValue("quiz.questions.1.answers.0.text", "test answer - 1");
      useActionFormHook.current.setValue("quiz.questions.1.answers.0.notification.enabled", true);
    });

    let submitPromise: Promise<any>;

    await act(async () => {
      submitPromise = useActionFormHook.current.submit();
    });

    await waitFor(
      () => {
        expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
      },
      { timeout: 3000 }
    );

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "createdAt": "2023-12-12T18:20:01.543Z",
        "id": "44",
        "text": "test quiz",
        "updatedAt": "2023-12-12T18:20:01.543Z",
      }
    `);
  });

  test("can create a single HasMany -> HasMany -> HasOne -> BelongsTo relationship", async () => {
    let returnedData: any;

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
            returnedData = actionResult;
          },
          onError: (error) => {
            returnedData = error;
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

    await act(async () => {
      await useActionFormHook.current.submit();
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});

    expect(returnedData).toMatchInlineSnapshot(
      `[ErrorWrapper: [GraphQL] Variable "$quiz" got invalid value { productSuggestionId: "123" } at "quiz.questions[0].create.answers[0].create.recommendedProduct.create"; Field "productSuggestionId" is not defined by type "NestedRecommendedProductCreateInput". Did you mean "productSuggestion"?]`
    );

    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
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
