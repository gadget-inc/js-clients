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
