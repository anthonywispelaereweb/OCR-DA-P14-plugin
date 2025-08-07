import ee from "react";
var x = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function re() {
  if ($) return R;
  $ = 1;
  var c = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function u(E, o, s) {
    var _ = null;
    if (s !== void 0 && (_ = "" + s), o.key !== void 0 && (_ = "" + o.key), "key" in o) {
      s = {};
      for (var b in o)
        b !== "key" && (s[b] = o[b]);
    } else s = o;
    return o = s.ref, {
      $$typeof: c,
      type: E,
      key: _,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return R.Fragment = f, R.jsx = u, R.jsxs = u, R;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function te() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case z:
          return "Profiler";
        case U:
          return "StrictMode";
        case J:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case q:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case g:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function u(e) {
      try {
        f(e);
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
        ), f(e);
      }
    }
    function E(e) {
      if (e === p) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === g)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function _(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, r) {
      function t() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function M() {
      var e = c(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, n, i, l, j, A) {
      return t = l.ref, e = {
        $$typeof: w,
        type: e,
        key: r,
        props: l,
        _owner: i
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
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
        value: j
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, t, n, i, l, j, A) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Q(a)) {
            for (n = 0; n < a.length; n++)
              h(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(a);
      if (N.call(r, "key")) {
        a = c(e);
        var m = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          m,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (u(t), a = "" + t), _(r) && (u(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var S in r)
          S !== "key" && (t[S] = r[S]);
      } else t = r;
      return a && b(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        a,
        l,
        i,
        o(),
        t,
        j,
        A
      );
    }
    function h(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var T = ee, w = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), k = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, Q = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var y, C = {}, Y = T.react_stack_bottom_frame.bind(
      T,
      s
    )(), F = O(E(s)), I = {};
    v.Fragment = p, v.jsx = function(e, r, t, n, i) {
      var l = 1e4 > k.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !1,
        n,
        i,
        l ? Error("react-stack-top-frame") : Y,
        l ? O(E(e)) : F
      );
    }, v.jsxs = function(e, r, t, n, i) {
      var l = 1e4 > k.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !0,
        n,
        i,
        l ? Error("react-stack-top-frame") : Y,
        l ? O(E(e)) : F
      );
    };
  }()), v;
}
process.env.NODE_ENV === "production" ? x.exports = re() : x.exports = te();
var d = x.exports;
const ae = ({ isOpen: c, message: f, onClose: u }) => c ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
  /* @__PURE__ */ d.jsx("span", { className: "modal-overlay", onClick: u }),
  /* @__PURE__ */ d.jsx("div", { className: "modal", children: /* @__PURE__ */ d.jsxs("div", { className: "modal-dialog", children: [
    /* @__PURE__ */ d.jsx("span", { className: "modal-close", onClick: u, children: "×" }),
    /* @__PURE__ */ d.jsx("p", { children: f || "No message available" })
  ] }) })
] }) : null;
export {
  ae as Modal,
  ae as default
};
