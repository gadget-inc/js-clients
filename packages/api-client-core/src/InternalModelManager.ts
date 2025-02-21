import { Call, Var, compileWithVariableValues } from "tiny-graphql-query-compiler";
import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import {
  ErrorsSelection,
  GadgetClientError,
  GadgetOperationError,
  assert,
  assertMutationSuccess,
  assertNullableOperationSuccess,
  assertOperationSuccess,
  camelize,
  capitalizeIdentifier,
  filterTypeName,
  hydrateConnection,
  hydrateRecord,
  hydrateRecordArray,
  hydrationSelection,
  namespaceDataPath,
  namespacedGraphQLTypeName,
  namespacify,
  sortTypeName,
} from "./support.js";
import type {
  AnyFilter,
  InternalFieldSelection,
  InternalFindListOptions,
  InternalFindManyOptions,
  InternalFindOneOptions,
} from "./types.js";

export const internalFindOneQuery = (apiIdentifier: string, id: string, namespace: string[], select?: InternalFieldSelection) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "query",
    name: `InternalFind${capitalizedApiIdentifier}`,
    fields: {
      internal: namespacify(namespace, {
        [apiIdentifier]: Call({
          id: Var({ value: id, type: "GadgetID!" }),
          select: Var({ value: formatInternalSelectVariable(select), type: `[String!]` }),
        }),
      }),
      ...hydrationSelection(apiIdentifier, namespace),
    },
  });
};

const internalFindListVariables = (apiIdentifier: string, namespace: string[], options?: InternalFindListOptions) => {
  return {
    search: options?.search ? Var({ value: options?.search, type: "String" }) : undefined,
    sort: options?.sort ? Var({ value: options?.sort, type: `[${sortTypeName(apiIdentifier, namespace)}!]` }) : undefined,
    filter: options?.filter ? Var({ value: options?.filter, type: `[${filterTypeName(apiIdentifier, namespace)}!]` }) : undefined,
    select: options?.select ? Var({ value: formatInternalSelectVariable(options?.select), type: `[String!]` }) : undefined,
  };
};

export const internalFindFirstQuery = (apiIdentifier: string, namespace: string[], options?: InternalFindListOptions) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, namespace, options);

  return compileWithVariableValues({
    type: "query",
    name: `InternalFindFirst${capitalizedApiIdentifier}`,
    fields: {
      internal: namespacify(namespace, {
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
      }),
      ...hydrationSelection(apiIdentifier, namespace),
    },
  });
};

export const internalFindManyQuery = (apiIdentifier: string, namespace: string[], options?: InternalFindManyOptions) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
  const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, namespace, options);

  return compileWithVariableValues({
    type: "query",
    name: `InternalFindMany${capitalizedApiIdentifier}`,
    fields: {
      internal: namespacify(namespace, {
        [`list${capitalizedApiIdentifier}`]: Call(
          {
            ...defaultVariables,
            after: options?.after ? Var({ value: options.after, type: "String" }) : undefined,
            before: options?.before ? Var({ value: options?.before, type: "String" }) : undefined,
            first: options?.first ? Var({ value: options?.first, type: "Int" }) : undefined,
            last: options?.last ? Var({ value: options?.last, type: "Int" }) : undefined,
          },
          {
            pageInfo: { hasNextPage: true, hasPreviousPage: true, startCursor: true, endCursor: true },
            edges: { cursor: true, node: true },
          }
        ),
      }),
      ...hydrationSelection(apiIdentifier, namespace),
    },
  });
};

const internalInputTypeName = (apiIdentifier: string, namespace: string[]) =>
  `Internal${namespacedGraphQLTypeName(apiIdentifier, namespace)}Input`;

export const internalCreateMutation = (apiIdentifier: string, namespace: string[], record: RecordData) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalCreate${capitalizedApiIdentifier}`,
    fields: {
      internal: namespacify(namespace, {
        [`create${capitalizedApiIdentifier}`]: Call(
          {
            [apiIdentifier]: Var({ value: record, type: internalInputTypeName(apiIdentifier, namespace) }),
          },
          {
            success: true,
            ...ErrorsSelection,
            [apiIdentifier]: true,
          }
        ),
      }),
      ...hydrationSelection(apiIdentifier, namespace),
    },
  });
};

export const internalBulkCreateMutation = (
  apiIdentifier: string,
  pluralApiIdentifier: string,
  namespace: string[],
  records: RecordData[]
) => {
  const capitalizedPluralApiIdentifier = capitalizeIdentifier(pluralApiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalBulkCreate${capitalizedPluralApiIdentifier}`,
    fields: {
      internal: namespacify(namespace, {
        [`bulkCreate${capitalizedPluralApiIdentifier}`]: Call(
          {
            [pluralApiIdentifier]: Var({ value: records, type: `[${internalInputTypeName(apiIdentifier, namespace)}]!` }),
          },
          {
            success: true,
            ...ErrorsSelection,
            [pluralApiIdentifier]: true,
          }
        ),
      }),
      ...hydrationSelection(apiIdentifier, namespace),
    },
  });
};

