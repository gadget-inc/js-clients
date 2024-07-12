/**
 * @jest-environment ./spec/remote-ui-environment.ts
 */
import { GadgetConnectionSharedSuite } from "./GadgetConnection-suite.js";

describe("GadgetConnection in remote-ui", () => {
  GadgetConnectionSharedSuite();
});
