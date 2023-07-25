import { $gadgetConnection } from "@gadgetinc/api-client-core";
import { renderHook } from "@testing-library/react";
import { Response } from "cross-fetch";
import { superAuthApi } from "../../spec/apis";
import { TestWrapper, mockUrqlClient } from "../../spec/testWrapper";
import { useSignOut } from "../../src/auth/useSignOut";

describe("useSignOut", () => {
  const { location } = window;
  const mockAssign = jest.fn();

  beforeAll(() => {
    // @ts-expect-error mock
    delete window.location;
    // @ts-expect-error mock
    window.location = { assign: mockAssign, origin: "https://test-app.gadget.app", pathname: "/" };
  });

  afterEach(() => {
    mockAssign.mockClear();
  });

  afterAll(() => {
    window.location = location;
  });

  test("it redirects the browser when called", async () => {
    const { result } = renderHook(() => useSignOut(), { wrapper: TestWrapper(superAuthApi) });

    const promise = result.current();

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual(["/auth/signout", { method: "POST" }]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(
      new Response(null, { status: 302, headers: { location: "https://test-app.gadget.app/signed-out" } })
    );

    await Promise.resolve(promise);
    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("https://test-app.gadget.app/signed-out");
  });
});
