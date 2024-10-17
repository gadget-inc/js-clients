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
  /** Represents an amount of money in CAD */
  CADCurrencyAmount: { input: any; output: any };
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any };
  /** A date-time or full-date string at UTC, such as 2007-12-03 or 2007-12-03T10:15:30Z, compliant with the `full-date` or `date-time` formats outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. If a full date-time is passed, timezone will be ignored and it will be truncated to just the date part. */
  DateOrDateTime: { input: any; output: any };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any };
  /** The ID of a record in Gadget */
  GadgetID: { input: any; output: any };
  /** Represents the possible values of the State enum. */
  GizmoStateEnum: { input: any; output: any };
  /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
  HydrationPlan: { input: any; output: any };
  /** Represents one billingAccount result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalBillingAccountRecord: { input: any; output: any };
  /** Represents internal money state, which consists of an amount and a currency */
  InternalCADCurrencyAmount: { input: any; output: any };
  /** Represents one city result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalCityRecord: { input: any; output: any };
  /** Represents one course result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalCourseRecord: { input: any; output: any };
  /** Represents one customer result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalCustomerRecord: { input: any; output: any };
  /** Represents one ephemeral result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalEphemeralRecord: { input: any; output: any };
  /** Represents one fieldless result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalFieldlessRecord: { input: any; output: any };
  /** Represents one friendship result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalFriendshipRecord: { input: any; output: any };
  /** Represents one game/player result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalGamePlayerRecord: { input: any; output: any };
  /** Represents one game/round result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalGameRoundRecord: { input: any; output: any };
  /** Represents one game/stadium result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalGameStadiumRecord: { input: any; output: any };
  /** Represents one gizmo result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalGizmoRecord: { input: any; output: any };
  /** Represents one landmark/stadium result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalLandmarkStadiumRecord: { input: any; output: any };
  /** Represents one registration result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalRegistrationRecord: { input: any; output: any };
  /** Represents one sampleModelToTestReallyLongModelNames result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalSampleModelToTestReallyLongModelNamesRecord: { input: any; output: any };
  /** Represents one section result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalSectionRecord: { input: any; output: any };
  /** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalSessionRecord: { input: any; output: any };
  /** Represents one sprocket result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalSprocketRecord: { input: any; output: any };
  /** Represents one student result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalStudentRecord: { input: any; output: any };
  /** Represents one teacher result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalTeacherRecord: { input: any; output: any };
  /** Represents one user result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalUserRecord: { input: any; output: any };
  /** Represents one widgetImage result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalWidgetImageRecord: { input: any; output: any };
  /** Represents one widget result record in internal api calls. Returns a JSON blob of all the record's fields. */
  InternalWidgetRecord: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any };
  /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
  RecordState: { input: any; output: any };
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
  /** Represents the possible values of the Category enum. */
  WidgetCategoryEnum: { input: any; output: any };
  /** Represents the possible values of the Phase enum. */
  WidgetPhaseEnum: { input: any; output: any };
  /** Represents the possible values of the State enum. */
  WidgetStateEnum: { input: any; output: any };
};

export type AddInventoryIfOutOfStockWidgetResult = {
  __typename?: "AddInventoryIfOutOfStockWidgetResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

export type AddInventoryLocationInput = {
  phone?: InputMaybe<AddInventoryLocationPhoneInput>;
  street?: InputMaybe<Scalars["String"]["input"]>;
  streetNumber?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AddInventoryLocationPhoneInput = {
  areaCode?: InputMaybe<Scalars["String"]["input"]>;
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type AddInventoryWidgetInput = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  cost?: InputMaybe<Scalars["CADCurrencyAmount"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phase?: InputMaybe<Scalars["WidgetPhaseEnum"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["WidgetStateEnum"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type AddInventoryWidgetResult = {
  __typename?: "AddInventoryWidgetResult";
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
  | AddInventoryIfOutOfStockWidgetResult
  | AddInventoryWidgetResult
  | BarfAnErrorGamePlayerResult
  | BarfAnErrorResult
  | BendGizmoResult
  | BreakGizmoResult
  | ChangePasswordUserResult
  | CreateBillingAccountResult
  | CreateCityResult
  | CreateCourseResult
  | CreateCustomerResult
  | CreateEphemeralResult
  | CreateFieldlessResult
  | CreateFriendshipResult
  | CreateGamePlayerResult
  | CreateGameRoundResult
  | CreateGameStadiumResult
  | CreateGizmoResult
  | CreateLandmarkStadiumResult
  | CreateRegistrationResult
  | CreateSampleModelToTestReallyLongModelNamesResult
  | CreateSectionResult
  | CreateSprocketResult
  | CreateStudentResult
  | CreateTeacherResult
  | CreateWidgetImageResult
  | CreateWidgetResult
  | DeleteBillingAccountResult
  | DeleteCityResult
  | DeleteCourseResult
  | DeleteCustomerResult
  | DeleteEphemeralResult
  | DeleteFieldlessResult
  | DeleteFriendshipResult
  | DeleteGamePlayerResult
  | DeleteGameRoundResult
  | DeleteGameStadiumResult
  | DeleteGizmoResult
  | DeleteLandmarkStadiumResult
  | DeleteRegistrationResult
  | DeleteSampleModelToTestReallyLongModelNamesResult
  | DeleteSectionResult
  | DeleteSprocketResult
  | DeleteStudentResult
  | DeleteTeacherResult
  | DeleteUserResult
  | DeleteWidgetImageResult
  | DeleteWidgetResult
  | FlipAllWidgetsResult
  | FlipDownWidgetResult
  | FlipUpWidgetResult
  | FoldGizmoResult
  | GameCalculateScoresResult
  | GameLetTheGamesBeginResult
  | LogParamsResult
  | OtherCreateGizmoResult
  | ResetPasswordUserResult
  | SendResetPasswordUserResult
  | SendVerifyEmailUserResult
  | SetBestNumberGamePlayerResult
  | SignInUserResult
  | SignOutUserResult
  | SignUpUserResult
  | StraightenGizmoResult
  | UnfoldGizmoResult
  | UpdateBillingAccountResult
  | UpdateCityResult
  | UpdateCourseResult
  | UpdateCustomerResult
  | UpdateEphemeralResult
  | UpdateFieldlessResult
  | UpdateFriendshipResult
  | UpdateGamePlayerResult
  | UpdateGameRoundResult
  | UpdateGameStadiumResult
  | UpdateGizmoResult
  | UpdateLandmarkStadiumResult
  | UpdateRegistrationResult
  | UpdateSampleModelToTestReallyLongModelNamesResult
  | UpdateSectionResult
  | UpdateSprocketResult
  | UpdateStudentResult
  | UpdateTeacherResult
  | UpdateUserResult
  | UpdateWidgetImageResult
  | UpdateWidgetResult
  | VerifyEmailUserResult;

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
  barfAnErrorPlayer: EnqueueBackgroundActionResult;
  bulkBarfAnErrorPlayers: BulkEnqueueBackgroundActionResult;
  bulkCreatePlayers: BulkEnqueueBackgroundActionResult;
  bulkCreateRounds: BulkEnqueueBackgroundActionResult;
  bulkCreateStadia: BulkEnqueueBackgroundActionResult;
  bulkDeletePlayers: BulkEnqueueBackgroundActionResult;
  bulkDeleteRounds: BulkEnqueueBackgroundActionResult;
  bulkDeleteStadia: BulkEnqueueBackgroundActionResult;
  bulkSetBestNumberPlayers: BulkEnqueueBackgroundActionResult;
  bulkUpdatePlayers: BulkEnqueueBackgroundActionResult;
  bulkUpdateRounds: BulkEnqueueBackgroundActionResult;
  bulkUpdateStadia: BulkEnqueueBackgroundActionResult;
  bulkUpsertPlayers: BulkEnqueueBackgroundActionResult;
  bulkUpsertRounds: BulkEnqueueBackgroundActionResult;
  bulkUpsertStadia: BulkEnqueueBackgroundActionResult;
  calculateScores: EnqueueBackgroundActionResult;
  createPlayer: EnqueueBackgroundActionResult;
  createRound: EnqueueBackgroundActionResult;
  createStadium: EnqueueBackgroundActionResult;
  deletePlayer: EnqueueBackgroundActionResult;
  deleteRound: EnqueueBackgroundActionResult;
  deleteStadium: EnqueueBackgroundActionResult;
  letTheGamesBegin: EnqueueBackgroundActionResult;
  setBestNumberPlayer: EnqueueBackgroundActionResult;
  updatePlayer: EnqueueBackgroundActionResult;
  updateRound: EnqueueBackgroundActionResult;
  updateStadium: EnqueueBackgroundActionResult;
  upsertPlayer: EnqueueBackgroundActionResult;
  upsertRound: EnqueueBackgroundActionResult;
  upsertStadium: EnqueueBackgroundActionResult;
};

export type BackgroundGameMutationsBarfAnErrorPlayerArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundGameMutationsBulkBarfAnErrorPlayersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
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

export type BackgroundGameMutationsBulkSetBestNumberPlayersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
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

export type BackgroundGameMutationsCalculateScoresArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
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

export type BackgroundGameMutationsLetTheGamesBeginArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
};

export type BackgroundGameMutationsSetBestNumberPlayerArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
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

export type BackgroundLandmarkMutations = {
  __typename?: "BackgroundLandmarkMutations";
  bulkCreateStadia: BulkEnqueueBackgroundActionResult;
  bulkDeleteStadia: BulkEnqueueBackgroundActionResult;
  bulkUpdateStadia: BulkEnqueueBackgroundActionResult;
  bulkUpsertStadia: BulkEnqueueBackgroundActionResult;
  createStadium: EnqueueBackgroundActionResult;
  deleteStadium: EnqueueBackgroundActionResult;
  updateStadium: EnqueueBackgroundActionResult;
  upsertStadium: EnqueueBackgroundActionResult;
};

export type BackgroundLandmarkMutationsBulkCreateStadiaArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateLandmarkStadiaInput>;
};

export type BackgroundLandmarkMutationsBulkDeleteStadiaArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundLandmarkMutationsBulkUpdateStadiaArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateLandmarkStadiaInput>;
};

export type BackgroundLandmarkMutationsBulkUpsertStadiaArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertLandmarkStadiaInput>;
};

export type BackgroundLandmarkMutationsCreateStadiumArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  stadium?: InputMaybe<CreateLandmarkStadiumInput>;
};

export type BackgroundLandmarkMutationsDeleteStadiumArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundLandmarkMutationsUpdateStadiumArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  stadium?: InputMaybe<UpdateLandmarkStadiumInput>;
};

export type BackgroundLandmarkMutationsUpsertStadiumArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stadium?: InputMaybe<UpsertLandmarkStadiumInput>;
};

export type BackgroundMutations = {
  __typename?: "BackgroundMutations";
  addInventoryIfOutOfStockWidget: EnqueueBackgroundActionResult;
  addInventoryWidget: EnqueueBackgroundActionResult;
  barfAnError: EnqueueBackgroundActionResult;
  bendGizmo: EnqueueBackgroundActionResult;
  breakGizmo: EnqueueBackgroundActionResult;
  bulkAddInventoryIfOutOfStockWidgets: BulkEnqueueBackgroundActionResult;
  bulkAddInventoryWidgets: BulkEnqueueBackgroundActionResult;
  bulkBendGizmos: BulkEnqueueBackgroundActionResult;
  bulkBreakGizmos: BulkEnqueueBackgroundActionResult;
  bulkChangePasswordUsers: BulkEnqueueBackgroundActionResult;
  bulkCreateBillingAccounts: BulkEnqueueBackgroundActionResult;
  bulkCreateCities: BulkEnqueueBackgroundActionResult;
  bulkCreateCourses: BulkEnqueueBackgroundActionResult;
  bulkCreateCustomers: BulkEnqueueBackgroundActionResult;
  bulkCreateEphemerals: BulkEnqueueBackgroundActionResult;
  bulkCreateFieldlesses: BulkEnqueueBackgroundActionResult;
  bulkCreateFriendships: BulkEnqueueBackgroundActionResult;
  bulkCreateGizmos: BulkEnqueueBackgroundActionResult;
  bulkCreateRegistrations: BulkEnqueueBackgroundActionResult;
  bulkCreateSampleModelToTestReallyLongModelNames: BulkEnqueueBackgroundActionResult;
  bulkCreateSections: BulkEnqueueBackgroundActionResult;
  bulkCreateSprockets: BulkEnqueueBackgroundActionResult;
  bulkCreateStudents: BulkEnqueueBackgroundActionResult;
  bulkCreateTeachers: BulkEnqueueBackgroundActionResult;
  bulkCreateWidgetImages: BulkEnqueueBackgroundActionResult;
  bulkCreateWidgets: BulkEnqueueBackgroundActionResult;
  bulkDeleteBillingAccounts: BulkEnqueueBackgroundActionResult;
  bulkDeleteCities: BulkEnqueueBackgroundActionResult;
  bulkDeleteCourses: BulkEnqueueBackgroundActionResult;
  bulkDeleteCustomers: BulkEnqueueBackgroundActionResult;
  bulkDeleteEphemerals: BulkEnqueueBackgroundActionResult;
  bulkDeleteFieldlesses: BulkEnqueueBackgroundActionResult;
  bulkDeleteFriendships: BulkEnqueueBackgroundActionResult;
  bulkDeleteGizmos: BulkEnqueueBackgroundActionResult;
  bulkDeleteRegistrations: BulkEnqueueBackgroundActionResult;
  bulkDeleteSampleModelToTestReallyLongModelNames: BulkEnqueueBackgroundActionResult;
  bulkDeleteSections: BulkEnqueueBackgroundActionResult;
  bulkDeleteSprockets: BulkEnqueueBackgroundActionResult;
  bulkDeleteStudents: BulkEnqueueBackgroundActionResult;
  bulkDeleteTeachers: BulkEnqueueBackgroundActionResult;
  bulkDeleteUsers: BulkEnqueueBackgroundActionResult;
  bulkDeleteWidgetImages: BulkEnqueueBackgroundActionResult;
  bulkDeleteWidgets: BulkEnqueueBackgroundActionResult;
  bulkFlipDownWidgets: BulkEnqueueBackgroundActionResult;
  bulkFlipUpWidgets: BulkEnqueueBackgroundActionResult;
  bulkFoldGizmos: BulkEnqueueBackgroundActionResult;
  bulkOtherCreateGizmos: BulkEnqueueBackgroundActionResult;
  bulkResetPasswordUsers: BulkEnqueueBackgroundActionResult;
  bulkSendResetPasswordUsers: BulkEnqueueBackgroundActionResult;
  bulkSendVerifyEmailUsers: BulkEnqueueBackgroundActionResult;
  bulkSignInUsers: BulkEnqueueBackgroundActionResult;
  bulkSignOutUsers: BulkEnqueueBackgroundActionResult;
  bulkSignUpUsers: BulkEnqueueBackgroundActionResult;
  bulkStraightenGizmos: BulkEnqueueBackgroundActionResult;
  bulkUnfoldGizmos: BulkEnqueueBackgroundActionResult;
  bulkUpdateBillingAccounts: BulkEnqueueBackgroundActionResult;
  bulkUpdateCities: BulkEnqueueBackgroundActionResult;
  bulkUpdateCourses: BulkEnqueueBackgroundActionResult;
  bulkUpdateCustomers: BulkEnqueueBackgroundActionResult;
  bulkUpdateEphemerals: BulkEnqueueBackgroundActionResult;
  bulkUpdateFieldlesses: BulkEnqueueBackgroundActionResult;
  bulkUpdateFriendships: BulkEnqueueBackgroundActionResult;
  bulkUpdateGizmos: BulkEnqueueBackgroundActionResult;
  bulkUpdateRegistrations: BulkEnqueueBackgroundActionResult;
  bulkUpdateSampleModelToTestReallyLongModelNames: BulkEnqueueBackgroundActionResult;
  bulkUpdateSections: BulkEnqueueBackgroundActionResult;
  bulkUpdateSprockets: BulkEnqueueBackgroundActionResult;
  bulkUpdateStudents: BulkEnqueueBackgroundActionResult;
  bulkUpdateTeachers: BulkEnqueueBackgroundActionResult;
  bulkUpdateUsers: BulkEnqueueBackgroundActionResult;
  bulkUpdateWidgetImages: BulkEnqueueBackgroundActionResult;
  bulkUpdateWidgets: BulkEnqueueBackgroundActionResult;
  bulkUpsertBillingAccounts: BulkEnqueueBackgroundActionResult;
  bulkUpsertCities: BulkEnqueueBackgroundActionResult;
  bulkUpsertCourses: BulkEnqueueBackgroundActionResult;
  bulkUpsertCustomers: BulkEnqueueBackgroundActionResult;
  bulkUpsertEphemerals: BulkEnqueueBackgroundActionResult;
  bulkUpsertFieldlesses: BulkEnqueueBackgroundActionResult;
  bulkUpsertFriendships: BulkEnqueueBackgroundActionResult;
  bulkUpsertGizmos: BulkEnqueueBackgroundActionResult;
  bulkUpsertRegistrations: BulkEnqueueBackgroundActionResult;
  bulkUpsertSampleModelToTestReallyLongModelNames: BulkEnqueueBackgroundActionResult;
  bulkUpsertSections: BulkEnqueueBackgroundActionResult;
  bulkUpsertSprockets: BulkEnqueueBackgroundActionResult;
  bulkUpsertStudents: BulkEnqueueBackgroundActionResult;
  bulkUpsertTeachers: BulkEnqueueBackgroundActionResult;
  bulkUpsertUsers: BulkEnqueueBackgroundActionResult;
  bulkUpsertWidgetImages: BulkEnqueueBackgroundActionResult;
  bulkUpsertWidgets: BulkEnqueueBackgroundActionResult;
  bulkVerifyEmailUsers: BulkEnqueueBackgroundActionResult;
  changePasswordUser: EnqueueBackgroundActionResult;
  createBillingAccount: EnqueueBackgroundActionResult;
  createCity: EnqueueBackgroundActionResult;
  createCourse: EnqueueBackgroundActionResult;
  createCustomer: EnqueueBackgroundActionResult;
  createEphemeral: EnqueueBackgroundActionResult;
  createFieldless: EnqueueBackgroundActionResult;
  createFriendship: EnqueueBackgroundActionResult;
  createGizmo: EnqueueBackgroundActionResult;
  createRegistration: EnqueueBackgroundActionResult;
  createSampleModelToTestReallyLongModelNames: EnqueueBackgroundActionResult;
  createSection: EnqueueBackgroundActionResult;
  createSprocket: EnqueueBackgroundActionResult;
  createStudent: EnqueueBackgroundActionResult;
  createTeacher: EnqueueBackgroundActionResult;
  createWidget: EnqueueBackgroundActionResult;
  createWidgetImage: EnqueueBackgroundActionResult;
  deleteBillingAccount: EnqueueBackgroundActionResult;
  deleteCity: EnqueueBackgroundActionResult;
  deleteCourse: EnqueueBackgroundActionResult;
  deleteCustomer: EnqueueBackgroundActionResult;
  deleteEphemeral: EnqueueBackgroundActionResult;
  deleteFieldless: EnqueueBackgroundActionResult;
  deleteFriendship: EnqueueBackgroundActionResult;
  deleteGizmo: EnqueueBackgroundActionResult;
  deleteRegistration: EnqueueBackgroundActionResult;
  deleteSampleModelToTestReallyLongModelNames: EnqueueBackgroundActionResult;
  deleteSection: EnqueueBackgroundActionResult;
  deleteSprocket: EnqueueBackgroundActionResult;
  deleteStudent: EnqueueBackgroundActionResult;
  deleteTeacher: EnqueueBackgroundActionResult;
  deleteUser: EnqueueBackgroundActionResult;
  deleteWidget: EnqueueBackgroundActionResult;
  deleteWidgetImage: EnqueueBackgroundActionResult;
  flipAllWidgets: EnqueueBackgroundActionResult;
  flipDownWidget: EnqueueBackgroundActionResult;
  flipUpWidget: EnqueueBackgroundActionResult;
  foldGizmo: EnqueueBackgroundActionResult;
  game: BackgroundGameMutations;
  landmark: BackgroundLandmarkMutations;
  logParams: EnqueueBackgroundActionResult;
  otherCreateGizmo: EnqueueBackgroundActionResult;
  resetPasswordUser: EnqueueBackgroundActionResult;
  sendResetPasswordUser: EnqueueBackgroundActionResult;
  sendVerifyEmailUser: EnqueueBackgroundActionResult;
  signInUser: EnqueueBackgroundActionResult;
  signOutUser: EnqueueBackgroundActionResult;
  signUpUser: EnqueueBackgroundActionResult;
  straightenGizmo: EnqueueBackgroundActionResult;
  unfoldGizmo: EnqueueBackgroundActionResult;
  updateBillingAccount: EnqueueBackgroundActionResult;
  updateCity: EnqueueBackgroundActionResult;
  updateCourse: EnqueueBackgroundActionResult;
  updateCustomer: EnqueueBackgroundActionResult;
  updateEphemeral: EnqueueBackgroundActionResult;
  updateFieldless: EnqueueBackgroundActionResult;
  updateFriendship: EnqueueBackgroundActionResult;
  updateGizmo: EnqueueBackgroundActionResult;
  updateRegistration: EnqueueBackgroundActionResult;
  updateSampleModelToTestReallyLongModelNames: EnqueueBackgroundActionResult;
  updateSection: EnqueueBackgroundActionResult;
  updateSprocket: EnqueueBackgroundActionResult;
  updateStudent: EnqueueBackgroundActionResult;
  updateTeacher: EnqueueBackgroundActionResult;
  updateUser: EnqueueBackgroundActionResult;
  updateWidget: EnqueueBackgroundActionResult;
  updateWidgetImage: EnqueueBackgroundActionResult;
  upsertBillingAccount: EnqueueBackgroundActionResult;
  upsertCity: EnqueueBackgroundActionResult;
  upsertCourse: EnqueueBackgroundActionResult;
  upsertCustomer: EnqueueBackgroundActionResult;
  upsertEphemeral: EnqueueBackgroundActionResult;
  upsertFieldless: EnqueueBackgroundActionResult;
  upsertFriendship: EnqueueBackgroundActionResult;
  upsertGizmo: EnqueueBackgroundActionResult;
  upsertRegistration: EnqueueBackgroundActionResult;
  upsertSampleModelToTestReallyLongModelNames: EnqueueBackgroundActionResult;
  upsertSection: EnqueueBackgroundActionResult;
  upsertSprocket: EnqueueBackgroundActionResult;
  upsertStudent: EnqueueBackgroundActionResult;
  upsertTeacher: EnqueueBackgroundActionResult;
  upsertUser: EnqueueBackgroundActionResult;
  upsertWidget: EnqueueBackgroundActionResult;
  upsertWidgetImage: EnqueueBackgroundActionResult;
  verifyEmailUser: EnqueueBackgroundActionResult;
};

export type BackgroundMutationsAddInventoryIfOutOfStockWidgetArgs = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsAddInventoryWidgetArgs = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  customName?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["GadgetID"]["input"];
  inStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<AddInventoryLocationInput>;
  relatedWidgets?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  widget?: InputMaybe<AddInventoryWidgetInput>;
};

export type BackgroundMutationsBarfAnErrorArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
};

export type BackgroundMutationsBendGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<BendGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsBreakGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<BreakGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsBulkAddInventoryIfOutOfStockWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkAddInventoryIfOutOfStockWidgetsInput>;
};

export type BackgroundMutationsBulkAddInventoryWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkAddInventoryWidgetsInput>;
};

export type BackgroundMutationsBulkBendGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkBendGizmosInput>;
};

export type BackgroundMutationsBulkBreakGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkBreakGizmosInput>;
};

export type BackgroundMutationsBulkChangePasswordUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkChangePasswordUsersInput>;
};

export type BackgroundMutationsBulkCreateBillingAccountsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateBillingAccountsInput>;
};

export type BackgroundMutationsBulkCreateCitiesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateCitiesInput>;
};

export type BackgroundMutationsBulkCreateCoursesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateCoursesInput>;
};

export type BackgroundMutationsBulkCreateCustomersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateCustomersInput>;
};

export type BackgroundMutationsBulkCreateEphemeralsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateEphemeralsInput>;
};

export type BackgroundMutationsBulkCreateFieldlessesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<Scalars["JSON"]["input"]>;
};

export type BackgroundMutationsBulkCreateFriendshipsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateFriendshipsInput>;
};

export type BackgroundMutationsBulkCreateGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateGizmosInput>;
};

export type BackgroundMutationsBulkCreateRegistrationsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateRegistrationsInput>;
};

export type BackgroundMutationsBulkCreateSampleModelToTestReallyLongModelNamesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateSampleModelToTestReallyLongModelNamesInput>;
};

export type BackgroundMutationsBulkCreateSectionsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateSectionsInput>;
};

export type BackgroundMutationsBulkCreateSprocketsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateSprocketsInput>;
};

export type BackgroundMutationsBulkCreateStudentsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateStudentsInput>;
};

export type BackgroundMutationsBulkCreateTeachersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateTeachersInput>;
};

export type BackgroundMutationsBulkCreateWidgetImagesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateWidgetImagesInput>;
};

export type BackgroundMutationsBulkCreateWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkCreateWidgetsInput>;
};

export type BackgroundMutationsBulkDeleteBillingAccountsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteCitiesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteCoursesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteCustomersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteEphemeralsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteFieldlessesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteFriendshipsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteRegistrationsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteSampleModelToTestReallyLongModelNamesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteSectionsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteSprocketsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteStudentsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteTeachersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteWidgetImagesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkDeleteWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkFlipDownWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkFlipUpWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkFoldGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkFoldGizmosInput>;
};

export type BackgroundMutationsBulkOtherCreateGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkOtherCreateGizmosInput>;
};

export type BackgroundMutationsBulkResetPasswordUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkResetPasswordUsersInput>;
};

export type BackgroundMutationsBulkSendResetPasswordUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkSendResetPasswordUsersInput>;
};

export type BackgroundMutationsBulkSendVerifyEmailUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkSendVerifyEmailUsersInput>;
};

export type BackgroundMutationsBulkSignInUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkSignInUsersInput>;
};

export type BackgroundMutationsBulkSignOutUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkSignUpUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkSignUpUsersInput>;
};

export type BackgroundMutationsBulkStraightenGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkStraightenGizmosInput>;
};

export type BackgroundMutationsBulkUnfoldGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUnfoldGizmosInput>;
};

export type BackgroundMutationsBulkUpdateBillingAccountsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateBillingAccountsInput>;
};

export type BackgroundMutationsBulkUpdateCitiesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateCitiesInput>;
};

export type BackgroundMutationsBulkUpdateCoursesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateCoursesInput>;
};

export type BackgroundMutationsBulkUpdateCustomersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateCustomersInput>;
};

export type BackgroundMutationsBulkUpdateEphemeralsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateEphemeralsInput>;
};

export type BackgroundMutationsBulkUpdateFieldlessesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type BackgroundMutationsBulkUpdateFriendshipsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateFriendshipsInput>;
};

export type BackgroundMutationsBulkUpdateGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateGizmosInput>;
};

export type BackgroundMutationsBulkUpdateRegistrationsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateRegistrationsInput>;
};

export type BackgroundMutationsBulkUpdateSampleModelToTestReallyLongModelNamesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateSampleModelToTestReallyLongModelNamesInput>;
};

export type BackgroundMutationsBulkUpdateSectionsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateSectionsInput>;
};

export type BackgroundMutationsBulkUpdateSprocketsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateSprocketsInput>;
};

export type BackgroundMutationsBulkUpdateStudentsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateStudentsInput>;
};

export type BackgroundMutationsBulkUpdateTeachersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateTeachersInput>;
};

export type BackgroundMutationsBulkUpdateUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateUsersInput>;
};

export type BackgroundMutationsBulkUpdateWidgetImagesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateWidgetImagesInput>;
};

export type BackgroundMutationsBulkUpdateWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpdateWidgetsInput>;
};

export type BackgroundMutationsBulkUpsertBillingAccountsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertBillingAccountsInput>;
};

export type BackgroundMutationsBulkUpsertCitiesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertCitiesInput>;
};

export type BackgroundMutationsBulkUpsertCoursesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertCoursesInput>;
};

export type BackgroundMutationsBulkUpsertCustomersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertCustomersInput>;
};

export type BackgroundMutationsBulkUpsertEphemeralsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertEphemeralsInput>;
};

export type BackgroundMutationsBulkUpsertFieldlessesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertFieldlessesInput>;
};

