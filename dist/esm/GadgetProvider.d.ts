import type { AnyClient } from "@gadgetinc/core";
import type { ComponentChildren } from "preact";
export interface ProviderProps {
    api: AnyClient;
    children: ComponentChildren;
}
export declare function Provider(props: ProviderProps): import("preact").JSX.Element;
