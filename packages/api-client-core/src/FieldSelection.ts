/**
 * Represents a list of fields selected from a GraphQL API call. Allows nesting, conditional selection.
 * Example: `{ id: true, name: false, richText: { markdown: true, html: false } }`
 **/
export interface FieldSelection {
  [key: string]: FieldSelectionType;
}

export type FieldSelectionType = boolean | null | undefined | FieldSelection | ConnectionFieldSelection;

export interface ConnectionFieldSelection {
  before?: string;
  after?: string;
  first?: number;
  last?: number;
  pageInfo?: FieldSelection;
  edges: EdgeFieldSelection;
}

export interface EdgeFieldSelection {
  node: FieldSelection;
}

function isEdgeConnection(selection: FieldSelection | ConnectionFieldSelection): boolean {
  return "edges" in selection && typeof selection["edges"] == "object";
}

export function isFieldSelection(selection: FieldSelectionType): selection is FieldSelection {
  return !!(selection && typeof selection == "object" && !isEdgeConnection(selection));
}

export function isConnectionFieldSelection(selection: FieldSelectionType): selection is ConnectionFieldSelection {
  return !!(selection && typeof selection == "object" && isEdgeConnection(selection));
}
