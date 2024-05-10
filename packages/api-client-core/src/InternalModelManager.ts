import { Call, Var, compileWithVariableValues } from "tiny-graphql-query-compiler";
import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import {
  GadgetClientError,
  GadgetOperationError,
  assert,
  assertMutationSuccess,
  assertNullableOperationSuccess,
  assertOperationSuccess,
  camelize,
  capitalizeIdentifier,
  hydrateConnection,
  hydrateRecord,
  hydrateRecordArray,
} from "./support.js";
import type { InternalFieldSelection, InternalFindListOptions, InternalFindManyOptions, InternalFindOneOptions } from "./types.js";

const internalErrorsDetails = {
  code: true,
  message: true,
  ["...on InvalidRecordError"]: {
    validationErrors: {
      apiIdentifier: true,
      message: true,
    },
    model: {
      apiIdentifier: true,
    },
    record: true,
  },
};

const internalHydrationPlan = (modelApiIdentifer: string) => ({
  gadgetMeta: {
    hydrations: Call({
      modelName: modelApiIdentifer,
    }),
  },
});

const internalFindOneQuery = (apiIdentifier: string, id: string, select?: string[]) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "query",
    name: `InternalFind${capitalizedApiIdentifier}`,
    fields: {
      internal: {
        [apiIdentifier]: Call({
          id: Var({ value: id, type: "GadgetID!" }),
          select: Var({ value: select, type: "[String!]" }),
        }),
      },
      ...internalHydrationPlan(apiIdentifier),
    },
  });
};

const internalFindListVariables = (capitalizedApiIdentifier: string, options?: InternalFindListOptions) => {
  return {
    search: options?.search ? Var({ value: options?.search, type: "String" }) : undefined,
    sort: options?.sort ? Var({ value: options?.sort, type: `[${capitalizedApiIdentifier}Sort!]` }) : undefined,
    filter: options?.filter ? Var({ value: options?.filter, type: `[${capitalizedApiIdentifier}Filter!]` }) : undefined,
    select: options?.select ? Var({ value: formatInternalSelectVariable(options?.select), type: `[String!]` }) : undefined,
  };
};

export const internalFindFirstQuery = (apiIdentifier: string, options?: InternalFindListOptions) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, options);

  return compileWithVariableValues({
    type: "query",
    name: `InternalFindFirst${capitalizedApiIdentifier}`,
    fields: {
      internal: {
        [`list${capitalizedApiIdentifier}`]: Call(
          {
            ...defaultVariables,
            first: Var({ value: 1, type: "Int" }),
          },
          {
            edges: {
              node: true,
            },
          }
        ),
      },
      ...internalHydrationPlan(apiIdentifier),
    },
  });
};

export const internalFindManyQuery = (apiIdentifier: string, options?: InternalFindManyOptions) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, options);

  return compileWithVariableValues({
    type: "query",
    name: `InternalFindMany${capitalizedApiIdentifier}`,
    fields: {
      internal: {
        [`list${capitalizedApiIdentifier}`]: Call(
          {
            ...defaultVariables,
            after: Var({ value: options?.after, type: "String" }),
            before: Var({ value: options?.before, type: "String" }),
            first: Var({ value: options?.first, type: "Int" }),
            last: Var({ value: options?.last, type: "Int" }),
          },
          {
            pageInfo: { hasNextPage: true, hasPreviousPage: true, startCursor: true, endCursor: true },
            edges: { cursor: true, node: true },
          }
        ),
      },
      ...internalHydrationPlan(apiIdentifier),
    },
  });
};

export const internalCreateMutation = (apiIdentifier: string, record: RecordData) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalCreate${capitalizedApiIdentifier}`,
    fields: {
      internal: {
        [`create${capitalizedApiIdentifier}`]: Call(
          {
            [apiIdentifier]: Var({ value: record, type: `Internal${capitalizedApiIdentifier}Input` }),
          },
          {
            success: true,
            ...internalErrorsDetails,
            [apiIdentifier]: true,
          }
        ),
      },
      ...internalHydrationPlan(apiIdentifier),
    },
  });
};

export const internalBulkCreateMutation = (apiIdentifier: string, pluralApiIdentifier: string, records: RecordData[]) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  const capitalizedPluralApiIdentifier = capitalizeIdentifier(pluralApiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalBulkCreate${capitalizedPluralApiIdentifier}`,
    fields: {
      internal: {
        [`bulkCreate${capitalizedPluralApiIdentifier}`]: Call(
          {
            [pluralApiIdentifier]: Var({ value: records, type: `[Internal${capitalizedApiIdentifier}Input]!` }),
          },
          {
            success: true,
            ...internalErrorsDetails,
            [pluralApiIdentifier]: true,
          }
        ),
      },
      ...internalHydrationPlan(apiIdentifier),
    },
  });
};

