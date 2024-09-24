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
  /** Represents the possible values of the fieldA enum. */
  AutoTableTestEnumEnum: { input: any; output: any };
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
  /** Represents one autoTableTest result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalAutoTableTestRecord: { input: any; output: any };
  /** Represents one _autoTableTestRelatedModel result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalAutoTableTestRelatedModelRecord: { input: any; output: any };
  /** Represents one city result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalGameCityRecord: { input: any; output: any };
  /** Represents one player result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalGamePlayerRecord: { input: any; output: any };
  /** Represents one round result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalGameRoundRecord: { input: any; output: any };
  /** Represents one stadium result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalGameStadiumRecord: { input: any; output: any };
  /** Represents one gizmo result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalGizmoRecord: { input: any; output: any };
  /** Represents one baseModel result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalHasManyThroughBaseModelRecord: { input: any; output: any };
  /** Represents one joinerModel result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalHasManyThroughJoinerModelRecord: { input: any; output: any };
  /** Represents one siblingModel result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalHasManyThroughSiblingModelRecord: { input: any; output: any };
  /** Represents one modelA result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalModelARecord: { input: any; output: any };
  /** Represents one part result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalPartRecord: { input: any; output: any };
  /** Represents one section result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalSectionRecord: { input: any; output: any };
  /** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalSessionRecord: { input: any; output: any };
  /** Represents one shopifyGdprRequest result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalShopifyGdprRequestRecord: { input: any; output: any };
  /** Represents one shopifyProductImage result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalShopifyProductImageRecord: { input: any; output: any };
  /** Represents one shopifyProductOption result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalShopifyProductOptionRecord: { input: any; output: any };
  /** Represents one shopifyProduct result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalShopifyProductRecord: { input: any; output: any };
  /** Represents one shopifyProductVariant result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalShopifyProductVariantRecord: { input: any; output: any };
  /** Represents one shopifyShop result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalShopifyShopRecord: { input: any; output: any };
  /** Represents one shopifySync result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalShopifySyncRecord: { input: any; output: any };
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
  /** Represents the possible values of the Topic enum. */
  ShopifyGdprRequestTopicEnum: { input: any; output: any };
  /** Represents the possible values of the Status enum. */
  ShopifyProductStatusEnum: { input: any; output: any };
  /** Represents the possible values of the tags enum. */
  StadiumTagsEnum: { input: any; output: any };
  /** Represents the possible values of the type enum. */
  StadiumTypeEnum: { input: any; output: any };
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
  /** Represents the possible values of the fieldA enum. */
  WidgetCategoryEnum: { input: any; output: any };
};

export type AbortShopifySyncInput = {
  domain?: InputMaybe<Scalars["String"]["input"]>;
  errorDetails?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  force?: InputMaybe<Scalars["Boolean"]["input"]>;
  models?: InputMaybe<Scalars["JSON"]["input"]>;
  shop?: InputMaybe<ShopifyShopBelongsToInput>;
  syncSince?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AbortShopifySyncResult = UpsertShopifySyncResult & {
  __typename?: "AbortShopifySyncResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifySync?: Maybe<ShopifySync>;
  success: Scalars["Boolean"]["output"];
};

export type AddInventoryWidgetResult = {
  __typename?: "AddInventoryWidgetResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

export type AlwaysThrowErrorWidgetInput = {
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

export type AlwaysThrowErrorWidgetResult = {
  __typename?: "AlwaysThrowErrorWidgetResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

/** Input object for specifying the context of a mutation trigger */
export type AppGraphQlTriggerMutationContext = {
  /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
  sessionID?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

export type AutoTableTest = {
  __typename?: "AutoTableTest";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  bool?: Maybe<Scalars["Boolean"]["output"]>;
  computed?: Maybe<Scalars["JSON"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  dt?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  enum?: Maybe<Array<Scalars["AutoTableTestEnumEnum"]["output"]>>;
  es?: Maybe<Scalars["String"]["output"]>;
  file?: Maybe<StoredFile>;
  hasMany: AutoTableTestRelatedModelConnection;
  hasOne?: Maybe<AutoTableTestRelatedModel>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  json?: Maybe<Scalars["JSON"]["output"]>;
  num?: Maybe<Scalars["Float"]["output"]>;
  rl?: Maybe<Array<Role>>;
  rt?: Maybe<RichText>;
  str?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  url?: Maybe<Scalars["String"]["output"]>;
  vect?: Maybe<Array<Scalars["Float"]["output"]>>;
  vectCosineSimilarityTo?: Maybe<Scalars["Float"]["output"]>;
  vectL2DistanceTo?: Maybe<Scalars["Float"]["output"]>;
};

export type AutoTableTestHasManyArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<AutoTableTestRelatedModelFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<AutoTableTestRelatedModelSort>>;
};

export type AutoTableTestVectCosineSimilarityToArgs = {
  vector: Array<Scalars["Float"]["input"]>;
};

export type AutoTableTestVectL2DistanceToArgs = {
  vector: Array<Scalars["Float"]["input"]>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type AutoTableTestBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedAutoTableTestCreateInput>;
  customAction?: InputMaybe<NestedAutoTableTestCustomActionInput>;
  customActionWithParams?: InputMaybe<NestedAutoTableTestCustomActionWithParamsInput>;
  delete?: InputMaybe<NestedAutoTableTestDeleteInput>;
  update?: InputMaybe<NestedAutoTableTestUpdateInput>;
  updateWithCustomParams?: InputMaybe<NestedAutoTableTestUpdateWithCustomParamsInput>;
};

/** A connection to a list of AutoTableTest items. */
export type AutoTableTestConnection = {
  __typename?: "AutoTableTestConnection";
  /** A list of edges. */
  edges: Array<AutoTableTestEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a AutoTableTest connection. */
export type AutoTableTestEdge = {
  __typename?: "AutoTableTestEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: AutoTableTest;
};

export type AutoTableTestFilter = {
  AND?: InputMaybe<Array<InputMaybe<AutoTableTestFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<AutoTableTestFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AutoTableTestFilter>>>;
  bool?: InputMaybe<BooleanFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  enum?: InputMaybe<MultiEnumFilter>;
  id?: InputMaybe<IdFilter>;
  json?: InputMaybe<JsonFilter>;
  num?: InputMaybe<FloatFilter>;
  rt?: InputMaybe<StringFilter>;
  str?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
  vect?: InputMaybe<VectorFilter>;
};

export type AutoTableTestRelatedModel = {
  __typename?: "AutoTableTestRelatedModel";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  belongsToParent?: Maybe<AutoTableTest>;
  belongsToParentId?: Maybe<Scalars["GadgetID"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  manyBelongsToParent?: Maybe<AutoTableTest>;
  manyBelongsToParentId?: Maybe<Scalars["GadgetID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  someBool?: Maybe<Scalars["Boolean"]["output"]>;
  someNumber?: Maybe<Scalars["Float"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of AutoTableTestRelatedModel items. */
export type AutoTableTestRelatedModelConnection = {
  __typename?: "AutoTableTestRelatedModelConnection";
  /** A list of edges. */
  edges: Array<AutoTableTestRelatedModelEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a AutoTableTestRelatedModel connection. */
export type AutoTableTestRelatedModelEdge = {
  __typename?: "AutoTableTestRelatedModelEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: AutoTableTestRelatedModel;
};

export type AutoTableTestRelatedModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AutoTableTestRelatedModelFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<AutoTableTestRelatedModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AutoTableTestRelatedModelFilter>>>;
  belongsToParent?: InputMaybe<IdFilter>;
  belongsToParentId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  manyBelongsToParent?: InputMaybe<IdFilter>;
  manyBelongsToParentId?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  someBool?: InputMaybe<BooleanFilter>;
  someNumber?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type AutoTableTestRelatedModelHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeAutoTableTestRelatedModelInput>;
  create?: InputMaybe<NestedAutoTableTestRelatedModelCreateInput>;
  delete?: InputMaybe<NestedAutoTableTestRelatedModelDeleteInput>;
  update?: InputMaybe<NestedAutoTableTestRelatedModelUpdateInput>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type AutoTableTestRelatedModelHasOneInput = {
  create?: InputMaybe<NestedAutoTableTestRelatedModelCreateInput>;
  delete?: InputMaybe<NestedAutoTableTestRelatedModelDeleteInput>;
  update?: InputMaybe<NestedAutoTableTestRelatedModelUpdateInput>;
};

export type AutoTableTestRelatedModelSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the someBool field. Defaults to ascending (smallest value first). */
  someBool?: InputMaybe<SortOrder>;
  /** Sort the results by the someNumber field. Defaults to ascending (smallest value first). */
  someNumber?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type AutoTableTestSort = {
  /** Sort the results by the bool field. Defaults to ascending (smallest value first). */
  bool?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the dt field. Defaults to ascending (smallest value first). */
  dt?: InputMaybe<SortOrder>;
  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: InputMaybe<SortOrder>;
  /** Sort the results by the enum field. Defaults to ascending (smallest value first). */
  enum?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the json field. Defaults to ascending (smallest value first). */
  json?: InputMaybe<SortOrder>;
  /** Sort the results by the num field. Defaults to ascending (smallest value first). */
  num?: InputMaybe<SortOrder>;
  /** Sort the results by the rt field. Defaults to ascending (smallest value first). */
  rt?: InputMaybe<SortOrder>;
  /** Sort the results by the str field. Defaults to ascending (smallest value first). */
  str?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the url field. Defaults to ascending (smallest value first). */
  url?: InputMaybe<SortOrder>;
  /** Sort the results by the vect vector field. Sorts based on the distance between a given vector and the vector stored in vect. */
  vect?: InputMaybe<VectorSortOrder>;
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
  | AbortShopifySyncResult
  | AddInventoryWidgetResult
  | AlwaysThrowErrorWidgetResult
  | CompleteShopifySyncResult
  | CreateAutoTableTestRelatedModelResult
  | CreateAutoTableTestResult
  | CreateGameCityResult
  | CreateGamePlayerResult
  | CreateGameRoundResult
  | CreateGameStadiumResult
  | CreateGizmoResult
  | CreateHasManyThroughBaseModelResult
  | CreateHasManyThroughJoinerModelResult
  | CreateHasManyThroughSiblingModelResult
  | CreateModelAResult
  | CreatePartResult
  | CreateSectionResult
  | CreateTestDataResult
  | CreateWidgetResult
  | CustomActionAutoTableTestResult
  | CustomActionWithParamsAutoTableTestResult
  | CustomObjectParamsGameCityResult
  | DeleteAutoTableTestRelatedModelResult
  | DeleteAutoTableTestResult
  | DeleteGameCityResult
  | DeleteGamePlayerResult
  | DeleteGameRoundResult
  | DeleteGameStadiumResult
  | DeleteGizmoResult
  | DeleteHasManyThroughBaseModelResult
  | DeleteHasManyThroughJoinerModelResult
  | DeleteHasManyThroughSiblingModelResult
  | DeleteModelAResult
  | DeletePartResult
  | DeleteSectionResult
  | DeleteUserResult
  | DeleteWidgetResult
  | ErrorShopifySyncResult
  | FlipAllResult
  | NameSpacedActionAResult
  | NameSpacedCustomObjectParamsResult
  | RunShopifySyncResult
  | SignInUserResult
  | SignOutUserResult
  | SignUpUserResult
  | UpdateAutoTableTestRelatedModelResult
  | UpdateAutoTableTestResult
  | UpdateGameCityResult
  | UpdateGamePlayerResult
  | UpdateGameRoundResult
  | UpdateGameStadiumResult
  | UpdateGizmoResult
  | UpdateHasManyThroughBaseModelResult
  | UpdateHasManyThroughJoinerModelResult
  | UpdateHasManyThroughSiblingModelResult
  | UpdateModelAResult
  | UpdatePartResult
  | UpdateSectionResult
  | UpdateUserResult
  | UpdateWidgetResult
  | UpdateWithCustomParamsAutoTableTestResult;

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

export type BackgroundGameMutations = {
  __typename?: "BackgroundGameMutations";
  bulkCreateCities: BulkEnqueueBackgroundActionResult;
  bulkCreatePlayers: BulkEnqueueBackgroundActionResult;
  bulkCreateRounds: BulkEnqueueBackgroundActionResult;
  bulkCreateStadia: BulkEnqueueBackgroundActionResult;
  bulkCustomObjectParamsCities: BulkEnqueueBackgroundActionResult;
  bulkDeleteCities: BulkEnqueueBackgroundActionResult;
  bulkDeletePlayers: BulkEnqueueBackgroundActionResult;
  bulkDeleteRounds: BulkEnqueueBackgroundActionResult;
  bulkDeleteStadia: BulkEnqueueBackgroundActionResult;
  bulkUpdateCities: BulkEnqueueBackgroundActionResult;
  bulkUpdatePlayers: BulkEnqueueBackgroundActionResult;
  bulkUpdateRounds: BulkEnqueueBackgroundActionResult;
  bulkUpdateStadia: BulkEnqueueBackgroundActionResult;
  bulkUpsertCities: BulkEnqueueBackgroundActionResult;
  bulkUpsertPlayers: BulkEnqueueBackgroundActionResult;
  bulkUpsertRounds: BulkEnqueueBackgroundActionResult;
  bulkUpsertStadia: BulkEnqueueBackgroundActionResult;
  createCity: EnqueueBackgroundActionResult;
  createPlayer: EnqueueBackgroundActionResult;
  createRound: EnqueueBackgroundActionResult;
  createStadium: EnqueueBackgroundActionResult;
  customObjectParamsCity: EnqueueBackgroundActionResult;
  deleteCity: EnqueueBackgroundActionResult;
  deletePlayer: EnqueueBackgroundActionResult;
  deleteRound: EnqueueBackgroundActionResult;
  deleteStadium: EnqueueBackgroundActionResult;
  updateCity: EnqueueBackgroundActionResult;
  updatePlayer: EnqueueBackgroundActionResult;
  updateRound: EnqueueBackgroundActionResult;
  updateStadium: EnqueueBackgroundActionResult;
  upsertCity: EnqueueBackgroundActionResult;
  upsertPlayer: EnqueueBackgroundActionResult;
  upsertRound: EnqueueBackgroundActionResult;
  upsertStadium: EnqueueBackgroundActionResult;
};

export type BackgroundGameMutationsBulkCreateCitiesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateGameCitiesInput>;
};

export type BackgroundGameMutationsBulkCreatePlayersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateGamePlayersInput>;
};

export type BackgroundGameMutationsBulkCreateRoundsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateGameRoundsInput>;
};

export type BackgroundGameMutationsBulkCreateStadiaArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateGameStadiaInput>;
};

export type BackgroundGameMutationsBulkCustomObjectParamsCitiesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCustomObjectParamsGameCitiesInput>;
};

export type BackgroundGameMutationsBulkDeleteCitiesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundGameMutationsBulkDeletePlayersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundGameMutationsBulkDeleteRoundsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundGameMutationsBulkDeleteStadiaArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundGameMutationsBulkUpdateCitiesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateGameCitiesInput>;
};

export type BackgroundGameMutationsBulkUpdatePlayersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateGamePlayersInput>;
};

export type BackgroundGameMutationsBulkUpdateRoundsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateGameRoundsInput>;
};

export type BackgroundGameMutationsBulkUpdateStadiaArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateGameStadiaInput>;
};

export type BackgroundGameMutationsBulkUpsertCitiesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertGameCitiesInput>;
};

export type BackgroundGameMutationsBulkUpsertPlayersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertGamePlayersInput>;
};

export type BackgroundGameMutationsBulkUpsertRoundsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertGameRoundsInput>;
};

export type BackgroundGameMutationsBulkUpsertStadiaArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertGameStadiaInput>;
};

export type BackgroundGameMutationsCreateCityArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  city?: InputMaybe<CreateGameCityInput>;
};

export type BackgroundGameMutationsCreatePlayerArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  player?: InputMaybe<CreateGamePlayerInput>;
};

export type BackgroundGameMutationsCreateRoundArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  round?: InputMaybe<CreateGameRoundInput>;
};

export type BackgroundGameMutationsCreateStadiumArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  stadium?: InputMaybe<CreateGameStadiumInput>;
};

export type BackgroundGameMutationsCustomObjectParamsCityArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  city?: InputMaybe<CustomObjectParamsGameCityInput>;
  id: Scalars["GadgetID"]["input"];
  objParam?: InputMaybe<CustomObjectParamsObjParamInput>;
  rootLevelStr?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundGameMutationsDeleteCityArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundGameMutationsDeletePlayerArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundGameMutationsDeleteRoundArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundGameMutationsDeleteStadiumArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundGameMutationsUpdateCityArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  city?: InputMaybe<UpdateGameCityInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundGameMutationsUpdatePlayerArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  player?: InputMaybe<UpdateGamePlayerInput>;
};

export type BackgroundGameMutationsUpdateRoundArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  round?: InputMaybe<UpdateGameRoundInput>;
};

export type BackgroundGameMutationsUpdateStadiumArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  stadium?: InputMaybe<UpdateGameStadiumInput>;
};

export type BackgroundGameMutationsUpsertCityArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  city?: InputMaybe<UpsertGameCityInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundGameMutationsUpsertPlayerArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  player?: InputMaybe<UpsertGamePlayerInput>;
};

export type BackgroundGameMutationsUpsertRoundArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  round?: InputMaybe<UpsertGameRoundInput>;
};

export type BackgroundGameMutationsUpsertStadiumArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stadium?: InputMaybe<UpsertGameStadiumInput>;
};

export type BackgroundHasManyThroughMutations = {
  __typename?: "BackgroundHasManyThroughMutations";
  bulkCreateBaseModels: BulkEnqueueBackgroundActionResult;
  bulkCreateJoinerModels: BulkEnqueueBackgroundActionResult;
  bulkCreateSiblingModels: BulkEnqueueBackgroundActionResult;
  bulkDeleteBaseModels: BulkEnqueueBackgroundActionResult;
  bulkDeleteJoinerModels: BulkEnqueueBackgroundActionResult;
  bulkDeleteSiblingModels: BulkEnqueueBackgroundActionResult;
  bulkUpdateBaseModels: BulkEnqueueBackgroundActionResult;
  bulkUpdateJoinerModels: BulkEnqueueBackgroundActionResult;
  bulkUpdateSiblingModels: BulkEnqueueBackgroundActionResult;
  bulkUpsertBaseModels: BulkEnqueueBackgroundActionResult;
  bulkUpsertJoinerModels: BulkEnqueueBackgroundActionResult;
  bulkUpsertSiblingModels: BulkEnqueueBackgroundActionResult;
  createBaseModel: EnqueueBackgroundActionResult;
  createJoinerModel: EnqueueBackgroundActionResult;
  createSiblingModel: EnqueueBackgroundActionResult;
  deleteBaseModel: EnqueueBackgroundActionResult;
  deleteJoinerModel: EnqueueBackgroundActionResult;
  deleteSiblingModel: EnqueueBackgroundActionResult;
  updateBaseModel: EnqueueBackgroundActionResult;
  updateJoinerModel: EnqueueBackgroundActionResult;
  updateSiblingModel: EnqueueBackgroundActionResult;
  upsertBaseModel: EnqueueBackgroundActionResult;
  upsertJoinerModel: EnqueueBackgroundActionResult;
  upsertSiblingModel: EnqueueBackgroundActionResult;
};

export type BackgroundHasManyThroughMutationsBulkCreateBaseModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateHasManyThroughBaseModelsInput>;
};

export type BackgroundHasManyThroughMutationsBulkCreateJoinerModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateHasManyThroughJoinerModelsInput>;
};

export type BackgroundHasManyThroughMutationsBulkCreateSiblingModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateHasManyThroughSiblingModelsInput>;
};

export type BackgroundHasManyThroughMutationsBulkDeleteBaseModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundHasManyThroughMutationsBulkDeleteJoinerModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundHasManyThroughMutationsBulkDeleteSiblingModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundHasManyThroughMutationsBulkUpdateBaseModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateHasManyThroughBaseModelsInput>;
};

export type BackgroundHasManyThroughMutationsBulkUpdateJoinerModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateHasManyThroughJoinerModelsInput>;
};

export type BackgroundHasManyThroughMutationsBulkUpdateSiblingModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateHasManyThroughSiblingModelsInput>;
};

export type BackgroundHasManyThroughMutationsBulkUpsertBaseModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertHasManyThroughBaseModelsInput>;
};

export type BackgroundHasManyThroughMutationsBulkUpsertJoinerModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertHasManyThroughJoinerModelsInput>;
};

export type BackgroundHasManyThroughMutationsBulkUpsertSiblingModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertHasManyThroughSiblingModelsInput>;
};

export type BackgroundHasManyThroughMutationsCreateBaseModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  baseModel?: InputMaybe<CreateHasManyThroughBaseModelInput>;
};

export type BackgroundHasManyThroughMutationsCreateJoinerModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  joinerModel?: InputMaybe<CreateHasManyThroughJoinerModelInput>;
};

export type BackgroundHasManyThroughMutationsCreateSiblingModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  siblingModel?: InputMaybe<CreateHasManyThroughSiblingModelInput>;
};

export type BackgroundHasManyThroughMutationsDeleteBaseModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundHasManyThroughMutationsDeleteJoinerModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundHasManyThroughMutationsDeleteSiblingModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundHasManyThroughMutationsUpdateBaseModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  baseModel?: InputMaybe<UpdateHasManyThroughBaseModelInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundHasManyThroughMutationsUpdateJoinerModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  joinerModel?: InputMaybe<UpdateHasManyThroughJoinerModelInput>;
};

export type BackgroundHasManyThroughMutationsUpdateSiblingModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  siblingModel?: InputMaybe<UpdateHasManyThroughSiblingModelInput>;
};

export type BackgroundHasManyThroughMutationsUpsertBaseModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  baseModel?: InputMaybe<UpsertHasManyThroughBaseModelInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundHasManyThroughMutationsUpsertJoinerModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  joinerModel?: InputMaybe<UpsertHasManyThroughJoinerModelInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundHasManyThroughMutationsUpsertSiblingModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  siblingModel?: InputMaybe<UpsertHasManyThroughSiblingModelInput>;
};

export type BackgroundMutations = {
  __typename?: "BackgroundMutations";
  abortShopifySync: EnqueueBackgroundActionResult;
  addInventoryWidget: EnqueueBackgroundActionResult;
  alwaysThrowErrorWidget: EnqueueBackgroundActionResult;
  bulkAbortShopifySyncs: BulkEnqueueBackgroundActionResult;
  bulkAddInventoryWidgets: BulkEnqueueBackgroundActionResult;
  bulkAlwaysThrowErrorWidgets: BulkEnqueueBackgroundActionResult;
  bulkCompleteShopifySyncs: BulkEnqueueBackgroundActionResult;
  bulkCreateAutoTableTestRelatedModels: BulkEnqueueBackgroundActionResult;
  bulkCreateAutoTableTests: BulkEnqueueBackgroundActionResult;
  bulkCreateGizmos: BulkEnqueueBackgroundActionResult;
  bulkCreateModelAs: BulkEnqueueBackgroundActionResult;
  bulkCreateParts: BulkEnqueueBackgroundActionResult;
  bulkCreateSections: BulkEnqueueBackgroundActionResult;
  bulkCreateWidgets: BulkEnqueueBackgroundActionResult;
  bulkCustomActionAutoTableTests: BulkEnqueueBackgroundActionResult;
  bulkCustomActionWithParamsAutoTableTests: BulkEnqueueBackgroundActionResult;
  bulkDeleteAutoTableTestRelatedModels: BulkEnqueueBackgroundActionResult;
  bulkDeleteAutoTableTests: BulkEnqueueBackgroundActionResult;
  bulkDeleteGizmos: BulkEnqueueBackgroundActionResult;
  bulkDeleteModelAs: BulkEnqueueBackgroundActionResult;
  bulkDeleteParts: BulkEnqueueBackgroundActionResult;
  bulkDeleteSections: BulkEnqueueBackgroundActionResult;
  bulkDeleteUsers: BulkEnqueueBackgroundActionResult;
  bulkDeleteWidgets: BulkEnqueueBackgroundActionResult;
  bulkErrorShopifySyncs: BulkEnqueueBackgroundActionResult;
  bulkRunShopifySyncs: BulkEnqueueBackgroundActionResult;
  bulkSignInUsers: BulkEnqueueBackgroundActionResult;
  bulkSignOutUsers: BulkEnqueueBackgroundActionResult;
  bulkSignUpUsers: BulkEnqueueBackgroundActionResult;
  bulkUpdateAutoTableTestRelatedModels: BulkEnqueueBackgroundActionResult;
  bulkUpdateAutoTableTests: BulkEnqueueBackgroundActionResult;
  bulkUpdateGizmos: BulkEnqueueBackgroundActionResult;
  bulkUpdateModelAs: BulkEnqueueBackgroundActionResult;
  bulkUpdateParts: BulkEnqueueBackgroundActionResult;
  bulkUpdateSections: BulkEnqueueBackgroundActionResult;
  bulkUpdateUsers: BulkEnqueueBackgroundActionResult;
  bulkUpdateWidgets: BulkEnqueueBackgroundActionResult;
  bulkUpdateWithCustomParamsAutoTableTests: BulkEnqueueBackgroundActionResult;
  bulkUpsertAutoTableTestRelatedModels: BulkEnqueueBackgroundActionResult;
  bulkUpsertAutoTableTests: BulkEnqueueBackgroundActionResult;
  bulkUpsertGizmos: BulkEnqueueBackgroundActionResult;
  bulkUpsertModelAs: BulkEnqueueBackgroundActionResult;
  bulkUpsertParts: BulkEnqueueBackgroundActionResult;
  bulkUpsertSections: BulkEnqueueBackgroundActionResult;
  bulkUpsertShopifySyncs: BulkEnqueueBackgroundActionResult;
  bulkUpsertUsers: BulkEnqueueBackgroundActionResult;
  bulkUpsertWidgets: BulkEnqueueBackgroundActionResult;
  completeShopifySync: EnqueueBackgroundActionResult;
  createAutoTableTest: EnqueueBackgroundActionResult;
  createAutoTableTestRelatedModel: EnqueueBackgroundActionResult;
  createGizmo: EnqueueBackgroundActionResult;
  createModelA: EnqueueBackgroundActionResult;
  createPart: EnqueueBackgroundActionResult;
  createSection: EnqueueBackgroundActionResult;
  createTestData: EnqueueBackgroundActionResult;
  createWidget: EnqueueBackgroundActionResult;
  customActionAutoTableTest: EnqueueBackgroundActionResult;
  customActionWithParamsAutoTableTest: EnqueueBackgroundActionResult;
  deleteAutoTableTest: EnqueueBackgroundActionResult;
  deleteAutoTableTestRelatedModel: EnqueueBackgroundActionResult;
  deleteGizmo: EnqueueBackgroundActionResult;
  deleteModelA: EnqueueBackgroundActionResult;
  deletePart: EnqueueBackgroundActionResult;
  deleteSection: EnqueueBackgroundActionResult;
  deleteUser: EnqueueBackgroundActionResult;
  deleteWidget: EnqueueBackgroundActionResult;
  errorShopifySync: EnqueueBackgroundActionResult;
  flipAll: EnqueueBackgroundActionResult;
  game: BackgroundGameMutations;
  hasManyThrough: BackgroundHasManyThroughMutations;
  name: BackgroundNameMutations;
  runShopifySync: EnqueueBackgroundActionResult;
  signInUser: EnqueueBackgroundActionResult;
  signOutUser: EnqueueBackgroundActionResult;
  signUpUser: EnqueueBackgroundActionResult;
  updateAutoTableTest: EnqueueBackgroundActionResult;
  updateAutoTableTestRelatedModel: EnqueueBackgroundActionResult;
  updateGizmo: EnqueueBackgroundActionResult;
  updateModelA: EnqueueBackgroundActionResult;
  updatePart: EnqueueBackgroundActionResult;
  updateSection: EnqueueBackgroundActionResult;
  updateUser: EnqueueBackgroundActionResult;
  updateWidget: EnqueueBackgroundActionResult;
  updateWithCustomParamsAutoTableTest: EnqueueBackgroundActionResult;
  upsertAutoTableTest: EnqueueBackgroundActionResult;
  upsertAutoTableTestRelatedModel: EnqueueBackgroundActionResult;
  upsertGizmo: EnqueueBackgroundActionResult;
  upsertModelA: EnqueueBackgroundActionResult;
  upsertPart: EnqueueBackgroundActionResult;
  upsertSection: EnqueueBackgroundActionResult;
  upsertShopifySync: EnqueueBackgroundActionResult;
  upsertUser: EnqueueBackgroundActionResult;
  upsertWidget: EnqueueBackgroundActionResult;
};

export type BackgroundMutationsAbortShopifySyncArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  shopifySync?: InputMaybe<AbortShopifySyncInput>;
};

export type BackgroundMutationsAddInventoryWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  count?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsAlwaysThrowErrorWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  widget?: InputMaybe<AlwaysThrowErrorWidgetInput>;
};

export type BackgroundMutationsBulkAbortShopifySyncsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkAbortShopifySyncsInput>;
};

export type BackgroundMutationsBulkAddInventoryWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkAddInventoryWidgetsInput>;
};

export type BackgroundMutationsBulkAlwaysThrowErrorWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkAlwaysThrowErrorWidgetsInput>;
};

export type BackgroundMutationsBulkCompleteShopifySyncsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCompleteShopifySyncsInput>;
};

export type BackgroundMutationsBulkCreateAutoTableTestRelatedModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateAutoTableTestRelatedModelsInput>;
};

export type BackgroundMutationsBulkCreateAutoTableTestsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateAutoTableTestsInput>;
};

export type BackgroundMutationsBulkCreateGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateGizmosInput>;
};

export type BackgroundMutationsBulkCreateModelAsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<Scalars["JSON"]["input"]>;
};

export type BackgroundMutationsBulkCreatePartsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreatePartsInput>;
};

export type BackgroundMutationsBulkCreateSectionsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateSectionsInput>;
};

export type BackgroundMutationsBulkCreateWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateWidgetsInput>;
};

export type BackgroundMutationsBulkCustomActionAutoTableTestsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkCustomActionWithParamsAutoTableTestsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCustomActionWithParamsAutoTableTestsInput>;
};

export type BackgroundMutationsBulkDeleteAutoTableTestRelatedModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteAutoTableTestsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteModelAsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeletePartsArgs = {
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

export type BackgroundMutationsBulkErrorShopifySyncsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkErrorShopifySyncsInput>;
};

export type BackgroundMutationsBulkRunShopifySyncsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkRunShopifySyncsInput>;
};

export type BackgroundMutationsBulkSignInUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkSignInUsersInput>;
};

export type BackgroundMutationsBulkSignOutUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkSignOutUsersInput>;
};

export type BackgroundMutationsBulkSignUpUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkSignUpUsersInput>;
};

export type BackgroundMutationsBulkUpdateAutoTableTestRelatedModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateAutoTableTestRelatedModelsInput>;
};

export type BackgroundMutationsBulkUpdateAutoTableTestsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateAutoTableTestsInput>;
};

export type BackgroundMutationsBulkUpdateGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateGizmosInput>;
};

export type BackgroundMutationsBulkUpdateModelAsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkUpdatePartsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdatePartsInput>;
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

export type BackgroundMutationsBulkUpdateWithCustomParamsAutoTableTestsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateWithCustomParamsAutoTableTestsInput>;
};

export type BackgroundMutationsBulkUpsertAutoTableTestRelatedModelsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertAutoTableTestRelatedModelsInput>;
};

export type BackgroundMutationsBulkUpsertAutoTableTestsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertAutoTableTestsInput>;
};

export type BackgroundMutationsBulkUpsertGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertGizmosInput>;
};

export type BackgroundMutationsBulkUpsertModelAsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertModelAsInput>;
};

export type BackgroundMutationsBulkUpsertPartsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertPartsInput>;
};

export type BackgroundMutationsBulkUpsertSectionsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertSectionsInput>;
};

export type BackgroundMutationsBulkUpsertShopifySyncsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertShopifySyncsInput>;
};

export type BackgroundMutationsBulkUpsertUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertUsersInput>;
};

export type BackgroundMutationsBulkUpsertWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertWidgetsInput>;
};

export type BackgroundMutationsCompleteShopifySyncArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  shopifySync?: InputMaybe<CompleteShopifySyncInput>;
};

export type BackgroundMutationsCreateAutoTableTestArgs = {
  autoTableTest?: InputMaybe<CreateAutoTableTestInput>;
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
};

export type BackgroundMutationsCreateAutoTableTestRelatedModelArgs = {
  _autoTableTestRelatedModel?: InputMaybe<CreateAutoTableTestRelatedModelInput>;
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
};

export type BackgroundMutationsCreateGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<CreateGizmoInput>;
};

export type BackgroundMutationsCreateModelAArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
};

export type BackgroundMutationsCreatePartArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  part?: InputMaybe<CreatePartInput>;
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

export type BackgroundMutationsCustomActionAutoTableTestArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsCustomActionWithParamsAutoTableTestArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  numberParam1?: InputMaybe<Scalars["Float"]["input"]>;
  stringParam1?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsDeleteAutoTableTestArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteAutoTableTestRelatedModelArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteModelAArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeletePartArgs = {
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

export type BackgroundMutationsErrorShopifySyncArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  shopifySync?: InputMaybe<ErrorShopifySyncInput>;
};

export type BackgroundMutationsFlipAllArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsRunShopifySyncArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  shopifySync?: InputMaybe<RunShopifySyncInput>;
  startReason?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsSignInUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<SignInUserInput>;
};

export type BackgroundMutationsSignOutUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<SignOutUserInput>;
};

export type BackgroundMutationsSignUpUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  user?: InputMaybe<SignUpUserInput>;
};

export type BackgroundMutationsUpdateAutoTableTestArgs = {
  autoTableTest?: InputMaybe<UpdateAutoTableTestInput>;
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateAutoTableTestRelatedModelArgs = {
  _autoTableTestRelatedModel?: InputMaybe<UpdateAutoTableTestRelatedModelInput>;
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
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

export type BackgroundMutationsUpdatePartArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  part?: InputMaybe<UpdatePartInput>;
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

export type BackgroundMutationsUpdateWithCustomParamsAutoTableTestArgs = {
  autoTableTest?: InputMaybe<UpdateWithCustomParamsAutoTableTestInput>;
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  num?: InputMaybe<Scalars["Float"]["input"]>;
  numberParam1?: InputMaybe<Scalars["Float"]["input"]>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  stringParam1?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsUpsertAutoTableTestArgs = {
  autoTableTest?: InputMaybe<UpsertAutoTableTestInput>;
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertAutoTableTestRelatedModelArgs = {
  _autoTableTestRelatedModel?: InputMaybe<UpsertAutoTableTestRelatedModelInput>;
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<UpsertGizmoInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertModelAArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  modelA?: InputMaybe<UpsertModelAInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertPartArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  part?: InputMaybe<UpsertPartInput>;
};

export type BackgroundMutationsUpsertSectionArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  section?: InputMaybe<UpsertSectionInput>;
};

export type BackgroundMutationsUpsertShopifySyncArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shopifySync?: InputMaybe<UpsertShopifySyncInput>;
  startReason?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsUpsertUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  user?: InputMaybe<UpsertUserInput>;
};

export type BackgroundMutationsUpsertWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widget?: InputMaybe<UpsertWidgetInput>;
};

export type BackgroundNameMutations = {
  __typename?: "BackgroundNameMutations";
  spaced: BackgroundNameSpacedMutations;
};

export type BackgroundNameSpacedMutations = {
  __typename?: "BackgroundNameSpacedMutations";
  actionA: EnqueueBackgroundActionResult;
  customObjectParams: EnqueueBackgroundActionResult;
};

export type BackgroundNameSpacedMutationsActionAArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
};

