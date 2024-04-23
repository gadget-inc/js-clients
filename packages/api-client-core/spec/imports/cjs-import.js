// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GadgetConnection } = require("../..");
const connection = new GadgetConnection({ endpoint: "/test" });
void connection.fetch("https://gadget.dev").then(() => {
  console.log("ok");
});
