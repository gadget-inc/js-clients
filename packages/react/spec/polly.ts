import type { PollyConfig } from "@pollyjs/core";
import { setupPolly } from "setup-polly-jest";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import XHRAdapter from "@pollyjs/adapter-xhr";
import FSPersister from "@pollyjs/persister-fs";
import path from "path";

export const startPolly = (config: PollyConfig) => {
    const context = setupPolly({
        adapters: [NodeHttpAdapter, XHRAdapter],
        persister: FSPersister,

        persisterOptions: {
            fs: {
                recordingsDir: path.resolve(__dirname, "__recordings__"),
            }
        },
        recordIfMissing: true,
    });

    beforeEach(() => {
        context.polly.configure(config);
    })

    return context;
}