import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { BlockStack, Box, Button as PolarisButton, Card as PolarisCard, Label as PolarisLabel } from "@shopify/polaris";
import React from "react";
import { SUITE_NAMES } from "../../../../cypress/support/constants.js";
import { type AutoFormProps } from "../../../../src/auto/AutoForm.js";
import type { AutoRelationshipFormProps, AutoRelationshipInputProps } from "../../../../src/auto/interfaces/AutoRelationshipInputProps.js";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoInput } from "../../../../src/auto/polaris/inputs/PolarisAutoInput.js";
import { PolarisAutoBelongsToForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoBelongsToForm.js";
import { PolarisAutoHasManyForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyForm.js";
import { PolarisAutoHasManyThroughForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyThroughForm.js";
import { PolarisAutoHasManyThroughInput } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyThroughInput.js";
import { PolarisAutoHasOneForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasOneForm.js";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { PolarisSubmitResultBanner } from "../../../../src/auto/polaris/submit/PolarisSubmitResultBanner.js";
import { makeAutocomponents } from "../../../../src/auto/shadcn/unreleasedIndex.js";
import { type OptionsType } from "../../../../src/utils.js";
import { Card as ShadcnCard } from "../../shadcn-defaults/components/Card.js";
import { Label as ShadcnLabel } from "../../shadcn-defaults/components/Label.js";
import { elements } from "../../shadcn-defaults/index.js";
import { DesignSystemSelectionControl, ShadcnAutoComponentsThemeControlWrapper, useDesignSystem } from "../SelectableDesignSystemUtils.js";

export const Button = (props: any) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisButton {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return (
      <elements.Button
        {...props}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.onClick?.();
        }}
      />
    );
  }
  return null;
};

const {
  AutoForm: ShadcnAutoForm,
  AutoInput: ShadcnAutoInput,
  AutoBelongsToForm: ShadcnAutoBelongsToForm,
  AutoHasManyForm: ShadcnAutoHasManyForm,
  AutoHasManyThroughForm: ShadcnAutoHasManyThroughForm,
  AutoHasManyThroughInput: ShadcnAutoHasManyThroughInput,
  AutoHasOneForm: ShadcnAutoHasOneForm,
  AutoSubmit: ShadcnAutoSubmit,
  SubmitResultBanner: ShadcnSubmitResultBanner,
} = makeAutocomponents(elements);

export const Label = (props: any) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisLabel {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnLabel {...props} />;
  }
  return null;
};

export const Card = (props: any) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisCard {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnCard className="p-4" {...props} />;
  }
  return null;
};

export const AutoInput = (props: any) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisAutoInput {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnAutoInput {...props} />;
  }
  return null;
};

export const AutoBelongsToForm = (props: AutoRelationshipFormProps) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisAutoBelongsToForm {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnAutoBelongsToForm {...props} />;
  }
  return null;
};

export const AutoHasManyForm = (props: AutoRelationshipFormProps) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisAutoHasManyForm {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnAutoHasManyForm {...props} />;
  }
  return null;
};

export const AutoHasManyThroughForm = (props: AutoRelationshipFormProps) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisAutoHasManyThroughForm {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnAutoHasManyThroughForm {...props} />;
  }
  return null;
};

export const AutoHasOneForm = (props: AutoRelationshipFormProps) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisAutoHasOneForm {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnAutoHasOneForm {...props} />;
  }
  return null;
};

export const AutoHasManyThroughInput = (props: AutoRelationshipInputProps) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisAutoHasManyThroughInput {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnAutoHasManyThroughInput {...props} />;
  }
  return null;
};

export const AutoSubmit = (props: any) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisAutoSubmit {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnAutoSubmit {...props} />;
  }
  return null;
};

export const SubmitResultBanner = (props: any) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisSubmitResultBanner {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnSubmitResultBanner {...props} />;
  }
  return null;
};

export const SelectableDesignSystemAutoFormStory = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
>(
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc>
) => {
  return (
    <DesignSystemSelectionControl>
      {/* @ts-expect-error - Types have a hard time resolving without a direct references to an action */}
      <PolarisAutoFormStory {...props} />
      {/* @ts-expect-error - Types have a hard time resolving without a direct references to an action */}
      <ShadcnAutoFormStory {...props} />
    </DesignSystemSelectionControl>
  );
};

const PolarisAutoFormStory = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
>(
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc>
) => {
  const { designSystem } = useDesignSystem();

  if (designSystem !== SUITE_NAMES.POLARIS) {
    return null;
  }

  return (
    <div style={{ width: "100%" }}>
      <Box paddingBlockEnd="400">
        <BlockStack gap="200">
          <Card>
            {/* @ts-expect-error - This is a workaround to allow the PolarisAutoForm to be used in the storybook */}
            <PolarisAutoForm {...props} />
          </Card>
        </BlockStack>
      </Box>
    </div>
  );
};

const ShadcnAutoFormStory = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
>(
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc>
) => {
  const { designSystem } = useDesignSystem();

  if (designSystem !== SUITE_NAMES.SHADCN) {
    return null;
  }

  return (
    <ShadcnAutoComponentsThemeControlWrapper>
      <Card>
        {/* @ts-expect-error - This is a workaround to allow the PolarisAutoForm to be used in the storybook */}
        <ShadcnAutoForm {...props} />
      </Card>
    </ShadcnAutoComponentsThemeControlWrapper>
  );
};
