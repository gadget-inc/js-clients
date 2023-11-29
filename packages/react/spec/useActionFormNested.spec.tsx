import { act, render, renderHook } from "@testing-library/react";
import { useActionForm } from "../src/useActionForm.js";
import { nestedExampleApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";
import { useFieldArray } from "../src/useActionForm.js";

describe("useActionFormNested", () => {
  test("simple nested variables transform", async () => {
    const { result } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.update, {
          isNested: true,
          findBy: "123",
          select: {
            id: true,
            title: true,
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
      { wrapper: MockClientWrapper(nestedExampleApi) }
    );

    const { result: fieldArray } = renderHook(() => useFieldArray({ control: result.current.control, name: "quiz.questions" }));

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("quiz", {
      data: {
        quiz: {
          id: "123",
          title: "test quiz",
          questions: {
            edges: [
              {
                node: {
                  id: "1",
                  text: "test question",
                },
              },
              {
                node: {
                  id: "2",
                  text: "test question 2",
                },
              },
            ],
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    let submitPromise: Promise<any>;

    await act(async () => {
      fieldArray.current.append({ text: "test question 3" });
      submitPromise = result.current.submit();
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
  });

  test("humanize form keys", async () => {
    const { result } = renderHook(
      () =>
        useActionForm(nestedExampleApi.quiz.update, {
          isNested: true,
          findBy: "123",
          select: {
            id: true,
            title: true,
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
        }),
      { wrapper: MockClientWrapper(nestedExampleApi) }
    );

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("quiz", {
      data: {
        quiz: {
          id: "123",
          title: "test quiz",
          questions: {
            edges: [
              {
                node: {
                  id: "1",
                  text: "test question",
                  answers: {
                    edges: [
                      {
                        node: {
                          id: "1",
                          text: "test answer",
                        },
                      },
                      {
                        node: {
                          id: "2",
                          text: "test answer 2",
                        },
                      },
                    ],
                  },
                },
              },
              {
                node: {
                  id: "2",
                  text: "test question 2",
                  answers: {
                    edges: [
                      {
                        node: {
                          id: "3",
                          text: "test answer 3",
                        },
                      },
                      {
                        node: {
                          id: "4",
                          text: "test answer 4",
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
      stale: false,
      hasNext: false,
    });

    let submitPromise: Promise<any>;

    await act(async () => {
      // console.log(JSON.stringify((result.current as any).getValues(), null, 2));
      submitPromise = result.current.submit();
    });

    // console.log("mutation", JSON.stringify(mockUrqlClient.executeMutation.mock.calls[0][0].variables, null, 2));

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

    expect((result.current as any).getValues("quiz.questions.0.id")).toBe("1");
    expect((result.current as any).getValues("quiz.questions.0.answers.0.id")).toBe("1");
    expect((result.current as any).getValues("quiz.questions.0.answers.1.id")).toBe("2");

    expect((result.current as any).getValues("quiz.questions.1.id")).toBe("2");
    expect((result.current as any).getValues("quiz.questions.1.answers.0.id")).toBe("3");
    expect((result.current as any).getValues("quiz.questions.1.answers.1.id")).toBe("4");
  });
});
