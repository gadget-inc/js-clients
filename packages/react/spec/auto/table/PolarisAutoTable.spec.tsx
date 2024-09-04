import { jest } from "@jest/globals";
import { act, render } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { GadgetFieldType } from "../../../src/internal/gql/graphql.js";
import type { TableColumn } from "../../../src/use-table/types.js";
import { testApi as api } from "../../apis.js";
import { PolarisMockedProviders } from "../inputs/PolarisMockedProviders.js";

const sampleUUID1 = "000-000-000-000-001";
const sampleUUID2 = "000-000-000-000-002";

const POLARIS_TABLE_CLASSES = {
  CONTAINER: "Polaris-IndexTable-ScrollContainer",
  HEADING: "Polaris-IndexTable__TableHeading",
  ROW: "Polaris-IndexTable__TableRow",
  CELL: "Polaris-IndexTable__TableCell",
} as const;

const POLARIS_TAG_CLASS = "Polaris-Tag";

let rows: any[] = [];
let columns: TableColumn[] = [];
let error: Error | undefined;

const setMockUseTableResponse = (returns?: { newRows?: any[]; newColumns?: TableColumn[]; newError?: Error }) => {
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
      identifier: "name",
      field: "name",
      header: "Name",
      sortable: true,
      type: GadgetFieldType.String,
    },
    {
      identifier: "inventoryCount",
      field: "inventoryCount",
      header: "Inventory count",
      sortable: true,
      type: GadgetFieldType.Number,
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
      sort: {
        column: "",
        direction: "Ascending",
        handleColumnSort: jest.fn(),
        setSort: jest.fn(),
      },
      error,
      selection: {
        recordIds: [],
        clearAll: jest.fn(),
        selectCurrentPage: jest.fn(),
        selectIds: jest.fn(),
        deselectIds: jest.fn(),
        onSelectionChange: jest.fn(),
      },
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

    expect(onClickCallback).toHaveBeenCalledWith(
      {
        id: "1",
        name: "hello",
        inventoryCount: 1,
      },
      undefined // Raw records are not mocked, thus are undefined in this callback
    );
  });

  it("should render the columns using the correct cell renderer in related model fields", () => {
    setMockUseTableResponse({
      newRows: [
        {
          id: "1",
          "hasOne.hasOneName": "has one name value",
          "hasMany.hasManyNumber": ["1", "2"],
          "belongsTo.belongsToEnum": ["belongs", "to", "enum", "value"],
        },
      ],
      newColumns: [
        {
          identifier: "hasOne.hasOneName",
          field: "hasOne.hasOneName",
          relationshipType: GadgetFieldType.HasOne,
          type: GadgetFieldType.String,
          header: "Has One",
          sortable: true,
        },
        {
          identifier: "hasMany.hasManyNumber",
          field: "hasMany.hasManyNumber",
          relationshipType: GadgetFieldType.HasMany,
          type: GadgetFieldType.String,
          header: "Has Many",
          sortable: true,
        },
        {
          identifier: "belongsTo.belongsToEnum",
          field: "belongsTo.belongsToEnum",
          relationshipType: GadgetFieldType.BelongsTo,
          type: GadgetFieldType.Enum,
          header: "Belongs To",
          sortable: true,
        },
      ],
    });

    const { container } = render(
      <PolarisAutoTable model={api.widget} columns={["name", "hasOne.hasOneName", "hasMany.hasManyNumber", "belongsTo.belongsToEnum"]} />,
      {
        wrapper: PolarisMockedProviders,
      }
    );
    const table = container.querySelector(`.${POLARIS_TABLE_CLASSES.CONTAINER}`)!;
    const rows = table.getElementsByClassName(POLARIS_TABLE_CLASSES.ROW);

    const firstRow = rows[0];
    const firstRowCells = firstRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);

    // "hasOne" column
    expect(firstRowCells[1].textContent).toBe("has one name value");

    // "hasMany" column
    const tagsInHasManyCell = firstRowCells[2].getElementsByClassName(POLARIS_TAG_CLASS);
    expect(tagsInHasManyCell.length).toBe(2);
    expect(Array.from(tagsInHasManyCell).map((t) => t.textContent)).toEqual(["1", "2"]);

    // "belongsTo" column
    const tagsInBelongsToCell = firstRowCells[3].getElementsByClassName(POLARIS_TAG_CLASS);
    expect(tagsInBelongsToCell.length).toBe(4);
    expect(Array.from(tagsInBelongsToCell).map((t) => t.textContent)).toEqual(["belongs", "to", "enum", "value"]);
  });

  it("should render the custom columns", () => {
    const customCellRenderer = (props: { record: any }) => (
      <div data-testid="custom-cell-div">
        this is a custom cell: {props.record.id}-{props.record.name}
      </div>
    );

    setMockUseTableResponse({
      newRows: [
        {
          id: "1",
          name: "hello",
          [sampleUUID1]: customCellRenderer({ record: { id: "1", name: "hello" } }),
        },
      ],
      newColumns: [
        {
          identifier: "name",
          field: "name",
          type: GadgetFieldType.String,
          header: "Name",
          sortable: true,
        },
        {
          identifier: sampleUUID1,
          header: "Custom cell",
          field: "Custom cell",
          type: "CustomRenderer",
          sortable: false,
        },
      ],
    });

    const { container } = render(
      <PolarisAutoTable
        model={api.widget}
        columns={[
          "name",
          {
            header: "Custom cell",
            render: customCellRenderer,
          },
        ]}
      />,
      {
        wrapper: PolarisMockedProviders,
      }
    );

    const table = container.querySelector(`.${POLARIS_TABLE_CLASSES.CONTAINER}`)!;
    const rows = table.getElementsByClassName(POLARIS_TABLE_CLASSES.ROW);

    const firstRow = rows[0];
    const firstRowCells = firstRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);
    expect(firstRowCells[1].textContent).toBe("hello");
    expect(firstRowCells[2].textContent).toBe("this is a custom cell: 1-hello");
  });

  it("should render the custom columns when they have duplicate headers", () => {
    const customCellRenderer1 = (props: { record: any }) => (
      <div data-testid="custom-cell-div">
        this is a custom cell: {props.record.id}-{props.record.name}
      </div>
    );
    const customCellRenderer2 = (props: { record: any }) => (
      <div data-testid="custom-cell-div-2">
        Different custom cell: {props.record.id}-{props.record.name}
      </div>
    );

    setMockUseTableResponse({
      newRows: [
        {
          id: "1",
          name: "hello",
          [sampleUUID1]: customCellRenderer1({ record: { id: "1", name: "hello" } }),
          [sampleUUID2]: customCellRenderer2({ record: { id: "1", name: "hello" } }),
        },
      ],
      newColumns: [
        {
          identifier: "name",
          field: "name",
          type: GadgetFieldType.String,
          header: "Name",
          sortable: true,
        },
        {
          identifier: sampleUUID1,
          header: "Custom cell",
          field: "Custom cell",
          type: "CustomRenderer",
          sortable: false,
        },
        {
          identifier: sampleUUID2,
          header: "Custom cell",
          field: "Custom cell",
          type: "CustomRenderer",
          sortable: false,
        },
      ],
    });

    const { container } = render(
      <PolarisAutoTable
        model={api.widget}
        columns={["name", { header: "Custom cell", render: customCellRenderer1 }, { header: "Custom cell", render: customCellRenderer2 }]}
      />,
      {
        wrapper: PolarisMockedProviders,
      }
    );

    const table = container.querySelector(`.${POLARIS_TABLE_CLASSES.CONTAINER}`)!;
    const rows = table.getElementsByClassName(POLARIS_TABLE_CLASSES.ROW);

    const firstRow = rows[0];
    const firstRowCells = firstRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);
    expect(firstRowCells[1].textContent).toBe("hello");
    expect(firstRowCells[2].textContent).toBe("this is a custom cell: 1-hello");
    expect(firstRowCells[3].textContent).toBe("Different custom cell: 1-hello");
  });

  describe("show more indicator in tag cell renderer", () => {
    it("should appear in the cell when there are more than 5 tags", () => {
      setMockUseTableResponse({
        newRows: [
          {
            id: "1",
            tags: ["1", "2", "3", "4", "5", "6"],
          },
        ],
        newColumns: [
          {
            identifier: "tags",
            field: "tags",
            type: GadgetFieldType.Enum,
            header: "Tags",
            sortable: true,
          },
        ],
      });

      const { container } = render(<PolarisAutoTable model={api.widget} />, {
        wrapper: PolarisMockedProviders,
      });

      const table = container.querySelector(`.${POLARIS_TABLE_CLASSES.CONTAINER}`)!;
      const rows = table.getElementsByClassName(POLARIS_TABLE_CLASSES.ROW);

      const firstRow = rows[0];
      const firstRowCells = firstRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);

      expect(firstRowCells[1].getElementsByClassName(POLARIS_TAG_CLASS).length).toBe(5);
      expect(firstRowCells[1].innerHTML).toContain("...");
    });

    it("should not appear in the cell when there are less than 5 tags", () => {
      setMockUseTableResponse({
        newRows: [
          {
            id: "1",
            tags: ["1", "2", "3", "4"],
          },
        ],
        newColumns: [
          {
            identifier: "tags",
            field: "tags",
            type: GadgetFieldType.Enum,
            header: "Tags",
            sortable: true,
          },
        ],
      });

      const { container } = render(<PolarisAutoTable model={api.widget} />, {
        wrapper: PolarisMockedProviders,
      });

      const table = container.querySelector(`.${POLARIS_TABLE_CLASSES.CONTAINER}`)!;
      const rows = table.getElementsByClassName(POLARIS_TABLE_CLASSES.ROW);

      const firstRow = rows[0];
      const firstRowCells = firstRow.getElementsByClassName(POLARIS_TABLE_CLASSES.CELL);

      expect(firstRowCells[1].getElementsByClassName(POLARIS_TAG_CLASS).length).toBe(4);
      expect(firstRowCells[1].innerHTML).not.toContain("...");
    });
  });
});
