import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import XHRAdapter from "@pollyjs/adapter-xhr";
import type { PollyConfig } from "@pollyjs/core";
import FSPersister from "@pollyjs/persister-fs";
import path from "path";
import { setupPolly } from "setup-polly-jest";

export const startPolly = (config: PollyConfig) => {
  const context = setupPolly({
    adapters: [NodeHttpAdapter as any, XHRAdapter as any],
    persister: FSPersister as any,

    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, "__recordings__"),
      },
    },
    recordIfMissing: true,
  });

  beforeEach(() => {
    context.polly.configure(config);
  });

  return context;
};
