import type { DefaultSelection, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { useApi } from "../GadgetProvider";
import type { OptionsType, ReadOperationOptions } from "../utils";
import type { ClientWithSessionAndUserManagers } from "./useSession";
import { useSession } from "./useSession";

/**
 * Used for fetching the current `User` record from Gadget. Will return `null` if the session is unauthenticated. Will suspend while the user is being fetched.
 * @returns The current user associated with the session or `null`.
 */
export function useUser<
  SessionGivenOptions extends OptionsType,
  SessionSchemaT,
  UserGivenOptions extends OptionsType,
  UserSchemaT,
  Client extends ClientWithSessionAndUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT>,
  Options extends Client["user"]["findMany"]["optionsType"] & ReadOperationOptions,
  ClientType extends Client | undefined
>(
  client?: ClientType,
  options?: LimitToKnownKeys<Options, Client["user"]["findMany"]["optionsType"] & ReadOperationOptions>
): undefined extends ClientType
  ? GadgetRecord<Record<string, any>>
  : GadgetRecord<
      Select<
        Exclude<Exclude<ClientType, undefined>["user"]["findMany"]["schemaType"], null | undefined>,
        DefaultSelection<
          Exclude<ClientType, undefined>["user"]["findMany"]["selectionType"],
          Options,
          Exclude<ClientType, undefined>["user"]["findMany"]["defaultSelection"]
        >
      >
    > {
  const fallbackApi = useApi() as any;
  const api = client ?? fallbackApi;

  if (!("user" in api)) {
    throw new Error("api client does not have a User model");
  }

  const { select, ...opts } = options ?? {};
  const defaultOpts = {
    suspense: true,
    ...opts,
    select: {
      user: select ?? api.user.findMany.defaultSelection,
    },
  };
  const session = useSession(api, defaultOpts);
  return session && session.getField("user");
}
