import React from "react";
import { PolarisAutoForm } from "../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoTable } from "../../src/auto/polaris/PolarisAutoTable.js";
import { makeAutocomponents } from "../../src/auto/shadcn/index.js";
import { testApi } from "../apis.js";
import { elements } from "./shadcn-defaults/index.js";

const { AutoForm: ShadcnAutoForm, AutoTable: ShadcnAutoTable } = makeAutocomponents(elements);

/**
 * If the api client breaks the expected types of the auto components, this file will fail in CI on `pnpm typecheck`
 */
export const AutoComponentsApiClientTypeChecker = () => {
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

      {/* AutoForm - Update actions */}
      <PolarisAutoForm action={testApi.widget.update} />
      <ShadcnAutoForm action={testApi.widget.update} />

      {/* AutoForm - Upsert actions */}
      <PolarisAutoForm action={testApi.widget.upsert} />
      <ShadcnAutoForm action={testApi.widget.upsert} />

      {/* AutoForm - Delete actions */}
      <PolarisAutoForm action={testApi.widget.delete} />
      <ShadcnAutoForm action={testApi.widget.delete} />

      {/* AutoForm - Custom actions */}
      <PolarisAutoForm action={testApi.widget.addInventory} />
      <ShadcnAutoForm action={testApi.widget.addInventory} />

      {/* AutoForm - Global actions */}
      <ShadcnAutoForm action={testApi.flipAll} defaultValues={{ inventoryCount: 123 }} />
      <PolarisAutoForm action={testApi.flipAll} defaultValues={{ inventoryCount: 123 }} />

      {/* AutoTable */}
      <PolarisAutoTable model={testApi.widget} />
      <ShadcnAutoTable model={testApi.widget} />
    </>
  );
};
