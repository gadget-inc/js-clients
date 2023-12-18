import { act, renderHook } from "@testing-library/react";
import { useActionForm, useFieldArray } from "../src/useActionForm.js";
import { nestedExampleApi, simpleExampleApi } from "./apis.js";
import { MockClientWrapper } from "./testWrappers.js";

describe("test", () => {
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
        useActionForm(simpleExampleApi.quiz.update, {
          findBy: "168",
          select: {
            id: true,
            text: true,
          },
        }),
      {
        wrapper: MockClientWrapper(nestedExampleApi),
      }
    );

    await act(async () => {
        useActionFormHook.current.setValue("", "new quiz title")
    });
  });

  test("can update HasMany relationships that are reordered and one is deleted 2", async () => {
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
          },
        }),
      {
        wrapper: MockClientWrapper(nestedExampleApi),
      }
    );

    await act(async () => {
      useActionFormHook.current.setValue("quiz.text", "new quiz title")
    });

    const { result: questionsFieldArrayHook } = renderHook(() => useFieldArray({ control: useActionFormHook.current.control, name: "quiz.questions"})); 

    await act(async () => {
      questionsFieldArrayHook.current.insert(0, { answers: [ { text: "test" }]})
    });
  });
});
