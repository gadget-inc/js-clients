import type { AnyErrorWrapper, GadgetRecord } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { createHooks } from "../src/createHooks.js";
import { useBulkAction } from "../src/useBulkAction.js";
import { bulkExampleApi, kitchenSinkApi } from "./apis.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useBulkAction", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // these functions are typechecked but never run to avoid actually making API calls
  const _TestUseBulkActionCanRunActionsWithVariables = () => {
    const [_, mutate] = useBulkAction(bulkExampleApi.widget.bulkFlipDown);

    // can call with variables
    void mutate({ ids: ["123", "124"] });

    // @ts-expect-error can't call with no arguments
    void mutate();

    // @ts-expect-error can't call with no ids
    void mutate({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ foo: "123" });
  };

  const _TestUseBulkActionReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, _mutate] = useBulkAction(bulkExampleApi.widget.bulkFlipDown, {
      select: { id: true, name: true },
    });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; name: string | null }>[]>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    if (data) {
      data[0].id;
      data[0].name;
    }
  };

  const _TestUseActionReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useBulkAction(bulkExampleApi.widget.bulkFlipDown);

    if (data) {
      data[0].id;
      data[0].name;
    }
  };

  const _TestUseBulkActionCanRunNamespacedModelAction = () => {
    const [_, mutate] = useBulkAction(kitchenSinkApi.game.player.bulkUpdate);

    // can call with variables
    void mutate([{ id: "123", name: "new name" }]);

    // @ts-expect-error can't call with no arguments
    void mutate();

    // @ts-expect-error can't call with no ids
    void mutate({});

    // @ts-expect-error can't call with one attributes object
    void mutate({ foo: "123" });

    // @ts-expect-error can't call with array of variables that don't belong to the model
    void mutate([{ foo: "123" }]);
  };

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const action = bulkExampleApi.user.bulkCreate;
    const planSpy = jest.spyOn(action, "plan");

    const [state, execute] = useBulkAction(action);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(typeof execute).toBe("function");

    expect(planSpy).toHaveBeenCalledWith(undefined);
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });

  it("should call plan with options", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const action = bulkExampleApi.user.bulkCreate;
    const planSpy = jest.spyOn(action, "plan");

    const mockOptions = { select: { id: true } };
    useBulkAction(action, mockOptions);

    expect(planSpy).toHaveBeenCalledWith(mockOptions);
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const action = kitchenSinkApi.game.player.bulkCreate;
    const planSpy = jest.spyOn(action, "plan");

    useBulkAction(action);

    expect(planSpy).toHaveBeenCalledWith(undefined);
  });

  it("should return execute function", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const action = bulkExampleApi.user.bulkCreate;

    const [, execute] = useBulkAction(action);

    expect(typeof execute).toBe("function");
  });
});
