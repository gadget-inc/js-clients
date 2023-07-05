import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { superAuthApi } from "../../../spec/apis";
import { TestWrapper } from "../../../spec/testWrapper";
import { expectMockSignedInUser, expectMockSignedOutUser } from "../../../spec/utils";
import { SignedOut } from "../../../src/components/auth/SignedOut";

describe("SignedOut", () => {
  test("renders children when signed out", () => {
    const component = (
      <h1>
        Hello<SignedOut>, Jane!</SignedOut>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedOutUser();

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

    expectMockSignedInUser();

    rerender(component);
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello</h1></div>"`);
  });
});
