"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitExchange = void 0;
const wonka_1 = require("wonka");
const support_1 = require("./support");
/**
 * Class representing a token bucket based on [`stopcock`](https://github.com/lpinca/stopcock)
 *
 * @see https://github.com/lpinca/stopcock/blob/26aa34c38bf7892e343f6f77a3dfb4c792e54d2f/index.js
 *
 * @license
 * Copyright (c) 2017 Luigi Pinca
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class TokenBucket {
    constructor(options) {
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        });
        /**
         * The number of tokens currently in the bucket.
         */
        Object.defineProperty(this, "tokens", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * A `Date.now()` of the last time the bucket was refilled.
         */
        Object.defineProperty(this, "lastRefill", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * A queue of attempts to consume a token.
         */
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new support_1.PQueue()
        });
        this.tokens = options.bucketSize;
        this.lastRefill = Date.now();
    }
    /**
     * Refill the bucket with the proper amount of tokens.
     */
    refill() {
        const intervalsSinceLastRefill = Math.floor((Date.now() - this.lastRefill) / this.options.interval);
        const newTokens = intervalsSinceLastRefill * this.options.tokensPerInterval;
        this.tokens += newTokens;
        // `newTokens` are rounded downward, so we only add the actual time required by those tokens
        this.lastRefill += Math.ceil((newTokens * this.options.interval) / this.options.tokensPerInterval);
        if (this.tokens > this.options.bucketSize) {
            this.tokens = this.options.bucketSize;
        }
    }
    /**
     * Remove a token from the bucket, waiting if necessary until one is available.
     */
    async consume() {
        await this.queue.enqueue(async () => {
            this.refill();
            while (!this.tokens) {
                const delay = this.lastRefill + this.options.interval - Date.now();
                await (0, support_1.sleep)(delay);
                this.refill();
            }
            this.tokens--;
        });
    }
}
const rateLimitExchange = (options) => {
    const bucket = new TokenBucket({
        bucketSize: 40,
        interval: 1000,
        tokensPerInterval: 2,
        ...options,
    });
    return ({ forward }) => {
        return (ops$) => {
            return (0, wonka_1.pipe)(ops$, (0, wonka_1.mergeMap)((operation) => {
                if (operation.kind === "teardown") {
                    return (0, wonka_1.fromValue)(operation);
                }
                return (0, wonka_1.fromPromise)(bucket.consume().then(() => operation));
            }), forward);
        };
    };
};
exports.rateLimitExchange = rateLimitExchange;
//# sourceMappingURL=rateLimitExchange.js.map