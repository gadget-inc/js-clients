import type { ClientOptions as SubscriptionClientOptions } from "graphql-ws";
export interface GadgetSubscriptionClientOptions extends Partial<SubscriptionClientOptions> {
    urlParams?: Record<string, string | null | undefined>;
    connectionAttempts?: number;
    connectionGlobalTimeoutMs?: number;
}
export interface AnyConnection {
}