export type BackgroundMutationsBulkUpsertFriendshipsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertFriendshipsInput>;
};

export type BackgroundMutationsBulkUpsertGizmosArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertGizmosInput>;
};

export type BackgroundMutationsBulkUpsertRegistrationsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertRegistrationsInput>;
};

export type BackgroundMutationsBulkUpsertSampleModelToTestReallyLongModelNamesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertSampleModelToTestReallyLongModelNamesInput>;
};

export type BackgroundMutationsBulkUpsertSectionsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertSectionsInput>;
};

export type BackgroundMutationsBulkUpsertSprocketsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertSprocketsInput>;
};

export type BackgroundMutationsBulkUpsertStudentsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertStudentsInput>;
};

export type BackgroundMutationsBulkUpsertTeachersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertTeachersInput>;
};

export type BackgroundMutationsBulkUpsertUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertUsersInput>;
};

export type BackgroundMutationsBulkUpsertWidgetImagesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertWidgetImagesInput>;
};

export type BackgroundMutationsBulkUpsertWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkUpsertWidgetsInput>;
};

export type BackgroundMutationsBulkVerifyEmailUsersArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  inputs: Array<BulkVerifyEmailUsersInput>;
};

export type BackgroundMutationsChangePasswordUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  currentPassword?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["GadgetID"]["input"];
  newPassword?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsCreateBillingAccountArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  billingAccount?: InputMaybe<CreateBillingAccountInput>;
};

export type BackgroundMutationsCreateCityArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  city?: InputMaybe<CreateCityInput>;
};

export type BackgroundMutationsCreateCourseArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  course?: InputMaybe<CreateCourseInput>;
};

export type BackgroundMutationsCreateCustomerArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  customer?: InputMaybe<CreateCustomerInput>;
};

export type BackgroundMutationsCreateEphemeralArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ephemeral?: InputMaybe<CreateEphemeralInput>;
};

export type BackgroundMutationsCreateFieldlessArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
};

export type BackgroundMutationsCreateFriendshipArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  friendship?: InputMaybe<CreateFriendshipInput>;
};

export type BackgroundMutationsCreateGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<CreateGizmoInput>;
};

export type BackgroundMutationsCreateRegistrationArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  registration?: InputMaybe<CreateRegistrationInput>;
};

export type BackgroundMutationsCreateSampleModelToTestReallyLongModelNamesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  sampleModelToTestReallyLongModelNames?: InputMaybe<CreateSampleModelToTestReallyLongModelNamesInput>;
};

export type BackgroundMutationsCreateSectionArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  section?: InputMaybe<CreateSectionInput>;
};

export type BackgroundMutationsCreateSprocketArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  sprocket?: InputMaybe<CreateSprocketInput>;
};

export type BackgroundMutationsCreateStudentArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  student?: InputMaybe<CreateStudentInput>;
};

export type BackgroundMutationsCreateTeacherArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  teacher?: InputMaybe<CreateTeacherInput>;
};

export type BackgroundMutationsCreateWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  widget?: InputMaybe<CreateWidgetInput>;
};

export type BackgroundMutationsCreateWidgetImageArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  widgetImage?: InputMaybe<CreateWidgetImageInput>;
};

export type BackgroundMutationsDeleteBillingAccountArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteCityArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteCourseArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteCustomerArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteEphemeralArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteFieldlessArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteFriendshipArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteRegistrationArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteSampleModelToTestReallyLongModelNamesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteSectionArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteSprocketArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteStudentArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsDeleteTeacherArgs = {
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

export type BackgroundMutationsDeleteWidgetImageArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsFlipAllWidgetsArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
};

export type BackgroundMutationsFlipDownWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsFlipUpWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsFoldGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<FoldGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsLogParamsArgs = {
  arr?: InputMaybe<Array<Scalars["String"]["input"]>>;
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  str?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsOtherCreateGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<OtherCreateGizmoInput>;
};

export type BackgroundMutationsResetPasswordUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsSendResetPasswordUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsSendVerifyEmailUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsSignInUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsSignOutUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsSignUpUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type BackgroundMutationsStraightenGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<StraightenGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUnfoldGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<UnfoldGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateBillingAccountArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  billingAccount?: InputMaybe<UpdateBillingAccountInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateCityArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  city?: InputMaybe<UpdateCityInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateCourseArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  course?: InputMaybe<UpdateCourseInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateCustomerArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  customer?: InputMaybe<UpdateCustomerInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateEphemeralArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ephemeral?: InputMaybe<UpdateEphemeralInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateFieldlessArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateFriendshipArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  friendship?: InputMaybe<UpdateFriendshipInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<UpdateGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type BackgroundMutationsUpdateRegistrationArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  registration?: InputMaybe<UpdateRegistrationInput>;
};

export type BackgroundMutationsUpdateSampleModelToTestReallyLongModelNamesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  sampleModelToTestReallyLongModelNames?: InputMaybe<UpdateSampleModelToTestReallyLongModelNamesInput>;
};

export type BackgroundMutationsUpdateSectionArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  section?: InputMaybe<UpdateSectionInput>;
};

export type BackgroundMutationsUpdateSprocketArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  sprocket?: InputMaybe<UpdateSprocketInput>;
};

export type BackgroundMutationsUpdateStudentArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  student?: InputMaybe<UpdateStudentInput>;
};

export type BackgroundMutationsUpdateTeacherArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  teacher?: InputMaybe<UpdateTeacherInput>;
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

export type BackgroundMutationsUpdateWidgetImageArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  id: Scalars["GadgetID"]["input"];
  widgetImage?: InputMaybe<UpdateWidgetImageInput>;
};

export type BackgroundMutationsUpsertBillingAccountArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  billingAccount?: InputMaybe<UpsertBillingAccountInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertCityArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  city?: InputMaybe<UpsertCityInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertCourseArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  course?: InputMaybe<UpsertCourseInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertCustomerArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  customer?: InputMaybe<UpsertCustomerInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertEphemeralArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  ephemeral?: InputMaybe<UpsertEphemeralInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertFieldlessArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  fieldless?: InputMaybe<UpsertFieldlessInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertFriendshipArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  friendship?: InputMaybe<UpsertFriendshipInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertGizmoArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  gizmo?: InputMaybe<UpsertGizmoInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BackgroundMutationsUpsertRegistrationArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  registration?: InputMaybe<UpsertRegistrationInput>;
};

export type BackgroundMutationsUpsertSampleModelToTestReallyLongModelNamesArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sampleModelToTestReallyLongModelNames?: InputMaybe<UpsertSampleModelToTestReallyLongModelNamesInput>;
};

export type BackgroundMutationsUpsertSectionArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  section?: InputMaybe<UpsertSectionInput>;
};

export type BackgroundMutationsUpsertSprocketArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sprocket?: InputMaybe<UpsertSprocketInput>;
};

export type BackgroundMutationsUpsertStudentArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  student?: InputMaybe<UpsertStudentInput>;
};

export type BackgroundMutationsUpsertTeacherArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teacher?: InputMaybe<UpsertTeacherInput>;
};

export type BackgroundMutationsUpsertUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<UpsertUserInput>;
};

export type BackgroundMutationsUpsertWidgetArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widget?: InputMaybe<UpsertWidgetInput>;
};

export type BackgroundMutationsUpsertWidgetImageArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widgetImage?: InputMaybe<UpsertWidgetImageInput>;
};

export type BackgroundMutationsVerifyEmailUserArgs = {
  backgroundOptions?: InputMaybe<EnqueueBackgroundActionOptions>;
  code?: InputMaybe<Scalars["String"]["input"]>;
};

export type BarfAnErrorGamePlayerResult = {
  __typename?: "BarfAnErrorGamePlayerResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  player?: Maybe<GamePlayer>;
  success: Scalars["Boolean"]["output"];
};

