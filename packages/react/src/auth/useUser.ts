import type { DefaultSelection, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { OptionsType, ReadOperationOptions } from "src/utils";
import { useApi } from "../../src/GadgetProvider";
import type { ClientWithSessionAndUserManagers} from "./useSession";
import { useSession } from "./useSession";

/**
 * Used for fetching the current `User` record from Gadget. Will return `null` if the session is unauthenticated. Will suspend while the user is being fetched.
 * @returns The current user associated with the session or `null`.
 */
export function useUser(): GadgetRecord<any>;
export function useUser<
  SessionGivenOptions extends OptionsType,
  SessionSchemaT,
  UserGivenOptions extends OptionsType,
  UserSchemaT,
  Client extends ClientWithSessionAndUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT>,
  Options extends Client["user"]["findMany"]["optionsType"] & ReadOperationOptions
>(
  client: Client,
  options?: LimitToKnownKeys<Options, Client["user"]["findMany"]["optionsType"] & ReadOperationOptions>
):
  | GadgetRecord<any>
  | GadgetRecord<
      Select<
        Exclude<Client["user"]["findMany"]["schemaType"], null | undefined>,
        DefaultSelection<Client["user"]["findMany"]["selectionType"], Options, Client["user"]["findMany"]["defaultSelection"]>
      >
    >;
export function useUser<
  SessionGivenOptions extends OptionsType,
  SessionSchemaT,
  UserGivenOptions extends OptionsType,
  UserSchemaT,
  Client extends ClientWithSessionAndUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT>,
  Options extends Client["user"]["findMany"]["optionsType"] & ReadOperationOptions
>(
  client?: Client,
  options?: LimitToKnownKeys<Options, Client["user"]["findMany"]["optionsType"] & ReadOperationOptions>
):
  | GadgetRecord<any>
  | GadgetRecord<
      Select<
        Exclude<Client["user"]["findMany"]["schemaType"], null | undefined>,
        DefaultSelection<Client["user"]["findMany"]["selectionType"], Options, Client["user"]["findMany"]["defaultSelection"]>
      >
    > {
  const fallbackApi = useApi() as any;
  const api = client ?? fallbackApi;

  const { select, ...opts } = options ?? {};
  const defaultOpts: Client["currentSession"]["get"]["optionsType"] & ReadOperationOptions = {
    suspense: true,
    ...opts,
    select: {
      user: select ?? api.user.findMany.defaultSelection,
    },
  } as any;
  const session = useSession(api, defaultOpts);
  return session && session.getField("user");
}
