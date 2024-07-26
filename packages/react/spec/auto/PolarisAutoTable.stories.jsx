import { AppProvider, BlockStack, Box, Button, LegacyCard } from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import translations from "@shopify/polaris/locales/en.json";
import React, { useEffect } from "react";
import { Provider } from "../../src/GadgetProvider.tsx";
import { PolarisAutoTable } from "../../src/auto/polaris/PolarisAutoTable.tsx";
import { useAction } from "../../src/useAction.ts";
import { testApi as api } from "../apis.ts";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Polaris/AutoTable",
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

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    model: api.autoTableTest,
    initialSort: { id: "Descending" },
  },
};

export const SelectFields = {
  args: {
    model: api.autoTableTest,
    columns: ["str", "num"],
  },
};

export const OnErrorState = {
  args: {
    model: api.autoTableTest,
    columns: ["somethingSuperWrong"],
  },
};

export const onClickCallback = {
  name: "onClick callback",
  args: {
    model: api.autoTableTest,
    onClick: (row) => {
      // eslint-disable-next-line no-undef
      window.alert(`You clicked on row: ${JSON.stringify(row, null, 2)}`);
    },
  },
};

export const SelectRelatedFieldsHasOne = {
  name: "Select related fields - has one relationship",
  args: {
    model: api.autoTableTest,
    columns: [
      "str",
      "num",
      {
        field: "hasOne",
        relatedField: "name",
      },
    ],
  },
};

export const SelectRelatedFieldsHasMany = {
  name: "Select related fields - has many relationship",
  args: {
    model: api.autoTableTest,
    columns: [
      "str",
      "num",
      {
        field: "hasMany",
        relatedField: "name",
      },
    ],
  },
};

export const SelectRelatedFieldsBelongsTo = {
  name: "Select related fields - belongs to relationship",
  args: {
    model: api._autoTableTestRelatedModel,
    columns: [
      "name",
      {
        field: "belongsToParent",
        relatedField: "str",
      },
    ],
  },
};

export const LiveData = {
  name: "Live data",
  args: {
    model: api.widget,
    live: true,
  },
};

export const CustomCell = {
  args: {
    model: api.autoTableTest,
    columns: [
      "str",
      {
        field: "hasOne",
        relatedField: "name",
      },
      {
        name: "Custom cell",
        render: (record) => {
          return <div>Custom cell: {record.str}</div>;
        },
      },
    ],
  },
};

const CustomDeleteButtonCellRenderer = (props) => {
  const [{ error, fetching }, _delete] = useAction(api.autoTableTest.delete);

  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-undef
      window.alert(`Error deleting record: ${error.message}`);
    }
  }, [error]);

  return (
    <Button
      icon={DeleteIcon}
      onClick={() => {
        void _delete({
          id: props.record.id,
        });
      }}
      loading={fetching}
    />
  );
};

export const CustomCellWithDeleteButton = {
  args: {
    model: api.autoTableTest,
    columns: [
      "str",
      {
        name: "Actions",
        render: (record) => {
          return <CustomDeleteButtonCellRenderer record={record} />;
        },
      },
    ],
  },
};
