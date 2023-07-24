import { parse } from "graphql";
import parserGraphql from "prettier/parser-graphql";
import prettier from "prettier/standalone";

export function expectValidGraphQLQuery(query: string) {
  try {
    parse(query);
  } catch (error) {
    console.warn("invalid graphql query in tests", query);
    throw error;
  }
}

export const prettifyGraphQL = (query: string) => {
  return prettier.format(query, {
    parser: "graphql",
    plugins: [parserGraphql],
  });
};
