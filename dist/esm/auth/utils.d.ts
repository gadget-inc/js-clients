import type { GadgetSession } from "./useSession.js";
export declare const isSessionSignedOut: (session: GadgetSession) => boolean;
export declare const isSessionSignedIn: (session: GadgetSession) => boolean;
export declare function windowNavigate(path: string): void;
