import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { SignedOutOrRedirect } from "../../../src/auth/SignedOutOrRedirect.js";
import { fullAuthApi } from "../../apis.js";
import { MockClientWrapper } from "../../testWrappers.js";
import { expectMockSignedInUser, expectMockSignedOutUser } from "../../utils.js";

describe("SignedOutOrRedirect", () => {
  const { location } = window;
  const mockAssign = jest.fn();

  beforeAll(() => {
    // @ts-expect-error mock
    delete window.location;
    // @ts-expect-error mock
    window.location = { assign: mockAssign, origin: "https://test-app.gadget.app", pathname: "/sign-in" };
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
        <SignedOutOrRedirect>Hello, Jane!</SignedOutOrRedirect>
      </h1>
    );

    const { rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    expectMockSignedInUser();
    rerender(component);

    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("https://test-app.gadget.app/");
  });

  test("redirects when signed in and a redirectOnSuccessfulSignInPath has been provided", () => {
    const component = (
      <h1>
        <SignedOutOrRedirect>Hello, Jane!</SignedOutOrRedirect>
      </h1>
    );

    const { rerender } = render(component, {
      wrapper: MockClientWrapper(fullAuthApi, undefined, { redirectOnSuccessfulSignInPath: "/signed-in" }),
    });

    expectMockSignedInUser();
    rerender(component);

    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("https://test-app.gadget.app/signed-in");
  });

  test("redirects when signed in and a redirectOnSuccessfulSignInPath has been provided and has been overriden", () => {
    const component = (
      <h1>
        <SignedOutOrRedirect path="/my-custom-path">Hello, Jane!</SignedOutOrRedirect>
      </h1>
    );

    const { rerender } = render(component, {
      wrapper: MockClientWrapper(fullAuthApi, undefined, { redirectOnSuccessfulSignInPath: "/signed-in" }),
    });

    expectMockSignedInUser();
    rerender(component);

    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("https://test-app.gadget.app/my-custom-path");
  });

  test("redirects after signing in to the redirect path", () => {
    window.location.search = "?redirectTo=%2Fredirect-me";
    const component = (
      <h1>
        <SignedOutOrRedirect>Hello, Jane!</SignedOutOrRedirect>
      </h1>
    );

    const { rerender } = render(component, {
      wrapper: MockClientWrapper(fullAuthApi, undefined, { redirectOnSuccessfulSignInPath: "/signed-in" }),
    });

    expectMockSignedInUser();
    rerender(component);

    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("https://test-app.gadget.app/redirect-me");
  });

  test("renders when signed out", () => {
    const component = (
      <h1>
        <SignedOutOrRedirect>Hello, Jane!</SignedOutOrRedirect>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    expectMockSignedOutUser();
    rerender(component);

    expect(mockAssign).not.toBeCalled();
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
  });
});
