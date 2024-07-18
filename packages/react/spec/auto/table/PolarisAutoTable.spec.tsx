import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";
import { testApi as api } from "../../apis.js";
import { PolarisMockedProviders } from "../inputs/PolarisMockedProviders.js";

const POLARIS_TABLE_CLASSES = {
  CONTAINER: "Polaris-IndexTable-ScrollContainer",
  HEADING: "Polaris-IndexTable__TableHeading",
  ROW: "Polaris-IndexTable__TableRow",
  CELL: "Polaris-IndexTable__TableCell",
} as const;

// The path is relative to the file from the packages/react/spec/jest.setup.ts file, not from this test file
jest.unstable_mockModule("../src/useTable", () => ({
  useTable: jest.fn().mockImplementation(() => {
    return [
      {
        rows: [
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
        ],
        columns: [
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
        ],
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
      },
      jest.fn(),
    ];
  }),
}));

// We are mocking the useTable hook that is used by PolarisAutoTable, so we need to import it dynamically
const { PolarisAutoTable } = await import("../../../src/auto/polaris/PolarisAutoTable.js");

describe("PolarisAutoTable", () => {
  it("can render a table with records inside", () => {
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
    const rows = table.getElementsByClassName(POLARIS_TABLE_CLASSES.ROW);
    expect(rows.length).toBe(3);

    const firstRow = rows[0];
    const firstRowCells = firstRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);
    expect(firstRowCells[1].textContent).toBe("hello");
    expect(firstRowCells[2].textContent).toBe("1");

    const secondRow = rows[1];
    const secondRowCells = secondRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);
    expect(secondRowCells[1].textContent).toBe("cool");
    expect(secondRowCells[2].textContent).toBe("2");

    const thirdRow = rows[2];
    const thirdRowCells = thirdRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);
    expect(thirdRowCells[1].textContent).toBe("world");
    expect(thirdRowCells[2].textContent).toBe(""); // Empty cell for null value
  });
});
