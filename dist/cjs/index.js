"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetGlobalsEvent = exports.SET_GLOBALS_EVENT_TYPE = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./Provider.js"), exports);
/** Extra events */
exports.SET_GLOBALS_EVENT_TYPE = "openai:set_globals";
class SetGlobalsEvent extends CustomEvent {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: exports.SET_GLOBALS_EVENT_TYPE
        });
    }
}
exports.SetGlobalsEvent = SetGlobalsEvent;
//# sourceMappingURL=index.js.map