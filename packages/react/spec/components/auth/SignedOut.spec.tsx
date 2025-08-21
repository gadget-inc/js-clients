import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React, { act } from "react";
import { SignedOut } from "../../../src/auth/SignedOut.js";
import { fullAuthApi } from "../../apis.js";
import { MockClientWrapper } from "../../testWrappers.js";
import { expectMockDeletedUser, expectMockSignedInUser, expectMockSignedOutUser } from "../../utils.js";

describe("SignedOut", () => {
  test("renders children when signed out", async () => {
    const component = (
      <h1>
        Hello<SignedOut>, Jane!</SignedOut>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockSignedOutUser();
    });

    rerender(component);
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
  });

  test("renders children when there exists no associated user for the session", async () => {
    const component = (
      <h1>
        Hello<SignedOut>, Jane!</SignedOut>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockDeletedUser();
    });

    rerender(component);
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
  });

  test("renders nothing when signed in", async () => {
    const component = (
      <h1>
        Hello<SignedOut>, Jane!</SignedOut>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockSignedInUser();
    });

    rerender(component);
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello</h1></div>"`);
  });
});
