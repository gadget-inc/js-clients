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

interface AutoSuiteConfig {
  name: string;
  adapter: AutoAdapter;
  wrapper: ComponentType<{ children: ReactNode }>;
}

const ONLY_RUN_SUITES = {
  "Shadcn": ["AutoForm", 
    "AutoButton", 
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
    "AutoPasswordInput"
  ]
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

const ShadCNAdapter = makeAutocomponents({ ...elements });

export const ShadcnWrapper = ({ children }: { children: ReactNode }) => (
  <>
    <FormProvider {...useForm()}>
    <Toaster />
      <elements.Card  className="max-w-2xl mx-auto my-4">
        <elements.CardContent className="p-6">
           {children}
        </elements.CardContent>
      </elements.Card>
    </FormProvider>
  </>
);

const suites: AutoSuiteConfig[] = [
  { name: "Polaris", adapter: PolarisAdapter as any, wrapper: PolarisWrapper },
  { name: "Shadcn", adapter: ShadCNAdapter as any, wrapper: ShadcnWrapper },
];

export const adapters = [PolarisAdapter];

export const describeForEachAutoAdapter = (suiteName: string, suite: (config: AutoSuiteConfig) => void) => {
  const filteredSuites = suites.filter(config => 
    config.name !== "Shadcn" || ONLY_RUN_SUITES["Shadcn"].includes(suiteName)
  );
  
  describe.each(filteredSuites)((({ name }: { name: string }) => `${suiteName} - ${name}`) as any, suite);
};
