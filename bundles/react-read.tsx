import { Client } from "@gadget-client/related-products-example";
import { useFindMany } from "@gadgetinc/react";
const api = new Client();

export const Reader = () => {
  const [{ data }] = useFindMany(api.shopifyProduct);
  return <>{JSON.stringify(data)}</>;
};
