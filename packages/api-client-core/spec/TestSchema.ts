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

export type AvailableTestSchemaSelection = {
  num?: boolean | null | undefined;
  str?: boolean | null | undefined;
  obj?: {
    test?: boolean | null | undefined;
    bool?: boolean | null | undefined;
  };
  optionalObj?: {
    test?: boolean | null | undefined;
    bool?: boolean | null | undefined;
  };
  list?: {
    title: boolean | null | undefined;
  };
  optionalList?: {
    title: boolean | null | undefined;
  };
  nested?: NestedThing;
  someConnection?: {
    edges?: {
      node?: {
        id: boolean | null | undefined;
        state: boolean | null | undefined;
      };
    };
    pageInfo?: {
      hasNextPage?: boolean | null | undefined;
      hasPreviousPage?: boolean | null | undefined;
    };
  };
};
