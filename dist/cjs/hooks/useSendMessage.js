"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSendMessage = void 0;
const react_1 = require("react");
/**
 * Hook for sending follow-up messages to the ChatGPT conversation.
 *
 * This hook provides a callback function that allows your app to programmatically
 * send messages to the ChatGPT conversation, as if the user had typed them.
 * This is useful for creating interactive experiences that guide the conversation.
 *
 * @returns A callback function that takes a message string and sends it to ChatGPT
 *
 * @example
 * ```tsx
 * const sendMessage = useSendMessage();
 * return <button onClick={() => sendMessage("Tell me more about this")}>Ask for more details</button>;
 * ```
 */
function useSendMessage() {
    const sendMessage = (0, react_1.useCallback)((prompt) => {
        if (typeof window !== "undefined" && window?.openai?.sendFollowUpMessage) {
            return window.openai.sendFollowUpMessage({ prompt });
        }
        return Promise.resolve();
    }, []);
    return sendMessage;
}
exports.useSendMessage = useSendMessage;
//# sourceMappingURL=useSendMessage.js.map