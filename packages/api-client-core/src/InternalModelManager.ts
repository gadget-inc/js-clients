import { query } from "gql-query-builder";
import { GadgetConnection } from "./GadgetConnection";
import { GadgetRecord, RecordShape } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import { GadgetTransaction } from "./GadgetTransaction";
import {
  assert,
  assertMutationSuccess,
  assertNullableOperationSuccess,
  assertOperationSuccess,
  camelize,
  capitalize,
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
  const capitalizedApiIdentifier = capitalize(apiIdentifier);
  return `
    query InternalFind${capitalizedApiIdentifier}($id: GadgetID!) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        ${apiIdentifier}(id: $id)
      }
    }
    `;
};

export const internalFindFirstQuery = (apiIdentifier: string, options?: RecordData) => {
  const capitalizedApiIdentifier = capitalize(apiIdentifier);

  const defaultVariables = {
    ...(options?.search && { search: { value: options?.search, type: "String", required: false } }),
    ...(options?.sort && { sort: { value: options?.sort, type: `${capitalizedApiIdentifier}Sort!`, list: true } }),
    ...(options?.filter && { filter: { value: options?.filter, type: `${capitalizedApiIdentifier}Filter!`, list: true } }),
  };

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

export const internalFindManyQuery = (apiIdentifier: string, options?: RecordData) => {
  const capitalizedApiIdentifier = capitalize(apiIdentifier);

  const defaultVariables = {
    ...(options?.search && { search: { value: options?.search, type: "String", required: false } }),
    ...(options?.sort && { sort: { value: options?.sort, type: `${capitalizedApiIdentifier}Sort!`, list: true } }),
    ...(options?.filter && { filter: { value: options?.filter, type: `${capitalizedApiIdentifier}Filter!`, list: true } }),
  };

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
  const capitalizedApiIdentifier = capitalize(apiIdentifier);
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
  const capitalizedApiIdentifier = capitalize(apiIdentifier);
  return `
    ${internalErrorsDetails}

    mutation InternalBulkCreate${capitalizedApiIdentifier}($records: [Internal${capitalizedApiIdentifier}Input]) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        bulkCreate${capitalizedApiIdentifier}(${pluralApiIdentifier}: $records) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${pluralApiIdentifier} {
            ${apiIdentifier}
          }
        }
      }
    }
  `;
};

export const internalUpdateMutation = (apiIdentifier: string) => {
  const capitalizedApiIdentifier = capitalize(apiIdentifier);
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
  const capitalizedApiIdentifier = capitalize(apiIdentifier);
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
  const capitalizedApiIdentifier = capitalize(apiIdentifier);
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

export type RecordData = Record<string, any>;

/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
export class InternalModelManager {
  private readonly capitalizedApiIdentifier: string;

  constructor(private readonly apiIdentifier: string, readonly pluralApiIdentifier: string, readonly connection: GadgetConnection) {
    this.capitalizedApiIdentifier = camelize(apiIdentifier);
  }

  async findOne(id: string, throwOnEmptyData = true): Promise<GadgetRecord<RecordData>> {
    const response = await this.connection.currentClient.query(internalFindOneQuery(this.apiIdentifier), { id }).toPromise();
    const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
    const result = assertSuccess(response, ["internal", this.apiIdentifier]);
    return hydrateRecord(response, result);
  }

  async maybeFindOne(id: string): Promise<GadgetRecord<RecordData> | null> {
    const record = await this.findOne(id, false);
    return record.isEmpty() ? null : record;
  }

  async findMany(options?: RecordData): Promise<GadgetRecordList<any>> {
    const plan = internalFindManyQuery(this.apiIdentifier, options);
    const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const connection = assertNullableOperationSuccess(response, ["internal", `list${this.capitalizedApiIdentifier}`]);
    const records = hydrateConnection(response, connection);

    return GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
  }

  async findFirst(options?: RecordData, throwOnEmptyData = true): Promise<GadgetRecord<RecordShape>> {
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

  async maybeFindFirst(options?: RecordData): Promise<GadgetRecord<RecordShape> | null> {
    return await this.findFirst(options, false);
  }

  async create(record: RecordData): Promise<GadgetRecord<RecordShape>> {
    return await this.transaction(async (transaction) => {
      const response = await transaction.client
        .mutation(internalCreateMutation(this.apiIdentifier), {
          record: record[this.apiIdentifier],
        })
        .toPromise();
      const result = assertMutationSuccess(response, ["internal", `create${this.capitalizedApiIdentifier}`]);
      return hydrateRecord(response, result[this.apiIdentifier]);
    });
  }

  async bulkCreate(records: RecordData[]): Promise<GadgetRecord<RecordShape>[]> {
    return await this.transaction(async (transaction) => {
      const response = await transaction.client
        .mutation(internalBulkCreateMutation(this.apiIdentifier, this.pluralApiIdentifier), {
          records,
        })
        .toPromise();
      const result = assertMutationSuccess(response, ["internal", `bulkCreate${this.capitalizedApiIdentifier}`]);
      return hydrateRecordArray(response, result[this.pluralApiIdentifier]);
    });
  }

  async update(id: string, record: RecordData): Promise<GadgetRecord<RecordShape>> {
    assert(id, `Can't update a record without an ID passed`);
    return await this.transaction(async (transaction) => {
      const response = await transaction.client
        .mutation(internalUpdateMutation(this.apiIdentifier), {
          id,
          record: record[this.apiIdentifier],
        })
        .toPromise();
      const result = assertMutationSuccess(response, ["internal", `update${this.capitalizedApiIdentifier}`]);

      return hydrateRecord(response, result[this.apiIdentifier]);
    });
  }

  async delete(id: string): Promise<void> {
    assert(id, `Can't delete a record without an ID`);
    return await this.transaction(async (transaction) => {
      const response = await transaction.client.mutation(internalDeleteMutation(this.apiIdentifier), { id }).toPromise();
      assertMutationSuccess(response, ["internal", `delete${this.capitalizedApiIdentifier}`]);
    });
  }

  async deleteMany(options?: { search?: string; filter?: RecordData }): Promise<void> {
    return await this.transaction(async (transaction) => {
      const response = await transaction.client.mutation(internalDeleteManyMutation(this.apiIdentifier), options).toPromise();
      assertMutationSuccess(response, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
    });
  }

  async transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T> {
    return await this.connection.transaction(callback);
  }
}
