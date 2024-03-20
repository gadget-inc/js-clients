import { spawnSync } from "child_process";
import { URL, fileURLToPath } from "url";

describe("importing from different contexts", () => {
  test("can be imported from cjs code", () => {
    // @ts-expect-error import.meta.url is not available in cjs which the tests will typecheck as
    const { status } = spawnSync("node", [fileURLToPath(new URL("cjs-import.js", import.meta.url))]);

    expect(status).toBe(0);
  });

  test("can be imported from esm code", () => {
    // @ts-expect-error import.meta.url is not available in cjs which the tests will typecheck as
    const { status } = spawnSync("node", [fileURLToPath(new URL("named-esm-import.mjs", import.meta.url))]);

    expect(status).toBe(0);
  });
});
