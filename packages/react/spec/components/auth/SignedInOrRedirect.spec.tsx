import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React, { act } from "react";
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

    test("redirects when signed out", async () => {
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

      await act(async () => {
        await expectMockSignedOutUser();
      });
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/?redirectTo=%2F");
    });

    test("redirects when signed out and a signInPath is provided in the auth context", async () => {
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

      await act(async () => {
        await expectMockSignedOutUser();
      });
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/sign-in?redirectTo=%2F");
    });

    test("redirects when signed out and a signInPath is provided in the auth context and an override path is provided", async () => {
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

      await act(async () => {
        await expectMockSignedOutUser();
      });
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/custom-sign-in?redirectTo=%2F");
    });

    test("redirects when signed in but has no associated user", async () => {
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

      await act(async () => {
        await expectMockDeletedUser();
      });
      rerender(component);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/?redirectTo=%2F");
    });

    test("renders when signed in", async () => {
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

      await act(async () => {
        await expectMockSignedInUser();
      });
      rerender(component);

      expect(mockNavigate).not.toBeCalled();
      expect(container.outerHTML).toMatchInlineSnapshot(`"<div><h1>Hello, Jane!</h1></div>"`);
    });
  });
});
