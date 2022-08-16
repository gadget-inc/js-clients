import { GadgetRecord } from "@gadgetinc/api-client-core";
import { assert, IsExact } from "conditional-type-checks";
import { useFindOne } from "../src";
import { ErrorWrapper } from "../src/utils";
import { relatedProductsApi } from "./apis";

// these functions are typechecked but never run to avoid actually making API calls
const TestFindOneReturnsTypedDataWithExplicitSelection = () => {
  const [{ data, fetching, error }, refresh] = useFindOne(relatedProductsApi.user, "10", { select: { id: true, email: true } });

  assert<IsExact<typeof fetching, boolean>>(true);
  assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>>>(true);
  assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

  // data is accessible via dot access
  if (data) {
    data.id;
    data.email;
  }

  // hook return value includes the urql refresh function
  refresh();
};

const TestFindOneReturnsTypedDataWithNoSelection = () => {
  const [{ data }] = useFindOne(relatedProductsApi.user, "10");

  if (data) {
    data.id;
    data.email;
  }
};

test("true", () => undefined);
