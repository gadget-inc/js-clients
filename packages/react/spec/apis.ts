import { Client as NoUserClient } from "@gadget-client/app-with-no-user-model";
import { Client as BulkClient } from "@gadget-client/bulk-actions-test";
import { Client } from "@gadget-client/related-products-example";
import { Client as AuthClient } from "@gadget-client/super-auth";

export const relatedProductsApi = new Client();
export const bulkExampleApi = new BulkClient();
export const superAuthApi = new AuthClient();
export const noUserModelApi = new NoUserClient();
