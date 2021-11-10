import { GadgetRecord } from "@gadgetinc/api-client-core";
import { CombinedError } from "@urql/core";
import { assert, IsExact } from "conditional-type-checks";
import { useBulkAction } from "../src";
import { bulkExampleApi } from "./apis";

// these functions are typechecked but never run to avoid actually making API calls
const TestUseBulkActionCanRunActionsWithVariables = () => {
  const [_, mutate] = useBulkAction(bulkExampleApi.widget.bulkFlipDown);

  // hook return value includes the urql mutation function
  void mutate();

  // can call with variables
  void mutate({ ids: ["123", "124"] });

  // @ts-expect-error can't call with no ids
  void mutate({});

  // @ts-expect-error can't call with variables that don't belong to the model
  void mutate({ foo: "123" });
};

const TestUseBulkActionReturnsTypedDataWithExplicitSelection = () => {
  const [{ data, fetching, error }, mutate] = useBulkAction(bulkExampleApi.widget.bulkFlipDown, {
    select: { id: true, name: true },
  });

  assert<IsExact<typeof fetching, boolean>>(true);
  assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; name: string | null }>[]>>(true);
  assert<IsExact<typeof error, CombinedError | undefined>>(true);

  if (data) {
    data[0].id;
    data[0].name;
  }
};

const TestUseActionReturnsTypedDataWithNoSelection = () => {
  const [{ data }] = useBulkAction(bulkExampleApi.widget.bulkFlipDown);

  if (data) {
    data[0].id;
    data[0].name;
  }
};

test("true", () => undefined);
