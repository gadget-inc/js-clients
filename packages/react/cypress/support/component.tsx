import type { MountOptions, MountReturn } from "cypress/react";
import type { ReactNode } from "react";
import React from "react";
import { Provider } from "../../src/index.js";
import "./commands.js";
import "./cypress.css";

import { mount } from "cypress/react";
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
            try {
              document.body.removeChild(message);
            } catch (e) {
              // don't worry if the element has already been removed or changed parents
            }
          }, 3000);
        },
      },
    } as any;
  });

  // Load Polaris web components script if needed and wait for it to be ready
  cy.window().then((win: any) => {
    const existingScript = win.document.querySelector('script[src="https://cdn.shopify.com/shopifycloud/polaris.js"]');

    if (!existingScript) {
      return new Cypress.Promise<void>((resolve) => {
        const script = win.document.createElement("script");
        script.src = "https://cdn.shopify.com/shopifycloud/polaris.js";
        script.async = true;
        script.onload = () => {
          // Wait for custom elements to be defined
          const checkCustomElements = () => {
            return win.customElements && win.customElements.get("s-button") !== undefined;
          };

          if (checkCustomElements()) {
            resolve();
            return;
          }

          const checkInterval = setInterval(() => {
            if (checkCustomElements()) {
              clearInterval(checkInterval);
              resolve();
            }
          }, 100);

          // Timeout after 10 seconds
          setTimeout(() => {
            clearInterval(checkInterval);
            resolve(); // Resolve anyway to not block tests
          }, 10000);
        };
        script.onerror = () => {
          console.error("Failed to load Polaris web components script");
          resolve(); // Resolve anyway to not block tests
        };
        win.document.head.appendChild(script);
      });
    } else {
      // Script already exists, check if custom elements are ready
      return new Cypress.Promise<void>((resolve) => {
        const checkCustomElements = () => {
          return win.customElements && win.customElements.get("s-button") !== undefined;
        };

        if (checkCustomElements()) {
          resolve();
          return;
        }

        // Wait for custom elements to be defined
        const checkInterval = setInterval(() => {
          if (checkCustomElements()) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);

        // Timeout after 10 seconds
        setTimeout(() => {
          clearInterval(checkInterval);
          resolve(); // Resolve anyway to not block tests
        }, 10000);
      });
    }
  });
});

beforeEach(() => {
  cy.window().then((win) => {
    const mockToasts = win?.document?.getElementsByClassName("mock-toast");
    while (mockToasts?.length > 0) {
      try {
        mockToasts[0].parentNode?.removeChild(mockToasts[0]);
      } catch (e) {
        // don't worry if the element has already been removed or changed parents
      }
    }
  });
});
