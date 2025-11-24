import { Button, Checkbox } from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import React, { useEffect } from "react";
import { Provider } from "../../../../src/GadgetProvider.js";
import { useAction } from "../../../../src/hooks.js";
import { testApi as api } from "../../../apis.js";
import { StorybookErrorBoundary } from "../StorybookErrorBoundary.js";
import { SelectableDesignSystemAutoTableStory } from "./SelectableDesignSystemAutoTableStory.js";

const CustomEmptyStateMarkup = <p>This is a custom empty state. Bazinga.</p>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "AutoTable/Table",
  component: SelectableDesignSystemAutoTableStory,

  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story: any) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return (
        <Provider api={api}>
          <StorybookErrorBoundary>
            <Story />
          </StorybookErrorBoundary>
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
export const Primary: any = {
  args: {
    model: api.autoTableTest,
  },
};
export const Namespaced: any = {
  args: {
    model: api.game.city,
  },
};

export const SelectFields: any = {
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "es"],
  },
};

export const OnErrorState: any = {
  args: {
    model: api.autoTableTest,
    columns: ["somethingSuperWrong"],
  },
};

export const onClickCallback: any = {
  name: "onClick callback",
  args: {
    model: api.autoTableTest,

    onClick: (row: any, rawRecord: any) => {
      windowAlert(`You clicked on a row with ID: ${row.id}`);
      windowAlert(`row: ${JSON.stringify(row, null, 2)}`);
      windowAlert(`rawRecord:\n ${JSON.stringify(rawRecord, null, 2)}
`);
    },
  },
};

export const SelectRichTextField: any = {
  args: {
    model: api.autoTableTest,
    columns: ["str", "rt"],
  },
};

export const SelectFileField: any = {
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

export const SelectRelatedFieldStringHasOne: any = {
  name: "Select related field using string value - has one relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasOne"],
  },
};

export const SelectRelatedFieldsHasOne: any = {
  name: "Select related fields - has one relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasOne.name"],
  },
};

export const SelectRelatedFieldStringHasMany: any = {
  name: "Select related field using string value - has many relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasMany"],
  },
};

export const SelectRelatedFieldsHasMany: any = {
  name: "Select related fields - has many relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasMany.edges.node.name"],
  },
};

export const SelectRelatedFieldStringBelongsTo: any = {
  name: "Select related field using string value - belongs to relationship",
  args: {
    model: api.foo,
    columns: ["name", "belongsToParent"],
  },
};

export const SelectRelatedFieldsBelongsTo: any = {
  name: "Select related fields - belongs to relationship",
  args: {
    model: api.foo,
    columns: ["name", "belongsToParent.str"],
  },
};

export const LiveData: any = {
  name: "Live data",
  args: {
    model: api.widget,
    live: true,
  },
};

const CustomCheckboxCell = ({ record }: { record: any }) => {
  const [_result, update] = useAction(api.autoTableTest.update);

  return (
    <Checkbox
      label={"Bool value"}
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

const ColorChangingText = (props: { text: string }) => {
  const [color, setColor] = React.useState("#000000");

  React.useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <div style={{ color }}>{props.text}</div>;
};

export const CustomCellWithUseAction: any = {
  args: {
    model: api.autoTableTest,
    columns: [
      "bool",
      {
        header: <ColorChangingText text="Pass the whole function" />,
        render: CustomCheckboxCell,
      },
      {
        header: <ColorChangingText text="JSX style" />,
        render: (props: any) => <CustomCheckboxCell {...props} />,
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: () => {},
  },
};

export const CustomCell: any = {
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
        render: ({ record }: { record: any }) => {
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

export const SelectProperty: any = {
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
        render: ({ record }: { record: any }) => {
          return (
            <div>
              Custom cell, has many field: {JSON.stringify(record.hasMany.edges.map((edge: any) => edge.node.name))} ({record.id})
            </div>
          );
        },
      },
    ],
  },
};

export const ShopifyShopModel: any = {
  args: {
    model: api.shopifyShop,
  },
};

const CustomDeleteButtonCellRenderer = (props: { record: any }) => {
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

export const CustomCellWithDeleteButton: any = {
  args: {
    model: api.autoTableTest,
    columns: [
      "str",
      { header: "Delete", render: ({ record }: { record: any }) => <CustomDeleteButtonCellRenderer record={record} /> },
      { header: "Delete", render: ({ record }: { record: any }) => <p>ID:{record.id} | Different renderer, same header</p> },
    ],
  },
};

export const ExcludeColumns: any = {
  args: {
    model: api.autoTableTest,
    excludeColumns: ["str", "enum", "num"],
  },
};

export const BuiltInPolarisTableProps: any = {
  args: {
    model: api.autoTableTest,
    selectable: false,
    lastColumnSticky: true,
    hasZebraStriping: true,
    resourceName: { singular: "fizzing whizzbee", plural: "fizzing whizzbees" },
  },
};

export const Condensed: any = {
  args: {
    model: api.autoTableTest,
    condensed: true,
  },
};

export const CustomEmptyState: any = {
  args: {
    // A filter that will never be true so that the empty state is always shown
    filter: { AND: [{ bool: { equals: false } }, { bool: { equals: true } }] },
    model: api.autoTableTest,
    emptyState: CustomEmptyStateMarkup,
  },
};

export const HideSearchAndPagination: any = {
  args: {
    model: api.autoTableTest,
    searchable: false,
    paginate: false,
  },
};

export const HasManyThroughFields: any = {
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

const windowAlert = (message: string) => {
  // eslint-disable-next-line no-undef
  window.alert(message);
};
