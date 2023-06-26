import { query } from "gql-query-builder";
import type { GadgetConnection } from "./GadgetConnection";
import type { GadgetRecord, RecordShape } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import type { GadgetTransaction } from "./GadgetTransaction";
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
} from "./support";

const internalErrorsDetails = `
fragment InternalErrorsDetails on ExecutionError {
  code
  message
  ...on InvalidRecordError {
    validationErrors {
      apiIdentifier
      message
    }
    model {
      apiIdentifier
    }
    record
  }
}
`;

const internalHydrationPlan = (modelApiIdentifer: string) => `
  gadgetMeta {
    hydrations(modelName: "${modelApiIdentifer}")
  }
`;

export const internalFindOneQuery = (apiIdentifier: string) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  return `
    query InternalFind${capitalizedApiIdentifier}($id: GadgetID!, $select: [String!]) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        ${apiIdentifier}(id: $id, select: $select)
      }
    }
    `;
};

/**
 * A list of fields to select from the internal API
 * Matches the format of the Public API `select` option, but only allows going one level deep -- no relationships can be selected using the internal API.
 *
 * Supports passing a list of strings as a shorthand.
 *
 * @example
 * { fieldA: true, fieldB: true, fieldC: false }
 *
 * @example
 * ['fieldA', 'fieldB']
 */
export type InternalFieldSelection = string[] | { [field: string]: boolean | null | undefined };

/** Options for the api functions that return one record on an InternalModelManager */
export interface InternalFindOneOptions {
  /**
   * What fields to retrieve from the API for this API call
   **/
  select?: InternalFieldSelection;
}

/** Options for functions that query a list of records on an InternalModelManager */
export interface InternalFindListOptions {
  /**
   * A string to search for within all the stringlike fields of the records
   * Matches the behavior of the Public API `search` option
   **/
  search?: string;
  /**
   * How to sort the returned records
   * Matches the format and behavior of the Public API `sort` option
   *
   * @example
   * {
   *   sort: { publishedAt: "Descending" }
   * }
   **/
  sort?: Record<string, "Ascending" | "Descending"> | Record<string, "Ascending" | "Descending">[];
  /**
   * Only return records matching this filter
   * Matches the format and behavior of the Public API `filter` option
   *
   * @example
   * {
   *   filter: { published: { equals: true } }
   * }
   * */
  filter?: Record<string, any>;
  /**
   * What fields to retrieve from the API for this API call
   **/
  select?: InternalFieldSelection;
}

/** Options for functions that return a paginated list of records from an InternalModelManager */
export interface InternalFindManyOptions extends InternalFindListOptions {
  /**
   * A count of records to return
   * Often used in tandem with the `after` option for GraphQL relay-style cursor pagination
   * Matches the pagination style and behavior of the Public API
   **/
  first?: number;
  /**
   * The `after` cursor from the GraphQL Relay pagination spec
   * Matches the pagination style and behavior of the Public API
   **/
  after?: string;
  /**
   * A count of records to return
   * Often used in tandem with the `before` option for GraphQL relay-style cursor pagination
   * Matches the pagination style and behavior of the Public API
   **/
  last?: number;
  /**
   * The `before` cursor from the GraphQL Relay pagination spec
   * Matches the pagination style and behavior of the Public API
   **/
  before?: string;
}

const internalFindListVariables = (capitalizedApiIdentifier: string, options?: InternalFindListOptions) => {
  return {
    ...(options?.search && { search: { value: options?.search, type: "String", required: false } }),
    ...(options?.sort && { sort: { value: options?.sort, type: `${capitalizedApiIdentifier}Sort!`, list: true } }),
    ...(options?.filter && { filter: { value: options?.filter, type: `${capitalizedApiIdentifier}Filter!`, list: true } }),
    ...(options?.select && { select: { value: formatInternalSelectVariable(options?.select), type: `String!`, list: true } }),
  };
};

export const internalFindFirstQuery = (apiIdentifier: string, options?: InternalFindListOptions) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, options);

  return query(
    [
      {
        operation: "internal",
        fields: [
          {
            operation: `list${capitalizedApiIdentifier}`,
            fields: [
              {
                edges: ["node"],
              },
            ],
            variables: {
              ...defaultVariables,
              first: { value: 1, type: "Int" },
            },
          },
        ],
      },
    ],
    null,
    { operationName: `InternalFindFirst${capitalizedApiIdentifier}` }
  );
};

export const internalFindManyQuery = (apiIdentifier: string, options?: InternalFindManyOptions) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, options);

  return query(
    [
      {
        operation: "internal",
        fields: [
          {
            operation: `list${capitalizedApiIdentifier}`,
            fields: [
              {
                pageInfo: ["hasNextPage", "hasPreviousPage", "startCursor", "endCursor"],
              },
              {
                edges: ["cursor", "node"],
              },
            ],
            variables: {
              ...defaultVariables,
              after: { value: options?.after, type: "String" },
              before: { value: options?.before, type: "String" },
              first: { value: options?.first, type: "Int" },
              last: { value: options?.last, type: "Int" },
            },
          },
        ],
      },
    ],
    null,
    { operationName: `InternalFindMany${capitalizedApiIdentifier}` }
  );
};

