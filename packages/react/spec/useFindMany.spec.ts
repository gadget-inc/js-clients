import { GadgetRecord } from "@gadgetinc/api-client-core";
import { assert, IsExact } from "conditional-type-checks";
import { useFindMany } from "../src/useFindMany";
import { ErrorWrapper } from "../src/utils";
import { relatedProductsApi } from "./apis";

// all these functions are typechecked but never run to avoid actually making API calls
const TestFindManyReturnsTypedDataWithExplicitSelection = () => {
  const [{ data, fetching, error }, refresh] = useFindMany(relatedProductsApi.user, { select: { id: true, email: true } });

  assert<IsExact<typeof fetching, boolean>>(true);
  assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>[]>>(true);
  assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

  if (data) {
    data[0].id;
    data[0].email;
  }

  refresh();
};

const TestFindManyReturnsTypedDataWithNoSelection = () => {
  const [{ data }] = useFindMany(relatedProductsApi.user);

  if (data) {
    data[0].id;
    data[0].email;
  }
};

test("true", () => undefined);
