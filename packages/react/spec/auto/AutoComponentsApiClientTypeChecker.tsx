import { GadgetRecord } from "@gadgetinc/api-client-core";
import React from "react";
import { PolarisAutoForm } from "../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoTable } from "../../src/auto/polaris/PolarisAutoTable.js";
import { makeAutocomponents } from "../../src/auto/shadcn/unreleasedIndex.js";
import { testApi } from "../apis.js";
import { elements } from "./shadcn-defaults/index.js";

const { AutoForm: ShadcnAutoForm, AutoTable: ShadcnAutoTable } = makeAutocomponents(elements);

/**
 * If the api client breaks the expected types of the auto components, this file will fail in CI on `pnpm typecheck`
 */
export const AutoComponentsApiClientTypeChecker = () => {
  const widgetRecord = new GadgetRecord({ __typename: "Widget" as const, id: "123", inventoryCount: 123 });

  return (
    <>
      {/* AutoForm - Create actions */}
      <PolarisAutoForm
        action={testApi.widget.create}
        defaultValues={{
          widget: {
            inventoryCount: 123,
            gizmos: [{ name: "Gizmo 1" }],
            section: { name: "Section 1" },
          },
        }}
      />
      <ShadcnAutoForm
        action={testApi.widget.create}
        defaultValues={{
          widget: {
            inventoryCount: 123,
            gizmos: [{ name: "Gizmo 1" }],
            section: { name: "Section 1" },
          },
        }}
      />

      {/* @ts-expect-error create action shouldn't have findBy */}
      <PolarisAutoForm action={testApi.widget.create} findBy="123" />
      {/* @ts-expect-error create action shouldn't have record */}
      <PolarisAutoForm action={testApi.widget.create} record={widgetRecord} />
      {/* @ts-expect-error create action shouldn't have findBy */}
      <ShadcnAutoForm action={testApi.widget.create} findBy="123" />
      {/* @ts-expect-error create action shouldn't have record */}
      <ShadcnAutoForm action={testApi.widget.create} record={widgetRecord} />

      {/* AutoForm - Update actions */}
      <PolarisAutoForm action={testApi.widget.update} findBy="123" />
      <ShadcnAutoForm action={testApi.widget.update} findBy="123" />
      <PolarisAutoForm action={testApi.widget.update} record={widgetRecord} />
      <ShadcnAutoForm action={testApi.widget.update} record={widgetRecord} />

      {/* @ts-expect-error update action shouldn't have record */}
      <PolarisAutoForm action={testApi.widget.update} />
      {/* @ts-expect-error update action shouldn't have record */}
      <PolarisAutoForm action={testApi.widget.update} findBy="123" record={widgetRecord} />
      {/* @ts-expect-error update action shouldn't have record */}
      <ShadcnAutoForm action={testApi.widget.update} />
      {/* @ts-expect-error update action shouldn't have record */}
      <ShadcnAutoForm action={testApi.widget.update} findBy="123" record={widgetRecord} />

      {/* AutoForm - Upsert actions */}
      <PolarisAutoForm action={testApi.widget.upsert} />
      <ShadcnAutoForm action={testApi.widget.upsert} />
      <PolarisAutoForm action={testApi.widget.upsert} findBy="123" />
      <ShadcnAutoForm action={testApi.widget.upsert} findBy="123" />
      <PolarisAutoForm action={testApi.widget.upsert} record={widgetRecord} />
      <ShadcnAutoForm action={testApi.widget.upsert} record={widgetRecord} />
      {/* @ts-expect-error upsert action shouldn't have record */}
      <PolarisAutoForm action={testApi.widget.upsert} findBy="123" record={widgetRecord} />
      {/* @ts-expect-error upsert action shouldn't have record */}
      <ShadcnAutoForm action={testApi.widget.upsert} findBy="123" record={widgetRecord} />

      {/* AutoForm - Delete actions */}
      <PolarisAutoForm action={testApi.widget.delete} findBy="123" />
      <ShadcnAutoForm action={testApi.widget.delete} findBy="123" />
      <PolarisAutoForm action={testApi.widget.delete} record={widgetRecord} />
      <ShadcnAutoForm action={testApi.widget.delete} record={widgetRecord} />

      {/* @ts-expect-error delete action shouldn't have record */}
      <PolarisAutoForm action={testApi.widget.delete} />
      {/* @ts-expect-error delete action shouldn't have record */}
      <ShadcnAutoForm action={testApi.widget.delete} />
      {/* @ts-expect-error delete action shouldn't have record */}
      <PolarisAutoForm action={testApi.widget.delete} findBy="123" record={widgetRecord} />
      {/* @ts-expect-error delete action shouldn't have record */}
      <ShadcnAutoForm action={testApi.widget.delete} findBy="123" record={widgetRecord} />

      {/* AutoForm - Custom actions */}
      <PolarisAutoForm action={testApi.widget.addInventory} findBy="123" />
      <PolarisAutoForm action={testApi.widget.addInventory} record={widgetRecord} />
      <ShadcnAutoForm action={testApi.widget.addInventory} findBy="123" />
      <ShadcnAutoForm action={testApi.widget.addInventory} record={widgetRecord} />

      {/* @ts-expect-error custom action shouldn't have record */}
      <PolarisAutoForm action={testApi.widget.addInventory} />
      {/* @ts-expect-error custom action shouldn't have record */}
      <ShadcnAutoForm action={testApi.widget.addInventory} />
      {/* @ts-expect-error custom action shouldn't have record */}
      <PolarisAutoForm action={testApi.widget.addInventory} findBy="123" record={widgetRecord} />
      {/* @ts-expect-error custom action shouldn't have record */}
      <ShadcnAutoForm action={testApi.widget.addInventory} findBy="123" record={widgetRecord} />

      {/* AutoForm - Global actions */}
      {/* AutoForm - Global actions */}
      <ShadcnAutoForm action={testApi.flipAll} defaultValues={{ inventoryCount: 123 }} />
      <PolarisAutoForm action={testApi.flipAll} defaultValues={{ inventoryCount: 123 }} />

      {/* @ts-expect-error global action shouldn't have findBy */}
      <PolarisAutoForm action={testApi.flipAll} findBy="123" />
      {/* @ts-expect-error global action shouldn't have findBy */}
      <ShadcnAutoForm action={testApi.flipAll} findBy="123" />

      {/* AutoTable */}
      <PolarisAutoTable model={testApi.widget} />
      <ShadcnAutoTable model={testApi.widget} />
    </>
  );
};
