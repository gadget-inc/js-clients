import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useEnqueue } from "../src/useEnqueue.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useEnqueue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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
