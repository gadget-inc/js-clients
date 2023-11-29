import { Client as NestedClient } from "@gadget-client/deeply-nested-example";
import { Client as NoUserClient } from "@gadget-client/app-with-no-user-model";
import { Client as BulkClient } from "@gadget-client/bulk-actions-test";
import { Client as AuthClient } from "@gadget-client/full-auth";
import { Client } from "@gadget-client/related-products-example";

export const relatedProductsApi = new Client({ environment: "Development" });
export const bulkExampleApi = new BulkClient({ environment: "Development" });
export const fullAuthApi = new AuthClient({ environment: "Development" });
export const noUserModelApi = new NoUserClient({ environment: "Development" });
export const nestedExampleApi = new NestedClient({ environment: "Development" });
