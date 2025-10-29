import { AppWithFileFieldsClient } from "@gadget-client/app-with-file-fields";
import { AppWithNoUserModelClient } from "@gadget-client/app-with-no-user-model";
import { BulkActionsTestClient } from "@gadget-client/bulk-actions-test";
import { FullAuthClient } from "@gadget-client/full-auth";
import { JsClientsBigcommerceClient } from "@gadget-client/js-clients-bigcommerce";
import { JsClientsTestClient } from "@gadget-client/js-clients-test";
import { KitchenSinkClient } from "@gadget-client/kitchen-sink";
import { RelatedProductsExampleClient } from "@gadget-client/related-products-example";
import { ZxcvDeeplyNestedClient } from "@gadget-client/zxcv-deeply-nested";
import { ZxcvManythroughExampleClient } from "@gadget-client/zxcv-manythrough-example";
import { ZxcvSimpleRelationshipClient } from "@gadget-client/zxcv-simple-relationship";

export const relatedProductsApi = new RelatedProductsExampleClient({ environment: "Development" });
export const bulkExampleApi = new BulkActionsTestClient({ environment: "Development" });
export const fullAuthApi = new FullAuthClient({ environment: "Development" });
export const noUserModelApi = new AppWithNoUserModelClient({ environment: "Development" });
export const nestedExampleApi = new ZxcvDeeplyNestedClient({ environment: "Development" });
export const simpleExampleApi = new ZxcvSimpleRelationshipClient({ environment: "Development" });
export const kitchenSinkApi = new KitchenSinkClient({ environment: "Development" });
export const hasManyThroughApi = new ZxcvManythroughExampleClient({ environment: "Development" });
export const fileFieldApi = new AppWithFileFieldsClient({ environment: "Development" });
export const bigcommerceApi = new JsClientsBigcommerceClient({ environment: "Development" });
export const testApi = new JsClientsTestClient({
  environment: "Development",
  authenticationMode:
    "VITE_JS_CLIENTS_TEST_API_KEY" in (import.meta as any)
      ? ({
          apiKey: (import.meta as any).env.VITE_JS_CLIENTS_TEST_API_KEY,
          dangerouslyAllowBrowserApiKey: true,
        } as any)
      : undefined,
});