export const internalCreateMutation = (apiIdentifier: string) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  return `
    ${internalErrorsDetails}

    mutation InternalCreate${capitalizedApiIdentifier}($record: Internal${capitalizedApiIdentifier}Input) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        create${capitalizedApiIdentifier}(${apiIdentifier}: $record) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${apiIdentifier}
        }
      }
    }
  `;
};

export const internalBulkCreateMutation = (apiIdentifier: string, pluralApiIdentifier: string) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  const capitalizedPluralApiIdentifier = capitalizeIdentifier(pluralApiIdentifier);

  return `
    ${internalErrorsDetails}

    mutation InternalBulkCreate${capitalizedPluralApiIdentifier}($records: [Internal${capitalizedApiIdentifier}Input]!) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        bulkCreate${capitalizedPluralApiIdentifier}(${pluralApiIdentifier}: $records) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${pluralApiIdentifier}
        }
      }
    }
  `;
};

export const internalUpdateMutation = (apiIdentifier: string) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  return `
    ${internalErrorsDetails}

    mutation InternalUpdate${capitalizedApiIdentifier}($id: GadgetID!, $record: Internal${capitalizedApiIdentifier}Input) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        update${capitalizedApiIdentifier}(id: $id, ${apiIdentifier}: $record) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${apiIdentifier}
        }
      }
    }
  `;
};

export const internalDeleteMutation = (apiIdentifier: string) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  return `
    ${internalErrorsDetails}

    mutation InternalDelete${capitalizedApiIdentifier}($id: GadgetID!) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        delete${capitalizedApiIdentifier}(id: $id) {
          success
          errors {
            ... InternalErrorsDetails
          }
        }
      }
    }
  `;
};

export const internalDeleteManyMutation = (apiIdentifier: string) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  return `
    ${internalErrorsDetails}

    mutation InternalDeleteMany${capitalizedApiIdentifier}(
      $search: String
      $filter: [${capitalizedApiIdentifier}Filter!]
    ) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        deleteMany${capitalizedApiIdentifier}(search: $search, filter: $filter) {
          success
          errors {
            ... InternalErrorsDetails
          }
        }
      }
    }
  `;
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
    const response = await this.connection.currentClient
      .query(internalFindOneQuery(this.apiIdentifier), { id, select: formatInternalSelectVariable(options?.select) })
      .toPromise();
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
    return await this.transaction(async (transaction) => {
      const response = await transaction.client
        .mutation(internalCreateMutation(this.apiIdentifier), {
          record: this.getRecordFromData(record, "create"),
        })
        .toPromise();
      const result = assertMutationSuccess(response, ["internal", `create${this.capitalizedApiIdentifier}`]);
      return hydrateRecord(response, result[this.apiIdentifier]);
    });
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
    return await this.transaction(async (transaction) => {
      if (!this.options?.pluralApiIdentifier) {
        throw new GadgetClientError("Cannot perform bulkCreate without a pluralApiIdentifier");
      }

      const capitalizedPluralApiIdentifier = capitalizeIdentifier(this.options.pluralApiIdentifier);
      const response = await transaction.client
        .mutation(internalBulkCreateMutation(this.apiIdentifier, this.options.pluralApiIdentifier), {
          records,
        })
        .toPromise();
      const result = assertMutationSuccess(response, ["internal", `bulkCreate${capitalizedPluralApiIdentifier}`]);
      return hydrateRecordArray(response, result[this.options.pluralApiIdentifier]);
    });
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
    return await this.transaction(async (transaction) => {
      const response = await transaction.client
        .mutation(internalUpdateMutation(this.apiIdentifier), {
          id,
          record: this.getRecordFromData(record, "update"),
        })
        .toPromise();
      const result = assertMutationSuccess(response, ["internal", `update${this.capitalizedApiIdentifier}`]);

      return hydrateRecord(response, result[this.apiIdentifier]);
    });
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
    return await this.transaction(async (transaction) => {
      const response = await transaction.client.mutation(internalDeleteMutation(this.apiIdentifier), { id }).toPromise();
      assertMutationSuccess(response, ["internal", `delete${this.capitalizedApiIdentifier}`]);
    });
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
  async deleteMany(options?: { search?: string; filter?: RecordData }): Promise<void> {
    return await this.transaction(async (transaction) => {
      const response = await transaction.client.mutation(internalDeleteManyMutation(this.apiIdentifier), options).toPromise();
      assertMutationSuccess(response, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
    });
  }

  /** @private */
  async transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T> {
    return await this.connection.transaction(callback);
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
