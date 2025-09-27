import te, { useRef as z, useEffect as C } from "react";
var F = { exports: {} }, x = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function ne() {
  if (q) return x;
  q = 1;
  var l = Symbol.for("react.transitional.element"), _ = Symbol.for("react.fragment");
  function f(m, s, o) {
    var c = null;
    if (o !== void 0 && (c = "" + o), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      o = {};
      for (var d in s)
        d !== "key" && (o[d] = s[d]);
    } else o = s;
    return s = o.ref, {
      $$typeof: l,
      type: m,
      key: c,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return x.Fragment = _, x.jsx = f, x.jsxs = f, x;
}
var g = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function ae() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case A:
          return "Profiler";
        case y:
          return "StrictMode";
        case B:
          return "Suspense";
        case H:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case E:
            return "Portal";
          case J:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case $:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function _(e) {
      return "" + e;
    }
    function f(e) {
      try {
        _(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), _(e);
      }
    }
    function m(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function c(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function t() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function S() {
      var e = l(this.type);
      return L[e] || (L[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, t, n, b, u, P, N) {
      return t = u.ref, e = {
        $$typeof: j,
        type: e,
        key: r,
        props: u,
        _owner: b
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: S
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, t, n, b, u, P, N) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (ee(a)) {
            for (n = 0; n < a.length; n++)
              k(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(a);
      if (D.call(r, "key")) {
        a = l(e);
        var p = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        n = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", U[a + n] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          p,
          a
        ), U[a + n] = !0);
      }
      if (a = null, t !== void 0 && (f(t), a = "" + t), c(r) && (f(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var Y in r)
          Y !== "key" && (t[Y] = r[Y]);
      } else t = r;
      return a && d(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        a,
        u,
        b,
        s(),
        t,
        P,
        N
      );
    }
    function k(e) {
      typeof e == "object" && e !== null && e.$$typeof === j && e._store && (e._store.validated = 1);
    }
    var R = te, j = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), J = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), w = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, ee = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, L = {}, M = R.react_stack_bottom_frame.bind(
      R,
      o
    )(), W = O(m(o)), U = {};
    g.Fragment = v, g.jsx = function(e, r, t, n, b) {
      var u = 1e4 > w.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !1,
        n,
        b,
        u ? Error("react-stack-top-frame") : M,
        u ? O(m(e)) : W
      );
    }, g.jsxs = function(e, r, t, n, b) {
      var u = 1e4 > w.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !0,
        n,
        b,
        u ? Error("react-stack-top-frame") : M,
        u ? O(m(e)) : W
      );
    };
  }()), g;
}
process.env.NODE_ENV === "production" ? F.exports = ne() : F.exports = ae();
var i = F.exports;
const le = ({
  isOpen: l,
  message: _,
  onClose: f,
  customClass: m = "",
  position: s = "center",
  children: o,
  preventClose: c = !1,
  forceClose: d,
  backdropColor: S = "rgba(0, 0, 0, 0.5)",
  title: h
}) => {
  const T = z(null), k = z(null);
  C(() => {
    l && k.current && k.current.focus();
  }, [l]), C(() => {
    if (!l) return;
    const j = (E) => {
      if (E.key === "Escape" && !c && f(), E.key === "Tab" && T.current) {
        const v = T.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'), y = v[0], A = v[v.length - 1];
        !E.shiftKey && document.activeElement === A ? (E.preventDefault(), y.focus()) : E.shiftKey && document.activeElement === y && (E.preventDefault(), A.focus());
      }
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [l, f, c]), C(() => {
    d && d();
  }, [d]);
  const R = () => {
    c || f();
  };
  return l ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "modal-backdrop",
        style: { backgroundColor: S },
        onClick: R
      }
    ),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `modal${m ? " " + m : ""} modal-${s}`,
        role: "dialog",
        "aria-modal": "true",
        ...h && !o ? { "aria-labelledby": "modal-title" } : {},
        ref: T,
        children: /* @__PURE__ */ i.jsxs("div", { className: "modal-dialog", children: [
          !c && /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "modal-close",
              onClick: R,
              "aria-label": "Fermer la modale",
              ref: k,
              children: "×"
            }
          ),
          o || /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            h && /* @__PURE__ */ i.jsx("h2", { id: "modal-title", style: { fontSize: "1.2em", margin: 0 }, children: h }),
            /* @__PURE__ */ i.jsx("p", { children: _ || "No message available" })
          ] })
        ] })
      }
    )
  ] }) : null;
};
export {
  le as Modal,
  le as default
};
