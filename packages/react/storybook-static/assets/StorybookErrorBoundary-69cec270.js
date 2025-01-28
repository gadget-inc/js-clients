import { r as d, R as u } from "./index-7c191284.js";
function f(o, r) {
  return (
    (f = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, e) {
          return (n.__proto__ = e), n;
        }),
    f(o, r)
  );
}
function m(o, r) {
  (o.prototype = Object.create(r.prototype)), (o.prototype.constructor = o), f(o, r);
}
var y = function (r, n) {
    return (
      r === void 0 && (r = []),
      n === void 0 && (n = []),
      r.length !== n.length ||
        r.some(function (e, t) {
          return !Object.is(e, n[t]);
        })
    );
  },
  h = { error: null },
  v = (function (o) {
    m(r, o);
    function r() {
      for (var e, t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
      return (
        (e = o.call.apply(o, [this].concat(i)) || this),
        (e.state = h),
        (e.resetErrorBoundary = function () {
          for (var s, l = arguments.length, c = new Array(l), p = 0; p < l; p++) c[p] = arguments[p];
          e.props.onReset == null || (s = e.props).onReset.apply(s, c), e.reset();
        }),
        e
      );
    }
    r.getDerivedStateFromError = function (t) {
      return { error: t };
    };
    var n = r.prototype;
    return (
      (n.reset = function () {
        this.setState(h);
      }),
      (n.componentDidCatch = function (t, i) {
        var a, s;
        (a = (s = this.props).onError) == null || a.call(s, t, i);
      }),
      (n.componentDidUpdate = function (t, i) {
        var a = this.state.error,
          s = this.props.resetKeys;
        if (a !== null && i.error !== null && y(t.resetKeys, s)) {
          var l, c;
          (l = (c = this.props).onResetKeysChange) == null || l.call(c, t.resetKeys, s), this.reset();
        }
      }),
      (n.render = function () {
        var t = this.state.error,
          i = this.props,
          a = i.fallbackRender,
          s = i.FallbackComponent,
          l = i.fallback;
        if (t !== null) {
          var c = { error: t, resetErrorBoundary: this.resetErrorBoundary };
          if (d.isValidElement(l)) return l;
          if (typeof a == "function") return a(c);
          if (s) return d.createElement(s, c);
          throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
        }
        return this.props.children;
      }),
      r
    );
  })(d.Component);
const E = (o) =>
  u.createElement(
    v,
    {
      fallbackRender: ({ error: r }) =>
        u.createElement(
          u.Fragment,
          null,
          u.createElement("h1", null, "AutoForm render error"),
          u.createElement("h1", null, r && r.message)
        ),
    },
    o.children
  );
E.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "StorybookErrorBoundary",
  props: { children: { required: !0, tsType: { name: "ReactReactNode", raw: "React.ReactNode" }, description: "" } },
};
export { E as S };