export const internalUpdateMutation = (apiIdentifier: string, id: string, record: RecordData) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalUpdate${capitalizedApiIdentifier}`,
    fields: {
      internal: {
        [`update${capitalizedApiIdentifier}`]: Call(
          {
            id: Var({ value: id, type: "GadgetID!" }),
            [apiIdentifier]: Var({ value: record, type: `Internal${capitalizedApiIdentifier}Input` }),
          },
          {
            success: true,
            ...internalErrorsDetails,
            [apiIdentifier]: true,
          }
        ),
      },
      ...internalHydrationPlan(apiIdentifier),
    },
  });
};

export const internalDeleteMutation = (apiIdentifier: string, id: string) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalDelete${capitalizedApiIdentifier}`,
    fields: {
      internal: {
        [`delete${capitalizedApiIdentifier}`]: Call(
          {
            id: Var({ value: id, type: "GadgetID!" }),
          },
          {
            success: true,
            ...internalErrorsDetails,
          }
        ),
      },
    },
  });
};

export const internalDeleteManyMutation = (
  apiIdentifier: string,
  options?: { search?: string; filter?: Record<string, any>[] | Record<string, any> }
) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalDeleteMany${capitalizedApiIdentifier}`,
    fields: {
      internal: {
        [`deleteMany${capitalizedApiIdentifier}`]: Call(
          {
            search: Var({ value: options?.search, type: "String" }),
            filter: Var({ value: options?.filter, type: `[${capitalizedApiIdentifier}Filter!]` }),
          },
          {
            success: true,
            ...internalErrorsDetails,
          }
        ),
      },
    },
  });
};

/** The fields for a given record to send to the backend */
export type RecordData = Record<string, any>;

/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
export class InternalModelManager {
  private readonly capitalizedApiIdentifier: string;

  constructor(
    private readonly apiIdentifier: string,
    readonly connection: GadgetConnection,
    readonly options?: { pluralApiIdentifier: string; hasAmbiguousIdentifiers?: boolean }
  ) {
    this.capitalizedApiIdentifier = camelize(apiIdentifier);
  }

  private validateRecord(record: RecordData) {
    if (!this.options || !this.options.hasAmbiguousIdentifiers) {
      return true;
    }
    const keys = Object.keys(record);

    // any keys that aren't the apiIdentifier are invalid
    return keys.every((key) => key === this.apiIdentifier);
  }

  private getRecordFromData(record: RecordData, functionName: string) {
    let recordData = record;

    if (!this.validateRecord(record)) {
      throw new GadgetOperationError(
        `Invalid arguments found in variables. Did you mean to use ${functionName}({ ${this.apiIdentifier}: { ... } })?`,
        "GGT_INVALID_RECORD_DATA"
      );
    }

    if (this.apiIdentifier in record) {
      recordData = recordData[this.apiIdentifier];
    }

    return recordData;
  }

  /**
   * Find a single record by ID. Throws an error by default if the record with the given ID is not found.
   *
   * @example
   * // returns post with id 10
   * const post = await api.internal.post.findOne(10);
   *
   * @param id The ID of the record to find
   * @param options Options for the find operation
   * @param throwOnEmptyData Whether or not to throw an error if the record is not found
   * @returns The record, if found
   */
  async findOne(id: string, options?: InternalFindOneOptions, throwOnEmptyData = true): Promise<GadgetRecord<RecordData>> {
    const plan = internalFindOneQuery(this.apiIdentifier, id, formatInternalSelectVariable(options?.select));
    const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
    const result = assertSuccess(response, ["internal", this.apiIdentifier]);
    return hydrateRecord(response, result);
  }

  /**
   * Find a single record by ID. Returns null if the record doesn't exist.
   *
   * @example
   * // returns post with id 10 if it exists, null otherwise
   * const post = await api.internal.post.maybeFindOne(10);
   *
   * @param id The ID of the record to find
   * @param options Options for the find operation
   * @returns The record, if found, null otherwise
   */
  async maybeFindOne(id: string, options?: InternalFindOneOptions): Promise<GadgetRecord<RecordData> | null> {
    const record = await this.findOne(id, options, false);
    return record.isEmpty() ? null : record;
  }

  /**
   * Find a list of records matching the given options
   *
   * @example
   * // returns the first page of published posts
   * const posts = await api.internal.post.findMany({ filter: { published: { equals: true }}});
   *
   * @param options Options for the find operation, like sorts, filters, and pagination
   * @returns The record, if found, null otherwise
   */
  async findMany(options?: InternalFindManyOptions): Promise<GadgetRecordList<any>> {
    const plan = internalFindManyQuery(this.apiIdentifier, options);
    const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const connection = assertNullableOperationSuccess(response, ["internal", `list${this.capitalizedApiIdentifier}`]);
    const records = hydrateConnection(response, connection);

    return GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
  }

  /**
   * Find the first record matching the given options. Throws an error by default if no records matching the options are found.
   *
   * @example
   * // returns the first published post or throws if none found
   * const post = await api.internal.post.findFirst({ filter: { published: { equals: true }}});
   *
   * @param options Options for the find operation, like sorts, filters, and pagination
   * @returns The first record matching the options
   */
  async findFirst(options?: InternalFindListOptions, throwOnEmptyData = true): Promise<GadgetRecord<RecordShape>> {
    const plan = internalFindFirstQuery(this.apiIdentifier, options);
    const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();

    let connection;
    if (throwOnEmptyData === false) {
      // If this is a nullable operation, don't throw errors on empty
      connection = assertNullableOperationSuccess(response, ["internal", `list${this.capitalizedApiIdentifier}`]);
    } else {
      // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
      // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
      connection = assertOperationSuccess(response, ["internal", `list${this.capitalizedApiIdentifier}`], throwOnEmptyData);
    }

    const records = hydrateConnection(response, connection);
    const recordList = GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
    return recordList[0];
  }

  /**
   * Find the first record matching the given options. Returns null if no records matching the options are found.
   *
   * @example
   * // returns the first published post or null if none are published
   * const post = await api.internal.post.maybeFindFirst({ filter: { published: { equals: true }}});
   *
   * @param options Options for the find operation, like sorts, filters, and pagination
   * @returns The first record matching the options, null otherwise
   */
  async maybeFindFirst(options?: InternalFindListOptions): Promise<GadgetRecord<RecordShape> | null> {
    return await this.findFirst(options, false);
  }

  /**
   * Creates a new record in the backend datastore for this model using the Internal API
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // creates a new post record in the database
   * const post = await api.internal.post.create({ title: "A new post" });
   *
   * @param record The data for the record to create
   * @returns The created record
   */
  async create(record: RecordData): Promise<GadgetRecord<RecordShape>> {
    const plan = internalCreateMutation(this.apiIdentifier, this.getRecordFromData(record, "create"));
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const result = assertMutationSuccess(response, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return hydrateRecord(response, result[this.apiIdentifier]);
  }

  /**
   * Creates a set of new records in the backend datastore for this model using the Internal API. Creates in bulk within the same database transaction for performance.
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // creates 2 new post records in the database
   * const posts = await api.internal.post.bulkCreate([
   *   { title: "A new post" },
   *   { title: "Another new post" }
   * ]);
   *
   * @param record An array of data for the records to create
   * @returns The created records
   */
  async bulkCreate(records: RecordData[]): Promise<GadgetRecord<RecordShape>[]> {
    if (!this.options?.pluralApiIdentifier) {
      throw new GadgetClientError("Cannot perform bulkCreate without a pluralApiIdentifier");
    }

    const capitalizedPluralApiIdentifier = capitalizeIdentifier(this.options.pluralApiIdentifier);
    const plan = internalBulkCreateMutation(this.apiIdentifier, this.options.pluralApiIdentifier, records);
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const result = assertMutationSuccess(response, ["internal", `bulkCreate${capitalizedPluralApiIdentifier}`]);
    return hydrateRecordArray(response, result[this.options.pluralApiIdentifier]);
  }

  /**
   * Updates an existing record in the backend datastore for this model using the Internal API
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // updates post with id 10 in the database
   * const post = await api.internal.post.update(10, { title: "A new post title" });
   *
   * @param record The data for the record to update
   * @returns The updated record
   */
  async update(id: string, record: RecordData): Promise<GadgetRecord<RecordShape>> {
    assert(id, `Can't update a record without an ID passed`);
    const plan = internalUpdateMutation(this.apiIdentifier, id, this.getRecordFromData(record, "update"));
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const result = assertMutationSuccess(response, ["internal", `update${this.capitalizedApiIdentifier}`]);

    return hydrateRecord(response, result[this.apiIdentifier]);
  }

  /**
   * Deletes an existing record in the backend datastore for this model using the Internal API
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // removes the post with id 10 in the database
   * await api.internal.post.delete(10);
   *
   * @param id The id of the record to delete
   */
  async delete(id: string): Promise<void> {
    assert(id, `Can't delete a record without an ID`);
    const plan = internalDeleteMutation(this.apiIdentifier, id);
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    assertMutationSuccess(response, ["internal", `delete${this.capitalizedApiIdentifier}`]);
  }

  /**
   * Deletes the records in the backend datastore that match the given filter criteria. Uses the Internal API.
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // removes all unpublished posts from the database
   * await api.internal.post.deleteMany({filter: { published: { equals: false } } });
   *
   * @param options Search and filter options for the records to delete
   */
  async deleteMany(options?: { search?: string; filter?: Record<string, any> | Record<string, any>[] }): Promise<void> {
    const plan = internalDeleteManyMutation(this.apiIdentifier, options);
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    assertMutationSuccess(response, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}

function formatInternalSelectVariable(select: InternalFieldSelection | undefined): undefined | string[] {
  if (!select) return;
  if (Array.isArray(select)) return select;
  const result: string[] = [];
  for (const [key, value] of Object.entries(select)) {
    if (value) {
      result.push(key);
    }
  }
  return result;
}
