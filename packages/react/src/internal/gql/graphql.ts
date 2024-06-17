/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any };
  /** A date-time or full-date string at UTC, such as 2007-12-03 or 2007-12-03T10:15:30Z, compliant with the `full-date` or `date-time` formats outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. If a full date-time is passed, timezone will be ignored and it will be truncated to just the date part. */
  DateOrDateTime: { input: any; output: any };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any };
  /** The ID of a record in Gadget */
  GadgetID: { input: any; output: any };
  /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
  HydrationPlan: { input: any; output: any };
  /** Represents one gizmo result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalGizmoRecord: { input: any; output: any };
  /** Represents one modelA result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalModelARecord: { input: any; output: any };
  /** Represents one section result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalSectionRecord: { input: any; output: any };
  /** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalSessionRecord: { input: any; output: any };
  /** Represents one user result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalUserRecord: { input: any; output: any };
  /** Represents one widget result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalWidgetRecord: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any };
  /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
  RecordState: { input: any; output: any };
  /** Represents the possible values of the fieldA enum. */
  WidgetCategoryEnum: { input: any; output: any };
};

export type AddInventoryWidgetResult = {
  __typename?: "AddInventoryWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

/** Input object for specifying the context of a mutation trigger */
export type AppGraphQlTriggerMutationContext = {
  /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
  sessionID?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

export type BackgroundAction = {
  __typename?: "BackgroundAction";
  /** The ID of the background action */
  id: Scalars["String"]["output"];
  outcome?: Maybe<BackgroundActionOutcome>;
  result?: Maybe<BackgroundActionResult>;
};

/** One action enqueued for execution in the background */
export type BackgroundActionHandle = {
  __typename?: "BackgroundActionHandle";
  /** The ID of the background action */
  id: Scalars["String"]["output"];
};

export enum BackgroundActionOutcome {
  Completed = "completed",
  Failed = "failed",
}

export enum BackgroundActionPriority {
  Default = "DEFAULT",
  High = "HIGH",
  Low = "LOW",
  Platform = "PLATFORM",
}

/** A descriptor of the queue to enqueue a background action into. Actions enqueued into the same queue will process in roughly the order they are enqueued, limited by the concurrency settings. */
export type BackgroundActionQueue = {
  /** The maximum number of actions that will be run at the same time. Defaults to 1 if not passed (only one job per key at once). */
  maxConcurrency?: InputMaybe<Scalars["Int"]["input"]>;
  /** The identifier for this queue. */
  name: Scalars["String"]["input"];
};

export type BackgroundActionResult =
  | AddInventoryWidgetResult
  | CreateGizmoResult
  | CreateModelAResult
  | CreateSectionResult
  | CreateTestDataResult
  | CreateWidgetResult
  | DeleteGizmoResult
  | DeleteModelAResult
  | DeleteSectionResult
  | DeleteUserResult
  | DeleteWidgetResult
  | SignOutUserResult
  | UpdateGizmoResult
  | UpdateModelAResult
  | UpdateSectionResult
  | UpdateUserResult
  | UpdateWidgetResult;

export type BackgroundActionRetryPolicy = {
  /** The exponential backoff factor to use for calculating the retry delay for successive retries. Set this higher to grow the delay faster with each retry attempt. Default is 2. */
  backoffFactor?: InputMaybe<Scalars["Int"]["input"]>;
  /** How long to delay the first retry attempt, in milliseconds. Default is 1000. */
  initialInterval?: InputMaybe<Scalars["Int"]["input"]>;
  /** The maximum amount of time to delay a retry while exponentially backing off in milliseconds. Default is not set, so the retry can backoff indefinitely */
  maxInterval?: InputMaybe<Scalars["Int"]["input"]>;
  /** If true, the retry interval will be randomized by a small amount to avoid all retries happening at the same time. Default is false. */
  randomizeInterval?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The number of repeat attempts to make if the initial attempt fails. Defaults to 10. Note: the total number of attempts will be this number plus one -- this counts the number of retries *after* the first attempt. */
  retryCount?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BackgroundMutations = {
  __typename?: "BackgroundMutations";
  addInventoryWidget: EnqueueBackgroundActionResult;
  bulkAddInventoryWidgets: BulkEnqueueBackgroundActionResult;
  bulkCreateGizmos: BulkEnqueueBackgroundActionResult;
  bulkCreateModelAs: BulkEnqueueBackgroundActionResult;
  bulkCreateSections: BulkEnqueueBackgroundActionResult;
  bulkCreateWidgets: BulkEnqueueBackgroundActionResult;
  bulkDeleteGizmos: BulkEnqueueBackgroundActionResult;
  bulkDeleteModelAs: BulkEnqueueBackgroundActionResult;
  bulkDeleteSections: BulkEnqueueBackgroundActionResult;
  bulkDeleteUsers: BulkEnqueueBackgroundActionResult;
  bulkDeleteWidgets: BulkEnqueueBackgroundActionResult;
  bulkSignOutUsers: BulkEnqueueBackgroundActionResult;
  bulkUpdateGizmos: BulkEnqueueBackgroundActionResult;
  bulkUpdateModelAs: BulkEnqueueBackgroundActionResult;
  bulkUpdateSections: BulkEnqueueBackgroundActionResult;
  bulkUpdateUsers: BulkEnqueueBackgroundActionResult;
  bulkUpdateWidgets: BulkEnqueueBackgroundActionResult;
  createGizmo: EnqueueBackgroundActionResult;
  createModelA: EnqueueBackgroundActionResult;
  createSection: EnqueueBackgroundActionResult;
  createTestData: EnqueueBackgroundActionResult;
  createWidget: EnqueueBackgroundActionResult;
  deleteGizmo: EnqueueBackgroundActionResult;
  deleteModelA: EnqueueBackgroundActionResult;
  deleteSection: EnqueueBackgroundActionResult;
  deleteUser: EnqueueBackgroundActionResult;
  deleteWidget: EnqueueBackgroundActionResult;
  signOutUser: EnqueueBackgroundActionResult;
  updateGizmo: EnqueueBackgroundActionResult;
  updateModelA: EnqueueBackgroundActionResult;
  updateSection: EnqueueBackgroundActionResult;
  updateUser: EnqueueBackgroundActionResult;
  updateWidget: EnqueueBackgroundActionResult;
};

export type BackgroundMutationsAddInventoryWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  count?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsBulkAddInventoryWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkAddInventoryWidgetsInput>;
};

export type BackgroundMutationsBulkCreateGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateGizmosInput>;
};

export type BackgroundMutationsBulkCreateModelAsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<Scalars["JSON"]["input"]>;
};

export type BackgroundMutationsBulkCreateSectionsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateSectionsInput>;
};

export type BackgroundMutationsBulkCreateWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateWidgetsInput>;
};

export type BackgroundMutationsBulkDeleteGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteModelAsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteSectionsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkSignOutUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkSignOutUsersInput>;
};

export type BackgroundMutationsBulkUpdateGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateGizmosInput>;
};

export type BackgroundMutationsBulkUpdateModelAsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkUpdateSectionsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateSectionsInput>;
};

export type BackgroundMutationsBulkUpdateUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateUsersInput>;
};

export type BackgroundMutationsBulkUpdateWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateWidgetsInput>;
};

export type BackgroundMutationsCreateGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<CreateGizmoInput>;
};

export type BackgroundMutationsCreateModelAArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
};

export type BackgroundMutationsCreateSectionArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  section?: InputMaybe<CreateSectionInput>;
};

export type BackgroundMutationsCreateTestDataArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
};

export type BackgroundMutationsCreateWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  widget?: InputMaybe<CreateWidgetInput>;
};

export type BackgroundMutationsDeleteGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteModelAArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteSectionArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsSignOutUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<SignOutUserInput>;
};

export type BackgroundMutationsUpdateGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<UpdateGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateModelAArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateSectionArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  section?: InputMaybe<UpdateSectionInput>;
};

export type BackgroundMutationsUpdateUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<UpdateUserInput>;
};

export type BackgroundMutationsUpdateWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  widget?: InputMaybe<UpdateWidgetInput>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  notEquals?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BulkAddInventoryWidgetsInput = {
  count?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the addInventory on the widget model in bulk. */
export type BulkAddInventoryWidgetsResult = {
  __typename?: "BulkAddInventoryWidgetsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed widget records by each sent bulk action. Returned in the same order as the input bulk action params. */
  widgets?: Maybe<Array<Maybe<Widget>>>;
};

export type BulkCreateGizmosInput = {
  gizmo?: InputMaybe<CreateGizmoInput>;
};

/** The output when running the create on the gizmo model in bulk. */
export type BulkCreateGizmosResult = {
  __typename?: "BulkCreateGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed gizmo records by each sent bulk action. Returned in the same order as the input bulk action params. */
  gizmos?: Maybe<Array<Maybe<Gizmo>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the create on the modelA model in bulk. */
export type BulkCreateModelAsResult = {
  __typename?: "BulkCreateModelAsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed modelA records by each sent bulk action. Returned in the same order as the input bulk action params. */
  modelAs?: Maybe<Array<Maybe<ModelA>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateSectionsInput = {
  section?: InputMaybe<CreateSectionInput>;
};

/** The output when running the create on the section model in bulk. */
export type BulkCreateSectionsResult = {
  __typename?: "BulkCreateSectionsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed section records by each sent bulk action. Returned in the same order as the input bulk action params. */
  sections?: Maybe<Array<Maybe<Section>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateWidgetsInput = {
  widget?: InputMaybe<CreateWidgetInput>;
};

/** The output when running the create on the widget model in bulk. */
export type BulkCreateWidgetsResult = {
  __typename?: "BulkCreateWidgetsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed widget records by each sent bulk action. Returned in the same order as the input bulk action params. */
  widgets?: Maybe<Array<Maybe<Widget>>>;
};

/** The output when running the delete on the gizmo model in bulk. */
export type BulkDeleteGizmosResult = {
  __typename?: "BulkDeleteGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the modelA model in bulk. */
export type BulkDeleteModelAsResult = {
  __typename?: "BulkDeleteModelAsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the section model in bulk. */
export type BulkDeleteSectionsResult = {
  __typename?: "BulkDeleteSectionsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the user model in bulk. */
export type BulkDeleteUsersResult = {
  __typename?: "BulkDeleteUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the widget model in bulk. */
export type BulkDeleteWidgetsResult = {
  __typename?: "BulkDeleteWidgetsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The value returned from bulk enqueuing actions to run in the background */
export type BulkEnqueueBackgroundActionResult = {
  __typename?: "BulkEnqueueBackgroundActionResult";
  backgroundActions?: Maybe<Array<BackgroundActionHandle>>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type BulkSignOutUsersInput = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<SignOutUserInput>;
};

/** The output when running the signOut on the user model in bulk. */
export type BulkSignOutUsersResult = {
  __typename?: "BulkSignOutUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: Maybe<Array<Maybe<User>>>;
};

export type BulkUpdateGizmosInput = {
  gizmo?: InputMaybe<UpdateGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the gizmo model in bulk. */
export type BulkUpdateGizmosResult = {
  __typename?: "BulkUpdateGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed gizmo records by each sent bulk action. Returned in the same order as the input bulk action params. */
  gizmos?: Maybe<Array<Maybe<Gizmo>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the update on the modelA model in bulk. */
export type BulkUpdateModelAsResult = {
  __typename?: "BulkUpdateModelAsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed modelA records by each sent bulk action. Returned in the same order as the input bulk action params. */
  modelAs?: Maybe<Array<Maybe<ModelA>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateSectionsInput = {
  id: Scalars["GadgetID"]["input"];
  section?: InputMaybe<UpdateSectionInput>;
};

/** The output when running the update on the section model in bulk. */
export type BulkUpdateSectionsResult = {
  __typename?: "BulkUpdateSectionsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed section records by each sent bulk action. Returned in the same order as the input bulk action params. */
  sections?: Maybe<Array<Maybe<Section>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateUsersInput = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<UpdateUserInput>;
};

/** The output when running the update on the user model in bulk. */
export type BulkUpdateUsersResult = {
  __typename?: "BulkUpdateUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: Maybe<Array<Maybe<User>>>;
};

export type BulkUpdateWidgetsInput = {
  id: Scalars["GadgetID"]["input"];
  widget?: InputMaybe<UpdateWidgetInput>;
};

/** The output when running the update on the widget model in bulk. */
export type BulkUpdateWidgetsResult = {
  __typename?: "BulkUpdateWidgetsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed widget records by each sent bulk action. Returned in the same order as the input bulk action params. */
  widgets?: Maybe<Array<Maybe<Widget>>>;
};

/** A list of actions to run when converging a set of records. Pass this to a converge operation to override which actions will be used to create, update, and delete records while moving to the new set of specified records. */
export type ConvergeActionMap = {
  /** One of the model action's API identifiers. Specifies which action to use to create new records that are in the set of specified records but not yet in the database. Defaults to the action named `create` if it exists. */
  create?: InputMaybe<Scalars["String"]["input"]>;
  /** One of the model action's API identifiers. Specifies which action to use to delete records that are not in the set of specified records but exist in the database. Defaults to the action named `delete` if it exists. */
  delete?: InputMaybe<Scalars["String"]["input"]>;
  /** One of the model action's API identifiers. Specifies which action to use to update new records that are in the set of specified records and already in the database, but maybe have different field values. Defaults to the action named `update` if it exists. */
  update?: InputMaybe<Scalars["String"]["input"]>;
};

/** Declaratively specifies the list of records a relationship should become and invokes the given actions in order to change the current state to get to the newly specified state. */
export type ConvergeGizmoInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeGizmoValues>>;
};

/** One element of a ConvergeGizmoInput record converge list */
export type ConvergeGizmoValues = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  orientation?: InputMaybe<Scalars["String"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

/** Declaratively specifies the list of records a relationship should become and invokes the given actions in order to change the current state to get to the newly specified state. */
export type ConvergeWidgetInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeWidgetValues>>;
};

/** One element of a ConvergeWidgetInput record converge list */
export type ConvergeWidgetValues = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  mustBeLongString?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CreateGizmoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  orientation?: InputMaybe<Scalars["String"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type CreateGizmoResult = {
  __typename?: "CreateGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type CreateModelAResult = {
  __typename?: "CreateModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  modelA?: Maybe<ModelA>;
  success: Scalars["Boolean"]["output"];
};

export type CreateSectionInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type CreateSectionResult = {
  __typename?: "CreateSectionResult";
  errors?: Maybe<Array<ExecutionError>>;
  section?: Maybe<Section>;
  success: Scalars["Boolean"]["output"];
};

export type CreateTestDataResult = {
  __typename?: "CreateTestDataResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type CreateWidgetInput = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  mustBeLongString?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CreateWidgetResult = {
  __typename?: "CreateWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

export type DateFilter = {
  after?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  afterOrOn?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  before?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  beforeOrOn?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  equals?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  greaterThan?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  greaterThanOrEqual?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateOrDateTime"]["input"]>>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  lessThan?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  lessThanOrEqual?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  notEquals?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateOrDateTime"]["input"]>>>;
};

export type DateTimeFilter = {
  after?: InputMaybe<Scalars["DateTime"]["input"]>;
  before?: InputMaybe<Scalars["DateTime"]["input"]>;
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  greaterThan?: InputMaybe<Scalars["DateTime"]["input"]>;
  greaterThanOrEqual?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  lessThan?: InputMaybe<Scalars["DateTime"]["input"]>;
  lessThanOrEqual?: InputMaybe<Scalars["DateTime"]["input"]>;
  notEquals?: InputMaybe<Scalars["DateTime"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
};

export type DeleteGizmoResult = {
  __typename?: "DeleteGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteModelAResult = {
  __typename?: "DeleteModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteSectionResult = {
  __typename?: "DeleteSectionResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteUserResult = {
  __typename?: "DeleteUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteWidgetResult = {
  __typename?: "DeleteWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

/** One upload target to use for the Direct Upload style of sending files to Gadget */
export type DirectUploadToken = {
  __typename?: "DirectUploadToken";
  /** The token to pass to an action to reference the uploaded file. */
  token: Scalars["String"]["output"];
  /** The URL to upload a file to. */
  url: Scalars["String"]["output"];
};

export type EnqueueBackgroundActionOptions = {
  /** A fixed ID to assign to this background action. If not passed, a random ID will be generated and assigned. */
  id?: InputMaybe<Scalars["String"]["input"]>;
  /** The priority for executing this action. */
  priority?: InputMaybe<BackgroundActionPriority>;
  /** Group actions into the same queue and limit the concurrency they can run with. */
  queue?: InputMaybe<BackgroundActionQueue>;
  /** Options governing if and how this action will be retried if it fails. */
  retries?: InputMaybe<BackgroundActionRetryPolicy>;
  /** Actions won't be started until after this time. */
  startAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** The value returned from enqueuing an action to run in the background */
export type EnqueueBackgroundActionResult = {
  __typename?: "EnqueueBackgroundActionResult";
  backgroundAction?: Maybe<BackgroundActionHandle>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type ExecutionError = {
  /** The Gadget platform error code for this error. */
  code: Scalars["String"]["output"];
  /** The human facing error message for this error. */
  message: Scalars["String"]["output"];
  /** The stack for any exception that caused the error. Only available for super users. */
  stack?: Maybe<Scalars["String"]["output"]>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  greaterThan?: InputMaybe<Scalars["Float"]["input"]>;
  greaterThanOrEqual?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  lessThan?: InputMaybe<Scalars["Float"]["input"]>;
  lessThanOrEqual?: InputMaybe<Scalars["Float"]["input"]>;
  notEquals?: InputMaybe<Scalars["Float"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

export type GadgetAction = {
  __typename?: "GadgetAction";
  acceptsInput: Scalars["Boolean"]["output"];
  apiIdentifier: Scalars["String"]["output"];
  availableInBulk: Scalars["Boolean"]["output"];
  bulkApiIdentifier?: Maybe<Scalars["String"]["output"]>;
  bulkInvokedByIDOnly: Scalars["Boolean"]["output"];
  examples?: Maybe<GadgetActionGraphQlType>;
  hasAmbiguousIdentifier: Scalars["Boolean"]["output"];
  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect: Scalars["Boolean"]["output"];
  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect: Scalars["Boolean"]["output"];
  inputFields: Array<GadgetObjectField>;
  isCreateOrUpdateAction: Scalars["Boolean"]["output"];
  isDeleteAction: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  namespace: Array<Scalars["String"]["output"]>;
  operatesWithRecordIdentity: Scalars["Boolean"]["output"];
  /** @deprecated This field will be removed. */
  possibleTransitions: Scalars["JSONObject"]["output"];
  requiresInput: Scalars["Boolean"]["output"];
  triggers?: Maybe<Array<GadgetTrigger>>;
};

export type GadgetActionGraphQlType = {
  __typename?: "GadgetActionGraphQLType";
  bulkOutputGraphQLTypeSDL?: Maybe<Scalars["String"]["output"]>;
  exampleBulkGraphQLMutation?: Maybe<Scalars["String"]["output"]>;
  exampleBulkGraphQLVariables?: Maybe<Scalars["JSON"]["output"]>;
  exampleBulkImperativeInvocation?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation?: Maybe<Scalars["String"]["output"]>;
  exampleBulkReactHook?: Maybe<Scalars["String"]["output"]>;
  exampleGraphQLMutation: Scalars["String"]["output"];
  exampleGraphQLVariables: Scalars["JSON"]["output"];
  exampleImperativeInvocation: Scalars["String"]["output"];
  exampleJSInputs: Scalars["JSON"]["output"];
  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars["String"]["output"];
  exampleReactHook: Scalars["String"]["output"];
  inputGraphQLTypeSDL?: Maybe<Scalars["String"]["output"]>;
  inputTypeScriptInterface?: Maybe<Scalars["String"]["output"]>;
  outputGraphQLTypeSDL: Scalars["String"]["output"];
  outputTypeScriptInterface: Scalars["String"]["output"];
};

export type GadgetApplicationMeta = {
  __typename?: "GadgetApplicationMeta";
  allHydrations: Scalars["JSON"]["output"];
  /** The roles that the entity making this API call has been assigned */
  assignedRoles: Array<GadgetRole>;
  canonicalRenderURL: Scalars["String"]["output"];
  currentEnvironmentRenderURL: Scalars["String"]["output"];
  developmentGraphQLEndpoint: Scalars["String"]["output"];
  developmentRenderURL: Scalars["String"]["output"];
  directUploadToken?: Maybe<DirectUploadToken>;
  editURL: Scalars["String"]["output"];
  environmentID: Scalars["GadgetID"]["output"];
  environmentName: Scalars["String"]["output"];
  environmentSlug: Scalars["String"]["output"];
  firstModelForExamples: GadgetModel;
  globalActions: Array<GadgetGlobalAction>;
  graphQLEndpoint: Scalars["String"]["output"];
  hasGlobalActions: Scalars["Boolean"]["output"];
  hasLegacyEffectCards: Scalars["Boolean"]["output"];
  hasShopifyConnection: Scalars["Boolean"]["output"];
  hasSplitEnvironments: Scalars["Boolean"]["output"];
  hydrations?: Maybe<Scalars["HydrationPlan"]["output"]>;
  id: Scalars["GadgetID"]["output"];
  jsPackageIdentifier: Scalars["String"]["output"];
  jsPackageTarballURL: Scalars["String"]["output"];
  model?: Maybe<GadgetModel>;
  models: Array<GadgetModel>;
  name: Scalars["String"]["output"];
  productionGraphQLEndpoint: Scalars["String"]["output"];
  productionRenderURL: Scalars["String"]["output"];
  referencedHydrations: Scalars["JSON"]["output"];
  roles: Array<GadgetRole>;
  /** @deprecated The current session is available as the root field `currentSession` on the root Query object, which has the ID as well as other attributes of the session. */
  sessionID?: Maybe<Scalars["String"]["output"]>;
  shopifyConnectionApiVersion?: Maybe<Scalars["String"]["output"]>;
  slug: Scalars["String"]["output"];
};

export type GadgetApplicationMetaDirectUploadTokenArgs = {
  nonce?: InputMaybe<Scalars["String"]["input"]>;
};

export type GadgetApplicationMetaHydrationsArgs = {
  modelName: Scalars["String"]["input"];
};

export type GadgetApplicationMetaModelArgs = {
  apiIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  key?: InputMaybe<Scalars["String"]["input"]>;
  namespace?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type GadgetBelongsToConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetBelongsToConfig";
  fieldType: GadgetFieldType;
  isConfigured: Scalars["Boolean"]["output"];
  isInverseConfigured: Scalars["Boolean"]["output"];
  relatedModel?: Maybe<GadgetModel>;
  relatedModelKey?: Maybe<Scalars["String"]["output"]>;
};

export type GadgetDateTimeConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetDateTimeConfig";
  fieldType: GadgetFieldType;
  includeTime: Scalars["Boolean"]["output"];
};

export type GadgetEnumConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetEnumConfig";
  allowMultiple: Scalars["Boolean"]["output"];
  allowOther: Scalars["Boolean"]["output"];
  fieldType: GadgetFieldType;
  options: Array<GadgetEnumOption>;
};

export type GadgetEnumOption = {
  __typename?: "GadgetEnumOption";
  color: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type GadgetField = {
  apiIdentifier: Scalars["String"]["output"];
  configuration: GadgetFieldConfigInterface;
  fieldType: GadgetFieldType;
  hasDefault: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  required: Scalars["Boolean"]["output"];
  requiredArgumentForInput: Scalars["Boolean"]["output"];
};

/** The common bits that all field configuration types share */
export type GadgetFieldConfigInterface = {
  fieldType: GadgetFieldType;
};

/** The type of a given field of a model or other in-transit object within Gadget's type system */
export enum GadgetFieldType {
  Any = "Any",
  Array = "Array",
  BelongsTo = "BelongsTo",
  Boolean = "Boolean",
  Code = "Code",
  Color = "Color",
  Computed = "Computed",
  DateTime = "DateTime",
  Email = "Email",
  EncryptedString = "EncryptedString",
  Enum = "Enum",
  File = "File",
  HasMany = "HasMany",
  HasManyThrough = "HasManyThrough",
  HasOne = "HasOne",
  Id = "ID",
  Json = "JSON",
  Money = "Money",
  Null = "Null",
  Number = "Number",
  Object = "Object",
  Password = "Password",
  RecordState = "RecordState",
  RichText = "RichText",
  RoleAssignments = "RoleAssignments",
  String = "String",
  Url = "URL",
  Vector = "Vector",
}

export type GadgetFieldUsageExample = {
  __typename?: "GadgetFieldUsageExample";
  exampleGraphQLMutation: Scalars["String"]["output"];
  exampleGraphQLVariables: Scalars["JSON"]["output"];
  exampleImperativeInvocation: Scalars["String"]["output"];
  exampleReactHook: Scalars["String"]["output"];
};

export type GadgetGenericFieldConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetGenericFieldConfig";
  fieldType: GadgetFieldType;
};

export type GadgetGlobalAction = {
  __typename?: "GadgetGlobalAction";
  acceptsInput: Scalars["Boolean"]["output"];
  apiIdentifier: Scalars["String"]["output"];
  examples?: Maybe<GadgetGlobalActionGraphQlType>;
  name: Scalars["String"]["output"];
  namespace?: Maybe<Array<Scalars["String"]["output"]>>;
  requiresInput: Scalars["Boolean"]["output"];
  triggers?: Maybe<Array<GadgetTrigger>>;
};

export type GadgetGlobalActionGraphQlType = {
  __typename?: "GadgetGlobalActionGraphQLType";
  exampleGraphQLMutation: Scalars["String"]["output"];
  exampleGraphQLVariables: Scalars["JSON"]["output"];
  exampleImperativeInvocation: Scalars["String"]["output"];
  exampleJSInputs: Scalars["JSON"]["output"];
  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars["String"]["output"];
  exampleReactHook: Scalars["String"]["output"];
  inputGraphQLTypeSDL?: Maybe<Scalars["String"]["output"]>;
  inputTypeScriptInterface?: Maybe<Scalars["String"]["output"]>;
  outputGraphQLTypeSDL: Scalars["String"]["output"];
  outputTypeScriptInterface: Scalars["String"]["output"];
};

export type GadgetHasManyConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetHasManyConfig";
  fieldType: GadgetFieldType;
  isConfigured: Scalars["Boolean"]["output"];
  isInverseConfigured: Scalars["Boolean"]["output"];
  relatedModel?: Maybe<GadgetModel>;
  relatedModelKey?: Maybe<Scalars["String"]["output"]>;
};

export type GadgetModel = {
  __typename?: "GadgetModel";
  action?: Maybe<GadgetAction>;
  actions: Array<GadgetAction>;
  apiIdentifier: Scalars["String"]["output"];
  currentSingletonApiIdentifier?: Maybe<Scalars["String"]["output"]>;
  exampleFilterQuery: Scalars["String"]["output"];
  exampleFindMostRecentlyCreatedQuery: Scalars["String"]["output"];
  exampleFullFindFirstQuery: Scalars["String"]["output"];
  exampleFullFindManyQuery: Scalars["String"]["output"];
  exampleFullFindOneQuery: Scalars["String"]["output"];
  exampleInternalBulkCreateMutation: Scalars["String"]["output"];
  exampleInternalCreateMutation: Scalars["String"]["output"];
  exampleInternalDeleteManyMutation: Scalars["String"]["output"];
  exampleInternalDeleteMutation: Scalars["String"]["output"];
  exampleInternalFindFirstQuery: Scalars["String"]["output"];
  exampleInternalFindManyQuery: Scalars["String"]["output"];
  exampleInternalFindOneQuery: Scalars["String"]["output"];
  exampleInternalUpdateMutation: Scalars["String"]["output"];
  examplePaginationQuery: Scalars["String"]["output"];
  exampleSearchQuery: Scalars["String"]["output"];
  exampleSimpleFindManyQuery: Scalars["String"]["output"];
  exampleSimpleFindOneQuery: Scalars["String"]["output"];
  fields: Array<GadgetModelField>;
  filterGraphQLTypeName?: Maybe<Scalars["String"]["output"]>;
  filterGraphQLTypeSDL?: Maybe<Scalars["String"]["output"]>;
  filterable: Scalars["Boolean"]["output"];
  graphQLTypeName: Scalars["String"]["output"];
  graphQLTypeSDL: Scalars["String"]["output"];
  initialCreatedState?: Maybe<Scalars["String"]["output"]>;
  key: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  namespace?: Maybe<Array<Scalars["String"]["output"]>>;
  pluralApiIdentifier: Scalars["String"]["output"];
  pluralName: Scalars["String"]["output"];
  searchable: Scalars["Boolean"]["output"];
  sortGraphQLTypeName?: Maybe<Scalars["String"]["output"]>;
  sortGraphQLTypeSDL?: Maybe<Scalars["String"]["output"]>;
  sortable: Scalars["Boolean"]["output"];
  typescriptTypeInterface: Scalars["String"]["output"];
  typescriptTypeInterfaceName: Scalars["String"]["output"];
};

export type GadgetModelActionArgs = {
  apiIdentifier: Scalars["String"]["input"];
};

/** One field of a Gadget model */
export type GadgetModelField = GadgetField & {
  __typename?: "GadgetModelField";
  apiIdentifier: Scalars["String"]["output"];
  configuration: GadgetFieldConfigInterface;
  examples: GadgetModelFieldExamples;
  fieldType: GadgetFieldType;
  filterable: Scalars["Boolean"]["output"];
  hasDefault: Scalars["Boolean"]["output"];
  isUniqueField: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  required: Scalars["Boolean"]["output"];
  requiredArgumentForInput: Scalars["Boolean"]["output"];
  sortable: Scalars["Boolean"]["output"];
};

export type GadgetModelFieldExamples = {
  __typename?: "GadgetModelFieldExamples";
  createNestedInParent?: Maybe<GadgetFieldUsageExample>;
  linkExistingChild?: Maybe<GadgetFieldUsageExample>;
  linkNewChild?: Maybe<GadgetFieldUsageExample>;
  linkToExistingParent?: Maybe<GadgetFieldUsageExample>;
};

/** One field of an action input or other transitory object in Gadget */
export type GadgetObjectField = GadgetField & {
  __typename?: "GadgetObjectField";
  apiIdentifier: Scalars["String"]["output"];
  configuration: GadgetFieldConfigInterface;
  fieldType: GadgetFieldType;
  hasDefault: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  required: Scalars["Boolean"]["output"];
  requiredArgumentForInput: Scalars["Boolean"]["output"];
};

export type GadgetObjectFieldConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetObjectFieldConfig";
  fieldType: GadgetFieldType;
  fields: Array<GadgetModelField>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** Represents one of the roles an identity in the system can be entitled to */
export type GadgetRole = {
  __typename?: "GadgetRole";
  key: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  order: Scalars["Int"]["output"];
  selectable: Scalars["Boolean"]["output"];
};

export type GadgetTrigger = {
  __typename?: "GadgetTrigger";
  specID: Scalars["String"]["output"];
};

export type Gizmo = {
  __typename?: "Gizmo";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  orientation?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  widget?: Maybe<Widget>;
  widgetId?: Maybe<Scalars["GadgetID"]["output"]>;
};

/** A connection to a list of Gizmo items. */
export type GizmoConnection = {
  __typename?: "GizmoConnection";
  /** A list of edges. */
  edges: Array<GizmoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Gizmo connection. */
export type GizmoEdge = {
  __typename?: "GizmoEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Gizmo;
};

export type GizmoFilter = {
  AND?: InputMaybe<Array<InputMaybe<GizmoFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<GizmoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GizmoFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  orientation?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  widget?: InputMaybe<IdFilter>;
  widgetId?: InputMaybe<IdFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type GizmoHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeGizmoInput>;
  create?: InputMaybe<NestedGizmoCreateInput>;
  delete?: InputMaybe<NestedGizmoDeleteInput>;
  update?: InputMaybe<NestedGizmoUpdateInput>;
};

export type GizmoSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the orientation field. Defaults to ascending (smallest value first). */
  orientation?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars["GadgetID"]["input"]>;
  greaterThan?: InputMaybe<Scalars["GadgetID"]["input"]>;
  greaterThanOrEqual?: InputMaybe<Scalars["GadgetID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["GadgetID"]["input"]>>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  lessThan?: InputMaybe<Scalars["GadgetID"]["input"]>;
  lessThanOrEqual?: InputMaybe<Scalars["GadgetID"]["input"]>;
  notEquals?: InputMaybe<Scalars["GadgetID"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["GadgetID"]["input"]>>>;
};

/** Input object to set the link between this field and the model it belongs to */
export type InternalBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

export type InternalBulkCreateGizmosResult = {
  __typename?: "InternalBulkCreateGizmosResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmos?: Maybe<Array<Maybe<Scalars["InternalGizmoRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateModelAsResult = {
  __typename?: "InternalBulkCreateModelAsResult";
  errors?: Maybe<Array<ExecutionError>>;
  modelAs?: Maybe<Array<Maybe<Scalars["InternalModelARecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateSectionsResult = {
  __typename?: "InternalBulkCreateSectionsResult";
  errors?: Maybe<Array<ExecutionError>>;
  sections?: Maybe<Array<Maybe<Scalars["InternalSectionRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateSessionsResult = {
  __typename?: "InternalBulkCreateSessionsResult";
  errors?: Maybe<Array<ExecutionError>>;
  sessions?: Maybe<Array<Maybe<Scalars["InternalSessionRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateUsersResult = {
  __typename?: "InternalBulkCreateUsersResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  users?: Maybe<Array<Maybe<Scalars["InternalUserRecord"]["output"]>>>;
};

export type InternalBulkCreateWidgetsResult = {
  __typename?: "InternalBulkCreateWidgetsResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widgets?: Maybe<Array<Maybe<Scalars["InternalWidgetRecord"]["output"]>>>;
};

export type InternalCreateGizmoResult = {
  __typename?: "InternalCreateGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateModelAResult = {
  __typename?: "InternalCreateModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  modelA?: Maybe<Scalars["InternalModelARecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateSectionResult = {
  __typename?: "InternalCreateSectionResult";
  errors?: Maybe<Array<ExecutionError>>;
  section?: Maybe<Scalars["InternalSectionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateSessionResult = {
  __typename?: "InternalCreateSessionResult";
  errors?: Maybe<Array<ExecutionError>>;
  session?: Maybe<Scalars["InternalSessionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateUserResult = {
  __typename?: "InternalCreateUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
};

export type InternalCreateWidgetResult = {
  __typename?: "InternalCreateWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Scalars["InternalWidgetRecord"]["output"]>;
};

export type InternalDeleteGizmoResult = {
  __typename?: "InternalDeleteGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyGizmoResult = {
  __typename?: "InternalDeleteManyGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyModelAResult = {
  __typename?: "InternalDeleteManyModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManySectionResult = {
  __typename?: "InternalDeleteManySectionResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManySessionResult = {
  __typename?: "InternalDeleteManySessionResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyUserResult = {
  __typename?: "InternalDeleteManyUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyWidgetResult = {
  __typename?: "InternalDeleteManyWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteModelAResult = {
  __typename?: "InternalDeleteModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  modelA?: Maybe<Scalars["InternalModelARecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteSectionResult = {
  __typename?: "InternalDeleteSectionResult";
  errors?: Maybe<Array<ExecutionError>>;
  section?: Maybe<Scalars["InternalSectionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteSessionResult = {
  __typename?: "InternalDeleteSessionResult";
  errors?: Maybe<Array<ExecutionError>>;
  session?: Maybe<Scalars["InternalSessionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteUserResult = {
  __typename?: "InternalDeleteUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
};

export type InternalDeleteWidgetResult = {
  __typename?: "InternalDeleteWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Scalars["InternalWidgetRecord"]["output"]>;
};

export type InternalGizmoInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  orientation?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  widget?: InputMaybe<InternalBelongsToInput>;
};

/** A connection to a list of InternalGizmoRecord items. */
export type InternalGizmoRecordConnection = {
  __typename?: "InternalGizmoRecordConnection";
  /** A list of edges. */
  edges: Array<InternalGizmoRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalGizmoRecord connection. */
export type InternalGizmoRecordEdge = {
  __typename?: "InternalGizmoRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalGizmoRecord"]["output"];
};

export type InternalModelAInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalModelARecord items. */
export type InternalModelARecordConnection = {
  __typename?: "InternalModelARecordConnection";
  /** A list of edges. */
  edges: Array<InternalModelARecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalModelARecord connection. */
export type InternalModelARecordEdge = {
  __typename?: "InternalModelARecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalModelARecord"]["output"];
};

export type InternalMutations = {
  __typename?: "InternalMutations";
  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock: LockOperationResult;
  bulkCreateGizmos?: Maybe<InternalBulkCreateGizmosResult>;
  bulkCreateModelAs?: Maybe<InternalBulkCreateModelAsResult>;
  bulkCreateSections?: Maybe<InternalBulkCreateSectionsResult>;
  bulkCreateSessions?: Maybe<InternalBulkCreateSessionsResult>;
  bulkCreateUsers?: Maybe<InternalBulkCreateUsersResult>;
  bulkCreateWidgets?: Maybe<InternalBulkCreateWidgetsResult>;
  commitTransaction: Scalars["String"]["output"];
  createGizmo?: Maybe<InternalCreateGizmoResult>;
  createModelA?: Maybe<InternalCreateModelAResult>;
  createSection?: Maybe<InternalCreateSectionResult>;
  createSession?: Maybe<InternalCreateSessionResult>;
  createUser?: Maybe<InternalCreateUserResult>;
  createWidget?: Maybe<InternalCreateWidgetResult>;
  deleteGizmo?: Maybe<InternalDeleteGizmoResult>;
  deleteManyGizmo?: Maybe<InternalDeleteManyGizmoResult>;
  deleteManyModelA?: Maybe<InternalDeleteManyModelAResult>;
  deleteManySection?: Maybe<InternalDeleteManySectionResult>;
  deleteManySession?: Maybe<InternalDeleteManySessionResult>;
  deleteManyUser?: Maybe<InternalDeleteManyUserResult>;
  deleteManyWidget?: Maybe<InternalDeleteManyWidgetResult>;
  deleteModelA?: Maybe<InternalDeleteModelAResult>;
  deleteSection?: Maybe<InternalDeleteSectionResult>;
  deleteSession?: Maybe<InternalDeleteSessionResult>;
  deleteUser?: Maybe<InternalDeleteUserResult>;
  deleteWidget?: Maybe<InternalDeleteWidgetResult>;
  rollbackTransaction: Scalars["String"]["output"];
  startTransaction: Scalars["String"]["output"];
  triggerAddInventoryWidget?: Maybe<AddInventoryWidgetResult>;
  triggerCreateGizmo?: Maybe<CreateGizmoResult>;
  triggerCreateModelA?: Maybe<CreateModelAResult>;
  triggerCreateSection?: Maybe<CreateSectionResult>;
  triggerCreateTestData?: Maybe<CreateTestDataResult>;
  triggerCreateWidget?: Maybe<CreateWidgetResult>;
  triggerDeleteGizmo?: Maybe<DeleteGizmoResult>;
  triggerDeleteModelA?: Maybe<DeleteModelAResult>;
  triggerDeleteSection?: Maybe<DeleteSectionResult>;
  triggerDeleteUser?: Maybe<DeleteUserResult>;
  triggerDeleteWidget?: Maybe<DeleteWidgetResult>;
  triggerSignInUser?: Maybe<SignInUserResult>;
  triggerSignOutUser?: Maybe<SignOutUserResult>;
  triggerSignUpUser?: Maybe<SignUpUserResult>;
  triggerUpdateGizmo?: Maybe<UpdateGizmoResult>;
  triggerUpdateModelA?: Maybe<UpdateModelAResult>;
  triggerUpdateSection?: Maybe<UpdateSectionResult>;
  triggerUpdateUser?: Maybe<UpdateUserResult>;
  triggerUpdateWidget?: Maybe<UpdateWidgetResult>;
  updateGizmo?: Maybe<InternalUpdateGizmoResult>;
  updateModelA?: Maybe<InternalUpdateModelAResult>;
  updateSection?: Maybe<InternalUpdateSectionResult>;
  updateSession?: Maybe<InternalUpdateSessionResult>;
  updateUser?: Maybe<InternalUpdateUserResult>;
  updateWidget?: Maybe<InternalUpdateWidgetResult>;
};

export type InternalMutationsAcquireLockArgs = {
  lock: Scalars["String"]["input"];
};

export type InternalMutationsBulkCreateGizmosArgs = {
  gizmos: Array<InputMaybe<InternalGizmoInput>>;
};

export type InternalMutationsBulkCreateModelAsArgs = {
  modelAs: Array<InputMaybe<InternalModelAInput>>;
};

export type InternalMutationsBulkCreateSectionsArgs = {
  sections: Array<InputMaybe<InternalSectionInput>>;
};

export type InternalMutationsBulkCreateSessionsArgs = {
  sessions: Array<InputMaybe<InternalSessionInput>>;
};

export type InternalMutationsBulkCreateUsersArgs = {
  users: Array<InputMaybe<InternalUserInput>>;
};

export type InternalMutationsBulkCreateWidgetsArgs = {
  widgets: Array<InputMaybe<InternalWidgetInput>>;
};

export type InternalMutationsCreateGizmoArgs = {
  gizmo?: InputMaybe<InternalGizmoInput>;
};

export type InternalMutationsCreateModelAArgs = {
  modelA?: InputMaybe<InternalModelAInput>;
};

export type InternalMutationsCreateSectionArgs = {
  section?: InputMaybe<InternalSectionInput>;
};

export type InternalMutationsCreateSessionArgs = {
  session?: InputMaybe<InternalSessionInput>;
};

export type InternalMutationsCreateUserArgs = {
  user?: InputMaybe<InternalUserInput>;
};

export type InternalMutationsCreateWidgetArgs = {
  widget?: InputMaybe<InternalWidgetInput>;
};

export type InternalMutationsDeleteGizmoArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteManyGizmoArgs = {
  filter?: InputMaybe<Array<GizmoFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyModelAArgs = {
  filter?: InputMaybe<Array<ModelAFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManySectionArgs = {
  filter?: InputMaybe<Array<SectionFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyUserArgs = {
  filter?: InputMaybe<Array<UserFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyWidgetArgs = {
  filter?: InputMaybe<Array<WidgetFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteModelAArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteSectionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteSessionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteUserArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsTriggerAddInventoryWidgetArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateGizmoArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateModelAArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateSectionArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateTestDataArgs = {
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateWidgetArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteGizmoArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteModelAArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteSectionArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteUserArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteWidgetArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerSignInUserArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerSignOutUserArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerSignUpUserArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateGizmoArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateModelAArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateSectionArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateUserArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateWidgetArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsUpdateGizmoArgs = {
  gizmo?: InputMaybe<InternalGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateModelAArgs = {
  id: Scalars["GadgetID"]["input"];
  modelA?: InputMaybe<InternalModelAInput>;
};

export type InternalMutationsUpdateSectionArgs = {
  id: Scalars["GadgetID"]["input"];
  section?: InputMaybe<InternalSectionInput>;
};

export type InternalMutationsUpdateSessionArgs = {
  id: Scalars["GadgetID"]["input"];
  session?: InputMaybe<InternalSessionInput>;
};

export type InternalMutationsUpdateUserArgs = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<InternalUserInput>;
};

export type InternalMutationsUpdateWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
  widget?: InputMaybe<InternalWidgetInput>;
};

export type InternalQueries = {
  __typename?: "InternalQueries";
  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: Maybe<Scalars["JSONObject"]["output"]>;
  gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
  listGizmo: InternalGizmoRecordConnection;
  listModelA: InternalModelARecordConnection;
  listSection: InternalSectionRecordConnection;
  listSession: InternalSessionRecordConnection;
  listUser: InternalUserRecordConnection;
  listWidget: InternalWidgetRecordConnection;
  modelA?: Maybe<Scalars["InternalModelARecord"]["output"]>;
  section?: Maybe<Scalars["InternalSectionRecord"]["output"]>;
  session?: Maybe<Scalars["InternalSessionRecord"]["output"]>;
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
  widget?: Maybe<Scalars["InternalWidgetRecord"]["output"]>;
};

export type InternalQueriesGizmoArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesListGizmoArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GizmoFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<GizmoSort>>;
};

export type InternalQueriesListModelAArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ModelAFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<ModelASort>>;
};

export type InternalQueriesListSectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<SectionFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<SectionSort>>;
};

export type InternalQueriesListSessionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesListUserArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<UserFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<UserSort>>;
};

export type InternalQueriesListWidgetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<WidgetFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<WidgetSort>>;
};

export type InternalQueriesModelAArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesSectionArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesSessionArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesUserArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalSectionInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalSectionRecord items. */
export type InternalSectionRecordConnection = {
  __typename?: "InternalSectionRecordConnection";
  /** A list of edges. */
  edges: Array<InternalSectionRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalSectionRecord connection. */
export type InternalSectionRecordEdge = {
  __typename?: "InternalSectionRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalSectionRecord"]["output"];
};

export type InternalSessionInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user?: InputMaybe<InternalBelongsToInput>;
};

/** A connection to a list of InternalSessionRecord items. */
export type InternalSessionRecordConnection = {
  __typename?: "InternalSessionRecordConnection";
  /** A list of edges. */
  edges: Array<InternalSessionRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalSessionRecord connection. */
export type InternalSessionRecordEdge = {
  __typename?: "InternalSessionRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalSessionRecord"]["output"];
};

export type InternalUpdateGizmoResult = {
  __typename?: "InternalUpdateGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateModelAResult = {
  __typename?: "InternalUpdateModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  modelA?: Maybe<Scalars["InternalModelARecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateSectionResult = {
  __typename?: "InternalUpdateSectionResult";
  errors?: Maybe<Array<ExecutionError>>;
  section?: Maybe<Scalars["InternalSectionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateSessionResult = {
  __typename?: "InternalUpdateSessionResult";
  errors?: Maybe<Array<ExecutionError>>;
  session?: Maybe<Scalars["InternalSessionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateUserResult = {
  __typename?: "InternalUpdateUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
};

export type InternalUpdateWidgetResult = {
  __typename?: "InternalUpdateWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Scalars["InternalWidgetRecord"]["output"]>;
};

export type InternalUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  googleImageUrl?: InputMaybe<Scalars["String"]["input"]>;
  googleProfileId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastSignedIn?: InputMaybe<Scalars["DateTime"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalUserRecord items. */
export type InternalUserRecordConnection = {
  __typename?: "InternalUserRecordConnection";
  /** A list of edges. */
  edges: Array<InternalUserRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalUserRecord connection. */
export type InternalUserRecordEdge = {
  __typename?: "InternalUserRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalUserRecord"]["output"];
};

export type InternalWidgetAtomicsInput = {
  /** Numeric atomic commands for operating on inventoryCount. */
  inventoryCount?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalWidgetInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalWidgetAtomicsInput>;
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  mustBeLongString?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<InternalBelongsToInput>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalWidgetRecord items. */
export type InternalWidgetRecordConnection = {
  __typename?: "InternalWidgetRecordConnection";
  /** A list of edges. */
  edges: Array<InternalWidgetRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalWidgetRecord connection. */
export type InternalWidgetRecordEdge = {
  __typename?: "InternalWidgetRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalWidgetRecord"]["output"];
};

/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export type InvalidFieldError = {
  __typename?: "InvalidFieldError";
  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier: Scalars["String"]["output"];
  /** The human facing error message for this error. */
  message: Scalars["String"]["output"];
};

/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export type InvalidRecordError = ExecutionError & {
  __typename?: "InvalidRecordError";
  /** The Gadget platform error code for this InvalidRecordError. */
  code: Scalars["String"]["output"];
  /** The human facing error message for this error. */
  message: Scalars["String"]["output"];
  /** The model of the record which failed validation */
  model?: Maybe<GadgetModel>;
  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record?: Maybe<Scalars["JSONObject"]["output"]>;
  /** The stack for any exception that caused the error */
  stack?: Maybe<Scalars["String"]["output"]>;
  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors?: Maybe<Array<InvalidFieldError>>;
  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type JsonFilter = {
  equals?: InputMaybe<Scalars["JSON"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  matches?: InputMaybe<Scalars["JSON"]["input"]>;
  notEquals?: InputMaybe<Scalars["JSON"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
};

export type LockOperationResult = {
  __typename?: "LockOperationResult";
  /** Any errors encountered during the locking/unlocking operation */
  errors?: Maybe<Array<ExecutionError>>;
  /** Whether the lock operation succeeded */
  success: Scalars["Boolean"]["output"];
};

export type ModelA = {
  __typename?: "ModelA";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of ModelA items. */
export type ModelAConnection = {
  __typename?: "ModelAConnection";
  /** A list of edges. */
  edges: Array<ModelAEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a ModelA connection. */
export type ModelAEdge = {
  __typename?: "ModelAEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ModelA;
};

export type ModelAFilter = {
  AND?: InputMaybe<Array<InputMaybe<ModelAFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<ModelAFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ModelAFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ModelASort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type MultiEnumFilter = {
  contains?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  equals?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  notEquals?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  addInventoryWidget?: Maybe<AddInventoryWidgetResult>;
  background: BackgroundMutations;
  bulkAddInventoryWidgets?: Maybe<BulkAddInventoryWidgetsResult>;
  bulkCreateGizmos?: Maybe<BulkCreateGizmosResult>;
  bulkCreateModelAs?: Maybe<BulkCreateModelAsResult>;
  bulkCreateSections?: Maybe<BulkCreateSectionsResult>;
  bulkCreateWidgets?: Maybe<BulkCreateWidgetsResult>;
  bulkDeleteGizmos?: Maybe<BulkDeleteGizmosResult>;
  bulkDeleteModelAs?: Maybe<BulkDeleteModelAsResult>;
  bulkDeleteSections?: Maybe<BulkDeleteSectionsResult>;
  bulkDeleteUsers?: Maybe<BulkDeleteUsersResult>;
  bulkDeleteWidgets?: Maybe<BulkDeleteWidgetsResult>;
  bulkSignOutUsers?: Maybe<BulkSignOutUsersResult>;
  bulkUpdateGizmos?: Maybe<BulkUpdateGizmosResult>;
  bulkUpdateModelAs?: Maybe<BulkUpdateModelAsResult>;
  bulkUpdateSections?: Maybe<BulkUpdateSectionsResult>;
  bulkUpdateUsers?: Maybe<BulkUpdateUsersResult>;
  bulkUpdateWidgets?: Maybe<BulkUpdateWidgetsResult>;
  createGizmo?: Maybe<CreateGizmoResult>;
  createModelA?: Maybe<CreateModelAResult>;
  createSection?: Maybe<CreateSectionResult>;
  createTestData?: Maybe<CreateTestDataResult>;
  createWidget?: Maybe<CreateWidgetResult>;
  deleteGizmo?: Maybe<DeleteGizmoResult>;
  deleteModelA?: Maybe<DeleteModelAResult>;
  deleteSection?: Maybe<DeleteSectionResult>;
  deleteUser?: Maybe<DeleteUserResult>;
  deleteWidget?: Maybe<DeleteWidgetResult>;
  /** Meta information about the application, like it's name, schema, and other internal details. */
  gadgetMeta: GadgetApplicationMeta;
  internal: InternalMutations;
  signOutUser?: Maybe<SignOutUserResult>;
  updateGizmo?: Maybe<UpdateGizmoResult>;
  updateModelA?: Maybe<UpdateModelAResult>;
  updateSection?: Maybe<UpdateSectionResult>;
  updateUser?: Maybe<UpdateUserResult>;
  updateWidget?: Maybe<UpdateWidgetResult>;
};

export type MutationAddInventoryWidgetArgs = {
  count?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationBulkAddInventoryWidgetsArgs = {
  inputs: Array<BulkAddInventoryWidgetsInput>;
};

export type MutationBulkCreateGizmosArgs = {
  inputs: Array<BulkCreateGizmosInput>;
};

export type MutationBulkCreateModelAsArgs = {
  inputs: Array<Scalars["JSON"]["input"]>;
};

export type MutationBulkCreateSectionsArgs = {
  inputs: Array<BulkCreateSectionsInput>;
};

export type MutationBulkCreateWidgetsArgs = {
  inputs: Array<BulkCreateWidgetsInput>;
};

export type MutationBulkDeleteGizmosArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteModelAsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteSectionsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteUsersArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteWidgetsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkSignOutUsersArgs = {
  inputs: Array<BulkSignOutUsersInput>;
};

export type MutationBulkUpdateGizmosArgs = {
  inputs: Array<BulkUpdateGizmosInput>;
};

export type MutationBulkUpdateModelAsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkUpdateSectionsArgs = {
  inputs: Array<BulkUpdateSectionsInput>;
};

export type MutationBulkUpdateUsersArgs = {
  inputs: Array<BulkUpdateUsersInput>;
};

export type MutationBulkUpdateWidgetsArgs = {
  inputs: Array<BulkUpdateWidgetsInput>;
};

export type MutationCreateGizmoArgs = {
  gizmo?: InputMaybe<CreateGizmoInput>;
};

export type MutationCreateSectionArgs = {
  section?: InputMaybe<CreateSectionInput>;
};

export type MutationCreateWidgetArgs = {
  widget?: InputMaybe<CreateWidgetInput>;
};

export type MutationDeleteGizmoArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteModelAArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteSectionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationSignOutUserArgs = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<SignOutUserInput>;
};

export type MutationUpdateGizmoArgs = {
  gizmo?: InputMaybe<UpdateGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateModelAArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateSectionArgs = {
  id: Scalars["GadgetID"]["input"];
  section?: InputMaybe<UpdateSectionInput>;
};

export type MutationUpdateUserArgs = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<UpdateUserInput>;
};

export type MutationUpdateWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
  widget?: InputMaybe<UpdateWidgetInput>;
};

export type NestedGizmoCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  orientation?: InputMaybe<Scalars["String"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedGizmoDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedGizmoUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  orientation?: InputMaybe<Scalars["String"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedSectionCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type NestedSectionDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedSectionUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type NestedWidgetAddInventoryInput = {
  count?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

export type NestedWidgetCreateInput = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  mustBeLongString?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type NestedWidgetDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedWidgetUpdateInput = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  id: Scalars["GadgetID"]["input"];
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  mustBeLongString?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** Input object for updating a numeric field's value in a race-safe way in the internal API */
export type NumericAtomicFieldUpdateInput = {
  /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
  decrement?: InputMaybe<Scalars["Float"]["input"]>;
  /** A number to atomically increment the field value by. Can only be used on numeric fields. */
  increment?: InputMaybe<Scalars["Float"]["input"]>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  currentSession?: Maybe<Session>;
  /** Meta information about the application, like it's name, schema, and other internal details. */
  gadgetMeta: GadgetApplicationMeta;
  gizmo?: Maybe<Gizmo>;
  gizmos: GizmoConnection;
  internal: InternalQueries;
  modelA?: Maybe<ModelA>;
  modelAs: ModelAConnection;
  section?: Maybe<Section>;
  sections: SectionConnection;
  session?: Maybe<Session>;
  sessions: SessionConnection;
  user?: Maybe<User>;
  users: UserConnection;
  widget?: Maybe<Widget>;
  widgets: WidgetConnection;
};

export type QueryGizmoArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryGizmosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GizmoFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<GizmoSort>>;
};

export type QueryModelAArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryModelAsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ModelAFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ModelASort>>;
};

export type QuerySectionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QuerySectionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<SectionFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<SectionSort>>;
};

export type QuerySessionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QuerySessionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUserArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<UserFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<UserSort>>;
};

export type QueryWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryWidgetsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<WidgetFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<WidgetSort>>;
};

/** A snippet of text supporting rich formatting and access in a variety of formats */
export type RichText = {
  __typename?: "RichText";
  /** Rendered content as an HTML document */
  html: Scalars["String"]["output"];
  /** Unrendered content in the extended Markdown syntax */
  markdown: Scalars["String"]["output"];
  /** Truncated HTML string that is valid HTML with the appropriate closing tags but limited to a certain length. Suitable for displaying in tables or dense index pages. */
  truncatedHTML: Scalars["String"]["output"];
};

/** A snippet of text supporting rich formatting and access in a variety of formats */
export type RichTextTruncatedHtmlArgs = {
  length?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Input object supporting setting or updating a RichText field. */
export type RichTextInput = {
  markdown: Scalars["String"]["input"];
};

/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export type Role = {
  __typename?: "Role";
  /** The stable identifier for this role. Null if the role has since been deleted. */
  key: Scalars["String"]["output"];
  /** The human readable name for this role. Can be changed. */
  name: Scalars["String"]["output"];
};

export type Section = {
  __typename?: "Section";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  widgets: WidgetConnection;
};

export type SectionWidgetsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<WidgetFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<WidgetSort>>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type SectionBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedSectionCreateInput>;
  delete?: InputMaybe<NestedSectionDeleteInput>;
  update?: InputMaybe<NestedSectionUpdateInput>;
};

/** A connection to a list of Section items. */
export type SectionConnection = {
  __typename?: "SectionConnection";
  /** A list of edges. */
  edges: Array<SectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Section connection. */
export type SectionEdge = {
  __typename?: "SectionEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Section;
};

export type SectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SectionSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type Session = {
  __typename?: "Session";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: Maybe<Scalars["GadgetID"]["output"]>;
  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars["RecordState"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  user?: Maybe<User>;
  userId?: Maybe<Scalars["GadgetID"]["output"]>;
};

/** A connection to a list of Session items. */
export type SessionConnection = {
  __typename?: "SessionConnection";
  /** A list of edges. */
  edges: Array<SessionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Session connection. */
export type SessionEdge = {
  __typename?: "SessionEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Session;
};

export type SignInUserResult = {
  __typename?: "SignInUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<User>;
};

export type SignOutUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  googleImageUrl?: InputMaybe<Scalars["String"]["input"]>;
  googleProfileId?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastSignedIn?: InputMaybe<Scalars["DateTime"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type SignOutUserResult = {
  __typename?: "SignOutUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<User>;
};

export type SignUpUserResult = {
  __typename?: "SignUpUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<User>;
};

/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export type SimpleError = ExecutionError & {
  __typename?: "SimpleError";
  /** The Gadget platform error code for this error. */
  code: Scalars["String"]["output"];
  /** The human facing error message for this error. */
  message: Scalars["String"]["output"];
  /** The stack for any exception that caused the error */
  stack?: Maybe<Scalars["String"]["output"]>;
};

/** A sort order for a field. Can be Ascending or Descending. */
export enum SortOrder {
  Ascending = "Ascending",
  Descending = "Descending",
}

export type StringFilter = {
  equals?: InputMaybe<Scalars["String"]["input"]>;
  greaterThan?: InputMaybe<Scalars["String"]["input"]>;
  greaterThanOrEqual?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  lessThan?: InputMaybe<Scalars["String"]["input"]>;
  lessThanOrEqual?: InputMaybe<Scalars["String"]["input"]>;
  notEquals?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  backgroundAction?: Maybe<BackgroundAction>;
};

export type SubscriptionBackgroundActionArgs = {
  id: Scalars["String"]["input"];
};

export type UpdateGizmoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  orientation?: InputMaybe<Scalars["String"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type UpdateGizmoResult = {
  __typename?: "UpdateGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateModelAResult = {
  __typename?: "UpdateModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  modelA?: Maybe<ModelA>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateSectionInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type UpdateSectionResult = {
  __typename?: "UpdateSectionResult";
  errors?: Maybe<Array<ExecutionError>>;
  section?: Maybe<Section>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  googleImageUrl?: InputMaybe<Scalars["String"]["input"]>;
  googleProfileId?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastSignedIn?: InputMaybe<Scalars["DateTime"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUserResult = {
  __typename?: "UpdateUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<User>;
};

export type UpdateWidgetInput = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  mustBeLongString?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UpdateWidgetResult = {
  __typename?: "UpdateWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

export type User = {
  __typename?: "User";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  emailVerified?: Maybe<Scalars["Boolean"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  googleImageUrl?: Maybe<Scalars["String"]["output"]>;
  googleProfileId?: Maybe<Scalars["String"]["output"]>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  lastSignedIn?: Maybe<Scalars["DateTime"]["output"]>;
  roles?: Maybe<Array<Role>>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of User items. */
export type UserConnection = {
  __typename?: "UserConnection";
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a User connection. */
export type UserEdge = {
  __typename?: "UserEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: User;
};

export type UserFilter = {
  AND?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<BooleanFilter>;
  firstName?: InputMaybe<StringFilter>;
  googleImageUrl?: InputMaybe<StringFilter>;
  googleProfileId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  lastSignedIn?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: InputMaybe<SortOrder>;
  /** Sort the results by the emailVerified field. Defaults to ascending (smallest value first). */
  emailVerified?: InputMaybe<SortOrder>;
  /** Sort the results by the firstName field. Defaults to ascending (smallest value first). */
  firstName?: InputMaybe<SortOrder>;
  /** Sort the results by the googleImageUrl field. Defaults to ascending (smallest value first). */
  googleImageUrl?: InputMaybe<SortOrder>;
  /** Sort the results by the googleProfileId field. Defaults to ascending (smallest value first). */
  googleProfileId?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the lastName field. Defaults to ascending (smallest value first). */
  lastName?: InputMaybe<SortOrder>;
  /** Sort the results by the lastSignedIn field. Defaults to ascending (smallest value first). */
  lastSignedIn?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

/** Filter by distance to a given vector in the to field */
export type VectorDistanceFilter = {
  /** The stored vector's distance to the given vector must be greater than this value to pass the filter. Will only allow vectors that are farther away than this distance in the vector space. */
  greaterThan?: InputMaybe<Scalars["Float"]["input"]>;
  /** The stored vector's distance to the given vector must be greater than or equal to this value to pass the filter. Will only allow vectors that are farther away than this distance in the vector space. */
  greaterThanOrEqual?: InputMaybe<Scalars["Float"]["input"]>;
  /** The stored vector's distance to the given vector must be less than this value to pass the filter. Will only allow vectors that are closer than this distance in the vector space. */
  lessThan?: InputMaybe<Scalars["Float"]["input"]>;
  /** The stored vector's distance to the given vector must be less than or equal to this value to pass the filter. Will only allow vectors that are closer than this distance in the vector space. */
  lessThanOrEqual?: InputMaybe<Scalars["Float"]["input"]>;
  /** The vector to compare distance to */
  to: Array<Scalars["Float"]["input"]>;
};

export type VectorFilter = {
  cosineSimilarity?: InputMaybe<VectorSimilarityFilter>;
  equals?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  l2Distance?: InputMaybe<VectorDistanceFilter>;
};

/** Filter by similarity to a given vector in the `to` field */
export type VectorSimilarityFilter = {
  /** The stored vector's similarity to the given vector must be greater than this value to pass the filter. Will only allow vectors that are closer than this threshold in the vector space. */
  greaterThan?: InputMaybe<Scalars["Float"]["input"]>;
  /** The stored vector's similarity to the given vector must be greater than or equal to this value to pass the filter. Will only allow vectors that are closer than this threshold in the vector space. */
  greaterThanOrEqual?: InputMaybe<Scalars["Float"]["input"]>;
  /** The stored vector's similarity to the given vector must be less than this value to pass the filter. Will only return vectors that are farther away in the vector space than this threshold. */
  lessThan?: InputMaybe<Scalars["Float"]["input"]>;
  /** The stored vector's similarity to the given vector must be less than or equal to this value to pass the filter. Will only return vectors that are farther away in the vector space than this threshold */
  lessThanOrEqual?: InputMaybe<Scalars["Float"]["input"]>;
  /** The vector to compare similarity to */
  to: Array<Scalars["Float"]["input"]>;
};

/** A sort order for a field with the Vector type. Sorts by distance to a given vector. */
export type VectorSortOrder = {
  /** Sort by the cosine similarity between the stored vector and this given vector. Defaults the sort order to Ascending, which will return the most similar vectors first. */
  cosineSimilarityTo?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  /** Sort by the L2 distance between the stored vector and this given vector */
  l2DistanceTo?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  /** Sort ascending or descending by the distance to the given vector. */
  order?: InputMaybe<SortOrder>;
};

export type Widget = {
  __typename?: "Widget";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  anything?: Maybe<Scalars["JSON"]["output"]>;
  birthday?: Maybe<Scalars["Date"]["output"]>;
  category?: Maybe<Array<Scalars["WidgetCategoryEnum"]["output"]>>;
  color?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<RichText>;
  embedding?: Maybe<Array<Scalars["Float"]["output"]>>;
  embeddingCosineSimilarityTo?: Maybe<Scalars["Float"]["output"]>;
  embeddingL2DistanceTo?: Maybe<Scalars["Float"]["output"]>;
  gizmos: GizmoConnection;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  inStock?: Maybe<Scalars["JSON"]["output"]>;
  inventoryCount: Scalars["Float"]["output"];
  isChecked?: Maybe<Scalars["Boolean"]["output"]>;
  metafields?: Maybe<Scalars["JSON"]["output"]>;
  mustBeLongString?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  roles?: Maybe<Array<Role>>;
  secretKey?: Maybe<Scalars["String"]["output"]>;
  section?: Maybe<Section>;
  sectionId?: Maybe<Scalars["GadgetID"]["output"]>;
  startsAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type WidgetEmbeddingCosineSimilarityToArgs = {
  vector: Array<Scalars["Float"]["input"]>;
};

export type WidgetEmbeddingL2DistanceToArgs = {
  vector: Array<Scalars["Float"]["input"]>;
};

export type WidgetGizmosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GizmoFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<GizmoSort>>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type WidgetBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  addInventory?: InputMaybe<NestedWidgetAddInventoryInput>;
  create?: InputMaybe<NestedWidgetCreateInput>;
  delete?: InputMaybe<NestedWidgetDeleteInput>;
  update?: InputMaybe<NestedWidgetUpdateInput>;
};

/** A connection to a list of Widget items. */
export type WidgetConnection = {
  __typename?: "WidgetConnection";
  /** A list of edges. */
  edges: Array<WidgetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Widget connection. */
export type WidgetEdge = {
  __typename?: "WidgetEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Widget;
};

export type WidgetFilter = {
  AND?: InputMaybe<Array<InputMaybe<WidgetFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<WidgetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WidgetFilter>>>;
  anything?: InputMaybe<JsonFilter>;
  birthday?: InputMaybe<DateFilter>;
  category?: InputMaybe<MultiEnumFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  embedding?: InputMaybe<VectorFilter>;
  id?: InputMaybe<IdFilter>;
  inventoryCount?: InputMaybe<FloatFilter>;
  isChecked?: InputMaybe<BooleanFilter>;
  metafields?: InputMaybe<JsonFilter>;
  mustBeLongString?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  section?: InputMaybe<IdFilter>;
  sectionId?: InputMaybe<IdFilter>;
  startsAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type WidgetHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeWidgetInput>;
  addInventory?: InputMaybe<NestedWidgetAddInventoryInput>;
  create?: InputMaybe<NestedWidgetCreateInput>;
  delete?: InputMaybe<NestedWidgetDeleteInput>;
  update?: InputMaybe<NestedWidgetUpdateInput>;
};

export type WidgetSort = {
  /** Sort the results by the anything field. Defaults to ascending (smallest value first). */
  anything?: InputMaybe<SortOrder>;
  /** Sort the results by the birthday field. Defaults to ascending (smallest value first). */
  birthday?: InputMaybe<SortOrder>;
  /** Sort the results by the category field. Defaults to ascending (smallest value first). */
  category?: InputMaybe<SortOrder>;
  /** Sort the results by the color field. Defaults to ascending (smallest value first). */
  color?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the description field. Defaults to ascending (smallest value first). */
  description?: InputMaybe<SortOrder>;
  /** Sort the results by the embedding vector field. Sorts based on the distance between a given vector and the vector stored in embedding. */
  embedding?: InputMaybe<VectorSortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the inventoryCount field. Defaults to ascending (smallest value first). */
  inventoryCount?: InputMaybe<SortOrder>;
  /** Sort the results by the isChecked field. Defaults to ascending (smallest value first). */
  isChecked?: InputMaybe<SortOrder>;
  /** Sort the results by the metafields field. Defaults to ascending (smallest value first). */
  metafields?: InputMaybe<SortOrder>;
  /** Sort the results by the mustBeLongString field. Defaults to ascending (smallest value first). */
  mustBeLongString?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the startsAt field. Defaults to ascending (smallest value first). */
  startsAt?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

type FieldMetadata_GadgetModelField_Fragment = {
  __typename?: "GadgetModelField";
  sortable: boolean;
  filterable: boolean;
  name: string;
  apiIdentifier: string;
  fieldType: GadgetFieldType;
  requiredArgumentForInput: boolean;
  configuration:
    | {
        __typename: "GadgetBelongsToConfig";
        fieldType: GadgetFieldType;
        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
      }
    | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
    | {
        __typename: "GadgetEnumConfig";
        allowMultiple: boolean;
        fieldType: GadgetFieldType;
        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
      }
    | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
    | {
        __typename: "GadgetHasManyConfig";
        fieldType: GadgetFieldType;
        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
      }
    | { __typename: "GadgetObjectFieldConfig"; fieldType: GadgetFieldType };
};

type FieldMetadata_GadgetObjectField_Fragment = {
  __typename?: "GadgetObjectField";
  name: string;
  apiIdentifier: string;
  fieldType: GadgetFieldType;
  requiredArgumentForInput: boolean;
  configuration:
    | {
        __typename: "GadgetBelongsToConfig";
        fieldType: GadgetFieldType;
        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
      }
    | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
    | {
        __typename: "GadgetEnumConfig";
        allowMultiple: boolean;
        fieldType: GadgetFieldType;
        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
      }
    | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
    | {
        __typename: "GadgetHasManyConfig";
        fieldType: GadgetFieldType;
        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
      }
    | { __typename: "GadgetObjectFieldConfig"; fieldType: GadgetFieldType };
};

export type FieldMetadataFragment = FieldMetadata_GadgetModelField_Fragment | FieldMetadata_GadgetObjectField_Fragment;

export type GetModelMetadataQueryVariables = Exact<{
  apiIdentifier: Scalars["String"]["input"];
}>;

export type GetModelMetadataQuery = {
  __typename?: "Query";
  gadgetMeta: {
    __typename?: "GadgetApplicationMeta";
    model?: {
      __typename?: "GadgetModel";
      apiIdentifier: string;
      name: string;
      fields: Array<{
        __typename?: "GadgetModelField";
        sortable: boolean;
        filterable: boolean;
        name: string;
        apiIdentifier: string;
        fieldType: GadgetFieldType;
        requiredArgumentForInput: boolean;
        configuration:
          | {
              __typename: "GadgetBelongsToConfig";
              fieldType: GadgetFieldType;
              relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
            }
          | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
          | {
              __typename: "GadgetEnumConfig";
              allowMultiple: boolean;
              fieldType: GadgetFieldType;
              options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
            }
          | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
          | {
              __typename: "GadgetHasManyConfig";
              fieldType: GadgetFieldType;
              relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
            }
          | { __typename: "GadgetObjectFieldConfig"; fieldType: GadgetFieldType };
      }>;
    } | null;
  };
};

type SubFields_GadgetModelField_Fragment = {
  __typename?: "GadgetModelField";
  configuration:
    | { __typename: "GadgetBelongsToConfig" }
    | { __typename: "GadgetDateTimeConfig" }
    | { __typename: "GadgetEnumConfig" }
    | { __typename: "GadgetGenericFieldConfig" }
    | { __typename: "GadgetHasManyConfig" }
    | {
        __typename: "GadgetObjectFieldConfig";
        name?: string | null;
        fields: Array<{
          __typename?: "GadgetModelField";
          sortable: boolean;
          filterable: boolean;
          name: string;
          apiIdentifier: string;
          fieldType: GadgetFieldType;
          requiredArgumentForInput: boolean;
          configuration:
            | {
                __typename: "GadgetBelongsToConfig";
                fieldType: GadgetFieldType;
                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
              }
            | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
            | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                fieldType: GadgetFieldType;
                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
              }
            | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
            | {
                __typename: "GadgetHasManyConfig";
                fieldType: GadgetFieldType;
                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
              }
            | {
                __typename: "GadgetObjectFieldConfig";
                name?: string | null;
                fieldType: GadgetFieldType;
                fields: Array<{
                  __typename?: "GadgetModelField";
                  sortable: boolean;
                  filterable: boolean;
                  name: string;
                  apiIdentifier: string;
                  fieldType: GadgetFieldType;
                  requiredArgumentForInput: boolean;
                  configuration:
                    | {
                        __typename: "GadgetBelongsToConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                      }
                    | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
                    | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        fieldType: GadgetFieldType;
                        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                      }
                    | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
                    | {
                        __typename: "GadgetHasManyConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                      }
                    | {
                        __typename: "GadgetObjectFieldConfig";
                        name?: string | null;
                        fieldType: GadgetFieldType;
                        fields: Array<{
                          __typename?: "GadgetModelField";
                          sortable: boolean;
                          filterable: boolean;
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                          requiredArgumentForInput: boolean;
                          configuration:
                            | {
                                __typename: "GadgetBelongsToConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                              }
                            | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
                            | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                fieldType: GadgetFieldType;
                                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                              }
                            | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
                            | {
                                __typename: "GadgetHasManyConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                              }
                            | { __typename: "GadgetObjectFieldConfig"; fieldType: GadgetFieldType };
                        }>;
                      };
                }>;
              };
        }>;
      };
};

type SubFields_GadgetObjectField_Fragment = {
  __typename?: "GadgetObjectField";
  configuration:
    | { __typename: "GadgetBelongsToConfig" }
    | { __typename: "GadgetDateTimeConfig" }
    | { __typename: "GadgetEnumConfig" }
    | { __typename: "GadgetGenericFieldConfig" }
    | { __typename: "GadgetHasManyConfig" }
    | {
        __typename: "GadgetObjectFieldConfig";
        name?: string | null;
        fields: Array<{
          __typename?: "GadgetModelField";
          sortable: boolean;
          filterable: boolean;
          name: string;
          apiIdentifier: string;
          fieldType: GadgetFieldType;
          requiredArgumentForInput: boolean;
          configuration:
            | {
                __typename: "GadgetBelongsToConfig";
                fieldType: GadgetFieldType;
                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
              }
            | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
            | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                fieldType: GadgetFieldType;
                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
              }
            | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
            | {
                __typename: "GadgetHasManyConfig";
                fieldType: GadgetFieldType;
                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
              }
            | {
                __typename: "GadgetObjectFieldConfig";
                name?: string | null;
                fieldType: GadgetFieldType;
                fields: Array<{
                  __typename?: "GadgetModelField";
                  sortable: boolean;
                  filterable: boolean;
                  name: string;
                  apiIdentifier: string;
                  fieldType: GadgetFieldType;
                  requiredArgumentForInput: boolean;
                  configuration:
                    | {
                        __typename: "GadgetBelongsToConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                      }
                    | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
                    | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        fieldType: GadgetFieldType;
                        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                      }
                    | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
                    | {
                        __typename: "GadgetHasManyConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                      }
                    | {
                        __typename: "GadgetObjectFieldConfig";
                        name?: string | null;
                        fieldType: GadgetFieldType;
                        fields: Array<{
                          __typename?: "GadgetModelField";
                          sortable: boolean;
                          filterable: boolean;
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                          requiredArgumentForInput: boolean;
                          configuration:
                            | {
                                __typename: "GadgetBelongsToConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                              }
                            | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
                            | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                fieldType: GadgetFieldType;
                                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                              }
                            | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
                            | {
                                __typename: "GadgetHasManyConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                              }
                            | { __typename: "GadgetObjectFieldConfig"; fieldType: GadgetFieldType };
                        }>;
                      };
                }>;
              };
        }>;
      };
};

export type SubFieldsFragment = SubFields_GadgetModelField_Fragment | SubFields_GadgetObjectField_Fragment;

export type ModelActionMetadataQueryVariables = Exact<{
  model: Scalars["String"]["input"];
  action: Scalars["String"]["input"];
}>;

export type ModelActionMetadataQuery = {
  __typename?: "Query";
  gadgetMeta: {
    __typename?: "GadgetApplicationMeta";
    model?: {
      __typename?: "GadgetModel";
      name: string;
      action?: {
        __typename?: "GadgetAction";
        name: string;
        apiIdentifier: string;
        inputFields: Array<{
          __typename?: "GadgetObjectField";
          name: string;
          apiIdentifier: string;
          fieldType: GadgetFieldType;
          requiredArgumentForInput: boolean;
          configuration:
            | {
                __typename: "GadgetBelongsToConfig";
                fieldType: GadgetFieldType;
                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
              }
            | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
            | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                fieldType: GadgetFieldType;
                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
              }
            | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
            | {
                __typename: "GadgetHasManyConfig";
                fieldType: GadgetFieldType;
                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
              }
            | {
                __typename: "GadgetObjectFieldConfig";
                name?: string | null;
                fieldType: GadgetFieldType;
                fields: Array<{
                  __typename?: "GadgetModelField";
                  sortable: boolean;
                  filterable: boolean;
                  name: string;
                  apiIdentifier: string;
                  fieldType: GadgetFieldType;
                  requiredArgumentForInput: boolean;
                  configuration:
                    | {
                        __typename: "GadgetBelongsToConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                      }
                    | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
                    | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        fieldType: GadgetFieldType;
                        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                      }
                    | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
                    | {
                        __typename: "GadgetHasManyConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                      }
                    | {
                        __typename: "GadgetObjectFieldConfig";
                        name?: string | null;
                        fieldType: GadgetFieldType;
                        fields: Array<{
                          __typename?: "GadgetModelField";
                          sortable: boolean;
                          filterable: boolean;
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                          requiredArgumentForInput: boolean;
                          configuration:
                            | {
                                __typename: "GadgetBelongsToConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                              }
                            | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
                            | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                fieldType: GadgetFieldType;
                                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                              }
                            | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
                            | {
                                __typename: "GadgetHasManyConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                              }
                            | {
                                __typename: "GadgetObjectFieldConfig";
                                name?: string | null;
                                fieldType: GadgetFieldType;
                                fields: Array<{
                                  __typename?: "GadgetModelField";
                                  sortable: boolean;
                                  filterable: boolean;
                                  name: string;
                                  apiIdentifier: string;
                                  fieldType: GadgetFieldType;
                                  requiredArgumentForInput: boolean;
                                  configuration:
                                    | {
                                        __typename: "GadgetBelongsToConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                                      }
                                    | { __typename: "GadgetDateTimeConfig"; fieldType: GadgetFieldType }
                                    | {
                                        __typename: "GadgetEnumConfig";
                                        allowMultiple: boolean;
                                        fieldType: GadgetFieldType;
                                        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                                      }
                                    | { __typename: "GadgetGenericFieldConfig"; fieldType: GadgetFieldType }
                                    | {
                                        __typename: "GadgetHasManyConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: { __typename?: "GadgetModel"; apiIdentifier: string } | null;
                                      }
                                    | { __typename: "GadgetObjectFieldConfig"; fieldType: GadgetFieldType };
                                }>;
                              };
                        }>;
                      };
                }>;
              };
        }>;
      } | null;
    } | null;
  };
};

export type RolesMetadataQueryVariables = Exact<{ [key: string]: never }>;

export type RolesMetadataQuery = {
  __typename?: "Query";
  gadgetMeta: { __typename?: "GadgetApplicationMeta"; roles: Array<{ __typename?: "GadgetRole"; name: string; selectable: boolean }> };
};

export const FieldMetadataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FieldMetadata" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
          { kind: "Field", name: { kind: "Name", value: "fieldType" } },
          { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
          {
            kind: "InlineFragment",
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sortable" } },
                { kind: "Field", name: { kind: "Name", value: "filterable" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "configuration" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "options" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "color" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FieldMetadataFragment, unknown>;
export const SubFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SubFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "configuration" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fields" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "configuration" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "fields" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "configuration" },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                                    {
                                                      kind: "InlineFragment",
                                                      typeCondition: {
                                                        kind: "NamedType",
                                                        name: { kind: "Name", value: "GadgetObjectFieldConfig" },
                                                      },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          { kind: "Field", name: { kind: "Name", value: "name" } },
                                                          {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "fields" },
                                                            selectionSet: {
                                                              kind: "SelectionSet",
                                                              selections: [
                                                                { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                              ],
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FieldMetadata" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
          { kind: "Field", name: { kind: "Name", value: "fieldType" } },
          { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
          {
            kind: "InlineFragment",
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sortable" } },
                { kind: "Field", name: { kind: "Name", value: "filterable" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "configuration" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "options" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "color" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SubFieldsFragment, unknown>;
export const GetModelMetadataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetModelMetadata" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "gadgetMeta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "model" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "apiIdentifier" },
                      value: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fields" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FieldMetadata" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
          { kind: "Field", name: { kind: "Name", value: "fieldType" } },
          { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
          {
            kind: "InlineFragment",
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sortable" } },
                { kind: "Field", name: { kind: "Name", value: "filterable" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "configuration" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "options" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "color" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetModelMetadataQuery, GetModelMetadataQueryVariables>;
export const ModelActionMetadataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ModelActionMetadata" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "model" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "action" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "gadgetMeta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "model" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "apiIdentifier" },
                      value: { kind: "Variable", name: { kind: "Name", value: "model" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "action" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "apiIdentifier" },
                            value: { kind: "Variable", name: { kind: "Name", value: "action" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "inputFields" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                  { kind: "FragmentSpread", name: { kind: "Name", value: "SubFields" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FieldMetadata" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
          { kind: "Field", name: { kind: "Name", value: "fieldType" } },
          { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
          {
            kind: "InlineFragment",
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sortable" } },
                { kind: "Field", name: { kind: "Name", value: "filterable" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "configuration" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "options" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "color" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SubFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "configuration" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fields" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "configuration" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "fields" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "configuration" },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                                    {
                                                      kind: "InlineFragment",
                                                      typeCondition: {
                                                        kind: "NamedType",
                                                        name: { kind: "Name", value: "GadgetObjectFieldConfig" },
                                                      },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          { kind: "Field", name: { kind: "Name", value: "name" } },
                                                          {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "fields" },
                                                            selectionSet: {
                                                              kind: "SelectionSet",
                                                              selections: [
                                                                { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                              ],
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ModelActionMetadataQuery, ModelActionMetadataQueryVariables>;
export const RolesMetadataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RolesMetadata" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "gadgetMeta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "roles" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "selectable" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RolesMetadataQuery, RolesMetadataQueryVariables>;
