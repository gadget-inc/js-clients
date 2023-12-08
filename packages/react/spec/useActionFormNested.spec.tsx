import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import XHRAdapter from "@pollyjs/adapter-xhr";
import FSPersister from "@pollyjs/persister-fs";
import { renderHook, waitFor } from "@testing-library/react";
import { setupPolly } from "setup-polly-jest";
import { useActionForm } from "../src/useActionForm.js";
import { nestedExampleApi } from "./apis.js";
import { LiveClientWrapper } from "./testWrappers.js";

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
  const context = setupPolly({
    recordIfMissing: true,
    adapters: [XHRAdapter, NodeHttpAdapter],
    persister: FSPersister,
  });

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
          "updatedAt": "2023-12-08T16:20:18.948Z",
        },
      ]
    `);
  });

  test("update HasMany -> HasMany -> HasOne -> HasOne -> BelongsTo", async () => {
    const { result: useActionFormHook } = renderHook(() => useActionForm(nestedExampleApi.quiz.update, { findBy: "12" }), {
      wrapper: LiveClientWrapper(nestedExampleApi),
    });

    await waitFor(() => expect(useActionFormHook.current.formState.isLoading).toBe(false));

    expect(useActionFormHook.current.getValues()).toMatchInlineSnapshot(`
      {
        "quiz": {
          "__typename": "Quiz",
          "text": "Test Quiz",
        },
      }
    `);

    // await act(async () => {
    //   // useActionFormHook.current.setValue("quiz.text", "test quiz - changed");
    //   // useActionFormHook.current.setValue("quiz.questions.0.answers.0.notification.notificationMessage.notificationMetadata.id", "2");
    // });

    // let submitPromise: Promise<any>;

    // await act(async () => {
    //   submitPromise = useActionFormHook.current.submit();
    // });

    // await act(async () => {
    //   await submitPromise;
    // });

    // expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot();
  });
});
