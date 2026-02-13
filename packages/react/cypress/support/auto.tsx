import { AppProvider, Card, Page } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import type { ComponentType, ReactNode } from "react";
import React from "react";
import { Toaster, elements } from "../../spec/auto/shadcn-defaults/index.js";
import type { AutoAdapter } from "../../src/auto/index.js";
import { makeAutocomponents } from "../../src/auto/shadcn/index.js";
import { FormProvider, useForm } from "../../src/useActionForm.js";
import * as PolarisAdapter from "./PolarisAdapter.js";
import * as PolarisWCAdapter from "./PolarisWCAdapter.js";
import { SUITE_NAMES } from "./constants.js";

interface AutoSuiteConfig {
  name: string;
  adapter: AutoAdapter;
  wrapper: ComponentType<{ children: ReactNode }>;

  clickOptions: Partial<Cypress.ClickOptions>;
}

const ONLY_RUN_SUITES: Record<string, string[]> = {
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
    "AutoBelongsToForm",
    "AutoHasManyThroughForm",
    "AutoHasManyForm",
    "AutoFormDateTimePicker",
    "AutoFormJSONInput",
    "AutoPasswordInput",
    "AutoRoleInput",
    "AutoEnumInput",
    "AutoBelongsToInput",
    "AutoHasManyInput",
    // Table
    "AutoTable - Bulk actions",
  ],
  [SUITE_NAMES.POLARIS_WC]: [
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
    "AutoBelongsToForm",
    "AutoHasManyThroughForm",
    "AutoHasManyForm",
    "AutoFormDateTimePicker",
    "AutoFormJSONInput",
    "AutoPasswordInput",
    "AutoRoleInput",
    "AutoEnumInput",
    "AutoBelongsToInput",
    "AutoHasManyInput",
    "AutoTable - Bulk actions",
    "AutoTable - Search",
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
  <div className="p-4">
    <elements.Card className="bg-background">
      <elements.CardContent>
        <FormProvider {...useForm()}>
          <Toaster />
          {children}
        </FormProvider>
      </elements.CardContent>
    </elements.Card>
  </div>
);

export const PolarisWCWrapper = ({ children }: { children: ReactNode }) => {
  const formMethods = useForm();

  return (
    <div style={{ padding: 16 }}>
      <FormProvider {...formMethods}>{children}</FormProvider>
    </div>
  );
};

const suites: AutoSuiteConfig[] = [
  { name: SUITE_NAMES.POLARIS, adapter: PolarisAdapter as any, wrapper: PolarisWrapper, clickOptions: {} },
  { name: SUITE_NAMES.SHADCN, adapter: ShadCNAdapter as any, wrapper: ShadcnWrapper, clickOptions: {} },
  {
    name: SUITE_NAMES.POLARIS_WC,
    adapter: PolarisWCAdapter as any,
    wrapper: PolarisWCWrapper,
    clickOptions: {
      /** PolarisWC web components have 0x0 host dimensions due to shadow DOM; use force: true for clicks */
      force: true,
    },
  },
];

export const adapters = [PolarisAdapter, PolarisWCAdapter];
export const describeForEachAutoAdapter = (suiteName: string, suite: (config: AutoSuiteConfig) => void) => {
  const filteredSuites = suites.filter((config) => {
    const onlyRun = ONLY_RUN_SUITES[config.name];
    return !onlyRun || onlyRun.includes(suiteName);
  });

  // eslint-disable-next-line jest/valid-describe-callback, jest/valid-title
  describe.each(filteredSuites)((({ name }: { name: string }) => `${suiteName} - ${name}`) as any, suite);
};
