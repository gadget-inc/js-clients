import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { SignedInOrRedirect } from "../../../src/auth/SignedInOrRedirect.js";
import { fullAuthApi } from "../../apis.js";
import { MockClientWrapper } from "../../testWrappers.js";
import { expectMockDeletedUser, expectMockSignedInUser, expectMockSignedOutUser } from "../../utils.js";

describe("SignedInOrRedirect", () => {
  describe.each([true, false])("using custom navigate: %s", (customNavigate) => {
    const { location } = window;
    const mockNavigate = jest.fn();

    beforeAll(() => {
      // @ts-expect-error mock
      delete window.location;

      if (!customNavigate) {
        // @ts-expect-error mock
        window.location = { assign: mockNavigate, origin: "https://test-app.gadget.app", pathname: "/" };
      } else {
        // @ts-expect-error mock
        window.location = { origin: "https://test-app.gadget.app", pathname: "/" };
      }
    });

    afterEach(() => {
      mockNavigate.mockClear();
    });

    afterAll(() => {
      if (!customNavigate) {
        window.location = location;
      }
    });

    test("redirects when signed out", () => {
      const component = (
        <h1>
          <SignedInOrRedirect>Hello, Jane!</SignedInOrRedirect>
        </h1>
      );

      const { rerender } = render(component, {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedOutUser();
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/?redirectTo=%2F");
    });

    test("redirects when signed out and a signInPath is provided in the auth context", () => {
      const component = (
        <h1>
          <SignedInOrRedirect>Hello, Jane!</SignedInOrRedirect>
        </h1>
      );

      const { rerender } = render(component, {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          auth: { signInPath: "sign-in" },
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedOutUser();
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/sign-in?redirectTo=%2F");
    });

    test("redirects when signed out and a signInPath is provided in the auth context and an override path is provided", () => {
      const component = (
        <h1>
          <SignedInOrRedirect path="custom-sign-in">Hello, Jane!</SignedInOrRedirect>
        </h1>
      );

      const { rerender } = render(component, {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          auth: { signInPath: "sign-in" },
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedOutUser();
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/custom-sign-in?redirectTo=%2F");
    });

    test("redirects when signed in but has no associated user", () => {
      const component = (
        <h1>
          <SignedInOrRedirect>Hello, Jane!</SignedInOrRedirect>
        </h1>
      );

      const { rerender } = render(component, {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockDeletedUser();
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/?redirectTo=%2F");
    });

    test("renders when signed in", () => {
      const component = (
        <h1>
          <SignedInOrRedirect>Hello, Jane!</SignedInOrRedirect>
        </h1>
      );

      const { container, rerender } = render(component, {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedInUser();
      rerender(component);

      expect(mockNavigate).toBeCalledTimes(1);
      expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1 style="">Hello, Jane!</h1></div>"`);
    });
  });
});
