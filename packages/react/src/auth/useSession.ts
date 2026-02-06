import type { OptionsType, ReadOperationOptions } from "@gadgetinc/client-hooks";
import type { AnyClient, DefaultSelection, FindManyFunction, GadgetRecord, GetFunction, LimitToKnownKeys, Select } from "@gadgetinc/core";
import { useApi, useGet } from "../hooks.js";

export type GadgetSession = GadgetRecord<Record<string, any>>;

export type GadgetUser = GadgetRecord<Record<string, any>>;

export type ClientWithSessionAndUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT> = AnyClient & {
  currentSession: { get: GetFunction<SessionGivenOptions, any, SessionSchemaT, any> };
  user: { findMany: FindManyFunction<UserGivenOptions, any, UserSchemaT, any> };
};

export type ClientWithSessionAndMaybeUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT> = Omit<
  ClientWithSessionAndUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT>,
  "user"
> & {
  user?: { findMany: FindManyFunction<UserGivenOptions, any, UserSchemaT, any> };
};

/**
 * Used for fetching the current `Session` record from Gadget. Will suspend while the user is being fetched.
 * @returns The current session
 */
export function useSession<
  SessionGivenOptions extends OptionsType,
  SessionSchemaT,
  UserGivenOptions extends OptionsType,
  UserSchemaT,
  Client extends ClientWithSessionAndMaybeUserManagers<SessionGivenOptions, SessionSchemaT, UserGivenOptions, UserSchemaT>,
  Options extends Client["currentSession"]["get"]["optionsType"] & ReadOperationOptions,
  ClientType extends Client | undefined,
>(
  client?: ClientType,
  options?: LimitToKnownKeys<Options, Client["currentSession"]["get"]["optionsType"] & ReadOperationOptions>
): undefined extends ClientType
  ? GadgetSession
  : GadgetRecord<
      Select<
        Exclude<Exclude<ClientType, undefined>["currentSession"]["get"]["schemaType"], null | undefined>,
        DefaultSelection<
          Exclude<ClientType, undefined>["currentSession"]["get"]["selectionType"],
          Options,
          Exclude<ClientType, undefined>["currentSession"]["get"]["defaultSelection"] & {
            user: Exclude<ClientType, undefined>["user"] extends { findMany: FindManyFunction<UserGivenOptions, any, UserSchemaT, any> }
              ? Exclude<ClientType, undefined>["user"]["findMany"]["defaultSelection"]
              : never;
          }
        >
      >
    > {
  const fallbackApi = useApi();
  const api = client ?? (fallbackApi as ClientType);

  if (api && "currentSession" in api && "session" in api) {
    const { select: selection, ...restOptions } = options ?? ({} as any);
    const { user: userSelect, ...sessionSelect } = selection ?? { user: undefined };
    const sessionSelection = Object.keys(sessionSelect).length > 0 ? sessionSelect : api.currentSession.get.defaultSelection;
    const userSelection = userSelect ? userSelect : api.user?.findMany.defaultSelection;

    const opts: any = {
      suspense: true,
      select: {
        ...sessionSelection,
        ...(userSelection && { user: userSelection }),
      },
      ...(restOptions ?? {}),
    };

    // oxlint-disable-next-line react/rules-of-hooks -- else branch always throws, so hook order is consistent
    const [{ data: session, error }] = useGet(api.currentSession, opts);

    if (error) throw error;
    if (!session) throw new Error("currentSession not found but should be present");
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return typeof client == "undefined" ? session : (session as any);
  } else {
    throw new Error("api client does not have a Session model");
  }
}
