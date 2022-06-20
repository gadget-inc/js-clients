import fetch, { Headers } from "cross-fetch";
import Crypto from "crypto-js";
import { isEmpty } from "lodash";
import nock from "nock";
import { getTokenKey } from "../src/utils";
import { generateCodeChallenge, generateCodeVerifier, getGadgetAccessToken } from "../src/crypto";
import { hasMoreThanAscii } from "./utils";

describe("crypto services", () => {
  beforeAll(() => {
    global.fetch = fetch;
    global.Headers = Headers;
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test("can generate 32 byte code verifier", () => {
    const verifier = generateCodeVerifier();

    expect(verifier).toBeDefined();
    expect(hasMoreThanAscii(verifier)).toBeFalsy();
    expect(Buffer.byteLength(verifier, "base64url")).toBe(32);
  });

  test("can generate code challenge from code verifier", () => {
    const verifier = generateCodeVerifier();
    const challenge = generateCodeChallenge(verifier);

    expect(challenge).toBeDefined();
    expect(isEmpty(challenge)).toBeFalsy();
    // We verify that the implementation is per spec
    // https://datatracker.ietf.org/doc/html/rfc7636#page-8
    // code_challenge = BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))
    expect(challenge).toBe(Crypto.SHA256(verifier).toString(Crypto.enc.Base64url));
  });

  test("getGadgetAccessToken url can end with or without trailing slash", async () => {
    nock("https://test-app.gadget.dev")
      .post("/oauth/token")
      .reply(200, {
        accessToken: "foo",
      })
      .persist();

    const tokenWithoutSlash = await getGadgetAccessToken("https://test-app.gadget.dev", "", "");

    expect(tokenWithoutSlash).toBe("foo");

    const tokenWithSlash = await getGadgetAccessToken("https://test-app.gadget.dev/", "", "");

    expect(tokenWithSlash).toBe("foo");
  });

  test("getTokenKey generates matching key for host and gadget app url", () => {
    const testHost = "dGhlLW9yYW5nZS1zdG9yZS04OS5teXNob3BpZnkuY29tL2FkbWlu";
    const testGadgetAppUrl = "https://test.gadget.app";
    const differentTestGadgetAppUrl = "https://random.gadget.app";
    const differentTestHost = "YXBwbGUtZnJ1aXQtc3RvcmUubXlzaG9waWZ5LmNvbS9hZG1pbg";

    const key = getTokenKey(testGadgetAppUrl, testHost);

    expect(isEmpty(String(key))).toBeFalsy();
    expect(key).toBe(6718366616961859);

    // a different app url should generate a different key
    expect(getTokenKey(differentTestGadgetAppUrl, testHost)).not.toBe(key);

    // a different host should generate a different key
    expect(getTokenKey(testGadgetAppUrl, differentTestHost)).not.toBe(key);

    // different host and different app url should generate a different key
    expect(getTokenKey(differentTestGadgetAppUrl, differentTestHost)).not.toBe(key);
  });
});
