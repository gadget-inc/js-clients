import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import { join, parse } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { fileURLToPath } from "url";
import { build } from "vite";

const bundleDir = fileURLToPath(new URL("bundles", import.meta.url));
const entrypoints = fs.readdirSync(bundleDir);
console.log({ bundleDir, entrypoints });

for (const entrypoint of entrypoints) {
  const parsed = parse(entrypoint);
  const name = parsed.name;

  const visualizerPlugin = visualizer({
    emitFile: true,
    filename: `${name}-stats.html`,
    template: "treemap",
    brotliSize: true,
    gzipSize: true,
  });
  const plugins = parsed.ext.endsWith("x") ? [react(), visualizerPlugin] : [visualizerPlugin];

  await build({
    plugins,
    build: {
      lib: {
        entry: join(bundleDir, entrypoint),
        name: `test-bundle-${name}`,
        fileName: `test-bundle-${name}`,
        formats: ["es", "cjs"],
      },
      emptyOutDir: false,
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            react: "React",
          },
        },
      },
    },
  });
}
