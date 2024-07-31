import { AppProvider, BlockStack, Box, LegacyCard, Modal } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoTable } from "../../../src/auto/polaris/PolarisAutoTable.tsx";
import { testApi as api } from "../../apis.ts";

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
                    <Story />
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

const CustomActionComponent = ({ records, close }) => (
  <>
    <Modal.Section>
      <p>
        {sumRecordNumValues(records)}
        {` is the sum of the num field in records with ids: `}
        {records.map((record) => record.id).join(", ")}
      </p>
    </Modal.Section>
    <Modal.Section>
      <button onClick={() => windowAlert(JSON.stringify(records))}>Alert the full records</button>
      <button onClick={close}>Close</button>
    </Modal.Section>
  </>
);

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
        label: "Sum Nums rendered",
        promoted: true,
        promptComponent: CustomActionComponent,
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
