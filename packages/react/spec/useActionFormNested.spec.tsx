import { act, renderHook } from "@testing-library/react";
import { useActionForm, useFieldArray } from "../src/useActionForm.js";
import { nestedExampleApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useActionFormNested", () => {
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

    test("create works with a single nested child", async () => {
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

    test("create nested children", async () => {
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
  });

  describe("update", () => {
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
  });
});
