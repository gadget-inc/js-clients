import type { AnyClient, DefaultSelection, FindManyFunction, GadgetRecord, GetFunction, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { OptionsType, ReadOperationOptions } from "../utils.js";
export type GadgetSession = GadgetRecord<Record<string, any>>;
export type GadgetUser = GadgetRecord<Record<string, any>>;
export type ClientWithSessionAndUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT> = AnyClient & {
    currentSession: {
        get: GetFunction<SessionGivenOptions, any, SessionSchemaT, any>;
    };
    user: {
        findMany: FindManyFunction<UserGivenOptions, any, UserSchemaT, any>;
    };
};
/**
 * Used for fetching the current `Session` record from Gadget. Will suspend while the user is being fetched.
 * @returns The current session
 */
export declare function useSession<SessionGivenOptions extends OptionsType, SessionSchemaT, UserGivenOptions extends OptionsType, UserSchemaT, Client extends ClientWithSessionAndUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT>, Options extends Client["currentSession"]["get"]["optionsType"] & ReadOperationOptions, ClientType extends Client | undefined>(client?: ClientType, options?: LimitToKnownKeys<Options, Client["currentSession"]["get"]["optionsType"] & ReadOperationOptions>): undefined extends ClientType ? GadgetSession : GadgetRecord<Select<Exclude<Exclude<ClientType, undefined>["currentSession"]["get"]["schemaType"], null | undefined>, DefaultSelection<Exclude<ClientType, undefined>["currentSession"]["get"]["selectionType"], Options, Exclude<ClientType, undefined>["currentSession"]["get"]["defaultSelection"] & {
    user: Exclude<ClientType, undefined>["user"]["findMany"]["defaultSelection"];
}>>>;
