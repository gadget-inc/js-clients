import type { FindManyFunction } from "@gadgetinc/api-client-core";
import { BlockStack, Box, Button, LegacyCard } from "@shopify/polaris";
import React, { useState } from "react";
import { SUITE_NAMES } from "../../../../cypress/support/constants.js";
import { type AutoTableProps } from "../../../../src/auto/AutoTable.js";
import { PolarisAutoTable } from "../../../../src/auto/polaris/PolarisAutoTable.js";
import { makeAutocomponents } from "../../../../src/auto/shadcn/unreleasedIndex.js";
import { type OptionsType } from "../../../../src/utils.js";
import { elements } from "../../shadcn-defaults/index.js";

export const SelectableDesignSystemAutoTableStory = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"]
>(
  props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  const [designSystem, setDesignSystem] = useState<string>(SUITE_NAMES.SHADCN);

  return (
    <>
      <div style={{ marginBottom: "16px" }}>
        <elements.Button onClick={() => setDesignSystem(SUITE_NAMES.SHADCN)} style={{ backgroundColor: "white" }}>
          {designSystem === SUITE_NAMES.SHADCN ? "✅ " : ""}Shadcn
        </elements.Button>
        <Button onClick={() => setDesignSystem(SUITE_NAMES.POLARIS)}>{designSystem === SUITE_NAMES.POLARIS ? "✅ " : ""}Polaris</Button>
      </div>

      {designSystem === SUITE_NAMES.POLARIS && <PolarisAutoTableStory {...props} />}
      {designSystem === SUITE_NAMES.SHADCN && <ShadcnAutoTableStory {...props} />}
    </>
  );
};

const PolarisAutoTableStory = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"]
>(
  props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  return (
    <div style={{ width: "100%" }}>
      <Box paddingBlockEnd="400">
        <BlockStack gap="200">
          <LegacyCard>
            <PolarisAutoTable {...props} />
          </LegacyCard>
        </BlockStack>
      </Box>
    </div>
  );
};

const ShadcnAutoTable = makeAutocomponents(elements).AutoTable;
const ShadcnAutoTableStory = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"]
>(
  props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "16px",
      }}
    >
      <ShadcnAutoTable {...props} />
    </div>
  );
};
