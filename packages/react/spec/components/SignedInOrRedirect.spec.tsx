import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { superAuthApi } from "../../spec/apis";
import { TestWrapper, mockUrqlClient } from "../../spec/testWrapper";
import { SignedInOrRedirect } from "../../src/components/SignedInOrRedirect";

describe("SignedInOrRedirectOrRedirect", () => {
  const { location } = window;
  const mockAssign = jest.fn();

  beforeAll(() => {
    delete window.location;
    window.location = { assign: mockAssign };
  });

  afterEach(() => {
    mockAssign.mockClear();
  });

  afterAll(() => {
    window.location = location;
  });

  test("redirects when signed out", () => {
    const component = (
      <h1>
        <SignedInOrRedirect>Hello, Jane!</SignedInOrRedirect>
      </h1>
    );

    const { rerender } = render(component, { wrapper: TestWrapper(superAuthApi) });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
    mockUrqlClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: {
          id: "123",
          userId: null,
          user: null,
        },
      },
      stale: false,
      hasNext: false,
    });

    rerender(component);
    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("/auth/signin");
  });

  test("renders when signed in", () => {
    const component = (
      <h1>
        <SignedInOrRedirect>Hello, Jane!</SignedInOrRedirect>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: TestWrapper(superAuthApi) });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
    mockUrqlClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: {
          id: "123",
          userId: "321",
          user: {
            id: "321",
            firstName: "Jane",
            lastName: "Doe",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    rerender(component);

    expect(mockAssign).not.toBeCalled();
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
  });
});
