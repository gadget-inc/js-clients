import { type Exchange } from "@urql/core";
import type { TokenBucket } from "../support.js";
export declare const rateLimitExchange: (bucket: TokenBucket) => Exchange;
