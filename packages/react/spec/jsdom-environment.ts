import JSDOMEnvironment from "jest-environment-jsdom";
import { ReadableStream, TextDecoderStream } from "stream/web";
import { TextDecoder, TextEncoder } from "util";

export default class extends JSDOMEnvironment {
  constructor(...args: ConstructorParameters<typeof JSDOMEnvironment>) {
    super(...args);

    // Pending https://github.com/jsdom/jsdom/issues/1724
    this.global.fetch = fetch;
    this.global.Headers = Headers;
    this.global.Request = Request;
    this.global.Response = Response;

    this.global.TextEncoder = TextEncoder;
    this.global.TextDecoder = TextDecoder as any;
    this.global.TextDecoderStream = TextDecoderStream as any;

    this.global.ReadableStream = ReadableStream as any;
  }
}
