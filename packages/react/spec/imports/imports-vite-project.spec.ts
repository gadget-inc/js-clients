import execa from "execa";
import fsExtra from "fs-extra";
import fs from "fs/promises";
import npmpack from "libnpmpack";
import path from "path";
import tmp from "tmp";
import { fileURLToPath } from "url";

// Assuming the path to your example Vite project folder
const dirname = path.dirname(fileURLToPath(import.meta.url));
const viteProjectPath = path.join(dirname, "example-vite-project");
const root = path.resolve(path.join(dirname, "..", ".."));

const copyFolderToTmp = async (source: string) => {
  const tmpViteDir: any = await new Promise((resolve, reject) =>
    tmp.dir({ unsafeCleanup: true }, (err, dirPath, cleanupCallback) => {
      if (err) reject(err);
      resolve({ dirPath, cleanupCallback });
    })
  );

  const { dirPath, cleanupCallback } = tmpViteDir;

  // Copy the Vite project folder to the temporary directory
  await fsExtra.copy(source, dirPath);

  return { dirPath, cleanupCallback };
};

const createProjectTarball = async (cwd: string) => {
  const tmpTarPath: any = await new Promise((resolve, reject) =>
    tmp.dir({ unsafeCleanup: true }, (err, dirPath, cleanupCallback) => {
      if (err) reject(err);
      resolve({ dirPath, cleanupCallback });
    })
  );

  const { dirPath, cleanupCallback } = tmpTarPath;
  const tarballPath = path.join(dirPath, "package.tar");

  try {
    const fileHandle = await fs.open(tarballPath, "w");
    const writeStream = fileHandle.createWriteStream();

    const buffer = await npmpack(root, writeStream);
    writeStream.write(buffer);
    writeStream.end();

    // Ensure the file stream is closed
    await fileHandle.close();
  } catch (error) {
    console.error("Error creating tarball:", error);
    throw error; // Rethrow to ensure the error is caught by Jest
  }

  return { tarballPath, cleanupCallback };
};

describe("Vite Project Build", () => {
  let tmpViteDirCleanUp: any;

  beforeAll(async () => {
    // Create a temporary directory
    const { dirPath: viteDirPath, cleanupCallback: viteCleanupCallback } = await copyFolderToTmp(viteProjectPath);
    tmpViteDirCleanUp = viteCleanupCallback;

    const { tarballPath } = await createProjectTarball(root);

    // Run `pnpm install` in the copied project directory
    await execa("pnpm", ["install"], { cwd: viteDirPath });
    await execa("pnpm", ["add", tarballPath], { cwd: viteDirPath });

    // Run `vite build` in the copied project directory
    await execa("vite", ["build"], { cwd: viteDirPath });
  }, 40000);

  afterAll(async () => {
    // Clean up the temporary directory
    await new Promise((resolve: (reason?: any) => void) => {
      tmpViteDirCleanUp(() => {
        resolve();
      });
    });
  });

  it("should build successfully", () => {
    // This test will pass if the beforeAll hook completes without throwing an error
    // You can add assertions here if you want to check specific outcomes
  });
});
