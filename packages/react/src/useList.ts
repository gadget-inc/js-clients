import type { OptionsType, ReadOperationOptions } from "@gadgetinc/client-hooks";
import type { AnyErrorWrapper, DefaultSelection, FindManyFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/core";
import type { OperationContext } from "@urql/core";
import { useCallback, useMemo, useState } from "react";
import { useFindMany } from "./hooks.js";
import type { SearchResult } from "./useDebouncedSearch.js";
import { useDebouncedSearch } from "./useDebouncedSearch.js";
import type { RecordSelection } from "./useSelectedRecordsController.js";
import { useSelectedRecordsController } from "./useSelectedRecordsController.js";
import { omit } from "./utils.js";

export interface PaginationResult {
  hasNextPage: boolean | undefined;
  hasPreviousPage: boolean | undefined;
  variables: {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
  };
  pageSize: number;
  goToNextPage(): void;
  goToPreviousPage(): void;
}

export interface ListOptions {
  pageSize?: number;
}

export type ListResult<Data> = [
  {
    data?: Data;
    page: PaginationResult;
    search: SearchResult;
    selection: RecordSelection;
    fetching: boolean;
    error?: AnyErrorWrapper;
  },

  (opts?: Partial<OperationContext>) => void,
];

export const useList = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends F["optionsType"] & ReadOperationOptions & ListOptions,
>(
  manager: { findMany: F },
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions & ListOptions>
): ListResult<
  Array<
    GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
  >
> => {
  const [cursor, setCursor] = useState<string | undefined>();
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const clearCursor = useCallback(() => setCursor(undefined), []);

  useMemo(() => {
    clearCursor();
    setDirection("forward");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options?.sort, clearCursor]);

  const { ...search } = useDebouncedSearch({
    onDebouncedSearchValueChange() {
      clearCursor();
      selection.clearAll(); // Referenced before definition because selectedRecordsController needs to reference the records
    },
  });

  const pageSize = options?.pageSize ?? DefaultPageSize;

  let variables;
  if (direction == "forward") {
    variables = {
      first: pageSize,
      after: cursor,
    };
  } else {
    variables = {
      last: pageSize,
      before: cursor,
    };
  }

  const findManyOptions = omit(options, ["pageSize"]);

  const [{ data, fetching, error }, refresh] = useFindMany(manager, {
    ...findManyOptions,
    ...(variables as any),
    ...(search.debouncedValue && { search: search.debouncedValue }),
  });

  const selection = useSelectedRecordsController({ currentPageIds: data?.map((record) => (record as any).id) ?? [] });

  const goToNextPage = useCallback(() => {
    if (data && data.hasNextPage) {
      setDirection("forward");
      setCursor(data.endCursor);
    } else {
      console.warn("can't navigate to next page currently, no next page available");
    }
  }, [data]);

  const goToPreviousPage = useCallback(() => {
    if (data && data.hasPreviousPage) {
      setDirection("backward");
      setCursor(data.startCursor);
    } else {
      console.warn("can't navigate to previous page currently, no previous page available");
    }
  }, [data]);

  const records = data?.map((record) => record);

  const page = {
    pageSize,
    goToNextPage,
    goToPreviousPage,
    hasNextPage: data?.hasNextPage,
    hasPreviousPage: data?.hasPreviousPage,
    variables,
  };

  return [
    {
      data: records as any,
      fetching,
      page,
      search,
      error,
      selection,
    },
    refresh,
  ];
};

export const DefaultPageSize = 50;
