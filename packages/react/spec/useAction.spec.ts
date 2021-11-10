import { GadgetRecord } from "@gadgetinc/api-client-core";
import { CombinedError } from "@urql/core";
import { assert, IsExact } from "conditional-type-checks";
import { useAction } from "../src";
import { relatedProductsApi } from "./apis";

// these functions are typechecked but never run to avoid actually making API calls
const TestUseActionCanRunActionsWithVariables = () => {
  const [_, mutate] = useAction(relatedProductsApi.user.update);

  // hook return value includes the urql mutation function
  void mutate();

  // can call with variables
  void mutate({ id: "123", user: { email: "foo@bar.com" } });

  // can call with no model variables
  void mutate({ id: "123" });

  // @ts-expect-error can't call with no id
  void mutate({});

  // @ts-expect-error can't call with variables that don't belong to the model
  void mutate({ foo: "123" });
};

const TestUseActionReturnsTypedDataWithExplicitSelection = () => {
  const [{ data, fetching, error }, mutate] = useAction(relatedProductsApi.user.update, {
    select: { id: true, email: true },
  });

  assert<IsExact<typeof fetching, boolean>>(true);
  assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>>>(true);
  assert<IsExact<typeof error, CombinedError | undefined>>(true);

  // data is accessible via dot access
  if (data) {
    data.id;
    data.email;
  }
};

const TestUseActionReturnsTypedDataWithNoSelection = () => {
  const [{ data }] = useAction(relatedProductsApi.user.update);

  if (data) {
    data.id;
    data.email;
  }
};

test("true", () => undefined);