export type BackgroundNameSpacedMutationsCustomObjectParamsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  objParam?: InputMaybe<NameSpacedCustomObjectParamsObjParamInput>;
  rootLevelStr?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type BaseModelBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedBaseModelCreateInput>;
  delete?: InputMaybe<NestedBaseModelDeleteInput>;
  update?: InputMaybe<NestedBaseModelUpdateInput>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type BaseModelHasManyThroughInput = {
  create?: InputMaybe<NestedBaseModelCreateInput>;
  delete?: InputMaybe<NestedBaseModelDeleteInput>;
  update?: InputMaybe<NestedBaseModelUpdateInput>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  notEquals?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BulkAbortShopifySyncsInput = {
  id: Scalars["GadgetID"]["input"];
  shopifySync?: InputMaybe<AbortShopifySyncInput>;
};

/** The output when running the abort on the shopifySync model in bulk. */
export type BulkAbortShopifySyncsResult = {
  __typename?: "BulkAbortShopifySyncsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: Maybe<Array<Maybe<ShopifySync>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
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

export type BulkAlwaysThrowErrorWidgetsInput = {
  widget?: InputMaybe<AlwaysThrowErrorWidgetInput>;
};

/** The output when running the alwaysThrowError on the widget model in bulk. */
export type BulkAlwaysThrowErrorWidgetsResult = {
  __typename?: "BulkAlwaysThrowErrorWidgetsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed widget records by each sent bulk action. Returned in the same order as the input bulk action params. */
  widgets?: Maybe<Array<Maybe<Widget>>>;
};

export type BulkCompleteShopifySyncsInput = {
  id: Scalars["GadgetID"]["input"];
  shopifySync?: InputMaybe<CompleteShopifySyncInput>;
};

/** The output when running the complete on the shopifySync model in bulk. */
export type BulkCompleteShopifySyncsResult = {
  __typename?: "BulkCompleteShopifySyncsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: Maybe<Array<Maybe<ShopifySync>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateAutoTableTestRelatedModelsInput = {
  _autoTableTestRelatedModel?: InputMaybe<CreateAutoTableTestRelatedModelInput>;
};

/** The output when running the create on the _autoTableTestRelatedModel model in bulk. */
export type BulkCreateAutoTableTestRelatedModelsResult = {
  __typename?: "BulkCreateAutoTableTestRelatedModelsResult";
  /** The list of all changed _autoTableTestRelatedModel records by each sent bulk action. Returned in the same order as the input bulk action params. */
  _autoTableTestRelatedModels?: Maybe<Array<Maybe<AutoTableTestRelatedModel>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateAutoTableTestsInput = {
  autoTableTest?: InputMaybe<CreateAutoTableTestInput>;
};

/** The output when running the create on the autoTableTest model in bulk. */
export type BulkCreateAutoTableTestsResult = {
  __typename?: "BulkCreateAutoTableTestsResult";
  /** The list of all changed autoTableTest records by each sent bulk action. Returned in the same order as the input bulk action params. */
  autoTableTests?: Maybe<Array<Maybe<AutoTableTest>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateGameCitiesInput = {
  city?: InputMaybe<CreateGameCityInput>;
};

/** The output when running the create on the city model in bulk. */
export type BulkCreateGameCitiesResult = {
  __typename?: "BulkCreateGameCitiesResult";
  /** The list of all changed city records by each sent bulk action. Returned in the same order as the input bulk action params. */
  cities?: Maybe<Array<Maybe<GameCity>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateGamePlayersInput = {
  player?: InputMaybe<CreateGamePlayerInput>;
};

/** The output when running the create on the player model in bulk. */
export type BulkCreateGamePlayersResult = {
  __typename?: "BulkCreateGamePlayersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed player records by each sent bulk action. Returned in the same order as the input bulk action params. */
  players?: Maybe<Array<Maybe<GamePlayer>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateGameRoundsInput = {
  round?: InputMaybe<CreateGameRoundInput>;
};

/** The output when running the create on the round model in bulk. */
export type BulkCreateGameRoundsResult = {
  __typename?: "BulkCreateGameRoundsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed round records by each sent bulk action. Returned in the same order as the input bulk action params. */
  rounds?: Maybe<Array<Maybe<GameRound>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateGameStadiaInput = {
  stadium?: InputMaybe<CreateGameStadiumInput>;
};

/** The output when running the create on the stadium model in bulk. */
export type BulkCreateGameStadiaResult = {
  __typename?: "BulkCreateGameStadiaResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed stadium records by each sent bulk action. Returned in the same order as the input bulk action params. */
  stadia?: Maybe<Array<Maybe<GameStadium>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
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

export type BulkCreateHasManyThroughBaseModelsInput = {
  baseModel?: InputMaybe<CreateHasManyThroughBaseModelInput>;
};

/** The output when running the create on the baseModel model in bulk. */
export type BulkCreateHasManyThroughBaseModelsResult = {
  __typename?: "BulkCreateHasManyThroughBaseModelsResult";
  /** The list of all changed baseModel records by each sent bulk action. Returned in the same order as the input bulk action params. */
  baseModels?: Maybe<Array<Maybe<HasManyThroughBaseModel>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateHasManyThroughJoinerModelsInput = {
  joinerModel?: InputMaybe<CreateHasManyThroughJoinerModelInput>;
};

/** The output when running the create on the joinerModel model in bulk. */
export type BulkCreateHasManyThroughJoinerModelsResult = {
  __typename?: "BulkCreateHasManyThroughJoinerModelsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed joinerModel records by each sent bulk action. Returned in the same order as the input bulk action params. */
  joinerModels?: Maybe<Array<Maybe<HasManyThroughJoinerModel>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateHasManyThroughSiblingModelsInput = {
  siblingModel?: InputMaybe<CreateHasManyThroughSiblingModelInput>;
};

/** The output when running the create on the siblingModel model in bulk. */
export type BulkCreateHasManyThroughSiblingModelsResult = {
  __typename?: "BulkCreateHasManyThroughSiblingModelsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed siblingModel records by each sent bulk action. Returned in the same order as the input bulk action params. */
  siblingModels?: Maybe<Array<Maybe<HasManyThroughSiblingModel>>>;
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

export type BulkCreatePartsInput = {
  part?: InputMaybe<CreatePartInput>;
};

/** The output when running the create on the part model in bulk. */
export type BulkCreatePartsResult = {
  __typename?: "BulkCreatePartsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed part records by each sent bulk action. Returned in the same order as the input bulk action params. */
  parts?: Maybe<Array<Maybe<Part>>>;
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

/** The output when running the customAction on the autoTableTest model in bulk. */
export type BulkCustomActionAutoTableTestsResult = {
  __typename?: "BulkCustomActionAutoTableTestsResult";
  /** The list of all changed autoTableTest records by each sent bulk action. Returned in the same order as the input bulk action params. */
  autoTableTests?: Maybe<Array<Maybe<AutoTableTest>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCustomActionWithParamsAutoTableTestsInput = {
  id: Scalars["GadgetID"]["input"];
  numberParam1?: InputMaybe<Scalars["Float"]["input"]>;
  stringParam1?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output when running the customActionWithParams on the autoTableTest model in bulk. */
export type BulkCustomActionWithParamsAutoTableTestsResult = {
  __typename?: "BulkCustomActionWithParamsAutoTableTestsResult";
  /** The list of all changed autoTableTest records by each sent bulk action. Returned in the same order as the input bulk action params. */
  autoTableTests?: Maybe<Array<Maybe<AutoTableTest>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCustomObjectParamsGameCitiesInput = {
  city?: InputMaybe<CustomObjectParamsGameCityInput>;
  id: Scalars["GadgetID"]["input"];
  objParam?: InputMaybe<CustomObjectParamsObjParamInput>;
  rootLevelStr?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output when running the customObjectParams on the city model in bulk. */
export type BulkCustomObjectParamsGameCitiesResult = {
  __typename?: "BulkCustomObjectParamsGameCitiesResult";
  /** The list of all changed city records by each sent bulk action. Returned in the same order as the input bulk action params. */
  cities?: Maybe<Array<Maybe<GameCity>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the _autoTableTestRelatedModel model in bulk. */
export type BulkDeleteAutoTableTestRelatedModelsResult = {
  __typename?: "BulkDeleteAutoTableTestRelatedModelsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the autoTableTest model in bulk. */
export type BulkDeleteAutoTableTestsResult = {
  __typename?: "BulkDeleteAutoTableTestsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the city model in bulk. */
export type BulkDeleteGameCitiesResult = {
  __typename?: "BulkDeleteGameCitiesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the player model in bulk. */
export type BulkDeleteGamePlayersResult = {
  __typename?: "BulkDeleteGamePlayersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the round model in bulk. */
export type BulkDeleteGameRoundsResult = {
  __typename?: "BulkDeleteGameRoundsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the stadium model in bulk. */
export type BulkDeleteGameStadiaResult = {
  __typename?: "BulkDeleteGameStadiaResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the gizmo model in bulk. */
export type BulkDeleteGizmosResult = {
  __typename?: "BulkDeleteGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the baseModel model in bulk. */
export type BulkDeleteHasManyThroughBaseModelsResult = {
  __typename?: "BulkDeleteHasManyThroughBaseModelsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the joinerModel model in bulk. */
export type BulkDeleteHasManyThroughJoinerModelsResult = {
  __typename?: "BulkDeleteHasManyThroughJoinerModelsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the siblingModel model in bulk. */
export type BulkDeleteHasManyThroughSiblingModelsResult = {
  __typename?: "BulkDeleteHasManyThroughSiblingModelsResult";
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

/** The output when running the delete on the part model in bulk. */
export type BulkDeletePartsResult = {
  __typename?: "BulkDeletePartsResult";
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

export type BulkErrorShopifySyncsInput = {
  id: Scalars["GadgetID"]["input"];
  shopifySync?: InputMaybe<ErrorShopifySyncInput>;
};

/** The output when running the error on the shopifySync model in bulk. */
export type BulkErrorShopifySyncsResult = {
  __typename?: "BulkErrorShopifySyncsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: Maybe<Array<Maybe<ShopifySync>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkRunShopifySyncsInput = {
  shopifySync?: InputMaybe<RunShopifySyncInput>;
  startReason?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output when running the run on the shopifySync model in bulk. */
export type BulkRunShopifySyncsResult = {
  __typename?: "BulkRunShopifySyncsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: Maybe<Array<Maybe<ShopifySync>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkSignInUsersInput = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<SignInUserInput>;
};

/** The output when running the signIn on the user model in bulk. */
export type BulkSignInUsersResult = {
  __typename?: "BulkSignInUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: Maybe<Array<Maybe<User>>>;
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

export type BulkSignUpUsersInput = {
  user?: InputMaybe<SignUpUserInput>;
};

/** The output when running the signUp on the user model in bulk. */
export type BulkSignUpUsersResult = {
  __typename?: "BulkSignUpUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: Maybe<Array<Maybe<User>>>;
};

export type BulkUpdateAutoTableTestRelatedModelsInput = {
  _autoTableTestRelatedModel?: InputMaybe<UpdateAutoTableTestRelatedModelInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the _autoTableTestRelatedModel model in bulk. */
export type BulkUpdateAutoTableTestRelatedModelsResult = {
  __typename?: "BulkUpdateAutoTableTestRelatedModelsResult";
  /** The list of all changed _autoTableTestRelatedModel records by each sent bulk action. Returned in the same order as the input bulk action params. */
  _autoTableTestRelatedModels?: Maybe<Array<Maybe<AutoTableTestRelatedModel>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateAutoTableTestsInput = {
  autoTableTest?: InputMaybe<UpdateAutoTableTestInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the autoTableTest model in bulk. */
export type BulkUpdateAutoTableTestsResult = {
  __typename?: "BulkUpdateAutoTableTestsResult";
  /** The list of all changed autoTableTest records by each sent bulk action. Returned in the same order as the input bulk action params. */
  autoTableTests?: Maybe<Array<Maybe<AutoTableTest>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateGameCitiesInput = {
  city?: InputMaybe<UpdateGameCityInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the city model in bulk. */
export type BulkUpdateGameCitiesResult = {
  __typename?: "BulkUpdateGameCitiesResult";
  /** The list of all changed city records by each sent bulk action. Returned in the same order as the input bulk action params. */
  cities?: Maybe<Array<Maybe<GameCity>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateGamePlayersInput = {
  id: Scalars["GadgetID"]["input"];
  player?: InputMaybe<UpdateGamePlayerInput>;
};

/** The output when running the update on the player model in bulk. */
export type BulkUpdateGamePlayersResult = {
  __typename?: "BulkUpdateGamePlayersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed player records by each sent bulk action. Returned in the same order as the input bulk action params. */
  players?: Maybe<Array<Maybe<GamePlayer>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateGameRoundsInput = {
  id: Scalars["GadgetID"]["input"];
  round?: InputMaybe<UpdateGameRoundInput>;
};

/** The output when running the update on the round model in bulk. */
export type BulkUpdateGameRoundsResult = {
  __typename?: "BulkUpdateGameRoundsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed round records by each sent bulk action. Returned in the same order as the input bulk action params. */
  rounds?: Maybe<Array<Maybe<GameRound>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateGameStadiaInput = {
  id: Scalars["GadgetID"]["input"];
  stadium?: InputMaybe<UpdateGameStadiumInput>;
};

/** The output when running the update on the stadium model in bulk. */
export type BulkUpdateGameStadiaResult = {
  __typename?: "BulkUpdateGameStadiaResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed stadium records by each sent bulk action. Returned in the same order as the input bulk action params. */
  stadia?: Maybe<Array<Maybe<GameStadium>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
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

export type BulkUpdateHasManyThroughBaseModelsInput = {
  baseModel?: InputMaybe<UpdateHasManyThroughBaseModelInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the baseModel model in bulk. */
export type BulkUpdateHasManyThroughBaseModelsResult = {
  __typename?: "BulkUpdateHasManyThroughBaseModelsResult";
  /** The list of all changed baseModel records by each sent bulk action. Returned in the same order as the input bulk action params. */
  baseModels?: Maybe<Array<Maybe<HasManyThroughBaseModel>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateHasManyThroughJoinerModelsInput = {
  id: Scalars["GadgetID"]["input"];
  joinerModel?: InputMaybe<UpdateHasManyThroughJoinerModelInput>;
};

/** The output when running the update on the joinerModel model in bulk. */
export type BulkUpdateHasManyThroughJoinerModelsResult = {
  __typename?: "BulkUpdateHasManyThroughJoinerModelsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed joinerModel records by each sent bulk action. Returned in the same order as the input bulk action params. */
  joinerModels?: Maybe<Array<Maybe<HasManyThroughJoinerModel>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateHasManyThroughSiblingModelsInput = {
  id: Scalars["GadgetID"]["input"];
  siblingModel?: InputMaybe<UpdateHasManyThroughSiblingModelInput>;
};

/** The output when running the update on the siblingModel model in bulk. */
export type BulkUpdateHasManyThroughSiblingModelsResult = {
  __typename?: "BulkUpdateHasManyThroughSiblingModelsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed siblingModel records by each sent bulk action. Returned in the same order as the input bulk action params. */
  siblingModels?: Maybe<Array<Maybe<HasManyThroughSiblingModel>>>;
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

export type BulkUpdatePartsInput = {
  id: Scalars["GadgetID"]["input"];
  part?: InputMaybe<UpdatePartInput>;
};

/** The output when running the update on the part model in bulk. */
export type BulkUpdatePartsResult = {
  __typename?: "BulkUpdatePartsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed part records by each sent bulk action. Returned in the same order as the input bulk action params. */
  parts?: Maybe<Array<Maybe<Part>>>;
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

export type BulkUpdateWithCustomParamsAutoTableTestsInput = {
  autoTableTest?: InputMaybe<UpdateWithCustomParamsAutoTableTestInput>;
  id: Scalars["GadgetID"]["input"];
  num?: InputMaybe<Scalars["Float"]["input"]>;
  numberParam1?: InputMaybe<Scalars["Float"]["input"]>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  stringParam1?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output when running the updateWithCustomParams on the autoTableTest model in bulk. */
export type BulkUpdateWithCustomParamsAutoTableTestsResult = {
  __typename?: "BulkUpdateWithCustomParamsAutoTableTestsResult";
  /** The list of all changed autoTableTest records by each sent bulk action. Returned in the same order as the input bulk action params. */
  autoTableTests?: Maybe<Array<Maybe<AutoTableTest>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertAutoTableTestRelatedModelsInput = {
  _autoTableTestRelatedModel?: InputMaybe<UpsertAutoTableTestRelatedModelInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the _autoTableTestRelatedModel */
export type BulkUpsertAutoTableTestRelatedModelsResult = {
  __typename?: "BulkUpsertAutoTableTestRelatedModelsResult";
  /** The results of each upsert action in the bulk operation */
  _autoTableTestRelatedModels?: Maybe<Array<Maybe<AutoTableTestRelatedModel>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertAutoTableTestsInput = {
  autoTableTest?: InputMaybe<UpsertAutoTableTestInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the autoTableTest */
export type BulkUpsertAutoTableTestsResult = {
  __typename?: "BulkUpsertAutoTableTestsResult";
  /** The results of each upsert action in the bulk operation */
  autoTableTests?: Maybe<Array<Maybe<AutoTableTest>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertGameCitiesInput = {
  city?: InputMaybe<UpsertGameCityInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the city */
export type BulkUpsertGameCitiesResult = {
  __typename?: "BulkUpsertGameCitiesResult";
  /** The results of each upsert action in the bulk operation */
  cities?: Maybe<Array<Maybe<GameCity>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertGamePlayersInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  player?: InputMaybe<UpsertGamePlayerInput>;
};

/** The result of a bulk upsert operation for the player */
export type BulkUpsertGamePlayersResult = {
  __typename?: "BulkUpsertGamePlayersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  players?: Maybe<Array<Maybe<GamePlayer>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertGameRoundsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  round?: InputMaybe<UpsertGameRoundInput>;
};

/** The result of a bulk upsert operation for the round */
export type BulkUpsertGameRoundsResult = {
  __typename?: "BulkUpsertGameRoundsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  rounds?: Maybe<Array<Maybe<GameRound>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertGameStadiaInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stadium?: InputMaybe<UpsertGameStadiumInput>;
};

/** The result of a bulk upsert operation for the stadium */
export type BulkUpsertGameStadiaResult = {
  __typename?: "BulkUpsertGameStadiaResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  stadia?: Maybe<Array<Maybe<GameStadium>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertGizmosInput = {
  gizmo?: InputMaybe<UpsertGizmoInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the gizmo */
export type BulkUpsertGizmosResult = {
  __typename?: "BulkUpsertGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  gizmos?: Maybe<Array<Maybe<Gizmo>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertHasManyThroughBaseModelsInput = {
  baseModel?: InputMaybe<UpsertHasManyThroughBaseModelInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the baseModel */
export type BulkUpsertHasManyThroughBaseModelsResult = {
  __typename?: "BulkUpsertHasManyThroughBaseModelsResult";
  /** The results of each upsert action in the bulk operation */
  baseModels?: Maybe<Array<Maybe<HasManyThroughBaseModel>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertHasManyThroughJoinerModelsInput = {
  joinerModel?: InputMaybe<UpsertHasManyThroughJoinerModelInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the joinerModel */
export type BulkUpsertHasManyThroughJoinerModelsResult = {
  __typename?: "BulkUpsertHasManyThroughJoinerModelsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  joinerModels?: Maybe<Array<Maybe<HasManyThroughJoinerModel>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertHasManyThroughSiblingModelsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  siblingModel?: InputMaybe<UpsertHasManyThroughSiblingModelInput>;
};

/** The result of a bulk upsert operation for the siblingModel */
export type BulkUpsertHasManyThroughSiblingModelsResult = {
  __typename?: "BulkUpsertHasManyThroughSiblingModelsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  siblingModels?: Maybe<Array<Maybe<HasManyThroughSiblingModel>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertModelAsInput = {
  modelA?: InputMaybe<UpsertModelAInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the modelA */
export type BulkUpsertModelAsResult = {
  __typename?: "BulkUpsertModelAsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  modelAs?: Maybe<Array<Maybe<ModelA>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertPartsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  part?: InputMaybe<UpsertPartInput>;
};

/** The result of a bulk upsert operation for the part */
export type BulkUpsertPartsResult = {
  __typename?: "BulkUpsertPartsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  parts?: Maybe<Array<Maybe<Part>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertSectionsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  section?: InputMaybe<UpsertSectionInput>;
};

/** The result of a bulk upsert operation for the section */
export type BulkUpsertSectionsResult = {
  __typename?: "BulkUpsertSectionsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  sections?: Maybe<Array<Maybe<Section>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertShopifySyncsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shopifySync?: InputMaybe<UpsertShopifySyncInput>;
  startReason?: InputMaybe<Scalars["String"]["input"]>;
};

/** The result of a bulk upsert operation for the shopifySync */
export type BulkUpsertShopifySyncsResult = {
  __typename?: "BulkUpsertShopifySyncsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  shopifySyncs?: Maybe<Array<Maybe<ShopifySync>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertUsersInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  user?: InputMaybe<UpsertUserInput>;
};

/** The result of a bulk upsert operation for the user */
export type BulkUpsertUsersResult = {
  __typename?: "BulkUpsertUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The results of each upsert action in the bulk operation */
  users?: Maybe<Array<Maybe<User>>>;
};

export type BulkUpsertWidgetsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widget?: InputMaybe<UpsertWidgetInput>;
};

/** The result of a bulk upsert operation for the widget */
export type BulkUpsertWidgetsResult = {
  __typename?: "BulkUpsertWidgetsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The results of each upsert action in the bulk operation */
  widgets?: Maybe<Array<Maybe<Widget>>>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type CityBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedCityCreateInput>;
  customObjectParams?: InputMaybe<NestedCityCustomObjectParamsInput>;
  delete?: InputMaybe<NestedCityDeleteInput>;
  update?: InputMaybe<NestedCityUpdateInput>;
};

export type CompleteShopifySyncInput = {
  domain?: InputMaybe<Scalars["String"]["input"]>;
  errorDetails?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  force?: InputMaybe<Scalars["Boolean"]["input"]>;
  models?: InputMaybe<Scalars["JSON"]["input"]>;
  shop?: InputMaybe<ShopifyShopBelongsToInput>;
  syncSince?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CompleteShopifySyncResult = {
  __typename?: "CompleteShopifySyncResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifySync?: Maybe<ShopifySync>;
  success: Scalars["Boolean"]["output"];
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
export type ConvergeAutoTableTestRelatedModelInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeAutoTableTestRelatedModelValues>>;
};

/** One element of a ConvergeAutoTableTestRelatedModelInput record converge list */
export type ConvergeAutoTableTestRelatedModelValues = {
  belongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  manyBelongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  someBool?: InputMaybe<Scalars["Boolean"]["input"]>;
  someNumber?: InputMaybe<Scalars["Float"]["input"]>;
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
export type ConvergeJoinerModelInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeJoinerModelValues>>;
};

/** One element of a ConvergeJoinerModelInput record converge list */
export type ConvergeJoinerModelValues = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  joinerBelongsToBase?: InputMaybe<BaseModelBelongsToInput>;
  joinerBelongsToSibling?: InputMaybe<SiblingModelBelongsToInput>;
};

/** Declaratively specifies the list of records a relationship should become and invokes the given actions in order to change the current state to get to the newly specified state. */
export type ConvergePlayerInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergePlayerValues>>;
};

/** One element of a ConvergePlayerInput record converge list */
export type ConvergePlayerValues = {
  currentRound?: InputMaybe<RoundBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Declaratively specifies the list of records a relationship should become and invokes the given actions in order to change the current state to get to the newly specified state. */
export type ConvergeRoundInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeRoundValues>>;
};

/** One element of a ConvergeRoundInput record converge list */
export type ConvergeRoundValues = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  players?: InputMaybe<Array<InputMaybe<PlayerHasManyInput>>>;
  stadium?: InputMaybe<StadiumBelongsToInput>;
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

export type CreateAutoTableTestInput = {
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  enum?: InputMaybe<Array<Scalars["AutoTableTestEnumEnum"]["input"]>>;
  es?: InputMaybe<Scalars["String"]["input"]>;
  file?: InputMaybe<StoredFileInput>;
  hasMany?: InputMaybe<Array<InputMaybe<AutoTableTestRelatedModelHasManyInput>>>;
  hasOne?: InputMaybe<AutoTableTestRelatedModelHasOneInput>;
  json?: InputMaybe<Scalars["JSON"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  pwd?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  rl?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rt?: InputMaybe<RichTextInput>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  vect?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type CreateAutoTableTestRelatedModelInput = {
  belongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  manyBelongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  someBool?: InputMaybe<Scalars["Boolean"]["input"]>;
  someNumber?: InputMaybe<Scalars["Float"]["input"]>;
};

export type CreateAutoTableTestRelatedModelResult = UpsertAutoTableTestRelatedModelResult & {
  __typename?: "CreateAutoTableTestRelatedModelResult";
  _autoTableTestRelatedModel?: Maybe<AutoTableTestRelatedModel>;
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CreateAutoTableTestResult = UpsertAutoTableTestResult & {
  __typename?: "CreateAutoTableTestResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  autoTableTest?: Maybe<AutoTableTest>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CreateGameCityInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  stadium?: InputMaybe<StadiumHasOneInput>;
};

export type CreateGameCityResult = UpsertGameCityResult & {
  __typename?: "CreateGameCityResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<GameCity>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CreateGamePlayerInput = {
  currentRound?: InputMaybe<RoundBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateGamePlayerResult = UpsertGamePlayerResult & {
  __typename?: "CreateGamePlayerResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  player?: Maybe<GamePlayer>;
  success: Scalars["Boolean"]["output"];
};

export type CreateGameRoundInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  players?: InputMaybe<Array<InputMaybe<PlayerHasManyInput>>>;
  stadium?: InputMaybe<StadiumBelongsToInput>;
};

export type CreateGameRoundResult = UpsertGameRoundResult & {
  __typename?: "CreateGameRoundResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  round?: Maybe<GameRound>;
  success: Scalars["Boolean"]["output"];
};

export type CreateGameStadiumInput = {
  city?: InputMaybe<CityBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  photo?: InputMaybe<StoredFileInput>;
  rounds?: InputMaybe<Array<InputMaybe<RoundHasManyInput>>>;
  tags?: InputMaybe<Array<Scalars["StadiumTagsEnum"]["input"]>>;
  type?: InputMaybe<Scalars["StadiumTypeEnum"]["input"]>;
};

export type CreateGameStadiumResult = UpsertGameStadiumResult & {
  __typename?: "CreateGameStadiumResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<GameStadium>;
  success: Scalars["Boolean"]["output"];
};

export type CreateGizmoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  orientation?: InputMaybe<Scalars["String"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type CreateGizmoResult = UpsertGizmoResult & {
  __typename?: "CreateGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type CreateHasManyThroughBaseModelInput = {
  baseModelHmtField?: InputMaybe<Array<InputMaybe<SiblingModelHasManyThroughInput>>>;
  baseModelName?: InputMaybe<Scalars["String"]["input"]>;
  joinerModel?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  joinerModels?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
};

export type CreateHasManyThroughBaseModelResult = UpsertHasManyThroughBaseModelResult & {
  __typename?: "CreateHasManyThroughBaseModelResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  baseModel?: Maybe<HasManyThroughBaseModel>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CreateHasManyThroughJoinerModelInput = {
  joinerBelongsToBase?: InputMaybe<BaseModelBelongsToInput>;
  joinerBelongsToSibling?: InputMaybe<SiblingModelBelongsToInput>;
};

export type CreateHasManyThroughJoinerModelResult = UpsertHasManyThroughJoinerModelResult & {
  __typename?: "CreateHasManyThroughJoinerModelResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  joinerModel?: Maybe<HasManyThroughJoinerModel>;
  success: Scalars["Boolean"]["output"];
};

export type CreateHasManyThroughSiblingModelInput = {
  joinerModel?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  joinerModels?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  siblingModelHmtField?: InputMaybe<Array<InputMaybe<BaseModelHasManyThroughInput>>>;
};

export type CreateHasManyThroughSiblingModelResult = UpsertHasManyThroughSiblingModelResult & {
  __typename?: "CreateHasManyThroughSiblingModelResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  siblingModel?: Maybe<HasManyThroughSiblingModel>;
  success: Scalars["Boolean"]["output"];
};

export type CreateModelAResult = UpsertModelAResult & {
  __typename?: "CreateModelAResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  modelA?: Maybe<ModelA>;
  success: Scalars["Boolean"]["output"];
};

export type CreatePartInput = {
  count?: InputMaybe<Scalars["Float"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreatePartResult = UpsertPartResult & {
  __typename?: "CreatePartResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  part?: Maybe<Part>;
  success: Scalars["Boolean"]["output"];
};

export type CreateSectionInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type CreateSectionResult = UpsertSectionResult & {
  __typename?: "CreateSectionResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  section?: Maybe<Section>;
  success: Scalars["Boolean"]["output"];
};

export type CreateShopifyGdprRequestResult = UpsertShopifyGdprRequestResult & {
  __typename?: "CreateShopifyGdprRequestResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyGdprRequest?: Maybe<ShopifyGdprRequest>;
  success: Scalars["Boolean"]["output"];
};

export type CreateShopifyProductImageResult = UpsertShopifyProductImageResult & {
  __typename?: "CreateShopifyProductImageResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductImage?: Maybe<ShopifyProductImage>;
  success: Scalars["Boolean"]["output"];
};

export type CreateShopifyProductOptionResult = UpsertShopifyProductOptionResult & {
  __typename?: "CreateShopifyProductOptionResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductOption?: Maybe<ShopifyProductOption>;
  success: Scalars["Boolean"]["output"];
};

export type CreateShopifyProductResult = UpsertShopifyProductResult & {
  __typename?: "CreateShopifyProductResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProduct?: Maybe<ShopifyProduct>;
  success: Scalars["Boolean"]["output"];
};

export type CreateShopifyProductVariantResult = UpsertShopifyProductVariantResult & {
  __typename?: "CreateShopifyProductVariantResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductVariant?: Maybe<ShopifyProductVariant>;
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

export type CreateWidgetResult = UpsertWidgetResult & {
  __typename?: "CreateWidgetResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

export type CustomActionAutoTableTestResult = {
  __typename?: "CustomActionAutoTableTestResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  autoTableTest?: Maybe<AutoTableTest>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CustomActionWithParamsAutoTableTestResult = {
  __typename?: "CustomActionWithParamsAutoTableTestResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  autoTableTest?: Maybe<AutoTableTest>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CustomObjectParamsGameCityInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  stadium?: InputMaybe<StadiumHasOneInput>;
};

export type CustomObjectParamsGameCityResult = {
  __typename?: "CustomObjectParamsGameCityResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<GameCity>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CustomObjectParamsObjParamInput = {
  firstLevelStr?: InputMaybe<Scalars["String"]["input"]>;
  objProperty1?: InputMaybe<CustomObjectParamsObjProperty1Input>;
};

export type CustomObjectParamsObjProperty1Input = {
  objProperty2?: InputMaybe<CustomObjectParamsObjProperty2Input>;
  secondLevelStr?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomObjectParamsObjProperty2Input = {
  thirdLevelStr?: InputMaybe<Scalars["String"]["input"]>;
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

export type DeleteAutoTableTestRelatedModelResult = {
  __typename?: "DeleteAutoTableTestRelatedModelResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteAutoTableTestResult = {
  __typename?: "DeleteAutoTableTestResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteGameCityResult = {
  __typename?: "DeleteGameCityResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteGamePlayerResult = {
  __typename?: "DeleteGamePlayerResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteGameRoundResult = {
  __typename?: "DeleteGameRoundResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteGameStadiumResult = {
  __typename?: "DeleteGameStadiumResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteGizmoResult = {
  __typename?: "DeleteGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteHasManyThroughBaseModelResult = {
  __typename?: "DeleteHasManyThroughBaseModelResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteHasManyThroughJoinerModelResult = {
  __typename?: "DeleteHasManyThroughJoinerModelResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteHasManyThroughSiblingModelResult = {
  __typename?: "DeleteHasManyThroughSiblingModelResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteModelAResult = {
  __typename?: "DeleteModelAResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeletePartResult = {
  __typename?: "DeletePartResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteSectionResult = {
  __typename?: "DeleteSectionResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteShopifyProductImageResult = {
  __typename?: "DeleteShopifyProductImageResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteShopifyProductOptionResult = {
  __typename?: "DeleteShopifyProductOptionResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteShopifyProductResult = {
  __typename?: "DeleteShopifyProductResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteShopifyProductVariantResult = {
  __typename?: "DeleteShopifyProductVariantResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteUserResult = {
  __typename?: "DeleteUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteWidgetResult = {
  __typename?: "DeleteWidgetResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
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

export type ErrorShopifySyncInput = {
  domain?: InputMaybe<Scalars["String"]["input"]>;
  errorDetails?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  force?: InputMaybe<Scalars["Boolean"]["input"]>;
  models?: InputMaybe<Scalars["JSON"]["input"]>;
  shop?: InputMaybe<ShopifyShopBelongsToInput>;
  syncSince?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ErrorShopifySyncResult = {
  __typename?: "ErrorShopifySyncResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifySync?: Maybe<ShopifySync>;
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

export type FlipAllResult = {
  __typename?: "FlipAllResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
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
  globalAction?: Maybe<GadgetGlobalAction>;
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
  supportsGadgetVitePlugin: Scalars["Boolean"]["output"];
};

export type GadgetApplicationMetaDirectUploadTokenArgs = {
  nonce?: InputMaybe<Scalars["String"]["input"]>;
};

export type GadgetApplicationMetaGlobalActionArgs = {
  apiIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  namespace?: InputMaybe<Array<Scalars["String"]["input"]>>;
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
  validations: Array<Maybe<GadgetFieldValidationUnion>>;
};

export type GadgetDateTimeConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetDateTimeConfig";
  fieldType: GadgetFieldType;
  includeTime: Scalars["Boolean"]["output"];
  validations: Array<Maybe<GadgetFieldValidationUnion>>;
};

export type GadgetEnumConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetEnumConfig";
  allowMultiple: Scalars["Boolean"]["output"];
  allowOther: Scalars["Boolean"]["output"];
  fieldType: GadgetFieldType;
  options: Array<GadgetEnumOption>;
  validations: Array<Maybe<GadgetFieldValidationUnion>>;
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
  validations: Array<Maybe<GadgetFieldValidationUnion>>;
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

/** The common bits that all field validation types share */
export type GadgetFieldValidationInterface = {
  name: Scalars["String"]["output"];
  specID: Scalars["String"]["output"];
};

export type GadgetFieldValidationUnion =
  | GadgetGenericFieldValidation
  | GadgetOnlyImageFileFieldValidation
  | GadgetRangeFieldValidation
  | GadgetRegexFieldValidation;

export type GadgetGenericFieldConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetGenericFieldConfig";
  fieldType: GadgetFieldType;
  validations: Array<Maybe<GadgetFieldValidationUnion>>;
};

export type GadgetGenericFieldValidation = GadgetFieldValidationInterface & {
  __typename?: "GadgetGenericFieldValidation";
  name: Scalars["String"]["output"];
  specID: Scalars["String"]["output"];
};

export type GadgetGlobalAction = {
  __typename?: "GadgetGlobalAction";
  acceptsInput: Scalars["Boolean"]["output"];
  apiIdentifier: Scalars["String"]["output"];
  examples?: Maybe<GadgetGlobalActionGraphQlType>;
  inputFields: Array<GadgetObjectField>;
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
  inverseField?: Maybe<GadgetModelField>;
  isConfigured: Scalars["Boolean"]["output"];
  isInverseConfigured: Scalars["Boolean"]["output"];
  isJoinModelHasManyField: Scalars["Boolean"]["output"];
  relatedModel?: Maybe<GadgetModel>;
  relatedModelKey?: Maybe<Scalars["String"]["output"]>;
  validations: Array<Maybe<GadgetFieldValidationUnion>>;
};

export type GadgetHasManyThroughConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetHasManyThroughConfig";
  fieldType: GadgetFieldType;
  inverseField?: Maybe<GadgetModelField>;
  inverseJoinModelField?: Maybe<GadgetModelField>;
  inverseRelatedModelField?: Maybe<GadgetModelField>;
  isConfigured: Scalars["Boolean"]["output"];
  isInverseConfigured: Scalars["Boolean"]["output"];
  joinModel?: Maybe<GadgetModel>;
  joinModelKey?: Maybe<Scalars["String"]["output"]>;
  relatedModel?: Maybe<GadgetModel>;
  relatedModelKey?: Maybe<Scalars["String"]["output"]>;
  validations: Array<Maybe<GadgetFieldValidationUnion>>;
};

export type GadgetHasOneConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetHasOneConfig";
  fieldType: GadgetFieldType;
  inverseField?: Maybe<GadgetModelField>;
  isConfigured: Scalars["Boolean"]["output"];
  isInverseConfigured: Scalars["Boolean"]["output"];
  relatedModel?: Maybe<GadgetModel>;
  relatedModelKey?: Maybe<Scalars["String"]["output"]>;
  validations: Array<Maybe<GadgetFieldValidationUnion>>;
};

export type GadgetModel = {
  __typename?: "GadgetModel";
  action?: Maybe<GadgetAction>;
  actions: Array<GadgetAction>;
  apiIdentifier: Scalars["String"]["output"];
  currentSingletonApiIdentifier?: Maybe<Scalars["String"]["output"]>;
  defaultDisplayField: GadgetModelField;
  defaultRecord: Scalars["JSON"]["output"];
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
  exampleInternalUpsertMutation: Scalars["String"]["output"];
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

export type GadgetNumberConfig = GadgetFieldConfigInterface & {
  __typename?: "GadgetNumberConfig";
  decimals?: Maybe<Scalars["Int"]["output"]>;
  fieldType: GadgetFieldType;
  validations: Array<Maybe<GadgetFieldValidationUnion>>;
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
  validations: Array<Maybe<GadgetFieldValidationUnion>>;
};

export type GadgetOnlyImageFileFieldValidation = GadgetFieldValidationInterface & {
  __typename?: "GadgetOnlyImageFileFieldValidation";
  allowAnimatedImages: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  specID: Scalars["String"]["output"];
};

export type GadgetRangeFieldValidation = GadgetFieldValidationInterface & {
  __typename?: "GadgetRangeFieldValidation";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  specID: Scalars["String"]["output"];
};

export type GadgetRegexFieldValidation = GadgetFieldValidationInterface & {
  __typename?: "GadgetRegexFieldValidation";
  name: Scalars["String"]["output"];
  pattern?: Maybe<Scalars["String"]["output"]>;
  specID: Scalars["String"]["output"];
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

export type GameCity = {
  __typename?: "GameCity";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  stadium?: Maybe<GameStadium>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of GameCity items. */
export type GameCityConnection = {
  __typename?: "GameCityConnection";
  /** A list of edges. */
  edges: Array<GameCityEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a GameCity connection. */
export type GameCityEdge = {
  __typename?: "GameCityEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: GameCity;
};

export type GameCityFilter = {
  AND?: InputMaybe<Array<InputMaybe<GameCityFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<GameCityFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GameCityFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GameCitySort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type GameMutations = {
  __typename?: "GameMutations";
  bulkCreateCities?: Maybe<BulkCreateGameCitiesResult>;
  bulkCreatePlayers?: Maybe<BulkCreateGamePlayersResult>;
  bulkCreateRounds?: Maybe<BulkCreateGameRoundsResult>;
  bulkCreateStadia?: Maybe<BulkCreateGameStadiaResult>;
  bulkCustomObjectParamsCities?: Maybe<BulkCustomObjectParamsGameCitiesResult>;
  bulkDeleteCities?: Maybe<BulkDeleteGameCitiesResult>;
  bulkDeletePlayers?: Maybe<BulkDeleteGamePlayersResult>;
  bulkDeleteRounds?: Maybe<BulkDeleteGameRoundsResult>;
  bulkDeleteStadia?: Maybe<BulkDeleteGameStadiaResult>;
  bulkUpdateCities?: Maybe<BulkUpdateGameCitiesResult>;
  bulkUpdatePlayers?: Maybe<BulkUpdateGamePlayersResult>;
  bulkUpdateRounds?: Maybe<BulkUpdateGameRoundsResult>;
  bulkUpdateStadia?: Maybe<BulkUpdateGameStadiaResult>;
  bulkUpsertCities: BulkUpsertGameCitiesResult;
  bulkUpsertPlayers: BulkUpsertGamePlayersResult;
  bulkUpsertRounds: BulkUpsertGameRoundsResult;
  bulkUpsertStadia: BulkUpsertGameStadiaResult;
  createCity?: Maybe<CreateGameCityResult>;
  createPlayer?: Maybe<CreateGamePlayerResult>;
  createRound?: Maybe<CreateGameRoundResult>;
  createStadium?: Maybe<CreateGameStadiumResult>;
  customObjectParamsCity?: Maybe<CustomObjectParamsGameCityResult>;
  deleteCity?: Maybe<DeleteGameCityResult>;
  deletePlayer?: Maybe<DeleteGamePlayerResult>;
  deleteRound?: Maybe<DeleteGameRoundResult>;
  deleteStadium?: Maybe<DeleteGameStadiumResult>;
  updateCity?: Maybe<UpdateGameCityResult>;
  updatePlayer?: Maybe<UpdateGamePlayerResult>;
  updateRound?: Maybe<UpdateGameRoundResult>;
  updateStadium?: Maybe<UpdateGameStadiumResult>;
  upsertCity?: Maybe<UpsertGameCityResult>;
  upsertPlayer?: Maybe<UpsertGamePlayerResult>;
  upsertRound?: Maybe<UpsertGameRoundResult>;
  upsertStadium?: Maybe<UpsertGameStadiumResult>;
};

export type GameMutationsBulkCreateCitiesArgs = {
  inputs: Array<BulkCreateGameCitiesInput>;
};

export type GameMutationsBulkCreatePlayersArgs = {
  inputs: Array<BulkCreateGamePlayersInput>;
};

export type GameMutationsBulkCreateRoundsArgs = {
  inputs: Array<BulkCreateGameRoundsInput>;
};

export type GameMutationsBulkCreateStadiaArgs = {
  inputs: Array<BulkCreateGameStadiaInput>;
};

export type GameMutationsBulkCustomObjectParamsCitiesArgs = {
  inputs: Array<BulkCustomObjectParamsGameCitiesInput>;
};

export type GameMutationsBulkDeleteCitiesArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type GameMutationsBulkDeletePlayersArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type GameMutationsBulkDeleteRoundsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type GameMutationsBulkDeleteStadiaArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type GameMutationsBulkUpdateCitiesArgs = {
  inputs: Array<BulkUpdateGameCitiesInput>;
};

export type GameMutationsBulkUpdatePlayersArgs = {
  inputs: Array<BulkUpdateGamePlayersInput>;
};

export type GameMutationsBulkUpdateRoundsArgs = {
  inputs: Array<BulkUpdateGameRoundsInput>;
};

export type GameMutationsBulkUpdateStadiaArgs = {
  inputs: Array<BulkUpdateGameStadiaInput>;
};

export type GameMutationsBulkUpsertCitiesArgs = {
  inputs: Array<BulkUpsertGameCitiesInput>;
};

export type GameMutationsBulkUpsertPlayersArgs = {
  inputs: Array<BulkUpsertGamePlayersInput>;
};

export type GameMutationsBulkUpsertRoundsArgs = {
  inputs: Array<BulkUpsertGameRoundsInput>;
};

export type GameMutationsBulkUpsertStadiaArgs = {
  inputs: Array<BulkUpsertGameStadiaInput>;
};

export type GameMutationsCreateCityArgs = {
  city?: InputMaybe<CreateGameCityInput>;
};

export type GameMutationsCreatePlayerArgs = {
  player?: InputMaybe<CreateGamePlayerInput>;
};

export type GameMutationsCreateRoundArgs = {
  round?: InputMaybe<CreateGameRoundInput>;
};

export type GameMutationsCreateStadiumArgs = {
  stadium?: InputMaybe<CreateGameStadiumInput>;
};

export type GameMutationsCustomObjectParamsCityArgs = {
  city?: InputMaybe<CustomObjectParamsGameCityInput>;
  id: Scalars["GadgetID"]["input"];
  objParam?: InputMaybe<CustomObjectParamsObjParamInput>;
  rootLevelStr?: InputMaybe<Scalars["String"]["input"]>;
};

export type GameMutationsDeleteCityArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameMutationsDeletePlayerArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameMutationsDeleteRoundArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameMutationsDeleteStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameMutationsUpdateCityArgs = {
  city?: InputMaybe<UpdateGameCityInput>;
  id: Scalars["GadgetID"]["input"];
};

export type GameMutationsUpdatePlayerArgs = {
  id: Scalars["GadgetID"]["input"];
  player?: InputMaybe<UpdateGamePlayerInput>;
};

export type GameMutationsUpdateRoundArgs = {
  id: Scalars["GadgetID"]["input"];
  round?: InputMaybe<UpdateGameRoundInput>;
};

export type GameMutationsUpdateStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
  stadium?: InputMaybe<UpdateGameStadiumInput>;
};

export type GameMutationsUpsertCityArgs = {
  city?: InputMaybe<UpsertGameCityInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type GameMutationsUpsertPlayerArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  player?: InputMaybe<UpsertGamePlayerInput>;
};

export type GameMutationsUpsertRoundArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  round?: InputMaybe<UpsertGameRoundInput>;
};

export type GameMutationsUpsertStadiumArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stadium?: InputMaybe<UpsertGameStadiumInput>;
};

export type GamePlayer = {
  __typename?: "GamePlayer";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  currentRound?: Maybe<GameRound>;
  currentRoundId?: Maybe<Scalars["GadgetID"]["output"]>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of GamePlayer items. */
export type GamePlayerConnection = {
  __typename?: "GamePlayerConnection";
  /** A list of edges. */
  edges: Array<GamePlayerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a GamePlayer connection. */
export type GamePlayerEdge = {
  __typename?: "GamePlayerEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: GamePlayer;
};

export type GamePlayerFilter = {
  AND?: InputMaybe<Array<InputMaybe<GamePlayerFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<GamePlayerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GamePlayerFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentRound?: InputMaybe<IdFilter>;
  currentRoundId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GamePlayerSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type GameQueries = {
  __typename?: "GameQueries";
  cities: GameCityConnection;
  city?: Maybe<GameCity>;
  player?: Maybe<GamePlayer>;
  players: GamePlayerConnection;
  round?: Maybe<GameRound>;
  rounds: GameRoundConnection;
  stadia: GameStadiumConnection;
  stadium?: Maybe<GameStadium>;
};

export type GameQueriesCitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GameCityFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<GameCitySort>>;
};

export type GameQueriesCityArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameQueriesPlayerArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameQueriesPlayersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GamePlayerFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<GamePlayerSort>>;
};

export type GameQueriesRoundArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameQueriesRoundsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GameRoundFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<GameRoundSort>>;
};

export type GameQueriesStadiaArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GameStadiumFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<GameStadiumSort>>;
};

export type GameQueriesStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameRound = {
  __typename?: "GameRound";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  players: GamePlayerConnection;
  stadium: GameStadium;
  stadiumId: Scalars["GadgetID"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type GameRoundPlayersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GamePlayerFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<GamePlayerSort>>;
};

/** A connection to a list of GameRound items. */
export type GameRoundConnection = {
  __typename?: "GameRoundConnection";
  /** A list of edges. */
  edges: Array<GameRoundEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a GameRound connection. */
export type GameRoundEdge = {
  __typename?: "GameRoundEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: GameRound;
};

export type GameRoundFilter = {
  AND?: InputMaybe<Array<InputMaybe<GameRoundFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<GameRoundFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GameRoundFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  stadium?: InputMaybe<IdFilter>;
  stadiumId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GameRoundSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type GameStadium = {
  __typename?: "GameStadium";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  city?: Maybe<GameCity>;
  cityId?: Maybe<Scalars["GadgetID"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  photo?: Maybe<StoredFile>;
  rounds: GameRoundConnection;
  tags?: Maybe<Array<Scalars["StadiumTagsEnum"]["output"]>>;
  type?: Maybe<Scalars["StadiumTypeEnum"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type GameStadiumRoundsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GameRoundFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<GameRoundSort>>;
};

/** A connection to a list of GameStadium items. */
export type GameStadiumConnection = {
  __typename?: "GameStadiumConnection";
  /** A list of edges. */
  edges: Array<GameStadiumEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a GameStadium connection. */
export type GameStadiumEdge = {
  __typename?: "GameStadiumEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: GameStadium;
};

export type GameStadiumFilter = {
  AND?: InputMaybe<Array<InputMaybe<GameStadiumFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<GameStadiumFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GameStadiumFilter>>>;
  city?: InputMaybe<IdFilter>;
  cityId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  tags?: InputMaybe<MultiEnumFilter>;
  type?: InputMaybe<SingleEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GameStadiumSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: InputMaybe<SortOrder>;
  /** Sort the results by the type field. Defaults to ascending (smallest value first). */
  type?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
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

export type HasManyThroughBaseModel = {
  __typename?: "HasManyThroughBaseModel";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  baseModelHmtField: HasManyThroughSiblingModelConnection;
  baseModelName?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  joinerModels: HasManyThroughJoinerModelConnection;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type HasManyThroughBaseModelBaseModelHmtFieldArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type HasManyThroughBaseModelJoinerModelsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A connection to a list of HasManyThroughBaseModel items. */
export type HasManyThroughBaseModelConnection = {
  __typename?: "HasManyThroughBaseModelConnection";
  /** A list of edges. */
  edges: Array<HasManyThroughBaseModelEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a HasManyThroughBaseModel connection. */
export type HasManyThroughBaseModelEdge = {
  __typename?: "HasManyThroughBaseModelEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: HasManyThroughBaseModel;
};

export type HasManyThroughBaseModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HasManyThroughBaseModelFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<HasManyThroughBaseModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HasManyThroughBaseModelFilter>>>;
  baseModelName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HasManyThroughBaseModelSort = {
  /** Sort the results by the baseModelName field. Defaults to ascending (smallest value first). */
  baseModelName?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type HasManyThroughJoinerModel = {
  __typename?: "HasManyThroughJoinerModel";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  joinerBelongsToBase?: Maybe<HasManyThroughBaseModel>;
  joinerBelongsToBaseId?: Maybe<Scalars["GadgetID"]["output"]>;
  joinerBelongsToSibling?: Maybe<HasManyThroughSiblingModel>;
  joinerBelongsToSiblingId?: Maybe<Scalars["GadgetID"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of HasManyThroughJoinerModel items. */
export type HasManyThroughJoinerModelConnection = {
  __typename?: "HasManyThroughJoinerModelConnection";
  /** A list of edges. */
  edges: Array<HasManyThroughJoinerModelEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a HasManyThroughJoinerModel connection. */
export type HasManyThroughJoinerModelEdge = {
  __typename?: "HasManyThroughJoinerModelEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: HasManyThroughJoinerModel;
};

export type HasManyThroughJoinerModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HasManyThroughJoinerModelFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<HasManyThroughJoinerModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HasManyThroughJoinerModelFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  joinerBelongsToBase?: InputMaybe<IdFilter>;
  joinerBelongsToBaseId?: InputMaybe<IdFilter>;
  joinerBelongsToSibling?: InputMaybe<IdFilter>;
  joinerBelongsToSiblingId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HasManyThroughJoinerModelSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type HasManyThroughMutations = {
  __typename?: "HasManyThroughMutations";
  bulkCreateBaseModels?: Maybe<BulkCreateHasManyThroughBaseModelsResult>;
  bulkCreateJoinerModels?: Maybe<BulkCreateHasManyThroughJoinerModelsResult>;
  bulkCreateSiblingModels?: Maybe<BulkCreateHasManyThroughSiblingModelsResult>;
  bulkDeleteBaseModels?: Maybe<BulkDeleteHasManyThroughBaseModelsResult>;
  bulkDeleteJoinerModels?: Maybe<BulkDeleteHasManyThroughJoinerModelsResult>;
  bulkDeleteSiblingModels?: Maybe<BulkDeleteHasManyThroughSiblingModelsResult>;
  bulkUpdateBaseModels?: Maybe<BulkUpdateHasManyThroughBaseModelsResult>;
  bulkUpdateJoinerModels?: Maybe<BulkUpdateHasManyThroughJoinerModelsResult>;
  bulkUpdateSiblingModels?: Maybe<BulkUpdateHasManyThroughSiblingModelsResult>;
  bulkUpsertBaseModels: BulkUpsertHasManyThroughBaseModelsResult;
  bulkUpsertJoinerModels: BulkUpsertHasManyThroughJoinerModelsResult;
  bulkUpsertSiblingModels: BulkUpsertHasManyThroughSiblingModelsResult;
  createBaseModel?: Maybe<CreateHasManyThroughBaseModelResult>;
  createJoinerModel?: Maybe<CreateHasManyThroughJoinerModelResult>;
  createSiblingModel?: Maybe<CreateHasManyThroughSiblingModelResult>;
  deleteBaseModel?: Maybe<DeleteHasManyThroughBaseModelResult>;
  deleteJoinerModel?: Maybe<DeleteHasManyThroughJoinerModelResult>;
  deleteSiblingModel?: Maybe<DeleteHasManyThroughSiblingModelResult>;
  updateBaseModel?: Maybe<UpdateHasManyThroughBaseModelResult>;
  updateJoinerModel?: Maybe<UpdateHasManyThroughJoinerModelResult>;
  updateSiblingModel?: Maybe<UpdateHasManyThroughSiblingModelResult>;
  upsertBaseModel?: Maybe<UpsertHasManyThroughBaseModelResult>;
  upsertJoinerModel?: Maybe<UpsertHasManyThroughJoinerModelResult>;
  upsertSiblingModel?: Maybe<UpsertHasManyThroughSiblingModelResult>;
};

export type HasManyThroughMutationsBulkCreateBaseModelsArgs = {
  inputs: Array<BulkCreateHasManyThroughBaseModelsInput>;
};

export type HasManyThroughMutationsBulkCreateJoinerModelsArgs = {
  inputs: Array<BulkCreateHasManyThroughJoinerModelsInput>;
};

export type HasManyThroughMutationsBulkCreateSiblingModelsArgs = {
  inputs: Array<BulkCreateHasManyThroughSiblingModelsInput>;
};

export type HasManyThroughMutationsBulkDeleteBaseModelsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type HasManyThroughMutationsBulkDeleteJoinerModelsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type HasManyThroughMutationsBulkDeleteSiblingModelsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type HasManyThroughMutationsBulkUpdateBaseModelsArgs = {
  inputs: Array<BulkUpdateHasManyThroughBaseModelsInput>;
};

export type HasManyThroughMutationsBulkUpdateJoinerModelsArgs = {
  inputs: Array<BulkUpdateHasManyThroughJoinerModelsInput>;
};

export type HasManyThroughMutationsBulkUpdateSiblingModelsArgs = {
  inputs: Array<BulkUpdateHasManyThroughSiblingModelsInput>;
};

export type HasManyThroughMutationsBulkUpsertBaseModelsArgs = {
  inputs: Array<BulkUpsertHasManyThroughBaseModelsInput>;
};

export type HasManyThroughMutationsBulkUpsertJoinerModelsArgs = {
  inputs: Array<BulkUpsertHasManyThroughJoinerModelsInput>;
};

export type HasManyThroughMutationsBulkUpsertSiblingModelsArgs = {
  inputs: Array<BulkUpsertHasManyThroughSiblingModelsInput>;
};

export type HasManyThroughMutationsCreateBaseModelArgs = {
  baseModel?: InputMaybe<CreateHasManyThroughBaseModelInput>;
};

export type HasManyThroughMutationsCreateJoinerModelArgs = {
  joinerModel?: InputMaybe<CreateHasManyThroughJoinerModelInput>;
};

export type HasManyThroughMutationsCreateSiblingModelArgs = {
  siblingModel?: InputMaybe<CreateHasManyThroughSiblingModelInput>;
};

export type HasManyThroughMutationsDeleteBaseModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type HasManyThroughMutationsDeleteJoinerModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type HasManyThroughMutationsDeleteSiblingModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type HasManyThroughMutationsUpdateBaseModelArgs = {
  baseModel?: InputMaybe<UpdateHasManyThroughBaseModelInput>;
  id: Scalars["GadgetID"]["input"];
};

export type HasManyThroughMutationsUpdateJoinerModelArgs = {
  id: Scalars["GadgetID"]["input"];
  joinerModel?: InputMaybe<UpdateHasManyThroughJoinerModelInput>;
};

export type HasManyThroughMutationsUpdateSiblingModelArgs = {
  id: Scalars["GadgetID"]["input"];
  siblingModel?: InputMaybe<UpdateHasManyThroughSiblingModelInput>;
};

export type HasManyThroughMutationsUpsertBaseModelArgs = {
  baseModel?: InputMaybe<UpsertHasManyThroughBaseModelInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type HasManyThroughMutationsUpsertJoinerModelArgs = {
  joinerModel?: InputMaybe<UpsertHasManyThroughJoinerModelInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type HasManyThroughMutationsUpsertSiblingModelArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  siblingModel?: InputMaybe<UpsertHasManyThroughSiblingModelInput>;
};

export type HasManyThroughQueries = {
  __typename?: "HasManyThroughQueries";
  baseModel?: Maybe<HasManyThroughBaseModel>;
  baseModels: HasManyThroughBaseModelConnection;
  joinerModel?: Maybe<HasManyThroughJoinerModel>;
  joinerModels: HasManyThroughJoinerModelConnection;
  siblingModel?: Maybe<HasManyThroughSiblingModel>;
  siblingModels: HasManyThroughSiblingModelConnection;
};

export type HasManyThroughQueriesBaseModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type HasManyThroughQueriesBaseModelsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<HasManyThroughBaseModelFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<HasManyThroughBaseModelSort>>;
};

export type HasManyThroughQueriesJoinerModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type HasManyThroughQueriesJoinerModelsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<HasManyThroughJoinerModelFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<HasManyThroughJoinerModelSort>>;
};

export type HasManyThroughQueriesSiblingModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type HasManyThroughQueriesSiblingModelsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<HasManyThroughSiblingModelFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<HasManyThroughSiblingModelSort>>;
};

export type HasManyThroughSiblingModel = {
  __typename?: "HasManyThroughSiblingModel";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  joinerModels: HasManyThroughJoinerModelConnection;
  siblingModelHmtField: HasManyThroughBaseModelConnection;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type HasManyThroughSiblingModelJoinerModelsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type HasManyThroughSiblingModelSiblingModelHmtFieldArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A connection to a list of HasManyThroughSiblingModel items. */
export type HasManyThroughSiblingModelConnection = {
  __typename?: "HasManyThroughSiblingModelConnection";
  /** A list of edges. */
  edges: Array<HasManyThroughSiblingModelEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a HasManyThroughSiblingModel connection. */
export type HasManyThroughSiblingModelEdge = {
  __typename?: "HasManyThroughSiblingModelEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: HasManyThroughSiblingModel;
};

export type HasManyThroughSiblingModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HasManyThroughSiblingModelFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<HasManyThroughSiblingModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HasManyThroughSiblingModelFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HasManyThroughSiblingModelSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type IdEqualsFilter = {
  equals?: InputMaybe<Scalars["GadgetID"]["input"]>;
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

export type InstallShopifyShopResult = UpsertShopifyShopResult & {
  __typename?: "InstallShopifyShopResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyShop?: Maybe<ShopifyShop>;
  success: Scalars["Boolean"]["output"];
};

export type InternalAutoTableTestAtomicsInput = {
  /** Numeric atomic commands for operating on num. */
  num?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalAutoTableTestInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalAutoTableTestAtomicsInput>;
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  enum?: InputMaybe<Array<Scalars["AutoTableTestEnumEnum"]["input"]>>;
  es?: InputMaybe<Scalars["String"]["input"]>;
  file?: InputMaybe<InternalStoredFileInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  json?: InputMaybe<Scalars["JSON"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  pwd?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  rl?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rt?: InputMaybe<RichTextInput>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  vect?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

/** A connection to a list of InternalAutoTableTestRecord items. */
export type InternalAutoTableTestRecordConnection = {
  __typename?: "InternalAutoTableTestRecordConnection";
  /** A list of edges. */
  edges: Array<InternalAutoTableTestRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalAutoTableTestRecord connection. */
export type InternalAutoTableTestRecordEdge = {
  __typename?: "InternalAutoTableTestRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalAutoTableTestRecord"]["output"];
};

export type InternalAutoTableTestRelatedModelAtomicsInput = {
  /** Numeric atomic commands for operating on someNumber. */
  someNumber?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalAutoTableTestRelatedModelInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalAutoTableTestRelatedModelAtomicsInput>;
  belongsToParent?: InputMaybe<InternalBelongsToInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  manyBelongsToParent?: InputMaybe<InternalBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  someBool?: InputMaybe<Scalars["Boolean"]["input"]>;
  someNumber?: InputMaybe<Scalars["Float"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalAutoTableTestRelatedModelRecord items. */
export type InternalAutoTableTestRelatedModelRecordConnection = {
  __typename?: "InternalAutoTableTestRelatedModelRecordConnection";
  /** A list of edges. */
  edges: Array<InternalAutoTableTestRelatedModelRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalAutoTableTestRelatedModelRecord connection. */
export type InternalAutoTableTestRelatedModelRecordEdge = {
  __typename?: "InternalAutoTableTestRelatedModelRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalAutoTableTestRelatedModelRecord"]["output"];
};

/** Input object to set the link between this field and the model it belongs to */
export type InternalBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

export type InternalBulkCreateAutoTableTestRelatedModelsResult = {
  __typename?: "InternalBulkCreateAutoTableTestRelatedModelsResult";
  _autoTableTestRelatedModels?: Maybe<Array<Maybe<Scalars["InternalAutoTableTestRelatedModelRecord"]["output"]>>>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateAutoTableTestsResult = {
  __typename?: "InternalBulkCreateAutoTableTestsResult";
  autoTableTests?: Maybe<Array<Maybe<Scalars["InternalAutoTableTestRecord"]["output"]>>>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateGameCitiesResult = {
  __typename?: "InternalBulkCreateGameCitiesResult";
  cities?: Maybe<Array<Maybe<Scalars["InternalGameCityRecord"]["output"]>>>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateGamePlayersResult = {
  __typename?: "InternalBulkCreateGamePlayersResult";
  errors?: Maybe<Array<ExecutionError>>;
  players?: Maybe<Array<Maybe<Scalars["InternalGamePlayerRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateGameRoundsResult = {
  __typename?: "InternalBulkCreateGameRoundsResult";
  errors?: Maybe<Array<ExecutionError>>;
  rounds?: Maybe<Array<Maybe<Scalars["InternalGameRoundRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateGameStadiaResult = {
  __typename?: "InternalBulkCreateGameStadiaResult";
  errors?: Maybe<Array<ExecutionError>>;
  stadia?: Maybe<Array<Maybe<Scalars["InternalGameStadiumRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateGizmosResult = {
  __typename?: "InternalBulkCreateGizmosResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmos?: Maybe<Array<Maybe<Scalars["InternalGizmoRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateHasManyThroughBaseModelsResult = {
  __typename?: "InternalBulkCreateHasManyThroughBaseModelsResult";
  baseModels?: Maybe<Array<Maybe<Scalars["InternalHasManyThroughBaseModelRecord"]["output"]>>>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateHasManyThroughJoinerModelsResult = {
  __typename?: "InternalBulkCreateHasManyThroughJoinerModelsResult";
  errors?: Maybe<Array<ExecutionError>>;
  joinerModels?: Maybe<Array<Maybe<Scalars["InternalHasManyThroughJoinerModelRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateHasManyThroughSiblingModelsResult = {
  __typename?: "InternalBulkCreateHasManyThroughSiblingModelsResult";
  errors?: Maybe<Array<ExecutionError>>;
  siblingModels?: Maybe<Array<Maybe<Scalars["InternalHasManyThroughSiblingModelRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateModelAsResult = {
  __typename?: "InternalBulkCreateModelAsResult";
  errors?: Maybe<Array<ExecutionError>>;
  modelAs?: Maybe<Array<Maybe<Scalars["InternalModelARecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreatePartsResult = {
  __typename?: "InternalBulkCreatePartsResult";
  errors?: Maybe<Array<ExecutionError>>;
  parts?: Maybe<Array<Maybe<Scalars["InternalPartRecord"]["output"]>>>;
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

export type InternalBulkCreateShopifyGdprRequestsResult = {
  __typename?: "InternalBulkCreateShopifyGdprRequestsResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyGdprRequests?: Maybe<Array<Maybe<Scalars["InternalShopifyGdprRequestRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateShopifyProductImagesResult = {
  __typename?: "InternalBulkCreateShopifyProductImagesResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductImages?: Maybe<Array<Maybe<Scalars["InternalShopifyProductImageRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateShopifyProductOptionsResult = {
  __typename?: "InternalBulkCreateShopifyProductOptionsResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductOptions?: Maybe<Array<Maybe<Scalars["InternalShopifyProductOptionRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateShopifyProductVariantsResult = {
  __typename?: "InternalBulkCreateShopifyProductVariantsResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductVariants?: Maybe<Array<Maybe<Scalars["InternalShopifyProductVariantRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateShopifyProductsResult = {
  __typename?: "InternalBulkCreateShopifyProductsResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProducts?: Maybe<Array<Maybe<Scalars["InternalShopifyProductRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateShopifyShopsResult = {
  __typename?: "InternalBulkCreateShopifyShopsResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyShops?: Maybe<Array<Maybe<Scalars["InternalShopifyShopRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateShopifySyncsResult = {
  __typename?: "InternalBulkCreateShopifySyncsResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifySyncs?: Maybe<Array<Maybe<Scalars["InternalShopifySyncRecord"]["output"]>>>;
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

export type InternalCreateAutoTableTestRelatedModelResult = {
  __typename?: "InternalCreateAutoTableTestRelatedModelResult";
  _autoTableTestRelatedModel?: Maybe<Scalars["InternalAutoTableTestRelatedModelRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateAutoTableTestResult = {
  __typename?: "InternalCreateAutoTableTestResult";
  autoTableTest?: Maybe<Scalars["InternalAutoTableTestRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateGameCityResult = {
  __typename?: "InternalCreateGameCityResult";
  city?: Maybe<Scalars["InternalGameCityRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateGamePlayerResult = {
  __typename?: "InternalCreateGamePlayerResult";
  errors?: Maybe<Array<ExecutionError>>;
  player?: Maybe<Scalars["InternalGamePlayerRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateGameRoundResult = {
  __typename?: "InternalCreateGameRoundResult";
  errors?: Maybe<Array<ExecutionError>>;
  round?: Maybe<Scalars["InternalGameRoundRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateGameStadiumResult = {
  __typename?: "InternalCreateGameStadiumResult";
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<Scalars["InternalGameStadiumRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateGizmoResult = {
  __typename?: "InternalCreateGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateHasManyThroughBaseModelResult = {
  __typename?: "InternalCreateHasManyThroughBaseModelResult";
  baseModel?: Maybe<Scalars["InternalHasManyThroughBaseModelRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateHasManyThroughJoinerModelResult = {
  __typename?: "InternalCreateHasManyThroughJoinerModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  joinerModel?: Maybe<Scalars["InternalHasManyThroughJoinerModelRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateHasManyThroughSiblingModelResult = {
  __typename?: "InternalCreateHasManyThroughSiblingModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  siblingModel?: Maybe<Scalars["InternalHasManyThroughSiblingModelRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateModelAResult = {
  __typename?: "InternalCreateModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  modelA?: Maybe<Scalars["InternalModelARecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreatePartResult = {
  __typename?: "InternalCreatePartResult";
  errors?: Maybe<Array<ExecutionError>>;
  part?: Maybe<Scalars["InternalPartRecord"]["output"]>;
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

export type InternalCreateShopifyGdprRequestResult = {
  __typename?: "InternalCreateShopifyGdprRequestResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyGdprRequest?: Maybe<Scalars["InternalShopifyGdprRequestRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateShopifyProductImageResult = {
  __typename?: "InternalCreateShopifyProductImageResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductImage?: Maybe<Scalars["InternalShopifyProductImageRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateShopifyProductOptionResult = {
  __typename?: "InternalCreateShopifyProductOptionResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductOption?: Maybe<Scalars["InternalShopifyProductOptionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateShopifyProductResult = {
  __typename?: "InternalCreateShopifyProductResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProduct?: Maybe<Scalars["InternalShopifyProductRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateShopifyProductVariantResult = {
  __typename?: "InternalCreateShopifyProductVariantResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductVariant?: Maybe<Scalars["InternalShopifyProductVariantRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateShopifyShopResult = {
  __typename?: "InternalCreateShopifyShopResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyShop?: Maybe<Scalars["InternalShopifyShopRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateShopifySyncResult = {
  __typename?: "InternalCreateShopifySyncResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifySync?: Maybe<Scalars["InternalShopifySyncRecord"]["output"]>;
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

export type InternalDeleteAutoTableTestRelatedModelResult = {
  __typename?: "InternalDeleteAutoTableTestRelatedModelResult";
  _autoTableTestRelatedModel?: Maybe<Scalars["InternalAutoTableTestRelatedModelRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteAutoTableTestResult = {
  __typename?: "InternalDeleteAutoTableTestResult";
  autoTableTest?: Maybe<Scalars["InternalAutoTableTestRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteGameCityResult = {
  __typename?: "InternalDeleteGameCityResult";
  city?: Maybe<Scalars["InternalGameCityRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteGamePlayerResult = {
  __typename?: "InternalDeleteGamePlayerResult";
  errors?: Maybe<Array<ExecutionError>>;
  player?: Maybe<Scalars["InternalGamePlayerRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteGameRoundResult = {
  __typename?: "InternalDeleteGameRoundResult";
  errors?: Maybe<Array<ExecutionError>>;
  round?: Maybe<Scalars["InternalGameRoundRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteGameStadiumResult = {
  __typename?: "InternalDeleteGameStadiumResult";
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<Scalars["InternalGameStadiumRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteGizmoResult = {
  __typename?: "InternalDeleteGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteHasManyThroughBaseModelResult = {
  __typename?: "InternalDeleteHasManyThroughBaseModelResult";
  baseModel?: Maybe<Scalars["InternalHasManyThroughBaseModelRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteHasManyThroughJoinerModelResult = {
  __typename?: "InternalDeleteHasManyThroughJoinerModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  joinerModel?: Maybe<Scalars["InternalHasManyThroughJoinerModelRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteHasManyThroughSiblingModelResult = {
  __typename?: "InternalDeleteHasManyThroughSiblingModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  siblingModel?: Maybe<Scalars["InternalHasManyThroughSiblingModelRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyAutoTableTestRelatedModelResult = {
  __typename?: "InternalDeleteManyAutoTableTestRelatedModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyAutoTableTestResult = {
  __typename?: "InternalDeleteManyAutoTableTestResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyGameCityResult = {
  __typename?: "InternalDeleteManyGameCityResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyGamePlayerResult = {
  __typename?: "InternalDeleteManyGamePlayerResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyGameRoundResult = {
  __typename?: "InternalDeleteManyGameRoundResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyGameStadiumResult = {
  __typename?: "InternalDeleteManyGameStadiumResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyGizmoResult = {
  __typename?: "InternalDeleteManyGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyHasManyThroughBaseModelResult = {
  __typename?: "InternalDeleteManyHasManyThroughBaseModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyHasManyThroughJoinerModelResult = {
  __typename?: "InternalDeleteManyHasManyThroughJoinerModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyHasManyThroughSiblingModelResult = {
  __typename?: "InternalDeleteManyHasManyThroughSiblingModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyModelAResult = {
  __typename?: "InternalDeleteManyModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyPartResult = {
  __typename?: "InternalDeleteManyPartResult";
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

export type InternalDeleteManyShopifyGdprRequestResult = {
  __typename?: "InternalDeleteManyShopifyGdprRequestResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyShopifyProductImageResult = {
  __typename?: "InternalDeleteManyShopifyProductImageResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyShopifyProductOptionResult = {
  __typename?: "InternalDeleteManyShopifyProductOptionResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyShopifyProductResult = {
  __typename?: "InternalDeleteManyShopifyProductResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyShopifyProductVariantResult = {
  __typename?: "InternalDeleteManyShopifyProductVariantResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyShopifyShopResult = {
  __typename?: "InternalDeleteManyShopifyShopResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyShopifySyncResult = {
  __typename?: "InternalDeleteManyShopifySyncResult";
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

export type InternalDeletePartResult = {
  __typename?: "InternalDeletePartResult";
  errors?: Maybe<Array<ExecutionError>>;
  part?: Maybe<Scalars["InternalPartRecord"]["output"]>;
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

export type InternalDeleteShopifyGdprRequestResult = {
  __typename?: "InternalDeleteShopifyGdprRequestResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyGdprRequest?: Maybe<Scalars["InternalShopifyGdprRequestRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteShopifyProductImageResult = {
  __typename?: "InternalDeleteShopifyProductImageResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductImage?: Maybe<Scalars["InternalShopifyProductImageRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteShopifyProductOptionResult = {
  __typename?: "InternalDeleteShopifyProductOptionResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductOption?: Maybe<Scalars["InternalShopifyProductOptionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteShopifyProductResult = {
  __typename?: "InternalDeleteShopifyProductResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProduct?: Maybe<Scalars["InternalShopifyProductRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteShopifyProductVariantResult = {
  __typename?: "InternalDeleteShopifyProductVariantResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductVariant?: Maybe<Scalars["InternalShopifyProductVariantRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteShopifyShopResult = {
  __typename?: "InternalDeleteShopifyShopResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyShop?: Maybe<Scalars["InternalShopifyShopRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteShopifySyncResult = {
  __typename?: "InternalDeleteShopifySyncResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifySync?: Maybe<Scalars["InternalShopifySyncRecord"]["output"]>;
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

export type InternalGameCityInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalGameCityRecord items. */
export type InternalGameCityRecordConnection = {
  __typename?: "InternalGameCityRecordConnection";
  /** A list of edges. */
  edges: Array<InternalGameCityRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalGameCityRecord connection. */
export type InternalGameCityRecordEdge = {
  __typename?: "InternalGameCityRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalGameCityRecord"]["output"];
};

export type InternalGameMutations = {
  __typename?: "InternalGameMutations";
  bulkCreateCities?: Maybe<InternalBulkCreateGameCitiesResult>;
  bulkCreatePlayers?: Maybe<InternalBulkCreateGamePlayersResult>;
  bulkCreateRounds?: Maybe<InternalBulkCreateGameRoundsResult>;
  bulkCreateStadia?: Maybe<InternalBulkCreateGameStadiaResult>;
  createCity?: Maybe<InternalCreateGameCityResult>;
  createPlayer?: Maybe<InternalCreateGamePlayerResult>;
  createRound?: Maybe<InternalCreateGameRoundResult>;
  createStadium?: Maybe<InternalCreateGameStadiumResult>;
  deleteCity?: Maybe<InternalDeleteGameCityResult>;
  deleteManyCity?: Maybe<InternalDeleteManyGameCityResult>;
  deleteManyPlayer?: Maybe<InternalDeleteManyGamePlayerResult>;
  deleteManyRound?: Maybe<InternalDeleteManyGameRoundResult>;
  deleteManyStadium?: Maybe<InternalDeleteManyGameStadiumResult>;
  deletePlayer?: Maybe<InternalDeleteGamePlayerResult>;
  deleteRound?: Maybe<InternalDeleteGameRoundResult>;
  deleteStadium?: Maybe<InternalDeleteGameStadiumResult>;
  triggerCreateCity?: Maybe<CreateGameCityResult>;
  triggerCreatePlayer?: Maybe<CreateGamePlayerResult>;
  triggerCreateRound?: Maybe<CreateGameRoundResult>;
  triggerCreateStadium?: Maybe<CreateGameStadiumResult>;
  triggerCustomObjectParamsCity?: Maybe<CustomObjectParamsGameCityResult>;
  triggerDeleteCity?: Maybe<DeleteGameCityResult>;
  triggerDeletePlayer?: Maybe<DeleteGamePlayerResult>;
  triggerDeleteRound?: Maybe<DeleteGameRoundResult>;
  triggerDeleteStadium?: Maybe<DeleteGameStadiumResult>;
  triggerUpdateCity?: Maybe<UpdateGameCityResult>;
  triggerUpdatePlayer?: Maybe<UpdateGamePlayerResult>;
  triggerUpdateRound?: Maybe<UpdateGameRoundResult>;
  triggerUpdateStadium?: Maybe<UpdateGameStadiumResult>;
  updateCity?: Maybe<InternalUpdateGameCityResult>;
  updatePlayer?: Maybe<InternalUpdateGamePlayerResult>;
  updateRound?: Maybe<InternalUpdateGameRoundResult>;
  updateStadium?: Maybe<InternalUpdateGameStadiumResult>;
  upsertCity?: Maybe<InternalUpsertGameCityResult>;
  upsertPlayer?: Maybe<InternalUpsertGamePlayerResult>;
  upsertRound?: Maybe<InternalUpsertGameRoundResult>;
  upsertStadium?: Maybe<InternalUpsertGameStadiumResult>;
};

export type InternalGameMutationsBulkCreateCitiesArgs = {
  cities: Array<InputMaybe<InternalGameCityInput>>;
};

export type InternalGameMutationsBulkCreatePlayersArgs = {
  players: Array<InputMaybe<InternalGamePlayerInput>>;
};

export type InternalGameMutationsBulkCreateRoundsArgs = {
  rounds: Array<InputMaybe<InternalGameRoundInput>>;
};

export type InternalGameMutationsBulkCreateStadiaArgs = {
  stadia: Array<InputMaybe<InternalGameStadiumInput>>;
};

export type InternalGameMutationsCreateCityArgs = {
  city?: InputMaybe<InternalGameCityInput>;
};

export type InternalGameMutationsCreatePlayerArgs = {
  player?: InputMaybe<InternalGamePlayerInput>;
};

export type InternalGameMutationsCreateRoundArgs = {
  round?: InputMaybe<InternalGameRoundInput>;
};

export type InternalGameMutationsCreateStadiumArgs = {
  stadium?: InputMaybe<InternalGameStadiumInput>;
};

export type InternalGameMutationsDeleteCityArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalGameMutationsDeleteManyCityArgs = {
  filter?: InputMaybe<Array<GameCityFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalGameMutationsDeleteManyPlayerArgs = {
  filter?: InputMaybe<Array<GamePlayerFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalGameMutationsDeleteManyRoundArgs = {
  filter?: InputMaybe<Array<GameRoundFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalGameMutationsDeleteManyStadiumArgs = {
  filter?: InputMaybe<Array<GameStadiumFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalGameMutationsDeletePlayerArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalGameMutationsDeleteRoundArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalGameMutationsDeleteStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalGameMutationsTriggerCreateCityArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerCreatePlayerArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerCreateRoundArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerCreateStadiumArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerCustomObjectParamsCityArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerDeleteCityArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerDeletePlayerArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerDeleteRoundArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerDeleteStadiumArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerUpdateCityArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerUpdatePlayerArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerUpdateRoundArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerUpdateStadiumArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsUpdateCityArgs = {
  city?: InputMaybe<InternalGameCityInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalGameMutationsUpdatePlayerArgs = {
  id: Scalars["GadgetID"]["input"];
  player?: InputMaybe<InternalGamePlayerInput>;
};

export type InternalGameMutationsUpdateRoundArgs = {
  id: Scalars["GadgetID"]["input"];
  round?: InputMaybe<InternalGameRoundInput>;
};

export type InternalGameMutationsUpdateStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
  stadium?: InputMaybe<InternalGameStadiumInput>;
};

export type InternalGameMutationsUpsertCityArgs = {
  city?: InputMaybe<InternalGameCityInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalGameMutationsUpsertPlayerArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  player?: InputMaybe<InternalGamePlayerInput>;
};

export type InternalGameMutationsUpsertRoundArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  round?: InputMaybe<InternalGameRoundInput>;
};

export type InternalGameMutationsUpsertStadiumArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stadium?: InputMaybe<InternalGameStadiumInput>;
};

export type InternalGamePlayerInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  currentRound?: InputMaybe<InternalBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalGamePlayerRecord items. */
export type InternalGamePlayerRecordConnection = {
  __typename?: "InternalGamePlayerRecordConnection";
  /** A list of edges. */
  edges: Array<InternalGamePlayerRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalGamePlayerRecord connection. */
export type InternalGamePlayerRecordEdge = {
  __typename?: "InternalGamePlayerRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalGamePlayerRecord"]["output"];
};

export type InternalGameQueries = {
  __typename?: "InternalGameQueries";
  city?: Maybe<Scalars["InternalGameCityRecord"]["output"]>;
  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: Maybe<Scalars["JSONObject"]["output"]>;
  listCity: InternalGameCityRecordConnection;
  listPlayer: InternalGamePlayerRecordConnection;
  listRound: InternalGameRoundRecordConnection;
  listStadium: InternalGameStadiumRecordConnection;
  player?: Maybe<Scalars["InternalGamePlayerRecord"]["output"]>;
  round?: Maybe<Scalars["InternalGameRoundRecord"]["output"]>;
  stadium?: Maybe<Scalars["InternalGameStadiumRecord"]["output"]>;
};

export type InternalGameQueriesCityArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalGameQueriesListCityArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GameCityFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<GameCitySort>>;
};

export type InternalGameQueriesListPlayerArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GamePlayerFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<GamePlayerSort>>;
};

export type InternalGameQueriesListRoundArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GameRoundFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<GameRoundSort>>;
};

export type InternalGameQueriesListStadiumArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GameStadiumFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<GameStadiumSort>>;
};

export type InternalGameQueriesPlayerArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalGameQueriesRoundArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalGameQueriesStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalGameRoundInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  stadium?: InputMaybe<InternalBelongsToInput>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalGameRoundRecord items. */
export type InternalGameRoundRecordConnection = {
  __typename?: "InternalGameRoundRecordConnection";
  /** A list of edges. */
  edges: Array<InternalGameRoundRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalGameRoundRecord connection. */
export type InternalGameRoundRecordEdge = {
  __typename?: "InternalGameRoundRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalGameRoundRecord"]["output"];
};

export type InternalGameStadiumInput = {
  city?: InputMaybe<InternalBelongsToInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  photo?: InputMaybe<InternalStoredFileInput>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  tags?: InputMaybe<Array<Scalars["StadiumTagsEnum"]["input"]>>;
  type?: InputMaybe<Scalars["StadiumTypeEnum"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalGameStadiumRecord items. */
export type InternalGameStadiumRecordConnection = {
  __typename?: "InternalGameStadiumRecordConnection";
  /** A list of edges. */
  edges: Array<InternalGameStadiumRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalGameStadiumRecord connection. */
export type InternalGameStadiumRecordEdge = {
  __typename?: "InternalGameStadiumRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalGameStadiumRecord"]["output"];
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

export type InternalHasManyThroughBaseModelInput = {
  baseModelName?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalHasManyThroughBaseModelRecord items. */
export type InternalHasManyThroughBaseModelRecordConnection = {
  __typename?: "InternalHasManyThroughBaseModelRecordConnection";
  /** A list of edges. */
  edges: Array<InternalHasManyThroughBaseModelRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalHasManyThroughBaseModelRecord connection. */
export type InternalHasManyThroughBaseModelRecordEdge = {
  __typename?: "InternalHasManyThroughBaseModelRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalHasManyThroughBaseModelRecord"]["output"];
};

export type InternalHasManyThroughJoinerModelInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  joinerBelongsToBase?: InputMaybe<InternalBelongsToInput>;
  joinerBelongsToSibling?: InputMaybe<InternalBelongsToInput>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalHasManyThroughJoinerModelRecord items. */
export type InternalHasManyThroughJoinerModelRecordConnection = {
  __typename?: "InternalHasManyThroughJoinerModelRecordConnection";
  /** A list of edges. */
  edges: Array<InternalHasManyThroughJoinerModelRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalHasManyThroughJoinerModelRecord connection. */
export type InternalHasManyThroughJoinerModelRecordEdge = {
  __typename?: "InternalHasManyThroughJoinerModelRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalHasManyThroughJoinerModelRecord"]["output"];
};

export type InternalHasManyThroughMutations = {
  __typename?: "InternalHasManyThroughMutations";
  bulkCreateBaseModels?: Maybe<InternalBulkCreateHasManyThroughBaseModelsResult>;
  bulkCreateJoinerModels?: Maybe<InternalBulkCreateHasManyThroughJoinerModelsResult>;
  bulkCreateSiblingModels?: Maybe<InternalBulkCreateHasManyThroughSiblingModelsResult>;
  createBaseModel?: Maybe<InternalCreateHasManyThroughBaseModelResult>;
  createJoinerModel?: Maybe<InternalCreateHasManyThroughJoinerModelResult>;
  createSiblingModel?: Maybe<InternalCreateHasManyThroughSiblingModelResult>;
  deleteBaseModel?: Maybe<InternalDeleteHasManyThroughBaseModelResult>;
  deleteJoinerModel?: Maybe<InternalDeleteHasManyThroughJoinerModelResult>;
  deleteManyBaseModel?: Maybe<InternalDeleteManyHasManyThroughBaseModelResult>;
  deleteManyJoinerModel?: Maybe<InternalDeleteManyHasManyThroughJoinerModelResult>;
  deleteManySiblingModel?: Maybe<InternalDeleteManyHasManyThroughSiblingModelResult>;
  deleteSiblingModel?: Maybe<InternalDeleteHasManyThroughSiblingModelResult>;
  triggerCreateBaseModel?: Maybe<CreateHasManyThroughBaseModelResult>;
  triggerCreateJoinerModel?: Maybe<CreateHasManyThroughJoinerModelResult>;
  triggerCreateSiblingModel?: Maybe<CreateHasManyThroughSiblingModelResult>;
  triggerDeleteBaseModel?: Maybe<DeleteHasManyThroughBaseModelResult>;
  triggerDeleteJoinerModel?: Maybe<DeleteHasManyThroughJoinerModelResult>;
  triggerDeleteSiblingModel?: Maybe<DeleteHasManyThroughSiblingModelResult>;
  triggerUpdateBaseModel?: Maybe<UpdateHasManyThroughBaseModelResult>;
  triggerUpdateJoinerModel?: Maybe<UpdateHasManyThroughJoinerModelResult>;
  triggerUpdateSiblingModel?: Maybe<UpdateHasManyThroughSiblingModelResult>;
  updateBaseModel?: Maybe<InternalUpdateHasManyThroughBaseModelResult>;
  updateJoinerModel?: Maybe<InternalUpdateHasManyThroughJoinerModelResult>;
  updateSiblingModel?: Maybe<InternalUpdateHasManyThroughSiblingModelResult>;
  upsertBaseModel?: Maybe<InternalUpsertHasManyThroughBaseModelResult>;
  upsertJoinerModel?: Maybe<InternalUpsertHasManyThroughJoinerModelResult>;
  upsertSiblingModel?: Maybe<InternalUpsertHasManyThroughSiblingModelResult>;
};

export type InternalHasManyThroughMutationsBulkCreateBaseModelsArgs = {
  baseModels: Array<InputMaybe<InternalHasManyThroughBaseModelInput>>;
};

export type InternalHasManyThroughMutationsBulkCreateJoinerModelsArgs = {
  joinerModels: Array<InputMaybe<InternalHasManyThroughJoinerModelInput>>;
};

export type InternalHasManyThroughMutationsBulkCreateSiblingModelsArgs = {
  siblingModels: Array<InputMaybe<InternalHasManyThroughSiblingModelInput>>;
};

export type InternalHasManyThroughMutationsCreateBaseModelArgs = {
  baseModel?: InputMaybe<InternalHasManyThroughBaseModelInput>;
};

export type InternalHasManyThroughMutationsCreateJoinerModelArgs = {
  joinerModel?: InputMaybe<InternalHasManyThroughJoinerModelInput>;
};

export type InternalHasManyThroughMutationsCreateSiblingModelArgs = {
  siblingModel?: InputMaybe<InternalHasManyThroughSiblingModelInput>;
};

export type InternalHasManyThroughMutationsDeleteBaseModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalHasManyThroughMutationsDeleteJoinerModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalHasManyThroughMutationsDeleteManyBaseModelArgs = {
  filter?: InputMaybe<Array<HasManyThroughBaseModelFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalHasManyThroughMutationsDeleteManyJoinerModelArgs = {
  filter?: InputMaybe<Array<HasManyThroughJoinerModelFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalHasManyThroughMutationsDeleteManySiblingModelArgs = {
  filter?: InputMaybe<Array<HasManyThroughSiblingModelFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalHasManyThroughMutationsDeleteSiblingModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalHasManyThroughMutationsTriggerCreateBaseModelArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalHasManyThroughMutationsTriggerCreateJoinerModelArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalHasManyThroughMutationsTriggerCreateSiblingModelArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalHasManyThroughMutationsTriggerDeleteBaseModelArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalHasManyThroughMutationsTriggerDeleteJoinerModelArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalHasManyThroughMutationsTriggerDeleteSiblingModelArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalHasManyThroughMutationsTriggerUpdateBaseModelArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalHasManyThroughMutationsTriggerUpdateJoinerModelArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalHasManyThroughMutationsTriggerUpdateSiblingModelArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalHasManyThroughMutationsUpdateBaseModelArgs = {
  baseModel?: InputMaybe<InternalHasManyThroughBaseModelInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalHasManyThroughMutationsUpdateJoinerModelArgs = {
  id: Scalars["GadgetID"]["input"];
  joinerModel?: InputMaybe<InternalHasManyThroughJoinerModelInput>;
};

export type InternalHasManyThroughMutationsUpdateSiblingModelArgs = {
  id: Scalars["GadgetID"]["input"];
  siblingModel?: InputMaybe<InternalHasManyThroughSiblingModelInput>;
};

export type InternalHasManyThroughMutationsUpsertBaseModelArgs = {
  baseModel?: InputMaybe<InternalHasManyThroughBaseModelInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalHasManyThroughMutationsUpsertJoinerModelArgs = {
  joinerModel?: InputMaybe<InternalHasManyThroughJoinerModelInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalHasManyThroughMutationsUpsertSiblingModelArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  siblingModel?: InputMaybe<InternalHasManyThroughSiblingModelInput>;
};

export type InternalHasManyThroughQueries = {
  __typename?: "InternalHasManyThroughQueries";
  baseModel?: Maybe<Scalars["InternalHasManyThroughBaseModelRecord"]["output"]>;
  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: Maybe<Scalars["JSONObject"]["output"]>;
  joinerModel?: Maybe<Scalars["InternalHasManyThroughJoinerModelRecord"]["output"]>;
  listBaseModel: InternalHasManyThroughBaseModelRecordConnection;
  listJoinerModel: InternalHasManyThroughJoinerModelRecordConnection;
  listSiblingModel: InternalHasManyThroughSiblingModelRecordConnection;
  siblingModel?: Maybe<Scalars["InternalHasManyThroughSiblingModelRecord"]["output"]>;
};

export type InternalHasManyThroughQueriesBaseModelArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalHasManyThroughQueriesJoinerModelArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalHasManyThroughQueriesListBaseModelArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<HasManyThroughBaseModelFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<HasManyThroughBaseModelSort>>;
};

export type InternalHasManyThroughQueriesListJoinerModelArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<HasManyThroughJoinerModelFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<HasManyThroughJoinerModelSort>>;
};

export type InternalHasManyThroughQueriesListSiblingModelArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<HasManyThroughSiblingModelFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<HasManyThroughSiblingModelSort>>;
};

export type InternalHasManyThroughQueriesSiblingModelArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalHasManyThroughSiblingModelInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalHasManyThroughSiblingModelRecord items. */
export type InternalHasManyThroughSiblingModelRecordConnection = {
  __typename?: "InternalHasManyThroughSiblingModelRecordConnection";
  /** A list of edges. */
  edges: Array<InternalHasManyThroughSiblingModelRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalHasManyThroughSiblingModelRecord connection. */
export type InternalHasManyThroughSiblingModelRecordEdge = {
  __typename?: "InternalHasManyThroughSiblingModelRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalHasManyThroughSiblingModelRecord"]["output"];
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
  bulkCreateAutoTableTestRelatedModels?: Maybe<InternalBulkCreateAutoTableTestRelatedModelsResult>;
  bulkCreateAutoTableTests?: Maybe<InternalBulkCreateAutoTableTestsResult>;
  bulkCreateGizmos?: Maybe<InternalBulkCreateGizmosResult>;
  bulkCreateModelAs?: Maybe<InternalBulkCreateModelAsResult>;
  bulkCreateParts?: Maybe<InternalBulkCreatePartsResult>;
  bulkCreateSections?: Maybe<InternalBulkCreateSectionsResult>;
  bulkCreateSessions?: Maybe<InternalBulkCreateSessionsResult>;
  bulkCreateShopifyGdprRequests?: Maybe<InternalBulkCreateShopifyGdprRequestsResult>;
  bulkCreateShopifyProductImages?: Maybe<InternalBulkCreateShopifyProductImagesResult>;
  bulkCreateShopifyProductOptions?: Maybe<InternalBulkCreateShopifyProductOptionsResult>;
  bulkCreateShopifyProductVariants?: Maybe<InternalBulkCreateShopifyProductVariantsResult>;
  bulkCreateShopifyProducts?: Maybe<InternalBulkCreateShopifyProductsResult>;
  bulkCreateShopifyShops?: Maybe<InternalBulkCreateShopifyShopsResult>;
  bulkCreateShopifySyncs?: Maybe<InternalBulkCreateShopifySyncsResult>;
  bulkCreateUsers?: Maybe<InternalBulkCreateUsersResult>;
  bulkCreateWidgets?: Maybe<InternalBulkCreateWidgetsResult>;
  commitTransaction: Scalars["String"]["output"];
  createAutoTableTest?: Maybe<InternalCreateAutoTableTestResult>;
  createAutoTableTestRelatedModel?: Maybe<InternalCreateAutoTableTestRelatedModelResult>;
  createGizmo?: Maybe<InternalCreateGizmoResult>;
  createModelA?: Maybe<InternalCreateModelAResult>;
  createPart?: Maybe<InternalCreatePartResult>;
  createSection?: Maybe<InternalCreateSectionResult>;
  createSession?: Maybe<InternalCreateSessionResult>;
  createShopifyGdprRequest?: Maybe<InternalCreateShopifyGdprRequestResult>;
  createShopifyProduct?: Maybe<InternalCreateShopifyProductResult>;
  createShopifyProductImage?: Maybe<InternalCreateShopifyProductImageResult>;
  createShopifyProductOption?: Maybe<InternalCreateShopifyProductOptionResult>;
  createShopifyProductVariant?: Maybe<InternalCreateShopifyProductVariantResult>;
  createShopifyShop?: Maybe<InternalCreateShopifyShopResult>;
  createShopifySync?: Maybe<InternalCreateShopifySyncResult>;
  createUser?: Maybe<InternalCreateUserResult>;
  createWidget?: Maybe<InternalCreateWidgetResult>;
  deleteAutoTableTest?: Maybe<InternalDeleteAutoTableTestResult>;
  deleteAutoTableTestRelatedModel?: Maybe<InternalDeleteAutoTableTestRelatedModelResult>;
  deleteGizmo?: Maybe<InternalDeleteGizmoResult>;
  deleteManyAutoTableTest?: Maybe<InternalDeleteManyAutoTableTestResult>;
  deleteManyAutoTableTestRelatedModel?: Maybe<InternalDeleteManyAutoTableTestRelatedModelResult>;
  deleteManyGizmo?: Maybe<InternalDeleteManyGizmoResult>;
  deleteManyModelA?: Maybe<InternalDeleteManyModelAResult>;
  deleteManyPart?: Maybe<InternalDeleteManyPartResult>;
  deleteManySection?: Maybe<InternalDeleteManySectionResult>;
  deleteManySession?: Maybe<InternalDeleteManySessionResult>;
  deleteManyShopifyGdprRequest?: Maybe<InternalDeleteManyShopifyGdprRequestResult>;
  deleteManyShopifyProduct?: Maybe<InternalDeleteManyShopifyProductResult>;
  deleteManyShopifyProductImage?: Maybe<InternalDeleteManyShopifyProductImageResult>;
  deleteManyShopifyProductOption?: Maybe<InternalDeleteManyShopifyProductOptionResult>;
  deleteManyShopifyProductVariant?: Maybe<InternalDeleteManyShopifyProductVariantResult>;
  deleteManyShopifyShop?: Maybe<InternalDeleteManyShopifyShopResult>;
  deleteManyShopifySync?: Maybe<InternalDeleteManyShopifySyncResult>;
  deleteManyUser?: Maybe<InternalDeleteManyUserResult>;
  deleteManyWidget?: Maybe<InternalDeleteManyWidgetResult>;
  deleteModelA?: Maybe<InternalDeleteModelAResult>;
  deletePart?: Maybe<InternalDeletePartResult>;
  deleteSection?: Maybe<InternalDeleteSectionResult>;
  deleteSession?: Maybe<InternalDeleteSessionResult>;
  deleteShopifyGdprRequest?: Maybe<InternalDeleteShopifyGdprRequestResult>;
  deleteShopifyProduct?: Maybe<InternalDeleteShopifyProductResult>;
  deleteShopifyProductImage?: Maybe<InternalDeleteShopifyProductImageResult>;
  deleteShopifyProductOption?: Maybe<InternalDeleteShopifyProductOptionResult>;
  deleteShopifyProductVariant?: Maybe<InternalDeleteShopifyProductVariantResult>;
  deleteShopifyShop?: Maybe<InternalDeleteShopifyShopResult>;
  deleteShopifySync?: Maybe<InternalDeleteShopifySyncResult>;
  deleteUser?: Maybe<InternalDeleteUserResult>;
  deleteWidget?: Maybe<InternalDeleteWidgetResult>;
  game: InternalGameMutations;
  hasManyThrough: InternalHasManyThroughMutations;
  name: InternalNameMutations;
  rollbackTransaction: Scalars["String"]["output"];
  startTransaction: Scalars["String"]["output"];
  triggerAbortShopifySync?: Maybe<AbortShopifySyncResult>;
  triggerAddInventoryWidget?: Maybe<AddInventoryWidgetResult>;
  triggerAlwaysThrowErrorWidget?: Maybe<AlwaysThrowErrorWidgetResult>;
  triggerCompleteShopifySync?: Maybe<CompleteShopifySyncResult>;
  triggerCreateAutoTableTest?: Maybe<CreateAutoTableTestResult>;
  triggerCreateAutoTableTestRelatedModel?: Maybe<CreateAutoTableTestRelatedModelResult>;
  triggerCreateGizmo?: Maybe<CreateGizmoResult>;
  triggerCreateModelA?: Maybe<CreateModelAResult>;
  triggerCreatePart?: Maybe<CreatePartResult>;
  triggerCreateSection?: Maybe<CreateSectionResult>;
  triggerCreateShopifyGdprRequest?: Maybe<CreateShopifyGdprRequestResult>;
  triggerCreateShopifyProduct?: Maybe<CreateShopifyProductResult>;
  triggerCreateShopifyProductImage?: Maybe<CreateShopifyProductImageResult>;
  triggerCreateShopifyProductOption?: Maybe<CreateShopifyProductOptionResult>;
  triggerCreateShopifyProductVariant?: Maybe<CreateShopifyProductVariantResult>;
  triggerCreateTestData?: Maybe<CreateTestDataResult>;
  triggerCreateWidget?: Maybe<CreateWidgetResult>;
  triggerCustomActionAutoTableTest?: Maybe<CustomActionAutoTableTestResult>;
  triggerCustomActionWithParamsAutoTableTest?: Maybe<CustomActionWithParamsAutoTableTestResult>;
  triggerDeleteAutoTableTest?: Maybe<DeleteAutoTableTestResult>;
  triggerDeleteAutoTableTestRelatedModel?: Maybe<DeleteAutoTableTestRelatedModelResult>;
  triggerDeleteGizmo?: Maybe<DeleteGizmoResult>;
  triggerDeleteModelA?: Maybe<DeleteModelAResult>;
  triggerDeletePart?: Maybe<DeletePartResult>;
  triggerDeleteSection?: Maybe<DeleteSectionResult>;
  triggerDeleteShopifyProduct?: Maybe<DeleteShopifyProductResult>;
  triggerDeleteShopifyProductImage?: Maybe<DeleteShopifyProductImageResult>;
  triggerDeleteShopifyProductOption?: Maybe<DeleteShopifyProductOptionResult>;
  triggerDeleteShopifyProductVariant?: Maybe<DeleteShopifyProductVariantResult>;
  triggerDeleteUser?: Maybe<DeleteUserResult>;
  triggerDeleteWidget?: Maybe<DeleteWidgetResult>;
  triggerErrorShopifySync?: Maybe<ErrorShopifySyncResult>;
  triggerFlipAll?: Maybe<FlipAllResult>;
  triggerInstallShopifyShop?: Maybe<InstallShopifyShopResult>;
  triggerNoTriggerActionAutoTableTest?: Maybe<NoTriggerActionAutoTableTestResult>;
  triggerNoTriggerGlobalAction?: Maybe<NoTriggerGlobalActionResult>;
  triggerReinstallShopifyShop?: Maybe<ReinstallShopifyShopResult>;
  triggerRunShopifySync?: Maybe<RunShopifySyncResult>;
  triggerSignInUser?: Maybe<SignInUserResult>;
  triggerSignOutUser?: Maybe<SignOutUserResult>;
  triggerSignUpUser?: Maybe<SignUpUserResult>;
  triggerUninstallShopifyShop?: Maybe<UninstallShopifyShopResult>;
  triggerUpdateAutoTableTest?: Maybe<UpdateAutoTableTestResult>;
  triggerUpdateAutoTableTestRelatedModel?: Maybe<UpdateAutoTableTestRelatedModelResult>;
  triggerUpdateGizmo?: Maybe<UpdateGizmoResult>;
  triggerUpdateModelA?: Maybe<UpdateModelAResult>;
  triggerUpdatePart?: Maybe<UpdatePartResult>;
  triggerUpdateSection?: Maybe<UpdateSectionResult>;
  triggerUpdateShopifyGdprRequest?: Maybe<UpdateShopifyGdprRequestResult>;
  triggerUpdateShopifyProduct?: Maybe<UpdateShopifyProductResult>;
  triggerUpdateShopifyProductImage?: Maybe<UpdateShopifyProductImageResult>;
  triggerUpdateShopifyProductOption?: Maybe<UpdateShopifyProductOptionResult>;
  triggerUpdateShopifyProductVariant?: Maybe<UpdateShopifyProductVariantResult>;
  triggerUpdateShopifyShop?: Maybe<UpdateShopifyShopResult>;
  triggerUpdateUser?: Maybe<UpdateUserResult>;
  triggerUpdateWidget?: Maybe<UpdateWidgetResult>;
  triggerUpdateWithCustomParamsAutoTableTest?: Maybe<UpdateWithCustomParamsAutoTableTestResult>;
  updateAutoTableTest?: Maybe<InternalUpdateAutoTableTestResult>;
  updateAutoTableTestRelatedModel?: Maybe<InternalUpdateAutoTableTestRelatedModelResult>;
  updateGizmo?: Maybe<InternalUpdateGizmoResult>;
  updateModelA?: Maybe<InternalUpdateModelAResult>;
  updatePart?: Maybe<InternalUpdatePartResult>;
  updateSection?: Maybe<InternalUpdateSectionResult>;
  updateSession?: Maybe<InternalUpdateSessionResult>;
  updateShopifyGdprRequest?: Maybe<InternalUpdateShopifyGdprRequestResult>;
  updateShopifyProduct?: Maybe<InternalUpdateShopifyProductResult>;
  updateShopifyProductImage?: Maybe<InternalUpdateShopifyProductImageResult>;
  updateShopifyProductOption?: Maybe<InternalUpdateShopifyProductOptionResult>;
  updateShopifyProductVariant?: Maybe<InternalUpdateShopifyProductVariantResult>;
  updateShopifyShop?: Maybe<InternalUpdateShopifyShopResult>;
  updateShopifySync?: Maybe<InternalUpdateShopifySyncResult>;
  updateUser?: Maybe<InternalUpdateUserResult>;
  updateWidget?: Maybe<InternalUpdateWidgetResult>;
  upsertAutoTableTest?: Maybe<InternalUpsertAutoTableTestResult>;
  upsertAutoTableTestRelatedModel?: Maybe<InternalUpsertAutoTableTestRelatedModelResult>;
  upsertGizmo?: Maybe<InternalUpsertGizmoResult>;
  upsertModelA?: Maybe<InternalUpsertModelAResult>;
  upsertPart?: Maybe<InternalUpsertPartResult>;
  upsertSection?: Maybe<InternalUpsertSectionResult>;
  upsertSession?: Maybe<InternalUpsertSessionResult>;
  upsertShopifyGdprRequest?: Maybe<InternalUpsertShopifyGdprRequestResult>;
  upsertShopifyProduct?: Maybe<InternalUpsertShopifyProductResult>;
  upsertShopifyProductImage?: Maybe<InternalUpsertShopifyProductImageResult>;
  upsertShopifyProductOption?: Maybe<InternalUpsertShopifyProductOptionResult>;
  upsertShopifyProductVariant?: Maybe<InternalUpsertShopifyProductVariantResult>;
  upsertShopifyShop?: Maybe<InternalUpsertShopifyShopResult>;
  upsertShopifySync?: Maybe<InternalUpsertShopifySyncResult>;
  upsertUser?: Maybe<InternalUpsertUserResult>;
  upsertWidget?: Maybe<InternalUpsertWidgetResult>;
};

export type InternalMutationsAcquireLockArgs = {
  lock: Scalars["String"]["input"];
};

export type InternalMutationsBulkCreateAutoTableTestRelatedModelsArgs = {
  _autoTableTestRelatedModels: Array<InputMaybe<InternalAutoTableTestRelatedModelInput>>;
};

export type InternalMutationsBulkCreateAutoTableTestsArgs = {
  autoTableTests: Array<InputMaybe<InternalAutoTableTestInput>>;
};

export type InternalMutationsBulkCreateGizmosArgs = {
  gizmos: Array<InputMaybe<InternalGizmoInput>>;
};

export type InternalMutationsBulkCreateModelAsArgs = {
  modelAs: Array<InputMaybe<InternalModelAInput>>;
};

export type InternalMutationsBulkCreatePartsArgs = {
  parts: Array<InputMaybe<InternalPartInput>>;
};

export type InternalMutationsBulkCreateSectionsArgs = {
  sections: Array<InputMaybe<InternalSectionInput>>;
};

export type InternalMutationsBulkCreateSessionsArgs = {
  sessions: Array<InputMaybe<InternalSessionInput>>;
};

export type InternalMutationsBulkCreateShopifyGdprRequestsArgs = {
  shopifyGdprRequests: Array<InputMaybe<InternalShopifyGdprRequestInput>>;
};

export type InternalMutationsBulkCreateShopifyProductImagesArgs = {
  shopifyProductImages: Array<InputMaybe<InternalShopifyProductImageInput>>;
};

export type InternalMutationsBulkCreateShopifyProductOptionsArgs = {
  shopifyProductOptions: Array<InputMaybe<InternalShopifyProductOptionInput>>;
};

export type InternalMutationsBulkCreateShopifyProductVariantsArgs = {
  shopifyProductVariants: Array<InputMaybe<InternalShopifyProductVariantInput>>;
};

export type InternalMutationsBulkCreateShopifyProductsArgs = {
  shopifyProducts: Array<InputMaybe<InternalShopifyProductInput>>;
};

export type InternalMutationsBulkCreateShopifyShopsArgs = {
  shopifyShops: Array<InputMaybe<InternalShopifyShopInput>>;
};

export type InternalMutationsBulkCreateShopifySyncsArgs = {
  shopifySyncs: Array<InputMaybe<InternalShopifySyncInput>>;
};

export type InternalMutationsBulkCreateUsersArgs = {
  users: Array<InputMaybe<InternalUserInput>>;
};

export type InternalMutationsBulkCreateWidgetsArgs = {
  widgets: Array<InputMaybe<InternalWidgetInput>>;
};

export type InternalMutationsCreateAutoTableTestArgs = {
  autoTableTest?: InputMaybe<InternalAutoTableTestInput>;
};

export type InternalMutationsCreateAutoTableTestRelatedModelArgs = {
  _autoTableTestRelatedModel?: InputMaybe<InternalAutoTableTestRelatedModelInput>;
};

export type InternalMutationsCreateGizmoArgs = {
  gizmo?: InputMaybe<InternalGizmoInput>;
};

export type InternalMutationsCreateModelAArgs = {
  modelA?: InputMaybe<InternalModelAInput>;
};

export type InternalMutationsCreatePartArgs = {
  part?: InputMaybe<InternalPartInput>;
};

export type InternalMutationsCreateSectionArgs = {
  section?: InputMaybe<InternalSectionInput>;
};

export type InternalMutationsCreateSessionArgs = {
  session?: InputMaybe<InternalSessionInput>;
};

export type InternalMutationsCreateShopifyGdprRequestArgs = {
  shopifyGdprRequest?: InputMaybe<InternalShopifyGdprRequestInput>;
};

export type InternalMutationsCreateShopifyProductArgs = {
  shopifyProduct?: InputMaybe<InternalShopifyProductInput>;
};

export type InternalMutationsCreateShopifyProductImageArgs = {
  shopifyProductImage?: InputMaybe<InternalShopifyProductImageInput>;
};

export type InternalMutationsCreateShopifyProductOptionArgs = {
  shopifyProductOption?: InputMaybe<InternalShopifyProductOptionInput>;
};

export type InternalMutationsCreateShopifyProductVariantArgs = {
  shopifyProductVariant?: InputMaybe<InternalShopifyProductVariantInput>;
};

export type InternalMutationsCreateShopifyShopArgs = {
  shopifyShop?: InputMaybe<InternalShopifyShopInput>;
};

export type InternalMutationsCreateShopifySyncArgs = {
  shopifySync?: InputMaybe<InternalShopifySyncInput>;
};

export type InternalMutationsCreateUserArgs = {
  user?: InputMaybe<InternalUserInput>;
};

export type InternalMutationsCreateWidgetArgs = {
  widget?: InputMaybe<InternalWidgetInput>;
};

export type InternalMutationsDeleteAutoTableTestArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteAutoTableTestRelatedModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteGizmoArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteManyAutoTableTestArgs = {
  filter?: InputMaybe<Array<AutoTableTestFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyAutoTableTestRelatedModelArgs = {
  filter?: InputMaybe<Array<AutoTableTestRelatedModelFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyGizmoArgs = {
  filter?: InputMaybe<Array<GizmoFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyModelAArgs = {
  filter?: InputMaybe<Array<ModelAFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyPartArgs = {
  filter?: InputMaybe<Array<PartFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManySectionArgs = {
  filter?: InputMaybe<Array<SectionFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManySessionArgs = {
  filter?: InputMaybe<Array<SessionFilter>>;
};

export type InternalMutationsDeleteManyShopifyGdprRequestArgs = {
  filter?: InputMaybe<Array<ShopifyGdprRequestFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyShopifyProductArgs = {
  filter?: InputMaybe<Array<ShopifyProductFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyShopifyProductImageArgs = {
  filter?: InputMaybe<Array<ShopifyProductImageFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyShopifyProductOptionArgs = {
  filter?: InputMaybe<Array<ShopifyProductOptionFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyShopifyProductVariantArgs = {
  filter?: InputMaybe<Array<ShopifyProductVariantFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyShopifyShopArgs = {
  filter?: InputMaybe<Array<ShopifyShopFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyShopifySyncArgs = {
  filter?: InputMaybe<Array<ShopifySyncFilter>>;
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

export type InternalMutationsDeletePartArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteSectionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteSessionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteShopifyGdprRequestArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteShopifyProductArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteShopifyProductImageArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteShopifyProductOptionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteShopifyProductVariantArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteShopifyShopArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteShopifySyncArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteUserArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsTriggerAbortShopifySyncArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerAddInventoryWidgetArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerAlwaysThrowErrorWidgetArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCompleteShopifySyncArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateAutoTableTestArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateAutoTableTestRelatedModelArgs = {
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

export type InternalMutationsTriggerCreatePartArgs = {
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

export type InternalMutationsTriggerCreateShopifyGdprRequestArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateShopifyProductArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateShopifyProductImageArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateShopifyProductOptionArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateShopifyProductVariantArgs = {
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

export type InternalMutationsTriggerCustomActionAutoTableTestArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCustomActionWithParamsAutoTableTestArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteAutoTableTestArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteAutoTableTestRelatedModelArgs = {
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

export type InternalMutationsTriggerDeletePartArgs = {
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

export type InternalMutationsTriggerDeleteShopifyProductArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteShopifyProductImageArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteShopifyProductOptionArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteShopifyProductVariantArgs = {
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

export type InternalMutationsTriggerErrorShopifySyncArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerFlipAllArgs = {
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerInstallShopifyShopArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerNoTriggerActionAutoTableTestArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerNoTriggerGlobalActionArgs = {
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerReinstallShopifyShopArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerRunShopifySyncArgs = {
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

export type InternalMutationsTriggerUninstallShopifyShopArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateAutoTableTestArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateAutoTableTestRelatedModelArgs = {
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

export type InternalMutationsTriggerUpdatePartArgs = {
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

export type InternalMutationsTriggerUpdateShopifyGdprRequestArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateShopifyProductArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateShopifyProductImageArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateShopifyProductOptionArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateShopifyProductVariantArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateShopifyShopArgs = {
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

export type InternalMutationsTriggerUpdateWithCustomParamsAutoTableTestArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsUpdateAutoTableTestArgs = {
  autoTableTest?: InputMaybe<InternalAutoTableTestInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateAutoTableTestRelatedModelArgs = {
  _autoTableTestRelatedModel?: InputMaybe<InternalAutoTableTestRelatedModelInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateGizmoArgs = {
  gizmo?: InputMaybe<InternalGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateModelAArgs = {
  id: Scalars["GadgetID"]["input"];
  modelA?: InputMaybe<InternalModelAInput>;
};

export type InternalMutationsUpdatePartArgs = {
  id: Scalars["GadgetID"]["input"];
  part?: InputMaybe<InternalPartInput>;
};

export type InternalMutationsUpdateSectionArgs = {
  id: Scalars["GadgetID"]["input"];
  section?: InputMaybe<InternalSectionInput>;
};

export type InternalMutationsUpdateSessionArgs = {
  id: Scalars["GadgetID"]["input"];
  session?: InputMaybe<InternalSessionInput>;
};

export type InternalMutationsUpdateShopifyGdprRequestArgs = {
  id: Scalars["GadgetID"]["input"];
  shopifyGdprRequest?: InputMaybe<InternalShopifyGdprRequestInput>;
};

export type InternalMutationsUpdateShopifyProductArgs = {
  id: Scalars["GadgetID"]["input"];
  shopifyProduct?: InputMaybe<InternalShopifyProductInput>;
};

export type InternalMutationsUpdateShopifyProductImageArgs = {
  id: Scalars["GadgetID"]["input"];
  shopifyProductImage?: InputMaybe<InternalShopifyProductImageInput>;
};

export type InternalMutationsUpdateShopifyProductOptionArgs = {
  id: Scalars["GadgetID"]["input"];
  shopifyProductOption?: InputMaybe<InternalShopifyProductOptionInput>;
};

export type InternalMutationsUpdateShopifyProductVariantArgs = {
  id: Scalars["GadgetID"]["input"];
  shopifyProductVariant?: InputMaybe<InternalShopifyProductVariantInput>;
};

export type InternalMutationsUpdateShopifyShopArgs = {
  id: Scalars["GadgetID"]["input"];
  shopifyShop?: InputMaybe<InternalShopifyShopInput>;
};

export type InternalMutationsUpdateShopifySyncArgs = {
  id: Scalars["GadgetID"]["input"];
  shopifySync?: InputMaybe<InternalShopifySyncInput>;
};

export type InternalMutationsUpdateUserArgs = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<InternalUserInput>;
};

export type InternalMutationsUpdateWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
  widget?: InputMaybe<InternalWidgetInput>;
};

export type InternalMutationsUpsertAutoTableTestArgs = {
  autoTableTest?: InputMaybe<InternalAutoTableTestInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertAutoTableTestRelatedModelArgs = {
  _autoTableTestRelatedModel?: InputMaybe<InternalAutoTableTestRelatedModelInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertGizmoArgs = {
  gizmo?: InputMaybe<InternalGizmoInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertModelAArgs = {
  modelA?: InputMaybe<InternalModelAInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertPartArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  part?: InputMaybe<InternalPartInput>;
};

export type InternalMutationsUpsertSectionArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  section?: InputMaybe<InternalSectionInput>;
};

export type InternalMutationsUpsertSessionArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  session?: InputMaybe<InternalSessionInput>;
};

export type InternalMutationsUpsertShopifyGdprRequestArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shopifyGdprRequest?: InputMaybe<InternalShopifyGdprRequestInput>;
};

export type InternalMutationsUpsertShopifyProductArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shopifyProduct?: InputMaybe<InternalShopifyProductInput>;
};

export type InternalMutationsUpsertShopifyProductImageArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shopifyProductImage?: InputMaybe<InternalShopifyProductImageInput>;
};

export type InternalMutationsUpsertShopifyProductOptionArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shopifyProductOption?: InputMaybe<InternalShopifyProductOptionInput>;
};

export type InternalMutationsUpsertShopifyProductVariantArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shopifyProductVariant?: InputMaybe<InternalShopifyProductVariantInput>;
};

export type InternalMutationsUpsertShopifyShopArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shopifyShop?: InputMaybe<InternalShopifyShopInput>;
};

export type InternalMutationsUpsertShopifySyncArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shopifySync?: InputMaybe<InternalShopifySyncInput>;
};

export type InternalMutationsUpsertUserArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  user?: InputMaybe<InternalUserInput>;
};

export type InternalMutationsUpsertWidgetArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widget?: InputMaybe<InternalWidgetInput>;
};

export type InternalNameMutations = {
  __typename?: "InternalNameMutations";
  spaced: InternalNameSpacedMutations;
};

export type InternalNameSpacedMutations = {
  __typename?: "InternalNameSpacedMutations";
  triggerActionA?: Maybe<NameSpacedActionAResult>;
  triggerCustomObjectParams?: Maybe<NameSpacedCustomObjectParamsResult>;
  triggerNoTriggerGlobalAction?: Maybe<NameSpacedNoTriggerGlobalActionResult>;
};

export type InternalNameSpacedMutationsTriggerActionAArgs = {
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalNameSpacedMutationsTriggerCustomObjectParamsArgs = {
  objParam?: InputMaybe<NameSpacedCustomObjectParamsObjParamInput>;
  rootLevelStr?: InputMaybe<Scalars["String"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalNameSpacedMutationsTriggerNoTriggerGlobalActionArgs = {
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalPartAtomicsInput = {
  /** Numeric atomic commands for operating on count. */
  count?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalPartInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalPartAtomicsInput>;
  count?: InputMaybe<Scalars["Float"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalPartRecord items. */
export type InternalPartRecordConnection = {
  __typename?: "InternalPartRecordConnection";
  /** A list of edges. */
  edges: Array<InternalPartRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalPartRecord connection. */
export type InternalPartRecordEdge = {
  __typename?: "InternalPartRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalPartRecord"]["output"];
};

export type InternalQueries = {
  __typename?: "InternalQueries";
  _autoTableTestRelatedModel?: Maybe<Scalars["InternalAutoTableTestRelatedModelRecord"]["output"]>;
  autoTableTest?: Maybe<Scalars["InternalAutoTableTestRecord"]["output"]>;
  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: Maybe<Scalars["JSONObject"]["output"]>;
  game: InternalGameQueries;
  gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
  hasManyThrough: InternalHasManyThroughQueries;
  listAutoTableTest: InternalAutoTableTestRecordConnection;
  listAutoTableTestRelatedModel: InternalAutoTableTestRelatedModelRecordConnection;
  listGizmo: InternalGizmoRecordConnection;
  listModelA: InternalModelARecordConnection;
  listPart: InternalPartRecordConnection;
  listSection: InternalSectionRecordConnection;
  listSession: InternalSessionRecordConnection;
  listShopifyGdprRequest: InternalShopifyGdprRequestRecordConnection;
  listShopifyProduct: InternalShopifyProductRecordConnection;
  listShopifyProductImage: InternalShopifyProductImageRecordConnection;
  listShopifyProductOption: InternalShopifyProductOptionRecordConnection;
  listShopifyProductVariant: InternalShopifyProductVariantRecordConnection;
  listShopifyShop: InternalShopifyShopRecordConnection;
  listShopifySync: InternalShopifySyncRecordConnection;
  listUser: InternalUserRecordConnection;
  listWidget: InternalWidgetRecordConnection;
  modelA?: Maybe<Scalars["InternalModelARecord"]["output"]>;
  part?: Maybe<Scalars["InternalPartRecord"]["output"]>;
  section?: Maybe<Scalars["InternalSectionRecord"]["output"]>;
  session?: Maybe<Scalars["InternalSessionRecord"]["output"]>;
  shopifyGdprRequest?: Maybe<Scalars["InternalShopifyGdprRequestRecord"]["output"]>;
  shopifyProduct?: Maybe<Scalars["InternalShopifyProductRecord"]["output"]>;
  shopifyProductImage?: Maybe<Scalars["InternalShopifyProductImageRecord"]["output"]>;
  shopifyProductOption?: Maybe<Scalars["InternalShopifyProductOptionRecord"]["output"]>;
  shopifyProductVariant?: Maybe<Scalars["InternalShopifyProductVariantRecord"]["output"]>;
  shopifyShop?: Maybe<Scalars["InternalShopifyShopRecord"]["output"]>;
  shopifySync?: Maybe<Scalars["InternalShopifySyncRecord"]["output"]>;
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
  widget?: Maybe<Scalars["InternalWidgetRecord"]["output"]>;
};

export type InternalQueries_AutoTableTestRelatedModelArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesAutoTableTestArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesGizmoArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesListAutoTableTestArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<AutoTableTestFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<AutoTableTestSort>>;
};

export type InternalQueriesListAutoTableTestRelatedModelArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<AutoTableTestRelatedModelFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<AutoTableTestRelatedModelSort>>;
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

export type InternalQueriesListPartArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<PartFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<PartSort>>;
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
  filter?: InputMaybe<Array<SessionFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesListShopifyGdprRequestArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyGdprRequestFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<ShopifyGdprRequestSort>>;
};

export type InternalQueriesListShopifyProductArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<ShopifyProductSort>>;
};

export type InternalQueriesListShopifyProductImageArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductImageFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<ShopifyProductImageSort>>;
};

export type InternalQueriesListShopifyProductOptionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductOptionFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<ShopifyProductOptionSort>>;
};

export type InternalQueriesListShopifyProductVariantArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductVariantFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<ShopifyProductVariantSort>>;
};

export type InternalQueriesListShopifyShopArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyShopFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<ShopifyShopSort>>;
};

export type InternalQueriesListShopifySyncArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifySyncFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<ShopifySyncSort>>;
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

export type InternalQueriesPartArgs = {
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

export type InternalQueriesShopifyGdprRequestArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesShopifyProductArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesShopifyProductImageArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesShopifyProductOptionArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesShopifyProductVariantArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesShopifyShopArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesShopifySyncArgs = {
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
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shop?: InputMaybe<InternalBelongsToInput>;
  shopifySID?: InputMaybe<Scalars["String"]["input"]>;
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

export type InternalShopifyGdprRequestInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  payload?: InputMaybe<Scalars["JSON"]["input"]>;
  shop?: InputMaybe<InternalBelongsToInput>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  topic?: InputMaybe<Scalars["ShopifyGdprRequestTopicEnum"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalShopifyGdprRequestRecord items. */
export type InternalShopifyGdprRequestRecordConnection = {
  __typename?: "InternalShopifyGdprRequestRecordConnection";
  /** A list of edges. */
  edges: Array<InternalShopifyGdprRequestRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalShopifyGdprRequestRecord connection. */
export type InternalShopifyGdprRequestRecordEdge = {
  __typename?: "InternalShopifyGdprRequestRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalShopifyGdprRequestRecord"]["output"];
};

export type InternalShopifyProductImageAtomicsInput = {
  /** Numeric atomic commands for operating on height. */
  height?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
  /** Numeric atomic commands for operating on position. */
  position?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
  /** Numeric atomic commands for operating on width. */
  width?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalShopifyProductImageInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalShopifyProductImageAtomicsInput>;
  alt?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  position?: InputMaybe<Scalars["Float"]["input"]>;
  product?: InputMaybe<InternalBelongsToInput>;
  shop?: InputMaybe<InternalBelongsToInput>;
  shopifyCreatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  shopifyUpdatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

/** A connection to a list of InternalShopifyProductImageRecord items. */
export type InternalShopifyProductImageRecordConnection = {
  __typename?: "InternalShopifyProductImageRecordConnection";
  /** A list of edges. */
  edges: Array<InternalShopifyProductImageRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalShopifyProductImageRecord connection. */
export type InternalShopifyProductImageRecordEdge = {
  __typename?: "InternalShopifyProductImageRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalShopifyProductImageRecord"]["output"];
};

export type InternalShopifyProductInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["JSON"]["input"]>;
  compareAtPriceRange?: InputMaybe<Scalars["JSON"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  productCategory?: InputMaybe<Scalars["JSON"]["input"]>;
  productType?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  shop?: InputMaybe<InternalBelongsToInput>;
  shopifyCreatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  shopifyUpdatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  status?: InputMaybe<Scalars["ShopifyProductStatusEnum"]["input"]>;
  tags?: InputMaybe<Scalars["JSON"]["input"]>;
  templateSuffix?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  vendor?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalShopifyProductOptionAtomicsInput = {
  /** Numeric atomic commands for operating on position. */
  position?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalShopifyProductOptionInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalShopifyProductOptionAtomicsInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["Float"]["input"]>;
  product?: InputMaybe<InternalBelongsToInput>;
  shop?: InputMaybe<InternalBelongsToInput>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  values?: InputMaybe<Scalars["JSON"]["input"]>;
};

/** A connection to a list of InternalShopifyProductOptionRecord items. */
export type InternalShopifyProductOptionRecordConnection = {
  __typename?: "InternalShopifyProductOptionRecordConnection";
  /** A list of edges. */
  edges: Array<InternalShopifyProductOptionRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalShopifyProductOptionRecord connection. */
export type InternalShopifyProductOptionRecordEdge = {
  __typename?: "InternalShopifyProductOptionRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalShopifyProductOptionRecord"]["output"];
};

/** A connection to a list of InternalShopifyProductRecord items. */
export type InternalShopifyProductRecordConnection = {
  __typename?: "InternalShopifyProductRecordConnection";
  /** A list of edges. */
  edges: Array<InternalShopifyProductRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalShopifyProductRecord connection. */
export type InternalShopifyProductRecordEdge = {
  __typename?: "InternalShopifyProductRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalShopifyProductRecord"]["output"];
};

export type InternalShopifyProductVariantAtomicsInput = {
  /** Numeric atomic commands for operating on inventoryQuantity. */
  inventoryQuantity?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
  /** Numeric atomic commands for operating on position. */
  position?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalShopifyProductVariantInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalShopifyProductVariantAtomicsInput>;
  barcode?: InputMaybe<Scalars["String"]["input"]>;
  compareAtPrice?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  inventoryPolicy?: InputMaybe<Scalars["String"]["input"]>;
  inventoryQuantity?: InputMaybe<Scalars["Float"]["input"]>;
  option1?: InputMaybe<Scalars["String"]["input"]>;
  option2?: InputMaybe<Scalars["String"]["input"]>;
  option3?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["Float"]["input"]>;
  presentmentPrices?: InputMaybe<Scalars["JSON"]["input"]>;
  price?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<InternalBelongsToInput>;
  productImage?: InputMaybe<InternalBelongsToInput>;
  selectedOptions?: InputMaybe<Scalars["JSON"]["input"]>;
  shop?: InputMaybe<InternalBelongsToInput>;
  shopifyCreatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  shopifyUpdatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  taxCode?: InputMaybe<Scalars["String"]["input"]>;
  taxable?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalShopifyProductVariantRecord items. */
export type InternalShopifyProductVariantRecordConnection = {
  __typename?: "InternalShopifyProductVariantRecordConnection";
  /** A list of edges. */
  edges: Array<InternalShopifyProductVariantRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalShopifyProductVariantRecord connection. */
export type InternalShopifyProductVariantRecordEdge = {
  __typename?: "InternalShopifyProductVariantRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalShopifyProductVariantRecord"]["output"];
};

export type InternalShopifyShopAtomicsInput = {
  /** Numeric atomic commands for operating on latitude. */
  latitude?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
  /** Numeric atomic commands for operating on longitude. */
  longitude?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalShopifyShopInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalShopifyShopAtomicsInput>;
  accessToken?: InputMaybe<Scalars["String"]["input"]>;
  address1?: InputMaybe<Scalars["String"]["input"]>;
  address2?: InputMaybe<Scalars["String"]["input"]>;
  checkoutApiSupported?: InputMaybe<Scalars["Boolean"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  cookieConsentLevel?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
  countryName?: InputMaybe<Scalars["String"]["input"]>;
  countyTaxes?: InputMaybe<Scalars["JSON"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  customerAccountsV2?: InputMaybe<Scalars["JSON"]["input"]>;
  customerEmail?: InputMaybe<Scalars["String"]["input"]>;
  disabledWebhooks?: InputMaybe<Scalars["JSON"]["input"]>;
  domain?: InputMaybe<Scalars["String"]["input"]>;
  eligibleForCardReaderGiveaway?: InputMaybe<Scalars["Boolean"]["input"]>;
  eligibleForPayments?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  enabledPresentmentCurrencies?: InputMaybe<Scalars["JSON"]["input"]>;
  finances?: InputMaybe<Scalars["Boolean"]["input"]>;
  forceSsl?: InputMaybe<Scalars["Boolean"]["input"]>;
  googleAppsDomain?: InputMaybe<Scalars["String"]["input"]>;
  googleAppsLoginEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  grantedScopes?: InputMaybe<Scalars["JSON"]["input"]>;
  hasDiscounts?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasGiftCards?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasStorefront?: InputMaybe<Scalars["Boolean"]["input"]>;
  ianaTimezone?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  installedViaApiKey?: InputMaybe<Scalars["String"]["input"]>;
  latitude?: InputMaybe<Scalars["Float"]["input"]>;
  longitude?: InputMaybe<Scalars["Float"]["input"]>;
  marketingSmsContentEnabledAtCheckout?: InputMaybe<Scalars["Boolean"]["input"]>;
  moneyFormat?: InputMaybe<Scalars["String"]["input"]>;
  moneyInEmailsFormat?: InputMaybe<Scalars["String"]["input"]>;
  moneyWithCurrencyFormat?: InputMaybe<Scalars["String"]["input"]>;
  moneyWithCurrencyInEmailsFormat?: InputMaybe<Scalars["String"]["input"]>;
  multiLocationEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  myshopifyDomain?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  passwordEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  planDisplayName?: InputMaybe<Scalars["String"]["input"]>;
  planName?: InputMaybe<Scalars["String"]["input"]>;
  preLaunchEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  primaryLocale?: InputMaybe<Scalars["String"]["input"]>;
  province?: InputMaybe<Scalars["String"]["input"]>;
  provinceCode?: InputMaybe<Scalars["String"]["input"]>;
  registeredWebhooks?: InputMaybe<Scalars["JSON"]["input"]>;
  requiresExtraPaymentsAgreement?: InputMaybe<Scalars["Boolean"]["input"]>;
  setupRequired?: InputMaybe<Scalars["Boolean"]["input"]>;
  shopOwner?: InputMaybe<Scalars["String"]["input"]>;
  shopifyCreatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  shopifyUpdatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  taxShipping?: InputMaybe<Scalars["Boolean"]["input"]>;
  taxesIncluded?: InputMaybe<Scalars["Boolean"]["input"]>;
  timezone?: InputMaybe<Scalars["String"]["input"]>;
  transactionalSmsDisabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  weightUnit?: InputMaybe<Scalars["String"]["input"]>;
  zipCode?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of InternalShopifyShopRecord items. */
export type InternalShopifyShopRecordConnection = {
  __typename?: "InternalShopifyShopRecordConnection";
  /** A list of edges. */
  edges: Array<InternalShopifyShopRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalShopifyShopRecord connection. */
export type InternalShopifyShopRecordEdge = {
  __typename?: "InternalShopifyShopRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalShopifyShopRecord"]["output"];
};

export type InternalShopifySyncInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  domain?: InputMaybe<Scalars["String"]["input"]>;
  errorDetails?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  force?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  models?: InputMaybe<Scalars["JSON"]["input"]>;
  shop?: InputMaybe<InternalBelongsToInput>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  syncSince?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalShopifySyncRecord items. */
export type InternalShopifySyncRecordConnection = {
  __typename?: "InternalShopifySyncRecordConnection";
  /** A list of edges. */
  edges: Array<InternalShopifySyncRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalShopifySyncRecord connection. */
export type InternalShopifySyncRecordEdge = {
  __typename?: "InternalShopifySyncRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalShopifySyncRecord"]["output"];
};

/** Input object supporting updating a value for a File field within the Internal API. Includes the storage token for the file which is it's unique identifier, as well as some metadata for the file. Note: the Internal API doesn't support uploading files, just storing the results of prior uploads. Actions must be used to upload files. */
export type InternalStoredFileInput = {
  /** Byte size to report in API calls */
  byteSize: Scalars["Int"]["input"];
  /** Sets this file's stored name, which will then be used when serving the file during read requests. If not set, Gadget will infer a filename if possible. */
  fileName: Scalars["String"]["input"];
  /** File mime type to use when serving the file or making resize operations available */
  mimeType: Scalars["String"]["input"];
  /** An opaque identifier used by Gadget internally to uniquely identify this stored file */
  storageToken: Scalars["String"]["input"];
  /** Has no effect. Convenience property to allow sending an internal metadata blob back to the Internal API, but doesn't do anything. URLs generated by Gadget expire and are not stored. */
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalUpdateAutoTableTestRelatedModelResult = {
  __typename?: "InternalUpdateAutoTableTestRelatedModelResult";
  _autoTableTestRelatedModel?: Maybe<Scalars["InternalAutoTableTestRelatedModelRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateAutoTableTestResult = {
  __typename?: "InternalUpdateAutoTableTestResult";
  autoTableTest?: Maybe<Scalars["InternalAutoTableTestRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateGameCityResult = {
  __typename?: "InternalUpdateGameCityResult";
  city?: Maybe<Scalars["InternalGameCityRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateGamePlayerResult = {
  __typename?: "InternalUpdateGamePlayerResult";
  errors?: Maybe<Array<ExecutionError>>;
  player?: Maybe<Scalars["InternalGamePlayerRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateGameRoundResult = {
  __typename?: "InternalUpdateGameRoundResult";
  errors?: Maybe<Array<ExecutionError>>;
  round?: Maybe<Scalars["InternalGameRoundRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateGameStadiumResult = {
  __typename?: "InternalUpdateGameStadiumResult";
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<Scalars["InternalGameStadiumRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateGizmoResult = {
  __typename?: "InternalUpdateGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateHasManyThroughBaseModelResult = {
  __typename?: "InternalUpdateHasManyThroughBaseModelResult";
  baseModel?: Maybe<Scalars["InternalHasManyThroughBaseModelRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateHasManyThroughJoinerModelResult = {
  __typename?: "InternalUpdateHasManyThroughJoinerModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  joinerModel?: Maybe<Scalars["InternalHasManyThroughJoinerModelRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateHasManyThroughSiblingModelResult = {
  __typename?: "InternalUpdateHasManyThroughSiblingModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  siblingModel?: Maybe<Scalars["InternalHasManyThroughSiblingModelRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateModelAResult = {
  __typename?: "InternalUpdateModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  modelA?: Maybe<Scalars["InternalModelARecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdatePartResult = {
  __typename?: "InternalUpdatePartResult";
  errors?: Maybe<Array<ExecutionError>>;
  part?: Maybe<Scalars["InternalPartRecord"]["output"]>;
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

export type InternalUpdateShopifyGdprRequestResult = {
  __typename?: "InternalUpdateShopifyGdprRequestResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyGdprRequest?: Maybe<Scalars["InternalShopifyGdprRequestRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateShopifyProductImageResult = {
  __typename?: "InternalUpdateShopifyProductImageResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductImage?: Maybe<Scalars["InternalShopifyProductImageRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateShopifyProductOptionResult = {
  __typename?: "InternalUpdateShopifyProductOptionResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductOption?: Maybe<Scalars["InternalShopifyProductOptionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateShopifyProductResult = {
  __typename?: "InternalUpdateShopifyProductResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProduct?: Maybe<Scalars["InternalShopifyProductRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateShopifyProductVariantResult = {
  __typename?: "InternalUpdateShopifyProductVariantResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductVariant?: Maybe<Scalars["InternalShopifyProductVariantRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateShopifyShopResult = {
  __typename?: "InternalUpdateShopifyShopResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyShop?: Maybe<Scalars["InternalShopifyShopRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateShopifySyncResult = {
  __typename?: "InternalUpdateShopifySyncResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifySync?: Maybe<Scalars["InternalShopifySyncRecord"]["output"]>;
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

export type InternalUpsertAutoTableTestRelatedModelResult = {
  __typename?: "InternalUpsertAutoTableTestRelatedModelResult";
  _autoTableTestRelatedModel?: Maybe<Scalars["InternalAutoTableTestRelatedModelRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertAutoTableTestResult = {
  __typename?: "InternalUpsertAutoTableTestResult";
  autoTableTest?: Maybe<Scalars["InternalAutoTableTestRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertGameCityResult = {
  __typename?: "InternalUpsertGameCityResult";
  city?: Maybe<Scalars["InternalGameCityRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertGamePlayerResult = {
  __typename?: "InternalUpsertGamePlayerResult";
  errors?: Maybe<Array<ExecutionError>>;
  player?: Maybe<Scalars["InternalGamePlayerRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertGameRoundResult = {
  __typename?: "InternalUpsertGameRoundResult";
  errors?: Maybe<Array<ExecutionError>>;
  round?: Maybe<Scalars["InternalGameRoundRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertGameStadiumResult = {
  __typename?: "InternalUpsertGameStadiumResult";
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<Scalars["InternalGameStadiumRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertGizmoResult = {
  __typename?: "InternalUpsertGizmoResult";
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertHasManyThroughBaseModelResult = {
  __typename?: "InternalUpsertHasManyThroughBaseModelResult";
  baseModel?: Maybe<Scalars["InternalHasManyThroughBaseModelRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertHasManyThroughJoinerModelResult = {
  __typename?: "InternalUpsertHasManyThroughJoinerModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  joinerModel?: Maybe<Scalars["InternalHasManyThroughJoinerModelRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertHasManyThroughSiblingModelResult = {
  __typename?: "InternalUpsertHasManyThroughSiblingModelResult";
  errors?: Maybe<Array<ExecutionError>>;
  siblingModel?: Maybe<Scalars["InternalHasManyThroughSiblingModelRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertModelAResult = {
  __typename?: "InternalUpsertModelAResult";
  errors?: Maybe<Array<ExecutionError>>;
  modelA?: Maybe<Scalars["InternalModelARecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertPartResult = {
  __typename?: "InternalUpsertPartResult";
  errors?: Maybe<Array<ExecutionError>>;
  part?: Maybe<Scalars["InternalPartRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertSectionResult = {
  __typename?: "InternalUpsertSectionResult";
  errors?: Maybe<Array<ExecutionError>>;
  section?: Maybe<Scalars["InternalSectionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertSessionResult = {
  __typename?: "InternalUpsertSessionResult";
  errors?: Maybe<Array<ExecutionError>>;
  session?: Maybe<Scalars["InternalSessionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertShopifyGdprRequestResult = {
  __typename?: "InternalUpsertShopifyGdprRequestResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyGdprRequest?: Maybe<Scalars["InternalShopifyGdprRequestRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertShopifyProductImageResult = {
  __typename?: "InternalUpsertShopifyProductImageResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductImage?: Maybe<Scalars["InternalShopifyProductImageRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertShopifyProductOptionResult = {
  __typename?: "InternalUpsertShopifyProductOptionResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductOption?: Maybe<Scalars["InternalShopifyProductOptionRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertShopifyProductResult = {
  __typename?: "InternalUpsertShopifyProductResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProduct?: Maybe<Scalars["InternalShopifyProductRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertShopifyProductVariantResult = {
  __typename?: "InternalUpsertShopifyProductVariantResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductVariant?: Maybe<Scalars["InternalShopifyProductVariantRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertShopifyShopResult = {
  __typename?: "InternalUpsertShopifyShopResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifyShop?: Maybe<Scalars["InternalShopifyShopRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertShopifySyncResult = {
  __typename?: "InternalUpsertShopifySyncResult";
  errors?: Maybe<Array<ExecutionError>>;
  shopifySync?: Maybe<Scalars["InternalShopifySyncRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertUserResult = {
  __typename?: "InternalUpsertUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
};

export type InternalUpsertWidgetResult = {
  __typename?: "InternalUpsertWidgetResult";
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

/** Input object supporting setting or updating related model record on a relationship field */
export type JoinerModelHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeJoinerModelInput>;
  create?: InputMaybe<NestedJoinerModelCreateInput>;
  delete?: InputMaybe<NestedJoinerModelDeleteInput>;
  update?: InputMaybe<NestedJoinerModelUpdateInput>;
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
  abortShopifySync?: Maybe<AbortShopifySyncResult>;
  addInventoryWidget?: Maybe<AddInventoryWidgetResult>;
  alwaysThrowErrorWidget?: Maybe<AlwaysThrowErrorWidgetResult>;
  background: BackgroundMutations;
  bulkAbortShopifySyncs?: Maybe<BulkAbortShopifySyncsResult>;
  bulkAddInventoryWidgets?: Maybe<BulkAddInventoryWidgetsResult>;
  bulkAlwaysThrowErrorWidgets?: Maybe<BulkAlwaysThrowErrorWidgetsResult>;
  bulkCompleteShopifySyncs?: Maybe<BulkCompleteShopifySyncsResult>;
  bulkCreateAutoTableTestRelatedModels?: Maybe<BulkCreateAutoTableTestRelatedModelsResult>;
  bulkCreateAutoTableTests?: Maybe<BulkCreateAutoTableTestsResult>;
  bulkCreateGizmos?: Maybe<BulkCreateGizmosResult>;
  bulkCreateModelAs?: Maybe<BulkCreateModelAsResult>;
  bulkCreateParts?: Maybe<BulkCreatePartsResult>;
  bulkCreateSections?: Maybe<BulkCreateSectionsResult>;
  bulkCreateWidgets?: Maybe<BulkCreateWidgetsResult>;
  bulkCustomActionAutoTableTests?: Maybe<BulkCustomActionAutoTableTestsResult>;
  bulkCustomActionWithParamsAutoTableTests?: Maybe<BulkCustomActionWithParamsAutoTableTestsResult>;
  bulkDeleteAutoTableTestRelatedModels?: Maybe<BulkDeleteAutoTableTestRelatedModelsResult>;
  bulkDeleteAutoTableTests?: Maybe<BulkDeleteAutoTableTestsResult>;
  bulkDeleteGizmos?: Maybe<BulkDeleteGizmosResult>;
  bulkDeleteModelAs?: Maybe<BulkDeleteModelAsResult>;
  bulkDeleteParts?: Maybe<BulkDeletePartsResult>;
  bulkDeleteSections?: Maybe<BulkDeleteSectionsResult>;
  bulkDeleteUsers?: Maybe<BulkDeleteUsersResult>;
  bulkDeleteWidgets?: Maybe<BulkDeleteWidgetsResult>;
  bulkErrorShopifySyncs?: Maybe<BulkErrorShopifySyncsResult>;
  bulkRunShopifySyncs?: Maybe<BulkRunShopifySyncsResult>;
  bulkSignInUsers?: Maybe<BulkSignInUsersResult>;
  bulkSignOutUsers?: Maybe<BulkSignOutUsersResult>;
  bulkSignUpUsers?: Maybe<BulkSignUpUsersResult>;
  bulkUpdateAutoTableTestRelatedModels?: Maybe<BulkUpdateAutoTableTestRelatedModelsResult>;
  bulkUpdateAutoTableTests?: Maybe<BulkUpdateAutoTableTestsResult>;
  bulkUpdateGizmos?: Maybe<BulkUpdateGizmosResult>;
  bulkUpdateModelAs?: Maybe<BulkUpdateModelAsResult>;
  bulkUpdateParts?: Maybe<BulkUpdatePartsResult>;
  bulkUpdateSections?: Maybe<BulkUpdateSectionsResult>;
  bulkUpdateUsers?: Maybe<BulkUpdateUsersResult>;
  bulkUpdateWidgets?: Maybe<BulkUpdateWidgetsResult>;
  bulkUpdateWithCustomParamsAutoTableTests?: Maybe<BulkUpdateWithCustomParamsAutoTableTestsResult>;
  bulkUpsertAutoTableTestRelatedModels: BulkUpsertAutoTableTestRelatedModelsResult;
  bulkUpsertAutoTableTests: BulkUpsertAutoTableTestsResult;
  bulkUpsertGizmos: BulkUpsertGizmosResult;
  bulkUpsertModelAs: BulkUpsertModelAsResult;
  bulkUpsertParts: BulkUpsertPartsResult;
  bulkUpsertSections: BulkUpsertSectionsResult;
  bulkUpsertShopifySyncs: BulkUpsertShopifySyncsResult;
  bulkUpsertUsers: BulkUpsertUsersResult;
  bulkUpsertWidgets: BulkUpsertWidgetsResult;
  completeShopifySync?: Maybe<CompleteShopifySyncResult>;
  createAutoTableTest?: Maybe<CreateAutoTableTestResult>;
  createAutoTableTestRelatedModel?: Maybe<CreateAutoTableTestRelatedModelResult>;
  createGizmo?: Maybe<CreateGizmoResult>;
  createModelA?: Maybe<CreateModelAResult>;
  createPart?: Maybe<CreatePartResult>;
  createSection?: Maybe<CreateSectionResult>;
  createTestData?: Maybe<CreateTestDataResult>;
  createWidget?: Maybe<CreateWidgetResult>;
  customActionAutoTableTest?: Maybe<CustomActionAutoTableTestResult>;
  customActionWithParamsAutoTableTest?: Maybe<CustomActionWithParamsAutoTableTestResult>;
  deleteAutoTableTest?: Maybe<DeleteAutoTableTestResult>;
  deleteAutoTableTestRelatedModel?: Maybe<DeleteAutoTableTestRelatedModelResult>;
  deleteGizmo?: Maybe<DeleteGizmoResult>;
  deleteModelA?: Maybe<DeleteModelAResult>;
  deletePart?: Maybe<DeletePartResult>;
  deleteSection?: Maybe<DeleteSectionResult>;
  deleteUser?: Maybe<DeleteUserResult>;
  deleteWidget?: Maybe<DeleteWidgetResult>;
  errorShopifySync?: Maybe<ErrorShopifySyncResult>;
  flipAll?: Maybe<FlipAllResult>;
  /** Meta information about the application, like it's name, schema, and other internal details. */
  gadgetMeta: GadgetApplicationMeta;
  game: GameMutations;
  hasManyThrough: HasManyThroughMutations;
  internal: InternalMutations;
  name: NameMutations;
  runShopifySync?: Maybe<RunShopifySyncResult>;
  shopifyConnection?: Maybe<ShopifyConnectionMutations>;
  signInUser?: Maybe<SignInUserResult>;
  signOutUser?: Maybe<SignOutUserResult>;
  signUpUser?: Maybe<SignUpUserResult>;
  updateAutoTableTest?: Maybe<UpdateAutoTableTestResult>;
  updateAutoTableTestRelatedModel?: Maybe<UpdateAutoTableTestRelatedModelResult>;
  updateGizmo?: Maybe<UpdateGizmoResult>;
  updateModelA?: Maybe<UpdateModelAResult>;
  updatePart?: Maybe<UpdatePartResult>;
  updateSection?: Maybe<UpdateSectionResult>;
  updateUser?: Maybe<UpdateUserResult>;
  updateWidget?: Maybe<UpdateWidgetResult>;
  updateWithCustomParamsAutoTableTest?: Maybe<UpdateWithCustomParamsAutoTableTestResult>;
  upsertAutoTableTest?: Maybe<UpsertAutoTableTestResult>;
  upsertAutoTableTestRelatedModel?: Maybe<UpsertAutoTableTestRelatedModelResult>;
  upsertGizmo?: Maybe<UpsertGizmoResult>;
  upsertModelA?: Maybe<UpsertModelAResult>;
  upsertPart?: Maybe<UpsertPartResult>;
  upsertSection?: Maybe<UpsertSectionResult>;
  upsertShopifySync?: Maybe<UpsertShopifySyncResult>;
  upsertUser?: Maybe<UpsertUserResult>;
  upsertWidget?: Maybe<UpsertWidgetResult>;
};

export type MutationAbortShopifySyncArgs = {
  id: Scalars["GadgetID"]["input"];
  shopifySync?: InputMaybe<AbortShopifySyncInput>;
};

export type MutationAddInventoryWidgetArgs = {
  count?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationAlwaysThrowErrorWidgetArgs = {
  widget?: InputMaybe<AlwaysThrowErrorWidgetInput>;
};

export type MutationBulkAbortShopifySyncsArgs = {
  inputs: Array<BulkAbortShopifySyncsInput>;
};

export type MutationBulkAddInventoryWidgetsArgs = {
  inputs: Array<BulkAddInventoryWidgetsInput>;
};

export type MutationBulkAlwaysThrowErrorWidgetsArgs = {
  inputs: Array<BulkAlwaysThrowErrorWidgetsInput>;
};

export type MutationBulkCompleteShopifySyncsArgs = {
  inputs: Array<BulkCompleteShopifySyncsInput>;
};

export type MutationBulkCreateAutoTableTestRelatedModelsArgs = {
  inputs: Array<BulkCreateAutoTableTestRelatedModelsInput>;
};

export type MutationBulkCreateAutoTableTestsArgs = {
  inputs: Array<BulkCreateAutoTableTestsInput>;
};

export type MutationBulkCreateGizmosArgs = {
  inputs: Array<BulkCreateGizmosInput>;
};

export type MutationBulkCreateModelAsArgs = {
  inputs: Array<Scalars["JSON"]["input"]>;
};

export type MutationBulkCreatePartsArgs = {
  inputs: Array<BulkCreatePartsInput>;
};

export type MutationBulkCreateSectionsArgs = {
  inputs: Array<BulkCreateSectionsInput>;
};

export type MutationBulkCreateWidgetsArgs = {
  inputs: Array<BulkCreateWidgetsInput>;
};

export type MutationBulkCustomActionAutoTableTestsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkCustomActionWithParamsAutoTableTestsArgs = {
  inputs: Array<BulkCustomActionWithParamsAutoTableTestsInput>;
};

export type MutationBulkDeleteAutoTableTestRelatedModelsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteAutoTableTestsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteGizmosArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteModelAsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeletePartsArgs = {
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

export type MutationBulkErrorShopifySyncsArgs = {
  inputs: Array<BulkErrorShopifySyncsInput>;
};

export type MutationBulkRunShopifySyncsArgs = {
  inputs: Array<BulkRunShopifySyncsInput>;
};

export type MutationBulkSignInUsersArgs = {
  inputs: Array<BulkSignInUsersInput>;
};

export type MutationBulkSignOutUsersArgs = {
  inputs: Array<BulkSignOutUsersInput>;
};

export type MutationBulkSignUpUsersArgs = {
  inputs: Array<BulkSignUpUsersInput>;
};

export type MutationBulkUpdateAutoTableTestRelatedModelsArgs = {
  inputs: Array<BulkUpdateAutoTableTestRelatedModelsInput>;
};

export type MutationBulkUpdateAutoTableTestsArgs = {
  inputs: Array<BulkUpdateAutoTableTestsInput>;
};

export type MutationBulkUpdateGizmosArgs = {
  inputs: Array<BulkUpdateGizmosInput>;
};

export type MutationBulkUpdateModelAsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkUpdatePartsArgs = {
  inputs: Array<BulkUpdatePartsInput>;
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

export type MutationBulkUpdateWithCustomParamsAutoTableTestsArgs = {
  inputs: Array<BulkUpdateWithCustomParamsAutoTableTestsInput>;
};

export type MutationBulkUpsertAutoTableTestRelatedModelsArgs = {
  inputs: Array<BulkUpsertAutoTableTestRelatedModelsInput>;
};

export type MutationBulkUpsertAutoTableTestsArgs = {
  inputs: Array<BulkUpsertAutoTableTestsInput>;
};

export type MutationBulkUpsertGizmosArgs = {
  inputs: Array<BulkUpsertGizmosInput>;
};

export type MutationBulkUpsertModelAsArgs = {
  inputs: Array<BulkUpsertModelAsInput>;
};

export type MutationBulkUpsertPartsArgs = {
  inputs: Array<BulkUpsertPartsInput>;
};

export type MutationBulkUpsertSectionsArgs = {
  inputs: Array<BulkUpsertSectionsInput>;
};

export type MutationBulkUpsertShopifySyncsArgs = {
  inputs: Array<BulkUpsertShopifySyncsInput>;
};

export type MutationBulkUpsertUsersArgs = {
  inputs: Array<BulkUpsertUsersInput>;
};

export type MutationBulkUpsertWidgetsArgs = {
  inputs: Array<BulkUpsertWidgetsInput>;
};

export type MutationCompleteShopifySyncArgs = {
  id: Scalars["GadgetID"]["input"];
  shopifySync?: InputMaybe<CompleteShopifySyncInput>;
};

export type MutationCreateAutoTableTestArgs = {
  autoTableTest?: InputMaybe<CreateAutoTableTestInput>;
};

export type MutationCreateAutoTableTestRelatedModelArgs = {
  _autoTableTestRelatedModel?: InputMaybe<CreateAutoTableTestRelatedModelInput>;
};

export type MutationCreateGizmoArgs = {
  gizmo?: InputMaybe<CreateGizmoInput>;
};

export type MutationCreatePartArgs = {
  part?: InputMaybe<CreatePartInput>;
};

export type MutationCreateSectionArgs = {
  section?: InputMaybe<CreateSectionInput>;
};

export type MutationCreateWidgetArgs = {
  widget?: InputMaybe<CreateWidgetInput>;
};

export type MutationCustomActionAutoTableTestArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationCustomActionWithParamsAutoTableTestArgs = {
  id: Scalars["GadgetID"]["input"];
  numberParam1?: InputMaybe<Scalars["Float"]["input"]>;
  stringParam1?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationDeleteAutoTableTestArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteAutoTableTestRelatedModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteGizmoArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteModelAArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeletePartArgs = {
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

export type MutationErrorShopifySyncArgs = {
  id: Scalars["GadgetID"]["input"];
  shopifySync?: InputMaybe<ErrorShopifySyncInput>;
};

export type MutationFlipAllArgs = {
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationRunShopifySyncArgs = {
  shopifySync?: InputMaybe<RunShopifySyncInput>;
  startReason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSignInUserArgs = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<SignInUserInput>;
};

export type MutationSignOutUserArgs = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<SignOutUserInput>;
};

export type MutationSignUpUserArgs = {
  user?: InputMaybe<SignUpUserInput>;
};

export type MutationUpdateAutoTableTestArgs = {
  autoTableTest?: InputMaybe<UpdateAutoTableTestInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateAutoTableTestRelatedModelArgs = {
  _autoTableTestRelatedModel?: InputMaybe<UpdateAutoTableTestRelatedModelInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateGizmoArgs = {
  gizmo?: InputMaybe<UpdateGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateModelAArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdatePartArgs = {
  id: Scalars["GadgetID"]["input"];
  part?: InputMaybe<UpdatePartInput>;
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

export type MutationUpdateWithCustomParamsAutoTableTestArgs = {
  autoTableTest?: InputMaybe<UpdateWithCustomParamsAutoTableTestInput>;
  id: Scalars["GadgetID"]["input"];
  num?: InputMaybe<Scalars["Float"]["input"]>;
  numberParam1?: InputMaybe<Scalars["Float"]["input"]>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  stringParam1?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpsertAutoTableTestArgs = {
  autoTableTest?: InputMaybe<UpsertAutoTableTestInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertAutoTableTestRelatedModelArgs = {
  _autoTableTestRelatedModel?: InputMaybe<UpsertAutoTableTestRelatedModelInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertGizmoArgs = {
  gizmo?: InputMaybe<UpsertGizmoInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertModelAArgs = {
  modelA?: InputMaybe<UpsertModelAInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertPartArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  part?: InputMaybe<UpsertPartInput>;
};

export type MutationUpsertSectionArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  section?: InputMaybe<UpsertSectionInput>;
};

export type MutationUpsertShopifySyncArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shopifySync?: InputMaybe<UpsertShopifySyncInput>;
  startReason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpsertUserArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  user?: InputMaybe<UpsertUserInput>;
};

export type MutationUpsertWidgetArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widget?: InputMaybe<UpsertWidgetInput>;
};

export type NameMutations = {
  __typename?: "NameMutations";
  spaced: NameSpacedMutations;
};

export type NameSpacedActionAResult = {
  __typename?: "NameSpacedActionAResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type NameSpacedCustomObjectParamsObjParamInput = {
  firstLevelStr?: InputMaybe<Scalars["String"]["input"]>;
  objProperty1?: InputMaybe<NameSpacedCustomObjectParamsObjProperty1Input>;
};

export type NameSpacedCustomObjectParamsObjProperty1Input = {
  objProperty2?: InputMaybe<NameSpacedCustomObjectParamsObjProperty2Input>;
  secondLevelStr?: InputMaybe<Scalars["String"]["input"]>;
};

export type NameSpacedCustomObjectParamsObjProperty2Input = {
  thirdLevelStr?: InputMaybe<Scalars["String"]["input"]>;
};

export type NameSpacedCustomObjectParamsResult = {
  __typename?: "NameSpacedCustomObjectParamsResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type NameSpacedMutations = {
  __typename?: "NameSpacedMutations";
  actionA?: Maybe<NameSpacedActionAResult>;
  customObjectParams?: Maybe<NameSpacedCustomObjectParamsResult>;
};

export type NameSpacedMutationsCustomObjectParamsArgs = {
  objParam?: InputMaybe<NameSpacedCustomObjectParamsObjParamInput>;
  rootLevelStr?: InputMaybe<Scalars["String"]["input"]>;
};

export type NameSpacedNoTriggerGlobalActionResult = {
  __typename?: "NameSpacedNoTriggerGlobalActionResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type NestedAutoTableTestCreateInput = {
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  enum?: InputMaybe<Array<Scalars["AutoTableTestEnumEnum"]["input"]>>;
  es?: InputMaybe<Scalars["String"]["input"]>;
  file?: InputMaybe<StoredFileInput>;
  hasMany?: InputMaybe<Array<InputMaybe<AutoTableTestRelatedModelHasManyInput>>>;
  hasOne?: InputMaybe<AutoTableTestRelatedModelHasOneInput>;
  json?: InputMaybe<Scalars["JSON"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  pwd?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  rl?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rt?: InputMaybe<RichTextInput>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  vect?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NestedAutoTableTestCustomActionInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedAutoTableTestCustomActionWithParamsInput = {
  id: Scalars["GadgetID"]["input"];
  numberParam1?: InputMaybe<Scalars["Float"]["input"]>;
  stringParam1?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedAutoTableTestDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedAutoTableTestRelatedModelCreateInput = {
  belongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  manyBelongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  someBool?: InputMaybe<Scalars["Boolean"]["input"]>;
  someNumber?: InputMaybe<Scalars["Float"]["input"]>;
};

export type NestedAutoTableTestRelatedModelDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedAutoTableTestRelatedModelUpdateInput = {
  belongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  id: Scalars["GadgetID"]["input"];
  manyBelongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  someBool?: InputMaybe<Scalars["Boolean"]["input"]>;
  someNumber?: InputMaybe<Scalars["Float"]["input"]>;
};

export type NestedAutoTableTestUpdateInput = {
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  enum?: InputMaybe<Array<Scalars["AutoTableTestEnumEnum"]["input"]>>;
  es?: InputMaybe<Scalars["String"]["input"]>;
  file?: InputMaybe<StoredFileInput>;
  hasMany?: InputMaybe<Array<InputMaybe<AutoTableTestRelatedModelHasManyInput>>>;
  hasOne?: InputMaybe<AutoTableTestRelatedModelHasOneInput>;
  id: Scalars["GadgetID"]["input"];
  json?: InputMaybe<Scalars["JSON"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  pwd?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  rl?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rt?: InputMaybe<RichTextInput>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  vect?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NestedAutoTableTestUpdateWithCustomParamsInput = {
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  enum?: InputMaybe<Array<Scalars["AutoTableTestEnumEnum"]["input"]>>;
  es?: InputMaybe<Scalars["String"]["input"]>;
  file?: InputMaybe<StoredFileInput>;
  hasMany?: InputMaybe<Array<InputMaybe<AutoTableTestRelatedModelHasManyInput>>>;
  hasOne?: InputMaybe<AutoTableTestRelatedModelHasOneInput>;
  id: Scalars["GadgetID"]["input"];
  json?: InputMaybe<Scalars["JSON"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  numberParam1?: InputMaybe<Scalars["Float"]["input"]>;
  pwd?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  rl?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rt?: InputMaybe<RichTextInput>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  stringParam1?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  vect?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NestedBaseModelCreateInput = {
  baseModelHmtField?: InputMaybe<Array<InputMaybe<SiblingModelHasManyThroughInput>>>;
  baseModelName?: InputMaybe<Scalars["String"]["input"]>;
  joinerModel?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  joinerModels?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
};

export type NestedBaseModelDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedBaseModelUpdateInput = {
  baseModelHmtField?: InputMaybe<Array<InputMaybe<SiblingModelHasManyThroughInput>>>;
  baseModelName?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["GadgetID"]["input"];
  joinerModel?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  joinerModels?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
};

export type NestedCityCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  stadium?: InputMaybe<StadiumHasOneInput>;
};

export type NestedCityCustomObjectParamsInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  objParam?: InputMaybe<NestedCustomObjectParamsObjParamInput>;
  rootLevelStr?: InputMaybe<Scalars["String"]["input"]>;
  stadium?: InputMaybe<StadiumHasOneInput>;
};

export type NestedCityDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedCityUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  stadium?: InputMaybe<StadiumHasOneInput>;
};

export type NestedCustomObjectParamsObjParamInput = {
  firstLevelStr?: InputMaybe<Scalars["String"]["input"]>;
  objProperty1?: InputMaybe<NestedCustomObjectParamsObjProperty1Input>;
};

export type NestedCustomObjectParamsObjProperty1Input = {
  objProperty2?: InputMaybe<NestedCustomObjectParamsObjProperty2Input>;
  secondLevelStr?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedCustomObjectParamsObjProperty2Input = {
  thirdLevelStr?: InputMaybe<Scalars["String"]["input"]>;
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

export type NestedJoinerModelCreateInput = {
  joinerBelongsToBase?: InputMaybe<BaseModelBelongsToInput>;
  joinerBelongsToSibling?: InputMaybe<SiblingModelBelongsToInput>;
};

export type NestedJoinerModelDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedJoinerModelUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  joinerBelongsToBase?: InputMaybe<BaseModelBelongsToInput>;
  joinerBelongsToSibling?: InputMaybe<SiblingModelBelongsToInput>;
};

export type NestedPlayerCreateInput = {
  currentRound?: InputMaybe<RoundBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedPlayerDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedPlayerUpdateInput = {
  currentRound?: InputMaybe<RoundBelongsToInput>;
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedRoundCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  players?: InputMaybe<Array<InputMaybe<PlayerHasManyInput>>>;
  stadium?: InputMaybe<StadiumBelongsToInput>;
};

export type NestedRoundDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedRoundUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  players?: InputMaybe<Array<InputMaybe<PlayerHasManyInput>>>;
  stadium?: InputMaybe<StadiumBelongsToInput>;
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

export type NestedSiblingModelCreateInput = {
  joinerModel?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  joinerModels?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  siblingModelHmtField?: InputMaybe<Array<InputMaybe<BaseModelHasManyThroughInput>>>;
};

export type NestedSiblingModelDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedSiblingModelUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  joinerModel?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  joinerModels?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  siblingModelHmtField?: InputMaybe<Array<InputMaybe<BaseModelHasManyThroughInput>>>;
};

export type NestedStadiumCreateInput = {
  city?: InputMaybe<CityBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  photo?: InputMaybe<StoredFileInput>;
  rounds?: InputMaybe<Array<InputMaybe<RoundHasManyInput>>>;
  tags?: InputMaybe<Array<Scalars["StadiumTagsEnum"]["input"]>>;
  type?: InputMaybe<Scalars["StadiumTypeEnum"]["input"]>;
};

export type NestedStadiumDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedStadiumUpdateInput = {
  city?: InputMaybe<CityBelongsToInput>;
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  photo?: InputMaybe<StoredFileInput>;
  rounds?: InputMaybe<Array<InputMaybe<RoundHasManyInput>>>;
  tags?: InputMaybe<Array<Scalars["StadiumTagsEnum"]["input"]>>;
  type?: InputMaybe<Scalars["StadiumTypeEnum"]["input"]>;
};

export type NestedWidgetAddInventoryInput = {
  count?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

export type NestedWidgetAlwaysThrowErrorInput = {
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

export type NoTriggerActionAutoTableTestResult = {
  __typename?: "NoTriggerActionAutoTableTestResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  autoTableTest?: Maybe<AutoTableTest>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type NoTriggerGlobalActionResult = {
  __typename?: "NoTriggerGlobalActionResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
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

export type Part = {
  __typename?: "Part";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  count?: Maybe<Scalars["Float"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  notes?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of Part items. */
export type PartConnection = {
  __typename?: "PartConnection";
  /** A list of edges. */
  edges: Array<PartEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Part connection. */
export type PartEdge = {
  __typename?: "PartEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Part;
};

export type PartFilter = {
  AND?: InputMaybe<Array<InputMaybe<PartFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<PartFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PartFilter>>>;
  count?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  notes?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PartSort = {
  /** Sort the results by the count field. Defaults to ascending (smallest value first). */
  count?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the notes field. Defaults to ascending (smallest value first). */
  notes?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type PlayerHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergePlayerInput>;
  create?: InputMaybe<NestedPlayerCreateInput>;
  delete?: InputMaybe<NestedPlayerDeleteInput>;
  update?: InputMaybe<NestedPlayerUpdateInput>;
};

export type Query = {
  __typename?: "Query";
  _autoTableTestRelatedModel?: Maybe<AutoTableTestRelatedModel>;
  _autoTableTestRelatedModels: AutoTableTestRelatedModelConnection;
  autoTableTest?: Maybe<AutoTableTest>;
  autoTableTests: AutoTableTestConnection;
  currentSession?: Maybe<Session>;
  /** Meta information about the application, like it's name, schema, and other internal details. */
  gadgetMeta: GadgetApplicationMeta;
  game: GameQueries;
  gizmo?: Maybe<Gizmo>;
  gizmos: GizmoConnection;
  hasManyThrough: HasManyThroughQueries;
  internal: InternalQueries;
  modelA?: Maybe<ModelA>;
  modelAs: ModelAConnection;
  part?: Maybe<Part>;
  parts: PartConnection;
  section?: Maybe<Section>;
  sections: SectionConnection;
  session?: Maybe<Session>;
  sessions: SessionConnection;
  shopifyConnection: Shopify;
  shopifyGdprRequest?: Maybe<ShopifyGdprRequest>;
  shopifyGdprRequests: ShopifyGdprRequestConnection;
  shopifyProduct?: Maybe<ShopifyProduct>;
  shopifyProductImage?: Maybe<ShopifyProductImage>;
  shopifyProductImages: ShopifyProductImageConnection;
  shopifyProductOption?: Maybe<ShopifyProductOption>;
  shopifyProductOptions: ShopifyProductOptionConnection;
  shopifyProductVariant?: Maybe<ShopifyProductVariant>;
  shopifyProductVariants: ShopifyProductVariantConnection;
  shopifyProducts: ShopifyProductConnection;
  shopifyShop?: Maybe<ShopifyShop>;
  shopifyShops: ShopifyShopConnection;
  shopifySync?: Maybe<ShopifySync>;
  shopifySyncs: ShopifySyncConnection;
  user?: Maybe<User>;
  users: UserConnection;
  widget?: Maybe<Widget>;
  widgets: WidgetConnection;
};

export type Query_AutoTableTestRelatedModelArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type Query_AutoTableTestRelatedModelsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<AutoTableTestRelatedModelFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<AutoTableTestRelatedModelSort>>;
};

export type QueryAutoTableTestArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryAutoTableTestsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<AutoTableTestFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<AutoTableTestSort>>;
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

export type QueryPartArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryPartsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<PartFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<PartSort>>;
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
  filter?: InputMaybe<Array<SessionFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryShopifyGdprRequestArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryShopifyGdprRequestsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyGdprRequestFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyGdprRequestSort>>;
};

export type QueryShopifyProductArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryShopifyProductImageArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryShopifyProductImagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductImageFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductImageSort>>;
};

export type QueryShopifyProductOptionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryShopifyProductOptionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductOptionFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductOptionSort>>;
};

export type QueryShopifyProductVariantArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryShopifyProductVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductVariantFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductVariantSort>>;
};

export type QueryShopifyProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductSort>>;
};

export type QueryShopifyShopArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryShopifyShopsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyShopFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyShopSort>>;
};

export type QueryShopifySyncArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryShopifySyncsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifySyncFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifySyncSort>>;
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

export type ReinstallShopifyShopResult = {
  __typename?: "ReinstallShopifyShopResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyShop?: Maybe<ShopifyShop>;
  success: Scalars["Boolean"]["output"];
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

/** Input object supporting setting or updating related model record on a relationship field */
export type RoundBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedRoundCreateInput>;
  delete?: InputMaybe<NestedRoundDeleteInput>;
  update?: InputMaybe<NestedRoundUpdateInput>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type RoundHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeRoundInput>;
  create?: InputMaybe<NestedRoundCreateInput>;
  delete?: InputMaybe<NestedRoundDeleteInput>;
  update?: InputMaybe<NestedRoundUpdateInput>;
};

export type RunShopifySyncInput = {
  domain?: InputMaybe<Scalars["String"]["input"]>;
  errorDetails?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  force?: InputMaybe<Scalars["Boolean"]["input"]>;
  models?: InputMaybe<Scalars["JSON"]["input"]>;
  shop?: InputMaybe<ShopifyShopBelongsToInput>;
  syncSince?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type RunShopifySyncResult = UpsertShopifySyncResult & {
  __typename?: "RunShopifySyncResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifySync?: Maybe<ShopifySync>;
  success: Scalars["Boolean"]["output"];
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
  roles?: Maybe<Array<Role>>;
  shop?: Maybe<ShopifyShop>;
  shopId?: Maybe<Scalars["GadgetID"]["output"]>;
  shopifySID?: Maybe<Scalars["String"]["output"]>;
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

export type SessionFilter = {
  id?: InputMaybe<IdEqualsFilter>;
  shop?: InputMaybe<IdEqualsFilter>;
  shopId?: InputMaybe<IdEqualsFilter>;
  shopifySID?: InputMaybe<StringEqualsFilter>;
  user?: InputMaybe<IdEqualsFilter>;
  userId?: InputMaybe<IdEqualsFilter>;
};

/** Information about the Shopify Connection */
export type Shopify = {
  __typename?: "Shopify";
  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ShopifyConnectionFetchOrInstallShopResult = {
  __typename?: "ShopifyConnectionFetchOrInstallShopResult";
  isAuthenticated: Scalars["Boolean"]["output"];
  missingScopes: Array<Scalars["String"]["output"]>;
  redirectToOauth: Scalars["Boolean"]["output"];
};

export type ShopifyConnectionMutations = {
  __typename?: "ShopifyConnectionMutations";
  fetchOrInstallShop?: Maybe<ShopifyConnectionFetchOrInstallShopResult>;
};

export type ShopifyConnectionMutationsFetchOrInstallShopArgs = {
  shopifySessionToken: Scalars["String"]["input"];
};

export type ShopifyGdprRequest = {
  __typename?: "ShopifyGdprRequest";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  payload?: Maybe<Scalars["JSON"]["output"]>;
  shop: ShopifyShop;
  shopId: Scalars["GadgetID"]["output"];
  topic: Scalars["ShopifyGdprRequestTopicEnum"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of ShopifyGdprRequest items. */
export type ShopifyGdprRequestConnection = {
  __typename?: "ShopifyGdprRequestConnection";
  /** A list of edges. */
  edges: Array<ShopifyGdprRequestEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a ShopifyGdprRequest connection. */
export type ShopifyGdprRequestEdge = {
  __typename?: "ShopifyGdprRequestEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ShopifyGdprRequest;
};

export type ShopifyGdprRequestFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopifyGdprRequestFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<ShopifyGdprRequestFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopifyGdprRequestFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  payload?: InputMaybe<JsonFilter>;
  shop?: InputMaybe<IdFilter>;
  shopId?: InputMaybe<IdFilter>;
  topic?: InputMaybe<SingleEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ShopifyGdprRequestSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the payload field. Defaults to ascending (smallest value first). */
  payload?: InputMaybe<SortOrder>;
  /** Sort the results by the topic field. Defaults to ascending (smallest value first). */
  topic?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShopifyProduct = {
  __typename?: "ShopifyProduct";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  body?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<Scalars["JSON"]["output"]>;
  compareAtPriceRange?: Maybe<Scalars["JSON"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars["GadgetID"]["output"];
  images: ShopifyProductImageConnection;
  options: ShopifyProductOptionConnection;
  productCategory?: Maybe<Scalars["JSON"]["output"]>;
  productType?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  shop?: Maybe<ShopifyShop>;
  shopId?: Maybe<Scalars["GadgetID"]["output"]>;
  shopifyCreatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  shopifyUpdatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["ShopifyProductStatusEnum"]["output"]>;
  tags?: Maybe<Scalars["JSON"]["output"]>;
  templateSuffix?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  variants: ShopifyProductVariantConnection;
  vendor?: Maybe<Scalars["String"]["output"]>;
};

export type ShopifyProductImagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductImageFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductImageSort>>;
};

export type ShopifyProductOptionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductOptionFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductOptionSort>>;
};

export type ShopifyProductVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductVariantFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductVariantSort>>;
};

/** A connection to a list of ShopifyProduct items. */
export type ShopifyProductConnection = {
  __typename?: "ShopifyProductConnection";
  /** A list of edges. */
  edges: Array<ShopifyProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a ShopifyProduct connection. */
export type ShopifyProductEdge = {
  __typename?: "ShopifyProductEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ShopifyProduct;
};

export type ShopifyProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopifyProductFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<ShopifyProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopifyProductFilter>>>;
  body?: InputMaybe<StringFilter>;
  category?: InputMaybe<JsonFilter>;
  compareAtPriceRange?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  handle?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  productCategory?: InputMaybe<JsonFilter>;
  productType?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DateTimeFilter>;
  shop?: InputMaybe<IdFilter>;
  shopId?: InputMaybe<IdFilter>;
  shopifyCreatedAt?: InputMaybe<DateTimeFilter>;
  shopifyUpdatedAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<SingleEnumFilter>;
  tags?: InputMaybe<JsonFilter>;
  templateSuffix?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vendor?: InputMaybe<StringFilter>;
};

export type ShopifyProductImage = {
  __typename?: "ShopifyProductImage";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  alt?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  height?: Maybe<Scalars["Float"]["output"]>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars["GadgetID"]["output"];
  position?: Maybe<Scalars["Float"]["output"]>;
  product?: Maybe<ShopifyProduct>;
  productId?: Maybe<Scalars["GadgetID"]["output"]>;
  shop?: Maybe<ShopifyShop>;
  shopId?: Maybe<Scalars["GadgetID"]["output"]>;
  shopifyCreatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  shopifyUpdatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  variants: ShopifyProductVariantConnection;
  width?: Maybe<Scalars["Float"]["output"]>;
};

export type ShopifyProductImageVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductVariantFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductVariantSort>>;
};

/** A connection to a list of ShopifyProductImage items. */
export type ShopifyProductImageConnection = {
  __typename?: "ShopifyProductImageConnection";
  /** A list of edges. */
  edges: Array<ShopifyProductImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a ShopifyProductImage connection. */
export type ShopifyProductImageEdge = {
  __typename?: "ShopifyProductImageEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ShopifyProductImage;
};

export type ShopifyProductImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopifyProductImageFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<ShopifyProductImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopifyProductImageFilter>>>;
  alt?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  height?: InputMaybe<FloatFilter>;
  id?: InputMaybe<IdFilter>;
  position?: InputMaybe<FloatFilter>;
  product?: InputMaybe<IdFilter>;
  productId?: InputMaybe<IdFilter>;
  shop?: InputMaybe<IdFilter>;
  shopId?: InputMaybe<IdFilter>;
  shopifyCreatedAt?: InputMaybe<DateTimeFilter>;
  shopifyUpdatedAt?: InputMaybe<DateTimeFilter>;
  source?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type ShopifyProductImageSort = {
  /** Sort the results by the alt field. Defaults to ascending (smallest value first). */
  alt?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the height field. Defaults to ascending (smallest value first). */
  height?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: InputMaybe<SortOrder>;
  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the width field. Defaults to ascending (smallest value first). */
  width?: InputMaybe<SortOrder>;
};

export type ShopifyProductOption = {
  __typename?: "ShopifyProductOption";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  position?: Maybe<Scalars["Float"]["output"]>;
  product?: Maybe<ShopifyProduct>;
  productId?: Maybe<Scalars["GadgetID"]["output"]>;
  shop?: Maybe<ShopifyShop>;
  shopId?: Maybe<Scalars["GadgetID"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  values?: Maybe<Scalars["JSON"]["output"]>;
};

/** A connection to a list of ShopifyProductOption items. */
export type ShopifyProductOptionConnection = {
  __typename?: "ShopifyProductOptionConnection";
  /** A list of edges. */
  edges: Array<ShopifyProductOptionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a ShopifyProductOption connection. */
export type ShopifyProductOptionEdge = {
  __typename?: "ShopifyProductOptionEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ShopifyProductOption;
};

export type ShopifyProductOptionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopifyProductOptionFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<ShopifyProductOptionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopifyProductOptionFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<FloatFilter>;
  product?: InputMaybe<IdFilter>;
  productId?: InputMaybe<IdFilter>;
  shop?: InputMaybe<IdFilter>;
  shopId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  values?: InputMaybe<JsonFilter>;
};

export type ShopifyProductOptionSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the values field. Defaults to ascending (smallest value first). */
  values?: InputMaybe<SortOrder>;
};

export type ShopifyProductSort = {
  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: InputMaybe<SortOrder>;
  /** Sort the results by the category field. Defaults to ascending (smallest value first). */
  category?: InputMaybe<SortOrder>;
  /** Sort the results by the compareAtPriceRange field. Defaults to ascending (smallest value first). */
  compareAtPriceRange?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the productCategory field. Defaults to ascending (smallest value first). */
  productCategory?: InputMaybe<SortOrder>;
  /** Sort the results by the productType field. Defaults to ascending (smallest value first). */
  productType?: InputMaybe<SortOrder>;
  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: InputMaybe<SortOrder>;
  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: InputMaybe<SortOrder>;
  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: InputMaybe<SortOrder>;
  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: InputMaybe<SortOrder>;
};

export type ShopifyProductVariant = {
  __typename?: "ShopifyProductVariant";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  barcode?: Maybe<Scalars["String"]["output"]>;
  compareAtPrice?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars["GadgetID"]["output"];
  inventoryPolicy?: Maybe<Scalars["String"]["output"]>;
  inventoryQuantity?: Maybe<Scalars["Float"]["output"]>;
  option1?: Maybe<Scalars["String"]["output"]>;
  option2?: Maybe<Scalars["String"]["output"]>;
  option3?: Maybe<Scalars["String"]["output"]>;
  position?: Maybe<Scalars["Float"]["output"]>;
  presentmentPrices?: Maybe<Scalars["JSON"]["output"]>;
  price?: Maybe<Scalars["String"]["output"]>;
  product?: Maybe<ShopifyProduct>;
  productId?: Maybe<Scalars["GadgetID"]["output"]>;
  productImage?: Maybe<ShopifyProductImage>;
  productImageId?: Maybe<Scalars["GadgetID"]["output"]>;
  selectedOptions?: Maybe<Scalars["JSON"]["output"]>;
  shop?: Maybe<ShopifyShop>;
  shopId?: Maybe<Scalars["GadgetID"]["output"]>;
  shopifyCreatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  shopifyUpdatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
  taxCode?: Maybe<Scalars["String"]["output"]>;
  taxable?: Maybe<Scalars["Boolean"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of ShopifyProductVariant items. */
export type ShopifyProductVariantConnection = {
  __typename?: "ShopifyProductVariantConnection";
  /** A list of edges. */
  edges: Array<ShopifyProductVariantEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a ShopifyProductVariant connection. */
export type ShopifyProductVariantEdge = {
  __typename?: "ShopifyProductVariantEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ShopifyProductVariant;
};

export type ShopifyProductVariantFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopifyProductVariantFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<ShopifyProductVariantFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopifyProductVariantFilter>>>;
  barcode?: InputMaybe<StringFilter>;
  compareAtPrice?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  inventoryPolicy?: InputMaybe<StringFilter>;
  inventoryQuantity?: InputMaybe<FloatFilter>;
  option1?: InputMaybe<StringFilter>;
  option2?: InputMaybe<StringFilter>;
  option3?: InputMaybe<StringFilter>;
  position?: InputMaybe<FloatFilter>;
  presentmentPrices?: InputMaybe<JsonFilter>;
  price?: InputMaybe<StringFilter>;
  product?: InputMaybe<IdFilter>;
  productId?: InputMaybe<IdFilter>;
  productImage?: InputMaybe<IdFilter>;
  productImageId?: InputMaybe<IdFilter>;
  selectedOptions?: InputMaybe<JsonFilter>;
  shop?: InputMaybe<IdFilter>;
  shopId?: InputMaybe<IdFilter>;
  shopifyCreatedAt?: InputMaybe<DateTimeFilter>;
  shopifyUpdatedAt?: InputMaybe<DateTimeFilter>;
  sku?: InputMaybe<StringFilter>;
  taxCode?: InputMaybe<StringFilter>;
  taxable?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ShopifyProductVariantSort = {
  /** Sort the results by the barcode field. Defaults to ascending (smallest value first). */
  barcode?: InputMaybe<SortOrder>;
  /** Sort the results by the compareAtPrice field. Defaults to ascending (smallest value first). */
  compareAtPrice?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the inventoryPolicy field. Defaults to ascending (smallest value first). */
  inventoryPolicy?: InputMaybe<SortOrder>;
  /** Sort the results by the inventoryQuantity field. Defaults to ascending (smallest value first). */
  inventoryQuantity?: InputMaybe<SortOrder>;
  /** Sort the results by the option1 field. Defaults to ascending (smallest value first). */
  option1?: InputMaybe<SortOrder>;
  /** Sort the results by the option2 field. Defaults to ascending (smallest value first). */
  option2?: InputMaybe<SortOrder>;
  /** Sort the results by the option3 field. Defaults to ascending (smallest value first). */
  option3?: InputMaybe<SortOrder>;
  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: InputMaybe<SortOrder>;
  /** Sort the results by the presentmentPrices field. Defaults to ascending (smallest value first). */
  presentmentPrices?: InputMaybe<SortOrder>;
  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: InputMaybe<SortOrder>;
  /** Sort the results by the selectedOptions field. Defaults to ascending (smallest value first). */
  selectedOptions?: InputMaybe<SortOrder>;
  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: InputMaybe<SortOrder>;
  /** Sort the results by the taxCode field. Defaults to ascending (smallest value first). */
  taxCode?: InputMaybe<SortOrder>;
  /** Sort the results by the taxable field. Defaults to ascending (smallest value first). */
  taxable?: InputMaybe<SortOrder>;
  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShopifyShop = {
  __typename?: "ShopifyShop";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  address1?: Maybe<Scalars["String"]["output"]>;
  address2?: Maybe<Scalars["String"]["output"]>;
  checkoutApiSupported?: Maybe<Scalars["Boolean"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  cookieConsentLevel?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  countryCode?: Maybe<Scalars["String"]["output"]>;
  countryName?: Maybe<Scalars["String"]["output"]>;
  countyTaxes?: Maybe<Scalars["JSON"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  currency?: Maybe<Scalars["String"]["output"]>;
  customerAccountsV2?: Maybe<Scalars["JSON"]["output"]>;
  customerEmail?: Maybe<Scalars["String"]["output"]>;
  disabledWebhooks?: Maybe<Scalars["JSON"]["output"]>;
  domain?: Maybe<Scalars["String"]["output"]>;
  eligibleForCardReaderGiveaway?: Maybe<Scalars["Boolean"]["output"]>;
  eligibleForPayments?: Maybe<Scalars["Boolean"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  enabledPresentmentCurrencies?: Maybe<Scalars["JSON"]["output"]>;
  finances?: Maybe<Scalars["Boolean"]["output"]>;
  forceSsl?: Maybe<Scalars["Boolean"]["output"]>;
  gdprRequests: ShopifyGdprRequestConnection;
  googleAppsDomain?: Maybe<Scalars["String"]["output"]>;
  googleAppsLoginEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  grantedScopes?: Maybe<Scalars["JSON"]["output"]>;
  hasDiscounts?: Maybe<Scalars["Boolean"]["output"]>;
  hasGiftCards?: Maybe<Scalars["Boolean"]["output"]>;
  hasStorefront?: Maybe<Scalars["Boolean"]["output"]>;
  ianaTimezone?: Maybe<Scalars["String"]["output"]>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars["GadgetID"]["output"];
  installedViaApiKey?: Maybe<Scalars["String"]["output"]>;
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
  marketingSmsContentEnabledAtCheckout?: Maybe<Scalars["Boolean"]["output"]>;
  moneyFormat?: Maybe<Scalars["String"]["output"]>;
  moneyInEmailsFormat?: Maybe<Scalars["String"]["output"]>;
  moneyWithCurrencyFormat?: Maybe<Scalars["String"]["output"]>;
  moneyWithCurrencyInEmailsFormat?: Maybe<Scalars["String"]["output"]>;
  multiLocationEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  myshopifyDomain?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  passwordEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  planDisplayName?: Maybe<Scalars["String"]["output"]>;
  planName?: Maybe<Scalars["String"]["output"]>;
  preLaunchEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  primaryLocale?: Maybe<Scalars["String"]["output"]>;
  productImages: ShopifyProductImageConnection;
  productOptions: ShopifyProductOptionConnection;
  productVariants: ShopifyProductVariantConnection;
  products: ShopifyProductConnection;
  province?: Maybe<Scalars["String"]["output"]>;
  provinceCode?: Maybe<Scalars["String"]["output"]>;
  registeredWebhooks?: Maybe<Scalars["JSON"]["output"]>;
  requiresExtraPaymentsAgreement?: Maybe<Scalars["Boolean"]["output"]>;
  setupRequired?: Maybe<Scalars["Boolean"]["output"]>;
  shopOwner?: Maybe<Scalars["String"]["output"]>;
  shopifyCreatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  shopifyUpdatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars["RecordState"]["output"];
  syncs: ShopifySyncConnection;
  taxShipping?: Maybe<Scalars["Boolean"]["output"]>;
  taxesIncluded?: Maybe<Scalars["Boolean"]["output"]>;
  timezone?: Maybe<Scalars["String"]["output"]>;
  transactionalSmsDisabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  weightUnit?: Maybe<Scalars["String"]["output"]>;
  zipCode?: Maybe<Scalars["String"]["output"]>;
};

export type ShopifyShopGdprRequestsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyGdprRequestFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyGdprRequestSort>>;
};

export type ShopifyShopProductImagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductImageFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductImageSort>>;
};

export type ShopifyShopProductOptionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductOptionFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductOptionSort>>;
};

export type ShopifyShopProductVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductVariantFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductVariantSort>>;
};

export type ShopifyShopProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifyProductFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifyProductSort>>;
};

export type ShopifyShopSyncsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<ShopifySyncFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<ShopifySyncSort>>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type ShopifyShopBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

/** A connection to a list of ShopifyShop items. */
export type ShopifyShopConnection = {
  __typename?: "ShopifyShopConnection";
  /** A list of edges. */
  edges: Array<ShopifyShopEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a ShopifyShop connection. */
export type ShopifyShopEdge = {
  __typename?: "ShopifyShopEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ShopifyShop;
};

export type ShopifyShopFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopifyShopFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<ShopifyShopFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopifyShopFilter>>>;
  address1?: InputMaybe<StringFilter>;
  address2?: InputMaybe<StringFilter>;
  checkoutApiSupported?: InputMaybe<BooleanFilter>;
  city?: InputMaybe<StringFilter>;
  cookieConsentLevel?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  countryCode?: InputMaybe<StringFilter>;
  countryName?: InputMaybe<StringFilter>;
  countyTaxes?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currency?: InputMaybe<StringFilter>;
  customerAccountsV2?: InputMaybe<JsonFilter>;
  customerEmail?: InputMaybe<StringFilter>;
  disabledWebhooks?: InputMaybe<JsonFilter>;
  domain?: InputMaybe<StringFilter>;
  eligibleForCardReaderGiveaway?: InputMaybe<BooleanFilter>;
  eligibleForPayments?: InputMaybe<BooleanFilter>;
  email?: InputMaybe<StringFilter>;
  enabledPresentmentCurrencies?: InputMaybe<JsonFilter>;
  finances?: InputMaybe<BooleanFilter>;
  forceSsl?: InputMaybe<BooleanFilter>;
  googleAppsDomain?: InputMaybe<StringFilter>;
  googleAppsLoginEnabled?: InputMaybe<BooleanFilter>;
  grantedScopes?: InputMaybe<JsonFilter>;
  hasDiscounts?: InputMaybe<BooleanFilter>;
  hasGiftCards?: InputMaybe<BooleanFilter>;
  hasStorefront?: InputMaybe<BooleanFilter>;
  ianaTimezone?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  installedViaApiKey?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<FloatFilter>;
  longitude?: InputMaybe<FloatFilter>;
  marketingSmsContentEnabledAtCheckout?: InputMaybe<BooleanFilter>;
  moneyFormat?: InputMaybe<StringFilter>;
  moneyInEmailsFormat?: InputMaybe<StringFilter>;
  moneyWithCurrencyFormat?: InputMaybe<StringFilter>;
  moneyWithCurrencyInEmailsFormat?: InputMaybe<StringFilter>;
  multiLocationEnabled?: InputMaybe<BooleanFilter>;
  myshopifyDomain?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  passwordEnabled?: InputMaybe<BooleanFilter>;
  phone?: InputMaybe<StringFilter>;
  planDisplayName?: InputMaybe<StringFilter>;
  planName?: InputMaybe<StringFilter>;
  preLaunchEnabled?: InputMaybe<BooleanFilter>;
  primaryLocale?: InputMaybe<StringFilter>;
  province?: InputMaybe<StringFilter>;
  provinceCode?: InputMaybe<StringFilter>;
  registeredWebhooks?: InputMaybe<JsonFilter>;
  requiresExtraPaymentsAgreement?: InputMaybe<BooleanFilter>;
  setupRequired?: InputMaybe<BooleanFilter>;
  shopOwner?: InputMaybe<StringFilter>;
  shopifyCreatedAt?: InputMaybe<DateTimeFilter>;
  shopifyUpdatedAt?: InputMaybe<DateTimeFilter>;
  source?: InputMaybe<StringFilter>;
  state?: InputMaybe<StateFilter>;
  taxShipping?: InputMaybe<BooleanFilter>;
  taxesIncluded?: InputMaybe<BooleanFilter>;
  timezone?: InputMaybe<StringFilter>;
  transactionalSmsDisabled?: InputMaybe<BooleanFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  weightUnit?: InputMaybe<StringFilter>;
  zipCode?: InputMaybe<StringFilter>;
};

export type ShopifyShopSort = {
  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: InputMaybe<SortOrder>;
  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: InputMaybe<SortOrder>;
  /** Sort the results by the checkoutApiSupported field. Defaults to ascending (smallest value first). */
  checkoutApiSupported?: InputMaybe<SortOrder>;
  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: InputMaybe<SortOrder>;
  /** Sort the results by the cookieConsentLevel field. Defaults to ascending (smallest value first). */
  cookieConsentLevel?: InputMaybe<SortOrder>;
  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: InputMaybe<SortOrder>;
  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: InputMaybe<SortOrder>;
  /** Sort the results by the countryName field. Defaults to ascending (smallest value first). */
  countryName?: InputMaybe<SortOrder>;
  /** Sort the results by the countyTaxes field. Defaults to ascending (smallest value first). */
  countyTaxes?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: InputMaybe<SortOrder>;
  /** Sort the results by the customerAccountsV2 field. Defaults to ascending (smallest value first). */
  customerAccountsV2?: InputMaybe<SortOrder>;
  /** Sort the results by the customerEmail field. Defaults to ascending (smallest value first). */
  customerEmail?: InputMaybe<SortOrder>;
  /** Sort the results by the disabledWebhooks field. Defaults to ascending (smallest value first). */
  disabledWebhooks?: InputMaybe<SortOrder>;
  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: InputMaybe<SortOrder>;
  /** Sort the results by the eligibleForCardReaderGiveaway field. Defaults to ascending (smallest value first). */
  eligibleForCardReaderGiveaway?: InputMaybe<SortOrder>;
  /** Sort the results by the eligibleForPayments field. Defaults to ascending (smallest value first). */
  eligibleForPayments?: InputMaybe<SortOrder>;
  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: InputMaybe<SortOrder>;
  /** Sort the results by the enabledPresentmentCurrencies field. Defaults to ascending (smallest value first). */
  enabledPresentmentCurrencies?: InputMaybe<SortOrder>;
  /** Sort the results by the finances field. Defaults to ascending (smallest value first). */
  finances?: InputMaybe<SortOrder>;
  /** Sort the results by the forceSsl field. Defaults to ascending (smallest value first). */
  forceSsl?: InputMaybe<SortOrder>;
  /** Sort the results by the googleAppsDomain field. Defaults to ascending (smallest value first). */
  googleAppsDomain?: InputMaybe<SortOrder>;
  /** Sort the results by the googleAppsLoginEnabled field. Defaults to ascending (smallest value first). */
  googleAppsLoginEnabled?: InputMaybe<SortOrder>;
  /** Sort the results by the grantedScopes field. Defaults to ascending (smallest value first). */
  grantedScopes?: InputMaybe<SortOrder>;
  /** Sort the results by the hasDiscounts field. Defaults to ascending (smallest value first). */
  hasDiscounts?: InputMaybe<SortOrder>;
  /** Sort the results by the hasGiftCards field. Defaults to ascending (smallest value first). */
  hasGiftCards?: InputMaybe<SortOrder>;
  /** Sort the results by the hasStorefront field. Defaults to ascending (smallest value first). */
  hasStorefront?: InputMaybe<SortOrder>;
  /** Sort the results by the ianaTimezone field. Defaults to ascending (smallest value first). */
  ianaTimezone?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the installedViaApiKey field. Defaults to ascending (smallest value first). */
  installedViaApiKey?: InputMaybe<SortOrder>;
  /** Sort the results by the latitude field. Defaults to ascending (smallest value first). */
  latitude?: InputMaybe<SortOrder>;
  /** Sort the results by the longitude field. Defaults to ascending (smallest value first). */
  longitude?: InputMaybe<SortOrder>;
  /** Sort the results by the marketingSmsContentEnabledAtCheckout field. Defaults to ascending (smallest value first). */
  marketingSmsContentEnabledAtCheckout?: InputMaybe<SortOrder>;
  /** Sort the results by the moneyFormat field. Defaults to ascending (smallest value first). */
  moneyFormat?: InputMaybe<SortOrder>;
  /** Sort the results by the moneyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyInEmailsFormat?: InputMaybe<SortOrder>;
  /** Sort the results by the moneyWithCurrencyFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyFormat?: InputMaybe<SortOrder>;
  /** Sort the results by the moneyWithCurrencyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyInEmailsFormat?: InputMaybe<SortOrder>;
  /** Sort the results by the multiLocationEnabled field. Defaults to ascending (smallest value first). */
  multiLocationEnabled?: InputMaybe<SortOrder>;
  /** Sort the results by the myshopifyDomain field. Defaults to ascending (smallest value first). */
  myshopifyDomain?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the passwordEnabled field. Defaults to ascending (smallest value first). */
  passwordEnabled?: InputMaybe<SortOrder>;
  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: InputMaybe<SortOrder>;
  /** Sort the results by the planDisplayName field. Defaults to ascending (smallest value first). */
  planDisplayName?: InputMaybe<SortOrder>;
  /** Sort the results by the planName field. Defaults to ascending (smallest value first). */
  planName?: InputMaybe<SortOrder>;
  /** Sort the results by the preLaunchEnabled field. Defaults to ascending (smallest value first). */
  preLaunchEnabled?: InputMaybe<SortOrder>;
  /** Sort the results by the primaryLocale field. Defaults to ascending (smallest value first). */
  primaryLocale?: InputMaybe<SortOrder>;
  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: InputMaybe<SortOrder>;
  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: InputMaybe<SortOrder>;
  /** Sort the results by the registeredWebhooks field. Defaults to ascending (smallest value first). */
  registeredWebhooks?: InputMaybe<SortOrder>;
  /** Sort the results by the requiresExtraPaymentsAgreement field. Defaults to ascending (smallest value first). */
  requiresExtraPaymentsAgreement?: InputMaybe<SortOrder>;
  /** Sort the results by the setupRequired field. Defaults to ascending (smallest value first). */
  setupRequired?: InputMaybe<SortOrder>;
  /** Sort the results by the shopOwner field. Defaults to ascending (smallest value first). */
  shopOwner?: InputMaybe<SortOrder>;
  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: InputMaybe<SortOrder>;
  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: InputMaybe<SortOrder>;
  /** Sort the results by the taxShipping field. Defaults to ascending (smallest value first). */
  taxShipping?: InputMaybe<SortOrder>;
  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: InputMaybe<SortOrder>;
  /** Sort the results by the timezone field. Defaults to ascending (smallest value first). */
  timezone?: InputMaybe<SortOrder>;
  /** Sort the results by the transactionalSmsDisabled field. Defaults to ascending (smallest value first). */
  transactionalSmsDisabled?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
  weightUnit?: InputMaybe<SortOrder>;
  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: InputMaybe<SortOrder>;
};

export type ShopifySync = {
  __typename?: "ShopifySync";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  domain: Scalars["String"]["output"];
  errorDetails?: Maybe<Scalars["String"]["output"]>;
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  force?: Maybe<Scalars["Boolean"]["output"]>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  models?: Maybe<Scalars["JSON"]["output"]>;
  shop: ShopifyShop;
  shopId: Scalars["GadgetID"]["output"];
  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars["RecordState"]["output"];
  /** DateTime that this sync was run from */
  syncSince?: Maybe<Scalars["DateTime"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of ShopifySync items. */
export type ShopifySyncConnection = {
  __typename?: "ShopifySyncConnection";
  /** A list of edges. */
  edges: Array<ShopifySyncEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a ShopifySync connection. */
export type ShopifySyncEdge = {
  __typename?: "ShopifySyncEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ShopifySync;
};

export type ShopifySyncFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopifySyncFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<ShopifySyncFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopifySyncFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  domain?: InputMaybe<StringFilter>;
  errorDetails?: InputMaybe<StringFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  force?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  models?: InputMaybe<JsonFilter>;
  shop?: InputMaybe<IdFilter>;
  shopId?: InputMaybe<IdFilter>;
  state?: InputMaybe<StateFilter>;
  syncSince?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ShopifySyncSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: InputMaybe<SortOrder>;
  /** Sort the results by the errorDetails field. Defaults to ascending (smallest value first). */
  errorDetails?: InputMaybe<SortOrder>;
  /** Sort the results by the errorMessage field. Defaults to ascending (smallest value first). */
  errorMessage?: InputMaybe<SortOrder>;
  /** Sort the results by the force field. Defaults to ascending (smallest value first). */
  force?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the models field. Defaults to ascending (smallest value first). */
  models?: InputMaybe<SortOrder>;
  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: InputMaybe<SortOrder>;
  /** Sort the results by the syncSince field. Defaults to ascending (smallest value first). */
  syncSince?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type SiblingModelBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedSiblingModelCreateInput>;
  delete?: InputMaybe<NestedSiblingModelDeleteInput>;
  update?: InputMaybe<NestedSiblingModelUpdateInput>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type SiblingModelHasManyThroughInput = {
  create?: InputMaybe<NestedSiblingModelCreateInput>;
  delete?: InputMaybe<NestedSiblingModelDeleteInput>;
  update?: InputMaybe<NestedSiblingModelUpdateInput>;
};

export type SignInUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  googleImageUrl?: InputMaybe<Scalars["String"]["input"]>;
  googleProfileId?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastSignedIn?: InputMaybe<Scalars["DateTime"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type SignInUserResult = {
  __typename?: "SignInUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
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
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<User>;
};

export type SignUpUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  googleImageUrl?: InputMaybe<Scalars["String"]["input"]>;
  googleProfileId?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastSignedIn?: InputMaybe<Scalars["DateTime"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type SignUpUserResult = UpsertUserResult & {
  __typename?: "SignUpUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
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

export type SingleEnumFilter = {
  equals?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  notEquals?: InputMaybe<Scalars["String"]["input"]>;
};

/** A sort order for a field. Can be Ascending or Descending. */
export enum SortOrder {
  Ascending = "Ascending",
  Descending = "Descending",
}

/** Input object supporting setting or updating related model record on a relationship field */
export type StadiumBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedStadiumCreateInput>;
  delete?: InputMaybe<NestedStadiumDeleteInput>;
  update?: InputMaybe<NestedStadiumUpdateInput>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type StadiumHasOneInput = {
  create?: InputMaybe<NestedStadiumCreateInput>;
  delete?: InputMaybe<NestedStadiumDeleteInput>;
  update?: InputMaybe<NestedStadiumUpdateInput>;
};

export type StateFilter = {
  inState?: InputMaybe<Scalars["String"]["input"]>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** One file that has been stored and attached to a record */
export type StoredFile = {
  __typename?: "StoredFile";
  /** The size of this file in bytes. */
  byteSize: Scalars["Int"]["output"];
  /** The file name of this file. */
  fileName: Scalars["String"]["output"];
  /** The size of this file in bytes. */
  humanSize: Scalars["String"]["output"];
  /** The content type of the file. */
  mimeType: Scalars["String"]["output"];
  /** The URL to retrieve the attached file. Gets the original, unmodified file. */
  url: Scalars["String"]["output"];
};

/** Input object supporting setting or updating a File field. */
export type StoredFileInput = {
  /** Sets the file contents using this string, interpreting the string as base64 encoded bytes. This is useful for creating files quickly and easily if you have the file contents available already, but, it doesn't support files larger than 10MB, and is slower to process for the backend. Using multipart file uploads or direct-to-storage file uploads is preferable. */
  base64?: InputMaybe<Scalars["String"]["input"]>;
  /** Sets the file contents by fetching a remote URL and saving a copy to cloud storage. File downloads happen as the request is processed so they can be validated, which means large files can take some time to download from the existing URL. If the file can't be fetched from this URL, the action will fail. */
  copyURL?: InputMaybe<Scalars["URL"]["input"]>;
  /** Sets the file contents using a token from a separate upload request made with the Gadget storage service. Uploading files while a user is completing the rest of a form gives a great user experience and supports much larger files, but requires client side code to complete the upload, and then pass the returned token for this field. */
  directUploadToken?: InputMaybe<Scalars["String"]["input"]>;
  /** Sets the file contents using binary bytes sent along side a GraphQL mutation as a multipart POST request. Gadget expects this multipart POST request to be formatted according to the GraphQL multipart request spec defined at https://github.com/jaydenseric/graphql-multipart-request-spec. Sending files as a multipart POST requests is supported natively by the generated Gadget JS client using File objects as variables in API calls. This method supports files up to 100MB. */
  file?: InputMaybe<Scalars["Upload"]["input"]>;
  /** Sets this file's stored name, which will then be used as the file name when serving the file during read requests. If not set, Gadget will infer a filename if possible. */
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  /** Sets this file's mime type, which will then be used when serving the file during read requests as the `Content-Type` HTTP header. If not set, Gadget will infer a content type based on the file's contents. */
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringEqualsFilter = {
  equals?: InputMaybe<Scalars["String"]["input"]>;
};

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

export type UninstallShopifyShopResult = {
  __typename?: "UninstallShopifyShopResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyShop?: Maybe<ShopifyShop>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateAutoTableTestInput = {
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  enum?: InputMaybe<Array<Scalars["AutoTableTestEnumEnum"]["input"]>>;
  es?: InputMaybe<Scalars["String"]["input"]>;
  file?: InputMaybe<StoredFileInput>;
  hasMany?: InputMaybe<Array<InputMaybe<AutoTableTestRelatedModelHasManyInput>>>;
  hasOne?: InputMaybe<AutoTableTestRelatedModelHasOneInput>;
  json?: InputMaybe<Scalars["JSON"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  pwd?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  rl?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rt?: InputMaybe<RichTextInput>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  vect?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type UpdateAutoTableTestRelatedModelInput = {
  belongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  manyBelongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  someBool?: InputMaybe<Scalars["Boolean"]["input"]>;
  someNumber?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UpdateAutoTableTestRelatedModelResult = UpsertAutoTableTestRelatedModelResult & {
  __typename?: "UpdateAutoTableTestRelatedModelResult";
  _autoTableTestRelatedModel?: Maybe<AutoTableTestRelatedModel>;
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateAutoTableTestResult = UpsertAutoTableTestResult & {
  __typename?: "UpdateAutoTableTestResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  autoTableTest?: Maybe<AutoTableTest>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateGameCityInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  stadium?: InputMaybe<StadiumHasOneInput>;
};

export type UpdateGameCityResult = UpsertGameCityResult & {
  __typename?: "UpdateGameCityResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<GameCity>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateGamePlayerInput = {
  currentRound?: InputMaybe<RoundBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateGamePlayerResult = UpsertGamePlayerResult & {
  __typename?: "UpdateGamePlayerResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  player?: Maybe<GamePlayer>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateGameRoundInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  players?: InputMaybe<Array<InputMaybe<PlayerHasManyInput>>>;
  stadium?: InputMaybe<StadiumBelongsToInput>;
};

export type UpdateGameRoundResult = UpsertGameRoundResult & {
  __typename?: "UpdateGameRoundResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  round?: Maybe<GameRound>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateGameStadiumInput = {
  city?: InputMaybe<CityBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  photo?: InputMaybe<StoredFileInput>;
  rounds?: InputMaybe<Array<InputMaybe<RoundHasManyInput>>>;
  tags?: InputMaybe<Array<Scalars["StadiumTagsEnum"]["input"]>>;
  type?: InputMaybe<Scalars["StadiumTypeEnum"]["input"]>;
};

export type UpdateGameStadiumResult = UpsertGameStadiumResult & {
  __typename?: "UpdateGameStadiumResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<GameStadium>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateGizmoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  orientation?: InputMaybe<Scalars["String"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type UpdateGizmoResult = UpsertGizmoResult & {
  __typename?: "UpdateGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateHasManyThroughBaseModelInput = {
  baseModelHmtField?: InputMaybe<Array<InputMaybe<SiblingModelHasManyThroughInput>>>;
  baseModelName?: InputMaybe<Scalars["String"]["input"]>;
  joinerModel?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  joinerModels?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
};

export type UpdateHasManyThroughBaseModelResult = UpsertHasManyThroughBaseModelResult & {
  __typename?: "UpdateHasManyThroughBaseModelResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  baseModel?: Maybe<HasManyThroughBaseModel>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateHasManyThroughJoinerModelInput = {
  joinerBelongsToBase?: InputMaybe<BaseModelBelongsToInput>;
  joinerBelongsToSibling?: InputMaybe<SiblingModelBelongsToInput>;
};

export type UpdateHasManyThroughJoinerModelResult = UpsertHasManyThroughJoinerModelResult & {
  __typename?: "UpdateHasManyThroughJoinerModelResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  joinerModel?: Maybe<HasManyThroughJoinerModel>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateHasManyThroughSiblingModelInput = {
  joinerModel?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  joinerModels?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  siblingModelHmtField?: InputMaybe<Array<InputMaybe<BaseModelHasManyThroughInput>>>;
};

export type UpdateHasManyThroughSiblingModelResult = UpsertHasManyThroughSiblingModelResult & {
  __typename?: "UpdateHasManyThroughSiblingModelResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  siblingModel?: Maybe<HasManyThroughSiblingModel>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateModelAResult = UpsertModelAResult & {
  __typename?: "UpdateModelAResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  modelA?: Maybe<ModelA>;
  success: Scalars["Boolean"]["output"];
};

export type UpdatePartInput = {
  count?: InputMaybe<Scalars["Float"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdatePartResult = UpsertPartResult & {
  __typename?: "UpdatePartResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  part?: Maybe<Part>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateSectionInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type UpdateSectionResult = UpsertSectionResult & {
  __typename?: "UpdateSectionResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  section?: Maybe<Section>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateShopifyGdprRequestResult = UpsertShopifyGdprRequestResult & {
  __typename?: "UpdateShopifyGdprRequestResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyGdprRequest?: Maybe<ShopifyGdprRequest>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateShopifyProductImageResult = UpsertShopifyProductImageResult & {
  __typename?: "UpdateShopifyProductImageResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductImage?: Maybe<ShopifyProductImage>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateShopifyProductOptionResult = UpsertShopifyProductOptionResult & {
  __typename?: "UpdateShopifyProductOptionResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductOption?: Maybe<ShopifyProductOption>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateShopifyProductResult = UpsertShopifyProductResult & {
  __typename?: "UpdateShopifyProductResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProduct?: Maybe<ShopifyProduct>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateShopifyProductVariantResult = UpsertShopifyProductVariantResult & {
  __typename?: "UpdateShopifyProductVariantResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyProductVariant?: Maybe<ShopifyProductVariant>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateShopifyShopResult = UpsertShopifyShopResult & {
  __typename?: "UpdateShopifyShopResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  shopifyShop?: Maybe<ShopifyShop>;
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

export type UpdateUserResult = UpsertUserResult & {
  __typename?: "UpdateUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
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

export type UpdateWidgetResult = UpsertWidgetResult & {
  __typename?: "UpdateWidgetResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

export type UpdateWithCustomParamsAutoTableTestInput = {
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  enum?: InputMaybe<Array<Scalars["AutoTableTestEnumEnum"]["input"]>>;
  es?: InputMaybe<Scalars["String"]["input"]>;
  file?: InputMaybe<StoredFileInput>;
  hasMany?: InputMaybe<Array<InputMaybe<AutoTableTestRelatedModelHasManyInput>>>;
  hasOne?: InputMaybe<AutoTableTestRelatedModelHasOneInput>;
  json?: InputMaybe<Scalars["JSON"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  pwd?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  rl?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rt?: InputMaybe<RichTextInput>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  vect?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type UpdateWithCustomParamsAutoTableTestResult = {
  __typename?: "UpdateWithCustomParamsAutoTableTestResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  autoTableTest?: Maybe<AutoTableTest>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertAutoTableTestInput = {
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  enum?: InputMaybe<Array<Scalars["AutoTableTestEnumEnum"]["input"]>>;
  es?: InputMaybe<Scalars["String"]["input"]>;
  file?: InputMaybe<StoredFileInput>;
  hasMany?: InputMaybe<Array<InputMaybe<AutoTableTestRelatedModelHasManyInput>>>;
  hasOne?: InputMaybe<AutoTableTestRelatedModelHasOneInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  json?: InputMaybe<Scalars["JSON"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  pwd?: InputMaybe<Scalars["String"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  rl?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rt?: InputMaybe<RichTextInput>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  vect?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type UpsertAutoTableTestRelatedModelInput = {
  belongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  manyBelongsToParent?: InputMaybe<AutoTableTestBelongsToInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  someBool?: InputMaybe<Scalars["Boolean"]["input"]>;
  someNumber?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UpsertAutoTableTestRelatedModelResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertAutoTableTestResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertError = UpsertAutoTableTestRelatedModelResult &
  UpsertAutoTableTestResult &
  UpsertGameCityResult &
  UpsertGamePlayerResult &
  UpsertGameRoundResult &
  UpsertGameStadiumResult &
  UpsertGizmoResult &
  UpsertHasManyThroughBaseModelResult &
  UpsertHasManyThroughJoinerModelResult &
  UpsertHasManyThroughSiblingModelResult &
  UpsertModelAResult &
  UpsertPartResult &
  UpsertSectionResult &
  UpsertShopifyGdprRequestResult &
  UpsertShopifyProductImageResult &
  UpsertShopifyProductOptionResult &
  UpsertShopifyProductResult &
  UpsertShopifyProductVariantResult &
  UpsertShopifyShopResult &
  UpsertShopifySyncResult &
  UpsertUserResult &
  UpsertWidgetResult & {
    __typename?: "UpsertError";
    actionRun?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
  };

export type UpsertGameCityInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  stadium?: InputMaybe<StadiumHasOneInput>;
};

export type UpsertGameCityResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertGamePlayerInput = {
  currentRound?: InputMaybe<RoundBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpsertGamePlayerResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertGameRoundInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  players?: InputMaybe<Array<InputMaybe<PlayerHasManyInput>>>;
  stadium?: InputMaybe<StadiumBelongsToInput>;
};

export type UpsertGameRoundResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertGameStadiumInput = {
  city?: InputMaybe<CityBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  photo?: InputMaybe<StoredFileInput>;
  rounds?: InputMaybe<Array<InputMaybe<RoundHasManyInput>>>;
  tags?: InputMaybe<Array<Scalars["StadiumTagsEnum"]["input"]>>;
  type?: InputMaybe<Scalars["StadiumTypeEnum"]["input"]>;
};

export type UpsertGameStadiumResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertGizmoInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  orientation?: InputMaybe<Scalars["String"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type UpsertGizmoResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertHasManyThroughBaseModelInput = {
  baseModelHmtField?: InputMaybe<Array<InputMaybe<SiblingModelHasManyThroughInput>>>;
  baseModelName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  joinerModel?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  joinerModels?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
};

export type UpsertHasManyThroughBaseModelResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertHasManyThroughJoinerModelInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  joinerBelongsToBase?: InputMaybe<BaseModelBelongsToInput>;
  joinerBelongsToSibling?: InputMaybe<SiblingModelBelongsToInput>;
};

export type UpsertHasManyThroughJoinerModelResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertHasManyThroughSiblingModelInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  joinerModel?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  joinerModels?: InputMaybe<Array<InputMaybe<JoinerModelHasManyInput>>>;
  siblingModelHmtField?: InputMaybe<Array<InputMaybe<BaseModelHasManyThroughInput>>>;
};

export type UpsertHasManyThroughSiblingModelResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertModelAInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

export type UpsertModelAResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertPartInput = {
  count?: InputMaybe<Scalars["Float"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpsertPartResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertSectionInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type UpsertSectionResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertShopifyGdprRequestResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertShopifyProductImageResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertShopifyProductOptionResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertShopifyProductResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertShopifyProductVariantResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertShopifyShopResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertShopifySyncInput = {
  domain?: InputMaybe<Scalars["String"]["input"]>;
  errorDetails?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  force?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  models?: InputMaybe<Scalars["JSON"]["input"]>;
  shop?: InputMaybe<ShopifyShopBelongsToInput>;
  syncSince?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UpsertShopifySyncResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertUserInput = {
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
};

export type UpsertUserResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertWidgetInput = {
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

export type UpsertWidgetResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
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
  alwaysThrowError?: InputMaybe<NestedWidgetAlwaysThrowErrorInput>;
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
  alwaysThrowError?: InputMaybe<NestedWidgetAlwaysThrowErrorInput>;
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

export type RelatedModelFieldFragmentFragment = {
  __typename?: "GadgetModelField";
  name: string;
  apiIdentifier: string;
  fieldType: GadgetFieldType;
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
        relatedModel?: {
          __typename?: "GadgetModel";
          key: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
          defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
          fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
        } | null;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetDateTimeConfig";
        includeTime: boolean;
        fieldType: GadgetFieldType;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetEnumConfig";
        allowMultiple: boolean;
        allowOther: boolean;
        fieldType: GadgetFieldType;
        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetGenericFieldConfig";
        fieldType: GadgetFieldType;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetHasManyConfig";
        isJoinModelHasManyField: boolean;
        fieldType: GadgetFieldType;
        relatedModel?: {
          __typename?: "GadgetModel";
          key: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
          defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
          fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
        } | null;
        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetHasManyThroughConfig";
        fieldType: GadgetFieldType;
        relatedModel?: {
          __typename?: "GadgetModel";
          key: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
          defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
          fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
        } | null;
        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        joinModel?: {
          __typename?: "GadgetModel";
          key: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
          defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
        } | null;
        inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetHasOneConfig";
        fieldType: GadgetFieldType;
        relatedModel?: {
          __typename?: "GadgetModel";
          key: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
          defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
          fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
        } | null;
        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetNumberConfig";
        decimals?: number | null;
        fieldType: GadgetFieldType;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetObjectFieldConfig";
        fieldType: GadgetFieldType;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      };
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
        relatedModel?: {
          __typename?: "GadgetModel";
          key: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
          defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
          fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
        } | null;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetDateTimeConfig";
        includeTime: boolean;
        fieldType: GadgetFieldType;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetEnumConfig";
        allowMultiple: boolean;
        allowOther: boolean;
        fieldType: GadgetFieldType;
        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetGenericFieldConfig";
        fieldType: GadgetFieldType;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetHasManyConfig";
        isJoinModelHasManyField: boolean;
        fieldType: GadgetFieldType;
        relatedModel?: {
          __typename?: "GadgetModel";
          key: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
          defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
          fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
        } | null;
        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetHasManyThroughConfig";
        fieldType: GadgetFieldType;
        relatedModel?: {
          __typename?: "GadgetModel";
          key: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
          defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
          fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
        } | null;
        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        joinModel?: {
          __typename?: "GadgetModel";
          key: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
          defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
        } | null;
        inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetHasOneConfig";
        fieldType: GadgetFieldType;
        relatedModel?: {
          __typename?: "GadgetModel";
          key: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
          defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
          fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
        } | null;
        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetNumberConfig";
        decimals?: number | null;
        fieldType: GadgetFieldType;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      }
    | {
        __typename: "GadgetObjectFieldConfig";
        fieldType: GadgetFieldType;
        validations: Array<
          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
          | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
          | null
        >;
      };
};

export type FieldMetadataFragment = FieldMetadata_GadgetModelField_Fragment | FieldMetadata_GadgetObjectField_Fragment;

export type GetModelMetadataQueryVariables = Exact<{
  apiIdentifier: Scalars["String"]["input"];
  namespace?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
  includeRelatedFields: Scalars["Boolean"]["input"];
}>;

export type GetModelMetadataQuery = {
  __typename?: "Query";
  gadgetMeta: {
    __typename?: "GadgetApplicationMeta";
    model?: {
      __typename?: "GadgetModel";
      apiIdentifier: string;
      namespace?: Array<string> | null;
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
              relatedModel?: {
                __typename?: "GadgetModel";
                key: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
                defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
              } | null;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetDateTimeConfig";
              includeTime: boolean;
              fieldType: GadgetFieldType;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetEnumConfig";
              allowMultiple: boolean;
              allowOther: boolean;
              fieldType: GadgetFieldType;
              options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetGenericFieldConfig";
              fieldType: GadgetFieldType;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetHasManyConfig";
              isJoinModelHasManyField: boolean;
              fieldType: GadgetFieldType;
              relatedModel?: {
                __typename?: "GadgetModel";
                key: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
                defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
              } | null;
              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetHasManyThroughConfig";
              fieldType: GadgetFieldType;
              relatedModel?: {
                __typename?: "GadgetModel";
                key: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
                defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
              } | null;
              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              joinModel?: {
                __typename?: "GadgetModel";
                key: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
                defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
              } | null;
              inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetHasOneConfig";
              fieldType: GadgetFieldType;
              relatedModel?: {
                __typename?: "GadgetModel";
                key: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
                defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
              } | null;
              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetNumberConfig";
              decimals?: number | null;
              fieldType: GadgetFieldType;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetObjectFieldConfig";
              fieldType: GadgetFieldType;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            };
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
    | { __typename: "GadgetHasManyThroughConfig" }
    | { __typename: "GadgetHasOneConfig" }
    | { __typename: "GadgetNumberConfig" }
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
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetDateTimeConfig";
                includeTime: boolean;
                fieldType: GadgetFieldType;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                allowOther: boolean;
                fieldType: GadgetFieldType;
                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetGenericFieldConfig";
                fieldType: GadgetFieldType;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetHasManyConfig";
                isJoinModelHasManyField: boolean;
                fieldType: GadgetFieldType;
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetHasManyThroughConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                joinModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                } | null;
                inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetHasOneConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetNumberConfig";
                decimals?: number | null;
                fieldType: GadgetFieldType;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
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
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetDateTimeConfig";
                        includeTime: boolean;
                        fieldType: GadgetFieldType;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        allowOther: boolean;
                        fieldType: GadgetFieldType;
                        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetGenericFieldConfig";
                        fieldType: GadgetFieldType;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetHasManyConfig";
                        isJoinModelHasManyField: boolean;
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetHasManyThroughConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        joinModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                        } | null;
                        inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetHasOneConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetNumberConfig";
                        decimals?: number | null;
                        fieldType: GadgetFieldType;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
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
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetDateTimeConfig";
                                includeTime: boolean;
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                allowOther: boolean;
                                fieldType: GadgetFieldType;
                                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetGenericFieldConfig";
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetHasManyConfig";
                                isJoinModelHasManyField: boolean;
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetHasManyThroughConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                joinModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                } | null;
                                inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetHasOneConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetNumberConfig";
                                decimals?: number | null;
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetObjectFieldConfig";
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              };
                        }>;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      };
                }>;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
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
    | { __typename: "GadgetHasManyThroughConfig" }
    | { __typename: "GadgetHasOneConfig" }
    | { __typename: "GadgetNumberConfig" }
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
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetDateTimeConfig";
                includeTime: boolean;
                fieldType: GadgetFieldType;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                allowOther: boolean;
                fieldType: GadgetFieldType;
                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetGenericFieldConfig";
                fieldType: GadgetFieldType;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetHasManyConfig";
                isJoinModelHasManyField: boolean;
                fieldType: GadgetFieldType;
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetHasManyThroughConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                joinModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                } | null;
                inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetHasOneConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetNumberConfig";
                decimals?: number | null;
                fieldType: GadgetFieldType;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
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
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetDateTimeConfig";
                        includeTime: boolean;
                        fieldType: GadgetFieldType;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        allowOther: boolean;
                        fieldType: GadgetFieldType;
                        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetGenericFieldConfig";
                        fieldType: GadgetFieldType;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetHasManyConfig";
                        isJoinModelHasManyField: boolean;
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetHasManyThroughConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        joinModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                        } | null;
                        inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetHasOneConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetNumberConfig";
                        decimals?: number | null;
                        fieldType: GadgetFieldType;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
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
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetDateTimeConfig";
                                includeTime: boolean;
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                allowOther: boolean;
                                fieldType: GadgetFieldType;
                                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetGenericFieldConfig";
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetHasManyConfig";
                                isJoinModelHasManyField: boolean;
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetHasManyThroughConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                joinModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                } | null;
                                inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetHasOneConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetNumberConfig";
                                decimals?: number | null;
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetObjectFieldConfig";
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              };
                        }>;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      };
                }>;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              };
        }>;
      };
};

export type SubFieldsFragment = SubFields_GadgetModelField_Fragment | SubFields_GadgetObjectField_Fragment;

export type ModelActionMetadataQueryVariables = Exact<{
  modelApiIdentifier: Scalars["String"]["input"];
  modelNamespace?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
  action: Scalars["String"]["input"];
  includeRelatedFields: Scalars["Boolean"]["input"];
}>;

export type ModelActionMetadataQuery = {
  __typename?: "Query";
  gadgetMeta: {
    __typename?: "GadgetApplicationMeta";
    model?: {
      __typename?: "GadgetModel";
      name: string;
      apiIdentifier: string;
      defaultRecord: any;
      action?: {
        __typename?: "GadgetAction";
        name: string;
        apiIdentifier: string;
        operatesWithRecordIdentity: boolean;
        isDeleteAction: boolean;
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
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetDateTimeConfig";
                includeTime: boolean;
                fieldType: GadgetFieldType;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                allowOther: boolean;
                fieldType: GadgetFieldType;
                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetGenericFieldConfig";
                fieldType: GadgetFieldType;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetHasManyConfig";
                isJoinModelHasManyField: boolean;
                fieldType: GadgetFieldType;
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetHasManyThroughConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                joinModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                } | null;
                inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetHasOneConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                  __typename?: "GadgetModel";
                  key: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
                  defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                  fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
                } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              }
            | {
                __typename: "GadgetNumberConfig";
                decimals?: number | null;
                fieldType: GadgetFieldType;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
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
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetDateTimeConfig";
                        includeTime: boolean;
                        fieldType: GadgetFieldType;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        allowOther: boolean;
                        fieldType: GadgetFieldType;
                        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetGenericFieldConfig";
                        fieldType: GadgetFieldType;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetHasManyConfig";
                        isJoinModelHasManyField: boolean;
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetHasManyThroughConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        joinModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                        } | null;
                        inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetHasOneConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
                          defaultDisplayField: {
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          };
                          fields?: Array<{
                            __typename?: "GadgetModelField";
                            name: string;
                            apiIdentifier: string;
                            fieldType: GadgetFieldType;
                          }>;
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      }
                    | {
                        __typename: "GadgetNumberConfig";
                        decimals?: number | null;
                        fieldType: GadgetFieldType;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
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
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetDateTimeConfig";
                                includeTime: boolean;
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                allowOther: boolean;
                                fieldType: GadgetFieldType;
                                options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetGenericFieldConfig";
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetHasManyConfig";
                                isJoinModelHasManyField: boolean;
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetHasManyThroughConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                joinModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                } | null;
                                inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetHasOneConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
                                  defaultDisplayField: {
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  };
                                  fields?: Array<{
                                    __typename?: "GadgetModelField";
                                    name: string;
                                    apiIdentifier: string;
                                    fieldType: GadgetFieldType;
                                  }>;
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              }
                            | {
                                __typename: "GadgetNumberConfig";
                                decimals?: number | null;
                                fieldType: GadgetFieldType;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
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
                                        relatedModel?: {
                                          __typename?: "GadgetModel";
                                          key: string;
                                          apiIdentifier: string;
                                          namespace?: Array<string> | null;
                                          defaultDisplayField: {
                                            __typename?: "GadgetModelField";
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                          };
                                          fields?: Array<{
                                            __typename?: "GadgetModelField";
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                          }>;
                                        } | null;
                                        validations: Array<
                                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                          | {
                                              __typename: "GadgetOnlyImageFileFieldValidation";
                                              name: string;
                                              specID: string;
                                              allowAnimatedImages: boolean;
                                            }
                                          | {
                                              __typename: "GadgetRangeFieldValidation";
                                              name: string;
                                              specID: string;
                                              min?: number | null;
                                              max?: number | null;
                                            }
                                          | {
                                              __typename: "GadgetRegexFieldValidation";
                                              name: string;
                                              specID: string;
                                              pattern?: string | null;
                                            }
                                          | null
                                        >;
                                      }
                                    | {
                                        __typename: "GadgetDateTimeConfig";
                                        includeTime: boolean;
                                        fieldType: GadgetFieldType;
                                        validations: Array<
                                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                          | {
                                              __typename: "GadgetOnlyImageFileFieldValidation";
                                              name: string;
                                              specID: string;
                                              allowAnimatedImages: boolean;
                                            }
                                          | {
                                              __typename: "GadgetRangeFieldValidation";
                                              name: string;
                                              specID: string;
                                              min?: number | null;
                                              max?: number | null;
                                            }
                                          | {
                                              __typename: "GadgetRegexFieldValidation";
                                              name: string;
                                              specID: string;
                                              pattern?: string | null;
                                            }
                                          | null
                                        >;
                                      }
                                    | {
                                        __typename: "GadgetEnumConfig";
                                        allowMultiple: boolean;
                                        allowOther: boolean;
                                        fieldType: GadgetFieldType;
                                        options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                                        validations: Array<
                                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                          | {
                                              __typename: "GadgetOnlyImageFileFieldValidation";
                                              name: string;
                                              specID: string;
                                              allowAnimatedImages: boolean;
                                            }
                                          | {
                                              __typename: "GadgetRangeFieldValidation";
                                              name: string;
                                              specID: string;
                                              min?: number | null;
                                              max?: number | null;
                                            }
                                          | {
                                              __typename: "GadgetRegexFieldValidation";
                                              name: string;
                                              specID: string;
                                              pattern?: string | null;
                                            }
                                          | null
                                        >;
                                      }
                                    | {
                                        __typename: "GadgetGenericFieldConfig";
                                        fieldType: GadgetFieldType;
                                        validations: Array<
                                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                          | {
                                              __typename: "GadgetOnlyImageFileFieldValidation";
                                              name: string;
                                              specID: string;
                                              allowAnimatedImages: boolean;
                                            }
                                          | {
                                              __typename: "GadgetRangeFieldValidation";
                                              name: string;
                                              specID: string;
                                              min?: number | null;
                                              max?: number | null;
                                            }
                                          | {
                                              __typename: "GadgetRegexFieldValidation";
                                              name: string;
                                              specID: string;
                                              pattern?: string | null;
                                            }
                                          | null
                                        >;
                                      }
                                    | {
                                        __typename: "GadgetHasManyConfig";
                                        isJoinModelHasManyField: boolean;
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                          __typename?: "GadgetModel";
                                          key: string;
                                          apiIdentifier: string;
                                          namespace?: Array<string> | null;
                                          defaultDisplayField: {
                                            __typename?: "GadgetModelField";
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                          };
                                          fields?: Array<{
                                            __typename?: "GadgetModelField";
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                          }>;
                                        } | null;
                                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                        validations: Array<
                                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                          | {
                                              __typename: "GadgetOnlyImageFileFieldValidation";
                                              name: string;
                                              specID: string;
                                              allowAnimatedImages: boolean;
                                            }
                                          | {
                                              __typename: "GadgetRangeFieldValidation";
                                              name: string;
                                              specID: string;
                                              min?: number | null;
                                              max?: number | null;
                                            }
                                          | {
                                              __typename: "GadgetRegexFieldValidation";
                                              name: string;
                                              specID: string;
                                              pattern?: string | null;
                                            }
                                          | null
                                        >;
                                      }
                                    | {
                                        __typename: "GadgetHasManyThroughConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                          __typename?: "GadgetModel";
                                          key: string;
                                          apiIdentifier: string;
                                          namespace?: Array<string> | null;
                                          defaultDisplayField: {
                                            __typename?: "GadgetModelField";
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                          };
                                          fields?: Array<{
                                            __typename?: "GadgetModelField";
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                          }>;
                                        } | null;
                                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                        joinModel?: {
                                          __typename?: "GadgetModel";
                                          key: string;
                                          apiIdentifier: string;
                                          namespace?: Array<string> | null;
                                          defaultDisplayField: {
                                            __typename?: "GadgetModelField";
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                          };
                                        } | null;
                                        inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                        inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                        validations: Array<
                                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                          | {
                                              __typename: "GadgetOnlyImageFileFieldValidation";
                                              name: string;
                                              specID: string;
                                              allowAnimatedImages: boolean;
                                            }
                                          | {
                                              __typename: "GadgetRangeFieldValidation";
                                              name: string;
                                              specID: string;
                                              min?: number | null;
                                              max?: number | null;
                                            }
                                          | {
                                              __typename: "GadgetRegexFieldValidation";
                                              name: string;
                                              specID: string;
                                              pattern?: string | null;
                                            }
                                          | null
                                        >;
                                      }
                                    | {
                                        __typename: "GadgetHasOneConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                          __typename?: "GadgetModel";
                                          key: string;
                                          apiIdentifier: string;
                                          namespace?: Array<string> | null;
                                          defaultDisplayField: {
                                            __typename?: "GadgetModelField";
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                          };
                                          fields?: Array<{
                                            __typename?: "GadgetModelField";
                                            name: string;
                                            apiIdentifier: string;
                                            fieldType: GadgetFieldType;
                                          }>;
                                        } | null;
                                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                        validations: Array<
                                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                          | {
                                              __typename: "GadgetOnlyImageFileFieldValidation";
                                              name: string;
                                              specID: string;
                                              allowAnimatedImages: boolean;
                                            }
                                          | {
                                              __typename: "GadgetRangeFieldValidation";
                                              name: string;
                                              specID: string;
                                              min?: number | null;
                                              max?: number | null;
                                            }
                                          | {
                                              __typename: "GadgetRegexFieldValidation";
                                              name: string;
                                              specID: string;
                                              pattern?: string | null;
                                            }
                                          | null
                                        >;
                                      }
                                    | {
                                        __typename: "GadgetNumberConfig";
                                        decimals?: number | null;
                                        fieldType: GadgetFieldType;
                                        validations: Array<
                                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                          | {
                                              __typename: "GadgetOnlyImageFileFieldValidation";
                                              name: string;
                                              specID: string;
                                              allowAnimatedImages: boolean;
                                            }
                                          | {
                                              __typename: "GadgetRangeFieldValidation";
                                              name: string;
                                              specID: string;
                                              min?: number | null;
                                              max?: number | null;
                                            }
                                          | {
                                              __typename: "GadgetRegexFieldValidation";
                                              name: string;
                                              specID: string;
                                              pattern?: string | null;
                                            }
                                          | null
                                        >;
                                      }
                                    | {
                                        __typename: "GadgetObjectFieldConfig";
                                        fieldType: GadgetFieldType;
                                        validations: Array<
                                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                          | {
                                              __typename: "GadgetOnlyImageFileFieldValidation";
                                              name: string;
                                              specID: string;
                                              allowAnimatedImages: boolean;
                                            }
                                          | {
                                              __typename: "GadgetRangeFieldValidation";
                                              name: string;
                                              specID: string;
                                              min?: number | null;
                                              max?: number | null;
                                            }
                                          | {
                                              __typename: "GadgetRegexFieldValidation";
                                              name: string;
                                              specID: string;
                                              pattern?: string | null;
                                            }
                                          | null
                                        >;
                                      };
                                }>;
                                validations: Array<
                                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                  | {
                                      __typename: "GadgetOnlyImageFileFieldValidation";
                                      name: string;
                                      specID: string;
                                      allowAnimatedImages: boolean;
                                    }
                                  | {
                                      __typename: "GadgetRangeFieldValidation";
                                      name: string;
                                      specID: string;
                                      min?: number | null;
                                      max?: number | null;
                                    }
                                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                  | null
                                >;
                              };
                        }>;
                        validations: Array<
                          | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                          | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                          | {
                              __typename: "GadgetRangeFieldValidation";
                              name: string;
                              specID: string;
                              min?: number | null;
                              max?: number | null;
                            }
                          | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                          | null
                        >;
                      };
                }>;
                validations: Array<
                  | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                  | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                  | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                  | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                  | null
                >;
              };
        }>;
        triggers?: Array<{ __typename?: "GadgetTrigger"; specID: string }> | null;
      } | null;
    } | null;
  };
};

export type GlobalActionMetadataQueryVariables = Exact<{
  apiIdentifier: Scalars["String"]["input"];
  namespace?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
  includeRelatedFields?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type GlobalActionMetadataQuery = {
  __typename?: "Query";
  gadgetMeta: {
    __typename?: "GadgetApplicationMeta";
    globalAction?: {
      __typename?: "GadgetGlobalAction";
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
              relatedModel?: {
                __typename?: "GadgetModel";
                key: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
                defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
              } | null;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetDateTimeConfig";
              includeTime: boolean;
              fieldType: GadgetFieldType;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetEnumConfig";
              allowMultiple: boolean;
              allowOther: boolean;
              fieldType: GadgetFieldType;
              options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetGenericFieldConfig";
              fieldType: GadgetFieldType;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetHasManyConfig";
              isJoinModelHasManyField: boolean;
              fieldType: GadgetFieldType;
              relatedModel?: {
                __typename?: "GadgetModel";
                key: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
                defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
              } | null;
              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetHasManyThroughConfig";
              fieldType: GadgetFieldType;
              relatedModel?: {
                __typename?: "GadgetModel";
                key: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
                defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
              } | null;
              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              joinModel?: {
                __typename?: "GadgetModel";
                key: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
                defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
              } | null;
              inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetHasOneConfig";
              fieldType: GadgetFieldType;
              relatedModel?: {
                __typename?: "GadgetModel";
                key: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
                defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
                fields?: Array<{ __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType }>;
              } | null;
              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            }
          | {
              __typename: "GadgetNumberConfig";
              decimals?: number | null;
              fieldType: GadgetFieldType;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
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
                      relatedModel?: {
                        __typename?: "GadgetModel";
                        key: string;
                        apiIdentifier: string;
                        namespace?: Array<string> | null;
                        defaultDisplayField: {
                          __typename?: "GadgetModelField";
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                        };
                        fields?: Array<{
                          __typename?: "GadgetModelField";
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                        }>;
                      } | null;
                      validations: Array<
                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                        | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                        | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null;
                            max?: number | null;
                          }
                        | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                        | null
                      >;
                    }
                  | {
                      __typename: "GadgetDateTimeConfig";
                      includeTime: boolean;
                      fieldType: GadgetFieldType;
                      validations: Array<
                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                        | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                        | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null;
                            max?: number | null;
                          }
                        | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                        | null
                      >;
                    }
                  | {
                      __typename: "GadgetEnumConfig";
                      allowMultiple: boolean;
                      allowOther: boolean;
                      fieldType: GadgetFieldType;
                      options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                      validations: Array<
                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                        | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                        | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null;
                            max?: number | null;
                          }
                        | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                        | null
                      >;
                    }
                  | {
                      __typename: "GadgetGenericFieldConfig";
                      fieldType: GadgetFieldType;
                      validations: Array<
                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                        | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                        | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null;
                            max?: number | null;
                          }
                        | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                        | null
                      >;
                    }
                  | {
                      __typename: "GadgetHasManyConfig";
                      isJoinModelHasManyField: boolean;
                      fieldType: GadgetFieldType;
                      relatedModel?: {
                        __typename?: "GadgetModel";
                        key: string;
                        apiIdentifier: string;
                        namespace?: Array<string> | null;
                        defaultDisplayField: {
                          __typename?: "GadgetModelField";
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                        };
                        fields?: Array<{
                          __typename?: "GadgetModelField";
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                        }>;
                      } | null;
                      inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                      validations: Array<
                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                        | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                        | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null;
                            max?: number | null;
                          }
                        | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                        | null
                      >;
                    }
                  | {
                      __typename: "GadgetHasManyThroughConfig";
                      fieldType: GadgetFieldType;
                      relatedModel?: {
                        __typename?: "GadgetModel";
                        key: string;
                        apiIdentifier: string;
                        namespace?: Array<string> | null;
                        defaultDisplayField: {
                          __typename?: "GadgetModelField";
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                        };
                        fields?: Array<{
                          __typename?: "GadgetModelField";
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                        }>;
                      } | null;
                      inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                      joinModel?: {
                        __typename?: "GadgetModel";
                        key: string;
                        apiIdentifier: string;
                        namespace?: Array<string> | null;
                        defaultDisplayField: {
                          __typename?: "GadgetModelField";
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                        };
                      } | null;
                      inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                      inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                      validations: Array<
                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                        | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                        | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null;
                            max?: number | null;
                          }
                        | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                        | null
                      >;
                    }
                  | {
                      __typename: "GadgetHasOneConfig";
                      fieldType: GadgetFieldType;
                      relatedModel?: {
                        __typename?: "GadgetModel";
                        key: string;
                        apiIdentifier: string;
                        namespace?: Array<string> | null;
                        defaultDisplayField: {
                          __typename?: "GadgetModelField";
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                        };
                        fields?: Array<{
                          __typename?: "GadgetModelField";
                          name: string;
                          apiIdentifier: string;
                          fieldType: GadgetFieldType;
                        }>;
                      } | null;
                      inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                      validations: Array<
                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                        | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                        | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null;
                            max?: number | null;
                          }
                        | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                        | null
                      >;
                    }
                  | {
                      __typename: "GadgetNumberConfig";
                      decimals?: number | null;
                      fieldType: GadgetFieldType;
                      validations: Array<
                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                        | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                        | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null;
                            max?: number | null;
                          }
                        | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                        | null
                      >;
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
                              relatedModel?: {
                                __typename?: "GadgetModel";
                                key: string;
                                apiIdentifier: string;
                                namespace?: Array<string> | null;
                                defaultDisplayField: {
                                  __typename?: "GadgetModelField";
                                  name: string;
                                  apiIdentifier: string;
                                  fieldType: GadgetFieldType;
                                };
                                fields?: Array<{
                                  __typename?: "GadgetModelField";
                                  name: string;
                                  apiIdentifier: string;
                                  fieldType: GadgetFieldType;
                                }>;
                              } | null;
                              validations: Array<
                                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                  }
                                | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null;
                                    max?: number | null;
                                  }
                                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                | null
                              >;
                            }
                          | {
                              __typename: "GadgetDateTimeConfig";
                              includeTime: boolean;
                              fieldType: GadgetFieldType;
                              validations: Array<
                                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                  }
                                | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null;
                                    max?: number | null;
                                  }
                                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                | null
                              >;
                            }
                          | {
                              __typename: "GadgetEnumConfig";
                              allowMultiple: boolean;
                              allowOther: boolean;
                              fieldType: GadgetFieldType;
                              options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                              validations: Array<
                                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                  }
                                | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null;
                                    max?: number | null;
                                  }
                                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                | null
                              >;
                            }
                          | {
                              __typename: "GadgetGenericFieldConfig";
                              fieldType: GadgetFieldType;
                              validations: Array<
                                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                  }
                                | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null;
                                    max?: number | null;
                                  }
                                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                | null
                              >;
                            }
                          | {
                              __typename: "GadgetHasManyConfig";
                              isJoinModelHasManyField: boolean;
                              fieldType: GadgetFieldType;
                              relatedModel?: {
                                __typename?: "GadgetModel";
                                key: string;
                                apiIdentifier: string;
                                namespace?: Array<string> | null;
                                defaultDisplayField: {
                                  __typename?: "GadgetModelField";
                                  name: string;
                                  apiIdentifier: string;
                                  fieldType: GadgetFieldType;
                                };
                                fields?: Array<{
                                  __typename?: "GadgetModelField";
                                  name: string;
                                  apiIdentifier: string;
                                  fieldType: GadgetFieldType;
                                }>;
                              } | null;
                              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                              validations: Array<
                                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                  }
                                | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null;
                                    max?: number | null;
                                  }
                                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                | null
                              >;
                            }
                          | {
                              __typename: "GadgetHasManyThroughConfig";
                              fieldType: GadgetFieldType;
                              relatedModel?: {
                                __typename?: "GadgetModel";
                                key: string;
                                apiIdentifier: string;
                                namespace?: Array<string> | null;
                                defaultDisplayField: {
                                  __typename?: "GadgetModelField";
                                  name: string;
                                  apiIdentifier: string;
                                  fieldType: GadgetFieldType;
                                };
                                fields?: Array<{
                                  __typename?: "GadgetModelField";
                                  name: string;
                                  apiIdentifier: string;
                                  fieldType: GadgetFieldType;
                                }>;
                              } | null;
                              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                              joinModel?: {
                                __typename?: "GadgetModel";
                                key: string;
                                apiIdentifier: string;
                                namespace?: Array<string> | null;
                                defaultDisplayField: {
                                  __typename?: "GadgetModelField";
                                  name: string;
                                  apiIdentifier: string;
                                  fieldType: GadgetFieldType;
                                };
                              } | null;
                              inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                              inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                              validations: Array<
                                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                  }
                                | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null;
                                    max?: number | null;
                                  }
                                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                | null
                              >;
                            }
                          | {
                              __typename: "GadgetHasOneConfig";
                              fieldType: GadgetFieldType;
                              relatedModel?: {
                                __typename?: "GadgetModel";
                                key: string;
                                apiIdentifier: string;
                                namespace?: Array<string> | null;
                                defaultDisplayField: {
                                  __typename?: "GadgetModelField";
                                  name: string;
                                  apiIdentifier: string;
                                  fieldType: GadgetFieldType;
                                };
                                fields?: Array<{
                                  __typename?: "GadgetModelField";
                                  name: string;
                                  apiIdentifier: string;
                                  fieldType: GadgetFieldType;
                                }>;
                              } | null;
                              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                              validations: Array<
                                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                  }
                                | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null;
                                    max?: number | null;
                                  }
                                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                | null
                              >;
                            }
                          | {
                              __typename: "GadgetNumberConfig";
                              decimals?: number | null;
                              fieldType: GadgetFieldType;
                              validations: Array<
                                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                  }
                                | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null;
                                    max?: number | null;
                                  }
                                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                | null
                              >;
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
                                      relatedModel?: {
                                        __typename?: "GadgetModel";
                                        key: string;
                                        apiIdentifier: string;
                                        namespace?: Array<string> | null;
                                        defaultDisplayField: {
                                          __typename?: "GadgetModelField";
                                          name: string;
                                          apiIdentifier: string;
                                          fieldType: GadgetFieldType;
                                        };
                                        fields?: Array<{
                                          __typename?: "GadgetModelField";
                                          name: string;
                                          apiIdentifier: string;
                                          fieldType: GadgetFieldType;
                                        }>;
                                      } | null;
                                      validations: Array<
                                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                        | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                          }
                                        | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null;
                                            max?: number | null;
                                          }
                                        | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null;
                                          }
                                        | null
                                      >;
                                    }
                                  | {
                                      __typename: "GadgetDateTimeConfig";
                                      includeTime: boolean;
                                      fieldType: GadgetFieldType;
                                      validations: Array<
                                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                        | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                          }
                                        | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null;
                                            max?: number | null;
                                          }
                                        | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null;
                                          }
                                        | null
                                      >;
                                    }
                                  | {
                                      __typename: "GadgetEnumConfig";
                                      allowMultiple: boolean;
                                      allowOther: boolean;
                                      fieldType: GadgetFieldType;
                                      options: Array<{ __typename?: "GadgetEnumOption"; name: string; color: string }>;
                                      validations: Array<
                                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                        | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                          }
                                        | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null;
                                            max?: number | null;
                                          }
                                        | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null;
                                          }
                                        | null
                                      >;
                                    }
                                  | {
                                      __typename: "GadgetGenericFieldConfig";
                                      fieldType: GadgetFieldType;
                                      validations: Array<
                                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                        | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                          }
                                        | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null;
                                            max?: number | null;
                                          }
                                        | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null;
                                          }
                                        | null
                                      >;
                                    }
                                  | {
                                      __typename: "GadgetHasManyConfig";
                                      isJoinModelHasManyField: boolean;
                                      fieldType: GadgetFieldType;
                                      relatedModel?: {
                                        __typename?: "GadgetModel";
                                        key: string;
                                        apiIdentifier: string;
                                        namespace?: Array<string> | null;
                                        defaultDisplayField: {
                                          __typename?: "GadgetModelField";
                                          name: string;
                                          apiIdentifier: string;
                                          fieldType: GadgetFieldType;
                                        };
                                        fields?: Array<{
                                          __typename?: "GadgetModelField";
                                          name: string;
                                          apiIdentifier: string;
                                          fieldType: GadgetFieldType;
                                        }>;
                                      } | null;
                                      inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                      validations: Array<
                                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                        | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                          }
                                        | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null;
                                            max?: number | null;
                                          }
                                        | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null;
                                          }
                                        | null
                                      >;
                                    }
                                  | {
                                      __typename: "GadgetHasManyThroughConfig";
                                      fieldType: GadgetFieldType;
                                      relatedModel?: {
                                        __typename?: "GadgetModel";
                                        key: string;
                                        apiIdentifier: string;
                                        namespace?: Array<string> | null;
                                        defaultDisplayField: {
                                          __typename?: "GadgetModelField";
                                          name: string;
                                          apiIdentifier: string;
                                          fieldType: GadgetFieldType;
                                        };
                                        fields?: Array<{
                                          __typename?: "GadgetModelField";
                                          name: string;
                                          apiIdentifier: string;
                                          fieldType: GadgetFieldType;
                                        }>;
                                      } | null;
                                      inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                      joinModel?: {
                                        __typename?: "GadgetModel";
                                        key: string;
                                        apiIdentifier: string;
                                        namespace?: Array<string> | null;
                                        defaultDisplayField: {
                                          __typename?: "GadgetModelField";
                                          name: string;
                                          apiIdentifier: string;
                                          fieldType: GadgetFieldType;
                                        };
                                      } | null;
                                      inverseJoinModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                      inverseRelatedModelField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                      validations: Array<
                                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                        | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                          }
                                        | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null;
                                            max?: number | null;
                                          }
                                        | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null;
                                          }
                                        | null
                                      >;
                                    }
                                  | {
                                      __typename: "GadgetHasOneConfig";
                                      fieldType: GadgetFieldType;
                                      relatedModel?: {
                                        __typename?: "GadgetModel";
                                        key: string;
                                        apiIdentifier: string;
                                        namespace?: Array<string> | null;
                                        defaultDisplayField: {
                                          __typename?: "GadgetModelField";
                                          name: string;
                                          apiIdentifier: string;
                                          fieldType: GadgetFieldType;
                                        };
                                        fields?: Array<{
                                          __typename?: "GadgetModelField";
                                          name: string;
                                          apiIdentifier: string;
                                          fieldType: GadgetFieldType;
                                        }>;
                                      } | null;
                                      inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                      validations: Array<
                                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                        | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                          }
                                        | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null;
                                            max?: number | null;
                                          }
                                        | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null;
                                          }
                                        | null
                                      >;
                                    }
                                  | {
                                      __typename: "GadgetNumberConfig";
                                      decimals?: number | null;
                                      fieldType: GadgetFieldType;
                                      validations: Array<
                                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                        | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                          }
                                        | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null;
                                            max?: number | null;
                                          }
                                        | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null;
                                          }
                                        | null
                                      >;
                                    }
                                  | {
                                      __typename: "GadgetObjectFieldConfig";
                                      fieldType: GadgetFieldType;
                                      validations: Array<
                                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                        | {
                                            __typename: "GadgetOnlyImageFileFieldValidation";
                                            name: string;
                                            specID: string;
                                            allowAnimatedImages: boolean;
                                          }
                                        | {
                                            __typename: "GadgetRangeFieldValidation";
                                            name: string;
                                            specID: string;
                                            min?: number | null;
                                            max?: number | null;
                                          }
                                        | {
                                            __typename: "GadgetRegexFieldValidation";
                                            name: string;
                                            specID: string;
                                            pattern?: string | null;
                                          }
                                        | null
                                      >;
                                    };
                              }>;
                              validations: Array<
                                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                                | {
                                    __typename: "GadgetOnlyImageFileFieldValidation";
                                    name: string;
                                    specID: string;
                                    allowAnimatedImages: boolean;
                                  }
                                | {
                                    __typename: "GadgetRangeFieldValidation";
                                    name: string;
                                    specID: string;
                                    min?: number | null;
                                    max?: number | null;
                                  }
                                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                                | null
                              >;
                            };
                      }>;
                      validations: Array<
                        | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                        | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                        | {
                            __typename: "GadgetRangeFieldValidation";
                            name: string;
                            specID: string;
                            min?: number | null;
                            max?: number | null;
                          }
                        | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                        | null
                      >;
                    };
              }>;
              validations: Array<
                | { __typename: "GadgetGenericFieldValidation"; name: string; specID: string }
                | { __typename: "GadgetOnlyImageFileFieldValidation"; name: string; specID: string; allowAnimatedImages: boolean }
                | { __typename: "GadgetRangeFieldValidation"; name: string; specID: string; min?: number | null; max?: number | null }
                | { __typename: "GadgetRegexFieldValidation"; name: string; specID: string; pattern?: string | null }
                | null
              >;
            };
      }>;
      triggers?: Array<{ __typename?: "GadgetTrigger"; specID: string }> | null;
    } | null;
  };
};

export type RolesMetadataQueryVariables = Exact<{ [key: string]: never }>;

export type RolesMetadataQuery = {
  __typename?: "Query";
  gadgetMeta: {
    __typename?: "GadgetApplicationMeta";
    roles: Array<{ __typename?: "GadgetRole"; name: string; key: string; selectable: boolean }>;
  };
};

export const RelatedModelFieldFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RelatedModelFieldFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
          { kind: "Field", name: { kind: "Name", value: "fieldType" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RelatedModelFieldFragmentFragment, unknown>;
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
                  kind: "Field",
                  name: { kind: "Name", value: "validations" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "__typename" } },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "pattern" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "min" } },
                            { kind: "Field", name: { kind: "Name", value: "max" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "joinModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseJoinModelField" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseRelatedModelField" },
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
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
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
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
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
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
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
                      { kind: "Field", name: { kind: "Name", value: "allowOther" } },
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
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RelatedModelFieldFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
          { kind: "Field", name: { kind: "Name", value: "fieldType" } },
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
      name: { kind: "Name", value: "RelatedModelFieldFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
          { kind: "Field", name: { kind: "Name", value: "fieldType" } },
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
                  kind: "Field",
                  name: { kind: "Name", value: "validations" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "__typename" } },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "pattern" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "min" } },
                            { kind: "Field", name: { kind: "Name", value: "max" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "joinModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseJoinModelField" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseRelatedModelField" },
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
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
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
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
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
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
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
                      { kind: "Field", name: { kind: "Name", value: "allowOther" } },
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
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
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
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
          type: { kind: "ListType", type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } } },
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
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "namespace" },
                      value: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                      { kind: "Field", name: { kind: "Name", value: "namespace" } },
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
      name: { kind: "Name", value: "RelatedModelFieldFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
          { kind: "Field", name: { kind: "Name", value: "fieldType" } },
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
                  kind: "Field",
                  name: { kind: "Name", value: "validations" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "__typename" } },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "pattern" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "min" } },
                            { kind: "Field", name: { kind: "Name", value: "max" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "joinModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseJoinModelField" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseRelatedModelField" },
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
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
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
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
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
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
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
                      { kind: "Field", name: { kind: "Name", value: "allowOther" } },
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
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
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
          variable: { kind: "Variable", name: { kind: "Name", value: "modelApiIdentifier" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "modelNamespace" } },
          type: { kind: "ListType", type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "action" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } } },
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
                      value: { kind: "Variable", name: { kind: "Name", value: "modelApiIdentifier" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "namespace" },
                      value: { kind: "Variable", name: { kind: "Name", value: "modelNamespace" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                      { kind: "Field", name: { kind: "Name", value: "defaultRecord" } },
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
                            { kind: "Field", name: { kind: "Name", value: "operatesWithRecordIdentity" } },
                            { kind: "Field", name: { kind: "Name", value: "isDeleteAction" } },
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
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "triggers" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "Field", name: { kind: "Name", value: "specID" } }],
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
      name: { kind: "Name", value: "RelatedModelFieldFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
          { kind: "Field", name: { kind: "Name", value: "fieldType" } },
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
                  kind: "Field",
                  name: { kind: "Name", value: "validations" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "__typename" } },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "pattern" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "min" } },
                            { kind: "Field", name: { kind: "Name", value: "max" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "joinModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseJoinModelField" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseRelatedModelField" },
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
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
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
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
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
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
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
                      { kind: "Field", name: { kind: "Name", value: "allowOther" } },
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
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
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
export const GlobalActionMetadataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GlobalActionMetadata" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
          type: { kind: "ListType", type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          defaultValue: { kind: "BooleanValue", value: false },
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
                  name: { kind: "Name", value: "globalAction" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "apiIdentifier" },
                      value: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "namespace" },
                      value: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
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
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "triggers" },
                        selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "specID" } }] },
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
      name: { kind: "Name", value: "RelatedModelFieldFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
          { kind: "Field", name: { kind: "Name", value: "fieldType" } },
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
                  kind: "Field",
                  name: { kind: "Name", value: "validations" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "__typename" } },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "pattern" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "min" } },
                            { kind: "Field", name: { kind: "Name", value: "max" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                            { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "specID" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "joinModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseJoinModelField" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseRelatedModelField" },
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
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
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
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "relatedModel" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "inverseField" },
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
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultDisplayField" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "include" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "includeRelatedFields" } },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RelatedModelFieldFragment" } }],
                              },
                            },
                          ],
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
                      { kind: "Field", name: { kind: "Name", value: "allowOther" } },
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
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
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
} as unknown as DocumentNode<GlobalActionMetadataQuery, GlobalActionMetadataQueryVariables>;
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
                      { kind: "Field", name: { kind: "Name", value: "key" } },
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
