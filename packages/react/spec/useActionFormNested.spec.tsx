import { act, renderHook, waitFor } from "@testing-library/react";
import { useActionForm } from "../src/useActionForm.js";
import { useFindFirst } from "../src/useFindFirst.js";
import { nestedExampleApi } from "./apis.js";
import { startPolly } from "./polly.js";
import { LiveClientWrapper } from "./testWrappers.js";

describe("useActionFormNested", () => {
  startPolly({});

  it("should record", async () => {
    const results = await nestedExampleApi.quiz.findMany();

    expect(results).toMatchInlineSnapshot(`
      [
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-07T19:34:29.764Z",
          "id": "2",
          "text": "Test Quiz Updated",
          "updatedAt": "2023-12-07T19:48:02.418Z",
        },
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-07T23:52:32.982Z",
          "id": "3",
          "text": "Test Quiz",
          "updatedAt": "2023-12-07T23:52:32.982Z",
        },
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-07T23:52:52.473Z",
          "id": "4",
          "text": "Test Quiz",
          "updatedAt": "2023-12-07T23:52:52.473Z",
        },
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-07T23:53:03.008Z",
          "id": "5",
          "text": "Test Quiz",
          "updatedAt": "2023-12-07T23:53:03.008Z",
        },
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-08T15:59:02.533Z",
          "id": "6",
          "text": "Test Quiz",
          "updatedAt": "2023-12-08T15:59:02.533Z",
        },
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-08T15:59:11.750Z",
          "id": "7",
          "text": "Test Quiz",
          "updatedAt": "2023-12-08T15:59:11.750Z",
        },
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-08T15:59:47.188Z",
          "id": "8",
          "text": "Test Quiz",
          "updatedAt": "2023-12-08T15:59:47.188Z",
        },
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-08T15:59:56.365Z",
          "id": "9",
          "text": "Test Quiz",
          "updatedAt": "2023-12-08T15:59:56.365Z",
        },
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-08T16:19:54.477Z",
          "id": "10",
          "text": "Test Quiz",
          "updatedAt": "2023-12-08T16:19:54.477Z",
        },
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-08T16:20:04.590Z",
          "id": "11",
          "text": "Test Quiz",
          "updatedAt": "2023-12-08T16:20:04.590Z",
        },
        {
          "__typename": "Quiz",
          "createdAt": "2023-12-08T16:20:18.948Z",
          "id": "12",
          "text": "Test Quiz",
          "updatedAt": "2023-12-11T23:25:39.632Z",
        },
      ]
    `);
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

    await waitFor(() => {
      expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
    }, { timeout: 3000});

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "createdAt": "2023-12-12T15:20:11.728Z",
        "id": "21",
        "text": "test quiz",
        "updatedAt": "2023-12-12T15:20:11.728Z",
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

    await waitFor(() => {
      expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
    }, { timeout: 3000});

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "createdAt": "2023-12-12T05:48:28.499Z",
        "id": "16",
        "text": "test quiz",
        "updatedAt": "2023-12-12T05:48:28.499Z",
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

    await waitFor(() => {
      expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
    }, {timeout: 3000 });

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "createdAt": "2023-12-12T15:02:12.667Z",
        "id": "19",
        "text": "test quiz",
        "updatedAt": "2023-12-12T15:02:12.667Z",
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
        "createdAt": "2023-12-12T15:32:26.354Z",
        "id": "23",
        "text": "test quiz",
        "updatedAt": "2023-12-12T15:32:26.354Z",
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
        "createdAt": "2023-12-12T15:38:09.435Z",
        "id": "24",
        "text": "test quiz",
        "updatedAt": "2023-12-12T15:38:09.435Z",
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
        "createdAt": "2023-12-12T15:43:52.688Z",
        "id": "25",
        "text": "test quiz",
        "updatedAt": "2023-12-12T15:43:52.688Z",
      }
    `);
  });

  test.skip("can create a single HasMany -> HasMany -> HasOne -> BelongsTo relationship", async () => {
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
      useActionFormHook.current.setValue("quiz.questions.0.answers.0.recommendedProduct.productSuggestion.title", productSuggestionId);});

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
        "createdAt": "2023-12-12T15:43:52.688Z",
        "id": "25",
        "text": "test quiz",
        "updatedAt": "2023-12-12T15:43:52.688Z",
      }
    `);
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
