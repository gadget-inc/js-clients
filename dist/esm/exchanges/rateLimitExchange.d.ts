import { type Exchange } from "@urql/core";
import { TokenBucket } from "../support.js";
export interface RateLimitExchangeOptions {
    enabled: boolean;
    bucket: TokenBucket;
    ignoredOperationNames: string[];
    ignoredOperationKinds: string[];
}
export declare const rateLimitExchange: (options?: Partial<RateLimitExchangeOptions>) => Exchange;
