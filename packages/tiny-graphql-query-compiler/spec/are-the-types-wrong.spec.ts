import execa from "execa";
import path from "path";

describe("package.json types exports", () => {
  it("should have the correct types exports", async () => {
    await execa("pnpm", ["exec", "attw", "--pack", "."], { cwd: path.resolve(__dirname, "..") });
  });
});
