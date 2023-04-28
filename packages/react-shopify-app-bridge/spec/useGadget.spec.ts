import { AppBridgeState, ClientApplication } from "@shopify/app-bridge";
import { IsExact, assert } from "conditional-type-checks";
import { AppType, useGadget } from "../src";

// these functions are typechecked but never run to avoid actually making API calls
const TestUseGadgetReturnsAppropriateTypes = () => {
  const { loading, appType, isEmbedded, appBridge, canAuth, isAuthenticated } = useGadget();

  assert<IsExact<typeof loading, boolean>>(true);
  assert<IsExact<typeof isEmbedded, boolean>>(true);
  assert<IsExact<typeof canAuth, boolean>>(true);
  assert<IsExact<typeof isAuthenticated, boolean>>(true);
  assert<IsExact<typeof appType, AppType | undefined>>(true);
  assert<IsExact<typeof appBridge, ClientApplication<AppBridgeState> | null>>(true);
};

test("true", () => undefined);
