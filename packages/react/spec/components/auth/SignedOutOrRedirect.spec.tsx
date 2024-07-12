import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { SignedOutOrRedirect } from "../../../src/auth/SignedOutOrRedirect.js";
import { fullAuthApi } from "../../apis.js";
import { MockClientWrapper } from "../../testWrappers.js";
import { expectMockSignedInUser, expectMockSignedOutUser } from "../../utils.js";

describe("SignedOutOrRedirect", () => {
  describe.each([true, false])("using custom navigate: %s", (customNavigate) => {
    const mockNavigate = jest.fn();
    const { location } = window;

    beforeAll(() => {
      // @ts-expect-error mock
      delete window.location;

      if (!customNavigate) {
        // @ts-expect-error mock
        window.location = { assign: mockNavigate, origin: "https://test-app.gadget.app", pathname: "/" };
      } else {
        // @ts-expect-error mock
        window.location = { origin: "https://test-app.gadget.app" };
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

    test("redirects when signed in", () => {
      const component = (
        <h1>
          <SignedOutOrRedirect>Hello, Jane!</SignedOutOrRedirect>
        </h1>
      );

      const { rerender } = render(component, {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedInUser();
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });

    test("redirects when signed in and a redirectOnSuccessfulSignInPath has been provided", () => {
      const component = (
        <h1>
          <SignedOutOrRedirect>Hello, Jane!</SignedOutOrRedirect>
        </h1>
      );

      const { rerender } = render(component, {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          auth: { redirectOnSuccessfulSignInPath: "/signed-in" },
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedInUser();
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/signed-in");
    });

    test("redirects when signed in and a redirectOnSuccessfulSignInPath has been provided and has been overriden", () => {
      const component = (
        <h1>
          <SignedOutOrRedirect path="/my-custom-path">Hello, Jane!</SignedOutOrRedirect>
        </h1>
      );

      const { rerender } = render(component, {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          auth: { redirectOnSuccessfulSignInPath: "/signed-in" },
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedInUser();
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/my-custom-path");
    });

    test("redirects after signing in to the redirect path", () => {
      window.location.search = "?redirectTo=%2Fredirect-me";
      const component = (
        <h1>
          <SignedOutOrRedirect>Hello, Jane!</SignedOutOrRedirect>
        </h1>
      );

      const { rerender } = render(component, {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          auth: { redirectOnSuccessfulSignInPath: "/signed-in" },
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedInUser();
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/redirect-me");
    });

    test("renders when signed out", () => {
      const component = (
        <h1>
          <SignedOutOrRedirect>Hello, Jane!</SignedOutOrRedirect>
        </h1>
      );

      const { container, rerender } = render(component, {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedOutUser();
      rerender(component);

      expect(mockNavigate).not.toBeCalled();
      expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
    });
  });
});
