import { fromPromise, fromValue, mergeMap, pipe } from "wonka";
export const rateLimitExchange = (bucket) => {
    return ({ forward }) => {
        return (ops$) => {
            return pipe(ops$, mergeMap((operation) => {
                if (operation.kind === "teardown") {
                    return fromValue(operation);
                }
                return fromPromise(bucket.consume().then(() => operation));
            }), forward);
        };
    };
};
//# sourceMappingURL=rateLimitExchange.js.map