export const internalUpdateMutation = (apiIdentifier: string, namespace: string[], id: string, record: RecordData) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalUpdate${capitalizedApiIdentifier}`,
    fields: {
      internal: namespacify(namespace, {
        [`update${capitalizedApiIdentifier}`]: Call(
          {
            id: Var({ value: id, type: "GadgetID!" }),
            [apiIdentifier]: Var({ value: record, type: internalInputTypeName(apiIdentifier, namespace) }),
          },
          {
            success: true,
            ...ErrorsSelection,
            [apiIdentifier]: true,
          }
        ),
      }),
      ...hydrationSelection(apiIdentifier, namespace),
    },
  });
};

export const internalUpsertMutation = (apiIdentifier: string, namespace: string[], on: string[] | undefined, record: RecordData) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalUpsert${capitalizedApiIdentifier}`,
    fields: {
      internal: namespacify(namespace, {
        [`upsert${capitalizedApiIdentifier}`]: Call(
          {
            on: Var({ value: on, type: "[String!]" }),
            [apiIdentifier]: Var({ value: record, type: internalInputTypeName(apiIdentifier, namespace) }),
          },
          {
            success: true,
            ...ErrorsSelection,
            [apiIdentifier]: true,
          }
        ),
      }),
      ...hydrationSelection(apiIdentifier, namespace),
    },
  });
};

