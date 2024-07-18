import { jest } from "@jest/globals";
import { act, render } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { testApi as api } from "../../apis.js";
import { PolarisMockedProviders } from "../inputs/PolarisMockedProviders.js";

const POLARIS_TABLE_CLASSES = {
  CONTAINER: "Polaris-IndexTable-ScrollContainer",
  HEADING: "Polaris-IndexTable__TableHeading",
  ROW: "Polaris-IndexTable__TableRow",
  CELL: "Polaris-IndexTable__TableCell",
} as const;

let rows: any[] = [];
let columns: any[] = [];
let error: Error | undefined;

const setMockUseTableResponse = (returns?: { newRows?: any[]; newColumns?: any[]; newError?: Error }) => {
  rows = returns?.newRows ?? [
    {
      id: "1",
      name: "hello",
      inventoryCount: 1,
    },
    {
      id: "2",
      name: "cool",
      inventoryCount: 2,
    },
    {
      id: "3",
      name: "world",
      inventoryCount: null,
    },
  ];
  columns = returns?.newColumns ?? [
    {
      apiIdentifier: "name",
      fieldType: "String",
      name: "Name",
      sortable: true,
    },
    {
      apiIdentifier: "inventoryCount",
      fieldType: "Number",
      name: "Inventory count",
      sortable: true,
    },
  ];
  error = returns?.newError ?? undefined;
};

// The path is relative to the file from the packages/react/spec/jest.setup.ts file, not from this test file
jest.unstable_mockModule("../src/useTable", () => ({
  useTable: jest.fn().mockImplementation(() => [
    {
      rows,
      columns,
      metadata: {
        name: "Widget",
      },
      page: {
        hasNextPage: false,
        hasPreviousPage: false,
        goToNextPage: jest.fn(),
        goToPreviousPage: jest.fn(),
      },
      fetching: false,
      search: {
        value: "",
        set: jest.fn(),
        clear: jest.fn(),
      },
      error,
    },
    jest.fn(),
  ]),
}));

// We are mocking the useTable hook that is used by PolarisAutoTable, so we need to import it dynamically
const { PolarisAutoTable } = await import("../../../src/auto/polaris/PolarisAutoTable.js");

describe("PolarisAutoTable", () => {
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should render a table with records inside", () => {
    setMockUseTableResponse();
    const { container } = render(<PolarisAutoTable model={api.widget} />, { wrapper: PolarisMockedProviders });
    const table = container.querySelector(`.${POLARIS_TABLE_CLASSES.CONTAINER}`)!;

    const headers = table.getElementsByClassName(POLARIS_TABLE_CLASSES.HEADING);
    expect(Array.from(headers).map((h) => h.textContent)).toEqual([
      "Select all Widgets", // The default "select all" checkbox
      "Name",
      "Inventory count",
    ]);

    // The first header column should be a checkbox
    expect(headers[0].querySelector("input")).toHaveAttribute("type", "checkbox");

    // Three rows should be rendered
    const tableRows = table.getElementsByClassName(POLARIS_TABLE_CLASSES.ROW);
    expect(tableRows.length).toBe(3);

    const firstRow = tableRows[0];
    const firstRowCells = firstRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);
    expect(firstRowCells[1].textContent).toBe("hello");
    expect(firstRowCells[2].textContent).toBe("1");

    const secondRow = tableRows[1];
    const secondRowCells = secondRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);
    expect(secondRowCells[1].textContent).toBe("cool");
    expect(secondRowCells[2].textContent).toBe("2");

    const thirdRow = tableRows[2];
    const thirdRowCells = thirdRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);
    expect(thirdRowCells[1].textContent).toBe("world");
    expect(thirdRowCells[2].textContent).toBe(""); // Empty cell for null value
  });

  it("should show an error banner when there is a GraphQL error", () => {
    setMockUseTableResponse({
      newRows: [],
      newColumns: [],
      newError: new Error(`[GraphQL] Cannot query field "somethingSuperWrong" on type "Widget".`),
    });

    const { container } = render(<PolarisAutoTable model={api.widget} />, { wrapper: PolarisMockedProviders });
    const table = container.querySelector(`.${POLARIS_TABLE_CLASSES.CONTAINER}`)!;

    const headers = table.getElementsByClassName(POLARIS_TABLE_CLASSES.HEADING);
    expect(Array.from(headers).map((h) => h.textContent)).toEqual([]);

    // The error banner should be rendered
    expect(container.querySelector(".Polaris-Banner")!.textContent).toBe(
      `[GraphQL] Cannot query field "somethingSuperWrong" on type "Widget".`
    );

    // Zero rows should be rendered
    const tableRows = table.getElementsByClassName(POLARIS_TABLE_CLASSES.ROW);
    expect(tableRows.length).toBe(0);
  });

  it("should have the row record as a parameter when clicking on a table row if onClick callback is provided", async () => {
    setMockUseTableResponse();

    const onClickCallback = jest.fn();
    const { container } = render(<PolarisAutoTable model={api.widget} onClick={onClickCallback} />, {
      wrapper: PolarisMockedProviders,
    });
    const table = container.querySelector(`.${POLARIS_TABLE_CLASSES.CONTAINER}`)!;
    const rows = table.getElementsByClassName(POLARIS_TABLE_CLASSES.ROW);

    const firstRow = rows[0];
    const firstRowCells = firstRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);

    await act(async () => {
      await user.click(firstRowCells[0]);
    });

    expect(onClickCallback).toHaveBeenCalledWith({
      id: "1",
      name: "hello",
      inventoryCount: 1,
    });
  });
});
