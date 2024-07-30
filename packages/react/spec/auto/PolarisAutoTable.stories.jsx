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
  },
};
export const Namespaced = {
  args: {
    model: api.game.city,
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
      windowAlert(`You clicked on row: ${JSON.stringify(row, null, 2)}`);
    },
  },
};

export const SelectRichTextField = {
  args: {
    model: api.autoTableTest,
    columns: ["str", "rt"],
  },
};

export const SelectFileField = {
  args: {
    model: api.autoTableTest,
    columns: ["str", "file"],
  },
};

export const SelectRelatedFieldStringHasOne = {
  name: "Select related field using string value - has one relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasOne"],
  },
};

export const SelectRelatedFieldsHasOne = {
  name: "Select related fields - has one relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasOne.name"],
  },
};

export const SelectRelatedFieldStringHasMany = {
  name: "Select related field using string value - has many relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasMany"],
  },
};

export const SelectRelatedFieldsHasMany = {
  name: "Select related fields - has many relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasMany.edges.node.name"],
  },
};

export const SelectRelatedFieldStringBelongsTo = {
  name: "Select related field using string value - belongs to relationship",
  args: {
    model: api._autoTableTestRelatedModel,
    columns: ["name", "belongsToParent"],
  },
};

export const SelectRelatedFieldsBelongsTo = {
  name: "Select related fields - belongs to relationship",
  args: {
    model: api._autoTableTestRelatedModel,
    columns: ["name", "belongsToParent.str"],
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
      "file",
      "hasOne",
      "hasOne.someBool",
      {
        header: "has one number",
        field: "hasOne.someNumber",
      },
      "hasMany",
      "hasMany.edges.node.someBool",
      {
        header: "has many number",
        field: "hasMany.edges.node.someNumber",
      },
      "rt",
      {
        header: "Custom cell",
        render: (props) => {
          return (
            <div>
              Custom cell, num field: {props.record.num} ({props.record.id})
            </div>
          );
        },
      },
    ],
  },
};

const CustomDeleteButtonCellRenderer = (props) => {
  const [{ error, fetching }, _delete] = useAction(api.autoTableTest.delete);

  useEffect(() => {
    if (error) {
      windowAlert(`Error deleting record: ${error.message}`);
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
        header: "Actions",
        render: (props) => {
          return <CustomDeleteButtonCellRenderer record={props.record} />;
        },
      },
    ],
  },
};

export const ExcludeColumns = {
  args: {
    model: api.autoTableTest,
    excludeColumns: ["str", "enum", "num"],
  },
};

export const IncludedActionParameters = {
  args: {
    model: api.autoTableTest,
    actions: [
      "customAction",
      {
        label: "Sum Nums callback",
        callback: (ids, records) => windowAlert(`Sum of record "num" values: ${sumRecordNumValues(records)}`),
      },
      {
        label: "Sum Nums rendered",
        render: (ids, records) => {
          return (
            <div>
              <p>
                {sumRecordNumValues(records)}
                {` is the sum of the num field in records with ids: `}
                {ids.join(", ")}
              </p>
              <button onClick={() => windowAlert(ids)}>Alert the IDs</button>
              <button onClick={() => windowAlert(JSON.stringify(records))}>Alert the full records</button>
            </div>
          );
        },
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
