import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { SignedInOrRedirect } from "../../../src/components/auth/SignedInOrRedirect.js";
import { superAuthApi } from "../../apis.js";
import { MockClientWrapper } from "../../testWrappers.js";
import { expectMockDeletedUser, expectMockSignedInUser, expectMockSignedOutUser } from "../../utils.js";

describe("SignedInOrRedirect", () => {
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

  test("redirects when signed out", () => {
    const component = (
      <h1>
        <SignedInOrRedirect>Hello, Jane!</SignedInOrRedirect>
      </h1>
    );

    const { rerender } = render(component, { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedOutUser();
    rerender(component);

    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("https://test-app.gadget.app/?redirectTo=%2F");
  });

  test("redirects when signed in but has no associated user", () => {
    const component = (
      <h1>
        <SignedInOrRedirect>Hello, Jane!</SignedInOrRedirect>
      </h1>
    );

    const { rerender } = render(component, { wrapper: MockClientWrapper(superAuthApi) });

    expectMockDeletedUser();
    rerender(component);

    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("https://test-app.gadget.app/?redirectTo=%2F");
  });

  test("renders when signed in", () => {
    const component = (
      <h1>
        <SignedInOrRedirect>Hello, Jane!</SignedInOrRedirect>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedInUser();
    rerender(component);

    expect(mockAssign).not.toBeCalled();
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
  });
});
