import { mapExchange } from "@urql/core";
export const urlParamExchange = mapExchange({
    onOperation: (operation) => {
        if (operation.context.url && operation.context.operationName) {
            try {
                const [start, params] = operation.context.url.split("?");
                const paramsObj = new URLSearchParams(params);
                paramsObj.set("operation", operation.context.operationName);
                operation.context.url = `${start}?${paramsObj.toString()}`;
            }
            catch (error) {
                // not able to parse URL params, just don't add this optional param and let the rest of the system react to the invalid URL
            }
        }
    },
});
//# sourceMappingURL=urlParamExchange.js.map