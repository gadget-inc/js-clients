import { act, renderHook, waitFor } from "@testing-library/react";
import { useActionForm } from "../src/useActionForm.js";
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

    expect(useActionFormHook.current.formState.isSubmitting).toBe(true);

    await waitFor(() => {
      expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "createdAt": "2023-12-12T05:27:26.088Z",
        "id": "14",
        "text": "test quiz",
        "updatedAt": "2023-12-12T05:27:26.088Z",
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
    });

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

  test("update HasMany -> HasMany -> HasOne -> HasOne -> BelongsTo", async () => {
    let returnedData: any;

    const { result: useActionFormHook } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.update, {
          findBy: "12",
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
          "__typename": "Quiz",
          "questions": [
            {
              "__typename": "Question",
              "answers": [
                {
                  "__typename": "Answer",
                  "id": "8",
                  "text": "Test answer - 1",
                },
              ],
              "id": "9",
              "text": "test",
            },
          ],
          "text": "Test Quiz",
        },
      }
    `);

    await act(async () => {
      // useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
      // useActionFormHook.current.setValue("quiz.questions.0.answers.0.notification.notificationMessage.notificationMetadata.id", "2");
    });

    let submitPromise: Promise<any>;

    await act(async () => {
      submitPromise = useActionFormHook.current.submit();
    });

    expect(useActionFormHook.current.formState.isSubmitting).toBe(true);

    await waitFor(() => {
      expect(useActionFormHook.current.formState.isSubmitting).toBe(false);
    });

    expect(useActionFormHook.current.formState.errors).toEqual({});
    expect(useActionFormHook.current.formState.isSubmitSuccessful).toBe(true);
    expect(returnedData).toMatchInlineSnapshot(`
      {
        "__typename": "Quiz",
        "id": "12",
        "questions": {
          "__typename": "QuestionConnection",
          "edges": [
            {
              "__typename": "QuestionEdge",
              "node": {
                "__typename": "Question",
                "answers": {
                  "__typename": "AnswerConnection",
                  "edges": [
                    {
                      "__typename": "AnswerEdge",
                      "node": {
                        "__typename": "Answer",
                        "id": "8",
                        "text": "Test answer - 1",
                      },
                    },
                  ],
                },
                "id": "9",
                "text": "test",
              },
            },
          ],
        },
        "text": "Test Quiz",
      }
    `);
  });
});
