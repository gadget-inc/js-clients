import React from "react";
import { Provider } from "../../../../src/GadgetProvider.js";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { testApi as api } from "../../../apis.js";
import { SelectableDesignSystemAutoFormStory } from "./SelectableDesignSystemAutoFormStory.js";

export default {
  title: "AutoForm/Errors",
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

export const InvalidModelAction = {
  args: {
    action: (api.autoTableTest as any).invalidAction,
  },
};

export const MissingActionProp: any = {
  args: {},
};

export const FieldNameCustomParamCollisionError: any = {
  args: {
    findBy: "1",
    action: api.autoTableTest.updateWithCustomParams,
  },
};

export const ModelActionWithoutApiTrigger: any = {
  args: {
    findBy: "70",
    action: api.autoTableTest.noTriggerAction,
  },
};

export const GlobalActionWithoutApiTrigger: any = {
  args: {
    action: api.noTriggerGlobalAction,
  },
};

export const NestedAutoForm: any = {
  args: {
    action: api.autoTableTest.create,
    children: <PolarisAutoForm action={api.autoTableTest.create} />,
  },
};
