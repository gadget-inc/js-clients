"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetGlobalsEvent = exports.SET_GLOBALS_EVENT_TYPE = void 0;
/** Extra events */
exports.SET_GLOBALS_EVENT_TYPE = "openai:set_globals";
/**
 * Custom event for setting OpenAI global configuration values.
 * Dispatched when globals need to be updated or initialized.
 */
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
//# sourceMappingURL=extraEvents.js.map