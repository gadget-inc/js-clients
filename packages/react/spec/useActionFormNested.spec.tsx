import { act, renderHook } from "@testing-library/react";
import { useActionForm, useFieldArray } from "../src/useActionForm.js";
import { transformData, findDifferences, getDeletes, transformNested } from "../src/utils.js";
import { nestedExampleApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

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

  test("compare objects", () => {
    const objectA = {
      id: 1,
      quiz: {
        questions: [
          {
            id: 1,
            text: "test",
            answers: [
              {
                id: 1,
                text: "test answer",
              },
              {
                id: 2,
                text: "test answer 2",
              },
            ],
          },
          {
            id: 2,
            text: "test 2",
            answers: [
              {
                id: 3,
                text: "test answer 3",
              },
              {
                id: 4,
                text: "test answer 4",
              },
            ],
          },
        ],
      },
    };

    const objectB = {
      id: 1,
      quiz: {
        questions: [
          {
            id: 1,
            text: "test",
            answers: [
              {
                id: 1,
                text: "test answer",
              },
              {
                id: 2,
                text: "test answer 2",
              },
            ],
          },
          {
            id: 2,
            answers: [
              {
                id: 3,
                text: "test answer 3",
              },
              {
                id: 4,
                text: "test answer 4",
              },
            ],
          },
        ],
      },
    };

    const result = findDifferences(objectA, objectB);
    console.log(JSON.stringify(result, null, 2));
  });

  test("create children", async () => {
    const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { isNested: true, findBy: "123" }), {
      wrapper: MockClientWrapper(nestedExampleApi),
    });

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

    console.log(JSON.stringify(useActionFormHook.current.getValues(), null, 2));
  });

  test("default values and variables differences", async () => {
    const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { isNested: true, findBy: "123" }), {
      wrapper: MockClientWrapper(nestedExampleApi),
    });

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

    const { result: questionsFieldArrayHook } = renderHook(() =>
      useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
    );

    let submitPromise: Promise<any>;

    await act(async () => {
      questionsFieldArrayHook.current.remove(0);
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
  });

  test("default values and variables differences more nesting", async () => {
    const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { isNested: true, findBy: "123" }), {
      wrapper: MockClientWrapper(nestedExampleApi),
    });

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
                    edges: [],
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

    const { result: questionsFieldArrayHook } = renderHook(() =>
      useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions" })
    );

    let submitPromise: Promise<any>;

    await act(async () => {
      questionsFieldArrayHook.current.remove(0);
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
  });

  test("create object map", async () => {
    const defaultValues = {
      id: 1,
      quiz: {
        questions: [
          {
            id: 1,
            text: "test",
            answers: [
              {
                id: 1,
                text: "test answer",
              },
              {
                id: 2,
                text: "test answer 2",
              },
            ],
          },
          {
            id: 2,
            text: "test 2",
            answers: [
              {
                id: 3,
                text: "test answer 3",
              },
              {
                id: 4,
                text: "test answer 4",
              },
            ],
          },
        ],
      },
    };

    const variables = {
      id: 1,
      quiz: {
        questions: [
          {
            id: 1,
            text: "test",
            answers: [
              {
                id: 1,
                text: "test answer",
              },
              {
                id: 2,
                text: "test answer 2",
              },
            ],
          },
          {
            id: 2,
            text: "test 2",
            answers: [
              {
                id: 3,
                text: "test answer 3",
              },
            ],
          },
        ],
      },
    };

    const crudObjs = {};
    transformNested(variables, crudObjs);

    console.log("crudObjs", JSON.stringify(crudObjs, null, 2));

    getDeletes(defaultValues, variables, crudObjs);

    console.log("lookthroughResult", JSON.stringify(variables, null, 2));
  });

  test("extract cruds", () => {
    // const defaultValues = {
    //   quiz: {
    //     questions: [
    //       {
    //         id: 1,
    //         text: "test",
    //         answers: [
    //           {
    //             id: 1,
    //             text: "test answer",
    //           },
    //           {
    //             id: 2,
    //             text: "test answer 2",
    //           },
    //         ],
    //       },
    //       {
    //         id: 2,
    //         text: "test 2",
    //         answers: [
    //           {
    //             id: 3,
    //             text: "test answer 3",
    //           },
    //           {
    //             id: 4,
    //             text: "test answer 4",
    //           },
    //         ],
    //       },
    //       {
    //         id: 3,
    //         text: "test 3",
    //       }
    //     ],
    //   },
    // };

    // const data = {
    //   quiz: {
    //     questions: [
    //       {
    //         id: 1,
    //         text: "test",
    //         answers: [
    //           {
    //             id: 1,
    //             text: "test answer",
    //           },
    //           { 
    //             id: 2,
    //             text: "test answer 2",
    //           },
    //           {
    //             text: "test answer 6",
    //           }
    //         ],
    //       },
    //       {
    //         id: 2,
    //         text: "test 2",
    //         answers: [
    //           {
    //             text: "test answer 5",
    //           },
    //           {
    //             id: 4,
    //             text: "test answer 4",
    //           }
    //         ],
    //       },
    //     ],
    //   },
    // };

    const defaultValues = {
      quiz: {
        questions: [
          {
            id: 1,
            text: "test",
            answers: [
              {
                id: 1,
                text: "test answer",
              },
              {
                id: 2,
                text: "test answer 2",
              },
            ],
          }
        ],
      },
    };

    const data = {
      quiz: {
        questions: [
          {
            id: 1,
            text: "test",
            answers: [
              {
                id: 1,
                text: "test answer",
              }
            ],
          },
        ],
      },
    };

    console.log("defaultValues", JSON.stringify(defaultValues, null, 2));
    console.log("data", JSON.stringify(data, null, 2));

    transformData(defaultValues, data);
  });
});
