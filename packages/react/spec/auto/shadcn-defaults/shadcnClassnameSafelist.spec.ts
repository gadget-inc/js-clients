import execa from "execa";
import fs from "fs/promises";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { GadgetShadcnTailwindSafelistFromTailwind } from "../../../src/auto/shadcn/GadgetShadcnTailwindSafelist.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(path.join(__dirname, "..", "..", ".."));

describe("Tailwind CSS Output Snapshot", () => {
  let tmpDir: string;

  beforeAll(async () => {
    // Create a temporary isolated project
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "shadcn-safelist-test-"));

    // Read the package.json to get the exact dependency versions
    const packageJson = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf-8"));
    const devDeps = packageJson.devDependencies;

    // Create package.json with @gadgetinc/react and tailwind dependencies
    await fs.writeFile(
      path.join(tmpDir, "package.json"),
      JSON.stringify({
        name: "shadcn-safelist-test",
        version: "0.1.0",
        type: "module",
        dependencies: {
          "@gadgetinc/react": `file:${root}`,
          "@tailwindcss/cli": devDeps["@tailwindcss/postcss"],
          "@tailwindcss/postcss": devDeps["@tailwindcss/postcss"],
          tailwindcss: devDeps.tailwindcss,
          "tailwindcss-animate": devDeps["tailwindcss-animate"],
        },
      })
    );

    // Read the shadcn-tailwind.css from the repo to use as a template
    const shadcnTailwindCSS = await fs.readFile(path.join(root, "spec", "shadcn-tailwind.css"), "utf-8");

    // Create shadcn-tailwind.css with the same content
    await fs.writeFile(path.join(tmpDir, "shadcn-tailwind.css"), shadcnTailwindCSS);

    // Install dependencies
    await execa("npm", ["install"], { cwd: tmpDir });
  });

  afterAll(async () => {
    // Clean up temporary directory
    await fs.rm(tmpDir, { recursive: true, force: true });
  });

  it("should match snapshot of Tailwind CSS output", async () => {
    // Run tailwindcss CLI command and capture output in the isolated project
    const { stdout: fullTailwindOutput } = await execa("npx", ["@tailwindcss/cli", "-i", "./shadcn-tailwind.css"], {
      cwd: tmpDir,
    });

    // Create snapshot of the Tailwind CSS output
    // Create snapshot of full CSS output
    expect(fullTailwindOutput).toMatchSnapshot();

    // Extract and snapshot just the class names
    const classNames = (fullTailwindOutput.match(/\.(?![0-9]+(?:\.[0-9]+)?(?:\s|{))[a-zA-Z][a-zA-Z0-9_-]*(?=[\s{])/g) || []).map(
      (className) => className.slice(1)
    );
    const uniqueClassNames = [...new Set(classNames)].sort();
    expect(uniqueClassNames).toMatchInlineSnapshot(`
      [
        "absolute",
        "align-middle",
        "animate-in",
        "animate-pulse",
        "animate-spin",
        "aspect-square",
        "bg-accent",
        "bg-background",
        "bg-border",
        "bg-card",
        "bg-destructive",
        "bg-muted",
        "bg-popover",
        "bg-primary",
        "bg-secondary",
        "bg-transparent",
        "bg-white",
        "block",
        "border",
        "border-0",
        "border-b",
        "border-b-0",
        "border-collapse",
        "border-gray-300",
        "border-input",
        "border-l",
        "border-neutral-300",
        "border-primary",
        "border-t",
        "border-transparent",
        "break-words",
        "brightness-125",
        "brightness-95",
        "caption-bottom",
        "com",
        "container",
        "contents",
        "cursor-default",
        "cursor-pointer",
        "cursor-text",
        "dark",
        "duration-200",
        "fade-in-0",
        "filter",
        "fixed",
        "flex",
        "flex-1",
        "flex-col",
        "flex-col-reverse",
        "flex-nowrap",
        "flex-row",
        "flex-wrap",
        "font-bold",
        "font-medium",
        "font-mono",
        "font-normal",
        "font-semibold",
        "gap-1",
        "gap-2",
        "gap-3",
        "gap-4",
        "gap-y-2",
        "grid",
        "grid-cols-4",
        "grow",
        "h-10",
        "h-11",
        "h-2",
        "h-24",
        "h-3",
        "h-4",
        "h-5",
        "h-6",
        "h-7",
        "h-8",
        "h-9",
        "h-fit",
        "h-full",
        "h-px",
        "hidden",
        "inline",
        "inline-flex",
        "inset-0",
        "invisible",
        "items-center",
        "items-start",
        "justify-between",
        "justify-center",
        "justify-start",
        "leading-none",
        "left-0",
        "left-6",
        "lowercase",
        "max-w-full",
        "max-w-lg",
        "mb-1",
        "mb-2",
        "min-h-8",
        "ml-2",
        "ml-auto",
        "mr-1",
        "mr-2",
        "mt-2",
        "mt-4",
        "mx-10",
        "mx-auto",
        "my-1",
        "my-auto",
        "opacity-30",
        "opacity-40",
        "opacity-50",
        "opacity-70",
        "opacity-80",
        "outline",
        "outline-hidden",
        "overflow-auto",
        "overflow-hidden",
        "overflow-visible",
        "overflow-x-hidden",
        "overflow-y-auto",
        "p-0",
        "p-1",
        "p-2",
        "p-3",
        "p-4",
        "p-6",
        "paused",
        "pb-1",
        "pb-4",
        "pl-8",
        "pr-20",
        "pt-0",
        "pt-1",
        "pt-2",
        "pt-3",
        "pt-4",
        "px-2",
        "px-3",
        "px-4",
        "px-8",
        "py-1",
        "py-2",
        "py-3",
        "py-4",
        "py-6",
        "relative",
        "resize",
        "right-0",
        "right-4",
        "ring-1",
        "ring-offset-background",
        "ring-ring",
        "rounded-b-md",
        "rounded-b-none",
        "rounded-e-md",
        "rounded-full",
        "rounded-lg",
        "rounded-md",
        "rounded-none",
        "rounded-s-md",
        "rounded-sm",
        "rounded-t-md",
        "rounded-t-none",
        "rounded-xl",
        "rounded-xs",
        "running",
        "select-none",
        "shadow",
        "shadow-lg",
        "shadow-md",
        "shadow-none",
        "shadow-sm",
        "shadow-xs",
        "shrink-0",
        "size-8",
        "space-y-6",
        "sr-only",
        "static",
        "sticky",
        "table",
        "text-2xl",
        "text-accent-foreground",
        "text-base",
        "text-card-foreground",
        "text-center",
        "text-current",
        "text-destructive",
        "text-destructive-foreground",
        "text-ellipsis",
        "text-foreground",
        "text-gray-500",
        "text-left",
        "text-lg",
        "text-muted-foreground",
        "text-popover-foreground",
        "text-primary",
        "text-primary-foreground",
        "text-red-500",
        "text-secondary-foreground",
        "text-sm",
        "text-xs",
        "top-0",
        "top-4",
        "top-full",
        "tracking-tight",
        "transform",
        "transition-all",
        "transition-colors",
        "transition-none",
        "transition-opacity",
        "transition-transform",
        "truncate",
        "underline-offset-4",
        "uppercase",
        "visible",
        "w-10",
        "w-16",
        "w-3",
        "w-32",
        "w-4",
        "w-5",
        "w-6",
        "w-64",
        "w-7",
        "w-72",
        "w-8",
        "w-auto",
        "w-full",
        "w-max",
        "whitespace-normal",
        "whitespace-nowrap",
        "z-0",
        "z-1",
        "z-10",
        "z-20",
        "z-30",
        "z-50",
        "zoom-in-95",
      ]
    `);

    for (const className of uniqueClassNames) {
      expect(GadgetShadcnTailwindSafelistFromTailwind).toContain(className);
    }

    for (const className of GadgetShadcnTailwindSafelistFromTailwind) {
      expect(uniqueClassNames).toContain(className);
    }
  });
});
