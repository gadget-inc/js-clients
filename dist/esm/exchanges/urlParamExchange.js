import { mapExchange } from "@urql/core";
export const addUrlParams = (url, paramsToAdd) => {
    const [start, params] = url.split("?");
    const paramsObj = new URLSearchParams(params);
    for (const [key, value] of Object.entries(paramsToAdd)) {
        paramsObj.set(key, value);
    }
    return `${start}?${paramsObj.toString()}`;
};
export const urlParamExchange = mapExchange({
    onOperation: (operation) => {
        if (operation.context.url && operation.context.operationName) {
            try {
                operation.context.url = addUrlParams(operation.context.url, { operation: operation.context.operationName });
            }
            catch (error) {
                // not able to parse URL params, just don't add this optional param and let the rest of the system react to the invalid URL
            }
        }
    },
});
//# sourceMappingURL=urlParamExchange.js.map