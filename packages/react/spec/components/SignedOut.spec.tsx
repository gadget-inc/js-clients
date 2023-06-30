import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { superAuthApi } from "../../spec/apis";
import { TestWrapper, mockUrqlClient } from "../../spec/testWrapper";
import { SignedOut } from "../../src/components/SignedOut";

describe("SignedOut", () => {
  test("renders children when signed out", () => {
    const component = (
      <h1>
        Hello<SignedOut>, Jane!</SignedOut>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: TestWrapper(superAuthApi) });

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
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
  });

  test("renders nothing when signed in", () => {
    const component = (
      <h1>
        Hello<SignedOut>, Jane!</SignedOut>
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
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello</h1></div>"`);
  });
});
