import type { ActionFunction, BulkActionFunction, GlobalActionFunction } from "../src/index.js";

export const MockWidgetCreateAction = {
  type: "action",
  isBulk: false,
  operationName: "createWidget",
  modelApiIdentifier: "widget",
  variables: {
    widget: {
      type: "CreateWidgetInput",
      required: true,
    },
  },
  hasReturnType: false,
} as unknown as ActionFunction<any, any, any, any, any>;

export const MockBulkUpdateWidgetAction = {
  type: "action",
  operationName: "bulkUpdateWidgets",
  namespace: null,
  modelApiIdentifier: "widget",
  modelSelectionField: "widgets",
  isBulk: true,
  defaultSelection: {
    id: true,
    name: true,
  },
  selectionType: {},
  optionsType: {},
  schemaType: null,
  variablesType: void 0,
  variables: {
    inputs: {
      required: true,
      type: "[BulkUpdateWidgetsInput!]",
    },
  },
  acceptsModelInput: true,
  hasReturnType: false,
} as unknown as BulkActionFunction<any, any, any, any, any>;

export const MockBulkFlipDownWidgetsAction = {
  type: "action",
  operationName: "bulkFlipDownWidgets",
  namespace: null,
  modelApiIdentifier: "widget",
  modelSelectionField: "widgets",
  isBulk: true,
  defaultSelection: {
    id: true,
    name: true,
  },
  selectionType: {},
  optionsType: {},
  schemaType: null,
  variablesType: void 0,
  variables: {
    ids: {
      required: true,
      type: "[GadgetID!]",
    },
  },
  hasReturnType: false,
} as unknown as BulkActionFunction<any, any, any, any, any>;

export const MockGlobalAction = {
  type: "globalAction",
  isBulk: false,
  operationName: "flipAllWidgets",
  variables: {
    toState: {
      type: "String",
      required: true,
    },
  },
} as unknown as GlobalActionFunction<any>;
