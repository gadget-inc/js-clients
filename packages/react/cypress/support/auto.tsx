import { AppProvider, Card, Page } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import type { ComponentType, ReactNode } from "react";
import React from "react";
import type { AutoAdapter } from "../../src/auto/index.js";
import * as PolarisAdapter from "../../src/auto/polaris/index.js";
import { FormProvider, useForm } from "../../src/useActionForm.js";

interface AutoSuiteConfig {
  name: string;
  adapter: AutoAdapter;
  wrapper: ComponentType<{ children: ReactNode }>;
}

export const PolarisWrapper = ({ children }: { children: ReactNode }) => (
  <AppProvider i18n={translations}>
    <FormProvider {...useForm()}>
      <Page title="Example app">
        <Card>{children}</Card>
      </Page>
    </FormProvider>
  </AppProvider>
);

const suites: AutoSuiteConfig[] = [{ name: "Polaris", adapter: PolarisAdapter as any, wrapper: PolarisWrapper }];

export const adapters = [PolarisAdapter];
export const describeForEachAutoAdapter = (suiteName: string, suite: (config: AutoSuiteConfig) => void) => {
  // eslint-disable-next-line jest/valid-describe-callback, jest/valid-title
  describe.each(suites)((({ name }: { name: string }) => `${suiteName} - ${name}`) as any, suite);
};
