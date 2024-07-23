import { humanizeCamelCase } from "../src/utils.js";

describe("humanizeCamelCase", () => {
  it("Properly humanizes camelCasedStrings", async () => {
    expect(humanizeCamelCase("camelCasedString")).toEqual("Camel Cased String");
    expect(humanizeCamelCase("lowercase")).toEqual("Lowercase");
    expect(humanizeCamelCase("createModelA")).toEqual("Create Model A");
    expect(humanizeCamelCase("ABCDE")).toEqual("ABCDE");

    expect(humanizeCamelCase("do99Things")).toEqual("Do 99 Things");
    expect(humanizeCamelCase("123456789A")).toEqual("123456789 A");
  });
});
