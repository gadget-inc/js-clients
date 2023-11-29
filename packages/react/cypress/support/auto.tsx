import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AppProvider, Card, Page } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import type { ComponentType, ReactNode } from "react";
import React from "react";
import type { AutoAdapter } from "../../src/auto/index.js";
import * as MUIAdapter from "../../src/auto/mui/index.js";
import * as PolarisAdapter from "../../src/auto/polaris/index.js";

interface AutoSuiteConfig {
  name: string;
  adapter: AutoAdapter;
  wrapper: ComponentType<{ children: ReactNode }>;
}

export const MUIWrapper = ({ children }: { children: ReactNode }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>
);

export const PolarisWrapper = ({ children }: { children: ReactNode }) => (
  <AppProvider i18n={translations}>
    <Page title="Example app">
      <Card>{children}</Card>
    </Page>
  </AppProvider>
);

const suites: AutoSuiteConfig[] = [
  // {
  //   name: "MUI",
  //   adapter: MUIAdapter as any,
  //   wrapper: MUIWrapper,
  // },
  {
    name: "Polaris",
    adapter: PolarisAdapter as any,
    wrapper: PolarisWrapper,
  },
];

export const adapters = [MUIAdapter, PolarisAdapter];
export const describeForEachAutoAdapter = (suiteName: string, suite: (config: AutoSuiteConfig) => void) => {
  // eslint-disable-next-line jest/valid-describe-callback, jest/valid-title
  describe.each(suites)((({ name }: { name: string }) => `${suiteName} - ${name}`) as any, suite);
};
