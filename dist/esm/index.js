export * from "./Provider.js";
/** Extra events */
export const SET_GLOBALS_EVENT_TYPE = "openai:set_globals";
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
//# sourceMappingURL=index.js.map