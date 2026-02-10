import { type OptionsType } from "@gadgetinc/client-hooks";
import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/core";
import { BlockStack, Box, Button as PolarisButton, Card as PolarisCard, Label as PolarisLabel } from "@shopify/polaris";
import "@shopify/polaris-types";
import type { ComponentProps } from "react";
import React from "react";
import { SUITE_NAMES } from "../../../../cypress/support/constants.js";
import { type AutoFormProps } from "../../../../src/auto/AutoForm.js";
import type {
  AutoHasManyThroughFormProps,
  AutoRelationshipFormProps,
  AutoRelationshipInputProps,
} from "../../../../src/auto/interfaces/AutoRelationshipInputProps.js";
import {
  AutoBelongsToForm as PolarisWCAutoBelongsToForm,
  AutoForm as PolarisWCAutoForm,
  AutoHasManyForm as PolarisWCAutoHasManyForm,
  AutoHasManyThroughForm as PolarisWCAutoHasManyThroughForm,
  AutoHasManyThroughInput as PolarisWCAutoHasManyThroughInput,
  AutoHasOneForm as PolarisWCAutoHasOneForm,
  AutoInput as PolarisWCAutoInput,
  AutoSubmit as PolarisWCAutoSubmit,
  SubmitResultBanner as PolarisWCSubmitResultBanner,
} from "../../../../src/auto/polaris-wc/index.js";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoInput } from "../../../../src/auto/polaris/inputs/PolarisAutoInput.js";
import { PolarisAutoBelongsToForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoBelongsToForm.js";
import { PolarisAutoHasManyForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyForm.js";
import { PolarisAutoHasManyThroughForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyThroughForm.js";
import { PolarisAutoHasManyThroughInput } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyThroughInput.js";
import { PolarisAutoHasOneForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasOneForm.js";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { PolarisSubmitResultBanner } from "../../../../src/auto/polaris/submit/PolarisSubmitResultBanner.js";
import { makeAutocomponents } from "../../../../src/auto/shadcn/index.js";
import { PolarisWCAutoComponentsStory } from "../../polaris-wc/PolarisWCAutoComponentsStory.js";
import { Card as ShadcnCard } from "../../shadcn-defaults/components/Card.js";
import { Label as ShadcnLabel } from "../../shadcn-defaults/components/Label.js";
import { elements } from "../../shadcn-defaults/index.js";
import { DesignSystemSelectionControl, ShadcnAutoComponentsThemeControlWrapper, useDesignSystem } from "../SelectableDesignSystemUtils.js";

export const Button = (props: any) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisButton {...props} />;
  }
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <s-button {...props} />;
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
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <s-text as="label" {...props} />;
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
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <s-section {...props} />;
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
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <PolarisWCAutoInput {...props} />;
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
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <PolarisWCAutoBelongsToForm {...props} />;
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
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <PolarisWCAutoHasManyForm {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnAutoHasManyForm {...props} />;
  }
  return null;
};

export const AutoHasManyThroughForm = (props: AutoHasManyThroughFormProps) => {
  const { designSystem } = useDesignSystem();
  if (designSystem === SUITE_NAMES.POLARIS) {
    return <PolarisAutoHasManyThroughForm {...props} />;
  }
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <PolarisWCAutoHasManyThroughForm {...props} />;
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
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <PolarisWCAutoHasOneForm {...props} />;
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
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <PolarisWCAutoHasManyThroughInput {...props} />;
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
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <PolarisWCAutoSubmit {...props} />;
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
  if (designSystem === SUITE_NAMES.POLARIS_WC) {
    return <PolarisWCSubmitResultBanner {...props} />;
  }
  if (designSystem === SUITE_NAMES.SHADCN) {
    return <ShadcnSubmitResultBanner {...props} />;
  }
  return null;
};

export const SelectableDesignSystemAutoFormStory = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
>(
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc>
) => {
  return (
    <DesignSystemSelectionControl>
      {/* @ts-expect-error - Types have a hard time resolving without a direct references to an action */}
      <PolarisAutoFormStory {...props} />
      {/* @ts-expect-error - Types have a hard time resolving without a direct references to an action */}
      <PolarisWCAutoFormStory {...props} />
      {/* @ts-expect-error - Types have a hard time resolving without a direct references to an action */}
      <ShadcnAutoFormStory {...props} />
    </DesignSystemSelectionControl>
  );
};

const PolarisAutoFormStory = (props: ComponentProps<typeof PolarisAutoForm>) => {
  const { designSystem } = useDesignSystem();

  if (designSystem !== SUITE_NAMES.POLARIS) {
    return null;
  }

  return (
    <div style={{ width: "100%" }}>
      <Box paddingBlockEnd="400">
        <BlockStack gap="200">
          <Card>
            <PolarisAutoForm {...props} />
          </Card>
        </BlockStack>
      </Box>
    </div>
  );
};

const PolarisWCAutoFormStory = (props: ComponentProps<typeof PolarisWCAutoForm>) => {
  const { designSystem } = useDesignSystem();

  if (designSystem !== SUITE_NAMES.POLARIS_WC) {
    return null;
  }

  return (
    <PolarisWCAutoComponentsStory>
      <div style={{ width: "100%" }}>
        <Box paddingBlockEnd="400">
          <BlockStack gap="200">
            <Card>
              <PolarisWCAutoForm {...props} />
            </Card>
          </BlockStack>
        </Box>
      </div>
    </PolarisWCAutoComponentsStory>
  );
};

const ShadcnAutoFormStory = (props: ComponentProps<typeof ShadcnAutoForm>) => {
  const { designSystem } = useDesignSystem();

  if (designSystem !== SUITE_NAMES.SHADCN) {
    return null;
  }

  return (
    <ShadcnAutoComponentsThemeControlWrapper>
      <Card>
        <ShadcnAutoForm {...props} />
      </Card>
    </ShadcnAutoComponentsThemeControlWrapper>
  );
};
