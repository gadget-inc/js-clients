import type { OpenAiGlobals } from "./types.js";
/** Extra events */
export declare const SET_GLOBALS_EVENT_TYPE = "openai:set_globals";
/**
 * Custom event for setting OpenAI global configuration values.
 * Dispatched when globals need to be updated or initialized.
 */
export declare class SetGlobalsEvent extends CustomEvent<{
    globals: Partial<OpenAiGlobals>;
}> {
    readonly type = "openai:set_globals";
}
