"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPageSize = exports.useList = void 0;
const react_1 = require("react");
const useDebouncedSearch_js_1 = require("./useDebouncedSearch.js");
const useFindMany_js_1 = require("./useFindMany.js");
const useSelectedRecordsController_js_1 = require("./useSelectedRecordsController.js");
const utils_js_1 = require("./utils.js");
const useList = (manager, options) => {
    const [cursor, setCursor] = (0, react_1.useState)();
    const [direction, setDirection] = (0, react_1.useState)("forward");
    const clearCursor = (0, react_1.useCallback)(() => setCursor(undefined), []);
    (0, react_1.useMemo)(() => {
        clearCursor();
        setDirection("forward");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options?.sort, clearCursor]);
    const { ...search } = (0, useDebouncedSearch_js_1.useDebouncedSearch)({
        onDebouncedSearchValueChange() {
            clearCursor();
            selection.clearAll(); // Referenced before definition because selectedRecordsController needs to reference the records
        },
    });
    const pageSize = options?.pageSize ?? exports.DefaultPageSize;
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
    const findManyOptions = (0, utils_js_1.omit)(options, ["pageSize"]);
    const [{ data, fetching, error }, refresh] = (0, useFindMany_js_1.useFindMany)(manager, {
        ...findManyOptions,
        ...variables,
        ...(search.debouncedValue && { search: search.debouncedValue }),
    });
    const selection = (0, useSelectedRecordsController_js_1.useSelectedRecordsController)({ currentPageIds: data?.map((record) => record.id) ?? [] });
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
    return [
        {
            data: records,
            fetching,
            page,
            search,
            error,
            selection,
        },
        refresh,
    ];
};
exports.useList = useList;
exports.DefaultPageSize = 50;
//# sourceMappingURL=useList.js.map