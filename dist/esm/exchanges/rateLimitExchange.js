import { mapExchange } from "@urql/core";
import { TokenBucket } from "../support.js";
export const rateLimitExchange = (options = {}) => {
    const { enabled = true, bucket = new TokenBucket(), ignoredOperationKinds = ["teardown"], ignoredOperationNames = ["CommitTransaction"], } = options;
    return mapExchange({
        onOperation: (operation) => {
            if (!enabled || ignoredOperationKinds.includes(operation.kind) || ignoredOperationNames.includes(operation.context.operationName)) {
                return operation;
            }
            return bucket.consume().then(() => operation);
        },
    });
};
//# sourceMappingURL=rateLimitExchange.js.map