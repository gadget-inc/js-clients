import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useFindBy } from "../src/useFindBy.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

describe("useFindBy", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockFinder: any = {
      type: "findOne",
      operationName: "user",
      findByVariableName: "email",
      modelApiIdentifier: "user",
      defaultSelection: { id: true, email: true },
      namespace: [],
      plan: jest.fn((value, options) => ({
        query: "query user($email: String!) { user(email: $email) { id email } }",
        variables: { email: value },
      })),
      processResult: createMockProcessResult(),
    };

    const [state, refetch] = useFindBy(mockFinder, "test@test.com");

    expect(state.fetching).toBe(true);
    expect(typeof refetch).toBe("function");

    expect(mockFinder.plan).toHaveBeenCalledWith("test@test.com", undefined);
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call plan with the field value", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockFinder: any = {
      type: "findOne",
      operationName: "user",
      findByVariableName: "email",
      modelApiIdentifier: "user",
      defaultSelection: { id: true, email: true },
      namespace: [],
      plan: jest.fn((value, options) => ({
        query: "query user($email: String!) { user(email: $email) { id email } }",
        variables: { email: value },
      })),
      processResult: createMockProcessResult(),
    };

    useFindBy(mockFinder, "alice@example.com");

    expect(mockFinder.plan).toHaveBeenCalledWith("alice@example.com", undefined);
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockFinder: any = {
      type: "findOne",
      operationName: "player",
      findByVariableName: "number",
      modelApiIdentifier: "game.player",
      defaultSelection: { id: true, number: true },
      namespace: ["game"],
      plan: jest.fn((value, options) => ({
        query: "query player($number: Int!) { game { player(number: $number) { id number } } }",
        variables: { number: value },
      })),
      processResult: createMockProcessResult(),
    };

    useFindBy(mockFinder, "23");

    expect(mockFinder.plan).toHaveBeenCalledWith("23", undefined);
  });

  it("should pass options to the query", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockFinder: any = {
      type: "findOne",
      operationName: "user",
      findByVariableName: "email",
      modelApiIdentifier: "user",
      defaultSelection: { id: true, email: true },
      namespace: [],
      plan: jest.fn((value, options) => ({
        query: "query user($email: String!) { user(email: $email) { id } }",
        variables: { email: value },
      })),
      processResult: createMockProcessResult(),
    };

    useFindBy(mockFinder, "test@test.com", { select: { id: true }, pause: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ pause: true });

    expect(mockFinder.plan).toHaveBeenCalledWith("test@test.com", { select: { id: true }, pause: true });
  });
});
