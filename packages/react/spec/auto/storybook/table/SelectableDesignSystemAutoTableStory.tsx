import type { OptionsType } from "@gadgetinc/client-hooks";
import type { FindManyFunction } from "@gadgetinc/core";
import { BlockStack, Box, LegacyCard } from "@shopify/polaris";
import React from "react";
import { SUITE_NAMES } from "../../../../cypress/support/constants.js";
import { type AutoTableProps } from "../../../../src/auto/AutoTable.js";
import { PolarisWCAutoTable } from "../../../../src/auto/polaris-wc/PolarisWCAutoTable.js";
import { PolarisAutoTable } from "../../../../src/auto/polaris/PolarisAutoTable.js";
import { makeAutocomponents } from "../../../../src/auto/shadcn/index.js";
import { PolarisWCAutoComponentsStory } from "../../polaris-wc/PolarisWCAutoComponentsStory.js";
import { elements } from "../../shadcn-defaults/index.js";
import { DesignSystemSelectionControl, ShadcnAutoComponentsThemeControlWrapper, useDesignSystem } from "../SelectableDesignSystemUtils.js";

export const SelectableDesignSystemAutoTableStory = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"],
>(
  props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  return (
    <DesignSystemSelectionControl>
      <PolarisAutoTableStory {...props} />
      <ShadcnAutoTableStory {...props} />
      <PolarisWCAutoTableStory {...props} />
    </DesignSystemSelectionControl>
  );
};

const PolarisAutoTableStory = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"],
>(
  props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  const { designSystem } = useDesignSystem();

  if (designSystem !== SUITE_NAMES.POLARIS) {
    return null;
  }

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
  Options extends FinderFunction["optionsType"],
>(
  props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  const { designSystem } = useDesignSystem();

  if (designSystem !== SUITE_NAMES.SHADCN) {
    return null;
  }

  return (
    <ShadcnAutoComponentsThemeControlWrapper>
      <div className={`bg-background flex flex-col p-4`} style={{ maxHeight: "85vh" }}>
        <ShadcnAutoTable {...props} />
      </div>
    </ShadcnAutoComponentsThemeControlWrapper>
  );
};

const PolarisWCAutoTableStory = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"],
>(
  props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  const { designSystem } = useDesignSystem();

  if (designSystem !== SUITE_NAMES.POLARIS_WC) {
    return null;
  }

  return (
    <PolarisWCAutoComponentsStory>
      <div style={{ width: "100%", padding: "16px" }}>
        <PolarisWCAutoTable {...props} />
      </div>
    </PolarisWCAutoComponentsStory>
  );
};
