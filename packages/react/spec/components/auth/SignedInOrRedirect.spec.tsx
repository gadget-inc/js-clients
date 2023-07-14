import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { superAuthApi } from "../../../spec/apis";
import { TestWrapper } from "../../../spec/testWrapper";
import { expectMockDeletedUser, expectMockSignedInUser, expectMockSignedOutUser } from "../../../spec/utils";
import { SignedInOrRedirect } from "../../../src/components/auth/SignedInOrRedirect";

describe("SignedInOrRedirect", () => {
  const { location } = window;
  const mockAssign = jest.fn();

  beforeAll(() => {
    // @ts-expect-error mock
    delete window.location;
    // @ts-expect-error mock
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

    expectMockSignedOutUser();
    rerender(component);

    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("/auth/signin");
  });

  test("redirects when signed in but has no associated user", () => {
    const component = (
      <h1>
        <SignedInOrRedirect>Hello, Jane!</SignedInOrRedirect>
      </h1>
    );

    const { rerender } = render(component, { wrapper: TestWrapper(superAuthApi) });

    expectMockDeletedUser();
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

    expectMockSignedInUser();
    rerender(component);

    expect(mockAssign).not.toBeCalled();
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
  });
});
