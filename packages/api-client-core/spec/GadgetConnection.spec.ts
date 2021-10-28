import { AuthenticationMode, GadgetConnection } from "../src/GadgetConnection";

describe("GadgetConnection", () => {
  // this object is integration tested within Gadget itself

  it("should require an endpoint to be set", () => {
    expect(() => new GadgetConnection({} as any)).toThrowErrorMatchingInlineSnapshot(
      `"Must provide an \`endpoint\` option for a GadgetConnection to connect to"`
    );
  });

  it("should default to the anonymous authentication mode if no authentication mode is passed", () => {
    const connection = new GadgetConnection({ endpoint: "http://someapp.gadget.host" });
    expect(connection.authenticationMode).toEqual(AuthenticationMode.Anonymous);
  });
});
