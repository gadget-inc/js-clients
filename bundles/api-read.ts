import { Client } from "@gadget-client/related-products-example";
const api = new Client();

export const read = async () => {
  await api.shopifyProduct.findMany();
};
