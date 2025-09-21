import te, { useRef as L, useEffect as M } from "react";
var O = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function ne() {
  if (W) return k;
  W = 1;
  var l = Symbol.for("react.transitional.element"), v = Symbol.for("react.fragment");
  function c(f, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var d in s)
        d !== "key" && (o[d] = s[d]);
    } else o = s;
    return s = o.ref, {
      $$typeof: l,
      type: f,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return k.Fragment = v, k.jsx = c, k.jsxs = c, k;
}
var h = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function ae() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case V:
          return "Profiler";
        case q:
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
          case z:
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
          case N:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function v(e) {
      return "" + e;
    }
    function c(e) {
      try {
        v(e);
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
        ), v(e);
      }
    }
    function f(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function t() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function m() {
      var e = l(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function R(e, r, t, n, E, u, S, g) {
      return t = u.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: u,
        _owner: E
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: m
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
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, t, n, E, u, S, g) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (ee(a)) {
            for (n = 0; n < a.length; n++)
              p(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(a);
      if (C.call(r, "key")) {
        a = l(e);
        var _ = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        n = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          _,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), i(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var w in r)
          w !== "key" && (t[w] = r[w]);
      } else t = r;
      return a && d(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), R(
        e,
        a,
        u,
        E,
        s(),
        t,
        S,
        g
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var j = te, P = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), J = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), y = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, ee = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, $ = {}, D = j.react_stack_bottom_frame.bind(
      j,
      o
    )(), F = A(f(o)), I = {};
    h.Fragment = x, h.jsx = function(e, r, t, n, E) {
      var u = 1e4 > y.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !1,
        n,
        E,
        u ? Error("react-stack-top-frame") : D,
        u ? A(f(e)) : F
      );
    }, h.jsxs = function(e, r, t, n, E) {
      var u = 1e4 > y.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !0,
        n,
        E,
        u ? Error("react-stack-top-frame") : D,
        u ? A(f(e)) : F
      );
    };
  }()), h;
}
process.env.NODE_ENV === "production" ? O.exports = ne() : O.exports = ae();
var b = O.exports;
const le = ({ isOpen: l, message: v, onClose: c, customClass: f = "", position: s = "center" }) => {
  const o = L(null), i = L(null);
  return M(() => {
    l && i.current && i.current.focus();
  }, [l]), M(() => {
    if (!l) return;
    const d = (m) => {
      if (m.key === "Escape" && c(), m.key === "Tab" && o.current) {
        const R = o.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'), T = R[0], p = R[R.length - 1];
        !m.shiftKey && document.activeElement === p ? (m.preventDefault(), T.focus()) : m.shiftKey && document.activeElement === T && (m.preventDefault(), p.focus());
      }
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [l, c]), l ? /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx("span", { className: "modal-overlay", onClick: c }),
    /* @__PURE__ */ b.jsx(
      "div",
      {
        className: `modal${f ? " " + f : ""} modal-${s}`,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        ref: o,
        children: /* @__PURE__ */ b.jsxs("div", { className: "modal-dialog", children: [
          /* @__PURE__ */ b.jsx(
            "button",
            {
              className: "modal-close",
              onClick: c,
              "aria-label": "Fermer la modale",
              ref: i,
              children: "×"
            }
          ),
          /* @__PURE__ */ b.jsx("h2", { id: "modal-title", style: { fontSize: "1.2em", margin: 0 }, children: "Notification" }),
          /* @__PURE__ */ b.jsx("p", { children: v || "No message available" })
        ] })
      }
    )
  ] }) : null;
};
export {
  le as Modal,
  le as default
};
