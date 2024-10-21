import type { MountOptions, MountReturn } from "cypress/react";
import type { ReactNode } from "react";
import React from "react";
import { Provider } from "../../src/index.js";
import "./commands.js";

import { mount } from "cypress/react18";
import { api } from "./api.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      mountWithWrapper: (component: ReactNode, Wrapper: any, options?: MountOptions) => Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add("mount", (component, options = {}) => {
  const wrapped = <Provider api={api}>{component}</Provider>;

  return mount(wrapped, options);
});

Cypress.Commands.add("mountWithWrapper", (component, Wrapper, options = {}) => {
  const wrapped = (
    <Wrapper>
      <Provider api={api}>{component}</Provider>
    </Wrapper>
  );

  return mount(wrapped, options);
});

before(() => {
  cy.window().then((win: any) => {
    win.shopify = {
      environment: {
        embedded: false,
        mobile: false,
        pos: false,
      },
      config: {
        apiKey: "some-api-key",
        shop: "example.myshopify.com",
        locale: "en",
      },
      idToken: () =>
        new Promise((resolve) => {
          resolve("some-id-token");
        }),
      toast: {
        show: (msg: string) => {
          const message = document.createElement("div");
          message.className = "mock-toast";
          message.innerHTML = msg;
          document.body.appendChild(message);
          setTimeout(() => {
            document.body.removeChild(message);
          }, 3000);
        },
      },
    } as any;
  });
});

beforeEach(() => {
  cy.window().then((win) => {
    if (!win) return;
    const mockToasts = win.document.getElementsByClassName("mock-toast");
    while (mockToasts.length > 0) {
      try {
        mockToasts[0].parentNode?.removeChild(mockToasts[0]);
      } catch (e) {
        // don't worry if the element has already been removed or changed parents
      }
    }
  });
});
