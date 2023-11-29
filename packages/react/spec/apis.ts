import { Client as NoUserClient } from "@gadget-client/app-with-no-user-model";
import { Client as BulkClient } from "@gadget-client/bulk-actions-test";
import { Client as AuthClient } from "@gadget-client/full-auth";
import { Client } from "@gadget-client/related-products-example";
import { Client as NestedClient } from "@gadget-client/zxcv-deeply-nested";
import { Client as SimpleClient } from "@gadget-client/zxcv-simple-relationship";

export const relatedProductsApi = new Client({ environment: "Development" });
export const bulkExampleApi = new BulkClient({ environment: "Development" });
export const fullAuthApi = new AuthClient({ environment: "Development" });
export const noUserModelApi = new NoUserClient({ environment: "Development" });
export const nestedExampleApi = new NestedClient({ environment: "Development" });
export const simpleExampleApi = new SimpleClient({ environment: "Development" });
