import fs from "fs/promises";
import nock from "nock";
import path from "path";
import { fileURLToPath } from "url";

// Assuming the path to your example Vite project folder
const dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(path.join(dirname, "..", ".."));

describe("Releasing new version", () => {
  beforeAll(() => {
    nock.enableNetConnect();
  });
  afterAll(() => {
    nock.disableNetConnect();
  });

  const getLatestReleaseVersion = async () => {
    const response = await fetch("https://registry.npmjs.org/@gadgetinc/react/");
    if (!response.ok) throw new Error("Failed to fetch package info");
    const data = await response.json();
    return data["dist-tags"].latest;
  };

  const getCurrentVersion = async () => {
    const packageJsonFile = await fs.open(path.join(root, "package.json"));
    const packageJson = await packageJsonFile.readFile();
    return JSON.parse(packageJson.toString()).version;
  };

  const isReleasingNewVersion = async () => {
    const latestReleaseVersion = await getLatestReleaseVersion();
    const currentVersion = await getCurrentVersion();
    return latestReleaseVersion !== currentVersion;
  };

  const getFilePathsInFolder = async (folderPath: string, emptyResultIfFolderDoesNotExist = false) => {
    try {
      return await fs.readdir(folderPath);
    } catch (error) {
      const folderDoesNotExist = (error as NodeJS.ErrnoException).code === "ENOENT";
      if (folderDoesNotExist && emptyResultIfFolderDoesNotExist) {
        return [];
      }
      throw error;
    }
  };

  it("should not leave any leftover changesets when releasing a new version", async () => {
    const isReleasing = await isReleasingNewVersion();
    if (!isReleasing) {
      // No release => no check for remaining changesets
      return;
    }

    const filesInChangesetFolder = await getFilePathsInFolder(path.join(root, ".changeset"));
    expect(filesInChangesetFolder).toEqual(["config.json"]);
  });
});
