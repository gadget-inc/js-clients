import type { AnyErrorWrapper, GadgetRecord } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { createHooks } from "../src/createHooks.js";
import { useAction } from "../src/useAction.js";
import { kitchenSinkApi, relatedProductsApi } from "./apis.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useAction", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // these functions are typechecked but never run to avoid actually making API calls
  const _TestUseActionCanRunUpdateActionsWithVariables = () => {
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

  const _TestUseActionCanRunCreateActionsWithVariables = () => {
    const [_, mutate] = useAction(relatedProductsApi.user.create);

    // can call with variables
    void mutate({ user: { email: "foo@bar.com" } });

    // can call with no model variables
    void mutate({});

    // can call with no variables at all
    void mutate();

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ foo: "123" });
  };

  const _TestUseActionCanRunWithoutModelApiIdentifier = () => {
    const [_, mutate] = useAction(relatedProductsApi.unambiguous.update);

    // can call using flat style
    void mutate({ id: "123", numberField: 654, stringField: "foo" });

    // can call using old style
    void mutate({ id: "123", unambiguous: { numberField: 321, stringField: "bar" } });

    // @ts-expect-error can't call with no arguments
    void mutate();

    // @ts-expect-error can't call with no id
    void mutate({});
  };

  const _TestUseActionCannotRunWithoutModelApiIdentifier = () => {
    const [_, mutate] = useAction(relatedProductsApi.ambiguous.update);

    // @ts-expect-error models with ambigous identifiers can't be called with flat style signature
    void mutate({ id: "123", booleanField: true });

    // old style signature is always valid
    void mutate({ id: "123", ambiguous: { booleanField: true } });

    // @ts-expect-error can't call with no arguments
    void mutate();

    // @ts-expect-error can't call with no id
    void mutate({});
  };

  const _TestUseActionReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, _mutate] = useAction(relatedProductsApi.user.update, {
      select: { id: true, email: true },
    });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (data) {
      data.id;
      data.email;
    }
  };

  const _TestUseActionReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useAction(relatedProductsApi.user.update);

    if (data) {
      data.id;
      data.email;
    }
  };

  const _TestUseActionCanRunAgainstNamespacedModel = () => {
    const [_, mutate] = useAction(kitchenSinkApi.game.player.update);

    // can call with variables
    void mutate({ id: "123", player: { name: "Caitlin Clark" } });

    // can call with no model variables
    void mutate({ id: "123" });

    // @ts-expect-error can't call with no arguments
    void mutate();

    // @ts-expect-error can't call with no id
    void mutate({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ foo: "123" });
  };

  const _TestUseActionCanRunAgainstDeeplyNamespacedModel = () => {
    const [_, mutate] = useAction(kitchenSinkApi.game.inner.test.create);

    // can call with variables
    void mutate({ test: { foo: "bar" } });

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ notAProp: "123" });
  };

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const action = relatedProductsApi.user.create;
    const planSpy = jest.spyOn(action, "plan");
    const [state, execute] = useAction(action);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeNull();
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

    const action = relatedProductsApi.user.update;
    const planSpy = jest.spyOn(action, "plan");
    const mockOptions = { select: { id: true } };
    useAction(action, mockOptions);

    expect(planSpy).toHaveBeenCalledWith(mockOptions);
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const action = kitchenSinkApi.game.player.update;
    const planSpy = jest.spyOn(action, "plan");

    useAction(action);

    expect(planSpy).toHaveBeenCalledWith(undefined);
  });

  it("should return execute function", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const action = relatedProductsApi.user.create;

    const [, execute] = useAction(action);

    expect(typeof execute).toBe("function");
  });
});
