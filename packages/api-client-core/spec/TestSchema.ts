import type { AvailableSelection } from "../src/types.js";

export type NestedThing = {
  bool: boolean;
  string: string;
  nested: NestedThing;
};

export type TestSchema = {
  num: number;
  str: string;
  nested: NestedThing;
  obj: {
    test: "test";
    bool: boolean;
    deep: {
      property: string;
    };
  };
  optionalObj: {
    test: "test";
    bool: boolean;
  } | null;
  list: {
    title: "listy";
    stuff: number[] | null;
  }[];
  optionalList:
    | {
        title: "listy";
        stuff: number[] | null;
      }[]
    | null;
  someConnection: {
    edges:
      | ({
          node: {
            id: string;
            state: string;
          } | null;
        } | null)[]
      | null;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
};

export type AvailableTestSchemaSelection = AvailableSelection<TestSchema>;
