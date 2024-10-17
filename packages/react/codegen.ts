import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // schema: "https://js-clients-test--development.gadget.app/api/graphql",
  schema: "https://remix-14--development.ggt.pub/api/graphql",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  emitLegacyCommonJSImports: false,
  generates: {
    "./src/internal/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
