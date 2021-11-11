import { GadgetRecord } from "@gadgetinc/api-client-core";
import { CombinedError } from "@urql/core";
import { assert, Has, IsExact } from "conditional-type-checks";
import { useGet } from "../src/useGet";
import { relatedProductsApi } from "./apis";

// these functions are typechecked but never run to avoid actually making API calls
const TestGetReturnsTypedDataWithExplicitSelection = () => {
  const [{ data, fetching, error }, refresh] = useGet(relatedProductsApi.currentSession, { select: { id: true, state: true } });

  assert<IsExact<typeof fetching, boolean>>(true);
  assert<Has<typeof data, undefined | GadgetRecord<{ id: string; state: any }>>>(true);
  assert<IsExact<typeof error, CombinedError | undefined>>(true);

  // data is accessible via dot access
  if (data) {
    data.id;
    data.state;
  }

  // hook return value includes the urql refresh function
  refresh();
};

const TestGetReturnsTypedDataWithNoSelection = () => {
  const [{ data }] = useGet(relatedProductsApi.currentSession);

  if (data) {
    data.id;
    data.state;
  }
};

test("true", () => undefined);
