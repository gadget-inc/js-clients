import { act, renderHook } from "@testing-library/react";
import { useActionForm, useFieldArray } from "../src/useActionForm.js";
import { nestedExampleApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

const referencedHydrations = {
  quiz: {
    questions: "HasMany",
  },
  question: {
    answers: "HasMany",
    quiz: "BelongsTo",
  },
  answer: {
    recommendedProduct: "HasOne",
    question: "BelongsTo",
  },
  recommendedProduct: {
    productSuggestion: "BelongsTo",
    answer: "BelongsTo",
  },
};

describe("useActionFormNested", () => {
  describe("utils", () => {
    test("typenames aren't in submit", async () => {
      const queryResponse = {
        data: {
          quiz: {
            __typename: "Quiz",
            id: "8",
            text: "quiz title",
            questions: {
              edges: [
                {
                  node: {
                    id: "7",
                    text: "how",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "11",
                            text: "i don't know",
                            __typename: "Answer",
                          },
                          __typename: "AnswerEdge",
                        },
                      ],
                      __typename: "AnswerConnection",
                    },
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
              ],
              __typename: "QuestionConnection",
            },
          },
          gadgetMeta: {
            hydrations: {
              createdAt: "DateTime",
              updatedAt: "DateTime",
            },
            __typename: "GadgetApplicationMeta",
          },
        },
        extensions: {
          logs: "https://ggt.link/logs/150682/3e644b1fd6f63a46648a6718854f4e6e",
          traceId: "3e644b1fd6f63a46648a6718854f4e6e",
        },
      };
      const { result } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        stale: false,
        hasNext: false,
        data: queryResponse.data,
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = result.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        stale: false,
        hasNext: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "8",
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": "11",
                        "text": "i don't know",
                      },
                    },
                  ],
                  "id": "7",
                  "text": "how",
                },
              },
            ],
            "text": "quiz title",
          },
        }
      `);
    });

    test("null or undefined doesn't break transform", async () => {
      const queryResponse = {
        data: {
          quiz: {
            title: "test 2 ",
            body: "test 2",
            questions: {
              edges: [
                {
                  node: {
                    id: "4",
                    text: "test 2",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "4",
                            text: "test answer 2",
                            recommendedProduct: {
                              id: "4",
                              image: null, // <-- RANDOM NULL
                              productSuggestion: {
                                id: "8746652729619",
                                __typename: "ShopifyProduct",
                              },
                              __typename: "RecommendedProduct",
                            },
                            __typename: "Answer",
                          },
                          __typename: "AnswerEdge",
                        },
                      ],
                      __typename: "AnswerConnection",
                    },
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
              ],
              __typename: "QuestionConnection",
            },
            __typename: "Quiz",
          },
          gadgetMeta: {
            hydrations: {
              createdAt: "DateTime",
              updatedAt: "DateTime",
            },
            __typename: "GadgetApplicationMeta",
          },
        },
        extensions: {
          logs: "https://ggt.link/logs/151832/4b3293993a1f7532808045e3246d5326",
          traceId: "4b3293993a1f7532808045e3246d5326",
        },
      };

      const { result } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        stale: false,
        hasNext: false,
        data: queryResponse.data,
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = result.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        stale: false,
        hasNext: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "body": "test 2",
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": "4",
                        "recommendedProduct": {
                          "_link": "4",
                        },
                        "text": "test answer 2",
                      },
                    },
                  ],
                  "id": "4",
                  "text": "test 2",
                },
              },
            ],
            "title": "test 2 ",
          },
        }
      `);
    });
  });

  describe("create", () => {
    test("create still works", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.create), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "text": "test quiz",
          },
        }
      `);
    });

    test("create works with a single nested create child", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.create), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz");
        questionsFieldArrayHook.current.append({ text: "test question" });
        // questionsFieldArrayHook.current.append({ create: { text: "test question 2"} });
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "create": {
                  "text": "test question",
                },
              },
            ],
            "text": "test quiz",
          },
        }
      `);
    });

    test("create works with multiple nested create children", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.create), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        questionsFieldArrayHook.current.append({ text: "test question" });
        questionsFieldArrayHook.current.append({ text: "test question 2" });
      });

      const conrol = useActionFormHook.current.control;

      for (const [index, _question] of questionsFieldArrayHook.current.fields.entries()) {
        const { result: answersFieldArrayHook } = renderHook(() =>
          useFieldArray({ control: conrol, name: `quiz.questions.${index}.answers` })
        );

        await act(async () => {
          answersFieldArrayHook.current.append({ text: "test answer" });
          answersFieldArrayHook.current.append({ text: "test answer" });
        });
      }

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "create": {
                  "answers": [
                    {
                      "create": {
                        "text": "test answer",
                      },
                    },
                    {
                      "create": {
                        "text": "test answer",
                      },
                    },
                  ],
                  "text": "test question",
                },
              },
              {
                "create": {
                  "answers": [
                    {
                      "create": {
                        "text": "test answer",
                      },
                    },
                    {
                      "create": {
                        "text": "test answer",
                      },
                    },
                  ],
                  "text": "test question 2",
                },
              },
            ],
          },
        }
      `);
    });

    test("create works with multiple deeply nested create children that are reordered", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.create), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        questionsFieldArrayHook.current.append({ text: "test question" });
        questionsFieldArrayHook.current.append({ text: "test question 2" });
      });

      const conrol = useActionFormHook.current.control;

      for (const [index, _question] of questionsFieldArrayHook.current.fields.entries()) {
        const { result: answersFieldArrayHook } = renderHook(() =>
          useFieldArray({ control: conrol, name: `quiz.questions.${index}.answers` })
        );

        await act(async () => {
          answersFieldArrayHook.current.append({ text: "test answer 1" });
          answersFieldArrayHook.current.append({ text: "test answer 2" });

          answersFieldArrayHook.current.move(0, 1);
        });
      }

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "create": {
                  "answers": [
                    {
                      "create": {
                        "text": "test answer 2",
                      },
                    },
                    {
                      "create": {
                        "text": "test answer 1",
                      },
                    },
                  ],
                  "text": "test question",
                },
              },
              {
                "create": {
                  "answers": [
                    {
                      "create": {
                        "text": "test answer 2",
                      },
                    },
                    {
                      "create": {
                        "text": "test answer 1",
                      },
                    },
                  ],
                  "text": "test question 2",
                },
              },
            ],
          },
        }
      `);
    });

    test("create works with a single nested update child", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 1,
                    text: "existing test question 1",
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz");
        useActionFormHook.current.setValue("quiz.questions.0.text", "updated test question 1");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "update": {
                  "id": 1,
                  "text": "updated test question 1",
                },
              },
            ],
            "text": "test quiz",
          },
        }
      `);
    });

    test("create works with a single deeply nested update child", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 1,
                    answers: [
                      {
                        id: 1,
                        text: "existing test answer 1",
                      },
                    ],
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz");
        useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "updated test answer 1");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": 1,
                        "text": "updated test answer 1",
                      },
                    },
                  ],
                  "id": 1,
                },
              },
            ],
            "text": "test quiz",
          },
        }
      `);
    });

    test("create works with multiple deeply nested update children", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 1,
                    answers: [
                      {
                        id: 1,
                        text: "existing test answer 1",
                      },
                      {
                        id: 2,
                        text: "existing test answer 2",
                      },
                    ],
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz");
        useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "updated test answer 1");
        useActionFormHook.current.setValue("quiz.questions.0.answers.1.text", "updated test answer 2");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": 1,
                        "text": "updated test answer 1",
                      },
                    },
                    {
                      "update": {
                        "id": 2,
                        "text": "updated test answer 2",
                      },
                    },
                  ],
                  "id": 1,
                },
              },
            ],
            "text": "test quiz",
          },
        }
      `);
    });

    test("create works with multiple deeply nested update childen that are reordered", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 1,
                    answers: [
                      {
                        id: 1,
                        text: "existing test answer 1",
                      },
                      {
                        id: 2,
                        text: "existing test answer 2",
                      },
                    ],
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz");
        useActionFormHook.current.setValue("quiz.questions.0.answers.0.text", "updated test answer 1");
        useActionFormHook.current.setValue("quiz.questions.0.answers.1.text", "updated test answer 2");
      });

      const { result: answersFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: `quiz.questions.0.answers` })
      );

      await act(async () => {
        answersFieldArrayHook.current.move(0, 1);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": 1,
                        "text": "updated test answer 1",
                      },
                    },
                    {
                      "update": {
                        "id": 2,
                        "text": "updated test answer 2",
                      },
                    },
                  ],
                  "id": 1,
                },
              },
            ],
            "text": "test quiz",
          },
        }
      `);
    });

    test("create works with a single nested delete child", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 1,
                    text: "existing test question 1",
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        questionsFieldArrayHook.current.remove(0);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "delete": {
                  "id": 1,
                },
              },
            ],
          },
        }
      `);
    });

    test("create works with multiple nested delete children", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 1,
                    text: "existing test question 1",
                  },
                  {
                    id: 2,
                    text: "existing test question 2",
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        questionsFieldArrayHook.current.remove(0);
        questionsFieldArrayHook.current.remove(0);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "delete": {
                  "id": 1,
                },
              },
              {
                "delete": {
                  "id": 2,
                },
              },
            ],
          },
        }
      `);
    });

    test("create works with multiple nested delete children that are reordered", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 1,
                    text: "existing test question 1",
                  },
                  {
                    id: 2,
                    text: "existing test question 2",
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        questionsFieldArrayHook.current.move(0, 1);

        questionsFieldArrayHook.current.remove(0);
        questionsFieldArrayHook.current.remove(0);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "delete": {
                  "id": 1,
                },
              },
              {
                "delete": {
                  "id": 2,
                },
              },
            ],
          },
        }
      `);
    });

    test("create works with a single nested delete child that has multiple deeply nested children", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 1,
                    text: "existing test question 1",
                    answers: [
                      {
                        id: 1,
                        text: "existing test answer 1",
                      },
                      {
                        id: 2,
                        text: "existing test answer 2",
                      },
                    ],
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      const { result: answersFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions.0.answers" })
      );

      await act(async () => {
        questionsFieldArrayHook.current.remove(0);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "delete": {
                  "id": 1,
                },
              },
            ],
          },
        }
      `);
    });

    test("create works with a single nested delete child that is reordered that has multiple deeply nested children", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 1,
                    text: "existing test question 1",
                    answers: [
                      {
                        id: 1,
                        text: "existing test answer 1",
                      },
                    ],
                  },
                  {
                    id: 2,
                    text: "existing test question 2",
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      const { result: answersFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions.0.answers" })
      );

      await act(async () => {
        answersFieldArrayHook.current.update(0, { id: 1, text: "updated test answer 1" });

        questionsFieldArrayHook.current.move(0, 1);
        questionsFieldArrayHook.current.remove(1);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "delete": {
                  "id": 1,
                },
              },
              {
                "update": {
                  "id": 2,
                  "text": "existing test question 2",
                },
              },
            ],
          },
        }
      `);
    });

    test("create works with deeply nested create, update, and delete children", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 2,
                    text: "existing test question 2",
                    answers: [
                      {
                        id: 2,
                        text: "existing test answer 2",
                      },
                      {
                        id: 3,
                        text: "existing test answer 3",
                      },
                    ],
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      console.log("start", JSON.stringify(useActionFormHook.current.getValues(), null, 2));

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      const { result: question1AnswersFieldHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions.0.answers" })
      );

      await act(async () => {
        question1AnswersFieldHook.current.update(0, { id: 2, text: "updated test answer 2" });
        question1AnswersFieldHook.current.remove(1);
        question1AnswersFieldHook.current.append({ text: "new test answer replacing existing test answer 3" });
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": 2,
                        "text": "updated test answer 2",
                      },
                    },
                    {
                      "delete": {
                        "id": 3,
                      },
                    },
                    {
                      "create": {
                        "text": "new test answer replacing existing test answer 3",
                      },
                    },
                  ],
                  "id": 2,
                  "text": "existing test question 2",
                },
              },
            ],
          },
        }
      `);
    });

    test("create works with a nested child that updates it's parent", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 2,
                    text: "existing test question 2",
                    answers: [
                      {
                        id: 2,
                        text: "existing test answer 2",
                      },
                    ],
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      await act(async () => {
        useActionFormHook.current.setValue("quiz.questions.0.answers.0.question.id", "3");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": 2,
                        "question": {
                          "_link": "3",
                        },
                        "text": "existing test answer 2",
                      },
                    },
                  ],
                  "id": 2,
                  "text": "existing test question 2",
                },
              },
            ],
          },
        }
      `);
    });

    test("create works with multiple nested children that update their parent", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.create, {
            defaultValues: {
              quiz: {
                questions: [
                  {
                    id: 2,
                    text: "existing test question 2",
                    answers: [
                      {
                        id: 2,
                        text: "existing test answer 2",
                      },
                    ],
                  },
                ],
              },
            },
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      console.log("start", JSON.stringify(useActionFormHook.current.getValues(), null, 2));

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

      await act(async () => {
        useActionFormHook.current.setValue("quiz.questions.0.quiz.id", "123");
        useActionFormHook.current.setValue("quiz.questions.0.answers.0.question.id", "3");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("createQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": 2,
                        "question": {
                          "_link": "3",
                        },
                        "text": "existing test answer 2",
                      },
                    },
                  ],
                  "id": 2,
                  "quiz": {
                    "_link": "123",
                  },
                  "text": "existing test question 2",
                },
              },
            ],
          },
        }
      `);
    });
  });

  describe("update", () => {
    test("update still works", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "text": "test quiz - changed",
          },
        }
      `);
    });

    test("update HasMany", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      const queryResponse = {
        data: {
          quiz: {
            title: "test 2",
            body: "test 2",
            questions: {
              edges: [
                {
                  node: {
                    id: "4",
                    text: "test 2",
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
              ],
              __typename: "QuestionConnection",
            },
            __typename: "Quiz",
          },
          gadgetMeta: {
            referencedHydrations: referencedHydrations,
            __typename: "GadgetApplicationMeta",
          },
        },
        extensions: {
          logs: "https://ggt.link/logs/151832/4b3293993a1f7532808045e3246d5326",
          traceId: "4b3293993a1f7532808045e3246d5326",
        },
      };

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: queryResponse.data,
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
        useActionFormHook.current.setValue("quiz.questions.0.text", "test question - changed");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "body": "test 2",
            "questions": [
              {
                "update": {
                  "id": "4",
                  "text": "test question - changed",
                },
              },
            ],
            "text": "test quiz - changed",
            "title": "test 2",
          },
        }
      `);
    });

    test("update multiple HasMany", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      const queryResponse = {
        data: {
          quiz: {
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "test question - 1",
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
                {
                  node: {
                    id: "2",
                    text: "test question - 2",
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
              ],
              __typename: "QuestionConnection",
            },
            __typename: "Quiz",
          },
          gadgetMeta: {
            referencedHydrations: referencedHydrations,
            __typename: "GadgetApplicationMeta",
          },
        },
        extensions: {
          logs: "https://ggt.link/logs/151832/4b3293993a1f7532808045e3246d5326",
          traceId: "4b3293993a1f7532808045e3246d5326",
        },
      };

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: queryResponse.data,
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
        useActionFormHook.current.setValue("quiz.questions.0.text", "test question 1 - changed");
        useActionFormHook.current.setValue("quiz.questions.1.text", "test question 2 - changed");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "update": {
                  "id": "1",
                  "text": "test question 1 - changed",
                },
              },
              {
                "update": {
                  "id": "2",
                  "text": "test question 2 - changed",
                },
              },
            ],
            "text": "test quiz - changed",
          },
        }
      `);
    });

    test("update multiple reordered HasMany", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      const queryResponse = {
        data: {
          quiz: {
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "test question - 1",
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
                {
                  node: {
                    id: "2",
                    text: "test question - 2",
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
              ],
              __typename: "QuestionConnection",
            },
            __typename: "Quiz",
          },
          gadgetMeta: {
            referencedHydrations: referencedHydrations,
            __typename: "GadgetApplicationMeta",
          },
        },
        extensions: {
          logs: "https://ggt.link/logs/151832/4b3293993a1f7532808045e3246d5326",
          traceId: "4b3293993a1f7532808045e3246d5326",
        },
      };

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: queryResponse.data,
        hasNext: false,
        stale: false,
      });

      const { result: useQuizQuestionsFieldArray } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        useQuizQuestionsFieldArray.current.move(0, 1);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "questions": [
              {
                "update": {
                  "id": "1",
                  "text": "test question - 1",
                },
              },
              {
                "update": {
                  "id": "2",
                  "text": "test question - 2",
                },
              },
            ],
            "text": "test quiz",
          },
        }
      `);
    });

    test("update HasMany -> HasMany -> HasOne -> BelongsTo", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      const queryResponse = {
        data: {
          quiz: {
            title: "test 2",
            body: "test 2",
            questions: {
              edges: [
                {
                  node: {
                    id: "4",
                    text: "test 2",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "4",
                            text: "test answer 2",
                            recommendedProduct: {
                              id: "4",
                              image: null, // <-- RANDOM NULL
                              productSuggestion: {
                                __typename: "ShopifyProduct",
                                id: "8746652729619",
                              },
                              __typename: "RecommendedProduct",
                            },
                            __typename: "Answer",
                          },
                          __typename: "AnswerEdge",
                        },
                      ],
                      __typename: "AnswerConnection",
                    },
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
              ],
              __typename: "QuestionConnection",
            },
            __typename: "Quiz",
          },
          gadgetMeta: {
            hydrations: {
              createdAt: "DateTime",
              updatedAt: "DateTime",
            },
            referencedHydrations: {
              quiz: {
                questions: "HasMany",
              },
              question: {
                answers: "HasMany",
                quiz: "BelongsTo",
              },
              answer: {
                recommendedProduct: "HasOne",
                question: "BelongsTo",
              },
              recommendedProduct: {
                productSuggestion: "BelongsTo",
                answer: "BelongsTo",
              },
            },
            __typename: "GadgetApplicationMeta",
          },
        },
        extensions: {
          logs: "https://ggt.link/logs/151832/4b3293993a1f7532808045e3246d5326",
          traceId: "4b3293993a1f7532808045e3246d5326",
        },
      };

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: queryResponse.data,
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "body": "test 2",
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": "4",
                        "recommendedProduct": {
                          "update": {
                            "id": "4",
                            "image": null,
                            "productSuggestion": {
                              "_link": "8746652729619",
                            },
                          },
                        },
                        "text": "test answer 2",
                      },
                    },
                  ],
                  "id": "4",
                  "text": "test 2",
                },
              },
            ],
            "text": "test quiz - changed",
            "title": "test 2",
          },
        }
      `);
    });

    test("update HasMany -> HasMany -> HasOne -> HasOne -> BelongsTo", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      const queryResponse = {
        data: {
          quiz: {
            __typename: "Quiz",
            id: "1",
            text: "Test Quiz",
            questions: {
              __typename: "QuestionConnection",
              edges: [
                {
                  __typename: "QuestionEdge",
                  node: {
                    __typename: "Question",
                    id: "1",
                    text: "Test question",
                    answers: {
                      __typename: "AnswerConnection",
                      edges: [
                        {
                          __typename: "AnswerEdge",
                          node: {
                            __typename: "Answer",
                            notification: {
                              __typename: "Notification",
                              id: "1",
                              enabled: true,
                              notificationMessage: {
                                __typename: "NotificationMessage",
                                id: "1",
                                text: "example value for text",
                                notificationMetaData: {
                                  __typename: "NotificationMetadata",
                                  id: "1",
                                  text: "My metadata"
                                }
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        extensions: {
          logs: "https://ggt.link/logs/150608/7a62ba815889f63948c51cd41ee3021d",
          traceId: "7a62ba815889f63948c51cd41ee3021d",
        },
      };

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: queryResponse.data,
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
        useActionFormHook.current.setValue("quiz.questions.0.answers.0.notification.notificationMessage.notificationMetadata.id", "2");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot();
    });

    test("update works with a one to one single nested update child", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",

            question: {
              id: "456",
              text: "test question",
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
        useActionFormHook.current.setValue("quiz.question.text", "test question - changed");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "question": {
              "update": {
                "id": "456",
                "text": "test question - changed",
              },
            },
            "text": "test quiz - changed",
          },
        }
      `);
    });

    test("update works with a one to one multiple update children", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",

            question: {
              id: "456",
              text: "test question",
              answer: {
                id: "789",
                text: "test answer",
              },
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
        useActionFormHook.current.setValue("quiz.question.text", "test question - changed");
        useActionFormHook.current.setValue("quiz.question.answer.text", "test answer - changed");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "question": {
              "update": {
                "answer": {
                  "update": {
                    "id": "789",
                    "text": "test answer - changed",
                  },
                },
                "id": "456",
                "text": "test question - changed",
              },
            },
            "text": "test quiz - changed",
          },
        }
      `);
    });

    test("update works with a one to one multiple nested update -> create children", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            question: {
              id: "456",
              text: "test question",
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
        useActionFormHook.current.setValue("quiz.question.text", "test question - changed");
        useActionFormHook.current.setValue("quiz.question.answer.text", "test answer - changed");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "question": {
              "update": {
                "answer": {
                  "create": {
                    "text": "test answer - changed",
                  },
                },
                "id": "456",
                "text": "test question - changed",
              },
            },
            "text": "test quiz - changed",
          },
        }
      `);
    });

    test("update works with a single nested create child", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
          },
        },
        hasNext: false,
        stale: false,
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
        questionsFieldArrayHook.current.append({ text: "new test question" });
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "questions": [
              {
                "create": {
                  "text": "new test question",
                },
              },
            ],
            "text": "test quiz - changed",
          },
        }
      `);
    });

    test("update works with multiple nested create children", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
          },
        },
        hasNext: false,
        stale: false,
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
        questionsFieldArrayHook.current.append({ text: "new test question 1" });
        questionsFieldArrayHook.current.append({ text: "new test question 2" });
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "questions": [
              {
                "create": {
                  "text": "new test question 1",
                },
              },
              {
                "create": {
                  "text": "new test question 2",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with a single nested update child", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question",
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
        questionsFieldArrayHook.current.update(0, { id: "1", text: "updated test question" });
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "questions": [
              {
                "update": {
                  "id": "1",
                  "text": "updated test question",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with multiple nested update children", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                  },
                },
                {
                  node: {
                    id: "2",
                    text: "existing test question 2",
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
        questionsFieldArrayHook.current.update(0, { id: "1", text: "updated test question 1" });
        questionsFieldArrayHook.current.update(1, { id: "2", text: "updated test question 2" });
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "questions": [
              {
                "update": {
                  "id": "1",
                  "text": "updated test question 1",
                },
              },
              {
                "update": {
                  "id": "2",
                  "text": "updated test question 2",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with deeply nested create children", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                  },
                },
                {
                  node: {
                    id: "2",
                    text: "existing test question 2",
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      for (const [index, _question] of questionsFieldArrayHook.current.fields.entries()) {
        const { result: answersFieldArrayHook } = renderHook(() =>
          useFieldArray({ control: useActionFormHook.current.control, name: `quiz.questions.${index}.answers` })
        );

        await act(async () => {
          answersFieldArrayHook.current.append({ text: `new test answer ${index + 1}` });
        });
      }

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "create": {
                        "text": "new test answer 1",
                      },
                    },
                  ],
                  "id": "1",
                  "text": "existing test question 1",
                },
              },
              {
                "update": {
                  "answers": [
                    {
                      "create": {
                        "text": "new test answer 2",
                      },
                    },
                  ],
                  "id": "2",
                  "text": "existing test question 2",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with deeply nested update children", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "1",
                            text: "existing test answer 1",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  node: {
                    id: "2",
                    text: "existing test question 2",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "2",
                            text: "existing test answer 2",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      for (const [questionIndex, _question] of questionsFieldArrayHook.current.fields.entries()) {
        const { result: answersFieldArrayHook } = renderHook(() =>
          useFieldArray({ control: useActionFormHook.current.control, name: `quiz.questions.${questionIndex}.answers` })
        );

        for (const [answerIndex, _answer] of answersFieldArrayHook.current.fields.entries()) {
          const currentAnswerId = useActionFormHook.current.getValues(`quiz.questions.${questionIndex}.answers.${answerIndex}.id`);

          await act(async () => {
            answersFieldArrayHook.current.update(answerIndex, { id: currentAnswerId, text: `new test answer ${questionIndex + 1}` });
          });
        }
      }

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": "1",
                        "text": "new test answer 1",
                      },
                    },
                  ],
                  "id": "1",
                  "text": "existing test question 1",
                },
              },
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": "2",
                        "text": "new test answer 2",
                      },
                    },
                  ],
                  "id": "2",
                  "text": "existing test question 2",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with deeply nested update children that are reordered", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "1",
                            text: "existing test answer 1",
                          },
                        },
                        {
                          node: {
                            id: "2",
                            text: "existing test answer 2",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  node: {
                    id: "2",
                    text: "existing test question 2",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "3",
                            text: "existing test answer 3",
                          },
                        },
                        {
                          node: {
                            id: "4",
                            text: "existing test answer 4",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      for (const [questionIndex, _question] of questionsFieldArrayHook.current.fields.entries()) {
        const { result: answersFieldArrayHook } = renderHook(() =>
          useFieldArray({ control: useActionFormHook.current.control, name: `quiz.questions.${questionIndex}.answers` })
        );

        await act(async () => {
          answersFieldArrayHook.current.move(0, 1);
        });
      }

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": "1",
                        "text": "existing test answer 1",
                      },
                    },
                    {
                      "update": {
                        "id": "2",
                        "text": "existing test answer 2",
                      },
                    },
                  ],
                  "id": "1",
                  "text": "existing test question 1",
                },
              },
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": "3",
                        "text": "existing test answer 3",
                      },
                    },
                    {
                      "update": {
                        "id": "4",
                        "text": "existing test answer 4",
                      },
                    },
                  ],
                  "id": "2",
                  "text": "existing test question 2",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with mupltiple nested delete child", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                  },
                },
                {
                  node: {
                    id: "2",
                    text: "existing test question 2",
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        questionsFieldArrayHook.current.remove(0);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "questions": [
              {
                "delete": {
                  "id": "1",
                },
              },
              {
                "update": {
                  "id": "2",
                  "text": "existing test question 2",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with multiple nested delete child that are reordered", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                  },
                },
                {
                  node: {
                    id: "2",
                    text: "existing test question 2",
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      await act(async () => {
        questionsFieldArrayHook.current.move(0, 1);
        questionsFieldArrayHook.current.remove(0);
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "questions": [
              {
                "update": {
                  "id": "1",
                  "text": "existing test question 1",
                },
              },
              {
                "delete": {
                  "id": "2",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with a single deeply nested delete child", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "1",
                            text: "existing test answer 1",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      for (const [questionIndex, _question] of questionsFieldArrayHook.current.fields.entries()) {
        const { result: answersFieldArrayHook } = renderHook(() =>
          useFieldArray({ control: useActionFormHook.current.control, name: `quiz.questions.${questionIndex}.answers` })
        );

        await act(async () => {
          answersFieldArrayHook.current.remove(0);
        });
      }

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
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
                  ],
                  "id": "1",
                  "text": "existing test question 1",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with multiple deeply nested delete children", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "1",
                            text: "existing test answer 1",
                          },
                        },
                        {
                          node: {
                            id: "2",
                            text: "existing test answer 2",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      for (const [questionIndex, _question] of questionsFieldArrayHook.current.fields.entries()) {
        const { result: answersFieldArrayHook } = renderHook(() =>
          useFieldArray({ control: useActionFormHook.current.control, name: `quiz.questions.${questionIndex}.answers` })
        );

        await act(async () => {
          answersFieldArrayHook.current.remove(0);
          answersFieldArrayHook.current.remove(0);
        });
      }

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
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
                      "delete": {
                        "id": "2",
                      },
                    },
                  ],
                  "id": "1",
                  "text": "existing test question 1",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with multiple deeply nested delete children that are reordered", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "1",
                            text: "existing test answer 1",
                          },
                        },
                        {
                          node: {
                            id: "2",
                            text: "existing test answer 2",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.text", "test quiz - changed again");
      });

      const { result: questionsFieldArrayHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
      );

      for (const [questionIndex, _question] of questionsFieldArrayHook.current.fields.entries()) {
        const { result: answersFieldArrayHook } = renderHook(() =>
          useFieldArray({ control: useActionFormHook.current.control, name: `quiz.questions.${questionIndex}.answers` })
        );

        await act(async () => {
          answersFieldArrayHook.current.move(0, 1);
          answersFieldArrayHook.current.remove(1);
        });
      }

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
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
                        "text": "existing test answer 2",
                      },
                    },
                  ],
                  "id": "1",
                  "text": "existing test question 1",
                },
              },
            ],
            "text": "test quiz - changed again",
          },
        }
      `);
    });

    test("update works with deeply nested create, update, and delete children", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.update, {
            findBy: "123",
          }),
        {
          wrapper: MockClientWrapper(nestedExampleApi),
        }
      );

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "1",
                            text: "existing test answer 1",
                          },
                        },
                        {
                          node: {
                            id: "2",
                            text: "existing test answer 2",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      const { result: question1AnswersFieldHook } = renderHook(() =>
        useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions.0.answers" })
      );

      await act(async () => {
        question1AnswersFieldHook.current.update(0, { id: 2, text: "updated test answer 2" });
        question1AnswersFieldHook.current.remove(1);
        question1AnswersFieldHook.current.append({ text: "new test answer replacing existing test answer 1" });
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
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
                        "id": 2,
                        "text": "updated test answer 2",
                      },
                    },
                    {
                      "create": {
                        "text": "new test answer replacing existing test answer 1",
                      },
                    },
                  ],
                  "id": "1",
                  "text": "existing test question 1",
                },
              },
            ],
            "text": "test quiz",
          },
        }
      `);
    });

    test("update works with a nested child that updates it's parent", async () => {
      const { result: useActionFormHook } = renderHook(
        () =>
          useActionForm(nestedExampleApi.quiz.update, {
            findBy: "123",
            select: {
              questions: {
                edges: {
                  node: {
                    answers: {
                      edges: {
                        node: {
                          question: {},
                        },
                      },
                    },
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

      const queryResponse = {
        data: {
          quiz: {
            title: "test 2",
            body: "test 2",
            questions: {
              edges: [
                {
                  node: {
                    id: "4",
                    text: "test 2",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "4",
                            text: "test answer 2",
                            recommendedProduct: {
                              id: "4",
                              image: null, // <-- RANDOM NULL
                              productSuggestion: {
                                __typename: "ShopifyProduct",
                                id: "8746652729619",
                              },
                              __typename: "RecommendedProduct",
                            },
                            __typename: "Answer",
                          },
                          __typename: "AnswerEdge",
                        },
                      ],
                      __typename: "AnswerConnection",
                    },
                    __typename: "Question",
                  },
                  __typename: "QuestionEdge",
                },
              ],
              __typename: "QuestionConnection",
            },
            __typename: "Quiz",
          },
          gadgetMeta: {
            hydrations: {
              createdAt: "DateTime",
              updatedAt: "DateTime",
            },
            __typename: "GadgetApplicationMeta",
          },
        },
        extensions: {
          logs: "https://ggt.link/logs/151832/4b3293993a1f7532808045e3246d5326",
          traceId: "4b3293993a1f7532808045e3246d5326",
        },
      };

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: queryResponse.data,
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.questions.0.answers.0.question.id", "2");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "quiz": {
            "body": "test 2",
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": "4",
                        "question": {
                          "_link": "2",
                        },
                        "recommendedProduct": {
                          "_link": "4",
                        },
                        "text": "test answer 2",
                      },
                    },
                  ],
                  "id": "4",
                  "text": "test 2",
                },
              },
            ],
            "title": "test 2",
          },
        }
      `);
    });

    test("update works with multiple nested children that updates their parents", async () => {
      const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "123" }), {
        wrapper: MockClientWrapper(nestedExampleApi),
      });

      expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

      mockUrqlClient.executeQuery.pushResponse("quiz", {
        data: {
          quiz: {
            id: "123",
            text: "test quiz",
            questions: {
              edges: [
                {
                  node: {
                    id: "1",
                    text: "existing test question 1",
                    answers: {
                      edges: [
                        {
                          node: {
                            id: "1",
                            text: "existing test answer 1",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        useActionFormHook.current.setValue("quiz.questions.0.quiz.id", "123");
        useActionFormHook.current.setValue("quiz.questions.0.answers.0.question.id", "2");
      });

      let submitPromise: Promise<any>;

      await act(async () => {
        submitPromise = useActionFormHook.current.submit();
      });

      mockUrqlClient.executeMutation.pushResponse("updateQuiz", {
        data: {
          updateQuiz: {
            success: true,
          },
        },
        hasNext: false,
        stale: false,
      });

      await act(async () => {
        await submitPromise;
      });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "id": "123",
          "quiz": {
            "questions": [
              {
                "update": {
                  "answers": [
                    {
                      "update": {
                        "id": "1",
                        "question": {
                          "_link": "2",
                        },
                        "text": "existing test answer 1",
                      },
                    },
                  ],
                  "id": "1",
                  "quiz": {
                    "_link": "123",
                  },
                  "text": "existing test question 1",
                },
              },
            ],
            "text": "test quiz",
          },
        }
      `);
    });
  });
});
