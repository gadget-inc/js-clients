import { Client as BulkClient } from "@gadget-client/bulk-actions-test";
import { Client } from "@gadget-client/related-products-example";
import { Client as ClientWithAuth } from "@gadget-client/super-auth";

export const relatedProductsApi = new Client();
export const superAuthApi = new ClientWithAuth();
export const bulkExampleApi = new BulkClient();
