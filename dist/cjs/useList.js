"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useList = void 0;
const lodash_es_1 = require("lodash-es");
const react_1 = require("react");
const useDebouncedSearch_js_1 = require("./useDebouncedSearch.js");
const useFindMany_js_1 = require("./useFindMany.js");
const useList = (manager, options) => {
    const [cursor, setCursor] = (0, react_1.useState)();
    const [direction, setDirection] = (0, react_1.useState)("forward");
    const clearCursor = (0, react_1.useCallback)(() => setCursor(undefined), []);
    const { ...search } = (0, useDebouncedSearch_js_1.useDebouncedSearch)({ clearCursor });
    const pageSize = options?.pageSize ?? 50;
    let variables;
    if (direction == "forward") {
        variables = {
            first: pageSize,
            after: cursor,
        };
    }
    else {
        variables = {
            last: pageSize,
            before: cursor,
        };
    }
    const findManyOptions = (0, lodash_es_1.omit)(options, ["pageSize"]);
    const [{ data, fetching, error }, refresh] = (0, useFindMany_js_1.useFindMany)(manager, {
        ...findManyOptions,
        ...variables,
        ...(search.debouncedValue && { search: search.debouncedValue }),
    });
    const goToNextPage = (0, react_1.useCallback)(() => {
        if (data && data.hasNextPage) {
            setDirection("forward");
            setCursor(data.endCursor);
        }
        else {
            console.warn("can't navigate to next page currently, no next page available");
        }
    }, [data]);
    const goToPreviousPage = (0, react_1.useCallback)(() => {
        if (data && data.hasPreviousPage) {
            setDirection("backward");
            setCursor(data.startCursor);
        }
        else {
            console.warn("can't navigate to previous page currently, no previous page available");
        }
    }, [data]);
    const records = data?.map((record) => record);
    const page = {
        pageSize,
        goToNextPage,
        goToPreviousPage,
        hasNextPage: data?.hasNextPage,
        hasPreviousPage: data?.hasPreviousPage,
        variables,
    };
    return [{ data: records, fetching, page, search, error }, refresh];
};
exports.useList = useList;
//# sourceMappingURL=useList.js.map