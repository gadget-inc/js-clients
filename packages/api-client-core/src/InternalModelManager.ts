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

export const internalFindManyQuery = (apiIdentifier: string, isFirstQuery = false) => {
  const capitalizedApiIdentifier = capitalize(apiIdentifier);
  const namePrefix = isFirstQuery ? "InternalFindFirst" : "InternalFindMany";
  return `
    query ${namePrefix}${capitalizedApiIdentifier}(
      ${
        isFirstQuery
          ? ""
          : `
      $after: String
      $before: String
      $first: Int
      $last: Int`
      }
      $search: String
      $sort: [${capitalizedApiIdentifier}Sort!]
      $filter: [${capitalizedApiIdentifier}Filter!]
    ) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        list${capitalizedApiIdentifier}(
          ${
            isFirstQuery
              ? `
          first: 1`
              : `
          after: $after
          before: $before
          first: $first
          last: $last
          `
          }    
          search: $search
          sort: $sort
          filter: $filter
        ) {
          edges {
            ${isFirstQuery ? "" : "cursor"}
            node
          }
          ${
            isFirstQuery
              ? ""
              : `
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }`
          }
        }
      }
    }
    `;
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

  constructor(private readonly apiIdentifier: string, readonly connection: GadgetConnection) {
    this.capitalizedApiIdentifier = camelize(apiIdentifier);
  }

  async findOne(id: string, throwOnEmptyData: true): Promise<GadgetRecord<RecordShape>>;
  async findOne(id: string, throwOnEmptyData: false): Promise<GadgetRecord<RecordShape> | null>;
  async findOne(id: string, throwOnEmptyData = true): Promise<GadgetRecord<RecordShape> | null> {
    const response = await this.connection.currentClient.query(internalFindOneQuery(this.apiIdentifier), { id }).toPromise();
    const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
    const result = assertSuccess(response, ["internal", this.apiIdentifier]);
    return result ? hydrateRecord<RecordShape>(response, result) : null;
  }

  async maybeFindOne(id: string): Promise<GadgetRecord<RecordShape> | null> {
    const record = await this.findOne(id, false);
    return record ?? null;
  }

  async findMany(options?: Record<string, any>, throwOnEmptyData?: boolean, isFirstQuery = false): Promise<GadgetRecordList<any>> {
    const response = await this.connection.currentClient
      .query(internalFindManyQuery(this.apiIdentifier, isFirstQuery), options)
      .toPromise();

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
    return GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
  }

  async findFirst(options?: Record<string, any>): Promise<GadgetRecord<RecordShape>> {
    const list = await this.findMany({ ...options, first: 1, last: undefined, before: undefined, after: undefined }, true, true);
    return list[0];
  }

  async maybeFindFirst(options?: Record<string, any>): Promise<GadgetRecord<RecordShape> | null> {
    const list = await this.findMany({ ...options, first: 1, last: undefined, before: undefined, after: undefined }, false, true);
    return list[0] ?? null;
  }

  async create(record: RecordData): Promise<GadgetRecord<RecordShape>> {
    return await this.transaction(async (transaction) => {
      const response = await transaction.client
        .mutation(internalCreateMutation(this.apiIdentifier), {
          record: record[this.apiIdentifier],
        })
        .toPromise();
      const result = assertMutationSuccess(response, ["internal", `create${this.capitalizedApiIdentifier}`]);
      return await hydrateRecord(response, result[this.apiIdentifier]);
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

      return await hydrateRecord(response, result[this.apiIdentifier]);
    });
  }

  async delete(id: string): Promise<void> {
    assert(id, `Can't delete a record without an ID`);
    return await this.transaction(async (transaction) => {
      const response = await transaction.client.mutation(internalDeleteMutation(this.apiIdentifier), { id }).toPromise();
      assertMutationSuccess(response, ["internal", `delete${this.capitalizedApiIdentifier}`]);
    });
  }

  async deleteMany(options?: { search?: string; filter?: Record<string, any> }): Promise<void> {
    return await this.transaction(async (transaction) => {
      const response = await transaction.client.mutation(internalDeleteManyMutation(this.apiIdentifier), options).toPromise();
      assertMutationSuccess(response, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
    });
  }

  async transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T> {
    return await this.connection.transaction(callback);
  }
}
