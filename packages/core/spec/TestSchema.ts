import type { GadgetRecord } from "../src/GadgetRecord.js";
import type { AvailableSelection, DeepFilterNever, DefaultSelection, Select, Selectable } from "../src/types.js";

export type NestedThing = {
  bool: boolean;
  string: string;
  nested: NestedThing;
};

export type TestSchemaWithFieldCalls = {
  num: number;
  str: string;
  fieldCall: {
    nestedField1: number;
    nestedField2: {
      nestedField3: string;
    };
  };
};

export type TestSchemaWithNestedFieldCalls = {
  outerFieldCall: {
    innerFieldCall: {
      deepField: string;
    };
    regularField: number;
  };
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

export const DefaultPostSelection = {
  __typename: true,
  createdAt: true,
  id: true,
  updatedAt: true,
} as const;

export type Post = {
  __typename: "Post";
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AvailablePostSelection = {
  __typename?: boolean | null | undefined;
  id?: boolean | null | undefined;
  createdAt?: boolean | null | undefined;
  updatedAt?: boolean | null | undefined;
};

export type SelectedPostOrDefault<Options extends Selectable<AvailablePostSelection>> = DeepFilterNever<
  Select<Post, DefaultSelection<AvailablePostSelection, Options, typeof DefaultPostSelection>>
>;

export interface CreatePostOptions {
  select?: AvailablePostSelection;
}

export type CreatePostResult<Options extends CreatePostOptions> =
  SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>;
