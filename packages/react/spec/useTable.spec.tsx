import type { GadgetRecordList } from "@gadgetinc/api-client-core";
import { renderHook } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { FieldType } from "../src/metadata.js";
import { useFindMany } from "../src/useFindMany.js";
import { useTable } from "../src/useTable.js";
import type { ErrorWrapper } from "../src/utils.js";
import { relatedProductsApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useTable", () => {
  // all these functions are typechecked but never run to avoid actually making API calls
  const _TestUseTableReturnsTypedDataWithExplicitSelection = () => {
    const [{ rows, columns, data, fetching, error }, refresh] = useTable(relatedProductsApi.user, { select: { id: true, email: true } });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, null | GadgetRecordList<{ id: string; email: string | null }>>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    if (data) {
      data[0].id;
      data[0].email;
    }
    if (rows) {
      rows[0].id;
      rows[0].email;
    }
    if (columns) {
      columns[0].apiIdentifier;
    }

    refresh();
  };

  const _TestTableReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useFindMany(relatedProductsApi.user);

    if (data) {
      data[0].id;
      data[0].email;
    }
  };

  test("can get a table for a model's records", async () => {
    const { result } = renderHook(() => useTable(relatedProductsApi.user), { wrapper: MockClientWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].rows).toBeFalsy();
    expect(result.current[0].columns).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(2);

    mockUrqlClient.executeQuery.pushResponse("GetModelMetadata", {
      data: {
        gadgetMeta: {
          model: UserModelMetadata,
        },
      },
      stale: false,
      hasNext: false,
    });

    mockUrqlClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "123", node: { id: "123", email: "test@test.com" } },
            { cursor: "abc", node: { id: "124", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "123",
            endCursor: "abc",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].data!.length).toEqual(2);

    expect(result.current[0].rows!).toEqual([
      {
        email: "test@test.com",
      },
      {
        email: "test@test.com",
      },
    ]);

    expect(result.current[0].columns!).toEqual([
      {
        name: "Email",
        apiIdentifier: "email",
        fieldType: FieldType.Email,
        getValue: expect.anything(),
        sortable: true,
      },
    ]);

    expect(result.current[0].data!.hasNextPage).toEqual(false);
    expect(result.current[0].data!.hasPreviousPage).toEqual(false);
    expect(result.current[0].data!.startCursor).toEqual("123");
    expect(result.current[0].data!.endCursor).toEqual("abc");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can get a table for an explicit list of fields", async () => {
    const { result } = renderHook(() => useTable(relatedProductsApi.user, { fields: ["id", "email"] }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].rows).toBeFalsy();
    expect(result.current[0].columns).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(2);

    mockUrqlClient.executeQuery.pushResponse("GetModelMetadata", {
      data: {
        gadgetMeta: {
          model: UserModelMetadata,
        },
      },
      stale: false,
      hasNext: false,
    });

    mockUrqlClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "123", node: { id: "123", email: "test@test.com" } },
            { cursor: "abc", node: { id: "124", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "123",
            endCursor: "abc",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].data!.length).toEqual(2);

    expect(result.current[0].rows!).toEqual([
      {
        id: "123",
        email: "test@test.com",
      },
      {
        id: "124",
        email: "test@test.com",
      },
    ]);

    expect(result.current[0].columns!).toEqual([
      {
        name: "ID",
        apiIdentifier: "id",
        fieldType: FieldType.Id,
        getValue: expect.anything(),
        sortable: true,
      },
      {
        name: "Email",
        apiIdentifier: "email",
        fieldType: FieldType.Email,
        getValue: expect.anything(),
        sortable: true,
      },
    ]);

    expect(result.current[0].data!.hasNextPage).toEqual(false);
    expect(result.current[0].data!.hasPreviousPage).toEqual(false);
    expect(result.current[0].data!.startCursor).toEqual("123");
    expect(result.current[0].data!.endCursor).toEqual("abc");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can paginate forwards and backwards a table for a model records", async () => {
    // TODO
  });

  test("handles hitting the last page when paginating forwards", async () => {
    // TODO
  });

  test("handles hitting the first page when paginating backwards", async () => {
    // TODO
  });
});

const UserModelMetadata = {
  apiIdentifier: "user",
  name: "User",
  fields: [
    {
      apiIdentifier: "id",
      name: "ID",
      fieldType: FieldType.Id,
      requiredArgumentForInput: false,
      sortable: true,
      filterable: true,
    },
    {
      apiIdentifier: "email",
      name: "Email",
      fieldType: FieldType.Email,
      requiredArgumentForInput: false,
      sortable: true,
      filterable: true,
    },
  ],
};
