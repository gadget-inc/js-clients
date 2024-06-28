import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import type { ReactNode } from "react";
import React from "react";
import { testApi as api } from "../../apis.js";
import { MockClientProvider } from "../../testWrappers.js";

export const PolarisMockedProviders = (props: { children: ReactNode }) => {
  return (
    <MockClientProvider api={api}>
      <AppProvider i18n={translations}>{props.children}</AppProvider>
    </MockClientProvider>
  );
};
