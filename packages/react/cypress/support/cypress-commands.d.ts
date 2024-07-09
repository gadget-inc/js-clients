/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    mockModelActionMetadata(
      api: any,
      props: {
        modelName: string;
        action: {
          apiIdentifier: string;
          operatesWithRecordIdentity: boolean;
        };
        inputFields: any[];
      }
    ): Chainable<void>;

    mockGetDirectUploadToken(api: any, customToken?: string): Chainable<void>;
    mockUploadFile: (customToken?: string) => Chainable<void>;
    getSubmitButton: () => Chainable<JQuery<HTMLElement>>;
  }
}
