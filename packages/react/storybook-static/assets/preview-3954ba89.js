import "./index-1b441bc2.js";
const { STORY_CHANGED: O, SELECT_STORY: E } = __STORYBOOK_MODULE_CORE_EVENTS__,
  { makeDecorator: l, addons: _ } = __STORYBOOK_MODULE_PREVIEW_API__,
  { global: L } = __STORYBOOK_MODULE_GLOBAL__;
var c = "links",
  { document: i, HTMLElement: m } = L,
  v = (e) => _.getChannel().emit(E, e),
  o = (e) => {
    let { target: t } = e;
    if (!(t instanceof m)) return;
    let s = t,
      { sbKind: a, sbStory: r } = s.dataset;
    (a || r) && (e.preventDefault(), v({ kind: a, story: r }));
  },
  n = !1,
  d = () => {
    n || ((n = !0), i.addEventListener("click", o));
  },
  k = () => {
    n && ((n = !1), i.removeEventListener("click", o));
  },
  R = l({ name: "withLinks", parameterName: c, wrapper: (e, t) => (d(), _.getChannel().once(O, k), e(t)) }),
  T = [R];
export { T as decorators };
