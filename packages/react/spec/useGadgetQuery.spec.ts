import { renderHook } from "@testing-library/react";
import { gql } from "urql";
import { useGadgetQuery } from "../src/useGadgetQuery.js";
import { noProviderErrorMessage } from "../src/utils.js";
import { relatedProductsApi } from "./apis.js";
import { TestWrapper, mockUrqlClient } from "./testWrapper.js";

describe("useGadgetQuery", () => {
  test("throw error when no provider included", () => {
    try {
      renderHook(() => useGadgetQuery({ query: "{__typename}" }));
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(noProviderErrorMessage);
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
      { wrapper: TestWrapper(relatedProductsApi) }
    );

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("gadgetMeta", {
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
      { wrapper: TestWrapper(relatedProductsApi) }
    );

    // first render never completes as the component suspends
    expect(result.current).toBeFalsy();
    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("gadgetMeta", {
      data: {
        gadgetMeta: {
          name: "Test App",
        },
      },
      stale: false,
      hasNext: false,
    });

    // rerender as react would do when the suspense promise resolves
    rerender();

    expect(result.current[0].data.gadgetMeta.name).toEqual("Test App");
    expect(result.current[0].error).toBeFalsy();
  });
});
