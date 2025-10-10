import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useFindBy } from "../src/useFindBy.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

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
    };

    connection.findOneOperation = jest.fn(() => ({
      query: "query user($email: String!) { user(email: $email) { id email } }",
      variables: { email: "test@test.com" },
    }));

    const [state, refetch] = useFindBy(mockFinder, "test@test.com");

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call connection.findOneOperation with the field value", () => {
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
    };

    connection.findOneOperation = jest.fn(() => ({
      query: "query user($email: String!) { user(email: $email) { id email } }",
      variables: { email: "alice@example.com" },
    }));

    useFindBy(mockFinder, "alice@example.com");

    expect(connection.findOneOperation).toHaveBeenCalledWith("user", "alice@example.com", { id: true, email: true }, "user", undefined, []);
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
    };

    connection.findOneOperation = jest.fn(() => ({
      query: "query player($number: Int!) { game { player(number: $number) { id number } } }",
      variables: { number: "23" },
    }));

    useFindBy(mockFinder, "23");

    expect(connection.findOneOperation).toHaveBeenCalledWith("player", "23", { id: true, number: true }, "game.player", undefined, [
      "game",
    ]);
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
    };

    connection.findOneOperation = jest.fn(() => ({
      query: "query user($email: String!) { user(email: $email) { id } }",
      variables: { email: "test@test.com" },
    }));

    useFindBy(mockFinder, "test@test.com", { select: { id: true }, pause: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ pause: true });

    expect(connection.findOneOperation).toHaveBeenCalledWith(
      "user",
      "test@test.com",
      { id: true, email: true },
      "user",
      { select: { id: true }, pause: true },
      []
    );
  });
});
