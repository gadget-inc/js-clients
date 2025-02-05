import { AppProvider, Card, Page } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import type { ComponentType, ReactNode } from "react";
import React from "react";
import { Toaster, elements } from "../../spec/auto/shadcn-defaults/index.js";
import type { AutoAdapter } from "../../src/auto/index.js";
import * as PolarisAdapter from "../../src/auto/polaris/index.js";
import { makeAutocomponents } from "../../src/auto/shadcn/index.js";
import { FormProvider, useForm } from "../../src/useActionForm.js";
import { SUITE_NAMES } from "./constants.js";

interface AutoSuiteConfig {
  name: string;
  adapter: AutoAdapter;
  wrapper: ComponentType<{ children: ReactNode }>;
}

const ONLY_RUN_SUITES = {
  [SUITE_NAMES.SHADCN]: [
    "AutoButton",
    "AutoForm",
    "AutoForm - input labels",
    "AutoForm - Default model field values",
    "AutoForm - FindBy object parameters",
    "AutoForm - Global actions",
    "AutoForm - HasManyThrough fields",
    "AutoForm - Dynamic form input changes",
    "AutoForm - Dynamic form input changes - FindBy object parameters",
    "AutoForm - Dynamic form input changes - Global actions",
    "AutoForm - Dynamic form input changes - HasManyThrough fields",
    "AutoForm titles",
    "AutoForm - ID field",
    "AutoForm - Upsert Action",
    "AutoHasOneForm",
    "AutoFormDateTimePicker",
    "AutoFormJSONInput",
    "AutoPasswordInput",
    "AutoRoleInput",
    "AutoEnumInput",
    "AutoBelongsToInput",
    // Table
    "AutoTable - Bulk actions",
  ],
};

export const PolarisWrapper = ({ children }: { children: ReactNode }) => (
  <AppProvider i18n={translations}>
    <FormProvider {...useForm()}>
      <Page title="Example app">
        <Card>{children}</Card>
      </Page>
    </FormProvider>
  </AppProvider>
);

const ShadCNAdapter = makeAutocomponents(elements);

export const ShadcnWrapper = ({ children }: { children: ReactNode }) => (
  <>
    <FormProvider {...useForm()}>
      <Toaster />
      {children}
    </FormProvider>
  </>
);

const suites: AutoSuiteConfig[] = [
  { name: SUITE_NAMES.POLARIS, adapter: PolarisAdapter as any, wrapper: PolarisWrapper },
  { name: SUITE_NAMES.SHADCN, adapter: ShadCNAdapter as any, wrapper: ShadcnWrapper },
];

export const adapters = [PolarisAdapter];
export const describeForEachAutoAdapter = (suiteName: string, suite: (config: AutoSuiteConfig) => void) => {
  const filteredSuites = suites.filter(
    (config) => config.name !== SUITE_NAMES.SHADCN || ONLY_RUN_SUITES[SUITE_NAMES.SHADCN].includes(suiteName)
  );

  // eslint-disable-next-line jest/valid-describe-callback, jest/valid-title
  describe.each(filteredSuites)((({ name }: { name: string }) => `${suiteName} - ${name}`) as any, suite);
};
