import { act, renderHook } from "@testing-library/react";
import { gql } from "urql";
import { useMutation as useGadgetMutation } from "../src/hooks.js";
import { relatedProductsApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useGadgetMutation", () => {
  test("throw error when no provider included", () => {
    try {
      renderHook(() => useGadgetMutation("{__typename}"));
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        `You are attempting to use the useMutation hook, but you are not calling it from a component that is wrapped in a Gadget <Provider/> component. Please ensure you are wrapping this hook with the <Provider/> component from either @gadgetinc/react or @gadgetinc/preact.`
      );
    }
  });

  test("can mutate data, not using suspense by default", async () => {
    const { result } = renderHook(
      () =>
        useGadgetMutation(
          gql`
            mutation ($id: ID!, $post: PostInput!) {
              createPost(id: $id, post: $post) {
                success
                post {
                  id
                }
              }
            }
          `
        ),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(mockUrqlClient.executeMutation).toBeCalledTimes(0);

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", post: { title: "example" } });
    });

    mockUrqlClient.executeMutation.pushResponse("createPost", {
      data: {
        createPost: {
          success: true,
          post: {
            id: "123",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.createPost.success).toEqual(true);
      expect(promiseResult.data!.createPost.post.id).toEqual("123");
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].data.createPost.success).toEqual(true);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can mutate data using suspense when opted in", async () => {
    const { result } = renderHook(
      () =>
        useGadgetMutation(
          gql`
            mutation ($id: ID!, $post: PostInput!) {
              createPost(id: $id, post: $post) {
                success
                post {
                  id
                }
              }
            }
          `
        ),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(mockUrqlClient.executeMutation).toBeCalledTimes(0);

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", post: { title: "example" } }, { suspense: true });
    });

    mockUrqlClient.executeMutation.pushResponse("createPost", {
      data: {
        createPost: {
          success: true,
          post: {
            id: "123",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.createPost.success).toEqual(true);
      expect(promiseResult.data!.createPost.post.id).toEqual("123");
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].data.createPost.success).toEqual(true);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });
});
