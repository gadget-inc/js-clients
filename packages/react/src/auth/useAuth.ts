import type { DefaultSelection, GadgetRecord, Select } from "@gadgetinc/api-client-core";
import type { OptionsType, ReadOperationOptions } from "src/utils.js";
import type { ClientWithSessionAndUserManagers, GadgetSession, GadgetUser } from "./useSession.js";
import { useSession } from "./useSession.js";
import { useUser } from "./useUser.js";

/**
 * Used for fetching the current authentication state of the session
 * @returns An object with the current authentication state: `session`, `user`, and `isSignedIn`
 */
export const useAuth = <
  SessionGivenOptions extends OptionsType,
  SessionSchemaT,
  UserGivenOptions extends OptionsType,
  UserSchemaT,
  SessionOptions extends Client["currentSession"]["get"]["optionsType"] & ReadOperationOptions,
  UserOptions extends Client["user"]["findMany"]["optionsType"] & ReadOperationOptions,
  Client extends ClientWithSessionAndUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT>,
  ClientType extends Client | undefined
>(
  client?: Client
): {
  session:
    | GadgetRecord<
        Select<
          Exclude<Exclude<ClientType, undefined>["currentSession"]["get"]["schemaType"], null | undefined>,
          DefaultSelection<
            Exclude<ClientType, undefined>["currentSession"]["get"]["selectionType"],
            SessionOptions,
            Exclude<ClientType, undefined>["currentSession"]["get"]["defaultSelection"] & {
              user: Exclude<ClientType, undefined>["user"]["findMany"]["defaultSelection"];
            }
          >
        >
      >
    | GadgetSession;
  user:
    | GadgetRecord<
        Select<
          Exclude<Exclude<ClientType, undefined>["user"]["findMany"]["schemaType"], null | undefined>,
          DefaultSelection<
            Exclude<ClientType, undefined>["user"]["findMany"]["selectionType"],
            UserOptions,
            Exclude<ClientType, undefined>["user"]["findMany"]["defaultSelection"]
          >
        >
      >
    | GadgetUser;
  isSignedIn: boolean;
} => {
  const session = useSession(client);
  const user = useUser(client);
  return { session, user, isSignedIn: !!user };
};
