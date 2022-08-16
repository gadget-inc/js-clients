/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/require-await */
import { GadgetRecord, RecordShape } from "./GadgetRecord";
import type { InternalModelManager } from "./InternalModelManager";
import type { AnyModelManager } from "./ModelManager";
import type { PaginationOptions } from "./operationBuilders";
import { GadgetClientError, GadgetOperationError } from "./support";

type PaginationConfig = {
  pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; startCursor: string; endCursor: string };
  options?: PaginationOptions;
};

/** Represents a list of objects returned from the API. Facilitates iterating and paginating. */
export class GadgetRecordList<Shape extends RecordShape> extends Array<GadgetRecord<Shape>> {
  modelManager!: AnyModelManager | InternalModelManager;
  pagination!: PaginationConfig;

  /** Internal method used to create a list. Should not be used by applications. */
  static boot<Shape extends RecordShape>(
    modelManager: AnyModelManager | InternalModelManager,
    nodes: GadgetRecord<Shape>[],
    pagination: PaginationConfig
  ) {
    const list = new GadgetRecordList<Shape>();
    list.push(...nodes);
    list.modelManager = modelManager;
    list.pagination = pagination;
    Object.freeze(list);
    return list;
  }

  static get [Symbol.species]() {
    return Array;
  }

  firstOrThrow() {
    if (!this[0]) {
      throw new GadgetOperationError("No records found.", "GGT_RECORD_NOT_FOUND");
    }
    return this[0];
  }

  toJSON() {
    return this.map((record) => record.toJSON());
  }

  get hasNextPage() {
    return this.pagination.pageInfo.hasNextPage;
  }

  get hasPreviousPage() {
    return this.pagination.pageInfo.hasPreviousPage;
  }

  get startCursor() {
    return this.pagination.pageInfo.startCursor;
  }

  get endCursor() {
    return this.pagination.pageInfo.endCursor;
  }

  async nextPage() {
    if (!this.hasNextPage)
      throw new GadgetClientError("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const nextPage = this.modelManager.findMany({
      ...this.pagination.options,
      after: this.pagination.pageInfo.endCursor,
      first: this.pagination.options?.first || this.pagination.options?.last,
    }) as Promise<GadgetRecordList<Shape>>;
    return await nextPage;
  }

  async previousPage() {
    if (!this.hasPreviousPage)
      throw new GadgetClientError(
        "Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists"
      );
    const prevPage = this.modelManager.findMany({
      ...this.pagination.options,
      before: this.pagination.pageInfo.startCursor,
      last: this.pagination.options?.last || this.pagination.options?.first,
    }) as Promise<GadgetRecordList<Shape>>;
    return await prevPage;
  }
}
