/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    mockModelActionMetadata(
      api: any,
      props: {
        modelName: string;
        modelApiIdentifier: string;
        action: {
          apiIdentifier: string;
          operatesWithRecordIdentity: boolean;
        };
        inputFields: any[];
        triggers: any[];
        defaultRecord?: Record<string, any>;
      }
    ): Chainable<void>;

    mockGetDirectUploadToken(api: any, customToken?: string): Chainable<void>;
    mockUploadFile: (customToken?: string) => Chainable<void>;
    getSubmitButton: () => Chainable<JQuery<HTMLElement>>;
  }
}
