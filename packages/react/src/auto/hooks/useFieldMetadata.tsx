import { useAutoFormMetadata } from "../AutoFormContext.js";

export const useFieldMetadata = (fieldApiIdentifier: string) => {
  const { model, fields } = useAutoFormMetadata();
  const metaDataPath =
    model && model.apiIdentifier
      ? model.apiIdentifier + "." + fieldApiIdentifier // Model action
      : fieldApiIdentifier; // Global action

  const targetFieldMetadata = fields.find((field) => field.path === metaDataPath);

  if (!targetFieldMetadata) {
    throw new Error(`Field "${fieldApiIdentifier}" not found in metadata`);
  }

  return {
    path: metaDataPath,
    metadata: targetFieldMetadata.metadata,
  };
};
