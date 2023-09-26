import { TestEnvironment } from "jest-environment-node";

/**
 * Implements an environment with only the stuff present in a remote-ui environment
 * What that is isn't actually documented anywhere as best I can tell, but we do know there is no WebSocket global
 * See https://github.com/Shopify/remote-ui */
export default class RemoteUIEnvironment extends TestEnvironment {
  async setup() {
    await super.setup();
    delete (this.global as any).WebSocket;
  }
}
