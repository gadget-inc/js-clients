import { GadgetRecord } from "@gadgetinc/api-client-core";
import { renderHook } from "@testing-library/react";

import { assert, IsExact } from "conditional-type-checks";
import { useAction } from "../src";
import { ErrorWrapper } from "../src/utils";
import { relatedProductsApi } from "./apis";

describe("useAction", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const TestUseActionCanRunActionsWithVariables = () => {
    const [_, mutate] = useAction(relatedProductsApi.user.update);

    // can call with variables
    void mutate({ id: "123", user: { email: "foo@bar.com" } });

    // can call with no model variables
    void mutate({ id: "123" });

    // @ts-expect-error can't call with no arguments
    void mutate();

    // @ts-expect-error can't call with no id
    void mutate({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ foo: "123" });
  };

  const TestUseActionReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, mutate] = useAction(relatedProductsApi.user.update, {
      select: { id: true, email: true },
    });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (data) {
      data.id;
      data.email;
    }
  };

  const TestUseActionReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useAction(relatedProductsApi.user.update);

    if (data) {
      data.id;
      data.email;
    }
  };

  test("returns no data, not fetching, and no error when the component is first mounted", () => {
    const { result } = renderHook(() => useAction(relatedProductsApi.user.update));

    expect(result.current[0].data).toBe(null);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBe(null);
  });
});
