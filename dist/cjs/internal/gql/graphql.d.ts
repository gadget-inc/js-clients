import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    /** Represents an amount of money in CAD */
    CADCurrencyAmount: {
        input: any;
        output: any;
    };
    /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: {
        input: any;
        output: any;
    };
    /** A date-time or full-date string at UTC, such as 2007-12-03 or 2007-12-03T10:15:30Z, compliant with the `full-date` or `date-time` formats outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. If a full date-time is passed, timezone will be ignored and it will be truncated to just the date part. */
    DateOrDateTime: {
        input: any;
        output: any;
    };
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: {
        input: any;
        output: any;
    };
    /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
    EmailAddress: {
        input: any;
        output: any;
    };
    /** The ID of a record in Gadget */
    GadgetID: {
        input: any;
        output: any;
    };
    /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
    HydrationPlan: {
        input: any;
        output: any;
    };
    /** Represents one billingAccount result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalBillingAccountRecord: {
        input: any;
        output: any;
    };
    /** Represents internal money state, which consists of an amount and a currency */
    InternalCADCurrencyAmount: {
        input: any;
        output: any;
    };
    /** Represents one course result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalCourseRecord: {
        input: any;
        output: any;
    };
    /** Represents one customer result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalCustomerRecord: {
        input: any;
        output: any;
    };
    /** Represents one ephemeral result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalEphemeralRecord: {
        input: any;
        output: any;
    };
    /** Represents one friendship result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalFriendshipRecord: {
        input: any;
        output: any;
    };
    /** Represents one gizmo result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalGizmoRecord: {
        input: any;
        output: any;
    };
    /** Represents one registration result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalRegistrationRecord: {
        input: any;
        output: any;
    };
    /** Represents one sampleModelToTestReallyLongModelNames result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalSampleModelToTestReallyLongModelNamesRecord: {
        input: any;
        output: any;
    };
    /** Represents one section result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalSectionRecord: {
        input: any;
        output: any;
    };
    /** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalSessionRecord: {
        input: any;
        output: any;
    };
    /** Represents one sprocket result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalSprocketRecord: {
        input: any;
        output: any;
    };
    /** Represents one student result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalStudentRecord: {
        input: any;
        output: any;
    };
    /** Represents one user result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalUserRecord: {
        input: any;
        output: any;
    };
    /** Represents one widgetImage result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalWidgetImageRecord: {
        input: any;
        output: any;
    };
    /** Represents one widget result record in internal api calls. Returns a JSON blob of all the record's fields. */
    InternalWidgetRecord: {
        input: any;
        output: any;
    };
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: {
        input: any;
        output: any;
    };
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: {
        input: any;
        output: any;
    };
    /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
    RecordState: {
        input: any;
        output: any;
    };
    /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
    URL: {
        input: any;
        output: any;
    };
    /** The `Upload` scalar type represents a file upload. */
    Upload: {
        input: any;
        output: any;
    };
    /** Represents the possible values of the Category enum. */
    WidgetCategoryEnum: {
        input: any;
        output: any;
    };
};
export type AddInventoryIfOutOfStockWidgetResult = {
    __typename?: "AddInventoryIfOutOfStockWidgetResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
    widget?: Maybe<Widget>;
};
export type AddInventoryLocationInput = {
    phone?: InputMaybe<AddInventoryPhoneInput>;
    street?: InputMaybe<Scalars["String"]["input"]>;
    streetNumber?: InputMaybe<Scalars["Float"]["input"]>;
};
export type AddInventoryPhoneInput = {
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
    embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
    images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
    inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
    isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
    metafields?: InputMaybe<Scalars["JSON"]["input"]>;
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
    secretKey?: InputMaybe<Scalars["String"]["input"]>;
    section?: InputMaybe<SectionBelongsToInput>;
    startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    tagline?: InputMaybe<Scalars["String"]["input"]>;
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
export type BarfAnErrorResult = {
    __typename?: "BarfAnErrorResult";
    errors?: Maybe<Array<ExecutionError>>;
    result?: Maybe<Scalars["JSON"]["output"]>;
    success: Scalars["Boolean"]["output"];
};
export type BendGizmoResult = {
    __typename?: "BendGizmoResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmo?: Maybe<Gizmo>;
    success: Scalars["Boolean"]["output"];
};
export type BillingAccount = {
    __typename?: "BillingAccount";
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars["JSONObject"]["output"];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars["DateTime"]["output"];
    customer: Customer;
    customerId: Scalars["GadgetID"]["output"];
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars["GadgetID"]["output"];
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
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
    createdAt?: InputMaybe<DateTimeFilter>;
    customer?: InputMaybe<IdFilter>;
    id?: InputMaybe<IdFilter>;
    state?: InputMaybe<StateFilter>;
    updatedAt?: InputMaybe<DateTimeFilter>;
};
/** Input object supporting setting or updating related model record on a relationship field */
export type BillingAccountHasOneInput = {
    create?: InputMaybe<NestedBillingAccountCreateInput>;
    delete?: InputMaybe<NestedBillingAccountDeleteInput>;
    update?: InputMaybe<NestedBillingAccountUpdateInput>;
};
export type BillingAccountSort = {
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: InputMaybe<SortOrder>;
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: InputMaybe<SortOrder>;
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: InputMaybe<SortOrder>;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: InputMaybe<SortOrder>;
};
export type BooleanFilter = {
    equals?: InputMaybe<Scalars["Boolean"]["input"]>;
    isSet?: InputMaybe<Scalars["Boolean"]["input"]>;
    notEquals?: InputMaybe<Scalars["Boolean"]["input"]>;
};
export type BreakGizmoResult = {
    __typename?: "BreakGizmoResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmo?: Maybe<Gizmo>;
    success: Scalars["Boolean"]["output"];
};
export type BulkBendGizmosResult = {
    __typename?: "BulkBendGizmosResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmos?: Maybe<Array<Maybe<Gizmo>>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkBreakGizmosResult = {
    __typename?: "BulkBreakGizmosResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmos?: Maybe<Array<Maybe<Gizmo>>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteBillingAccountsResult = {
    __typename?: "BulkDeleteBillingAccountsResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteCoursesResult = {
    __typename?: "BulkDeleteCoursesResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteCustomersResult = {
    __typename?: "BulkDeleteCustomersResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteEphemeralsResult = {
    __typename?: "BulkDeleteEphemeralsResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteFriendshipsResult = {
    __typename?: "BulkDeleteFriendshipsResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteGizmosResult = {
    __typename?: "BulkDeleteGizmosResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteRegistrationsResult = {
    __typename?: "BulkDeleteRegistrationsResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteSampleModelToTestReallyLongModelNamesResult = {
    __typename?: "BulkDeleteSampleModelToTestReallyLongModelNamesResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteSectionsResult = {
    __typename?: "BulkDeleteSectionsResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteSprocketsResult = {
    __typename?: "BulkDeleteSprocketsResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteStudentsResult = {
    __typename?: "BulkDeleteStudentsResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteUsersResult = {
    __typename?: "BulkDeleteUsersResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteWidgetImagesResult = {
    __typename?: "BulkDeleteWidgetImagesResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkDeleteWidgetsResult = {
    __typename?: "BulkDeleteWidgetsResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkFlipDownWidgetsResult = {
    __typename?: "BulkFlipDownWidgetsResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
    widgets?: Maybe<Array<Maybe<Widget>>>;
};
export type BulkFlipUpWidgetsResult = {
    __typename?: "BulkFlipUpWidgetsResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
    widgets?: Maybe<Array<Maybe<Widget>>>;
};
export type BulkFoldGizmosResult = {
    __typename?: "BulkFoldGizmosResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmos?: Maybe<Array<Maybe<Gizmo>>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkStraightenGizmosResult = {
    __typename?: "BulkStraightenGizmosResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmos?: Maybe<Array<Maybe<Gizmo>>>;
    success: Scalars["Boolean"]["output"];
};
export type BulkUnfoldGizmosResult = {
    __typename?: "BulkUnfoldGizmosResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmos?: Maybe<Array<Maybe<Gizmo>>>;
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
export type ConvergeSessionInput = {
    /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
    actions?: InputMaybe<ConvergeActionMap>;
    /** The new list of records to converge to */
    values: Array<InputMaybe<ConvergeSessionValues>>;
};
/** One element of a ConvergeSessionInput record converge list */
export type ConvergeSessionValues = {
    dangler?: InputMaybe<Scalars["JSON"]["input"]>;
    id?: InputMaybe<Scalars["GadgetID"]["input"]>;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
    user?: InputMaybe<UserBelongsToInput>;
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
    embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
    id?: InputMaybe<Scalars["GadgetID"]["input"]>;
    images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
    inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
    isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
    metafields?: InputMaybe<Scalars["JSON"]["input"]>;
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
    secretKey?: InputMaybe<Scalars["String"]["input"]>;
    section?: InputMaybe<SectionBelongsToInput>;
    startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    tagline?: InputMaybe<Scalars["String"]["input"]>;
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
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
    students: StudentConnection;
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
    state?: InputMaybe<StateFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateTimeFilter>;
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
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: InputMaybe<SortOrder>;
    /** Sort the results by the title field. Defaults to ascending (smallest value first). */
    title?: InputMaybe<SortOrder>;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: InputMaybe<SortOrder>;
};
export type CreateBillingAccountInput = {
    customer?: InputMaybe<CustomerBelongsToInput>;
};
export type CreateBillingAccountResult = {
    __typename?: "CreateBillingAccountResult";
    billingAccount?: Maybe<BillingAccount>;
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type CreateCourseInput = {
    offered?: InputMaybe<Scalars["Boolean"]["input"]>;
    registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
    registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
    students?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
    title?: InputMaybe<Scalars["String"]["input"]>;
};
export type CreateCourseResult = {
    __typename?: "CreateCourseResult";
    course?: Maybe<Course>;
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type CreateCustomerInput = {
    billingAccount?: InputMaybe<BillingAccountHasOneInput>;
    email?: InputMaybe<Scalars["String"]["input"]>;
};
export type CreateCustomerResult = {
    __typename?: "CreateCustomerResult";
    customer?: Maybe<Customer>;
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type CreateEphemeralInput = {
    data?: InputMaybe<Scalars["String"]["input"]>;
};
export type CreateEphemeralResult = {
    __typename?: "CreateEphemeralResult";
    ephemeral?: Maybe<Ephemeral>;
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type CreateFriendshipInput = {
    followee?: InputMaybe<StudentBelongsToInput>;
    follower?: InputMaybe<StudentBelongsToInput>;
};
export type CreateFriendshipResult = {
    __typename?: "CreateFriendshipResult";
    errors?: Maybe<Array<ExecutionError>>;
    friendship?: Maybe<Friendship>;
    success: Scalars["Boolean"]["output"];
};
export type CreateGizmoInput = {
    name?: InputMaybe<Scalars["String"]["input"]>;
    sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
    widget?: InputMaybe<WidgetBelongsToInput>;
};
export type CreateGizmoResult = {
    __typename?: "CreateGizmoResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmo?: Maybe<Gizmo>;
    success: Scalars["Boolean"]["output"];
};
export type CreateRegistrationInput = {
    course?: InputMaybe<CourseBelongsToInput>;
    student?: InputMaybe<StudentBelongsToInput>;
};
export type CreateRegistrationResult = {
    __typename?: "CreateRegistrationResult";
    errors?: Maybe<Array<ExecutionError>>;
    registration?: Maybe<Registration>;
    success: Scalars["Boolean"]["output"];
};
export type CreateSampleModelToTestReallyLongModelNamesInput = {
    title?: InputMaybe<Scalars["String"]["input"]>;
};
export type CreateSampleModelToTestReallyLongModelNamesResult = {
    __typename?: "CreateSampleModelToTestReallyLongModelNamesResult";
    errors?: Maybe<Array<ExecutionError>>;
    sampleModelToTestReallyLongModelNames?: Maybe<SampleModelToTestReallyLongModelNames>;
    success: Scalars["Boolean"]["output"];
};
export type CreateSectionInput = {
    title?: InputMaybe<Scalars["String"]["input"]>;
    widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};
export type CreateSectionResult = {
    __typename?: "CreateSectionResult";
    errors?: Maybe<Array<ExecutionError>>;
    section?: Maybe<Section>;
    success: Scalars["Boolean"]["output"];
};
export type CreateSprocketInput = {
    gizmo?: InputMaybe<GizmoBelongsToInput>;
    ratio?: InputMaybe<Scalars["Float"]["input"]>;
};
export type CreateSprocketResult = {
    __typename?: "CreateSprocketResult";
    errors?: Maybe<Array<ExecutionError>>;
    sprocket?: Maybe<Sprocket>;
    success: Scalars["Boolean"]["output"];
};
export type CreateStudentInput = {
    courses?: InputMaybe<Array<InputMaybe<CourseHasManyThroughInput>>>;
    fullName?: InputMaybe<Scalars["String"]["input"]>;
    registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
    registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
};
export type CreateStudentResult = {
    __typename?: "CreateStudentResult";
    errors?: Maybe<Array<ExecutionError>>;
    student?: Maybe<Student>;
    success: Scalars["Boolean"]["output"];
};
export type CreateUserInput = {
    email?: InputMaybe<Scalars["String"]["input"]>;
    password?: InputMaybe<Scalars["String"]["input"]>;
    sessions?: InputMaybe<Array<InputMaybe<SessionHasManyInput>>>;
};
export type CreateUserResult = {
    __typename?: "CreateUserResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
    user?: Maybe<User>;
};
export type CreateWidgetImageInput = {
    altText?: InputMaybe<Scalars["String"]["input"]>;
    image?: InputMaybe<StoredFileInput>;
    order?: InputMaybe<Scalars["Float"]["input"]>;
    widget?: InputMaybe<WidgetBelongsToInput>;
};
export type CreateWidgetImageResult = {
    __typename?: "CreateWidgetImageResult";
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
    embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
    images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
    inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
    isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
    metafields?: InputMaybe<Scalars["JSON"]["input"]>;
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
    secretKey?: InputMaybe<Scalars["String"]["input"]>;
    section?: InputMaybe<SectionBelongsToInput>;
    startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    tagline?: InputMaybe<Scalars["String"]["input"]>;
};
export type CreateWidgetResult = {
    __typename?: "CreateWidgetResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
    widget?: Maybe<Widget>;
};
export type CurrentSessionMutations = {
    __typename?: "CurrentSessionMutations";
    logInViaEmail?: Maybe<LogInViaEmailSessionResult>;
    logOut?: Maybe<LogOutSessionResult>;
};
export type CurrentSessionMutationsLogInViaEmailArgs = {
    email?: InputMaybe<Scalars["String"]["input"]>;
    password?: InputMaybe<Scalars["String"]["input"]>;
};
export type Customer = {
    __typename?: "Customer";
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars["JSONObject"]["output"];
    billingAccount?: Maybe<BillingAccount>;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars["DateTime"]["output"];
    email?: Maybe<Scalars["EmailAddress"]["output"]>;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars["GadgetID"]["output"];
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
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
    state?: InputMaybe<StateFilter>;
    updatedAt?: InputMaybe<DateTimeFilter>;
};
export type CustomerSort = {
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: InputMaybe<SortOrder>;
    /** Sort the results by the email field. Defaults to ascending (smallest value first). */
    email?: InputMaybe<SortOrder>;
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: InputMaybe<SortOrder>;
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: InputMaybe<SortOrder>;
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
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteCourseResult = {
    __typename?: "DeleteCourseResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteCustomerResult = {
    __typename?: "DeleteCustomerResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteEphemeralResult = {
    __typename?: "DeleteEphemeralResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteFriendshipResult = {
    __typename?: "DeleteFriendshipResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteGizmoResult = {
    __typename?: "DeleteGizmoResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteRegistrationResult = {
    __typename?: "DeleteRegistrationResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteSampleModelToTestReallyLongModelNamesResult = {
    __typename?: "DeleteSampleModelToTestReallyLongModelNamesResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteSectionResult = {
    __typename?: "DeleteSectionResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteSprocketResult = {
    __typename?: "DeleteSprocketResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteStudentResult = {
    __typename?: "DeleteStudentResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteUserResult = {
    __typename?: "DeleteUserResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type DeleteWidgetImageResult = {
    __typename?: "DeleteWidgetImageResult";
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
export type Ephemeral = {
    __typename?: "Ephemeral";
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars["JSONObject"]["output"];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars["DateTime"]["output"];
    data?: Maybe<Scalars["String"]["output"]>;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars["GadgetID"]["output"];
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
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
export type ExecutionError = {
    /** The Gadget platform error code for this error. */
    code: Scalars["String"]["output"];
    /** The human facing error message for this error. */
    message: Scalars["String"]["output"];
    /** The stack for any exception that caused the error. Only available for super users. */
    stack?: Maybe<Scalars["String"]["output"]>;
};
export type FlipAllWidgetsResult = {
    __typename?: "FlipAllWidgetsResult";
    errors?: Maybe<Array<ExecutionError>>;
    result?: Maybe<Scalars["JSON"]["output"]>;
    success: Scalars["Boolean"]["output"];
};
export type FlipDownWidgetResult = {
    __typename?: "FlipDownWidgetResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
    widget?: Maybe<Widget>;
};
export type FlipUpWidgetResult = {
    __typename?: "FlipUpWidgetResult";
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
export type FoldGizmoResult = {
    __typename?: "FoldGizmoResult";
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
    followee: Student;
    followeeId: Scalars["GadgetID"]["output"];
    follower: Student;
    followerId: Scalars["GadgetID"]["output"];
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars["GadgetID"]["output"];
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
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
    followee?: InputMaybe<IdFilter>;
    follower?: InputMaybe<IdFilter>;
    id?: InputMaybe<IdFilter>;
    state?: InputMaybe<StateFilter>;
    updatedAt?: InputMaybe<DateTimeFilter>;
};
export type FriendshipSort = {
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: InputMaybe<SortOrder>;
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: InputMaybe<SortOrder>;
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: InputMaybe<SortOrder>;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: InputMaybe<SortOrder>;
};
export type GadgetAction = {
    __typename?: "GadgetAction";
    acceptsInput: Scalars["Boolean"]["output"];
    apiIdentifier: Scalars["String"]["output"];
    availableInBulk: Scalars["Boolean"]["output"];
    bulkApiIdentifier?: Maybe<Scalars["String"]["output"]>;
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
    operatesWithRecordIdentity: Scalars["Boolean"]["output"];
    possibleTransitions: Scalars["JSONObject"]["output"];
    requiresInput: Scalars["Boolean"]["output"];
    triggers?: Maybe<Array<GadgetTrigger>>;
};
export type GadgetActionGraphQlType = {
    __typename?: "GadgetActionGraphQLType";
    bulkOutputGraphQLTypeSDL?: Maybe<Scalars["String"]["output"]>;
    exampleBulkGraphQLMutation?: Maybe<Scalars["String"]["output"]>;
    exampleBulkImperativeInvocation: Scalars["String"]["output"];
    /** @deprecated moved to exampleBulkGraphQLMutation */
    exampleBulkMutation?: Maybe<Scalars["String"]["output"]>;
    exampleBulkReactHook: Scalars["String"]["output"];
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
    /** The roles that the entity making this API call has been assigned */
    assignedRoles: Array<GadgetRole>;
    canonicalRenderURL: Scalars["String"]["output"];
    developmentGraphQLEndpoint: Scalars["String"]["output"];
    developmentRenderURL: Scalars["String"]["output"];
    directUploadToken?: Maybe<DirectUploadToken>;
    editURL: Scalars["String"]["output"];
    environmentID: Scalars["GadgetID"]["output"];
    environmentName: Scalars["String"]["output"];
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
export declare enum GadgetFieldType {
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
    Vector = "Vector"
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
    name: Scalars["String"]["output"];
    sprockets: SprocketConnection;
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
    updatedAt?: InputMaybe<DateTimeFilter>;
    widget?: InputMaybe<IdFilter>;
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
export type InternalBillingAccountInput = {
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
export type InternalBulkCreateFriendshipsResult = {
    __typename?: "InternalBulkCreateFriendshipsResult";
    errors?: Maybe<Array<ExecutionError>>;
    friendships?: Maybe<Array<Maybe<Scalars["InternalFriendshipRecord"]["output"]>>>;
    success: Scalars["Boolean"]["output"];
};
export type InternalBulkCreateGizmosResult = {
    __typename?: "InternalBulkCreateGizmosResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmos?: Maybe<Array<Maybe<Scalars["InternalGizmoRecord"]["output"]>>>;
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
export type InternalCourseInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    id?: InputMaybe<Scalars["GadgetID"]["input"]>;
    offered?: InputMaybe<Scalars["Boolean"]["input"]>;
    state?: InputMaybe<Scalars["RecordState"]["input"]>;
    stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
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
export type InternalCreateFriendshipResult = {
    __typename?: "InternalCreateFriendshipResult";
    errors?: Maybe<Array<ExecutionError>>;
    friendship?: Maybe<Scalars["InternalFriendshipRecord"]["output"]>;
    success: Scalars["Boolean"]["output"];
};
export type InternalCreateGizmoResult = {
    __typename?: "InternalCreateGizmoResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
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
export type InternalDeleteFriendshipResult = {
    __typename?: "InternalDeleteFriendshipResult";
    errors?: Maybe<Array<ExecutionError>>;
    friendship?: Maybe<Scalars["InternalFriendshipRecord"]["output"]>;
    success: Scalars["Boolean"]["output"];
};
export type InternalDeleteGizmoResult = {
    __typename?: "InternalDeleteGizmoResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
    success: Scalars["Boolean"]["output"];
};
export type InternalDeleteManyBillingAccountResult = {
    __typename?: "InternalDeleteManyBillingAccountResult";
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
export type InternalDeleteManyFriendshipResult = {
    __typename?: "InternalDeleteManyFriendshipResult";
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type InternalDeleteManyGizmoResult = {
    __typename?: "InternalDeleteManyGizmoResult";
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
export type InternalFriendshipInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    followee?: InputMaybe<InternalBelongsToInput>;
    follower?: InputMaybe<InternalBelongsToInput>;
    id?: InputMaybe<Scalars["GadgetID"]["input"]>;
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
export type InternalGizmoInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    id?: InputMaybe<Scalars["GadgetID"]["input"]>;
    name?: InputMaybe<Scalars["String"]["input"]>;
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
export type InternalMutations = {
    __typename?: "InternalMutations";
    /** Acquire a backend lock, returning only once the lock has been acquired */
    acquireLock: LockOperationResult;
    bulkCreateBillingAccounts?: Maybe<InternalBulkCreateBillingAccountsResult>;
    bulkCreateCourses?: Maybe<InternalBulkCreateCoursesResult>;
    bulkCreateCustomers?: Maybe<InternalBulkCreateCustomersResult>;
    bulkCreateEphemerals?: Maybe<InternalBulkCreateEphemeralsResult>;
    bulkCreateFriendships?: Maybe<InternalBulkCreateFriendshipsResult>;
    bulkCreateGizmos?: Maybe<InternalBulkCreateGizmosResult>;
    bulkCreateRegistrations?: Maybe<InternalBulkCreateRegistrationsResult>;
    bulkCreateSampleModelToTestReallyLongModelNamess?: Maybe<InternalBulkCreateSampleModelToTestReallyLongModelNamessResult>;
    bulkCreateSections?: Maybe<InternalBulkCreateSectionsResult>;
    bulkCreateSessions?: Maybe<InternalBulkCreateSessionsResult>;
    bulkCreateSprockets?: Maybe<InternalBulkCreateSprocketsResult>;
    bulkCreateStudents?: Maybe<InternalBulkCreateStudentsResult>;
    bulkCreateUsers?: Maybe<InternalBulkCreateUsersResult>;
    bulkCreateWidgetImages?: Maybe<InternalBulkCreateWidgetImagesResult>;
    bulkCreateWidgets?: Maybe<InternalBulkCreateWidgetsResult>;
    commitTransaction: Scalars["String"]["output"];
    createBillingAccount?: Maybe<InternalCreateBillingAccountResult>;
    createCourse?: Maybe<InternalCreateCourseResult>;
    createCustomer?: Maybe<InternalCreateCustomerResult>;
    createEphemeral?: Maybe<InternalCreateEphemeralResult>;
    createFriendship?: Maybe<InternalCreateFriendshipResult>;
    createGizmo?: Maybe<InternalCreateGizmoResult>;
    createRegistration?: Maybe<InternalCreateRegistrationResult>;
    createSampleModelToTestReallyLongModelNames?: Maybe<InternalCreateSampleModelToTestReallyLongModelNamesResult>;
    createSection?: Maybe<InternalCreateSectionResult>;
    createSession?: Maybe<InternalCreateSessionResult>;
    createSprocket?: Maybe<InternalCreateSprocketResult>;
    createStudent?: Maybe<InternalCreateStudentResult>;
    createUser?: Maybe<InternalCreateUserResult>;
    createWidget?: Maybe<InternalCreateWidgetResult>;
    createWidgetImage?: Maybe<InternalCreateWidgetImageResult>;
    deleteBillingAccount?: Maybe<InternalDeleteBillingAccountResult>;
    deleteCourse?: Maybe<InternalDeleteCourseResult>;
    deleteCustomer?: Maybe<InternalDeleteCustomerResult>;
    deleteEphemeral?: Maybe<InternalDeleteEphemeralResult>;
    deleteFriendship?: Maybe<InternalDeleteFriendshipResult>;
    deleteGizmo?: Maybe<InternalDeleteGizmoResult>;
    deleteManyBillingAccount?: Maybe<InternalDeleteManyBillingAccountResult>;
    deleteManyCourse?: Maybe<InternalDeleteManyCourseResult>;
    deleteManyCustomer?: Maybe<InternalDeleteManyCustomerResult>;
    deleteManyEphemeral?: Maybe<InternalDeleteManyEphemeralResult>;
    deleteManyFriendship?: Maybe<InternalDeleteManyFriendshipResult>;
    deleteManyGizmo?: Maybe<InternalDeleteManyGizmoResult>;
    deleteManyRegistration?: Maybe<InternalDeleteManyRegistrationResult>;
    deleteManySampleModelToTestReallyLongModelNames?: Maybe<InternalDeleteManySampleModelToTestReallyLongModelNamesResult>;
    deleteManySection?: Maybe<InternalDeleteManySectionResult>;
    deleteManySession?: Maybe<InternalDeleteManySessionResult>;
    deleteManySprocket?: Maybe<InternalDeleteManySprocketResult>;
    deleteManyStudent?: Maybe<InternalDeleteManyStudentResult>;
    deleteManyUser?: Maybe<InternalDeleteManyUserResult>;
    deleteManyWidget?: Maybe<InternalDeleteManyWidgetResult>;
    deleteManyWidgetImage?: Maybe<InternalDeleteManyWidgetImageResult>;
    deleteRegistration?: Maybe<InternalDeleteRegistrationResult>;
    deleteSampleModelToTestReallyLongModelNames?: Maybe<InternalDeleteSampleModelToTestReallyLongModelNamesResult>;
    deleteSection?: Maybe<InternalDeleteSectionResult>;
    deleteSession?: Maybe<InternalDeleteSessionResult>;
    deleteSprocket?: Maybe<InternalDeleteSprocketResult>;
    deleteStudent?: Maybe<InternalDeleteStudentResult>;
    deleteUser?: Maybe<InternalDeleteUserResult>;
    deleteWidget?: Maybe<InternalDeleteWidgetResult>;
    deleteWidgetImage?: Maybe<InternalDeleteWidgetImageResult>;
    rollbackTransaction: Scalars["String"]["output"];
    startTransaction: Scalars["String"]["output"];
    triggerAddInventoryIfOutOfStockWidget?: Maybe<AddInventoryIfOutOfStockWidgetResult>;
    triggerAddInventoryWidget?: Maybe<AddInventoryWidgetResult>;
    triggerBarfAnError?: Maybe<BarfAnErrorResult>;
    triggerBendGizmo?: Maybe<BendGizmoResult>;
    triggerBreakGizmo?: Maybe<BreakGizmoResult>;
    triggerCreateBillingAccount?: Maybe<CreateBillingAccountResult>;
    triggerCreateCourse?: Maybe<CreateCourseResult>;
    triggerCreateCustomer?: Maybe<CreateCustomerResult>;
    triggerCreateEphemeral?: Maybe<CreateEphemeralResult>;
    triggerCreateFriendship?: Maybe<CreateFriendshipResult>;
    triggerCreateGizmo?: Maybe<CreateGizmoResult>;
    triggerCreateRegistration?: Maybe<CreateRegistrationResult>;
    triggerCreateSampleModelToTestReallyLongModelNames?: Maybe<CreateSampleModelToTestReallyLongModelNamesResult>;
    triggerCreateSection?: Maybe<CreateSectionResult>;
    triggerCreateSprocket?: Maybe<CreateSprocketResult>;
    triggerCreateStudent?: Maybe<CreateStudentResult>;
    triggerCreateUser?: Maybe<CreateUserResult>;
    triggerCreateWidget?: Maybe<CreateWidgetResult>;
    triggerCreateWidgetImage?: Maybe<CreateWidgetImageResult>;
    triggerDeleteBillingAccount?: Maybe<DeleteBillingAccountResult>;
    triggerDeleteCourse?: Maybe<DeleteCourseResult>;
    triggerDeleteCustomer?: Maybe<DeleteCustomerResult>;
    triggerDeleteEphemeral?: Maybe<DeleteEphemeralResult>;
    triggerDeleteFriendship?: Maybe<DeleteFriendshipResult>;
    triggerDeleteGizmo?: Maybe<DeleteGizmoResult>;
    triggerDeleteRegistration?: Maybe<DeleteRegistrationResult>;
    triggerDeleteSampleModelToTestReallyLongModelNames?: Maybe<DeleteSampleModelToTestReallyLongModelNamesResult>;
    triggerDeleteSection?: Maybe<DeleteSectionResult>;
    triggerDeleteSprocket?: Maybe<DeleteSprocketResult>;
    triggerDeleteStudent?: Maybe<DeleteStudentResult>;
    triggerDeleteUser?: Maybe<DeleteUserResult>;
    triggerDeleteWidget?: Maybe<DeleteWidgetResult>;
    triggerDeleteWidgetImage?: Maybe<DeleteWidgetImageResult>;
    triggerFlipAllWidgets?: Maybe<FlipAllWidgetsResult>;
    triggerFlipDownWidget?: Maybe<FlipDownWidgetResult>;
    triggerFlipUpWidget?: Maybe<FlipUpWidgetResult>;
    triggerFoldGizmo?: Maybe<FoldGizmoResult>;
    triggerOtherCreateGizmo?: Maybe<OtherCreateGizmoResult>;
    triggerSignUpUser?: Maybe<SignUpUserResult>;
    triggerStraightenGizmo?: Maybe<StraightenGizmoResult>;
    triggerUnfoldGizmo?: Maybe<UnfoldGizmoResult>;
    triggerUntriggerableGizmo?: Maybe<UntriggerableGizmoResult>;
    triggerUntriggerableGlobalAction?: Maybe<UntriggerableGlobalActionResult>;
    triggerUpdateBillingAccount?: Maybe<UpdateBillingAccountResult>;
    triggerUpdateCourse?: Maybe<UpdateCourseResult>;
    triggerUpdateCustomer?: Maybe<UpdateCustomerResult>;
    triggerUpdateEphemeral?: Maybe<UpdateEphemeralResult>;
    triggerUpdateFriendship?: Maybe<UpdateFriendshipResult>;
    triggerUpdateGizmo?: Maybe<UpdateGizmoResult>;
    triggerUpdateRegistration?: Maybe<UpdateRegistrationResult>;
    triggerUpdateSampleModelToTestReallyLongModelNames?: Maybe<UpdateSampleModelToTestReallyLongModelNamesResult>;
    triggerUpdateSection?: Maybe<UpdateSectionResult>;
    triggerUpdateSprocket?: Maybe<UpdateSprocketResult>;
    triggerUpdateStudent?: Maybe<UpdateStudentResult>;
    triggerUpdateUser?: Maybe<UpdateUserResult>;
    triggerUpdateWidget?: Maybe<UpdateWidgetResult>;
    triggerUpdateWidgetImage?: Maybe<UpdateWidgetImageResult>;
    updateBillingAccount?: Maybe<InternalUpdateBillingAccountResult>;
    updateCourse?: Maybe<InternalUpdateCourseResult>;
    updateCustomer?: Maybe<InternalUpdateCustomerResult>;
    updateEphemeral?: Maybe<InternalUpdateEphemeralResult>;
    updateFriendship?: Maybe<InternalUpdateFriendshipResult>;
    updateGizmo?: Maybe<InternalUpdateGizmoResult>;
    updateRegistration?: Maybe<InternalUpdateRegistrationResult>;
    updateSampleModelToTestReallyLongModelNames?: Maybe<InternalUpdateSampleModelToTestReallyLongModelNamesResult>;
    updateSection?: Maybe<InternalUpdateSectionResult>;
    updateSession?: Maybe<InternalUpdateSessionResult>;
    updateSprocket?: Maybe<InternalUpdateSprocketResult>;
    updateStudent?: Maybe<InternalUpdateStudentResult>;
    updateUser?: Maybe<InternalUpdateUserResult>;
    updateWidget?: Maybe<InternalUpdateWidgetResult>;
    updateWidgetImage?: Maybe<InternalUpdateWidgetImageResult>;
};
export type InternalMutationsAcquireLockArgs = {
    lock: Scalars["String"]["input"];
};
export type InternalMutationsBulkCreateBillingAccountsArgs = {
    billingAccounts: Array<InputMaybe<InternalBillingAccountInput>>;
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
export type InternalMutationsCreateCourseArgs = {
    course?: InputMaybe<InternalCourseInput>;
};
export type InternalMutationsCreateCustomerArgs = {
    customer?: InputMaybe<InternalCustomerInput>;
};
export type InternalMutationsCreateEphemeralArgs = {
    ephemeral?: InputMaybe<InternalEphemeralInput>;
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
export type InternalMutationsDeleteCourseArgs = {
    id: Scalars["GadgetID"]["input"];
};
export type InternalMutationsDeleteCustomerArgs = {
    id: Scalars["GadgetID"]["input"];
};
export type InternalMutationsDeleteEphemeralArgs = {
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
export type InternalMutationsDeleteManyCourseArgs = {
    filter?: InputMaybe<Array<CourseFilter>>;
    search?: InputMaybe<Scalars["String"]["input"]>;
};
export type InternalMutationsDeleteManyCustomerArgs = {
    filter?: InputMaybe<Array<CustomerFilter>>;
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
export type InternalMutationsDeleteManySprocketArgs = {
    filter?: InputMaybe<Array<SprocketFilter>>;
    search?: InputMaybe<Scalars["String"]["input"]>;
};
export type InternalMutationsDeleteManyStudentArgs = {
    filter?: InputMaybe<Array<StudentFilter>>;
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
export type InternalMutationsTriggerCreateBillingAccountArgs = {
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
export type InternalMutationsTriggerCreateUserArgs = {
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
export type InternalMutationsTriggerOtherCreateGizmoArgs = {
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
export type InternalMutationsUpdateBillingAccountArgs = {
    billingAccount?: InputMaybe<InternalBillingAccountInput>;
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
export type InternalQueries = {
    __typename?: "InternalQueries";
    billingAccount?: Maybe<Scalars["InternalBillingAccountRecord"]["output"]>;
    course?: Maybe<Scalars["InternalCourseRecord"]["output"]>;
    /** Currently open platform transaction details, or null if no transaction is open */
    currentTransactionDetails?: Maybe<Scalars["JSONObject"]["output"]>;
    customer?: Maybe<Scalars["InternalCustomerRecord"]["output"]>;
    ephemeral?: Maybe<Scalars["InternalEphemeralRecord"]["output"]>;
    friendship?: Maybe<Scalars["InternalFriendshipRecord"]["output"]>;
    gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
    listBillingAccount: InternalBillingAccountRecordConnection;
    listCourse: InternalCourseRecordConnection;
    listCustomer: InternalCustomerRecordConnection;
    listEphemeral: InternalEphemeralRecordConnection;
    listFriendship: InternalFriendshipRecordConnection;
    listGizmo: InternalGizmoRecordConnection;
    listRegistration: InternalRegistrationRecordConnection;
    listSampleModelToTestReallyLongModelNames: InternalSampleModelToTestReallyLongModelNamesRecordConnection;
    listSection: InternalSectionRecordConnection;
    listSession: InternalSessionRecordConnection;
    listSprocket: InternalSprocketRecordConnection;
    listStudent: InternalStudentRecordConnection;
    listUser: InternalUserRecordConnection;
    listWidget: InternalWidgetRecordConnection;
    listWidgetImage: InternalWidgetImageRecordConnection;
    registration?: Maybe<Scalars["InternalRegistrationRecord"]["output"]>;
    sampleModelToTestReallyLongModelNames?: Maybe<Scalars["InternalSampleModelToTestReallyLongModelNamesRecord"]["output"]>;
    section?: Maybe<Scalars["InternalSectionRecord"]["output"]>;
    session?: Maybe<Scalars["InternalSessionRecord"]["output"]>;
    sprocket?: Maybe<Scalars["InternalSprocketRecord"]["output"]>;
    student?: Maybe<Scalars["InternalStudentRecord"]["output"]>;
    user?: Maybe<Scalars["InternalUserRecord"]["output"]>;
    widget?: Maybe<Scalars["InternalWidgetRecord"]["output"]>;
    widgetImage?: Maybe<Scalars["InternalWidgetImageRecord"]["output"]>;
};
export type InternalQueriesBillingAccountArgs = {
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
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    select?: InputMaybe<Array<Scalars["String"]["input"]>>;
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
    dangler?: InputMaybe<Scalars["JSON"]["input"]>;
    id?: InputMaybe<Scalars["GadgetID"]["input"]>;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
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
    createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    fullName?: InputMaybe<Scalars["String"]["input"]>;
    id?: InputMaybe<Scalars["GadgetID"]["input"]>;
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
export type InternalUpdateBillingAccountResult = {
    __typename?: "InternalUpdateBillingAccountResult";
    billingAccount?: Maybe<Scalars["InternalBillingAccountRecord"]["output"]>;
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
export type InternalUpdateFriendshipResult = {
    __typename?: "InternalUpdateFriendshipResult";
    errors?: Maybe<Array<ExecutionError>>;
    friendship?: Maybe<Scalars["InternalFriendshipRecord"]["output"]>;
    success: Scalars["Boolean"]["output"];
};
export type InternalUpdateGizmoResult = {
    __typename?: "InternalUpdateGizmoResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmo?: Maybe<Scalars["InternalGizmoRecord"]["output"]>;
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
export type InternalUserInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    email?: InputMaybe<Scalars["String"]["input"]>;
    id?: InputMaybe<Scalars["GadgetID"]["input"]>;
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
    embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    id?: InputMaybe<Scalars["GadgetID"]["input"]>;
    inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
    isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
    metafields?: InputMaybe<Scalars["JSON"]["input"]>;
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
    secretKey?: InputMaybe<Scalars["String"]["input"]>;
    section?: InputMaybe<InternalBelongsToInput>;
    startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    state?: InputMaybe<Scalars["RecordState"]["input"]>;
    stateHistory?: InputMaybe<Scalars["RecordState"]["input"]>;
    tagline?: InputMaybe<Scalars["String"]["input"]>;
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
export type LogInViaEmailSessionResult = {
    __typename?: "LogInViaEmailSessionResult";
    errors?: Maybe<Array<ExecutionError>>;
    session?: Maybe<Session>;
    success: Scalars["Boolean"]["output"];
};
export type LogOutSessionResult = {
    __typename?: "LogOutSessionResult";
    errors?: Maybe<Array<ExecutionError>>;
    session?: Maybe<Session>;
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
    barfAnError?: Maybe<BarfAnErrorResult>;
    bendGizmo?: Maybe<BendGizmoResult>;
    breakGizmo?: Maybe<BreakGizmoResult>;
    bulkBendGizmos?: Maybe<BulkBendGizmosResult>;
    bulkBreakGizmos?: Maybe<BulkBreakGizmosResult>;
    bulkDeleteBillingAccounts?: Maybe<BulkDeleteBillingAccountsResult>;
    bulkDeleteCourses?: Maybe<BulkDeleteCoursesResult>;
    bulkDeleteCustomers?: Maybe<BulkDeleteCustomersResult>;
    bulkDeleteEphemerals?: Maybe<BulkDeleteEphemeralsResult>;
    bulkDeleteFriendships?: Maybe<BulkDeleteFriendshipsResult>;
    bulkDeleteGizmos?: Maybe<BulkDeleteGizmosResult>;
    bulkDeleteRegistrations?: Maybe<BulkDeleteRegistrationsResult>;
    bulkDeleteSampleModelToTestReallyLongModelNames?: Maybe<BulkDeleteSampleModelToTestReallyLongModelNamesResult>;
    bulkDeleteSections?: Maybe<BulkDeleteSectionsResult>;
    bulkDeleteSprockets?: Maybe<BulkDeleteSprocketsResult>;
    bulkDeleteStudents?: Maybe<BulkDeleteStudentsResult>;
    bulkDeleteUsers?: Maybe<BulkDeleteUsersResult>;
    bulkDeleteWidgetImages?: Maybe<BulkDeleteWidgetImagesResult>;
    bulkDeleteWidgets?: Maybe<BulkDeleteWidgetsResult>;
    bulkFlipDownWidgets?: Maybe<BulkFlipDownWidgetsResult>;
    bulkFlipUpWidgets?: Maybe<BulkFlipUpWidgetsResult>;
    bulkFoldGizmos?: Maybe<BulkFoldGizmosResult>;
    bulkStraightenGizmos?: Maybe<BulkStraightenGizmosResult>;
    bulkUnfoldGizmos?: Maybe<BulkUnfoldGizmosResult>;
    createBillingAccount?: Maybe<CreateBillingAccountResult>;
    createCourse?: Maybe<CreateCourseResult>;
    createCustomer?: Maybe<CreateCustomerResult>;
    createEphemeral?: Maybe<CreateEphemeralResult>;
    createFriendship?: Maybe<CreateFriendshipResult>;
    createGizmo?: Maybe<CreateGizmoResult>;
    createRegistration?: Maybe<CreateRegistrationResult>;
    createSampleModelToTestReallyLongModelNames?: Maybe<CreateSampleModelToTestReallyLongModelNamesResult>;
    createSection?: Maybe<CreateSectionResult>;
    createSprocket?: Maybe<CreateSprocketResult>;
    createStudent?: Maybe<CreateStudentResult>;
    createUser?: Maybe<CreateUserResult>;
    createWidget?: Maybe<CreateWidgetResult>;
    createWidgetImage?: Maybe<CreateWidgetImageResult>;
    currentSession?: Maybe<CurrentSessionMutations>;
    deleteBillingAccount?: Maybe<DeleteBillingAccountResult>;
    deleteCourse?: Maybe<DeleteCourseResult>;
    deleteCustomer?: Maybe<DeleteCustomerResult>;
    deleteEphemeral?: Maybe<DeleteEphemeralResult>;
    deleteFriendship?: Maybe<DeleteFriendshipResult>;
    deleteGizmo?: Maybe<DeleteGizmoResult>;
    deleteRegistration?: Maybe<DeleteRegistrationResult>;
    deleteSampleModelToTestReallyLongModelNames?: Maybe<DeleteSampleModelToTestReallyLongModelNamesResult>;
    deleteSection?: Maybe<DeleteSectionResult>;
    deleteSprocket?: Maybe<DeleteSprocketResult>;
    deleteStudent?: Maybe<DeleteStudentResult>;
    deleteUser?: Maybe<DeleteUserResult>;
    deleteWidget?: Maybe<DeleteWidgetResult>;
    deleteWidgetImage?: Maybe<DeleteWidgetImageResult>;
    flipAllWidgets?: Maybe<FlipAllWidgetsResult>;
    flipDownWidget?: Maybe<FlipDownWidgetResult>;
    flipUpWidget?: Maybe<FlipUpWidgetResult>;
    foldGizmo?: Maybe<FoldGizmoResult>;
    /** Meta information about the application, like it's name, schema, and other internal details. */
    gadgetMeta: GadgetApplicationMeta;
    internal?: Maybe<InternalMutations>;
    otherCreateGizmo?: Maybe<OtherCreateGizmoResult>;
    signUpUser?: Maybe<SignUpUserResult>;
    straightenGizmo?: Maybe<StraightenGizmoResult>;
    unfoldGizmo?: Maybe<UnfoldGizmoResult>;
    updateBillingAccount?: Maybe<UpdateBillingAccountResult>;
    updateCourse?: Maybe<UpdateCourseResult>;
    updateCustomer?: Maybe<UpdateCustomerResult>;
    updateEphemeral?: Maybe<UpdateEphemeralResult>;
    updateFriendship?: Maybe<UpdateFriendshipResult>;
    updateGizmo?: Maybe<UpdateGizmoResult>;
    updateRegistration?: Maybe<UpdateRegistrationResult>;
    updateSampleModelToTestReallyLongModelNames?: Maybe<UpdateSampleModelToTestReallyLongModelNamesResult>;
    updateSection?: Maybe<UpdateSectionResult>;
    updateSprocket?: Maybe<UpdateSprocketResult>;
    updateStudent?: Maybe<UpdateStudentResult>;
    updateUser?: Maybe<UpdateUserResult>;
    updateWidget?: Maybe<UpdateWidgetResult>;
    updateWidgetImage?: Maybe<UpdateWidgetImageResult>;
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
    id: Scalars["GadgetID"]["input"];
};
export type MutationBreakGizmoArgs = {
    id: Scalars["GadgetID"]["input"];
};
export type MutationBulkBendGizmosArgs = {
    ids: Array<Scalars["GadgetID"]["input"]>;
};
export type MutationBulkBreakGizmosArgs = {
    ids: Array<Scalars["GadgetID"]["input"]>;
};
export type MutationBulkDeleteBillingAccountsArgs = {
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
    ids: Array<Scalars["GadgetID"]["input"]>;
};
export type MutationBulkStraightenGizmosArgs = {
    ids: Array<Scalars["GadgetID"]["input"]>;
};
export type MutationBulkUnfoldGizmosArgs = {
    ids: Array<Scalars["GadgetID"]["input"]>;
};
export type MutationCreateBillingAccountArgs = {
    billingAccount?: InputMaybe<CreateBillingAccountInput>;
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
export type MutationCreateUserArgs = {
    user?: InputMaybe<CreateUserInput>;
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
export type MutationDeleteCourseArgs = {
    id: Scalars["GadgetID"]["input"];
};
export type MutationDeleteCustomerArgs = {
    id: Scalars["GadgetID"]["input"];
};
export type MutationDeleteEphemeralArgs = {
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
    id: Scalars["GadgetID"]["input"];
};
export type MutationOtherCreateGizmoArgs = {
    gizmo?: InputMaybe<OtherCreateGizmoInput>;
};
export type MutationSignUpUserArgs = {
    user?: InputMaybe<SignUpUserInput>;
};
export type MutationStraightenGizmoArgs = {
    id: Scalars["GadgetID"]["input"];
};
export type MutationUnfoldGizmoArgs = {
    id: Scalars["GadgetID"]["input"];
};
export type MutationUpdateBillingAccountArgs = {
    billingAccount?: InputMaybe<UpdateBillingAccountInput>;
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
export type NestedAddInventoryLocationInput = {
    phone?: InputMaybe<NestedAddInventoryPhoneInput>;
    street?: InputMaybe<Scalars["String"]["input"]>;
    streetNumber?: InputMaybe<Scalars["Float"]["input"]>;
};
export type NestedAddInventoryPhoneInput = {
    areaCode?: InputMaybe<Scalars["String"]["input"]>;
    countryCode?: InputMaybe<Scalars["String"]["input"]>;
};
export type NestedBillingAccountCreateInput = {
    customer?: InputMaybe<CustomerBelongsToInput>;
};
export type NestedBillingAccountDeleteInput = {
    id: Scalars["GadgetID"]["input"];
};
export type NestedBillingAccountUpdateInput = {
    customer?: InputMaybe<CustomerBelongsToInput>;
    id: Scalars["GadgetID"]["input"];
};
export type NestedCourseCreateInput = {
    offered?: InputMaybe<Scalars["Boolean"]["input"]>;
    registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
    registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
    students?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
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
export type NestedGizmoBendInput = {
    id: Scalars["GadgetID"]["input"];
};
export type NestedGizmoBreakInput = {
    id: Scalars["GadgetID"]["input"];
};
export type NestedGizmoCreateInput = {
    name?: InputMaybe<Scalars["String"]["input"]>;
    sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
    widget?: InputMaybe<WidgetBelongsToInput>;
};
export type NestedGizmoDeleteInput = {
    id: Scalars["GadgetID"]["input"];
};
export type NestedGizmoFoldInput = {
    id: Scalars["GadgetID"]["input"];
};
export type NestedGizmoOtherCreateInput = {
    name?: InputMaybe<Scalars["String"]["input"]>;
    sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
    widget?: InputMaybe<WidgetBelongsToInput>;
};
export type NestedGizmoStraightenInput = {
    id: Scalars["GadgetID"]["input"];
};
export type NestedGizmoUnfoldInput = {
    id: Scalars["GadgetID"]["input"];
};
export type NestedGizmoUpdateInput = {
    id: Scalars["GadgetID"]["input"];
    name?: InputMaybe<Scalars["String"]["input"]>;
    sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
    widget?: InputMaybe<WidgetBelongsToInput>;
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
export type NestedSessionLogInViaEmailInput = {
    email?: InputMaybe<Scalars["String"]["input"]>;
    password?: InputMaybe<Scalars["String"]["input"]>;
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
    courses?: InputMaybe<Array<InputMaybe<CourseHasManyThroughInput>>>;
    fullName?: InputMaybe<Scalars["String"]["input"]>;
    registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
    registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
};
export type NestedStudentDeleteInput = {
    id: Scalars["GadgetID"]["input"];
};
export type NestedStudentUpdateInput = {
    courses?: InputMaybe<Array<InputMaybe<CourseHasManyThroughInput>>>;
    fullName?: InputMaybe<Scalars["String"]["input"]>;
    id: Scalars["GadgetID"]["input"];
    registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
    registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
};
export type NestedUserCreateInput = {
    email?: InputMaybe<Scalars["String"]["input"]>;
    password?: InputMaybe<Scalars["String"]["input"]>;
    sessions?: InputMaybe<Array<InputMaybe<SessionHasManyInput>>>;
};
export type NestedUserDeleteInput = {
    id: Scalars["GadgetID"]["input"];
};
export type NestedUserSignUpInput = {
    email?: InputMaybe<Scalars["String"]["input"]>;
    password?: InputMaybe<Scalars["String"]["input"]>;
    sessions?: InputMaybe<Array<InputMaybe<SessionHasManyInput>>>;
};
export type NestedUserUpdateInput = {
    email?: InputMaybe<Scalars["String"]["input"]>;
    id: Scalars["GadgetID"]["input"];
    password?: InputMaybe<Scalars["String"]["input"]>;
    sessions?: InputMaybe<Array<InputMaybe<SessionHasManyInput>>>;
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
    /** An array of Floats */
    relatedWidgets?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
    secretKey?: InputMaybe<Scalars["String"]["input"]>;
    section?: InputMaybe<SectionBelongsToInput>;
    startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    tagline?: InputMaybe<Scalars["String"]["input"]>;
};
export type NestedWidgetCreateInput = {
    anything?: InputMaybe<Scalars["JSON"]["input"]>;
    birthday?: InputMaybe<Scalars["DateOrDateTime"]["input"]>;
    category?: InputMaybe<Array<Scalars["WidgetCategoryEnum"]["input"]>>;
    color?: InputMaybe<Scalars["String"]["input"]>;
    cost?: InputMaybe<Scalars["CADCurrencyAmount"]["input"]>;
    description?: InputMaybe<RichTextInput>;
    embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
    images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
    inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
    isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
    metafields?: InputMaybe<Scalars["JSON"]["input"]>;
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
    secretKey?: InputMaybe<Scalars["String"]["input"]>;
    section?: InputMaybe<SectionBelongsToInput>;
    startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    tagline?: InputMaybe<Scalars["String"]["input"]>;
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
    embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
    id: Scalars["GadgetID"]["input"];
    images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
    inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
    isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
    metafields?: InputMaybe<Scalars["JSON"]["input"]>;
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
    secretKey?: InputMaybe<Scalars["String"]["input"]>;
    section?: InputMaybe<SectionBelongsToInput>;
    startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    tagline?: InputMaybe<Scalars["String"]["input"]>;
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
    widget?: InputMaybe<WidgetBelongsToInput>;
};
export type OtherCreateGizmoResult = {
    __typename?: "OtherCreateGizmoResult";
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
export type Query = {
    __typename?: "Query";
    billingAccount?: Maybe<BillingAccount>;
    billingAccounts: BillingAccountConnection;
    course?: Maybe<Course>;
    courses: CourseConnection;
    currentSession?: Maybe<Session>;
    customer?: Maybe<Customer>;
    customers: CustomerConnection;
    ephemeral?: Maybe<Ephemeral>;
    ephemerals: EphemeralConnection;
    friendship?: Maybe<Friendship>;
    friendships: FriendshipConnection;
    /** Meta information about the application, like it's name, schema, and other internal details. */
    gadgetMeta: GadgetApplicationMeta;
    gizmo?: Maybe<Gizmo>;
    gizmos: GizmoConnection;
    internal?: Maybe<InternalQueries>;
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
    /** Computed view from views/totalInStock.gelly */
    totalInStock: Scalars["JSON"]["output"];
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
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
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
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
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
    createdAt?: InputMaybe<DateTimeFilter>;
    id?: InputMaybe<IdFilter>;
    state?: InputMaybe<StateFilter>;
    student?: InputMaybe<IdFilter>;
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
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: InputMaybe<SortOrder>;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: InputMaybe<SortOrder>;
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
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
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
    state?: InputMaybe<StateFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateTimeFilter>;
};
export type SectionSort = {
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
export type Session = {
    __typename?: "Session";
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars["JSONObject"]["output"];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars["DateTime"]["output"];
    dangler?: Maybe<Scalars["JSON"]["output"]>;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: Maybe<Scalars["GadgetID"]["output"]>;
    roles?: Maybe<Array<Role>>;
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
/** Input object supporting setting or updating related model record on a relationship field */
export type SessionHasManyInput = {
    /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
    _converge?: InputMaybe<ConvergeSessionInput>;
    logInViaEmail?: InputMaybe<NestedSessionLogInViaEmailInput>;
    logOut?: InputMaybe<Scalars["Boolean"]["input"]>;
};
export type SignUpUserInput = {
    email?: InputMaybe<Scalars["String"]["input"]>;
    password?: InputMaybe<Scalars["String"]["input"]>;
    sessions?: InputMaybe<Array<InputMaybe<SessionHasManyInput>>>;
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
export declare enum SortOrder {
    Ascending = "Ascending",
    Descending = "Descending"
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
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
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
    id?: InputMaybe<IdFilter>;
    ratio?: InputMaybe<FloatFilter>;
    state?: InputMaybe<StateFilter>;
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
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: InputMaybe<SortOrder>;
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
export type StraightenGizmoResult = {
    __typename?: "StraightenGizmoResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmo?: Maybe<Gizmo>;
    success: Scalars["Boolean"]["output"];
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
    courses: CourseConnection;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars["DateTime"]["output"];
    fullName?: Maybe<Scalars["String"]["output"]>;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars["GadgetID"]["output"];
    registrations: RegistrationConnection;
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars["DateTime"]["output"];
};
export type StudentCoursesArgs = {
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
    createdAt?: InputMaybe<DateTimeFilter>;
    fullName?: InputMaybe<StringFilter>;
    id?: InputMaybe<IdFilter>;
    state?: InputMaybe<StateFilter>;
    updatedAt?: InputMaybe<DateTimeFilter>;
};
/** Input object supporting setting or updating related model record on a relationship field */
export type StudentHasManyThroughInput = {
    create?: InputMaybe<NestedStudentCreateInput>;
    delete?: InputMaybe<NestedStudentDeleteInput>;
    update?: InputMaybe<NestedStudentUpdateInput>;
};
export type StudentSort = {
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: InputMaybe<SortOrder>;
    /** Sort the results by the fullName field. Defaults to ascending (smallest value first). */
    fullName?: InputMaybe<SortOrder>;
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: InputMaybe<SortOrder>;
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: InputMaybe<SortOrder>;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: InputMaybe<SortOrder>;
};
export type UnfoldGizmoResult = {
    __typename?: "UnfoldGizmoResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmo?: Maybe<Gizmo>;
    success: Scalars["Boolean"]["output"];
};
export type UntriggerableGizmoResult = {
    __typename?: "UntriggerableGizmoResult";
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
    customer?: InputMaybe<CustomerBelongsToInput>;
};
export type UpdateBillingAccountResult = {
    __typename?: "UpdateBillingAccountResult";
    billingAccount?: Maybe<BillingAccount>;
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateCourseInput = {
    offered?: InputMaybe<Scalars["Boolean"]["input"]>;
    registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
    registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
    students?: InputMaybe<Array<InputMaybe<StudentHasManyThroughInput>>>;
    title?: InputMaybe<Scalars["String"]["input"]>;
};
export type UpdateCourseResult = {
    __typename?: "UpdateCourseResult";
    course?: Maybe<Course>;
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateCustomerInput = {
    billingAccount?: InputMaybe<BillingAccountHasOneInput>;
    email?: InputMaybe<Scalars["String"]["input"]>;
};
export type UpdateCustomerResult = {
    __typename?: "UpdateCustomerResult";
    customer?: Maybe<Customer>;
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateEphemeralInput = {
    data?: InputMaybe<Scalars["String"]["input"]>;
};
export type UpdateEphemeralResult = {
    __typename?: "UpdateEphemeralResult";
    ephemeral?: Maybe<Ephemeral>;
    errors?: Maybe<Array<ExecutionError>>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateFriendshipInput = {
    followee?: InputMaybe<StudentBelongsToInput>;
    follower?: InputMaybe<StudentBelongsToInput>;
};
export type UpdateFriendshipResult = {
    __typename?: "UpdateFriendshipResult";
    errors?: Maybe<Array<ExecutionError>>;
    friendship?: Maybe<Friendship>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateGizmoInput = {
    name?: InputMaybe<Scalars["String"]["input"]>;
    sprockets?: InputMaybe<Array<InputMaybe<SprocketHasManyInput>>>;
    widget?: InputMaybe<WidgetBelongsToInput>;
};
export type UpdateGizmoResult = {
    __typename?: "UpdateGizmoResult";
    errors?: Maybe<Array<ExecutionError>>;
    gizmo?: Maybe<Gizmo>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateRegistrationInput = {
    course?: InputMaybe<CourseBelongsToInput>;
    student?: InputMaybe<StudentBelongsToInput>;
};
export type UpdateRegistrationResult = {
    __typename?: "UpdateRegistrationResult";
    errors?: Maybe<Array<ExecutionError>>;
    registration?: Maybe<Registration>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateSampleModelToTestReallyLongModelNamesInput = {
    title?: InputMaybe<Scalars["String"]["input"]>;
};
export type UpdateSampleModelToTestReallyLongModelNamesResult = {
    __typename?: "UpdateSampleModelToTestReallyLongModelNamesResult";
    errors?: Maybe<Array<ExecutionError>>;
    sampleModelToTestReallyLongModelNames?: Maybe<SampleModelToTestReallyLongModelNames>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateSectionInput = {
    title?: InputMaybe<Scalars["String"]["input"]>;
    widgets?: InputMaybe<Array<InputMaybe<WidgetHasManyInput>>>;
};
export type UpdateSectionResult = {
    __typename?: "UpdateSectionResult";
    errors?: Maybe<Array<ExecutionError>>;
    section?: Maybe<Section>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateSprocketInput = {
    gizmo?: InputMaybe<GizmoBelongsToInput>;
    ratio?: InputMaybe<Scalars["Float"]["input"]>;
};
export type UpdateSprocketResult = {
    __typename?: "UpdateSprocketResult";
    errors?: Maybe<Array<ExecutionError>>;
    sprocket?: Maybe<Sprocket>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateStudentInput = {
    courses?: InputMaybe<Array<InputMaybe<CourseHasManyThroughInput>>>;
    fullName?: InputMaybe<Scalars["String"]["input"]>;
    registration?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
    registrations?: InputMaybe<Array<InputMaybe<RegistrationHasManyInput>>>;
};
export type UpdateStudentResult = {
    __typename?: "UpdateStudentResult";
    errors?: Maybe<Array<ExecutionError>>;
    student?: Maybe<Student>;
    success: Scalars["Boolean"]["output"];
};
export type UpdateUserInput = {
    email?: InputMaybe<Scalars["String"]["input"]>;
    password?: InputMaybe<Scalars["String"]["input"]>;
    sessions?: InputMaybe<Array<InputMaybe<SessionHasManyInput>>>;
};
export type UpdateUserResult = {
    __typename?: "UpdateUserResult";
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
export type UpdateWidgetImageResult = {
    __typename?: "UpdateWidgetImageResult";
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
    embedding?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    gizmos?: InputMaybe<Array<InputMaybe<GizmoHasManyInput>>>;
    images?: InputMaybe<Array<InputMaybe<WidgetImageHasManyInput>>>;
    inventoryCount?: InputMaybe<Scalars["Float"]["input"]>;
    isChecked?: InputMaybe<Scalars["Boolean"]["input"]>;
    metafields?: InputMaybe<Scalars["JSON"]["input"]>;
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
    secretKey?: InputMaybe<Scalars["String"]["input"]>;
    section?: InputMaybe<SectionBelongsToInput>;
    startsAt?: InputMaybe<Scalars["DateTime"]["input"]>;
    tagline?: InputMaybe<Scalars["String"]["input"]>;
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
    email?: Maybe<Scalars["EmailAddress"]["output"]>;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars["GadgetID"]["output"];
    roles?: Maybe<Array<Role>>;
    sessions: SessionConnection;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars["DateTime"]["output"];
};
export type UserSessionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** Input object supporting setting or updating related model record on a relationship field */
export type UserBelongsToInput = {
    /** Existing ID of another record, which you would like to associate this record with */
    _link?: InputMaybe<Scalars["GadgetID"]["input"]>;
    create?: InputMaybe<NestedUserCreateInput>;
    delete?: InputMaybe<NestedUserDeleteInput>;
    signUp?: InputMaybe<NestedUserSignUpInput>;
    update?: InputMaybe<NestedUserUpdateInput>;
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
    id?: InputMaybe<IdFilter>;
    updatedAt?: InputMaybe<DateTimeFilter>;
};
export type UserSort = {
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: InputMaybe<SortOrder>;
    /** Sort the results by the email field. Defaults to ascending (smallest value first). */
    email?: InputMaybe<SortOrder>;
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: InputMaybe<SortOrder>;
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
    cost?: Maybe<Money>;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars["DateTime"]["output"];
    description?: Maybe<RichText>;
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
    roles?: Maybe<Array<Role>>;
    secretKey?: Maybe<Scalars["String"]["output"]>;
    section?: Maybe<Section>;
    sectionId?: Maybe<Scalars["GadgetID"]["output"]>;
    startsAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
    tagline?: Maybe<Scalars["String"]["output"]>;
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
    embedding?: InputMaybe<VectorFilter>;
    id?: InputMaybe<IdFilter>;
    inventoryCount?: InputMaybe<FloatFilter>;
    isChecked?: InputMaybe<BooleanFilter>;
    metafields?: InputMaybe<JsonFilter>;
    name?: InputMaybe<StringFilter>;
    section?: InputMaybe<IdFilter>;
    startsAt?: InputMaybe<DateTimeFilter>;
    state?: InputMaybe<StateFilter>;
    tagline?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateTimeFilter>;
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
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars["RecordState"]["output"];
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
    state?: InputMaybe<StateFilter>;
    updatedAt?: InputMaybe<DateTimeFilter>;
    widget?: InputMaybe<IdFilter>;
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
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: InputMaybe<SortOrder>;
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
    /** Sort the results by the startsAt field. Defaults to ascending (smallest value first). */
    startsAt?: InputMaybe<SortOrder>;
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: InputMaybe<SortOrder>;
    /** Sort the results by the tagline field. Defaults to ascending (smallest value first). */
    tagline?: InputMaybe<SortOrder>;
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
    configuration: {
        __typename: "GadgetBelongsToConfig";
        fieldType: GadgetFieldType;
        relatedModel?: {
            __typename?: "GadgetModel";
            apiIdentifier: string;
        } | null;
    } | {
        __typename: "GadgetDateTimeConfig";
        fieldType: GadgetFieldType;
    } | {
        __typename: "GadgetEnumConfig";
        allowMultiple: boolean;
        fieldType: GadgetFieldType;
        options: Array<{
            __typename?: "GadgetEnumOption";
            name: string;
            color: string;
        }>;
    } | {
        __typename: "GadgetGenericFieldConfig";
        fieldType: GadgetFieldType;
    } | {
        __typename: "GadgetHasManyConfig";
        fieldType: GadgetFieldType;
        relatedModel?: {
            __typename?: "GadgetModel";
            apiIdentifier: string;
        } | null;
    } | {
        __typename: "GadgetObjectFieldConfig";
        fieldType: GadgetFieldType;
    };
};
type FieldMetadata_GadgetObjectField_Fragment = {
    __typename?: "GadgetObjectField";
    name: string;
    apiIdentifier: string;
    fieldType: GadgetFieldType;
    requiredArgumentForInput: boolean;
    configuration: {
        __typename: "GadgetBelongsToConfig";
        fieldType: GadgetFieldType;
        relatedModel?: {
            __typename?: "GadgetModel";
            apiIdentifier: string;
        } | null;
    } | {
        __typename: "GadgetDateTimeConfig";
        fieldType: GadgetFieldType;
    } | {
        __typename: "GadgetEnumConfig";
        allowMultiple: boolean;
        fieldType: GadgetFieldType;
        options: Array<{
            __typename?: "GadgetEnumOption";
            name: string;
            color: string;
        }>;
    } | {
        __typename: "GadgetGenericFieldConfig";
        fieldType: GadgetFieldType;
    } | {
        __typename: "GadgetHasManyConfig";
        fieldType: GadgetFieldType;
        relatedModel?: {
            __typename?: "GadgetModel";
            apiIdentifier: string;
        } | null;
    } | {
        __typename: "GadgetObjectFieldConfig";
        fieldType: GadgetFieldType;
    };
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
                configuration: {
                    __typename: "GadgetBelongsToConfig";
                    fieldType: GadgetFieldType;
                    relatedModel?: {
                        __typename?: "GadgetModel";
                        apiIdentifier: string;
                    } | null;
                } | {
                    __typename: "GadgetDateTimeConfig";
                    fieldType: GadgetFieldType;
                } | {
                    __typename: "GadgetEnumConfig";
                    allowMultiple: boolean;
                    fieldType: GadgetFieldType;
                    options: Array<{
                        __typename?: "GadgetEnumOption";
                        name: string;
                        color: string;
                    }>;
                } | {
                    __typename: "GadgetGenericFieldConfig";
                    fieldType: GadgetFieldType;
                } | {
                    __typename: "GadgetHasManyConfig";
                    fieldType: GadgetFieldType;
                    relatedModel?: {
                        __typename?: "GadgetModel";
                        apiIdentifier: string;
                    } | null;
                } | {
                    __typename: "GadgetObjectFieldConfig";
                    fieldType: GadgetFieldType;
                };
            }>;
        } | null;
    };
};
type SubFields_GadgetModelField_Fragment = {
    __typename?: "GadgetModelField";
    configuration: {
        __typename: "GadgetBelongsToConfig";
    } | {
        __typename: "GadgetDateTimeConfig";
    } | {
        __typename: "GadgetEnumConfig";
    } | {
        __typename: "GadgetGenericFieldConfig";
    } | {
        __typename: "GadgetHasManyConfig";
    } | {
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
            configuration: {
                __typename: "GadgetBelongsToConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel";
                    apiIdentifier: string;
                } | null;
            } | {
                __typename: "GadgetDateTimeConfig";
                fieldType: GadgetFieldType;
            } | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                fieldType: GadgetFieldType;
                options: Array<{
                    __typename?: "GadgetEnumOption";
                    name: string;
                    color: string;
                }>;
            } | {
                __typename: "GadgetGenericFieldConfig";
                fieldType: GadgetFieldType;
            } | {
                __typename: "GadgetHasManyConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel";
                    apiIdentifier: string;
                } | null;
            } | {
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
                    configuration: {
                        __typename: "GadgetBelongsToConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel";
                            apiIdentifier: string;
                        } | null;
                    } | {
                        __typename: "GadgetDateTimeConfig";
                        fieldType: GadgetFieldType;
                    } | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        fieldType: GadgetFieldType;
                        options: Array<{
                            __typename?: "GadgetEnumOption";
                            name: string;
                            color: string;
                        }>;
                    } | {
                        __typename: "GadgetGenericFieldConfig";
                        fieldType: GadgetFieldType;
                    } | {
                        __typename: "GadgetHasManyConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel";
                            apiIdentifier: string;
                        } | null;
                    } | {
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
                            configuration: {
                                __typename: "GadgetBelongsToConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel";
                                    apiIdentifier: string;
                                } | null;
                            } | {
                                __typename: "GadgetDateTimeConfig";
                                fieldType: GadgetFieldType;
                            } | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                fieldType: GadgetFieldType;
                                options: Array<{
                                    __typename?: "GadgetEnumOption";
                                    name: string;
                                    color: string;
                                }>;
                            } | {
                                __typename: "GadgetGenericFieldConfig";
                                fieldType: GadgetFieldType;
                            } | {
                                __typename: "GadgetHasManyConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel";
                                    apiIdentifier: string;
                                } | null;
                            } | {
                                __typename: "GadgetObjectFieldConfig";
                                fieldType: GadgetFieldType;
                            };
                        }>;
                    };
                }>;
            };
        }>;
    };
};
type SubFields_GadgetObjectField_Fragment = {
    __typename?: "GadgetObjectField";
    configuration: {
        __typename: "GadgetBelongsToConfig";
    } | {
        __typename: "GadgetDateTimeConfig";
    } | {
        __typename: "GadgetEnumConfig";
    } | {
        __typename: "GadgetGenericFieldConfig";
    } | {
        __typename: "GadgetHasManyConfig";
    } | {
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
            configuration: {
                __typename: "GadgetBelongsToConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel";
                    apiIdentifier: string;
                } | null;
            } | {
                __typename: "GadgetDateTimeConfig";
                fieldType: GadgetFieldType;
            } | {
                __typename: "GadgetEnumConfig";
                allowMultiple: boolean;
                fieldType: GadgetFieldType;
                options: Array<{
                    __typename?: "GadgetEnumOption";
                    name: string;
                    color: string;
                }>;
            } | {
                __typename: "GadgetGenericFieldConfig";
                fieldType: GadgetFieldType;
            } | {
                __typename: "GadgetHasManyConfig";
                fieldType: GadgetFieldType;
                relatedModel?: {
                    __typename?: "GadgetModel";
                    apiIdentifier: string;
                } | null;
            } | {
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
                    configuration: {
                        __typename: "GadgetBelongsToConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel";
                            apiIdentifier: string;
                        } | null;
                    } | {
                        __typename: "GadgetDateTimeConfig";
                        fieldType: GadgetFieldType;
                    } | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        fieldType: GadgetFieldType;
                        options: Array<{
                            __typename?: "GadgetEnumOption";
                            name: string;
                            color: string;
                        }>;
                    } | {
                        __typename: "GadgetGenericFieldConfig";
                        fieldType: GadgetFieldType;
                    } | {
                        __typename: "GadgetHasManyConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel";
                            apiIdentifier: string;
                        } | null;
                    } | {
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
                            configuration: {
                                __typename: "GadgetBelongsToConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel";
                                    apiIdentifier: string;
                                } | null;
                            } | {
                                __typename: "GadgetDateTimeConfig";
                                fieldType: GadgetFieldType;
                            } | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                fieldType: GadgetFieldType;
                                options: Array<{
                                    __typename?: "GadgetEnumOption";
                                    name: string;
                                    color: string;
                                }>;
                            } | {
                                __typename: "GadgetGenericFieldConfig";
                                fieldType: GadgetFieldType;
                            } | {
                                __typename: "GadgetHasManyConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel";
                                    apiIdentifier: string;
                                } | null;
                            } | {
                                __typename: "GadgetObjectFieldConfig";
                                fieldType: GadgetFieldType;
                            };
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
                    configuration: {
                        __typename: "GadgetBelongsToConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel";
                            apiIdentifier: string;
                        } | null;
                    } | {
                        __typename: "GadgetDateTimeConfig";
                        fieldType: GadgetFieldType;
                    } | {
                        __typename: "GadgetEnumConfig";
                        allowMultiple: boolean;
                        fieldType: GadgetFieldType;
                        options: Array<{
                            __typename?: "GadgetEnumOption";
                            name: string;
                            color: string;
                        }>;
                    } | {
                        __typename: "GadgetGenericFieldConfig";
                        fieldType: GadgetFieldType;
                    } | {
                        __typename: "GadgetHasManyConfig";
                        fieldType: GadgetFieldType;
                        relatedModel?: {
                            __typename?: "GadgetModel";
                            apiIdentifier: string;
                        } | null;
                    } | {
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
                            configuration: {
                                __typename: "GadgetBelongsToConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel";
                                    apiIdentifier: string;
                                } | null;
                            } | {
                                __typename: "GadgetDateTimeConfig";
                                fieldType: GadgetFieldType;
                            } | {
                                __typename: "GadgetEnumConfig";
                                allowMultiple: boolean;
                                fieldType: GadgetFieldType;
                                options: Array<{
                                    __typename?: "GadgetEnumOption";
                                    name: string;
                                    color: string;
                                }>;
                            } | {
                                __typename: "GadgetGenericFieldConfig";
                                fieldType: GadgetFieldType;
                            } | {
                                __typename: "GadgetHasManyConfig";
                                fieldType: GadgetFieldType;
                                relatedModel?: {
                                    __typename?: "GadgetModel";
                                    apiIdentifier: string;
                                } | null;
                            } | {
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
                                    configuration: {
                                        __typename: "GadgetBelongsToConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                            __typename?: "GadgetModel";
                                            apiIdentifier: string;
                                        } | null;
                                    } | {
                                        __typename: "GadgetDateTimeConfig";
                                        fieldType: GadgetFieldType;
                                    } | {
                                        __typename: "GadgetEnumConfig";
                                        allowMultiple: boolean;
                                        fieldType: GadgetFieldType;
                                        options: Array<{
                                            __typename?: "GadgetEnumOption";
                                            name: string;
                                            color: string;
                                        }>;
                                    } | {
                                        __typename: "GadgetGenericFieldConfig";
                                        fieldType: GadgetFieldType;
                                    } | {
                                        __typename: "GadgetHasManyConfig";
                                        fieldType: GadgetFieldType;
                                        relatedModel?: {
                                            __typename?: "GadgetModel";
                                            apiIdentifier: string;
                                        } | null;
                                    } | {
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
                                            configuration: {
                                                __typename: "GadgetBelongsToConfig";
                                                fieldType: GadgetFieldType;
                                                relatedModel?: {
                                                    __typename?: "GadgetModel";
                                                    apiIdentifier: string;
                                                } | null;
                                            } | {
                                                __typename: "GadgetDateTimeConfig";
                                                fieldType: GadgetFieldType;
                                            } | {
                                                __typename: "GadgetEnumConfig";
                                                allowMultiple: boolean;
                                                fieldType: GadgetFieldType;
                                                options: Array<{
                                                    __typename?: "GadgetEnumOption";
                                                    name: string;
                                                    color: string;
                                                }>;
                                            } | {
                                                __typename: "GadgetGenericFieldConfig";
                                                fieldType: GadgetFieldType;
                                            } | {
                                                __typename: "GadgetHasManyConfig";
                                                fieldType: GadgetFieldType;
                                                relatedModel?: {
                                                    __typename?: "GadgetModel";
                                                    apiIdentifier: string;
                                                } | null;
                                            } | {
                                                __typename: "GadgetObjectFieldConfig";
                                                fieldType: GadgetFieldType;
                                            };
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
export type RolesMetadataQueryVariables = Exact<{
    [key: string]: never;
}>;
export type RolesMetadataQuery = {
    __typename?: "Query";
    gadgetMeta: {
        __typename?: "GadgetApplicationMeta";
        roles: Array<{
            __typename?: "GadgetRole";
            name: string;
            selectable: boolean;
        }>;
    };
};
export declare const FieldMetadataFragmentDoc: DocumentNode<FieldMetadataFragment, unknown>;
export declare const SubFieldsFragmentDoc: DocumentNode<SubFieldsFragment, unknown>;
export declare const GetModelMetadataDocument: DocumentNode<GetModelMetadataQuery, Exact<{
    apiIdentifier: Scalars["String"]["input"];
}>>;
export declare const ModelActionMetadataDocument: DocumentNode<ModelActionMetadataQuery, Exact<{
    model: Scalars["String"]["input"];
    action: Scalars["String"]["input"];
}>>;
export declare const RolesMetadataDocument: DocumentNode<RolesMetadataQuery, Exact<{
    [key: string]: never;
}>>;
export {};
