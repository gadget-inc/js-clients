import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { SignedOut } from "../../../src/auth/SignedOut.js";
import { fullAuthApi } from "../../apis.js";
import { MockClientWrapper } from "../../testWrappers.js";
import { expectMockDeletedUser, expectMockSignedInUser, expectMockSignedOutUser } from "../../utils.js";

describe("SignedOut", () => {
  test("renders children when signed out", () => {
    const component = (
      <h1>
        Hello<SignedOut>, Jane!</SignedOut>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    expectMockSignedOutUser();

    rerender(component);
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1 style="">Hello, Jane!</h1></div>"`);
  });

  test("renders children when there exists no associated user for the session", () => {
    const component = (
      <h1>
        Hello<SignedOut>, Jane!</SignedOut>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    expectMockDeletedUser();

    rerender(component);
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1 style="">Hello, Jane!</h1></div>"`);
  });

  test("renders nothing when signed in", () => {
    const component = (
      <h1>
        Hello<SignedOut>, Jane!</SignedOut>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    expectMockSignedInUser();

    rerender(component);
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1 style="">Hello</h1></div>"`);
  });
});
