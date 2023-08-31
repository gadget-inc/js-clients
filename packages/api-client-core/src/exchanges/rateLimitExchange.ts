import { mapExchange, type Exchange } from "@urql/core";
import { TokenBucket } from "../support.js";

export interface RateLimitExchangeOptions {
  enabled: boolean;
  bucket: TokenBucket;
  ignoredOperationNames: string[];
  ignoredOperationKinds: string[];
}

export const rateLimitExchange = (options: Partial<RateLimitExchangeOptions> = {}): Exchange => {
  const {
    enabled = true,
    bucket = new TokenBucket(),
    ignoredOperationKinds = ["teardown"],
    ignoredOperationNames = ["CommitTransaction", "RollbackTransaction"],
  } = options;

  return mapExchange({
    onOperation: (operation) => {
      if (!enabled || ignoredOperationKinds.includes(operation.kind) || ignoredOperationNames.includes(operation.context.operationName)) {
        return operation;
      }
      return bucket.consume().then(() => operation);
    },
  });
};
