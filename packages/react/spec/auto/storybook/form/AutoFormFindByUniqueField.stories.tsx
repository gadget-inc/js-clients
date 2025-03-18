import React from "react";
import { Provider } from "../../../../src/GadgetProvider.js";
import { testApi as api } from "../../../apis.js";
import { SelectableDesignSystemAutoFormStory } from "./SelectableDesignSystemAutoFormStory.js";

export default {
  title: "AutoForm/FindByUniqueField",
  component: SelectableDesignSystemAutoFormStory,
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

export const FindByUniqueString: any = {
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: { uniqueString: "u1" },
  },
};

export const FindByUniqueBelongsTo: any = {
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: { uniqueBelongsTo: "22" },
  },
};

export const FindByUniqueEmail: any = {
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: { uniqueEmail: "u3@email.com" },
  },
};

export const FindByNonIUniqueField: any = {
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: { nonUniqueString: "example" },
  },
};
