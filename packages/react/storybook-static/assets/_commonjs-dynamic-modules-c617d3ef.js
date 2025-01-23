function o(e, t) {
  return (
    (o = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    o(e, t)
  );
}
function c(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), o(e, t);
}
function a(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function p(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
export { o as _, c as a, a as b, p as c };
