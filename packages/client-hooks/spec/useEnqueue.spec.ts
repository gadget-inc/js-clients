import type { AnyBackgroundActionHandle, AnyErrorWrapper } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { createHooks } from "../src/createHooks.js";
import { useEnqueue } from "../src/useEnqueue.js";
import { bulkExampleApi, kitchenSinkApi, relatedProductsApi } from "./apis.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useEnqueue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const _TestUseEnqueueCanRunUpdateActionsWithVariables = () => {
    type _x = (typeof relatedProductsApi.user.update)["variablesType"];

    const [_, enqueue] = useEnqueue(relatedProductsApi.user.update);

    // can call with variables
    void enqueue({ id: "123", user: { email: "foo@bar.com" } });

    // can call with no model variables
    void enqueue({ id: "123" });

    // @ts-expect-error can't call with no arguments
    void enqueue();

    // @ts-expect-error can't call with no id
    void enqueue({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue({ foo: "123" });
  };

  const _TestUseEnqueueCanRunCreateActionsWithVariables = () => {
    const [_, enqueue] = useEnqueue(relatedProductsApi.user.create);

    // can call with variables
    void enqueue({ user: { email: "foo@bar.com" } });

    // can call with no model variables
    void enqueue({});

    // can call with no variables at all
    void enqueue();

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue({ foo: "123" });
  };

  const _TestUseEnqueueCanRunWithoutModelApiIdentifier = () => {
    const [_, enqueue] = useEnqueue(relatedProductsApi.unambiguous.update);

    // can call using flat style
    void enqueue({ id: "123", numberField: 654, stringField: "foo" });

    // can call using old style
    void enqueue({ id: "123", unambiguous: { numberField: 321, stringField: "bar" } });

    // @ts-expect-error can't call with no arguments
    void enqueue();

    // @ts-expect-error can't call with no id
    void enqueue({});
  };

  const _TestUseEnqueueCannotRunWithoutModelApiIdentifier = () => {
    const [_, enqueue] = useEnqueue(relatedProductsApi.ambiguous.update);

    // @ts-expect-error models with ambigous identifiers can't be called with flat style signature
    void enqueue({ id: "123", booleanField: true });

    // old style signature is always valid
    void enqueue({ id: "123", ambiguous: { booleanField: true } });

    // @ts-expect-error can't call with no arguments
    void enqueue();

    // @ts-expect-error can't call with no id
    void enqueue({});
  };

  const _TestUseEnqueueCanRunNamespacedActions = () => {
    const [_, enqueue] = useEnqueue(kitchenSinkApi.game.player.create);

    // can call with variables
    void enqueue({ player: { name: "Paige Buckets" } });

    // can call with no model variables
    void enqueue({});

    // can call with no variables at all
    void enqueue();

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue({ foo: "123" });
  };

  const _TestUseEnqueueCanRunBulkActionsWithIds = () => {
    const [{ handles: _handles }, enqueue] = useEnqueue(bulkExampleApi.widget.bulkFlipDown);

    // can call with variables
    void enqueue({ ids: ["1", "2", "3"] });

    // @ts-expect-error can't call with no variables at all
    void enqueue();

    // @ts-expect-error can't call with empty variables
    void enqueue({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue({ foo: "123" });
  };

  const _TestUseEnqueueCanRunBulkCreateActionsWithModelObjects = () => {
    const [_, enqueue] = useEnqueue(bulkExampleApi.widget.bulkCreate);

    // can call with flattened variables
    void enqueue([{ name: "foo" }, { name: "bar" }]);

    // can call with fully qualified variables
    void enqueue([{ widget: { name: "foo" } }, { widget: { name: "bar" } }]);

    // @ts-expect-error can't call with no variables at all
    void enqueue();

    // @ts-expect-error can't call with empty variables
    void enqueue({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue([{ foo: "123" }]);
  };

  const _TestUseEnqueueCanRunBulkUpdateActionsWithModelObjects = () => {
    const [_, enqueue] = useEnqueue(bulkExampleApi.widget.bulkUpdate);

    // can call with flattened variables
    void enqueue([
      { id: "1", name: "foo" },
      { id: "2", name: "bar" },
    ]);

    // can call with fully qualified variables
    void enqueue([
      { id: "1", widget: { name: "foo" } },
      { id: "2", widget: { name: "bar" } },
    ]);

    // @ts-expect-error can't call with no variables at all
    void enqueue();

    // @ts-expect-error can't call with empty variables
    void enqueue({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue([{ foo: "123" }]);
  };

  const _TestUseEnqueueReturnsTypedHandle = () => {
    const [{ handle, fetching, error }, _enqueue] = useEnqueue(relatedProductsApi.user.update);

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<
      IsExact<
        typeof handle,
        null | AnyBackgroundActionHandle<(typeof relatedProductsApi.user.update)["schemaType"], typeof relatedProductsApi.user.update>
      >
    >(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (handle) {
      handle.id;
    }
  };

  const _TestUseEnqueueBulkReturnsTypedHandle = async () => {
    const [{ handles, fetching, error }, _enqueue] = useEnqueue(relatedProductsApi.user.bulkUpdate);

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<
      IsExact<
        typeof handles,
        | AnyBackgroundActionHandle<(typeof relatedProductsApi.user.bulkUpdate)["schemaType"], typeof relatedProductsApi.user.bulkUpdate>[]
        | null
      >
    >(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    const handle = handles?.[0];

    // data is accessible via dot access
    if (handle) {
      handle.id;
    }
  };

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    connection.enqueue = {
      plan: jest.fn((action, options) => ({
        query: "mutation enqueueCreateUser { background { createUser { backgroundAction { id } } } }",
        variables: {},
      })),
      processOptions: jest.fn((options) => options),
      processResult: jest.fn((action, data, error) => ({ handle: null, error })),
      createHandle: jest.fn((action, id) => ({ id })),
    } as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "createUser",
      modelApiIdentifier: "user",
      namespace: [],
      variables: {},
      isBulk: false,
    };

    const [state, execute] = useEnqueue(mockAction);

    expect(state.fetching).toBe(false);
    expect((state as any).handle).toBeNull();
    expect(typeof execute).toBe("function");

    expect(connection.enqueue.plan).toHaveBeenCalledWith(mockAction);
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });

  it("should handle bulk actions", () => {
    const connection = createMockConnection();
    connection.enqueue = {
      plan: jest.fn((action, options) => ({
        query: "mutation enqueueBulkCreateUsers { background { bulkCreateUsers { backgroundActions { id } } } }",
        variables: {},
      })),
      processOptions: jest.fn((options) => options),
      processResult: jest.fn((action, data, error) => ({ handles: null, error })),
      createHandle: jest.fn((action, id) => ({ id })),
    } as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "bulkAction",
      operationName: "bulkCreateUsers",
      modelApiIdentifier: "user",
      namespace: [],
      variables: {},
      isBulk: true,
    };

    const [state] = useEnqueue(mockAction);

    expect((state as any).handles).toBeNull();
    expect(connection.enqueue.plan).toHaveBeenCalledWith(mockAction);
  });

  it("should handle namespaced actions", () => {
    const connection = createMockConnection();
    connection.enqueue = {
      plan: jest.fn((action, options) => ({
        query: "mutation enqueueCreatePlayer { background { game { createPlayer { backgroundAction { id } } } } }",
        variables: {},
      })),
      processOptions: jest.fn((options) => options),
      processResult: jest.fn((action, data, error) => ({ handle: null, error })),
      createHandle: jest.fn((action, id) => ({ id })),
    } as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "createPlayer",
      modelApiIdentifier: "game.player",
      namespace: ["game"],
      variables: {},
      isBulk: false,
    };

    useEnqueue(mockAction);

    expect(connection.enqueue.plan).toHaveBeenCalledWith(mockAction);
  });

  it("should return enqueue function", () => {
    const connection = createMockConnection();
    connection.enqueue = {
      plan: jest.fn((operationName, variables, namespace, id, isBulk) => ({
        query: "mutation enqueueUpdateUser { background { updateUser { backgroundAction { id } } } }",
        variables: {},
      })),
      processOptions: jest.fn((options) => options),
      processResult: jest.fn((action, data, error) => ({ handle: null, error })),
      createHandle: jest.fn((action, id) => ({ id })),
    } as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "updateUser",
      modelApiIdentifier: "user",
      namespace: [],
      variables: {},
      isBulk: false,
      variablesType: {} as any,
    };

    const [, enqueue] = useEnqueue(mockAction);

    expect(typeof enqueue).toBe("function");
  });

  it("should support background options", () => {
    const connection = createMockConnection();
    connection.enqueue = {
      plan: jest.fn((action, options) => ({
        query: "mutation enqueueCreateUser { background { createUser { backgroundAction { id } } } }",
        variables: {},
      })),
      processOptions: jest.fn((options) => options),
      processResult: jest.fn((action, data, error) => ({ handle: null, error })),
      createHandle: jest.fn((action, id) => ({ id })),
    } as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "createUser",
      modelApiIdentifier: "user",
      namespace: [],
      variables: {},
      isBulk: false,
    };

    const baseOptions = { queue: "priority" };
    useEnqueue(mockAction, baseOptions);

    expect(connection.enqueue.plan).toHaveBeenCalledWith(mockAction);
  });
});
