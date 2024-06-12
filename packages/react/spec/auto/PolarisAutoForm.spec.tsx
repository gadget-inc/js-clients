import { act, fireEvent, render, screen } from "@testing-library/react";
import { testApi as api } from "../apis.js";
import { MockClientProvider, MockClientWrapper, mockUrqlClient } from "../testWrappers.js";
import { PolarisAutoForm } from "../../src/auto/polaris/PolarisAutoForm.js";
import React, { ReactNode } from 'react';
import { AppProvider } from "@shopify/polaris";
import translations from '@shopify/polaris/locales/en.json';
import {PolarisAutoInput} from "../../src/auto/polaris/inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "../../src/auto/polaris/PolarisAutoSubmit.js";
import { userEvent } from "@testing-library/user-event";

const PolarisMockedProviders = (props: {children: ReactNode}) => {
  return (
    <MockClientProvider api={api}>
      <AppProvider i18n={translations}>
          {props.children}
      </AppProvider>
    </MockClientProvider>
  )
}


describe("PolarisAutoForm", () => {
  describe("when used as a one liner", () => {
    describe("for widget create", () => {
      test("it renders the name input", async () => {
        const {getByLabelText} = render( <PolarisAutoForm action={api.widget.create} /> , { wrapper: PolarisMockedProviders })
        loadMockWidgetCreateMetadata()
        expect(getByLabelText("Name")).toBeInTheDocument()
      });
    })

  });

  describe("when used in expanded form with children", () => {
    describe("for widget create", () => {
      test("it renders the name input", async () => {
        const {getByLabelText} = render( 
        <PolarisAutoForm action={api.widget.create}>
          <PolarisAutoInput field="name" />
        </PolarisAutoForm> , { wrapper: PolarisMockedProviders })
        loadMockWidgetCreateMetadata()
        expect(getByLabelText("Name")).toBeInTheDocument()
      });
    })

    describe("AutoSubmit", () => {
      test("it submits the form", async () => {
        const user = userEvent.setup()

        const {getByRole, getByLabelText} = render(
          <PolarisAutoForm action={api.widget.create}>
            <PolarisAutoInput field="name" />
            <PolarisAutoInput field="inventoryCount" />
            <PolarisAutoSubmit />
          </PolarisAutoForm> , { wrapper: PolarisMockedProviders })

        loadMockWidgetCreateMetadata()

        const submitButton = getByRole("button")  
        expect(submitButton).toHaveTextContent("Submit")

        await act(async () => {
          await user.click(getByLabelText("Name"))
          await user.keyboard("test record")

          await user.click(getByLabelText("Inventory count"))
          await user.keyboard("22")

          await user.click(getByRole("button"))
        })

        const mutation = mockUrqlClient.executeMutation.mock.calls[0][0]
        const mutationName = mutation.query.definitions[0].name.value
        const variables = mockUrqlClient.executeMutation.mock.calls[0][0].variables.widget

        expect(mutationName).toEqual("createWidget")
        expect(variables.inventoryCount).toEqual(22)
        expect(variables.name).toEqual("test record")
      })

      test("you can pass a custom label", () => {
        const {getByRole, getByText} = render(
          <PolarisAutoForm action={api.widget.create}>
            <PolarisAutoInput field="name" />
            <PolarisAutoSubmit>Save</PolarisAutoSubmit>
          </PolarisAutoForm> , { wrapper: PolarisMockedProviders })

        loadMockWidgetCreateMetadata()

        expect(getByRole("button")).toHaveTextContent("Save")
      });
    })
  })
});

function loadMockWidgetCreateMetadata() {
  expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
    model: "widget", action: 'create'
})

mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    "data": {
      "gadgetMeta": {
        "model": {
          "name": "Widget",
          "action": {
            "name": "Create",
            "apiIdentifier": "create",
            "inputFields": [
              {
                "name": "Widget",
                "apiIdentifier": "widget",
                "fieldType": "Object",
                "requiredArgumentForInput": false,
                "configuration": {
                  "__typename": "GadgetObjectFieldConfig",
                  "fieldType": "Object",
                  "name": null,
                  "fields": [
                    {
                      "name": "Name",
                      "apiIdentifier": "name",
                      "fieldType": "String",
                      "requiredArgumentForInput": true,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "String"
                      }
                    },
                    {
                      "name": "Inventory count",
                      "apiIdentifier": "inventoryCount",
                      "fieldType": "Number",
                      "requiredArgumentForInput": true,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "Number"
                      }
                    },
                    {
                      "name": "Gizmos",
                      "apiIdentifier": "gizmos",
                      "fieldType": "HasMany",
                      "requiredArgumentForInput": false,
                      "sortable": false,
                      "filterable": false,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetHasManyConfig",
                        "fieldType": "HasMany",
                        "relatedModel": {
                          "apiIdentifier": "gizmo",
                          "__typename": "GadgetModel"
                        }
                      }
                    },
                    {
                      "name": "Anything",
                      "apiIdentifier": "anything",
                      "fieldType": "JSON",
                      "requiredArgumentForInput": false,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "JSON"
                      }
                    },
                    {
                      "name": "Description",
                      "apiIdentifier": "description",
                      "fieldType": "RichText",
                      "requiredArgumentForInput": false,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "RichText"
                      }
                    },
                    {
                      "name": "Category",
                      "apiIdentifier": "category",
                      "fieldType": "Enum",
                      "requiredArgumentForInput": false,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetEnumConfig",
                        "fieldType": "Enum",
                        "allowMultiple": true,
                        "options": [
                          {
                            "name": "Whoosits",
                            "color": "#FCFCFC",
                            "__typename": "GadgetEnumOption"
                          },
                          {
                            "name": "Whatsits",
                            "color": "#606060",
                            "__typename": "GadgetEnumOption"
                          },
                          {
                            "name": "Galores",
                            "color": "#DF2222",
                            "__typename": "GadgetEnumOption"
                          }
                        ]
                      }
                    },
                    {
                      "name": "Starts at",
                      "apiIdentifier": "startsAt",
                      "fieldType": "DateTime",
                      "requiredArgumentForInput": false,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetDateTimeConfig",
                        "fieldType": "DateTime"
                      }
                    },
                    {
                      "name": "Is checked",
                      "apiIdentifier": "isChecked",
                      "fieldType": "Boolean",
                      "requiredArgumentForInput": false,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "Boolean"
                      }
                    },
                    {
                      "name": "Metafields",
                      "apiIdentifier": "metafields",
                      "fieldType": "JSON",
                      "requiredArgumentForInput": false,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "JSON"
                      }
                    },
                    {
                      "name": "Roles",
                      "apiIdentifier": "roles",
                      "fieldType": "RoleAssignments",
                      "requiredArgumentForInput": false,
                      "sortable": false,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "RoleAssignments"
                      }
                    },
                    {
                      "name": "Birthday",
                      "apiIdentifier": "birthday",
                      "fieldType": "DateTime",
                      "requiredArgumentForInput": false,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetDateTimeConfig",
                        "fieldType": "DateTime"
                      }
                    },
                    {
                      "name": "Color",
                      "apiIdentifier": "color",
                      "fieldType": "Color",
                      "requiredArgumentForInput": false,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "Color"
                      }
                    },
                    {
                      "name": "Secret key",
                      "apiIdentifier": "secretKey",
                      "fieldType": "EncryptedString",
                      "requiredArgumentForInput": false,
                      "sortable": false,
                      "filterable": false,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "EncryptedString"
                      }
                    },
                    {
                      "name": "Embedding",
                      "apiIdentifier": "embedding",
                      "fieldType": "Vector",
                      "requiredArgumentForInput": false,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "Vector"
                      }
                    },
                    {
                      "name": "Section",
                      "apiIdentifier": "section",
                      "fieldType": "BelongsTo",
                      "requiredArgumentForInput": false,
                      "sortable": false,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetBelongsToConfig",
                        "fieldType": "BelongsTo",
                        "relatedModel": {
                          "apiIdentifier": "section",
                          "__typename": "GadgetModel"
                        }
                      }
                    },
                    {
                      "name": "Must be long string",
                      "apiIdentifier": "mustBeLongString",
                      "fieldType": "String",
                      "requiredArgumentForInput": false,
                      "sortable": true,
                      "filterable": true,
                      "__typename": "GadgetModelField",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                        "fieldType": "String"
                      }
                    }
                  ]
                },
                "__typename": "GadgetObjectField"
              }
            ],
            "__typename": "GadgetAction"
          },
          "__typename": "GadgetModel"
        },
        "__typename": "GadgetApplicationMeta"
      }
    }
  })
}