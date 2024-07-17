import execa from "execa";
import fs from "fs/promises";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(path.join(__dirname, "..", ".."));

describe("importing from different contexts", () => {
  let tmpDir: string;

  beforeAll(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "js-clients-react-imports-"));
    await fs.writeFile(
      path.join(tmpDir, "package.json"),
      JSON.stringify({
        name: "js-imports-test",
        version: "0.1.0",
        dependencies: {
          "@gadgetinc/react": `file:${root}`,
        },
      })
    );
    for (const file of ["cjs-import.js", "named-esm-import.mjs", "cjs-auto-import.js", "esm-auto-import.mjs"]) {
      await fs.copyFile(path.join(__dirname, file), path.join(tmpDir, file));
    }

    await execa("npm", ["install"], { cwd: tmpDir });
  });

  test("root can be imported from cjs code", async () => {
    await execa("node", ["cjs-import.js"], { cwd: tmpDir });
  });

  test("root can be imported from esm code", async () => {
    await execa("node", ["named-esm-import.mjs"], { cwd: tmpDir });
  });

  test("autocomponents can be imported from cjs code", async () => {
    await execa("node", ["cjs-auto-import.js"], { cwd: tmpDir });
  });

  test("autocomponents can be imported from esm code", async () => {
    await execa("node", ["esm-auto-import.mjs"], { cwd: tmpDir });
  });
});
