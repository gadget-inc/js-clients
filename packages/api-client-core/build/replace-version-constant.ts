import fs from "fs/promises";
import globby from "globby";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// replace version constant strings with the version we're about to release

const version = JSON.parse(await fs.readFile(path.join(__dirname, "..", "package.json"), "utf-8")).version;

for (const file of await globby(path.join(__dirname, "..", "dist"), { onlyFiles: true })) {
  const content = await fs.readFile(file, "utf-8");
  if (content.includes("<prerelease>")) {
    await fs.writeFile(file, content.replace("<prerelease>", version));
  }
}
