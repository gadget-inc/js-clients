import { assert, IsExact } from "conditional-type-checks";
import { useGlobalAction } from "../src";
import { ErrorWrapper } from "../src/utils";
import { bulkExampleApi } from "./apis";

// these functions are typechecked but never run to avoid actually making API calls
const TestUseGlobalActionCanRunGlobalActionsWithVariables = () => {
  const [{ data, fetching, error }, mutate] = useGlobalAction(bulkExampleApi.flipAll);

  assert<IsExact<typeof fetching, boolean>>(true);
  assert<IsExact<typeof data, any>>(true);
  assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

  // can call with variables
  void mutate({ why: "foobar" });

  // @ts-expect-error can't call with variables that don't belong to the model
  void mutate({ foo: "123" });
};

test("true", () => undefined);
