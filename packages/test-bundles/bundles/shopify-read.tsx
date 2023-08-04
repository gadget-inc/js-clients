import { Client } from "@gadget-client/related-products-example";
import { useFindMany } from "@gadgetinc/react";
import { Provider } from "@gadgetinc/react-shopify-app-bridge";
const api = new Client();

export const Reader = () => {
  const [{ data }] = useFindMany(api.shopifyProduct);
  return <>{JSON.stringify(data)}</>;
};

export const App = () => {
  return (
    <Provider>
      <Reader />
    </Provider>
  );
};
