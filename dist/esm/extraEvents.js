/** Extra events */
export const SET_GLOBALS_EVENT_TYPE = "openai:set_globals";
/**
 * Custom event for setting OpenAI global configuration values.
 * Dispatched when globals need to be updated or initialized.
 */
export class SetGlobalsEvent extends CustomEvent {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: SET_GLOBALS_EVENT_TYPE
        });
    }
}
//# sourceMappingURL=extraEvents.js.map