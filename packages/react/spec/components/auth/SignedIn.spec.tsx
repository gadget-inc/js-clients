import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import React from "react";
import { SignedIn } from "../../../src/auth/SignedIn.js";
import { fullAuthApi } from "../../apis.js";
import { MockClientWrapper } from "../../testWrappers.js";
import { expectMockDeletedUser, expectMockSignedInUser, expectMockSignedOutUser } from "../../utils.js";

describe("SignedIn", () => {
  test("renders children when signed in", async () => {
    const component = (
      <h1>
        Hello<SignedIn>, Jane!</SignedIn>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockSignedInUser();
    });

    rerender(component);

    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
  });

  test("renders nothing when signed out", async () => {
    const component = (
      <h1>
        Hello<SignedIn>, Jane!</SignedIn>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockSignedOutUser();
    });

    rerender(component);
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello</h1></div>"`);
  });

  test("renders nothing when signed in but has no user on the session", async () => {
    const component = (
      <h1>
        Hello<SignedIn>, Jane!</SignedIn>
      </h1>
    );

    const { container, rerender } = render(component, { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockDeletedUser();
    });

    rerender(component);
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello</h1></div>"`);
  });
});
