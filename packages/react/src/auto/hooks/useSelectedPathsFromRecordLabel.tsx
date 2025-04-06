import { useMemo } from "react";
import {
  GadgetFieldType,
  type GadgetBelongsToConfig,
  type GadgetHasManyConfig,
  type GadgetHasManyThroughConfig,
  type GadgetHasOneConfig,
} from "../../internal/gql/graphql.js";
import { isRelationshipField } from "../../use-table/helpers.js";
import {
  getOptionLabelsFromRecordLabel,
  type AutoRelationshipFormProps,
  type OptionLabel,
} from "../interfaces/AutoRelationshipInputProps.js";
import { useMaybeFieldMetadata } from "./useFieldMetadata.js";

export const useSelectedPathsFromRecordLabel = (props: Pick<AutoRelationshipFormProps, "field" | "recordLabel">) => {
  const { field, recordLabel } = props;
  const { metadata } = useMaybeFieldMetadata(field);

  const selectedPaths = useMemo(() => {
    if (!recordLabel || !metadata || !isRelationshipField(metadata)) {
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

    getOptionLabelsFromRecordLabel(recordLabel)
      .flatMap((optionLabel) => getSelectedPathsFromOptionLabel(optionLabel, () => defaultFieldsToSelect))
      .forEach((path) => selectedPaths.add(path));

    return Array.from(selectedPaths);
  }, [recordLabel, metadata]);

  return selectedPaths;
};

export const getSelectedPathsFromOptionLabel = (optionLabel?: OptionLabel, getFieldsToSelectOnRecordLabelCallback?: () => string[]) => {
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
  return getFieldsToSelectOnRecordLabelCallback?.().filter((field) => !recordLabelCallbackOmittedFields.includes(field)) ?? [];
};

const recordLabelCallbackOmittedFields = ["createdAt", "updatedAt"];
