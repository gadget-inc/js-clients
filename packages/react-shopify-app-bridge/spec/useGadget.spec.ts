import type { AppBridgeState, ClientApplication } from "@shopify/app-bridge";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import type { AppType } from "../src/index.js";
import { useGadget } from "../src/index.js";

// these functions are typechecked but never run to avoid actually making API calls
const TestUseGadgetReturnsAppropriateTypes = () => {
  const { loading, appType, isEmbedded, appBridge, canAuth, isAuthenticated, isRootFrameRequest } = useGadget();

  assert<IsExact<typeof loading, boolean>>(true);
  assert<IsExact<typeof isEmbedded, boolean>>(true);
  assert<IsExact<typeof canAuth, boolean>>(true);
  assert<IsExact<typeof isAuthenticated, boolean>>(true);
  assert<IsExact<typeof appType, AppType | undefined>>(true);
  assert<IsExact<typeof appBridge, ClientApplication<AppBridgeState> | null>>(true);
  assert<IsExact<typeof isRootFrameRequest, boolean>>(true);
};

test("true", () => undefined);
