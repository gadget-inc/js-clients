import type { SET_GLOBALS_EVENT_TYPE, SetGlobalsEvent } from "./extraEvents.js";
import type { CallTool, OpenAiGlobals, RequestDisplayMode } from "./types.js";

export * from "./Provider.js";
export * from "./extraEvents.js";
export { useCallTool } from "./hooks/useCallTool.js";
export { useDisplayMode } from "./hooks/useDisplayMode.js";
export { useMaxHeight } from "./hooks/useMaxHeight.js";
export { useOpenAiGlobal } from "./hooks/useOpenAiGlobal.js";
export { useOpenExternal } from "./hooks/useOpenExternal.js";
export { useRequestDisplayMode } from "./hooks/useRequestDisplayMode.js";
export { useSendMessage } from "./hooks/useSendMessage.js";
export { useWidgetProps } from "./hooks/useWidgetProps.js";
export { useWidgetState } from "./hooks/useWidgetState.js";
export * from "./types.js";

// currently copied from types.ts in chatgpt/web-sandbox.
// Will eventually use a public package.
type API = {
  callTool: CallTool;
  sendFollowUpMessage: (args: { prompt: string }) => Promise<void>;
  openExternal(payload: { href: string }): void;

  // Layout controls
  requestDisplayMode: RequestDisplayMode;
};

/**
 * Global oai object injected by the web sandbox for communicating with chatgpt host page.
 */
declare global {
  interface Window {
    openai: API & OpenAiGlobals;
  }

  interface WindowEventMap {
    [SET_GLOBALS_EVENT_TYPE]: SetGlobalsEvent;
  }
}
