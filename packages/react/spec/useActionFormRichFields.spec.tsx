import { act, renderHook } from "@testing-library/react";
import { useActionForm } from "../src/useActionForm.js";
import { fileFieldApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useActionFormNFiles", () => {
  test("can handle updating models that have a rich text field", async () => {
    const { result } = renderHook(() => useActionForm(fileFieldApi.post.update, { findBy: "1" }), {
      wrapper: MockClientWrapper(fileFieldApi),
    });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("post", {
      data: {
        post: {
          __typename: "Post",
          attachment: null,
          body: {
            markdown: "this is a test",
            truncatedHTML: "<p>this is a test</p> ",
            __typename: "RichText",
          },
          createdAt: "2024-05-17T01:15:14.522Z",
          id: "1",
          title: "test post",
          updatedAt: "2024-05-17T01:15:14.522Z",
        },
        gadgetMeta: {
          hydrations: {
            publishedAt: "DateTime",
            createdAt: "DateTime",
            updatedAt: "DateTime",
          },
          __typename: "GadgetApplicationMeta",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current.getValues("post.title")).toBe("test post");
    expect(result.current.getValues("post.body.markdown")).toBe("this is a test");

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("post.title", "update post");
      (result.current as any).setValue("post.body.markdown", "this is an updated test");
      submitPromise = result.current.submit();
    });

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      id: "1",
      post: {
        title: "update post",
        body: {
          markdown: "this is an updated test",
        },
        attachment: null,
      },
    });

    mockUrqlClient.executeMutation.pushResponse("updatePost", {
      data: {
        updatePost: {
          success: true,
          post: {
            __typename: "Post",
            attachment: null,
            body: {
              markdown: "this is an updated test",
              truncatedHTML: "<p>this is an updated test</p> ",
              __typename: "RichText",
            },
            createdAt: "2024-05-17T01:15:14.522Z",
            id: "1",
            title: "update post",
            updatedAt: "2024-05-17T01:15:14.522Z",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      await submitPromise;
    });

    expect(result.current.getValues("post.title")).toBe("update post");
    expect(result.current.getValues("post.body.markdown")).toBe("this is an updated test");
  });

  test("can handle updating models that have a datetime field", async () => {
    const { result } = renderHook(() => useActionForm(fileFieldApi.post.update, { findBy: "1" }), {
      wrapper: MockClientWrapper(fileFieldApi),
    });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("post", {
      data: {
        post: {
          __typename: "Post",
          attachment: null,
          body: {
            markdown: "this is a test",
            truncatedHTML: "<p>this is a test</p> ",
            __typename: "RichText",
          },
          publishedAt: "2024-05-18T01:19:14.522Z",
          createdAt: "2024-05-17T01:15:14.522Z",
          id: "1",
          title: "test post",
          updatedAt: "2024-05-18T01:32:14.522Z",
        },
        gadgetMeta: {
          hydrations: {
            publishedAt: "DateTime",
            createdAt: "DateTime",
            updatedAt: "DateTime",
          },
          __typename: "GadgetApplicationMeta",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current.getValues("post.title")).toBe("test post");
    expect(result.current.getValues("post.publishedAt")).toEqual(new Date("2024-05-18T01:19:14.522Z"));

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("post.title", "update post");
      (result.current as any).setValue("post.publishedAt", new Date("2024-06-19T01:19:14.522Z"));
      submitPromise = result.current.submit();
    });

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      id: "1",
      post: {
        title: "update post",
        body: {
          markdown: "this is a test",
        },
        publishedAt: new Date("2024-06-19T01:19:14.522Z"),
        attachment: null,
      },
    });

    mockUrqlClient.executeMutation.pushResponse("updatePost", {
      data: {
        updatePost: {
          success: true,
          post: {
            __typename: "Post",
            attachment: null,
            body: {
              markdown: "this is a test",
              truncatedHTML: "<p>this is a test</p> ",
              __typename: "RichText",
            },
            createdAt: "2024-05-17T01:15:14.522Z",
            id: "1",
            title: "update post",
            updatedAt: "2024-05-17T01:15:14.522Z",
            publishedAt: "2024-06-19T01:19:14.522Z",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      await submitPromise;
    });

    expect(result.current.getValues("post.title")).toBe("update post");
    expect(result.current.getValues("post.publishedAt")).toEqual(new Date("2024-06-19T01:19:14.522Z"));
  });

  test("can handle updating models that have a datetime field as a string", async () => {
    const { result } = renderHook(() => useActionForm(fileFieldApi.post.update, { findBy: "1" }), {
      wrapper: MockClientWrapper(fileFieldApi),
    });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("post", {
      data: {
        post: {
          __typename: "Post",
          attachment: null,
          body: {
            markdown: "this is a test",
            truncatedHTML: "<p>this is a test</p> ",
            __typename: "RichText",
          },
          publishedAt: "2024-05-18T01:19:14.522Z",
          createdAt: "2024-05-17T01:15:14.522Z",
          id: "1",
          title: "test post",
          updatedAt: "2024-05-18T01:32:14.522Z",
        },
        gadgetMeta: {
          hydrations: {
            publishedAt: "DateTime",
            createdAt: "DateTime",
            updatedAt: "DateTime",
          },
          __typename: "GadgetApplicationMeta",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current.getValues("post.title")).toBe("test post");
    expect(result.current.getValues("post.publishedAt")).toEqual(new Date("2024-05-18T01:19:14.522Z"));

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("post.title", "update post");
      (result.current as any).setValue("post.publishedAt", "2024-06-19T01:19:14.522Z");
      submitPromise = result.current.submit();
    });

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      id: "1",
      post: {
        title: "update post",
        body: {
          markdown: "this is a test",
        },
        publishedAt: "2024-06-19T01:19:14.522Z",
        attachment: null,
      },
    });

    mockUrqlClient.executeMutation.pushResponse("updatePost", {
      data: {
        updatePost: {
          success: true,
          post: {
            __typename: "Post",
            attachment: null,
            body: {
              markdown: "this is a test",
              truncatedHTML: "<p>this is a test</p> ",
              __typename: "RichText",
            },
            createdAt: "2024-05-17T01:15:14.522Z",
            id: "1",
            title: "update post",
            updatedAt: "2024-05-17T01:15:14.522Z",
            publishedAt: "2024-06-19T01:19:14.522Z",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      await submitPromise;
    });

    expect(result.current.getValues("post.title")).toBe("update post");
    expect(result.current.getValues("post.publishedAt")).toEqual("2024-06-19T01:19:14.522Z");
  });

  test("can handle updating models that have a rich text field and a file field", async () => {
    const { result } = renderHook(() => useActionForm(fileFieldApi.post.update, { findBy: "1" }), {
      wrapper: MockClientWrapper(fileFieldApi),
    });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("post", {
      data: {
        post: {
          __typename: "Post",
          attachment: {
            mimeType: "image/svg+xml",
            url: "https://storage.gadget.dev/files/121756/243001/post/attachment/PQid412oxaygdQLifUNlD/icon.svg",
            __typename: "StoredFile",
          },
          body: {
            markdown: "example _rich_ **text**",
            truncatedHTML: "<p>example <em>rich</em> <strong>text</strong></p> ",
            __typename: "RichText",
          },
          createdAt: "2024-05-17T02:32:24.421Z",
          id: "2",
          title: "example value for title",
          updatedAt: "2024-05-17T02:32:24.421Z",
        },
        gadgetMeta: {
          hydrations: {
            publishedAt: "DateTime",
            createdAt: "DateTime",
            updatedAt: "DateTime",
          },
          __typename: "GadgetApplicationMeta",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current.getValues("post.title")).toBe("example value for title");
    expect(result.current.getValues("post.body.markdown")).toBe("example _rich_ **text**");

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("post.title", "update post");
      (result.current as any).setValue("post.body.markdown", "this is an updated test");
      submitPromise = result.current.submit();
    });

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      id: "2",
      post: {
        title: "update post",
        body: {
          markdown: "this is an updated test",
        },
      },
    });

    mockUrqlClient.executeMutation.pushResponse("updatePost", {
      data: {
        updatePost: {
          success: true,
          post: {
            __typename: "Post",
            attachment: {
              mimeType: "image/svg+xml",
              url: "https://storage.gadget.dev/files/121756/243001/post/attachment/PQid412oxaygdQLifUNlD/icon.svg",
              __typename: "StoredFile",
            },
            body: {
              markdown: "this is an updated test",
              truncatedHTML: "<p>this is an updated test</p> ",
              __typename: "RichText",
            },
            createdAt: "2024-05-17T01:15:14.522Z",
            id: "1",
            title: "update post",
            updatedAt: "2024-05-17T01:15:14.522Z",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      await submitPromise;
    });

    expect(result.current.getValues("post.title")).toBe("update post");
    expect(result.current.getValues("post.body.markdown")).toBe("this is an updated test");
  });

  test("can handle creating a model with a file field using the file input field", async () => {
    const { result } = renderHook(() => useActionForm(fileFieldApi.post.create), {
      wrapper: MockClientWrapper(fileFieldApi),
    });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    let submitPromise: Promise<any>;

    await act(async () => {
      (result.current as any).setValue("post.title", "create post");
      (result.current as any).setValue("post.body.markdown", "this is an created test");
      (result.current as any).setValue("post.attachment.file", new File([""], "test.svg", { type: "image/svg+xml" }));
      submitPromise = result.current.submit();
    });

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      post: {
        title: "create post",
        body: {
          markdown: "this is an created test",
        },
        attachment: {
          file: expect.any(File),
        },
      },
    });

    mockUrqlClient.executeMutation.pushResponse("createPost", {
      data: {
        createPost: {
          success: true,
          post: {
            __typename: "Post",
            attachment: {
              mimeType: "image/svg+xml",
              url: "https://storage.gadget.dev/files/121756/243001/post/attachment/PQid412oxaygdQLifUNlD/icon.svg",
              __typename: "StoredFile",
            },
            body: {
              markdown: "this is an create test",
              truncatedHTML: "<p>this is an created test</p> ",
              __typename: "RichText",
            },
            createdAt: "2024-05-17T01:15:14.522Z",
            id: "1",
            title: "create post",
            updatedAt: "2024-05-17T01:15:14.522Z",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      await submitPromise;
    });

    expect(result.current.getValues("post.title")).toBe("create post");
    expect(result.current.getValues("post.body.markdown")).toBe("this is an created test");
  });
});
