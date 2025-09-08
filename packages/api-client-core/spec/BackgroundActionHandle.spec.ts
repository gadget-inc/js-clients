import { jest } from "@jest/globals";
import { BackgroundActionHandle } from "../src/BackgroundActionHandle.js";
import { GadgetConnection } from "../src/GadgetConnection.js";
import { MockWidgetCreateAction } from "./mockActions.js";
import { createMockUrqlClient } from "./mockUrqlClient.js";
import { enqueueActionRunner, cancelBackgroundActionRunner } from "../src/index.js";

describe("BackgroundActionHandle.result", () => {
  test("resolves with the action result when completed", async () => {
    const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
    const mockUrqlClient = createMockUrqlClient({});
    jest.spyOn(connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient as any);

    const handle = new BackgroundActionHandle(connection as any, MockWidgetCreateAction as any, "app-job-123456");

    const promise = handle.result({ select: { id: true, name: true } as any });

    expect(mockUrqlClient.executeSubscription).toHaveBeenCalledTimes(1);
    expect(mockUrqlClient.executeSubscription.mock.calls[0][0].variables).toEqual({ id: "app-job-123456" });

    // first non-terminal response
    mockUrqlClient.executeSubscription.pushResponse("CreateWidgetBackgroundResult", {
      data: {
        backgroundAction: {
          id: "app-job-123456",
          outcome: null,
          result: null,
        },
      },
      stale: false,
      hasNext: true,
    });

    // terminal response with completed result
    mockUrqlClient.executeSubscription.pushResponse("CreateWidgetBackgroundResult", {
      data: {
        backgroundAction: {
          id: "app-job-123456",
          outcome: "completed",
          result: {
            success: true,
            errors: null,
            widget: { id: "123", name: "foo" },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    const record = await promise;
    expect(record.id).toEqual("123");
    expect(record.name).toEqual("foo");
  });

  test("rejects when the background action fails", async () => {
    const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
    const mockUrqlClient = createMockUrqlClient({});
    jest.spyOn(connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient as any);

    const handle = new BackgroundActionHandle(connection as any, MockWidgetCreateAction as any, "app-job-err");

    const promise = handle.result();

    mockUrqlClient.executeSubscription.pushResponse("CreateWidgetBackgroundResult", {
      data: {
        backgroundAction: {
          id: "app-job-err",
          outcome: null,
          result: null,
        },
      },
      stale: false,
      hasNext: true,
    });

    mockUrqlClient.executeSubscription.pushResponse("CreateWidgetBackgroundResult", {
      data: {
        backgroundAction: {
          id: "app-job-err",
          outcome: "failed",
          result: {
            success: false,
            errors: [{ code: "GGT_SOMETHING_OR_OTHER", message: "An internal error occurred" }],
            widget: null,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await expect(promise).rejects.toThrow("GGT_SOMETHING_OR_OTHER: An internal error occurred");
  });
});

describe("BackgroundActionHandle.cancel", () => {
    test("cancels the background action by id", async () => {
        const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
        const mockUrqlClient = createMockUrqlClient({});
        jest.spyOn(connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient as any);

        const handle = new BackgroundActionHandle(connection as any, MockWidgetCreateAction as any, "bg-123");

        const promise = handle.cancel();

        expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(1);
        expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({ id: "bg-123" });

        mockUrqlClient.executeMutation.pushResponse("cancel", {
            data: {
                background: {
                    cancel: {
                        success: true,
                        errors: null,
                        backgroundAction: { id: "bg-123" },
                    },
                },
            },
            stale: false,
            hasNext: false,
        });

        await expect(promise).resolves.toBeUndefined();
    });

    test("throws when the cancel operation returns errors", async () => {
        const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
        const mockUrqlClient = createMockUrqlClient({});
        jest.spyOn(connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient as any);

        const handle = new BackgroundActionHandle(connection as any, MockWidgetCreateAction as any, "bg-err");

        const promise = handle.cancel();

        mockUrqlClient.executeMutation.pushResponse("cancel", {
            data: {
                background: {
                    cancel: {
                        success: false,
                        errors: [{ code: "GGT_SOMETHING", message: "nope" }],
                        backgroundAction: null,
                    },
                },
            },
            stale: false,
            hasNext: false,
        });

        await expect(promise).rejects.toThrow("GGT_SOMETHING: nope");
    });

    test("enqueues an action and cancels it on error", async () => {
        const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
        const mockUrqlClient = createMockUrqlClient({});
        jest.spyOn(connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient as any);

        const handlePromise = enqueueActionRunner(connection, MockWidgetCreateAction, { widget: { name: "new widget" } });

        mockUrqlClient.executeMutation.pushResponse("enqueueCreateWidget", {
            data: {
                background: {
                    createWidget: {
                        success: true,
                        errors: null,
                        backgroundAction: { id: "widget-createWidget-xyz" },
                    },
                },
            },
            stale: false,
            hasNext: false,
        });

        const handle = await handlePromise;
        expect(handle.id).toEqual("widget-createWidget-xyz");

        // simulate "some other unit of work" failing, then cancel
        try {
            throw new Error("unit of work failed");
        } catch {
            const cancelPromise = cancelBackgroundActionRunner(connection, handle.id);

            expect(mockUrqlClient.executeMutation).toHaveBeenCalledTimes(2);
            expect(mockUrqlClient.executeMutation.mock.calls[1][0].variables).toEqual({ id: "widget-createWidget-xyz" });

            mockUrqlClient.executeMutation.pushResponse("cancel", {
                data: {
                    background: {
                        cancel: {
                            success: true,
                            errors: null,
                            backgroundAction: { id: "widget-createWidget-xyz" },
                        },
                    },
                },
                stale: false,
                hasNext: false,
            });

            await expect(cancelPromise).resolves.toBeUndefined();
        }
    });
});
