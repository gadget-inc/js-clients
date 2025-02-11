import { useMemo } from "react";
import {
  GadgetFieldType,
  type GadgetBelongsToConfig,
  type GadgetHasManyConfig,
  type GadgetHasManyThroughConfig,
  type GadgetHasOneConfig,
} from "../../internal/gql/graphql.js";
import { isRelationshipField } from "../../use-table/helpers.js";
import type { AutoRelationshipFormProps, OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
import { useMaybeFieldMetadata } from "./useFieldMetadata.js";

export const useSelectedPathsFromDisplayRecord = (props: AutoRelationshipFormProps) => {
  const { field, displayRecord } = props;
  const { metadata } = useMaybeFieldMetadata(field);

  const selectedPaths = useMemo(() => {
    if (!displayRecord || !metadata || !isRelationshipField(metadata)) {
      return [];
    }
    const fieldConfig = metadata.configuration as
      | GadgetHasManyConfig
      | GadgetHasManyThroughConfig
      | GadgetHasOneConfig
      | GadgetBelongsToConfig;

    const selectedPaths = new Set<string>();

    const defaultFieldsToSelect =
      fieldConfig.relatedModel?.fields
        .filter((field) => !isRelationshipField(field) && field.fieldType !== GadgetFieldType.Password)
        .map((field) => field.apiIdentifier) ?? [];

    [displayRecord.primary, displayRecord.secondary, displayRecord.tertiary]
      .flatMap((optionLabel) => getSelectedPathsFromOptionLabel(optionLabel, () => defaultFieldsToSelect))
      .forEach((path) => selectedPaths.add(path));

    return Array.from(selectedPaths);
  }, [displayRecord, metadata]);

  return selectedPaths;
};

export const getSelectedPathsFromOptionLabel = (optionLabel?: OptionLabel, getFieldsToSelectOnDisplayRecordCallback?: () => string[]) => {
  if (!optionLabel) {
    return [];
  }

  if (Array.isArray(optionLabel)) {
    return optionLabel;
  }

  if (typeof optionLabel === "string") {
    return [optionLabel];
  }

  // Callback instead of explicit selection
  return getFieldsToSelectOnDisplayRecordCallback?.().filter((field) => !displayRecordCallbackOmittedFields.includes(field)) ?? [];
};

const displayRecordCallbackOmittedFields = ["createdAt", "updatedAt"];
