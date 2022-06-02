import fetch, { Headers } from "cross-fetch";
import Crypto from "crypto-js";
import { isEmpty } from "lodash";
import nock from "nock";
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
});