export const internalDeleteMutation = (apiIdentifier: string, namespace: string[], id: string) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalDelete${capitalizedApiIdentifier}`,
    fields: {
      internal: namespacify(namespace, {
        [`delete${capitalizedApiIdentifier}`]: Call(
          {
            id: Var({ value: id, type: "GadgetID!" }),
          },
          {
            success: true,
            ...ErrorsSelection,
          }
        ),
      }),
    },
  });
};

export const internalDeleteManyMutation = (
  apiIdentifier: string,
  namespace: string[],
  options?: { search?: string; filter?: AnyFilter }
) => {
  const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);

  return compileWithVariableValues({
    type: "mutation",
    name: `InternalDeleteMany${capitalizedApiIdentifier}`,
    fields: {
      internal: namespacify(namespace, {
        [`deleteMany${capitalizedApiIdentifier}`]: Call(
          {
            search: options?.search ? Var({ value: options?.search, type: "String" }) : undefined,
            filter: options?.filter ? Var({ value: options?.filter, type: `[${filterTypeName(apiIdentifier, namespace)}!]` }) : undefined,
          },
          {
            success: true,
            ...ErrorsSelection,
          }
        ),
      }),
    },
  });
};

/** The fields for a given record to send to the backend */
export type RecordData = Record<string, any>;

/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
export class InternalModelManager<Shape extends RecordShape = RecordData> {
  private readonly capitalizedApiIdentifier: string;
  private readonly namespace: string[];

  constructor(
    private readonly apiIdentifier: string,
    readonly connection: GadgetConnection,
    readonly options?: { pluralApiIdentifier: string; hasAmbiguousIdentifiers?: boolean; namespace?: string[] }
  ) {
    this.capitalizedApiIdentifier = camelize(apiIdentifier);
    this.namespace = options?.namespace || [];
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
  async findOne(id: string, options?: InternalFindOneOptions, throwOnEmptyData = true): Promise<GadgetRecord<Shape>> {
    const plan = internalFindOneQuery(this.apiIdentifier, id, this.namespace, formatInternalSelectVariable(options?.select));
    const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
    const result = assertSuccess(response, this.dataPath(this.apiIdentifier));
    return hydrateRecord<Shape>(response, result);
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
  async maybeFindOne(id: string, options?: InternalFindOneOptions): Promise<GadgetRecord<Shape> | null> {
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
  async findMany(options?: InternalFindManyOptions): Promise<GadgetRecordList<Shape>> {
    const plan = internalFindManyQuery(this.apiIdentifier, this.namespace, options);
    const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const connection = assertNullableOperationSuccess(response, this.dataPath(`list${this.capitalizedApiIdentifier}`));
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
  async findFirst(options?: InternalFindListOptions, throwOnEmptyData = true): Promise<GadgetRecord<Shape>> {
    const plan = internalFindFirstQuery(this.apiIdentifier, this.namespace, options);
    const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const dataPath = this.dataPath(`list${this.capitalizedApiIdentifier}`);

    let connection;
    if (throwOnEmptyData === false) {
      // If this is a nullable operation, don't throw errors on empty
      connection = assertNullableOperationSuccess(response, dataPath);
    } else {
      // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
      // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
      connection = assertOperationSuccess(response, dataPath, throwOnEmptyData);
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
  async maybeFindFirst(options?: InternalFindListOptions): Promise<GadgetRecord<Shape> | null> {
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
  async create(record: RecordData): Promise<GadgetRecord<Shape>> {
    const plan = internalCreateMutation(this.apiIdentifier, this.namespace, this.getRecordFromData(record, "create"));
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const result = assertMutationSuccess(response, this.dataPath(`create${this.capitalizedApiIdentifier}`));
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
  async bulkCreate(records: RecordData[]): Promise<GadgetRecord<Shape>[]> {
    if (!this.options?.pluralApiIdentifier) {
      throw new GadgetClientError("Cannot perform bulkCreate without a pluralApiIdentifier");
    }

    const capitalizedPluralApiIdentifier = capitalizeIdentifier(this.options.pluralApiIdentifier);
    const plan = internalBulkCreateMutation(this.apiIdentifier, this.options.pluralApiIdentifier, this.namespace, records);
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const result = assertMutationSuccess(response, this.dataPath(`bulkCreate${capitalizedPluralApiIdentifier}`));
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
  async update(id: string, record: RecordData): Promise<GadgetRecord<Shape>> {
    assert(id, `Can't update a record without an ID passed`);
    const plan = internalUpdateMutation(this.apiIdentifier, this.namespace, id, this.getRecordFromData(record, "update"));
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const result = assertMutationSuccess(response, this.dataPath(`update${this.capitalizedApiIdentifier}`));

    return hydrateRecord(response, result[this.apiIdentifier]);
  }

  /**
   * Upserts a record in the backend datastore for this model using the Internal API.
   * If a matching record exists, it will be updated. If it doesn't exist, it will be created.
   * By default records will be matched by the `id` field, but you can specify a different field to match on.
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // upserts post with id 10 in the database
   * // if a post with id 10 exists, it will be updated
   * // if a post with id 10 does not exist, it will be created
   * const post = await api.internal.post.upsert({ id: "10", title: "A new post title" });
   *
   * @example
   * // upserts post with slug "new-post" in the database
   * // if a post with slug "new-post" exists, it will be updated
   * // if a post with slug "new-post" does not exist, it will be created
   * const post = await api.internal.post.upsert({ post: {slug: "new-post", title: "A new post title" }, on: ["slug"] });
   *
   * @param record The data for the record to update
   * @returns The upserted record
   */
  async upsert(record: RecordData & { on?: string[] }): Promise<GadgetRecord<Shape>> {
    const { on, ...recordData } = record;
    on && assert(on.length > 0, `Must specify at least one field to upsert on`);
    const plan = internalUpsertMutation(this.apiIdentifier, this.namespace, on, this.getRecordFromData(recordData, "upsert"));
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const result = assertMutationSuccess(response, this.dataPath(`upsert${this.capitalizedApiIdentifier}`));

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
    const plan = internalDeleteMutation(this.apiIdentifier, this.namespace, id);
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    assertMutationSuccess(response, this.dataPath(`delete${this.capitalizedApiIdentifier}`));
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
  async deleteMany(options: { search?: string; filter: AnyFilter }): Promise<void> {
    const plan = internalDeleteManyMutation(this.apiIdentifier, this.namespace, options);
    const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    assertMutationSuccess(response, this.dataPath(`deleteMany${this.capitalizedApiIdentifier}`));
  }

  private dataPath(dataPath: string): string[] {
    return ["internal", ...namespaceDataPath([dataPath], this.namespace)];
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
