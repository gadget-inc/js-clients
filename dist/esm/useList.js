import { omit } from "lodash-es";
import { useCallback, useState } from "react";
import { useDebouncedSearch } from "./useDebouncedSearch.js";
import { useFindMany } from "./useFindMany.js";
export const useList = (manager, options) => {
    const [cursor, setCursor] = useState();
    const [direction, setDirection] = useState("forward");
    const clearCursor = useCallback(() => setCursor(undefined), []);
    const { ...search } = useDebouncedSearch({ clearCursor });
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
    const findManyOptions = omit(options, ["pageSize"]);
    const [{ data, fetching, error }, refresh] = useFindMany(manager, {
        ...findManyOptions,
        ...variables,
        ...(search.debouncedValue && { search: search.debouncedValue }),
    });
    const goToNextPage = useCallback(() => {
        if (data && data.hasNextPage) {
            setDirection("forward");
            setCursor(data.endCursor);
        }
        else {
            console.warn("can't navigate to next page currently, no next page available");
        }
    }, [data]);
    const goToPreviousPage = useCallback(() => {
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
//# sourceMappingURL=useList.js.map