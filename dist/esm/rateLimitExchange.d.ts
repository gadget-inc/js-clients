import type { Exchange } from "@urql/core";
export interface RateLimitExchangeOptions {
    /**
     * The capacity of the bucket
     */
    bucketSize: number;
    /**
     * The interval in ms at which tokens are added to the bucket
     */
    interval: number;
    /**
     * How many tokens to add to the bucket per {@linkcode interval}
     */
    tokensPerInterval: number;
}
export declare const rateLimitExchange: (options?: Partial<RateLimitExchangeOptions>) => Exchange;
