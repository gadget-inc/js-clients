"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSignOut = void 0;
const react_1 = require("react");
const GadgetProvider_1 = require("../../src/GadgetProvider");
const useAction_1 = require("../../src/useAction");
const useUser_1 = require("./useUser");
/**
 * Returns a callback that will POST to the configured `signOutPath` on the `Provider`, and then redirect the user to the returned URL.
 * @returns The callback to sign out the `User`
 */
const useSignOut = () => {
    const api = (0, GadgetProvider_1.useApi)();
    const user = (0, useUser_1.useUser)();
    const context = (0, react_1.useContext)(GadgetProvider_1.GadgetConfigurationContext);
    const signOutActionApiIdentifier = context?.auth.signOutActionApiIdentifier;
    if (signOutActionApiIdentifier && api.user[signOutActionApiIdentifier]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const [, signOutAction] = (0, useAction_1.useAction)(api.user[signOutActionApiIdentifier], { suspense: true });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return () => signOutAction(user.id);
    }
    else {
        throw new Error(`missing configured signOutActionApiIdentifier '${signOutActionApiIdentifier}' on the \`api.user\` model manager.`);
    }
};
exports.useSignOut = useSignOut;
//# sourceMappingURL=useSignOut.js.map