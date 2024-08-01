import { AppProvider, BlockStack, Box, LegacyCard } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoTable } from "../../../src/auto/polaris/PolarisAutoTable.tsx";
import { testApi as api } from "../../apis.ts";
import { StorybookErrorBoundary } from "../StorybookErrorBoundary.tsx";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Polaris/AutoTable/ActionParameters",
  component: PolarisAutoTable,
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return (
        <Provider api={api}>
          <AppProvider i18n={translations}>
            <div style={{ width: "100%" }}>
              <Box paddingBlockEnd="400">
                <BlockStack gap="200">
                  <LegacyCard>
                    <StorybookErrorBoundary>
                      <Story />
                    </StorybookErrorBoundary>
                  </LegacyCard>
                </BlockStack>
              </Box>
            </div>
          </AppProvider>
        </Provider>
      );
    },
  ],
};

export const IncludedActionParameters = {
  args: {
    model: api.autoTableTest,
    actions: [
      "customAction",
      { label: "Alternate action label", action: "customAction" },
      {
        label: "Sum Nums callback",
        promoted: false,
        action: (records) => windowAlert(`Sum of record "num" values: ${sumRecordNumValues(records)}`),
      },
      {
        label: "Sum Nums promoted",
        promoted: true,
        action: (records) => windowAlert(`Sum of record "num" values: ${sumRecordNumValues(records)}`),
      },
    ],
  },
};

export const ExcludedActionParameters = {
  args: {
    model: api.autoTableTest,
    excludeActions: ["delete"],
  },
};

const windowAlert = (message) => {
  // eslint-disable-next-line no-undef
  window.alert(message);
};

const sumRecordNumValues = (records) => {
  return records.reduce((total, record) => total + (record.num ?? 0), 0);
};
