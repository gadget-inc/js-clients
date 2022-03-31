import { OperationContext, RequestPolicy } from "urql";

interface QueryPlan {
  variables: any;
  query: string;
}

interface QueryOptions {
  context?: Partial<OperationContext>;
  pause?: boolean;
  requestPolicy?: RequestPolicy;
}

export const getQueryArgs = <Plan extends QueryPlan, Options extends QueryOptions>(plan: Plan, options?: Options) => ({
  query: plan.query,
  variables: plan.variables,
  context: options?.context,
  pause: options?.pause,
  requestPolicy: options?.requestPolicy,
});
