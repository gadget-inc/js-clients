import { GadgetConnection } from "./GadgetConnection";
import { GadgetRecord } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import { GadgetTransaction } from "./GadgetTransaction";
import { assert, assertMutationSuccess, assertOperationSuccess, camelize, capitalize, hydrateConnection, hydrateRecord } from "./support";

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

export const internalFindManyQuery = (apiIdentifier: string) => {
  const capitalizedApiIdentifier = capitalize(apiIdentifier);
  return `
    query InternalFindMany${capitalizedApiIdentifier}(
      $after: String
      $before: String
      $first: Int
      $last: Int
      $search: String
      $sort: [${capitalizedApiIdentifier}Sort!]
      $filter: [${capitalizedApiIdentifier}Filter!]
    ) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        list${capitalizedApiIdentifier}(
          after: $after
          before: $before
          first: $first
          last: $last
          search: $search
          sort: $sort
          filter: $filter
        ) {
          edges {
            cursor
            node
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
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

export type RecordData = Record<string, any>;

/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
export class InternalModelManager {
  private readonly capitalizedApiIdentifier: string;

  constructor(private readonly apiIdentifier: string, readonly connection: GadgetConnection) {
    this.capitalizedApiIdentifier = camelize(apiIdentifier);
  }

  async findOne(id: string): Promise<GadgetRecord<any>> {
    const response = await this.connection.currentClient.query(internalFindOneQuery(this.apiIdentifier), { id }).toPromise();
    const result = assertOperationSuccess(response, ["internal", this.apiIdentifier]);
    return hydrateRecord(response, result);
  }

  async findMany(options?: Record<string, any>): Promise<GadgetRecordList<any>> {
    const response = await this.connection.currentClient.query(internalFindManyQuery(this.apiIdentifier), options).toPromise();
    const connection = assertOperationSuccess(response, ["internal", `list${this.capitalizedApiIdentifier}`]);
    const records = hydrateConnection(response, connection);
    return GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
  }

  async create(record: RecordData): Promise<GadgetRecord<any>> {
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

  async update(id: string, record: RecordData): Promise<GadgetRecord<any>> {
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

  async transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T> {
    return await this.connection.transaction(callback);
  }
}
