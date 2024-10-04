import { AppProvider, Card, Page, Text } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisAutoInput } from "../../../src/auto/polaris/inputs/PolarisAutoInput.tsx";
import { PolarisAutoBelongsToInput } from "../../../src/auto/polaris/inputs/relationships/PolarisAutoBelongsToInput.tsx";
import { PolarisAutoRelationshipForm } from "../../../src/auto/polaris/inputs/relationships/PolarisAutoRelationshipForm.tsx";
import { PolarisAutoSubmit } from "../../../src/auto/polaris/submit/PolarisAutoSubmit.tsx";
import { FormProvider, useForm } from "../../../src/useActionForm.ts";
import { testApi as api } from "../../apis.ts";

const ExampleWidgetAutoRelatedForm = (props) => {
  return (
    <Page>
      <PolarisAutoForm {...props}>
        <Card>
          <Text as="h2" variant="headingSm">
            Top Level Form -- Widget
          </Text>
          <PolarisAutoInput field="name" />
          <PolarisAutoInput field="description" />
          <PolarisAutoInput field="inventoryCount" />
        </Card>

        <Card>
          <Text as="h2" variant="headingSm">
            Belongs To Form -- Section
          </Text>
          <PolarisAutoBelongsToInput field="section" optionLabel="id" />
        </Card>

        <Card>
          <Text as="h2" variant="headingSm">
            Has Many Form -- Gizmos
          </Text>
          <PolarisAutoRelationshipForm
            field="gizmos"
            selectPaths={["name", "orientation"]}
            primaryLabel="name"
            secondaryLabel="orientation"
          >
            <PolarisAutoInput field="name" />
            <PolarisAutoInput field="orientation" />
            <PolarisAutoInput field="attachment" />
          </PolarisAutoRelationshipForm>
        </Card>
        <PolarisAutoSubmit />
      </PolarisAutoForm>
    </Page>
  );
};

const ExampleSectionAutoRelatedForm = (props) => {
  return (
    <Page>
      <PolarisAutoForm {...props}>
        <Card>
          <Text as="h2" variant="headingSm">
            Top Level Form -- Section
          </Text>
          <PolarisAutoInput field="name" />
          <PolarisAutoInput field="label" />
        </Card>

        <Card>
          <Text as="h2" variant="headingSm">
            Has Many Form -- Widgets
          </Text>
          <PolarisAutoRelationshipForm field="widgets">
            <PolarisAutoInput field="name" />
            <PolarisAutoInput field="inventoryCount" />
          </PolarisAutoRelationshipForm>
        </Card>
        <PolarisAutoSubmit />
      </PolarisAutoForm>
    </Page>
  );
};

export default {
  title: "Polaris/AutoForm/AutoRelationshipForm",
  component: ExampleWidgetAutoRelatedForm,
  decorators: [
    (Story) => {
      return (
        <Provider api={api}>
          <AppProvider i18n={translations}>
            <FormProvider {...useForm()}>
              <Story />
            </FormProvider>
          </AppProvider>
        </Provider>
      );
    },
  ],
};

export const Create = {
  args: {
    action: api.widget.create,
  },
};

export const Update = {
  args: {
    action: api.widget.update,
    findBy: "1",
  },
};

export const CreateWithLargeHasMany = {
  render: (args) => <ExampleSectionAutoRelatedForm {...args} />,
  args: {
    action: api.section.create,
  },
};