export type BarfAnErrorResult = {
  __typename?: "BarfAnErrorResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type BendGizmoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type BendGizmoResult = {
  __typename?: "BendGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type BillingAccount = {
  __typename?: "BillingAccount";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  balance?: Maybe<Scalars["Float"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["GadgetID"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of BillingAccount items. */
export type BillingAccountConnection = {
  __typename?: "BillingAccountConnection";
  /** A list of edges. */
  edges: Array<BillingAccountEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a BillingAccount connection. */
export type BillingAccountEdge = {
  __typename?: "BillingAccountEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: BillingAccount;
};

export type BillingAccountFilter = {
  AND?: InputMaybe<Array<InputMaybe<BillingAccountFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<BillingAccountFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BillingAccountFilter>>>;
  balance?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<IdFilter>;
  customerId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type BillingAccountHasOneInput = {
  create?: InputMaybe<NestedBillingAccountCreateInput>;
  delete?: InputMaybe<NestedBillingAccountDeleteInput>;
  update?: InputMaybe<NestedBillingAccountUpdateInput>;
};

export type BillingAccountSort = {
  /** Sort the results by the balance field. Defaults to ascending (smallest value first). */
  balance?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  notEquals?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BreakGizmoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type BreakGizmoResult = {
  __typename?: "BreakGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type BulkAddInventoryIfOutOfStockWidgetsInput = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the addInventoryIfOutOfStock on the widget model in bulk. */
export type BulkAddInventoryIfOutOfStockWidgetsResult = {
  __typename?: "BulkAddInventoryIfOutOfStockWidgetsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed widget records by each sent bulk action. Returned in the same order as the input bulk action params. */
  widgets?: Maybe<Array<Maybe<Widget>>>;
};

export type BulkAddInventoryWidgetsInput = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  customName?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["GadgetID"]["input"];
  inStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<AddInventoryLocationInput>;
  /** An array of Floats */
  relatedWidgets?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  widget?: InputMaybe<AddInventoryWidgetInput>;
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

/** The output when running the barfAnError on the game/player model in bulk. */
export type BulkBarfAnErrorGamePlayersResult = {
  __typename?: "BulkBarfAnErrorGamePlayersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed game/player records by each sent bulk action. Returned in the same order as the input bulk action params. */
  players?: Maybe<Array<Maybe<GamePlayer>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkBendGizmosInput = {
  gizmo?: InputMaybe<BendGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the bend on the gizmo model in bulk. */
export type BulkBendGizmosResult = {
  __typename?: "BulkBendGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed gizmo records by each sent bulk action. Returned in the same order as the input bulk action params. */
  gizmos?: Maybe<Array<Maybe<Gizmo>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkBreakGizmosInput = {
  gizmo?: InputMaybe<BreakGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the break on the gizmo model in bulk. */
export type BulkBreakGizmosResult = {
  __typename?: "BulkBreakGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed gizmo records by each sent bulk action. Returned in the same order as the input bulk action params. */
  gizmos?: Maybe<Array<Maybe<Gizmo>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkChangePasswordUsersInput = {
  currentPassword?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["GadgetID"]["input"];
  newPassword?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output when running the changePassword on the user model in bulk. */
export type BulkChangePasswordUsersResult = {
  __typename?: "BulkChangePasswordUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: Maybe<Array<Maybe<User>>>;
};

export type BulkCreateBillingAccountsInput = {
  billingAccount?: InputMaybe<CreateBillingAccountInput>;
};

/** The output when running the create on the billingAccount model in bulk. */
export type BulkCreateBillingAccountsResult = {
  __typename?: "BulkCreateBillingAccountsResult";
  /** The list of all changed billingAccount records by each sent bulk action. Returned in the same order as the input bulk action params. */
  billingAccounts?: Maybe<Array<Maybe<BillingAccount>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateCitiesInput = {
  city?: InputMaybe<CreateCityInput>;
};

/** The output when running the create on the city model in bulk. */
export type BulkCreateCitiesResult = {
  __typename?: "BulkCreateCitiesResult";
  /** The list of all changed city records by each sent bulk action. Returned in the same order as the input bulk action params. */
  cities?: Maybe<Array<Maybe<City>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateCoursesInput = {
  course?: InputMaybe<CreateCourseInput>;
};

/** The output when running the create on the course model in bulk. */
export type BulkCreateCoursesResult = {
  __typename?: "BulkCreateCoursesResult";
  /** The list of all changed course records by each sent bulk action. Returned in the same order as the input bulk action params. */
  courses?: Maybe<Array<Maybe<Course>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateCustomersInput = {
  customer?: InputMaybe<CreateCustomerInput>;
};

/** The output when running the create on the customer model in bulk. */
export type BulkCreateCustomersResult = {
  __typename?: "BulkCreateCustomersResult";
  /** The list of all changed customer records by each sent bulk action. Returned in the same order as the input bulk action params. */
  customers?: Maybe<Array<Maybe<Customer>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateEphemeralsInput = {
  ephemeral?: InputMaybe<CreateEphemeralInput>;
};

/** The output when running the create on the ephemeral model in bulk. */
export type BulkCreateEphemeralsResult = {
  __typename?: "BulkCreateEphemeralsResult";
  /** The list of all changed ephemeral records by each sent bulk action. Returned in the same order as the input bulk action params. */
  ephemerals?: Maybe<Array<Maybe<Ephemeral>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the create on the fieldless model in bulk. */
export type BulkCreateFieldlessesResult = {
  __typename?: "BulkCreateFieldlessesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed fieldless records by each sent bulk action. Returned in the same order as the input bulk action params. */
  fieldlesses?: Maybe<Array<Maybe<Fieldless>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateFriendshipsInput = {
  friendship?: InputMaybe<CreateFriendshipInput>;
};

/** The output when running the create on the friendship model in bulk. */
export type BulkCreateFriendshipsResult = {
  __typename?: "BulkCreateFriendshipsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed friendship records by each sent bulk action. Returned in the same order as the input bulk action params. */
  friendships?: Maybe<Array<Maybe<Friendship>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateGamePlayersInput = {
  player?: InputMaybe<CreateGamePlayerInput>;
};

/** The output when running the create on the game/player model in bulk. */
export type BulkCreateGamePlayersResult = {
  __typename?: "BulkCreateGamePlayersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed game/player records by each sent bulk action. Returned in the same order as the input bulk action params. */
  players?: Maybe<Array<Maybe<GamePlayer>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateGameRoundsInput = {
  round?: InputMaybe<CreateGameRoundInput>;
};

/** The output when running the create on the game/round model in bulk. */
export type BulkCreateGameRoundsResult = {
  __typename?: "BulkCreateGameRoundsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed game/round records by each sent bulk action. Returned in the same order as the input bulk action params. */
  rounds?: Maybe<Array<Maybe<GameRound>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateGameStadiaInput = {
  stadium?: InputMaybe<CreateGameStadiumInput>;
};

/** The output when running the create on the game/stadium model in bulk. */
export type BulkCreateGameStadiaResult = {
  __typename?: "BulkCreateGameStadiaResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed game/stadium records by each sent bulk action. Returned in the same order as the input bulk action params. */
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

export type BulkCreateLandmarkStadiaInput = {
  stadium?: InputMaybe<CreateLandmarkStadiumInput>;
};

/** The output when running the create on the landmark/stadium model in bulk. */
export type BulkCreateLandmarkStadiaResult = {
  __typename?: "BulkCreateLandmarkStadiaResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed landmark/stadium records by each sent bulk action. Returned in the same order as the input bulk action params. */
  stadia?: Maybe<Array<Maybe<LandmarkStadium>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateRegistrationsInput = {
  registration?: InputMaybe<CreateRegistrationInput>;
};

/** The output when running the create on the registration model in bulk. */
export type BulkCreateRegistrationsResult = {
  __typename?: "BulkCreateRegistrationsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed registration records by each sent bulk action. Returned in the same order as the input bulk action params. */
  registrations?: Maybe<Array<Maybe<Registration>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateSampleModelToTestReallyLongModelNamesInput = {
  sampleModelToTestReallyLongModelNames?: InputMaybe<CreateSampleModelToTestReallyLongModelNamesInput>;
};

/** The output when running the create on the sampleModelToTestReallyLongModelNames model in bulk. */
export type BulkCreateSampleModelToTestReallyLongModelNamesResult = {
  __typename?: "BulkCreateSampleModelToTestReallyLongModelNamesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed sampleModelToTestReallyLongModelNames records by each sent bulk action. Returned in the same order as the input bulk action params. */
  sampleModelToTestReallyLongModelNamess?: Maybe<Array<Maybe<SampleModelToTestReallyLongModelNames>>>;
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

export type BulkCreateSprocketsInput = {
  sprocket?: InputMaybe<CreateSprocketInput>;
};

/** The output when running the create on the sprocket model in bulk. */
export type BulkCreateSprocketsResult = {
  __typename?: "BulkCreateSprocketsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed sprocket records by each sent bulk action. Returned in the same order as the input bulk action params. */
  sprockets?: Maybe<Array<Maybe<Sprocket>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateStudentsInput = {
  student?: InputMaybe<CreateStudentInput>;
};

/** The output when running the create on the student model in bulk. */
export type BulkCreateStudentsResult = {
  __typename?: "BulkCreateStudentsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed student records by each sent bulk action. Returned in the same order as the input bulk action params. */
  students?: Maybe<Array<Maybe<Student>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkCreateTeachersInput = {
  teacher?: InputMaybe<CreateTeacherInput>;
};

/** The output when running the create on the teacher model in bulk. */
export type BulkCreateTeachersResult = {
  __typename?: "BulkCreateTeachersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed teacher records by each sent bulk action. Returned in the same order as the input bulk action params. */
  teachers?: Maybe<Array<Maybe<Teacher>>>;
};

export type BulkCreateWidgetImagesInput = {
  widgetImage?: InputMaybe<CreateWidgetImageInput>;
};

/** The output when running the create on the widgetImage model in bulk. */
export type BulkCreateWidgetImagesResult = {
  __typename?: "BulkCreateWidgetImagesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed widgetImage records by each sent bulk action. Returned in the same order as the input bulk action params. */
  widgetImages?: Maybe<Array<Maybe<WidgetImage>>>;
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

/** The output when running the delete on the billingAccount model in bulk. */
export type BulkDeleteBillingAccountsResult = {
  __typename?: "BulkDeleteBillingAccountsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the city model in bulk. */
export type BulkDeleteCitiesResult = {
  __typename?: "BulkDeleteCitiesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the course model in bulk. */
export type BulkDeleteCoursesResult = {
  __typename?: "BulkDeleteCoursesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the customer model in bulk. */
export type BulkDeleteCustomersResult = {
  __typename?: "BulkDeleteCustomersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the ephemeral model in bulk. */
export type BulkDeleteEphemeralsResult = {
  __typename?: "BulkDeleteEphemeralsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the fieldless model in bulk. */
export type BulkDeleteFieldlessesResult = {
  __typename?: "BulkDeleteFieldlessesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the friendship model in bulk. */
export type BulkDeleteFriendshipsResult = {
  __typename?: "BulkDeleteFriendshipsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the game/player model in bulk. */
export type BulkDeleteGamePlayersResult = {
  __typename?: "BulkDeleteGamePlayersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the game/round model in bulk. */
export type BulkDeleteGameRoundsResult = {
  __typename?: "BulkDeleteGameRoundsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the game/stadium model in bulk. */
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

/** The output when running the delete on the landmark/stadium model in bulk. */
export type BulkDeleteLandmarkStadiaResult = {
  __typename?: "BulkDeleteLandmarkStadiaResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the registration model in bulk. */
export type BulkDeleteRegistrationsResult = {
  __typename?: "BulkDeleteRegistrationsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the sampleModelToTestReallyLongModelNames model in bulk. */
export type BulkDeleteSampleModelToTestReallyLongModelNamesResult = {
  __typename?: "BulkDeleteSampleModelToTestReallyLongModelNamesResult";
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

/** The output when running the delete on the sprocket model in bulk. */
export type BulkDeleteSprocketsResult = {
  __typename?: "BulkDeleteSprocketsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the student model in bulk. */
export type BulkDeleteStudentsResult = {
  __typename?: "BulkDeleteStudentsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the delete on the teacher model in bulk. */
export type BulkDeleteTeachersResult = {
  __typename?: "BulkDeleteTeachersResult";
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

/** The output when running the delete on the widgetImage model in bulk. */
export type BulkDeleteWidgetImagesResult = {
  __typename?: "BulkDeleteWidgetImagesResult";
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

/** The output when running the flipDown on the widget model in bulk. */
export type BulkFlipDownWidgetsResult = {
  __typename?: "BulkFlipDownWidgetsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed widget records by each sent bulk action. Returned in the same order as the input bulk action params. */
  widgets?: Maybe<Array<Maybe<Widget>>>;
};

/** The output when running the flipUp on the widget model in bulk. */
export type BulkFlipUpWidgetsResult = {
  __typename?: "BulkFlipUpWidgetsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed widget records by each sent bulk action. Returned in the same order as the input bulk action params. */
  widgets?: Maybe<Array<Maybe<Widget>>>;
};

export type BulkFoldGizmosInput = {
  gizmo?: InputMaybe<FoldGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the fold on the gizmo model in bulk. */
export type BulkFoldGizmosResult = {
  __typename?: "BulkFoldGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed gizmo records by each sent bulk action. Returned in the same order as the input bulk action params. */
  gizmos?: Maybe<Array<Maybe<Gizmo>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkOtherCreateGizmosInput = {
  gizmo?: InputMaybe<OtherCreateGizmoInput>;
};

/** The output when running the otherCreate on the gizmo model in bulk. */
export type BulkOtherCreateGizmosResult = {
  __typename?: "BulkOtherCreateGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed gizmo records by each sent bulk action. Returned in the same order as the input bulk action params. */
  gizmos?: Maybe<Array<Maybe<Gizmo>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkResetPasswordUsersInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output when running the resetPassword on the user model in bulk. */
export type BulkResetPasswordUsersResult = {
  __typename?: "BulkResetPasswordUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: Maybe<Array<Maybe<Scalars["JSON"]["output"]>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkSendResetPasswordUsersInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output when running the sendResetPassword on the user model in bulk. */
export type BulkSendResetPasswordUsersResult = {
  __typename?: "BulkSendResetPasswordUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: Maybe<Array<Maybe<Scalars["JSON"]["output"]>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkSendVerifyEmailUsersInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output when running the sendVerifyEmail on the user model in bulk. */
export type BulkSendVerifyEmailUsersResult = {
  __typename?: "BulkSendVerifyEmailUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: Maybe<Array<Maybe<Scalars["JSON"]["output"]>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the setBestNumber on the game/player model in bulk. */
export type BulkSetBestNumberGamePlayersResult = {
  __typename?: "BulkSetBestNumberGamePlayersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed game/player records by each sent bulk action. Returned in the same order as the input bulk action params. */
  players?: Maybe<Array<Maybe<GamePlayer>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkSignInUsersInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
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
  email?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output when running the signUp on the user model in bulk. */
export type BulkSignUpUsersResult = {
  __typename?: "BulkSignUpUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: Maybe<Array<Maybe<Scalars["JSON"]["output"]>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkStraightenGizmosInput = {
  gizmo?: InputMaybe<StraightenGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the straighten on the gizmo model in bulk. */
export type BulkStraightenGizmosResult = {
  __typename?: "BulkStraightenGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed gizmo records by each sent bulk action. Returned in the same order as the input bulk action params. */
  gizmos?: Maybe<Array<Maybe<Gizmo>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUnfoldGizmosInput = {
  gizmo?: InputMaybe<UnfoldGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the unfold on the gizmo model in bulk. */
export type BulkUnfoldGizmosResult = {
  __typename?: "BulkUnfoldGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed gizmo records by each sent bulk action. Returned in the same order as the input bulk action params. */
  gizmos?: Maybe<Array<Maybe<Gizmo>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateBillingAccountsInput = {
  billingAccount?: InputMaybe<UpdateBillingAccountInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the billingAccount model in bulk. */
export type BulkUpdateBillingAccountsResult = {
  __typename?: "BulkUpdateBillingAccountsResult";
  /** The list of all changed billingAccount records by each sent bulk action. Returned in the same order as the input bulk action params. */
  billingAccounts?: Maybe<Array<Maybe<BillingAccount>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateCitiesInput = {
  city?: InputMaybe<UpdateCityInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the city model in bulk. */
export type BulkUpdateCitiesResult = {
  __typename?: "BulkUpdateCitiesResult";
  /** The list of all changed city records by each sent bulk action. Returned in the same order as the input bulk action params. */
  cities?: Maybe<Array<Maybe<City>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateCoursesInput = {
  course?: InputMaybe<UpdateCourseInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the course model in bulk. */
export type BulkUpdateCoursesResult = {
  __typename?: "BulkUpdateCoursesResult";
  /** The list of all changed course records by each sent bulk action. Returned in the same order as the input bulk action params. */
  courses?: Maybe<Array<Maybe<Course>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateCustomersInput = {
  customer?: InputMaybe<UpdateCustomerInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the customer model in bulk. */
export type BulkUpdateCustomersResult = {
  __typename?: "BulkUpdateCustomersResult";
  /** The list of all changed customer records by each sent bulk action. Returned in the same order as the input bulk action params. */
  customers?: Maybe<Array<Maybe<Customer>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateEphemeralsInput = {
  ephemeral?: InputMaybe<UpdateEphemeralInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the ephemeral model in bulk. */
export type BulkUpdateEphemeralsResult = {
  __typename?: "BulkUpdateEphemeralsResult";
  /** The list of all changed ephemeral records by each sent bulk action. Returned in the same order as the input bulk action params. */
  ephemerals?: Maybe<Array<Maybe<Ephemeral>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

/** The output when running the update on the fieldless model in bulk. */
export type BulkUpdateFieldlessesResult = {
  __typename?: "BulkUpdateFieldlessesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed fieldless records by each sent bulk action. Returned in the same order as the input bulk action params. */
  fieldlesses?: Maybe<Array<Maybe<Fieldless>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateFriendshipsInput = {
  friendship?: InputMaybe<UpdateFriendshipInput>;
  id: Scalars["GadgetID"]["input"];
};

/** The output when running the update on the friendship model in bulk. */
export type BulkUpdateFriendshipsResult = {
  __typename?: "BulkUpdateFriendshipsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed friendship records by each sent bulk action. Returned in the same order as the input bulk action params. */
  friendships?: Maybe<Array<Maybe<Friendship>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateGamePlayersInput = {
  id: Scalars["GadgetID"]["input"];
  player?: InputMaybe<UpdateGamePlayerInput>;
};

/** The output when running the update on the game/player model in bulk. */
export type BulkUpdateGamePlayersResult = {
  __typename?: "BulkUpdateGamePlayersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed game/player records by each sent bulk action. Returned in the same order as the input bulk action params. */
  players?: Maybe<Array<Maybe<GamePlayer>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateGameRoundsInput = {
  id: Scalars["GadgetID"]["input"];
  round?: InputMaybe<UpdateGameRoundInput>;
};

/** The output when running the update on the game/round model in bulk. */
export type BulkUpdateGameRoundsResult = {
  __typename?: "BulkUpdateGameRoundsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed game/round records by each sent bulk action. Returned in the same order as the input bulk action params. */
  rounds?: Maybe<Array<Maybe<GameRound>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateGameStadiaInput = {
  id: Scalars["GadgetID"]["input"];
  stadium?: InputMaybe<UpdateGameStadiumInput>;
};

/** The output when running the update on the game/stadium model in bulk. */
export type BulkUpdateGameStadiaResult = {
  __typename?: "BulkUpdateGameStadiaResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed game/stadium records by each sent bulk action. Returned in the same order as the input bulk action params. */
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

export type BulkUpdateLandmarkStadiaInput = {
  id: Scalars["GadgetID"]["input"];
  stadium?: InputMaybe<UpdateLandmarkStadiumInput>;
};

/** The output when running the update on the landmark/stadium model in bulk. */
export type BulkUpdateLandmarkStadiaResult = {
  __typename?: "BulkUpdateLandmarkStadiaResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed landmark/stadium records by each sent bulk action. Returned in the same order as the input bulk action params. */
  stadia?: Maybe<Array<Maybe<LandmarkStadium>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateRegistrationsInput = {
  id: Scalars["GadgetID"]["input"];
  registration?: InputMaybe<UpdateRegistrationInput>;
};

/** The output when running the update on the registration model in bulk. */
export type BulkUpdateRegistrationsResult = {
  __typename?: "BulkUpdateRegistrationsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed registration records by each sent bulk action. Returned in the same order as the input bulk action params. */
  registrations?: Maybe<Array<Maybe<Registration>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateSampleModelToTestReallyLongModelNamesInput = {
  id: Scalars["GadgetID"]["input"];
  sampleModelToTestReallyLongModelNames?: InputMaybe<UpdateSampleModelToTestReallyLongModelNamesInput>;
};

/** The output when running the update on the sampleModelToTestReallyLongModelNames model in bulk. */
export type BulkUpdateSampleModelToTestReallyLongModelNamesResult = {
  __typename?: "BulkUpdateSampleModelToTestReallyLongModelNamesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed sampleModelToTestReallyLongModelNames records by each sent bulk action. Returned in the same order as the input bulk action params. */
  sampleModelToTestReallyLongModelNamess?: Maybe<Array<Maybe<SampleModelToTestReallyLongModelNames>>>;
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

export type BulkUpdateSprocketsInput = {
  id: Scalars["GadgetID"]["input"];
  sprocket?: InputMaybe<UpdateSprocketInput>;
};

/** The output when running the update on the sprocket model in bulk. */
export type BulkUpdateSprocketsResult = {
  __typename?: "BulkUpdateSprocketsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed sprocket records by each sent bulk action. Returned in the same order as the input bulk action params. */
  sprockets?: Maybe<Array<Maybe<Sprocket>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateStudentsInput = {
  id: Scalars["GadgetID"]["input"];
  student?: InputMaybe<UpdateStudentInput>;
};

/** The output when running the update on the student model in bulk. */
export type BulkUpdateStudentsResult = {
  __typename?: "BulkUpdateStudentsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of all changed student records by each sent bulk action. Returned in the same order as the input bulk action params. */
  students?: Maybe<Array<Maybe<Student>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpdateTeachersInput = {
  id: Scalars["GadgetID"]["input"];
  teacher?: InputMaybe<UpdateTeacherInput>;
};

/** The output when running the update on the teacher model in bulk. */
export type BulkUpdateTeachersResult = {
  __typename?: "BulkUpdateTeachersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed teacher records by each sent bulk action. Returned in the same order as the input bulk action params. */
  teachers?: Maybe<Array<Maybe<Teacher>>>;
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

export type BulkUpdateWidgetImagesInput = {
  id: Scalars["GadgetID"]["input"];
  widgetImage?: InputMaybe<UpdateWidgetImageInput>;
};

/** The output when running the update on the widgetImage model in bulk. */
export type BulkUpdateWidgetImagesResult = {
  __typename?: "BulkUpdateWidgetImagesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The list of all changed widgetImage records by each sent bulk action. Returned in the same order as the input bulk action params. */
  widgetImages?: Maybe<Array<Maybe<WidgetImage>>>;
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

export type BulkUpsertBillingAccountsInput = {
  billingAccount?: InputMaybe<UpsertBillingAccountInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the billingAccount model */
export type BulkUpsertBillingAccountsResult = {
  __typename?: "BulkUpsertBillingAccountsResult";
  /** The results of each upsert action in the bulk operation */
  billingAccounts?: Maybe<Array<Maybe<BillingAccount>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertCitiesInput = {
  city?: InputMaybe<UpsertCityInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the city model */
export type BulkUpsertCitiesResult = {
  __typename?: "BulkUpsertCitiesResult";
  /** The results of each upsert action in the bulk operation */
  cities?: Maybe<Array<Maybe<City>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertCoursesInput = {
  course?: InputMaybe<UpsertCourseInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the course model */
export type BulkUpsertCoursesResult = {
  __typename?: "BulkUpsertCoursesResult";
  /** The results of each upsert action in the bulk operation */
  courses?: Maybe<Array<Maybe<Course>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertCustomersInput = {
  customer?: InputMaybe<UpsertCustomerInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the customer model */
export type BulkUpsertCustomersResult = {
  __typename?: "BulkUpsertCustomersResult";
  /** The results of each upsert action in the bulk operation */
  customers?: Maybe<Array<Maybe<Customer>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertEphemeralsInput = {
  ephemeral?: InputMaybe<UpsertEphemeralInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the ephemeral model */
export type BulkUpsertEphemeralsResult = {
  __typename?: "BulkUpsertEphemeralsResult";
  /** The results of each upsert action in the bulk operation */
  ephemerals?: Maybe<Array<Maybe<Ephemeral>>>;
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertFieldlessesInput = {
  fieldless?: InputMaybe<UpsertFieldlessInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the fieldless model */
export type BulkUpsertFieldlessesResult = {
  __typename?: "BulkUpsertFieldlessesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  fieldlesses?: Maybe<Array<Maybe<Fieldless>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertFriendshipsInput = {
  friendship?: InputMaybe<UpsertFriendshipInput>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** The result of a bulk upsert operation for the friendship model */
export type BulkUpsertFriendshipsResult = {
  __typename?: "BulkUpsertFriendshipsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  friendships?: Maybe<Array<Maybe<Friendship>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertGamePlayersInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  player?: InputMaybe<UpsertGamePlayerInput>;
};

/** The result of a bulk upsert operation for the game/player model */
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

/** The result of a bulk upsert operation for the game/round model */
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

/** The result of a bulk upsert operation for the game/stadium model */
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

/** The result of a bulk upsert operation for the gizmo model */
export type BulkUpsertGizmosResult = {
  __typename?: "BulkUpsertGizmosResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  gizmos?: Maybe<Array<Maybe<Gizmo>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertLandmarkStadiaInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stadium?: InputMaybe<UpsertLandmarkStadiumInput>;
};

/** The result of a bulk upsert operation for the landmark/stadium model */
export type BulkUpsertLandmarkStadiaResult = {
  __typename?: "BulkUpsertLandmarkStadiaResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  stadia?: Maybe<Array<Maybe<LandmarkStadium>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertRegistrationsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  registration?: InputMaybe<UpsertRegistrationInput>;
};

/** The result of a bulk upsert operation for the registration model */
export type BulkUpsertRegistrationsResult = {
  __typename?: "BulkUpsertRegistrationsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  registrations?: Maybe<Array<Maybe<Registration>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertSampleModelToTestReallyLongModelNamesInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sampleModelToTestReallyLongModelNames?: InputMaybe<UpsertSampleModelToTestReallyLongModelNamesInput>;
};

/** The result of a bulk upsert operation for the sampleModelToTestReallyLongModelNames model */
export type BulkUpsertSampleModelToTestReallyLongModelNamesResult = {
  __typename?: "BulkUpsertSampleModelToTestReallyLongModelNamesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  sampleModelToTestReallyLongModelNamess?: Maybe<Array<Maybe<SampleModelToTestReallyLongModelNames>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertSectionsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  section?: InputMaybe<UpsertSectionInput>;
};

/** The result of a bulk upsert operation for the section model */
export type BulkUpsertSectionsResult = {
  __typename?: "BulkUpsertSectionsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  sections?: Maybe<Array<Maybe<Section>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertSprocketsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sprocket?: InputMaybe<UpsertSprocketInput>;
};

/** The result of a bulk upsert operation for the sprocket model */
export type BulkUpsertSprocketsResult = {
  __typename?: "BulkUpsertSprocketsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  sprockets?: Maybe<Array<Maybe<Sprocket>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertStudentsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  student?: InputMaybe<UpsertStudentInput>;
};

/** The result of a bulk upsert operation for the student model */
export type BulkUpsertStudentsResult = {
  __typename?: "BulkUpsertStudentsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The results of each upsert action in the bulk operation */
  students?: Maybe<Array<Maybe<Student>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type BulkUpsertTeachersInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teacher?: InputMaybe<UpsertTeacherInput>;
};

/** The result of a bulk upsert operation for the teacher model */
export type BulkUpsertTeachersResult = {
  __typename?: "BulkUpsertTeachersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The results of each upsert action in the bulk operation */
  teachers?: Maybe<Array<Maybe<Teacher>>>;
};

export type BulkUpsertUsersInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<UpsertUserInput>;
};

/** The result of a bulk upsert operation for the user model */
export type BulkUpsertUsersResult = {
  __typename?: "BulkUpsertUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The results of each upsert action in the bulk operation */
  users?: Maybe<Array<Maybe<UpsertUser>>>;
};

export type BulkUpsertWidgetImagesInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widgetImage?: InputMaybe<UpsertWidgetImageInput>;
};

/** The result of a bulk upsert operation for the widgetImage model */
export type BulkUpsertWidgetImagesResult = {
  __typename?: "BulkUpsertWidgetImagesResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The results of each upsert action in the bulk operation */
  widgetImages?: Maybe<Array<Maybe<WidgetImage>>>;
};

export type BulkUpsertWidgetsInput = {
  /** An array of Strings */
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widget?: InputMaybe<UpsertWidgetInput>;
};

/** The result of a bulk upsert operation for the widget model */
export type BulkUpsertWidgetsResult = {
  __typename?: "BulkUpsertWidgetsResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
  /** The results of each upsert action in the bulk operation */
  widgets?: Maybe<Array<Maybe<Widget>>>;
};

export type BulkVerifyEmailUsersInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output when running the verifyEmail on the user model in bulk. */
export type BulkVerifyEmailUsersResult = {
  __typename?: "BulkVerifyEmailUsersResult";
  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: Maybe<Array<ExecutionError>>;
  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: Maybe<Array<Maybe<Scalars["JSON"]["output"]>>>;
  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars["Boolean"]["output"];
};

export type ChangePasswordUserResult = {
  __typename?: "ChangePasswordUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<User>;
};

export type City = {
  __typename?: "City";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  students: StudentConnection;
  teachers: TeacherConnection;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type CityStudentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<StudentFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<StudentSort>>;
};

export type CityTeachersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<TeacherFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<TeacherSort>>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type CityBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedCityCreateInput>;
  delete?: InputMaybe<NestedCityDeleteInput>;
  update?: InputMaybe<NestedCityUpdateInput>;
};

/** A connection to a list of City items. */
export type CityConnection = {
  __typename?: "CityConnection";
  /** A list of edges. */
  edges: Array<CityEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a City connection. */
export type CityEdge = {
  __typename?: "CityEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: City;
};

export type CityFilter = {
  AND?: InputMaybe<Array<InputMaybe<CityFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<CityFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CityFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CitySort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
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
export type ConvergeCourseInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeCourseValues>>;
};

/** One element of a ConvergeCourseInput record converge list */
export type ConvergeCourseValues = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  offered?: InputMaybe<Scalars["Boolean"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  teacher?: InputMaybe<TeacherBelongsToInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Declaratively specifies the list of records a relationship should become and invokes the given actions in order to change the current state to get to the newly specified state. */
export type ConvergeFriendshipInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeFriendshipValues>>;
};

/** One element of a ConvergeFriendshipInput record converge list */
export type ConvergeFriendshipValues = {
  ended?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  followee?: InputMaybe<StudentBelongsToInput>;
  follower?: InputMaybe<StudentBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  started?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
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
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

/** Declaratively specifies the list of records a relationship should become and invokes the given actions in order to change the current state to get to the newly specified state. */
export type ConvergeRegistrationInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeRegistrationValues>>;
};

/** One element of a ConvergeRegistrationInput record converge list */
export type ConvergeRegistrationValues = {
  course?: InputMaybe<CourseBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  student?: InputMaybe<StudentBelongsToInput>;
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
  number?: InputMaybe<Scalars["Float"]["input"]>;
  player?: InputMaybe<PlayerBelongsToInput>;
};

/** Declaratively specifies the list of records a relationship should become and invokes the given actions in order to change the current state to get to the newly specified state. */
export type ConvergeSprocketInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeSprocketValues>>;
};

/** One element of a ConvergeSprocketInput record converge list */
export type ConvergeSprocketValues = {
  gizmo?: InputMaybe<GizmoBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  ratio?: InputMaybe<Scalars["Float"]["input"]>;
};

/** Declaratively specifies the list of records a relationship should become and invokes the given actions in order to change the current state to get to the newly specified state. */
export type ConvergeStudentInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeStudentValues>>;
};

/** One element of a ConvergeStudentInput record converge list */
export type ConvergeStudentValues = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyThroughInput>>>;
  followeeFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followees?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  followerFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followers?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  friendship?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
};

/** Declaratively specifies the list of records a relationship should become and invokes the given actions in order to change the current state to get to the newly specified state. */
export type ConvergeTeacherInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeTeacherValues>>;
};

/** One element of a ConvergeTeacherInput record converge list */
export type ConvergeTeacherValues = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyInput>>>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Declaratively specifies the list of records a relationship should become and invokes the given actions in order to change the current state to get to the newly specified state. */
export type ConvergeWidgetImageInput = {
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: InputMaybe<ConvergeActionMap>;
  /** The new list of records to converge to */
  values: Array<InputMaybe<ConvergeWidgetImageValues>>;
};

/** One element of a ConvergeWidgetImageInput record converge list */
export type ConvergeWidgetImageValues = {
  altText?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  image?: InputMaybe<StoredFileInput>;
  order?: InputMaybe<Scalars["Float"]["input"]>;
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
  cost?: InputMaybe<Scalars["CADCurrencyAmount"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phase?: InputMaybe<Scalars["WidgetPhaseEnum"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["WidgetStateEnum"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type Course = {
  __typename?: "Course";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  offered?: Maybe<Scalars["Boolean"]["output"]>;
  registrations: RegistrationConnection;
  students: StudentConnection;
  teacher?: Maybe<Teacher>;
  teacherId?: Maybe<Scalars["GadgetID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type CourseRegistrationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseStudentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type CourseBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedCourseCreateInput>;
  delete?: InputMaybe<NestedCourseDeleteInput>;
  update?: InputMaybe<NestedCourseUpdateInput>;
};

/** A connection to a list of Course items. */
export type CourseConnection = {
  __typename?: "CourseConnection";
  /** A list of edges. */
  edges: Array<CourseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Course connection. */
export type CourseEdge = {
  __typename?: "CourseEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Course;
};

export type CourseFilter = {
  AND?: InputMaybe<Array<InputMaybe<CourseFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<CourseFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CourseFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  offered?: InputMaybe<BooleanFilter>;
  teacher?: InputMaybe<IdFilter>;
  teacherId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type CourseHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeCourseInput>;
  create?: InputMaybe<NestedCourseCreateInput>;
  delete?: InputMaybe<NestedCourseDeleteInput>;
  update?: InputMaybe<NestedCourseUpdateInput>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type CourseHasManyThroughInput = {
  create?: InputMaybe<NestedCourseCreateInput>;
  delete?: InputMaybe<NestedCourseDeleteInput>;
  update?: InputMaybe<NestedCourseUpdateInput>;
};

export type CourseSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the offered field. Defaults to ascending (smallest value first). */
  offered?: InputMaybe<SortOrder>;
  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type CreateBillingAccountInput = {
  balance?: InputMaybe<Scalars["Float"]["input"]>;
  customer?: InputMaybe<CustomerBelongsToInput>;
};

export type CreateBillingAccountResult = UpsertBillingAccountResult & {
  __typename?: "CreateBillingAccountResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  billingAccount?: Maybe<BillingAccount>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CreateCityInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyInput>>>;
  teachers?: InputMaybe<Array<InputMaybe<TeacherHasManyInput>>>;
};

export type CreateCityResult = UpsertCityResult & {
  __typename?: "CreateCityResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<City>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CreateCourseInput = {
  offered?: InputMaybe<Scalars["Boolean"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  teacher?: InputMaybe<TeacherBelongsToInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateCourseResult = UpsertCourseResult & {
  __typename?: "CreateCourseResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  course?: Maybe<Course>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CreateCustomerInput = {
  billingAccount?: InputMaybe<BillingAccountHasOneInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateCustomerResult = UpsertCustomerResult & {
  __typename?: "CreateCustomerResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  customer?: Maybe<Customer>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CreateEphemeralInput = {
  data?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateEphemeralResult = UpsertEphemeralResult & {
  __typename?: "CreateEphemeralResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  ephemeral?: Maybe<Ephemeral>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type CreateFieldlessResult = UpsertFieldlessResult & {
  __typename?: "CreateFieldlessResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  fieldless?: Maybe<Fieldless>;
  success: Scalars["Boolean"]["output"];
};

export type CreateFriendshipInput = {
  ended?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  followee?: InputMaybe<StudentBelongsToInput>;
  follower?: InputMaybe<StudentBelongsToInput>;
  started?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
};

export type CreateFriendshipResult = UpsertFriendshipResult & {
  __typename?: "CreateFriendshipResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  friendship?: Maybe<Friendship>;
  success: Scalars["Boolean"]["output"];
};

export type CreateGamePlayerInput = {
  birthday?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["Float"]["input"]>;
  rounds?: InputMaybe<Array<InputMaybe<RoundHasManyInput>>>;
};

export type CreateGamePlayerResult = UpsertGamePlayerResult & {
  __typename?: "CreateGamePlayerResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  player?: Maybe<GamePlayer>;
  success: Scalars["Boolean"]["output"];
};

export type CreateGameRoundInput = {
  number?: InputMaybe<Scalars["Float"]["input"]>;
  player?: InputMaybe<PlayerBelongsToInput>;
};

export type CreateGameRoundResult = UpsertGameRoundResult & {
  __typename?: "CreateGameRoundResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  round?: Maybe<GameRound>;
  success: Scalars["Boolean"]["output"];
};

export type CreateGameStadiumInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
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
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type CreateGizmoResult = UpsertGizmoResult & {
  __typename?: "CreateGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type CreateLandmarkStadiumInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateLandmarkStadiumResult = UpsertLandmarkStadiumResult & {
  __typename?: "CreateLandmarkStadiumResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<LandmarkStadium>;
  success: Scalars["Boolean"]["output"];
};

export type CreateRegistrationInput = {
  course?: InputMaybe<CourseBelongsToInput>;
  student?: InputMaybe<StudentBelongsToInput>;
};

export type CreateRegistrationResult = UpsertRegistrationResult & {
  __typename?: "CreateRegistrationResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  registration?: Maybe<Registration>;
  success: Scalars["Boolean"]["output"];
};

export type CreateSampleModelToTestReallyLongModelNamesInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateSampleModelToTestReallyLongModelNamesResult = UpsertSampleModelToTestReallyLongModelNamesResult & {
  __typename?: "CreateSampleModelToTestReallyLongModelNamesResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  sampleModelToTestReallyLongModelNames?: Maybe<SampleModelToTestReallyLongModelNames>;
  success: Scalars["Boolean"]["output"];
};

export type CreateSectionInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type CreateSectionResult = UpsertSectionResult & {
  __typename?: "CreateSectionResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  section?: Maybe<Section>;
  success: Scalars["Boolean"]["output"];
};

export type CreateSprocketInput = {
  gizmo?: InputMaybe<GizmoBelongsToInput>;
  ratio?: InputMaybe<Scalars["Float"]["input"]>;
};

export type CreateSprocketResult = UpsertSprocketResult & {
  __typename?: "CreateSprocketResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  sprocket?: Maybe<Sprocket>;
  success: Scalars["Boolean"]["output"];
};

export type CreateStudentInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyThroughInput>>>;
  followeeFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followees?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  followerFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followers?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  friendship?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  friendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
};

export type CreateStudentResult = UpsertStudentResult & {
  __typename?: "CreateStudentResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  student?: Maybe<Student>;
  success: Scalars["Boolean"]["output"];
};

export type CreateTeacherInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyInput>>>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateTeacherResult = UpsertTeacherResult & {
  __typename?: "CreateTeacherResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  teacher?: Maybe<Teacher>;
};

export type CreateWidgetImageInput = {
  altText?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<StoredFileInput>;
  order?: InputMaybe<Scalars["Float"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type CreateWidgetImageResult = UpsertWidgetImageResult & {
  __typename?: "CreateWidgetImageResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widgetImage?: Maybe<WidgetImage>;
};

export type CreateWidgetInput = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  cost?: InputMaybe<Scalars["CADCurrencyAmount"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phase?: InputMaybe<Scalars["WidgetPhaseEnum"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["WidgetStateEnum"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateWidgetResult = UpsertWidgetResult & {
  __typename?: "CreateWidgetResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

export type Customer = {
  __typename?: "Customer";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  billingAccount?: Maybe<BillingAccount>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** Input object supporting setting or updating related model record on a relationship field */
export type CustomerBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedCustomerCreateInput>;
  delete?: InputMaybe<NestedCustomerDeleteInput>;
  update?: InputMaybe<NestedCustomerUpdateInput>;
};

/** A connection to a list of Customer items. */
export type CustomerConnection = {
  __typename?: "CustomerConnection";
  /** A list of edges. */
  edges: Array<CustomerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Customer connection. */
export type CustomerEdge = {
  __typename?: "CustomerEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Customer;
};

export type CustomerFilter = {
  AND?: InputMaybe<Array<InputMaybe<CustomerFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<CustomerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CustomerFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CustomerSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
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

export type DeleteBillingAccountResult = {
  __typename?: "DeleteBillingAccountResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteCityResult = {
  __typename?: "DeleteCityResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteCourseResult = {
  __typename?: "DeleteCourseResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteCustomerResult = {
  __typename?: "DeleteCustomerResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteEphemeralResult = {
  __typename?: "DeleteEphemeralResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteFieldlessResult = {
  __typename?: "DeleteFieldlessResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteFriendshipResult = {
  __typename?: "DeleteFriendshipResult";
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

export type DeleteLandmarkStadiumResult = {
  __typename?: "DeleteLandmarkStadiumResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteRegistrationResult = {
  __typename?: "DeleteRegistrationResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteSampleModelToTestReallyLongModelNamesResult = {
  __typename?: "DeleteSampleModelToTestReallyLongModelNamesResult";
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

export type DeleteSprocketResult = {
  __typename?: "DeleteSprocketResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteStudentResult = {
  __typename?: "DeleteStudentResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type DeleteTeacherResult = {
  __typename?: "DeleteTeacherResult";
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

export type DeleteWidgetImageResult = {
  __typename?: "DeleteWidgetImageResult";
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

export type Ephemeral = {
  __typename?: "Ephemeral";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  data?: Maybe<Scalars["String"]["output"]>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of Ephemeral items. */
export type EphemeralConnection = {
  __typename?: "EphemeralConnection";
  /** A list of edges. */
  edges: Array<EphemeralEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Ephemeral connection. */
export type EphemeralEdge = {
  __typename?: "EphemeralEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Ephemeral;
};

export type EphemeralFilter = {
  data?: InputMaybe<StringEqualsFilter>;
  id?: InputMaybe<IdEqualsFilter>;
};

export type ExecutionError = {
  /** The Gadget platform error code for this error. */
  code: Scalars["String"]["output"];
  /** The human facing error message for this error. */
  message: Scalars["String"]["output"];
  /** The stack for any exception that caused the error. Only available for super users. */
  stack?: Maybe<Scalars["String"]["output"]>;
};

export type Fieldless = {
  __typename?: "Fieldless";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of Fieldless items. */
export type FieldlessConnection = {
  __typename?: "FieldlessConnection";
  /** A list of edges. */
  edges: Array<FieldlessEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Fieldless connection. */
export type FieldlessEdge = {
  __typename?: "FieldlessEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Fieldless;
};

export type FieldlessFilter = {
  AND?: InputMaybe<Array<InputMaybe<FieldlessFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<FieldlessFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FieldlessFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FieldlessSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type FlipAllWidgetsResult = {
  __typename?: "FlipAllWidgetsResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type FlipDownWidgetResult = {
  __typename?: "FlipDownWidgetResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

export type FlipUpWidgetResult = {
  __typename?: "FlipUpWidgetResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
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

export type FoldGizmoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type FoldGizmoResult = {
  __typename?: "FoldGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type Friendship = {
  __typename?: "Friendship";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  ended?: Maybe<Scalars["Date"]["output"]>;
  followee: Student;
  followeeId: Scalars["GadgetID"]["output"];
  follower: Student;
  followerId: Scalars["GadgetID"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  started?: Maybe<Scalars["Date"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of Friendship items. */
export type FriendshipConnection = {
  __typename?: "FriendshipConnection";
  /** A list of edges. */
  edges: Array<FriendshipEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Friendship connection. */
export type FriendshipEdge = {
  __typename?: "FriendshipEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Friendship;
};

export type FriendshipFilter = {
  AND?: InputMaybe<Array<InputMaybe<FriendshipFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<FriendshipFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FriendshipFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  ended?: InputMaybe<DateFilter>;
  followee?: InputMaybe<IdFilter>;
  followeeId?: InputMaybe<IdFilter>;
  follower?: InputMaybe<IdFilter>;
  followerId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  started?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type FriendshipHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeFriendshipInput>;
  create?: InputMaybe<NestedFriendshipCreateInput>;
  delete?: InputMaybe<NestedFriendshipDeleteInput>;
  update?: InputMaybe<NestedFriendshipUpdateInput>;
};

export type FriendshipSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the ended field. Defaults to ascending (smallest value first). */
  ended?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the started field. Defaults to ascending (smallest value first). */
  started?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
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
  /** Get the same metadata blob for a model and all the models reachable from it via relationships */
  modelAndRelatedModels: Array<GadgetModel>;
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

export type GadgetApplicationMetaModelAndRelatedModelsArgs = {
  apiIdentifier?: InputMaybe<Scalars["String"]["input"]>;
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

export type GameCalculateScoresResult = {
  __typename?: "GameCalculateScoresResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type GameLetTheGamesBeginResult = {
  __typename?: "GameLetTheGamesBeginResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type GameMutations = {
  __typename?: "GameMutations";
  barfAnErrorPlayer?: Maybe<BarfAnErrorGamePlayerResult>;
  bulkBarfAnErrorPlayers?: Maybe<BulkBarfAnErrorGamePlayersResult>;
  bulkCreatePlayers?: Maybe<BulkCreateGamePlayersResult>;
  bulkCreateRounds?: Maybe<BulkCreateGameRoundsResult>;
  bulkCreateStadia?: Maybe<BulkCreateGameStadiaResult>;
  bulkDeletePlayers?: Maybe<BulkDeleteGamePlayersResult>;
  bulkDeleteRounds?: Maybe<BulkDeleteGameRoundsResult>;
  bulkDeleteStadia?: Maybe<BulkDeleteGameStadiaResult>;
  bulkSetBestNumberPlayers?: Maybe<BulkSetBestNumberGamePlayersResult>;
  bulkUpdatePlayers?: Maybe<BulkUpdateGamePlayersResult>;
  bulkUpdateRounds?: Maybe<BulkUpdateGameRoundsResult>;
  bulkUpdateStadia?: Maybe<BulkUpdateGameStadiaResult>;
  bulkUpsertPlayers: BulkUpsertGamePlayersResult;
  bulkUpsertRounds: BulkUpsertGameRoundsResult;
  bulkUpsertStadia: BulkUpsertGameStadiaResult;
  calculateScores?: Maybe<GameCalculateScoresResult>;
  createPlayer?: Maybe<CreateGamePlayerResult>;
  createRound?: Maybe<CreateGameRoundResult>;
  createStadium?: Maybe<CreateGameStadiumResult>;
  deletePlayer?: Maybe<DeleteGamePlayerResult>;
  deleteRound?: Maybe<DeleteGameRoundResult>;
  deleteStadium?: Maybe<DeleteGameStadiumResult>;
  letTheGamesBegin?: Maybe<GameLetTheGamesBeginResult>;
  setBestNumberPlayer?: Maybe<SetBestNumberGamePlayerResult>;
  updatePlayer?: Maybe<UpdateGamePlayerResult>;
  updateRound?: Maybe<UpdateGameRoundResult>;
  updateStadium?: Maybe<UpdateGameStadiumResult>;
  upsertPlayer?: Maybe<UpsertGamePlayerResult>;
  upsertRound?: Maybe<UpsertGameRoundResult>;
  upsertStadium?: Maybe<UpsertGameStadiumResult>;
};

export type GameMutationsBarfAnErrorPlayerArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameMutationsBulkBarfAnErrorPlayersArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
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

export type GameMutationsBulkDeletePlayersArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type GameMutationsBulkDeleteRoundsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type GameMutationsBulkDeleteStadiaArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type GameMutationsBulkSetBestNumberPlayersArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
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

export type GameMutationsBulkUpsertPlayersArgs = {
  inputs: Array<BulkUpsertGamePlayersInput>;
};

export type GameMutationsBulkUpsertRoundsArgs = {
  inputs: Array<BulkUpsertGameRoundsInput>;
};

export type GameMutationsBulkUpsertStadiaArgs = {
  inputs: Array<BulkUpsertGameStadiaInput>;
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

export type GameMutationsDeletePlayerArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameMutationsDeleteRoundArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameMutationsDeleteStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type GameMutationsSetBestNumberPlayerArgs = {
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
  birthday?: Maybe<Scalars["DateTime"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name: Scalars["String"]["output"];
  number: Scalars["Float"]["output"];
  rounds: GameRoundConnection;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type GamePlayerRoundsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<GameRoundFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<GameRoundSort>>;
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
  birthday?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  number?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GamePlayerSort = {
  /** Sort the results by the birthday field. Defaults to ascending (smallest value first). */
  birthday?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the number field. Defaults to ascending (smallest value first). */
  number?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type GameQueries = {
  __typename?: "GameQueries";
  player?: Maybe<GamePlayer>;
  players: GamePlayerConnection;
  round?: Maybe<GameRound>;
  rounds: GameRoundConnection;
  stadia: GameStadiumConnection;
  stadium?: Maybe<GameStadium>;
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
  number?: Maybe<Scalars["Float"]["output"]>;
  player: GamePlayer;
  playerId: Scalars["GadgetID"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
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
  number?: InputMaybe<FloatFilter>;
  player?: InputMaybe<IdFilter>;
  playerId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GameRoundSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the number field. Defaults to ascending (smallest value first). */
  number?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type GameStadium = {
  __typename?: "GameStadium";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
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
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GameStadiumSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
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
  name: Scalars["String"]["output"];
  sprockets: SprocketConnection;
  state?: Maybe<Scalars["GizmoStateEnum"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  widget: Widget;
  widgetId: Scalars["GadgetID"]["output"];
};

export type GizmoSprocketsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<SprocketFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<SprocketSort>>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type GizmoBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  bend?: InputMaybe<NestedGizmoBendInput>;
  break?: InputMaybe<NestedGizmoBreakInput>;
  create?: InputMaybe<NestedGizmoCreateInput>;
  delete?: InputMaybe<NestedGizmoDeleteInput>;
  fold?: InputMaybe<NestedGizmoFoldInput>;
  otherCreate?: InputMaybe<NestedGizmoOtherCreateInput>;
  straighten?: InputMaybe<NestedGizmoStraightenInput>;
  unfold?: InputMaybe<NestedGizmoUnfoldInput>;
  update?: InputMaybe<NestedGizmoUpdateInput>;
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
  state?: InputMaybe<SingleEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  widget?: InputMaybe<IdFilter>;
  widgetId?: InputMaybe<IdFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type GizmoHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeGizmoInput>;
  bend?: InputMaybe<NestedGizmoBendInput>;
  break?: InputMaybe<NestedGizmoBreakInput>;
  create?: InputMaybe<NestedGizmoCreateInput>;
  delete?: InputMaybe<NestedGizmoDeleteInput>;
  fold?: InputMaybe<NestedGizmoFoldInput>;
  otherCreate?: InputMaybe<NestedGizmoOtherCreateInput>;
  straighten?: InputMaybe<NestedGizmoStraightenInput>;
  unfold?: InputMaybe<NestedGizmoUnfoldInput>;
  update?: InputMaybe<NestedGizmoUpdateInput>;
};

export type GizmoSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: InputMaybe<SortOrder>;
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

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  greaterThan?: InputMaybe<Scalars["Int"]["input"]>;
  greaterThanOrEqual?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  lessThan?: InputMaybe<Scalars["Int"]["input"]>;
  lessThanOrEqual?: InputMaybe<Scalars["Int"]["input"]>;
  notEquals?: InputMaybe<Scalars["Int"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

/** Input object to set the link between this field and the model it belongs to */
export type InternalBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

export type InternalBillingAccountAtomicsInput = {
  /** Numeric atomic commands for operating on balance. */
  balance?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalBillingAccountInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalBillingAccountAtomicsInput>;
  balance?: InputMaybe<Scalars["Float"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  customer?: InputMaybe<InternalBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalBillingAccountRecord items. */
export type InternalBillingAccountRecordConnection = {
  __typename?: "InternalBillingAccountRecordConnection";
  /** A list of edges. */
  edges: Array<InternalBillingAccountRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalBillingAccountRecord connection. */
export type InternalBillingAccountRecordEdge = {
  __typename?: "InternalBillingAccountRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalBillingAccountRecord"]["output"];
};

export type InternalBulkCreateBillingAccountsResult = {
  __typename?: "InternalBulkCreateBillingAccountsResult";
  billingAccounts?: Maybe<Array<Maybe<Scalars["InternalBillingAccountRecord"]["output"]>>>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateCitiesResult = {
  __typename?: "InternalBulkCreateCitiesResult";
  cities?: Maybe<Array<Maybe<Scalars["InternalCityRecord"]["output"]>>>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateCoursesResult = {
  __typename?: "InternalBulkCreateCoursesResult";
  courses?: Maybe<Array<Maybe<Scalars["InternalCourseRecord"]["output"]>>>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateCustomersResult = {
  __typename?: "InternalBulkCreateCustomersResult";
  customers?: Maybe<Array<Maybe<Scalars["InternalCustomerRecord"]["output"]>>>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateEphemeralsResult = {
  __typename?: "InternalBulkCreateEphemeralsResult";
  ephemerals?: Maybe<Array<Maybe<Scalars["InternalEphemeralRecord"]["output"]>>>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateFieldlessesResult = {
  __typename?: "InternalBulkCreateFieldlessesResult";
  errors?: Maybe<Array<ExecutionError>>;
  fieldlesses?: Maybe<Array<Maybe<Scalars["InternalFieldlessRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateFriendshipsResult = {
  __typename?: "InternalBulkCreateFriendshipsResult";
  errors?: Maybe<Array<ExecutionError>>;
  friendships?: Maybe<Array<Maybe<Scalars["InternalFriendshipRecord"]["output"]>>>;
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

export type InternalBulkCreateLandmarkStadiaResult = {
  __typename?: "InternalBulkCreateLandmarkStadiaResult";
  errors?: Maybe<Array<ExecutionError>>;
  stadia?: Maybe<Array<Maybe<Scalars["InternalLandmarkStadiumRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateRegistrationsResult = {
  __typename?: "InternalBulkCreateRegistrationsResult";
  errors?: Maybe<Array<ExecutionError>>;
  registrations?: Maybe<Array<Maybe<Scalars["InternalRegistrationRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateSampleModelToTestReallyLongModelNamessResult = {
  __typename?: "InternalBulkCreateSampleModelToTestReallyLongModelNamessResult";
  errors?: Maybe<Array<ExecutionError>>;
  sampleModelToTestReallyLongModelNamess?: Maybe<Array<Maybe<Scalars["InternalSampleModelToTestReallyLongModelNamesRecord"]["output"]>>>;
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

export type InternalBulkCreateSprocketsResult = {
  __typename?: "InternalBulkCreateSprocketsResult";
  errors?: Maybe<Array<ExecutionError>>;
  sprockets?: Maybe<Array<Maybe<Scalars["InternalSprocketRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateStudentsResult = {
  __typename?: "InternalBulkCreateStudentsResult";
  errors?: Maybe<Array<ExecutionError>>;
  students?: Maybe<Array<Maybe<Scalars["InternalStudentRecord"]["output"]>>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalBulkCreateTeachersResult = {
  __typename?: "InternalBulkCreateTeachersResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  teachers?: Maybe<Array<Maybe<Scalars["InternalTeacherRecord"]["output"]>>>;
};

export type InternalBulkCreateUsersResult = {
  __typename?: "InternalBulkCreateUsersResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  users?: Maybe<Array<Maybe<Scalars["InternalUserRecord"]["output"]>>>;
};

export type InternalBulkCreateWidgetImagesResult = {
  __typename?: "InternalBulkCreateWidgetImagesResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widgetImages?: Maybe<Array<Maybe<Scalars["InternalWidgetImageRecord"]["output"]>>>;
};

export type InternalBulkCreateWidgetsResult = {
  __typename?: "InternalBulkCreateWidgetsResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widgets?: Maybe<Array<Maybe<Scalars["InternalWidgetRecord"]["output"]>>>;
};

export type InternalCityInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalCityRecord items. */
export type InternalCityRecordConnection = {
  __typename?: "InternalCityRecordConnection";
  /** A list of edges. */
  edges: Array<InternalCityRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalCityRecord connection. */
export type InternalCityRecordEdge = {
  __typename?: "InternalCityRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalCityRecord"]["output"];
};

export type InternalCourseInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  offered?: InputMaybe<Scalars["Boolean"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  teacher?: InputMaybe<InternalBelongsToInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalCourseRecord items. */
export type InternalCourseRecordConnection = {
  __typename?: "InternalCourseRecordConnection";
  /** A list of edges. */
  edges: Array<InternalCourseRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalCourseRecord connection. */
export type InternalCourseRecordEdge = {
  __typename?: "InternalCourseRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalCourseRecord"]["output"];
};

export type InternalCreateBillingAccountResult = {
  __typename?: "InternalCreateBillingAccountResult";
  billingAccount?: Maybe<Scalars["InternalBillingAccountRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateCityResult = {
  __typename?: "InternalCreateCityResult";
  city?: Maybe<Scalars["InternalCityRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateCourseResult = {
  __typename?: "InternalCreateCourseResult";
  course?: Maybe<Scalars["InternalCourseRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateCustomerResult = {
  __typename?: "InternalCreateCustomerResult";
  customer?: Maybe<Scalars["InternalCustomerRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateEphemeralResult = {
  __typename?: "InternalCreateEphemeralResult";
  ephemeral?: Maybe<Scalars["InternalEphemeralRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateFieldlessResult = {
  __typename?: "InternalCreateFieldlessResult";
  errors?: Maybe<Array<ExecutionError>>;
  fieldless?: Maybe<Scalars["InternalFieldlessRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateFriendshipResult = {
  __typename?: "InternalCreateFriendshipResult";
  errors?: Maybe<Array<ExecutionError>>;
  friendship?: Maybe<Scalars["InternalFriendshipRecord"]["output"]>;
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

export type InternalCreateLandmarkStadiumResult = {
  __typename?: "InternalCreateLandmarkStadiumResult";
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<Scalars["InternalLandmarkStadiumRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateRegistrationResult = {
  __typename?: "InternalCreateRegistrationResult";
  errors?: Maybe<Array<ExecutionError>>;
  registration?: Maybe<Scalars["InternalRegistrationRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateSampleModelToTestReallyLongModelNamesResult = {
  __typename?: "InternalCreateSampleModelToTestReallyLongModelNamesResult";
  errors?: Maybe<Array<ExecutionError>>;
  sampleModelToTestReallyLongModelNames?: Maybe<Scalars["InternalSampleModelToTestReallyLongModelNamesRecord"]["output"]>;
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

export type InternalCreateSprocketResult = {
  __typename?: "InternalCreateSprocketResult";
  errors?: Maybe<Array<ExecutionError>>;
  sprocket?: Maybe<Scalars["InternalSprocketRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateStudentResult = {
  __typename?: "InternalCreateStudentResult";
  errors?: Maybe<Array<ExecutionError>>;
  student?: Maybe<Scalars["InternalStudentRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalCreateTeacherResult = {
  __typename?: "InternalCreateTeacherResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  teacher?: Maybe<Scalars["InternalTeacherRecord"]["output"]>;
};

export type InternalCreateUserResult = {
  __typename?: "InternalCreateUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
};

export type InternalCreateWidgetImageResult = {
  __typename?: "InternalCreateWidgetImageResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widgetImage?: Maybe<Scalars["InternalWidgetImageRecord"]["output"]>;
};

export type InternalCreateWidgetResult = {
  __typename?: "InternalCreateWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Scalars["InternalWidgetRecord"]["output"]>;
};

export type InternalCustomerInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalCustomerRecord items. */
export type InternalCustomerRecordConnection = {
  __typename?: "InternalCustomerRecordConnection";
  /** A list of edges. */
  edges: Array<InternalCustomerRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalCustomerRecord connection. */
export type InternalCustomerRecordEdge = {
  __typename?: "InternalCustomerRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalCustomerRecord"]["output"];
};

export type InternalDeleteBillingAccountResult = {
  __typename?: "InternalDeleteBillingAccountResult";
  billingAccount?: Maybe<Scalars["InternalBillingAccountRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteCityResult = {
  __typename?: "InternalDeleteCityResult";
  city?: Maybe<Scalars["InternalCityRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteCourseResult = {
  __typename?: "InternalDeleteCourseResult";
  course?: Maybe<Scalars["InternalCourseRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteCustomerResult = {
  __typename?: "InternalDeleteCustomerResult";
  customer?: Maybe<Scalars["InternalCustomerRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteEphemeralResult = {
  __typename?: "InternalDeleteEphemeralResult";
  ephemeral?: Maybe<Scalars["InternalEphemeralRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteFieldlessResult = {
  __typename?: "InternalDeleteFieldlessResult";
  errors?: Maybe<Array<ExecutionError>>;
  fieldless?: Maybe<Scalars["InternalFieldlessRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteFriendshipResult = {
  __typename?: "InternalDeleteFriendshipResult";
  errors?: Maybe<Array<ExecutionError>>;
  friendship?: Maybe<Scalars["InternalFriendshipRecord"]["output"]>;
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

export type InternalDeleteLandmarkStadiumResult = {
  __typename?: "InternalDeleteLandmarkStadiumResult";
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<Scalars["InternalLandmarkStadiumRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyBillingAccountResult = {
  __typename?: "InternalDeleteManyBillingAccountResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyCityResult = {
  __typename?: "InternalDeleteManyCityResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyCourseResult = {
  __typename?: "InternalDeleteManyCourseResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyCustomerResult = {
  __typename?: "InternalDeleteManyCustomerResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyEphemeralResult = {
  __typename?: "InternalDeleteManyEphemeralResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyFieldlessResult = {
  __typename?: "InternalDeleteManyFieldlessResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyFriendshipResult = {
  __typename?: "InternalDeleteManyFriendshipResult";
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

export type InternalDeleteManyLandmarkStadiumResult = {
  __typename?: "InternalDeleteManyLandmarkStadiumResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyRegistrationResult = {
  __typename?: "InternalDeleteManyRegistrationResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManySampleModelToTestReallyLongModelNamesResult = {
  __typename?: "InternalDeleteManySampleModelToTestReallyLongModelNamesResult";
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

export type InternalDeleteManySprocketResult = {
  __typename?: "InternalDeleteManySprocketResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyStudentResult = {
  __typename?: "InternalDeleteManyStudentResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyTeacherResult = {
  __typename?: "InternalDeleteManyTeacherResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyUserResult = {
  __typename?: "InternalDeleteManyUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyWidgetImageResult = {
  __typename?: "InternalDeleteManyWidgetImageResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteManyWidgetResult = {
  __typename?: "InternalDeleteManyWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteRegistrationResult = {
  __typename?: "InternalDeleteRegistrationResult";
  errors?: Maybe<Array<ExecutionError>>;
  registration?: Maybe<Scalars["InternalRegistrationRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteSampleModelToTestReallyLongModelNamesResult = {
  __typename?: "InternalDeleteSampleModelToTestReallyLongModelNamesResult";
  errors?: Maybe<Array<ExecutionError>>;
  sampleModelToTestReallyLongModelNames?: Maybe<Scalars["InternalSampleModelToTestReallyLongModelNamesRecord"]["output"]>;
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

export type InternalDeleteSprocketResult = {
  __typename?: "InternalDeleteSprocketResult";
  errors?: Maybe<Array<ExecutionError>>;
  sprocket?: Maybe<Scalars["InternalSprocketRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteStudentResult = {
  __typename?: "InternalDeleteStudentResult";
  errors?: Maybe<Array<ExecutionError>>;
  student?: Maybe<Scalars["InternalStudentRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalDeleteTeacherResult = {
  __typename?: "InternalDeleteTeacherResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  teacher?: Maybe<Scalars["InternalTeacherRecord"]["output"]>;
};

export type InternalDeleteUserResult = {
  __typename?: "InternalDeleteUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
};

export type InternalDeleteWidgetImageResult = {
  __typename?: "InternalDeleteWidgetImageResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widgetImage?: Maybe<Scalars["InternalWidgetImageRecord"]["output"]>;
};

export type InternalDeleteWidgetResult = {
  __typename?: "InternalDeleteWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Scalars["InternalWidgetRecord"]["output"]>;
};

export type InternalEphemeralInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  data?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalEphemeralRecord items. */
export type InternalEphemeralRecordConnection = {
  __typename?: "InternalEphemeralRecordConnection";
  /** A list of edges. */
  edges: Array<InternalEphemeralRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalEphemeralRecord connection. */
export type InternalEphemeralRecordEdge = {
  __typename?: "InternalEphemeralRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalEphemeralRecord"]["output"];
};

export type InternalFieldlessInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalFieldlessRecord items. */
export type InternalFieldlessRecordConnection = {
  __typename?: "InternalFieldlessRecordConnection";
  /** A list of edges. */
  edges: Array<InternalFieldlessRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalFieldlessRecord connection. */
export type InternalFieldlessRecordEdge = {
  __typename?: "InternalFieldlessRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalFieldlessRecord"]["output"];
};

export type InternalFriendshipInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ended?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  followee?: InputMaybe<InternalBelongsToInput>;
  follower?: InputMaybe<InternalBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  started?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalFriendshipRecord items. */
export type InternalFriendshipRecordConnection = {
  __typename?: "InternalFriendshipRecordConnection";
  /** A list of edges. */
  edges: Array<InternalFriendshipRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalFriendshipRecord connection. */
export type InternalFriendshipRecordEdge = {
  __typename?: "InternalFriendshipRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalFriendshipRecord"]["output"];
};

export type InternalGameMutations = {
  __typename?: "InternalGameMutations";
  bulkCreatePlayers?: Maybe<InternalBulkCreateGamePlayersResult>;
  bulkCreateRounds?: Maybe<InternalBulkCreateGameRoundsResult>;
  bulkCreateStadia?: Maybe<InternalBulkCreateGameStadiaResult>;
  createPlayer?: Maybe<InternalCreateGamePlayerResult>;
  createRound?: Maybe<InternalCreateGameRoundResult>;
  createStadium?: Maybe<InternalCreateGameStadiumResult>;
  deleteManyPlayer?: Maybe<InternalDeleteManyGamePlayerResult>;
  deleteManyRound?: Maybe<InternalDeleteManyGameRoundResult>;
  deleteManyStadium?: Maybe<InternalDeleteManyGameStadiumResult>;
  deletePlayer?: Maybe<InternalDeleteGamePlayerResult>;
  deleteRound?: Maybe<InternalDeleteGameRoundResult>;
  deleteStadium?: Maybe<InternalDeleteGameStadiumResult>;
  triggerBarfAnErrorPlayer?: Maybe<BarfAnErrorGamePlayerResult>;
  triggerCalculateScores?: Maybe<GameCalculateScoresResult>;
  triggerCreatePlayer?: Maybe<CreateGamePlayerResult>;
  triggerCreateRound?: Maybe<CreateGameRoundResult>;
  triggerCreateStadium?: Maybe<CreateGameStadiumResult>;
  triggerDeletePlayer?: Maybe<DeleteGamePlayerResult>;
  triggerDeleteRound?: Maybe<DeleteGameRoundResult>;
  triggerDeleteStadium?: Maybe<DeleteGameStadiumResult>;
  triggerLetTheGamesBegin?: Maybe<GameLetTheGamesBeginResult>;
  triggerSetBestNumberPlayer?: Maybe<SetBestNumberGamePlayerResult>;
  triggerUpdatePlayer?: Maybe<UpdateGamePlayerResult>;
  triggerUpdateRound?: Maybe<UpdateGameRoundResult>;
  triggerUpdateStadium?: Maybe<UpdateGameStadiumResult>;
  updatePlayer?: Maybe<InternalUpdateGamePlayerResult>;
  updateRound?: Maybe<InternalUpdateGameRoundResult>;
  updateStadium?: Maybe<InternalUpdateGameStadiumResult>;
  upsertPlayer?: Maybe<InternalUpsertGamePlayerResult>;
  upsertRound?: Maybe<InternalUpsertGameRoundResult>;
  upsertStadium?: Maybe<InternalUpsertGameStadiumResult>;
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

export type InternalGameMutationsCreatePlayerArgs = {
  player?: InputMaybe<InternalGamePlayerInput>;
};

export type InternalGameMutationsCreateRoundArgs = {
  round?: InputMaybe<InternalGameRoundInput>;
};

export type InternalGameMutationsCreateStadiumArgs = {
  stadium?: InputMaybe<InternalGameStadiumInput>;
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

export type InternalGameMutationsTriggerBarfAnErrorPlayerArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerCalculateScoresArgs = {
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

export type InternalGameMutationsTriggerLetTheGamesBeginArgs = {
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalGameMutationsTriggerSetBestNumberPlayerArgs = {
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

export type InternalGamePlayerAtomicsInput = {
  /** Numeric atomic commands for operating on number. */
  number?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalGamePlayerInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalGamePlayerAtomicsInput>;
  birthday?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["Float"]["input"]>;
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
  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: Maybe<Scalars["JSONObject"]["output"]>;
  listPlayer: InternalGamePlayerRecordConnection;
  listRound: InternalGameRoundRecordConnection;
  listStadium: InternalGameStadiumRecordConnection;
  player?: Maybe<Scalars["InternalGamePlayerRecord"]["output"]>;
  round?: Maybe<Scalars["InternalGameRoundRecord"]["output"]>;
  stadium?: Maybe<Scalars["InternalGameStadiumRecord"]["output"]>;
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

export type InternalGameRoundAtomicsInput = {
  /** Numeric atomic commands for operating on number. */
  number?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalGameRoundInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalGameRoundAtomicsInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  number?: InputMaybe<Scalars["Float"]["input"]>;
  player?: InputMaybe<InternalBelongsToInput>;
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
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
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
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
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

export type InternalLandmarkMutations = {
  __typename?: "InternalLandmarkMutations";
  bulkCreateStadia?: Maybe<InternalBulkCreateLandmarkStadiaResult>;
  createStadium?: Maybe<InternalCreateLandmarkStadiumResult>;
  deleteManyStadium?: Maybe<InternalDeleteManyLandmarkStadiumResult>;
  deleteStadium?: Maybe<InternalDeleteLandmarkStadiumResult>;
  triggerCreateStadium?: Maybe<CreateLandmarkStadiumResult>;
  triggerDeleteStadium?: Maybe<DeleteLandmarkStadiumResult>;
  triggerUpdateStadium?: Maybe<UpdateLandmarkStadiumResult>;
  updateStadium?: Maybe<InternalUpdateLandmarkStadiumResult>;
  upsertStadium?: Maybe<InternalUpsertLandmarkStadiumResult>;
};

export type InternalLandmarkMutationsBulkCreateStadiaArgs = {
  stadia: Array<InputMaybe<InternalLandmarkStadiumInput>>;
};

export type InternalLandmarkMutationsCreateStadiumArgs = {
  stadium?: InputMaybe<InternalLandmarkStadiumInput>;
};

export type InternalLandmarkMutationsDeleteManyStadiumArgs = {
  filter?: InputMaybe<Array<LandmarkStadiumFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalLandmarkMutationsDeleteStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalLandmarkMutationsTriggerCreateStadiumArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalLandmarkMutationsTriggerDeleteStadiumArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalLandmarkMutationsTriggerUpdateStadiumArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalLandmarkMutationsUpdateStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
  stadium?: InputMaybe<InternalLandmarkStadiumInput>;
};

export type InternalLandmarkMutationsUpsertStadiumArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stadium?: InputMaybe<InternalLandmarkStadiumInput>;
};

export type InternalLandmarkQueries = {
  __typename?: "InternalLandmarkQueries";
  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: Maybe<Scalars["JSONObject"]["output"]>;
  listStadium: InternalLandmarkStadiumRecordConnection;
  stadium?: Maybe<Scalars["InternalLandmarkStadiumRecord"]["output"]>;
};

export type InternalLandmarkQueriesListStadiumArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<LandmarkStadiumFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<LandmarkStadiumSort>>;
};

export type InternalLandmarkQueriesStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalLandmarkStadiumInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalLandmarkStadiumRecord items. */
export type InternalLandmarkStadiumRecordConnection = {
  __typename?: "InternalLandmarkStadiumRecordConnection";
  /** A list of edges. */
  edges: Array<InternalLandmarkStadiumRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalLandmarkStadiumRecord connection. */
export type InternalLandmarkStadiumRecordEdge = {
  __typename?: "InternalLandmarkStadiumRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalLandmarkStadiumRecord"]["output"];
};

export type InternalMutations = {
  __typename?: "InternalMutations";
  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock: LockOperationResult;
  bulkCreateBillingAccounts?: Maybe<InternalBulkCreateBillingAccountsResult>;
  bulkCreateCities?: Maybe<InternalBulkCreateCitiesResult>;
  bulkCreateCourses?: Maybe<InternalBulkCreateCoursesResult>;
  bulkCreateCustomers?: Maybe<InternalBulkCreateCustomersResult>;
  bulkCreateEphemerals?: Maybe<InternalBulkCreateEphemeralsResult>;
  bulkCreateFieldlesses?: Maybe<InternalBulkCreateFieldlessesResult>;
  bulkCreateFriendships?: Maybe<InternalBulkCreateFriendshipsResult>;
  bulkCreateGizmos?: Maybe<InternalBulkCreateGizmosResult>;
  bulkCreateRegistrations?: Maybe<InternalBulkCreateRegistrationsResult>;
  bulkCreateSampleModelToTestReallyLongModelNamess?: Maybe<InternalBulkCreateSampleModelToTestReallyLongModelNamessResult>;
  bulkCreateSections?: Maybe<InternalBulkCreateSectionsResult>;
  bulkCreateSessions?: Maybe<InternalBulkCreateSessionsResult>;
  bulkCreateSprockets?: Maybe<InternalBulkCreateSprocketsResult>;
  bulkCreateStudents?: Maybe<InternalBulkCreateStudentsResult>;
  bulkCreateTeachers?: Maybe<InternalBulkCreateTeachersResult>;
  bulkCreateUsers?: Maybe<InternalBulkCreateUsersResult>;
  bulkCreateWidgetImages?: Maybe<InternalBulkCreateWidgetImagesResult>;
  bulkCreateWidgets?: Maybe<InternalBulkCreateWidgetsResult>;
  commitTransaction: Scalars["String"]["output"];
  createBillingAccount?: Maybe<InternalCreateBillingAccountResult>;
  createCity?: Maybe<InternalCreateCityResult>;
  createCourse?: Maybe<InternalCreateCourseResult>;
  createCustomer?: Maybe<InternalCreateCustomerResult>;
  createEphemeral?: Maybe<InternalCreateEphemeralResult>;
  createFieldless?: Maybe<InternalCreateFieldlessResult>;
  createFriendship?: Maybe<InternalCreateFriendshipResult>;
  createGizmo?: Maybe<InternalCreateGizmoResult>;
  createRegistration?: Maybe<InternalCreateRegistrationResult>;
  createSampleModelToTestReallyLongModelNames?: Maybe<InternalCreateSampleModelToTestReallyLongModelNamesResult>;
  createSection?: Maybe<InternalCreateSectionResult>;
  createSession?: Maybe<InternalCreateSessionResult>;
  createSprocket?: Maybe<InternalCreateSprocketResult>;
  createStudent?: Maybe<InternalCreateStudentResult>;
  createTeacher?: Maybe<InternalCreateTeacherResult>;
  createUser?: Maybe<InternalCreateUserResult>;
  createWidget?: Maybe<InternalCreateWidgetResult>;
  createWidgetImage?: Maybe<InternalCreateWidgetImageResult>;
  deleteBillingAccount?: Maybe<InternalDeleteBillingAccountResult>;
  deleteCity?: Maybe<InternalDeleteCityResult>;
  deleteCourse?: Maybe<InternalDeleteCourseResult>;
  deleteCustomer?: Maybe<InternalDeleteCustomerResult>;
  deleteEphemeral?: Maybe<InternalDeleteEphemeralResult>;
  deleteFieldless?: Maybe<InternalDeleteFieldlessResult>;
  deleteFriendship?: Maybe<InternalDeleteFriendshipResult>;
  deleteGizmo?: Maybe<InternalDeleteGizmoResult>;
  deleteManyBillingAccount?: Maybe<InternalDeleteManyBillingAccountResult>;
  deleteManyCity?: Maybe<InternalDeleteManyCityResult>;
  deleteManyCourse?: Maybe<InternalDeleteManyCourseResult>;
  deleteManyCustomer?: Maybe<InternalDeleteManyCustomerResult>;
  deleteManyEphemeral?: Maybe<InternalDeleteManyEphemeralResult>;
  deleteManyFieldless?: Maybe<InternalDeleteManyFieldlessResult>;
  deleteManyFriendship?: Maybe<InternalDeleteManyFriendshipResult>;
  deleteManyGizmo?: Maybe<InternalDeleteManyGizmoResult>;
  deleteManyRegistration?: Maybe<InternalDeleteManyRegistrationResult>;
  deleteManySampleModelToTestReallyLongModelNames?: Maybe<InternalDeleteManySampleModelToTestReallyLongModelNamesResult>;
  deleteManySection?: Maybe<InternalDeleteManySectionResult>;
  deleteManySession?: Maybe<InternalDeleteManySessionResult>;
  deleteManySprocket?: Maybe<InternalDeleteManySprocketResult>;
  deleteManyStudent?: Maybe<InternalDeleteManyStudentResult>;
  deleteManyTeacher?: Maybe<InternalDeleteManyTeacherResult>;
  deleteManyUser?: Maybe<InternalDeleteManyUserResult>;
  deleteManyWidget?: Maybe<InternalDeleteManyWidgetResult>;
  deleteManyWidgetImage?: Maybe<InternalDeleteManyWidgetImageResult>;
  deleteRegistration?: Maybe<InternalDeleteRegistrationResult>;
  deleteSampleModelToTestReallyLongModelNames?: Maybe<InternalDeleteSampleModelToTestReallyLongModelNamesResult>;
  deleteSection?: Maybe<InternalDeleteSectionResult>;
  deleteSession?: Maybe<InternalDeleteSessionResult>;
  deleteSprocket?: Maybe<InternalDeleteSprocketResult>;
  deleteStudent?: Maybe<InternalDeleteStudentResult>;
  deleteTeacher?: Maybe<InternalDeleteTeacherResult>;
  deleteUser?: Maybe<InternalDeleteUserResult>;
  deleteWidget?: Maybe<InternalDeleteWidgetResult>;
  deleteWidgetImage?: Maybe<InternalDeleteWidgetImageResult>;
  game: InternalGameMutations;
  landmark: InternalLandmarkMutations;
  rollbackTransaction: Scalars["String"]["output"];
  startTransaction: Scalars["String"]["output"];
  triggerAddInventoryIfOutOfStockWidget?: Maybe<AddInventoryIfOutOfStockWidgetResult>;
  triggerAddInventoryWidget?: Maybe<AddInventoryWidgetResult>;
  triggerBarfAnError?: Maybe<BarfAnErrorResult>;
  triggerBendGizmo?: Maybe<BendGizmoResult>;
  triggerBreakGizmo?: Maybe<BreakGizmoResult>;
  triggerChangePasswordUser?: Maybe<ChangePasswordUserResult>;
  triggerCreateBillingAccount?: Maybe<CreateBillingAccountResult>;
  triggerCreateCity?: Maybe<CreateCityResult>;
  triggerCreateCourse?: Maybe<CreateCourseResult>;
  triggerCreateCustomer?: Maybe<CreateCustomerResult>;
  triggerCreateEphemeral?: Maybe<CreateEphemeralResult>;
  triggerCreateFieldless?: Maybe<CreateFieldlessResult>;
  triggerCreateFriendship?: Maybe<CreateFriendshipResult>;
  triggerCreateGizmo?: Maybe<CreateGizmoResult>;
  triggerCreateRegistration?: Maybe<CreateRegistrationResult>;
  triggerCreateSampleModelToTestReallyLongModelNames?: Maybe<CreateSampleModelToTestReallyLongModelNamesResult>;
  triggerCreateSection?: Maybe<CreateSectionResult>;
  triggerCreateSprocket?: Maybe<CreateSprocketResult>;
  triggerCreateStudent?: Maybe<CreateStudentResult>;
  triggerCreateTeacher?: Maybe<CreateTeacherResult>;
  triggerCreateWidget?: Maybe<CreateWidgetResult>;
  triggerCreateWidgetImage?: Maybe<CreateWidgetImageResult>;
  triggerDeleteBillingAccount?: Maybe<DeleteBillingAccountResult>;
  triggerDeleteCity?: Maybe<DeleteCityResult>;
  triggerDeleteCourse?: Maybe<DeleteCourseResult>;
  triggerDeleteCustomer?: Maybe<DeleteCustomerResult>;
  triggerDeleteEphemeral?: Maybe<DeleteEphemeralResult>;
  triggerDeleteFieldless?: Maybe<DeleteFieldlessResult>;
  triggerDeleteFriendship?: Maybe<DeleteFriendshipResult>;
  triggerDeleteGizmo?: Maybe<DeleteGizmoResult>;
  triggerDeleteRegistration?: Maybe<DeleteRegistrationResult>;
  triggerDeleteSampleModelToTestReallyLongModelNames?: Maybe<DeleteSampleModelToTestReallyLongModelNamesResult>;
  triggerDeleteSection?: Maybe<DeleteSectionResult>;
  triggerDeleteSprocket?: Maybe<DeleteSprocketResult>;
  triggerDeleteStudent?: Maybe<DeleteStudentResult>;
  triggerDeleteTeacher?: Maybe<DeleteTeacherResult>;
  triggerDeleteUser?: Maybe<DeleteUserResult>;
  triggerDeleteWidget?: Maybe<DeleteWidgetResult>;
  triggerDeleteWidgetImage?: Maybe<DeleteWidgetImageResult>;
  triggerFlipAllWidgets?: Maybe<FlipAllWidgetsResult>;
  triggerFlipDownWidget?: Maybe<FlipDownWidgetResult>;
  triggerFlipUpWidget?: Maybe<FlipUpWidgetResult>;
  triggerFoldGizmo?: Maybe<FoldGizmoResult>;
  triggerLogParams?: Maybe<LogParamsResult>;
  triggerOtherCreateGizmo?: Maybe<OtherCreateGizmoResult>;
  triggerResetPasswordUser?: Maybe<ResetPasswordUserResult>;
  triggerSendResetPasswordUser?: Maybe<SendResetPasswordUserResult>;
  triggerSendVerifyEmailUser?: Maybe<SendVerifyEmailUserResult>;
  triggerSignInUser?: Maybe<SignInUserResult>;
  triggerSignOutUser?: Maybe<SignOutUserResult>;
  triggerSignUpUser?: Maybe<SignUpUserResult>;
  triggerStraightenGizmo?: Maybe<StraightenGizmoResult>;
  triggerUnfoldGizmo?: Maybe<UnfoldGizmoResult>;
  triggerUntriggerableGizmo?: Maybe<UntriggerableGizmoResult>;
  triggerUntriggerableGlobalAction?: Maybe<UntriggerableGlobalActionResult>;
  triggerUpdateBillingAccount?: Maybe<UpdateBillingAccountResult>;
  triggerUpdateCity?: Maybe<UpdateCityResult>;
  triggerUpdateCourse?: Maybe<UpdateCourseResult>;
  triggerUpdateCustomer?: Maybe<UpdateCustomerResult>;
  triggerUpdateEphemeral?: Maybe<UpdateEphemeralResult>;
  triggerUpdateFieldless?: Maybe<UpdateFieldlessResult>;
  triggerUpdateFriendship?: Maybe<UpdateFriendshipResult>;
  triggerUpdateGizmo?: Maybe<UpdateGizmoResult>;
  triggerUpdateRegistration?: Maybe<UpdateRegistrationResult>;
  triggerUpdateSampleModelToTestReallyLongModelNames?: Maybe<UpdateSampleModelToTestReallyLongModelNamesResult>;
  triggerUpdateSection?: Maybe<UpdateSectionResult>;
  triggerUpdateSprocket?: Maybe<UpdateSprocketResult>;
  triggerUpdateStudent?: Maybe<UpdateStudentResult>;
  triggerUpdateTeacher?: Maybe<UpdateTeacherResult>;
  triggerUpdateUser?: Maybe<UpdateUserResult>;
  triggerUpdateWidget?: Maybe<UpdateWidgetResult>;
  triggerUpdateWidgetImage?: Maybe<UpdateWidgetImageResult>;
  triggerVerifyEmailUser?: Maybe<VerifyEmailUserResult>;
  updateBillingAccount?: Maybe<InternalUpdateBillingAccountResult>;
  updateCity?: Maybe<InternalUpdateCityResult>;
  updateCourse?: Maybe<InternalUpdateCourseResult>;
  updateCustomer?: Maybe<InternalUpdateCustomerResult>;
  updateEphemeral?: Maybe<InternalUpdateEphemeralResult>;
  updateFieldless?: Maybe<InternalUpdateFieldlessResult>;
  updateFriendship?: Maybe<InternalUpdateFriendshipResult>;
  updateGizmo?: Maybe<InternalUpdateGizmoResult>;
  updateRegistration?: Maybe<InternalUpdateRegistrationResult>;
  updateSampleModelToTestReallyLongModelNames?: Maybe<InternalUpdateSampleModelToTestReallyLongModelNamesResult>;
  updateSection?: Maybe<InternalUpdateSectionResult>;
  updateSession?: Maybe<InternalUpdateSessionResult>;
  updateSprocket?: Maybe<InternalUpdateSprocketResult>;
  updateStudent?: Maybe<InternalUpdateStudentResult>;
  updateTeacher?: Maybe<InternalUpdateTeacherResult>;
  updateUser?: Maybe<InternalUpdateUserResult>;
  updateWidget?: Maybe<InternalUpdateWidgetResult>;
  updateWidgetImage?: Maybe<InternalUpdateWidgetImageResult>;
  upsertBillingAccount?: Maybe<InternalUpsertBillingAccountResult>;
  upsertCity?: Maybe<InternalUpsertCityResult>;
  upsertCourse?: Maybe<InternalUpsertCourseResult>;
  upsertCustomer?: Maybe<InternalUpsertCustomerResult>;
  upsertEphemeral?: Maybe<InternalUpsertEphemeralResult>;
  upsertFieldless?: Maybe<InternalUpsertFieldlessResult>;
  upsertFriendship?: Maybe<InternalUpsertFriendshipResult>;
  upsertGizmo?: Maybe<InternalUpsertGizmoResult>;
  upsertRegistration?: Maybe<InternalUpsertRegistrationResult>;
  upsertSampleModelToTestReallyLongModelNames?: Maybe<InternalUpsertSampleModelToTestReallyLongModelNamesResult>;
  upsertSection?: Maybe<InternalUpsertSectionResult>;
  upsertSession?: Maybe<InternalUpsertSessionResult>;
  upsertSprocket?: Maybe<InternalUpsertSprocketResult>;
  upsertStudent?: Maybe<InternalUpsertStudentResult>;
  upsertTeacher?: Maybe<InternalUpsertTeacherResult>;
  upsertUser?: Maybe<InternalUpsertUserResult>;
  upsertWidget?: Maybe<InternalUpsertWidgetResult>;
  upsertWidgetImage?: Maybe<InternalUpsertWidgetImageResult>;
};

export type InternalMutationsAcquireLockArgs = {
  lock: Scalars["String"]["input"];
};

export type InternalMutationsBulkCreateBillingAccountsArgs = {
  billingAccounts: Array<InputMaybe<InternalBillingAccountInput>>;
};

export type InternalMutationsBulkCreateCitiesArgs = {
  cities: Array<InputMaybe<InternalCityInput>>;
};

export type InternalMutationsBulkCreateCoursesArgs = {
  courses: Array<InputMaybe<InternalCourseInput>>;
};

export type InternalMutationsBulkCreateCustomersArgs = {
  customers: Array<InputMaybe<InternalCustomerInput>>;
};

export type InternalMutationsBulkCreateEphemeralsArgs = {
  ephemerals: Array<InputMaybe<InternalEphemeralInput>>;
};

export type InternalMutationsBulkCreateFieldlessesArgs = {
  fieldlesses: Array<InputMaybe<InternalFieldlessInput>>;
};

export type InternalMutationsBulkCreateFriendshipsArgs = {
  friendships: Array<InputMaybe<InternalFriendshipInput>>;
};

export type InternalMutationsBulkCreateGizmosArgs = {
  gizmos: Array<InputMaybe<InternalGizmoInput>>;
};

export type InternalMutationsBulkCreateRegistrationsArgs = {
  registrations: Array<InputMaybe<InternalRegistrationInput>>;
};

export type InternalMutationsBulkCreateSampleModelToTestReallyLongModelNamessArgs = {
  sampleModelToTestReallyLongModelNamess: Array<InputMaybe<InternalSampleModelToTestReallyLongModelNamesInput>>;
};

export type InternalMutationsBulkCreateSectionsArgs = {
  sections: Array<InputMaybe<InternalSectionInput>>;
};

export type InternalMutationsBulkCreateSessionsArgs = {
  sessions: Array<InputMaybe<InternalSessionInput>>;
};

export type InternalMutationsBulkCreateSprocketsArgs = {
  sprockets: Array<InputMaybe<InternalSprocketInput>>;
};

export type InternalMutationsBulkCreateStudentsArgs = {
  students: Array<InputMaybe<InternalStudentInput>>;
};

export type InternalMutationsBulkCreateTeachersArgs = {
  teachers: Array<InputMaybe<InternalTeacherInput>>;
};

export type InternalMutationsBulkCreateUsersArgs = {
  users: Array<InputMaybe<InternalUserInput>>;
};

export type InternalMutationsBulkCreateWidgetImagesArgs = {
  widgetImages: Array<InputMaybe<InternalWidgetImageInput>>;
};

export type InternalMutationsBulkCreateWidgetsArgs = {
  widgets: Array<InputMaybe<InternalWidgetInput>>;
};

export type InternalMutationsCreateBillingAccountArgs = {
  billingAccount?: InputMaybe<InternalBillingAccountInput>;
};

export type InternalMutationsCreateCityArgs = {
  city?: InputMaybe<InternalCityInput>;
};

export type InternalMutationsCreateCourseArgs = {
  course?: InputMaybe<InternalCourseInput>;
};

export type InternalMutationsCreateCustomerArgs = {
  customer?: InputMaybe<InternalCustomerInput>;
};

export type InternalMutationsCreateEphemeralArgs = {
  ephemeral?: InputMaybe<InternalEphemeralInput>;
};

export type InternalMutationsCreateFieldlessArgs = {
  fieldless?: InputMaybe<InternalFieldlessInput>;
};

export type InternalMutationsCreateFriendshipArgs = {
  friendship?: InputMaybe<InternalFriendshipInput>;
};

export type InternalMutationsCreateGizmoArgs = {
  gizmo?: InputMaybe<InternalGizmoInput>;
};

export type InternalMutationsCreateRegistrationArgs = {
  registration?: InputMaybe<InternalRegistrationInput>;
};

export type InternalMutationsCreateSampleModelToTestReallyLongModelNamesArgs = {
  sampleModelToTestReallyLongModelNames?: InputMaybe<InternalSampleModelToTestReallyLongModelNamesInput>;
};

export type InternalMutationsCreateSectionArgs = {
  section?: InputMaybe<InternalSectionInput>;
};

export type InternalMutationsCreateSessionArgs = {
  session?: InputMaybe<InternalSessionInput>;
};

export type InternalMutationsCreateSprocketArgs = {
  sprocket?: InputMaybe<InternalSprocketInput>;
};

export type InternalMutationsCreateStudentArgs = {
  student?: InputMaybe<InternalStudentInput>;
};

export type InternalMutationsCreateTeacherArgs = {
  teacher?: InputMaybe<InternalTeacherInput>;
};

export type InternalMutationsCreateUserArgs = {
  user?: InputMaybe<InternalUserInput>;
};

export type InternalMutationsCreateWidgetArgs = {
  widget?: InputMaybe<InternalWidgetInput>;
};

export type InternalMutationsCreateWidgetImageArgs = {
  widgetImage?: InputMaybe<InternalWidgetImageInput>;
};

export type InternalMutationsDeleteBillingAccountArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteCityArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteCourseArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteCustomerArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteEphemeralArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteFieldlessArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteFriendshipArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteGizmoArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteManyBillingAccountArgs = {
  filter?: InputMaybe<Array<BillingAccountFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyCityArgs = {
  filter?: InputMaybe<Array<CityFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyCourseArgs = {
  filter?: InputMaybe<Array<CourseFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyCustomerArgs = {
  filter?: InputMaybe<Array<CustomerFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyEphemeralArgs = {
  filter?: InputMaybe<Array<EphemeralFilter>>;
};

export type InternalMutationsDeleteManyFieldlessArgs = {
  filter?: InputMaybe<Array<FieldlessFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyFriendshipArgs = {
  filter?: InputMaybe<Array<FriendshipFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyGizmoArgs = {
  filter?: InputMaybe<Array<GizmoFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyRegistrationArgs = {
  filter?: InputMaybe<Array<RegistrationFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManySampleModelToTestReallyLongModelNamesArgs = {
  filter?: InputMaybe<Array<SampleModelToTestReallyLongModelNamesFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManySectionArgs = {
  filter?: InputMaybe<Array<SectionFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManySessionArgs = {
  filter?: InputMaybe<Array<SessionFilter>>;
};

export type InternalMutationsDeleteManySprocketArgs = {
  filter?: InputMaybe<Array<SprocketFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyStudentArgs = {
  filter?: InputMaybe<Array<StudentFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteManyTeacherArgs = {
  filter?: InputMaybe<Array<TeacherFilter>>;
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

export type InternalMutationsDeleteManyWidgetImageArgs = {
  filter?: InputMaybe<Array<WidgetImageFilter>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type InternalMutationsDeleteRegistrationArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteSampleModelToTestReallyLongModelNamesArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteSectionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteSessionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteSprocketArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteStudentArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteTeacherArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteUserArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsDeleteWidgetImageArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsTriggerAddInventoryIfOutOfStockWidgetArgs = {
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

export type InternalMutationsTriggerBarfAnErrorArgs = {
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerBendGizmoArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerBreakGizmoArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerChangePasswordUserArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateBillingAccountArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateCityArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateCourseArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateCustomerArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateEphemeralArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateFieldlessArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateFriendshipArgs = {
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

export type InternalMutationsTriggerCreateRegistrationArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateSampleModelToTestReallyLongModelNamesArgs = {
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

export type InternalMutationsTriggerCreateSprocketArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateStudentArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateTeacherArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateWidgetArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerCreateWidgetImageArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteBillingAccountArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteCityArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteCourseArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteCustomerArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteEphemeralArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteFieldlessArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteFriendshipArgs = {
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

export type InternalMutationsTriggerDeleteRegistrationArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteSampleModelToTestReallyLongModelNamesArgs = {
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

export type InternalMutationsTriggerDeleteSprocketArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteStudentArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerDeleteTeacherArgs = {
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

export type InternalMutationsTriggerDeleteWidgetImageArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerFlipAllWidgetsArgs = {
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerFlipDownWidgetArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerFlipUpWidgetArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerFoldGizmoArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerLogParamsArgs = {
  arr?: InputMaybe<Array<Scalars["String"]["input"]>>;
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  str?: InputMaybe<Scalars["String"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerOtherCreateGizmoArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerResetPasswordUserArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerSendResetPasswordUserArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerSendVerifyEmailUserArgs = {
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

export type InternalMutationsTriggerStraightenGizmoArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUnfoldGizmoArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUntriggerableGizmoArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUntriggerableGlobalActionArgs = {
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateBillingAccountArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateCityArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateCourseArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateCustomerArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateEphemeralArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateFieldlessArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateFriendshipArgs = {
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

export type InternalMutationsTriggerUpdateRegistrationArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateSampleModelToTestReallyLongModelNamesArgs = {
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

export type InternalMutationsTriggerUpdateSprocketArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateStudentArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerUpdateTeacherArgs = {
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

export type InternalMutationsTriggerUpdateWidgetImageArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsTriggerVerifyEmailUserArgs = {
  context?: InputMaybe<AppGraphQlTriggerMutationContext>;
  params?: InputMaybe<Scalars["JSONObject"]["input"]>;
  trigger?: InputMaybe<Scalars["JSONObject"]["input"]>;
  verifyTriggerExists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InternalMutationsUpdateBillingAccountArgs = {
  billingAccount?: InputMaybe<InternalBillingAccountInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateCityArgs = {
  city?: InputMaybe<InternalCityInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateCourseArgs = {
  course?: InputMaybe<InternalCourseInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateCustomerArgs = {
  customer?: InputMaybe<InternalCustomerInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateEphemeralArgs = {
  ephemeral?: InputMaybe<InternalEphemeralInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateFieldlessArgs = {
  fieldless?: InputMaybe<InternalFieldlessInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateFriendshipArgs = {
  friendship?: InputMaybe<InternalFriendshipInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateGizmoArgs = {
  gizmo?: InputMaybe<InternalGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type InternalMutationsUpdateRegistrationArgs = {
  id: Scalars["GadgetID"]["input"];
  registration?: InputMaybe<InternalRegistrationInput>;
};

export type InternalMutationsUpdateSampleModelToTestReallyLongModelNamesArgs = {
  id: Scalars["GadgetID"]["input"];
  sampleModelToTestReallyLongModelNames?: InputMaybe<InternalSampleModelToTestReallyLongModelNamesInput>;
};

export type InternalMutationsUpdateSectionArgs = {
  id: Scalars["GadgetID"]["input"];
  section?: InputMaybe<InternalSectionInput>;
};

export type InternalMutationsUpdateSessionArgs = {
  id: Scalars["GadgetID"]["input"];
  session?: InputMaybe<InternalSessionInput>;
};

export type InternalMutationsUpdateSprocketArgs = {
  id: Scalars["GadgetID"]["input"];
  sprocket?: InputMaybe<InternalSprocketInput>;
};

export type InternalMutationsUpdateStudentArgs = {
  id: Scalars["GadgetID"]["input"];
  student?: InputMaybe<InternalStudentInput>;
};

export type InternalMutationsUpdateTeacherArgs = {
  id: Scalars["GadgetID"]["input"];
  teacher?: InputMaybe<InternalTeacherInput>;
};

export type InternalMutationsUpdateUserArgs = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<InternalUserInput>;
};

export type InternalMutationsUpdateWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
  widget?: InputMaybe<InternalWidgetInput>;
};

export type InternalMutationsUpdateWidgetImageArgs = {
  id: Scalars["GadgetID"]["input"];
  widgetImage?: InputMaybe<InternalWidgetImageInput>;
};

export type InternalMutationsUpsertBillingAccountArgs = {
  billingAccount?: InputMaybe<InternalBillingAccountInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertCityArgs = {
  city?: InputMaybe<InternalCityInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertCourseArgs = {
  course?: InputMaybe<InternalCourseInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertCustomerArgs = {
  customer?: InputMaybe<InternalCustomerInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertEphemeralArgs = {
  ephemeral?: InputMaybe<InternalEphemeralInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertFieldlessArgs = {
  fieldless?: InputMaybe<InternalFieldlessInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertFriendshipArgs = {
  friendship?: InputMaybe<InternalFriendshipInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertGizmoArgs = {
  gizmo?: InputMaybe<InternalGizmoInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalMutationsUpsertRegistrationArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  registration?: InputMaybe<InternalRegistrationInput>;
};

export type InternalMutationsUpsertSampleModelToTestReallyLongModelNamesArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sampleModelToTestReallyLongModelNames?: InputMaybe<InternalSampleModelToTestReallyLongModelNamesInput>;
};

export type InternalMutationsUpsertSectionArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  section?: InputMaybe<InternalSectionInput>;
};

export type InternalMutationsUpsertSessionArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  session?: InputMaybe<InternalSessionInput>;
};

export type InternalMutationsUpsertSprocketArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sprocket?: InputMaybe<InternalSprocketInput>;
};

export type InternalMutationsUpsertStudentArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  student?: InputMaybe<InternalStudentInput>;
};

export type InternalMutationsUpsertTeacherArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teacher?: InputMaybe<InternalTeacherInput>;
};

export type InternalMutationsUpsertUserArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  user?: InputMaybe<InternalUserInput>;
};

export type InternalMutationsUpsertWidgetArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widget?: InputMaybe<InternalWidgetInput>;
};

export type InternalMutationsUpsertWidgetImageArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widgetImage?: InputMaybe<InternalWidgetImageInput>;
};

export type InternalQueries = {
  __typename?: "InternalQueries";
  billingAccount?: Maybe<Scalars["InternalBillingAccountRecord"]["output"]>;
  city?: Maybe<Scalars["InternalCityRecord"]["output"]>;
  course?: Maybe<Scalars["InternalCourseRecord"]["output"]>;
  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: Maybe<Scalars["JSONObject"]["output"]>;
  customer?: Maybe<Scalars["InternalCustomerRecord"]["output"]>;
  ephemeral?: Maybe<Scalars["InternalEphemeralRecord"]["output"]>;
  fieldless?: Maybe<Scalars["InternalFieldlessRecord"]["output"]>;
  friendship?: Maybe<Scalars["InternalFriendshipRecord"]["output"]>;
  game: InternalGameQueries;
  gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
  landmark: InternalLandmarkQueries;
  listBillingAccount: InternalBillingAccountRecordConnection;
  listCity: InternalCityRecordConnection;
  listCourse: InternalCourseRecordConnection;
  listCustomer: InternalCustomerRecordConnection;
  listEphemeral: InternalEphemeralRecordConnection;
  listFieldless: InternalFieldlessRecordConnection;
  listFriendship: InternalFriendshipRecordConnection;
  listGizmo: InternalGizmoRecordConnection;
  listRegistration: InternalRegistrationRecordConnection;
  listSampleModelToTestReallyLongModelNames: InternalSampleModelToTestReallyLongModelNamesRecordConnection;
  listSection: InternalSectionRecordConnection;
  listSession: InternalSessionRecordConnection;
  listSprocket: InternalSprocketRecordConnection;
  listStudent: InternalStudentRecordConnection;
  listTeacher: InternalTeacherRecordConnection;
  listUser: InternalUserRecordConnection;
  listWidget: InternalWidgetRecordConnection;
  listWidgetImage: InternalWidgetImageRecordConnection;
  registration?: Maybe<Scalars["InternalRegistrationRecord"]["output"]>;
  sampleModelToTestReallyLongModelNames?: Maybe<Scalars["InternalSampleModelToTestReallyLongModelNamesRecord"]["output"]>;
  section?: Maybe<Scalars["InternalSectionRecord"]["output"]>;
  session?: Maybe<Scalars["InternalSessionRecord"]["output"]>;
  sprocket?: Maybe<Scalars["InternalSprocketRecord"]["output"]>;
  student?: Maybe<Scalars["InternalStudentRecord"]["output"]>;
  teacher?: Maybe<Scalars["InternalTeacherRecord"]["output"]>;
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
  widget?: Maybe<Scalars["InternalWidgetRecord"]["output"]>;
  widgetImage?: Maybe<Scalars["InternalWidgetImageRecord"]["output"]>;
};

export type InternalQueriesBillingAccountArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesCityArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesCourseArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesCustomerArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesEphemeralArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesFieldlessArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesFriendshipArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesGizmoArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesListBillingAccountArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<BillingAccountFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<BillingAccountSort>>;
};

export type InternalQueriesListCityArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<CityFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<CitySort>>;
};

export type InternalQueriesListCourseArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<CourseFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<CourseSort>>;
};

export type InternalQueriesListCustomerArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<CustomerFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<CustomerSort>>;
};

export type InternalQueriesListEphemeralArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<EphemeralFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesListFieldlessArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<FieldlessFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<FieldlessSort>>;
};

export type InternalQueriesListFriendshipArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<FriendshipFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<FriendshipSort>>;
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

export type InternalQueriesListRegistrationArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<RegistrationFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<RegistrationSort>>;
};

export type InternalQueriesListSampleModelToTestReallyLongModelNamesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<SampleModelToTestReallyLongModelNamesFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<SampleModelToTestReallyLongModelNamesSort>>;
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

export type InternalQueriesListSprocketArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<SprocketFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<SprocketSort>>;
};

export type InternalQueriesListStudentArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<StudentFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<StudentSort>>;
};

export type InternalQueriesListTeacherArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<TeacherFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<TeacherSort>>;
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

export type InternalQueriesListWidgetImageArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<WidgetImageFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<Array<WidgetImageSort>>;
};

export type InternalQueriesRegistrationArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesSampleModelToTestReallyLongModelNamesArgs = {
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

export type InternalQueriesSprocketArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesStudentArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalQueriesTeacherArgs = {
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

export type InternalQueriesWidgetImageArgs = {
  id: Scalars["GadgetID"]["input"];
  select?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type InternalRegistrationInput = {
  course?: InputMaybe<InternalBelongsToInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  student?: InputMaybe<InternalBelongsToInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalRegistrationRecord items. */
export type InternalRegistrationRecordConnection = {
  __typename?: "InternalRegistrationRecordConnection";
  /** A list of edges. */
  edges: Array<InternalRegistrationRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalRegistrationRecord connection. */
export type InternalRegistrationRecordEdge = {
  __typename?: "InternalRegistrationRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalRegistrationRecord"]["output"];
};

export type InternalSampleModelToTestReallyLongModelNamesInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalSampleModelToTestReallyLongModelNamesRecord items. */
export type InternalSampleModelToTestReallyLongModelNamesRecordConnection = {
  __typename?: "InternalSampleModelToTestReallyLongModelNamesRecordConnection";
  /** A list of edges. */
  edges: Array<InternalSampleModelToTestReallyLongModelNamesRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalSampleModelToTestReallyLongModelNamesRecord connection. */
export type InternalSampleModelToTestReallyLongModelNamesRecordEdge = {
  __typename?: "InternalSampleModelToTestReallyLongModelNamesRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalSampleModelToTestReallyLongModelNamesRecord"]["output"];
};

export type InternalSectionInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
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

export type InternalSprocketAtomicsInput = {
  /** Numeric atomic commands for operating on ratio. */
  ratio?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalSprocketInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalSprocketAtomicsInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gizmo?: InputMaybe<InternalBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  ratio?: InputMaybe<Scalars["Float"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalSprocketRecord items. */
export type InternalSprocketRecordConnection = {
  __typename?: "InternalSprocketRecordConnection";
  /** A list of edges. */
  edges: Array<InternalSprocketRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalSprocketRecord connection. */
export type InternalSprocketRecordEdge = {
  __typename?: "InternalSprocketRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalSprocketRecord"]["output"];
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

export type InternalStudentInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<InternalBelongsToInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalStudentRecord items. */
export type InternalStudentRecordConnection = {
  __typename?: "InternalStudentRecordConnection";
  /** A list of edges. */
  edges: Array<InternalStudentRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalStudentRecord connection. */
export type InternalStudentRecordEdge = {
  __typename?: "InternalStudentRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalStudentRecord"]["output"];
};

export type InternalTeacherInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<InternalBelongsToInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A connection to a list of InternalTeacherRecord items. */
export type InternalTeacherRecordConnection = {
  __typename?: "InternalTeacherRecordConnection";
  /** A list of edges. */
  edges: Array<InternalTeacherRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalTeacherRecord connection. */
export type InternalTeacherRecordEdge = {
  __typename?: "InternalTeacherRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalTeacherRecord"]["output"];
};

export type InternalUpdateBillingAccountResult = {
  __typename?: "InternalUpdateBillingAccountResult";
  billingAccount?: Maybe<Scalars["InternalBillingAccountRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateCityResult = {
  __typename?: "InternalUpdateCityResult";
  city?: Maybe<Scalars["InternalCityRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateCourseResult = {
  __typename?: "InternalUpdateCourseResult";
  course?: Maybe<Scalars["InternalCourseRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateCustomerResult = {
  __typename?: "InternalUpdateCustomerResult";
  customer?: Maybe<Scalars["InternalCustomerRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateEphemeralResult = {
  __typename?: "InternalUpdateEphemeralResult";
  ephemeral?: Maybe<Scalars["InternalEphemeralRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateFieldlessResult = {
  __typename?: "InternalUpdateFieldlessResult";
  errors?: Maybe<Array<ExecutionError>>;
  fieldless?: Maybe<Scalars["InternalFieldlessRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateFriendshipResult = {
  __typename?: "InternalUpdateFriendshipResult";
  errors?: Maybe<Array<ExecutionError>>;
  friendship?: Maybe<Scalars["InternalFriendshipRecord"]["output"]>;
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

export type InternalUpdateLandmarkStadiumResult = {
  __typename?: "InternalUpdateLandmarkStadiumResult";
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<Scalars["InternalLandmarkStadiumRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateRegistrationResult = {
  __typename?: "InternalUpdateRegistrationResult";
  errors?: Maybe<Array<ExecutionError>>;
  registration?: Maybe<Scalars["InternalRegistrationRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateSampleModelToTestReallyLongModelNamesResult = {
  __typename?: "InternalUpdateSampleModelToTestReallyLongModelNamesResult";
  errors?: Maybe<Array<ExecutionError>>;
  sampleModelToTestReallyLongModelNames?: Maybe<Scalars["InternalSampleModelToTestReallyLongModelNamesRecord"]["output"]>;
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

export type InternalUpdateSprocketResult = {
  __typename?: "InternalUpdateSprocketResult";
  errors?: Maybe<Array<ExecutionError>>;
  sprocket?: Maybe<Scalars["InternalSprocketRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateStudentResult = {
  __typename?: "InternalUpdateStudentResult";
  errors?: Maybe<Array<ExecutionError>>;
  student?: Maybe<Scalars["InternalStudentRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpdateTeacherResult = {
  __typename?: "InternalUpdateTeacherResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  teacher?: Maybe<Scalars["InternalTeacherRecord"]["output"]>;
};

export type InternalUpdateUserResult = {
  __typename?: "InternalUpdateUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
};

export type InternalUpdateWidgetImageResult = {
  __typename?: "InternalUpdateWidgetImageResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widgetImage?: Maybe<Scalars["InternalWidgetImageRecord"]["output"]>;
};

export type InternalUpdateWidgetResult = {
  __typename?: "InternalUpdateWidgetResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Scalars["InternalWidgetRecord"]["output"]>;
};

export type InternalUpsertBillingAccountResult = {
  __typename?: "InternalUpsertBillingAccountResult";
  billingAccount?: Maybe<Scalars["InternalBillingAccountRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertCityResult = {
  __typename?: "InternalUpsertCityResult";
  city?: Maybe<Scalars["InternalCityRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertCourseResult = {
  __typename?: "InternalUpsertCourseResult";
  course?: Maybe<Scalars["InternalCourseRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertCustomerResult = {
  __typename?: "InternalUpsertCustomerResult";
  customer?: Maybe<Scalars["InternalCustomerRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertEphemeralResult = {
  __typename?: "InternalUpsertEphemeralResult";
  ephemeral?: Maybe<Scalars["InternalEphemeralRecord"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertFieldlessResult = {
  __typename?: "InternalUpsertFieldlessResult";
  errors?: Maybe<Array<ExecutionError>>;
  fieldless?: Maybe<Scalars["InternalFieldlessRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertFriendshipResult = {
  __typename?: "InternalUpsertFriendshipResult";
  errors?: Maybe<Array<ExecutionError>>;
  friendship?: Maybe<Scalars["InternalFriendshipRecord"]["output"]>;
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

export type InternalUpsertLandmarkStadiumResult = {
  __typename?: "InternalUpsertLandmarkStadiumResult";
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<Scalars["InternalLandmarkStadiumRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertRegistrationResult = {
  __typename?: "InternalUpsertRegistrationResult";
  errors?: Maybe<Array<ExecutionError>>;
  registration?: Maybe<Scalars["InternalRegistrationRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertSampleModelToTestReallyLongModelNamesResult = {
  __typename?: "InternalUpsertSampleModelToTestReallyLongModelNamesResult";
  errors?: Maybe<Array<ExecutionError>>;
  sampleModelToTestReallyLongModelNames?: Maybe<Scalars["InternalSampleModelToTestReallyLongModelNamesRecord"]["output"]>;
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

export type InternalUpsertSprocketResult = {
  __typename?: "InternalUpsertSprocketResult";
  errors?: Maybe<Array<ExecutionError>>;
  sprocket?: Maybe<Scalars["InternalSprocketRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertStudentResult = {
  __typename?: "InternalUpsertStudentResult";
  errors?: Maybe<Array<ExecutionError>>;
  student?: Maybe<Scalars["InternalStudentRecord"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type InternalUpsertTeacherResult = {
  __typename?: "InternalUpsertTeacherResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  teacher?: Maybe<Scalars["InternalTeacherRecord"]["output"]>;
};

export type InternalUpsertUserResult = {
  __typename?: "InternalUpsertUserResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
};

export type InternalUpsertWidgetImageResult = {
  __typename?: "InternalUpsertWidgetImageResult";
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widgetImage?: Maybe<Scalars["InternalWidgetImageRecord"]["output"]>;
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
  emailVerificationToken?: InputMaybe<Scalars["String"]["input"]>;
  emailVerificationTokenExpiration?: InputMaybe<Scalars["DateTime"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  googleImageUrl?: InputMaybe<Scalars["String"]["input"]>;
  googleProfileId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastSignedIn?: InputMaybe<Scalars["DateTime"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
  resetPasswordTokenExpiration?: InputMaybe<Scalars["DateTime"]["input"]>;
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

export type InternalWidgetImageAtomicsInput = {
  /** Numeric atomic commands for operating on order. */
  order?: InputMaybe<Array<NumericAtomicFieldUpdateInput>>;
};

export type InternalWidgetImageInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalWidgetImageAtomicsInput>;
  altText?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  image?: InputMaybe<InternalStoredFileInput>;
  order?: InputMaybe<Scalars["Float"]["input"]>;
  state?: InputMaybe<Scalars["RecordState"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  widget?: InputMaybe<InternalBelongsToInput>;
};

/** A connection to a list of InternalWidgetImageRecord items. */
export type InternalWidgetImageRecordConnection = {
  __typename?: "InternalWidgetImageRecordConnection";
  /** A list of edges. */
  edges: Array<InternalWidgetImageRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a InternalWidgetImageRecord connection. */
export type InternalWidgetImageRecordEdge = {
  __typename?: "InternalWidgetImageRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scalars["InternalWidgetImageRecord"]["output"];
};

export type InternalWidgetInput = {
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InputMaybe<InternalWidgetAtomicsInput>;
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  cost?: InputMaybe<Scalars["InternalCADCurrencyAmount"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phase?: InputMaybe<Scalars["WidgetPhaseEnum"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<InternalBelongsToInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["WidgetStateEnum"]["input"]>;
  stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
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

export type LandmarkMutations = {
  __typename?: "LandmarkMutations";
  bulkCreateStadia?: Maybe<BulkCreateLandmarkStadiaResult>;
  bulkDeleteStadia?: Maybe<BulkDeleteLandmarkStadiaResult>;
  bulkUpdateStadia?: Maybe<BulkUpdateLandmarkStadiaResult>;
  bulkUpsertStadia: BulkUpsertLandmarkStadiaResult;
  createStadium?: Maybe<CreateLandmarkStadiumResult>;
  deleteStadium?: Maybe<DeleteLandmarkStadiumResult>;
  updateStadium?: Maybe<UpdateLandmarkStadiumResult>;
  upsertStadium?: Maybe<UpsertLandmarkStadiumResult>;
};

export type LandmarkMutationsBulkCreateStadiaArgs = {
  inputs: Array<BulkCreateLandmarkStadiaInput>;
};

export type LandmarkMutationsBulkDeleteStadiaArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type LandmarkMutationsBulkUpdateStadiaArgs = {
  inputs: Array<BulkUpdateLandmarkStadiaInput>;
};

export type LandmarkMutationsBulkUpsertStadiaArgs = {
  inputs: Array<BulkUpsertLandmarkStadiaInput>;
};

export type LandmarkMutationsCreateStadiumArgs = {
  stadium?: InputMaybe<CreateLandmarkStadiumInput>;
};

export type LandmarkMutationsDeleteStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type LandmarkMutationsUpdateStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
  stadium?: InputMaybe<UpdateLandmarkStadiumInput>;
};

export type LandmarkMutationsUpsertStadiumArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stadium?: InputMaybe<UpsertLandmarkStadiumInput>;
};

export type LandmarkQueries = {
  __typename?: "LandmarkQueries";
  stadia: LandmarkStadiumConnection;
  stadium?: Maybe<LandmarkStadium>;
};

export type LandmarkQueriesStadiaArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<LandmarkStadiumFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<LandmarkStadiumSort>>;
};

export type LandmarkQueriesStadiumArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type LandmarkStadium = {
  __typename?: "LandmarkStadium";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of LandmarkStadium items. */
export type LandmarkStadiumConnection = {
  __typename?: "LandmarkStadiumConnection";
  /** A list of edges. */
  edges: Array<LandmarkStadiumEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a LandmarkStadium connection. */
export type LandmarkStadiumEdge = {
  __typename?: "LandmarkStadiumEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: LandmarkStadium;
};

export type LandmarkStadiumFilter = {
  AND?: InputMaybe<Array<InputMaybe<LandmarkStadiumFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<LandmarkStadiumFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LandmarkStadiumFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LandmarkStadiumSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type LockOperationResult = {
  __typename?: "LockOperationResult";
  /** Any errors encountered during the locking/unlocking operation */
  errors?: Maybe<Array<ExecutionError>>;
  /** Whether the lock operation succeeded */
  success: Scalars["Boolean"]["output"];
};

export type LogParamsResult = {
  __typename?: "LogParamsResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

/** A monetary value containing its amount and currency */
export type Money = {
  __typename?: "Money";
  /** The amount, in the currency's subunit */
  amount: Scalars["Float"]["output"];
  /** The currency's three-letter code (ISO 4217) */
  currency: Scalars["String"]["output"];
  /** Formatted view of this money value, including both the amount and currency */
  formattedAmount: Scalars["String"]["output"];
};

/** A monetary value containing its amount and currency */
export type MoneyFormattedAmountArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type MultiEnumFilter = {
  contains?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  equals?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
  notEquals?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  addInventoryIfOutOfStockWidget?: Maybe<AddInventoryIfOutOfStockWidgetResult>;
  addInventoryWidget?: Maybe<AddInventoryWidgetResult>;
  background: BackgroundMutations;
  barfAnError?: Maybe<BarfAnErrorResult>;
  bendGizmo?: Maybe<BendGizmoResult>;
  breakGizmo?: Maybe<BreakGizmoResult>;
  bulkAddInventoryIfOutOfStockWidgets?: Maybe<BulkAddInventoryIfOutOfStockWidgetsResult>;
  bulkAddInventoryWidgets?: Maybe<BulkAddInventoryWidgetsResult>;
  bulkBendGizmos?: Maybe<BulkBendGizmosResult>;
  bulkBreakGizmos?: Maybe<BulkBreakGizmosResult>;
  bulkChangePasswordUsers?: Maybe<BulkChangePasswordUsersResult>;
  bulkCreateBillingAccounts?: Maybe<BulkCreateBillingAccountsResult>;
  bulkCreateCities?: Maybe<BulkCreateCitiesResult>;
  bulkCreateCourses?: Maybe<BulkCreateCoursesResult>;
  bulkCreateCustomers?: Maybe<BulkCreateCustomersResult>;
  bulkCreateEphemerals?: Maybe<BulkCreateEphemeralsResult>;
  bulkCreateFieldlesses?: Maybe<BulkCreateFieldlessesResult>;
  bulkCreateFriendships?: Maybe<BulkCreateFriendshipsResult>;
  bulkCreateGizmos?: Maybe<BulkCreateGizmosResult>;
  bulkCreateRegistrations?: Maybe<BulkCreateRegistrationsResult>;
  bulkCreateSampleModelToTestReallyLongModelNames?: Maybe<BulkCreateSampleModelToTestReallyLongModelNamesResult>;
  bulkCreateSections?: Maybe<BulkCreateSectionsResult>;
  bulkCreateSprockets?: Maybe<BulkCreateSprocketsResult>;
  bulkCreateStudents?: Maybe<BulkCreateStudentsResult>;
  bulkCreateTeachers?: Maybe<BulkCreateTeachersResult>;
  bulkCreateWidgetImages?: Maybe<BulkCreateWidgetImagesResult>;
  bulkCreateWidgets?: Maybe<BulkCreateWidgetsResult>;
  bulkDeleteBillingAccounts?: Maybe<BulkDeleteBillingAccountsResult>;
  bulkDeleteCities?: Maybe<BulkDeleteCitiesResult>;
  bulkDeleteCourses?: Maybe<BulkDeleteCoursesResult>;
  bulkDeleteCustomers?: Maybe<BulkDeleteCustomersResult>;
  bulkDeleteEphemerals?: Maybe<BulkDeleteEphemeralsResult>;
  bulkDeleteFieldlesses?: Maybe<BulkDeleteFieldlessesResult>;
  bulkDeleteFriendships?: Maybe<BulkDeleteFriendshipsResult>;
  bulkDeleteGizmos?: Maybe<BulkDeleteGizmosResult>;
  bulkDeleteRegistrations?: Maybe<BulkDeleteRegistrationsResult>;
  bulkDeleteSampleModelToTestReallyLongModelNames?: Maybe<BulkDeleteSampleModelToTestReallyLongModelNamesResult>;
  bulkDeleteSections?: Maybe<BulkDeleteSectionsResult>;
  bulkDeleteSprockets?: Maybe<BulkDeleteSprocketsResult>;
  bulkDeleteStudents?: Maybe<BulkDeleteStudentsResult>;
  bulkDeleteTeachers?: Maybe<BulkDeleteTeachersResult>;
  bulkDeleteUsers?: Maybe<BulkDeleteUsersResult>;
  bulkDeleteWidgetImages?: Maybe<BulkDeleteWidgetImagesResult>;
  bulkDeleteWidgets?: Maybe<BulkDeleteWidgetsResult>;
  bulkFlipDownWidgets?: Maybe<BulkFlipDownWidgetsResult>;
  bulkFlipUpWidgets?: Maybe<BulkFlipUpWidgetsResult>;
  bulkFoldGizmos?: Maybe<BulkFoldGizmosResult>;
  bulkOtherCreateGizmos?: Maybe<BulkOtherCreateGizmosResult>;
  bulkResetPasswordUsers?: Maybe<BulkResetPasswordUsersResult>;
  bulkSendResetPasswordUsers?: Maybe<BulkSendResetPasswordUsersResult>;
  bulkSendVerifyEmailUsers?: Maybe<BulkSendVerifyEmailUsersResult>;
  bulkSignInUsers?: Maybe<BulkSignInUsersResult>;
  bulkSignOutUsers?: Maybe<BulkSignOutUsersResult>;
  bulkSignUpUsers?: Maybe<BulkSignUpUsersResult>;
  bulkStraightenGizmos?: Maybe<BulkStraightenGizmosResult>;
  bulkUnfoldGizmos?: Maybe<BulkUnfoldGizmosResult>;
  bulkUpdateBillingAccounts?: Maybe<BulkUpdateBillingAccountsResult>;
  bulkUpdateCities?: Maybe<BulkUpdateCitiesResult>;
  bulkUpdateCourses?: Maybe<BulkUpdateCoursesResult>;
  bulkUpdateCustomers?: Maybe<BulkUpdateCustomersResult>;
  bulkUpdateEphemerals?: Maybe<BulkUpdateEphemeralsResult>;
  bulkUpdateFieldlesses?: Maybe<BulkUpdateFieldlessesResult>;
  bulkUpdateFriendships?: Maybe<BulkUpdateFriendshipsResult>;
  bulkUpdateGizmos?: Maybe<BulkUpdateGizmosResult>;
  bulkUpdateRegistrations?: Maybe<BulkUpdateRegistrationsResult>;
  bulkUpdateSampleModelToTestReallyLongModelNames?: Maybe<BulkUpdateSampleModelToTestReallyLongModelNamesResult>;
  bulkUpdateSections?: Maybe<BulkUpdateSectionsResult>;
  bulkUpdateSprockets?: Maybe<BulkUpdateSprocketsResult>;
  bulkUpdateStudents?: Maybe<BulkUpdateStudentsResult>;
  bulkUpdateTeachers?: Maybe<BulkUpdateTeachersResult>;
  bulkUpdateUsers?: Maybe<BulkUpdateUsersResult>;
  bulkUpdateWidgetImages?: Maybe<BulkUpdateWidgetImagesResult>;
  bulkUpdateWidgets?: Maybe<BulkUpdateWidgetsResult>;
  bulkUpsertBillingAccounts: BulkUpsertBillingAccountsResult;
  bulkUpsertCities: BulkUpsertCitiesResult;
  bulkUpsertCourses: BulkUpsertCoursesResult;
  bulkUpsertCustomers: BulkUpsertCustomersResult;
  bulkUpsertEphemerals: BulkUpsertEphemeralsResult;
  bulkUpsertFieldlesses: BulkUpsertFieldlessesResult;
  bulkUpsertFriendships: BulkUpsertFriendshipsResult;
  bulkUpsertGizmos: BulkUpsertGizmosResult;
  bulkUpsertRegistrations: BulkUpsertRegistrationsResult;
  bulkUpsertSampleModelToTestReallyLongModelNames: BulkUpsertSampleModelToTestReallyLongModelNamesResult;
  bulkUpsertSections: BulkUpsertSectionsResult;
  bulkUpsertSprockets: BulkUpsertSprocketsResult;
  bulkUpsertStudents: BulkUpsertStudentsResult;
  bulkUpsertTeachers: BulkUpsertTeachersResult;
  bulkUpsertUsers: BulkUpsertUsersResult;
  bulkUpsertWidgetImages: BulkUpsertWidgetImagesResult;
  bulkUpsertWidgets: BulkUpsertWidgetsResult;
  bulkVerifyEmailUsers?: Maybe<BulkVerifyEmailUsersResult>;
  changePasswordUser?: Maybe<ChangePasswordUserResult>;
  createBillingAccount?: Maybe<CreateBillingAccountResult>;
  createCity?: Maybe<CreateCityResult>;
  createCourse?: Maybe<CreateCourseResult>;
  createCustomer?: Maybe<CreateCustomerResult>;
  createEphemeral?: Maybe<CreateEphemeralResult>;
  createFieldless?: Maybe<CreateFieldlessResult>;
  createFriendship?: Maybe<CreateFriendshipResult>;
  createGizmo?: Maybe<CreateGizmoResult>;
  createRegistration?: Maybe<CreateRegistrationResult>;
  createSampleModelToTestReallyLongModelNames?: Maybe<CreateSampleModelToTestReallyLongModelNamesResult>;
  createSection?: Maybe<CreateSectionResult>;
  createSprocket?: Maybe<CreateSprocketResult>;
  createStudent?: Maybe<CreateStudentResult>;
  createTeacher?: Maybe<CreateTeacherResult>;
  createWidget?: Maybe<CreateWidgetResult>;
  createWidgetImage?: Maybe<CreateWidgetImageResult>;
  deleteBillingAccount?: Maybe<DeleteBillingAccountResult>;
  deleteCity?: Maybe<DeleteCityResult>;
  deleteCourse?: Maybe<DeleteCourseResult>;
  deleteCustomer?: Maybe<DeleteCustomerResult>;
  deleteEphemeral?: Maybe<DeleteEphemeralResult>;
  deleteFieldless?: Maybe<DeleteFieldlessResult>;
  deleteFriendship?: Maybe<DeleteFriendshipResult>;
  deleteGizmo?: Maybe<DeleteGizmoResult>;
  deleteRegistration?: Maybe<DeleteRegistrationResult>;
  deleteSampleModelToTestReallyLongModelNames?: Maybe<DeleteSampleModelToTestReallyLongModelNamesResult>;
  deleteSection?: Maybe<DeleteSectionResult>;
  deleteSprocket?: Maybe<DeleteSprocketResult>;
  deleteStudent?: Maybe<DeleteStudentResult>;
  deleteTeacher?: Maybe<DeleteTeacherResult>;
  deleteUser?: Maybe<DeleteUserResult>;
  deleteWidget?: Maybe<DeleteWidgetResult>;
  deleteWidgetImage?: Maybe<DeleteWidgetImageResult>;
  flipAllWidgets?: Maybe<FlipAllWidgetsResult>;
  flipDownWidget?: Maybe<FlipDownWidgetResult>;
  flipUpWidget?: Maybe<FlipUpWidgetResult>;
  foldGizmo?: Maybe<FoldGizmoResult>;
  /** Meta information about the application, like it's name, schema, and other internal details. */
  gadgetMeta: GadgetApplicationMeta;
  game: GameMutations;
  internal: InternalMutations;
  landmark: LandmarkMutations;
  logParams?: Maybe<LogParamsResult>;
  otherCreateGizmo?: Maybe<OtherCreateGizmoResult>;
  resetPasswordUser?: Maybe<ResetPasswordUserResult>;
  sendResetPasswordUser?: Maybe<SendResetPasswordUserResult>;
  sendVerifyEmailUser?: Maybe<SendVerifyEmailUserResult>;
  signInUser?: Maybe<SignInUserResult>;
  signOutUser?: Maybe<SignOutUserResult>;
  signUpUser?: Maybe<SignUpUserResult>;
  straightenGizmo?: Maybe<StraightenGizmoResult>;
  unfoldGizmo?: Maybe<UnfoldGizmoResult>;
  updateBillingAccount?: Maybe<UpdateBillingAccountResult>;
  updateCity?: Maybe<UpdateCityResult>;
  updateCourse?: Maybe<UpdateCourseResult>;
  updateCustomer?: Maybe<UpdateCustomerResult>;
  updateEphemeral?: Maybe<UpdateEphemeralResult>;
  updateFieldless?: Maybe<UpdateFieldlessResult>;
  updateFriendship?: Maybe<UpdateFriendshipResult>;
  updateGizmo?: Maybe<UpdateGizmoResult>;
  updateRegistration?: Maybe<UpdateRegistrationResult>;
  updateSampleModelToTestReallyLongModelNames?: Maybe<UpdateSampleModelToTestReallyLongModelNamesResult>;
  updateSection?: Maybe<UpdateSectionResult>;
  updateSprocket?: Maybe<UpdateSprocketResult>;
  updateStudent?: Maybe<UpdateStudentResult>;
  updateTeacher?: Maybe<UpdateTeacherResult>;
  updateUser?: Maybe<UpdateUserResult>;
  updateWidget?: Maybe<UpdateWidgetResult>;
  updateWidgetImage?: Maybe<UpdateWidgetImageResult>;
  upsertBillingAccount?: Maybe<UpsertBillingAccountResult>;
  upsertCity?: Maybe<UpsertCityResult>;
  upsertCourse?: Maybe<UpsertCourseResult>;
  upsertCustomer?: Maybe<UpsertCustomerResult>;
  upsertEphemeral?: Maybe<UpsertEphemeralResult>;
  upsertFieldless?: Maybe<UpsertFieldlessResult>;
  upsertFriendship?: Maybe<UpsertFriendshipResult>;
  upsertGizmo?: Maybe<UpsertGizmoResult>;
  upsertRegistration?: Maybe<UpsertRegistrationResult>;
  upsertSampleModelToTestReallyLongModelNames?: Maybe<UpsertSampleModelToTestReallyLongModelNamesResult>;
  upsertSection?: Maybe<UpsertSectionResult>;
  upsertSprocket?: Maybe<UpsertSprocketResult>;
  upsertStudent?: Maybe<UpsertStudentResult>;
  upsertTeacher?: Maybe<UpsertTeacherResult>;
  upsertUser?: Maybe<UpsertUserResult>;
  upsertWidget?: Maybe<UpsertWidgetResult>;
  upsertWidgetImage?: Maybe<UpsertWidgetImageResult>;
  verifyEmailUser?: Maybe<VerifyEmailUserResult>;
};

export type MutationAddInventoryIfOutOfStockWidgetArgs = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationAddInventoryWidgetArgs = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  customName?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["GadgetID"]["input"];
  inStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<AddInventoryLocationInput>;
  relatedWidgets?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  widget?: InputMaybe<AddInventoryWidgetInput>;
};

export type MutationBendGizmoArgs = {
  gizmo?: InputMaybe<BendGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationBreakGizmoArgs = {
  gizmo?: InputMaybe<BreakGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationBulkAddInventoryIfOutOfStockWidgetsArgs = {
  inputs: Array<BulkAddInventoryIfOutOfStockWidgetsInput>;
};

export type MutationBulkAddInventoryWidgetsArgs = {
  inputs: Array<BulkAddInventoryWidgetsInput>;
};

export type MutationBulkBendGizmosArgs = {
  inputs: Array<BulkBendGizmosInput>;
};

export type MutationBulkBreakGizmosArgs = {
  inputs: Array<BulkBreakGizmosInput>;
};

export type MutationBulkChangePasswordUsersArgs = {
  inputs: Array<BulkChangePasswordUsersInput>;
};

export type MutationBulkCreateBillingAccountsArgs = {
  inputs: Array<BulkCreateBillingAccountsInput>;
};

export type MutationBulkCreateCitiesArgs = {
  inputs: Array<BulkCreateCitiesInput>;
};

export type MutationBulkCreateCoursesArgs = {
  inputs: Array<BulkCreateCoursesInput>;
};

export type MutationBulkCreateCustomersArgs = {
  inputs: Array<BulkCreateCustomersInput>;
};

export type MutationBulkCreateEphemeralsArgs = {
  inputs: Array<BulkCreateEphemeralsInput>;
};

export type MutationBulkCreateFieldlessesArgs = {
  inputs: Array<Scalars["JSON"]["input"]>;
};

export type MutationBulkCreateFriendshipsArgs = {
  inputs: Array<BulkCreateFriendshipsInput>;
};

export type MutationBulkCreateGizmosArgs = {
  inputs: Array<BulkCreateGizmosInput>;
};

export type MutationBulkCreateRegistrationsArgs = {
  inputs: Array<BulkCreateRegistrationsInput>;
};

export type MutationBulkCreateSampleModelToTestReallyLongModelNamesArgs = {
  inputs: Array<BulkCreateSampleModelToTestReallyLongModelNamesInput>;
};

export type MutationBulkCreateSectionsArgs = {
  inputs: Array<BulkCreateSectionsInput>;
};

export type MutationBulkCreateSprocketsArgs = {
  inputs: Array<BulkCreateSprocketsInput>;
};

export type MutationBulkCreateStudentsArgs = {
  inputs: Array<BulkCreateStudentsInput>;
};

export type MutationBulkCreateTeachersArgs = {
  inputs: Array<BulkCreateTeachersInput>;
};

export type MutationBulkCreateWidgetImagesArgs = {
  inputs: Array<BulkCreateWidgetImagesInput>;
};

export type MutationBulkCreateWidgetsArgs = {
  inputs: Array<BulkCreateWidgetsInput>;
};

export type MutationBulkDeleteBillingAccountsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteCitiesArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteCoursesArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteCustomersArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteEphemeralsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteFieldlessesArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteFriendshipsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteGizmosArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteRegistrationsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteSampleModelToTestReallyLongModelNamesArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteSectionsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteSprocketsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteStudentsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteTeachersArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteUsersArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteWidgetImagesArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkDeleteWidgetsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkFlipDownWidgetsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkFlipUpWidgetsArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkFoldGizmosArgs = {
  inputs: Array<BulkFoldGizmosInput>;
};

export type MutationBulkOtherCreateGizmosArgs = {
  inputs: Array<BulkOtherCreateGizmosInput>;
};

export type MutationBulkResetPasswordUsersArgs = {
  inputs: Array<BulkResetPasswordUsersInput>;
};

export type MutationBulkSendResetPasswordUsersArgs = {
  inputs: Array<BulkSendResetPasswordUsersInput>;
};

export type MutationBulkSendVerifyEmailUsersArgs = {
  inputs: Array<BulkSendVerifyEmailUsersInput>;
};

export type MutationBulkSignInUsersArgs = {
  inputs: Array<BulkSignInUsersInput>;
};

export type MutationBulkSignOutUsersArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkSignUpUsersArgs = {
  inputs: Array<BulkSignUpUsersInput>;
};

export type MutationBulkStraightenGizmosArgs = {
  inputs: Array<BulkStraightenGizmosInput>;
};

export type MutationBulkUnfoldGizmosArgs = {
  inputs: Array<BulkUnfoldGizmosInput>;
};

export type MutationBulkUpdateBillingAccountsArgs = {
  inputs: Array<BulkUpdateBillingAccountsInput>;
};

export type MutationBulkUpdateCitiesArgs = {
  inputs: Array<BulkUpdateCitiesInput>;
};

export type MutationBulkUpdateCoursesArgs = {
  inputs: Array<BulkUpdateCoursesInput>;
};

export type MutationBulkUpdateCustomersArgs = {
  inputs: Array<BulkUpdateCustomersInput>;
};

export type MutationBulkUpdateEphemeralsArgs = {
  inputs: Array<BulkUpdateEphemeralsInput>;
};

export type MutationBulkUpdateFieldlessesArgs = {
  ids: Array<Scalars["GadgetID"]["input"]>;
};

export type MutationBulkUpdateFriendshipsArgs = {
  inputs: Array<BulkUpdateFriendshipsInput>;
};

export type MutationBulkUpdateGizmosArgs = {
  inputs: Array<BulkUpdateGizmosInput>;
};

export type MutationBulkUpdateRegistrationsArgs = {
  inputs: Array<BulkUpdateRegistrationsInput>;
};

export type MutationBulkUpdateSampleModelToTestReallyLongModelNamesArgs = {
  inputs: Array<BulkUpdateSampleModelToTestReallyLongModelNamesInput>;
};

export type MutationBulkUpdateSectionsArgs = {
  inputs: Array<BulkUpdateSectionsInput>;
};

export type MutationBulkUpdateSprocketsArgs = {
  inputs: Array<BulkUpdateSprocketsInput>;
};

export type MutationBulkUpdateStudentsArgs = {
  inputs: Array<BulkUpdateStudentsInput>;
};

export type MutationBulkUpdateTeachersArgs = {
  inputs: Array<BulkUpdateTeachersInput>;
};

export type MutationBulkUpdateUsersArgs = {
  inputs: Array<BulkUpdateUsersInput>;
};

export type MutationBulkUpdateWidgetImagesArgs = {
  inputs: Array<BulkUpdateWidgetImagesInput>;
};

export type MutationBulkUpdateWidgetsArgs = {
  inputs: Array<BulkUpdateWidgetsInput>;
};

export type MutationBulkUpsertBillingAccountsArgs = {
  inputs: Array<BulkUpsertBillingAccountsInput>;
};

export type MutationBulkUpsertCitiesArgs = {
  inputs: Array<BulkUpsertCitiesInput>;
};

export type MutationBulkUpsertCoursesArgs = {
  inputs: Array<BulkUpsertCoursesInput>;
};

export type MutationBulkUpsertCustomersArgs = {
  inputs: Array<BulkUpsertCustomersInput>;
};

export type MutationBulkUpsertEphemeralsArgs = {
  inputs: Array<BulkUpsertEphemeralsInput>;
};

export type MutationBulkUpsertFieldlessesArgs = {
  inputs: Array<BulkUpsertFieldlessesInput>;
};

export type MutationBulkUpsertFriendshipsArgs = {
  inputs: Array<BulkUpsertFriendshipsInput>;
};

export type MutationBulkUpsertGizmosArgs = {
  inputs: Array<BulkUpsertGizmosInput>;
};

export type MutationBulkUpsertRegistrationsArgs = {
  inputs: Array<BulkUpsertRegistrationsInput>;
};

export type MutationBulkUpsertSampleModelToTestReallyLongModelNamesArgs = {
  inputs: Array<BulkUpsertSampleModelToTestReallyLongModelNamesInput>;
};

export type MutationBulkUpsertSectionsArgs = {
  inputs: Array<BulkUpsertSectionsInput>;
};

export type MutationBulkUpsertSprocketsArgs = {
  inputs: Array<BulkUpsertSprocketsInput>;
};

export type MutationBulkUpsertStudentsArgs = {
  inputs: Array<BulkUpsertStudentsInput>;
};

export type MutationBulkUpsertTeachersArgs = {
  inputs: Array<BulkUpsertTeachersInput>;
};

export type MutationBulkUpsertUsersArgs = {
  inputs: Array<BulkUpsertUsersInput>;
};

export type MutationBulkUpsertWidgetImagesArgs = {
  inputs: Array<BulkUpsertWidgetImagesInput>;
};

export type MutationBulkUpsertWidgetsArgs = {
  inputs: Array<BulkUpsertWidgetsInput>;
};

export type MutationBulkVerifyEmailUsersArgs = {
  inputs: Array<BulkVerifyEmailUsersInput>;
};

export type MutationChangePasswordUserArgs = {
  currentPassword?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["GadgetID"]["input"];
  newPassword?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateBillingAccountArgs = {
  billingAccount?: InputMaybe<CreateBillingAccountInput>;
};

export type MutationCreateCityArgs = {
  city?: InputMaybe<CreateCityInput>;
};

export type MutationCreateCourseArgs = {
  course?: InputMaybe<CreateCourseInput>;
};

export type MutationCreateCustomerArgs = {
  customer?: InputMaybe<CreateCustomerInput>;
};

export type MutationCreateEphemeralArgs = {
  ephemeral?: InputMaybe<CreateEphemeralInput>;
};

export type MutationCreateFriendshipArgs = {
  friendship?: InputMaybe<CreateFriendshipInput>;
};

export type MutationCreateGizmoArgs = {
  gizmo?: InputMaybe<CreateGizmoInput>;
};

export type MutationCreateRegistrationArgs = {
  registration?: InputMaybe<CreateRegistrationInput>;
};

export type MutationCreateSampleModelToTestReallyLongModelNamesArgs = {
  sampleModelToTestReallyLongModelNames?: InputMaybe<CreateSampleModelToTestReallyLongModelNamesInput>;
};

export type MutationCreateSectionArgs = {
  section?: InputMaybe<CreateSectionInput>;
};

export type MutationCreateSprocketArgs = {
  sprocket?: InputMaybe<CreateSprocketInput>;
};

export type MutationCreateStudentArgs = {
  student?: InputMaybe<CreateStudentInput>;
};

export type MutationCreateTeacherArgs = {
  teacher?: InputMaybe<CreateTeacherInput>;
};

export type MutationCreateWidgetArgs = {
  widget?: InputMaybe<CreateWidgetInput>;
};

export type MutationCreateWidgetImageArgs = {
  widgetImage?: InputMaybe<CreateWidgetImageInput>;
};

export type MutationDeleteBillingAccountArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteCityArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteCourseArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteCustomerArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteEphemeralArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteFieldlessArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteFriendshipArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteGizmoArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteRegistrationArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteSampleModelToTestReallyLongModelNamesArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteSectionArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteSprocketArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteStudentArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteTeacherArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationDeleteWidgetImageArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationFlipDownWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationFlipUpWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationFoldGizmoArgs = {
  gizmo?: InputMaybe<FoldGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationLogParamsArgs = {
  arr?: InputMaybe<Array<Scalars["String"]["input"]>>;
  bool?: InputMaybe<Scalars["Boolean"]["input"]>;
  num?: InputMaybe<Scalars["Float"]["input"]>;
  str?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationOtherCreateGizmoArgs = {
  gizmo?: InputMaybe<OtherCreateGizmoInput>;
};

export type MutationResetPasswordUserArgs = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSendResetPasswordUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSendVerifyEmailUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSignInUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSignOutUserArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationSignUpUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationStraightenGizmoArgs = {
  gizmo?: InputMaybe<StraightenGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUnfoldGizmoArgs = {
  gizmo?: InputMaybe<UnfoldGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateBillingAccountArgs = {
  billingAccount?: InputMaybe<UpdateBillingAccountInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateCityArgs = {
  city?: InputMaybe<UpdateCityInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateCourseArgs = {
  course?: InputMaybe<UpdateCourseInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateCustomerArgs = {
  customer?: InputMaybe<UpdateCustomerInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateEphemeralArgs = {
  ephemeral?: InputMaybe<UpdateEphemeralInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateFieldlessArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateFriendshipArgs = {
  friendship?: InputMaybe<UpdateFriendshipInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateGizmoArgs = {
  gizmo?: InputMaybe<UpdateGizmoInput>;
  id: Scalars["GadgetID"]["input"];
};

export type MutationUpdateRegistrationArgs = {
  id: Scalars["GadgetID"]["input"];
  registration?: InputMaybe<UpdateRegistrationInput>;
};

export type MutationUpdateSampleModelToTestReallyLongModelNamesArgs = {
  id: Scalars["GadgetID"]["input"];
  sampleModelToTestReallyLongModelNames?: InputMaybe<UpdateSampleModelToTestReallyLongModelNamesInput>;
};

export type MutationUpdateSectionArgs = {
  id: Scalars["GadgetID"]["input"];
  section?: InputMaybe<UpdateSectionInput>;
};

export type MutationUpdateSprocketArgs = {
  id: Scalars["GadgetID"]["input"];
  sprocket?: InputMaybe<UpdateSprocketInput>;
};

export type MutationUpdateStudentArgs = {
  id: Scalars["GadgetID"]["input"];
  student?: InputMaybe<UpdateStudentInput>;
};

export type MutationUpdateTeacherArgs = {
  id: Scalars["GadgetID"]["input"];
  teacher?: InputMaybe<UpdateTeacherInput>;
};

export type MutationUpdateUserArgs = {
  id: Scalars["GadgetID"]["input"];
  user?: InputMaybe<UpdateUserInput>;
};

export type MutationUpdateWidgetArgs = {
  id: Scalars["GadgetID"]["input"];
  widget?: InputMaybe<UpdateWidgetInput>;
};

export type MutationUpdateWidgetImageArgs = {
  id: Scalars["GadgetID"]["input"];
  widgetImage?: InputMaybe<UpdateWidgetImageInput>;
};

export type MutationUpsertBillingAccountArgs = {
  billingAccount?: InputMaybe<UpsertBillingAccountInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertCityArgs = {
  city?: InputMaybe<UpsertCityInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertCourseArgs = {
  course?: InputMaybe<UpsertCourseInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertCustomerArgs = {
  customer?: InputMaybe<UpsertCustomerInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertEphemeralArgs = {
  ephemeral?: InputMaybe<UpsertEphemeralInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertFieldlessArgs = {
  fieldless?: InputMaybe<UpsertFieldlessInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertFriendshipArgs = {
  friendship?: InputMaybe<UpsertFriendshipInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertGizmoArgs = {
  gizmo?: InputMaybe<UpsertGizmoInput>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MutationUpsertRegistrationArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  registration?: InputMaybe<UpsertRegistrationInput>;
};

export type MutationUpsertSampleModelToTestReallyLongModelNamesArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sampleModelToTestReallyLongModelNames?: InputMaybe<UpsertSampleModelToTestReallyLongModelNamesInput>;
};

export type MutationUpsertSectionArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  section?: InputMaybe<UpsertSectionInput>;
};

export type MutationUpsertSprocketArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sprocket?: InputMaybe<UpsertSprocketInput>;
};

export type MutationUpsertStudentArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  student?: InputMaybe<UpsertStudentInput>;
};

export type MutationUpsertTeacherArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teacher?: InputMaybe<UpsertTeacherInput>;
};

export type MutationUpsertUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<UpsertUserInput>;
};

export type MutationUpsertWidgetArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widget?: InputMaybe<UpsertWidgetInput>;
};

export type MutationUpsertWidgetImageArgs = {
  on?: InputMaybe<Array<Scalars["String"]["input"]>>;
  widgetImage?: InputMaybe<UpsertWidgetImageInput>;
};

export type MutationVerifyEmailUserArgs = {
  code?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedAddInventoryLocationInput = {
  phone?: InputMaybe<NestedAddInventoryLocationPhoneInput>;
  street?: InputMaybe<Scalars["String"]["input"]>;
  streetNumber?: InputMaybe<Scalars["Float"]["input"]>;
};

export type NestedAddInventoryLocationPhoneInput = {
  areaCode?: InputMaybe<Scalars["String"]["input"]>;
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedBillingAccountCreateInput = {
  balance?: InputMaybe<Scalars["Float"]["input"]>;
  customer?: InputMaybe<CustomerBelongsToInput>;
};

export type NestedBillingAccountDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedBillingAccountUpdateInput = {
  balance?: InputMaybe<Scalars["Float"]["input"]>;
  customer?: InputMaybe<CustomerBelongsToInput>;
  id: Scalars["GadgetID"]["input"];
};

export type NestedCityCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyInput>>>;
  teachers?: InputMaybe<Array<InputMaybe<TeacherHasManyInput>>>;
};

export type NestedCityDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedCityUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyInput>>>;
  teachers?: InputMaybe<Array<InputMaybe<TeacherHasManyInput>>>;
};

export type NestedCourseCreateInput = {
  offered?: InputMaybe<Scalars["Boolean"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  teacher?: InputMaybe<TeacherBelongsToInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedCourseDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedCourseUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  offered?: InputMaybe<Scalars["Boolean"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  teacher?: InputMaybe<TeacherBelongsToInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedCustomerCreateInput = {
  billingAccount?: InputMaybe<BillingAccountHasOneInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedCustomerDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedCustomerUpdateInput = {
  billingAccount?: InputMaybe<BillingAccountHasOneInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

export type NestedFriendshipCreateInput = {
  ended?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  followee?: InputMaybe<StudentBelongsToInput>;
  follower?: InputMaybe<StudentBelongsToInput>;
  started?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
};

export type NestedFriendshipDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedFriendshipUpdateInput = {
  ended?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  followee?: InputMaybe<StudentBelongsToInput>;
  follower?: InputMaybe<StudentBelongsToInput>;
  id: Scalars["GadgetID"]["input"];
  started?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
};

export type NestedGizmoBendInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedGizmoBreakInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedGizmoCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedGizmoDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedGizmoFoldInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedGizmoOtherCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedGizmoStraightenInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedGizmoUnfoldInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedGizmoUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedPlayerBarfAnErrorInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedPlayerCreateInput = {
  birthday?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["Float"]["input"]>;
  rounds?: InputMaybe<Array<InputMaybe<RoundHasManyInput>>>;
};

export type NestedPlayerDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedPlayerSetBestNumberInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedPlayerUpdateInput = {
  birthday?: InputMaybe<Scalars["DateTime"]["input"]>;
  id: Scalars["GadgetID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["Float"]["input"]>;
  rounds?: InputMaybe<Array<InputMaybe<RoundHasManyInput>>>;
};

export type NestedRegistrationCreateInput = {
  course?: InputMaybe<CourseBelongsToInput>;
  student?: InputMaybe<StudentBelongsToInput>;
};

export type NestedRegistrationDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedRegistrationUpdateInput = {
  course?: InputMaybe<CourseBelongsToInput>;
  id: Scalars["GadgetID"]["input"];
  student?: InputMaybe<StudentBelongsToInput>;
};

export type NestedRoundCreateInput = {
  number?: InputMaybe<Scalars["Float"]["input"]>;
  player?: InputMaybe<PlayerBelongsToInput>;
};

export type NestedRoundDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedRoundUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  number?: InputMaybe<Scalars["Float"]["input"]>;
  player?: InputMaybe<PlayerBelongsToInput>;
};

export type NestedSectionCreateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type NestedSectionDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedSectionUpdateInput = {
  id: Scalars["GadgetID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type NestedSprocketCreateInput = {
  gizmo?: InputMaybe<GizmoBelongsToInput>;
  ratio?: InputMaybe<Scalars["Float"]["input"]>;
};

export type NestedSprocketDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedSprocketUpdateInput = {
  gizmo?: InputMaybe<GizmoBelongsToInput>;
  id: Scalars["GadgetID"]["input"];
  ratio?: InputMaybe<Scalars["Float"]["input"]>;
};

export type NestedStudentCreateInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyThroughInput>>>;
  followeeFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followees?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  followerFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followers?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  friendship?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  friendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
};

export type NestedStudentDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedStudentUpdateInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyThroughInput>>>;
  followeeFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followees?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  followerFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followers?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  friendship?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  friendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  id: Scalars["GadgetID"]["input"];
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
};

export type NestedTeacherCreateInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyInput>>>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedTeacherDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedTeacherUpdateInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyInput>>>;
  id: Scalars["GadgetID"]["input"];
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedWidgetAddInventoryIfOutOfStockInput = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["GadgetID"]["input"];
};

export type NestedWidgetAddInventoryInput = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  cost?: InputMaybe<Scalars["CADCurrencyAmount"]["input"]>;
  customName?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  id: Scalars["GadgetID"]["input"];
  images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
  inStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<NestedAddInventoryLocationInput>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phase?: InputMaybe<Scalars["WidgetPhaseEnum"]["input"]>;
  /** An array of Floats */
  relatedWidgets?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["WidgetStateEnum"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedWidgetCreateInput = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  cost?: InputMaybe<Scalars["CADCurrencyAmount"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phase?: InputMaybe<Scalars["WidgetPhaseEnum"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["WidgetStateEnum"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedWidgetDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedWidgetFlipDownInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedWidgetFlipUpInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedWidgetImageCreateInput = {
  altText?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<StoredFileInput>;
  order?: InputMaybe<Scalars["Float"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedWidgetImageDeleteInput = {
  id: Scalars["GadgetID"]["input"];
};

export type NestedWidgetImageUpdateInput = {
  altText?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["GadgetID"]["input"];
  image?: InputMaybe<StoredFileInput>;
  order?: InputMaybe<Scalars["Float"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type NestedWidgetUpdateInput = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  cost?: InputMaybe<Scalars["CADCurrencyAmount"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  id: Scalars["GadgetID"]["input"];
  images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phase?: InputMaybe<Scalars["WidgetPhaseEnum"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["WidgetStateEnum"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input object for updating a numeric field's value in a race-safe way in the internal API */
export type NumericAtomicFieldUpdateInput = {
  /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
  decrement?: InputMaybe<Scalars["Float"]["input"]>;
  /** A number to atomically increment the field value by. Can only be used on numeric fields. */
  increment?: InputMaybe<Scalars["Float"]["input"]>;
};

export type OtherCreateGizmoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type OtherCreateGizmoResult = {
  __typename?: "OtherCreateGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
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

/** Input object supporting setting or updating related model record on a relationship field */
export type PlayerBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  barfAnError?: InputMaybe<NestedPlayerBarfAnErrorInput>;
  create?: InputMaybe<NestedPlayerCreateInput>;
  delete?: InputMaybe<NestedPlayerDeleteInput>;
  setBestNumber?: InputMaybe<NestedPlayerSetBestNumberInput>;
  update?: InputMaybe<NestedPlayerUpdateInput>;
};

export type Query = {
  __typename?: "Query";
  billingAccount?: Maybe<BillingAccount>;
  billingAccounts: BillingAccountConnection;
  cities: CityConnection;
  city?: Maybe<City>;
  course?: Maybe<Course>;
  courses: CourseConnection;
  currentSession?: Maybe<Session>;
  customer?: Maybe<Customer>;
  customers: CustomerConnection;
  ephemeral?: Maybe<Ephemeral>;
  ephemerals: EphemeralConnection;
  fieldless?: Maybe<Fieldless>;
  fieldlesses: FieldlessConnection;
  friendship?: Maybe<Friendship>;
  friendships: FriendshipConnection;
  /** Meta information about the application, like it's name, schema, and other internal details. */
  gadgetMeta: GadgetApplicationMeta;
  game: GameQueries;
  gizmo?: Maybe<Gizmo>;
  gizmos: GizmoConnection;
  internal: InternalQueries;
  landmark: LandmarkQueries;
  registration?: Maybe<Registration>;
  registrations: RegistrationConnection;
  sampleModelToTestReallyLongModelNames?: Maybe<SampleModelToTestReallyLongModelNames>;
  sampleModelToTestReallyLongModelNamess: SampleModelToTestReallyLongModelNamesConnection;
  section?: Maybe<Section>;
  sections: SectionConnection;
  session?: Maybe<Session>;
  sessions: SessionConnection;
  sprocket?: Maybe<Sprocket>;
  sprockets: SprocketConnection;
  student?: Maybe<Student>;
  students: StudentConnection;
  teacher?: Maybe<Teacher>;
  teachers: TeacherConnection;
  /** Computed view from api/views/totalInStock.gelly */
  totalInStock?: Maybe<TotalInStock>;
  user?: Maybe<User>;
  users: UserConnection;
  widget?: Maybe<Widget>;
  widgetImage?: Maybe<WidgetImage>;
  widgetImages: WidgetImageConnection;
  widgets: WidgetConnection;
};

export type QueryBillingAccountArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryBillingAccountsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<BillingAccountFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<BillingAccountSort>>;
};

export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<CityFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<CitySort>>;
};

export type QueryCityArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryCourseArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryCoursesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<CourseFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<CourseSort>>;
};

export type QueryCustomerArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<CustomerFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<CustomerSort>>;
};

export type QueryEphemeralArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryEphemeralsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<EphemeralFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFieldlessArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryFieldlessesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<FieldlessFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<FieldlessSort>>;
};

export type QueryFriendshipArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryFriendshipsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<FriendshipFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<FriendshipSort>>;
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

export type QueryRegistrationArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryRegistrationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<RegistrationFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<RegistrationSort>>;
};

export type QuerySampleModelToTestReallyLongModelNamesArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QuerySampleModelToTestReallyLongModelNamessArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<SampleModelToTestReallyLongModelNamesFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<SampleModelToTestReallyLongModelNamesSort>>;
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

export type QuerySprocketArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QuerySprocketsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<SprocketFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<SprocketSort>>;
};

export type QueryStudentArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryStudentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<StudentFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<StudentSort>>;
};

export type QueryTeacherArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryTeachersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<TeacherFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<TeacherSort>>;
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

export type QueryWidgetImageArgs = {
  id: Scalars["GadgetID"]["input"];
};

export type QueryWidgetImagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<WidgetImageFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<WidgetImageSort>>;
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

export type Registration = {
  __typename?: "Registration";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  course: Course;
  courseId: Scalars["GadgetID"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  student: Student;
  studentId: Scalars["GadgetID"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of Registration items. */
export type RegistrationConnection = {
  __typename?: "RegistrationConnection";
  /** A list of edges. */
  edges: Array<RegistrationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Registration connection. */
export type RegistrationEdge = {
  __typename?: "RegistrationEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Registration;
};

export type RegistrationFilter = {
  AND?: InputMaybe<Array<InputMaybe<RegistrationFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<RegistrationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RegistrationFilter>>>;
  course?: InputMaybe<IdFilter>;
  courseId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  student?: InputMaybe<IdFilter>;
  studentId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type RegistrationHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeRegistrationInput>;
  create?: InputMaybe<NestedRegistrationCreateInput>;
  delete?: InputMaybe<NestedRegistrationDeleteInput>;
  update?: InputMaybe<NestedRegistrationUpdateInput>;
};

export type RegistrationSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type ResetPasswordUserResult = {
  __typename?: "ResetPasswordUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
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
export type RoundHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeRoundInput>;
  create?: InputMaybe<NestedRoundCreateInput>;
  delete?: InputMaybe<NestedRoundDeleteInput>;
  update?: InputMaybe<NestedRoundUpdateInput>;
};

export type SampleModelToTestReallyLongModelNames = {
  __typename?: "SampleModelToTestReallyLongModelNames";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars["RecordState"]["output"];
  title: Scalars["String"]["output"];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of SampleModelToTestReallyLongModelNames items. */
export type SampleModelToTestReallyLongModelNamesConnection = {
  __typename?: "SampleModelToTestReallyLongModelNamesConnection";
  /** A list of edges. */
  edges: Array<SampleModelToTestReallyLongModelNamesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a SampleModelToTestReallyLongModelNames connection. */
export type SampleModelToTestReallyLongModelNamesEdge = {
  __typename?: "SampleModelToTestReallyLongModelNamesEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: SampleModelToTestReallyLongModelNames;
};

export type SampleModelToTestReallyLongModelNamesFilter = {
  AND?: InputMaybe<Array<InputMaybe<SampleModelToTestReallyLongModelNamesFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<SampleModelToTestReallyLongModelNamesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SampleModelToTestReallyLongModelNamesFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  state?: InputMaybe<StateFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SampleModelToTestReallyLongModelNamesSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: InputMaybe<SortOrder>;
  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type Section = {
  __typename?: "Section";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  title: Scalars["String"]["output"];
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
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SectionSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type SendResetPasswordUserResult = {
  __typename?: "SendResetPasswordUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type SendVerifyEmailUserResult = {
  __typename?: "SendVerifyEmailUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type Session = {
  __typename?: "Session";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: Maybe<Scalars["GadgetID"]["output"]>;
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
  user?: InputMaybe<IdEqualsFilter>;
  userId?: InputMaybe<IdEqualsFilter>;
};

export type SetBestNumberGamePlayerResult = {
  __typename?: "SetBestNumberGamePlayerResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  player?: Maybe<GamePlayer>;
  success: Scalars["Boolean"]["output"];
};

export type SignInUserResult = {
  __typename?: "SignInUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<User>;
};

export type SignOutUserResult = {
  __typename?: "SignOutUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<User>;
};

export type SignUpUserResult = UpsertUserResult & {
  __typename?: "SignUpUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
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

export type Sprocket = {
  __typename?: "Sprocket";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  gizmo?: Maybe<Gizmo>;
  gizmoId?: Maybe<Scalars["GadgetID"]["output"]>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  ratio?: Maybe<Scalars["Float"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** A connection to a list of Sprocket items. */
export type SprocketConnection = {
  __typename?: "SprocketConnection";
  /** A list of edges. */
  edges: Array<SprocketEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Sprocket connection. */
export type SprocketEdge = {
  __typename?: "SprocketEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Sprocket;
};

export type SprocketFilter = {
  AND?: InputMaybe<Array<InputMaybe<SprocketFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<SprocketFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SprocketFilter>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  gizmo?: InputMaybe<IdFilter>;
  gizmoId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  ratio?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type SprocketHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeSprocketInput>;
  create?: InputMaybe<NestedSprocketCreateInput>;
  delete?: InputMaybe<NestedSprocketDeleteInput>;
  update?: InputMaybe<NestedSprocketUpdateInput>;
};

export type SprocketSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the ratio field. Defaults to ascending (smallest value first). */
  ratio?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
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

export type StraightenGizmoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type StraightenGizmoResult = {
  __typename?: "StraightenGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
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

export type Student = {
  __typename?: "Student";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  born?: Maybe<Scalars["Date"]["output"]>;
  city?: Maybe<City>;
  cityId?: Maybe<Scalars["GadgetID"]["output"]>;
  courses: CourseConnection;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  followeeFriendships: FriendshipConnection;
  followees: StudentConnection;
  followerFriendships: FriendshipConnection;
  followers: StudentConnection;
  friendships: FriendshipConnection;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  male?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  registrations: RegistrationConnection;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type StudentCoursesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StudentFolloweeFriendshipsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<FriendshipFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<FriendshipSort>>;
};

export type StudentFolloweesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StudentFollowerFriendshipsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<FriendshipFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<FriendshipSort>>;
};

export type StudentFollowersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StudentFriendshipsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StudentRegistrationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type StudentBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedStudentCreateInput>;
  delete?: InputMaybe<NestedStudentDeleteInput>;
  update?: InputMaybe<NestedStudentUpdateInput>;
};

/** A connection to a list of Student items. */
export type StudentConnection = {
  __typename?: "StudentConnection";
  /** A list of edges. */
  edges: Array<StudentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Student connection. */
export type StudentEdge = {
  __typename?: "StudentEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Student;
};

export type StudentFilter = {
  AND?: InputMaybe<Array<InputMaybe<StudentFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<StudentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StudentFilter>>>;
  born?: InputMaybe<DateFilter>;
  city?: InputMaybe<IdFilter>;
  cityId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  male?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type StudentHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeStudentInput>;
  create?: InputMaybe<NestedStudentCreateInput>;
  delete?: InputMaybe<NestedStudentDeleteInput>;
  update?: InputMaybe<NestedStudentUpdateInput>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type StudentHasManyThroughInput = {
  create?: InputMaybe<NestedStudentCreateInput>;
  delete?: InputMaybe<NestedStudentDeleteInput>;
  update?: InputMaybe<NestedStudentUpdateInput>;
};

export type StudentSort = {
  /** Sort the results by the born field. Defaults to ascending (smallest value first). */
  born?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the male field. Defaults to ascending (smallest value first). */
  male?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type Subscription = {
  __typename?: "Subscription";
  backgroundAction?: Maybe<BackgroundAction>;
};

export type SubscriptionBackgroundActionArgs = {
  id: Scalars["String"]["input"];
};

export type Teacher = {
  __typename?: "Teacher";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  born?: Maybe<Scalars["Date"]["output"]>;
  city?: Maybe<City>;
  cityId?: Maybe<Scalars["GadgetID"]["output"]>;
  courses: CourseConnection;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  male?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type TeacherCoursesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<CourseFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<CourseSort>>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type TeacherBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  create?: InputMaybe<NestedTeacherCreateInput>;
  delete?: InputMaybe<NestedTeacherDeleteInput>;
  update?: InputMaybe<NestedTeacherUpdateInput>;
};

/** A connection to a list of Teacher items. */
export type TeacherConnection = {
  __typename?: "TeacherConnection";
  /** A list of edges. */
  edges: Array<TeacherEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a Teacher connection. */
export type TeacherEdge = {
  __typename?: "TeacherEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Teacher;
};

export type TeacherFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeacherFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<TeacherFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeacherFilter>>>;
  born?: InputMaybe<DateFilter>;
  city?: InputMaybe<IdFilter>;
  cityId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  male?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type TeacherHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeTeacherInput>;
  create?: InputMaybe<NestedTeacherCreateInput>;
  delete?: InputMaybe<NestedTeacherDeleteInput>;
  update?: InputMaybe<NestedTeacherUpdateInput>;
};

export type TeacherSort = {
  /** Sort the results by the born field. Defaults to ascending (smallest value first). */
  born?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the male field. Defaults to ascending (smallest value first). */
  male?: InputMaybe<SortOrder>;
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
};

export type TotalInStock = {
  __typename?: "TotalInStock";
  totalInStock?: Maybe<Scalars["Int"]["output"]>;
};

export type UnfoldGizmoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type UnfoldGizmoResult = {
  __typename?: "UnfoldGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type UntriggerableGizmoResult = {
  __typename?: "UntriggerableGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type UntriggerableGlobalActionResult = {
  __typename?: "UntriggerableGlobalActionResult";
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateBillingAccountInput = {
  balance?: InputMaybe<Scalars["Float"]["input"]>;
  customer?: InputMaybe<CustomerBelongsToInput>;
};

export type UpdateBillingAccountResult = UpsertBillingAccountResult & {
  __typename?: "UpdateBillingAccountResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  billingAccount?: Maybe<BillingAccount>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateCityInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyInput>>>;
  teachers?: InputMaybe<Array<InputMaybe<TeacherHasManyInput>>>;
};

export type UpdateCityResult = UpsertCityResult & {
  __typename?: "UpdateCityResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<City>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateCourseInput = {
  offered?: InputMaybe<Scalars["Boolean"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  teacher?: InputMaybe<TeacherBelongsToInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateCourseResult = UpsertCourseResult & {
  __typename?: "UpdateCourseResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  course?: Maybe<Course>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateCustomerInput = {
  billingAccount?: InputMaybe<BillingAccountHasOneInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateCustomerResult = UpsertCustomerResult & {
  __typename?: "UpdateCustomerResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  customer?: Maybe<Customer>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateEphemeralInput = {
  data?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateEphemeralResult = UpsertEphemeralResult & {
  __typename?: "UpdateEphemeralResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  ephemeral?: Maybe<Ephemeral>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateFieldlessResult = UpsertFieldlessResult & {
  __typename?: "UpdateFieldlessResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  fieldless?: Maybe<Fieldless>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateFriendshipInput = {
  ended?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  followee?: InputMaybe<StudentBelongsToInput>;
  follower?: InputMaybe<StudentBelongsToInput>;
  started?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
};

export type UpdateFriendshipResult = UpsertFriendshipResult & {
  __typename?: "UpdateFriendshipResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  friendship?: Maybe<Friendship>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateGamePlayerInput = {
  birthday?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["Float"]["input"]>;
  rounds?: InputMaybe<Array<InputMaybe<RoundHasManyInput>>>;
};

export type UpdateGamePlayerResult = UpsertGamePlayerResult & {
  __typename?: "UpdateGamePlayerResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  player?: Maybe<GamePlayer>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateGameRoundInput = {
  number?: InputMaybe<Scalars["Float"]["input"]>;
  player?: InputMaybe<PlayerBelongsToInput>;
};

export type UpdateGameRoundResult = UpsertGameRoundResult & {
  __typename?: "UpdateGameRoundResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  round?: Maybe<GameRound>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateGameStadiumInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
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
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type UpdateGizmoResult = UpsertGizmoResult & {
  __typename?: "UpdateGizmoResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  gizmo?: Maybe<Gizmo>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateLandmarkStadiumInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateLandmarkStadiumResult = UpsertLandmarkStadiumResult & {
  __typename?: "UpdateLandmarkStadiumResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  stadium?: Maybe<LandmarkStadium>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateRegistrationInput = {
  course?: InputMaybe<CourseBelongsToInput>;
  student?: InputMaybe<StudentBelongsToInput>;
};

export type UpdateRegistrationResult = UpsertRegistrationResult & {
  __typename?: "UpdateRegistrationResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  registration?: Maybe<Registration>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateSampleModelToTestReallyLongModelNamesInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateSampleModelToTestReallyLongModelNamesResult = UpsertSampleModelToTestReallyLongModelNamesResult & {
  __typename?: "UpdateSampleModelToTestReallyLongModelNamesResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  sampleModelToTestReallyLongModelNames?: Maybe<SampleModelToTestReallyLongModelNames>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateSectionInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type UpdateSectionResult = UpsertSectionResult & {
  __typename?: "UpdateSectionResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  section?: Maybe<Section>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateSprocketInput = {
  gizmo?: InputMaybe<GizmoBelongsToInput>;
  ratio?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UpdateSprocketResult = UpsertSprocketResult & {
  __typename?: "UpdateSprocketResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  sprocket?: Maybe<Sprocket>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateStudentInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyThroughInput>>>;
  followeeFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followees?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  followerFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followers?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  friendship?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  friendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
};

export type UpdateStudentResult = UpsertStudentResult & {
  __typename?: "UpdateStudentResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  student?: Maybe<Student>;
  success: Scalars["Boolean"]["output"];
};

export type UpdateTeacherInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyInput>>>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateTeacherResult = UpsertTeacherResult & {
  __typename?: "UpdateTeacherResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  teacher?: Maybe<Teacher>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerificationToken?: InputMaybe<Scalars["String"]["input"]>;
  emailVerificationTokenExpiration?: InputMaybe<Scalars["DateTime"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  googleImageUrl?: InputMaybe<Scalars["String"]["input"]>;
  googleProfileId?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastSignedIn?: InputMaybe<Scalars["DateTime"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
  resetPasswordTokenExpiration?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UpdateUserResult = UpsertUserResult & {
  __typename?: "UpdateUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  user?: Maybe<User>;
};

export type UpdateWidgetImageInput = {
  altText?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<StoredFileInput>;
  order?: InputMaybe<Scalars["Float"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type UpdateWidgetImageResult = UpsertWidgetImageResult & {
  __typename?: "UpdateWidgetImageResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widgetImage?: Maybe<WidgetImage>;
};

export type UpdateWidgetInput = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  cost?: InputMaybe<Scalars["CADCurrencyAmount"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phase?: InputMaybe<Scalars["WidgetPhaseEnum"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["WidgetStateEnum"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateWidgetResult = UpsertWidgetResult & {
  __typename?: "UpdateWidgetResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
  widget?: Maybe<Widget>;
};

export type UpsertBillingAccountInput = {
  balance?: InputMaybe<Scalars["Float"]["input"]>;
  customer?: InputMaybe<CustomerBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

export type UpsertBillingAccountResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertCityInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyInput>>>;
  teachers?: InputMaybe<Array<InputMaybe<TeacherHasManyInput>>>;
};

export type UpsertCityResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertCourseInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  offered?: InputMaybe<Scalars["Boolean"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  students?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  teacher?: InputMaybe<TeacherBelongsToInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpsertCourseResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertCustomerInput = {
  billingAccount?: InputMaybe<BillingAccountHasOneInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

export type UpsertCustomerResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertEphemeralInput = {
  data?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

export type UpsertEphemeralResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertError = UpsertBillingAccountResult &
  UpsertCityResult &
  UpsertCourseResult &
  UpsertCustomerResult &
  UpsertEphemeralResult &
  UpsertFieldlessResult &
  UpsertFriendshipResult &
  UpsertGamePlayerResult &
  UpsertGameRoundResult &
  UpsertGameStadiumResult &
  UpsertGizmoResult &
  UpsertLandmarkStadiumResult &
  UpsertRegistrationResult &
  UpsertSampleModelToTestReallyLongModelNamesResult &
  UpsertSectionResult &
  UpsertSprocketResult &
  UpsertStudentResult &
  UpsertTeacherResult &
  UpsertUserResult &
  UpsertWidgetImageResult &
  UpsertWidgetResult & {
    __typename?: "UpsertError";
    actionRun?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
  };

export type UpsertFieldlessInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
};

export type UpsertFieldlessResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertFriendshipInput = {
  ended?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  followee?: InputMaybe<StudentBelongsToInput>;
  follower?: InputMaybe<StudentBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  started?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
};

export type UpsertFriendshipResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertGamePlayerInput = {
  birthday?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["Float"]["input"]>;
  rounds?: InputMaybe<Array<InputMaybe<RoundHasManyInput>>>;
};

export type UpsertGamePlayerResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertGameRoundInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  number?: InputMaybe<Scalars["Float"]["input"]>;
  player?: InputMaybe<PlayerBelongsToInput>;
};

export type UpsertGameRoundResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertGameStadiumInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpsertGameStadiumResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertGizmoInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
  state?: InputMaybe<Scalars["GizmoStateEnum"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type UpsertGizmoResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertLandmarkStadiumInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpsertLandmarkStadiumResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertRegistrationInput = {
  course?: InputMaybe<CourseBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  student?: InputMaybe<StudentBelongsToInput>;
};

export type UpsertRegistrationResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertSampleModelToTestReallyLongModelNamesInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpsertSampleModelToTestReallyLongModelNamesResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertSectionInput = {
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};

export type UpsertSectionResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertSprocketInput = {
  gizmo?: InputMaybe<GizmoBelongsToInput>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  ratio?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UpsertSprocketResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertStudentInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyThroughInput>>>;
  followeeFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followees?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  followerFriendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  followers?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
  friendship?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  friendships?: InputMaybe<Array<InputMaybe<FriendshipHasManyInput>>>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
  registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
};

export type UpsertStudentResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertTeacherInput = {
  born?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  city?: InputMaybe<CityBelongsToInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseHasManyInput>>>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  male?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpsertTeacherResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertUser = UpsertUserReturnType | User;

export type UpsertUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerificationToken?: InputMaybe<Scalars["String"]["input"]>;
  emailVerificationTokenExpiration?: InputMaybe<Scalars["DateTime"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  googleImageUrl?: InputMaybe<Scalars["String"]["input"]>;
  googleProfileId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastSignedIn?: InputMaybe<Scalars["DateTime"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
  resetPasswordTokenExpiration?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type UpsertUserResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertUserReturnType = {
  __typename?: "UpsertUserReturnType";
  result?: Maybe<Scalars["JSON"]["output"]>;
};

export type UpsertWidgetImageInput = {
  altText?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  image?: InputMaybe<StoredFileInput>;
  order?: InputMaybe<Scalars["Float"]["input"]>;
  widget?: InputMaybe<WidgetBelongsToInput>;
};

export type UpsertWidgetImageResult = {
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  success: Scalars["Boolean"]["output"];
};

export type UpsertWidgetInput = {
  anything?: InputMaybe<Scalars["JSON"]["input"]>;
  birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
  category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  cost?: InputMaybe<Scalars["CADCurrencyAmount"]["input"]>;
  description?: InputMaybe<RichTextInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
  id?: InputMaybe<Scalars["GadgetID"]["input"]>;
  images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
  inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
  isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
  metafields?: InputMaybe<Scalars["JSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phase?: InputMaybe<Scalars["WidgetPhaseEnum"]["input"]>;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  secretKey?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<SectionBelongsToInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<Scalars["WidgetStateEnum"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
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
  emailVerificationToken?: Maybe<Scalars["String"]["output"]>;
  emailVerificationTokenExpiration?: Maybe<Scalars["DateTime"]["output"]>;
  emailVerified?: Maybe<Scalars["Boolean"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  googleImageUrl?: Maybe<Scalars["String"]["output"]>;
  googleProfileId?: Maybe<Scalars["String"]["output"]>;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  lastSignedIn?: Maybe<Scalars["DateTime"]["output"]>;
  resetPasswordToken?: Maybe<Scalars["String"]["output"]>;
  resetPasswordTokenExpiration?: Maybe<Scalars["DateTime"]["output"]>;
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
  emailVerificationToken?: InputMaybe<StringFilter>;
  emailVerificationTokenExpiration?: InputMaybe<DateTimeFilter>;
  emailVerified?: InputMaybe<BooleanFilter>;
  firstName?: InputMaybe<StringFilter>;
  googleImageUrl?: InputMaybe<StringFilter>;
  googleProfileId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  lastSignedIn?: InputMaybe<DateTimeFilter>;
  resetPasswordToken?: InputMaybe<StringFilter>;
  resetPasswordTokenExpiration?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserSort = {
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: InputMaybe<SortOrder>;
  /** Sort the results by the emailVerificationToken field. Defaults to ascending (smallest value first). */
  emailVerificationToken?: InputMaybe<SortOrder>;
  /** Sort the results by the emailVerificationTokenExpiration field. Defaults to ascending (smallest value first). */
  emailVerificationTokenExpiration?: InputMaybe<SortOrder>;
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
  /** Sort the results by the resetPasswordToken field. Defaults to ascending (smallest value first). */
  resetPasswordToken?: InputMaybe<SortOrder>;
  /** Sort the results by the resetPasswordTokenExpiration field. Defaults to ascending (smallest value first). */
  resetPasswordTokenExpiration?: InputMaybe<SortOrder>;
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

export type VerifyEmailUserResult = {
  __typename?: "VerifyEmailUserResult";
  actionRun?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<ExecutionError>>;
  result?: Maybe<Scalars["JSON"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type Widget = {
  __typename?: "Widget";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  anything?: Maybe<Scalars["JSON"]["output"]>;
  birthday?: Maybe<Scalars["Date"]["output"]>;
  category?: Maybe<Array<Scalars["WidgetCategoryEnum"]["output"]>>;
  color?: Maybe<Scalars["String"]["output"]>;
  cost?: Maybe<Money>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<RichText>;
  email?: Maybe<Scalars["String"]["output"]>;
  embedding?: Maybe<Array<Scalars["Float"]["output"]>>;
  embeddingCosineSimilarityTo?: Maybe<Scalars["Float"]["output"]>;
  embeddingL2DistanceTo?: Maybe<Scalars["Float"]["output"]>;
  gizmos: GizmoConnection;
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  images: WidgetImageConnection;
  inStock?: Maybe<Scalars["JSON"]["output"]>;
  inventoryCount: Scalars["Float"]["output"];
  isChecked?: Maybe<Scalars["Boolean"]["output"]>;
  metafields?: Maybe<Scalars["JSON"]["output"]>;
  name: Scalars["String"]["output"];
  phase?: Maybe<Scalars["WidgetPhaseEnum"]["output"]>;
  roles?: Maybe<Array<Role>>;
  secretKey?: Maybe<Scalars["String"]["output"]>;
  section?: Maybe<Section>;
  sectionId?: Maybe<Scalars["GadgetID"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  startsAt?: Maybe<Scalars["DateTime"]["output"]>;
  state?: Maybe<Scalars["WidgetStateEnum"]["output"]>;
  tagline?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  url?: Maybe<Scalars["String"]["output"]>;
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

export type WidgetImagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Array<WidgetImageFilter>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<WidgetImageSort>>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type WidgetBelongsToInput = {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
  addInventory?: InputMaybe<NestedWidgetAddInventoryInput>;
  addInventoryIfOutOfStock?: InputMaybe<NestedWidgetAddInventoryIfOutOfStockInput>;
  create?: InputMaybe<NestedWidgetCreateInput>;
  delete?: InputMaybe<NestedWidgetDeleteInput>;
  flipDown?: InputMaybe<NestedWidgetFlipDownInput>;
  flipUp?: InputMaybe<NestedWidgetFlipUpInput>;
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
  cost?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  embedding?: InputMaybe<VectorFilter>;
  id?: InputMaybe<IdFilter>;
  inStock?: InputMaybe<BooleanFilter>;
  inventoryCount?: InputMaybe<FloatFilter>;
  isChecked?: InputMaybe<BooleanFilter>;
  metafields?: InputMaybe<JsonFilter>;
  name?: InputMaybe<StringFilter>;
  phase?: InputMaybe<SingleEnumFilter>;
  section?: InputMaybe<IdFilter>;
  sectionId?: InputMaybe<IdFilter>;
  slug?: InputMaybe<StringFilter>;
  startsAt?: InputMaybe<DateTimeFilter>;
  state?: InputMaybe<SingleEnumFilter>;
  tagline?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type WidgetHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeWidgetInput>;
  addInventory?: InputMaybe<NestedWidgetAddInventoryInput>;
  addInventoryIfOutOfStock?: InputMaybe<NestedWidgetAddInventoryIfOutOfStockInput>;
  create?: InputMaybe<NestedWidgetCreateInput>;
  delete?: InputMaybe<NestedWidgetDeleteInput>;
  flipDown?: InputMaybe<NestedWidgetFlipDownInput>;
  flipUp?: InputMaybe<NestedWidgetFlipUpInput>;
  update?: InputMaybe<NestedWidgetUpdateInput>;
};

export type WidgetImage = {
  __typename?: "WidgetImage";
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars["JSONObject"]["output"];
  altText?: Maybe<Scalars["String"]["output"]>;
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars["DateTime"]["output"];
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars["GadgetID"]["output"];
  image?: Maybe<StoredFile>;
  order?: Maybe<Scalars["Float"]["output"]>;
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars["DateTime"]["output"];
  widget: Widget;
  widgetId: Scalars["GadgetID"]["output"];
};

/** A connection to a list of WidgetImage items. */
export type WidgetImageConnection = {
  __typename?: "WidgetImageConnection";
  /** A list of edges. */
  edges: Array<WidgetImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a WidgetImage connection. */
export type WidgetImageEdge = {
  __typename?: "WidgetImageEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: WidgetImage;
};

export type WidgetImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<WidgetImageFilter>>>;
  NOT?: InputMaybe<Array<InputMaybe<WidgetImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WidgetImageFilter>>>;
  altText?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  widget?: InputMaybe<IdFilter>;
  widgetId?: InputMaybe<IdFilter>;
};

/** Input object supporting setting or updating related model record on a relationship field */
export type WidgetImageHasManyInput = {
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: InputMaybe<ConvergeWidgetImageInput>;
  create?: InputMaybe<NestedWidgetImageCreateInput>;
  delete?: InputMaybe<NestedWidgetImageDeleteInput>;
  update?: InputMaybe<NestedWidgetImageUpdateInput>;
};

export type WidgetImageSort = {
  /** Sort the results by the altText field. Defaults to ascending (smallest value first). */
  altText?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: InputMaybe<SortOrder>;
  /** Sort the results by the order field. Defaults to ascending (smallest value first). */
  order?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
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
  /** Sort the results by the cost field. Defaults to ascending (smallest value first). */
  cost?: InputMaybe<SortOrder>;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: InputMaybe<SortOrder>;
  /** Sort the results by the description field. Defaults to ascending (smallest value first). */
  description?: InputMaybe<SortOrder>;
  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: InputMaybe<SortOrder>;
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
  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: InputMaybe<SortOrder>;
  /** Sort the results by the phase field. Defaults to ascending (smallest value first). */
  phase?: InputMaybe<SortOrder>;
  /** Sort the results by the slug field. Defaults to ascending (smallest value first). */
  slug?: InputMaybe<SortOrder>;
  /** Sort the results by the startsAt field. Defaults to ascending (smallest value first). */
  startsAt?: InputMaybe<SortOrder>;
  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: InputMaybe<SortOrder>;
  /** Sort the results by the tagline field. Defaults to ascending (smallest value first). */
  tagline?: InputMaybe<SortOrder>;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: InputMaybe<SortOrder>;
  /** Sort the results by the url field. Defaults to ascending (smallest value first). */
  url?: InputMaybe<SortOrder>;
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
        relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
          name: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
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
        relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        joinModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
        relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
        relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
          name: string;
          apiIdentifier: string;
          namespace?: Array<string> | null;
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
        relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
        joinModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
        relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
    modelAndRelatedModels: Array<{
      __typename?: "GadgetModel";
      key: string;
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
              relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                name: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
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
              relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              joinModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
              relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
      defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
    }>;
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
                relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                  name: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
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
                relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                joinModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                          name: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
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
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        joinModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
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
                                  name: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
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
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                joinModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
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
                relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                  name: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
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
                relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                joinModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                          name: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
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
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        joinModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
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
                                  name: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
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
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                joinModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
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
    modelAndRelatedModels: Array<{
      __typename?: "GadgetModel";
      key: string;
      name: string;
      apiIdentifier: string;
      defaultRecord: any;
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
              relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                name: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
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
              relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              joinModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
              relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                        name: string;
                        apiIdentifier: string;
                        namespace?: Array<string> | null;
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
                      } | null;
                      inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                      joinModel?: {
                        __typename?: "GadgetModel";
                        key: string;
                        apiIdentifier: string;
                        namespace?: Array<string> | null;
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
                                name: string;
                                apiIdentifier: string;
                                namespace?: Array<string> | null;
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
                              } | null;
                              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                              joinModel?: {
                                __typename?: "GadgetModel";
                                key: string;
                                apiIdentifier: string;
                                namespace?: Array<string> | null;
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
                                        name: string;
                                        apiIdentifier: string;
                                        namespace?: Array<string> | null;
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
                                      } | null;
                                      inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                      joinModel?: {
                                        __typename?: "GadgetModel";
                                        key: string;
                                        apiIdentifier: string;
                                        namespace?: Array<string> | null;
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
      defaultDisplayField: { __typename?: "GadgetModelField"; name: string; apiIdentifier: string; fieldType: GadgetFieldType };
    }>;
    model?: {
      __typename?: "GadgetModel";
      key: string;
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
                relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                  name: string;
                  apiIdentifier: string;
                  namespace?: Array<string> | null;
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
                relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                joinModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                          name: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
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
                        } | null;
                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                        joinModel?: {
                          __typename?: "GadgetModel";
                          key: string;
                          apiIdentifier: string;
                          namespace?: Array<string> | null;
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
                                  name: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
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
                                } | null;
                                inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                joinModel?: {
                                  __typename?: "GadgetModel";
                                  key: string;
                                  apiIdentifier: string;
                                  namespace?: Array<string> | null;
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
                                          name: string;
                                          apiIdentifier: string;
                                          namespace?: Array<string> | null;
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
                                        } | null;
                                        inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                        joinModel?: {
                                          __typename?: "GadgetModel";
                                          key: string;
                                          apiIdentifier: string;
                                          namespace?: Array<string> | null;
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
              relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                name: string;
                apiIdentifier: string;
                namespace?: Array<string> | null;
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
              relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
              joinModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
              relatedModel?: { __typename?: "GadgetModel"; key: string; apiIdentifier: string; namespace?: Array<string> | null } | null;
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
                        name: string;
                        apiIdentifier: string;
                        namespace?: Array<string> | null;
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
                      } | null;
                      inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                      joinModel?: {
                        __typename?: "GadgetModel";
                        key: string;
                        apiIdentifier: string;
                        namespace?: Array<string> | null;
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
                                name: string;
                                apiIdentifier: string;
                                namespace?: Array<string> | null;
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
                              } | null;
                              inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                              joinModel?: {
                                __typename?: "GadgetModel";
                                key: string;
                                apiIdentifier: string;
                                namespace?: Array<string> | null;
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
                                        name: string;
                                        apiIdentifier: string;
                                        namespace?: Array<string> | null;
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
                                      } | null;
                                      inverseField?: { __typename?: "GadgetModelField"; apiIdentifier: string } | null;
                                      joinModel?: {
                                        __typename?: "GadgetModel";
                                        key: string;
                                        apiIdentifier: string;
                                        namespace?: Array<string> | null;
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
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
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
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
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
                  name: { kind: "Name", value: "modelAndRelatedModels" },
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
                      { kind: "Field", name: { kind: "Name", value: "key" } },
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
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
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
                  name: { kind: "Name", value: "modelAndRelatedModels" },
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
                      { kind: "Field", name: { kind: "Name", value: "key" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                      { kind: "Field", name: { kind: "Name", value: "defaultRecord" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fields" },
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
                      { kind: "Field", name: { kind: "Name", value: "key" } },
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
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
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
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                            { kind: "Field", name: { kind: "Name", value: "namespace" } },
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
