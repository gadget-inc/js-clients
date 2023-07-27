import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { SignedOutOrRedirect } from "../../../src/components/auth/SignedOutOrRedirect";
import { superAuthApi } from "../../apis";
import { TestWrapper } from "../../testWrapper";
import { expectMockSignedInUser, expectMockSignedOutUser } from "../../utils";

describe("SignedOutOrRedirect", () => {
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

  test("redirects when signed in", () => {
    const component = (
      <h1>
        <SignedOutOrRedirect path="/signed-in">Hello, Jane!</SignedOutOrRedirect>
      </h1>
    );

    const { rerender } = render(component, { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedInUser();
    rerender(component);

    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("https://test-app.gadget.app/signed-in");
  });

  test("renders when signed out", () => {
    const component = (
      <h1>
        <SignedOutOrRedirect path="/signed-in">Hello, Jane!</SignedOutOrRedirect>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedOutUser();
    rerender(component);

    expect(mockAssign).not.toBeCalled();
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
  });
});
