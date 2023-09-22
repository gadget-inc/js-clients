import { Client } from "@gadget-client/js-clients-test";

export const api = new Client({
  environment: "Development",
  authenticationMode: {
    apiKey: Cypress.env("JS_CLIENTS_TEST_API_KEY"),
    dangerouslyAllowBrowserApiKey: true,
  } as any,
});
