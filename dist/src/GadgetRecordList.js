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
    static boot(modelManager, nodes, pagination) {
        const list = new GadgetRecordList();
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
    async nextPage() {
        var _a, _b;
        if (!this.hasNextPage)
            throw new support_1.GadgetClientError("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
        const nextPage = this.modelManager.findMany({
            ...this.pagination.options,
            after: this.pagination.pageInfo.endCursor,
            first: ((_a = this.pagination.options) === null || _a === void 0 ? void 0 : _a.first) || ((_b = this.pagination.options) === null || _b === void 0 ? void 0 : _b.last),
        });
        return await nextPage;
    }
    async previousPage() {
        var _a, _b;
        if (!this.hasPreviousPage)
            throw new support_1.GadgetClientError("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
        const prevPage = this.modelManager.findMany({
            ...this.pagination.options,
            before: this.pagination.pageInfo.startCursor,
            last: ((_a = this.pagination.options) === null || _a === void 0 ? void 0 : _a.last) || ((_b = this.pagination.options) === null || _b === void 0 ? void 0 : _b.first),
        });
        return await prevPage;
    }
}
exports.GadgetRecordList = GadgetRecordList;
//# sourceMappingURL=GadgetRecordList.js.map