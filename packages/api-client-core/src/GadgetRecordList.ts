/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/require-await */
import type { Jsonify } from "type-fest";
import type { GadgetRecord, RecordShape } from "./GadgetRecord";
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
    records: GadgetRecord<Shape>[],
    pagination: PaginationConfig
  ) {
    const list = new GadgetRecordList<Shape>();
    list.push(...records);
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

  toJSON(): Jsonify<Shape>[] {
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
    // Our current implementation of paging determines paging direction based on if "first" is defined. We can pass both "before" and "after" as options but only after is respected if first is sent. One of "before" or "after" is ignored depending on whether "first" is defined.
    const { first, last, before: _before, ...options } = this.pagination.options ?? {};
    const nextPage = this.modelManager.findMany({
      ...options,
      after: this.pagination.pageInfo.endCursor,
      first: first || last,
    }) as Promise<GadgetRecordList<Shape>>;
    return await nextPage;
  }

  async previousPage() {
    if (!this.hasPreviousPage)
      throw new GadgetClientError(
        "Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists"
      );
    // Our current implementation of paging determines paging direction based on if "first" is defined. We can pass both "before" and "after" as options but only after is respected if first is sent. One of "before" or "after" is ignored depending on whether "first" is defined.
    const { first, last, after: _after, ...options } = this.pagination.options ?? {};
    const prevPage = this.modelManager.findMany({
      ...options,
      before: this.pagination.pageInfo.startCursor,
      last: last || first,
    }) as Promise<GadgetRecordList<Shape>>;
    return await prevPage;
  }
}
