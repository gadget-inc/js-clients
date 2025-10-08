import { jest } from "@jest/globals";
import { AnyInternalModelManager, GadgetRecordList, InternalFindManyOptions } from "../src/index.js";

describe("GadgetRecordList", () => {
  const createModelManager = (
    start: number,
    expectation?: (startIndex: number, options: InternalFindManyOptions) => void
  ): AnyInternalModelManager => {
    let startIndex = start;
    const modelManager = {
      findMany: jest.fn<AnyInternalModelManager["findMany"]>().mockImplementation(async (options?: InternalFindManyOptions) => {
        if (!options) {
          throw new Error("Expected options to be defined");
        }

        expectation?.(startIndex, options);
        const newPageInfo = pages[options.first ? ++startIndex : --startIndex];

        return GadgetRecordList.boot(modelManager, [], { options, pageInfo: newPageInfo });
      }),
    } as unknown as AnyInternalModelManager;

    return modelManager;
  };

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
    const modelManager = createModelManager(0, (startIndex, options) => {
      expect(options.after).toBe(pages[startIndex].endCursor);
      expect(options.first).toBe(10);
      expect(options.last).toBeUndefined();
    });
    let recordList = GadgetRecordList.boot(modelManager, [], { pageInfo: pages[0], options: { first: 10 } });

    recordList = await recordList.nextPage();
    recordList = await recordList.nextPage();
    await recordList.nextPage();
  });

  test("sends correct page info when paging backward", async () => {
    const modelManager = createModelManager(3, (startIndex, options) => {
      expect(options.before).toBe(pages[startIndex].startCursor);
      expect(options.last).toBe(10);
      expect(options.first).toBeUndefined();
    });
    let recordList = GadgetRecordList.boot(modelManager, [], { pageInfo: pages[3], options: { last: 10 } });

    recordList = await recordList.previousPage();
    recordList = await recordList.previousPage();
    await recordList.previousPage();
  });

  test("does not send both first/last when paging forward and backward", async () => {
    const modelManager = createModelManager(0, (startIndex, options) => {
      if (options.before || options.last) {
        expect(options.after).toBeUndefined();
        expect(options.first).toBeUndefined();
      } else {
        expect(options.before).toBeUndefined();
        expect(options.last).toBeUndefined();
      }
    });
    let recordList = GadgetRecordList.boot(modelManager, [], { pageInfo: pages[0], options: { first: 10 } });

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
    const modelManager = createModelManager(0);
    const recordList = GadgetRecordList.boot(modelManager, [], { pageInfo: pages[0], options: { first: 10 } });

    await expect(recordList.previousPage()).rejects.toThrow(
      "Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists"
    );
  });

  test("throws if paging forward is not possible", async () => {
    const modelManager = createModelManager(3);
    const recordList = GadgetRecordList.boot(modelManager, [], { pageInfo: pages[3], options: { last: 10 } });

    await expect(recordList.nextPage()).rejects.toThrow(
      "Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists"
    );
  });
});
