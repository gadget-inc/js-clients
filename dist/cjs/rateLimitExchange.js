"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitExchange = void 0;
const wonka_1 = require("wonka");
const rateLimitExchange = (bucket) => {
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