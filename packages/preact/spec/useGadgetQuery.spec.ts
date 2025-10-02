import { Client } from "@gadget-client/related-products-example";
import { renderHook } from "@testing-library/preact";
import { gql } from "@urql/preact";
import { act } from "preact/test-utils";
import { useQuery as useGadgetQuery } from "../src/hooks.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

const api = new Client({ environment: "Development" });

describe("useGadgetQuery", () => {
  test("can query data", async () => {
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
      { wrapper: MockClientWrapper(api) }
    );

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toHaveBeenCalledTimes(1);

    act(() => {
      mockUrqlClient.executeQuery.pushResponse("gadgetMeta", {
        data: {
          gadgetMeta: {
            name: "Test App",
          },
        },
        stale: false,
        hasNext: false,
      });
    });

    expect(result.current[0].data.gadgetMeta.name).toEqual("Test App");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });
});
