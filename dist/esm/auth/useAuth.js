import { useContext } from "react";
import { GadgetConfigurationContext } from "../GadgetProvider.js";
import { useSession } from "./useSession.js";
import { useUser } from "./useUser.js";
/**
 * Used for fetching the current authentication state of the session
 * @returns An object with the current authentication state: `session`, `user`, and `isSignedIn`
 */
export const useAuth = (client) => {
    const session = useSession(client);
    const user = useUser(client);
    const context = useContext(GadgetConfigurationContext);
    if (!context) {
        throw new Error("useAuth must be used within a GadgetProvider");
    }
    return { session, user, isSignedIn: !!user, configuration: context.auth };
};
//# sourceMappingURL=useAuth.js.map