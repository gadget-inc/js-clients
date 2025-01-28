import { _ as o } from "./iframe-35b6cbe2.js";
var s = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, a] = r;
    return a.excludeFromDocsStories && (e[t] = !0), e;
  }, {}),
  l = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await o(
          () => import("./DocsRenderer-CFRXHY34-af884c6a.js").then((r) => r.al),
          [
            "./DocsRenderer-CFRXHY34-af884c6a.js",
            "./iframe-35b6cbe2.js",
            "./index-7c191284.js",
            "./jsx-runtime-69eee039.js",
            "./index-363833c6.js",
            "./index-1b441bc2.js",
            "./index-a393eeba.js",
            "./index-356e4a49.js",
            "./react-18-86f043aa.js",
          ],
          import.meta.url
        );
        return new e();
      },
      stories: {
        filter: (e) => {
          var r;
          return (e.tags || []).filter((t) => s[t]).length === 0 && !((r = e.parameters.docs) != null && r.disable);
        },
      },
    },
  };
export { l as parameters };
