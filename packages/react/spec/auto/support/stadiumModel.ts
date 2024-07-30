import { recordIdInputField } from "./shared.js";

export const stadiumModelInputFields = {
  name: "Stadium",
  apiIdentifier: "stadium",
  fieldType: "Object",
  requiredArgumentForInput: false,
  configuration: {
    __typename: "GadgetObjectFieldConfig",
    fieldType: "Object",
    validations: [],
    name: null,
    fields: [
      {
        name: "Name",
        apiIdentifier: "name",
        fieldType: "String",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "String",
          validations: [],
        },
      },
      {
        name: "Rounds",
        apiIdentifier: "rounds",
        fieldType: "HasMany",
        requiredArgumentForInput: false,
        sortable: false,
        filterable: false,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetHasManyConfig",
          fieldType: "HasMany",
          validations: [],
          relatedModel: {
            key: "DataModel-round",
            apiIdentifier: "round",
            namespace: ["game"],
            defaultDisplayField: {
              apiIdentifier: "name",
            },
            __typename: "GadgetModel",
          },
        },
      },
      {
        name: "City",
        apiIdentifier: "city",
        fieldType: "BelongsTo",
        requiredArgumentForInput: false,
        sortable: false,
        filterable: true,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetBelongsToConfig",
          fieldType: "BelongsTo",
          validations: [],
          relatedModel: {
            key: "DataModel-city",
            apiIdentifier: "city",
            namespace: ["game"],
            defaultDisplayField: {
              apiIdentifier: "name",
            },
            __typename: "GadgetModel",
          },
        },
      },
      {
        name: "Photo",
        apiIdentifier: "photo",
        fieldType: "File",
        requiredArgumentForInput: false,
        sortable: false,
        filterable: false,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "File",
          validations: [
            {
              __typename: "GadgetOnlyImageFileFieldValidation",
              name: "Image file",
              specID: "gadget/validation/valid-image-file",
              allowAnimatedImages: false,
            },
          ],
        },
      },
    ],
  },
  __typename: "GadgetObjectField",
};

export const getStadiumModelMetadata = (
  action: { name: string; apiIdentifier: string; operatesWithRecordIdentity: boolean },
  inputFields = [stadiumModelInputFields] as any[]
) => {
  return {
    gadgetMeta: {
      model: {
        name: "Stadium",
        apiIdentifier: "stadium",
        action: {
          ...action,
          inputFields: action.operatesWithRecordIdentity ? [recordIdInputField, ...inputFields] : inputFields,
          __typename: "GadgetAction",
        },
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};

export const getStadiumRecord = (overrides?: {
  id?: string;
  name?: string;
  photo?: { url?: string; fileName?: string; mimeType?: string };
  tags?: string[];
  type?: string;
}) => {
  const id = overrides?.id ?? "433";
  const name = overrides?.name ?? "Testing Stadium";
  const photoUrl = overrides?.photo?.url ?? "https://assets.gadget.dev/assets/icon.svg";
  const photoFileName = overrides?.photo?.fileName ?? "icon.svg";
  const photoMimeType = overrides?.photo?.mimeType ?? "image/svg+xml";
  const tags = overrides?.tags ?? ["foo", "bar"];
  const type = overrides?.type ?? "football";

  return {
    game: {
      stadium: {
        __typename: "GameStadium",
        id,
        createdAt: "2024-07-08T14:51:29.058Z",
        name,
        photo: {
          url: photoUrl,
          fileName: photoFileName,
          mimeType: photoMimeType,
          __typename: "StoredFile",
        },
        tags,
        type,
        updatedAt: "2024-07-08T15:33:18.861Z",
      },
      __typename: "GameQueries",
    },
    gadgetMeta: {
      hydrations: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};
