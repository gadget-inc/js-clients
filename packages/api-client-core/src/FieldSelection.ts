import { FieldCall as QueryCompilerFieldCall } from "tiny-graphql-query-compiler";

/** Object capturing the call arguments for a call to a field in a selection */
export class FieldCall<
  Args extends Record<string, any>,
  Subselection extends FieldSelection | null | undefined,
  Schema = unknown
> extends QueryCompilerFieldCall {
  constructor(readonly args: Args, readonly subselection?: Subselection) {
    super(args, subselection);
  }
}

/** Use this to pass a GraphQL field arguments in the `select` param */
export const Call = <Args extends Record<string, any>, Subselection extends FieldSelection | null | undefined, Schema = unknown>(
  args: Args,
  subselection?: Subselection
) => new FieldCall<Args, Subselection, Schema>(args, subselection);

/**
 * Represents a list of fields selected from a GraphQL API call. Allows nesting, conditional selection.
 * Example: `{ id: true, name: false, richText: { markdown: true, html: false } }`
 **/
export interface FieldSelection {
  [key: string]: boolean | null | undefined | FieldSelection | FieldCall<any, any, any>;
}
