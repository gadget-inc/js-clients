"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetRecordList = void 0;
const support_1 = require("./support");
/** Represents a list of objects returned from the API. Facilitates iterating and paginating. */
class GadgetRecordList extends Array {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "modelManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pagination", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    /** Internal method used to create a list. Should not be used by applications. */
    static boot(modelManager, records, pagination) {
        const list = new GadgetRecordList();
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
            throw new support_1.GadgetOperationError("No records found.", "GGT_RECORD_NOT_FOUND");
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
        var _a;
        if (!this.hasNextPage)
            throw new support_1.GadgetClientError("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
        // Our current implementation of paging determines paging direction based on if "first" is defined. We can pass both "before" and "after" as options but only after is respected if first is sent. One of "before" or "after" is ignored depending on whether "first" is defined.
        const { first, last, before: _before, ...options } = (_a = this.pagination.options) !== null && _a !== void 0 ? _a : {};
        const nextPage = this.modelManager.findMany({
            ...options,
            after: this.pagination.pageInfo.endCursor,
            first: first || last,
        });
        return await nextPage;
    }
    async previousPage() {
        var _a;
        if (!this.hasPreviousPage)
            throw new support_1.GadgetClientError("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
        // Our current implementation of paging determines paging direction based on if "first" is defined. We can pass both "before" and "after" as options but only after is respected if first is sent. One of "before" or "after" is ignored depending on whether "first" is defined.
        const { first, last, after: _after, ...options } = (_a = this.pagination.options) !== null && _a !== void 0 ? _a : {};
        const prevPage = this.modelManager.findMany({
            ...options,
            before: this.pagination.pageInfo.startCursor,
            last: last || first,
        });
        return await prevPage;
    }
}
exports.GadgetRecordList = GadgetRecordList;
//# sourceMappingURL=GadgetRecordList.js.map