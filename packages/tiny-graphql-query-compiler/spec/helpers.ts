import { parse } from "@0no-co/graphql.web";

export function expectValidGraphQLQuery(query: string) {
  try {
    parse(query);
  } catch (error) {
    console.warn("invalid graphql query in tests", query);
    throw error;
  }
}
