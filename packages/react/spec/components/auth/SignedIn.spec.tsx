import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { SignedIn } from "../../../src/components/auth/SignedIn";
import { superAuthApi } from "../../apis";
import { TestWrapper } from "../../testWrapper";
import { expectMockSignedInUser, expectMockSignedOutUser } from "../../utils";

describe("SignedIn", () => {
  test("renders children when signed in", () => {
    const component = (
      <h1>
        Hello<SignedIn>, Jane!</SignedIn>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedInUser();

    rerender(component);

    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
  });

  test("renders nothing when signed out", () => {
    const component = (
      <h1>
        Hello<SignedIn>, Jane!</SignedIn>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedOutUser();
    rerender(component);
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello</h1></div>"`);
  });
});
