import type { DefaultSelection, FindManyFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import { useCallback, useMemo, useState } from "react";
import type { SearchResult } from "./useDebouncedSearch.js";
import { useDebouncedSearch } from "./useDebouncedSearch.js";
import { useFindMany } from "./useFindMany.js";
import type { RecordSelection } from "./useSelectedRecordsController.js";
import { useSelectedRecordsController } from "./useSelectedRecordsController.js";
import type { ErrorWrapper, OptionsType, ReadOperationOptions } from "./utils.js";
import { omit } from "./utils.js";

/**
 * Provides methods and properties to navigate through a paginated list of records.
 */
export interface PaginationResult {
  /** Indicates whether a next page of results is available. */
  hasNextPage: boolean | undefined;

  /** Indicates whether a previous page of results is available. */
  hasPreviousPage: boolean | undefined;

  /**
   * The variables used to fetch the current page of results.
   */
  variables: {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
  };

  pageSize: number;

  /**
   * Updates the pagination state to fetch the next set of items.
   */
  goToNextPage(): void;

  /**
   * Updates the pagination state to fetch the previous set of items.
   */
  goToPreviousPage(): void;
}

/**
 * Options for configuring the list behavior.
 * @remarks For a full list of options, refer to https://docs.gadget.dev/reference/react#uselist
 */
export interface ListOptions {
  /** The number of items to display per page. If not specified, a default value of 50 is used. */
  pageSize?: number;
}

/**
 * Represents the current state of the list.
 * @template Data - The type of the data returned in the list.
 */
export interface ListState<Data> {
  /** The current page of data items. May be undefined if data is not yet loaded. */
  data?: Data;
  /** Information and controls for pagination. */
  page: PaginationResult;
  /** Information about the current search state. */
  search: SearchResult;
  /** Information about selected records. */
  selection: RecordSelection;
  /** Indicates whether the list is currently being fetched. */
  fetching: boolean;
  /** Error information if an error occurred during fetching. */
  error?: ErrorWrapper;
}

/**
 * A function to refresh the list data.
 * @param {Partial<OperationContext>} [opts] - Optional context for the refresh operation.
 */
export type RefreshFunction = (opts?: Partial<OperationContext>) => void;

/**
 * Represents the result of a list operation.
 * @template Data - The type of the data returned in the list.
 * @remarks For details, refer to https://docs.gadget.dev/reference/react#uselist
 */
export type ListResult<Data> = [ListState<Data>, RefreshFunction];

/**
 * A hook for managing paginated lists with search and selection capabilities.
 *
 * @template T - The type of the records in the list.
 * @template F - The type of the findMany function.
 *
 * @param manager - An object containing the findMany function for the model.
 * @param [options] - Optional configuration for the list.
 * @param [options.pageSize=50] - The number of items per page.
 * @param [options.search] - A search string to filter the records.
 * @param [options.filter] - A filter object to limit the returned records.
 * @param [options.sort] - A sort object to order the returned records.
 * @param [options.select] - A select object to specify which fields to return.
 * @param [options.live] - Whether to subscribe to real-time updates.
 *
 * @example
 * const [{ data, fetching, error, page }, refresh] = useList(api.customer, {
 *   sort: {
 *     createdAt: "Descending",
 *   },
 *   live: true,
 * });
 *
 * @returns A tuple containing the list state and a refresh function.
 * @returns [0] An object containing the list state:
 *   - data: An array of GadgetRecord objects representing the current page of records.
 *   - page: A PaginationResult object for managing pagination.
 *   - search: A SearchResult object for managing search functionality.
 *   - selection: A RecordSelection object for managing selected records.
 *   - fetching: A boolean indicating if the list is currently being fetched.
 *   - error: An ErrorWrapper object if an error occurred, or undefined.
 * @returns [1] A function to refresh the list data.
 *
 * For a full list of options, refer to https://docs.gadget.dev/reference/react#uselist
 */
export const useList = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends F["optionsType"] & ReadOperationOptions & ListOptions
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
      data: records,
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
