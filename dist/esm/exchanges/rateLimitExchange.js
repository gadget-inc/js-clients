import { mapExchange } from "@urql/core";
const IGNORED_OPERATION_NAMES = ["CommitTransaction"];
const IGNORED_OPERATION_KINDS = ["teardown"];
export const rateLimitExchange = (bucket) => mapExchange({
    onOperation: (operation) => {
        if (IGNORED_OPERATION_KINDS.includes(operation.kind) || IGNORED_OPERATION_NAMES.includes(operation.context.operationName)) {
            return operation;
        }
        return bucket.consume().then(() => operation);
    },
});
//# sourceMappingURL=rateLimitExchange.js.map