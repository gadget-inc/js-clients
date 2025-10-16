import type { AnyErrorWrapper, GadgetRecord } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import { assert, type IsExact } from "conditional-type-checks";
import { createHooks } from "../src/createHooks.js";
import { useFindBy } from "../src/useFindBy.js";
import { kitchenSinkApi, relatedProductsApi } from "./apis.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useFindBy", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // these functions are typechecked but never run to avoid actually making API calls
  const _TestFindByReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useFindBy(relatedProductsApi.user.findByEmail, "hello@gadget.dev", {
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

    // hook return value includes the urql refresh function
    refresh();
  };

  const _TestFindByReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useFindBy(relatedProductsApi.user.findByEmail, "hello@gadget.dev");

    if (data) {
      data.id;
      data.email;
    }
  };

  const _TestFindByCanFindNamespacedModels = () => {
    const [{ data }] = useFindBy(kitchenSinkApi.game.player.findByName, "Caitlin Clark");

    if (data) {
      data.id;
      data.name;
    }
  };

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const finder = relatedProductsApi.user.findByEmail;
    const planSpy = jest.spyOn(finder, "plan");
    const [state, refetch] = useFindBy(finder, "test@test.com");

    expect(state.fetching).toBe(true);
    expect(typeof refetch).toBe("function");

    expect(planSpy).toHaveBeenCalledWith("test@test.com", undefined);
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call plan with the field value", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const finder = relatedProductsApi.user.findByEmail;
    const planSpy = jest.spyOn(finder, "plan");
    useFindBy(finder, "alice@example.com");

    expect(planSpy).toHaveBeenCalledWith("alice@example.com", undefined);
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const finder = kitchenSinkApi.game.player.findByName;
    const planSpy = jest.spyOn(finder, "plan");
    useFindBy(finder, "23");

    expect(planSpy).toHaveBeenCalledWith("23", undefined);
  });

  it("should pass options to the query", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const finder = relatedProductsApi.user.findByEmail;
    const planSpy = jest.spyOn(finder, "plan");

    useFindBy(finder, "test@test.com", { select: { id: true }, pause: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ pause: true });

    expect(planSpy).toHaveBeenCalledWith("test@test.com", { select: { id: true }, pause: true });
  });
});
