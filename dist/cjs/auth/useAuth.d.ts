import type { DefaultSelection, GadgetRecord, Select } from "@gadgetinc/api-client-core";
import type { OptionsType, ReadOperationOptions } from "src/utils";
import type { GadgetAuthConfiguration } from "../GadgetProvider.js";
import type { ClientWithSessionAndUserManagers, GadgetSession, GadgetUser } from "./useSession.js";
/**
 * Used for fetching the current authentication state of the session
 * @returns An object with the current authentication state: `session`, `user`, and `isSignedIn`
 */
export declare const useAuth: <SessionGivenOptions extends OptionsType, SessionSchemaT, UserGivenOptions extends OptionsType, UserSchemaT, SessionOptions extends Client["currentSession"]["get"]["optionsType"] & ReadOperationOptions, UserOptions extends Client["user"]["findMany"]["optionsType"] & ReadOperationOptions, Client extends ClientWithSessionAndUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT>, ClientType extends Client | undefined>(client?: Client | undefined) => {
    session: GadgetSession | GadgetRecord<Select<Exclude<Exclude<ClientType, undefined>["currentSession"]["get"]["schemaType"], null | undefined>, DefaultSelection<Exclude<ClientType, undefined>["currentSession"]["get"]["selectionType"], SessionOptions, Exclude<ClientType, undefined>["currentSession"]["get"]["defaultSelection"] & {
        user: Exclude<ClientType, undefined>["user"]["findMany"]["defaultSelection"];
    }>>>;
    user: GadgetUser | GadgetRecord<Select<Exclude<Exclude<ClientType, undefined>["user"]["findMany"]["schemaType"], null | undefined>, DefaultSelection<Exclude<ClientType, undefined>["user"]["findMany"]["selectionType"], UserOptions, Exclude<ClientType, undefined>["user"]["findMany"]["defaultSelection"]>>>;
    isSignedIn: boolean;
    configuration: GadgetAuthConfiguration;
};
