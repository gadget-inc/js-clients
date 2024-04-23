import { GadgetConnection } from "../../dist/esm/index.js";
const connection = new GadgetConnection({ endpoint: "/test" });
void connection.fetch("https://gadget.dev").then(() => {
  console.log("ok");
});
