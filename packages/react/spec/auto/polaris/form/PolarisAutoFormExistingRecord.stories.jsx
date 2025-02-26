import { AppProvider, Card, Page } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import { Provider } from "../../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.tsx";
import { FormProvider, useForm } from "../../../../src/useActionForm.ts";
import { useFindOne } from "../../../../src/useFindOne.ts";
import { testApi as api } from "../../../apis.ts";

const AutoFormWithExistingRecord = (props) => {
  const [{ data: widget }] = useFindOne(api.widget, props.id, { select: props.select });

  if (!widget) return "loading...";

  return <PolarisAutoForm action={props.upsert ? api.widget.upsert : api.widget.update} record={widget} />;
};

export default {
  title: "Polaris/AutoForm/WithExistingRecord",
  component: AutoFormWithExistingRecord,
  decorators: [
    (Story) => {
      return (
        <Provider api={api}>
          <AppProvider i18n={translations}>
            <FormProvider {...useForm()}>
              <Page>
                <Card>
                  <Story />
                </Card>
              </Page>
            </FormProvider>
          </AppProvider>
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
