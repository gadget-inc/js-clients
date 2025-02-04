import { AppProvider, Button, Checkbox } from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import translations from "@shopify/polaris/locales/en.json";
import React, { useEffect } from "react";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { useAction } from "../../../../src/useAction.ts";
import { testApi as api } from "../../../apis.ts";
import { StorybookErrorBoundary } from "../StorybookErrorBoundary.tsx";
import { SelectableDesignSystemAutoTableStory } from "./SelectableDesignSystemAutoTableStory.tsx";

const CustomEmptyStateMarkup = <p>This is a custom empty state. Bazinga.</p>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "AutoTable/Table",
  component: SelectableDesignSystemAutoTableStory,

  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      // 👇 Make it configurable by reading the theme value from parameters

      return (
        <Provider api={api}>
          <AppProvider i18n={translations}>
            <StorybookErrorBoundary>
              <Story />
            </StorybookErrorBoundary>
          </AppProvider>
        </Provider>
      );
    },
  ],

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },

  tags: [], // More on argTypes: https://storybook.js.org/docs/api/argtypes
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
    onClick: (row, rawRecord) => {
      windowAlert(`You clicked on a row with ID: ${row.id}`);
      windowAlert(`row: ${JSON.stringify(row, null, 2)}`);
      windowAlert(`rawRecord:\n ${JSON.stringify(rawRecord, null, 2)}
`);
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
    columns: [
      "str",
      {
        field: "file",
        sortable: false,
      },
    ],
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

const CustomCheckboxCell = ({ record }) => {
  const [_result, update] = useAction(api.autoTableTest.update);

  return (
    <Checkbox
      checked={record.bool}
      onChange={(value) => {
        void update({
          id: record.id,
          bool: value,
        });
      }}
    />
  );
};

export const CustomCellWithUseAction = {
  args: {
    model: api.autoTableTest,
    columns: [
      "bool",
      {
        header: "Pass the whole function",
        render: CustomCheckboxCell,
      },
      {
        header: "JSX style",
        render: (props) => <CustomCheckboxCell {...props} />,
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: () => {},
  },
};

export const CustomCell = {
  args: {
    model: api.autoTableTest,
    columns: [
      "str",
      "file",
      "hasOne",
      "hasOne.name",
      {
        header: "Has one number",
        field: "hasOne.someNumber",
      },
      "hasMany",
      "hasMany.edges.node.name",
      {
        header: "Has many number",
        field: "hasMany.edges.node.someNumber",
      },
      "rt",
      {
        style: { backgroundColor: "#abcdef", width: "320px", maxWidth: "320px" },
        header: "Custom cell with custom style",
        render: ({ record }) => {
          return (
            <div>
              Custom cell, num field: {record.num} ({record.id})
            </div>
          );
        },
      },
    ],
  },
};

export const SelectProperty = {
  args: {
    model: api.autoTableTest,
    select: {
      hasMany: {
        edges: {
          node: {
            name: true,
          },
        },
      },
      id: true,
    },
    columns: [
      {
        header: "Custom cell",
        render: ({ record }) => {
          return (
            <div>
              Custom cell, has many field: {JSON.stringify(record.hasMany.edges.map((edge) => edge.node.name))} ({record.id})
            </div>
          );
        },
      },
    ],
  },
};

export const ShopifyShopModel = {
  args: {
    model: api.shopifyShop,
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
      { header: "Delete", render: ({ record }) => <CustomDeleteButtonCellRenderer record={record} /> },
      { header: "Delete", render: ({ record }) => <p>ID:{record.id} | Different renderer, same header</p> },
    ],
  },
};

export const ExcludeColumns = {
  args: {
    model: api.autoTableTest,
    excludeColumns: ["str", "enum", "num"],
  },
};

export const BuiltInPolarisTableProps = {
  args: {
    model: api.autoTableTest,
    selectable: false,
    lastColumnSticky: true,
    hasZebraStriping: true,
    resourceName: { singular: "fizzing whizzbee", plural: "fizzing whizzbees" },
  },
};

export const Condensed = {
  args: {
    model: api.autoTableTest,
    condensed: true,
  },
};

export const CustomEmptyState = {
  args: {
    // A filter that will never be true so that the empty state is always shown
    filter: { AND: [{ bool: { equals: false } }, { bool: { equals: true } }] },
    model: api.autoTableTest,
    emptyState: CustomEmptyStateMarkup,
  },
};

export const HideSearchAndPagination = {
  args: {
    model: api.autoTableTest,
    searchable: false,
    paginate: false,
  },
};

export const HasManyThroughFields = {
  args: {
    model: api.hasManyThrough.baseModel,
    columns: [
      "baseModelHmtField",
      {
        header: "Sibling ID",
        field: "baseModelHmtField.edges.node.id",
        sortable: false,
      },
    ],
  },
};

const windowAlert = (message) => {
  // eslint-disable-next-line no-undef
  window.alert(message);
};
