/**
 * @jest-environment jsdom
 */
import { GadgetConnectionSharedSuite } from "./GadgetConnection-suite";

describe("GadgetConnection in the browser", () => {
  GadgetConnectionSharedSuite("    __typename\n");
});
