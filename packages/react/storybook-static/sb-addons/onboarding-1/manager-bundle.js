try {
  (() => {
    var yu = Object.create;
    var Ir = Object.defineProperty;
    var vu = Object.getOwnPropertyDescriptor;
    var bu = Object.getOwnPropertyNames;
    var xu = Object.getPrototypeOf,
      wu = Object.prototype.hasOwnProperty;
    var Ne = (e, t) => () => (e && (t = e((e = 0))), t);
    var Tu = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      ti = (e, t) => {
        for (var r in t) Ir(e, r, { get: t[r], enumerable: !0 });
      },
      ri = (e, t, r, n) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let i of bu(t)) !wu.call(e, i) && i !== r && Ir(e, i, { get: () => t[i], enumerable: !(n = vu(t, i)) || n.enumerable });
        return e;
      };
    var Eu = (e, t, r) => (
        (r = e != null ? yu(xu(e)) : {}), ri(t || !e || !e.__esModule ? Ir(r, "default", { value: e, enumerable: !0 }) : r, e)
      ),
      ni = (e) => ri(Ir({}, "__esModule", { value: !0 }), e);
    var oe = Ne(() => {});
    var ie = Ne(() => {});
    var ae = Ne(() => {});
    var yt,
      fv,
      Kt,
      mv,
      gv,
      yv,
      vv,
      bv,
      xv,
      oi,
      wv,
      ii,
      Tv,
      kr = Ne(() => {
        oe();
        ie();
        ae();
        (yt = __REACT_DOM__),
          ({
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fv,
            createPortal: Kt,
            createRoot: mv,
            findDOMNode: gv,
            flushSync: yv,
            hydrate: vv,
            hydrateRoot: bv,
            render: xv,
            unmountComponentAtNode: oi,
            unstable_batchedUpdates: wv,
            unstable_renderSubtreeIntoContainer: ii,
            version: Tv,
          } = __REACT_DOM__);
      });
    var Lr = {};
    ti(Lr, {
      Children: () => Pu,
      Component: () => nt,
      Fragment: () => Mr,
      Profiler: () => Ou,
      PureComponent: () => Cu,
      StrictMode: () => Au,
      Suspense: () => Tn,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Ru,
      cloneElement: () => Iu,
      createContext: () => ot,
      createElement: () => J,
      createFactory: () => ku,
      createRef: () => En,
      default: () => m,
      forwardRef: () => Qt,
      isValidElement: () => Sn,
      lazy: () => Pn,
      memo: () => Mu,
      startTransition: () => Du,
      unstable_act: () => Lu,
      useCallback: () => Rt,
      useContext: () => be,
      useDebugValue: () => ju,
      useDeferredValue: () => Nu,
      useEffect: () => de,
      useId: () => On,
      useImperativeHandle: () => Vu,
      useInsertionEffect: () => Cn,
      useLayoutEffect: () => Dr,
      useMemo: () => Ke,
      useReducer: () => Fu,
      useRef: () => vt,
      useState: () => Pe,
      useSyncExternalStore: () => Bu,
      useTransition: () => zu,
      version: () => _u,
    });
    var m,
      Pu,
      nt,
      Mr,
      Ou,
      Cu,
      Au,
      Tn,
      Ru,
      Iu,
      ot,
      J,
      ku,
      En,
      Qt,
      Sn,
      Pn,
      Mu,
      Du,
      Lu,
      Rt,
      be,
      ju,
      Nu,
      de,
      On,
      Vu,
      Cn,
      Dr,
      Ke,
      Fu,
      vt,
      Pe,
      Bu,
      zu,
      _u,
      It = Ne(() => {
        oe();
        ie();
        ae();
        (m = __REACT__),
          ({
            Children: Pu,
            Component: nt,
            Fragment: Mr,
            Profiler: Ou,
            PureComponent: Cu,
            StrictMode: Au,
            Suspense: Tn,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ru,
            cloneElement: Iu,
            createContext: ot,
            createElement: J,
            createFactory: ku,
            createRef: En,
            forwardRef: Qt,
            isValidElement: Sn,
            lazy: Pn,
            memo: Mu,
            startTransition: Du,
            unstable_act: Lu,
            useCallback: Rt,
            useContext: be,
            useDebugValue: ju,
            useDeferredValue: Nu,
            useEffect: de,
            useId: On,
            useImperativeHandle: Vu,
            useInsertionEffect: Cn,
            useLayoutEffect: Dr,
            useMemo: Ke,
            useReducer: Fu,
            useRef: vt,
            useState: Pe,
            useSyncExternalStore: Bu,
            useTransition: zu,
            version: _u,
          } = __REACT__);
      });
    var Rv,
      Iv,
      kv,
      Mv,
      Dv,
      Lv,
      jr,
      jv,
      Nv,
      Vv,
      Fv,
      Bv,
      zv,
      _v,
      Hv,
      Uv,
      Wv,
      qv,
      Yv,
      Gv,
      Xv,
      Kv,
      Qv,
      Jv,
      Zv,
      $v,
      e0,
      t0,
      r0,
      n0,
      o0,
      i0,
      a0,
      An = Ne(() => {
        oe();
        ie();
        ae();
        (Rv = __STORYBOOK_API__),
          ({
            ActiveTabs: Iv,
            Consumer: kv,
            ManagerContext: Mv,
            Provider: Dv,
            RequestResponseError: Lv,
            addons: jr,
            combineParameters: jv,
            controlOrMetaKey: Nv,
            controlOrMetaSymbol: Vv,
            eventMatchesShortcut: Fv,
            eventToShortcut: Bv,
            experimental_requestResponse: zv,
            isMacLike: _v,
            isShortcutTaken: Hv,
            keyToSymbol: Uv,
            merge: Wv,
            mockChannel: qv,
            optionOrAltSymbol: Yv,
            shortcutMatchesShortcut: Gv,
            shortcutToHumanString: Xv,
            types: Kv,
            useAddonState: Qv,
            useArgTypes: Jv,
            useArgs: Zv,
            useChannel: $v,
            useGlobalTypes: e0,
            useGlobals: t0,
            useParameter: r0,
            useSharedState: n0,
            useStoryPrepared: o0,
            useStorybookApi: i0,
            useStorybookState: a0,
          } = __STORYBOOK_API__);
      });
    var p0,
      d0,
      h0,
      f0,
      m0,
      g0,
      y0,
      v0,
      b0,
      x0,
      w0,
      T0,
      E0,
      S0,
      P0,
      O0,
      C0,
      A0,
      R0,
      I0,
      k0,
      M0,
      D0,
      L0,
      j0,
      N0,
      V0,
      F0,
      B0,
      z0,
      _0,
      H0,
      U0,
      W0,
      q0,
      Y0,
      G0,
      X0,
      K0,
      Q0,
      J0,
      Rn,
      Z0,
      $0,
      ai,
      eb,
      si,
      tb,
      rb,
      nb,
      ob,
      ib,
      ab,
      sb,
      li,
      In = Ne(() => {
        oe();
        ie();
        ae();
        (p0 = __STORYBOOK_CORE_EVENTS__),
          ({
            ARGTYPES_INFO_REQUEST: d0,
            ARGTYPES_INFO_RESPONSE: h0,
            CHANNEL_CREATED: f0,
            CHANNEL_WS_DISCONNECT: m0,
            CONFIG_ERROR: g0,
            CREATE_NEW_STORYFILE_REQUEST: y0,
            CREATE_NEW_STORYFILE_RESPONSE: v0,
            CURRENT_STORY_WAS_SET: b0,
            DOCS_PREPARED: x0,
            DOCS_RENDERED: w0,
            FILE_COMPONENT_SEARCH_REQUEST: T0,
            FILE_COMPONENT_SEARCH_RESPONSE: E0,
            FORCE_REMOUNT: S0,
            FORCE_RE_RENDER: P0,
            GLOBALS_UPDATED: O0,
            NAVIGATE_URL: C0,
            PLAY_FUNCTION_THREW_EXCEPTION: A0,
            PRELOAD_ENTRIES: R0,
            PREVIEW_BUILDER_PROGRESS: I0,
            PREVIEW_KEYDOWN: k0,
            REGISTER_SUBSCRIPTION: M0,
            REQUEST_WHATS_NEW_DATA: D0,
            RESET_STORY_ARGS: L0,
            RESULT_WHATS_NEW_DATA: j0,
            SAVE_STORY_REQUEST: N0,
            SAVE_STORY_RESPONSE: V0,
            SELECT_STORY: F0,
            SET_CONFIG: B0,
            SET_CURRENT_STORY: z0,
            SET_GLOBALS: _0,
            SET_INDEX: H0,
            SET_STORIES: U0,
            SET_WHATS_NEW_CACHE: W0,
            SHARED_STATE_CHANGED: q0,
            SHARED_STATE_SET: Y0,
            STORIES_COLLAPSE_ALL: G0,
            STORIES_EXPAND_ALL: X0,
            STORY_ARGS_UPDATED: K0,
            STORY_CHANGED: Q0,
            STORY_ERRORED: J0,
            STORY_INDEX_INVALIDATED: Rn,
            STORY_MISSING: Z0,
            STORY_PREPARED: $0,
            STORY_RENDERED: ai,
            STORY_RENDER_PHASE_CHANGED: eb,
            STORY_SPECIFIED: si,
            STORY_THREW_EXCEPTION: tb,
            STORY_UNCHANGED: rb,
            TELEMETRY_ERROR: nb,
            TOGGLE_WHATS_NEW_NOTIFICATIONS: ob,
            UNHANDLED_ERRORS_WHILE_PLAYING: ib,
            UPDATE_GLOBALS: ab,
            UPDATE_QUERY_PARAMS: sb,
            UPDATE_STORY_ARGS: li,
          } = __STORYBOOK_CORE_EVENTS__);
      });
    var db,
      hb,
      fb,
      mb,
      kn,
      gb,
      yb,
      ui,
      vb,
      bb,
      xb,
      wb,
      Tb,
      Eb,
      ci,
      Sb,
      Pb,
      Ob,
      bt,
      Cb,
      U,
      pi,
      Ab,
      Mn,
      Rb,
      di = Ne(() => {
        oe();
        ie();
        ae();
        (db = __STORYBOOK_THEMING__),
          ({
            CacheProvider: hb,
            ClassNames: fb,
            Global: mb,
            ThemeProvider: kn,
            background: gb,
            color: yb,
            convert: ui,
            create: vb,
            createCache: bb,
            createGlobal: xb,
            createReset: wb,
            css: Tb,
            darken: Eb,
            ensure: ci,
            ignoreSsrWarning: Sb,
            isPropValid: Pb,
            jsx: Ob,
            keyframes: bt,
            lighten: Cb,
            styled: U,
            themes: pi,
            typography: Ab,
            useTheme: Mn,
            withTheme: Rb,
          } = __STORYBOOK_THEMING__);
      });
    var hi = Tu((Jt, Dn) => {
      oe();
      ie();
      ae();
      (function (e, t) {
        typeof Jt == "object" && typeof Dn == "object"
          ? (Dn.exports = t((It(), ni(Lr))))
          : typeof define == "function" && define.amd
          ? define(["react"], t)
          : typeof Jt == "object"
          ? (Jt.ReactConfetti = t((It(), ni(Lr))))
          : (e.ReactConfetti = t(e.React));
      })(typeof self < "u" ? self : Jt, function (e) {
        return (function (t) {
          var r = {};
          function n(i) {
            if (r[i]) return r[i].exports;
            var o = (r[i] = { i, l: !1, exports: {} });
            return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = t),
            (n.c = r),
            (n.d = function (i, o, a) {
              n.o(i, o) || Object.defineProperty(i, o, { enumerable: !0, get: a });
            }),
            (n.r = function (i) {
              typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(i, "__esModule", { value: !0 });
            }),
            (n.t = function (i, o) {
              if ((1 & o && (i = n(i)), 8 & o || (4 & o && typeof i == "object" && i && i.__esModule))) return i;
              var a = Object.create(null);
              if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: i }), 2 & o && typeof i != "string"))
                for (var s in i)
                  n.d(
                    a,
                    s,
                    function (u) {
                      return i[u];
                    }.bind(null, s)
                  );
              return a;
            }),
            (n.n = function (i) {
              var o =
                i && i.__esModule
                  ? function () {
                      return i.default;
                    }
                  : function () {
                      return i;
                    };
              return n.d(o, "a", o), o;
            }),
            (n.o = function (i, o) {
              return Object.prototype.hasOwnProperty.call(i, o);
            }),
            (n.p = ""),
            n((n.s = 2))
          );
        })([
          function (t, r) {
            t.exports = e;
          },
          function (t, r, n) {
            "use strict";
            var i = {
              linear: function (o, a, s, u) {
                return ((s - a) * o) / u + a;
              },
              easeInQuad: function (o, a, s, u) {
                return (s - a) * (o /= u) * o + a;
              },
              easeOutQuad: function (o, a, s, u) {
                return -(s - a) * (o /= u) * (o - 2) + a;
              },
              easeInOutQuad: function (o, a, s, u) {
                var l = s - a;
                return (o /= u / 2) < 1 ? (l / 2) * o * o + a : (-l / 2) * (--o * (o - 2) - 1) + a;
              },
              easeInCubic: function (o, a, s, u) {
                return (s - a) * (o /= u) * o * o + a;
              },
              easeOutCubic: function (o, a, s, u) {
                return (s - a) * ((o = o / u - 1) * o * o + 1) + a;
              },
              easeInOutCubic: function (o, a, s, u) {
                var l = s - a;
                return (o /= u / 2) < 1 ? (l / 2) * o * o * o + a : (l / 2) * ((o -= 2) * o * o + 2) + a;
              },
              easeInQuart: function (o, a, s, u) {
                return (s - a) * (o /= u) * o * o * o + a;
              },
              easeOutQuart: function (o, a, s, u) {
                return -(s - a) * ((o = o / u - 1) * o * o * o - 1) + a;
              },
              easeInOutQuart: function (o, a, s, u) {
                var l = s - a;
                return (o /= u / 2) < 1 ? (l / 2) * o * o * o * o + a : (-l / 2) * ((o -= 2) * o * o * o - 2) + a;
              },
              easeInQuint: function (o, a, s, u) {
                return (s - a) * (o /= u) * o * o * o * o + a;
              },
              easeOutQuint: function (o, a, s, u) {
                return (s - a) * ((o = o / u - 1) * o * o * o * o + 1) + a;
              },
              easeInOutQuint: function (o, a, s, u) {
                var l = s - a;
                return (o /= u / 2) < 1 ? (l / 2) * o * o * o * o * o + a : (l / 2) * ((o -= 2) * o * o * o * o + 2) + a;
              },
              easeInSine: function (o, a, s, u) {
                var l = s - a;
                return -l * Math.cos((o / u) * (Math.PI / 2)) + l + a;
              },
              easeOutSine: function (o, a, s, u) {
                return (s - a) * Math.sin((o / u) * (Math.PI / 2)) + a;
              },
              easeInOutSine: function (o, a, s, u) {
                return (-(s - a) / 2) * (Math.cos((Math.PI * o) / u) - 1) + a;
              },
              easeInExpo: function (o, a, s, u) {
                return o == 0 ? a : (s - a) * Math.pow(2, 10 * (o / u - 1)) + a;
              },
              easeOutExpo: function (o, a, s, u) {
                var l = s - a;
                return o == u ? a + l : l * (1 - Math.pow(2, (-10 * o) / u)) + a;
              },
              easeInOutExpo: function (o, a, s, u) {
                var l = s - a;
                return o === 0
                  ? a
                  : o === u
                  ? a + l
                  : (o /= u / 2) < 1
                  ? (l / 2) * Math.pow(2, 10 * (o - 1)) + a
                  : (l / 2) * (2 - Math.pow(2, -10 * --o)) + a;
              },
              easeInCirc: function (o, a, s, u) {
                return -(s - a) * (Math.sqrt(1 - (o /= u) * o) - 1) + a;
              },
              easeOutCirc: function (o, a, s, u) {
                return (s - a) * Math.sqrt(1 - (o = o / u - 1) * o) + a;
              },
              easeInOutCirc: function (o, a, s, u) {
                var l = s - a;
                return (o /= u / 2) < 1 ? (-l / 2) * (Math.sqrt(1 - o * o) - 1) + a : (l / 2) * (Math.sqrt(1 - (o -= 2) * o) + 1) + a;
              },
              easeInElastic: function (o, a, s, u) {
                var l,
                  c,
                  p,
                  d = s - a;
                return (
                  (p = 1.70158),
                  o === 0
                    ? a
                    : (o /= u) == 1
                    ? a + d
                    : ((c = 0) || (c = 0.3 * u),
                      (l = d) < Math.abs(d) ? ((l = d), (p = c / 4)) : (p = (c / (2 * Math.PI)) * Math.asin(d / l)),
                      -l * Math.pow(2, 10 * (o -= 1)) * Math.sin(((o * u - p) * (2 * Math.PI)) / c) + a)
                );
              },
              easeOutElastic: function (o, a, s, u) {
                var l,
                  c,
                  p,
                  d = s - a;
                return (
                  (p = 1.70158),
                  o === 0
                    ? a
                    : (o /= u) == 1
                    ? a + d
                    : ((c = 0) || (c = 0.3 * u),
                      (l = d) < Math.abs(d) ? ((l = d), (p = c / 4)) : (p = (c / (2 * Math.PI)) * Math.asin(d / l)),
                      l * Math.pow(2, -10 * o) * Math.sin(((o * u - p) * (2 * Math.PI)) / c) + d + a)
                );
              },
              easeInOutElastic: function (o, a, s, u) {
                var l,
                  c,
                  p,
                  d = s - a;
                return (
                  (p = 1.70158),
                  o === 0
                    ? a
                    : (o /= u / 2) == 2
                    ? a + d
                    : ((c = 0) || (c = u * 0.44999999999999996),
                      (l = d) < Math.abs(d) ? ((l = d), (p = c / 4)) : (p = (c / (2 * Math.PI)) * Math.asin(d / l)),
                      o < 1
                        ? l * Math.pow(2, 10 * (o -= 1)) * Math.sin(((o * u - p) * (2 * Math.PI)) / c) * -0.5 + a
                        : l * Math.pow(2, -10 * (o -= 1)) * Math.sin(((o * u - p) * (2 * Math.PI)) / c) * 0.5 + d + a)
                );
              },
              easeInBack: function (o, a, s, u, l) {
                return l === void 0 && (l = 1.70158), (s - a) * (o /= u) * o * ((l + 1) * o - l) + a;
              },
              easeOutBack: function (o, a, s, u, l) {
                return l === void 0 && (l = 1.70158), (s - a) * ((o = o / u - 1) * o * ((l + 1) * o + l) + 1) + a;
              },
              easeInOutBack: function (o, a, s, u, l) {
                var c = s - a;
                return (
                  l === void 0 && (l = 1.70158),
                  (o /= u / 2) < 1
                    ? (c / 2) * (o * o * ((1 + (l *= 1.525)) * o - l)) + a
                    : (c / 2) * ((o -= 2) * o * ((1 + (l *= 1.525)) * o + l) + 2) + a
                );
              },
              easeInBounce: function (o, a, s, u) {
                var l = s - a;
                return l - i.easeOutBounce(u - o, 0, l, u) + a;
              },
              easeOutBounce: function (o, a, s, u) {
                var l = s - a;
                return (o /= u) < 0.36363636363636365
                  ? l * (7.5625 * o * o) + a
                  : o < 0.7272727272727273
                  ? l * (7.5625 * (o -= 0.5454545454545454) * o + 0.75) + a
                  : o < 0.9090909090909091
                  ? l * (7.5625 * (o -= 0.8181818181818182) * o + 0.9375) + a
                  : l * (7.5625 * (o -= 0.9545454545454546) * o + 0.984375) + a;
              },
              easeInOutBounce: function (o, a, s, u) {
                var l = s - a;
                return o < u / 2 ? 0.5 * i.easeInBounce(2 * o, 0, l, u) + a : 0.5 * i.easeOutBounce(2 * o - u, 0, l, u) + 0.5 * l + a;
              },
            };
            t.exports = i;
          },
          function (t, r, n) {
            t.exports = n(3);
          },
          function (t, r, n) {
            "use strict";
            n.r(r),
              n.d(r, "ReactConfetti", function () {
                return Y;
              });
            var i,
              o,
              a = n(0),
              s = n.n(a),
              u = n(1),
              l = n.n(u);
            function c(g, w) {
              return g + Math.random() * (w - g);
            }
            function p(g, w) {
              for (var E = 0; E < w.length; E++) {
                var T = w[E];
                (T.enumerable = T.enumerable || !1),
                  (T.configurable = !0),
                  "value" in T && (T.writable = !0),
                  Object.defineProperty(g, T.key, T);
              }
            }
            function d(g, w, E) {
              return w in g ? Object.defineProperty(g, w, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : (g[w] = E), g;
            }
            (function (g) {
              (g[(g.Circle = 0)] = "Circle"), (g[(g.Square = 1)] = "Square"), (g[(g.Strip = 2)] = "Strip");
            })(i || (i = {})),
              (function (g) {
                (g[(g.Positive = 1)] = "Positive"), (g[(g.Negative = -1)] = "Negative");
              })(o || (o = {}));
            var h = (function () {
              function g(M, k, R, C) {
                (function (bn, Yt) {
                  if (!(bn instanceof Yt)) throw new TypeError("Cannot call a class as a function");
                })(this, g),
                  d(this, "context", void 0),
                  d(this, "radius", void 0),
                  d(this, "x", void 0),
                  d(this, "y", void 0),
                  d(this, "w", void 0),
                  d(this, "h", void 0),
                  d(this, "vx", void 0),
                  d(this, "vy", void 0),
                  d(this, "shape", void 0),
                  d(this, "angle", void 0),
                  d(this, "angularSpin", void 0),
                  d(this, "color", void 0),
                  d(this, "rotateY", void 0),
                  d(this, "rotationDirection", void 0),
                  d(this, "getOptions", void 0),
                  (this.getOptions = k);
                var G,
                  K,
                  pe = this.getOptions(),
                  rt = pe.colors,
                  Se = pe.initialVelocityX,
                  At = pe.initialVelocityY;
                (this.context = M),
                  (this.x = R),
                  (this.y = C),
                  (this.w = c(5, 20)),
                  (this.h = c(5, 20)),
                  (this.radius = c(5, 10)),
                  (this.vx = typeof Se == "number" ? c(-Se, Se) : c(Se.min, Se.max)),
                  (this.vy = typeof At == "number" ? c(-At, 0) : c(At.min, At.max)),
                  (this.shape = ((G = 0), (K = 2), Math.floor(G + Math.random() * (K - G + 1)))),
                  (this.angle = (c(0, 360) * Math.PI) / 180),
                  (this.angularSpin = c(-0.2, 0.2)),
                  (this.color = rt[Math.floor(Math.random() * rt.length)]),
                  (this.rotateY = c(0, 1)),
                  (this.rotationDirection = c(0, 1) ? o.Positive : o.Negative);
              }
              var w, E, T;
              return (
                (w = g),
                (E = [
                  {
                    key: "update",
                    value: function () {
                      var M = this.getOptions(),
                        k = M.gravity,
                        R = M.wind,
                        C = M.friction,
                        G = M.opacity,
                        K = M.drawShape;
                      (this.x += this.vx),
                        (this.y += this.vy),
                        (this.vy += k),
                        (this.vx += R),
                        (this.vx *= C),
                        (this.vy *= C),
                        this.rotateY >= 1 && this.rotationDirection === o.Positive
                          ? (this.rotationDirection = o.Negative)
                          : this.rotateY <= -1 && this.rotationDirection === o.Negative && (this.rotationDirection = o.Positive);
                      var pe = 0.1 * this.rotationDirection;
                      if (
                        ((this.rotateY += pe),
                        (this.angle += this.angularSpin),
                        this.context.save(),
                        this.context.translate(this.x, this.y),
                        this.context.rotate(this.angle),
                        this.context.scale(1, this.rotateY),
                        this.context.rotate(this.angle),
                        this.context.beginPath(),
                        (this.context.fillStyle = this.color),
                        (this.context.strokeStyle = this.color),
                        (this.context.globalAlpha = G),
                        (this.context.lineCap = "round"),
                        (this.context.lineWidth = 2),
                        K && typeof K == "function")
                      )
                        K.call(this, this.context);
                      else
                        switch (this.shape) {
                          case i.Circle:
                            this.context.beginPath(), this.context.arc(0, 0, this.radius, 0, 2 * Math.PI), this.context.fill();
                            break;
                          case i.Square:
                            this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                            break;
                          case i.Strip:
                            this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
                        }
                      this.context.closePath(), this.context.restore();
                    },
                  },
                ]) && p(w.prototype, E),
                T && p(w, T),
                g
              );
            })();
            function f(g, w, E) {
              return w in g ? Object.defineProperty(g, w, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : (g[w] = E), g;
            }
            var v = function g(w, E) {
              var T = this;
              (function (k, R) {
                if (!(k instanceof R)) throw new TypeError("Cannot call a class as a function");
              })(this, g),
                f(this, "canvas", void 0),
                f(this, "context", void 0),
                f(this, "getOptions", void 0),
                f(this, "x", 0),
                f(this, "y", 0),
                f(this, "w", 0),
                f(this, "h", 0),
                f(this, "lastNumberOfPieces", 0),
                f(this, "tweenInitTime", Date.now()),
                f(this, "particles", []),
                f(this, "particlesGenerated", 0),
                f(this, "removeParticleAt", function (k) {
                  T.particles.splice(k, 1);
                }),
                f(this, "getParticle", function () {
                  var k = c(T.x, T.w + T.x),
                    R = c(T.y, T.h + T.y);
                  return new h(T.context, T.getOptions, k, R);
                }),
                f(this, "animate", function () {
                  var k = T.canvas,
                    R = T.context,
                    C = T.particlesGenerated,
                    G = T.lastNumberOfPieces,
                    K = T.getOptions(),
                    pe = K.run,
                    rt = K.recycle,
                    Se = K.numberOfPieces,
                    At = K.debug,
                    bn = K.tweenFunction,
                    Yt = K.tweenDuration;
                  if (!pe) return !1;
                  var xn = T.particles.length,
                    Gt = rt ? xn : C,
                    wn = Date.now();
                  if (Gt < Se) {
                    G !== Se && ((T.tweenInitTime = wn), (T.lastNumberOfPieces = Se));
                    for (
                      var Jo = T.tweenInitTime,
                        gu = bn(wn - Jo > Yt ? Yt : Math.max(0, wn - Jo), Gt, Se, Yt),
                        Zo = Math.round(gu - Gt),
                        $o = 0;
                      $o < Zo;
                      $o++
                    )
                      T.particles.push(T.getParticle());
                    T.particlesGenerated += Zo;
                  }
                  return (
                    At &&
                      ((R.font = "12px sans-serif"),
                      (R.fillStyle = "#333"),
                      (R.textAlign = "right"),
                      R.fillText("Particles: ".concat(xn), k.width - 10, k.height - 20)),
                    T.particles.forEach(function (Xt, ei) {
                      Xt.update(),
                        (Xt.y > k.height || Xt.y < -100 || Xt.x > k.width + 100 || Xt.x < -100) &&
                          (rt && Gt <= Se ? (T.particles[ei] = T.getParticle()) : T.removeParticleAt(ei));
                    }),
                    xn > 0 || Gt < Se
                  );
                }),
                (this.canvas = w);
              var M = this.canvas.getContext("2d");
              if (!M) throw new Error("Could not get canvas context");
              (this.context = M), (this.getOptions = E);
            };
            function S(g, w) {
              var E = Object.keys(g);
              if (Object.getOwnPropertySymbols) {
                var T = Object.getOwnPropertySymbols(g);
                w &&
                  (T = T.filter(function (M) {
                    return Object.getOwnPropertyDescriptor(g, M).enumerable;
                  })),
                  E.push.apply(E, T);
              }
              return E;
            }
            function x(g) {
              for (var w = 1; w < arguments.length; w++) {
                var E = arguments[w] != null ? arguments[w] : {};
                w % 2
                  ? S(Object(E), !0).forEach(function (T) {
                      y(g, T, E[T]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(E))
                  : S(Object(E)).forEach(function (T) {
                      Object.defineProperty(g, T, Object.getOwnPropertyDescriptor(E, T));
                    });
              }
              return g;
            }
            function b(g, w) {
              for (var E = 0; E < w.length; E++) {
                var T = w[E];
                (T.enumerable = T.enumerable || !1),
                  (T.configurable = !0),
                  "value" in T && (T.writable = !0),
                  Object.defineProperty(g, T.key, T);
              }
            }
            function y(g, w, E) {
              return w in g ? Object.defineProperty(g, w, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : (g[w] = E), g;
            }
            var P = {
                width: typeof window < "u" ? window.innerWidth : 300,
                height: typeof window < "u" ? window.innerHeight : 200,
                numberOfPieces: 200,
                friction: 0.99,
                wind: 0,
                gravity: 0.1,
                initialVelocityX: 4,
                initialVelocityY: 10,
                colors: [
                  "#f44336",
                  "#e91e63",
                  "#9c27b0",
                  "#673ab7",
                  "#3f51b5",
                  "#2196f3",
                  "#03a9f4",
                  "#00bcd4",
                  "#009688",
                  "#4CAF50",
                  "#8BC34A",
                  "#CDDC39",
                  "#FFEB3B",
                  "#FFC107",
                  "#FF9800",
                  "#FF5722",
                  "#795548",
                ],
                opacity: 1,
                debug: !1,
                tweenFunction: l.a.easeInOutQuad,
                tweenDuration: 5e3,
                recycle: !0,
                run: !0,
              },
              O = (function () {
                function g(M, k) {
                  var R = this;
                  (function (G, K) {
                    if (!(G instanceof K)) throw new TypeError("Cannot call a class as a function");
                  })(this, g),
                    y(this, "canvas", void 0),
                    y(this, "context", void 0),
                    y(this, "_options", void 0),
                    y(this, "generator", void 0),
                    y(this, "rafId", void 0),
                    y(this, "setOptionsWithDefaults", function (G) {
                      var K = { confettiSource: { x: 0, y: 0, w: R.canvas.width, h: 0 } };
                      (R._options = x(x(x({}, K), P), G)), Object.assign(R, G.confettiSource);
                    }),
                    y(this, "update", function () {
                      var G = R.options,
                        K = G.run,
                        pe = G.onConfettiComplete,
                        rt = R.canvas,
                        Se = R.context;
                      K && ((Se.fillStyle = "white"), Se.clearRect(0, 0, rt.width, rt.height)),
                        R.generator.animate()
                          ? (R.rafId = requestAnimationFrame(R.update))
                          : (pe && typeof pe == "function" && R.generator.particlesGenerated > 0 && pe.call(R, R), (R._options.run = !1));
                    }),
                    y(this, "reset", function () {
                      R.generator &&
                        R.generator.particlesGenerated > 0 &&
                        ((R.generator.particlesGenerated = 0), (R.generator.particles = []), (R.generator.lastNumberOfPieces = 0));
                    }),
                    y(this, "stop", function () {
                      (R.options = { run: !1 }), R.rafId && (cancelAnimationFrame(R.rafId), (R.rafId = void 0));
                    }),
                    (this.canvas = M);
                  var C = this.canvas.getContext("2d");
                  if (!C) throw new Error("Could not get canvas context");
                  (this.context = C),
                    (this.generator = new v(this.canvas, function () {
                      return R.options;
                    })),
                    (this.options = k),
                    this.update();
                }
                var w, E, T;
                return (
                  (w = g),
                  (E = [
                    {
                      key: "options",
                      get: function () {
                        return this._options;
                      },
                      set: function (M) {
                        var k = this._options && this._options.run,
                          R = this._options && this._options.recycle;
                        this.setOptionsWithDefaults(M),
                          this.generator &&
                            (Object.assign(this.generator, this.options.confettiSource),
                            typeof M.recycle == "boolean" &&
                              M.recycle &&
                              R === !1 &&
                              (this.generator.lastNumberOfPieces = this.generator.particles.length)),
                          typeof M.run == "boolean" && M.run && k === !1 && this.update();
                      },
                    },
                  ]) && b(w.prototype, E),
                  T && b(w, T),
                  g
                );
              })();
            function W(g) {
              return (
                (function (w) {
                  if (Array.isArray(w)) return ye(w);
                })(g) ||
                (function (w) {
                  if (typeof Symbol < "u" && Symbol.iterator in Object(w)) return Array.from(w);
                })(g) ||
                Te(g) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function B(g) {
              return (B =
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                  ? function (w) {
                      return typeof w;
                    }
                  : function (w) {
                      return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
                    })(g);
            }
            function z() {
              return (z =
                Object.assign ||
                function (g) {
                  for (var w = 1; w < arguments.length; w++) {
                    var E = arguments[w];
                    for (var T in E) Object.prototype.hasOwnProperty.call(E, T) && (g[T] = E[T]);
                  }
                  return g;
                }).apply(this, arguments);
            }
            function H(g, w) {
              var E = Object.keys(g);
              if (Object.getOwnPropertySymbols) {
                var T = Object.getOwnPropertySymbols(g);
                w &&
                  (T = T.filter(function (M) {
                    return Object.getOwnPropertyDescriptor(g, M).enumerable;
                  })),
                  E.push.apply(E, T);
              }
              return E;
            }
            function te(g) {
              for (var w = 1; w < arguments.length; w++) {
                var E = arguments[w] != null ? arguments[w] : {};
                w % 2
                  ? H(Object(E), !0).forEach(function (T) {
                      Z(g, T, E[T]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(E))
                  : H(Object(E)).forEach(function (T) {
                      Object.defineProperty(g, T, Object.getOwnPropertyDescriptor(E, T));
                    });
              }
              return g;
            }
            function ce(g, w) {
              return (
                (function (E) {
                  if (Array.isArray(E)) return E;
                })(g) ||
                (function (E, T) {
                  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(E)))) {
                    var M = [],
                      k = !0,
                      R = !1,
                      C = void 0;
                    try {
                      for (var G, K = E[Symbol.iterator](); !(k = (G = K.next()).done) && (M.push(G.value), !T || M.length !== T); k = !0);
                    } catch (pe) {
                      (R = !0), (C = pe);
                    } finally {
                      try {
                        k || K.return == null || K.return();
                      } finally {
                        if (R) throw C;
                      }
                    }
                    return M;
                  }
                })(g, w) ||
                Te(g, w) ||
                (function () {
                  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function Te(g, w) {
              if (g) {
                if (typeof g == "string") return ye(g, w);
                var E = Object.prototype.toString.call(g).slice(8, -1);
                return (
                  E === "Object" && g.constructor && (E = g.constructor.name),
                  E === "Map" || E === "Set"
                    ? Array.from(g)
                    : E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)
                    ? ye(g, w)
                    : void 0
                );
              }
            }
            function ye(g, w) {
              (w == null || w > g.length) && (w = g.length);
              for (var E = 0, T = new Array(w); E < w; E++) T[E] = g[E];
              return T;
            }
            function ue(g, w) {
              if (!(g instanceof w)) throw new TypeError("Cannot call a class as a function");
            }
            function re(g, w) {
              for (var E = 0; E < w.length; E++) {
                var T = w[E];
                (T.enumerable = T.enumerable || !1),
                  (T.configurable = !0),
                  "value" in T && (T.writable = !0),
                  Object.defineProperty(g, T.key, T);
              }
            }
            function me(g, w) {
              return (me =
                Object.setPrototypeOf ||
                function (E, T) {
                  return (E.__proto__ = T), E;
                })(g, w);
            }
            function ke(g) {
              var w = (function () {
                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch {
                  return !1;
                }
              })();
              return function () {
                var E,
                  T = _e(g);
                if (w) {
                  var M = _e(this).constructor;
                  E = Reflect.construct(T, arguments, M);
                } else E = T.apply(this, arguments);
                return ge(this, E);
              };
            }
            function ge(g, w) {
              return !w || (B(w) !== "object" && typeof w != "function") ? Ee(g) : w;
            }
            function Ee(g) {
              if (g === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return g;
            }
            function _e(g) {
              return (_e = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (w) {
                    return w.__proto__ || Object.getPrototypeOf(w);
                  })(g);
            }
            function Z(g, w, E) {
              return w in g ? Object.defineProperty(g, w, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : (g[w] = E), g;
            }
            var A = s.a.createRef(),
              D = (function (g) {
                (function (R, C) {
                  if (typeof C != "function" && C !== null) throw new TypeError("Super expression must either be null or a function");
                  (R.prototype = Object.create(C && C.prototype, { constructor: { value: R, writable: !0, configurable: !0 } })),
                    C && me(R, C);
                })(k, g);
                var w,
                  E,
                  T,
                  M = ke(k);
                function k(R) {
                  var C;
                  ue(this, k);
                  for (var G = arguments.length, K = new Array(G > 1 ? G - 1 : 0), pe = 1; pe < G; pe++) K[pe - 1] = arguments[pe];
                  return (
                    Z(Ee((C = M.call.apply(M, [this, R].concat(K)))), "canvas", s.a.createRef()),
                    Z(Ee(C), "confetti", void 0),
                    (C.canvas = R.canvasRef || A),
                    C
                  );
                }
                return (
                  (w = k),
                  (E = [
                    {
                      key: "componentDidMount",
                      value: function () {
                        if (this.canvas.current) {
                          var R = q(this.props)[0];
                          this.confetti = new O(this.canvas.current, R);
                        }
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function () {
                        var R = q(this.props)[0];
                        this.confetti && (this.confetti.options = R);
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.confetti && this.confetti.stop(), (this.confetti = void 0);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var R = ce(q(this.props), 2),
                          C = R[0],
                          G = R[1],
                          K = te({ zIndex: 2, position: "absolute", pointerEvents: "none", top: 0, left: 0, bottom: 0, right: 0 }, G.style);
                        return s.a.createElement("canvas", z({ width: C.width, height: C.height, ref: this.canvas }, G, { style: K }));
                      },
                    },
                  ]) && re(w.prototype, E),
                  T && re(w, T),
                  k
                );
              })(a.Component);
            function q(g) {
              var w = {},
                E = {},
                T = [].concat(W(Object.keys(P)), ["confettiSource", "drawShape", "onConfettiComplete"]),
                M = ["canvasRef"];
              for (var k in g) {
                var R = g[k];
                T.includes(k) ? (w[k] = R) : M.includes(k) ? (M[k] = R) : (E[k] = R);
              }
              return [w, E, {}];
            }
            Z(D, "defaultProps", te({}, P)), Z(D, "displayName", "ReactConfetti");
            var Y = s.a.forwardRef(function (g, w) {
              return s.a.createElement(D, z({ canvasRef: w }, g));
            });
            r.default = Y;
          },
        ]).default;
      });
    });
    var Vb,
      Fb,
      Bb,
      zb,
      _b,
      Hb,
      Ub,
      Wb,
      qb,
      Yb,
      Gb,
      Xb,
      Kb,
      Qb,
      Jb,
      Zb,
      $b,
      e1,
      t1,
      r1,
      n1,
      o1,
      i1,
      a1,
      s1,
      l1,
      u1,
      c1,
      p1,
      d1,
      h1,
      f1,
      kt,
      m1,
      g1,
      y1,
      v1,
      b1,
      x1,
      w1,
      T1,
      E1,
      S1,
      P1,
      O1,
      Zt,
      C1,
      A1,
      R1,
      I1,
      k1,
      M1,
      D1,
      L1,
      j1,
      N1,
      V1,
      F1,
      B1,
      z1,
      _1,
      H1,
      U1,
      W1,
      q1,
      Y1,
      G1,
      X1,
      K1,
      fi = Ne(() => {
        oe();
        ie();
        ae();
        (Vb = __STORYBOOK_COMPONENTS__),
          ({
            A: Fb,
            ActionBar: Bb,
            AddonPanel: zb,
            Badge: _b,
            Bar: Hb,
            Blockquote: Ub,
            Button: Wb,
            ClipboardCode: qb,
            Code: Yb,
            DL: Gb,
            Div: Xb,
            DocumentWrapper: Kb,
            EmptyTabContent: Qb,
            ErrorFormatter: Jb,
            FlexBar: Zb,
            Form: $b,
            H1: e1,
            H2: t1,
            H3: r1,
            H4: n1,
            H5: o1,
            H6: i1,
            HR: a1,
            IconButton: s1,
            IconButtonSkeleton: l1,
            Icons: u1,
            Img: c1,
            LI: p1,
            Link: d1,
            ListItem: h1,
            Loader: f1,
            Modal: kt,
            OL: m1,
            P: g1,
            Placeholder: y1,
            Pre: v1,
            ResetWrapper: b1,
            ScrollArea: x1,
            Separator: w1,
            Spaced: T1,
            Span: E1,
            StorybookIcon: S1,
            StorybookLogo: P1,
            Symbols: O1,
            SyntaxHighlighter: Zt,
            TT: C1,
            TabBar: A1,
            TabButton: R1,
            TabWrapper: I1,
            Table: k1,
            Tabs: M1,
            TabsState: D1,
            TooltipLinkList: L1,
            TooltipMessage: j1,
            TooltipNote: N1,
            UL: V1,
            WithTooltip: F1,
            WithTooltipPure: B1,
            Zoom: z1,
            codeCommon: _1,
            components: H1,
            createCopyToClipboardFunction: U1,
            getStoryHref: W1,
            icons: q1,
            interleaveSeparators: Y1,
            nameSpaceClassNames: G1,
            resetComponents: X1,
            withReset: K1,
          } = __STORYBOOK_COMPONENTS__);
      });
    var ex,
      tx,
      rx,
      nx,
      ox,
      ix,
      ax,
      sx,
      lx,
      ux,
      cx,
      px,
      mi,
      dx,
      hx,
      fx,
      mx,
      gx,
      yx,
      vx,
      bx,
      xx,
      wx,
      Tx,
      Ex,
      Sx,
      Px,
      Ox,
      gi,
      Cx,
      Ax,
      Rx,
      Ix,
      kx,
      Mx,
      Dx,
      Lx,
      jx,
      Nx,
      Vx,
      Fx,
      Bx,
      zx,
      yi,
      _x,
      Hx,
      Ux,
      Wx,
      qx,
      Yx,
      Gx,
      Xx,
      Kx,
      Qx,
      Jx,
      Zx,
      $x,
      ew,
      tw,
      rw,
      nw,
      ow,
      iw,
      aw,
      sw,
      lw,
      uw,
      cw,
      pw,
      dw,
      hw,
      fw,
      mw,
      gw,
      yw,
      vi,
      vw,
      bw,
      xw,
      ww,
      Tw,
      Ew,
      Sw,
      Pw,
      Ow,
      Cw,
      Aw,
      Rw,
      Iw,
      kw,
      Mw,
      Dw,
      Lw,
      jw,
      Nw,
      Vw,
      Fw,
      Bw,
      zw,
      _w,
      Hw,
      Uw,
      Ww,
      qw,
      Yw,
      Gw,
      Xw,
      Kw,
      Qw,
      Jw,
      Zw,
      $w,
      eT,
      tT,
      rT,
      nT,
      oT,
      iT,
      aT,
      sT,
      lT,
      uT,
      cT,
      pT,
      dT,
      hT,
      fT,
      mT,
      gT,
      yT,
      vT,
      bT,
      xT,
      wT,
      TT,
      ET,
      ST,
      PT,
      OT,
      CT,
      AT,
      RT,
      IT,
      kT,
      MT,
      DT,
      LT,
      jT,
      NT,
      VT,
      FT,
      BT,
      zT,
      _T,
      HT,
      UT,
      WT,
      qT,
      YT,
      GT,
      XT,
      KT,
      QT,
      JT,
      ZT,
      $T,
      eE,
      tE,
      rE,
      nE,
      oE,
      iE,
      aE,
      sE,
      lE,
      uE,
      cE,
      pE,
      dE,
      hE,
      fE,
      mE,
      gE,
      yE,
      vE,
      bE,
      xE,
      wE,
      TE,
      EE,
      SE,
      PE,
      OE,
      CE,
      AE,
      RE,
      IE,
      kE,
      ME,
      DE,
      LE,
      jE,
      NE,
      VE,
      FE,
      BE,
      zE,
      _E,
      HE,
      UE,
      WE,
      qE,
      YE,
      GE,
      XE,
      KE,
      QE,
      JE,
      ZE,
      $E,
      eS,
      tS,
      rS,
      nS,
      oS,
      iS,
      aS,
      sS,
      lS,
      bi = Ne(() => {
        oe();
        ie();
        ae();
        (ex = __STORYBOOK_ICONS__),
          ({
            AccessibilityAltIcon: tx,
            AccessibilityIcon: rx,
            AddIcon: nx,
            AdminIcon: ox,
            AlertAltIcon: ix,
            AlertIcon: ax,
            AlignLeftIcon: sx,
            AlignRightIcon: lx,
            AppleIcon: ux,
            ArrowDownIcon: cx,
            ArrowLeftIcon: px,
            ArrowRightIcon: mi,
            ArrowSolidDownIcon: dx,
            ArrowSolidLeftIcon: hx,
            ArrowSolidRightIcon: fx,
            ArrowSolidUpIcon: mx,
            ArrowUpIcon: gx,
            AzureDevOpsIcon: yx,
            BackIcon: vx,
            BasketIcon: bx,
            BatchAcceptIcon: xx,
            BatchDenyIcon: wx,
            BeakerIcon: Tx,
            BellIcon: Ex,
            BitbucketIcon: Sx,
            BoldIcon: Px,
            BookIcon: Ox,
            BookmarkHollowIcon: gi,
            BookmarkIcon: Cx,
            BottomBarIcon: Ax,
            BottomBarToggleIcon: Rx,
            BoxIcon: Ix,
            BranchIcon: kx,
            BrowserIcon: Mx,
            ButtonIcon: Dx,
            CPUIcon: Lx,
            CalendarIcon: jx,
            CameraIcon: Nx,
            CategoryIcon: Vx,
            CertificateIcon: Fx,
            ChangedIcon: Bx,
            ChatIcon: zx,
            CheckIcon: yi,
            ChevronDownIcon: _x,
            ChevronLeftIcon: Hx,
            ChevronRightIcon: Ux,
            ChevronSmallDownIcon: Wx,
            ChevronSmallLeftIcon: qx,
            ChevronSmallRightIcon: Yx,
            ChevronSmallUpIcon: Gx,
            ChevronUpIcon: Xx,
            ChromaticIcon: Kx,
            ChromeIcon: Qx,
            CircleHollowIcon: Jx,
            CircleIcon: Zx,
            ClearIcon: $x,
            CloseAltIcon: ew,
            CloseIcon: tw,
            CloudHollowIcon: rw,
            CloudIcon: nw,
            CogIcon: ow,
            CollapseIcon: iw,
            CommandIcon: aw,
            CommentAddIcon: sw,
            CommentIcon: lw,
            CommentsIcon: uw,
            CommitIcon: cw,
            CompassIcon: pw,
            ComponentDrivenIcon: dw,
            ComponentIcon: hw,
            ContrastIcon: fw,
            ControlsIcon: mw,
            CopyIcon: gw,
            CreditIcon: yw,
            CrossIcon: vi,
            DashboardIcon: vw,
            DatabaseIcon: bw,
            DeleteIcon: xw,
            DiamondIcon: ww,
            DirectionIcon: Tw,
            DiscordIcon: Ew,
            DocChartIcon: Sw,
            DocListIcon: Pw,
            DocumentIcon: Ow,
            DownloadIcon: Cw,
            DragIcon: Aw,
            EditIcon: Rw,
            EllipsisIcon: Iw,
            EmailIcon: kw,
            ExpandAltIcon: Mw,
            ExpandIcon: Dw,
            EyeCloseIcon: Lw,
            EyeIcon: jw,
            FaceHappyIcon: Nw,
            FaceNeutralIcon: Vw,
            FaceSadIcon: Fw,
            FacebookIcon: Bw,
            FailedIcon: zw,
            FastForwardIcon: _w,
            FigmaIcon: Hw,
            FilterIcon: Uw,
            FlagIcon: Ww,
            FolderIcon: qw,
            FormIcon: Yw,
            GDriveIcon: Gw,
            GithubIcon: Xw,
            GitlabIcon: Kw,
            GlobeIcon: Qw,
            GoogleIcon: Jw,
            GraphBarIcon: Zw,
            GraphLineIcon: $w,
            GraphqlIcon: eT,
            GridAltIcon: tT,
            GridIcon: rT,
            GrowIcon: nT,
            HeartHollowIcon: oT,
            HeartIcon: iT,
            HomeIcon: aT,
            HourglassIcon: sT,
            InfoIcon: lT,
            ItalicIcon: uT,
            JumpToIcon: cT,
            KeyIcon: pT,
            LightningIcon: dT,
            LightningOffIcon: hT,
            LinkBrokenIcon: fT,
            LinkIcon: mT,
            LinkedinIcon: gT,
            LinuxIcon: yT,
            ListOrderedIcon: vT,
            ListUnorderedIcon: bT,
            LocationIcon: xT,
            LockIcon: wT,
            MarkdownIcon: TT,
            MarkupIcon: ET,
            MediumIcon: ST,
            MemoryIcon: PT,
            MenuIcon: OT,
            MergeIcon: CT,
            MirrorIcon: AT,
            MobileIcon: RT,
            MoonIcon: IT,
            NutIcon: kT,
            OutboxIcon: MT,
            OutlineIcon: DT,
            PaintBrushIcon: LT,
            PaperClipIcon: jT,
            ParagraphIcon: NT,
            PassedIcon: VT,
            PhoneIcon: FT,
            PhotoDragIcon: BT,
            PhotoIcon: zT,
            PinAltIcon: _T,
            PinIcon: HT,
            PlayBackIcon: UT,
            PlayIcon: WT,
            PlayNextIcon: qT,
            PlusIcon: YT,
            PointerDefaultIcon: GT,
            PointerHandIcon: XT,
            PowerIcon: KT,
            PrintIcon: QT,
            ProceedIcon: JT,
            ProfileIcon: ZT,
            PullRequestIcon: $T,
            QuestionIcon: eE,
            RSSIcon: tE,
            RedirectIcon: rE,
            ReduxIcon: nE,
            RefreshIcon: oE,
            ReplyIcon: iE,
            RepoIcon: aE,
            RequestChangeIcon: sE,
            RewindIcon: lE,
            RulerIcon: uE,
            SearchIcon: cE,
            ShareAltIcon: pE,
            ShareIcon: dE,
            ShieldIcon: hE,
            SideBySideIcon: fE,
            SidebarAltIcon: mE,
            SidebarAltToggleIcon: gE,
            SidebarIcon: yE,
            SidebarToggleIcon: vE,
            SpeakerIcon: bE,
            StackedIcon: xE,
            StarHollowIcon: wE,
            StarIcon: TE,
            StickerIcon: EE,
            StopAltIcon: SE,
            StopIcon: PE,
            StorybookIcon: OE,
            StructureIcon: CE,
            SubtractIcon: AE,
            SunIcon: RE,
            SupportIcon: IE,
            SwitchAltIcon: kE,
            SyncIcon: ME,
            TabletIcon: DE,
            ThumbsUpIcon: LE,
            TimeIcon: jE,
            TimerIcon: NE,
            TransferIcon: VE,
            TrashIcon: FE,
            TwitterIcon: BE,
            TypeIcon: zE,
            UbuntuIcon: _E,
            UndoIcon: HE,
            UnfoldIcon: UE,
            UnlockIcon: WE,
            UnpinIcon: qE,
            UploadIcon: YE,
            UserAddIcon: GE,
            UserAltIcon: XE,
            UserIcon: KE,
            UsersIcon: QE,
            VSCodeIcon: JE,
            VerifiedIcon: ZE,
            VideoIcon: $E,
            WandIcon: eS,
            WatchIcon: tS,
            WindowsIcon: rS,
            WrenchIcon: nS,
            YoutubeIcon: oS,
            ZoomIcon: iS,
            ZoomOutIcon: aS,
            ZoomResetIcon: sS,
            iconList: lS,
          } = __STORYBOOK_ICONS__);
      });
    var fu = {};
    ti(fu, { default: () => iv });
    function nc(e) {
      var t = {};
      return function (r) {
        return t[r] === void 0 && (t[r] = e(r)), t[r];
      };
    }
    function fs(e) {
      return (t) => typeof t === e;
    }
    function uc(e, t) {
      let { length: r } = e;
      if (r !== t.length) return !1;
      for (let n = r; n-- !== 0; ) if (!Oe(e[n], t[n])) return !1;
      return !0;
    }
    function cc(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      let r = new DataView(e.buffer),
        n = new DataView(t.buffer),
        i = e.byteLength;
      for (; i--; ) if (r.getUint8(i) !== n.getUint8(i)) return !1;
      return !0;
    }
    function pc(e, t) {
      if (e.size !== t.size) return !1;
      for (let r of e.entries()) if (!t.has(r[0])) return !1;
      for (let r of e.entries()) if (!Oe(r[1], t.get(r[0]))) return !1;
      return !0;
    }
    function dc(e, t) {
      if (e.size !== t.size) return !1;
      for (let r of e.entries()) if (!t.has(r[0])) return !1;
      return !0;
    }
    function Oe(e, t) {
      if (e === t) return !0;
      if (e && Ei(e) && t && Ei(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return uc(e, t);
        if (e instanceof Map && t instanceof Map) return pc(e, t);
        if (e instanceof Set && t instanceof Set) return dc(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return cc(e, t);
        if (Ti(e) && Ti(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        let r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = r.length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, r[i])) return !1;
        for (let i = r.length; i-- !== 0; ) {
          let o = r[i];
          if (!(o === "_owner" && e.$$typeof) && !Oe(e[o], t[o])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    function un(e) {
      let t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return "HTMLElement";
      if (mc(t)) return t;
    }
    function Be(e) {
      return (t) => un(t) === e;
    }
    function mc(e) {
      return hc.includes(e);
    }
    function _t(e) {
      return (t) => typeof t === e;
    }
    function gc(e) {
      return fc.includes(e);
    }
    function L(e) {
      if (e === null) return "null";
      switch (typeof e) {
        case "bigint":
          return "bigint";
        case "boolean":
          return "boolean";
        case "number":
          return "number";
        case "string":
          return "string";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
      }
      return L.array(e) ? "Array" : L.plainFunction(e) ? "Function" : un(e) || "Object";
    }
    function vc(...e) {
      return e.every((t) => N.string(t) || N.array(t) || N.plainObject(t));
    }
    function bc(e, t, r) {
      return ms(e, t)
        ? [e, t].every(N.array)
          ? !e.some(Ai(r)) && t.some(Ai(r))
          : [e, t].every(N.plainObject)
          ? !Object.entries(e).some(Ci(r)) && Object.entries(t).some(Ci(r))
          : t === r
        : !1;
    }
    function Si(e, t, r) {
      let { actual: n, key: i, previous: o, type: a } = r,
        s = Ye(e, i),
        u = Ye(t, i),
        l = [s, u].every(N.number) && (a === "increased" ? s < u : s > u);
      return N.undefined(n) || (l = l && u === n), N.undefined(o) || (l = l && s === o), l;
    }
    function Pi(e, t, r) {
      let { key: n, type: i, value: o } = r,
        a = Ye(e, n),
        s = Ye(t, n),
        u = i === "added" ? a : s,
        l = i === "added" ? s : a;
      if (!N.nullOrUndefined(o)) {
        if (N.defined(u)) {
          if (N.array(u) || N.plainObject(u)) return bc(u, l, o);
        } else return Oe(l, o);
        return !1;
      }
      return [a, s].every(N.array)
        ? !l.every(bo(u))
        : [a, s].every(N.plainObject)
        ? xc(Object.keys(u), Object.keys(l))
        : ![a, s].every((c) => N.primitive(c) && N.defined(c)) &&
          (i === "added" ? !N.defined(a) && N.defined(s) : N.defined(a) && !N.defined(s));
    }
    function Oi(e, t, { key: r } = {}) {
      let n = Ye(e, r),
        i = Ye(t, r);
      if (!ms(n, i)) throw new TypeError("Inputs have different types");
      if (!vc(n, i)) throw new TypeError("Inputs don't have length");
      return [n, i].every(N.plainObject) && ((n = Object.keys(n)), (i = Object.keys(i))), [n, i];
    }
    function Ci(e) {
      return ([t, r]) =>
        N.array(e)
          ? Oe(e, r) || e.some((n) => Oe(n, r) || (N.array(r) && bo(r)(n)))
          : N.plainObject(e) && e[t]
          ? !!e[t] && Oe(e[t], r)
          : Oe(e, r);
    }
    function xc(e, t) {
      return t.some((r) => !e.includes(r));
    }
    function Ai(e) {
      return (t) => (N.array(e) ? e.some((r) => Oe(r, t) || (N.array(t) && bo(t)(r))) : Oe(e, t));
    }
    function $t(e, t) {
      return N.array(e) ? e.some((r) => Oe(r, t)) : Oe(e, t);
    }
    function bo(e) {
      return (t) => e.some((r) => Oe(r, t));
    }
    function ms(...e) {
      return e.every(N.array) || e.every(N.number) || e.every(N.plainObject) || e.every(N.string);
    }
    function Ye(e, t) {
      return N.plainObject(e) || N.array(e) ? (N.string(t) ? t.split(".").reduce((r, n) => r && r[n], e) : N.number(t) ? e[t] : e) : e;
    }
    function Xr(e, t) {
      if ([e, t].some(N.nullOrUndefined)) throw new Error("Missing required parameters");
      if (![e, t].every((r) => N.plainObject(r) || N.array(r))) throw new Error("Expected plain objects or array");
      return {
        added: (r, n) => {
          try {
            return Pi(e, t, { key: r, type: "added", value: n });
          } catch {
            return !1;
          }
        },
        changed: (r, n, i) => {
          try {
            let o = Ye(e, r),
              a = Ye(t, r),
              s = N.defined(n),
              u = N.defined(i);
            if (s || u) {
              let l = u ? $t(i, o) : !$t(n, o),
                c = $t(n, a);
              return l && c;
            }
            return [o, a].every(N.array) || [o, a].every(N.plainObject) ? !Oe(o, a) : o !== a;
          } catch {
            return !1;
          }
        },
        changedFrom: (r, n, i) => {
          if (!N.defined(r)) return !1;
          try {
            let o = Ye(e, r),
              a = Ye(t, r),
              s = N.defined(i);
            return $t(n, o) && (s ? $t(i, a) : !s);
          } catch {
            return !1;
          }
        },
        decreased: (r, n, i) => {
          if (!N.defined(r)) return !1;
          try {
            return Si(e, t, { key: r, actual: n, previous: i, type: "decreased" });
          } catch {
            return !1;
          }
        },
        emptied: (r) => {
          try {
            let [n, i] = Oi(e, t, { key: r });
            return !!n.length && !i.length;
          } catch {
            return !1;
          }
        },
        filled: (r) => {
          try {
            let [n, i] = Oi(e, t, { key: r });
            return !n.length && !!i.length;
          } catch {
            return !1;
          }
        },
        increased: (r, n, i) => {
          if (!N.defined(r)) return !1;
          try {
            return Si(e, t, { key: r, actual: n, previous: i, type: "increased" });
          } catch {
            return !1;
          }
        },
        removed: (r, n) => {
          try {
            return Pi(e, t, { key: r, type: "removed", value: n });
          } catch {
            return !1;
          }
        },
      };
    }
    function Tc(e) {
      return Object.keys(e);
    }
    function ys(e, ...t) {
      if (!N.plainObject(e)) throw new TypeError("Expected an object");
      let r = {};
      for (let n in e) ({}).hasOwnProperty.call(e, n) && (t.includes(n) || (r[n] = e[n]));
      return r;
    }
    function Ec(e, ...t) {
      if (!N.plainObject(e)) throw new TypeError("Expected an object");
      if (!t.length) return e;
      let r = {};
      for (let n in e) ({}).hasOwnProperty.call(e, n) && t.includes(n) && (r[n] = e[n]);
      return r;
    }
    function Pc(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          window.Promise.resolve().then(function () {
            (t = !1), e();
          }));
      };
    }
    function Oc(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          setTimeout(function () {
            (t = !1), e();
          }, Sc));
      };
    }
    function vs(e) {
      var t = {};
      return e && t.toString.call(e) === "[object Function]";
    }
    function Ot(e, t) {
      if (e.nodeType !== 1) return [];
      var r = e.ownerDocument.defaultView,
        n = r.getComputedStyle(e, null);
      return t ? n[t] : n;
    }
    function xo(e) {
      return e.nodeName === "HTML" ? e : e.parentNode || e.host;
    }
    function vr(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case "HTML":
        case "BODY":
          return e.ownerDocument.body;
        case "#document":
          return e.body;
      }
      var t = Ot(e),
        r = t.overflow,
        n = t.overflowX,
        i = t.overflowY;
      return /(auto|scroll|overlay)/.test(r + i + n) ? e : vr(xo(e));
    }
    function bs(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }
    function Ht(e) {
      return e === 11 ? Ri : e === 10 ? Ii : Ri || Ii;
    }
    function Nt(e) {
      if (!e) return document.documentElement;
      for (var t = Ht(10) ? document.body : null, r = e.offsetParent || null; r === t && e.nextElementSibling; )
        r = (e = e.nextElementSibling).offsetParent;
      var n = r && r.nodeName;
      return !n || n === "BODY" || n === "HTML"
        ? e
          ? e.ownerDocument.documentElement
          : document.documentElement
        : ["TH", "TD", "TABLE"].indexOf(r.nodeName) !== -1 && Ot(r, "position") === "static"
        ? Nt(r)
        : r;
    }
    function Rc(e) {
      var t = e.nodeName;
      return t === "BODY" ? !1 : t === "HTML" || Nt(e.firstElementChild) === e;
    }
    function Jn(e) {
      return e.parentNode !== null ? Jn(e.parentNode) : e;
    }
    function Kr(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
      var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = r ? e : t,
        i = r ? t : e,
        o = document.createRange();
      o.setStart(n, 0), o.setEnd(i, 0);
      var a = o.commonAncestorContainer;
      if ((e !== a && t !== a) || n.contains(i)) return Rc(a) ? a : Nt(a);
      var s = Jn(e);
      return s.host ? Kr(s.host, t) : Kr(e, Jn(t).host);
    }
    function Vt(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top",
        r = t === "top" ? "scrollTop" : "scrollLeft",
        n = e.nodeName;
      if (n === "BODY" || n === "HTML") {
        var i = e.ownerDocument.documentElement,
          o = e.ownerDocument.scrollingElement || i;
        return o[r];
      }
      return e[r];
    }
    function Ic(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        n = Vt(t, "top"),
        i = Vt(t, "left"),
        o = r ? -1 : 1;
      return (e.top += n * o), (e.bottom += n * o), (e.left += i * o), (e.right += i * o), e;
    }
    function ki(e, t) {
      var r = t === "x" ? "Left" : "Top",
        n = r === "Left" ? "Right" : "Bottom";
      return parseFloat(e["border" + r + "Width"]) + parseFloat(e["border" + n + "Width"]);
    }
    function Mi(e, t, r, n) {
      return Math.max(
        t["offset" + e],
        t["scroll" + e],
        r["client" + e],
        r["offset" + e],
        r["scroll" + e],
        Ht(10)
          ? parseInt(r["offset" + e]) +
              parseInt(n["margin" + (e === "Height" ? "Top" : "Left")]) +
              parseInt(n["margin" + (e === "Height" ? "Bottom" : "Right")])
          : 0
      );
    }
    function xs(e) {
      var t = e.body,
        r = e.documentElement,
        n = Ht(10) && getComputedStyle(r);
      return { height: Mi("Height", t, r, n), width: Mi("Width", t, r, n) };
    }
    function pt(e) {
      return je({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function Zn(e) {
      var t = {};
      try {
        if (Ht(10)) {
          t = e.getBoundingClientRect();
          var r = Vt(e, "top"),
            n = Vt(e, "left");
          (t.top += r), (t.left += n), (t.bottom += r), (t.right += n);
        } else t = e.getBoundingClientRect();
      } catch {}
      var i = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        o = e.nodeName === "HTML" ? xs(e.ownerDocument) : {},
        a = o.width || e.clientWidth || i.width,
        s = o.height || e.clientHeight || i.height,
        u = e.offsetWidth - a,
        l = e.offsetHeight - s;
      if (u || l) {
        var c = Ot(e);
        (u -= ki(c, "x")), (l -= ki(c, "y")), (i.width -= u), (i.height -= l);
      }
      return pt(i);
    }
    function wo(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        n = Ht(10),
        i = t.nodeName === "HTML",
        o = Zn(e),
        a = Zn(t),
        s = vr(e),
        u = Ot(t),
        l = parseFloat(u.borderTopWidth),
        c = parseFloat(u.borderLeftWidth);
      r && i && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
      var p = pt({ top: o.top - a.top - l, left: o.left - a.left - c, width: o.width, height: o.height });
      if (((p.marginTop = 0), (p.marginLeft = 0), !n && i)) {
        var d = parseFloat(u.marginTop),
          h = parseFloat(u.marginLeft);
        (p.top -= l - d), (p.bottom -= l - d), (p.left -= c - h), (p.right -= c - h), (p.marginTop = d), (p.marginLeft = h);
      }
      return (n && !r ? t.contains(s) : t === s && s.nodeName !== "BODY") && (p = Ic(p, t)), p;
    }
    function Dc(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = e.ownerDocument.documentElement,
        n = wo(e, r),
        i = Math.max(r.clientWidth, window.innerWidth || 0),
        o = Math.max(r.clientHeight, window.innerHeight || 0),
        a = t ? 0 : Vt(r),
        s = t ? 0 : Vt(r, "left"),
        u = { top: a - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: o };
      return pt(u);
    }
    function ws(e) {
      var t = e.nodeName;
      if (t === "BODY" || t === "HTML") return !1;
      if (Ot(e, "position") === "fixed") return !0;
      var r = xo(e);
      return r ? ws(r) : !1;
    }
    function Ts(e) {
      if (!e || !e.parentElement || Ht()) return document.documentElement;
      for (var t = e.parentElement; t && Ot(t, "transform") === "none"; ) t = t.parentElement;
      return t || document.documentElement;
    }
    function To(e, t, r, n) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        o = { top: 0, left: 0 },
        a = i ? Ts(e) : Kr(e, bs(t));
      if (n === "viewport") o = Dc(a, i);
      else {
        var s = void 0;
        n === "scrollParent"
          ? ((s = vr(xo(t))), s.nodeName === "BODY" && (s = e.ownerDocument.documentElement))
          : n === "window"
          ? (s = e.ownerDocument.documentElement)
          : (s = n);
        var u = wo(s, a, i);
        if (s.nodeName === "HTML" && !ws(a)) {
          var l = xs(e.ownerDocument),
            c = l.height,
            p = l.width;
          (o.top += u.top - u.marginTop), (o.bottom = c + u.top), (o.left += u.left - u.marginLeft), (o.right = p + u.left);
        } else o = u;
      }
      r = r || 0;
      var d = typeof r == "number";
      return (
        (o.left += d ? r : r.left || 0),
        (o.top += d ? r : r.top || 0),
        (o.right -= d ? r : r.right || 0),
        (o.bottom -= d ? r : r.bottom || 0),
        o
      );
    }
    function Lc(e) {
      var t = e.width,
        r = e.height;
      return t * r;
    }
    function Es(e, t, r, n, i) {
      var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
      if (e.indexOf("auto") === -1) return e;
      var a = To(r, n, o, i),
        s = {
          top: { width: a.width, height: t.top - a.top },
          right: { width: a.right - t.right, height: a.height },
          bottom: { width: a.width, height: a.bottom - t.bottom },
          left: { width: t.left - a.left, height: a.height },
        },
        u = Object.keys(s)
          .map(function (d) {
            return je({ key: d }, s[d], { area: Lc(s[d]) });
          })
          .sort(function (d, h) {
            return h.area - d.area;
          }),
        l = u.filter(function (d) {
          var h = d.width,
            f = d.height;
          return h >= r.clientWidth && f >= r.clientHeight;
        }),
        c = l.length > 0 ? l[0].key : u[0].key,
        p = e.split("-")[1];
      return c + (p ? "-" + p : "");
    }
    function Ss(e, t, r) {
      var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        i = n ? Ts(t) : Kr(t, bs(r));
      return wo(r, i, n);
    }
    function Ps(e) {
      var t = e.ownerDocument.defaultView,
        r = t.getComputedStyle(e),
        n = parseFloat(r.marginTop || 0) + parseFloat(r.marginBottom || 0),
        i = parseFloat(r.marginLeft || 0) + parseFloat(r.marginRight || 0),
        o = { width: e.offsetWidth + i, height: e.offsetHeight + n };
      return o;
    }
    function Qr(e) {
      var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return e.replace(/left|right|bottom|top/g, function (r) {
        return t[r];
      });
    }
    function Os(e, t, r) {
      r = r.split("-")[0];
      var n = Ps(e),
        i = { width: n.width, height: n.height },
        o = ["right", "left"].indexOf(r) !== -1,
        a = o ? "top" : "left",
        s = o ? "left" : "top",
        u = o ? "height" : "width",
        l = o ? "width" : "height";
      return (i[a] = t[a] + t[u] / 2 - n[u] / 2), r === s ? (i[s] = t[s] - n[l]) : (i[s] = t[Qr(s)]), i;
    }
    function br(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function jc(e, t, r) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (i) {
          return i[t] === r;
        });
      var n = br(e, function (i) {
        return i[t] === r;
      });
      return e.indexOf(n);
    }
    function Cs(e, t, r) {
      var n = r === void 0 ? e : e.slice(0, jc(e, "name", r));
      return (
        n.forEach(function (i) {
          i.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var o = i.function || i.fn;
          i.enabled && vs(o) && ((t.offsets.popper = pt(t.offsets.popper)), (t.offsets.reference = pt(t.offsets.reference)), (t = o(t, i)));
        }),
        t
      );
    }
    function Nc() {
      if (!this.state.isDestroyed) {
        var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
        (e.offsets.reference = Ss(this.state, this.popper, this.reference, this.options.positionFixed)),
          (e.placement = Es(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = Os(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
          (e = Cs(this.modifiers, e)),
          this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function As(e, t) {
      return e.some(function (r) {
        var n = r.name,
          i = r.enabled;
        return i && n === t;
      });
    }
    function Eo(e) {
      for (var t = [!1, "ms", "Webkit", "Moz", "O"], r = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
        var i = t[n],
          o = i ? "" + i + r : e;
        if (typeof document.body.style[o] < "u") return o;
      }
      return null;
    }
    function Vc() {
      return (
        (this.state.isDestroyed = !0),
        As(this.modifiers, "applyStyle") &&
          (this.popper.removeAttribute("x-placement"),
          (this.popper.style.position = ""),
          (this.popper.style.top = ""),
          (this.popper.style.left = ""),
          (this.popper.style.right = ""),
          (this.popper.style.bottom = ""),
          (this.popper.style.willChange = ""),
          (this.popper.style[Eo("transform")] = "")),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function Rs(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function Is(e, t, r, n) {
      var i = e.nodeName === "BODY",
        o = i ? e.ownerDocument.defaultView : e;
      o.addEventListener(t, r, { passive: !0 }), i || Is(vr(o.parentNode), t, r, n), n.push(o);
    }
    function Fc(e, t, r, n) {
      (r.updateBound = n), Rs(e).addEventListener("resize", r.updateBound, { passive: !0 });
      var i = vr(e);
      return Is(i, "scroll", r.updateBound, r.scrollParents), (r.scrollElement = i), (r.eventsEnabled = !0), r;
    }
    function Bc() {
      this.state.eventsEnabled || (this.state = Fc(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function zc(e, t) {
      return (
        Rs(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function (r) {
          r.removeEventListener("scroll", t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      );
    }
    function _c() {
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), (this.state = zc(this.reference, this.state)));
    }
    function So(e) {
      return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function $n(e, t) {
      Object.keys(t).forEach(function (r) {
        var n = "";
        ["width", "height", "top", "right", "bottom", "left"].indexOf(r) !== -1 && So(t[r]) && (n = "px"), (e.style[r] = t[r] + n);
      });
    }
    function Hc(e, t) {
      Object.keys(t).forEach(function (r) {
        var n = t[r];
        n !== !1 ? e.setAttribute(r, t[r]) : e.removeAttribute(r);
      });
    }
    function Uc(e) {
      return (
        $n(e.instance.popper, e.styles),
        Hc(e.instance.popper, e.attributes),
        e.arrowElement && Object.keys(e.arrowStyles).length && $n(e.arrowElement, e.arrowStyles),
        e
      );
    }
    function Wc(e, t, r, n, i) {
      var o = Ss(i, t, e, r.positionFixed),
        a = Es(r.placement, o, t, e, r.modifiers.flip.boundariesElement, r.modifiers.flip.padding);
      return t.setAttribute("x-placement", a), $n(t, { position: r.positionFixed ? "fixed" : "absolute" }), r;
    }
    function qc(e, t) {
      var r = e.offsets,
        n = r.popper,
        i = r.reference,
        o = Math.round,
        a = Math.floor,
        s = function (S) {
          return S;
        },
        u = o(i.width),
        l = o(n.width),
        c = ["left", "right"].indexOf(e.placement) !== -1,
        p = e.placement.indexOf("-") !== -1,
        d = u % 2 === l % 2,
        h = u % 2 === 1 && l % 2 === 1,
        f = t ? (c || p || d ? o : a) : s,
        v = t ? o : s;
      return { left: f(h && !p && t ? n.left - 1 : n.left), top: v(n.top), bottom: v(n.bottom), right: f(n.right) };
    }
    function Gc(e, t) {
      var r = t.x,
        n = t.y,
        i = e.offsets.popper,
        o = br(e.instance.modifiers, function (y) {
          return y.name === "applyStyle";
        }).gpuAcceleration;
      o !== void 0 &&
        console.warn(
          "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
        );
      var a = o !== void 0 ? o : t.gpuAcceleration,
        s = Nt(e.instance.popper),
        u = Zn(s),
        l = { position: i.position },
        c = qc(e, window.devicePixelRatio < 2 || !Yc),
        p = r === "bottom" ? "top" : "bottom",
        d = n === "right" ? "left" : "right",
        h = Eo("transform"),
        f = void 0,
        v = void 0;
      if (
        (p === "bottom" ? (s.nodeName === "HTML" ? (v = -s.clientHeight + c.bottom) : (v = -u.height + c.bottom)) : (v = c.top),
        d === "right" ? (s.nodeName === "HTML" ? (f = -s.clientWidth + c.right) : (f = -u.width + c.right)) : (f = c.left),
        a && h)
      )
        (l[h] = "translate3d(" + f + "px, " + v + "px, 0)"), (l[p] = 0), (l[d] = 0), (l.willChange = "transform");
      else {
        var S = p === "bottom" ? -1 : 1,
          x = d === "right" ? -1 : 1;
        (l[p] = v * S), (l[d] = f * x), (l.willChange = p + ", " + d);
      }
      var b = { "x-placement": e.placement };
      return (
        (e.attributes = je({}, b, e.attributes)),
        (e.styles = je({}, l, e.styles)),
        (e.arrowStyles = je({}, e.offsets.arrow, e.arrowStyles)),
        e
      );
    }
    function ks(e, t, r) {
      var n = br(e, function (s) {
          var u = s.name;
          return u === t;
        }),
        i =
          !!n &&
          e.some(function (s) {
            return s.name === r && s.enabled && s.order < n.order;
          });
      if (!i) {
        var o = "`" + t + "`",
          a = "`" + r + "`";
        console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
      }
      return i;
    }
    function Xc(e, t) {
      var r;
      if (!ks(e.instance.modifiers, "arrow", "keepTogether")) return e;
      var n = t.element;
      if (typeof n == "string") {
        if (((n = e.instance.popper.querySelector(n)), !n)) return e;
      } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
      var i = e.placement.split("-")[0],
        o = e.offsets,
        a = o.popper,
        s = o.reference,
        u = ["left", "right"].indexOf(i) !== -1,
        l = u ? "height" : "width",
        c = u ? "Top" : "Left",
        p = c.toLowerCase(),
        d = u ? "left" : "top",
        h = u ? "bottom" : "right",
        f = Ps(n)[l];
      s[h] - f < a[p] && (e.offsets.popper[p] -= a[p] - (s[h] - f)),
        s[p] + f > a[h] && (e.offsets.popper[p] += s[p] + f - a[h]),
        (e.offsets.popper = pt(e.offsets.popper));
      var v = s[p] + s[l] / 2 - f / 2,
        S = Ot(e.instance.popper),
        x = parseFloat(S["margin" + c]),
        b = parseFloat(S["border" + c + "Width"]),
        y = v - e.offsets.popper[p] - x - b;
      return (
        (y = Math.max(Math.min(a[l] - f, y), 0)),
        (e.arrowElement = n),
        (e.offsets.arrow = ((r = {}), Ft(r, p, Math.round(y)), Ft(r, d, ""), r)),
        e
      );
    }
    function Kc(e) {
      return e === "end" ? "start" : e === "start" ? "end" : e;
    }
    function Di(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = jn.indexOf(e),
        n = jn.slice(r + 1).concat(jn.slice(0, r));
      return t ? n.reverse() : n;
    }
    function Qc(e, t) {
      if (As(e.instance.modifiers, "inner") || (e.flipped && e.placement === e.originalPlacement)) return e;
      var r = To(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
        n = e.placement.split("-")[0],
        i = Qr(n),
        o = e.placement.split("-")[1] || "",
        a = [];
      switch (t.behavior) {
        case Nn.FLIP:
          a = [n, i];
          break;
        case Nn.CLOCKWISE:
          a = Di(n);
          break;
        case Nn.COUNTERCLOCKWISE:
          a = Di(n, !0);
          break;
        default:
          a = t.behavior;
      }
      return (
        a.forEach(function (s, u) {
          if (n !== s || a.length === u + 1) return e;
          (n = e.placement.split("-")[0]), (i = Qr(n));
          var l = e.offsets.popper,
            c = e.offsets.reference,
            p = Math.floor,
            d =
              (n === "left" && p(l.right) > p(c.left)) ||
              (n === "right" && p(l.left) < p(c.right)) ||
              (n === "top" && p(l.bottom) > p(c.top)) ||
              (n === "bottom" && p(l.top) < p(c.bottom)),
            h = p(l.left) < p(r.left),
            f = p(l.right) > p(r.right),
            v = p(l.top) < p(r.top),
            S = p(l.bottom) > p(r.bottom),
            x = (n === "left" && h) || (n === "right" && f) || (n === "top" && v) || (n === "bottom" && S),
            b = ["top", "bottom"].indexOf(n) !== -1,
            y =
              !!t.flipVariations &&
              ((b && o === "start" && h) || (b && o === "end" && f) || (!b && o === "start" && v) || (!b && o === "end" && S)),
            P =
              !!t.flipVariationsByContent &&
              ((b && o === "start" && f) || (b && o === "end" && h) || (!b && o === "start" && S) || (!b && o === "end" && v)),
            O = y || P;
          (d || x || O) &&
            ((e.flipped = !0),
            (d || x) && (n = a[u + 1]),
            O && (o = Kc(o)),
            (e.placement = n + (o ? "-" + o : "")),
            (e.offsets.popper = je({}, e.offsets.popper, Os(e.instance.popper, e.offsets.reference, e.placement))),
            (e = Cs(e.instance.modifiers, e, "flip")));
        }),
        e
      );
    }
    function Jc(e) {
      var t = e.offsets,
        r = t.popper,
        n = t.reference,
        i = e.placement.split("-")[0],
        o = Math.floor,
        a = ["top", "bottom"].indexOf(i) !== -1,
        s = a ? "right" : "bottom",
        u = a ? "left" : "top",
        l = a ? "width" : "height";
      return r[s] < o(n[u]) && (e.offsets.popper[u] = o(n[u]) - r[l]), r[u] > o(n[s]) && (e.offsets.popper[u] = o(n[s])), e;
    }
    function Zc(e, t, r, n) {
      var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        o = +i[1],
        a = i[2];
      if (!o) return e;
      if (a.indexOf("%") === 0) {
        var s = void 0;
        switch (a) {
          case "%p":
            s = r;
            break;
          case "%":
          case "%r":
          default:
            s = n;
        }
        var u = pt(s);
        return (u[t] / 100) * o;
      } else if (a === "vh" || a === "vw") {
        var l = void 0;
        return (
          a === "vh"
            ? (l = Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
            : (l = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)),
          (l / 100) * o
        );
      } else return o;
    }
    function $c(e, t, r, n) {
      var i = [0, 0],
        o = ["right", "left"].indexOf(n) !== -1,
        a = e.split(/(\+|\-)/).map(function (c) {
          return c.trim();
        }),
        s = a.indexOf(
          br(a, function (c) {
            return c.search(/,|\s/) !== -1;
          })
        );
      a[s] && a[s].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
      var u = /\s*,\s*|\s+/,
        l = s !== -1 ? [a.slice(0, s).concat([a[s].split(u)[0]]), [a[s].split(u)[1]].concat(a.slice(s + 1))] : [a];
      return (
        (l = l.map(function (c, p) {
          var d = (p === 1 ? !o : o) ? "height" : "width",
            h = !1;
          return c
            .reduce(function (f, v) {
              return f[f.length - 1] === "" && ["+", "-"].indexOf(v) !== -1
                ? ((f[f.length - 1] = v), (h = !0), f)
                : h
                ? ((f[f.length - 1] += v), (h = !1), f)
                : f.concat(v);
            }, [])
            .map(function (f) {
              return Zc(f, d, t, r);
            });
        })),
        l.forEach(function (c, p) {
          c.forEach(function (d, h) {
            So(d) && (i[p] += d * (c[h - 1] === "-" ? -1 : 1));
          });
        }),
        i
      );
    }
    function ep(e, t) {
      var r = t.offset,
        n = e.placement,
        i = e.offsets,
        o = i.popper,
        a = i.reference,
        s = n.split("-")[0],
        u = void 0;
      return (
        So(+r) ? (u = [+r, 0]) : (u = $c(r, o, a, s)),
        s === "left"
          ? ((o.top += u[0]), (o.left -= u[1]))
          : s === "right"
          ? ((o.top += u[0]), (o.left += u[1]))
          : s === "top"
          ? ((o.left += u[0]), (o.top -= u[1]))
          : s === "bottom" && ((o.left += u[0]), (o.top += u[1])),
        (e.popper = o),
        e
      );
    }
    function tp(e, t) {
      var r = t.boundariesElement || Nt(e.instance.popper);
      e.instance.reference === r && (r = Nt(r));
      var n = Eo("transform"),
        i = e.instance.popper.style,
        o = i.top,
        a = i.left,
        s = i[n];
      (i.top = ""), (i.left = ""), (i[n] = "");
      var u = To(e.instance.popper, e.instance.reference, t.padding, r, e.positionFixed);
      (i.top = o), (i.left = a), (i[n] = s), (t.boundaries = u);
      var l = t.priority,
        c = e.offsets.popper,
        p = {
          primary: function (d) {
            var h = c[d];
            return c[d] < u[d] && !t.escapeWithReference && (h = Math.max(c[d], u[d])), Ft({}, d, h);
          },
          secondary: function (d) {
            var h = d === "right" ? "left" : "top",
              f = c[h];
            return c[d] > u[d] && !t.escapeWithReference && (f = Math.min(c[h], u[d] - (d === "right" ? c.width : c.height))), Ft({}, h, f);
          },
        };
      return (
        l.forEach(function (d) {
          var h = ["left", "top"].indexOf(d) !== -1 ? "primary" : "secondary";
          c = je({}, c, p[h](d));
        }),
        (e.offsets.popper = c),
        e
      );
    }
    function rp(e) {
      var t = e.placement,
        r = t.split("-")[0],
        n = t.split("-")[1];
      if (n) {
        var i = e.offsets,
          o = i.reference,
          a = i.popper,
          s = ["bottom", "top"].indexOf(r) !== -1,
          u = s ? "left" : "top",
          l = s ? "width" : "height",
          c = { start: Ft({}, u, o[u]), end: Ft({}, u, o[u] + o[l] - a[l]) };
        e.offsets.popper = je({}, a, c[n]);
      }
      return e;
    }
    function np(e) {
      if (!ks(e.instance.modifiers, "hide", "preventOverflow")) return e;
      var t = e.offsets.reference,
        r = br(e.instance.modifiers, function (n) {
          return n.name === "preventOverflow";
        }).boundaries;
      if (t.bottom < r.top || t.left > r.right || t.top > r.bottom || t.right < r.left) {
        if (e.hide === !0) return e;
        (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
      } else {
        if (e.hide === !1) return e;
        (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
      }
      return e;
    }
    function op(e) {
      var t = e.placement,
        r = t.split("-")[0],
        n = e.offsets,
        i = n.popper,
        o = n.reference,
        a = ["left", "right"].indexOf(r) !== -1,
        s = ["top", "left"].indexOf(r) === -1;
      return (i[a ? "left" : "top"] = o[r] - (s ? i[a ? "width" : "height"] : 0)), (e.placement = Qr(t)), (e.offsets.popper = pt(i)), e;
    }
    function pn(e) {
      var t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return "HTMLElement";
      if (cp(t)) return t;
    }
    function ze(e) {
      return function (t) {
        return pn(t) === e;
      };
    }
    function cp(e) {
      return lp.includes(e);
    }
    function Ut(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    function pp(e) {
      return up.includes(e);
    }
    function j(e) {
      if (e === null) return "null";
      switch (typeof e) {
        case "bigint":
          return "bigint";
        case "boolean":
          return "boolean";
        case "number":
          return "number";
        case "string":
          return "string";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
      }
      if (j.array(e)) return "Array";
      if (j.plainFunction(e)) return "Function";
      var t = pn(e);
      return t || "Object";
    }
    function Ds(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    function mp(e, t) {
      var r = e.length;
      if (r !== t.length) return !1;
      for (var n = r; n-- !== 0; ) if (!Ce(e[n], t[n])) return !1;
      return !0;
    }
    function gp(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      for (var r = new DataView(e.buffer), n = new DataView(t.buffer), i = e.byteLength; i--; )
        if (r.getUint8(i) !== n.getUint8(i)) return !1;
      return !0;
    }
    function yp(e, t) {
      var r, n, i, o;
      if (e.size !== t.size) return !1;
      try {
        for (var a = to(e.entries()), s = a.next(); !s.done; s = a.next()) {
          var u = s.value;
          if (!t.has(u[0])) return !1;
        }
      } catch (p) {
        r = { error: p };
      } finally {
        try {
          s && !s.done && (n = a.return) && n.call(a);
        } finally {
          if (r) throw r.error;
        }
      }
      try {
        for (var l = to(e.entries()), c = l.next(); !c.done; c = l.next()) {
          var u = c.value;
          if (!Ce(u[1], t.get(u[0]))) return !1;
        }
      } catch (p) {
        i = { error: p };
      } finally {
        try {
          c && !c.done && (o = l.return) && o.call(l);
        } finally {
          if (i) throw i.error;
        }
      }
      return !0;
    }
    function vp(e, t) {
      var r, n;
      if (e.size !== t.size) return !1;
      try {
        for (var i = to(e.entries()), o = i.next(); !o.done; o = i.next()) {
          var a = o.value;
          if (!t.has(a[0])) return !1;
        }
      } catch (s) {
        r = { error: s };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (r) throw r.error;
        }
      }
      return !0;
    }
    function Ce(e, t) {
      if (e === t) return !0;
      if (e && Ni(e) && t && Ni(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return mp(e, t);
        if (e instanceof Map && t instanceof Map) return yp(e, t);
        if (e instanceof Set && t instanceof Set) return vp(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return gp(e, t);
        if (ji(e) && ji(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (var i = r.length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, r[i])) return !1;
        for (var i = r.length; i-- !== 0; ) {
          var o = r[i];
          if (!(o === "_owner" && e.$$typeof) && !Ce(e[o], t[o])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    function bp() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(function (r) {
        return F.string(r) || F.array(r) || F.plainObject(r);
      });
    }
    function xp(e, t, r) {
      return Ls(e, t)
        ? [e, t].every(F.array)
          ? !e.some(_i(r)) && t.some(_i(r))
          : [e, t].every(F.plainObject)
          ? !Object.entries(e).some(zi(r)) && Object.entries(t).some(zi(r))
          : t === r
        : !1;
    }
    function Vi(e, t, r) {
      var n = r.actual,
        i = r.key,
        o = r.previous,
        a = r.type,
        s = Ge(e, i),
        u = Ge(t, i),
        l = [s, u].every(F.number) && (a === "increased" ? s < u : s > u);
      return F.undefined(n) || (l = l && u === n), F.undefined(o) || (l = l && s === o), l;
    }
    function Fi(e, t, r) {
      var n = r.key,
        i = r.type,
        o = r.value,
        a = Ge(e, n),
        s = Ge(t, n),
        u = i === "added" ? a : s,
        l = i === "added" ? s : a;
      if (!F.nullOrUndefined(o)) {
        if (F.defined(u)) {
          if (F.array(u) || F.plainObject(u)) return xp(u, l, o);
        } else return Ce(l, o);
        return !1;
      }
      return [a, s].every(F.array)
        ? !l.every(Po(u))
        : [a, s].every(F.plainObject)
        ? wp(Object.keys(u), Object.keys(l))
        : ![a, s].every(function (c) {
            return F.primitive(c) && F.defined(c);
          }) && (i === "added" ? !F.defined(a) && F.defined(s) : F.defined(a) && !F.defined(s));
    }
    function Bi(e, t, r) {
      var n = r === void 0 ? {} : r,
        i = n.key,
        o = Ge(e, i),
        a = Ge(t, i);
      if (!Ls(o, a)) throw new TypeError("Inputs have different types");
      if (!bp(o, a)) throw new TypeError("Inputs don't have length");
      return [o, a].every(F.plainObject) && ((o = Object.keys(o)), (a = Object.keys(a))), [o, a];
    }
    function zi(e) {
      return function (t) {
        var r = t[0],
          n = t[1];
        return F.array(e)
          ? Ce(e, n) ||
              e.some(function (i) {
                return Ce(i, n) || (F.array(n) && Po(n)(i));
              })
          : F.plainObject(e) && e[r]
          ? !!e[r] && Ce(e[r], n)
          : Ce(e, n);
      };
    }
    function wp(e, t) {
      return t.some(function (r) {
        return !e.includes(r);
      });
    }
    function _i(e) {
      return function (t) {
        return F.array(e)
          ? e.some(function (r) {
              return Ce(r, t) || (F.array(t) && Po(t)(r));
            })
          : Ce(e, t);
      };
    }
    function er(e, t) {
      return F.array(e)
        ? e.some(function (r) {
            return Ce(r, t);
          })
        : Ce(e, t);
    }
    function Po(e) {
      return function (t) {
        return e.some(function (r) {
          return Ce(r, t);
        });
      };
    }
    function Ls() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(F.array) || e.every(F.number) || e.every(F.plainObject) || e.every(F.string);
    }
    function Ge(e, t) {
      if (F.plainObject(e) || F.array(e)) {
        if (F.string(t)) {
          var r = t.split(".");
          return r.reduce(function (n, i) {
            return n && n[i];
          }, e);
        }
        return F.number(t) ? e[t] : e;
      }
      return e;
    }
    function Tp(e, t) {
      if ([e, t].some(F.nullOrUndefined)) throw new Error("Missing required parameters");
      if (
        ![e, t].every(function (p) {
          return F.plainObject(p) || F.array(p);
        })
      )
        throw new Error("Expected plain objects or array");
      var r = function (p, d) {
          try {
            return Fi(e, t, { key: p, type: "added", value: d });
          } catch {
            return !1;
          }
        },
        n = function (p, d, h) {
          try {
            var f = Ge(e, p),
              v = Ge(t, p),
              S = F.defined(d),
              x = F.defined(h);
            if (S || x) {
              var b = x ? er(h, f) : !er(d, f),
                y = er(d, v);
              return b && y;
            }
            return [f, v].every(F.array) || [f, v].every(F.plainObject) ? !Ce(f, v) : f !== v;
          } catch {
            return !1;
          }
        },
        i = function (p, d, h) {
          if (!F.defined(p)) return !1;
          try {
            var f = Ge(e, p),
              v = Ge(t, p),
              S = F.defined(h);
            return er(d, f) && (S ? er(h, v) : !S);
          } catch {
            return !1;
          }
        },
        o = function (p, d) {
          return F.defined(p) ? (console.warn("`changedTo` is deprecated! Replace it with `change`"), n(p, d)) : !1;
        },
        a = function (p, d, h) {
          if (!F.defined(p)) return !1;
          try {
            return Vi(e, t, { key: p, actual: d, previous: h, type: "decreased" });
          } catch {
            return !1;
          }
        },
        s = function (p) {
          try {
            var d = Bi(e, t, { key: p }),
              h = d[0],
              f = d[1];
            return !!h.length && !f.length;
          } catch {
            return !1;
          }
        },
        u = function (p) {
          try {
            var d = Bi(e, t, { key: p }),
              h = d[0],
              f = d[1];
            return !h.length && !!f.length;
          } catch {
            return !1;
          }
        },
        l = function (p, d, h) {
          if (!F.defined(p)) return !1;
          try {
            return Vi(e, t, { key: p, actual: d, previous: h, type: "increased" });
          } catch {
            return !1;
          }
        },
        c = function (p, d) {
          try {
            return Fi(e, t, { key: p, type: "removed", value: d });
          } catch {
            return !1;
          }
        };
      return { added: r, changed: n, changedFrom: i, changedTo: o, decreased: a, emptied: s, filled: u, increased: l, removed: c };
    }
    function Hi(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ne(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? Hi(Object(r), !0).forEach(function (n) {
              we(e, n, r[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Hi(Object(r)).forEach(function (n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
            });
      }
      return e;
    }
    function xr(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function Ui(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, Ns(n.key), n);
      }
    }
    function wr(e, t, r) {
      return t && Ui(e.prototype, t), r && Ui(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
    }
    function we(e, t, r) {
      return (
        (t = Ns(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
      );
    }
    function Tr(e, t) {
      if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
      (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && ro(e, t);
    }
    function Jr(e) {
      return (
        (Jr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        Jr(e)
      );
    }
    function ro(e, t) {
      return (
        (ro = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (r, n) {
              return (r.__proto__ = n), r;
            }),
        ro(e, t)
      );
    }
    function Ep() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch {
        return !1;
      }
    }
    function Sp(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        i,
        o;
      for (o = 0; o < n.length; o++) (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
      return r;
    }
    function js(e, t) {
      if (e == null) return {};
      var r = Sp(e, t),
        n,
        i;
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
          (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      }
      return r;
    }
    function Qe(e) {
      if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function Pp(e, t) {
      if (t && (typeof t == "object" || typeof t == "function")) return t;
      if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return Qe(e);
    }
    function Er(e) {
      var t = Ep();
      return function () {
        var r = Jr(e),
          n;
        if (t) {
          var i = Jr(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return Pp(this, n);
      };
    }
    function Op(e, t) {
      if (typeof e != "object" || e === null) return e;
      var r = e[Symbol.toPrimitive];
      if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    function Ns(e) {
      var t = Op(e, "string");
      return typeof t == "symbol" ? t : String(t);
    }
    function Ip(e, t, r, n) {
      return typeof e == "boolean" ? e : typeof e == "function" ? e(t, r, n) : e ? !!e : !1;
    }
    function kp(e, t) {
      return Object.hasOwnProperty.call(e, t);
    }
    function Mp(e, t, r, n) {
      return n ? new Error(n) : new Error("Required ".concat(e[t], " `").concat(t, "` was not specified in `").concat(r, "`."));
    }
    function Dp(e, t) {
      if (typeof e != "function") throw new TypeError(Ap);
      if (t && typeof t != "string") throw new TypeError(Rp);
    }
    function Wi(e, t, r) {
      return (
        Dp(e, r),
        function (n, i, o) {
          for (var a = arguments.length, s = new Array(a > 3 ? a - 3 : 0), u = 3; u < a; u++) s[u - 3] = arguments[u];
          return Ip(t, n, i, o) ? (kp(n, i) ? e.apply(void 0, [n, i, o].concat(s)) : Mp(n, i, o, r)) : e.apply(void 0, [n, i, o].concat(s));
        }
      );
    }
    function qe() {
      return !!(typeof window < "u" && window.document && window.document.createElement);
    }
    function Vn() {
      return "ontouchstart" in window && /Mobi/.test(navigator.userAgent);
    }
    function Vr(e) {
      var t = e.title,
        r = e.data,
        n = e.warn,
        i = n === void 0 ? !1 : n,
        o = e.debug,
        a = o === void 0 ? !1 : o,
        s = i ? console.warn || console.error : console.log;
      a &&
        t &&
        r &&
        (console.groupCollapsed("%creact-floater: ".concat(t), "color: #9b00ff; font-weight: bold; font-size: 12px;"),
        Array.isArray(r)
          ? r.forEach(function (u) {
              F.plainObject(u) && u.key ? s.apply(console, [u.key, u.value]) : s.apply(console, [u]);
            })
          : s.apply(console, [r]),
        console.groupEnd());
    }
    function Lp(e, t, r) {
      var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.addEventListener(t, r, n);
    }
    function jp(e, t, r) {
      var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.removeEventListener(t, r, n);
    }
    function Np(e, t, r) {
      var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        i;
      (i = function (o) {
        r(o), jp(e, t, i);
      }),
        Lp(e, t, i, n);
    }
    function qi() {}
    function Bs(e) {
      var t = e.handleClick,
        r = e.styles,
        n = r.color,
        i = r.height,
        o = r.width,
        a = js(r, Vp);
      return m.createElement(
        "button",
        { "aria-label": "close", onClick: t, style: a, type: "button" },
        m.createElement(
          "svg",
          {
            width: "".concat(o, "px"),
            height: "".concat(i, "px"),
            viewBox: "0 0 18 18",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "xMidYMid",
          },
          m.createElement(
            "g",
            null,
            m.createElement("path", {
              d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
              fill: n,
            })
          )
        )
      );
    }
    function zs(e) {
      var t = e.content,
        r = e.footer,
        n = e.handleClick,
        i = e.open,
        o = e.positionWrapper,
        a = e.showCloseButton,
        s = e.title,
        u = e.styles,
        l = { content: m.isValidElement(t) ? t : m.createElement("div", { className: "__floater__content", style: u.content }, t) };
      return (
        s && (l.title = m.isValidElement(s) ? s : m.createElement("div", { className: "__floater__title", style: u.title }, s)),
        r && (l.footer = m.isValidElement(r) ? r : m.createElement("div", { className: "__floater__footer", style: u.footer }, r)),
        (a || o) && !F.boolean(i) && (l.close = m.createElement(Bs, { styles: u.close, handleClick: n })),
        m.createElement("div", { className: "__floater__container", style: u.container }, l.close, l.title, l.content, l.footer)
      );
    }
    function Bp(e) {
      var t = (0, eo.default)(Fp, e.options || {});
      return {
        wrapper: { cursor: "help", display: "inline-flex", flexDirection: "column", zIndex: t.zIndex },
        wrapperPosition: { left: -1e3, position: "absolute", top: -1e3, visibility: "hidden" },
        floater: {
          display: "inline-block",
          filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
          maxWidth: 300,
          opacity: 0,
          position: "relative",
          transition: "opacity 0.3s",
          visibility: "hidden",
          zIndex: t.zIndex,
        },
        floaterOpening: { opacity: 1, visibility: "visible" },
        floaterWithAnimation: { opacity: 1, transition: "opacity 0.3s, transform 0.2s", visibility: "visible" },
        floaterWithComponent: { maxWidth: "100%" },
        floaterClosing: { opacity: 0, visibility: "visible" },
        floaterCentered: { left: "50%", position: "fixed", top: "50%", transform: "translate(-50%, -50%)" },
        container: { backgroundColor: "#fff", color: "#666", minHeight: 60, minWidth: 200, padding: 20, position: "relative", zIndex: 10 },
        title: { borderBottom: "1px solid #555", color: "#555", fontSize: 18, marginBottom: 5, paddingBottom: 6, paddingRight: 18 },
        content: { fontSize: 15 },
        close: {
          backgroundColor: "transparent",
          border: 0,
          borderRadius: 0,
          color: "#555",
          fontSize: 0,
          height: 15,
          outline: "none",
          padding: 10,
          position: "absolute",
          right: 0,
          top: 0,
          width: 15,
          WebkitAppearance: "none",
        },
        footer: { borderTop: "1px solid #ccc", fontSize: 13, marginTop: 10, paddingTop: 5 },
        arrow: { color: "#fff", display: "inline-flex", length: 16, margin: 8, position: "absolute", spread: 32 },
        options: t,
      };
    }
    function st() {
      return !!(typeof window < "u" && window.document && window.document.createElement);
    }
    function Us(e) {
      return e ? e.getBoundingClientRect() : null;
    }
    function qp() {
      let { body: e, documentElement: t } = document;
      return !e || !t ? 0 : Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
    }
    function ut(e) {
      return typeof e == "string" ? document.querySelector(e) : e;
    }
    function Yp(e) {
      return !e || e.nodeType !== 1 ? null : getComputedStyle(e);
    }
    function dn(e, t, r) {
      if (!e) return Et();
      let n = (0, gs.default)(e);
      if (n) {
        if (n.isSameNode(Et())) return r ? document : Et();
        if (!(n.scrollHeight > n.offsetHeight) && !t) return (n.style.overflow = "initial"), Et();
      }
      return n;
    }
    function Sr(e, t) {
      if (!e) return !1;
      let r = dn(e, t);
      return r ? !r.isSameNode(Et()) : !1;
    }
    function Gp(e) {
      return e.offsetParent !== document.body;
    }
    function hr(e, t = "fixed") {
      if (!e || !(e instanceof HTMLElement)) return !1;
      let { nodeName: r } = e,
        n = Yp(e);
      return r === "BODY" || r === "HTML" ? !1 : n && n.position === t ? !0 : e.parentNode ? hr(e.parentNode, t) : !1;
    }
    function Xp(e) {
      var t;
      if (!e) return !1;
      let r = e;
      for (; r && r !== document.body; ) {
        if (r instanceof HTMLElement) {
          let { display: n, visibility: i } = getComputedStyle(r);
          if (n === "none" || i === "hidden") return !1;
        }
        r = (t = r.parentElement) != null ? t : null;
      }
      return !0;
    }
    function Kp(e, t, r) {
      var n;
      let i = Us(e),
        o = dn(e, r),
        a = Sr(e, r),
        s = 0,
        u = (n = i?.top) != null ? n : 0;
      return (
        o instanceof HTMLElement && ((s = o.scrollTop), !a && !hr(e) && (u += s), o.isSameNode(Et()) || (u += Et().scrollTop)),
        Math.floor(u - t)
      );
    }
    function Qp(e, t, r) {
      var n;
      if (!e) return 0;
      let { offsetTop: i = 0, scrollTop: o = 0 } = (n = (0, gs.default)(e)) != null ? n : {},
        a = e.getBoundingClientRect().top + o;
      i && (Sr(e, r) || Gp(e)) && (a -= i);
      let s = Math.floor(a - t);
      return s < 0 ? 0 : s;
    }
    function Et() {
      var e;
      return (e = document.scrollingElement) != null ? e : document.documentElement;
    }
    function Jp(e, t) {
      let { duration: r, element: n } = t;
      return new Promise((i, o) => {
        let { scrollTop: a } = n,
          s = e > a ? e - a : a - e;
        wc.default.top(n, e, { duration: s < 100 ? 50 : r }, (u) =>
          u && u.message !== "Element already at target scroll position" ? o(u) : i()
        );
      });
    }
    function Ws(e = navigator.userAgent) {
      let t = e;
      return (
        typeof window > "u"
          ? (t = "node")
          : document.documentMode
          ? (t = "ie")
          : /Edge/.test(e)
          ? (t = "edge")
          : window.opera || e.includes(" OPR/")
          ? (t = "opera")
          : typeof window.InstallTrigger < "u"
          ? (t = "firefox")
          : window.chrome
          ? (t = "chrome")
          : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(e) && (t = "safari"),
        t
      );
    }
    function lt(e) {
      let t = [],
        r = (n) => {
          if (typeof n == "string" || typeof n == "number") t.push(n);
          else if (Array.isArray(n)) n.forEach((i) => r(i));
          else if (Sn(n)) {
            let { children: i } = n.props;
            Array.isArray(i) ? i.forEach((o) => r(o)) : r(i);
          }
        };
      return r(e), t.join(" ").trim();
    }
    function Zp(e, t) {
      return !N.plainObject(e) || !N.array(t) ? !1 : Object.keys(e).every((r) => t.includes(r));
    }
    function $p(e) {
      let t = /^#?([\da-f])([\da-f])([\da-f])$/i,
        r = e.replace(t, (i, o, a, s) => o + o + a + a + s + s),
        n = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(r);
      return n ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : [];
    }
    function Yi(e) {
      return e.disableBeacon || e.placement === "center";
    }
    function Gi() {
      return !["chrome", "safari", "firefox", "opera"].includes(Ws());
    }
    function dt({ data: e, debug: t = !1, title: r, warn: n = !1 }) {
      let i = n ? console.warn || console.error : console.log;
      t &&
        (r && e
          ? (console.groupCollapsed(`%creact-joyride: ${r}`, "color: #ff0044; font-weight: bold; font-size: 12px;"),
            Array.isArray(e)
              ? e.forEach((o) => {
                  N.plainObject(o) && o.key ? i.apply(console, [o.key, o.value]) : i.apply(console, [o]);
                })
              : i.apply(console, [e]),
            console.groupEnd())
          : console.error("Missing title or data props"));
    }
    function ed(e) {
      let { isFirstStep: t, lifecycle: r, previousLifecycle: n, scrollToFirstStep: i, step: o, target: a } = e;
      return (
        !o.disableScrolling &&
        (!t || i || r === X.TOOLTIP) &&
        o.placement !== "center" &&
        (!o.isFixed || !hr(a)) &&
        n !== r &&
        [X.BEACON, X.TOOLTIP].includes(r)
      );
    }
    function id(e, t) {
      var r, n, i, o;
      let { floaterProps: a, styles: s } = e,
        u = (0, Ln.default)(s ?? {}, (r = t?.styles) != null ? r : {}),
        l = (0, Ln.default)(od, u.options || {}),
        { width: c } = l;
      window.innerWidth > 480 && (c = 380),
        "width" in l && (c = typeof l.width == "number" && window.innerWidth < l.width ? window.innerWidth - 30 : l.width);
      let p = { bottom: 0, left: 0, overflow: "hidden", position: "absolute", right: 0, top: 0, zIndex: l.zIndex },
        d = {
          beacon: { ...nr, display: "inline-block", height: l.beaconSize, position: "relative", width: l.beaconSize, zIndex: l.zIndex },
          beaconInner: {
            animation: "joyride-beacon-inner 1.2s infinite ease-in-out",
            backgroundColor: l.primaryColor,
            borderRadius: "50%",
            display: "block",
            height: "50%",
            left: "50%",
            opacity: 0.7,
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
          },
          beaconOuter: {
            animation: "joyride-beacon-outer 1.2s infinite ease-in-out",
            backgroundColor: `rgba(${$p(l.primaryColor).join(",")}, 0.2)`,
            border: `2px solid ${l.primaryColor}`,
            borderRadius: "50%",
            boxSizing: "border-box",
            display: "block",
            height: "100%",
            left: 0,
            opacity: 0.9,
            position: "absolute",
            top: 0,
            transformOrigin: "center",
            width: "100%",
          },
          tooltip: {
            backgroundColor: l.backgroundColor,
            borderRadius: 5,
            boxSizing: "border-box",
            color: l.textColor,
            fontSize: 16,
            maxWidth: "100%",
            padding: 15,
            position: "relative",
            width: c,
          },
          tooltipContainer: { lineHeight: 1.4, textAlign: "center" },
          tooltipTitle: { fontSize: 18, margin: 0 },
          tooltipContent: { padding: "20px 10px" },
          tooltipFooter: { alignItems: "center", display: "flex", justifyContent: "flex-end", marginTop: 15 },
          tooltipFooterSpacer: { flex: 1 },
          buttonNext: { ...nr, backgroundColor: l.primaryColor, borderRadius: 4, color: "#fff" },
          buttonBack: { ...nr, color: l.primaryColor, marginLeft: "auto", marginRight: 5 },
          buttonClose: { ...nr, color: l.textColor, height: 14, padding: 15, position: "absolute", right: 0, top: 0, width: 14 },
          buttonSkip: { ...nr, color: l.textColor, fontSize: 14 },
          overlay: { ...p, backgroundColor: l.overlayColor, mixBlendMode: "hard-light" },
          overlayLegacy: { ...p },
          overlayLegacyCenter: { ...p, backgroundColor: l.overlayColor },
          spotlight: { ...Xi, backgroundColor: "gray" },
          spotlightLegacy: { ...Xi, boxShadow: `0 0 0 9999px ${l.overlayColor}, ${l.spotlightShadow}` },
          floaterStyles: {
            arrow: { color: (o = (i = (n = a?.styles) == null ? void 0 : n.arrow) == null ? void 0 : i.color) != null ? o : l.arrowColor },
            options: { zIndex: l.zIndex + 100 },
          },
          options: l,
        };
      return (0, Ln.default)(d, u);
    }
    function ad(e) {
      return Ec(
        e,
        "beaconComponent",
        "disableCloseOnEsc",
        "disableOverlay",
        "disableOverlayClose",
        "disableScrolling",
        "disableScrollParentFix",
        "floaterProps",
        "hideBackButton",
        "hideCloseButton",
        "locale",
        "showProgress",
        "showSkipButton",
        "spotlightClicks",
        "spotlightPadding",
        "styles",
        "tooltipComponent"
      );
    }
    function or(e, t) {
      var r, n, i, o, a, s;
      let u = e ?? {},
        l = Nr.default.all([rd, ad(t), u], { isMergeableObject: N.plainObject }),
        c = id(t, l),
        p = Sr(ut(l.target), l.disableScrollParentFix),
        d = Nr.default.all([td, (r = t.floaterProps) != null ? r : {}, (n = l.floaterProps) != null ? n : {}]);
      return (
        (d.offset = l.offset),
        (d.styles = (0, Nr.default)((i = d.styles) != null ? i : {}, c.floaterStyles)),
        (d.offset += (a = (o = t.spotlightPadding) != null ? o : l.spotlightPadding) != null ? a : 0),
        l.placementBeacon && d.wrapperOptions && (d.wrapperOptions.placement = l.placementBeacon),
        p && d.options.preventOverflow && (d.options.preventOverflow.boundariesElement = "window"),
        {
          ...l,
          locale: Nr.default.all([qs, (s = t.locale) != null ? s : {}, l.locale || {}]),
          floaterProps: d,
          styles: ys(c, "floaterStyles"),
        }
      );
    }
    function Ys(e, t = !1) {
      return N.plainObject(e)
        ? e.target
          ? !0
          : (dt({ title: "validateStep", data: "target is missing from the step", warn: !0, debug: t }), !1)
        : (dt({ title: "validateStep", data: "step must be an object", warn: !0, debug: t }), !1);
    }
    function Ki(e, t = !1) {
      return N.array(e)
        ? e.every((r) => Ys(r, t))
        : (dt({ title: "validateSteps", data: "steps must be an array", warn: !0, debug: t }), !1);
    }
    function ld(e) {
      return new sd(e);
    }
    function pd({ styles: e }) {
      return J("div", { key: "JoyrideSpotlight", className: "react-joyride__spotlight", "data-test-id": "spotlight", style: e });
    }
    function md({ styles: e, ...t }) {
      let { color: r, height: n, width: i, ...o } = e;
      return m.createElement(
        "button",
        { style: o, type: "button", ...t },
        m.createElement(
          "svg",
          {
            height: typeof n == "number" ? `${n}px` : n,
            preserveAspectRatio: "xMidYMid",
            version: "1.1",
            viewBox: "0 0 18 18",
            width: typeof i == "number" ? `${i}px` : i,
            xmlns: "http://www.w3.org/2000/svg",
          },
          m.createElement(
            "g",
            null,
            m.createElement("path", {
              d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
              fill: r,
            })
          )
        )
      );
    }
    function yd(e) {
      let {
          backProps: t,
          closeProps: r,
          continuous: n,
          index: i,
          isLastStep: o,
          primaryProps: a,
          size: s,
          skipProps: u,
          step: l,
          tooltipProps: c,
        } = e,
        {
          content: p,
          hideBackButton: d,
          hideCloseButton: h,
          hideFooter: f,
          locale: v,
          showProgress: S,
          showSkipButton: x,
          styles: b,
          title: y,
        } = l,
        { back: P, close: O, last: W, next: B, skip: z } = v,
        H = { primary: O };
      return (
        n && ((H.primary = o ? W : B), S && (H.primary = J("span", null, H.primary, " (", i + 1, "/", s, ")"))),
        x &&
          !o &&
          (H.skip = J("button", { "aria-live": "off", "data-test-id": "button-skip", style: b.buttonSkip, type: "button", ...u }, z)),
        !d && i > 0 && (H.back = J("button", { "data-test-id": "button-back", style: b.buttonBack, type: "button", ...t }, P)),
        (H.close = !h && J(gd, { "data-test-id": "button-close", styles: b.buttonClose, ...r })),
        J(
          "div",
          { key: "JoyrideTooltip", "aria-label": lt(y) || lt(p), className: "react-joyride__tooltip", style: b.tooltip, ...c },
          J(
            "div",
            { style: b.tooltipContainer },
            y && J("h1", { "aria-label": lt(y), style: b.tooltipTitle }, y),
            J("div", { style: b.tooltipContent }, p)
          ),
          !f &&
            J(
              "div",
              { style: b.tooltipFooter },
              J("div", { style: b.tooltipFooterSpacer }, H.skip),
              H.back,
              J("button", { "data-test-id": "button-primary", style: b.buttonNext, type: "button", ...a }, H.primary)
            ),
          H.close
        )
      );
    }
    function Td({ targetSelector: e }) {
      return (
        de(() => {
          let t = document.querySelector(e);
          if (t) {
            (t.style.animation = "pulsate 3s infinite"),
              (t.style.transformOrigin = "center"),
              (t.style.animationTimingFunction = "ease-in-out");
            let r = `
        @keyframes pulsate {
          0% {
            box-shadow: 0 0 0 0 rgba(2, 156, 253, 0.7), 0 0 0 0 rgba(2, 156, 253, 0.4);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(2, 156, 253, 0), 0 0 0 40px rgba(2, 156, 253, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(2, 156, 253, 0), 0 0 0 0 rgba(2, 156, 253, 0);
          }
        }
      `,
              n = document.createElement("style");
            (n.id = "sb-onboarding-pulsating-effect"), (n.innerHTML = r), document.head.appendChild(n);
          }
          return () => {
            let r = document.querySelector("#sb-onboarding-pulsating-effect");
            r && r.remove(), t && (t.style.animation = "auto");
          };
        }, [e]),
        null
      );
    }
    function Ks({
      top: e = 0,
      left: t = 0,
      width: r = window.innerWidth,
      height: n = window.innerHeight,
      colors: i = ["#CA90FF", "#FC521F", "#66BF3C", "#FF4785", "#FFAE00", "#1EA7FD"],
      ...o
    }) {
      let [a] = Pe(() => {
        let s = document.createElement("div");
        return (
          s.setAttribute("id", "confetti-container"),
          s.setAttribute("style", "position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;"),
          s
        );
      });
      return (
        de(
          () => (
            document.body.appendChild(a),
            () => {
              document.body.removeChild(a);
            }
          ),
          []
        ),
        Kt(
          m.createElement(Ed, { top: e, left: t, width: r, height: n }, m.createElement(is.default, { colors: i, drawShape: Pd, ...o })),
          a
        )
      );
    }
    function Sd(e, t) {
      return Math.floor(Math.random() * (t - e)) + e;
    }
    function Pd(e) {
      switch (((this.shape = this.shape || Sd(1, 6)), this.shape)) {
        case 2: {
          let t = this.w / 2,
            r = this.h / 2;
          e.moveTo(-t + 2, -r),
            e.lineTo(t - 2, -r),
            e.arcTo(t, -r, t, -r + 2, 2),
            e.lineTo(t, r - 2),
            e.arcTo(t, r, t - 2, r, 2),
            e.lineTo(-t + 2, r),
            e.arcTo(-t, r, -t, r - 2, 2),
            e.lineTo(-t, -r + 2),
            e.arcTo(-t, -r, -t + 2, -r, 2);
          break;
        }
        case 3: {
          e.rect(-4, -4, 8, 16), e.rect(-12, -4, 24, 8);
          break;
        }
        case 4: {
          e.rect(-4, -4, 8, 16), e.rect(-4, -4, 24, 8);
          break;
        }
        case 1: {
          e.arc(0, 0, this.radius, 0, 2 * Math.PI);
          break;
        }
        case 5: {
          e.moveTo(16, 4), e.lineTo(4, 24), e.lineTo(24, 24);
          break;
        }
        case 6: {
          e.arc(4, -4, 4, -Math.PI / 2, 0), e.lineTo(4, 0);
          break;
        }
      }
      e.closePath(), e.fill();
    }
    function Gd({ api: e, isFinalStep: t, onFirstTourDone: r, onLastTourDone: n, codeSnippets: i }) {
      let [o, a] = Pe(),
        s = Mn();
      de(() => {
        e.once(li, () => {
          a(3);
        });
      }, []);
      let u = Ke(() => document.querySelector("#root div[role=main]") || document.querySelector("#storybook-panel-root"), []),
        l = t
          ? [
              {
                target: "#example-button--warning",
                title: "Congratulations!",
                content: m.createElement(
                  m.Fragment,
                  null,
                  "You just created your first story. Continue setting up your project to write stories for your own components."
                ),
                placement: "right",
                disableOverlay: !0,
                disableBeacon: !0,
                floaterProps: { disableAnimation: !0 },
                onNextButtonClick() {
                  n();
                },
              },
            ]
          : [
              {
                target: "#storybook-explorer-tree > div",
                title: "Storybook is built from stories",
                content: m.createElement(
                  m.Fragment,
                  null,
                  "Storybook stories represent the key states of each of your components.",
                  m.createElement("br", null),
                  m.createElement("br", null),
                  i?.filename &&
                    m.createElement(
                      m.Fragment,
                      null,
                      "We automatically added four stories for this Button component in this example file:",
                      m.createElement("br", null),
                      m.createElement(Wr, null, i.filename)
                    )
                ),
                placement: "right",
                disableBeacon: !0,
                styles: { spotlight: { transform: "translateY(30px)" } },
                floaterProps: { disableAnimation: !0 },
              },
              {
                target: "#storybook-preview-iframe",
                title: "Storybook previews are interactive",
                content: "Whenever you modify code or stories, Storybook automatically updates how it previews your components.",
                placement: "bottom",
                styles: { spotlight: { borderRadius: 0 } },
              },
              {
                target: u,
                title: "Interactive story playground",
                content: m.createElement(
                  m.Fragment,
                  null,
                  "See how a story renders with different data and state without touching code.",
                  m.createElement("br", null),
                  m.createElement("br", null),
                  "Try it out by pressing this button.",
                  m.createElement(Td, { targetSelector: "#control-primary" })
                ),
                placement: "right",
                spotlightClicks: !0,
                floaterProps: { target: "#control-primary", options: { preventOverflow: { boundariesElement: "window" } } },
                hideNextButton: !0,
              },
              {
                target: "#control-primary",
                title: "Congratulations!",
                content: m.createElement(
                  m.Fragment,
                  null,
                  "You learned how to control your stories interactively. Now let's explore how to write your first story.",
                  m.createElement(Ks, { numberOfPieces: 800, recycle: !1, tweenDuration: 2e4 })
                ),
                placement: "right",
                floaterProps: { options: { preventOverflow: { boundariesElement: "window" } } },
                disableOverlay: !0,
              },
            ];
      return m.createElement(wd, {
        steps: l,
        continuous: !0,
        stepIndex: o,
        spotlightPadding: 0,
        hideBackButton: !0,
        disableCloseOnEsc: !0,
        disableOverlayClose: !0,
        disableScrolling: !0,
        hideCloseButton: !0,
        callback: (c) => {
          !t && c.status === Q.FINISHED && r();
        },
        floaterProps: {
          options: { offset: { offset: "0, 6" } },
          styles: {
            floater: {
              padding: 0,
              paddingLeft: 8,
              paddingTop: 8,
              filter:
                s.base === "light"
                  ? "drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))"
                  : "drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)",
            },
          },
        },
        tooltipComponent: Md,
        styles: {
          overlay: { mixBlendMode: "unset", backgroundColor: "none" },
          spotlight: { backgroundColor: "none", border: `solid 2px ${s.color.secondary}`, boxShadow: "0px 0px 0px 9999px rgba(0,0,0,0.4)" },
          options: { zIndex: 1e4, primaryColor: s.color.secondary, arrowColor: s.base === "dark" ? "#292A2C" : s.color.lightest },
        },
      });
    }
    function Xd() {
      return m.createElement(
        "svg",
        { width: "32px", height: "40px", viewBox: "0 0 256 319", preserveAspectRatio: "xMidYMid" },
        m.createElement(
          "defs",
          null,
          m.createElement("path", {
            d: "M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",
            id: "path-1",
          })
        ),
        m.createElement(
          "g",
          null,
          m.createElement("mask", { id: "mask-2", fill: "white" }, m.createElement("use", { xlinkHref: "#path-1" })),
          m.createElement("use", { fill: "#FF4785", fillRule: "nonzero", xlinkHref: "#path-1" }),
          m.createElement("path", {
            d: "M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",
            fill: "#FFFFFF",
            fillRule: "nonzero",
            mask: "url(#mask-2)",
          })
        )
      );
    }
    function ch(e) {
      let { debounce: t, scroll: r, polyfill: n, offsetSize: i } = e === void 0 ? { debounce: 0, scroll: !1, offsetSize: !1 } : e,
        o = n || (typeof window > "u" ? class {} : window.ResizeObserver);
      if (!o)
        throw new Error(
          "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
        );
      let [a, s] = Pe({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }),
        u = vt({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: a }),
        l = t ? (typeof t == "number" ? t : t.scroll) : null,
        c = t ? (typeof t == "number" ? t : t.resize) : null,
        p = vt(!1);
      de(() => ((p.current = !0), () => void (p.current = !1)));
      let [d, h, f] = Ke(() => {
        let b = () => {
          if (!u.current.element) return;
          let { left: y, top: P, width: O, height: W, bottom: B, right: z, x: H, y: te } = u.current.element.getBoundingClientRect(),
            ce = { left: y, top: P, width: O, height: W, bottom: B, right: z, x: H, y: te };
          u.current.element instanceof HTMLElement &&
            i &&
            ((ce.height = u.current.element.offsetHeight), (ce.width = u.current.element.offsetWidth)),
            Object.freeze(ce),
            p.current && !fh(u.current.lastBounds, ce) && s((u.current.lastBounds = ce));
        };
        return [b, c ? (0, Ji.default)(b, c) : b, l ? (0, Ji.default)(b, l) : b];
      }, [s, i, l, c]);
      function v() {
        u.current.scrollContainers &&
          (u.current.scrollContainers.forEach((b) => b.removeEventListener("scroll", f, !0)), (u.current.scrollContainers = null)),
          u.current.resizeObserver && (u.current.resizeObserver.disconnect(), (u.current.resizeObserver = null));
      }
      function S() {
        u.current.element &&
          ((u.current.resizeObserver = new o(f)),
          u.current.resizeObserver.observe(u.current.element),
          r &&
            u.current.scrollContainers &&
            u.current.scrollContainers.forEach((b) => b.addEventListener("scroll", f, { capture: !0, passive: !0 })));
      }
      let x = (b) => {
        !b || b === u.current.element || (v(), (u.current.element = b), (u.current.scrollContainers = Qs(b)), S());
      };
      return (
        dh(f, !!r),
        ph(h),
        de(() => {
          v(), S();
        }, [r, f, h]),
        de(() => v, []),
        [x, a, d]
      );
    }
    function ph(e) {
      de(() => {
        let t = e;
        return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
      }, [e]);
    }
    function dh(e, t) {
      de(() => {
        if (t) {
          let r = e;
          return window.addEventListener("scroll", r, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", r, !0);
        }
      }, [e, t]);
    }
    function Qs(e) {
      let t = [];
      if (!e || e === document.body) return t;
      let { overflow: r, overflowX: n, overflowY: i } = window.getComputedStyle(e);
      return [r, n, i].some((o) => o === "auto" || o === "scroll") && t.push(e), [...t, ...Qs(e.parentElement)];
    }
    function yh(e) {
      let t = new Zi(),
        r = new Zi(),
        n = 0,
        i = !1,
        o = !1,
        a = new WeakSet(),
        s = {
          schedule: (u, l = !1, c = !1) => {
            let p = c && i,
              d = p ? t : r;
            return l && a.add(u), d.add(u) && p && i && (n = t.order.length), u;
          },
          cancel: (u) => {
            r.remove(u), a.delete(u);
          },
          process: (u) => {
            if (i) {
              o = !0;
              return;
            }
            if (((i = !0), ([t, r] = [r, t]), r.clear(), (n = t.order.length), n))
              for (let l = 0; l < n; l++) {
                let c = t.order[l];
                a.has(c) && (s.schedule(c), e()), c(u);
              }
            (i = !1), o && ((o = !1), s.process(u));
          },
        };
      return s;
    }
    function tl(e, t) {
      let r = !1,
        n = !0,
        i = { delta: 0, timestamp: 0, isProcessing: !1 },
        o = Br.reduce((l, c) => ((l[c] = yh(() => (r = !0))), l), {}),
        a = (l) => {
          o[l].process(i);
        },
        s = () => {
          let l = performance.now();
          (r = !1),
            (i.delta = n ? 1e3 / 60 : Math.max(Math.min(l - i.timestamp, vh), 1)),
            (i.timestamp = l),
            (i.isProcessing = !0),
            Br.forEach(a),
            (i.isProcessing = !1),
            r && t && ((n = !1), e(s));
        },
        u = () => {
          (r = !0), (n = !0), i.isProcessing || e(s);
        };
      return {
        schedule: Br.reduce((l, c) => {
          let p = o[c];
          return (l[c] = (d, h = !1, f = !1) => (r || u(), p.schedule(d, h, f))), l;
        }, {}),
        cancel: (l) => Br.forEach((c) => o[c].cancel(l)),
        state: i,
        steps: o,
      };
    }
    function bh(e, t, r, n) {
      let { visualElement: i } = be(hn),
        o = be(Zs),
        a = be(Co),
        s = be(Js).reducedMotion,
        u = vt();
      (n = n || o.renderer),
        !u.current &&
          n &&
          (u.current = n(e, {
            visualState: t,
            parent: i,
            props: r,
            presenceContext: a,
            blockInitialAnimation: a ? a.initial === !1 : !1,
            reducedMotionConfig: s,
          }));
      let l = u.current;
      Cn(() => {
        l && l.update(r, a);
      });
      let c = vt(!!(r[$s] && !window.HandoffComplete));
      return (
        mh(() => {
          l && (Ro.postRender(l.render), c.current && l.animationState && l.animationState.animateChanges());
        }),
        de(() => {
          l &&
            (l.updateFeatures(),
            !c.current && l.animationState && l.animationState.animateChanges(),
            c.current && ((c.current = !1), (window.HandoffComplete = !0)));
        }),
        l
      );
    }
    function Mt(e) {
      return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
    }
    function xh(e, t, r) {
      return Rt(
        (n) => {
          n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Mt(r) && (r.current = n));
        },
        [t]
      );
    }
    function fr(e) {
      return typeof e == "string" || Array.isArray(e);
    }
    function mn(e) {
      return e !== null && typeof e == "object" && typeof e.start == "function";
    }
    function gn(e) {
      return mn(e.animate) || ko.some((t) => fr(e[t]));
    }
    function rl(e) {
      return !!(gn(e) || e.variants);
    }
    function wh(e, t) {
      if (gn(e)) {
        let { initial: r, animate: n } = e;
        return { initial: r === !1 || fr(r) ? r : void 0, animate: fr(n) ? n : void 0 };
      }
      return e.inherit !== !1 ? t : {};
    }
    function Th(e) {
      let { initial: t, animate: r } = wh(e, be(hn));
      return Ke(() => ({ initial: t, animate: r }), [$i(t), $i(r)]);
    }
    function $i(e) {
      return Array.isArray(e) ? e.join(" ") : e;
    }
    function Eh(e) {
      for (let t in e) mr[t] = { ...mr[t], ...e[t] };
    }
    function Ph({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: i }) {
      e && Eh(e);
      function o(s, u) {
        let l,
          c = { ...be(Js), ...s, layoutId: Oh(s) },
          { isStatic: p } = c,
          d = Th(s),
          h = n(s, p);
        if (!p && fn) {
          d.visualElement = bh(i, h, c, t);
          let f = be(ol),
            v = be(Zs).strict;
          d.visualElement && (l = d.visualElement.loadFeatures(c, v, e, f));
        }
        return J(
          hn.Provider,
          { value: d },
          l && d.visualElement ? J(l, { visualElement: d.visualElement, ...c }) : null,
          r(i, s, xh(h, d.visualElement, u), h, p, d.visualElement)
        );
      }
      let a = Qt(o);
      return (a[Sh] = i), a;
    }
    function Oh({ layoutId: e }) {
      let t = be(nl).id;
      return t && e !== void 0 ? t + "-" + e : e;
    }
    function Ch(e) {
      function t(n, i = {}) {
        return Ph(e(n, i));
      }
      if (typeof Proxy > "u") return t;
      let r = new Map();
      return new Proxy(t, { get: (n, i) => (r.has(i) || r.set(i, t(i)), r.get(i)) });
    }
    function Mo(e) {
      return typeof e != "string" || e.includes("-") ? !1 : !!(Ah.indexOf(e) > -1 || /[A-Z]/.test(e));
    }
    function Rh(e) {
      Object.assign(Zr, e);
    }
    function il(e, { layout: t, layoutId: r }) {
      return Ct.has(e) || e.startsWith("origin") || ((t || r !== void 0) && (!!Zr[e] || e === "opacity"));
    }
    function Mh(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, i) {
      let o = "";
      for (let a = 0; a < kh; a++) {
        let s = Pr[a];
        if (e[s] !== void 0) {
          let u = Ih[s] || s;
          o += `${u}(${e[s]}) `;
        }
      }
      return t && !e.z && (o += "translateZ(0)"), (o = o.trim()), i ? (o = i(e, n ? "" : o)) : r && n && (o = "none"), o;
    }
    function Or(e) {
      return typeof e == "string";
    }
    function Lo(e, t, r, n) {
      let { style: i, vars: o, transform: a, transformOrigin: s } = e,
        u = !1,
        l = !1,
        c = !0;
      for (let p in t) {
        let d = t[p];
        if (sl(p)) {
          o[p] = d;
          continue;
        }
        let h = ll[p],
          f = jh(d, h);
        if (Ct.has(p)) {
          if (((u = !0), (a[p] = f), !c)) continue;
          d !== (h.default || 0) && (c = !1);
        } else p.startsWith("origin") ? ((l = !0), (s[p] = f)) : (i[p] = f);
      }
      if ((t.transform || (u || n ? (i.transform = Mh(e.transform, r, c, n)) : i.transform && (i.transform = "none")), l)) {
        let { originX: p = "50%", originY: d = "50%", originZ: h = 0 } = s;
        i.transformOrigin = `${p} ${d} ${h}`;
      }
    }
    function ul(e, t, r) {
      for (let n in t) !Ae(t[n]) && !il(n, r) && (e[n] = t[n]);
    }
    function zh({ transformTemplate: e }, t, r) {
      return Ke(() => {
        let n = jo();
        return Lo(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
      }, [t]);
    }
    function _h(e, t, r) {
      let n = e.style || {},
        i = {};
      return ul(i, n, e), Object.assign(i, zh(e, t, r)), i;
    }
    function Hh(e, t, r) {
      let n = {},
        i = _h(e, t, r);
      return (
        e.drag &&
          e.dragListener !== !1 &&
          ((n.draggable = !1),
          (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
          (i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
        e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
        (n.style = i),
        n
      );
    }
    function en(e) {
      return (
        e.startsWith("while") ||
        (e.startsWith("drag") && e !== "draggable") ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        e.startsWith("onLayout") ||
        Uh.has(e)
      );
    }
    function Wh(e) {
      e && (cl = (t) => (t.startsWith("on") ? !en(t) : e(t)));
    }
    function qh(e, t, r) {
      let n = {};
      for (let i in e)
        (i === "values" && typeof e.values == "object") ||
          ((cl(i) || (r === !0 && en(i)) || (!t && !en(i)) || (e.draggable && i.startsWith("onDrag"))) && (n[i] = e[i]));
      return n;
    }
    function na(e, t, r) {
      return typeof e == "string" ? e : _.transform(t + r * e);
    }
    function Yh(e, t, r) {
      let n = na(t, e.x, e.width),
        i = na(r, e.y, e.height);
      return `${n} ${i}`;
    }
    function Kh(e, t, r = 1, n = 0, i = !0) {
      e.pathLength = 1;
      let o = i ? Gh : Xh;
      e[o.offset] = _.transform(-n);
      let a = _.transform(t),
        s = _.transform(r);
      e[o.array] = `${a} ${s}`;
    }
    function No(
      e,
      { attrX: t, attrY: r, attrScale: n, originX: i, originY: o, pathLength: a, pathSpacing: s = 1, pathOffset: u = 0, ...l },
      c,
      p,
      d
    ) {
      if ((Lo(e, l, c, d), p)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
      }
      (e.attrs = e.style), (e.style = {});
      let { attrs: h, style: f, dimensions: v } = e;
      h.transform && (v && (f.transform = h.transform), delete h.transform),
        v && (i !== void 0 || o !== void 0 || f.transform) && (f.transformOrigin = Yh(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)),
        t !== void 0 && (h.x = t),
        r !== void 0 && (h.y = r),
        n !== void 0 && (h.scale = n),
        a !== void 0 && Kh(h, a, s, u, !1);
    }
    function Qh(e, t, r, n) {
      let i = Ke(() => {
        let o = pl();
        return No(o, t, { enableHardwareAcceleration: !1 }, Vo(n), e.transformTemplate), { ...o.attrs, style: { ...o.style } };
      }, [t]);
      if (e.style) {
        let o = {};
        ul(o, e.style, e), (i.style = { ...o, ...i.style });
      }
      return i;
    }
    function Jh(e = !1) {
      return (t, r, n, { latestValues: i }, o) => {
        let a = (Mo(t) ? Qh : Hh)(r, i, o, t),
          s = qh(r, typeof t == "string", e),
          u = t !== Mr ? { ...s, ...a, ref: n } : {},
          { children: l } = r,
          c = Ke(() => (Ae(l) ? l.get() : l), [l]);
        return J(t, { ...u, children: c });
      };
    }
    function dl(e, { style: t, vars: r }, n, i) {
      Object.assign(e.style, t, i && i.getProjectionStyles(n));
      for (let o in r) e.style.setProperty(o, r[o]);
    }
    function fl(e, t, r, n) {
      dl(e, t, void 0, n);
      for (let i in t.attrs) e.setAttribute(hl.has(i) ? i : Ao(i), t.attrs[i]);
    }
    function Fo(e, t) {
      let { style: r } = e,
        n = {};
      for (let i in r) (Ae(r[i]) || (t.style && Ae(t.style[i])) || il(i, e)) && (n[i] = r[i]);
      return n;
    }
    function ml(e, t) {
      let r = Fo(e, t);
      for (let n in e)
        if (Ae(e[n]) || Ae(t[n])) {
          let i = Pr.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
          r[i] = e[n];
        }
      return r;
    }
    function Bo(e, t, r, n = {}, i = {}) {
      return (
        typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, i)),
        typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, i)),
        t
      );
    }
    function Zh(e) {
      let t = vt(null);
      return t.current === null && (t.current = e()), t.current;
    }
    function qr(e) {
      let t = Ae(e) ? e.get() : e;
      return $h(t) ? t.toValue() : t;
    }
    function tf({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, i, o) {
      let a = { latestValues: rf(n, i, o, e), renderState: t() };
      return r && (a.mount = (s) => r(n, s, a)), a;
    }
    function rf(e, t, r, n) {
      let i = {},
        o = n(e, {});
      for (let d in o) i[d] = qr(o[d]);
      let { initial: a, animate: s } = e,
        u = gn(e),
        l = rl(e);
      t && l && !u && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
      let c = r ? r.initial === !1 : !1;
      c = c || a === !1;
      let p = c ? s : a;
      return (
        p &&
          typeof p != "boolean" &&
          !mn(p) &&
          (Array.isArray(p) ? p : [p]).forEach((d) => {
            let h = Bo(e, d);
            if (!h) return;
            let { transitionEnd: f, transition: v, ...S } = h;
            for (let x in S) {
              let b = S[x];
              if (Array.isArray(b)) {
                let y = c ? b.length - 1 : 0;
                b = b[y];
              }
              b !== null && (i[x] = b);
            }
            for (let x in f) i[x] = f[x];
          }),
        i
      );
    }
    function af(e, { forwardMotionProps: t = !1 }, r, n) {
      return { ...(Mo(e) ? nf : of), preloadedFeatures: r, useRender: Jh(t), createVisualElement: n, Component: e };
    }
    function Je(e, t, r, n = { passive: !0 }) {
      return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
    }
    function yn(e, t = "page") {
      return { point: { x: e[t + "X"], y: e[t + "Y"] } };
    }
    function Ze(e, t, r, n) {
      return Je(e, t, sf(r), n);
    }
    function vl(e) {
      let t = null;
      return () => {
        let r = () => {
          t = null;
        };
        return t === null ? ((t = e), r) : !1;
      };
    }
    function bl(e) {
      let t = !1;
      if (e === "y") t = ia();
      else if (e === "x") t = oa();
      else {
        let r = oa(),
          n = ia();
        r && n
          ? (t = () => {
              r(), n();
            })
          : (r && r(), n && n());
      }
      return t;
    }
    function xl() {
      let e = bl(!0);
      return e ? (e(), !1) : !0;
    }
    function aa(e, t) {
      let r = "pointer" + (t ? "enter" : "leave"),
        n = "onHover" + (t ? "Start" : "End"),
        i = (o, a) => {
          if (o.pointerType === "touch" || xl()) return;
          let s = e.getProps();
          e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && le.update(() => s[n](o, a));
        };
      return Ze(e.current, r, i, { passive: !e.getProps()[n] });
    }
    function zn(e, t) {
      if (!t) return;
      let r = new PointerEvent("pointer" + e);
      t(r, yn(r));
    }
    function ff({ root: e, ...t }) {
      let r = e || document;
      _n.has(r) || _n.set(r, {});
      let n = _n.get(r),
        i = JSON.stringify(t);
      return n[i] || (n[i] = new IntersectionObserver(hf, { root: e, ...t })), n[i];
    }
    function mf(e, t, r) {
      let n = ff(t);
      return (
        no.set(e, r),
        n.observe(e),
        () => {
          no.delete(e), n.unobserve(e);
        }
      );
    }
    function vf({ viewport: e = {} }, { viewport: t = {} } = {}) {
      return (r) => e[r] !== t[r];
    }
    function Tl(e, t) {
      if (!Array.isArray(t)) return !1;
      let r = t.length;
      if (r !== e.length) return !1;
      for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
      return !0;
    }
    function xf(e) {
      let t = {};
      return e.values.forEach((r, n) => (t[n] = r.get())), t;
    }
    function wf(e) {
      let t = {};
      return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t;
    }
    function vn(e, t, r) {
      let n = e.getProps();
      return Bo(n, t, r !== void 0 ? r : n.custom, xf(e), wf(e));
    }
    function Sl(e) {
      return !!(!e || (typeof e == "string" && Pl[e]) || El(e) || (Array.isArray(e) && e.every(Sl)));
    }
    function Ol(e) {
      if (e) return El(e) ? sr(e) : Array.isArray(e) ? e.map(Ol) : Pl[e];
    }
    function Ef(e, t, r, { delay: n = 0, duration: i, repeat: o = 0, repeatType: a = "loop", ease: s, times: u } = {}) {
      let l = { [t]: r };
      u && (l.offset = u);
      let c = Ol(s);
      return (
        Array.isArray(c) && (l.easing = c),
        e.animate(l, {
          delay: n,
          duration: i,
          easing: Array.isArray(c) ? "linear" : c,
          fill: "both",
          iterations: o + 1,
          direction: a === "reverse" ? "alternate" : "normal",
        })
      );
    }
    function Sf(e, { repeat: t, repeatType: r = "loop" }) {
      let n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
      return e[n];
    }
    function Cf(e, t, r, n, i) {
      let o,
        a,
        s = 0;
      do (a = t + (r - t) / 2), (o = Cl(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > Pf && ++s < Of);
      return a;
    }
    function Rr(e, t, r, n) {
      if (e === t && r === n) return fe;
      let i = (o) => Cf(o, 0, 1, e, r);
      return (o) => (o === 0 || o === 1 ? o : Cl(i(o), t, n));
    }
    function Hn(e, t, r) {
      return (
        r < 0 && (r += 1),
        r > 1 && (r -= 1),
        r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      );
    }
    function Lf({ hue: e, saturation: t, lightness: r, alpha: n }) {
      (e /= 360), (t /= 100), (r /= 100);
      let i = 0,
        o = 0,
        a = 0;
      if (!t) i = o = a = r;
      else {
        let s = r < 0.5 ? r * (1 + t) : r + t - r * t,
          u = 2 * r - s;
        (i = Hn(u, s, e + 1 / 3)), (o = Hn(u, s, e)), (a = Hn(u, s, e - 1 / 3));
      }
      return { red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(a * 255), alpha: n };
    }
    function Nf(e) {
      let t = "",
        r = "",
        n = "",
        i = "";
      return (
        e.length > 5
          ? ((t = e.substring(1, 3)), (r = e.substring(3, 5)), (n = e.substring(5, 7)), (i = e.substring(7, 9)))
          : ((t = e.substring(1, 2)),
            (r = e.substring(2, 3)),
            (n = e.substring(3, 4)),
            (i = e.substring(4, 5)),
            (t += t),
            (r += r),
            (n += n),
            (i += i)),
        { red: parseInt(t, 16), green: parseInt(r, 16), blue: parseInt(n, 16), alpha: i ? parseInt(i, 16) / 255 : 1 }
      );
    }
    function ua(e) {
      let t = Ff(e);
      Fe(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
      let r = t.parse(e);
      return t === Dt && (r = Lf(r)), r;
    }
    function Bf(e) {
      var t, r;
      return (
        isNaN(e) &&
        Or(e) &&
        (((t = e.match(Do)) === null || t === void 0 ? void 0 : t.length) || 0) +
          (((r = e.match(Nh)) === null || r === void 0 ? void 0 : r.length) || 0) >
          0
      );
    }
    function rn(e) {
      let t = e.toString(),
        r = t.match(da) || [],
        n = [],
        i = { color: [], number: [], var: [] },
        o = [];
      for (let s = 0; s < r.length; s++) {
        let u = r[s];
        xe.test(u)
          ? (i.color.push(s), o.push(jl), n.push(xe.parse(u)))
          : u.startsWith(_f)
          ? (i.var.push(s), o.push(zf), n.push(u))
          : (i.number.push(s), o.push(Ll), n.push(parseFloat(u)));
      }
      let a = t.replace(da, pa).split(pa);
      return { values: n, split: a, indexes: i, types: o };
    }
    function Nl(e) {
      return rn(e).values;
    }
    function Vl(e) {
      let { split: t, types: r } = rn(e),
        n = t.length;
      return (i) => {
        let o = "";
        for (let a = 0; a < n; a++)
          if (((o += t[a]), i[a] !== void 0)) {
            let s = r[a];
            s === Ll ? (o += cr(i[a])) : s === jl ? (o += xe.transform(i[a])) : (o += i[a]);
          }
        return o;
      };
    }
    function Uf(e) {
      let t = Nl(e);
      return Vl(e)(t.map(Hf));
    }
    function io(e, t) {
      return (r) => (r > 0 ? t : e);
    }
    function Wf(e, t) {
      return (r) => se(e, t, r);
    }
    function Uo(e) {
      return typeof e == "number"
        ? Wf
        : typeof e == "string"
        ? $r(e)
          ? io
          : xe.test(e)
          ? ca
          : Gf
        : Array.isArray(e)
        ? Fl
        : typeof e == "object"
        ? xe.test(e)
          ? ca
          : qf
        : io;
    }
    function Fl(e, t) {
      let r = [...e],
        n = r.length,
        i = e.map((o, a) => Uo(o)(o, t[a]));
      return (o) => {
        for (let a = 0; a < n; a++) r[a] = i[a](o);
        return r;
      };
    }
    function qf(e, t) {
      let r = { ...e, ...t },
        n = {};
      for (let i in r) e[i] !== void 0 && t[i] !== void 0 && (n[i] = Uo(e[i])(e[i], t[i]));
      return (i) => {
        for (let o in n) r[o] = n[o](i);
        return r;
      };
    }
    function Yf(e, t) {
      var r;
      let n = [],
        i = { color: 0, var: 0, number: 0 };
      for (let o = 0; o < t.values.length; o++) {
        let a = t.types[o],
          s = e.indexes[a][i[a]],
          u = (r = e.values[s]) !== null && r !== void 0 ? r : 0;
        (n[o] = u), i[a]++;
      }
      return n;
    }
    function Bl(e, t, r) {
      return typeof e == "number" && typeof t == "number" && typeof r == "number" ? se(e, t, r) : Uo(e)(e, t);
    }
    function Xf(e, t, r) {
      let n = [],
        i = r || Bl,
        o = e.length - 1;
      for (let a = 0; a < o; a++) {
        let s = i(e[a], e[a + 1]);
        if (t) {
          let u = Array.isArray(t) ? t[a] || fe : t;
          s = $e(u, s);
        }
        n.push(s);
      }
      return n;
    }
    function Kf(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
      let o = e.length;
      if ((Fe(o === t.length, "Both input and output ranges must be the same length"), o === 1)) return () => t[0];
      e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
      let a = Xf(t, n, i),
        s = a.length,
        u = (l) => {
          let c = 0;
          if (s > 1) for (; c < e.length - 2 && !(l < e[c + 1]); c++);
          let p = gr(e[c], e[c + 1], l);
          return a[c](p);
        };
      return r ? (l) => u(ht(e[0], e[o - 1], l)) : u;
    }
    function Qf(e, t) {
      let r = e[e.length - 1];
      for (let n = 1; n <= t; n++) {
        let i = gr(0, t, n);
        e.push(se(r, 1, i));
      }
    }
    function Jf(e) {
      let t = [0];
      return Qf(t, e.length - 1), t;
    }
    function Zf(e, t) {
      return e.map((r) => r * t);
    }
    function $f(e, t) {
      return e.map(() => t || Al).splice(0, e.length - 1);
    }
    function nn({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
      let i = If(n) ? n.map(la) : la(n),
        o = { done: !1, value: t[0] },
        a = Zf(r && r.length === t.length ? r : Jf(t), e),
        s = Kf(a, t, { ease: Array.isArray(i) ? i : $f(t, i) });
      return { calculatedDuration: e, next: (u) => ((o.value = s(u)), (o.done = u >= e), o) };
    }
    function zl(e, t) {
      return t ? e * (1e3 / t) : 0;
    }
    function _l(e, t, r) {
      let n = Math.max(t - em, 0);
      return zl(r - e(n), t - n);
    }
    function om({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
      let i, o;
      Ar(e <= ct(ha), "Spring duration must be 10 seconds or less");
      let a = 1 - t;
      (a = ht(rm, nm, a)),
        (e = ht(tm, ha, et(e))),
        a < 1
          ? ((i = (l) => {
              let c = l * a,
                p = c * e,
                d = c - r,
                h = ao(l, a),
                f = Math.exp(-p);
              return qn - (d / h) * f;
            }),
            (o = (l) => {
              let c = l * a * e,
                p = c * r + r,
                d = Math.pow(a, 2) * Math.pow(l, 2) * e,
                h = Math.exp(-c),
                f = ao(Math.pow(l, 2), a);
              return ((-i(l) + qn > 0 ? -1 : 1) * ((p - d) * h)) / f;
            }))
          : ((i = (l) => {
              let c = Math.exp(-l * e),
                p = (l - r) * e + 1;
              return -qn + c * p;
            }),
            (o = (l) => {
              let c = Math.exp(-l * e),
                p = (r - l) * (e * e);
              return c * p;
            }));
      let s = 5 / e,
        u = am(i, o, s);
      if (((e = ct(e)), isNaN(u))) return { stiffness: 100, damping: 10, duration: e };
      {
        let l = Math.pow(u, 2) * n;
        return { stiffness: l, damping: a * 2 * Math.sqrt(n * l), duration: e };
      }
    }
    function am(e, t, r) {
      let n = r;
      for (let i = 1; i < im; i++) n = n - e(n) / t(n);
      return n;
    }
    function ao(e, t) {
      return e * Math.sqrt(1 - t * t);
    }
    function fa(e, t) {
      return t.some((r) => e[r] !== void 0);
    }
    function um(e) {
      let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
      if (!fa(e, lm) && fa(e, sm)) {
        let r = om(e);
        (t = { ...t, ...r, mass: 1 }), (t.isResolvedFromDuration = !0);
      }
      return t;
    }
    function Hl({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
      let i = e[0],
        o = e[e.length - 1],
        a = { done: !1, value: i },
        {
          stiffness: s,
          damping: u,
          mass: l,
          duration: c,
          velocity: p,
          isResolvedFromDuration: d,
        } = um({ ...n, velocity: -et(n.velocity || 0) }),
        h = p || 0,
        f = u / (2 * Math.sqrt(s * l)),
        v = o - i,
        S = et(Math.sqrt(s / l)),
        x = Math.abs(v) < 5;
      r || (r = x ? 0.01 : 2), t || (t = x ? 0.005 : 0.5);
      let b;
      if (f < 1) {
        let y = ao(S, f);
        b = (P) => {
          let O = Math.exp(-f * S * P);
          return o - O * (((h + f * S * v) / y) * Math.sin(y * P) + v * Math.cos(y * P));
        };
      } else if (f === 1) b = (y) => o - Math.exp(-S * y) * (v + (h + S * v) * y);
      else {
        let y = S * Math.sqrt(f * f - 1);
        b = (P) => {
          let O = Math.exp(-f * S * P),
            W = Math.min(y * P, 300);
          return o - (O * ((h + f * S * v) * Math.sinh(W) + y * v * Math.cosh(W))) / y;
        };
      }
      return {
        calculatedDuration: (d && c) || null,
        next: (y) => {
          let P = b(y);
          if (d) a.done = y >= c;
          else {
            let O = h;
            y !== 0 && (f < 1 ? (O = _l(b, y, P)) : (O = 0));
            let W = Math.abs(O) <= r,
              B = Math.abs(o - P) <= t;
            a.done = W && B;
          }
          return (a.value = a.done ? o : P), a;
        },
      };
    }
    function ma({
      keyframes: e,
      velocity: t = 0,
      power: r = 0.8,
      timeConstant: n = 325,
      bounceDamping: i = 10,
      bounceStiffness: o = 500,
      modifyTarget: a,
      min: s,
      max: u,
      restDelta: l = 0.5,
      restSpeed: c,
    }) {
      let p = e[0],
        d = { done: !1, value: p },
        h = (z) => (s !== void 0 && z < s) || (u !== void 0 && z > u),
        f = (z) => (s === void 0 ? u : u === void 0 || Math.abs(s - z) < Math.abs(u - z) ? s : u),
        v = r * t,
        S = p + v,
        x = a === void 0 ? S : a(S);
      x !== S && (v = x - p);
      let b = (z) => -v * Math.exp(-z / n),
        y = (z) => x + b(z),
        P = (z) => {
          let H = b(z),
            te = y(z);
          (d.done = Math.abs(H) <= l), (d.value = d.done ? x : te);
        },
        O,
        W,
        B = (z) => {
          h(d.value) &&
            ((O = z),
            (W = Hl({
              keyframes: [d.value, f(d.value)],
              velocity: _l(y, z, d.value),
              damping: i,
              stiffness: o,
              restDelta: l,
              restSpeed: c,
            })));
        };
      return (
        B(0),
        {
          calculatedDuration: null,
          next: (z) => {
            let H = !1;
            return !W && O === void 0 && ((H = !0), P(z), B(z)), O !== void 0 && z > O ? W.next(z - O) : (!H && P(z), d);
          },
        }
      );
    }
    function cm() {
      Yr = void 0;
    }
    function ga(e) {
      let t = 0,
        r = 50,
        n = e.next(t);
      for (; !n.done && t < 2e4; ) (t += r), (n = e.next(t));
      return t >= 2e4 ? 1 / 0 : t;
    }
    function on({
      autoplay: e = !0,
      delay: t = 0,
      driver: r = pm,
      keyframes: n,
      type: i = "keyframes",
      repeat: o = 0,
      repeatDelay: a = 0,
      repeatType: s = "loop",
      onPlay: u,
      onStop: l,
      onComplete: c,
      onUpdate: p,
      ...d
    }) {
      let h = 1,
        f = !1,
        v,
        S,
        x = () => {
          S = new Promise((Z) => {
            v = Z;
          });
        };
      x();
      let b,
        y = dm[i] || nn,
        P;
      y !== nn &&
        typeof n[0] != "number" &&
        (Fe(n.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${n}`),
        (P = $e(hm, Bl(n[0], n[1]))),
        (n = [0, 100]));
      let O = y({ ...d, keyframes: n }),
        W;
      s === "mirror" && (W = y({ ...d, keyframes: [...n].reverse(), velocity: -(d.velocity || 0) }));
      let B = "idle",
        z = null,
        H = null,
        te = null;
      O.calculatedDuration === null && o && (O.calculatedDuration = ga(O));
      let { calculatedDuration: ce } = O,
        Te = 1 / 0,
        ye = 1 / 0;
      ce !== null && ((Te = ce + a), (ye = Te * (o + 1) - a));
      let ue = 0,
        re = (Z) => {
          if (H === null) return;
          h > 0 && (H = Math.min(H, Z)), h < 0 && (H = Math.min(Z - ye / h, H)), z !== null ? (ue = z) : (ue = Math.round(Z - H) * h);
          let A = ue - t * (h >= 0 ? 1 : -1),
            D = h >= 0 ? A < 0 : A > ye;
          (ue = Math.max(A, 0)), B === "finished" && z === null && (ue = ye);
          let q = ue,
            Y = O;
          if (o) {
            let T = Math.min(ue, ye) / Te,
              M = Math.floor(T),
              k = T % 1;
            !k && T >= 1 && (k = 1),
              k === 1 && M--,
              (M = Math.min(M, o + 1)),
              M % 2 && (s === "reverse" ? ((k = 1 - k), a && (k -= a / Te)) : s === "mirror" && (Y = W)),
              (q = ht(0, 1, k) * Te);
          }
          let g = D ? { done: !1, value: n[0] } : Y.next(q);
          P && (g.value = P(g.value));
          let { done: w } = g;
          !D && ce !== null && (w = h >= 0 ? ue >= ye : ue <= 0);
          let E = z === null && (B === "finished" || (B === "running" && w));
          return p && p(g.value), E && ge(), g;
        },
        me = () => {
          b && b.stop(), (b = void 0);
        },
        ke = () => {
          (B = "idle"), me(), v(), x(), (H = te = null);
        },
        ge = () => {
          (B = "finished"), c && c(), me(), v();
        },
        Ee = () => {
          if (f) return;
          b || (b = r(re));
          let Z = b.now();
          u && u(),
            z !== null ? (H = Z - z) : (!H || B === "finished") && (H = Z),
            B === "finished" && x(),
            (te = H),
            (z = null),
            (B = "running"),
            b.start();
        };
      e && Ee();
      let _e = {
        then(Z, A) {
          return S.then(Z, A);
        },
        get time() {
          return et(ue);
        },
        set time(Z) {
          (Z = ct(Z)), (ue = Z), z !== null || !b || h === 0 ? (z = Z) : (H = b.now() - Z / h);
        },
        get duration() {
          let Z = O.calculatedDuration === null ? ga(O) : O.calculatedDuration;
          return et(Z);
        },
        get speed() {
          return h;
        },
        set speed(Z) {
          Z === h || !b || ((h = Z), (_e.time = et(ue)));
        },
        get state() {
          return B;
        },
        play: Ee,
        pause: () => {
          (B = "paused"), (z = ue);
        },
        stop: () => {
          (f = !0), B !== "idle" && ((B = "idle"), l && l(), ke());
        },
        cancel: () => {
          te !== null && re(te), ke();
        },
        complete: () => {
          B = "finished";
        },
        sample: (Z) => ((H = 0), re(Z)),
      };
      return _e;
    }
    function fm(e) {
      let t;
      return () => (t === void 0 && (t = e()), t);
    }
    function bm(e, t, { onUpdate: r, onComplete: n, ...i }) {
      if (!(mm() && gm.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia")) return !1;
      let o = !1,
        a,
        s,
        u = !1,
        l = () => {
          s = new Promise((x) => {
            a = x;
          });
        };
      l();
      let { keyframes: c, duration: p = 300, ease: d, times: h } = i;
      if (vm(t, i)) {
        let x = on({ ...i, repeat: 0, delay: 0 }),
          b = { done: !1, value: c[0] },
          y = [],
          P = 0;
        for (; !b.done && P < ym; ) (b = x.sample(P)), y.push(b.value), (P += _r);
        (h = void 0), (c = y), (p = P - _r), (d = "linear");
      }
      let f = Ef(e.owner.current, t, c, { ...i, duration: p, ease: d, times: h }),
        v = () => {
          (u = !1), f.cancel();
        },
        S = () => {
          (u = !0), le.update(v), a(), l();
        };
      return (
        (f.onfinish = () => {
          u || (e.set(Sf(c, i)), n && n(), S());
        }),
        {
          then(x, b) {
            return s.then(x, b);
          },
          attachTimeline(x) {
            return (f.timeline = x), (f.onfinish = null), fe;
          },
          get time() {
            return et(f.currentTime || 0);
          },
          set time(x) {
            f.currentTime = ct(x);
          },
          get speed() {
            return f.playbackRate;
          },
          set speed(x) {
            f.playbackRate = x;
          },
          get duration() {
            return et(p);
          },
          play: () => {
            o || (f.play(), tt(v));
          },
          pause: () => f.pause(),
          stop: () => {
            if (((o = !0), f.playState === "idle")) return;
            let { currentTime: x } = f;
            if (x) {
              let b = on({ ...i, autoplay: !1 });
              e.setWithVelocity(b.sample(x - _r).value, b.sample(x).value, _r);
            }
            S();
          },
          complete: () => {
            u || f.finish();
          },
          cancel: S,
        }
      );
    }
    function xm({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
      let i = () => (
        r && r(e[e.length - 1]),
        n && n(),
        { time: 0, speed: 1, duration: 0, play: fe, pause: fe, stop: fe, then: (o) => (o(), Promise.resolve()), cancel: fe, complete: fe }
      );
      return t ? on({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i }) : i();
    }
    function Cm(e) {
      let [t, r] = e.slice(0, -1).split("(");
      if (t === "drop-shadow") return e;
      let [n] = r.match(Do) || [];
      if (!n) return e;
      let i = r.replace(n, ""),
        o = Om.has(t) ? 1 : 0;
      return n !== r && (o *= 100), t + "(" + o + i + ")";
    }
    function Ul(e, t) {
      let r = Wo(e);
      return r !== lo && (r = ft), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
    }
    function Im(e) {
      if (typeof e == "number") return e === 0;
      if (e !== null) return e === "none" || e === "0" || Wl(e);
    }
    function km(e, t, r, n) {
      let i = so(t, r),
        o;
      Array.isArray(r) ? (o = [...r]) : (o = [null, r]);
      let a = n.from !== void 0 ? n.from : e.get(),
        s,
        u = [];
      for (let l = 0; l < o.length; l++)
        o[l] === null && (o[l] = l === 0 ? a : o[l - 1]),
          Im(o[l]) && u.push(l),
          typeof o[l] == "string" && o[l] !== "none" && o[l] !== "0" && (s = o[l]);
      if (i && u.length && s)
        for (let l = 0; l < u.length; l++) {
          let c = u[l];
          o[c] = Ul(t, s);
        }
      return o;
    }
    function Mm({
      when: e,
      delay: t,
      delayChildren: r,
      staggerChildren: n,
      staggerDirection: i,
      repeat: o,
      repeatType: a,
      repeatDelay: s,
      from: u,
      elapsed: l,
      ...c
    }) {
      return !!Object.keys(c).length;
    }
    function qo(e, t) {
      return e[t] || e.default || e;
    }
    function an(e) {
      return !!(Ae(e) && e.add);
    }
    function Go(e, t) {
      e.indexOf(t) === -1 && e.push(t);
    }
    function Xo(e, t) {
      let r = e.indexOf(t);
      r > -1 && e.splice(r, 1);
    }
    function Qo(e, t, r) {
      e || ya.has(t) || (console.warn(t), r && console.warn(r), ya.add(t));
    }
    function Bt(e, t) {
      return new Lm(e, t);
    }
    function Fm(e, t, r) {
      e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Bt(r));
    }
    function Bm(e, t) {
      let r = vn(e, t),
        { transitionEnd: n = {}, transition: i = {}, ...o } = r ? e.makeTargetAnimatable(r, !1) : {};
      o = { ...o, ...n };
      for (let a in o) {
        let s = ef(o[a]);
        Fm(e, a, s);
      }
    }
    function zm(e, t, r) {
      var n, i;
      let o = Object.keys(t).filter((s) => !e.hasValue(s)),
        a = o.length;
      if (a)
        for (let s = 0; s < a; s++) {
          let u = o[s],
            l = t[u],
            c = null;
          Array.isArray(l) && (c = l[0]),
            c === null && (c = (i = (n = r[u]) !== null && n !== void 0 ? n : e.readValue(u)) !== null && i !== void 0 ? i : t[u]),
            c != null &&
              (typeof c == "string" && (ql(c) || Wl(c)) ? (c = parseFloat(c)) : !Vm(c) && ft.test(l) && (c = Ul(u, l)),
              e.addValue(u, Bt(c, { owner: e })),
              r[u] === void 0 && (r[u] = c),
              c !== null && e.setBaseTarget(u, c));
        }
    }
    function _m(e, t) {
      return t ? (t[e] || t.default || t).from : void 0;
    }
    function Hm(e, t, r) {
      let n = {};
      for (let i in e) {
        let o = _m(i, t);
        if (o !== void 0) n[i] = o;
        else {
          let a = r.getValue(i);
          a && (n[i] = a.get());
        }
      }
      return n;
    }
    function Um({ protectedKeys: e, needsAnimating: t }, r) {
      let n = e.hasOwnProperty(r) && t[r] !== !0;
      return (t[r] = !1), n;
    }
    function Wm(e, t) {
      let r = e.get();
      if (Array.isArray(t)) {
        for (let n = 0; n < t.length; n++) if (t[n] !== r) return !0;
      } else return r !== t;
    }
    function Xl(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
      let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t),
        u = e.getValue("willChange");
      n && (o = n);
      let l = [],
        c = i && e.animationState && e.animationState.getState()[i];
      for (let p in s) {
        let d = e.getValue(p),
          h = s[p];
        if (!d || h === void 0 || (c && Um(c, p))) continue;
        let f = { delay: r, elapsed: 0, ...qo(o || {}, p) };
        if (window.HandoffAppearAnimations) {
          let x = e.getProps()[$s];
          if (x) {
            let b = window.HandoffAppearAnimations(x, p, d, le);
            b !== null && ((f.elapsed = b), (f.isHandoff = !0));
          }
        }
        let v = !f.isHandoff && !Wm(d, h);
        if ((f.type === "spring" && (d.getVelocity() || f.velocity) && (v = !1), d.animation && (v = !1), v)) continue;
        d.start(Yo(p, d, h, e.shouldReduceMotion && Ct.has(p) ? { type: !1 } : f));
        let S = d.animation;
        an(u) && (u.add(p), S.then(() => u.remove(p))), l.push(S);
      }
      return (
        a &&
          Promise.all(l).then(() => {
            a && Bm(e, a);
          }),
        l
      );
    }
    function uo(e, t, r = {}) {
      let n = vn(e, t, r.custom),
        { transition: i = e.getDefaultTransition() || {} } = n || {};
      r.transitionOverride && (i = r.transitionOverride);
      let o = n ? () => Promise.all(Xl(e, n, r)) : () => Promise.resolve(),
        a =
          e.variantChildren && e.variantChildren.size
            ? (u = 0) => {
                let { delayChildren: l = 0, staggerChildren: c, staggerDirection: p } = i;
                return qm(e, t, l + u, c, p, r);
              }
            : () => Promise.resolve(),
        { when: s } = i;
      if (s) {
        let [u, l] = s === "beforeChildren" ? [o, a] : [a, o];
        return u().then(() => l());
      } else return Promise.all([o(), a(r.delay)]);
    }
    function qm(e, t, r = 0, n = 0, i = 1, o) {
      let a = [],
        s = (e.variantChildren.size - 1) * n,
        u = i === 1 ? (l = 0) => l * n : (l = 0) => s - l * n;
      return (
        Array.from(e.variantChildren)
          .sort(Ym)
          .forEach((l, c) => {
            l.notify("AnimationStart", t), a.push(uo(l, t, { ...o, delay: r + u(c) }).then(() => l.notify("AnimationComplete", t)));
          }),
        Promise.all(a)
      );
    }
    function Ym(e, t) {
      return e.sortNodePosition(t);
    }
    function Gm(e, t, r = {}) {
      e.notify("AnimationStart", t);
      let n;
      if (Array.isArray(t)) {
        let i = t.map((o) => uo(e, o, r));
        n = Promise.all(i);
      } else if (typeof t == "string") n = uo(e, t, r);
      else {
        let i = typeof t == "function" ? vn(e, t, r.custom) : t;
        n = Promise.all(Xl(e, i, r));
      }
      return n.then(() => e.notify("AnimationComplete", t));
    }
    function Qm(e) {
      return (t) => Promise.all(t.map(({ animation: r, options: n }) => Gm(e, r, n)));
    }
    function Jm(e) {
      let t = Qm(e),
        r = $m(),
        n = !0,
        i = (u, l) => {
          let c = vn(e, l);
          if (c) {
            let { transition: p, transitionEnd: d, ...h } = c;
            u = { ...u, ...h, ...d };
          }
          return u;
        };
      function o(u) {
        t = u(e);
      }
      function a(u, l) {
        let c = e.getProps(),
          p = e.getVariantContext(!0) || {},
          d = [],
          h = new Set(),
          f = {},
          v = 1 / 0;
        for (let x = 0; x < Km; x++) {
          let b = Xm[x],
            y = r[b],
            P = c[b] !== void 0 ? c[b] : p[b],
            O = fr(P),
            W = b === l ? y.isActive : null;
          W === !1 && (v = x);
          let B = P === p[b] && P !== c[b] && O;
          if (
            (B && n && e.manuallyAnimateOnMount && (B = !1),
            (y.protectedKeys = { ...f }),
            (!y.isActive && W === null) || (!P && !y.prevProp) || mn(P) || typeof P == "boolean")
          )
            continue;
          let z = Zm(y.prevProp, P) || (b === l && y.isActive && !B && O) || (x > v && O),
            H = !1,
            te = Array.isArray(P) ? P : [P],
            ce = te.reduce(i, {});
          W === !1 && (ce = {});
          let { prevResolvedValues: Te = {} } = y,
            ye = { ...Te, ...ce },
            ue = (re) => {
              (z = !0), h.has(re) && ((H = !0), h.delete(re)), (y.needsAnimating[re] = !0);
            };
          for (let re in ye) {
            let me = ce[re],
              ke = Te[re];
            if (f.hasOwnProperty(re)) continue;
            let ge = !1;
            tn(me) && tn(ke) ? (ge = !Tl(me, ke)) : (ge = me !== ke),
              ge ? (me !== void 0 ? ue(re) : h.add(re)) : me !== void 0 && h.has(re) ? ue(re) : (y.protectedKeys[re] = !0);
          }
          (y.prevProp = P),
            (y.prevResolvedValues = ce),
            y.isActive && (f = { ...f, ...ce }),
            n && e.blockInitialAnimation && (z = !1),
            z && (!B || H) && d.push(...te.map((re) => ({ animation: re, options: { type: b, ...u } })));
        }
        if (h.size) {
          let x = {};
          h.forEach((b) => {
            let y = e.getBaseTarget(b);
            y !== void 0 && (x[b] = y);
          }),
            d.push({ animation: x });
        }
        let S = !!d.length;
        return (
          n && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (S = !1),
          (n = !1),
          S ? t(d) : Promise.resolve()
        );
      }
      function s(u, l, c) {
        var p;
        if (r[u].isActive === l) return Promise.resolve();
        (p = e.variantChildren) === null ||
          p === void 0 ||
          p.forEach((h) => {
            var f;
            return (f = h.animationState) === null || f === void 0 ? void 0 : f.setActive(u, l);
          }),
          (r[u].isActive = l);
        let d = a(c, u);
        for (let h in r) r[h].protectedKeys = {};
        return d;
      }
      return { animateChanges: a, setActive: s, setAnimateFunction: o, getState: () => r };
    }
    function Zm(e, t) {
      return typeof t == "string" ? t !== e : Array.isArray(t) ? !Tl(t, e) : !1;
    }
    function xt(e = !1) {
      return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
    }
    function $m() {
      return { animate: xt(!0), whileInView: xt(), whileHover: xt(), whileTap: xt(), whileDrag: xt(), whileFocus: xt(), exit: xt() };
    }
    function og(e, t) {
      let r = ba(e.x, t.x),
        n = ba(e.y, t.y);
      return Math.sqrt(r ** 2 + n ** 2);
    }
    function Yn(e, t) {
      return t ? { point: t(e.point) } : e;
    }
    function xa(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function Gn({ point: e }, t) {
      return { point: e, delta: xa(e, Ql(t)), offset: xa(e, ig(t)), velocity: ag(t, 0.1) };
    }
    function ig(e) {
      return e[0];
    }
    function Ql(e) {
      return e[e.length - 1];
    }
    function ag(e, t) {
      if (e.length < 2) return { x: 0, y: 0 };
      let r = e.length - 1,
        n = null,
        i = Ql(e);
      for (; r >= 0 && ((n = e[r]), !(i.timestamp - n.timestamp > ct(t))); ) r--;
      if (!n) return { x: 0, y: 0 };
      let o = et(i.timestamp - n.timestamp);
      if (o === 0) return { x: 0, y: 0 };
      let a = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
      return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
    }
    function Re(e) {
      return e.max - e.min;
    }
    function co(e, t = 0, r = 0.01) {
      return Math.abs(e - t) <= r;
    }
    function wa(e, t, r, n = 0.5) {
      (e.origin = n),
        (e.originPoint = se(t.min, t.max, e.origin)),
        (e.scale = Re(r) / Re(t)),
        (co(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        (e.translate = se(r.min, r.max, e.origin) - e.originPoint),
        (co(e.translate) || isNaN(e.translate)) && (e.translate = 0);
    }
    function pr(e, t, r, n) {
      wa(e.x, t.x, r.x, n ? n.originX : void 0), wa(e.y, t.y, r.y, n ? n.originY : void 0);
    }
    function Ta(e, t, r) {
      (e.min = r.min + t.min), (e.max = e.min + Re(t));
    }
    function sg(e, t, r) {
      Ta(e.x, t.x, r.x), Ta(e.y, t.y, r.y);
    }
    function Ea(e, t, r) {
      (e.min = t.min - r.min), (e.max = e.min + Re(t));
    }
    function dr(e, t, r) {
      Ea(e.x, t.x, r.x), Ea(e.y, t.y, r.y);
    }
    function lg(e, { min: t, max: r }, n) {
      return (
        t !== void 0 && e < t
          ? (e = n ? se(t, e, n.min) : Math.max(e, t))
          : r !== void 0 && e > r && (e = n ? se(r, e, n.max) : Math.min(e, r)),
        e
      );
    }
    function Sa(e, t, r) {
      return { min: t !== void 0 ? e.min + t : void 0, max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0 };
    }
    function ug(e, { top: t, left: r, bottom: n, right: i }) {
      return { x: Sa(e.x, r, i), y: Sa(e.y, t, n) };
    }
    function Pa(e, t) {
      let r = t.min - e.min,
        n = t.max - e.max;
      return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
    }
    function cg(e, t) {
      return { x: Pa(e.x, t.x), y: Pa(e.y, t.y) };
    }
    function pg(e, t) {
      let r = 0.5,
        n = Re(e),
        i = Re(t);
      return i > n ? (r = gr(t.min, t.max - n, e.min)) : n > i && (r = gr(e.min, e.max - i, t.min)), ht(0, 1, r);
    }
    function dg(e, t) {
      let r = {};
      return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
    }
    function hg(e = po) {
      return e === !1 ? (e = 0) : e === !0 && (e = po), { x: Oa(e, "left", "right"), y: Oa(e, "top", "bottom") };
    }
    function Oa(e, t, r) {
      return { min: Ca(e, t), max: Ca(e, r) };
    }
    function Ca(e, t) {
      return typeof e == "number" ? e : e[t] || 0;
    }
    function Le(e) {
      return [e("x"), e("y")];
    }
    function Jl({ top: e, left: t, right: r, bottom: n }) {
      return { x: { min: t, max: r }, y: { min: e, max: n } };
    }
    function fg({ x: e, y: t }) {
      return { top: t.min, right: e.max, bottom: t.max, left: e.min };
    }
    function mg(e, t) {
      if (!t) return e;
      let r = t({ x: e.left, y: e.top }),
        n = t({ x: e.right, y: e.bottom });
      return { top: r.y, left: r.x, bottom: n.y, right: n.x };
    }
    function Xn(e) {
      return e === void 0 || e === 1;
    }
    function ho({ scale: e, scaleX: t, scaleY: r }) {
      return !Xn(e) || !Xn(t) || !Xn(r);
    }
    function wt(e) {
      return ho(e) || Zl(e) || e.z || e.rotate || e.rotateX || e.rotateY;
    }
    function Zl(e) {
      return Ia(e.x) || Ia(e.y);
    }
    function Ia(e) {
      return e && e !== "0%";
    }
    function sn(e, t, r) {
      let n = e - r,
        i = t * n;
      return r + i;
    }
    function ka(e, t, r, n, i) {
      return i !== void 0 && (e = sn(e, i, n)), sn(e, r, n) + t;
    }
    function fo(e, t = 0, r = 1, n, i) {
      (e.min = ka(e.min, t, r, n, i)), (e.max = ka(e.max, t, r, n, i));
    }
    function $l(e, { x: t, y: r }) {
      fo(e.x, t.translate, t.scale, t.originPoint), fo(e.y, r.translate, r.scale, r.originPoint);
    }
    function gg(e, t, r, n = !1) {
      let i = r.length;
      if (!i) return;
      t.x = t.y = 1;
      let o, a;
      for (let s = 0; s < i; s++) {
        (o = r[s]), (a = o.projectionDelta);
        let u = o.instance;
        (u && u.style && u.style.display === "contents") ||
          (n && o.options.layoutScroll && o.scroll && o !== o.root && jt(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
          a && ((t.x *= a.x.scale), (t.y *= a.y.scale), $l(e, a)),
          n && wt(o.latestValues) && jt(e, o.latestValues));
      }
      (t.x = Ma(t.x)), (t.y = Ma(t.y));
    }
    function Ma(e) {
      return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
    }
    function at(e, t) {
      (e.min = e.min + t), (e.max = e.max + t);
    }
    function Da(e, t, [r, n, i]) {
      let o = t[i] !== void 0 ? t[i] : 0.5,
        a = se(e.min, e.max, o);
      fo(e, t[r], t[n], a, t.scale);
    }
    function jt(e, t) {
      Da(e.x, t, yg), Da(e.y, t, vg);
    }
    function eu(e, t) {
      return Jl(mg(e.getBoundingClientRect(), t));
    }
    function bg(e, t, r) {
      let n = eu(e, r),
        { scroll: i } = t;
      return i && (at(n.x, i.offset.x), at(n.y, i.offset.y)), n;
    }
    function Hr(e, t, r) {
      return (t === !0 || t === e) && (r === null || r === e);
    }
    function Tg(e, t = 10) {
      let r = null;
      return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
    }
    function Pg() {
      let e = be(Co);
      if (e === null) return [!0, null];
      let { isPresent: t, onExitComplete: r, register: n } = e,
        i = On();
      return de(() => n(i), []), !t && r ? [!1, () => r && r(i)] : [!0];
    }
    function ja(e, t) {
      return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
    }
    function ru(e) {
      let [t, r] = Pg(),
        n = be(nl);
      return m.createElement(Cg, { ...e, layoutGroup: n, switchLayoutGroup: be(ol), isPresent: t, safeToRemove: r });
    }
    function Ig(e, t, r, n, i, o) {
      i
        ? ((e.opacity = se(0, r.opacity !== void 0 ? r.opacity : 1, kg(n))),
          (e.opacityExit = se(t.opacity !== void 0 ? t.opacity : 1, 0, Mg(n))))
        : o && (e.opacity = se(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
      for (let a = 0; a < Rg; a++) {
        let s = `border${nu[a]}Radius`,
          u = Fa(t, s),
          l = Fa(r, s);
        (u === void 0 && l === void 0) ||
          (u || (u = 0),
          l || (l = 0),
          u === 0 || l === 0 || Va(u) === Va(l)
            ? ((e[s] = Math.max(se(Na(u), Na(l), n), 0)), (Xe.test(l) || Xe.test(u)) && (e[s] += "%"))
            : (e[s] = l));
      }
      (t.rotate || r.rotate) && (e.rotate = se(t.rotate || 0, r.rotate || 0, n));
    }
    function Fa(e, t) {
      return e[t] !== void 0 ? e[t] : e.borderRadius;
    }
    function ou(e, t, r) {
      return (n) => (n < e ? 0 : n > t ? 1 : r(gr(e, t, n)));
    }
    function Ba(e, t) {
      (e.min = t.min), (e.max = t.max);
    }
    function Me(e, t) {
      Ba(e.x, t.x), Ba(e.y, t.y);
    }
    function za(e, t, r, n, i) {
      return (e -= t), (e = sn(e, 1 / r, n)), i !== void 0 && (e = sn(e, 1 / i, n)), e;
    }
    function Dg(e, t = 0, r = 1, n = 0.5, i, o = e, a = e) {
      if ((Xe.test(t) && ((t = parseFloat(t)), (t = se(a.min, a.max, t / 100) - a.min)), typeof t != "number")) return;
      let s = se(o.min, o.max, n);
      e === o && (s -= t), (e.min = za(e.min, t, r, s, i)), (e.max = za(e.max, t, r, s, i));
    }
    function _a(e, t, [r, n, i], o, a) {
      Dg(e, t[r], t[n], t[i], t.scale, o, a);
    }
    function Ha(e, t, r, n) {
      _a(e.x, t, Lg, r ? r.x : void 0, n ? n.x : void 0), _a(e.y, t, jg, r ? r.y : void 0, n ? n.y : void 0);
    }
    function Ua(e) {
      return e.translate === 0 && e.scale === 1;
    }
    function iu(e) {
      return Ua(e.x) && Ua(e.y);
    }
    function Ng(e, t) {
      return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
    }
    function au(e, t) {
      return (
        Math.round(e.x.min) === Math.round(t.x.min) &&
        Math.round(e.x.max) === Math.round(t.x.max) &&
        Math.round(e.y.min) === Math.round(t.y.min) &&
        Math.round(e.y.max) === Math.round(t.y.max)
      );
    }
    function Wa(e) {
      return Re(e.x) / Re(e.y);
    }
    function qa(e, t, r) {
      let n = "",
        i = e.x.translate / t.x,
        o = e.y.translate / t.y;
      if (((i || o) && (n = `translate3d(${i}px, ${o}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r)) {
        let { rotate: u, rotateX: l, rotateY: c } = r;
        u && (n += `rotate(${u}deg) `), l && (n += `rotateX(${l}deg) `), c && (n += `rotateY(${c}deg) `);
      }
      let a = e.x.scale * t.x,
        s = e.y.scale * t.y;
      return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
    }
    function zg(e, t) {
      let r = Pt.now(),
        n = ({ timestamp: i }) => {
          let o = i - r;
          o >= t && (tt(n), e(o - t));
        };
      return le.read(n, !0), () => tt(n);
    }
    function _g(e) {
      window.MotionDebug && window.MotionDebug.record(e);
    }
    function Hg(e) {
      return e instanceof SVGElement && e.tagName !== "svg";
    }
    function Ug(e, t, r) {
      let n = Ae(e) ? e : Bt(e);
      return n.start(Yo("", n, t, r)), n.animation;
    }
    function su({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: i }) {
      return class {
        constructor(o = {}, a = t?.()) {
          (this.id = qg++),
            (this.animationId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.updateScheduled = !1),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              (this.projectionUpdateScheduled = !1),
                (Tt.totalNodes = Tt.resolvedTargetDeltas = Tt.recalculatedProjection = 0),
                this.nodes.forEach(Xg),
                this.nodes.forEach($g),
                this.nodes.forEach(ey),
                this.nodes.forEach(Kg),
                _g(Tt);
            }),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = o),
            (this.root = a ? a.root || a : this),
            (this.path = a ? [...a.path, a] : []),
            (this.parent = a),
            (this.depth = a ? a.depth + 1 : 0);
          for (let s = 0; s < this.path.length; s++) this.path[s].shouldResetTransform = !0;
          this.root === this && (this.nodes = new Bg());
        }
        addEventListener(o, a) {
          return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Ko()), this.eventHandlers.get(o).add(a);
        }
        notifyListeners(o, ...a) {
          let s = this.eventHandlers.get(o);
          s && s.notify(...a);
        }
        hasListeners(o) {
          return this.eventHandlers.has(o);
        }
        mount(o, a = this.root.hasTreeAnimated) {
          if (this.instance) return;
          (this.isSVG = Hg(o)), (this.instance = o);
          let { layoutId: s, layout: u, visualElement: l } = this.options;
          if (
            (l && !l.current && l.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (u || s) && (this.isLayoutDirty = !0),
            e)
          ) {
            let c,
              p = () => (this.root.updateBlockedByResize = !1);
            e(o, () => {
              (this.root.updateBlockedByResize = !0),
                c && c(),
                (c = zg(p, 250)),
                Gr.hasAnimatedSinceResize && ((Gr.hasAnimatedSinceResize = !1), this.nodes.forEach(Ka));
            });
          }
          s && this.root.registerSharedNode(s, this),
            this.options.animate !== !1 &&
              l &&
              (s || u) &&
              this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: p, hasRelativeTargetChanged: d, layout: h }) => {
                if (this.isTreeAnimationBlocked()) {
                  (this.target = void 0), (this.relativeTarget = void 0);
                  return;
                }
                let f = this.options.transition || l.getDefaultTransition() || iy,
                  { onLayoutAnimationStart: v, onLayoutAnimationComplete: S } = l.getProps(),
                  x = !this.targetLayout || !au(this.targetLayout, h) || d,
                  b = !p && d;
                if (this.options.layoutRoot || (this.resumeFrom && this.resumeFrom.instance) || b || (p && (x || !this.currentAnimation))) {
                  this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)),
                    this.setAnimationOrigin(c, b);
                  let y = { ...qo(f, "layout"), onPlay: v, onComplete: S };
                  (l.shouldReduceMotion || this.options.layoutRoot) && ((y.delay = 0), (y.type = !1)), this.startAnimation(y);
                } else p || Ka(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h;
              });
        }
        unmount() {
          this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
          let o = this.getStack();
          o && o.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), tt(this.updateProjection);
        }
        blockUpdate() {
          this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
          this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
          return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
        }
        startUpdate() {
          this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(ty), this.animationId++);
        }
        getTransformTemplate() {
          let { visualElement: o } = this.options;
          return o && o.getProps().transformTemplate;
        }
        willUpdate(o = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
          this.isLayoutDirty = !0;
          for (let l = 0; l < this.path.length; l++) {
            let c = this.path[l];
            (c.shouldResetTransform = !0), c.updateScroll("snapshot"), c.options.layoutRoot && c.willUpdate(!1);
          }
          let { layoutId: a, layout: s } = this.options;
          if (a === void 0 && !s) return;
          let u = this.getTransformTemplate();
          (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate");
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Xa);
            return;
          }
          this.isUpdating || this.nodes.forEach(Jg),
            (this.isUpdating = !1),
            this.nodes.forEach(Zg),
            this.nodes.forEach(Yg),
            this.nodes.forEach(Gg),
            this.clearAllSnapshots();
          let o = Pt.now();
          (ve.delta = ht(0, 1e3 / 60, o - ve.timestamp)),
            (ve.timestamp = o),
            (ve.isProcessing = !0),
            Bn.update.process(ve),
            Bn.preRender.process(ve),
            Bn.render.process(ve),
            (ve.isProcessing = !1);
        }
        didUpdate() {
          this.updateScheduled || ((this.updateScheduled = !0), Ro.read(() => this.update()));
        }
        clearAllSnapshots() {
          this.nodes.forEach(Qg), this.sharedNodes.forEach(ry);
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled || ((this.projectionUpdateScheduled = !0), le.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          le.postRender(() => {
            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          this.snapshot || !this.instance || (this.snapshot = this.measure());
        }
        updateLayout() {
          if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
          if (this.resumeFrom && !this.resumeFrom.instance) for (let s = 0; s < this.path.length; s++) this.path[s].updateScroll();
          let o = this.layout;
          (this.layout = this.measure(!1)),
            (this.layoutCorrected = he()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox);
          let { visualElement: a } = this.options;
          a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
        }
        updateScroll(o = "measure") {
          let a = !!(this.options.layoutScroll && this.instance);
          this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && (this.scroll = { animationId: this.root.animationId, phase: o, isRoot: n(this.instance), offset: r(this.instance) });
        }
        resetTransform() {
          if (!i) return;
          let o = this.isLayoutDirty || this.shouldResetTransform,
            a = this.projectionDelta && !iu(this.projectionDelta),
            s = this.getTransformTemplate(),
            u = s ? s(this.latestValues, "") : void 0,
            l = u !== this.prevTransformTemplateValue;
          o && (a || wt(this.latestValues) || l) && (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
        }
        measure(o = !0) {
          let a = this.measurePageBox(),
            s = this.removeElementScroll(a);
          return (
            o && (s = this.removeTransform(s)),
            ay(s),
            { animationId: this.root.animationId, measuredBox: a, layoutBox: s, latestValues: {}, source: this.id }
          );
        }
        measurePageBox() {
          let { visualElement: o } = this.options;
          if (!o) return he();
          let a = o.measureViewportBox(),
            { scroll: s } = this.root;
          return s && (at(a.x, s.offset.x), at(a.y, s.offset.y)), a;
        }
        removeElementScroll(o) {
          let a = he();
          Me(a, o);
          for (let s = 0; s < this.path.length; s++) {
            let u = this.path[s],
              { scroll: l, options: c } = u;
            if (u !== this.root && l && c.layoutScroll) {
              if (l.isRoot) {
                Me(a, o);
                let { scroll: p } = this.root;
                p && (at(a.x, -p.offset.x), at(a.y, -p.offset.y));
              }
              at(a.x, l.offset.x), at(a.y, l.offset.y);
            }
          }
          return a;
        }
        applyTransform(o, a = !1) {
          let s = he();
          Me(s, o);
          for (let u = 0; u < this.path.length; u++) {
            let l = this.path[u];
            !a && l.options.layoutScroll && l.scroll && l !== l.root && jt(s, { x: -l.scroll.offset.x, y: -l.scroll.offset.y }),
              wt(l.latestValues) && jt(s, l.latestValues);
          }
          return wt(this.latestValues) && jt(s, this.latestValues), s;
        }
        removeTransform(o) {
          let a = he();
          Me(a, o);
          for (let s = 0; s < this.path.length; s++) {
            let u = this.path[s];
            if (!u.instance || !wt(u.latestValues)) continue;
            ho(u.latestValues) && u.updateSnapshot();
            let l = he(),
              c = u.measurePageBox();
            Me(l, c), Ha(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, l);
          }
          return wt(this.latestValues) && Ha(a, this.latestValues), a;
        }
        setTargetDelta(o) {
          (this.targetDelta = o), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
        }
        setOptions(o) {
          this.options = { ...this.options, ...o, crossfade: o.crossfade !== void 0 ? o.crossfade : !0 };
        }
        clearMeasurements() {
          (this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== ve.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(o = !1) {
          var a;
          let s = this.getLead();
          this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
          let u = !!this.resumingFrom || this !== s;
          if (
            !(
              o ||
              (u && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
              this.attemptToResolveRelativeTarget
            )
          )
            return;
          let { layout: l, layoutId: c } = this.options;
          if (!(!this.layout || !(l || c))) {
            if (((this.resolvedRelativeTargetAt = ve.timestamp), !this.targetDelta && !this.relativeTarget)) {
              let p = this.getClosestProjectingParent();
              p && p.layout && this.animationProgress !== 1
                ? ((this.relativeParent = p),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = he()),
                  (this.relativeTargetOrigin = he()),
                  dr(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox),
                  Me(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            if (!(!this.relativeTarget && !this.targetDelta)) {
              if (
                (this.target || ((this.target = he()), (this.targetWithTransforms = he())),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
                  ? (this.forceRelativeParentToResolveTarget(), sg(this.target, this.relativeTarget, this.relativeParent.target))
                  : this.targetDelta
                  ? (this.resumingFrom
                      ? (this.target = this.applyTransform(this.layout.layoutBox))
                      : Me(this.target, this.layout.layoutBox),
                    $l(this.target, this.targetDelta))
                  : Me(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)
              ) {
                this.attemptToResolveRelativeTarget = !1;
                let p = this.getClosestProjectingParent();
                p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1
                  ? ((this.relativeParent = p),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = he()),
                    (this.relativeTargetOrigin = he()),
                    dr(this.relativeTargetOrigin, this.target, p.target),
                    Me(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              Tt.resolvedTargetDeltas++;
            }
          }
        }
        getClosestProjectingParent() {
          if (!(!this.parent || ho(this.parent.latestValues) || Zl(this.parent.latestValues)))
            return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        calcProjection() {
          var o;
          let a = this.getLead(),
            s = !!this.resumingFrom || this !== a,
            u = !0;
          if (
            ((this.isProjectionDirty || (!((o = this.parent) === null || o === void 0) && o.isProjectionDirty)) && (u = !1),
            s && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === ve.timestamp && (u = !1),
            u)
          )
            return;
          let { layout: l, layoutId: c } = this.options;
          if (
            ((this.isTreeAnimating = !!((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(l || c))
          )
            return;
          Me(this.layoutCorrected, this.layout.layoutBox);
          let p = this.treeScale.x,
            d = this.treeScale.y;
          gg(this.layoutCorrected, this.treeScale, this.path, s),
            a.layout &&
              !a.target &&
              (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
              ((a.target = a.layout.layoutBox), (a.targetWithTransforms = he()));
          let { target: h } = a;
          if (!h) {
            this.projectionTransform && ((this.projectionDelta = Lt()), (this.projectionTransform = "none"), this.scheduleRender());
            return;
          }
          this.projectionDelta || ((this.projectionDelta = Lt()), (this.projectionDeltaWithTransform = Lt()));
          let f = this.projectionTransform;
          pr(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.projectionTransform = qa(this.projectionDelta, this.treeScale)),
            (this.projectionTransform !== f || this.treeScale.x !== p || this.treeScale.y !== d) &&
              ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", h)),
            Tt.recalculatedProjection++;
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(o = !0) {
          if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
            let a = this.getStack();
            a && a.scheduleRender();
          }
          this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
        }
        setAnimationOrigin(o, a = !1) {
          let s = this.snapshot,
            u = s ? s.latestValues : {},
            l = { ...this.latestValues },
            c = Lt();
          (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !a);
          let p = he(),
            d = s ? s.source : void 0,
            h = this.layout ? this.layout.source : void 0,
            f = d !== h,
            v = this.getStack(),
            S = !v || v.members.length <= 1,
            x = !!(f && !S && this.options.crossfade === !0 && !this.path.some(oy));
          this.animationProgress = 0;
          let b;
          (this.mixTargetDelta = (y) => {
            let P = y / 1e3;
            Qa(c.x, o.x, P),
              Qa(c.y, o.y, P),
              this.setTargetDelta(c),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout &&
                (dr(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                ny(this.relativeTarget, this.relativeTargetOrigin, p, P),
                b && Ng(this.relativeTarget, b) && (this.isProjectionDirty = !1),
                b || (b = he()),
                Me(b, this.relativeTarget)),
              f && ((this.animationValues = l), Ig(l, u, this.latestValues, P, x, S)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = P);
          }),
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(o) {
          this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (tt(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = le.update(() => {
              (Gr.hasAnimatedSinceResize = !0),
                (this.currentAnimation = Ug(0, Ga, {
                  ...o,
                  onUpdate: (a) => {
                    this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
                  },
                  onComplete: () => {
                    o.onComplete && o.onComplete(), this.completeAnimation();
                  },
                })),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0);
            }));
        }
        completeAnimation() {
          this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
          let o = this.getStack();
          o && o.exitAnimationComplete(),
            (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
          this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ga), this.currentAnimation.stop()), this.completeAnimation();
        }
        applyTransformsToTarget() {
          let o = this.getLead(),
            { targetWithTransforms: a, target: s, layout: u, latestValues: l } = o;
          if (!(!a || !s || !u)) {
            if (this !== o && this.layout && u && lu(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
              s = this.target || he();
              let c = Re(this.layout.layoutBox.x);
              (s.x.min = o.target.x.min), (s.x.max = s.x.min + c);
              let p = Re(this.layout.layoutBox.y);
              (s.y.min = o.target.y.min), (s.y.max = s.y.min + p);
            }
            Me(a, s), jt(a, l), pr(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
          }
        }
        registerSharedNode(o, a) {
          this.sharedNodes.has(o) || this.sharedNodes.set(o, new Vg()), this.sharedNodes.get(o).add(a);
          let s = a.options.initialPromotionConfig;
          a.promote({
            transition: s ? s.transition : void 0,
            preserveFollowOpacity: s && s.shouldPreserveFollowOpacity ? s.shouldPreserveFollowOpacity(a) : void 0,
          });
        }
        isLead() {
          let o = this.getStack();
          return o ? o.lead === this : !0;
        }
        getLead() {
          var o;
          let { layoutId: a } = this.options;
          return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
        }
        getPrevLead() {
          var o;
          let { layoutId: a } = this.options;
          return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead) : void 0;
        }
        getStack() {
          let { layoutId: o } = this.options;
          if (o) return this.root.sharedNodes.get(o);
        }
        promote({ needsReset: o, transition: a, preserveFollowOpacity: s } = {}) {
          let u = this.getStack();
          u && u.promote(this, s), o && ((this.projectionDelta = void 0), (this.needsReset = !0)), a && this.setOptions({ transition: a });
        }
        relegate() {
          let o = this.getStack();
          return o ? o.relegate(this) : !1;
        }
        resetRotation() {
          let { visualElement: o } = this.options;
          if (!o) return;
          let a = !1,
            { latestValues: s } = o;
          if (((s.rotate || s.rotateX || s.rotateY || s.rotateZ) && (a = !0), !a)) return;
          let u = {};
          for (let l = 0; l < Ya.length; l++) {
            let c = "rotate" + Ya[l];
            s[c] && ((u[c] = s[c]), o.setStaticValue(c, 0));
          }
          o.render();
          for (let l in u) o.setStaticValue(l, u[l]);
          o.scheduleRender();
        }
        getProjectionStyles(o) {
          var a, s;
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) return Wg;
          let u = { visibility: "" },
            l = this.getTransformTemplate();
          if (this.needsReset)
            return (
              (this.needsReset = !1),
              (u.opacity = ""),
              (u.pointerEvents = qr(o?.pointerEvents) || ""),
              (u.transform = l ? l(this.latestValues, "") : "none"),
              u
            );
          let c = this.getLead();
          if (!this.projectionDelta || !this.layout || !c.target) {
            let f = {};
            return (
              this.options.layoutId &&
                ((f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
                (f.pointerEvents = qr(o?.pointerEvents) || "")),
              this.hasProjected && !wt(this.latestValues) && ((f.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)),
              f
            );
          }
          let p = c.animationValues || c.latestValues;
          this.applyTransformsToTarget(),
            (u.transform = qa(this.projectionDeltaWithTransform, this.treeScale, p)),
            l && (u.transform = l(p, u.transform));
          let { x: d, y: h } = this.projectionDelta;
          (u.transformOrigin = `${d.origin * 100}% ${h.origin * 100}% 0`),
            c.animationValues
              ? (u.opacity =
                  c === this
                    ? (s = (a = p.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && s !== void 0
                      ? s
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : p.opacityExit)
              : (u.opacity = c === this ? (p.opacity !== void 0 ? p.opacity : "") : p.opacityExit !== void 0 ? p.opacityExit : 0);
          for (let f in Zr) {
            if (p[f] === void 0) continue;
            let { correct: v, applyTo: S } = Zr[f],
              x = u.transform === "none" ? p[f] : v(p[f], c);
            if (S) {
              let b = S.length;
              for (let y = 0; y < b; y++) u[S[y]] = x;
            } else u[f] = x;
          }
          return this.options.layoutId && (u.pointerEvents = c === this ? qr(o?.pointerEvents) || "" : "none"), u;
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          this.root.nodes.forEach((o) => {
            var a;
            return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
          }),
            this.root.nodes.forEach(Xa),
            this.root.sharedNodes.clear();
        }
      };
    }
    function Yg(e) {
      e.updateLayout();
    }
    function Gg(e) {
      var t;
      let r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
      if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
        let { layoutBox: n, measuredBox: i } = e.layout,
          { animationType: o } = e.options,
          a = r.source !== e.layout.source;
        o === "size"
          ? Le((p) => {
              let d = a ? r.measuredBox[p] : r.layoutBox[p],
                h = Re(d);
              (d.min = n[p].min), (d.max = d.min + h);
            })
          : lu(o, r.layoutBox, n) &&
            Le((p) => {
              let d = a ? r.measuredBox[p] : r.layoutBox[p],
                h = Re(n[p]);
              (d.max = d.min + h),
                e.relativeTarget &&
                  !e.currentAnimation &&
                  ((e.isProjectionDirty = !0), (e.relativeTarget[p].max = e.relativeTarget[p].min + h));
            });
        let s = Lt();
        pr(s, n, r.layoutBox);
        let u = Lt();
        a ? pr(u, e.applyTransform(i, !0), r.measuredBox) : pr(u, n, r.layoutBox);
        let l = !iu(s),
          c = !1;
        if (!e.resumeFrom) {
          let p = e.getClosestProjectingParent();
          if (p && !p.resumeFrom) {
            let { snapshot: d, layout: h } = p;
            if (d && h) {
              let f = he();
              dr(f, r.layoutBox, d.layoutBox);
              let v = he();
              dr(v, n, h.layoutBox),
                au(f, v) || (c = !0),
                p.options.layoutRoot && ((e.relativeTarget = v), (e.relativeTargetOrigin = f), (e.relativeParent = p));
            }
          }
        }
        e.notifyListeners("didUpdate", {
          layout: n,
          snapshot: r,
          delta: u,
          layoutDelta: s,
          hasLayoutChanged: l,
          hasRelativeTargetChanged: c,
        });
      } else if (e.isLead()) {
        let { onExitComplete: n } = e.options;
        n && n();
      }
      e.options.transition = void 0;
    }
    function Xg(e) {
      Tt.totalNodes++,
        e.parent &&
          (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
          e.isSharedProjectionDirty ||
            (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
          e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
    }
    function Kg(e) {
      e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
    }
    function Qg(e) {
      e.clearSnapshot();
    }
    function Xa(e) {
      e.clearMeasurements();
    }
    function Jg(e) {
      e.isLayoutDirty = !1;
    }
    function Zg(e) {
      let { visualElement: t } = e.options;
      t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
    }
    function Ka(e) {
      e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
    }
    function $g(e) {
      e.resolveTargetDelta();
    }
    function ey(e) {
      e.calcProjection();
    }
    function ty(e) {
      e.resetRotation();
    }
    function ry(e) {
      e.removeLeadSnapshot();
    }
    function Qa(e, t, r) {
      (e.translate = se(t.translate, 0, r)), (e.scale = se(t.scale, 1, r)), (e.origin = t.origin), (e.originPoint = t.originPoint);
    }
    function Ja(e, t, r, n) {
      (e.min = se(t.min, r.min, n)), (e.max = se(t.max, r.max, n));
    }
    function ny(e, t, r, n) {
      Ja(e.x, t.x, r.x, n), Ja(e.y, t.y, r.y, n);
    }
    function oy(e) {
      return e.animationValues && e.animationValues.opacityExit !== void 0;
    }
    function es(e) {
      (e.min = $a(e.min)), (e.max = $a(e.max));
    }
    function ay(e) {
      es(e.x), es(e.y);
    }
    function lu(e, t, r) {
      return e === "position" || (e === "preserve-aspect" && !co(Wa(t), Wa(r), 0.2));
    }
    function cy(e) {
      let t = uy.exec(e);
      if (!t) return [,];
      let [, r, n] = t;
      return [r, n];
    }
    function mo(e, t, r = 1) {
      Fe(r <= py, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
      let [n, i] = cy(e);
      if (!n) return;
      let o = window.getComputedStyle(t).getPropertyValue(n);
      if (o) {
        let a = o.trim();
        return ql(a) ? parseFloat(a) : a;
      } else return $r(i) ? mo(i, t, r + 1) : i;
    }
    function dy(e, { ...t }, r) {
      let n = e.current;
      if (!(n instanceof Element)) return { target: t, transitionEnd: r };
      r && (r = { ...r }),
        e.values.forEach((i) => {
          let o = i.get();
          if (!$r(o)) return;
          let a = mo(o, n);
          a && i.set(a);
        });
      for (let i in t) {
        let o = t[i];
        if (!$r(o)) continue;
        let a = mo(o, n);
        a && ((t[i] = a), r || (r = {}), r[i] === void 0 && (r[i] = o));
      }
      return { target: t, transitionEnd: r };
    }
    function yy(e) {
      let t = [];
      return (
        gy.forEach((r) => {
          let n = e.getValue(r);
          n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
        }),
        t.length && e.render(),
        t
      );
    }
    function xy(e, t, r, n) {
      return fy(t) ? by(e, t, r, n) : { target: t, transitionEnd: n };
    }
    function Ty() {
      if (((pu.current = !0), !!fn))
        if (window.matchMedia) {
          let e = window.matchMedia("(prefers-reduced-motion)"),
            t = () => (go.current = e.matches);
          e.addListener(t), t();
        } else go.current = !1;
    }
    function Ey(e, t, r) {
      let { willChange: n } = t;
      for (let i in t) {
        let o = t[i],
          a = r[i];
        if (Ae(o))
          e.addValue(i, o),
            an(n) && n.add(i),
            Qo(o.version === "11.0.6", `Attempting to mix Framer Motion versions ${o.version} with 11.0.6 may not work as expected.`);
        else if (Ae(a)) e.addValue(i, Bt(o, { owner: e })), an(n) && n.remove(i);
        else if (a !== o)
          if (e.hasValue(i)) {
            let s = e.getValue(i);
            !s.hasAnimated && s.set(o);
          } else {
            let s = e.getStaticValue(i);
            e.addValue(i, Bt(s !== void 0 ? s : o, { owner: e }));
          }
      }
      for (let i in r) t[i] === void 0 && e.removeValue(i);
      return t;
    }
    function Cy(e) {
      return window.getComputedStyle(e);
    }
    function Yy() {
      let [e, t] = Pe(null);
      return (
        de(() => {
          (async () => {
            try {
              let r = (await (await fetch("/index.json")).json()).entries["example-button--primary"].importPath;
              t({ data: r, error: null });
            } catch (r) {
              t({ data: null, error: r });
            }
          })();
        }, []),
        e
      );
    }
    function nv() {
      let [e, t] = Pe({ data: null, error: null });
      return (
        de(() => {
          (async () => {
            try {
              let r = (await (await fetch("/project.json")).json())?.language === "javascript" ? ev : rv;
              t({ data: r, error: null });
            } catch (r) {
              t({ data: null, error: r });
            }
          })();
        }, []),
        e
      );
    }
    function iv({ api: e }) {
      let [t, r] = Pe(!0),
        [n, i] = Pe(!1),
        [o, a] = Pe("1:Welcome"),
        { data: s } = nv(),
        u = Rt(() => {
          let l = new URL(window.location.href),
            c = decodeURIComponent(l.searchParams.get("path"));
          (l.search = `?path=${c}&onboarding=false`),
            history.replaceState({}, "", l.href),
            e.setQueryParams({ onboarding: "false" }),
            r(!1);
        }, [r, e]);
      return (
        de(() => {
          e.emit(lr, { step: "1:Welcome", type: "telemetry" });
        }, []),
        de(() => {
          o !== "1:Welcome" && e.emit(lr, { step: o, type: "telemetry" });
        }, [e, o]),
        de(() => {
          let l;
          return (
            o === "4:VisitNewStory" &&
              (i(!0),
              (l = window.setTimeout(() => {
                a("5:ConfigureYourProject");
              }, 2e3))),
            () => {
              clearTimeout(l);
            }
          );
        }, [o]),
        de(() => {
          let l = e.getCurrentStoryData()?.id;
          if ((e.setQueryParams({ onboarding: "true" }), l !== "example-button--primary"))
            try {
              e.selectStory("example-button--primary", void 0, { ref: void 0 });
            } catch {}
        }, []),
        t
          ? m.createElement(
              kn,
              { theme: ov },
              t &&
                n &&
                m.createElement(Ks, {
                  numberOfPieces: 800,
                  recycle: !1,
                  tweenDuration: 2e4,
                  onConfettiComplete: (l) => {
                    l?.reset(), i(!1);
                  },
                }),
              t &&
                o === "1:Welcome" &&
                m.createElement(uh, {
                  onProceed: () => {
                    a("2:StorybookTour");
                  },
                  skipOnboarding: () => {
                    u(), e.emit(lr, { step: "X:SkippedOnboarding", where: "WelcomeModal", type: "telemetry" });
                  },
                }),
              t &&
                (o === "2:StorybookTour" || o === "5:ConfigureYourProject") &&
                m.createElement(Gd, {
                  api: e,
                  isFinalStep: o === "5:ConfigureYourProject",
                  onFirstTourDone: () => {
                    a("3:WriteYourStory");
                  },
                  codeSnippets: s || void 0,
                  onLastTourDone: () => {
                    try {
                      e.selectStory("configure-your-project--docs");
                    } catch {}
                    e.emit(lr, { step: "6:FinishedOnboarding", type: "telemetry" }), u();
                  },
                }),
              t &&
                o === "3:WriteYourStory" &&
                s &&
                m.createElement(Zy, {
                  api: e,
                  codeSnippets: s,
                  addonsStore: jr,
                  onFinish: () => {
                    e.selectStory("example-button--warning"), a("4:VisitNewStory");
                  },
                  skipOnboarding: u,
                })
            )
          : null
      );
    }
    var is,
      Hu,
      ln,
      Uu,
      yo,
      Wu,
      qu,
      as,
      Ie,
      Yu,
      ss,
      mt,
      Gu,
      Xu,
      Ku,
      vo,
      Qu,
      ls,
      Ju,
      us,
      cs,
      Zu,
      $u,
      ec,
      tc,
      rc,
      ps,
      oc,
      ds,
      xi,
      wi,
      hs,
      ic,
      ac,
      sc,
      Ti,
      Ei,
      lc,
      hc,
      fc,
      yc,
      N,
      wc,
      gs,
      Nr,
      Ln,
      I,
      yr,
      Sc,
      Cc,
      Ac,
      Ri,
      Ii,
      kc,
      Mc,
      Ft,
      je,
      Yc,
      Ms,
      jn,
      Nn,
      ip,
      ap,
      cn,
      Li,
      eo,
      sp,
      lp,
      up,
      F,
      dp,
      hp,
      ji,
      Ni,
      fp,
      to,
      Cp,
      Ap,
      Rp,
      $,
      tr,
      Vs,
      Fs,
      Vp,
      _s,
      Hs,
      Fp,
      zp,
      _p,
      Oo,
      Hp,
      Up,
      Wp,
      V,
      ee,
      Ve,
      X,
      Q,
      rr,
      td,
      qs,
      rd,
      nd,
      od,
      nr,
      Xi,
      Gs,
      Qi,
      sd,
      ud,
      cd,
      dd,
      hd,
      fd,
      gd,
      vd,
      bd,
      xd,
      Xs,
      wd,
      Ed,
      Od,
      De,
      Cd,
      Ad,
      Rd,
      Id,
      kd,
      Md,
      Dd,
      Ld,
      jd,
      Nd,
      Vd,
      Fd,
      Wr,
      Fn,
      Bd,
      zd,
      _d,
      Hd,
      Ud,
      Wd,
      qd,
      Fr,
      Yd,
      Kd,
      Qd,
      Jd,
      Zd,
      $d,
      eh,
      th,
      rh,
      nh,
      oh,
      ih,
      ah,
      sh,
      lh,
      uh,
      Ji,
      hh,
      fh,
      Js,
      hn,
      Co,
      fn,
      mh,
      Zs,
      Ao,
      gh,
      $s,
      el,
      Zi,
      Br,
      vh,
      Ro,
      xS,
      Io,
      ko,
      ea,
      mr,
      nl,
      ol,
      Sh,
      Ah,
      Zr,
      Pr,
      Ct,
      Ae,
      Ih,
      kh,
      al,
      sl,
      Dh,
      $r,
      Lh,
      jh,
      ht,
      Wt,
      ur,
      zr,
      cr,
      Do,
      Nh,
      Vh,
      Cr,
      it,
      Xe,
      _,
      Fh,
      Bh,
      ta,
      ra,
      ll,
      jo,
      Uh,
      cl,
      Gh,
      Xh,
      pl,
      Vo,
      hl,
      tn,
      $h,
      ef,
      gl,
      fe,
      le,
      tt,
      ve,
      Bn,
      nf,
      of,
      yl,
      sf,
      lf,
      $e,
      oa,
      ia,
      gt,
      uf,
      cf,
      wl,
      pf,
      no,
      _n,
      df,
      hf,
      gf,
      yf,
      bf,
      Ar,
      Fe,
      ct,
      et,
      Tf,
      El,
      sr,
      Pl,
      Cl,
      Pf,
      Of,
      Af,
      Rf,
      Al,
      If,
      Rl,
      Il,
      zo,
      kl,
      kf,
      Ml,
      _o,
      Mf,
      Df,
      sa,
      la,
      gr,
      se,
      Ho,
      Dl,
      jf,
      Un,
      St,
      oo,
      Dt,
      Wn,
      Vf,
      Ff,
      ca,
      xe,
      Ll,
      jl,
      zf,
      _f,
      pa,
      da,
      Hf,
      ft,
      Gf,
      em,
      qn,
      tm,
      ha,
      rm,
      nm,
      im,
      sm,
      lm,
      Yr,
      Pt,
      pm,
      dm,
      hm,
      mm,
      gm,
      _r,
      ym,
      vm,
      wm,
      Tm,
      Em,
      Sm,
      Pm,
      so,
      Om,
      Am,
      lo,
      Rm,
      Wo,
      Wl,
      Yo,
      ql,
      Ko,
      ya,
      va,
      Dm,
      Lm,
      Yl,
      jm,
      Gl,
      ir,
      Nm,
      Vm,
      Xm,
      Km,
      eg,
      tg,
      rg,
      ng,
      ba,
      Kl,
      po,
      Aa,
      Lt,
      Ra,
      he,
      yg,
      vg,
      tu,
      xg,
      wg,
      Eg,
      La,
      Sg,
      Gr,
      ar,
      Og,
      Cg,
      Ag,
      nu,
      Rg,
      Na,
      Va,
      kg,
      Mg,
      Lg,
      jg,
      Vg,
      Fg,
      Bg,
      Ya,
      Wg,
      Ga,
      qg,
      Tt,
      iy,
      Za,
      $a,
      sy,
      Kn,
      uu,
      ly,
      uy,
      py,
      hy,
      cu,
      fy,
      Ur,
      ts,
      rs,
      my,
      gy,
      zt,
      vy,
      by,
      wy,
      go,
      pu,
      ns,
      du,
      Sy,
      os,
      Py,
      Oy,
      hu,
      Ay,
      Ry,
      Iy,
      ky,
      My,
      qt,
      Dy,
      Ly,
      jy,
      Ny,
      Vy,
      Fy,
      By,
      zy,
      _y,
      Hy,
      Uy,
      Wy,
      qy,
      Qn,
      Gy,
      Xy,
      Ky,
      Qy,
      Jy,
      lr,
      Zy,
      $y,
      ev,
      tv,
      rv,
      ov,
      mu = Ne(() => {
        oe();
        ie();
        ae();
        It();
        It();
        di();
        An();
        kr();
        kr();
        In();
        is = Eu(hi());
        fi();
        bi();
        (Hu = Object.create),
          (ln = Object.defineProperty),
          (Uu = Object.getOwnPropertyDescriptor),
          (yo = Object.getOwnPropertyNames),
          (Wu = Object.getPrototypeOf),
          (qu = Object.prototype.hasOwnProperty),
          (as = (e, t) =>
            function () {
              return e && (t = (0, e[yo(e)[0]])((e = 0))), t;
            }),
          (Ie = (e, t) =>
            function () {
              return t || (0, e[yo(e)[0]])((t = { exports: {} }).exports, t), t.exports;
            }),
          (Yu = (e, t) => {
            for (var r in t) ln(e, r, { get: t[r], enumerable: !0 });
          }),
          (ss = (e, t, r, n) => {
            if ((t && typeof t == "object") || typeof t == "function")
              for (let i of yo(t)) !qu.call(e, i) && i !== r && ln(e, i, { get: () => t[i], enumerable: !(n = Uu(t, i)) || n.enumerable });
            return e;
          }),
          (mt = (e, t, r) => (
            (r = e != null ? Hu(Wu(e)) : {}), ss(t || !e || !e.__esModule ? ln(r, "default", { value: e, enumerable: !0 }) : r, e)
          )),
          (Gu = (e) => ss(ln({}, "__esModule", { value: !0 }), e)),
          (Xu = Ie({
            "../../node_modules/scroll/index.js"(e, t) {
              var r = new Error("Element already at target scroll position"),
                n = new Error("Scroll cancelled"),
                i = Math.min,
                o = Date.now;
              t.exports = { left: a("scrollLeft"), top: a("scrollTop") };
              function a(l) {
                return function (c, p, d, h) {
                  (d = d || {}), typeof d == "function" && ((h = d), (d = {})), typeof h != "function" && (h = u);
                  var f = o(),
                    v = c[l],
                    S = d.ease || s,
                    x = isNaN(d.duration) ? 350 : +d.duration,
                    b = !1;
                  return v === p ? h(r, c[l]) : requestAnimationFrame(P), y;
                  function y() {
                    b = !0;
                  }
                  function P(O) {
                    if (b) return h(n, c[l]);
                    var W = o(),
                      B = i(1, (W - f) / x),
                      z = S(B);
                    (c[l] = z * (p - v) + v),
                      B < 1
                        ? requestAnimationFrame(P)
                        : requestAnimationFrame(function () {
                            h(null, c[l]);
                          });
                  }
                };
              }
              function s(l) {
                return 0.5 * (1 - Math.cos(Math.PI * l));
              }
              function u() {}
            },
          })),
          (Ku = Ie({
            "../../node_modules/scrollparent/scrollparent.js"(e, t) {
              (function (r, n) {
                typeof define == "function" && define.amd
                  ? define([], n)
                  : typeof t == "object" && t.exports
                  ? (t.exports = n())
                  : (r.Scrollparent = n());
              })(e, function () {
                function r(i) {
                  var o = getComputedStyle(i, null).getPropertyValue("overflow");
                  return o.indexOf("scroll") > -1 || o.indexOf("auto") > -1;
                }
                function n(i) {
                  if (i instanceof HTMLElement || i instanceof SVGElement) {
                    for (var o = i.parentNode; o.parentNode; ) {
                      if (r(o)) return o;
                      o = o.parentNode;
                    }
                    return document.scrollingElement || document.documentElement;
                  }
                }
                return n;
              });
            },
          })),
          (vo = Ie({
            "../../node_modules/deepmerge/dist/cjs.js"(e, t) {
              var r = function (y) {
                return n(y) && !i(y);
              };
              function n(y) {
                return !!y && typeof y == "object";
              }
              function i(y) {
                var P = Object.prototype.toString.call(y);
                return P === "[object RegExp]" || P === "[object Date]" || s(y);
              }
              var o = typeof Symbol == "function" && Symbol.for,
                a = o ? Symbol.for("react.element") : 60103;
              function s(y) {
                return y.$$typeof === a;
              }
              function u(y) {
                return Array.isArray(y) ? [] : {};
              }
              function l(y, P) {
                return P.clone !== !1 && P.isMergeableObject(y) ? x(u(y), y, P) : y;
              }
              function c(y, P, O) {
                return y.concat(P).map(function (W) {
                  return l(W, O);
                });
              }
              function p(y, P) {
                if (!P.customMerge) return x;
                var O = P.customMerge(y);
                return typeof O == "function" ? O : x;
              }
              function d(y) {
                return Object.getOwnPropertySymbols
                  ? Object.getOwnPropertySymbols(y).filter(function (P) {
                      return Object.propertyIsEnumerable.call(y, P);
                    })
                  : [];
              }
              function h(y) {
                return Object.keys(y).concat(d(y));
              }
              function f(y, P) {
                try {
                  return P in y;
                } catch {
                  return !1;
                }
              }
              function v(y, P) {
                return f(y, P) && !(Object.hasOwnProperty.call(y, P) && Object.propertyIsEnumerable.call(y, P));
              }
              function S(y, P, O) {
                var W = {};
                return (
                  O.isMergeableObject(y) &&
                    h(y).forEach(function (B) {
                      W[B] = l(y[B], O);
                    }),
                  h(P).forEach(function (B) {
                    v(y, B) || (f(y, B) && O.isMergeableObject(P[B]) ? (W[B] = p(B, O)(y[B], P[B], O)) : (W[B] = l(P[B], O)));
                  }),
                  W
                );
              }
              function x(y, P, O) {
                (O = O || {}),
                  (O.arrayMerge = O.arrayMerge || c),
                  (O.isMergeableObject = O.isMergeableObject || r),
                  (O.cloneUnlessOtherwiseSpecified = l);
                var W = Array.isArray(P),
                  B = Array.isArray(y),
                  z = W === B;
                return z ? (W ? O.arrayMerge(y, P, O) : S(y, P, O)) : l(P, O);
              }
              x.all = function (y, P) {
                if (!Array.isArray(y)) throw new Error("first argument should be an array");
                return y.reduce(function (O, W) {
                  return x(O, W, P);
                }, {});
              };
              var b = x;
              t.exports = b;
            },
          })),
          (Qu = Ie({
            "../../node_modules/react-is/cjs/react-is.development.js"(e) {
              (function () {
                var t = typeof Symbol == "function" && Symbol.for,
                  r = t ? Symbol.for("react.element") : 60103,
                  n = t ? Symbol.for("react.portal") : 60106,
                  i = t ? Symbol.for("react.fragment") : 60107,
                  o = t ? Symbol.for("react.strict_mode") : 60108,
                  a = t ? Symbol.for("react.profiler") : 60114,
                  s = t ? Symbol.for("react.provider") : 60109,
                  u = t ? Symbol.for("react.context") : 60110,
                  l = t ? Symbol.for("react.async_mode") : 60111,
                  c = t ? Symbol.for("react.concurrent_mode") : 60111,
                  p = t ? Symbol.for("react.forward_ref") : 60112,
                  d = t ? Symbol.for("react.suspense") : 60113,
                  h = t ? Symbol.for("react.suspense_list") : 60120,
                  f = t ? Symbol.for("react.memo") : 60115,
                  v = t ? Symbol.for("react.lazy") : 60116,
                  S = t ? Symbol.for("react.block") : 60121,
                  x = t ? Symbol.for("react.fundamental") : 60117,
                  b = t ? Symbol.for("react.responder") : 60118,
                  y = t ? Symbol.for("react.scope") : 60119;
                function P(C) {
                  return (
                    typeof C == "string" ||
                    typeof C == "function" ||
                    C === i ||
                    C === c ||
                    C === a ||
                    C === o ||
                    C === d ||
                    C === h ||
                    (typeof C == "object" &&
                      C !== null &&
                      (C.$$typeof === v ||
                        C.$$typeof === f ||
                        C.$$typeof === s ||
                        C.$$typeof === u ||
                        C.$$typeof === p ||
                        C.$$typeof === x ||
                        C.$$typeof === b ||
                        C.$$typeof === y ||
                        C.$$typeof === S))
                  );
                }
                function O(C) {
                  if (typeof C == "object" && C !== null) {
                    var G = C.$$typeof;
                    switch (G) {
                      case r:
                        var K = C.type;
                        switch (K) {
                          case l:
                          case c:
                          case i:
                          case a:
                          case o:
                          case d:
                            return K;
                          default:
                            var pe = K && K.$$typeof;
                            switch (pe) {
                              case u:
                              case p:
                              case v:
                              case f:
                              case s:
                                return pe;
                              default:
                                return G;
                            }
                        }
                      case n:
                        return G;
                    }
                  }
                }
                var W = l,
                  B = c,
                  z = u,
                  H = s,
                  te = r,
                  ce = p,
                  Te = i,
                  ye = v,
                  ue = f,
                  re = n,
                  me = a,
                  ke = o,
                  ge = d,
                  Ee = !1;
                function _e(C) {
                  return (
                    Ee ||
                      ((Ee = !0),
                      console.warn(
                        "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                      )),
                    Z(C) || O(C) === l
                  );
                }
                function Z(C) {
                  return O(C) === c;
                }
                function A(C) {
                  return O(C) === u;
                }
                function D(C) {
                  return O(C) === s;
                }
                function q(C) {
                  return typeof C == "object" && C !== null && C.$$typeof === r;
                }
                function Y(C) {
                  return O(C) === p;
                }
                function g(C) {
                  return O(C) === i;
                }
                function w(C) {
                  return O(C) === v;
                }
                function E(C) {
                  return O(C) === f;
                }
                function T(C) {
                  return O(C) === n;
                }
                function M(C) {
                  return O(C) === a;
                }
                function k(C) {
                  return O(C) === o;
                }
                function R(C) {
                  return O(C) === d;
                }
                (e.AsyncMode = W),
                  (e.ConcurrentMode = B),
                  (e.ContextConsumer = z),
                  (e.ContextProvider = H),
                  (e.Element = te),
                  (e.ForwardRef = ce),
                  (e.Fragment = Te),
                  (e.Lazy = ye),
                  (e.Memo = ue),
                  (e.Portal = re),
                  (e.Profiler = me),
                  (e.StrictMode = ke),
                  (e.Suspense = ge),
                  (e.isAsyncMode = _e),
                  (e.isConcurrentMode = Z),
                  (e.isContextConsumer = A),
                  (e.isContextProvider = D),
                  (e.isElement = q),
                  (e.isForwardRef = Y),
                  (e.isFragment = g),
                  (e.isLazy = w),
                  (e.isMemo = E),
                  (e.isPortal = T),
                  (e.isProfiler = M),
                  (e.isStrictMode = k),
                  (e.isSuspense = R),
                  (e.isValidElementType = P),
                  (e.typeOf = O);
              })();
            },
          })),
          (ls = Ie({
            "../../node_modules/react-is/index.js"(e, t) {
              t.exports = Qu();
            },
          })),
          (Ju = Ie({
            "../../node_modules/object-assign/index.js"(e, t) {
              var r = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable;
              function o(s) {
                if (s == null) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(s);
              }
              function a() {
                try {
                  if (!Object.assign) return !1;
                  var s = new String("abc");
                  if (((s[5] = "de"), Object.getOwnPropertyNames(s)[0] === "5")) return !1;
                  for (var u = {}, l = 0; l < 10; l++) u["_" + String.fromCharCode(l)] = l;
                  var c = Object.getOwnPropertyNames(u).map(function (d) {
                    return u[d];
                  });
                  if (c.join("") !== "0123456789") return !1;
                  var p = {};
                  return (
                    "abcdefghijklmnopqrst".split("").forEach(function (d) {
                      p[d] = d;
                    }),
                    Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst"
                  );
                } catch {
                  return !1;
                }
              }
              t.exports = a()
                ? Object.assign
                : function (s, u) {
                    for (var l, c = o(s), p, d = 1; d < arguments.length; d++) {
                      l = Object(arguments[d]);
                      for (var h in l) n.call(l, h) && (c[h] = l[h]);
                      if (r) {
                        p = r(l);
                        for (var f = 0; f < p.length; f++) i.call(l, p[f]) && (c[p[f]] = l[p[f]]);
                      }
                    }
                    return c;
                  };
            },
          })),
          (us = Ie({
            "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(e, t) {
              var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
              t.exports = r;
            },
          })),
          (cs = Ie({
            "../../node_modules/prop-types/lib/has.js"(e, t) {
              t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
            },
          })),
          (Zu = Ie({
            "../../node_modules/prop-types/checkPropTypes.js"(e, t) {
              var r = function () {};
              (n = us()),
                (i = {}),
                (o = cs()),
                (r = function (s) {
                  var u = "Warning: " + s;
                  typeof console < "u" && console.error(u);
                  try {
                    throw new Error(u);
                  } catch {}
                });
              var n, i, o;
              function a(s, u, l, c, p) {
                for (var d in s)
                  if (o(s, d)) {
                    var h;
                    try {
                      if (typeof s[d] != "function") {
                        var f = Error(
                          (c || "React class") +
                            ": " +
                            l +
                            " type `" +
                            d +
                            "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                            typeof s[d] +
                            "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                        );
                        throw ((f.name = "Invariant Violation"), f);
                      }
                      h = s[d](u, d, c, l, null, n);
                    } catch (S) {
                      h = S;
                    }
                    if (
                      (h &&
                        !(h instanceof Error) &&
                        r(
                          (c || "React class") +
                            ": type specification of " +
                            l +
                            " `" +
                            d +
                            "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                            typeof h +
                            ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                        ),
                      h instanceof Error && !(h.message in i))
                    ) {
                      i[h.message] = !0;
                      var v = p ? p() : "";
                      r("Failed " + l + " type: " + h.message + (v ?? ""));
                    }
                  }
              }
              (a.resetWarningCache = function () {
                i = {};
              }),
                (t.exports = a);
            },
          })),
          ($u = Ie({
            "../../node_modules/prop-types/factoryWithTypeCheckers.js"(e, t) {
              var r = ls(),
                n = Ju(),
                i = us(),
                o = cs(),
                a = Zu(),
                s = function () {};
              s = function (l) {
                var c = "Warning: " + l;
                typeof console < "u" && console.error(c);
                try {
                  throw new Error(c);
                } catch {}
              };
              function u() {
                return null;
              }
              t.exports = function (l, c) {
                var p = typeof Symbol == "function" && Symbol.iterator,
                  d = "@@iterator";
                function h(A) {
                  var D = A && ((p && A[p]) || A[d]);
                  if (typeof D == "function") return D;
                }
                var f = "<<anonymous>>",
                  v = {
                    array: y("array"),
                    bigint: y("bigint"),
                    bool: y("boolean"),
                    func: y("function"),
                    number: y("number"),
                    object: y("object"),
                    string: y("string"),
                    symbol: y("symbol"),
                    any: P(),
                    arrayOf: O,
                    element: W(),
                    elementType: B(),
                    instanceOf: z,
                    node: Te(),
                    objectOf: te,
                    oneOf: H,
                    oneOfType: ce,
                    shape: ue,
                    exact: re,
                  };
                function S(A, D) {
                  return A === D ? A !== 0 || 1 / A === 1 / D : A !== A && D !== D;
                }
                function x(A, D) {
                  (this.message = A), (this.data = D && typeof D == "object" ? D : {}), (this.stack = "");
                }
                x.prototype = Error.prototype;
                function b(A) {
                  var D = {},
                    q = 0;
                  function Y(w, E, T, M, k, R, C) {
                    if (((M = M || f), (R = R || T), C !== i)) {
                      if (c) {
                        var G = new Error(
                          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                        );
                        throw ((G.name = "Invariant Violation"), G);
                      } else if (typeof console < "u") {
                        var K = M + ":" + T;
                        !D[K] &&
                          q < 3 &&
                          (s(
                            "You are manually calling a React.PropTypes validation function for the `" +
                              R +
                              "` prop on `" +
                              M +
                              "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                          ),
                          (D[K] = !0),
                          q++);
                      }
                    }
                    return E[T] == null
                      ? w
                        ? E[T] === null
                          ? new x("The " + k + " `" + R + "` is marked as required " + ("in `" + M + "`, but its value is `null`."))
                          : new x("The " + k + " `" + R + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`."))
                        : null
                      : A(E, T, M, k, R);
                  }
                  var g = Y.bind(null, !1);
                  return (g.isRequired = Y.bind(null, !0)), g;
                }
                function y(A) {
                  function D(q, Y, g, w, E, T) {
                    var M = q[Y],
                      k = ge(M);
                    if (k !== A) {
                      var R = Ee(M);
                      return new x(
                        "Invalid " + w + " `" + E + "` of type " + ("`" + R + "` supplied to `" + g + "`, expected ") + ("`" + A + "`."),
                        { expectedType: A }
                      );
                    }
                    return null;
                  }
                  return b(D);
                }
                function P() {
                  return b(u);
                }
                function O(A) {
                  function D(q, Y, g, w, E) {
                    if (typeof A != "function")
                      return new x("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
                    var T = q[Y];
                    if (!Array.isArray(T)) {
                      var M = ge(T);
                      return new x("Invalid " + w + " `" + E + "` of type " + ("`" + M + "` supplied to `" + g + "`, expected an array."));
                    }
                    for (var k = 0; k < T.length; k++) {
                      var R = A(T, k, g, w, E + "[" + k + "]", i);
                      if (R instanceof Error) return R;
                    }
                    return null;
                  }
                  return b(D);
                }
                function W() {
                  function A(D, q, Y, g, w) {
                    var E = D[q];
                    if (!l(E)) {
                      var T = ge(E);
                      return new x(
                        "Invalid " + g + " `" + w + "` of type " + ("`" + T + "` supplied to `" + Y + "`, expected a single ReactElement.")
                      );
                    }
                    return null;
                  }
                  return b(A);
                }
                function B() {
                  function A(D, q, Y, g, w) {
                    var E = D[q];
                    if (!r.isValidElementType(E)) {
                      var T = ge(E);
                      return new x(
                        "Invalid " +
                          g +
                          " `" +
                          w +
                          "` of type " +
                          ("`" + T + "` supplied to `" + Y + "`, expected a single ReactElement type.")
                      );
                    }
                    return null;
                  }
                  return b(A);
                }
                function z(A) {
                  function D(q, Y, g, w, E) {
                    if (!(q[Y] instanceof A)) {
                      var T = A.name || f,
                        M = Z(q[Y]);
                      return new x(
                        "Invalid " +
                          w +
                          " `" +
                          E +
                          "` of type " +
                          ("`" + M + "` supplied to `" + g + "`, expected ") +
                          ("instance of `" + T + "`.")
                      );
                    }
                    return null;
                  }
                  return b(D);
                }
                function H(A) {
                  if (!Array.isArray(A))
                    return (
                      arguments.length > 1
                        ? s(
                            "Invalid arguments supplied to oneOf, expected an array, got " +
                              arguments.length +
                              " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                          )
                        : s("Invalid argument supplied to oneOf, expected an array."),
                      u
                    );
                  function D(q, Y, g, w, E) {
                    for (var T = q[Y], M = 0; M < A.length; M++) if (S(T, A[M])) return null;
                    var k = JSON.stringify(A, function (R, C) {
                      var G = Ee(C);
                      return G === "symbol" ? String(C) : C;
                    });
                    return new x(
                      "Invalid " +
                        w +
                        " `" +
                        E +
                        "` of value `" +
                        String(T) +
                        "` " +
                        ("supplied to `" + g + "`, expected one of " + k + ".")
                    );
                  }
                  return b(D);
                }
                function te(A) {
                  function D(q, Y, g, w, E) {
                    if (typeof A != "function")
                      return new x("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
                    var T = q[Y],
                      M = ge(T);
                    if (M !== "object")
                      return new x("Invalid " + w + " `" + E + "` of type " + ("`" + M + "` supplied to `" + g + "`, expected an object."));
                    for (var k in T)
                      if (o(T, k)) {
                        var R = A(T, k, g, w, E + "." + k, i);
                        if (R instanceof Error) return R;
                      }
                    return null;
                  }
                  return b(D);
                }
                function ce(A) {
                  if (!Array.isArray(A)) return s("Invalid argument supplied to oneOfType, expected an instance of array."), u;
                  for (var D = 0; D < A.length; D++) {
                    var q = A[D];
                    if (typeof q != "function")
                      return (
                        s(
                          "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                            _e(q) +
                            " at index " +
                            D +
                            "."
                        ),
                        u
                      );
                  }
                  function Y(g, w, E, T, M) {
                    for (var k = [], R = 0; R < A.length; R++) {
                      var C = A[R],
                        G = C(g, w, E, T, M, i);
                      if (G == null) return null;
                      G.data && o(G.data, "expectedType") && k.push(G.data.expectedType);
                    }
                    var K = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
                    return new x("Invalid " + T + " `" + M + "` supplied to " + ("`" + E + "`" + K + "."));
                  }
                  return b(Y);
                }
                function Te() {
                  function A(D, q, Y, g, w) {
                    return me(D[q]) ? null : new x("Invalid " + g + " `" + w + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
                  }
                  return b(A);
                }
                function ye(A, D, q, Y, g) {
                  return new x(
                    (A || "React class") +
                      ": " +
                      D +
                      " type `" +
                      q +
                      "." +
                      Y +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      g +
                      "`."
                  );
                }
                function ue(A) {
                  function D(q, Y, g, w, E) {
                    var T = q[Y],
                      M = ge(T);
                    if (M !== "object")
                      return new x("Invalid " + w + " `" + E + "` of type `" + M + "` " + ("supplied to `" + g + "`, expected `object`."));
                    for (var k in A) {
                      var R = A[k];
                      if (typeof R != "function") return ye(g, w, E, k, Ee(R));
                      var C = R(T, k, g, w, E + "." + k, i);
                      if (C) return C;
                    }
                    return null;
                  }
                  return b(D);
                }
                function re(A) {
                  function D(q, Y, g, w, E) {
                    var T = q[Y],
                      M = ge(T);
                    if (M !== "object")
                      return new x("Invalid " + w + " `" + E + "` of type `" + M + "` " + ("supplied to `" + g + "`, expected `object`."));
                    var k = n({}, q[Y], A);
                    for (var R in k) {
                      var C = A[R];
                      if (o(A, R) && typeof C != "function") return ye(g, w, E, R, Ee(C));
                      if (!C)
                        return new x(
                          "Invalid " +
                            w +
                            " `" +
                            E +
                            "` key `" +
                            R +
                            "` supplied to `" +
                            g +
                            "`.\nBad object: " +
                            JSON.stringify(q[Y], null, "  ") +
                            `
Valid keys: ` +
                            JSON.stringify(Object.keys(A), null, "  ")
                        );
                      var G = C(T, R, g, w, E + "." + R, i);
                      if (G) return G;
                    }
                    return null;
                  }
                  return b(D);
                }
                function me(A) {
                  switch (typeof A) {
                    case "number":
                    case "string":
                    case "undefined":
                      return !0;
                    case "boolean":
                      return !A;
                    case "object":
                      if (Array.isArray(A)) return A.every(me);
                      if (A === null || l(A)) return !0;
                      var D = h(A);
                      if (D) {
                        var q = D.call(A),
                          Y;
                        if (D !== A.entries) {
                          for (; !(Y = q.next()).done; ) if (!me(Y.value)) return !1;
                        } else
                          for (; !(Y = q.next()).done; ) {
                            var g = Y.value;
                            if (g && !me(g[1])) return !1;
                          }
                      } else return !1;
                      return !0;
                    default:
                      return !1;
                  }
                }
                function ke(A, D) {
                  return A === "symbol"
                    ? !0
                    : D
                    ? D["@@toStringTag"] === "Symbol" || (typeof Symbol == "function" && D instanceof Symbol)
                    : !1;
                }
                function ge(A) {
                  var D = typeof A;
                  return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : ke(D, A) ? "symbol" : D;
                }
                function Ee(A) {
                  if (typeof A > "u" || A === null) return "" + A;
                  var D = ge(A);
                  if (D === "object") {
                    if (A instanceof Date) return "date";
                    if (A instanceof RegExp) return "regexp";
                  }
                  return D;
                }
                function _e(A) {
                  var D = Ee(A);
                  switch (D) {
                    case "array":
                    case "object":
                      return "an " + D;
                    case "boolean":
                    case "date":
                    case "regexp":
                      return "a " + D;
                    default:
                      return D;
                  }
                }
                function Z(A) {
                  return !A.constructor || !A.constructor.name ? f : A.constructor.name;
                }
                return (v.checkPropTypes = a), (v.resetWarningCache = a.resetWarningCache), (v.PropTypes = v), v;
              };
            },
          })),
          (ec = Ie({
            "../../node_modules/prop-types/index.js"(e, t) {
              (r = ls()), (n = !0), (t.exports = $u()(r.isElement, n));
              var r, n;
            },
          })),
          (tc = Ie({
            "../../node_modules/react-innertext/index.js"(e, t) {
              var r = function (o) {
                  return Object.prototype.hasOwnProperty.call(o, "props");
                },
                n = function (o, a) {
                  return o + i(a);
                },
                i = function (o) {
                  return o === null || typeof o == "boolean" || typeof o > "u"
                    ? ""
                    : typeof o == "number"
                    ? o.toString()
                    : typeof o == "string"
                    ? o
                    : Array.isArray(o)
                    ? o.reduce(n, "")
                    : r(o) && Object.prototype.hasOwnProperty.call(o.props, "children")
                    ? i(o.props.children)
                    : "";
                };
              (i.default = i), (t.exports = i);
            },
          })),
          (rc = Ie({
            "../../node_modules/debounce/index.js"(e, t) {
              function r(n, i, o) {
                var a, s, u, l, c;
                i == null && (i = 100);
                function p() {
                  var h = Date.now() - l;
                  h < i && h >= 0 ? (a = setTimeout(p, i - h)) : ((a = null), o || ((c = n.apply(u, s)), (u = s = null)));
                }
                var d = function () {
                  (u = this), (s = arguments), (l = Date.now());
                  var h = o && !a;
                  return a || (a = setTimeout(p, i)), h && ((c = n.apply(u, s)), (u = s = null)), c;
                };
                return (
                  (d.clear = function () {
                    a && (clearTimeout(a), (a = null));
                  }),
                  (d.flush = function () {
                    a && ((c = n.apply(u, s)), (u = s = null), clearTimeout(a), (a = null));
                  }),
                  d
                );
              }
              (r.debounce = r), (t.exports = r);
            },
          }));
        (oc = as({
          "../../node_modules/framer-motion/node_modules/@emotion/memoize/dist/memoize.browser.esm.js"() {
            ps = nc;
          },
        })),
          (ds = {});
        Yu(ds, { default: () => hs });
        ic = as({
          "../../node_modules/framer-motion/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"() {
            oc(),
              (xi =
                /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/),
              (wi = ps(function (e) {
                return xi.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91);
              })),
              (hs = wi);
          },
        });
        (ac = fs("function")),
          (sc = (e) => e === null),
          (Ti = (e) => Object.prototype.toString.call(e).slice(8, -1) === "RegExp"),
          (Ei = (e) => !lc(e) && !sc(e) && (ac(e) || typeof e == "object")),
          (lc = fs("undefined"));
        (hc = [
          "Array",
          "ArrayBuffer",
          "AsyncFunction",
          "AsyncGenerator",
          "AsyncGeneratorFunction",
          "Date",
          "Error",
          "Function",
          "Generator",
          "GeneratorFunction",
          "HTMLElement",
          "Map",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "WeakMap",
          "WeakSet",
        ]),
          (fc = ["bigint", "boolean", "null", "number", "string", "symbol", "undefined"]);
        yc = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];
        L.array = Array.isArray;
        L.arrayOf = (e, t) => (!L.array(e) && !L.function(t) ? !1 : e.every((r) => t(r)));
        L.asyncGeneratorFunction = (e) => un(e) === "AsyncGeneratorFunction";
        L.asyncFunction = Be("AsyncFunction");
        L.bigint = _t("bigint");
        L.boolean = (e) => e === !0 || e === !1;
        L.date = Be("Date");
        L.defined = (e) => !L.undefined(e);
        L.domElement = (e) => L.object(e) && !L.plainObject(e) && e.nodeType === 1 && L.string(e.nodeName) && yc.every((t) => t in e);
        L.empty = (e) =>
          (L.string(e) && e.length === 0) ||
          (L.array(e) && e.length === 0) ||
          (L.object(e) && !L.map(e) && !L.set(e) && Object.keys(e).length === 0) ||
          (L.set(e) && e.size === 0) ||
          (L.map(e) && e.size === 0);
        L.error = Be("Error");
        L.function = _t("function");
        L.generator = (e) => L.iterable(e) && L.function(e.next) && L.function(e.throw);
        L.generatorFunction = Be("GeneratorFunction");
        L.instanceOf = (e, t) => (!e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype);
        L.iterable = (e) => !L.nullOrUndefined(e) && L.function(e[Symbol.iterator]);
        L.map = Be("Map");
        L.nan = (e) => Number.isNaN(e);
        L.null = (e) => e === null;
        L.nullOrUndefined = (e) => L.null(e) || L.undefined(e);
        L.number = (e) => _t("number")(e) && !L.nan(e);
        L.numericString = (e) => L.string(e) && e.length > 0 && !Number.isNaN(Number(e));
        L.object = (e) => !L.nullOrUndefined(e) && (L.function(e) || typeof e == "object");
        L.oneOf = (e, t) => (L.array(e) ? e.indexOf(t) > -1 : !1);
        L.plainFunction = Be("Function");
        L.plainObject = (e) => {
          if (un(e) !== "Object") return !1;
          let t = Object.getPrototypeOf(e);
          return t === null || t === Object.getPrototypeOf({});
        };
        L.primitive = (e) => L.null(e) || gc(typeof e);
        L.promise = Be("Promise");
        L.propertyOf = (e, t, r) => {
          if (!L.object(e) || !t) return !1;
          let n = e[t];
          return L.function(r) ? r(n) : L.defined(n);
        };
        L.regexp = Be("RegExp");
        L.set = Be("Set");
        L.string = _t("string");
        L.symbol = _t("symbol");
        L.undefined = _t("undefined");
        L.weakMap = Be("WeakMap");
        L.weakSet = Be("WeakSet");
        N = L;
        (wc = mt(Xu(), 1)), (gs = mt(Ku(), 1));
        (Nr = mt(vo(), 1)),
          (Ln = mt(vo(), 1)),
          (I = mt(ec())),
          (yr = typeof window < "u" && typeof document < "u" && typeof navigator < "u"),
          (Sc = (function () {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
              if (yr && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0;
          })());
        (Cc = yr && window.Promise), (Ac = Cc ? Pc : Oc);
        (Ri = yr && !!(window.MSInputMethodContext && document.documentMode)), (Ii = yr && /MSIE 10/.test(navigator.userAgent));
        (kc = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (Mc = (function () {
            function e(t, r) {
              for (var n = 0; n < r.length; n++) {
                var i = r[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            }
            return function (t, r, n) {
              return r && e(t.prototype, r), n && e(t, n), t;
            };
          })()),
          (Ft = function (e, t, r) {
            return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
          }),
          (je =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            });
        Yc = yr && /Firefox/i.test(navigator.userAgent);
        (Ms = [
          "auto-start",
          "auto",
          "auto-end",
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ]),
          (jn = Ms.slice(3));
        Nn = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };
        (ip = {
          shift: { order: 100, enabled: !0, fn: rp },
          offset: { order: 200, enabled: !0, fn: ep, offset: 0 },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: tp,
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: { order: 400, enabled: !0, fn: Jc },
          arrow: { order: 500, enabled: !0, fn: Xc, element: "[x-arrow]" },
          flip: {
            order: 600,
            enabled: !0,
            fn: Qc,
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: { order: 700, enabled: !1, fn: op },
          hide: { order: 800, enabled: !0, fn: np },
          computeStyle: { order: 850, enabled: !0, fn: Gc, gpuAcceleration: !0, x: "bottom", y: "right" },
          applyStyle: { order: 900, enabled: !0, fn: Uc, onLoad: Wc, gpuAcceleration: void 0 },
        }),
          (ap = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: ip,
          }),
          (cn = (function () {
            function e(t, r) {
              var n = this,
                i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              kc(this, e),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(n.update);
                }),
                (this.update = Ac(this.update.bind(this))),
                (this.options = je({}, e.Defaults, i)),
                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = r && r.jquery ? r[0] : r),
                (this.options.modifiers = {}),
                Object.keys(je({}, e.Defaults.modifiers, i.modifiers)).forEach(function (a) {
                  n.options.modifiers[a] = je({}, e.Defaults.modifiers[a] || {}, i.modifiers ? i.modifiers[a] : {});
                }),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (a) {
                    return je({ name: a }, n.options.modifiers[a]);
                  })
                  .sort(function (a, s) {
                    return a.order - s.order;
                  })),
                this.modifiers.forEach(function (a) {
                  a.enabled && vs(a.onLoad) && a.onLoad(n.reference, n.popper, n.options, a, n.state);
                }),
                this.update();
              var o = this.options.eventsEnabled;
              o && this.enableEventListeners(), (this.state.eventsEnabled = o);
            }
            return (
              Mc(e, [
                {
                  key: "update",
                  value: function () {
                    return Nc.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return Vc.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return Bc.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return _c.call(this);
                  },
                },
              ]),
              e
            );
          })());
        cn.Utils = window.PopperUtils;
        cn.placements = Ms;
        cn.Defaults = ap;
        (Li = cn),
          (eo = mt(vo())),
          (sp = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"]),
          (lp = [
            "Array",
            "ArrayBuffer",
            "AsyncFunction",
            "AsyncGenerator",
            "AsyncGeneratorFunction",
            "Date",
            "Error",
            "Function",
            "Generator",
            "GeneratorFunction",
            "HTMLElement",
            "Map",
            "Object",
            "Promise",
            "RegExp",
            "Set",
            "WeakMap",
            "WeakSet",
          ]),
          (up = ["bigint", "boolean", "null", "number", "string", "symbol", "undefined"]);
        j.array = Array.isArray;
        j.arrayOf = function (e, t) {
          return !j.array(e) && !j.function(t)
            ? !1
            : e.every(function (r) {
                return t(r);
              });
        };
        j.asyncGeneratorFunction = function (e) {
          return pn(e) === "AsyncGeneratorFunction";
        };
        j.asyncFunction = ze("AsyncFunction");
        j.bigint = Ut("bigint");
        j.boolean = function (e) {
          return e === !0 || e === !1;
        };
        j.date = ze("Date");
        j.defined = function (e) {
          return !j.undefined(e);
        };
        j.domElement = function (e) {
          return (
            j.object(e) &&
            !j.plainObject(e) &&
            e.nodeType === 1 &&
            j.string(e.nodeName) &&
            sp.every(function (t) {
              return t in e;
            })
          );
        };
        j.empty = function (e) {
          return (
            (j.string(e) && e.length === 0) ||
            (j.array(e) && e.length === 0) ||
            (j.object(e) && !j.map(e) && !j.set(e) && Object.keys(e).length === 0) ||
            (j.set(e) && e.size === 0) ||
            (j.map(e) && e.size === 0)
          );
        };
        j.error = ze("Error");
        j.function = Ut("function");
        j.generator = function (e) {
          return j.iterable(e) && j.function(e.next) && j.function(e.throw);
        };
        j.generatorFunction = ze("GeneratorFunction");
        j.instanceOf = function (e, t) {
          return !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
        };
        j.iterable = function (e) {
          return !j.nullOrUndefined(e) && j.function(e[Symbol.iterator]);
        };
        j.map = ze("Map");
        j.nan = function (e) {
          return Number.isNaN(e);
        };
        j.null = function (e) {
          return e === null;
        };
        j.nullOrUndefined = function (e) {
          return j.null(e) || j.undefined(e);
        };
        j.number = function (e) {
          return Ut("number")(e) && !j.nan(e);
        };
        j.numericString = function (e) {
          return j.string(e) && e.length > 0 && !Number.isNaN(Number(e));
        };
        j.object = function (e) {
          return !j.nullOrUndefined(e) && (j.function(e) || typeof e == "object");
        };
        j.oneOf = function (e, t) {
          return j.array(e) ? e.indexOf(t) > -1 : !1;
        };
        j.plainFunction = ze("Function");
        j.plainObject = function (e) {
          if (pn(e) !== "Object") return !1;
          var t = Object.getPrototypeOf(e);
          return t === null || t === Object.getPrototypeOf({});
        };
        j.primitive = function (e) {
          return j.null(e) || pp(typeof e);
        };
        j.promise = ze("Promise");
        j.propertyOf = function (e, t, r) {
          if (!j.object(e) || !t) return !1;
          var n = e[t];
          return j.function(r) ? r(n) : j.defined(n);
        };
        j.regexp = ze("RegExp");
        j.set = ze("Set");
        j.string = Ut("string");
        j.symbol = Ut("symbol");
        j.undefined = Ut("undefined");
        j.weakMap = ze("WeakMap");
        j.weakSet = ze("WeakSet");
        F = j;
        (dp = Ds("function")),
          (hp = function (e) {
            return e === null;
          }),
          (ji = function (e) {
            return Object.prototype.toString.call(e).slice(8, -1) === "RegExp";
          }),
          (Ni = function (e) {
            return !fp(e) && !hp(e) && (dp(e) || typeof e == "object");
          }),
          (fp = Ds("undefined")),
          (to = function (e) {
            var t = typeof Symbol == "function" && Symbol.iterator,
              r = t && e[t],
              n = 0;
            if (r) return r.call(e);
            if (e && typeof e.length == "number")
              return {
                next: function () {
                  return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                },
              };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
          });
        (Cp = { flip: { padding: 20 }, preventOverflow: { padding: 10 } }),
          (Ap = "The typeValidator argument must be a function with the signature function(props, propName, componentName)."),
          (Rp = "The error message is optional, but must be a string if provided.");
        ($ = { INIT: "init", IDLE: "idle", OPENING: "opening", OPEN: "open", CLOSING: "closing", ERROR: "error" }),
          (tr = yt.createPortal !== void 0);
        Vs = (function (e) {
          Tr(r, e);
          var t = Er(r);
          function r() {
            return xr(this, r), t.apply(this, arguments);
          }
          return (
            wr(r, [
              {
                key: "componentDidMount",
                value: function () {
                  qe() && (this.node || this.appendNode(), tr || this.renderPortal());
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  qe() && (tr || this.renderPortal());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  !qe() ||
                    !this.node ||
                    (tr || yt.unmountComponentAtNode(this.node),
                    this.node && this.node.parentNode === document.body && (document.body.removeChild(this.node), (this.node = void 0)));
                },
              },
              {
                key: "appendNode",
                value: function () {
                  var n = this.props,
                    i = n.id,
                    o = n.zIndex;
                  this.node ||
                    ((this.node = document.createElement("div")),
                    i && (this.node.id = i),
                    o && (this.node.style.zIndex = o),
                    document.body.appendChild(this.node));
                },
              },
              {
                key: "renderPortal",
                value: function () {
                  if (!qe()) return null;
                  var n = this.props,
                    i = n.children,
                    o = n.setRef;
                  if ((this.node || this.appendNode(), tr)) return yt.createPortal(i, this.node);
                  var a = yt.unstable_renderSubtreeIntoContainer(this, i.length > 1 ? m.createElement("div", null, i) : i[0], this.node);
                  return o(a), null;
                },
              },
              {
                key: "renderReact16",
                value: function () {
                  var n = this.props,
                    i = n.hasChildren,
                    o = n.placement,
                    a = n.target;
                  return i ? this.renderPortal() : a || o === "center" ? this.renderPortal() : null;
                },
              },
              {
                key: "render",
                value: function () {
                  return tr ? this.renderReact16() : null;
                },
              },
            ]),
            r
          );
        })(m.Component);
        we(Vs, "propTypes", {
          children: I.default.oneOfType([I.default.element, I.default.array]),
          hasChildren: I.default.bool,
          id: I.default.oneOfType([I.default.string, I.default.number]),
          placement: I.default.string,
          setRef: I.default.func.isRequired,
          target: I.default.oneOfType([I.default.object, I.default.string]),
          zIndex: I.default.number,
        });
        Fs = (function (e) {
          Tr(r, e);
          var t = Er(r);
          function r() {
            return xr(this, r), t.apply(this, arguments);
          }
          return (
            wr(r, [
              {
                key: "parentStyle",
                get: function () {
                  var n = this.props,
                    i = n.placement,
                    o = n.styles,
                    a = o.arrow.length,
                    s = { pointerEvents: "none", position: "absolute", width: "100%" };
                  return (
                    i.startsWith("top")
                      ? ((s.bottom = 0), (s.left = 0), (s.right = 0), (s.height = a))
                      : i.startsWith("bottom")
                      ? ((s.left = 0), (s.right = 0), (s.top = 0), (s.height = a))
                      : i.startsWith("left")
                      ? ((s.right = 0), (s.top = 0), (s.bottom = 0))
                      : i.startsWith("right") && ((s.left = 0), (s.top = 0)),
                    s
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    i = n.placement,
                    o = n.setArrowRef,
                    a = n.styles,
                    s = a.arrow,
                    u = s.color,
                    l = s.display,
                    c = s.length,
                    p = s.margin,
                    d = s.position,
                    h = s.spread,
                    f = { display: l, position: d },
                    v,
                    S = h,
                    x = c;
                  return (
                    i.startsWith("top")
                      ? ((v = "0,0 "
                          .concat(S / 2, ",")
                          .concat(x, " ")
                          .concat(S, ",0")),
                        (f.bottom = 0),
                        (f.marginLeft = p),
                        (f.marginRight = p))
                      : i.startsWith("bottom")
                      ? ((v = ""
                          .concat(S, ",")
                          .concat(x, " ")
                          .concat(S / 2, ",0 0,")
                          .concat(x)),
                        (f.top = 0),
                        (f.marginLeft = p),
                        (f.marginRight = p))
                      : i.startsWith("left")
                      ? ((x = h),
                        (S = c),
                        (v = "0,0 "
                          .concat(S, ",")
                          .concat(x / 2, " 0,")
                          .concat(x)),
                        (f.right = 0),
                        (f.marginTop = p),
                        (f.marginBottom = p))
                      : i.startsWith("right") &&
                        ((x = h),
                        (S = c),
                        (v = ""
                          .concat(S, ",")
                          .concat(x, " ")
                          .concat(S, ",0 0,")
                          .concat(x / 2)),
                        (f.left = 0),
                        (f.marginTop = p),
                        (f.marginBottom = p)),
                    m.createElement(
                      "div",
                      { className: "__floater__arrow", style: this.parentStyle },
                      m.createElement(
                        "span",
                        { ref: o, style: f },
                        m.createElement(
                          "svg",
                          { width: S, height: x, version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                          m.createElement("polygon", { points: v, fill: u })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            r
          );
        })(m.Component);
        we(Fs, "propTypes", {
          placement: I.default.string.isRequired,
          setArrowRef: I.default.func.isRequired,
          styles: I.default.object.isRequired,
        });
        Vp = ["color", "height", "width"];
        Bs.propTypes = { handleClick: I.default.func.isRequired, styles: I.default.object.isRequired };
        zs.propTypes = {
          content: I.default.node.isRequired,
          footer: I.default.node,
          handleClick: I.default.func.isRequired,
          open: I.default.bool,
          positionWrapper: I.default.bool.isRequired,
          showCloseButton: I.default.bool.isRequired,
          styles: I.default.object.isRequired,
          title: I.default.node,
        };
        _s = (function (e) {
          Tr(r, e);
          var t = Er(r);
          function r() {
            return xr(this, r), t.apply(this, arguments);
          }
          return (
            wr(r, [
              {
                key: "style",
                get: function () {
                  var n = this.props,
                    i = n.disableAnimation,
                    o = n.component,
                    a = n.placement,
                    s = n.hideArrow,
                    u = n.status,
                    l = n.styles,
                    c = l.arrow.length,
                    p = l.floater,
                    d = l.floaterCentered,
                    h = l.floaterClosing,
                    f = l.floaterOpening,
                    v = l.floaterWithAnimation,
                    S = l.floaterWithComponent,
                    x = {};
                  return (
                    s ||
                      (a.startsWith("top")
                        ? (x.padding = "0 0 ".concat(c, "px"))
                        : a.startsWith("bottom")
                        ? (x.padding = "".concat(c, "px 0 0"))
                        : a.startsWith("left")
                        ? (x.padding = "0 ".concat(c, "px 0 0"))
                        : a.startsWith("right") && (x.padding = "0 0 0 ".concat(c, "px"))),
                    [$.OPENING, $.OPEN].indexOf(u) !== -1 && (x = ne(ne({}, x), f)),
                    u === $.CLOSING && (x = ne(ne({}, x), h)),
                    u === $.OPEN && !i && (x = ne(ne({}, x), v)),
                    a === "center" && (x = ne(ne({}, x), d)),
                    o && (x = ne(ne({}, x), S)),
                    ne(ne({}, p), x)
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    i = n.component,
                    o = n.handleClick,
                    a = n.hideArrow,
                    s = n.setFloaterRef,
                    u = n.status,
                    l = {},
                    c = ["__floater"];
                  return (
                    i
                      ? m.isValidElement(i)
                        ? (l.content = m.cloneElement(i, { closeFn: o }))
                        : (l.content = i({ closeFn: o }))
                      : (l.content = m.createElement(zs, this.props)),
                    u === $.OPEN && c.push("__floater__open"),
                    a || (l.arrow = m.createElement(Fs, this.props)),
                    m.createElement(
                      "div",
                      { ref: s, className: c.join(" "), style: this.style },
                      m.createElement("div", { className: "__floater__body" }, l.content, l.arrow)
                    )
                  );
                },
              },
            ]),
            r
          );
        })(m.Component);
        we(_s, "propTypes", {
          component: I.default.oneOfType([I.default.func, I.default.element]),
          content: I.default.node,
          disableAnimation: I.default.bool.isRequired,
          footer: I.default.node,
          handleClick: I.default.func.isRequired,
          hideArrow: I.default.bool.isRequired,
          open: I.default.bool,
          placement: I.default.string.isRequired,
          positionWrapper: I.default.bool.isRequired,
          setArrowRef: I.default.func.isRequired,
          setFloaterRef: I.default.func.isRequired,
          showCloseButton: I.default.bool,
          status: I.default.string.isRequired,
          styles: I.default.object.isRequired,
          title: I.default.node,
        });
        Hs = (function (e) {
          Tr(r, e);
          var t = Er(r);
          function r() {
            return xr(this, r), t.apply(this, arguments);
          }
          return (
            wr(r, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    i = n.children,
                    o = n.handleClick,
                    a = n.handleMouseEnter,
                    s = n.handleMouseLeave,
                    u = n.setChildRef,
                    l = n.setWrapperRef,
                    c = n.style,
                    p = n.styles,
                    d;
                  if (i)
                    if (m.Children.count(i) === 1)
                      if (!m.isValidElement(i)) d = m.createElement("span", null, i);
                      else {
                        var h = F.function(i.type) ? "innerRef" : "ref";
                        d = m.cloneElement(m.Children.only(i), we({}, h, u));
                      }
                    else d = i;
                  return d
                    ? m.createElement("span", { ref: l, style: ne(ne({}, p), c), onClick: o, onMouseEnter: a, onMouseLeave: s }, d)
                    : null;
                },
              },
            ]),
            r
          );
        })(m.Component);
        we(Hs, "propTypes", {
          children: I.default.node,
          handleClick: I.default.func.isRequired,
          handleMouseEnter: I.default.func.isRequired,
          handleMouseLeave: I.default.func.isRequired,
          setChildRef: I.default.func.isRequired,
          setWrapperRef: I.default.func.isRequired,
          style: I.default.object,
          styles: I.default.object.isRequired,
        });
        Fp = { zIndex: 100 };
        (zp = ["arrow", "flip", "offset"]),
          (_p = ["position", "top", "right", "bottom", "left"]),
          (Oo = (function (e) {
            Tr(r, e);
            var t = Er(r);
            function r(n) {
              var i;
              return (
                xr(this, r),
                (i = t.call(this, n)),
                we(Qe(i), "setArrowRef", function (o) {
                  i.arrowRef = o;
                }),
                we(Qe(i), "setChildRef", function (o) {
                  i.childRef = o;
                }),
                we(Qe(i), "setFloaterRef", function (o) {
                  i.floaterRef = o;
                }),
                we(Qe(i), "setWrapperRef", function (o) {
                  i.wrapperRef = o;
                }),
                we(Qe(i), "handleTransitionEnd", function () {
                  var o = i.state.status,
                    a = i.props.callback;
                  i.wrapperPopper && i.wrapperPopper.instance.update(),
                    i.setState({ status: o === $.OPENING ? $.OPEN : $.IDLE }, function () {
                      var s = i.state.status;
                      a(s === $.OPEN ? "open" : "close", i.props);
                    });
                }),
                we(Qe(i), "handleClick", function () {
                  var o = i.props,
                    a = o.event,
                    s = o.open;
                  if (!F.boolean(s)) {
                    var u = i.state,
                      l = u.positionWrapper,
                      c = u.status;
                    (i.event === "click" || (i.event === "hover" && l)) &&
                      (Vr({ title: "click", data: [{ event: a, status: c === $.OPEN ? "closing" : "opening" }], debug: i.debug }),
                      i.toggle());
                  }
                }),
                we(Qe(i), "handleMouseEnter", function () {
                  var o = i.props,
                    a = o.event,
                    s = o.open;
                  if (!(F.boolean(s) || Vn())) {
                    var u = i.state.status;
                    i.event === "hover" &&
                      u === $.IDLE &&
                      (Vr({ title: "mouseEnter", data: [{ key: "originalEvent", value: a }], debug: i.debug }),
                      clearTimeout(i.eventDelayTimeout),
                      i.toggle());
                  }
                }),
                we(Qe(i), "handleMouseLeave", function () {
                  var o = i.props,
                    a = o.event,
                    s = o.eventDelay,
                    u = o.open;
                  if (!(F.boolean(u) || Vn())) {
                    var l = i.state,
                      c = l.status,
                      p = l.positionWrapper;
                    i.event === "hover" &&
                      (Vr({ title: "mouseLeave", data: [{ key: "originalEvent", value: a }], debug: i.debug }),
                      s
                        ? [$.OPENING, $.OPEN].indexOf(c) !== -1 &&
                          !p &&
                          !i.eventDelayTimeout &&
                          (i.eventDelayTimeout = setTimeout(function () {
                            delete i.eventDelayTimeout, i.toggle();
                          }, s * 1e3))
                        : i.toggle($.IDLE));
                  }
                }),
                (i.state = {
                  currentPlacement: n.placement,
                  needsUpdate: !1,
                  positionWrapper: n.wrapperOptions.position && !!n.target,
                  status: $.INIT,
                  statusWrapper: $.INIT,
                }),
                (i._isMounted = !1),
                (i.hasMounted = !1),
                qe() &&
                  window.addEventListener("load", function () {
                    i.popper && i.popper.instance.update(), i.wrapperPopper && i.wrapperPopper.instance.update();
                  }),
                i
              );
            }
            return (
              wr(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (qe()) {
                      var n = this.state.positionWrapper,
                        i = this.props,
                        o = i.children,
                        a = i.open,
                        s = i.target;
                      (this._isMounted = !0),
                        Vr({
                          title: "init",
                          data: {
                            hasChildren: !!o,
                            hasTarget: !!s,
                            isControlled: F.boolean(a),
                            positionWrapper: n,
                            target: this.target,
                            floater: this.floaterRef,
                          },
                          debug: this.debug,
                        }),
                        this.hasMounted || (this.initPopper(), (this.hasMounted = !0)),
                        !o && s && F.boolean(a);
                    }
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (n, i) {
                    if (qe()) {
                      var o = this.props,
                        a = o.autoOpen,
                        s = o.open,
                        u = o.target,
                        l = o.wrapperOptions,
                        c = Tp(i, this.state),
                        p = c.changedFrom,
                        d = c.changed;
                      if (n.open !== s) {
                        var h;
                        F.boolean(s) && (h = s ? $.OPENING : $.CLOSING), this.toggle(h);
                      }
                      (n.wrapperOptions.position !== l.position || n.target !== u) && this.changeWrapperPosition(this.props),
                        d("status", $.IDLE) && s ? this.toggle($.OPEN) : p("status", $.INIT, $.IDLE) && a && this.toggle($.OPEN),
                        this.popper && d("status", $.OPENING) && this.popper.instance.update(),
                        this.floaterRef &&
                          (d("status", $.OPENING) || d("status", $.CLOSING)) &&
                          Np(this.floaterRef, "transitionend", this.handleTransitionEnd),
                        d("needsUpdate", !0) && this.rebuildPopper();
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    qe() &&
                      ((this._isMounted = !1),
                      this.popper && this.popper.instance.destroy(),
                      this.wrapperPopper && this.wrapperPopper.instance.destroy());
                  },
                },
                {
                  key: "initPopper",
                  value: function () {
                    var n = this,
                      i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.target,
                      o = this.state.positionWrapper,
                      a = this.props,
                      s = a.disableFlip,
                      u = a.getPopper,
                      l = a.hideArrow,
                      c = a.offset,
                      p = a.placement,
                      d = a.wrapperOptions,
                      h = p === "top" || p === "bottom" ? "flip" : ["right", "bottom-end", "top-end", "left", "top-start", "bottom-start"];
                    if (p === "center") this.setState({ status: $.IDLE });
                    else if (i && this.floaterRef) {
                      var f = this.options,
                        v = f.arrow,
                        S = f.flip,
                        x = f.offset,
                        b = js(f, zp);
                      new Li(i, this.floaterRef, {
                        placement: p,
                        modifiers: ne(
                          {
                            arrow: ne({ enabled: !l, element: this.arrowRef }, v),
                            flip: ne({ enabled: !s, behavior: h }, S),
                            offset: ne({ offset: "0, ".concat(c, "px") }, x),
                          },
                          b
                        ),
                        onCreate: function (P) {
                          var O;
                          if (((n.popper = P), !((O = n.floaterRef) !== null && O !== void 0 && O.isConnected))) {
                            n.setState({ needsUpdate: !0 });
                            return;
                          }
                          u(P, "floater"),
                            n._isMounted && n.setState({ currentPlacement: P.placement, status: $.IDLE }),
                            p !== P.placement &&
                              setTimeout(function () {
                                P.instance.update();
                              }, 1);
                        },
                        onUpdate: function (P) {
                          n.popper = P;
                          var O = n.state.currentPlacement;
                          n._isMounted && P.placement !== O && n.setState({ currentPlacement: P.placement });
                        },
                      });
                    }
                    if (o) {
                      var y = F.undefined(d.offset) ? 0 : d.offset;
                      new Li(this.target, this.wrapperRef, {
                        placement: d.placement || p,
                        modifiers: { arrow: { enabled: !1 }, offset: { offset: "0, ".concat(y, "px") }, flip: { enabled: !1 } },
                        onCreate: function (P) {
                          (n.wrapperPopper = P),
                            n._isMounted && n.setState({ statusWrapper: $.IDLE }),
                            u(P, "wrapper"),
                            p !== P.placement &&
                              setTimeout(function () {
                                P.instance.update();
                              }, 1);
                        },
                      });
                    }
                  },
                },
                {
                  key: "rebuildPopper",
                  value: function () {
                    var n = this;
                    this.floaterRefInterval = setInterval(function () {
                      var i;
                      (i = n.floaterRef) !== null &&
                        i !== void 0 &&
                        i.isConnected &&
                        (clearInterval(n.floaterRefInterval), n.setState({ needsUpdate: !1 }), n.initPopper());
                    }, 50);
                  },
                },
                {
                  key: "changeWrapperPosition",
                  value: function (n) {
                    var i = n.target,
                      o = n.wrapperOptions;
                    this.setState({ positionWrapper: o.position && !!i });
                  },
                },
                {
                  key: "toggle",
                  value: function (n) {
                    var i = this.state.status,
                      o = i === $.OPEN ? $.CLOSING : $.OPENING;
                    F.undefined(n) || (o = n), this.setState({ status: o });
                  },
                },
                {
                  key: "debug",
                  get: function () {
                    var n = this.props.debug;
                    return n || (qe() && "ReactFloaterDebug" in window && !!window.ReactFloaterDebug);
                  },
                },
                {
                  key: "event",
                  get: function () {
                    var n = this.props,
                      i = n.disableHoverToClick,
                      o = n.event;
                    return o === "hover" && Vn() && !i ? "click" : o;
                  },
                },
                {
                  key: "options",
                  get: function () {
                    var n = this.props.options;
                    return (0, eo.default)(Cp, n || {});
                  },
                },
                {
                  key: "styles",
                  get: function () {
                    var n = this,
                      i = this.state,
                      o = i.status,
                      a = i.positionWrapper,
                      s = i.statusWrapper,
                      u = this.props.styles,
                      l = (0, eo.default)(Bp(u), u);
                    if (a) {
                      var c;
                      [$.IDLE].indexOf(o) === -1 || [$.IDLE].indexOf(s) === -1 ? (c = l.wrapperPosition) : (c = this.wrapperPopper.styles),
                        (l.wrapper = ne(ne({}, l.wrapper), c));
                    }
                    if (this.target) {
                      var p = window.getComputedStyle(this.target);
                      this.wrapperStyles
                        ? (l.wrapper = ne(ne({}, l.wrapper), this.wrapperStyles))
                        : ["relative", "static"].indexOf(p.position) === -1 &&
                          ((this.wrapperStyles = {}),
                          a ||
                            (_p.forEach(function (d) {
                              n.wrapperStyles[d] = p[d];
                            }),
                            (l.wrapper = ne(ne({}, l.wrapper), this.wrapperStyles)),
                            (this.target.style.position = "relative"),
                            (this.target.style.top = "auto"),
                            (this.target.style.right = "auto"),
                            (this.target.style.bottom = "auto"),
                            (this.target.style.left = "auto")));
                    }
                    return l;
                  },
                },
                {
                  key: "target",
                  get: function () {
                    if (!qe()) return null;
                    var n = this.props.target;
                    return n ? (F.domElement(n) ? n : document.querySelector(n)) : this.childRef || this.wrapperRef;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var n = this.state,
                      i = n.currentPlacement,
                      o = n.positionWrapper,
                      a = n.status,
                      s = this.props,
                      u = s.children,
                      l = s.component,
                      c = s.content,
                      p = s.disableAnimation,
                      d = s.footer,
                      h = s.hideArrow,
                      f = s.id,
                      v = s.open,
                      S = s.showCloseButton,
                      x = s.style,
                      b = s.target,
                      y = s.title,
                      P = m.createElement(
                        Hs,
                        {
                          handleClick: this.handleClick,
                          handleMouseEnter: this.handleMouseEnter,
                          handleMouseLeave: this.handleMouseLeave,
                          setChildRef: this.setChildRef,
                          setWrapperRef: this.setWrapperRef,
                          style: x,
                          styles: this.styles.wrapper,
                        },
                        u
                      ),
                      O = {};
                    return (
                      o ? (O.wrapperInPortal = P) : (O.wrapperAsChildren = P),
                      m.createElement(
                        "span",
                        null,
                        m.createElement(
                          Vs,
                          {
                            hasChildren: !!u,
                            id: f,
                            placement: i,
                            setRef: this.setFloaterRef,
                            target: b,
                            zIndex: this.styles.options.zIndex,
                          },
                          m.createElement(_s, {
                            component: l,
                            content: c,
                            disableAnimation: p,
                            footer: d,
                            handleClick: this.handleClick,
                            hideArrow: h || i === "center",
                            open: v,
                            placement: i,
                            positionWrapper: o,
                            setArrowRef: this.setArrowRef,
                            setFloaterRef: this.setFloaterRef,
                            showCloseButton: S,
                            status: a,
                            styles: this.styles,
                            title: y,
                          }),
                          O.wrapperInPortal
                        ),
                        O.wrapperAsChildren
                      )
                    );
                  },
                },
              ]),
              r
            );
          })(m.Component));
        we(Oo, "propTypes", {
          autoOpen: I.default.bool,
          callback: I.default.func,
          children: I.default.node,
          component: Wi(I.default.oneOfType([I.default.func, I.default.element]), function (e) {
            return !e.content;
          }),
          content: Wi(I.default.node, function (e) {
            return !e.component;
          }),
          debug: I.default.bool,
          disableAnimation: I.default.bool,
          disableFlip: I.default.bool,
          disableHoverToClick: I.default.bool,
          event: I.default.oneOf(["hover", "click"]),
          eventDelay: I.default.number,
          footer: I.default.node,
          getPopper: I.default.func,
          hideArrow: I.default.bool,
          id: I.default.oneOfType([I.default.string, I.default.number]),
          offset: I.default.number,
          open: I.default.bool,
          options: I.default.object,
          placement: I.default.oneOf([
            "top",
            "top-start",
            "top-end",
            "bottom",
            "bottom-start",
            "bottom-end",
            "left",
            "left-start",
            "left-end",
            "right",
            "right-start",
            "right-end",
            "auto",
            "center",
          ]),
          showCloseButton: I.default.bool,
          style: I.default.object,
          styles: I.default.object,
          target: I.default.oneOfType([I.default.object, I.default.string]),
          title: I.default.node,
          wrapperOptions: I.default.shape({
            offset: I.default.number,
            placement: I.default.oneOf([
              "top",
              "top-start",
              "top-end",
              "bottom",
              "bottom-start",
              "bottom-end",
              "left",
              "left-start",
              "left-end",
              "right",
              "right-start",
              "right-end",
              "auto",
            ]),
            position: I.default.bool,
          }),
        });
        we(Oo, "defaultProps", {
          autoOpen: !1,
          callback: qi,
          debug: !1,
          disableAnimation: !1,
          disableFlip: !1,
          disableHoverToClick: !1,
          event: "click",
          eventDelay: 0.4,
          getPopper: qi,
          hideArrow: !1,
          offset: 15,
          placement: "bottom",
          showCloseButton: !1,
          styles: {},
          target: null,
          wrapperOptions: { position: !1 },
        });
        (Hp = mt(tc(), 1)),
          (Up = Object.defineProperty),
          (Wp = (e, t, r) => (t in e ? Up(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r))),
          (V = (e, t, r) => (Wp(e, typeof t != "symbol" ? t + "" : t, r), r)),
          (ee = {
            INIT: "init",
            START: "start",
            STOP: "stop",
            RESET: "reset",
            PREV: "prev",
            NEXT: "next",
            GO: "go",
            CLOSE: "close",
            SKIP: "skip",
            UPDATE: "update",
          }),
          (Ve = {
            TOUR_START: "tour:start",
            STEP_BEFORE: "step:before",
            BEACON: "beacon",
            TOOLTIP: "tooltip",
            STEP_AFTER: "step:after",
            TOUR_END: "tour:end",
            TOUR_STATUS: "tour:status",
            TARGET_NOT_FOUND: "error:target_not_found",
            ERROR: "error",
          }),
          (X = { INIT: "init", READY: "ready", BEACON: "beacon", TOOLTIP: "tooltip", COMPLETE: "complete", ERROR: "error" }),
          (Q = {
            IDLE: "idle",
            READY: "ready",
            WAITING: "waiting",
            RUNNING: "running",
            PAUSED: "paused",
            SKIPPED: "skipped",
            FINISHED: "finished",
            ERROR: "error",
          });
        rr = Kt !== void 0;
        (td = { options: { preventOverflow: { boundariesElement: "scrollParent" } }, wrapperOptions: { offset: -18, position: !0 } }),
          (qs = { back: "Back", close: "Close", last: "Last", next: "Next", open: "Open the dialog", skip: "Skip" }),
          (rd = {
            event: "click",
            placement: "bottom",
            offset: 10,
            disableBeacon: !1,
            disableCloseOnEsc: !1,
            disableOverlay: !1,
            disableOverlayClose: !1,
            disableScrollParentFix: !1,
            disableScrolling: !1,
            hideBackButton: !1,
            hideCloseButton: !1,
            hideFooter: !1,
            isFixed: !1,
            locale: qs,
            showProgress: !1,
            showSkipButton: !1,
            spotlightClicks: !1,
            spotlightPadding: 10,
          }),
          (nd = {
            continuous: !1,
            debug: !1,
            disableCloseOnEsc: !1,
            disableOverlay: !1,
            disableOverlayClose: !1,
            disableScrolling: !1,
            disableScrollParentFix: !1,
            getHelpers: void 0,
            hideBackButton: !1,
            run: !0,
            scrollOffset: 20,
            scrollDuration: 300,
            scrollToFirstStep: !1,
            showSkipButton: !1,
            showProgress: !1,
            spotlightClicks: !1,
            spotlightPadding: 10,
            steps: [],
          }),
          (od = {
            arrowColor: "#fff",
            backgroundColor: "#fff",
            beaconSize: 36,
            overlayColor: "rgba(0, 0, 0, 0.5)",
            primaryColor: "#f04",
            spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
            textColor: "#333",
            width: 380,
            zIndex: 100,
          }),
          (nr = {
            backgroundColor: "transparent",
            border: 0,
            borderRadius: 0,
            color: "#555",
            cursor: "pointer",
            fontSize: 16,
            lineHeight: 1,
            padding: 8,
            WebkitAppearance: "none",
          }),
          (Xi = { borderRadius: 4, position: "absolute" });
        (Gs = { action: "init", controlled: !1, index: 0, lifecycle: X.INIT, origin: null, size: 0, status: Q.IDLE }),
          (Qi = Tc(ys(Gs, "controlled", "size"))),
          (sd = class {
            constructor(e) {
              V(this, "beaconPopper"),
                V(this, "tooltipPopper"),
                V(this, "data", new Map()),
                V(this, "listener"),
                V(this, "store", new Map()),
                V(this, "addListener", (i) => {
                  this.listener = i;
                }),
                V(this, "setSteps", (i) => {
                  let { size: o, status: a } = this.getState(),
                    s = { size: i.length, status: a };
                  this.data.set("steps", i), a === Q.WAITING && !o && i.length && (s.status = Q.RUNNING), this.setState(s);
                }),
                V(this, "getPopper", (i) => (i === "beacon" ? this.beaconPopper : this.tooltipPopper)),
                V(this, "setPopper", (i, o) => {
                  i === "beacon" ? (this.beaconPopper = o) : (this.tooltipPopper = o);
                }),
                V(this, "cleanupPoppers", () => {
                  (this.beaconPopper = null), (this.tooltipPopper = null);
                }),
                V(this, "close", (i = null) => {
                  let { index: o, status: a } = this.getState();
                  a === Q.RUNNING && this.setState({ ...this.getNextState({ action: ee.CLOSE, index: o + 1, origin: i }) });
                }),
                V(this, "go", (i) => {
                  let { controlled: o, status: a } = this.getState();
                  if (o || a !== Q.RUNNING) return;
                  let s = this.getSteps()[i];
                  this.setState({ ...this.getNextState({ action: ee.GO, index: i }), status: s ? a : Q.FINISHED });
                }),
                V(this, "info", () => this.getState()),
                V(this, "next", () => {
                  let { index: i, status: o } = this.getState();
                  o === Q.RUNNING && this.setState(this.getNextState({ action: ee.NEXT, index: i + 1 }));
                }),
                V(this, "open", () => {
                  let { status: i } = this.getState();
                  i === Q.RUNNING && this.setState({ ...this.getNextState({ action: ee.UPDATE, lifecycle: X.TOOLTIP }) });
                }),
                V(this, "prev", () => {
                  let { index: i, status: o } = this.getState();
                  o === Q.RUNNING && this.setState({ ...this.getNextState({ action: ee.PREV, index: i - 1 }) });
                }),
                V(this, "reset", (i = !1) => {
                  let { controlled: o } = this.getState();
                  o || this.setState({ ...this.getNextState({ action: ee.RESET, index: 0 }), status: i ? Q.RUNNING : Q.READY });
                }),
                V(this, "skip", () => {
                  let { status: i } = this.getState();
                  i === Q.RUNNING && this.setState({ action: ee.SKIP, lifecycle: X.INIT, status: Q.SKIPPED });
                }),
                V(this, "start", (i) => {
                  let { index: o, size: a } = this.getState();
                  this.setState({
                    ...this.getNextState({ action: ee.START, index: N.number(i) ? i : o }, !0),
                    status: a ? Q.RUNNING : Q.WAITING,
                  });
                }),
                V(this, "stop", (i = !1) => {
                  let { index: o, status: a } = this.getState();
                  [Q.FINISHED, Q.SKIPPED].includes(a) ||
                    this.setState({ ...this.getNextState({ action: ee.STOP, index: o + (i ? 1 : 0) }), status: Q.PAUSED });
                }),
                V(this, "update", (i) => {
                  var o, a;
                  if (!Zp(i, Qi)) throw new Error(`State is not valid. Valid keys: ${Qi.join(", ")}`);
                  this.setState({
                    ...this.getNextState(
                      {
                        ...this.getState(),
                        ...i,
                        action: (o = i.action) != null ? o : ee.UPDATE,
                        origin: (a = i.origin) != null ? a : null,
                      },
                      !0
                    ),
                  });
                });
              let { continuous: t = !1, stepIndex: r, steps: n = [] } = e ?? {};
              this.setState(
                {
                  action: ee.INIT,
                  controlled: N.number(r),
                  continuous: t,
                  index: N.number(r) ? r : 0,
                  lifecycle: X.INIT,
                  origin: null,
                  status: n.length ? Q.READY : Q.IDLE,
                },
                !0
              ),
                (this.beaconPopper = null),
                (this.tooltipPopper = null),
                (this.listener = null),
                this.setSteps(n);
            }
            getState() {
              return this.store.size
                ? {
                    action: this.store.get("action") || "",
                    controlled: this.store.get("controlled") || !1,
                    index: parseInt(this.store.get("index"), 10),
                    lifecycle: this.store.get("lifecycle") || "",
                    origin: this.store.get("origin") || null,
                    size: this.store.get("size") || 0,
                    status: this.store.get("status") || "",
                  }
                : { ...Gs };
            }
            getNextState(e, t = !1) {
              var r, n, i, o, a;
              let { action: s, controlled: u, index: l, size: c, status: p } = this.getState(),
                d = N.number(e.index) ? e.index : l,
                h = u && !t ? l : Math.min(Math.max(d, 0), c);
              return {
                action: (r = e.action) != null ? r : s,
                controlled: u,
                index: h,
                lifecycle: (n = e.lifecycle) != null ? n : X.INIT,
                origin: (i = e.origin) != null ? i : null,
                size: (o = e.size) != null ? o : c,
                status: h === c ? Q.FINISHED : (a = e.status) != null ? a : p,
              };
            }
            getSteps() {
              let e = this.data.get("steps");
              return Array.isArray(e) ? e : [];
            }
            hasUpdatedState(e) {
              let t = JSON.stringify(e),
                r = JSON.stringify(this.getState());
              return t !== r;
            }
            setState(e, t = !1) {
              let r = this.getState(),
                { action: n, index: i, lifecycle: o, origin: a = null, size: s, status: u } = { ...r, ...e };
              this.store.set("action", n),
                this.store.set("index", i),
                this.store.set("lifecycle", o),
                this.store.set("origin", a),
                this.store.set("size", s),
                this.store.set("status", u),
                t && (this.store.set("controlled", e.controlled), this.store.set("continuous", e.continuous)),
                this.listener && this.hasUpdatedState(r) && this.listener(this.getState());
            }
            getHelpers() {
              return {
                close: this.close,
                go: this.go,
                info: this.info,
                next: this.next,
                open: this.open,
                prev: this.prev,
                reset: this.reset,
                skip: this.skip,
              };
            }
          });
        (ud = class {
          constructor(e, t) {
            if (
              (V(this, "element"),
              V(this, "options"),
              V(this, "canBeTabbed", (r) => {
                let { tabIndex: n } = r;
                return n === null || n < 0 ? !1 : this.canHaveFocus(r);
              }),
              V(this, "canHaveFocus", (r) => {
                let n = /input|select|textarea|button|object/,
                  i = r.nodeName.toLowerCase();
                return ((n.test(i) && !r.getAttribute("disabled")) || (i === "a" && !!r.getAttribute("href"))) && this.isVisible(r);
              }),
              V(this, "findValidTabElements", () => [].slice.call(this.element.querySelectorAll("*"), 0).filter(this.canBeTabbed)),
              V(this, "handleKeyDown", (r) => {
                let { code: n = "Tab" } = this.options;
                r.code === n && this.interceptTab(r);
              }),
              V(this, "interceptTab", (r) => {
                r.preventDefault();
                let n = this.findValidTabElements(),
                  { shiftKey: i } = r;
                if (!n.length) return;
                let o = document.activeElement ? n.indexOf(document.activeElement) : 0;
                o === -1 || (!i && o + 1 === n.length) ? (o = 0) : i && o === 0 ? (o = n.length - 1) : (o += i ? -1 : 1), n[o].focus();
              }),
              V(this, "isHidden", (r) => {
                let n = r.offsetWidth <= 0 && r.offsetHeight <= 0,
                  i = window.getComputedStyle(r);
                return n && !r.innerHTML
                  ? !0
                  : (n && i.getPropertyValue("overflow") !== "visible") || i.getPropertyValue("display") === "none";
              }),
              V(this, "isVisible", (r) => {
                let n = r;
                for (; n; )
                  if (n instanceof HTMLElement) {
                    if (n === document.body) break;
                    if (this.isHidden(n)) return !1;
                    n = n.parentNode;
                  }
                return !0;
              }),
              V(this, "removeScope", () => {
                window.removeEventListener("keydown", this.handleKeyDown);
              }),
              V(this, "checkFocus", (r) => {
                document.activeElement !== r && (r.focus(), window.requestAnimationFrame(() => this.checkFocus(r)));
              }),
              V(this, "setFocus", () => {
                let { selector: r } = this.options;
                if (!r) return;
                let n = this.element.querySelector(r);
                n && window.requestAnimationFrame(() => this.checkFocus(n));
              }),
              !(e instanceof HTMLElement))
            )
              throw new TypeError("Invalid parameter: element must be an HTMLElement");
            (this.element = e), (this.options = t), window.addEventListener("keydown", this.handleKeyDown, !1), this.setFocus();
          }
        }),
          (cd = class extends nt {
            constructor(e) {
              if (
                (super(e),
                V(this, "beacon", null),
                V(this, "setBeaconRef", (n) => {
                  this.beacon = n;
                }),
                e.beaconComponent)
              )
                return;
              let t = document.head || document.getElementsByTagName("head")[0],
                r = document.createElement("style");
              (r.id = "joyride-beacon-animation"),
                e.nonce && r.setAttribute("nonce", e.nonce),
                r.appendChild(
                  document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `)
                ),
                t.appendChild(r);
            }
            componentDidMount() {
              let { shouldFocus: e } = this.props;
              N.domElement(this.beacon) || console.warn("beacon is not a valid DOM element"),
                setTimeout(() => {
                  N.domElement(this.beacon) && e && this.beacon.focus();
                }, 0);
            }
            componentWillUnmount() {
              let e = document.getElementById("joyride-beacon-animation");
              e?.parentNode && e.parentNode.removeChild(e);
            }
            render() {
              let {
                  beaconComponent: e,
                  continuous: t,
                  index: r,
                  isLastStep: n,
                  locale: i,
                  onClickOrHover: o,
                  size: a,
                  step: s,
                  styles: u,
                } = this.props,
                l = N.string(i.open) ? i.open : (0, Hp.default)(i.open),
                c = { "aria-label": l, onClick: o, onMouseEnter: o, ref: this.setBeaconRef, title: l },
                p;
              return (
                e
                  ? (p = J(e, { continuous: t, index: r, isLastStep: n, size: a, step: s, ...c }))
                  : (p = J(
                      "button",
                      {
                        key: "JoyrideBeacon",
                        className: "react-joyride__beacon",
                        "data-test-id": "button-beacon",
                        style: u.beacon,
                        type: "button",
                        ...c,
                      },
                      J("span", { style: u.beaconInner }),
                      J("span", { style: u.beaconOuter })
                    )),
                p
              );
            }
          });
        (dd = pd),
          (hd = class extends nt {
            constructor() {
              super(...arguments),
                V(this, "isActive", !1),
                V(this, "resizeTimeout"),
                V(this, "scrollTimeout"),
                V(this, "scrollParent"),
                V(this, "state", { isScrolling: !1, mouseOverSpotlight: !1, showSpotlight: !0 }),
                V(this, "handleMouseMove", (e) => {
                  let { mouseOverSpotlight: t } = this.state,
                    { height: r, left: n, position: i, top: o, width: a } = this.spotlightStyles,
                    s = i === "fixed" ? e.clientY : e.pageY,
                    u = i === "fixed" ? e.clientX : e.pageX,
                    l = s >= o && s <= o + r,
                    c = u >= n && u <= n + a && l;
                  c !== t && this.updateState({ mouseOverSpotlight: c });
                }),
                V(this, "handleScroll", () => {
                  let { target: e } = this.props,
                    t = ut(e);
                  if (this.scrollParent !== document) {
                    let { isScrolling: r } = this.state;
                    r || this.updateState({ isScrolling: !0, showSpotlight: !1 }),
                      clearTimeout(this.scrollTimeout),
                      (this.scrollTimeout = window.setTimeout(() => {
                        this.updateState({ isScrolling: !1, showSpotlight: !0 });
                      }, 50));
                  } else hr(t, "sticky") && this.updateState({});
                }),
                V(this, "handleResize", () => {
                  clearTimeout(this.resizeTimeout),
                    (this.resizeTimeout = window.setTimeout(() => {
                      this.isActive && this.forceUpdate();
                    }, 100));
                });
            }
            componentDidMount() {
              let { debug: e, disableScrolling: t, disableScrollParentFix: r = !1, target: n } = this.props,
                i = ut(n);
              (this.scrollParent = dn(i ?? document.body, r, !0)),
                (this.isActive = !0),
                !t &&
                  Sr(i, !0) &&
                  dt({
                    title: "step has a custom scroll parent and can cause trouble with scrolling",
                    data: [{ key: "parent", value: this.scrollParent }],
                    debug: e,
                  }),
                window.addEventListener("resize", this.handleResize);
            }
            componentDidUpdate(e) {
              var t;
              let { lifecycle: r, spotlightClicks: n } = this.props,
                { changed: i } = Xr(e, this.props);
              i("lifecycle", X.TOOLTIP) &&
                ((t = this.scrollParent) == null || t.addEventListener("scroll", this.handleScroll, { passive: !0 }),
                setTimeout(() => {
                  let { isScrolling: o } = this.state;
                  o || this.updateState({ showSpotlight: !0 });
                }, 100)),
                (i("spotlightClicks") || i("disableOverlay") || i("lifecycle")) &&
                  (n && r === X.TOOLTIP
                    ? window.addEventListener("mousemove", this.handleMouseMove, !1)
                    : r !== X.TOOLTIP && window.removeEventListener("mousemove", this.handleMouseMove));
            }
            componentWillUnmount() {
              var e;
              (this.isActive = !1),
                window.removeEventListener("mousemove", this.handleMouseMove),
                window.removeEventListener("resize", this.handleResize),
                clearTimeout(this.resizeTimeout),
                clearTimeout(this.scrollTimeout),
                (e = this.scrollParent) == null || e.removeEventListener("scroll", this.handleScroll);
            }
            get spotlightStyles() {
              var e, t, r;
              let { showSpotlight: n } = this.state,
                { disableScrollParentFix: i = !1, spotlightClicks: o, spotlightPadding: a = 0, styles: s, target: u } = this.props,
                l = ut(u),
                c = Us(l),
                p = hr(l),
                d = Kp(l, a, i);
              return {
                ...(Gi() ? s.spotlightLegacy : s.spotlight),
                height: Math.round(((e = c?.height) != null ? e : 0) + a * 2),
                left: Math.round(((t = c?.left) != null ? t : 0) - a),
                opacity: n ? 1 : 0,
                pointerEvents: o ? "none" : "auto",
                position: p ? "fixed" : "absolute",
                top: d,
                transition: "opacity 0.2s",
                width: Math.round(((r = c?.width) != null ? r : 0) + a * 2),
              };
            }
            updateState(e) {
              this.isActive && this.setState((t) => ({ ...t, ...e }));
            }
            render() {
              let { mouseOverSpotlight: e, showSpotlight: t } = this.state,
                { disableOverlay: r, disableOverlayClose: n, lifecycle: i, onClickOverlay: o, placement: a, styles: s } = this.props;
              if (r || i !== X.TOOLTIP) return null;
              let u = s.overlay;
              Gi() && (u = a === "center" ? s.overlayLegacyCenter : s.overlayLegacy);
              let l = { cursor: n ? "default" : "pointer", height: qp(), pointerEvents: e ? "none" : "auto", ...u },
                c = a !== "center" && t && J(dd, { styles: this.spotlightStyles });
              if (Ws() === "safari") {
                let { mixBlendMode: p, zIndex: d, ...h } = l;
                (c = J("div", { style: { ...h } }, c)), delete l.backgroundColor;
              }
              return J(
                "div",
                { className: "react-joyride__overlay", "data-test-id": "overlay", onClick: o, role: "presentation", style: l },
                c
              );
            }
          }),
          (fd = class extends nt {
            constructor() {
              super(...arguments), V(this, "node", null);
            }
            componentDidMount() {
              let { id: e } = this.props;
              st() &&
                ((this.node = document.createElement("div")),
                (this.node.id = e),
                document.body.appendChild(this.node),
                rr || this.renderReact15());
            }
            componentDidUpdate() {
              st() && (rr || this.renderReact15());
            }
            componentWillUnmount() {
              !st() ||
                !this.node ||
                (rr || oi(this.node), this.node.parentNode === document.body && (document.body.removeChild(this.node), (this.node = null)));
            }
            renderReact15() {
              if (!st()) return;
              let { children: e } = this.props;
              this.node && ii(this, e, this.node);
            }
            renderReact16() {
              if (!st() || !rr) return null;
              let { children: e } = this.props;
              return this.node ? Kt(e, this.node) : null;
            }
            render() {
              return rr ? this.renderReact16() : null;
            }
          });
        gd = md;
        (vd = yd),
          (bd = class extends nt {
            constructor() {
              super(...arguments),
                V(this, "handleClickBack", (e) => {
                  e.preventDefault();
                  let { helpers: t } = this.props;
                  t.prev();
                }),
                V(this, "handleClickClose", (e) => {
                  e.preventDefault();
                  let { helpers: t } = this.props;
                  t.close("button_close");
                }),
                V(this, "handleClickPrimary", (e) => {
                  e.preventDefault();
                  let { continuous: t, helpers: r } = this.props;
                  if (!t) {
                    r.close("button_primary");
                    return;
                  }
                  r.next();
                }),
                V(this, "handleClickSkip", (e) => {
                  e.preventDefault();
                  let { helpers: t } = this.props;
                  t.skip();
                }),
                V(this, "getElementsProps", () => {
                  let { continuous: e, isLastStep: t, setTooltipRef: r, step: n } = this.props,
                    i = lt(n.locale.back),
                    o = lt(n.locale.close),
                    a = lt(n.locale.last),
                    s = lt(n.locale.next),
                    u = lt(n.locale.skip),
                    l = e ? s : o;
                  return (
                    t && (l = a),
                    {
                      backProps: { "aria-label": i, "data-action": "back", onClick: this.handleClickBack, role: "button", title: i },
                      closeProps: { "aria-label": o, "data-action": "close", onClick: this.handleClickClose, role: "button", title: o },
                      primaryProps: {
                        "aria-label": l,
                        "data-action": "primary",
                        onClick: this.handleClickPrimary,
                        role: "button",
                        title: l,
                      },
                      skipProps: { "aria-label": u, "data-action": "skip", onClick: this.handleClickSkip, role: "button", title: u },
                      tooltipProps: { "aria-modal": !0, ref: r, role: "alertdialog" },
                    }
                  );
                });
            }
            render() {
              let { continuous: e, index: t, isLastStep: r, setTooltipRef: n, size: i, step: o } = this.props,
                { beaconComponent: a, tooltipComponent: s, ...u } = o,
                l;
              if (s) {
                let c = { ...this.getElementsProps(), continuous: e, index: t, isLastStep: r, size: i, step: u, setTooltipRef: n };
                l = J(s, { ...c });
              } else l = J(vd, { ...this.getElementsProps(), continuous: e, index: t, isLastStep: r, size: i, step: o });
              return l;
            }
          }),
          (xd = class extends nt {
            constructor() {
              super(...arguments),
                V(this, "scope", null),
                V(this, "tooltip", null),
                V(this, "handleClickHoverBeacon", (e) => {
                  let { step: t, store: r } = this.props;
                  (e.type === "mouseenter" && t.event !== "hover") || r.update({ lifecycle: X.TOOLTIP });
                }),
                V(this, "handleClickOverlay", () => {
                  let { helpers: e, step: t } = this.props;
                  t.disableOverlayClose || e.close("overlay");
                }),
                V(this, "setTooltipRef", (e) => {
                  this.tooltip = e;
                }),
                V(this, "setPopper", (e, t) => {
                  var r;
                  let { action: n, lifecycle: i, step: o, store: a } = this.props;
                  t === "wrapper" ? a.setPopper("beacon", e) : a.setPopper("tooltip", e),
                    a.getPopper("beacon") && a.getPopper("tooltip") && i === X.INIT && a.update({ action: n, lifecycle: X.READY }),
                    (r = o.floaterProps) != null && r.getPopper && o.floaterProps.getPopper(e, t);
                }),
                V(this, "renderTooltip", (e) => {
                  let { continuous: t, helpers: r, index: n, size: i, step: o } = this.props;
                  return J(bd, {
                    continuous: t,
                    helpers: r,
                    index: n,
                    isLastStep: n + 1 === i,
                    setTooltipRef: this.setTooltipRef,
                    size: i,
                    step: o,
                    ...e,
                  });
                });
            }
            componentDidMount() {
              let { debug: e, index: t } = this.props;
              dt({ title: `step:${t}`, data: [{ key: "props", value: this.props }], debug: e });
            }
            componentDidUpdate(e) {
              var t;
              let {
                  action: r,
                  callback: n,
                  continuous: i,
                  controlled: o,
                  debug: a,
                  helpers: s,
                  index: u,
                  lifecycle: l,
                  status: c,
                  step: p,
                  store: d,
                } = this.props,
                { changed: h, changedFrom: f } = Xr(e, this.props),
                v = s.info(),
                S = i && r !== ee.CLOSE && (u > 0 || r === ee.PREV),
                x = h("action") || h("index") || h("lifecycle") || h("status"),
                b = f("lifecycle", [X.TOOLTIP, X.INIT], X.INIT),
                y = h("action", [ee.NEXT, ee.PREV, ee.SKIP, ee.CLOSE]),
                P = o && u === e.index;
              if (
                (y && (b || P) && n({ ...v, index: e.index, lifecycle: X.COMPLETE, step: e.step, type: Ve.STEP_AFTER }),
                p.placement === "center" &&
                  c === Q.RUNNING &&
                  h("index") &&
                  r !== ee.START &&
                  l === X.INIT &&
                  d.update({ lifecycle: X.READY }),
                x)
              ) {
                let O = ut(p.target),
                  W = !!O;
                W && Xp(O)
                  ? (f("status", Q.READY, Q.RUNNING) || f("lifecycle", X.INIT, X.READY)) && n({ ...v, step: p, type: Ve.STEP_BEFORE })
                  : (console.warn(W ? "Target not visible" : "Target not mounted", p),
                    n({ ...v, type: Ve.TARGET_NOT_FOUND, step: p }),
                    o || d.update({ index: u + (r === ee.PREV ? -1 : 1) }));
              }
              f("lifecycle", X.INIT, X.READY) && d.update({ lifecycle: Yi(p) || S ? X.TOOLTIP : X.BEACON }),
                h("index") && dt({ title: `step:${l}`, data: [{ key: "props", value: this.props }], debug: a }),
                h("lifecycle", X.BEACON) && n({ ...v, step: p, type: Ve.BEACON }),
                h("lifecycle", X.TOOLTIP) &&
                  (n({ ...v, step: p, type: Ve.TOOLTIP }),
                  this.tooltip && ((this.scope = new ud(this.tooltip, { selector: "[data-action=primary]" })), this.scope.setFocus())),
                f("lifecycle", [X.TOOLTIP, X.INIT], X.INIT) && ((t = this.scope) == null || t.removeScope(), d.cleanupPoppers());
            }
            componentWillUnmount() {
              var e;
              (e = this.scope) == null || e.removeScope();
            }
            get open() {
              let { lifecycle: e, step: t } = this.props;
              return Yi(t) || e === X.TOOLTIP;
            }
            render() {
              let { continuous: e, debug: t, index: r, lifecycle: n, nonce: i, shouldScroll: o, size: a, step: s } = this.props,
                u = ut(s.target);
              return !Ys(s) || !N.domElement(u)
                ? null
                : J(
                    "div",
                    { key: `JoyrideStep-${r}`, className: "react-joyride__step" },
                    J(fd, { id: "react-joyride-portal" }, J(hd, { ...s, debug: t, lifecycle: n, onClickOverlay: this.handleClickOverlay })),
                    J(
                      Oo,
                      {
                        ...s.floaterProps,
                        component: this.renderTooltip,
                        debug: t,
                        getPopper: this.setPopper,
                        id: `react-joyride-step-${r}`,
                        open: this.open,
                        placement: s.placement,
                        target: s.target,
                      },
                      J(cd, {
                        beaconComponent: s.beaconComponent,
                        continuous: e,
                        index: r,
                        isLastStep: r + 1 === a,
                        locale: s.locale,
                        nonce: i,
                        onClickOrHover: this.handleClickHoverBeacon,
                        shouldFocus: o,
                        size: a,
                        step: s,
                        styles: s.styles,
                      })
                    )
                  );
            }
          }),
          (Xs = class extends nt {
            constructor(e) {
              super(e),
                V(this, "helpers"),
                V(this, "store"),
                V(this, "callback", (a) => {
                  let { callback: s } = this.props;
                  N.function(s) && s(a);
                }),
                V(this, "handleKeyboard", (a) => {
                  let { index: s, lifecycle: u } = this.state,
                    { steps: l } = this.props,
                    c = l[s];
                  u === X.TOOLTIP && a.code === "Escape" && c && !c.disableCloseOnEsc && this.store.close("keyboard");
                }),
                V(this, "syncState", (a) => {
                  this.setState(a);
                });
              let { debug: t, getHelpers: r, run: n, stepIndex: i } = e;
              (this.store = ld({ ...e, controlled: n && N.number(i) })), (this.helpers = this.store.getHelpers());
              let { addListener: o } = this.store;
              dt({
                title: "init",
                data: [
                  { key: "props", value: this.props },
                  { key: "state", value: this.state },
                ],
                debug: t,
              }),
                o(this.syncState),
                r && r(this.helpers),
                (this.state = this.store.getState());
            }
            componentDidMount() {
              if (!st()) return;
              let { debug: e, disableCloseOnEsc: t, run: r, steps: n } = this.props,
                { start: i } = this.store;
              Ki(n, e) && r && i(), t || document.body.addEventListener("keydown", this.handleKeyboard, { passive: !0 });
            }
            componentDidUpdate(e, t) {
              if (!st()) return;
              let { action: r, controlled: n, index: i, lifecycle: o, status: a } = this.state,
                { debug: s, run: u, stepIndex: l, steps: c } = this.props,
                { stepIndex: p, steps: d } = e,
                { reset: h, setSteps: f, start: v, stop: S, update: x } = this.store,
                { changed: b } = Xr(e, this.props),
                { changed: y, changedFrom: P } = Xr(t, this.state),
                O = or(c[i], this.props),
                W = !Oe(d, c),
                B = N.number(l) && b("stepIndex"),
                z = ut(O.target);
              if ((W && (Ki(c, s) ? f(c) : console.warn("Steps are not valid", c)), b("run") && (u ? v(l) : S()), B)) {
                let te = N.number(p) && p < l ? ee.NEXT : ee.PREV;
                r === ee.STOP && (te = ee.START),
                  [Q.FINISHED, Q.SKIPPED].includes(a) || x({ action: r === ee.CLOSE ? ee.CLOSE : te, index: l, lifecycle: X.INIT });
              }
              !n &&
                a === Q.RUNNING &&
                i === 0 &&
                !z &&
                (this.store.update({ index: i + 1 }), this.callback({ ...this.state, type: Ve.TARGET_NOT_FOUND, step: O }));
              let H = { ...this.state, index: i, step: O };
              if (y("action", [ee.NEXT, ee.PREV, ee.SKIP, ee.CLOSE]) && y("status", Q.PAUSED)) {
                let te = or(c[t.index], this.props);
                this.callback({ ...H, index: t.index, lifecycle: X.COMPLETE, step: te, type: Ve.STEP_AFTER });
              }
              if (y("status", [Q.FINISHED, Q.SKIPPED])) {
                let te = or(c[t.index], this.props);
                n || this.callback({ ...H, index: t.index, lifecycle: X.COMPLETE, step: te, type: Ve.STEP_AFTER }),
                  this.callback({ ...H, type: Ve.TOUR_END, step: te, index: t.index }),
                  h();
              } else
                P("status", [Q.IDLE, Q.READY], Q.RUNNING)
                  ? this.callback({ ...H, type: Ve.TOUR_START })
                  : (y("status") || y("action", ee.RESET)) && this.callback({ ...H, type: Ve.TOUR_STATUS });
              this.scrollToStep(t),
                O.placement === "center" && a === Q.RUNNING && o === X.INIT && this.store.update({ lifecycle: X.READY });
            }
            componentWillUnmount() {
              let { disableCloseOnEsc: e } = this.props;
              e || document.body.removeEventListener("keydown", this.handleKeyboard);
            }
            scrollToStep(e) {
              let { index: t, lifecycle: r, status: n } = this.state,
                {
                  debug: i,
                  disableScrollParentFix: o = !1,
                  scrollDuration: a,
                  scrollOffset: s = 20,
                  scrollToFirstStep: u = !1,
                  steps: l,
                } = this.props,
                c = or(l[t], this.props),
                p = ut(c.target),
                d = ed({ isFirstStep: t === 0, lifecycle: r, previousLifecycle: e.lifecycle, scrollToFirstStep: u, step: c, target: p });
              if (n === Q.RUNNING && d) {
                let h = Sr(p, o),
                  f = dn(p, o),
                  v = Math.floor(Qp(p, s, o)) || 0;
                dt({
                  title: "scrollToStep",
                  data: [
                    { key: "index", value: t },
                    { key: "lifecycle", value: r },
                    { key: "status", value: n },
                  ],
                  debug: i,
                });
                let S = this.store.getPopper("beacon"),
                  x = this.store.getPopper("tooltip");
                if (r === X.BEACON && S) {
                  let { offsets: b, placement: y } = S;
                  !["bottom"].includes(y) && !h && (v = Math.floor(b.popper.top - s));
                } else if (r === X.TOOLTIP && x) {
                  let { flipped: b, offsets: y, placement: P } = x;
                  ["top", "right", "left"].includes(P) && !b && !h ? (v = Math.floor(y.popper.top - s)) : (v -= c.spotlightPadding);
                }
                (v = v >= 0 ? v : 0),
                  n === Q.RUNNING &&
                    Jp(v, { element: f, duration: a }).then(() => {
                      setTimeout(() => {
                        var b;
                        (b = this.store.getPopper("tooltip")) == null || b.instance.update();
                      }, 10);
                    });
              }
            }
            render() {
              if (!st()) return null;
              let { index: e, status: t } = this.state,
                { continuous: r = !1, debug: n = !1, nonce: i, scrollToFirstStep: o = !1, steps: a } = this.props,
                s;
              if (t === Q.RUNNING && a[e]) {
                let u = or(a[e], this.props);
                s = J(xd, {
                  ...this.state,
                  callback: this.callback,
                  continuous: r,
                  debug: n,
                  helpers: this.helpers,
                  nonce: i,
                  shouldScroll: !u.disableScrolling && (e !== 0 || o),
                  step: u,
                  store: this.store,
                });
              }
              return J("div", { className: "react-joyride" }, s);
            }
          });
        V(Xs, "defaultProps", nd);
        wd = Xs;
        Ed = U.div(({ width: e, height: t, left: r, top: n }) => ({
          width: `${e}px`,
          height: `${t}px`,
          left: `${r}px`,
          top: `${n}px`,
          position: "relative",
          overflow: "hidden",
        }));
        (Od = U.button`
  all: unset;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background: ${({ theme: e, variant: t }) =>
    t === "primary" ? e.color.secondary : t === "secondary" ? e.color.lighter : t === "outline" ? "transparent" : e.color.secondary};
  color: ${({ theme: e, variant: t }) =>
    t === "primary" ? e.color.lightest : t === "secondary" || t === "outline" ? e.darkest : e.color.lightest};
  box-shadow: ${({ variant: e }) => (e === "primary" ? "none" : e === "secondary" || e === "outline" ? "#D9E8F2 0 0 0 1px inset" : "none")};
  height: 32px;
  font-size: 0.8125rem;
  font-weight: 700;
  font-family: ${({ theme: e }) => e.typography.fonts.base};
  transition: background-color, box-shadow, opacity;
  transition-duration: 0.16s;
  transition-timing-function: ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ variant: e }) =>
      e === "primary" ? "#0b94eb" : e === "secondary" ? "#eef4f9" : e === "outline" ? "transparent" : "#0b94eb"};
  }

  &:focus {
    box-shadow: ${({ variant: e }) =>
      e === "primary"
        ? "inset 0 0 0 1px rgba(0, 0, 0, 0.2)"
        : e === "secondary" || e === "outline"
        ? "inset 0 0 0 1px #0b94eb"
        : "inset 0 0 0 2px rgba(0, 0, 0, 0.1)"};
  }
`),
          (De = Qt(function ({ children: e, onClick: t, variant: r = "primary", ...n }, i) {
            return m.createElement(Od, { ref: i, onClick: t, variant: r, ...n }, e);
          })),
          (Cd = U.div`
  background: ${({ theme: e }) => (e.base === "dark" ? "#292A2C" : e.color.lightest)};
  width: 260px;
  padding: 15px;
  border-radius: 5px;
`),
          (Ad = U.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`),
          (Rd = U.div`
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  color: ${({ theme: e }) => e.color.defaultText};
`),
          (Id = U.p`
  font-size: 13px;
  line-height: 18px;
  text-align: start;
  color: ${({ theme: e }) => e.color.defaultText};
  margin: 0;
  margin-top: 5px;
`),
          (kd = U.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`),
          (Md = ({ step: e, primaryProps: t, tooltipProps: r }) =>
            m.createElement(
              Cd,
              { ...r },
              m.createElement(Ad, null, e.title && m.createElement(Rd, null, e.title), m.createElement(Id, null, e.content)),
              !e.hideNextButton &&
                m.createElement(
                  kd,
                  { id: "buttonNext" },
                  m.createElement(De, { ...t, ...(e.onNextButtonClick ? { onClick: e.onNextButtonClick } : {}) }, "Next")
                )
            )),
          (Dd = U(kt)``),
          (Ld = U.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  max-height: 85vh;

  &:focus-visible {
    outline: none;
  }
`),
          (jd = U.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  font-family: ${({ theme: e }) => e.typography.fonts.base};
`),
          (Nd = U.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 44px;
`),
          (Vd = U.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  line-height: 18px;
  font-weight: bold;
  color: ${({ theme: e }) => e.color.darkest};
`),
          (Fd = U.div`
  font-size: 13px;
  line-height: 18px;
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  color: ${({ theme: e }) => e.color.darker};

  h3 {
    font-size: 13px;
    line-height: 18px;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
`),
          (Wr = U.span(({ theme: e }) => ({
            display: "inline-flex",
            borderRadius: 3,
            padding: "0 5px",
            marginBottom: -2,
            opacity: 0.8,
            fontFamily: e.typography.fonts.mono,
            fontSize: 11,
            border: e.base === "dark" ? e.color.darkest : e.color.lightest,
            color: e.base === "dark" ? e.color.lightest : e.color.darkest,
            backgroundColor: e.base === "dark" ? "black" : e.color.light,
            boxSizing: "border-box",
            lineHeight: "17px",
          }))),
          (Fn = U.img`
  max-width: 100%;
  margin-top: 1em;
`),
          (Bd = U.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`),
          (zd = bt`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (_d = U.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: -160px;
  top: -260px;
  background: radial-gradient(
    circle at center,
    rgba(255, 119, 119, 1) 0%,
    rgba(255, 119, 119, 0) 70%
  );
  animation: ${zd} 8s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 2;
`),
          (Hd = bt`
  0% { transform: translate(0px, 0px) }
  33% { transform: translate(-64px, 0px) }
  66% { transform: translate(120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (Ud = U.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: -54px;
  top: -250px;
  background: radial-gradient(
    circle at center,
    rgba(253, 255, 147, 1) 0%,
    rgba(253, 255, 147, 0) 70%
  );
  animation: ${Hd} 12s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 3;
`),
          (Wd = bt`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(-120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (qd = U.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: 150px;
  top: -220px;
  background: radial-gradient(
    circle at center,
    rgba(119, 255, 247, 0.8) 0%,
    rgba(119, 255, 247, 0) 70%
  );
  animation: ${Wd} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 4;
`),
          (Fr = U.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 4px;
`),
          (Yd = U.div`
  margin-bottom: 4px;
`);
        (Kd = U(kt)`
  background: white;
`),
          (Qd = U.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`),
          (Jd = U.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`),
          (Zd = U.h1`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  color: ${({ theme: e }) => e.color.darkest};
  font-weight: ${({ theme: e }) => e.typography.weight.bold};
  font-size: ${({ theme: e }) => e.typography.size.m1}px;
  line-height: ${({ theme: e }) => e.typography.size.m3}px;
`),
          ($d = U.p`
  margin: 0;
  margin-bottom: 20px;
  max-width: 320px;
  text-align: center;
  font-size: ${({ theme: e }) => e.typography.size.s2}px;
  font-weight: ${({ theme: e }) => e.typography.weight.regular};
  line-height: ${({ theme: e }) => e.typography.size.m1}px;
  color: ${({ theme: e }) => e.color.darker};
`),
          (eh = U.button`
  all: unset;
  cursor: pointer;
  font-size: 13px;
  color: #798186;
  padding-bottom: 20px;

  &:focus-visible {
    outline: auto;
  }
`),
          (th = U(mi)`
  margin-left: 2px;
  height: 10px;
`),
          (rh = U.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`),
          (nh = bt`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(-200px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (oh = U.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -200px;
  top: -900px;
  background: radial-gradient(
    circle at center,
    rgba(253, 255, 147, 1) 0%,
    rgba(253, 255, 147, 0) 70%
  );
  animation: ${nh} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 3;
`),
          (ih = bt`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(400px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (ah = U.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -600px;
  top: -840px;
  background: radial-gradient(
    circle at center,
    rgba(255, 119, 119, 1) 0%,
    rgba(255, 119, 119, 0) 70%
  );
  animation: ${ih} 6s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 2;
`),
          (sh = bt`
  0% { transform: translate(600px, -40px) }
  50% { transform: translate(600px, -200px) }
  100% { transform: translate(600px, -40px) }
`),
          (lh = U.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -600px;
  top: -840px;
  background: radial-gradient(
    circle at center,
    rgba(119, 255, 247, 0.8) 0%,
    rgba(119, 255, 247, 0) 70%
  );
  animation: ${sh} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 4;
`);
        U.h2`
  color: #000;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`;
        U.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #454e54;
`;
        (uh = ({ onProceed: e, skipOnboarding: t, container: r }) =>
          m.createElement(
            "div",
            { style: { zIndex: 10 } },
            m.createElement(
              Kd,
              { width: 540, height: 430, defaultOpen: !0, container: r },
              m.createElement(
                Qd,
                { "data-chromatic": "ignore" },
                m.createElement(
                  Jd,
                  null,
                  m.createElement(Xd, null),
                  m.createElement(Zd, null, "Welcome to Storybook"),
                  m.createElement($d, null, "Storybook helps you develop UI components faster. Learn the basics in a few simple steps."),
                  m.createElement(De, { style: { marginTop: 4 }, onClick: e }, "Start your 3 minute tour")
                ),
                m.createElement(eh, { onClick: t }, "Skip tour", m.createElement(th, null)),
                m.createElement(rh, null, m.createElement(oh, null), m.createElement(ah, null), m.createElement(lh, null))
              )
            )
          )),
          (Ji = mt(rc()));
        (hh = ["x", "y", "top", "bottom", "left", "right", "width", "height"]),
          (fh = (e, t) => hh.every((r) => e[r] === t[r])),
          (Js = ot({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" })),
          (hn = ot({})),
          (Co = ot(null)),
          (fn = typeof document < "u"),
          (mh = fn ? Dr : de),
          (Zs = ot({ strict: !1 })),
          (Ao = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
          (gh = "framerAppearId"),
          ($s = "data-" + Ao(gh)),
          (el = { skipAnimations: !1, useManualTiming: !1 }),
          (Zi = class {
            constructor() {
              (this.order = []), (this.scheduled = new Set());
            }
            add(e) {
              if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0;
            }
            remove(e) {
              let t = this.order.indexOf(e);
              t !== -1 && (this.order.splice(t, 1), this.scheduled.delete(e));
            }
            clear() {
              (this.order.length = 0), this.scheduled.clear();
            }
          });
        (Br = ["prepare", "read", "update", "preRender", "render", "postRender"]), (vh = 40);
        ({ schedule: Ro, cancel: xS } = tl(queueMicrotask, !1));
        (Io = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]), (ko = ["initial", ...Io]);
        (ea = {
          animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        }),
          (mr = {});
        for (let e in ea) mr[e] = { isEnabled: (t) => ea[e].some((r) => !!t[r]) };
        (nl = ot({})), (ol = ot({})), (Sh = Symbol.for("motionComponentSymbol"));
        Ah = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
        Zr = {};
        (Pr = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ]),
          (Ct = new Set(Pr));
        (Ae = (e) => !!(e && e.getVelocity)),
          (Ih = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }),
          (kh = Pr.length);
        (al = (e) => (t) => typeof t == "string" && t.startsWith(e)),
          (sl = al("--")),
          (Dh = al("var(--")),
          ($r = (e) => Dh(e) && Lh.test(e)),
          (Lh = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i),
          (jh = (e, t) => (t && typeof e == "number" ? t.transform(e) : e)),
          (ht = (e, t, r) => (r > t ? t : r < e ? e : r)),
          (Wt = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e }),
          (ur = { ...Wt, transform: (e) => ht(0, 1, e) }),
          (zr = { ...Wt, default: 1 }),
          (cr = (e) => Math.round(e * 1e5) / 1e5),
          (Do = /(-)?([\d]*\.?[\d])+/g),
          (Nh = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi),
          (Vh = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i);
        (Cr = (e) => ({
          test: (t) => Or(t) && t.endsWith(e) && t.split(" ").length === 1,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        })),
          (it = Cr("deg")),
          (Xe = Cr("%")),
          (_ = Cr("px")),
          (Fh = Cr("vh")),
          (Bh = Cr("vw")),
          (ta = { ...Xe, parse: (e) => Xe.parse(e) / 100, transform: (e) => Xe.transform(e * 100) }),
          (ra = { ...Wt, transform: Math.round }),
          (ll = {
            borderWidth: _,
            borderTopWidth: _,
            borderRightWidth: _,
            borderBottomWidth: _,
            borderLeftWidth: _,
            borderRadius: _,
            radius: _,
            borderTopLeftRadius: _,
            borderTopRightRadius: _,
            borderBottomRightRadius: _,
            borderBottomLeftRadius: _,
            width: _,
            maxWidth: _,
            height: _,
            maxHeight: _,
            size: _,
            top: _,
            right: _,
            bottom: _,
            left: _,
            padding: _,
            paddingTop: _,
            paddingRight: _,
            paddingBottom: _,
            paddingLeft: _,
            margin: _,
            marginTop: _,
            marginRight: _,
            marginBottom: _,
            marginLeft: _,
            rotate: it,
            rotateX: it,
            rotateY: it,
            rotateZ: it,
            scale: zr,
            scaleX: zr,
            scaleY: zr,
            scaleZ: zr,
            skew: it,
            skewX: it,
            skewY: it,
            distance: _,
            translateX: _,
            translateY: _,
            translateZ: _,
            x: _,
            y: _,
            z: _,
            perspective: _,
            transformPerspective: _,
            opacity: ur,
            originX: ta,
            originY: ta,
            originZ: _,
            zIndex: ra,
            fillOpacity: ur,
            strokeOpacity: ur,
            numOctaves: ra,
          });
        jo = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
        Uh = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "ignoreStrict",
          "viewport",
        ]);
        cl = (e) => !en(e);
        try {
          Wh((ic(), Gu(ds)).default);
        } catch {}
        (Gh = { offset: "stroke-dashoffset", array: "stroke-dasharray" }), (Xh = { offset: "strokeDashoffset", array: "strokeDasharray" });
        (pl = () => ({ ...jo(), attrs: {} })), (Vo = (e) => typeof e == "string" && e.toLowerCase() === "svg");
        hl = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]);
        (tn = (e) => Array.isArray(e)),
          ($h = (e) => !!(e && typeof e == "object" && e.mix && e.toValue)),
          (ef = (e) => (tn(e) ? e[e.length - 1] || 0 : e));
        gl = (e) => (t, r) => {
          let n = be(hn),
            i = be(Co),
            o = () => tf(e, t, n, i);
          return r ? o() : Zh(o);
        };
        (fe = (e) => e),
          ({ schedule: le, cancel: tt, state: ve, steps: Bn } = tl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : fe, !0)),
          (nf = {
            useVisualState: gl({
              scrapeMotionValuesFromProps: ml,
              createRenderState: pl,
              onMount: (e, t, { renderState: r, latestValues: n }) => {
                le.read(() => {
                  try {
                    r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
                  } catch {
                    r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                  }
                }),
                  le.render(() => {
                    No(r, n, { enableHardwareAcceleration: !1 }, Vo(t.tagName), e.transformTemplate), fl(t, r);
                  });
              },
            }),
          }),
          (of = { useVisualState: gl({ scrapeMotionValuesFromProps: Fo, createRenderState: jo }) });
        yl = (e) => (e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1);
        sf = (e) => (t) => yl(t) && e(t, yn(t));
        (lf = (e, t) => (r) => t(e(r))), ($e = (...e) => e.reduce(lf));
        (oa = vl("dragHorizontal")), (ia = vl("dragVertical"));
        gt = class {
          constructor(e) {
            (this.isMounted = !1), (this.node = e);
          }
          update() {}
        };
        (uf = class extends gt {
          mount() {
            this.unmount = $e(aa(this.node, !0), aa(this.node, !1));
          }
          unmount() {}
        }),
          (cf = class extends gt {
            constructor() {
              super(...arguments), (this.isActive = !1);
            }
            onFocus() {
              let e = !1;
              try {
                e = this.node.current.matches(":focus-visible");
              } catch {
                e = !0;
              }
              !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
            }
            onBlur() {
              !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
            }
            mount() {
              this.unmount = $e(
                Je(this.node.current, "focus", () => this.onFocus()),
                Je(this.node.current, "blur", () => this.onBlur())
              );
            }
            unmount() {}
          }),
          (wl = (e, t) => (t ? (e === t ? !0 : wl(e, t.parentElement)) : !1));
        (pf = class extends gt {
          constructor() {
            super(...arguments),
              (this.removeStartListeners = fe),
              (this.removeEndListeners = fe),
              (this.removeAccessibleListeners = fe),
              (this.startPointerPress = (e, t) => {
                if (this.isPressing) return;
                this.removeEndListeners();
                let r = this.node.getProps(),
                  n = Ze(
                    window,
                    "pointerup",
                    (o, a) => {
                      if (!this.checkPressEnd()) return;
                      let { onTap: s, onTapCancel: u, globalTapTarget: l } = this.node.getProps();
                      le.update(() => {
                        !l && !wl(this.node.current, o.target) ? u && u(o, a) : s && s(o, a);
                      });
                    },
                    { passive: !(r.onTap || r.onPointerUp) }
                  ),
                  i = Ze(window, "pointercancel", (o, a) => this.cancelPress(o, a), { passive: !(r.onTapCancel || r.onPointerCancel) });
                (this.removeEndListeners = $e(n, i)), this.startPress(e, t);
              }),
              (this.startAccessiblePress = () => {
                let e = (i) => {
                    if (i.key !== "Enter" || this.isPressing) return;
                    let o = (a) => {
                      a.key !== "Enter" ||
                        !this.checkPressEnd() ||
                        zn("up", (s, u) => {
                          let { onTap: l } = this.node.getProps();
                          l && le.update(() => l(s, u));
                        });
                    };
                    this.removeEndListeners(),
                      (this.removeEndListeners = Je(this.node.current, "keyup", o)),
                      zn("down", (a, s) => {
                        this.startPress(a, s);
                      });
                  },
                  t = Je(this.node.current, "keydown", e),
                  r = () => {
                    this.isPressing && zn("cancel", (i, o) => this.cancelPress(i, o));
                  },
                  n = Je(this.node.current, "blur", r);
                this.removeAccessibleListeners = $e(t, n);
              });
          }
          startPress(e, t) {
            this.isPressing = !0;
            let { onTapStart: r, whileTap: n } = this.node.getProps();
            n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && le.update(() => r(e, t));
          }
          checkPressEnd() {
            return (
              this.removeEndListeners(),
              (this.isPressing = !1),
              this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
              !xl()
            );
          }
          cancelPress(e, t) {
            if (!this.checkPressEnd()) return;
            let { onTapCancel: r } = this.node.getProps();
            r && le.update(() => r(e, t));
          }
          mount() {
            let e = this.node.getProps(),
              t = Ze(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(e.onTapStart || e.onPointerStart),
              }),
              r = Je(this.node.current, "focus", this.startAccessiblePress);
            this.removeStartListeners = $e(t, r);
          }
          unmount() {
            this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
          }
        }),
          (no = new WeakMap()),
          (_n = new WeakMap()),
          (df = (e) => {
            let t = no.get(e.target);
            t && t(e);
          }),
          (hf = (e) => {
            e.forEach(df);
          });
        (gf = { some: 0, all: 1 }),
          (yf = class extends gt {
            constructor() {
              super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
            }
            startObserver() {
              this.unmount();
              let { viewport: e = {} } = this.node.getProps(),
                { root: t, margin: r, amount: n = "some", once: i } = e,
                o = { root: t ? t.current : void 0, rootMargin: r, threshold: typeof n == "number" ? n : gf[n] },
                a = (s) => {
                  let { isIntersecting: u } = s;
                  if (this.isInView === u || ((this.isInView = u), i && !u && this.hasEnteredView)) return;
                  u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
                  let { onViewportEnter: l, onViewportLeave: c } = this.node.getProps(),
                    p = u ? l : c;
                  p && p(s);
                };
              return mf(this.node.current, o, a);
            }
            mount() {
              this.startObserver();
            }
            update() {
              if (typeof IntersectionObserver > "u") return;
              let { props: e, prevProps: t } = this.node;
              ["amount", "margin", "root"].some(vf(e, t)) && this.startObserver();
            }
            unmount() {}
          });
        bf = { inView: { Feature: yf }, tap: { Feature: pf }, focus: { Feature: cf }, hover: { Feature: uf } };
        (Ar = fe), (Fe = fe);
        (Ar = (e, t) => {
          !e && typeof console < "u" && console.warn(t);
        }),
          (Fe = (e, t) => {
            if (!e) throw new Error(t);
          });
        (ct = (e) => e * 1e3), (et = (e) => e / 1e3), (Tf = { current: !1 }), (El = (e) => Array.isArray(e) && typeof e[0] == "number");
        (sr = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`),
          (Pl = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: sr([0, 0.65, 0.55, 1]),
            circOut: sr([0.55, 0, 1, 0.45]),
            backIn: sr([0.31, 0.01, 0.66, -0.59]),
            backOut: sr([0.33, 1.53, 0.69, 0.99]),
          });
        (Cl = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e), (Pf = 1e-7), (Of = 12);
        (Af = Rr(0.42, 0, 1, 1)),
          (Rf = Rr(0, 0, 0.58, 1)),
          (Al = Rr(0.42, 0, 0.58, 1)),
          (If = (e) => Array.isArray(e) && typeof e[0] != "number"),
          (Rl = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
          (Il = (e) => (t) => 1 - e(1 - t)),
          (zo = (e) => 1 - Math.sin(Math.acos(e))),
          (kl = Il(zo)),
          (kf = Rl(zo)),
          (Ml = Rr(0.33, 1.53, 0.69, 0.99)),
          (_o = Il(Ml)),
          (Mf = Rl(_o)),
          (Df = (e) => ((e *= 2) < 1 ? 0.5 * _o(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))))),
          (sa = {
            linear: fe,
            easeIn: Af,
            easeInOut: Al,
            easeOut: Rf,
            circIn: zo,
            circInOut: kf,
            circOut: kl,
            backIn: _o,
            backInOut: Mf,
            backOut: Ml,
            anticipate: Df,
          }),
          (la = (e) => {
            if (Array.isArray(e)) {
              Fe(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
              let [t, r, n, i] = e;
              return Rr(t, r, n, i);
            } else if (typeof e == "string") return Fe(sa[e] !== void 0, `Invalid easing type '${e}'`), sa[e];
            return e;
          }),
          (gr = (e, t, r) => {
            let n = t - e;
            return n === 0 ? 1 : (r - e) / n;
          }),
          (se = (e, t, r) => e + (t - e) * r);
        (Ho = (e, t) => (r) => !!((Or(r) && Vh.test(r) && r.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(r, t)))),
          (Dl = (e, t, r) => (n) => {
            if (!Or(n)) return n;
            let [i, o, a, s] = n.match(Do);
            return { [e]: parseFloat(i), [t]: parseFloat(o), [r]: parseFloat(a), alpha: s !== void 0 ? parseFloat(s) : 1 };
          }),
          (jf = (e) => ht(0, 255, e)),
          (Un = { ...Wt, transform: (e) => Math.round(jf(e)) }),
          (St = {
            test: Ho("rgb", "red"),
            parse: Dl("red", "green", "blue"),
            transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
              "rgba(" + Un.transform(e) + ", " + Un.transform(t) + ", " + Un.transform(r) + ", " + cr(ur.transform(n)) + ")",
          });
        (oo = { test: Ho("#"), parse: Nf, transform: St.transform }),
          (Dt = {
            test: Ho("hsl", "hue"),
            parse: Dl("hue", "saturation", "lightness"),
            transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
              "hsla(" + Math.round(e) + ", " + Xe.transform(cr(t)) + ", " + Xe.transform(cr(r)) + ", " + cr(ur.transform(n)) + ")",
          }),
          (Wn = (e, t, r) => {
            let n = e * e,
              i = r * (t * t - n) + n;
            return i < 0 ? 0 : Math.sqrt(i);
          }),
          (Vf = [oo, St, Dt]),
          (Ff = (e) => Vf.find((t) => t.test(e)));
        (ca = (e, t) => {
          let r = ua(e),
            n = ua(t),
            i = { ...r };
          return (o) => (
            (i.red = Wn(r.red, n.red, o)),
            (i.green = Wn(r.green, n.green, o)),
            (i.blue = Wn(r.blue, n.blue, o)),
            (i.alpha = se(r.alpha, n.alpha, o)),
            St.transform(i)
          );
        }),
          (xe = {
            test: (e) => St.test(e) || oo.test(e) || Dt.test(e),
            parse: (e) => (St.test(e) ? St.parse(e) : Dt.test(e) ? Dt.parse(e) : oo.parse(e)),
            transform: (e) => (Or(e) ? e : e.hasOwnProperty("red") ? St.transform(e) : Dt.transform(e)),
          });
        (Ll = "number"),
          (jl = "color"),
          (zf = "var"),
          (_f = "var("),
          (pa = "${}"),
          (da =
            /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi);
        Hf = (e) => (typeof e == "number" ? 0 : e);
        ft = { test: Bf, parse: Nl, createTransformer: Vl, getAnimatableNone: Uf };
        Gf = (e, t) => {
          let r = ft.createTransformer(t),
            n = rn(e),
            i = rn(t);
          return n.indexes.var.length === i.indexes.var.length &&
            n.indexes.color.length === i.indexes.color.length &&
            n.indexes.number.length >= i.indexes.number.length
            ? $e(Fl(Yf(n, i), i.values), r)
            : (Ar(
                !0,
                `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              io(e, t));
        };
        em = 5;
        (qn = 0.001), (tm = 0.01), (ha = 10), (rm = 0.05), (nm = 1);
        im = 12;
        (sm = ["duration", "bounce"]), (lm = ["stiffness", "damping", "mass"]);
        (Pt = {
          now: () => (Yr === void 0 && Pt.set(ve.isProcessing || el.useManualTiming ? ve.timestamp : performance.now()), Yr),
          set: (e) => {
            (Yr = e), queueMicrotask(cm);
          },
        }),
          (pm = (e) => {
            let t = ({ timestamp: r }) => e(r);
            return { start: () => le.update(t, !0), stop: () => tt(t), now: () => (ve.isProcessing ? ve.timestamp : Pt.now()) };
          });
        (dm = { decay: ma, inertia: ma, tween: nn, keyframes: nn, spring: Hl }), (hm = (e) => e / 100);
        (mm = fm(() => Object.hasOwnProperty.call(Element.prototype, "animate"))),
          (gm = new Set(["opacity", "clipPath", "filter", "transform"])),
          (_r = 10),
          (ym = 2e4),
          (vm = (e, t) => t.type === "spring" || e === "backgroundColor" || !Sl(t.ease));
        (wm = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }),
          (Tm = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 })),
          (Em = { type: "keyframes", duration: 0.8 }),
          (Sm = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }),
          (Pm = (e, { keyframes: t }) => (t.length > 2 ? Em : Ct.has(e) ? (e.startsWith("scale") ? Tm(t[1]) : wm) : Sm)),
          (so = (e, t) =>
            e === "zIndex"
              ? !1
              : !!(
                  typeof t == "number" ||
                  Array.isArray(t) ||
                  (typeof t == "string" && (ft.test(t) || t === "0") && !t.startsWith("url("))
                )),
          (Om = new Set(["brightness", "contrast", "saturate", "opacity"]));
        (Am = /([a-z-]*)\(.*?\)/g),
          (lo = {
            ...ft,
            getAnimatableNone: (e) => {
              let t = e.match(Am);
              return t ? t.map(Cm).join(" ") : e;
            },
          }),
          (Rm = {
            ...ll,
            color: xe,
            backgroundColor: xe,
            outlineColor: xe,
            fill: xe,
            stroke: xe,
            borderColor: xe,
            borderTopColor: xe,
            borderRightColor: xe,
            borderBottomColor: xe,
            borderLeftColor: xe,
            filter: lo,
            WebkitFilter: lo,
          }),
          (Wo = (e) => Rm[e]);
        Wl = (e) => /^0[^.\s]+$/.test(e);
        Yo =
          (e, t, r, n = {}) =>
          (i) => {
            let o = qo(n, e) || {},
              a = o.delay || n.delay || 0,
              { elapsed: s = 0 } = n;
            s = s - ct(a);
            let u = km(t, e, r, o),
              l = u[0],
              c = u[u.length - 1],
              p = so(e, l),
              d = so(e, c);
            Ar(
              p === d,
              `You are trying to animate ${e} from "${l}" to "${c}". ${l} is not an animatable value - to enable this animation set ${l} to a value animatable to ${c} via the \`style\` property.`
            );
            let h = {
              keyframes: u,
              velocity: t.getVelocity(),
              ease: "easeOut",
              ...o,
              delay: -s,
              onUpdate: (f) => {
                t.set(f), o.onUpdate && o.onUpdate(f);
              },
              onComplete: () => {
                i(), o.onComplete && o.onComplete();
              },
            };
            if (
              (Mm(o) || (h = { ...h, ...Pm(e, h) }),
              h.duration && (h.duration = ct(h.duration)),
              h.repeatDelay && (h.repeatDelay = ct(h.repeatDelay)),
              !p || !d || Tf.current || o.type === !1 || el.skipAnimations)
            )
              return xm(h);
            if (!n.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
              let f = bm(t, e, h);
              if (f) return f;
            }
            return on(h);
          };
        ql = (e) => /^\-?\d*\.?\d+$/.test(e);
        (Ko = class {
          constructor() {
            this.subscriptions = [];
          }
          add(e) {
            return Go(this.subscriptions, e), () => Xo(this.subscriptions, e);
          }
          notify(e, t, r) {
            let n = this.subscriptions.length;
            if (n)
              if (n === 1) this.subscriptions[0](e, t, r);
              else
                for (let i = 0; i < n; i++) {
                  let o = this.subscriptions[i];
                  o && o(e, t, r);
                }
          }
          getSize() {
            return this.subscriptions.length;
          }
          clear() {
            this.subscriptions.length = 0;
          }
        }),
          (ya = new Set());
        (va = 30),
          (Dm = (e) => !isNaN(parseFloat(e))),
          (Lm = class {
            constructor(e, t = {}) {
              (this.version = "11.0.6"),
                (this.canTrackVelocity = !1),
                (this.events = {}),
                (this.updateAndNotify = (r, n = !0) => {
                  let i = Pt.now();
                  this.updatedAt !== i && this.setPrevFrameValue(),
                    (this.prev = this.current),
                    this.setCurrent(r),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    n && this.events.renderRequest && this.events.renderRequest.notify(this.current);
                }),
                (this.hasAnimated = !1),
                this.setCurrent(e),
                (this.canTrackVelocity = Dm(this.current)),
                (this.owner = t.owner);
            }
            setCurrent(e) {
              (this.current = e), (this.updatedAt = Pt.now());
            }
            setPrevFrameValue(e = this.current) {
              (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
            }
            onChange(e) {
              return Qo(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
            }
            on(e, t) {
              this.events[e] || (this.events[e] = new Ko());
              let r = this.events[e].add(t);
              return e === "change"
                ? () => {
                    r(),
                      le.read(() => {
                        this.events.change.getSize() || this.stop();
                      });
                  }
                : r;
            }
            clearListeners() {
              for (let e in this.events) this.events[e].clear();
            }
            attach(e, t) {
              (this.passiveEffect = e), (this.stopPassiveEffect = t);
            }
            set(e, t = !0) {
              !t || !this.passiveEffect ? this.updateAndNotify(e, t) : this.passiveEffect(e, this.updateAndNotify);
            }
            setWithVelocity(e, t, r) {
              this.set(t), (this.prev = void 0), (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt - r);
            }
            jump(e) {
              this.updateAndNotify(e),
                (this.prev = e),
                (this.prevUpdatedAt = this.prevFrameValue = void 0),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect();
            }
            get() {
              return this.current;
            }
            getPrevious() {
              return this.prev;
            }
            getVelocity() {
              let e = Pt.now();
              if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > va) return 0;
              let t = Math.min(this.updatedAt - this.prevUpdatedAt, va);
              return zl(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
            }
            start(e) {
              return (
                this.stop(),
                new Promise((t) => {
                  (this.hasAnimated = !0), (this.animation = e(t)), this.events.animationStart && this.events.animationStart.notify();
                }).then(() => {
                  this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
                })
              );
            }
            stop() {
              this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation();
            }
            isAnimating() {
              return !!this.animation;
            }
            clearAnimation() {
              delete this.animation;
            }
            destroy() {
              this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
            }
          });
        (Yl = (e) => (t) => t.test(e)),
          (jm = { test: (e) => e === "auto", parse: (e) => e }),
          (Gl = [Wt, _, Xe, it, Bh, Fh, jm]),
          (ir = (e) => Gl.find(Yl(e))),
          (Nm = [...Gl, xe, ft]),
          (Vm = (e) => Nm.find(Yl(e)));
        (Xm = [...Io].reverse()), (Km = Io.length);
        (eg = class extends gt {
          constructor(e) {
            super(e), e.animationState || (e.animationState = Jm(e));
          }
          updateAnimationControlsSubscription() {
            let { animate: e } = this.node.getProps();
            this.unmount(), mn(e) && (this.unmount = e.subscribe(this.node));
          }
          mount() {
            this.updateAnimationControlsSubscription();
          }
          update() {
            let { animate: e } = this.node.getProps(),
              { animate: t } = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription();
          }
          unmount() {}
        }),
          (tg = 0),
          (rg = class extends gt {
            constructor() {
              super(...arguments), (this.id = tg++);
            }
            update() {
              if (!this.node.presenceContext) return;
              let { isPresent: e, onExitComplete: t, custom: r } = this.node.presenceContext,
                { isPresent: n } = this.node.prevPresenceContext || {};
              if (!this.node.animationState || e === n) return;
              let i = this.node.animationState.setActive("exit", !e, { custom: r ?? this.node.getProps().custom });
              t && !e && i.then(() => t(this.id));
            }
            mount() {
              let { register: e } = this.node.presenceContext || {};
              e && (this.unmount = e(this.id));
            }
            unmount() {}
          }),
          (ng = { animation: { Feature: eg }, exit: { Feature: rg } }),
          (ba = (e, t) => Math.abs(e - t));
        Kl = class {
          constructor(e, t, { transformPagePoint: r, contextWindow: n, dragSnapToOrigin: i = !1 } = {}) {
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.contextWindow = window),
              (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                let c = Gn(this.lastMoveEventInfo, this.history),
                  p = this.startEvent !== null,
                  d = og(c.offset, { x: 0, y: 0 }) >= 3;
                if (!p && !d) return;
                let { point: h } = c,
                  { timestamp: f } = ve;
                this.history.push({ ...h, timestamp: f });
                let { onStart: v, onMove: S } = this.handlers;
                p || (v && v(this.lastMoveEvent, c), (this.startEvent = this.lastMoveEvent)), S && S(this.lastMoveEvent, c);
              }),
              (this.handlePointerMove = (c, p) => {
                (this.lastMoveEvent = c), (this.lastMoveEventInfo = Yn(p, this.transformPagePoint)), le.update(this.updatePoint, !0);
              }),
              (this.handlePointerUp = (c, p) => {
                this.end();
                let { onEnd: d, onSessionEnd: h, resumeAnimation: f } = this.handlers;
                if ((this.dragSnapToOrigin && f && f(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
                let v = Gn(c.type === "pointercancel" ? this.lastMoveEventInfo : Yn(p, this.transformPagePoint), this.history);
                this.startEvent && d && d(c, v), h && h(c, v);
              }),
              !yl(e))
            )
              return;
            (this.dragSnapToOrigin = i), (this.handlers = t), (this.transformPagePoint = r), (this.contextWindow = n || window);
            let o = yn(e),
              a = Yn(o, this.transformPagePoint),
              { point: s } = a,
              { timestamp: u } = ve;
            this.history = [{ ...s, timestamp: u }];
            let { onSessionStart: l } = t;
            l && l(e, Gn(a, this.history)),
              (this.removeListeners = $e(
                Ze(this.contextWindow, "pointermove", this.handlePointerMove),
                Ze(this.contextWindow, "pointerup", this.handlePointerUp),
                Ze(this.contextWindow, "pointercancel", this.handlePointerUp)
              ));
          }
          updateHandlers(e) {
            this.handlers = e;
          }
          end() {
            this.removeListeners && this.removeListeners(), tt(this.updatePoint);
          }
        };
        po = 0.35;
        (Aa = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 })),
          (Lt = () => ({ x: Aa(), y: Aa() })),
          (Ra = () => ({ min: 0, max: 0 })),
          (he = () => ({ x: Ra(), y: Ra() }));
        (yg = ["x", "scaleX", "originX"]), (vg = ["y", "scaleY", "originY"]);
        (tu = ({ current: e }) => (e ? e.ownerDocument.defaultView : null)),
          (xg = new WeakMap()),
          (wg = class {
            constructor(e) {
              (this.openGlobalLock = null),
                (this.isDragging = !1),
                (this.currentDirection = null),
                (this.originPoint = { x: 0, y: 0 }),
                (this.constraints = !1),
                (this.hasMutatedConstraints = !1),
                (this.elastic = he()),
                (this.visualElement = e);
            }
            start(e, { snapToCursor: t = !1 } = {}) {
              let { presenceContext: r } = this.visualElement;
              if (r && r.isPresent === !1) return;
              let n = (l) => {
                  let { dragSnapToOrigin: c } = this.getProps();
                  c ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(yn(l, "page").point);
                },
                i = (l, c) => {
                  let { drag: p, dragPropagation: d, onDragStart: h } = this.getProps();
                  if (p && !d && (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = bl(p)), !this.openGlobalLock))
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
                    Le((v) => {
                      let S = this.getAxisMotionValue(v).get() || 0;
                      if (Xe.test(S)) {
                        let { projection: x } = this.visualElement;
                        if (x && x.layout) {
                          let b = x.layout.layoutBox[v];
                          b && (S = Re(b) * (parseFloat(S) / 100));
                        }
                      }
                      this.originPoint[v] = S;
                    }),
                    h && le.update(() => h(l, c), !1, !0);
                  let { animationState: f } = this.visualElement;
                  f && f.setActive("whileDrag", !0);
                },
                o = (l, c) => {
                  let { dragPropagation: p, dragDirectionLock: d, onDirectionLock: h, onDrag: f } = this.getProps();
                  if (!p && !this.openGlobalLock) return;
                  let { offset: v } = c;
                  if (d && this.currentDirection === null) {
                    (this.currentDirection = Tg(v)), this.currentDirection !== null && h && h(this.currentDirection);
                    return;
                  }
                  this.updateAxis("x", c.point, v), this.updateAxis("y", c.point, v), this.visualElement.render(), f && f(l, c);
                },
                a = (l, c) => this.stop(l, c),
                s = () =>
                  Le((l) => {
                    var c;
                    return (
                      this.getAnimationState(l) === "paused" &&
                      ((c = this.getAxisMotionValue(l).animation) === null || c === void 0 ? void 0 : c.play())
                    );
                  }),
                { dragSnapToOrigin: u } = this.getProps();
              this.panSession = new Kl(
                e,
                { onSessionStart: n, onStart: i, onMove: o, onSessionEnd: a, resumeAnimation: s },
                {
                  transformPagePoint: this.visualElement.getTransformPagePoint(),
                  dragSnapToOrigin: u,
                  contextWindow: tu(this.visualElement),
                }
              );
            }
            stop(e, t) {
              let r = this.isDragging;
              if ((this.cancel(), !r)) return;
              let { velocity: n } = t;
              this.startAnimation(n);
              let { onDragEnd: i } = this.getProps();
              i && le.update(() => i(e, t));
            }
            cancel() {
              this.isDragging = !1;
              let { projection: e, animationState: t } = this.visualElement;
              e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
              let { dragPropagation: r } = this.getProps();
              !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)), t && t.setActive("whileDrag", !1);
            }
            updateAxis(e, t, r) {
              let { drag: n } = this.getProps();
              if (!r || !Hr(e, n, this.currentDirection)) return;
              let i = this.getAxisMotionValue(e),
                o = this.originPoint[e] + r[e];
              this.constraints && this.constraints[e] && (o = lg(o, this.constraints[e], this.elastic[e])), i.set(o);
            }
            resolveConstraints() {
              var e;
              let { dragConstraints: t, dragElastic: r } = this.getProps(),
                n =
                  this.visualElement.projection && !this.visualElement.projection.layout
                    ? this.visualElement.projection.measure(!1)
                    : (e = this.visualElement.projection) === null || e === void 0
                    ? void 0
                    : e.layout,
                i = this.constraints;
              t && Mt(t)
                ? this.constraints || (this.constraints = this.resolveRefConstraints())
                : t && n
                ? (this.constraints = ug(n.layoutBox, t))
                : (this.constraints = !1),
                (this.elastic = hg(r)),
                i !== this.constraints &&
                  n &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  Le((o) => {
                    this.getAxisMotionValue(o) && (this.constraints[o] = dg(n.layoutBox[o], this.constraints[o]));
                  });
            }
            resolveRefConstraints() {
              let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
              if (!e || !Mt(e)) return !1;
              let r = e.current;
              Fe(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
              let { projection: n } = this.visualElement;
              if (!n || !n.layout) return !1;
              let i = bg(r, n.root, this.visualElement.getTransformPagePoint()),
                o = cg(n.layout.layoutBox, i);
              if (t) {
                let a = t(fg(o));
                (this.hasMutatedConstraints = !!a), a && (o = Jl(a));
              }
              return o;
            }
            startAnimation(e) {
              let {
                  drag: t,
                  dragMomentum: r,
                  dragElastic: n,
                  dragTransition: i,
                  dragSnapToOrigin: o,
                  onDragTransitionEnd: a,
                } = this.getProps(),
                s = this.constraints || {},
                u = Le((l) => {
                  if (!Hr(l, t, this.currentDirection)) return;
                  let c = (s && s[l]) || {};
                  o && (c = { min: 0, max: 0 });
                  let p = n ? 200 : 1e6,
                    d = n ? 40 : 1e7,
                    h = {
                      type: "inertia",
                      velocity: r ? e[l] : 0,
                      bounceStiffness: p,
                      bounceDamping: d,
                      timeConstant: 750,
                      restDelta: 1,
                      restSpeed: 10,
                      ...i,
                      ...c,
                    };
                  return this.startAxisValueAnimation(l, h);
                });
              return Promise.all(u).then(a);
            }
            startAxisValueAnimation(e, t) {
              let r = this.getAxisMotionValue(e);
              return r.start(Yo(e, r, 0, t));
            }
            stopAnimation() {
              Le((e) => this.getAxisMotionValue(e).stop());
            }
            pauseAnimation() {
              Le((e) => {
                var t;
                return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.pause();
              });
            }
            getAnimationState(e) {
              var t;
              return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.state;
            }
            getAxisMotionValue(e) {
              let t = "_drag" + e.toUpperCase(),
                r = this.visualElement.getProps();
              return r[t] || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0);
            }
            snapToCursor(e) {
              Le((t) => {
                let { drag: r } = this.getProps();
                if (!Hr(t, r, this.currentDirection)) return;
                let { projection: n } = this.visualElement,
                  i = this.getAxisMotionValue(t);
                if (n && n.layout) {
                  let { min: o, max: a } = n.layout.layoutBox[t];
                  i.set(e[t] - se(o, a, 0.5));
                }
              });
            }
            scalePositionWithinConstraints() {
              if (!this.visualElement.current) return;
              let { drag: e, dragConstraints: t } = this.getProps(),
                { projection: r } = this.visualElement;
              if (!Mt(t) || !r || !this.constraints) return;
              this.stopAnimation();
              let n = { x: 0, y: 0 };
              Le((o) => {
                let a = this.getAxisMotionValue(o);
                if (a) {
                  let s = a.get();
                  n[o] = pg({ min: s, max: s }, this.constraints[o]);
                }
              });
              let { transformTemplate: i } = this.visualElement.getProps();
              (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
                r.root && r.root.updateScroll(),
                r.updateLayout(),
                this.resolveConstraints(),
                Le((o) => {
                  if (!Hr(o, e, null)) return;
                  let a = this.getAxisMotionValue(o),
                    { min: s, max: u } = this.constraints[o];
                  a.set(se(s, u, n[o]));
                });
            }
            addListeners() {
              if (!this.visualElement.current) return;
              xg.set(this.visualElement, this);
              let e = this.visualElement.current,
                t = Ze(e, "pointerdown", (s) => {
                  let { drag: u, dragListener: l = !0 } = this.getProps();
                  u && l && this.start(s);
                }),
                r = () => {
                  let { dragConstraints: s } = this.getProps();
                  Mt(s) && (this.constraints = this.resolveRefConstraints());
                },
                { projection: n } = this.visualElement,
                i = n.addEventListener("measure", r);
              n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), r();
              let o = Je(window, "resize", () => this.scalePositionWithinConstraints()),
                a = n.addEventListener("didUpdate", ({ delta: s, hasLayoutChanged: u }) => {
                  this.isDragging &&
                    u &&
                    (Le((l) => {
                      let c = this.getAxisMotionValue(l);
                      c && ((this.originPoint[l] += s[l].translate), c.set(c.get() + s[l].translate));
                    }),
                    this.visualElement.render());
                });
              return () => {
                o(), t(), i(), a && a();
              };
            }
            getProps() {
              let e = this.visualElement.getProps(),
                {
                  drag: t = !1,
                  dragDirectionLock: r = !1,
                  dragPropagation: n = !1,
                  dragConstraints: i = !1,
                  dragElastic: o = po,
                  dragMomentum: a = !0,
                } = e;
              return { ...e, drag: t, dragDirectionLock: r, dragPropagation: n, dragConstraints: i, dragElastic: o, dragMomentum: a };
            }
          });
        (Eg = class extends gt {
          constructor(e) {
            super(e), (this.removeGroupControls = fe), (this.removeListeners = fe), (this.controls = new wg(e));
          }
          mount() {
            let { dragControls: e } = this.node.getProps();
            e && (this.removeGroupControls = e.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || fe);
          }
          unmount() {
            this.removeGroupControls(), this.removeListeners();
          }
        }),
          (La = (e) => (t, r) => {
            e && le.update(() => e(t, r));
          }),
          (Sg = class extends gt {
            constructor() {
              super(...arguments), (this.removePointerDownListener = fe);
            }
            onPointerDown(e) {
              this.session = new Kl(e, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: tu(this.node),
              });
            }
            createPanHandlers() {
              let { onPanSessionStart: e, onPanStart: t, onPan: r, onPanEnd: n } = this.node.getProps();
              return {
                onSessionStart: La(e),
                onStart: La(t),
                onMove: r,
                onEnd: (i, o) => {
                  delete this.session, n && le.update(() => n(i, o));
                },
              };
            }
            mount() {
              this.removePointerDownListener = Ze(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
            }
            update() {
              this.session && this.session.updateHandlers(this.createPanHandlers());
            }
            unmount() {
              this.removePointerDownListener(), this.session && this.session.end();
            }
          });
        Gr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
        (ar = {
          correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
              if (_.test(e)) e = parseFloat(e);
              else return e;
            let r = ja(e, t.target.x),
              n = ja(e, t.target.y);
            return `${r}% ${n}%`;
          },
        }),
          (Og = {
            correct: (e, { treeScale: t, projectionDelta: r }) => {
              let n = e,
                i = ft.parse(e);
              if (i.length > 5) return n;
              let o = ft.createTransformer(e),
                a = typeof i[0] != "number" ? 1 : 0,
                s = r.x.scale * t.x,
                u = r.y.scale * t.y;
              (i[0 + a] /= s), (i[1 + a] /= u);
              let l = se(s, u, 0.5);
              return typeof i[2 + a] == "number" && (i[2 + a] /= l), typeof i[3 + a] == "number" && (i[3 + a] /= l), o(i);
            },
          }),
          (Cg = class extends m.Component {
            componentDidMount() {
              let { visualElement: e, layoutGroup: t, switchLayoutGroup: r, layoutId: n } = this.props,
                { projection: i } = e;
              Rh(Ag),
                i &&
                  (t.group && t.group.add(i),
                  r && r.register && n && r.register(i),
                  i.root.didUpdate(),
                  i.addEventListener("animationComplete", () => {
                    this.safeToRemove();
                  }),
                  i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
                (Gr.hasEverUpdated = !0);
            }
            getSnapshotBeforeUpdate(e) {
              let { layoutDependency: t, visualElement: r, drag: n, isPresent: i } = this.props,
                o = r.projection;
              return (
                o &&
                  ((o.isPresent = i),
                  n || e.layoutDependency !== t || t === void 0 ? o.willUpdate() : this.safeToRemove(),
                  e.isPresent !== i &&
                    (i
                      ? o.promote()
                      : o.relegate() ||
                        le.postRender(() => {
                          let a = o.getStack();
                          (!a || !a.members.length) && this.safeToRemove();
                        }))),
                null
              );
            }
            componentDidUpdate() {
              let { projection: e } = this.props.visualElement;
              e &&
                (e.root.didUpdate(),
                Ro.postRender(() => {
                  !e.currentAnimation && e.isLead() && this.safeToRemove();
                }));
            }
            componentWillUnmount() {
              let { visualElement: e, layoutGroup: t, switchLayoutGroup: r } = this.props,
                { projection: n } = e;
              n && (n.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(n), r && r.deregister && r.deregister(n));
            }
            safeToRemove() {
              let { safeToRemove: e } = this.props;
              e && e();
            }
            render() {
              return null;
            }
          });
        (Ag = {
          borderRadius: {
            ...ar,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
          },
          borderTopLeftRadius: ar,
          borderTopRightRadius: ar,
          borderBottomLeftRadius: ar,
          borderBottomRightRadius: ar,
          boxShadow: Og,
        }),
          (nu = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]),
          (Rg = nu.length),
          (Na = (e) => (typeof e == "string" ? parseFloat(e) : e)),
          (Va = (e) => typeof e == "number" || _.test(e));
        (kg = ou(0, 0.5, kl)), (Mg = ou(0.5, 0.95, fe));
        (Lg = ["x", "scaleX", "originX"]), (jg = ["y", "scaleY", "originY"]);
        Vg = class {
          constructor() {
            this.members = [];
          }
          add(e) {
            Go(this.members, e), e.scheduleRender();
          }
          remove(e) {
            if ((Xo(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
              let t = this.members[this.members.length - 1];
              t && this.promote(t);
            }
          }
          relegate(e) {
            let t = this.members.findIndex((n) => e === n);
            if (t === 0) return !1;
            let r;
            for (let n = t; n >= 0; n--) {
              let i = this.members[n];
              if (i.isPresent !== !1) {
                r = i;
                break;
              }
            }
            return r ? (this.promote(r), !0) : !1;
          }
          promote(e, t) {
            let r = this.lead;
            if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
              r.instance && r.scheduleRender(),
                e.scheduleRender(),
                (e.resumeFrom = r),
                t && (e.resumeFrom.preserveOpacity = !0),
                r.snapshot && ((e.snapshot = r.snapshot), (e.snapshot.latestValues = r.animationValues || r.latestValues)),
                e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
              let { crossfade: n } = e.options;
              n === !1 && r.hide();
            }
          }
          exitAnimationComplete() {
            this.members.forEach((e) => {
              let { options: t, resumingFrom: r } = e;
              t.onExitComplete && t.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
            });
          }
          scheduleRender() {
            this.members.forEach((e) => {
              e.instance && e.scheduleRender(!1);
            });
          }
          removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
          }
        };
        (Fg = (e, t) => e.depth - t.depth),
          (Bg = class {
            constructor() {
              (this.children = []), (this.isDirty = !1);
            }
            add(e) {
              Go(this.children, e), (this.isDirty = !0);
            }
            remove(e) {
              Xo(this.children, e), (this.isDirty = !0);
            }
            forEach(e) {
              this.isDirty && this.children.sort(Fg), (this.isDirty = !1), this.children.forEach(e);
            }
          });
        (Ya = ["", "X", "Y", "Z"]),
          (Wg = { visibility: "hidden" }),
          (Ga = 1e3),
          (qg = 0),
          (Tt = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 });
        (iy = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }),
          (Za = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)),
          ($a = Za("applewebkit/") && !Za("chrome/") ? Math.round : fe);
        (sy = su({
          attachResizeListener: (e, t) => Je(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        })),
          (Kn = { current: void 0 }),
          (uu = su({
            measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
            defaultParent: () => {
              if (!Kn.current) {
                let e = new sy({});
                e.mount(window), e.setOptions({ layoutScroll: !0 }), (Kn.current = e);
              }
              return Kn.current;
            },
            resetTransform: (e, t) => {
              e.style.transform = t !== void 0 ? t : "none";
            },
            checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
          })),
          (ly = { pan: { Feature: Sg }, drag: { Feature: Eg, ProjectionNode: uu, MeasureLayout: ru } }),
          (uy = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/);
        py = 4;
        (hy = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])),
          (cu = (e) => hy.has(e)),
          (fy = (e) => Object.keys(e).some(cu)),
          (Ur = (e) => e === Wt || e === _),
          (ts = (e, t) => parseFloat(e.split(", ")[t])),
          (rs =
            (e, t) =>
            (r, { transform: n }) => {
              if (n === "none" || !n) return 0;
              let i = n.match(/^matrix3d\((.+)\)$/);
              if (i) return ts(i[1], t);
              {
                let o = n.match(/^matrix\((.+)\)$/);
                return o ? ts(o[1], e) : 0;
              }
            }),
          (my = new Set(["x", "y", "z"])),
          (gy = Pr.filter((e) => !my.has(e)));
        zt = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: rs(4, 13),
          y: rs(5, 14),
        };
        zt.translateX = zt.x;
        zt.translateY = zt.y;
        (vy = (e, t, r) => {
          let n = t.measureViewportBox(),
            i = t.current,
            o = getComputedStyle(i),
            { display: a } = o,
            s = {};
          a === "none" && t.setStaticValue("display", e.display || "block"),
            r.forEach((l) => {
              s[l] = zt[l](n, o);
            }),
            t.render();
          let u = t.measureViewportBox();
          return (
            r.forEach((l) => {
              let c = t.getValue(l);
              c && c.jump(s[l]), (e[l] = zt[l](u, o));
            }),
            e
          );
        }),
          (by = (e, t, r = {}, n = {}) => {
            (t = { ...t }), (n = { ...n });
            let i = Object.keys(t).filter(cu),
              o = [],
              a = !1,
              s = [];
            if (
              (i.forEach((u) => {
                let l = e.getValue(u);
                if (!e.hasValue(u)) return;
                let c = r[u],
                  p = ir(c),
                  d = t[u],
                  h;
                if (tn(d)) {
                  let f = d.length,
                    v = d[0] === null ? 1 : 0;
                  (c = d[v]), (p = ir(c));
                  for (let S = v; S < f && d[S] !== null; S++)
                    h
                      ? Fe(ir(d[S]) === h, "All keyframes must be of the same type")
                      : ((h = ir(d[S])), Fe(h === p || (Ur(p) && Ur(h)), "Keyframes must be of the same dimension as the current value"));
                } else h = ir(d);
                if (p !== h)
                  if (Ur(p) && Ur(h)) {
                    let f = l.get();
                    typeof f == "string" && l.set(parseFloat(f)),
                      typeof d == "string" ? (t[u] = parseFloat(d)) : Array.isArray(d) && h === _ && (t[u] = d.map(parseFloat));
                  } else
                    p?.transform && h?.transform && (c === 0 || d === 0)
                      ? c === 0
                        ? l.set(h.transform(c))
                        : (t[u] = p.transform(d))
                      : (a || ((o = yy(e)), (a = !0)), s.push(u), (n[u] = n[u] !== void 0 ? n[u] : t[u]), l.jump(d));
              }),
              s.length)
            ) {
              let u = s.indexOf("height") >= 0 ? window.pageYOffset : null,
                l = vy(t, e, s);
              return (
                o.length &&
                  o.forEach(([c, p]) => {
                    e.getValue(c).set(p);
                  }),
                e.render(),
                fn && u !== null && window.scrollTo({ top: u }),
                { target: l, transitionEnd: n }
              );
            } else return { target: t, transitionEnd: n };
          });
        (wy = (e, t, r, n) => {
          let i = dy(e, t, n);
          return (t = i.target), (n = i.transitionEnd), xy(e, t, r, n);
        }),
          (go = { current: null }),
          (pu = { current: !1 });
        (ns = new WeakMap()),
          (du = Object.keys(mr)),
          (Sy = du.length),
          (os = [
            "AnimationStart",
            "AnimationComplete",
            "Update",
            "BeforeLayoutMeasure",
            "LayoutMeasure",
            "LayoutAnimationStart",
            "LayoutAnimationComplete",
          ]),
          (Py = ko.length),
          (Oy = class {
            constructor({ parent: e, props: t, presenceContext: r, reducedMotionConfig: n, visualState: i }, o = {}) {
              (this.current = null),
                (this.children = new Set()),
                (this.isVariantNode = !1),
                (this.isControllingVariants = !1),
                (this.shouldReduceMotion = null),
                (this.values = new Map()),
                (this.features = {}),
                (this.valueSubscriptions = new Map()),
                (this.prevMotionValues = {}),
                (this.events = {}),
                (this.propEventSubscriptions = {}),
                (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
                (this.render = () => {
                  this.current &&
                    (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
                }),
                (this.scheduleRender = () => le.render(this.render, !1, !0));
              let { latestValues: a, renderState: s } = i;
              (this.latestValues = a),
                (this.baseTarget = { ...a }),
                (this.initialValues = t.initial ? { ...a } : {}),
                (this.renderState = s),
                (this.parent = e),
                (this.props = t),
                (this.presenceContext = r),
                (this.depth = e ? e.depth + 1 : 0),
                (this.reducedMotionConfig = n),
                (this.options = o),
                (this.isControllingVariants = gn(t)),
                (this.isVariantNode = rl(t)),
                this.isVariantNode && (this.variantChildren = new Set()),
                (this.manuallyAnimateOnMount = !!(e && e.current));
              let { willChange: u, ...l } = this.scrapeMotionValuesFromProps(t, {});
              for (let c in l) {
                let p = l[c];
                a[c] !== void 0 && Ae(p) && (p.set(a[c], !1), an(u) && u.add(c));
              }
            }
            scrapeMotionValuesFromProps(e, t) {
              return {};
            }
            mount(e) {
              (this.current = e),
                ns.set(e, this),
                this.projection && !this.projection.instance && this.projection.mount(e),
                this.parent &&
                  this.isVariantNode &&
                  !this.isControllingVariants &&
                  (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach((t, r) => this.bindToMotionValue(r, t)),
                pu.current || Ty(),
                (this.shouldReduceMotion =
                  this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : go.current),
                Qo(
                  this.shouldReduceMotion !== !0,
                  "You have Reduced Motion enabled on your device. Animations may not appear as expected."
                ),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext);
            }
            unmount() {
              ns.delete(this.current),
                this.projection && this.projection.unmount(),
                tt(this.notifyUpdate),
                tt(this.render),
                this.valueSubscriptions.forEach((e) => e()),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this);
              for (let e in this.events) this.events[e].clear();
              for (let e in this.features) this.features[e].unmount();
              this.current = null;
            }
            bindToMotionValue(e, t) {
              let r = Ct.has(e),
                n = t.on("change", (o) => {
                  (this.latestValues[e] = o),
                    this.props.onUpdate && le.update(this.notifyUpdate, !1, !0),
                    r && this.projection && (this.projection.isTransformDirty = !0);
                }),
                i = t.on("renderRequest", this.scheduleRender);
              this.valueSubscriptions.set(e, () => {
                n(), i();
              });
            }
            sortNodePosition(e) {
              return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
                ? 0
                : this.sortInstanceNodePosition(this.current, e.current);
            }
            loadFeatures({ children: e, ...t }, r, n, i) {
              let o, a;
              if (n && r) {
                let s =
                  "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
                t.ignoreStrict ? Ar(!1, s) : Fe(!1, s);
              }
              for (let s = 0; s < Sy; s++) {
                let u = du[s],
                  { isEnabled: l, Feature: c, ProjectionNode: p, MeasureLayout: d } = mr[u];
                p && (o = p), l(t) && (!this.features[u] && c && (this.features[u] = new c(this)), d && (a = d));
              }
              if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
                this.projection = new o(this.latestValues, this.parent && this.parent.projection);
                let { layoutId: s, layout: u, drag: l, dragConstraints: c, layoutScroll: p, layoutRoot: d } = t;
                this.projection.setOptions({
                  layoutId: s,
                  layout: u,
                  alwaysMeasureLayout: !!l || (c && Mt(c)),
                  visualElement: this,
                  scheduleRender: () => this.scheduleRender(),
                  animationType: typeof u == "string" ? u : "both",
                  initialPromotionConfig: i,
                  layoutScroll: p,
                  layoutRoot: d,
                });
              }
              return a;
            }
            updateFeatures() {
              for (let e in this.features) {
                let t = this.features[e];
                t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
              }
            }
            triggerBuild() {
              this.build(this.renderState, this.latestValues, this.options, this.props);
            }
            measureViewportBox() {
              return this.current ? this.measureInstanceViewportBox(this.current, this.props) : he();
            }
            getStaticValue(e) {
              return this.latestValues[e];
            }
            setStaticValue(e, t) {
              this.latestValues[e] = t;
            }
            makeTargetAnimatable(e, t = !0) {
              return this.makeTargetAnimatableFromInstance(e, t);
            }
            update(e, t) {
              (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                (this.prevProps = this.props),
                (this.props = e),
                (this.prevPresenceContext = this.presenceContext),
                (this.presenceContext = t);
              for (let r = 0; r < os.length; r++) {
                let n = os[r];
                this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                let i = e["on" + n];
                i && (this.propEventSubscriptions[n] = this.on(n, i));
              }
              (this.prevMotionValues = Ey(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues)),
                this.handleChildMotionValue && this.handleChildMotionValue();
            }
            getProps() {
              return this.props;
            }
            getVariant(e) {
              return this.props.variants ? this.props.variants[e] : void 0;
            }
            getDefaultTransition() {
              return this.props.transition;
            }
            getTransformPagePoint() {
              return this.props.transformPagePoint;
            }
            getClosestVariantNode() {
              return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
            }
            getVariantContext(e = !1) {
              if (e) return this.parent ? this.parent.getVariantContext() : void 0;
              if (!this.isControllingVariants) {
                let r = this.parent ? this.parent.getVariantContext() || {} : {};
                return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
              }
              let t = {};
              for (let r = 0; r < Py; r++) {
                let n = ko[r],
                  i = this.props[n];
                (fr(i) || i === !1) && (t[n] = i);
              }
              return t;
            }
            addVariantChild(e) {
              let t = this.getClosestVariantNode();
              if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
            }
            addValue(e, t) {
              t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)),
                this.values.set(e, t),
                (this.latestValues[e] = t.get());
            }
            removeValue(e) {
              this.values.delete(e);
              let t = this.valueSubscriptions.get(e);
              t && (t(), this.valueSubscriptions.delete(e)),
                delete this.latestValues[e],
                this.removeValueFromRenderState(e, this.renderState);
            }
            hasValue(e) {
              return this.values.has(e);
            }
            getValue(e, t) {
              if (this.props.values && this.props.values[e]) return this.props.values[e];
              let r = this.values.get(e);
              return r === void 0 && t !== void 0 && ((r = Bt(t, { owner: this })), this.addValue(e, r)), r;
            }
            readValue(e) {
              var t;
              return this.latestValues[e] !== void 0 || !this.current
                ? this.latestValues[e]
                : (t = this.getBaseTargetFromProps(this.props, e)) !== null && t !== void 0
                ? t
                : this.readValueFromInstance(this.current, e, this.options);
            }
            setBaseTarget(e, t) {
              this.baseTarget[e] = t;
            }
            getBaseTarget(e) {
              var t;
              let { initial: r } = this.props,
                n =
                  typeof r == "string" || typeof r == "object"
                    ? (t = Bo(this.props, r)) === null || t === void 0
                      ? void 0
                      : t[e]
                    : void 0;
              if (r && n !== void 0) return n;
              let i = this.getBaseTargetFromProps(this.props, e);
              return i !== void 0 && !Ae(i) ? i : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
            }
            on(e, t) {
              return this.events[e] || (this.events[e] = new Ko()), this.events[e].add(t);
            }
            notify(e, ...t) {
              this.events[e] && this.events[e].notify(...t);
            }
          }),
          (hu = class extends Oy {
            sortInstanceNodePosition(e, t) {
              return e.compareDocumentPosition(t) & 2 ? 1 : -1;
            }
            getBaseTargetFromProps(e, t) {
              return e.style ? e.style[t] : void 0;
            }
            removeValueFromRenderState(e, { vars: t, style: r }) {
              delete t[e], delete r[e];
            }
            makeTargetAnimatableFromInstance({ transition: e, transitionEnd: t, ...r }, n) {
              let i = Hm(r, e || {}, this);
              if (n) {
                zm(this, r, i);
                let o = wy(this, r, i, t);
                (t = o.transitionEnd), (r = o.target);
              }
              return { transition: e, transitionEnd: t, ...r };
            }
          });
        (Ay = class extends hu {
          constructor() {
            super(...arguments), (this.type = "html");
          }
          readValueFromInstance(e, t) {
            if (Ct.has(t)) {
              let r = Wo(t);
              return (r && r.default) || 0;
            } else {
              let r = Cy(e),
                n = (sl(t) ? r.getPropertyValue(t) : r[t]) || 0;
              return typeof n == "string" ? n.trim() : n;
            }
          }
          measureInstanceViewportBox(e, { transformPagePoint: t }) {
            return eu(e, t);
          }
          build(e, t, r, n) {
            Lo(e, t, r, n.transformTemplate);
          }
          scrapeMotionValuesFromProps(e, t) {
            return Fo(e, t);
          }
          handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let { children: e } = this.props;
            Ae(e) &&
              (this.childSubscription = e.on("change", (t) => {
                this.current && (this.current.textContent = `${t}`);
              }));
          }
          renderInstance(e, t, r, n) {
            dl(e, t, r, n);
          }
        }),
          (Ry = class extends hu {
            constructor() {
              super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
            }
            getBaseTargetFromProps(e, t) {
              return e[t];
            }
            readValueFromInstance(e, t) {
              if (Ct.has(t)) {
                let r = Wo(t);
                return (r && r.default) || 0;
              }
              return (t = hl.has(t) ? t : Ao(t)), e.getAttribute(t);
            }
            measureInstanceViewportBox() {
              return he();
            }
            scrapeMotionValuesFromProps(e, t) {
              return ml(e, t);
            }
            build(e, t, r, n) {
              No(e, t, r, this.isSVGTag, n.transformTemplate);
            }
            renderInstance(e, t, r, n) {
              fl(e, t, r, n);
            }
            mount(e) {
              (this.isSVGTag = Vo(e.tagName)), super.mount(e);
            }
          }),
          (Iy = (e, t) => (Mo(e) ? new Ry(t, { enableHardwareAcceleration: !1 }) : new Ay(t, { enableHardwareAcceleration: !0 }))),
          (ky = { layout: { ProjectionNode: uu, MeasureLayout: ru } }),
          (My = { ...ng, ...bf, ...ly, ...ky }),
          (qt = Ch((e, t) => af(e, t, My, Iy))),
          (Dy = U(qt.div)`
  position: relative;
  z-index: 2;
`),
          (Ly = U(qt.div)`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`);
        U(qt.div)`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
`;
        (jy = U.div`
  position: relative;
  box-sizing: border-box;
  background: #171c23;
  width: ${({ width: e }) => e}px;
  height: 100%;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 4px;
  border-left: ${({ theme: e }) => (e.base === "dark" ? 1 : 0)}px solid #fff2;
  border-bottom: ${({ theme: e }) => (e.base === "dark" ? 1 : 0)}px solid #fff2;
  border-top: ${({ theme: e }) => (e.base === "dark" ? 1 : 0)}px solid #fff2;
  border-radius: 6px 0 0 6px;
  overflow: hidden;

  && {
    pre {
      background: transparent !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`),
          (Ny = U(qt.div)`
  background: #143046;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 44px;
  width: 100%;
  height: 81px;
`),
          (Vy = U(qt.div)`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  min-height: 57px;
`),
          (Fy = { default: { filter: "grayscale(1)", opacity: 0.5 }, active: { filter: "grayscale(0)", opacity: 1 } }),
          (By = Qt(function ({ active: e, content: t, open: r }, n) {
            let i = { fontSize: "0.8125rem", lineHeight: "1.1875rem" };
            return m.createElement(
              Vy,
              {
                ref: n,
                initial: "default",
                animate: e ? "active" : "default",
                "aria-hidden": !e,
                variants: Fy,
                transition: { ease: "easeInOut", duration: 0.6 },
              },
              t.map(({ toggle: o, snippet: a }, s) =>
                m.createElement(
                  Mr,
                  { key: s },
                  o === void 0 && m.createElement(Zt, { language: "typescript", customStyle: i }, a),
                  o && !r && m.createElement(Zt, { language: "typescript", customStyle: i }, "  // ..."),
                  o &&
                    r &&
                    m.createElement(
                      qt.div,
                      { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 } },
                      m.createElement(Zt, { language: "typescript", customStyle: i, codeTagProps: { style: { paddingLeft: "15px" } } }, a)
                    )
                )
              )
            );
          })),
          (zy = ({ activeStep: e, data: t, width: r, filename: n }) => {
            let [i, o] = Pe([]),
              a = Ke(() => t.map(() => En()), [t]),
              s = (c) => {
                let p = 0;
                for (let d = 0; d < c; d++) p -= a[d].current.getBoundingClientRect().height;
                return p;
              },
              u = Rt(() => {
                let c = t.flatMap((p, d) => {
                  let h = a[d].current.getBoundingClientRect().height,
                    f = [{ yPos: s(d), backdropHeight: h, index: d, open: !1 }];
                  return p.length > 1 && f.push({ yPos: s(d), backdropHeight: h, index: d, open: !0 }), f;
                });
                o(c);
              }, [t]);
            Dr(() => {
              let c = new ResizeObserver(() => {
                u();
              });
              return (
                a.forEach((p) => {
                  c.observe(p.current);
                }),
                () => {
                  c.disconnect();
                }
              );
            }, []);
            let l = { fontSize: "0.8125rem", lineHeight: "1.1875rem" };
            return m.createElement(
              jy,
              { width: r },
              m.createElement(
                kn,
                { theme: ci(pi.dark) },
                m.createElement(
                  Dy,
                  { animate: { y: i[e]?.yPos ?? 0 }, transition: { ease: "easeInOut", duration: 0.4 } },
                  m.createElement(Ly, null, m.createElement(Zt, { language: "typescript", customStyle: l }, "// " + n)),
                  t.map((c, p) =>
                    m.createElement(By, {
                      key: p,
                      ref: a[p],
                      active: i[e]?.index === p,
                      open: i[e]?.index > p ? !0 : i[e]?.open ?? !1,
                      content: c,
                    })
                  )
                )
              ),
              m.createElement(Ny, {
                initial: { height: 81 },
                animate: { height: i[e]?.backdropHeight ?? 81 },
                transition: { ease: "easeInOut", duration: 0.4 },
                className: "syntax-highlighter-backdrop",
              })
            );
          }),
          (_y = U.ul(() => ({ display: "flex", flexDirection: "column", rowGap: 16, padding: 0, margin: 0 }))),
          (Hy = ({ children: e }) => m.createElement(_y, null, e)),
          (Uy = U.li(() => ({ display: "flex", alignItems: "flex-start", columnGap: 12 }))),
          (Wy = U.div`
  font-family: ${({ theme: e }) => e.typography.fonts.base};
  color: ${({ theme: e }) => e.color.darker};
  font-size: 13px;
  line-height: 18px;
  margin-top: 2px;
`),
          (qy = U.div(({ isCompleted: e, theme: t }) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${e ? "transparent" : t.color.medium}`,
            width: 20,
            height: 20,
            flexShrink: 0,
            borderRadius: "50%",
            backgroundColor: e ? t.color.green : "white",
            fontFamily: t.typography.fonts.base,
            fontSize: 10,
            fontWeight: 600,
            color: t.color.dark,
          }))),
          (Qn = ({ children: e, index: t, isCompleted: r }) =>
            m.createElement(
              Uy,
              null,
              m.createElement(
                qy,
                { "aria-label": r ? "complete" : "not complete", isCompleted: r },
                r ? m.createElement(yi, { width: 10, height: 10, color: "white" }) : t
              ),
              m.createElement(Wy, null, e)
            ));
        (Gy = (e, t, r) => {
          let [n, i] = Pe(null);
          return (
            de(() => {
              if (e) {
                let o = () => {
                    r.getChannel().once(ai, () => {
                      let s = t.getData("example-button--warning");
                      i(s ? { data: !0, error: null } : { data: !1, error: null });
                    });
                  },
                  a = r.getChannel();
                return (
                  t.getData("example-button--warning") ? i({ data: !0, error: null }) : a.on(Rn, o),
                  () => {
                    a.off(Rn, o);
                  }
                );
              }
            }, [e]),
            n
          );
        }),
          (Xy = (e, t) => {
            let [r, n] = Pe(null),
              i = document.querySelector(`.${e}`);
            return (
              de(() => {
                if (t) {
                  let o = new ResizeObserver(() => {
                    i && n({ top: i.offsetTop, left: i.offsetLeft, height: i.offsetHeight, width: i.offsetWidth });
                  });
                  return (
                    o.observe(i),
                    () => {
                      o.disconnect();
                    }
                  );
                }
              }, [e, t]),
              r
            );
          }),
          (Ky =
            "data:image/png;base64,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"),
          (Qy =
            "data:image/png;base64,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"),
          (Jy =
            "data:image/png;base64,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"),
          (lr = "STORYBOOK_ADDON_ONBOARDING_CHANNEL"),
          (Zy = ({ onFinish: e, api: t, addonsStore: r, skipOnboarding: n, codeSnippets: i, container: o }) => {
            let [a, s] = Pe("imports"),
              u = Mn(),
              l = { imports: 0, meta: 1, story: 2, args: 3, customStory: 4 },
              [c, p] = Pe(!1),
              [d, h] = ch(),
              f = Yy(),
              v = Gy(a === "customStory", t, r),
              S = Xy("syntax-highlighter-backdrop", a === "customStory"),
              x = i?.language === "javascript",
              b = () => {
                let P = i.code[3][0].snippet;
                navigator.clipboard.writeText(P.replace("// Copy the code below", "")), p(!0);
              },
              y = Rt(() => {
                t.emit(lr, { step: "X:SkippedOnboarding", where: `HowToWriteAStoryModal:${a}`, type: "telemetry" });
              }, [t, a]);
            return m.createElement(
              Dd,
              { width: 740, height: 430, container: o, defaultOpen: !0 },
              m.createElement(
                Ld,
                null,
                i ? m.createElement(zy, { activeStep: l[a] || 0, data: i.code, width: 480, filename: i.filename }) : null,
                a === "customStory" &&
                  S &&
                  !v?.data &&
                  m.createElement(
                    De,
                    {
                      ref: d,
                      onClick: () => b(),
                      style: {
                        position: "absolute",
                        opacity: h.width ? 1 : 0,
                        top: S.top + S.height - 45,
                        left: S.left + S.width - (h.width ?? 0) - 10,
                        zIndex: 1e3,
                      },
                    },
                    c ? "Copied to clipboard" : "Copy code"
                  ),
                m.createElement(
                  jd,
                  null,
                  m.createElement(Bd, null, m.createElement(_d, null), m.createElement(Ud, null), m.createElement(qd, null)),
                  m.createElement(
                    Nd,
                    null,
                    m.createElement(
                      kt.Title,
                      { asChild: !0 },
                      m.createElement(Vd, null, m.createElement(gi, { width: 13 }), m.createElement("span", null, "How to write a story"))
                    ),
                    m.createElement(
                      kt.Dialog.Close,
                      { onClick: y, asChild: !0 },
                      m.createElement(vi, { style: { cursor: "pointer" }, width: 13, onClick: n, color: u.color.darkest })
                    )
                  ),
                  m.createElement(
                    kt.Description,
                    { asChild: !0 },
                    m.createElement(
                      Fd,
                      null,
                      a === "imports" &&
                        m.createElement(
                          m.Fragment,
                          null,
                          m.createElement(
                            "div",
                            null,
                            m.createElement("h3", null, "Imports"),
                            x
                              ? m.createElement("p", null, "Import a component. In this case, the Button component.")
                              : m.createElement(
                                  m.Fragment,
                                  null,
                                  m.createElement(
                                    "p",
                                    null,
                                    "First, import ",
                                    m.createElement(Wr, null, "Meta"),
                                    " and",
                                    " ",
                                    m.createElement(Wr, null, "StoryObj"),
                                    " for type safety and autocompletion in TypeScript stories."
                                  ),
                                  m.createElement("p", null, "Next, import a component. In this case, the Button component.")
                                )
                          ),
                          m.createElement(
                            De,
                            {
                              style: { marginTop: 4 },
                              onClick: () => {
                                s("meta");
                              },
                            },
                            "Next"
                          )
                        ),
                      a === "meta" &&
                        m.createElement(
                          m.Fragment,
                          null,
                          m.createElement(
                            "div",
                            null,
                            m.createElement("h3", null, "Meta"),
                            m.createElement(
                              "p",
                              null,
                              "The default export, Meta, contains metadata about this component's stories. The title field (optional) controls where stories appear in the sidebar."
                            ),
                            m.createElement(Fn, { width: "204", alt: "Title property pointing to Storybook's sidebar", src: Ky })
                          ),
                          m.createElement(
                            Fr,
                            null,
                            m.createElement(De, { variant: "secondary", onClick: () => s("imports") }, "Previous"),
                            m.createElement(De, { onClick: () => s("story") }, "Next")
                          )
                        ),
                      a === "story" &&
                        m.createElement(
                          m.Fragment,
                          null,
                          m.createElement(
                            "div",
                            null,
                            m.createElement("h3", null, "Story"),
                            m.createElement(
                              "p",
                              null,
                              "Each named export is a story. Its contents specify how the story is rendered in addition to other configuration options."
                            ),
                            m.createElement(Fn, { width: "190", alt: "Story export pointing to the sidebar entry of the story", src: Qy })
                          ),
                          m.createElement(
                            Fr,
                            null,
                            m.createElement(De, { variant: "secondary", onClick: () => s("meta") }, "Previous"),
                            m.createElement(De, { onClick: () => s("args") }, "Next")
                          )
                        ),
                      a === "args" &&
                        m.createElement(
                          m.Fragment,
                          null,
                          m.createElement(
                            "div",
                            null,
                            m.createElement("h3", null, "Args"),
                            m.createElement(
                              "p",
                              null,
                              "Args are inputs that are passed to the component, which Storybook uses to render the component in different states. In React, args = props. They also specify the initial control values for the story."
                            ),
                            m.createElement(Fn, { alt: "Args mapped to their controls in Storybook", width: "253", src: Jy })
                          ),
                          m.createElement(
                            Fr,
                            null,
                            m.createElement(De, { variant: "secondary", onClick: () => s("story") }, "Previous"),
                            m.createElement(De, { onClick: () => s("customStory") }, "Next")
                          )
                        ),
                      a === "customStory" &&
                        (v?.error
                          ? null
                          : m.createElement(
                              m.Fragment,
                              null,
                              m.createElement(
                                "div",
                                null,
                                m.createElement("h3", null, "Create your first story"),
                                m.createElement(
                                  "p",
                                  null,
                                  "Now it's your turn. See how easy it is to create your first story by following these steps below."
                                ),
                                m.createElement(
                                  Hy,
                                  null,
                                  m.createElement(Qn, { isCompleted: c || !!v?.data, index: 1 }, "Copy the Warning story."),
                                  m.createElement(
                                    Qn,
                                    { isCompleted: !!v?.data, index: 2 },
                                    m.createElement(Yd, null, "Open the Button story in your current working directory."),
                                    f?.data && m.createElement(Wr, null, f.data.replaceAll("/", "/\u200B").replaceAll("\\", "\\\u200B"))
                                  ),
                                  m.createElement(Qn, { isCompleted: !!v?.data, index: 3 }, "Paste it at the bottom of the file and save.")
                                )
                              ),
                              m.createElement(
                                Fr,
                                null,
                                m.createElement(De, { variant: "secondary", onClick: () => s("args") }, "Previous"),
                                v?.data ? m.createElement(De, { onClick: () => e() }, "Go to story") : null
                              )
                            ))
                    )
                  )
                )
              )
            );
          }),
          ($y = {
            filename: "Button.stories.js",
            language: "typescript",
            code: [
              [{ snippet: "import { Button } from './Button';" }],
              [
                {
                  snippet: `export default {
      title: 'Example/Button',
      component: Button,
      // ...
    };`,
                },
              ],
              [
                { snippet: "export const Primary = {" },
                {
                  snippet: `args: {
        primary: true,
        label: 'Click',
        background: 'red'
      }`,
                  toggle: !0,
                },
                { snippet: "};" },
              ],
              [
                {
                  snippet: `// Copy the code below
export const Warning = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  }
};`,
                },
              ],
            ],
          }),
          (ev = $y),
          (tv = {
            filename: "Button.stories.ts",
            language: "typescript",
            code: [
              [
                {
                  snippet: `import type { Meta, StoryObj } from '@storybook/react';
      
      import { Button } from './Button';`,
                },
              ],
              [
                {
                  snippet: `const meta: Meta<typeof Button> = {
        title: 'Example/Button',
        component: Button,
        // ...
      };
          
      export default meta;`,
                },
              ],
              [
                {
                  snippet: `type Story = StoryObj<Button>;
        
      export const Primary: Story = {`,
                },
                {
                  snippet: `args: {
          primary: true,
          label: 'Click',
          background: 'red'
        }`,
                  toggle: !0,
                },
                { snippet: "};" },
              ],
              [
                {
                  snippet: `// Copy the code below
  export const Warning: Story = {
    args: {
      primary: true,
      label: 'Delete now',
      backgroundColor: 'red',
    }
  };`,
                },
              ],
            ],
          }),
          (rv = tv);
        ov = ui();
      });
    oe();
    ie();
    ae();
    oe();
    ie();
    ae();
    kr();
    It();
    An();
    In();
    var av = Pn(() => Promise.resolve().then(() => (mu(), fu)));
    jr.register("@storybook/addon-onboarding", async (e) => {
      let t = e.getUrlState(),
        r = t.path === "/onboarding" || t.queryParams.onboarding === "true";
      e.once(si, () => {
        if (!(e.getData("example-button--primary") || document.getElementById("example-button--primary"))) {
          console.warn(
            "[@storybook/addon-onboarding] It seems like you have finished the onboarding experience in Storybook! Therefore this addon is not necessary anymore and will not be loaded. You are free to remove it from your project. More info: https://github.com/storybookjs/storybook/tree/next/code/addons/onboarding#uninstalling"
          );
          return;
        }
        if (!r || window.innerWidth < 730) return;
        e.togglePanel(!0), e.togglePanelPosition("bottom"), e.setSelectedPanel("addon-controls");
        let n = document.createElement("div");
        (n.id = "storybook-addon-onboarding"),
          document.body.appendChild(n),
          yt.render(m.createElement(Tn, { fallback: m.createElement("div", null, "Loading...") }, m.createElement(av, { api: e })), n);
      });
    });
  })();
} catch (e) {
  console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}
