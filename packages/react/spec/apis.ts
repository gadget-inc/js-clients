import { Client as FileFieldClient } from "@gadget-client/app-with-file-fields";
import { Client as NoUserClient } from "@gadget-client/app-with-no-user-model";
import { Client as BulkClient } from "@gadget-client/bulk-actions-test";
import { Client as AuthClient } from "@gadget-client/full-auth";
import { Client as TestClient } from "@gadget-client/js-clients-test";
import { Client as KitchenSinkClient } from "@gadget-client/kitchen-sink";
import { Client } from "@gadget-client/related-products-example";
import { Client as NestedClient } from "@gadget-client/zxcv-deeply-nested";
import { Client as ManyThroughClient } from "@gadget-client/zxcv-manythrough-example";
import { Client as SimpleClient } from "@gadget-client/zxcv-simple-relationship";

export const relatedProductsApi = new Client({ environment: "Development" });
export const bulkExampleApi = new BulkClient({ environment: "Development" });
export const fullAuthApi = new AuthClient({ environment: "Development" });
export const noUserModelApi = new NoUserClient({ environment: "Development" });
export const nestedExampleApi = new NestedClient({ environment: "Development" });
export const simpleExampleApi = new SimpleClient({ environment: "Development" });
export const kitchenSinkApi = new KitchenSinkClient({ environment: "Development" });
export const hasManyThroughApi = new ManyThroughClient({ environment: "Development" });
export const fileFieldApi = new FileFieldClient({ environment: "Development" });
export const testApi = new TestClient({
  environment: "Development",
  authenticationMode:
    "VITE_JS_CLIENTS_TEST_API_KEY" in (import.meta as any)
      ? ({
          apiKey: (import.meta as any).env.VITE_JS_CLIENTS_TEST_API_KEY,
          dangerouslyAllowBrowserApiKey: true,
        } as any)
      : undefined,
});
