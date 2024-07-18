import type { ActionFunction, BulkActionFunction, GlobalActionFunction } from "../src/index.js";

export const MockWidgetCreateAction = {
  type: "action",
  isBulk: false,
  defaultSelection: {
    id: true,
    name: true,
  },
  operationName: "createWidget",
  operationReturnType: "CreateWidget",
  modelApiIdentifier: "widget",
  operatesWithRecordIdentity: false,
  acceptsModelInput: true,
  modelSelectionField: "widget",
  variables: {
    widget: {
      type: "CreateWidgetInput",
      required: true,
    },
  },
  hasReturnType: false,
} as unknown as ActionFunction<
  { select?: { id?: boolean; name?: boolean } },
  any,
  { id?: boolean; name?: boolean },
  { id: string; name: string },
  { id: true; name: true }
>;

export const MockWidgetUpdateAction = {
  type: "action",
  isBulk: false,
  defaultSelection: {
    id: true,
    name: true,
  },
  operationName: "updateWidget",
  operationReturnType: "UpdateWidget",
  modelApiIdentifier: "widget",
  operatesWithRecordIdentity: true,
  acceptsModelInput: true,
  modelSelectionField: "widget",
  variables: {
    widget: {
      type: "UpdateWidgetInput",
      required: true,
    },
  },
  hasReturnType: false,
} as unknown as ActionFunction<
  { select?: { id?: boolean; name?: boolean } },
  any,
  { id?: boolean; name?: boolean },
  { id: string; name: string },
  { id: true; name: true }
>;

export const MockBulkCreateWidgetAction = {
  type: "action",
  operationName: "bulkCreateWidgets",
  operationReturnType: "CreateWidget",
  namespace: null,
  modelApiIdentifier: "widget",
  operatesWithRecordIdentity: false,
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
      type: "[BulkCreateeWidgetsInput!]",
    },
  },
  acceptsModelInput: true,
  hasReturnType: false,
} as unknown as BulkActionFunction<any, any, any, any, any>;

export const MockBulkUpdateWidgetAction = {
  type: "action",
  operationName: "bulkUpdateWidgets",
  operationReturnType: "UpdateWidget",
  namespace: null,
  modelApiIdentifier: "widget",
  operatesWithRecordIdentity: true,
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
  operationReturnType: "FlipDownWidget",
  namespace: null,
  modelApiIdentifier: "widget",
  operatesWithRecordIdentity: true,
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
  operationReturnType: "FlipAllWidgets",
  variables: {
    toState: {
      type: "String",
      required: true,
    },
  },
} as unknown as GlobalActionFunction<any>;
