import "../sb-preview/runtime.js";
import { _ as a } from "./iframe-5aa777a6.js";
const { global: s } = __STORYBOOK_MODULE_GLOBAL__;
var _ = Object.entries(s.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, o] = r;
    return o.excludeFromDocsStories && (e[t] = !0), e;
  }, {}),
  n = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await a(
          () => import("./DocsRenderer-K4EAMTCU-40239516.js").then((r) => r.D),
          [
            "./DocsRenderer-K4EAMTCU-40239516.js",
            "./iframe-5aa777a6.js",
            "./index-c6dae603.js",
            "./react-18-9fc0415d.js",
            "./index-eb008d06.js",
            "./_commonjs-dynamic-modules-c617d3ef.js",
            "./index-0511f421.js",
            "./extends-98964cd2.js",
            "./index-8c3ac41d.js",
            "./_getPrototype-374d77d3.js",
            "./index-356e4a49.js",
          ],
          import.meta.url
        );
        return new e();
      },
      stories: {
        filter: (e) => {
          var r;
          return (e.tags || []).filter((t) => _[t]).length === 0 && !((r = e.parameters.docs) != null && r.disable);
        },
      },
    },
  };
export { n as parameters };
