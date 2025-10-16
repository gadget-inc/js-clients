import { hookErrorMessage } from "@gadgetinc/client-hooks";
import { act, renderHook } from "@testing-library/react";
import { gql } from "urql";
import { useQuery as useGadgetQuery } from "../src/hooks.js";
import { relatedProductsApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useGadgetQuery", () => {
  test("throw error when no provider included", () => {
    try {
      renderHook(() => useGadgetQuery({ query: "{__typename}" }));
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(hookErrorMessage("useQuery"));
    }
  });

  test("can query data, not using suspense by default", async () => {
    const { result } = renderHook(
      () =>
        useGadgetQuery({
          query: gql`
            query {
              gadgetMeta {
                name
              }
            }
          `,
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    await mockUrqlClient.executeQuery.pushResponse("gadgetMeta", {
      data: {
        gadgetMeta: {
          name: "Test App",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data.gadgetMeta.name).toEqual("Test App");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can query data using suspense when opted in", async () => {
    const { result, rerender } = renderHook(
      () =>
        useGadgetQuery({
          query: gql`
            query {
              gadgetMeta {
                name
              }
            }
          `,
          suspense: true,
        }),
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    // first render never completes as the component suspends
    expect(result.current).toBeFalsy();

    await act(async () => {
      await mockUrqlClient.executeQuery.waitForSubject("gadgetMeta");
      await mockUrqlClient.executeQuery.pushResponse("gadgetMeta", {
        data: {
          gadgetMeta: {
            name: "Test App",
          },
        },
        stale: false,
        hasNext: false,
      });
    });

    // rerender as react would do when the suspense promise resolves
    rerender();

    expect(result.current[0].data.gadgetMeta.name).toEqual("Test App");
    expect(result.current[0].error).toBeFalsy();
  });
});
