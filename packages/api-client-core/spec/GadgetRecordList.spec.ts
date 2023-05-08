import { GadgetConnection, GadgetRecordList, InternalModelManager } from "../src";

describe("GadgetRecordList", () => {
  afterEach(() => jest.clearAllMocks());

  const pages: { startCursor: string; endCursor: string; hasNextPage: boolean; hasPreviousPage: boolean }[] = [
    {
      startCursor: "start1",
      endCursor: "end1",
      hasNextPage: true,
      hasPreviousPage: false,
    },
    {
      startCursor: "start2",
      endCursor: "end2",
      hasNextPage: true,
      hasPreviousPage: true,
    },
    {
      startCursor: "start3",
      endCursor: "end3",
      hasNextPage: true,
      hasPreviousPage: true,
    },
    {
      startCursor: "start4",
      endCursor: "end4",
      hasNextPage: false,
      hasPreviousPage: true,
    },
  ];
  test("sends correct page info when paging forward", async () => {
    let startIndex = 0;
    const modelManager = new InternalModelManager("foo", new GadgetConnection({ endpoint: "https://fake-app.gadget.app" }), {pluralApiIdentifier: "foos"});
    let recordList = GadgetRecordList.boot(modelManager, [], { pageInfo: pages[startIndex], options: { first: 10 } });
    jest.spyOn(modelManager, "findMany").mockImplementation(async (options) => {
      if (!options) {
        throw new Error("Expected options to be defined");
      }

      expect(options.after).toBe(pages[startIndex].endCursor);
      expect(options.first).toBe(10);
      expect(options.last).toBeUndefined();
      return GadgetRecordList.boot(modelManager, [], { options, pageInfo: pages[++startIndex] });
    });

    recordList = await recordList.nextPage();
    recordList = await recordList.nextPage();
    await recordList.nextPage();
  });

  test("sends correct page info when paging backward", async () => {
    let startIndex = 3;
    const modelManager = new InternalModelManager("foo", new GadgetConnection({ endpoint: "https://fake-app.gadget.app" }), {pluralApiIdentifier: "foos"});
    let recordList = GadgetRecordList.boot(modelManager, [], { pageInfo: pages[startIndex], options: { last: 10 } });
    jest.spyOn(modelManager, "findMany").mockImplementation(async (options) => {
      if (!options) {
        throw new Error("Expected options to be defined");
      }

      expect(options.before).toBe(pages[startIndex].startCursor);
      expect(options.last).toBe(10);
      expect(options.first).toBeUndefined();
      return GadgetRecordList.boot(modelManager, [], { options, pageInfo: pages[--startIndex] });
    });

    recordList = await recordList.previousPage();
    recordList = await recordList.previousPage();
    await recordList.previousPage();
  });

  test("does not send both first/last when paging forward and backward", async () => {
    let startIndex = 0;
    const modelManager = new InternalModelManager("foo", new GadgetConnection({ endpoint: "https://fake-app.gadget.app" }), {pluralApiIdentifier: "foos"});
    let recordList = GadgetRecordList.boot(modelManager, [], { pageInfo: pages[startIndex], options: { first: 10 } });
    jest.spyOn(modelManager, "findMany").mockImplementation(async (options) => {
      if (!options) {
        throw new Error("Expected options to be defined");
      }

      if (options.before || options.last) {
        expect(options.after).toBeUndefined();
        expect(options.first).toBeUndefined();
      } else {
        expect(options.before).toBeUndefined();
        expect(options.last).toBeUndefined();
      }
      return GadgetRecordList.boot(modelManager, [], { options, pageInfo: pages[options.first ? ++startIndex : --startIndex] });
    });

    recordList = await recordList.nextPage();
    recordList = await recordList.nextPage();
    recordList = await recordList.nextPage();
    recordList = await recordList.previousPage();
    recordList = await recordList.previousPage();
    recordList = await recordList.nextPage();
    recordList = await recordList.previousPage();

    await recordList.previousPage();
  });

  test("throws if paging backward is not possible", async () => {
    const modelManager = new InternalModelManager("foo", new GadgetConnection({ endpoint: "https://fake-app.gadget.app" }), {pluralApiIdentifier: "foos"});
    const recordList = GadgetRecordList.boot(modelManager, [], { pageInfo: pages[0], options: { first: 10 } });

    await expect(recordList.previousPage()).rejects.toThrow(
      "Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists"
    );
  });

  test("throws if paging forward is not possible", async () => {
    const modelManager = new InternalModelManager("foo", new GadgetConnection({ endpoint: "https://fake-app.gadget.app" }), {pluralApiIdentifier: "foos"});
    const recordList = GadgetRecordList.boot(modelManager, [], { pageInfo: pages[3], options: { last: 10 } });

    await expect(recordList.nextPage()).rejects.toThrow(
      "Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists"
    );
  });
});
