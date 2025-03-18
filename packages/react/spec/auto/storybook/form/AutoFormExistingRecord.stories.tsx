import React from "react";
import { Provider } from "../../../../src/GadgetProvider.js";
import { useFindOne } from "../../../../src/useFindOne.js";
import { testApi as api } from "../../../apis.js";
import { SelectableDesignSystemAutoFormStory } from "./SelectableDesignSystemAutoFormStory.js";

const AutoFormWithExistingRecord = (props: any) => {
  const [{ data: widget }] = useFindOne(api.widget, props.id, { select: props.select });

  if (!widget) return "loading...";

  return <SelectableDesignSystemAutoFormStory action={props.upsert ? api.widget.upsert : api.widget.update} record={widget as any} />;
};

export default {
  title: "AutoForm/WithExistingRecord",
  component: AutoFormWithExistingRecord,
  decorators: [
    (Story: any) => {
      return (
        <Provider api={api}>
          <Story />
        </Provider>
      );
    },
  ],
};

export const UpdateWithExistingRecord = {
  args: {
    id: "999",
  },
};

export const UpsertWithExistingRecord = {
  args: {
    id: "999",
    upsert: true,
  },
};

export const UpdateWithExistingRecordWithSelect = {
  args: {
    id: "999",
    select: {
      __typename: true,
      id: true,
      anything: true,
      birthday: true,
      category: true,
      color: true,
      createdAt: true,
      description: {
        markdown: true,
        truncatedHTML: true,
      },
      embedding: true,
      inStock: true,
      inventoryCount: true,
      isChecked: true,
      metafields: true,
      mustBeLongString: true,
      name: true,
      roles: {
        key: true,
        name: true,
      },
      secretKey: true,
      sectionId: true,
      startsAt: true,
      updatedAt: true,
      section: {
        id: true,
        name: true,
      },
      doodad: {
        id: true,
        name: true,
      },
      gizmos: {
        edges: {
          node: {
            id: true,
            name: true,
          },
        },
      },
    },
  },
};
