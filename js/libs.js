function fd(e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (e.document) return t(e);
            throw new Error("jQuery requires a window with a document");
          })
    : t(e);
}
"undefined" != typeof window ? window : this,
  function (x, z) {
    function O(e, t) {
      return t.toUpperCase();
    }
    var e = [],
      C = x.document,
      c = e.slice,
      j = e.concat,
      H = e.push,
      a = e.indexOf,
      q = {},
      F = q.toString,
      f = q.hasOwnProperty,
      m = {},
      t = "2.2.4",
      T = function (e, t) {
        return new T.fn.init(e, t);
      },
      B = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      R = /^-ms-/,
      G = /-([\da-z])/gi;
    function W(e) {
      var t = !!e && "length" in e && e.length,
        n = T.type(e);
      return (
        "function" !== n &&
        !T.isWindow(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    (T.fn = T.prototype =
      {
        jquery: t,
        constructor: T,
        selector: "",
        length: 0,
        toArray: function () {
          return c.call(this);
        },
        get: function (e) {
          return null != e
            ? e < 0
              ? this[e + this.length]
              : this[e]
            : c.call(this);
        },
        pushStack: function (e) {
          e = T.merge(this.constructor(), e);
          return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (e) {
          return T.each(this, e);
        },
        map: function (n) {
          return this.pushStack(
            T.map(this, function (e, t) {
              return n.call(e, t, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(c.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            e = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: H,
        sort: e.sort,
        splice: e.splice,
      }),
      (T.extend = T.fn.extend =
        function () {
          var e,
            t,
            n,
            i,
            a,
            s = arguments[0] || {},
            r = 1,
            o = arguments.length,
            l = !1;
          for (
            "boolean" == typeof s && ((l = s), (s = arguments[r] || {}), r++),
              "object" == typeof s || T.isFunction(s) || (s = {}),
              r === o && ((s = this), r--);
            r < o;
            r++
          )
            if (null != (e = arguments[r]))
              for (t in e)
                (a = s[t]),
                  (n = e[t]),
                  s !== n &&
                    (l && n && (T.isPlainObject(n) || (i = T.isArray(n)))
                      ? ((a = i
                          ? ((i = !1), a && T.isArray(a) ? a : [])
                          : a && T.isPlainObject(a)
                          ? a
                          : {}),
                        (s[t] = T.extend(l, a, n)))
                      : void 0 !== n && (s[t] = n));
          return s;
        }),
      T.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === T.type(e);
        },
        isArray: Array.isArray,
        isWindow: function (e) {
          return null != e && e === e.window;
        },
        isNumeric: function (e) {
          var t = e && e.toString();
          return !T.isArray(e) && 0 <= t - parseFloat(t) + 1;
        },
        isPlainObject: function (e) {
          if ("object" !== T.type(e) || e.nodeType || T.isWindow(e)) return !1;
          if (
            e.constructor &&
            !f.call(e, "constructor") &&
            !f.call(e.constructor.prototype || {}, "isPrototypeOf")
          )
            return !1;
          for (var t in e);
          return void 0 === t || f.call(e, t);
        },
        isEmptyObject: function (e) {
          for (var t in e) return !1;
          return !0;
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? q[F.call(e)] || "object"
            : typeof e;
        },
        globalEval: function (e) {
          var t,
            n = eval;
          (e = T.trim(e)) &&
            (1 === e.indexOf("use strict")
              ? (((t = C.createElement("script")).text = e),
                C.head.appendChild(t).parentNode.removeChild(t))
              : n(e));
        },
        camelCase: function (e) {
          return e.replace(R, "ms-").replace(G, O);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t) {
          var n,
            i = 0;
          if (W(e))
            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(B, "");
        },
        makeArray: function (e, t) {
          t = t || [];
          return (
            null != e &&
              (W(Object(e))
                ? T.merge(t, "string" == typeof e ? [e] : e)
                : H.call(t, e)),
            t
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : a.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, a = e.length; i < n; i++)
            e[a++] = t[i];
          return (e.length = a), e;
        },
        grep: function (e, t, n) {
          for (var i = [], a = 0, s = e.length, r = !n; a < s; a++)
            !t(e[a], a) != r && i.push(e[a]);
          return i;
        },
        map: function (e, t, n) {
          var i,
            a,
            s = 0,
            r = [];
          if (W(e))
            for (i = e.length; s < i; s++)
              null != (a = t(e[s], s, n)) && r.push(a);
          else for (s in e) (a = t(e[s], s, n)), null != a && r.push(a);
          return j.apply([], r);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, i;
          return (
            "string" == typeof t && ((i = e[t]), (t = e), (e = i)),
            T.isFunction(e)
              ? ((n = c.call(arguments, 2)),
                ((i = function () {
                  return e.apply(t || this, n.concat(c.call(arguments)));
                }).guid = e.guid =
                  e.guid || T.guid++),
                i)
              : void 0
          );
        },
        now: Date.now,
        support: m,
      }),
      "function" == typeof Symbol &&
        (T.fn[Symbol.iterator] = e[Symbol.iterator]),
      T.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          q["[object " + t + "]"] = t.toLowerCase();
        }
      );
    function i(e, t, n) {
      for (var i = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (a && T(e).is(n)) break;
          i.push(e);
        }
      return i;
    }
    function X(e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
    var t = (function (z) {
        function u(e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n
            ? t
            : i < 0
            ? String.fromCharCode(65536 + i)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        }
        function O() {
          C();
        }
        var e,
          f,
          w,
          s,
          j,
          m,
          H,
          q,
          x,
          l,
          d,
          C,
          T,
          t,
          E,
          g,
          i,
          a,
          v,
          S = "sizzle" + +new Date(),
          y = z.document,
          M = 0,
          F = 0,
          B = de(),
          R = de(),
          b = de(),
          G = function (e, t) {
            return e === t && (d = !0), 0;
          },
          W = {}.hasOwnProperty,
          n = [],
          X = n.pop,
          V = n.push,
          $ = n.push,
          Y = n.slice,
          k = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          },
          U =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          r = "[\\x20\\t\\r\\n\\f]",
          o = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          K =
            "\\[" +
            r +
            "*(" +
            o +
            ")(?:" +
            r +
            "*([*^$|!~]?=)" +
            r +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            o +
            "))|)" +
            r +
            "*\\]",
          J =
            ":(" +
            o +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            K +
            ")*)|.*)\\)|)",
          Q = new RegExp(r + "+", "g"),
          I = new RegExp(
            "^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$",
            "g"
          ),
          Z = new RegExp("^" + r + "*," + r + "*"),
          ee = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
          te = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
          ne = new RegExp(J),
          ie = new RegExp("^" + o + "$"),
          p = {
            ID: new RegExp("^#(" + o + ")"),
            CLASS: new RegExp("^\\.(" + o + ")"),
            TAG: new RegExp("^(" + o + "|[*])"),
            ATTR: new RegExp("^" + K),
            PSEUDO: new RegExp("^" + J),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                r +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                r +
                "*(?:([+-]|)" +
                r +
                "*(\\d+)|))" +
                r +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + U + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                r +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                r +
                "*((?:-\\d)?\\d*)" +
                r +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          ae = /^(?:input|select|textarea|button)$/i,
          se = /^h\d$/i,
          c = /^[^{]+\{\s*\[native \w/,
          re = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          oe = /[+~]/,
          le = /'|\\/g,
          h = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig");
        try {
          $.apply((n = Y.call(y.childNodes)), y.childNodes),
            n[y.childNodes.length].nodeType;
        } catch (e) {
          $ = {
            apply: n.length
              ? function (e, t) {
                  V.apply(e, Y.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                  e.length = n - 1;
                },
          };
        }
        function D(e, t, n, i) {
          var a,
            s,
            r,
            o,
            l,
            d,
            c,
            u,
            p = t && t.ownerDocument,
            h = t ? t.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
          )
            return n;
          if (
            !i &&
            ((t ? t.ownerDocument || t : y) !== T && C(t), (t = t || T), E)
          ) {
            if (11 !== h && (d = re.exec(e)))
              if ((a = d[1])) {
                if (9 === h) {
                  if (!(r = t.getElementById(a))) return n;
                  if (r.id === a) return n.push(r), n;
                } else if (
                  p &&
                  (r = p.getElementById(a)) &&
                  v(t, r) &&
                  r.id === a
                )
                  return n.push(r), n;
              } else {
                if (d[2]) return $.apply(n, t.getElementsByTagName(e)), n;
                if (
                  (a = d[3]) &&
                  f.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return $.apply(n, t.getElementsByClassName(a)), n;
              }
            if (f.qsa && !b[e + " "] && (!g || !g.test(e))) {
              if (1 !== h) (p = t), (u = e);
              else if ("object" !== t.nodeName.toLowerCase()) {
                for (
                  (o = t.getAttribute("id"))
                    ? (o = o.replace(le, "\\$&"))
                    : t.setAttribute("id", (o = S)),
                    s = (c = m(e)).length,
                    l = ie.test(o) ? "#" + o : "[id='" + o + "']";
                  s--;

                )
                  c[s] = l + " " + N(c[s]);
                (u = c.join(",")), (p = (oe.test(e) && pe(t.parentNode)) || t);
              }
              if (u)
                try {
                  return $.apply(n, p.querySelectorAll(u)), n;
                } catch (e) {
                } finally {
                  o === S && t.removeAttribute("id");
                }
            }
          }
          return q(e.replace(I, "$1"), t, n, i);
        }
        function de() {
          var n = [];
          function i(e, t) {
            return (
              n.push(e + " ") > w.cacheLength && delete i[n.shift()],
              (i[e + " "] = t)
            );
          }
          return i;
        }
        function L(e) {
          return (e[S] = !0), e;
        }
        function P(e) {
          var t = T.createElement("div");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t);
          }
        }
        function ce(e, t) {
          for (var n = e.split("|"), i = n.length; i--; )
            w.attrHandle[n[i]] = t;
        }
        function ue(e, t) {
          var n = t && e,
            i =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function A(r) {
          return L(function (s) {
            return (
              (s = +s),
              L(function (e, t) {
                for (var n, i = r([], e.length, s), a = i.length; a--; )
                  e[(n = i[a])] && (e[n] = !(t[n] = e[n]));
              })
            );
          });
        }
        function pe(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in ((f = D.support = {}),
        (j = D.isXML =
          function (e) {
            e = e && (e.ownerDocument || e).documentElement;
            return !!e && "HTML" !== e.nodeName;
          }),
        (C = D.setDocument =
          function (e) {
            var e = e ? e.ownerDocument || e : y;
            return (
              e !== T &&
                9 === e.nodeType &&
                e.documentElement &&
                ((t = (T = e).documentElement),
                (E = !j(T)),
                (e = T.defaultView) &&
                  e.top !== e &&
                  (e.addEventListener
                    ? e.addEventListener("unload", O, !1)
                    : e.attachEvent && e.attachEvent("onunload", O)),
                (f.attributes = P(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (f.getElementsByTagName = P(function (e) {
                  return (
                    e.appendChild(T.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (f.getElementsByClassName = c.test(T.getElementsByClassName)),
                (f.getById = P(function (e) {
                  return (
                    (t.appendChild(e).id = S),
                    !T.getElementsByName || !T.getElementsByName(S).length
                  );
                })),
                f.getById
                  ? ((w.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && E)
                        return (t = t.getElementById(e)) ? [t] : [];
                    }),
                    (w.filter.ID = function (e) {
                      var t = e.replace(h, u);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }))
                  : (delete w.find.ID,
                    (w.filter.ID = function (e) {
                      var t = e.replace(h, u);
                      return function (e) {
                        e =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return e && e.value === t;
                      };
                    })),
                (w.find.TAG = f.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : f.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        i = [],
                        a = 0,
                        s = t.getElementsByTagName(e);
                      if ("*" !== e) return s;
                      for (; (n = s[a++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }),
                (w.find.CLASS =
                  f.getElementsByClassName &&
                  function (e, t) {
                    return void 0 !== t.getElementsByClassName && E
                      ? t.getElementsByClassName(e)
                      : void 0;
                  }),
                (i = []),
                (g = []),
                (f.qsa = c.test(T.querySelectorAll)) &&
                  (P(function (e) {
                    (t.appendChild(e).innerHTML =
                      "<a id='" +
                      S +
                      "'></a><select id='" +
                      S +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        g.push("[*^$]=" + r + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        g.push("\\[" + r + "*(?:value|" + U + ")"),
                      e.querySelectorAll("[id~=" + S + "-]").length ||
                        g.push("~="),
                      e.querySelectorAll(":checked").length ||
                        g.push(":checked"),
                      e.querySelectorAll("a#" + S + "+*").length ||
                        g.push(".#.+[+~]");
                  }),
                  P(function (e) {
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        g.push("name" + r + "*[*^$|!~]?="),
                      e.querySelectorAll(":enabled").length ||
                        g.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      g.push(",.*:");
                  })),
                (f.matchesSelector = c.test(
                  (a =
                    t.matches ||
                    t.webkitMatchesSelector ||
                    t.mozMatchesSelector ||
                    t.oMatchesSelector ||
                    t.msMatchesSelector)
                )) &&
                  P(function (e) {
                    (f.disconnectedMatch = a.call(e, "div")),
                      a.call(e, "[s!='']:x"),
                      i.push("!=", J);
                  }),
                (g = g.length && new RegExp(g.join("|"))),
                (i = i.length && new RegExp(i.join("|"))),
                (e = c.test(t.compareDocumentPosition)),
                (v =
                  e || c.test(t.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          t = t && t.parentNode;
                        return (
                          e === t ||
                          !(
                            !t ||
                            1 !== t.nodeType ||
                            !(n.contains
                              ? n.contains(t)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(t))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (G = e
                  ? function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var n =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        n ||
                        (1 &
                          (n =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!f.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === T || (e.ownerDocument === y && v(y, e))
                            ? -1
                            : t === T || (t.ownerDocument === y && v(y, t))
                            ? 1
                            : l
                            ? k(l, e) - k(l, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var n,
                        i = 0,
                        a = e.parentNode,
                        s = t.parentNode,
                        r = [e],
                        o = [t];
                      if (!a || !s)
                        return e === T
                          ? -1
                          : t === T
                          ? 1
                          : a
                          ? -1
                          : s
                          ? 1
                          : l
                          ? k(l, e) - k(l, t)
                          : 0;
                      if (a === s) return ue(e, t);
                      for (n = e; (n = n.parentNode); ) r.unshift(n);
                      for (n = t; (n = n.parentNode); ) o.unshift(n);
                      for (; r[i] === o[i]; ) i++;
                      return i
                        ? ue(r[i], o[i])
                        : r[i] === y
                        ? -1
                        : o[i] === y
                        ? 1
                        : 0;
                    })),
              T
            );
          }),
        (D.matches = function (e, t) {
          return D(e, null, null, t);
        }),
        (D.matchesSelector = function (e, t) {
          if (
            ((e.ownerDocument || e) !== T && C(e),
            (t = t.replace(te, "='$1']")),
            f.matchesSelector &&
              E &&
              !b[t + " "] &&
              (!i || !i.test(t)) &&
              (!g || !g.test(t)))
          )
            try {
              var n = a.call(e, t);
              if (
                n ||
                f.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (e) {}
          return 0 < D(t, T, null, [e]).length;
        }),
        (D.contains = function (e, t) {
          return (e.ownerDocument || e) !== T && C(e), v(e, t);
        }),
        (D.attr = function (e, t) {
          (e.ownerDocument || e) !== T && C(e);
          var n = w.attrHandle[t.toLowerCase()],
            n =
              n && W.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
          return void 0 !== n
            ? n
            : f.attributes || !E
            ? e.getAttribute(t)
            : (n = e.getAttributeNode(t)) && n.specified
            ? n.value
            : null;
        }),
        (D.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (D.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            a = 0;
          if (
            ((d = !f.detectDuplicates),
            (l = !f.sortStable && e.slice(0)),
            e.sort(G),
            d)
          ) {
            for (; (t = e[a++]); ) t === e[a] && (i = n.push(a));
            for (; i--; ) e.splice(n[i], 1);
          }
          return (l = null), e;
        }),
        (s = D.getText =
          function (e) {
            var t,
              n = "",
              i = 0,
              a = e.nodeType;
            if (a) {
              if (1 === a || 9 === a || 11 === a) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
              } else if (3 === a || 4 === a) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += s(t);
            return n;
          }),
        ((w = D.selectors =
          {
            cacheLength: 50,
            createPseudo: L,
            match: p,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: !0,
              },
              " ": {
                dir: "parentNode",
              },
              "+": {
                dir: "previousSibling",
                first: !0,
              },
              "~": {
                dir: "previousSibling",
              },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(h, u)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(h, u)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || D.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && D.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return p.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        ne.test(n) &&
                        (t = m(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(h, u).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = B[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + r + ")" + e + "(" + r + "|$)")) &&
                    B(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, n, i) {
                return function (e) {
                  e = D.attr(e, t);
                  return null == e
                    ? "!=" === n
                    : !n ||
                        ((e += ""),
                        "=" === n
                          ? e === i
                          : "!=" === n
                          ? e !== i
                          : "^=" === n
                          ? i && 0 === e.indexOf(i)
                          : "*=" === n
                          ? i && -1 < e.indexOf(i)
                          : "$=" === n
                          ? i && e.slice(-i.length) === i
                          : "~=" === n
                          ? -1 < (" " + e.replace(Q, " ") + " ").indexOf(i)
                          : "|=" === n &&
                            (e === i || e.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function (f, e, t, m, g) {
                var v = "nth" !== f.slice(0, 3),
                  y = "last" !== f.slice(-4),
                  b = "of-type" === e;
                return 1 === m && 0 === g
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (e, t, n) {
                      var i,
                        a,
                        s,
                        r,
                        o,
                        l,
                        d = v != y ? "nextSibling" : "previousSibling",
                        c = e.parentNode,
                        u = b && e.nodeName.toLowerCase(),
                        p = !n && !b,
                        h = !1;
                      if (c) {
                        if (v) {
                          for (; d; ) {
                            for (r = e; (r = r[d]); )
                              if (
                                b
                                  ? r.nodeName.toLowerCase() === u
                                  : 1 === r.nodeType
                              )
                                return !1;
                            l = d = "only" === f && !l && "nextSibling";
                          }
                          return !0;
                        }
                        if (((l = [y ? c.firstChild : c.lastChild]), y && p)) {
                          for (
                            h =
                              (o =
                                (i =
                                  (a =
                                    (s = (r = c)[S] || (r[S] = {}))[
                                      r.uniqueID
                                    ] || (s[r.uniqueID] = {}))[f] || [])[0] ===
                                  M && i[1]) && i[2],
                              r = o && c.childNodes[o];
                            (r = (++o && r && r[d]) || (h = o = 0) || l.pop());

                          )
                            if (1 === r.nodeType && ++h && r === e) {
                              a[f] = [M, o, h];
                              break;
                            }
                        } else if (
                          !1 ===
                          (h = p
                            ? (o =
                                (i =
                                  (a =
                                    (s = (r = e)[S] || (r[S] = {}))[
                                      r.uniqueID
                                    ] || (s[r.uniqueID] = {}))[f] || [])[0] ===
                                  M && i[1])
                            : h)
                        )
                          for (
                            ;
                            (r =
                              (++o && r && r[d]) || (h = o = 0) || l.pop()) &&
                            ((b
                              ? r.nodeName.toLowerCase() !== u
                              : 1 !== r.nodeType) ||
                              !++h ||
                              (p &&
                                ((a =
                                  (s = r[S] || (r[S] = {}))[r.uniqueID] ||
                                  (s[r.uniqueID] = {}))[f] = [M, h]),
                              r !== e));

                          );
                        return (h -= g) === m || (h % m == 0 && 0 <= h / m);
                      }
                    };
              },
              PSEUDO: function (e, s) {
                var t,
                  r =
                    w.pseudos[e] ||
                    w.setFilters[e.toLowerCase()] ||
                    D.error("unsupported pseudo: " + e);
                return r[S]
                  ? r(s)
                  : 1 < r.length
                  ? ((t = [e, e, "", s]),
                    w.setFilters.hasOwnProperty(e.toLowerCase())
                      ? L(function (e, t) {
                          for (var n, i = r(e, s), a = i.length; a--; )
                            e[(n = k(e, i[a]))] = !(t[n] = i[a]);
                        })
                      : function (e) {
                          return r(e, 0, t);
                        })
                  : r;
              },
            },
            pseudos: {
              not: L(function (e) {
                var i = [],
                  a = [],
                  o = H(e.replace(I, "$1"));
                return o[S]
                  ? L(function (e, t, n, i) {
                      for (var a, s = o(e, null, i, []), r = e.length; r--; )
                        (a = s[r]) && (e[r] = !(t[r] = a));
                    })
                  : function (e, t, n) {
                      return (
                        (i[0] = e), o(i, null, n, a), (i[0] = null), !a.pop()
                      );
                    };
              }),
              has: L(function (t) {
                return function (e) {
                  return 0 < D(t, e).length;
                };
              }),
              contains: L(function (t) {
                return (
                  (t = t.replace(h, u)),
                  function (e) {
                    return (
                      -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                    );
                  }
                );
              }),
              lang: L(function (n) {
                return (
                  ie.test(n || "") || D.error("unsupported lang: " + n),
                  (n = n.replace(h, u).toLowerCase()),
                  function (e) {
                    var t;
                    do {
                      if (
                        (t = E
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (t = t.toLowerCase()) === n ||
                          0 === t.indexOf(n + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var t = z.location && z.location.hash;
                return t && t.slice(1) === e.id;
              },
              root: function (e) {
                return e === t;
              },
              focus: function (e) {
                return (
                  e === T.activeElement &&
                  (!T.hasFocus || T.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function (e) {
                return !1 === e.disabled;
              },
              disabled: function (e) {
                return !0 === e.disabled;
              },
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !w.pseudos.empty(e);
              },
              header: function (e) {
                return se.test(e.nodeName);
              },
              input: function (e) {
                return ae.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (e = e.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: A(function () {
                return [0];
              }),
              last: A(function (e, t) {
                return [t - 1];
              }),
              eq: A(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: A(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: A(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: A(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                return e;
              }),
              gt: A(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }).pseudos.nth = w.pseudos.eq),
        {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        }))
          w.pseudos[e] = (function (t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
          })(e);
        for (e in {
          submit: !0,
          reset: !0,
        })
          w.pseudos[e] = (function (n) {
            return function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && e.type === n;
            };
          })(e);
        function he() {}
        function N(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i;
        }
        function fe(r, e, t) {
          var o = e.dir,
            l = t && "parentNode" === o,
            d = F++;
          return e.first
            ? function (e, t, n) {
                for (; (e = e[o]); )
                  if (1 === e.nodeType || l) return r(e, t, n);
              }
            : function (e, t, n) {
                var i,
                  a,
                  s = [M, d];
                if (n) {
                  for (; (e = e[o]); )
                    if ((1 === e.nodeType || l) && r(e, t, n)) return !0;
                } else
                  for (; (e = e[o]); )
                    if (1 === e.nodeType || l) {
                      if (
                        (i = (a =
                          (a = e[S] || (e[S] = {}))[e.uniqueID] ||
                          (a[e.uniqueID] = {}))[o]) &&
                        i[0] === M &&
                        i[1] === d
                      )
                        return (s[2] = i[2]);
                      if (((a[o] = s)[2] = r(e, t, n))) return !0;
                    }
              };
        }
        function me(a) {
          return 1 < a.length
            ? function (e, t, n) {
                for (var i = a.length; i--; ) if (!a[i](e, t, n)) return !1;
                return !0;
              }
            : a[0];
        }
        function _(e, t, n, i, a) {
          for (var s, r = [], o = 0, l = e.length, d = null != t; o < l; o++)
            !(s = e[o]) || (n && !n(s, i, a)) || (r.push(s), d && t.push(o));
          return r;
        }
        function ge(h, f, m, g, v, e) {
          return (
            g && !g[S] && (g = ge(g)),
            v && !v[S] && (v = ge(v, e)),
            L(function (e, t, n, i) {
              var a,
                s,
                r,
                o = [],
                l = [],
                d = t.length,
                c =
                  e ||
                  (function (e, t, n) {
                    for (var i = 0, a = t.length; i < a; i++) D(e, t[i], n);
                    return n;
                  })(f || "*", n.nodeType ? [n] : n, []),
                u = !h || (!e && f) ? c : _(c, o, h, n, i),
                p = m ? (v || (e ? h : d || g) ? [] : t) : u;
              if ((m && m(u, p, n, i), g))
                for (a = _(p, l), g(a, [], n, i), s = a.length; s--; )
                  (r = a[s]) && (p[l[s]] = !(u[l[s]] = r));
              if (e) {
                if (v || h) {
                  if (v) {
                    for (a = [], s = p.length; s--; )
                      (r = p[s]) && a.push((u[s] = r));
                    v(null, (p = []), a, i);
                  }
                  for (s = p.length; s--; )
                    (r = p[s]) &&
                      -1 < (a = v ? k(e, r) : o[s]) &&
                      (e[a] = !(t[a] = r));
                }
              } else (p = _(p === t ? p.splice(d, p.length) : p)), v ? v(null, t, p, i) : $.apply(t, p);
            })
          );
        }
        function ve(g, v) {
          function e(e, t, n, i, a) {
            var s,
              r,
              o,
              l = 0,
              d = "0",
              c = e && [],
              u = [],
              p = x,
              h = e || (b && w.find.TAG("*", a)),
              f = (M += null == p ? 1 : Math.random() || 0.1),
              m = h.length;
            for (
              a && (x = t === T || t || a);
              d !== m && null != (s = h[d]);
              d++
            ) {
              if (b && s) {
                for (
                  r = 0, t || s.ownerDocument === T || (C(s), (n = !E));
                  (o = g[r++]);

                )
                  if (o(s, t || T, n)) {
                    i.push(s);
                    break;
                  }
                a && (M = f);
              }
              y && ((s = !o && s) && l--, e && c.push(s));
            }
            if (((l += d), y && d !== l)) {
              for (r = 0; (o = v[r++]); ) o(c, u, t, n);
              if (e) {
                if (0 < l) for (; d--; ) c[d] || u[d] || (u[d] = X.call(i));
                u = _(u);
              }
              $.apply(i, u),
                a && !e && 0 < u.length && 1 < l + v.length && D.uniqueSort(i);
            }
            return a && ((M = f), (x = p)), c;
          }
          var y = 0 < v.length,
            b = 0 < g.length;
          return y ? L(e) : e;
        }
        return (
          (he.prototype = w.filters = w.pseudos),
          (w.setFilters = new he()),
          (m = D.tokenize =
            function (e, t) {
              var n,
                i,
                a,
                s,
                r,
                o,
                l,
                d = R[e + " "];
              if (d) return t ? 0 : d.slice(0);
              for (r = e, o = [], l = w.preFilter; r; ) {
                for (s in ((n && !(i = Z.exec(r))) ||
                  (i && (r = r.slice(i[0].length) || r), o.push((a = []))),
                (n = !1),
                (i = ee.exec(r)) &&
                  ((n = i.shift()),
                  a.push({
                    value: n,
                    type: i[0].replace(I, " "),
                  }),
                  (r = r.slice(n.length))),
                w.filter))
                  !(i = p[s].exec(r)) ||
                    (l[s] && !(i = l[s](i))) ||
                    ((n = i.shift()),
                    a.push({
                      value: n,
                      type: s,
                      matches: i,
                    }),
                    (r = r.slice(n.length)));
                if (!n) break;
              }
              return t ? r.length : r ? D.error(e) : R(e, o).slice(0);
            }),
          (H = D.compile =
            function (e, t) {
              var n,
                i = [],
                a = [],
                s = b[e + " "];
              if (!s) {
                for (n = (t = t || m(e)).length; n--; )
                  ((s = (function e(t) {
                    for (
                      var i,
                        n,
                        a,
                        s = t.length,
                        r = w.relative[t[0].type],
                        o = r || w.relative[" "],
                        l = r ? 1 : 0,
                        d = fe(
                          function (e) {
                            return e === i;
                          },
                          o,
                          !0
                        ),
                        c = fe(
                          function (e) {
                            return -1 < k(i, e);
                          },
                          o,
                          !0
                        ),
                        u = [
                          function (e, t, n) {
                            return (
                              (e =
                                (!r && (n || t !== x)) ||
                                ((i = t).nodeType ? d : c)(e, t, n)),
                              (i = null),
                              e
                            );
                          },
                        ];
                      l < s;
                      l++
                    )
                      if ((n = w.relative[t[l].type])) u = [fe(me(u), n)];
                      else {
                        if (
                          (n = w.filter[t[l].type].apply(null, t[l].matches))[S]
                        ) {
                          for (a = ++l; a < s && !w.relative[t[a].type]; a++);
                          return ge(
                            1 < l && me(u),
                            1 < l &&
                              N(
                                t.slice(0, l - 1).concat({
                                  value: " " === t[l - 2].type ? "*" : "",
                                })
                              ).replace(I, "$1"),
                            n,
                            l < a && e(t.slice(l, a)),
                            a < s && e((t = t.slice(a))),
                            a < s && N(t)
                          );
                        }
                        u.push(n);
                      }
                    return me(u);
                  })(t[n]))[S]
                    ? i
                    : a
                  ).push(s);
                (s = b(e, ve(a, i))).selector = e;
              }
              return s;
            }),
          (q = D.select =
            function (e, t, n, i) {
              var a,
                s,
                r,
                o,
                l,
                d = "function" == typeof e && e,
                c = !i && m((e = d.selector || e));
              if (((n = n || []), 1 === c.length)) {
                if (
                  2 < (s = c[0] = c[0].slice(0)).length &&
                  "ID" === (r = s[0]).type &&
                  f.getById &&
                  9 === t.nodeType &&
                  E &&
                  w.relative[s[1].type]
                ) {
                  if (
                    !(t = (w.find.ID(r.matches[0].replace(h, u), t) || [])[0])
                  )
                    return n;
                  d && (t = t.parentNode),
                    (e = e.slice(s.shift().value.length));
                }
                for (
                  a = p.needsContext.test(e) ? 0 : s.length;
                  a-- && ((r = s[a]), !w.relative[(o = r.type)]);

                )
                  if (
                    (l = w.find[o]) &&
                    (i = l(
                      r.matches[0].replace(h, u),
                      (oe.test(s[0].type) && pe(t.parentNode)) || t
                    ))
                  ) {
                    if ((s.splice(a, 1), (e = i.length && N(s)))) break;
                    return $.apply(n, i), n;
                  }
              }
              return (
                (d || H(e, c))(
                  i,
                  t,
                  !E,
                  n,
                  !t || (oe.test(e) && pe(t.parentNode)) || t
                ),
                n
              );
            }),
          (f.sortStable = S.split("").sort(G).join("") === S),
          (f.detectDuplicates = !!d),
          C(),
          (f.sortDetached = P(function (e) {
            return 1 & e.compareDocumentPosition(T.createElement("div"));
          })),
          P(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            ce("type|href|height|width", function (e, t, n) {
              return n
                ? void 0
                : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (f.attributes &&
            P(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            ce("value", function (e, t, n) {
              return n || "input" !== e.nodeName.toLowerCase()
                ? void 0
                : e.defaultValue;
            }),
          P(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            ce(U, function (e, t, n) {
              return n
                ? void 0
                : !0 === e[t]
                ? t.toLowerCase()
                : (n = e.getAttributeNode(t)) && n.specified
                ? n.value
                : null;
            }),
          D
        );
      })(x),
      V =
        ((T.find = t),
        (T.expr = t.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = t.uniqueSort),
        (T.text = t.getText),
        (T.isXMLDoc = t.isXML),
        (T.contains = t.contains),
        T.expr.match.needsContext),
      Y = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      U = /^.[^:#\[\.,]*$/;
    function K(e, n, i) {
      if (T.isFunction(n))
        return T.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== i;
        });
      if (n.nodeType)
        return T.grep(e, function (e) {
          return (e === n) !== i;
        });
      if ("string" == typeof n) {
        if (U.test(n)) return T.filter(n, e, i);
        n = T.filter(n, e);
      }
      return T.grep(e, function (e) {
        return -1 < a.call(n, e) !== i;
      });
    }
    (T.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? T.find.matchesSelector(i, e)
            ? [i]
            : []
          : T.find.matches(
              e,
              T.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      T.fn.extend({
        find: function (e) {
          var t,
            n = this.length,
            i = [],
            a = this;
          if ("string" != typeof e)
            return this.pushStack(
              T(e).filter(function () {
                for (t = 0; t < n; t++) if (T.contains(a[t], this)) return !0;
              })
            );
          for (t = 0; t < n; t++) T.find(e, a[t], i);
          return (
            ((i = this.pushStack(1 < n ? T.unique(i) : i)).selector = this
              .selector
              ? this.selector + " " + e
              : e),
            i
          );
        },
        filter: function (e) {
          return this.pushStack(K(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(K(this, e || [], !0));
        },
        is: function (e) {
          return !!K(
            this,
            "string" == typeof e && V.test(e) ? T(e) : e || [],
            !1
          ).length;
        },
      });
    var J,
      Q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      Z =
        (((T.fn.init = function (e, t, n) {
          if (!e) return this;
          if (((n = n || J), "string" != typeof e))
            return e.nodeType
              ? ((this.context = this[0] = e), (this.length = 1), this)
              : T.isFunction(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(T)
              : (void 0 !== e.selector &&
                  ((this.selector = e.selector), (this.context = e.context)),
                T.makeArray(e, this));
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                ? [null, e, null]
                : Q.exec(e)) ||
            (!i[1] && t)
          )
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : C,
                  !0
                )
              ),
              Y.test(i[1]) && T.isPlainObject(t))
            )
              for (var i in t)
                T.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (n = C.getElementById(i[2])) &&
              n.parentNode &&
              ((this.length = 1), (this[0] = n)),
            (this.context = C),
            (this.selector = e),
            this
          );
        }).prototype = T.fn),
        (J = T(C)),
        /^(?:parents|prev(?:Until|All))/),
      ee = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0,
      };
    function te(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    T.fn.extend({
      has: function (e) {
        var t = T(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            i = 0,
            a = this.length,
            s = [],
            r = V.test(e) || "string" != typeof e ? T(e, t || this.context) : 0;
          i < a;
          i++
        )
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (r
                ? -1 < r.index(n)
                : 1 === n.nodeType && T.find.matchesSelector(n, e))
            ) {
              s.push(n);
              break;
            }
        return this.pushStack(1 < s.length ? T.uniqueSort(s) : s);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? a.call(T(e), this[0])
            : a.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      T.each(
        {
          parent: function (e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (e) {
            return i(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return i(e, "parentNode", n);
          },
          next: function (e) {
            return te(e, "nextSibling");
          },
          prev: function (e) {
            return te(e, "previousSibling");
          },
          nextAll: function (e) {
            return i(e, "nextSibling");
          },
          prevAll: function (e) {
            return i(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return i(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return i(e, "previousSibling", n);
          },
          siblings: function (e) {
            return X((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return X(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument || T.merge([], e.childNodes);
          },
        },
        function (i, a) {
          T.fn[i] = function (e, t) {
            var n = T.map(this, a, e);
            return (
              (t = "Until" !== i.slice(-5) ? e : t) &&
                "string" == typeof t &&
                (n = T.filter(t, n)),
              1 < this.length &&
                (ee[i] || T.uniqueSort(n), Z.test(i) && n.reverse()),
              this.pushStack(n)
            );
          };
        }
      );
    var ne,
      E = /\S+/g;
    function ie() {
      C.removeEventListener("DOMContentLoaded", ie),
        x.removeEventListener("load", ie),
        T.ready();
    }
    (T.Callbacks = function (i) {
      var e, n;
      i =
        "string" == typeof i
          ? ((e = i),
            (n = {}),
            T.each(e.match(E) || [], function (e, t) {
              n[t] = !0;
            }),
            n)
          : T.extend({}, i);
      function a() {
        for (o = i.once, r = s = !0; d.length; c = -1)
          for (t = d.shift(); ++c < l.length; )
            !1 === l[c].apply(t[0], t[1]) &&
              i.stopOnFalse &&
              ((c = l.length), (t = !1));
        i.memory || (t = !1), (s = !1), o && (l = t ? [] : "");
      }
      var s,
        t,
        r,
        o,
        l = [],
        d = [],
        c = -1,
        u = {
          add: function () {
            return (
              l &&
                (t && !s && ((c = l.length - 1), d.push(t)),
                (function n(e) {
                  T.each(e, function (e, t) {
                    T.isFunction(t)
                      ? (i.unique && u.has(t)) || l.push(t)
                      : t && t.length && "string" !== T.type(t) && n(t);
                  });
                })(arguments),
                t && !s && a()),
              this
            );
          },
          remove: function () {
            return (
              T.each(arguments, function (e, t) {
                for (var n; -1 < (n = T.inArray(t, l, n)); )
                  l.splice(n, 1), n <= c && c--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < T.inArray(e, l) : 0 < l.length;
          },
          empty: function () {
            return (l = l && []), this;
          },
          disable: function () {
            return (o = d = []), (l = t = ""), this;
          },
          disabled: function () {
            return !l;
          },
          lock: function () {
            return (o = d = []), t || (l = t = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (e, t) {
            return (
              o ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                d.push(t),
                s || a()),
              this
            );
          },
          fire: function () {
            return u.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!r;
          },
        };
      return u;
    }),
      T.extend({
        Deferred: function (e) {
          var s = [
              ["resolve", "done", T.Callbacks("once memory"), "resolved"],
              ["reject", "fail", T.Callbacks("once memory"), "rejected"],
              ["notify", "progress", T.Callbacks("memory")],
            ],
            a = "pending",
            r = {
              state: function () {
                return a;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              then: function () {
                var a = arguments;
                return T.Deferred(function (i) {
                  T.each(s, function (e, t) {
                    var n = T.isFunction(a[e]) && a[e];
                    o[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && T.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(i.notify)
                            .done(i.resolve)
                            .fail(i.reject)
                        : i[t[0] + "With"](
                            this === r ? i.promise() : this,
                            n ? [e] : arguments
                          );
                    });
                  }),
                    (a = null);
                }).promise();
              },
              promise: function (e) {
                return null != e ? T.extend(e, r) : r;
              },
            },
            o = {};
          return (
            (r.pipe = r.then),
            T.each(s, function (e, t) {
              var n = t[2],
                i = t[3];
              (r[t[1]] = n.add),
                i &&
                  n.add(
                    function () {
                      a = i;
                    },
                    s[1 ^ e][2].disable,
                    s[2][2].lock
                  ),
                (o[t[0]] = function () {
                  return (
                    o[t[0] + "With"](this === o ? r : this, arguments), this
                  );
                }),
                (o[t[0] + "With"] = n.fireWith);
            }),
            r.promise(o),
            e && e.call(o, o),
            o
          );
        },
        when: function (e) {
          function t(t, n, i) {
            return function (e) {
              (n[t] = this),
                (i[t] = 1 < arguments.length ? c.call(arguments) : e),
                i === a ? d.notifyWith(n, i) : --l || d.resolveWith(n, i);
            };
          }
          var a,
            n,
            i,
            s = 0,
            r = c.call(arguments),
            o = r.length,
            l = 1 !== o || (e && T.isFunction(e.promise)) ? o : 0,
            d = 1 === l ? e : T.Deferred();
          if (1 < o)
            for (
              a = new Array(o), n = new Array(o), i = new Array(o);
              s < o;
              s++
            )
              r[s] && T.isFunction(r[s].promise)
                ? r[s]
                    .promise()
                    .progress(t(s, n, a))
                    .done(t(s, i, r))
                    .fail(d.reject)
                : --l;
          return l || d.resolveWith(i, r), d.promise();
        },
      }),
      (T.fn.ready = function (e) {
        return T.ready.promise().done(e), this;
      }),
      T.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? T.readyWait++ : T.ready(!0);
        },
        ready: function (e) {
          (!0 === e ? --T.readyWait : T.isReady) ||
            ((T.isReady = !0) !== e && 0 < --T.readyWait) ||
            (ne.resolveWith(C, [T]),
            T.fn.triggerHandler &&
              (T(C).triggerHandler("ready"), T(C).off("ready")));
        },
      }),
      (T.ready.promise = function (e) {
        return (
          ne ||
            ((ne = T.Deferred()),
            "complete" === C.readyState ||
            ("loading" !== C.readyState && !C.documentElement.doScroll)
              ? x.setTimeout(T.ready)
              : (C.addEventListener("DOMContentLoaded", ie),
                x.addEventListener("load", ie))),
          ne.promise(e)
        );
      }),
      T.ready.promise();
    function u(e, t, n, i, a, s, r) {
      var o = 0,
        l = e.length,
        d = null == n;
      if ("object" === T.type(n))
        for (o in ((a = !0), n)) u(e, t, o, n[o], !0, s, r);
      else if (
        void 0 !== i &&
        ((a = !0),
        T.isFunction(i) || (r = !0),
        (t = d
          ? r
            ? (t.call(e, i), null)
            : ((d = t),
              function (e, t, n) {
                return d.call(T(e), n);
              })
          : t))
      )
        for (; o < l; o++) t(e[o], n, r ? i : i.call(e[o], o, t(e[o], n)));
      return a ? e : d ? t.call(e) : l ? t(e[0], n) : s;
    }
    function g(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function n() {
      this.expando = T.expando + n.uid++;
    }
    (n.uid = 1),
      (n.prototype = {
        register: function (e, t) {
          t = t || {};
          return (
            e.nodeType
              ? (e[this.expando] = t)
              : Object.defineProperty(e, this.expando, {
                  value: t,
                  writable: !0,
                  configurable: !0,
                }),
            e[this.expando]
          );
        },
        cache: function (e) {
          if (!g(e)) return {};
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              g(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var i,
            a = this.cache(e);
          if ("string" == typeof t) a[t] = n;
          else for (i in t) a[i] = t[i];
          return a;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][t];
        },
        access: function (e, t, n) {
          var i;
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? void 0 !== (i = this.get(e, t))
              ? i
              : this.get(e, T.camelCase(t))
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i,
            a,
            s = e[this.expando];
          if (void 0 !== s) {
            if (void 0 === t) this.register(e);
            else {
              n = (i = T.isArray(t)
                ? t.concat(t.map(T.camelCase))
                : ((a = T.camelCase(t)),
                  t in s ? [t, a] : (i = a) in s ? [i] : i.match(E) || []))
                .length;
              for (; n--; ) delete s[i[n]];
            }
            (void 0 !== t && !T.isEmptyObject(s)) ||
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          e = e[this.expando];
          return void 0 !== e && !T.isEmptyObject(e);
        },
      });
    var v = new n(),
      l = new n(),
      ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      se = /[A-Z]/g;
    function re(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((i = "data-" + t.replace(se, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(i)))
        ) {
          try {
            n =
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : +n + "" === n
                  ? +n
                  : ae.test(n)
                  ? T.parseJSON(n)
                  : n));
          } catch (e) {}
          l.set(e, t, n);
        } else n = void 0;
      return n;
    }
    T.extend({
      hasData: function (e) {
        return l.hasData(e) || v.hasData(e);
      },
      data: function (e, t, n) {
        return l.access(e, t, n);
      },
      removeData: function (e, t) {
        l.remove(e, t);
      },
      _data: function (e, t, n) {
        return v.access(e, t, n);
      },
      _removeData: function (e, t) {
        v.remove(e, t);
      },
    }),
      T.fn.extend({
        data: function (i, e) {
          var t,
            n,
            a,
            s = this[0],
            r = s && s.attributes;
          if (void 0 !== i)
            return "object" == typeof i
              ? this.each(function () {
                  l.set(this, i);
                })
              : u(
                  this,
                  function (t) {
                    var e, n;
                    if (s && void 0 === t)
                      return void 0 !==
                        (e =
                          l.get(s, i) ||
                          l.get(s, i.replace(se, "-$&").toLowerCase()))
                        ? e
                        : ((n = T.camelCase(i)),
                          void 0 !== (e = l.get(s, n))
                            ? e
                            : void 0 !== (e = re(s, n, void 0))
                            ? e
                            : void 0);
                    (n = T.camelCase(i)),
                      this.each(function () {
                        var e = l.get(this, n);
                        l.set(this, n, t),
                          -1 < i.indexOf("-") &&
                            void 0 !== e &&
                            l.set(this, i, t);
                      });
                  },
                  null,
                  e,
                  1 < arguments.length,
                  null,
                  !0
                );
          if (
            this.length &&
            ((a = l.get(s)), 1 === s.nodeType && !v.get(s, "hasDataAttrs"))
          ) {
            for (t = r.length; t--; )
              r[t] &&
                0 === (n = r[t].name).indexOf("data-") &&
                ((n = T.camelCase(n.slice(5))), re(s, n, a[n]));
            v.set(s, "hasDataAttrs", !0);
          }
          return a;
        },
        removeData: function (e) {
          return this.each(function () {
            l.remove(this, e);
          });
        },
      }),
      T.extend({
        queue: function (e, t, n) {
          var i;
          return e
            ? ((i = v.get(e, (t = (t || "fx") + "queue"))),
              n &&
                (!i || T.isArray(n)
                  ? (i = v.access(e, t, T.makeArray(n)))
                  : i.push(n)),
              i || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = T.queue(e, t),
            i = n.length,
            a = n.shift(),
            s = T._queueHooks(e, t);
          "inprogress" === a && ((a = n.shift()), i--),
            a &&
              ("fx" === t && n.unshift("inprogress"),
              delete s.stop,
              a.call(
                e,
                function () {
                  T.dequeue(e, t);
                },
                s
              )),
            !i && s && s.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            v.get(e, n) ||
            v.access(e, n, {
              empty: T.Callbacks("once memory").add(function () {
                v.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      T.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return (
            "string" != typeof t && ((n = t), (t = "fx"), e--),
            arguments.length < e
              ? T.queue(this[0], t)
              : void 0 === n
              ? this
              : this.each(function () {
                  var e = T.queue(this, t, n);
                  T._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            T.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          function n() {
            --a || s.resolveWith(r, [r]);
          }
          var i,
            a = 1,
            s = T.Deferred(),
            r = this,
            o = this.length;
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            o--;

          )
            (i = v.get(r[o], e + "queueHooks")) &&
              i.empty &&
              (a++, i.empty.add(n));
          return n(), s.promise(t);
        },
      });
    function y(e, t) {
      return (
        "none" === T.css((e = t || e), "display") ||
        !T.contains(e.ownerDocument, e)
      );
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      p = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
      o = ["Top", "Right", "Bottom", "Left"];
    function oe(e, t, n, i) {
      var a,
        s = 1,
        r = 20,
        o = i
          ? function () {
              return i.cur();
            }
          : function () {
              return T.css(e, t, "");
            },
        l = o(),
        d = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
        c = (T.cssNumber[t] || ("px" !== d && +l)) && p.exec(T.css(e, t));
      if (c && c[3] !== d)
        for (
          d = d || c[3], n = n || [], c = +l || 1;
          T.style(e, t, (c /= s = s || ".5") + d),
            s !== (s = o() / l) && 1 !== s && --r;

        );
      return (
        n &&
          ((c = +c || +l || 0),
          (a = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = d), (i.start = c), (i.end = a))),
        a
      );
    }
    var le = /^(?:checkbox|radio)$/i,
      de = /<([\w:-]+)/,
      ce = /^$|\/(?:java|ecma)script/i,
      b = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    function w(e, t) {
      var n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : [];
      return void 0 === t || (t && T.nodeName(e, t)) ? T.merge([e], n) : n;
    }
    function ue(e, t) {
      for (var n = 0, i = e.length; n < i; n++)
        v.set(e[n], "globalEval", !t || v.get(t[n], "globalEval"));
    }
    (b.optgroup = b.option),
      (b.tbody = b.tfoot = b.colgroup = b.caption = b.thead),
      (b.th = b.td);
    var pe = /<|&#?\w+;/;
    function he(e, t, n, i, a) {
      for (
        var s,
          r,
          o,
          l,
          d,
          c = t.createDocumentFragment(),
          u = [],
          p = 0,
          h = e.length;
        p < h;
        p++
      )
        if ((s = e[p]) || 0 === s)
          if ("object" === T.type(s)) T.merge(u, s.nodeType ? [s] : s);
          else if (pe.test(s)) {
            for (
              r = r || c.appendChild(t.createElement("div")),
                o = (de.exec(s) || ["", ""])[1].toLowerCase(),
                o = b[o] || b._default,
                r.innerHTML = o[1] + T.htmlPrefilter(s) + o[2],
                d = o[0];
              d--;

            )
              r = r.lastChild;
            T.merge(u, r.childNodes), ((r = c.firstChild).textContent = "");
          } else u.push(t.createTextNode(s));
      for (c.textContent = "", p = 0; (s = u[p++]); )
        if (i && -1 < T.inArray(s, i)) a && a.push(s);
        else if (
          ((l = T.contains(s.ownerDocument, s)),
          (r = w(c.appendChild(s), "script")),
          l && ue(r),
          n)
        )
          for (d = 0; (s = r[d++]); ) ce.test(s.type || "") && n.push(s);
      return c;
    }
    (t = C.createDocumentFragment().appendChild(C.createElement("div"))),
      (D = C.createElement("input")).setAttribute("type", "radio"),
      D.setAttribute("checked", "checked"),
      D.setAttribute("name", "t"),
      t.appendChild(D),
      (m.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (m.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    var fe = /^key/,
      me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ge = /^([^.]*)(?:\.(.+)|)/;
    function ve() {
      return !0;
    }
    function d() {
      return !1;
    }
    function ye() {
      try {
        return C.activeElement;
      } catch (e) {}
    }
    function be(e, t, n, i, a, s) {
      var r, o;
      if ("object" == typeof t) {
        for (o in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
          be(e, o, n, i, t[o], s);
        return e;
      }
      if (
        (null == i && null == a
          ? ((a = n), (i = n = void 0))
          : null == a &&
            ("string" == typeof n
              ? ((a = i), (i = void 0))
              : ((a = i), (i = n), (n = void 0))),
        !1 === a)
      )
        a = d;
      else if (!a) return e;
      return (
        1 === s &&
          ((r = a),
          ((a = function (e) {
            return T().off(e), r.apply(this, arguments);
          }).guid = r.guid || (r.guid = T.guid++))),
        e.each(function () {
          T.event.add(this, t, a, i, n);
        })
      );
    }
    (T.event = {
      global: {},
      add: function (t, e, n, i, a) {
        var s,
          r,
          o,
          l,
          d,
          c,
          u,
          p,
          h,
          f = v.get(t);
        if (f)
          for (
            n.handler && ((n = (s = n).handler), (a = s.selector)),
              n.guid || (n.guid = T.guid++),
              (o = f.events) || (o = f.events = {}),
              (r = f.handle) ||
                (r = f.handle =
                  function (e) {
                    return void 0 !== T && T.event.triggered !== e.type
                      ? T.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
              l = (e = (e || "").match(E) || [""]).length;
            l--;

          )
            (u = h = (p = ge.exec(e[l]) || [])[1]),
              (p = (p[2] || "").split(".").sort()),
              u &&
                ((d = T.event.special[u] || {}),
                (u = (a ? d.delegateType : d.bindType) || u),
                (d = T.event.special[u] || {}),
                (h = T.extend(
                  {
                    type: u,
                    origType: h,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: a,
                    needsContext: a && T.expr.match.needsContext.test(a),
                    namespace: p.join("."),
                  },
                  s
                )),
                (c = o[u]) ||
                  (((c = o[u] = []).delegateCount = 0),
                  (d.setup && !1 !== d.setup.call(t, i, p, r)) ||
                    (t.addEventListener && t.addEventListener(u, r))),
                d.add &&
                  (d.add.call(t, h),
                  h.handler.guid || (h.handler.guid = n.guid)),
                a ? c.splice(c.delegateCount++, 0, h) : c.push(h),
                (T.event.global[u] = !0));
      },
      remove: function (e, t, n, i, a) {
        var s,
          r,
          o,
          l,
          d,
          c,
          u,
          p,
          h,
          f,
          m,
          g = v.hasData(e) && v.get(e);
        if (g && (l = g.events)) {
          for (d = (t = (t || "").match(E) || [""]).length; d--; )
            if (
              ((h = m = (o = ge.exec(t[d]) || [])[1]),
              (f = (o[2] || "").split(".").sort()),
              h)
            ) {
              for (
                u = T.event.special[h] || {},
                  p = l[(h = (i ? u.delegateType : u.bindType) || h)] || [],
                  o =
                    o[2] &&
                    new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  r = s = p.length;
                s--;

              )
                (c = p[s]),
                  (!a && m !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (o && !o.test(c.namespace)) ||
                    (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                    (p.splice(s, 1),
                    c.selector && p.delegateCount--,
                    u.remove && u.remove.call(e, c));
              r &&
                !p.length &&
                ((u.teardown && !1 !== u.teardown.call(e, f, g.handle)) ||
                  T.removeEvent(e, h, g.handle),
                delete l[h]);
            } else for (h in l) T.event.remove(e, h + t[d], n, i, !0);
          T.isEmptyObject(l) && v.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        e = T.event.fix(e);
        var t,
          n,
          i,
          a,
          s,
          r = c.call(arguments),
          o = (v.get(this, "events") || {})[e.type] || [],
          l = T.event.special[e.type] || {};
        if (
          (((r[0] = e).delegateTarget = this),
          !l.preDispatch || !1 !== l.preDispatch.call(this, e))
        ) {
          for (
            s = T.event.handlers.call(this, e, o), t = 0;
            (i = s[t++]) && !e.isPropagationStopped();

          )
            for (
              e.currentTarget = i.elem, n = 0;
              (a = i.handlers[n++]) && !e.isImmediatePropagationStopped();

            )
              (e.rnamespace && !e.rnamespace.test(a.namespace)) ||
                ((e.handleObj = a),
                (e.data = a.data),
                void 0 !==
                  (a = (
                    (T.event.special[a.origType] || {}).handle || a.handler
                  ).apply(i.elem, r)) &&
                  !1 === (e.result = a) &&
                  (e.preventDefault(), e.stopPropagation()));
          return l.postDispatch && l.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          a,
          s,
          r = [],
          o = t.delegateCount,
          l = e.target;
        if (
          o &&
          l.nodeType &&
          ("click" !== e.type || isNaN(e.button) || e.button < 1)
        )
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
              for (i = [], n = 0; n < o; n++)
                void 0 === i[(a = (s = t[n]).selector + " ")] &&
                  (i[a] = s.needsContext
                    ? -1 < T(a, this).index(l)
                    : T.find(a, this, null, [l]).length),
                  i[a] && i.push(s);
              i.length &&
                r.push({
                  elem: l,
                  handlers: i,
                });
            }
        return (
          o < t.length &&
            r.push({
              elem: this,
              handlers: t.slice(o),
            }),
          r
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (e, t) {
          var n,
            i,
            a = t.button;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((n = (i = e.target.ownerDocument || C).documentElement),
              (i = i.body),
              (e.pageX =
                t.clientX +
                ((n && n.scrollLeft) || (i && i.scrollLeft) || 0) -
                ((n && n.clientLeft) || (i && i.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((n && n.scrollTop) || (i && i.scrollTop) || 0) -
                ((n && n.clientTop) || (i && i.clientTop) || 0))),
            e.which ||
              void 0 === a ||
              (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
            e
          );
        },
      },
      fix: function (e) {
        if (e[T.expando]) return e;
        var t,
          n,
          i,
          a = e.type,
          s = e,
          r = this.fixHooks[a];
        for (
          r ||
            (this.fixHooks[a] = r =
              me.test(a) ? this.mouseHooks : fe.test(a) ? this.keyHooks : {}),
            i = r.props ? this.props.concat(r.props) : this.props,
            e = new T.Event(s),
            t = i.length;
          t--;

        )
          e[(n = i[t])] = s[n];
        return (
          e.target || (e.target = C),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          r.filter ? r.filter(e, s) : e
        );
      },
      special: {
        load: {
          noBubble: !0,
        },
        focus: {
          trigger: function () {
            return this !== ye() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === ye() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              T.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (e) {
            return T.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (T.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (T.Event = function (e, t) {
        return this instanceof T.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? ve
                    : d))
              : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || T.now()),
            void (this[T.expando] = !0))
          : new T.Event(e, t);
      }),
      (T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = ve),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = ve),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = ve),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      T.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, a) {
          T.event.special[e] = {
            delegateType: a,
            bindType: a,
            handle: function (e) {
              var t,
                n = e.relatedTarget,
                i = e.handleObj;
              return (
                (n && (n === this || T.contains(this, n))) ||
                  ((e.type = i.origType),
                  (t = i.handler.apply(this, arguments)),
                  (e.type = a)),
                t
              );
            },
          };
        }
      ),
      T.fn.extend({
        on: function (e, t, n, i) {
          return be(this, e, t, n, i);
        },
        one: function (e, t, n, i) {
          return be(this, e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, a;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              T(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" != typeof e)
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = d),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          for (a in e) this.off(a, t, e[a]);
          return this;
        },
      });
    var we =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      xe = /<script|<style|<link/i,
      Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Te = /^true\/(.*)/,
      Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Se(e, t) {
      return T.nodeName(e, "table") &&
        T.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
        : e;
    }
    function Me(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function $e(e) {
      var t = Te.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function ke(e, t) {
      var n, i, a, s, r, o;
      if (1 === t.nodeType) {
        if (
          v.hasData(e) &&
          ((s = v.access(e)), (r = v.set(t, s)), (o = s.events))
        )
          for (a in (delete r.handle, (r.events = {}), o))
            for (n = 0, i = o[a].length; n < i; n++) T.event.add(t, a, o[a][n]);
        l.hasData(e) && ((s = l.access(e)), (r = T.extend({}, s)), l.set(t, r));
      }
    }
    function S(n, i, a, s) {
      i = j.apply([], i);
      var e,
        t,
        r,
        o,
        l,
        d,
        c = 0,
        u = n.length,
        p = u - 1,
        h = i[0],
        f = T.isFunction(h);
      if (f || (1 < u && "string" == typeof h && !m.checkClone && Ce.test(h)))
        return n.each(function (e) {
          var t = n.eq(e);
          f && (i[0] = h.call(this, e, t.html())), S(t, i, a, s);
        });
      if (
        u &&
        ((t = (e = he(i, n[0].ownerDocument, !1, n, s)).firstChild),
        1 === e.childNodes.length && (e = t),
        t || s)
      ) {
        for (o = (r = T.map(w(e, "script"), Me)).length; c < u; c++)
          (l = e),
            c !== p &&
              ((l = T.clone(l, !0, !0)), o && T.merge(r, w(l, "script"))),
            a.call(n[c], l, c);
        if (o)
          for (
            d = r[r.length - 1].ownerDocument, T.map(r, $e), c = 0;
            c < o;
            c++
          )
            (l = r[c]),
              ce.test(l.type || "") &&
                !v.access(l, "globalEval") &&
                T.contains(d, l) &&
                (l.src
                  ? T._evalUrl && T._evalUrl(l.src)
                  : T.globalEval(l.textContent.replace(Ee, "")));
      }
      return n;
    }
    function Ie(e, t, n) {
      for (var i, a = t ? T.filter(t, e) : e, s = 0; null != (i = a[s]); s++)
        n || 1 !== i.nodeType || T.cleanData(w(i)),
          i.parentNode &&
            (n && T.contains(i.ownerDocument, i) && ue(w(i, "script")),
            i.parentNode.removeChild(i));
      return e;
    }
    T.extend({
      htmlPrefilter: function (e) {
        return e.replace(we, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var i,
          a,
          s,
          r,
          o,
          l,
          d,
          c = e.cloneNode(!0),
          u = T.contains(e.ownerDocument, e);
        if (
          !(
            m.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            T.isXMLDoc(e)
          )
        )
          for (r = w(c), i = 0, a = (s = w(e)).length; i < a; i++)
            (o = s[i]),
              (l = r[i]),
              (d = void 0),
              "input" === (d = l.nodeName.toLowerCase()) && le.test(o.type)
                ? (l.checked = o.checked)
                : ("input" !== d && "textarea" !== d) ||
                  (l.defaultValue = o.defaultValue);
        if (t)
          if (n)
            for (s = s || w(e), r = r || w(c), i = 0, a = s.length; i < a; i++)
              ke(s[i], r[i]);
          else ke(e, c);
        return (
          0 < (r = w(c, "script")).length && ue(r, !u && w(e, "script")), c
        );
      },
      cleanData: function (e) {
        for (
          var t, n, i, a = T.event.special, s = 0;
          void 0 !== (n = e[s]);
          s++
        )
          if (g(n)) {
            if ((t = n[v.expando])) {
              if (t.events)
                for (i in t.events)
                  a[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
              n[v.expando] = void 0;
            }
            n[l.expando] && (n[l.expando] = void 0);
          }
      },
    }),
      T.fn.extend({
        domManip: S,
        detach: function (e) {
          return Ie(this, e, !0);
        },
        remove: function (e) {
          return Ie(this, e);
        },
        text: function (e) {
          return u(
            this,
            function (e) {
              return void 0 === e
                ? T.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return S(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              Se(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return S(this, arguments, function (e) {
            var t;
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              (t = Se(this, e)).insertBefore(e, t.firstChild);
          });
        },
        before: function () {
          return S(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return S(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (T.cleanData(w(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return T.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return u(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !xe.test(e) &&
                !b[(de.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = T.htmlPrefilter(e);
                try {
                  for (; n < i; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (T.cleanData(w(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var n = [];
          return S(
            this,
            arguments,
            function (e) {
              var t = this.parentNode;
              T.inArray(this, n) < 0 &&
                (T.cleanData(w(this)), t && t.replaceChild(e, this));
            },
            n
          );
        },
      }),
      T.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, r) {
          T.fn[e] = function (e) {
            for (var t, n = [], i = T(e), a = i.length - 1, s = 0; s <= a; s++)
              (t = s === a ? this : this.clone(!0)),
                T(i[s])[r](t),
                H.apply(n, t.get());
            return this.pushStack(n);
          };
        }
      );
    var De,
      Le = {
        HTML: "block",
        BODY: "block",
      };
    function Pe(e, t) {
      (e = T(t.createElement(e)).appendTo(t.body)),
        (t = T.css(e[0], "display"));
      return e.detach(), t;
    }
    function Ae(e) {
      var t = C,
        n = Le[e];
      return (
        n ||
          (("none" !== (n = Pe(e, t)) && n) ||
            ((t = (De = (
              De || T("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement))[0].contentDocument).write(),
            t.close(),
            (n = Pe(e, t)),
            De.detach()),
          (Le[e] = n)),
        n
      );
    }
    function Ne(e) {
      var t = e.ownerDocument.defaultView;
      return (t = t && t.opener ? t : x).getComputedStyle(e);
    }
    function _e(e, t, n, i) {
      var a,
        s = {};
      for (a in t) (s[a] = e.style[a]), (e.style[a] = t[a]);
      for (a in ((n = n.apply(e, i || [])), t)) e.style[a] = s[a];
      return n;
    }
    var ze,
      s,
      Oe,
      je,
      r,
      h,
      He = /^margin/,
      qe = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
      M = C.documentElement;
    function Fe() {
      (h.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (h.innerHTML = ""),
        M.appendChild(r);
      var e = x.getComputedStyle(h);
      (ze = "1%" !== e.top),
        (je = "2px" === e.marginLeft),
        (s = "4px" === e.width),
        (h.style.marginRight = "50%"),
        (Oe = "4px" === e.marginRight),
        M.removeChild(r);
    }
    function $(e, t, n) {
      var i,
        a,
        s = e.style;
      return (
        ("" !==
          (a = (n = n || Ne(e)) ? n.getPropertyValue(t) || n[t] : void 0) &&
          void 0 !== a) ||
          T.contains(e.ownerDocument, e) ||
          (a = T.style(e, t)),
        n &&
          !m.pixelMarginRight() &&
          qe.test(a) &&
          He.test(t) &&
          ((e = s.width),
          (t = s.minWidth),
          (i = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = e),
          (s.minWidth = t),
          (s.maxWidth = i)),
        void 0 !== a ? a + "" : a
      );
    }
    function Be(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    (r = C.createElement("div")),
      (h = C.createElement("div")).style &&
        ((h.style.backgroundClip = "content-box"),
        (h.cloneNode(!0).style.backgroundClip = ""),
        (m.clearCloneStyle = "content-box" === h.style.backgroundClip),
        (r.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        r.appendChild(h),
        T.extend(m, {
          pixelPosition: function () {
            return Fe(), ze;
          },
          boxSizingReliable: function () {
            return null == s && Fe(), s;
          },
          pixelMarginRight: function () {
            return null == s && Fe(), Oe;
          },
          reliableMarginLeft: function () {
            return null == s && Fe(), je;
          },
          reliableMarginRight: function () {
            var e,
              t = h.appendChild(C.createElement("div"));
            return (
              (t.style.cssText = h.style.cssText =
                "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (t.style.marginRight = t.style.width = "0"),
              (h.style.width = "1px"),
              M.appendChild(r),
              (e = !parseFloat(x.getComputedStyle(t).marginRight)),
              M.removeChild(r),
              h.removeChild(t),
              e
            );
          },
        }));
    var Re = /^(none|table(?!-c[ea]).+)/,
      Ge = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
      },
      We = {
        letterSpacing: "0",
        fontWeight: "400",
      },
      Xe = ["Webkit", "O", "Moz", "ms"],
      Ve = C.createElement("div").style;
    function Ye(e) {
      if (e in Ve) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; )
        if ((e = Xe[n] + t) in Ve) return e;
    }
    function Ue(e, t, n) {
      var i = p.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function Ke(e, t, n, i, a) {
      for (
        var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          r = 0;
        s < 4;
        s += 2
      )
        "margin" === n && (r += T.css(e, n + o[s], !0, a)),
          i
            ? ("content" === n && (r -= T.css(e, "padding" + o[s], !0, a)),
              "margin" !== n &&
                (r -= T.css(e, "border" + o[s] + "Width", !0, a)))
            : ((r += T.css(e, "padding" + o[s], !0, a)),
              "padding" !== n &&
                (r += T.css(e, "border" + o[s] + "Width", !0, a)));
      return r;
    }
    function Je(e, t, n) {
      var i = !0,
        a = "width" === t ? e.offsetWidth : e.offsetHeight,
        s = Ne(e),
        r = "border-box" === T.css(e, "boxSizing", !1, s);
      if (a <= 0 || null == a) {
        if (
          (((a = $(e, t, s)) < 0 || null == a) && (a = e.style[t]), qe.test(a))
        )
          return a;
        (i = r && (m.boxSizingReliable() || a === e.style[t])),
          (a = parseFloat(a) || 0);
      }
      return a + Ke(e, t, n || (r ? "border" : "content"), i, s) + "px";
    }
    function Qe(e, t) {
      for (var n, i, a, s = [], r = 0, o = e.length; r < o; r++)
        (i = e[r]).style &&
          ((s[r] = v.get(i, "olddisplay")),
          (n = i.style.display),
          t
            ? (s[r] || "none" !== n || (i.style.display = ""),
              "" === i.style.display &&
                y(i) &&
                (s[r] = v.access(i, "olddisplay", Ae(i.nodeName))))
            : ((a = y(i)),
              ("none" === n && a) ||
                v.set(i, "olddisplay", a ? n : T.css(i, "display"))));
      for (r = 0; r < o; r++)
        !(i = e[r]).style ||
          (t && "none" !== i.style.display && "" !== i.style.display) ||
          (i.style.display = t ? s[r] || "" : "none");
      return e;
    }
    function k(e, t, n, i, a) {
      return new k.prototype.init(e, t, n, i, a);
    }
    T.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) return "" === (t = $(e, "opacity")) ? "1" : t;
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {
        float: "cssFloat",
      },
      style: function (e, t, n, i) {
        var a, s, r, o, l;
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style)
          return (
            (o = T.camelCase(t)),
            (l = e.style),
            (t = T.cssProps[o] || (T.cssProps[o] = Ye(o) || o)),
            (r = T.cssHooks[t] || T.cssHooks[o]),
            void 0 === n
              ? r && "get" in r && void 0 !== (a = r.get(e, !1, i))
                ? a
                : l[t]
              : ("string" === (s = typeof n) &&
                  (a = p.exec(n)) &&
                  a[1] &&
                  ((n = oe(e, t, a)), (s = "number")),
                void (
                  null != n &&
                  n == n &&
                  ("number" === s &&
                    (n += (a && a[3]) || (T.cssNumber[o] ? "" : "px")),
                  m.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  (r && "set" in r && void 0 === (n = r.set(e, n, i))) ||
                    (l[t] = n))
                ))
          );
      },
      css: function (e, t, n, i) {
        var a,
          s = T.camelCase(t);
        return (
          (t = T.cssProps[s] || (T.cssProps[s] = Ye(s) || s)),
          "normal" ===
            (a =
              void 0 ===
              (a =
                (s = T.cssHooks[t] || T.cssHooks[s]) && "get" in s
                  ? s.get(e, !0, n)
                  : a)
                ? $(e, t, i)
                : a) &&
            t in We &&
            (a = We[t]),
          "" === n || n
            ? ((s = parseFloat(a)), !0 === n || isFinite(s) ? s || 0 : a)
            : a
        );
      },
    }),
      T.each(["height", "width"], function (e, a) {
        T.cssHooks[a] = {
          get: function (e, t, n) {
            return t
              ? Re.test(T.css(e, "display")) && 0 === e.offsetWidth
                ? _e(e, Ge, function () {
                    return Je(e, a, n);
                  })
                : Je(e, a, n)
              : void 0;
          },
          set: function (e, t, n) {
            var i = n && Ne(e),
              n =
                n &&
                Ke(e, a, n, "border-box" === T.css(e, "boxSizing", !1, i), i);
            return (
              n &&
                (i = p.exec(t)) &&
                "px" !== (i[3] || "px") &&
                ((e.style[a] = t), (t = T.css(e, a))),
              Ue(0, t, n)
            );
          },
        };
      }),
      (T.cssHooks.marginLeft = Be(m.reliableMarginLeft, function (e, t) {
        return t
          ? (parseFloat($(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                _e(
                  e,
                  {
                    marginLeft: 0,
                  },
                  function () {
                    return e.getBoundingClientRect().left;
                  }
                )) + "px"
          : void 0;
      })),
      (T.cssHooks.marginRight = Be(m.reliableMarginRight, function (e, t) {
        return t
          ? _e(
              e,
              {
                display: "inline-block",
              },
              $,
              [e, "marginRight"]
            )
          : void 0;
      })),
      T.each(
        {
          margin: "",
          padding: "",
          border: "Width",
        },
        function (a, s) {
          (T.cssHooks[a + s] = {
            expand: function (e) {
              for (
                var t = 0,
                  n = {},
                  i = "string" == typeof e ? e.split(" ") : [e];
                t < 4;
                t++
              )
                n[a + o[t] + s] = i[t] || i[t - 2] || i[0];
              return n;
            },
          }),
            He.test(a) || (T.cssHooks[a + s].set = Ue);
        }
      ),
      T.fn.extend({
        css: function (e, t) {
          return u(
            this,
            function (e, t, n) {
              var i,
                a,
                s = {},
                r = 0;
              if (T.isArray(t)) {
                for (i = Ne(e), a = t.length; r < a; r++)
                  s[t[r]] = T.css(e, t[r], !1, i);
                return s;
              }
              return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
        show: function () {
          return Qe(this, !0);
        },
        hide: function () {
          return Qe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                y(this) ? T(this).show() : T(this).hide();
              });
        },
      }),
      (((T.Tween = k).prototype = {
        constructor: k,
        init: function (e, t, n, i, a, s) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = a || T.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = s || (T.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = k.propHooks[this.prop];
          return (e && e.get ? e : k.propHooks._default).get(this);
        },
        run: function (e) {
          var t,
            n = k.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  T.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : k.propHooks._default).set(this),
            this
          );
        },
      }).init.prototype = k.prototype),
      ((k.propHooks = {
        _default: {
          get: function (e) {
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (e = T.css(e.elem, e.prop, "")) && "auto" !== e
              ? e
              : 0;
          },
          set: function (e) {
            T.fx.step[e.prop]
              ? T.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (null == e.elem.style[T.cssProps[e.prop]] &&
                  !T.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : T.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }).scrollTop = k.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (T.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (T.fx = k.prototype.init),
      (T.fx.step = {});
    var I,
      Ze,
      D,
      et = /^(?:toggle|show|hide)$/,
      tt = /queueHooks$/;
    function nt() {
      return (
        x.setTimeout(function () {
          I = void 0;
        }),
        (I = T.now())
      );
    }
    function it(e, t) {
      var n,
        i = 0,
        a = {
          height: e,
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
        a["margin" + (n = o[i])] = a["padding" + n] = e;
      return t && (a.opacity = a.width = e), a;
    }
    function at(e, t, n) {
      for (
        var i,
          a = (L.tweeners[t] || []).concat(L.tweeners["*"]),
          s = 0,
          r = a.length;
        s < r;
        s++
      )
        if ((i = a[s].call(n, t, e))) return i;
    }
    function L(a, e, t) {
      var n,
        s,
        i,
        r,
        o,
        l,
        d,
        c = 0,
        u = L.prefilters.length,
        p = T.Deferred().always(function () {
          delete h.elem;
        }),
        h = function () {
          if (s) return !1;
          for (
            var e = I || nt(),
              e = Math.max(0, f.startTime + f.duration - e),
              t = 1 - (e / f.duration || 0),
              n = 0,
              i = f.tweens.length;
            n < i;
            n++
          )
            f.tweens[n].run(t);
          return (
            p.notifyWith(a, [f, t, e]),
            t < 1 && i ? e : (p.resolveWith(a, [f]), !1)
          );
        },
        f = p.promise({
          elem: a,
          props: T.extend({}, e),
          opts: T.extend(
            !0,
            {
              specialEasing: {},
              easing: T.easing._default,
            },
            t
          ),
          originalProperties: e,
          originalOptions: t,
          startTime: I || nt(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            t = T.Tween(
              a,
              f.opts,
              e,
              t,
              f.opts.specialEasing[e] || f.opts.easing
            );
            return f.tweens.push(t), t;
          },
          stop: function (e) {
            var t = 0,
              n = e ? f.tweens.length : 0;
            if (s) return this;
            for (s = !0; t < n; t++) f.tweens[t].run(1);
            return (
              e
                ? (p.notifyWith(a, [f, 1, 0]), p.resolveWith(a, [f, e]))
                : p.rejectWith(a, [f, e]),
              this
            );
          },
        }),
        m = f.props,
        g = m,
        v = f.opts.specialEasing;
      for (i in g)
        if (
          ((r = T.camelCase(i)),
          (o = v[r]),
          (l = g[i]),
          T.isArray(l) && ((o = l[1]), (l = g[i] = l[0])),
          i !== r && ((g[r] = l), delete g[i]),
          (d = T.cssHooks[r]),
          d && "expand" in d)
        )
          for (i in ((l = d.expand(l)), delete g[r], l))
            i in g || ((g[i] = l[i]), (v[i] = o));
        else v[r] = o;
      for (; c < u; c++)
        if ((n = L.prefilters[c].call(f, a, m, f.opts)))
          return (
            T.isFunction(n.stop) &&
              (T._queueHooks(f.elem, f.opts.queue).stop = T.proxy(n.stop, n)),
            n
          );
      return (
        T.map(m, at, f),
        T.isFunction(f.opts.start) && f.opts.start.call(a, f),
        T.fx.timer(
          T.extend(h, {
            elem: a,
            anim: f,
            queue: f.opts.queue,
          })
        ),
        f
          .progress(f.opts.progress)
          .done(f.opts.done, f.opts.complete)
          .fail(f.opts.fail)
          .always(f.opts.always)
      );
    }
    (T.Animation = T.extend(L, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return oe(n.elem, e, p.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        for (
          var n,
            i = 0,
            a = (e = T.isFunction(e) ? ((t = e), ["*"]) : e.match(E)).length;
          i < a;
          i++
        )
          (n = e[i]),
            (L.tweeners[n] = L.tweeners[n] || []),
            L.tweeners[n].unshift(t);
      },
      prefilters: [
        function (t, e, n) {
          var i,
            a,
            s,
            r,
            o,
            l,
            d,
            c = this,
            u = {},
            p = t.style,
            h = t.nodeType && y(t),
            f = v.get(t, "fxshow");
          for (i in (n.queue ||
            (null == (o = T._queueHooks(t, "fx")).unqueued &&
              ((o.unqueued = 0),
              (l = o.empty.fire),
              (o.empty.fire = function () {
                o.unqueued || l();
              })),
            o.unqueued++,
            c.always(function () {
              c.always(function () {
                o.unqueued--, T.queue(t, "fx").length || o.empty.fire();
              });
            })),
          1 === t.nodeType &&
            ("height" in e || "width" in e) &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            "inline" ===
              ("none" === (d = T.css(t, "display"))
                ? v.get(t, "olddisplay") || Ae(t.nodeName)
                : d) &&
              "none" === T.css(t, "float") &&
              (p.display = "inline-block")),
          n.overflow &&
            ((p.overflow = "hidden"),
            c.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          e))
            if (((a = e[i]), et.exec(a))) {
              if (
                (delete e[i],
                (s = s || "toggle" === a),
                a === (h ? "hide" : "show"))
              ) {
                if ("show" !== a || !f || void 0 === f[i]) continue;
                h = !0;
              }
              u[i] = (f && f[i]) || T.style(t, i);
            } else d = void 0;
          if (T.isEmptyObject(u))
            "inline" === ("none" === d ? Ae(t.nodeName) : d) && (p.display = d);
          else
            for (i in (f
              ? "hidden" in f && (h = f.hidden)
              : (f = v.access(t, "fxshow", {})),
            s && (f.hidden = !h),
            h
              ? T(t).show()
              : c.done(function () {
                  T(t).hide();
                }),
            c.done(function () {
              for (var e in (v.remove(t, "fxshow"), u)) T.style(t, e, u[e]);
            }),
            u))
              (r = at(h ? f[i] : 0, i, c)),
                i in f ||
                  ((f[i] = r.start),
                  h &&
                    ((r.end = r.start),
                    (r.start = "width" === i || "height" === i ? 1 : 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? L.prefilters.unshift(e) : L.prefilters.push(e);
      },
    })),
      (T.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? T.extend({}, e)
            : {
                complete: n || (!n && t) || (T.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !T.isFunction(t) && t),
              };
        return (
          (i.duration = T.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in T.fx.speeds
            ? T.fx.speeds[i.duration]
            : T.fx.speeds._default),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            T.isFunction(i.old) && i.old.call(this),
              i.queue && T.dequeue(this, i.queue);
          }),
          i
        );
      }),
      T.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(y).css("opacity", 0).show().end().animate(
            {
              opacity: t,
            },
            e,
            n,
            i
          );
        },
        animate: function (t, e, n, i) {
          function a() {
            var e = L(this, T.extend({}, t), r);
            (s || v.get(this, "finish")) && e.stop(!0);
          }
          var s = T.isEmptyObject(t),
            r = T.speed(e, n, i);
          return (
            (a.finish = a),
            s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
          );
        },
        stop: function (a, e, s) {
          function r(e) {
            var t = e.stop;
            delete e.stop, t(s);
          }
          return (
            "string" != typeof a && ((s = e), (e = a), (a = void 0)),
            e && !1 !== a && this.queue(a || "fx", []),
            this.each(function () {
              var e = !0,
                t = null != a && a + "queueHooks",
                n = T.timers,
                i = v.get(this);
              if (t) i[t] && i[t].stop && r(i[t]);
              else for (t in i) i[t] && i[t].stop && tt.test(t) && r(i[t]);
              for (t = n.length; t--; )
                n[t].elem !== this ||
                  (null != a && n[t].queue !== a) ||
                  (n[t].anim.stop(s), (e = !1), n.splice(t, 1));
              (!e && s) || T.dequeue(this, a);
            })
          );
        },
        finish: function (r) {
          return (
            !1 !== r && (r = r || "fx"),
            this.each(function () {
              var e,
                t = v.get(this),
                n = t[r + "queue"],
                i = t[r + "queueHooks"],
                a = T.timers,
                s = n ? n.length : 0;
              for (
                t.finish = !0,
                  T.queue(this, r, []),
                  i && i.stop && i.stop.call(this, !0),
                  e = a.length;
                e--;

              )
                a[e].elem === this &&
                  a[e].queue === r &&
                  (a[e].anim.stop(!0), a.splice(e, 1));
              for (e = 0; e < s; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish;
            })
          );
        },
      }),
      T.each(["toggle", "show", "hide"], function (e, i) {
        var a = T.fn[i];
        T.fn[i] = function (e, t, n) {
          return null == e || "boolean" == typeof e
            ? a.apply(this, arguments)
            : this.animate(it(i, !0), e, t, n);
        };
      }),
      T.each(
        {
          slideDown: it("show"),
          slideUp: it("hide"),
          slideToggle: it("toggle"),
          fadeIn: {
            opacity: "show",
          },
          fadeOut: {
            opacity: "hide",
          },
          fadeToggle: {
            opacity: "toggle",
          },
        },
        function (e, i) {
          T.fn[e] = function (e, t, n) {
            return this.animate(i, e, t, n);
          };
        }
      ),
      (T.timers = []),
      (T.fx.tick = function () {
        var e,
          t = 0,
          n = T.timers;
        for (I = T.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(), (I = void 0);
      }),
      (T.fx.timer = function (e) {
        T.timers.push(e), e() ? T.fx.start() : T.timers.pop();
      }),
      (T.fx.interval = 13),
      (T.fx.start = function () {
        Ze = Ze || x.setInterval(T.fx.tick, T.fx.interval);
      }),
      (T.fx.stop = function () {
        x.clearInterval(Ze), (Ze = null);
      }),
      (T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400,
      }),
      (T.fn.delay = function (i, e) {
        return (
          (i = (T.fx && T.fx.speeds[i]) || i),
          this.queue((e = e || "fx"), function (e, t) {
            var n = x.setTimeout(e, i);
            t.stop = function () {
              x.clearTimeout(n);
            };
          })
        );
      }),
      (D = C.createElement("input")),
      (t = C.createElement("select")),
      (e = t.appendChild(C.createElement("option"))),
      (D.type = "checkbox"),
      (m.checkOn = "" !== D.value),
      (m.optSelected = e.selected),
      (t.disabled = !0),
      (m.optDisabled = !e.disabled),
      ((D = C.createElement("input")).value = "t"),
      (D.type = "radio"),
      (m.radioValue = "t" === D.value);
    var st,
      P = T.expr.attrHandle,
      rt =
        (T.fn.extend({
          attr: function (e, t) {
            return u(this, T.attr, e, t, 1 < arguments.length);
          },
          removeAttr: function (e) {
            return this.each(function () {
              T.removeAttr(this, e);
            });
          },
        }),
        T.extend({
          attr: function (e, t, n) {
            var i,
              a,
              s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === s && T.isXMLDoc(e)) ||
                    ((t = t.toLowerCase()),
                    (a =
                      T.attrHooks[t] ||
                      (T.expr.match.bool.test(t) ? st : void 0))),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : a && "set" in a && void 0 !== (i = a.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : a && "get" in a && null !== (i = a.get(e, t))
                    ? i
                    : null == (i = T.find.attr(e, t))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                var n;
                if (!m.radioValue && "radio" === t && T.nodeName(e, "input"))
                  return (
                    (n = e.value),
                    e.setAttribute("type", t),
                    n && (e.value = n),
                    t
                  );
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i,
              a = 0,
              s = t && t.match(E);
            if (s && 1 === e.nodeType)
              for (; (n = s[a++]); )
                (i = T.propFix[n] || n),
                  T.expr.match.bool.test(n) && (e[i] = !1),
                  e.removeAttribute(n);
          },
        }),
        (st = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var s = P[t] || T.find.attr;
          P[t] = function (e, t, n) {
            var i, a;
            return (
              n ||
                ((a = P[t]),
                (P[t] = i),
                (i = null != s(e, t, n) ? t.toLowerCase() : null),
                (P[t] = a)),
              i
            );
          };
        }),
        /^(?:input|select|textarea|button)$/i),
      ot = /^(?:a|area)$/i,
      lt =
        (T.fn.extend({
          prop: function (e, t) {
            return u(this, T.prop, e, t, 1 < arguments.length);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[T.propFix[e] || e];
            });
          },
        }),
        T.extend({
          prop: function (e, t, n) {
            var i,
              a,
              s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return (
                (1 === s && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (a = T.propHooks[t])),
                void 0 !== n
                  ? a && "set" in a && void 0 !== (i = a.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : a && "get" in a && null !== (i = a.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : rt.test(e.nodeName) || (ot.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: {
            for: "htmlFor",
            class: "className",
          },
        }),
        m.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              e = e.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (e) {
              e = e.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        /[\t\r\n\f]/g);
    function A(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    T.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          a,
          s,
          r,
          o = 0;
        if (T.isFunction(t))
          return this.each(function (e) {
            T(this).addClass(t.call(this, e, A(this)));
          });
        if ("string" == typeof t && t)
          for (e = t.match(E) || []; (n = this[o++]); )
            if (
              ((r = A(n)),
              (i = 1 === n.nodeType && (" " + r + " ").replace(lt, " ")))
            ) {
              for (s = 0; (a = e[s++]); )
                i.indexOf(" " + a + " ") < 0 && (i += a + " ");
              r !== (r = T.trim(i)) && n.setAttribute("class", r);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          a,
          s,
          r,
          o = 0;
        if (T.isFunction(t))
          return this.each(function (e) {
            T(this).removeClass(t.call(this, e, A(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(E) || []; (n = this[o++]); )
            if (
              ((r = A(n)),
              (i = 1 === n.nodeType && (" " + r + " ").replace(lt, " ")))
            ) {
              for (s = 0; (a = e[s++]); )
                for (; -1 < i.indexOf(" " + a + " "); )
                  i = i.replace(" " + a + " ", " ");
              r !== (r = T.trim(i)) && n.setAttribute("class", r);
            }
        return this;
      },
      toggleClass: function (a, t) {
        var s = typeof a;
        return "boolean" == typeof t && "string" == s
          ? t
            ? this.addClass(a)
            : this.removeClass(a)
          : T.isFunction(a)
          ? this.each(function (e) {
              T(this).toggleClass(a.call(this, e, A(this), t), t);
            })
          : this.each(function () {
              var e, t, n, i;
              if ("string" == s)
                for (t = 0, n = T(this), i = a.match(E) || []; (e = i[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== a && "boolean" != s) ||
                  ((e = A(this)) && v.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== a && v.get(this, "__className__")) || ""
                    ));
            });
      },
      hasClass: function (e) {
        for (var t, n = 0, i = " " + e + " "; (t = this[n++]); )
          if (
            1 === t.nodeType &&
            -1 < (" " + A(t) + " ").replace(lt, " ").indexOf(i)
          )
            return !0;
        return !1;
      },
    });
    var dt = /\r/g,
      ct = /[\x20\t\r\n\f]+/g,
      ut =
        (T.fn.extend({
          val: function (t) {
            var n,
              e,
              i,
              a = this[0];
            return arguments.length
              ? ((i = T.isFunction(t)),
                this.each(function (e) {
                  1 === this.nodeType &&
                    (null == (e = i ? t.call(this, e, T(this).val()) : t)
                      ? (e = "")
                      : "number" == typeof e
                      ? (e += "")
                      : T.isArray(e) &&
                        (e = T.map(e, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((n =
                      T.valHooks[this.type] ||
                      T.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in n &&
                      void 0 !== n.set(this, e, "value")) ||
                      (this.value = e));
                }))
              : a
              ? (n =
                  T.valHooks[a.type] || T.valHooks[a.nodeName.toLowerCase()]) &&
                "get" in n &&
                void 0 !== (e = n.get(a, "value"))
                ? e
                : "string" == typeof (e = a.value)
                ? e.replace(dt, "")
                : null == e
                ? ""
                : e
              : void 0;
          },
        }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : T.trim(T.text(e)).replace(ct, " ");
              },
            },
            select: {
              get: function (e) {
                for (
                  var t,
                    n = e.options,
                    i = e.selectedIndex,
                    a = "select-one" === e.type || i < 0,
                    s = a ? null : [],
                    r = a ? i + 1 : n.length,
                    o = i < 0 ? r : a ? i : 0;
                  o < r;
                  o++
                )
                  if (
                    ((t = n[o]).selected || o === i) &&
                    (m.optDisabled
                      ? !t.disabled
                      : null === t.getAttribute("disabled")) &&
                    (!t.parentNode.disabled ||
                      !T.nodeName(t.parentNode, "optgroup"))
                  ) {
                    if (((t = T(t).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var n, i, a = e.options, s = T.makeArray(t), r = a.length;
                  r--;

                )
                  ((i = a[r]).selected =
                    -1 < T.inArray(T.valHooks.option.get(i), s)) && (n = !0);
                return n || (e.selectedIndex = -1), s;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              return T.isArray(t)
                ? (e.checked = -1 < T.inArray(T(e).val(), t))
                : void 0;
            },
          }),
            m.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        /^(?:focusinfocus|focusoutblur)$/),
      N =
        (T.extend(T.event, {
          trigger: function (e, t, n, i) {
            var a,
              s,
              r,
              o,
              l,
              d,
              c = [n || C],
              u = f.call(e, "type") ? e.type : e,
              p = f.call(e, "namespace") ? e.namespace.split(".") : [],
              h = (s = n = n || C);
            if (
              3 !== n.nodeType &&
              8 !== n.nodeType &&
              !ut.test(u + T.event.triggered) &&
              (-1 < u.indexOf(".") &&
                ((u = (p = u.split(".")).shift()), p.sort()),
              (o = u.indexOf(":") < 0 && "on" + u),
              ((e = e[T.expando]
                ? e
                : new T.Event(u, "object" == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = p.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = n),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (d = T.event.special[u] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(n, t))
            ) {
              if (!i && !d.noBubble && !T.isWindow(n)) {
                for (
                  r = d.delegateType || u, ut.test(r + u) || (h = h.parentNode);
                  h;
                  h = h.parentNode
                )
                  c.push(h), (s = h);
                s === (n.ownerDocument || C) &&
                  c.push(s.defaultView || s.parentWindow || x);
              }
              for (a = 0; (h = c[a++]) && !e.isPropagationStopped(); )
                (e.type = 1 < a ? r : d.bindType || u),
                  (l =
                    (v.get(h, "events") || {})[e.type] && v.get(h, "handle")) &&
                    l.apply(h, t),
                  (l = o && h[o]) &&
                    l.apply &&
                    g(h) &&
                    ((e.result = l.apply(h, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = u),
                i ||
                  e.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(c.pop(), t)) ||
                  !g(n) ||
                  (o &&
                    T.isFunction(n[u]) &&
                    !T.isWindow(n) &&
                    ((s = n[o]) && (n[o] = null),
                    n[(T.event.triggered = u)](),
                    (T.event.triggered = void 0),
                    s && (n[o] = s))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            n = T.extend(new T.Event(), n, {
              type: e,
              isSimulated: !0,
            });
            T.event.trigger(n, null, t);
          },
        }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            return n ? T.event.trigger(e, t, n, !0) : void 0;
          },
        }),
        T.each(
          "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
            " "
          ),
          function (e, n) {
            T.fn[n] = function (e, t) {
              return 0 < arguments.length
                ? this.on(n, null, e, t)
                : this.trigger(n);
            };
          }
        ),
        T.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        (m.focusin = "onfocusin" in x),
        m.focusin ||
          T.each(
            {
              focus: "focusin",
              blur: "focusout",
            },
            function (n, i) {
              function a(e) {
                T.event.simulate(i, e.target, T.event.fix(e));
              }
              T.event.special[i] = {
                setup: function () {
                  var e = this.ownerDocument || this,
                    t = v.access(e, i);
                  t || e.addEventListener(n, a, !0),
                    v.access(e, i, (t || 0) + 1);
                },
                teardown: function () {
                  var e = this.ownerDocument || this,
                    t = v.access(e, i) - 1;
                  t
                    ? v.access(e, i, t)
                    : (e.removeEventListener(n, a, !0), v.remove(e, i));
                },
              };
            }
          ),
        x.location),
      pt = T.now(),
      ht = /\?/,
      ft =
        ((T.parseJSON = function (e) {
          return JSON.parse(e + "");
        }),
        (T.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = new x.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {
            t = void 0;
          }
          return (
            (t && !t.getElementsByTagName("parsererror").length) ||
              T.error("Invalid XML: " + e),
            t
          );
        }),
        /#.*$/),
      mt = /([?&])_=[^&]*/,
      gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      vt = /^(?:GET|HEAD)$/,
      yt = /^\/\//,
      bt = {},
      wt = {},
      xt = "*/".concat("*"),
      Ct = C.createElement("a");
    function Tt(s) {
      return function (e, t) {
        "string" != typeof e && ((t = e), (e = "*"));
        var n,
          i = 0,
          a = e.toLowerCase().match(E) || [];
        if (T.isFunction(t))
          for (; (n = a[i++]); )
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (s[n] = s[n] || []).unshift(t))
              : (s[n] = s[n] || []).push(t);
      };
    }
    function Et(t, i, a, s) {
      var r = {},
        o = t === wt;
      function l(e) {
        var n;
        return (
          (r[e] = !0),
          T.each(t[e] || [], function (e, t) {
            t = t(i, a, s);
            return "string" != typeof t || o || r[t]
              ? o
                ? !(n = t)
                : void 0
              : (i.dataTypes.unshift(t), l(t), !1);
          }),
          n
        );
      }
      return l(i.dataTypes[0]) || (!r["*"] && l("*"));
    }
    function St(e, t) {
      var n,
        i,
        a = T.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((a[n] ? e : (i = i || {}))[n] = t[n]);
      return i && T.extend(!0, e, i), e;
    }
    (Ct.href = N.href),
      T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: N.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              N.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": xt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/,
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": T.parseJSON,
            "text xml": T.parseXML,
          },
          flatOptions: {
            url: !0,
            context: !0,
          },
        },
        ajaxSetup: function (e, t) {
          return t ? St(St(e, T.ajaxSettings), t) : St(T.ajaxSettings, e);
        },
        ajaxPrefilter: Tt(bt),
        ajaxTransport: Tt(wt),
        ajax: function (e, t) {
          "object" == typeof e && ((t = e), (e = void 0));
          var l,
            d,
            c,
            n,
            u,
            p,
            i,
            h = T.ajaxSetup({}, (t = t || {})),
            f = h.context || h,
            m = h.context && (f.nodeType || f.jquery) ? T(f) : T.event,
            g = T.Deferred(),
            v = T.Callbacks("once memory"),
            y = h.statusCode || {},
            a = {},
            s = {},
            b = 0,
            r = "canceled",
            w = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === b) {
                  if (!n)
                    for (n = {}; (t = gt.exec(c)); )
                      n[t[1].toLowerCase()] = t[2];
                  t = n[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === b ? c : null;
              },
              setRequestHeader: function (e, t) {
                var n = e.toLowerCase();
                return b || ((e = s[n] = s[n] || e), (a[e] = t)), this;
              },
              overrideMimeType: function (e) {
                return b || (h.mimeType = e), this;
              },
              statusCode: function (e) {
                if (e)
                  if (b < 2) for (var t in e) y[t] = [y[t], e[t]];
                  else w.always(e[w.status]);
                return this;
              },
              abort: function (e) {
                e = e || r;
                return l && l.abort(e), o(0, e), this;
              },
            };
          if (
            ((g.promise(w).complete = v.add),
            (w.success = w.done),
            (w.error = w.fail),
            (h.url = ((e || h.url || N.href) + "")
              .replace(ft, "")
              .replace(yt, N.protocol + "//")),
            (h.type = t.method || t.type || h.method || h.type),
            (h.dataTypes = T.trim(h.dataType || "*")
              .toLowerCase()
              .match(E) || [""]),
            null == h.crossDomain)
          ) {
            e = C.createElement("a");
            try {
              (e.href = h.url),
                (e.href = e.href),
                (h.crossDomain =
                  Ct.protocol + "//" + Ct.host != e.protocol + "//" + e.host);
            } catch (e) {
              h.crossDomain = !0;
            }
          }
          if (
            (h.data &&
              h.processData &&
              "string" != typeof h.data &&
              (h.data = T.param(h.data, h.traditional)),
            Et(bt, h, t, w),
            2 === b)
          )
            return w;
          for (i in ((p = T.event && h.global) &&
            0 == T.active++ &&
            T.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !vt.test(h.type)),
          (d = h.url),
          h.hasContent ||
            (h.data &&
              ((d = h.url += (ht.test(d) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              (h.url = mt.test(d)
                ? d.replace(mt, "$1_=" + pt++)
                : d + (ht.test(d) ? "&" : "?") + "_=" + pt++)),
          h.ifModified &&
            (T.lastModified[d] &&
              w.setRequestHeader("If-Modified-Since", T.lastModified[d]),
            T.etag[d] && w.setRequestHeader("If-None-Match", T.etag[d])),
          ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
            w.setRequestHeader("Content-Type", h.contentType),
          w.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + xt + "; q=0.01" : "")
              : h.accepts["*"]
          ),
          h.headers))
            w.setRequestHeader(i, h.headers[i]);
          if (h.beforeSend && (!1 === h.beforeSend.call(f, w, h) || 2 === b))
            return w.abort();
          for (i in ((r = "abort"),
          {
            success: 1,
            error: 1,
            complete: 1,
          }))
            w[i](h[i]);
          if ((l = Et(wt, h, t, w))) {
            if (
              ((w.readyState = 1), p && m.trigger("ajaxSend", [w, h]), 2 === b)
            )
              return w;
            h.async &&
              0 < h.timeout &&
              (u = x.setTimeout(function () {
                w.abort("timeout");
              }, h.timeout));
            try {
              (b = 1), l.send(a, o);
            } catch (e) {
              if (!(b < 2)) throw e;
              o(-1, e);
            }
          } else o(-1, "No Transport");
          function o(e, t, n, i) {
            var a,
              s,
              r,
              o = t;
            2 !== b &&
              ((b = 2),
              u && x.clearTimeout(u),
              (l = void 0),
              (c = i || ""),
              (w.readyState = 0 < e ? 4 : 0),
              (i = (200 <= e && e < 300) || 304 === e),
              n &&
                (r = (function (e, t, n) {
                  for (
                    var i, a, s, r, o = e.contents, l = e.dataTypes;
                    "*" === l[0];

                  )
                    l.shift(),
                      void 0 === i &&
                        (i = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (i)
                    for (a in o)
                      if (o[a] && o[a].test(i)) {
                        l.unshift(a);
                        break;
                      }
                  if (l[0] in n) s = l[0];
                  else {
                    for (a in n) {
                      if (!l[0] || e.converters[a + " " + l[0]]) {
                        s = a;
                        break;
                      }
                      r = r || a;
                    }
                    s = s || r;
                  }
                  return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0;
                })(h, w, n)),
              (r = (function (e, t, n, i) {
                var a,
                  s,
                  r,
                  o,
                  l,
                  d = {},
                  c = e.dataTypes.slice();
                if (c[1])
                  for (r in e.converters) d[r.toLowerCase()] = e.converters[r];
                for (s = c.shift(); s; )
                  if (
                    (e.responseFields[s] && (n[e.responseFields[s]] = t),
                    !l &&
                      i &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (l = s),
                    (s = c.shift()))
                  )
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                      if (!(r = d[l + " " + s] || d["* " + s]))
                        for (a in d)
                          if (
                            ((o = a.split(" ")),
                            o[1] === s &&
                              (r = d[l + " " + o[0]] || d["* " + o[0]]))
                          ) {
                            !0 === r
                              ? (r = d[a])
                              : !0 !== d[a] && ((s = o[0]), c.unshift(o[1]));
                            break;
                          }
                      if (!0 !== r)
                        if (r && e.throws) t = r(t);
                        else
                          try {
                            t = r(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: r
                                ? e
                                : "No conversion from " + l + " to " + s,
                            };
                          }
                    }
                return {
                  state: "success",
                  data: t,
                };
              })(h, r, w, i)),
              i
                ? (h.ifModified &&
                    ((n = w.getResponseHeader("Last-Modified")) &&
                      (T.lastModified[d] = n),
                    (n = w.getResponseHeader("etag")) && (T.etag[d] = n)),
                  204 === e || "HEAD" === h.type
                    ? (o = "nocontent")
                    : 304 === e
                    ? (o = "notmodified")
                    : ((o = r.state), (a = r.data), (i = !(s = r.error))))
                : ((s = o), (!e && o) || ((o = "error"), e < 0 && (e = 0))),
              (w.status = e),
              (w.statusText = (t || o) + ""),
              i ? g.resolveWith(f, [a, o, w]) : g.rejectWith(f, [w, o, s]),
              w.statusCode(y),
              (y = void 0),
              p &&
                m.trigger(i ? "ajaxSuccess" : "ajaxError", [w, h, i ? a : s]),
              v.fireWith(f, [w, o]),
              p &&
                (m.trigger("ajaxComplete", [w, h]),
                --T.active || T.event.trigger("ajaxStop")));
          }
          return w;
        },
        getJSON: function (e, t, n) {
          return T.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return T.get(e, void 0, t, "script");
        },
      }),
      T.each(["get", "post"], function (e, a) {
        T[a] = function (e, t, n, i) {
          return (
            T.isFunction(t) && ((i = i || n), (n = t), (t = void 0)),
            T.ajax(
              T.extend(
                {
                  url: e,
                  type: a,
                  dataType: i,
                  data: t,
                  success: n,
                },
                T.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      (T._evalUrl = function (e) {
        return T.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      T.fn.extend({
        wrapAll: function (t) {
          var e;
          return T.isFunction(t)
            ? this.each(function (e) {
                T(this).wrapAll(t.call(this, e));
              })
            : (this[0] &&
                ((e = T(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (n) {
          return T.isFunction(n)
            ? this.each(function (e) {
                T(this).wrapInner(n.call(this, e));
              })
            : this.each(function () {
                var e = T(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              });
        },
        wrap: function (t) {
          var n = T.isFunction(t);
          return this.each(function (e) {
            T(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              T.nodeName(this, "body") || T(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (T.expr.filters.hidden = function (e) {
        return !T.expr.filters.visible(e);
      }),
      (T.expr.filters.visible = function (e) {
        return (
          0 < e.offsetWidth ||
          0 < e.offsetHeight ||
          0 < e.getClientRects().length
        );
      });
    var Mt = /%20/g,
      $t = /\[\]$/,
      kt = /\r?\n/g,
      It = /^(?:submit|button|image|reset|file)$/i,
      Dt = /^(?:input|select|textarea|keygen)/i;
    (T.param = function (e, t) {
      function n(e, t) {
        (t = T.isFunction(t) ? t() : null == t ? "" : t),
          (a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      }
      var i,
        a = [];
      if (
        (void 0 === t && (t = T.ajaxSettings && T.ajaxSettings.traditional),
        T.isArray(e) || (e.jquery && !T.isPlainObject(e)))
      )
        T.each(e, function () {
          n(this.name, this.value);
        });
      else
        for (i in e)
          !(function n(i, e, a, s) {
            if (T.isArray(e))
              T.each(e, function (e, t) {
                a || $t.test(i)
                  ? s(i, t)
                  : n(
                      i +
                        "[" +
                        ("object" == typeof t && null != t ? e : "") +
                        "]",
                      t,
                      a,
                      s
                    );
              });
            else if (a || "object" !== T.type(e)) s(i, e);
            else for (var t in e) n(i + "[" + t + "]", e[t], a, s);
          })(i, e[i], t, n);
      return a.join("&").replace(Mt, "+");
    }),
      T.fn.extend({
        serialize: function () {
          return T.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = T.prop(this, "elements");
            return e ? T.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !T(this).is(":disabled") &&
                Dt.test(this.nodeName) &&
                !It.test(e) &&
                (this.checked || !le.test(e))
              );
            })
            .map(function (e, t) {
              var n = T(this).val();
              return null == n
                ? null
                : T.isArray(n)
                ? T.map(n, function (e) {
                    return {
                      name: t.name,
                      value: e.replace(kt, "\r\n"),
                    };
                  })
                : {
                    name: t.name,
                    value: n.replace(kt, "\r\n"),
                  };
            })
            .get();
        },
      }),
      (T.ajaxSettings.xhr = function () {
        try {
          return new x.XMLHttpRequest();
        } catch (e) {}
      });
    var Lt = {
        0: 200,
        1223: 204,
      },
      _ = T.ajaxSettings.xhr(),
      Pt =
        ((m.cors = !!_ && "withCredentials" in _),
        (m.ajax = _ = !!_),
        T.ajaxTransport(function (a) {
          var s, r;
          return m.cors || (_ && !a.crossDomain)
            ? {
                send: function (e, t) {
                  var n,
                    i = a.xhr();
                  if (
                    (i.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                  )
                    for (n in a.xhrFields) i[n] = a.xhrFields[n];
                  for (n in (a.mimeType &&
                    i.overrideMimeType &&
                    i.overrideMimeType(a.mimeType),
                  a.crossDomain ||
                    e["X-Requested-With"] ||
                    (e["X-Requested-With"] = "XMLHttpRequest"),
                  e))
                    i.setRequestHeader(n, e[n]);
                  (s = function (e) {
                    return function () {
                      s &&
                        ((s =
                          r =
                          i.onload =
                          i.onerror =
                          i.onabort =
                          i.onreadystatechange =
                            null),
                        "abort" === e
                          ? i.abort()
                          : "error" === e
                          ? "number" != typeof i.status
                            ? t(0, "error")
                            : t(i.status, i.statusText)
                          : t(
                              Lt[i.status] || i.status,
                              i.statusText,
                              "text" !== (i.responseType || "text") ||
                                "string" != typeof i.responseText
                                ? {
                                    binary: i.response,
                                  }
                                : {
                                    text: i.responseText,
                                  },
                              i.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (i.onload = s()),
                    (r = i.onerror = s("error")),
                    void 0 !== i.onabort
                      ? (i.onabort = r)
                      : (i.onreadystatechange = function () {
                          4 === i.readyState &&
                            x.setTimeout(function () {
                              s && r();
                            });
                        }),
                    (s = s("abort"));
                  try {
                    i.send((a.hasContent && a.data) || null);
                  } catch (e) {
                    if (s) throw e;
                  }
                },
                abort: function () {
                  s && s();
                },
              }
            : void 0;
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: {
            script: /\b(?:java|ecma)script\b/,
          },
          converters: {
            "text script": function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function (n) {
          var i, a;
          if (n.crossDomain)
            return {
              send: function (e, t) {
                (i = T("<script>")
                  .prop({
                    charset: n.scriptCharset,
                    src: n.url,
                  })
                  .on(
                    "load error",
                    (a = function (e) {
                      i.remove(),
                        (a = null),
                        e && t("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  C.head.appendChild(i[0]);
              },
              abort: function () {
                a && a();
              },
            };
        }),
        []),
      At = /(=)\?(?=&|$)|\?\?/,
      Nt =
        (T.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Pt.pop() || T.expando + "_" + pt++;
            return (this[e] = !0), e;
          },
        }),
        T.ajaxPrefilter("json jsonp", function (e, t, n) {
          var i,
            a,
            s,
            r =
              !1 !== e.jsonp &&
              (At.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  At.test(e.data) &&
                  "data");
          return r || "jsonp" === e.dataTypes[0]
            ? ((i = e.jsonpCallback =
                T.isFunction(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
              r
                ? (e[r] = e[r].replace(At, "$1" + i))
                : !1 !== e.jsonp &&
                  (e.url += (ht.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return s || T.error(i + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (a = x[i]),
              (x[i] = function () {
                s = arguments;
              }),
              n.always(function () {
                void 0 === a ? T(x).removeProp(i) : (x[i] = a),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Pt.push(i)),
                  s && T.isFunction(a) && a(s[0]),
                  (s = a = void 0);
              }),
              "script")
            : void 0;
        }),
        (T.parseHTML = function (e, t, n) {
          if (!e || "string" != typeof e) return null;
          "boolean" == typeof t && ((n = t), (t = !1)), (t = t || C);
          var i = Y.exec(e),
            n = !n && [];
          return i
            ? [t.createElement(i[1])]
            : ((i = he([e], t, n)),
              n && n.length && T(n).remove(),
              T.merge([], i.childNodes));
        }),
        T.fn.load);
    function _t(e) {
      return T.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    (T.fn.load = function (e, t, n) {
      if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
      var i,
        a,
        s,
        r = this,
        o = e.indexOf(" ");
      return (
        -1 < o && ((i = T.trim(e.slice(o))), (e = e.slice(0, o))),
        T.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (a = "POST"),
        0 < r.length &&
          T.ajax({
            url: e,
            type: a || "GET",
            dataType: "html",
            data: t,
          })
            .done(function (e) {
              (s = arguments),
                r.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  r.each(function () {
                    n.apply(this, s || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
      T.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          T.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (T.expr.filters.animated = function (t) {
        return T.grep(T.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (T.offset = {
        setOffset: function (e, t, n) {
          var i,
            a,
            s,
            r,
            o = T.css(e, "position"),
            l = T(e),
            d = {};
          "static" === o && (e.style.position = "relative"),
            (s = l.offset()),
            (i = T.css(e, "top")),
            (r = T.css(e, "left")),
            (o =
              ("absolute" === o || "fixed" === o) &&
              -1 < (i + r).indexOf("auto")
                ? ((a = (o = l.position()).top), o.left)
                : ((a = parseFloat(i) || 0), parseFloat(r) || 0)),
            null !=
              (t = T.isFunction(t) ? t.call(e, n, T.extend({}, s)) : t).top &&
              (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + o),
            "using" in t ? t.using.call(e, d) : l.css(d);
        },
      }),
      T.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  T.offset.setOffset(this, t, e);
                });
          var e,
            n = this[0],
            i = {
              top: 0,
              left: 0,
            },
            a = n && n.ownerDocument;
          return a
            ? ((e = a.documentElement),
              T.contains(e, n)
                ? ((i = n.getBoundingClientRect()),
                  (n = _t(a)),
                  {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft,
                  })
                : i)
            : void 0;
        },
        position: function () {
          var e, t, n, i;
          if (this[0])
            return (
              (n = this[0]),
              (i = {
                top: 0,
                left: 0,
              }),
              "fixed" === T.css(n, "position")
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  ((i = T.nodeName(e[0], "html") ? i : e.offset()).top += T.css(
                    e[0],
                    "borderTopWidth",
                    !0
                  )),
                  (i.left += T.css(e[0], "borderLeftWidth", !0))),
              {
                top: t.top - i.top - T.css(n, "marginTop", !0),
                left: t.left - i.left - T.css(n, "marginLeft", !0),
              }
            );
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === T.css(e, "position");

            )
              e = e.offsetParent;
            return e || M;
          });
        },
      }),
      T.each(
        {
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset",
        },
        function (t, a) {
          var s = "pageYOffset" === a;
          T.fn[t] = function (e) {
            return u(
              this,
              function (e, t, n) {
                var i = _t(e);
                return void 0 === n
                  ? i
                    ? i[a]
                    : e[t]
                  : void (i
                      ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset)
                      : (e[t] = n));
              },
              t,
              e,
              arguments.length
            );
          };
        }
      ),
      T.each(["top", "left"], function (e, n) {
        T.cssHooks[n] = Be(m.pixelPosition, function (e, t) {
          return t
            ? ((t = $(e, n)), qe.test(t) ? T(e).position()[n] + "px" : t)
            : void 0;
        });
      }),
      T.each(
        {
          Height: "height",
          Width: "width",
        },
        function (s, r) {
          T.each(
            {
              padding: "inner" + s,
              content: r,
              "": "outer" + s,
            },
            function (i, e) {
              T.fn[e] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                  a = i || (!0 === e || !0 === t ? "margin" : "border");
                return u(
                  this,
                  function (e, t, n) {
                    var i;
                    return T.isWindow(e)
                      ? e.document.documentElement["client" + s]
                      : 9 === e.nodeType
                      ? ((i = e.documentElement),
                        Math.max(
                          e.body["scroll" + s],
                          i["scroll" + s],
                          e.body["offset" + s],
                          i["offset" + s],
                          i["client" + s]
                        ))
                      : void 0 === n
                      ? T.css(e, t, a)
                      : T.style(e, t, n, a);
                  },
                  r,
                  n ? e : void 0,
                  n,
                  null
                );
              };
            }
          );
        }
      ),
      T.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        size: function () {
          return this.length;
        },
      }),
      (T.fn.andSelf = T.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return T;
        });
    var zt = x.jQuery,
      Ot = x.$;
    return (
      (T.noConflict = function (e) {
        return (
          x.$ === T && (x.$ = Ot), e && x.jQuery === T && (x.jQuery = zt), T
        );
      }),
      z || (x.jQuery = x.$ = T),
      T
    );
  };
var getUrlParameter = function (e) {
  for (
    var t,
      n = decodeURIComponent(window.location.search.substring(1)).split("&"),
      i = 0;
    i < n.length;
    i++
  )
    if ((t = n[i].split("="))[0] === e) return void 0 === t[1] || t[1];
};
function getCookie(e) {
  for (
    var t = e + "=", n = document.cookie.split(";"), i = 0;
    i < n.length;
    i++
  ) {
    for (var a = n[i]; " " == a.charAt(0); ) a = a.substring(1);
    if (0 == a.indexOf(t)) return a.substring(t.length, a.length);
  }
  return "";
}
function setCookie(e, t, n) {
  var i = new Date(),
    n =
      (i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
      "expires=" + i.toUTCString());
  document.cookie = e + "=" + t + "; " + n + "; path=/";
}
!(function (d) {
  function c(e, t) {
    var n,
      i = e.find(".digit");
    i.is(":animated") ||
      (e.data("digit") != t &&
        (e.data("digit", t),
        (n = d("<span>", {
          class: "digit",
          css: {
            top: "-2.1em",
            opacity: 0,
          },
          html: t,
        })),
        i
          .before(n)
          .removeClass("static")
          .animate(
            {
              top: "2.5em",
              opacity: 0,
            },
            "fast",
            function () {
              i.remove();
            }
          ),
        n.delay(100).animate(
          {
            top: 0,
            opacity: 1,
          },
          "fast",
          function () {
            n.addClass("static");
          }
        )));
  }
  d.fn.countdown = function (e) {
    var t,
      n,
      i,
      a,
      s,
      r,
      o = d.extend(
        {
          callback: function () {},
          timestamp: 0,
        },
        e
      );
    function l(e, t, n) {
      c(s.eq(e), Math.floor(n / 10) % 10), c(s.eq(t), n % 10);
    }
    return (
      (r = this).addClass("countdownHolder"),
      d.each(["Days", "Hours", "Minutes", "Seconds"], function (e) {
        d('<div style="display:inline-block" class="wrap' + this + '"></div>')
          .html(
            '<span class="countelement count' +
              this +
              '">\t\t\t\t\t<span class="position">\t\t\t\t\t\t<span class="digit static">0</span>\t\t\t\t\t</span>\t\t\t\t\t<span class="position">\t\t\t\t\t\t<span class="digit static">0</span>\t\t\t\t\t</span>\t\t\t\t</span>'
          )
          .appendTo(r),
          "Days" == this &&
            r.find("div.wrap" + this).append('<p class="textdigit">дней</p>'),
          "Hours" == this &&
            r.find("div.wrap" + this).append('<p class="textdigit">часов</p>'),
          "Minutes" == this &&
            r.find("div.wrap" + this).append('<p class="textdigit">минут</p>'),
          "Seconds" == this &&
            r.find("div.wrap" + this).append('<p class="textdigit">секунд</p>'),
          "Seconds" != this &&
            r.append('<span class="countDiv countDiv' + e + '"></span>');
      }),
      (s = this.find(".position")),
      (function e() {
        (a = Math.floor((o.timestamp - new Date()) / 1e3)) < 0 && (a = 0),
          l(0, 1, (t = Math.floor(a / 86400))),
          (a -= 86400 * t),
          l(2, 3, (n = Math.floor(a / 3600))),
          (a -= 3600 * n),
          l(4, 5, (i = Math.floor(a / 60))),
          l(6, 7, (a = a -= 60 * i)),
          o.callback(t, n, i, a),
          setTimeout(e, 1e3);
      })(),
      this
    );
  };
})(jQuery),
  $(document).ready(function () {
    function e() {
      var e = $(this).attr("name"),
        t = $(this).val();
      switch (($(this).closest(".input__wrap").addClass("focused"), e)) {
        case "name":
          2 < t.length && "" != t
            ? ($(this).removeClass("error"), $(this).addClass("not_error"))
            : ("" == $(this).val() &&
                $(this).closest(".input__wrap").removeClass("focused"),
              $(this).removeClass("not_error").addClass("error"));
          break;
        case "email":
          "" != t &&
          /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/.test(t)
            ? ($(this).removeClass("error"), $(this).addClass("not_error"))
            : ("" == $(this).val() &&
                $(this).closest(".input__wrap").removeClass("focused"),
              $(this).removeClass("not_error").addClass("error"));
          break;
        case "phone":
          "" != t && 10 <= t.length
            ? ($(this).removeClass("error"), $(this).addClass("not_error"))
            : ($(this).removeClass("not_error"), $(this).addClass("error"));
      }
    }
    $(document).on("keypress", "input.error", e),
      $("input.name, input.email, input.phone").blur(e),
      $("input.phone").keyup(function (e) {
        e.target.value = e.target.value.replace(/[^0-9 +]/g, "");
      });
  }),
  $(document).ready(function () {
    $(".simpleCountdown").each(function () {
      var e = new Date();
      var t, n, i, a;
      $("#note");
      (i =
        "yep" == $(this).data("cookies")
          ? ($.cookie("timer")
              ? (t = $.cookie("timer"))
              : ((a = $(this).data("extra").split(",")),
                (n = Number(a[0])),
                (i = Number(a[1])),
                (a = Number(a[2])),
                e.setDate(e.getDate() + n),
                e.setHours(e.getHours() + i),
                e.setMinutes(e.getMinutes() + a),
                (t = e),
                $.cookie("timer", t, {
                  expires: null,
                })),
            new Date(t))
          : ((n = $(this).data("date").split(",")),
            new Date(Number(n[0]), Number(n[1]), Number(n[2]), Number(n[3])))),
        $(this).countdown({
          timestamp: i,
        });
    });
  }),
  $(document).ready(function () {
    $('a[href^="#modal-"]').on("click", function (e) {
      e.preventDefault();
      (e = $(this).attr("href")),
        $(e).fadeIn(300).css("display", "flex"),
        $("section, footer").css("filter", "blur(5px)"),
        (e = $(this).data("srcvideo"));
      "vimeo" == $(this).data("video")
        ? $("#video-popup").replaceWith(
            "<iframe src='https://player.vimeo.com/video/" +
              e +
              "?autoplay=1&title=0&byline=0&portrait=0&badge=0' id='video-popup' width='100%' height='100%' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; clipboard-write'></iframe>"
          )
        : "youtube" == $(this).data("video") &&
          $("#video-popup").replaceWith(
            "<iframe id='video-popup' width='100%' height='100%' src='https://www.youtube.com/embed/" +
              e +
              "?autoplay=1&title=0&byline=0&portrait=0&badge=0' frameborder='0' webkitallowfullscreen mozallowfullscreen  allow='autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; clipboard-write'></iframe>"
          );
    }),
      $(".modal-overlay").on("click", function () {
        $(this).fadeOut(300),
          $("#video-popup").replaceWith("<div id='video-popup'></div>"),
          $("section, footer").css("filter", "none");
      }),
      $("div.close-button").on("click", function () {
        $("[id ^= modal]").fadeOut(300),
          $("#video-popup").replaceWith("<div id='video-popup'></div>"),
          $("section, footer").css("filter", "none");
      }),
      $(".modal-content").on("click", function (e) {
        e.stopPropagation();
      });
  }),
  !(function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          t(e, window, document);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window, document))
      : t(jQuery, window, document);
  })(function (o, s, e, r) {
    "use strict";
    var l = "intlTelInput",
      n = 1,
      i = {
        allowDropdown: !0,
        autoHideDialCode: !0,
        autoPlaceholder: "polite",
        customPlaceholder: null,
        dropdownContainer: "",
        excludeCountries: [],
        formatOnDisplay: !0,
        geoIpLookup: null,
        hiddenInput: "",
        initialCountry: "",
        nationalMode: !0,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: ["us", "gb"],
        separateDialCode: !1,
        utilsScript: "",
      },
      d = 38,
      c = 40,
      u = 13,
      p = 27,
      t = 43,
      h = 65,
      f = 90,
      m = 32,
      a = 9,
      g = [
        "800",
        "822",
        "833",
        "844",
        "855",
        "866",
        "877",
        "880",
        "881",
        "882",
        "883",
        "884",
        "885",
        "886",
        "887",
        "888",
        "889",
      ];
    function v(e, t) {
      (this.telInput = o(e)),
        (this.options = o.extend({}, i, t)),
        (this.ns = "." + l + n++),
        (this.isGoodBrowser = Boolean(e.setSelectionRange)),
        (this.hadInitialPlaceholder = Boolean(o(e).attr("placeholder")));
    }
    o(s).on("load", function () {
      o.fn[l].windowLoaded = !0;
    }),
      (v.prototype = {
        _init: function () {
          return (
            this.options.nationalMode && (this.options.autoHideDialCode = !1),
            this.options.separateDialCode &&
              (this.options.autoHideDialCode = this.options.nationalMode = !1),
            (this.isMobile =
              /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )),
            this.isMobile &&
              (o("body").addClass("iti-mobile"),
              this.options.dropdownContainer ||
                (this.options.dropdownContainer = "body")),
            (this.autoCountryDeferred = new o.Deferred()),
            (this.utilsScriptDeferred = new o.Deferred()),
            (this.selectedCountryData = {}),
            this._processCountryData(),
            this._generateMarkup(),
            this._setInitialState(),
            this._initListeners(),
            this._initRequests(),
            [this.autoCountryDeferred, this.utilsScriptDeferred]
          );
        },
        _processCountryData: function () {
          this._processAllCountries(),
            this._processCountryCodes(),
            this._processPreferredCountries();
        },
        _addCountryCode: function (e, t, n) {
          t in this.countryCodes || (this.countryCodes[t] = []),
            (this.countryCodes[t][n || 0] = e);
        },
        _processAllCountries: function () {
          var t, n;
          this.options.onlyCountries.length
            ? ((t = this.options.onlyCountries.map(function (e) {
                return e.toLowerCase();
              })),
              (this.countries = y.filter(function (e) {
                return -1 < t.indexOf(e.iso2);
              })))
            : this.options.excludeCountries.length
            ? ((n = this.options.excludeCountries.map(function (e) {
                return e.toLowerCase();
              })),
              (this.countries = y.filter(function (e) {
                return -1 === n.indexOf(e.iso2);
              })))
            : (this.countries = y);
        },
        _processCountryCodes: function () {
          this.countryCodes = {};
          for (var e = 0; e < this.countries.length; e++) {
            var t = this.countries[e];
            if (
              (this._addCountryCode(t.iso2, t.dialCode, t.priority),
              t.areaCodes)
            )
              for (var n = 0; n < t.areaCodes.length; n++)
                this._addCountryCode(t.iso2, t.dialCode + t.areaCodes[n]);
          }
        },
        _processPreferredCountries: function () {
          this.preferredCountries = [];
          for (var e = 0; e < this.options.preferredCountries.length; e++) {
            var t = this.options.preferredCountries[e].toLowerCase(),
              t = this._getCountryData(t, !1, !0);
            t && this.preferredCountries.push(t);
          }
        },
        _generateMarkup: function () {
          this.telInput.attr("autocomplete", "off");
          var e = "intl-tel-input",
            e =
              (this.options.allowDropdown && (e += " allow-dropdown"),
              this.options.separateDialCode && (e += " separate-dial-code"),
              this.telInput.wrap(
                o("<div>", {
                  class: e,
                })
              ),
              (this.flagsContainer = o("<div>", {
                class: "flag-container",
              }).insertBefore(this.telInput)),
              o("<div>", {
                class: "selected-flag",
              }));
          e.appendTo(this.flagsContainer),
            (this.selectedFlagInner = o("<div>", {
              class: "iti-flag",
            }).appendTo(e)),
            this.options.separateDialCode &&
              (this.selectedDialCode = o("<div>", {
                class: "selected-dial-code",
              }).appendTo(e)),
            this.options.allowDropdown
              ? (e.attr("tabindex", "0"),
                o("<div>", {
                  class: "iti-arrow",
                }).appendTo(e),
                (this.countryList = o("<ul>", {
                  class: "country-list hide",
                })),
                this.preferredCountries.length &&
                  (this._appendListItems(this.preferredCountries, "preferred"),
                  o("<li>", {
                    class: "divider",
                  }).appendTo(this.countryList)),
                this._appendListItems(this.countries, ""),
                (this.countryListItems = this.countryList.children(".country")),
                this.options.dropdownContainer
                  ? (this.dropdown = o("<div>", {
                      class: "intl-tel-input iti-container",
                    }).append(this.countryList))
                  : this.countryList.appendTo(this.flagsContainer))
              : (this.countryListItems = o()),
            this.options.hiddenInput &&
              (this.hiddenInput = o("<input>", {
                type: "hidden",
                name: this.options.hiddenInput,
              }).insertBefore(this.telInput));
        },
        _appendListItems: function (e, t) {
          for (var n = "", i = 0; i < e.length; i++)
            var a = e[i],
              n =
                (n =
                  (n =
                    (n +=
                      "<li class='country " +
                      t +
                      "' data-dial-code='" +
                      a.dialCode +
                      "' data-country-code='" +
                      a.iso2 +
                      "'>") +
                    ("<div class='flag-box'><div class='iti-flag " +
                      a.iso2 +
                      "'></div></div>")) +
                  ("<span class='country-name'>" + a.name + "</span>")) +
                ("<span class='dial-code'>+" + a.dialCode + "</span>") +
                "</li>";
          this.countryList.append(n);
        },
        _setInitialState: function () {
          var e = this.telInput.val();
          this._getDialCode(e) &&
          (!this._isRegionlessNanp(e) ||
            (this.options.nationalMode && !this.options.initialCountry))
            ? this._updateFlagFromNumber(e)
            : "auto" !== this.options.initialCountry &&
              (this.options.initialCountry
                ? this._setFlag(this.options.initialCountry.toLowerCase())
                : ((this.defaultCountry = (
                    this.preferredCountries.length
                      ? this.preferredCountries
                      : this.countries
                  )[0].iso2),
                  e || this._setFlag(this.defaultCountry)),
              e ||
                this.options.nationalMode ||
                this.options.autoHideDialCode ||
                this.options.separateDialCode ||
                this.telInput.val("+" + this.selectedCountryData.dialCode)),
            e && this._updateValFromNumber(e);
        },
        _initListeners: function () {
          this._initKeyListeners(),
            this.options.autoHideDialCode && this._initFocusListeners(),
            this.options.allowDropdown && this._initDropdownListeners(),
            this.hiddenInput && this._initHiddenInputListener();
        },
        _initHiddenInputListener: function () {
          var e = this,
            t = this.telInput.closest("form");
          t.length &&
            t.submit(function () {
              e.hiddenInput.val(e.getNumber());
            });
        },
        _initDropdownListeners: function () {
          var t = this,
            e = this.telInput.closest("label");
          e.length &&
            e.on("click" + this.ns, function (e) {
              t.countryList.hasClass("hide")
                ? t.telInput.focus()
                : e.preventDefault();
            }),
            this.selectedFlagInner.parent().on("click" + this.ns, function (e) {
              !t.countryList.hasClass("hide") ||
                t.telInput.prop("disabled") ||
                t.telInput.prop("readonly") ||
                t._showDropdown();
            }),
            this.flagsContainer.on("keydown" + t.ns, function (e) {
              !t.countryList.hasClass("hide") ||
                (e.which != d &&
                  e.which != c &&
                  e.which != m &&
                  e.which != u) ||
                (e.preventDefault(), e.stopPropagation(), t._showDropdown()),
                e.which == a && t._closeDropdown();
            });
        },
        _initRequests: function () {
          var e = this;
          this.options.utilsScript
            ? o.fn[l].windowLoaded
              ? o.fn[l].loadUtils(
                  this.options.utilsScript,
                  this.utilsScriptDeferred
                )
              : o(s).on("load", function () {
                  o.fn[l].loadUtils(
                    e.options.utilsScript,
                    e.utilsScriptDeferred
                  );
                })
            : this.utilsScriptDeferred.resolve(),
            "auto" === this.options.initialCountry
              ? this._loadAutoCountry()
              : this.autoCountryDeferred.resolve();
        },
        _loadAutoCountry: function () {
          o.fn[l].autoCountry
            ? this.handleAutoCountry()
            : o.fn[l].startedLoadingAutoCountry ||
              ((o.fn[l].startedLoadingAutoCountry = !0),
              "function" == typeof this.options.geoIpLookup &&
                this.options.geoIpLookup(function (e) {
                  (o.fn[l].autoCountry = e.toLowerCase()),
                    setTimeout(function () {
                      o(".intl-tel-input input").intlTelInput(
                        "handleAutoCountry"
                      );
                    });
                }));
        },
        _initKeyListeners: function () {
          var e = this;
          this.telInput.on("keyup" + this.ns, function () {
            e._updateFlagFromNumber(e.telInput.val()) &&
              e._triggerCountryChange();
          }),
            this.telInput.on("cut" + this.ns + " paste" + this.ns, function () {
              setTimeout(function () {
                e._updateFlagFromNumber(e.telInput.val()) &&
                  e._triggerCountryChange();
              });
            });
        },
        _cap: function (e) {
          var t = this.telInput.attr("maxlength");
          return t && e.length > t ? e.substr(0, t) : e;
        },
        _initFocusListeners: function () {
          var n = this,
            e =
              (this.telInput.on("mousedown" + this.ns, function (e) {
                n.telInput.is(":focus") ||
                  n.telInput.val() ||
                  (e.preventDefault(), n.telInput.focus());
              }),
              this.telInput.on("focus" + this.ns, function (e) {
                n.telInput.val() ||
                  n.telInput.prop("readonly") ||
                  !n.selectedCountryData.dialCode ||
                  (n.telInput.val("+" + n.selectedCountryData.dialCode),
                  n.telInput.one("keypress.plus" + n.ns, function (e) {
                    e.which == t && n.telInput.val("");
                  }),
                  setTimeout(function () {
                    var e,
                      t = n.telInput[0];
                    n.isGoodBrowser &&
                      ((e = n.telInput.val().length),
                      t.setSelectionRange(e, e));
                  }));
              }),
              this.telInput.prop("form"));
          e &&
            o(e).on("submit" + this.ns, function () {
              n._removeEmptyDialCode();
            }),
            this.telInput.on("blur" + this.ns, function () {
              n._removeEmptyDialCode();
            });
        },
        _removeEmptyDialCode: function () {
          var e = this.telInput.val();
          "+" != e.charAt(0) ||
            ((e = this._getNumeric(e)) &&
              this.selectedCountryData.dialCode != e) ||
            this.telInput.val(""),
            this.telInput.off("keypress.plus" + this.ns);
        },
        _getNumeric: function (e) {
          return e.replace(/\D/g, "");
        },
        _showDropdown: function () {
          this._setDropdownPosition();
          var e = this.countryList.children(".active");
          e.length && (this._highlightListItem(e), this._scrollTo(e)),
            this._bindDropdownListeners(),
            this.selectedFlagInner.children(".iti-arrow").addClass("up"),
            this.telInput.trigger("open:countrydropdown");
        },
        _setDropdownPosition: function () {
          var e,
            t,
            n,
            i,
            a = this;
          this.options.dropdownContainer &&
            this.dropdown.appendTo(this.options.dropdownContainer),
            (this.dropdownHeight = this.countryList
              .removeClass("hide")
              .outerHeight()),
            this.isMobile ||
              ((t = (e = this.telInput.offset()).top),
              (n = o(s).scrollTop()),
              (i =
                t + this.telInput.outerHeight() + this.dropdownHeight <
                n + o(s).height()),
              (n = t - this.dropdownHeight > n),
              this.countryList.toggleClass("dropup", !i && n),
              this.options.dropdownContainer &&
                ((i = !i && n ? 0 : this.telInput.innerHeight()),
                this.dropdown.css({
                  top: t + i,
                  left: e.left,
                }),
                o(s).on("scroll" + this.ns, function () {
                  a._closeDropdown();
                })));
        },
        _bindDropdownListeners: function () {
          var t = this,
            n =
              (this.countryList.on(
                "mouseover" + this.ns,
                ".country",
                function (e) {
                  t._highlightListItem(o(this));
                }
              ),
              this.countryList.on("click" + this.ns, ".country", function (e) {
                t._selectListItem(o(this));
              }),
              !0),
            i =
              (o("html").on("click" + this.ns, function (e) {
                n || t._closeDropdown(), (n = !1);
              }),
              ""),
            a = null;
          o(e).on("keydown" + this.ns, function (e) {
            e.preventDefault(),
              e.which == d || e.which == c
                ? t._handleUpDownKey(e.which)
                : e.which == u
                ? t._handleEnterKey()
                : e.which == p
                ? t._closeDropdown()
                : ((e.which >= h && e.which <= f) || e.which == m) &&
                  (a && clearTimeout(a),
                  (i += String.fromCharCode(e.which)),
                  t._searchForCountry(i),
                  (a = setTimeout(function () {
                    i = "";
                  }, 1e3)));
          });
        },
        _handleUpDownKey: function (e) {
          var t = this.countryList.children(".highlight").first(),
            t = e == d ? t.prev() : t.next();
          t.length &&
            (t.hasClass("divider") && (t = e == d ? t.prev() : t.next()),
            this._highlightListItem(t),
            this._scrollTo(t));
        },
        _handleEnterKey: function () {
          var e = this.countryList.children(".highlight").first();
          e.length && this._selectListItem(e);
        },
        _searchForCountry: function (e) {
          for (var t = 0; t < this.countries.length; t++)
            if (this._startsWith(this.countries[t].name, e)) {
              var n = this.countryList
                .children("[data-country-code=" + this.countries[t].iso2 + "]")
                .not(".preferred");
              this._highlightListItem(n), this._scrollTo(n, !0);
              break;
            }
        },
        _startsWith: function (e, t) {
          return e.substr(0, t.length).toUpperCase() == t;
        },
        _updateValFromNumber: function (e) {
          var t;
          this.options.formatOnDisplay &&
            s.intlTelInputUtils &&
            this.selectedCountryData &&
            ((t =
              this.options.separateDialCode ||
              (!this.options.nationalMode && "+" == e.charAt(0))
                ? intlTelInputUtils.numberFormat.INTERNATIONAL
                : intlTelInputUtils.numberFormat.NATIONAL),
            (e = intlTelInputUtils.formatNumber(
              e,
              this.selectedCountryData.iso2,
              t
            ))),
            (e = this._beforeSetNumber(e)),
            this.telInput.val(e);
        },
        _updateFlagFromNumber: function (e) {
          e &&
            this.options.nationalMode &&
            "1" == this.selectedCountryData.dialCode &&
            "+" != e.charAt(0) &&
            (e = "+" + (e = "1" != e.charAt(0) ? "1" + e : e));
          var t = this._getDialCode(e),
            n = null,
            i = this._getNumeric(e);
          if (t) {
            var a = this.countryCodes[this._getNumeric(t)],
              s = -1 < o.inArray(this.selectedCountryData.iso2, a),
              t = "+1" == t && 4 <= i.length;
            if (
              !(
                ("1" == this.selectedCountryData.dialCode &&
                  this._isRegionlessNanp(i)) ||
                (s && !t)
              )
            )
              for (var r = 0; r < a.length; r++)
                if (a[r]) {
                  n = a[r];
                  break;
                }
          } else
            "+" == e.charAt(0) && i.length
              ? (n = "")
              : (e && "+" != e) || (n = this.defaultCountry);
          return null !== n && this._setFlag(n);
        },
        _isRegionlessNanp: function (e) {
          var e = this._getNumeric(e);
          return (
            "1" == e.charAt(0) && ((e = e.substr(1, 3)), -1 < o.inArray(e, g))
          );
        },
        _highlightListItem: function (e) {
          this.countryListItems.removeClass("highlight"),
            e.addClass("highlight");
        },
        _getCountryData: function (e, t, n) {
          for (var i = t ? y : this.countries, a = 0; a < i.length; a++)
            if (i[a].iso2 == e) return i[a];
          if (n) return null;
          throw new Error("No country data for '" + e + "'");
        },
        _setFlag: function (e) {
          var t,
            n = this.selectedCountryData.iso2 ? this.selectedCountryData : {},
            i =
              ((this.selectedCountryData = e
                ? this._getCountryData(e, !1, !1)
                : {}),
              this.selectedCountryData.iso2 &&
                (this.defaultCountry = this.selectedCountryData.iso2),
              this.selectedFlagInner.attr("class", "iti-flag " + e),
              e
                ? this.selectedCountryData.name +
                  ": +" +
                  this.selectedCountryData.dialCode
                : "Unknown");
          return (
            this.selectedFlagInner.parent().attr("title", i),
            this.options.separateDialCode &&
              ((i = this.selectedCountryData.dialCode
                ? "+" + this.selectedCountryData.dialCode
                : ""),
              (t = this.telInput.parent()),
              n.dialCode && t.removeClass("iti-sdc-" + (n.dialCode.length + 1)),
              i && t.addClass("iti-sdc-" + i.length),
              this.selectedDialCode.text(i)),
            this._updatePlaceholder(),
            this.countryListItems.removeClass("active"),
            e &&
              this.countryListItems
                .find(".iti-flag." + e)
                .first()
                .closest(".country")
                .addClass("active"),
            n.iso2 !== e
          );
        },
        _updatePlaceholder: function () {
          var e =
            "aggressive" === this.options.autoPlaceholder ||
            (!this.hadInitialPlaceholder &&
              (!0 === this.options.autoPlaceholder ||
                "polite" === this.options.autoPlaceholder));
          s.intlTelInputUtils &&
            e &&
            ((e =
              intlTelInputUtils.numberType[this.options.placeholderNumberType]),
            (e = this.selectedCountryData.iso2
              ? intlTelInputUtils.getExampleNumber(
                  this.selectedCountryData.iso2,
                  this.options.nationalMode,
                  e
                )
              : ""),
            (e = this._beforeSetNumber(e)),
            "function" == typeof this.options.customPlaceholder &&
              (e = this.options.customPlaceholder(e, this.selectedCountryData)),
            this.telInput.attr("placeholder", e));
        },
        _selectListItem: function (e) {
          var t = this._setFlag(e.attr("data-country-code"));
          this._closeDropdown(),
            this._updateDialCode(e.attr("data-dial-code"), !0),
            this.telInput.focus(),
            this.isGoodBrowser &&
              ((e = this.telInput.val().length),
              this.telInput[0].setSelectionRange(e, e)),
            t && this._triggerCountryChange();
        },
        _closeDropdown: function () {
          this.countryList.addClass("hide"),
            this.selectedFlagInner.children(".iti-arrow").removeClass("up"),
            o(e).off(this.ns),
            o("html").off(this.ns),
            this.countryList.off(this.ns),
            this.options.dropdownContainer &&
              (this.isMobile || o(s).off("scroll" + this.ns),
              this.dropdown.detach()),
            this.telInput.trigger("close:countrydropdown");
        },
        _scrollTo: function (e, t) {
          var n = this.countryList,
            i = n.height(),
            a = n.offset().top,
            s = a + i,
            r = e.outerHeight(),
            e = e.offset().top,
            o = e + r,
            l = e - a + n.scrollTop(),
            d = i / 2 - r / 2;
          e < a
            ? (t && (l -= d), n.scrollTop(l))
            : s < o && (t && (l += d), n.scrollTop(l - (i - r)));
        },
        _updateDialCode: function (e, t) {
          var n = this.telInput.val();
          if (((e = "+" + e), "+" == n.charAt(0)))
            var i = this._getDialCode(n),
              i = i ? n.replace(i, e) : e;
          else {
            if (this.options.nationalMode || this.options.separateDialCode)
              return;
            if (n) i = e + n;
            else {
              if (!t && this.options.autoHideDialCode) return;
              i = e;
            }
          }
          this.telInput.val(i);
        },
        _getDialCode: function (e) {
          var t = "";
          if ("+" == e.charAt(0))
            for (var n = "", i = 0; i < e.length; i++) {
              var a = e.charAt(i);
              if (
                o.isNumeric(a) &&
                ((n += a),
                this.countryCodes[n] && (t = e.substr(0, i + 1)),
                4 == n.length)
              )
                break;
            }
          return t;
        },
        _getFullNumber: function () {
          var e = o.trim(this.telInput.val()),
            t = this.selectedCountryData.dialCode,
            n = this._getNumeric(e),
            n = "1" == n.charAt(0) ? n : "1" + n,
            n = this.options.separateDialCode
              ? "+" + t
              : "+" != e.charAt(0) &&
                "1" != e.charAt(0) &&
                t &&
                "1" == t.charAt(0) &&
                4 == t.length &&
                t != n.substr(0, 4)
              ? t.substr(1)
              : "";
          return n + e;
        },
        _beforeSetNumber: function (e) {
          var t;
          return (
            this.options.separateDialCode &&
              (t = this._getDialCode(e)) &&
              ((t =
                " " ===
                  e[
                    (t =
                      null !== this.selectedCountryData.areaCodes
                        ? "+" + this.selectedCountryData.dialCode
                        : t).length
                  ] || "-" === e[t.length]
                  ? t.length + 1
                  : t.length),
              (e = e.substr(t))),
            this._cap(e)
          );
        },
        _triggerCountryChange: function () {
          this.telInput.trigger("countrychange", this.selectedCountryData);
        },
        handleAutoCountry: function () {
          "auto" === this.options.initialCountry &&
            ((this.defaultCountry = o.fn[l].autoCountry),
            this.telInput.val() || this.setCountry(this.defaultCountry),
            this.autoCountryDeferred.resolve());
        },
        handleUtils: function () {
          s.intlTelInputUtils &&
            (this.telInput.val() &&
              this._updateValFromNumber(this.telInput.val()),
            this._updatePlaceholder()),
            this.utilsScriptDeferred.resolve();
        },
        destroy: function () {
          var e;
          this.allowDropdown &&
            (this._closeDropdown(),
            this.selectedFlagInner.parent().off(this.ns),
            this.telInput.closest("label").off(this.ns)),
            this.options.autoHideDialCode &&
              (e = this.telInput.prop("form")) &&
              o(e).off(this.ns),
            this.telInput.off(this.ns),
            this.telInput.parent().before(this.telInput).remove();
        },
        getExtension: function () {
          return s.intlTelInputUtils
            ? intlTelInputUtils.getExtension(
                this._getFullNumber(),
                this.selectedCountryData.iso2
              )
            : "";
        },
        getNumber: function (e) {
          return s.intlTelInputUtils
            ? intlTelInputUtils.formatNumber(
                this._getFullNumber(),
                this.selectedCountryData.iso2,
                e
              )
            : "";
        },
        getNumberType: function () {
          return s.intlTelInputUtils
            ? intlTelInputUtils.getNumberType(
                this._getFullNumber(),
                this.selectedCountryData.iso2
              )
            : -99;
        },
        getSelectedCountryData: function () {
          return this.selectedCountryData;
        },
        getValidationError: function () {
          return s.intlTelInputUtils
            ? intlTelInputUtils.getValidationError(
                this._getFullNumber(),
                this.selectedCountryData.iso2
              )
            : -99;
        },
        isValidNumber: function () {
          var e = o.trim(this._getFullNumber()),
            t = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
          return s.intlTelInputUtils
            ? intlTelInputUtils.isValidNumber(e, t)
            : null;
        },
        setCountry: function (e) {
          (e = e.toLowerCase()),
            this.selectedFlagInner.hasClass(e) ||
              (this._setFlag(e),
              this._updateDialCode(this.selectedCountryData.dialCode, !1),
              this._triggerCountryChange());
        },
        setNumber: function (e) {
          var t = this._updateFlagFromNumber(e);
          this._updateValFromNumber(e), t && this._triggerCountryChange();
        },
        setPlaceholderNumberType: function (e) {
          (this.options.placeholderNumberType = e), this._updatePlaceholder();
        },
      }),
      (o.fn[l] = function (n) {
        var i,
          t,
          a = arguments;
        return n === r || "object" == typeof n
          ? ((i = []),
            this.each(function () {
              var e, t;
              o.data(this, "plugin_" + l) ||
                ((t = (e = new v(this, n))._init()),
                i.push(t[0]),
                i.push(t[1]),
                o.data(this, "plugin_" + l, e));
            }),
            o.when.apply(null, i))
          : "string" == typeof n && "_" !== n[0]
          ? (this.each(function () {
              var e = o.data(this, "plugin_" + l);
              e instanceof v &&
                "function" == typeof e[n] &&
                (t = e[n].apply(e, Array.prototype.slice.call(a, 1))),
                "destroy" === n && o.data(this, "plugin_" + l, null);
            }),
            t !== r ? t : this)
          : void 0;
      }),
      (o.fn[l].getCountryData = function () {
        return y;
      }),
      (o.fn[l].loadUtils = function (e, t) {
        o.fn[l].loadedUtilsScript
          ? t && t.resolve()
          : ((o.fn[l].loadedUtilsScript = !0),
            o.ajax({
              type: "GET",
              url: e,
              complete: function () {
                o(".intl-tel-input input").intlTelInput("handleUtils");
              },
              dataType: "script",
              cache: !0,
            }));
      }),
      (o.fn[l].defaults = i),
      (o.fn[l].version = "12.1.12");
    for (
      var y = [
          ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
          ["Albania (Shqipëri)", "al", "355"],
          ["Algeria (‫الجزائر‬‎)", "dz", "213"],
          ["American Samoa", "as", "1684"],
          ["Andorra", "ad", "376"],
          ["Angola", "ao", "244"],
          ["Anguilla", "ai", "1264"],
          ["Antigua and Barbuda", "ag", "1268"],
          ["Argentina", "ar", "54"],
          ["Armenia (Հայաստան)", "am", "374"],
          ["Aruba", "aw", "297"],
          ["Australia", "au", "61", 0],
          ["Austria (Österreich)", "at", "43"],
          ["Azerbaijan (Azərbaycan)", "az", "994"],
          ["Bahamas", "bs", "1242"],
          ["Bahrain (‫البحرين‬‎)", "bh", "973"],
          ["Bangladesh (বাংলাদেশ)", "bd", "880"],
          ["Barbados", "bb", "1246"],
          ["Belarus (Беларусь)", "by", "375"],
          ["Belgium (België)", "be", "32"],
          ["Belize", "bz", "501"],
          ["Benin (Bénin)", "bj", "229"],
          ["Bermuda", "bm", "1441"],
          ["Bhutan (འབྲུག)", "bt", "975"],
          ["Bolivia", "bo", "591"],
          ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
          ["Botswana", "bw", "267"],
          ["Brazil (Brasil)", "br", "55"],
          ["British Indian Ocean Territory", "io", "246"],
          ["British Virgin Islands", "vg", "1284"],
          ["Brunei", "bn", "673"],
          ["Bulgaria (България)", "bg", "359"],
          ["Burkina Faso", "bf", "226"],
          ["Burundi (Uburundi)", "bi", "257"],
          ["Cambodia (កម្ពុជា)", "kh", "855"],
          ["Cameroon (Cameroun)", "cm", "237"],
          [
            "Canada",
            "ca",
            "1",
            1,
            [
              "204",
              "226",
              "236",
              "249",
              "250",
              "289",
              "306",
              "343",
              "365",
              "387",
              "403",
              "416",
              "418",
              "431",
              "437",
              "438",
              "450",
              "506",
              "514",
              "519",
              "548",
              "579",
              "581",
              "587",
              "604",
              "613",
              "639",
              "647",
              "672",
              "705",
              "709",
              "742",
              "778",
              "780",
              "782",
              "807",
              "819",
              "825",
              "867",
              "873",
              "902",
              "905",
            ],
          ],
          ["Cape Verde (Kabu Verdi)", "cv", "238"],
          ["Caribbean Netherlands", "bq", "599", 1],
          ["Cayman Islands", "ky", "1345"],
          ["Central African Republic (République centrafricaine)", "cf", "236"],
          ["Chad (Tchad)", "td", "235"],
          ["Chile", "cl", "56"],
          ["China (中国)", "cn", "86"],
          ["Christmas Island", "cx", "61", 2],
          ["Cocos (Keeling) Islands", "cc", "61", 1],
          ["Colombia", "co", "57"],
          ["Comoros (‫جزر القمر‬‎)", "km", "269"],
          ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
          ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
          ["Cook Islands", "ck", "682"],
          ["Costa Rica", "cr", "506"],
          ["Côte d’Ivoire", "ci", "225"],
          ["Croatia (Hrvatska)", "hr", "385"],
          ["Cuba", "cu", "53"],
          ["Curaçao", "cw", "599", 0],
          ["Cyprus (Κύπρος)", "cy", "357"],
          ["Czech Republic (Česká republika)", "cz", "420"],
          ["Denmark (Danmark)", "dk", "45"],
          ["Djibouti", "dj", "253"],
          ["Dominica", "dm", "1767"],
          [
            "Dominican Republic (República Dominicana)",
            "do",
            "1",
            2,
            ["809", "829", "849"],
          ],
          ["Ecuador", "ec", "593"],
          ["Egypt (‫مصر‬‎)", "eg", "20"],
          ["El Salvador", "sv", "503"],
          ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
          ["Eritrea", "er", "291"],
          ["Estonia (Eesti)", "ee", "372"],
          ["Ethiopia", "et", "251"],
          ["Falkland Islands (Islas Malvinas)", "fk", "500"],
          ["Faroe Islands (Føroyar)", "fo", "298"],
          ["Fiji", "fj", "679"],
          ["Finland (Suomi)", "fi", "358", 0],
          ["France", "fr", "33"],
          ["French Guiana (Guyane française)", "gf", "594"],
          ["French Polynesia (Polynésie française)", "pf", "689"],
          ["Gabon", "ga", "241"],
          ["Gambia", "gm", "220"],
          ["Georgia (საქართველო)", "ge", "995"],
          ["Germany (Deutschland)", "de", "49"],
          ["Ghana (Gaana)", "gh", "233"],
          ["Gibraltar", "gi", "350"],
          ["Greece (Ελλάδα)", "gr", "30"],
          ["Greenland (Kalaallit Nunaat)", "gl", "299"],
          ["Grenada", "gd", "1473"],
          ["Guadeloupe", "gp", "590", 0],
          ["Guam", "gu", "1671"],
          ["Guatemala", "gt", "502"],
          ["Guernsey", "gg", "44", 1],
          ["Guinea (Guinée)", "gn", "224"],
          ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
          ["Guyana", "gy", "592"],
          ["Haiti", "ht", "509"],
          ["Honduras", "hn", "504"],
          ["Hong Kong (香港)", "hk", "852"],
          ["Hungary (Magyarország)", "hu", "36"],
          ["Iceland (Ísland)", "is", "354"],
          ["India (भारत)", "in", "91"],
          ["Indonesia", "id", "62"],
          ["Iran (‫ایران‬‎)", "ir", "98"],
          ["Iraq (‫العراق‬‎)", "iq", "964"],
          ["Ireland", "ie", "353"],
          ["Isle of Man", "im", "44", 2],
          ["Israel (‫ישראל‬‎)", "il", "972"],
          ["Italy (Italia)", "it", "39", 0],
          ["Jamaica", "jm", "1876"],
          ["Japan (日本)", "jp", "81"],
          ["Jersey", "je", "44", 3],
          ["Jordan (‫الأردن‬‎)", "jo", "962"],
          ["Kazakhstan (Казахстан)", "kz", "7", 1],
          ["Kenya", "ke", "254"],
          ["Kiribati", "ki", "686"],
          ["Kosovo", "xk", "383"],
          ["Kuwait (‫الكويت‬‎)", "kw", "965"],
          ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
          ["Laos (ລາວ)", "la", "856"],
          ["Latvia (Latvija)", "lv", "371"],
          ["Lebanon (‫لبنان‬‎)", "lb", "961"],
          ["Lesotho", "ls", "266"],
          ["Liberia", "lr", "231"],
          ["Libya (‫ليبيا‬‎)", "ly", "218"],
          ["Liechtenstein", "li", "423"],
          ["Lithuania (Lietuva)", "lt", "370"],
          ["Luxembourg", "lu", "352"],
          ["Macau (澳門)", "mo", "853"],
          ["Macedonia (FYROM) (Македонија)", "mk", "389"],
          ["Madagascar (Madagasikara)", "mg", "261"],
          ["Malawi", "mw", "265"],
          ["Malaysia", "my", "60"],
          ["Maldives", "mv", "960"],
          ["Mali", "ml", "223"],
          ["Malta", "mt", "356"],
          ["Marshall Islands", "mh", "692"],
          ["Martinique", "mq", "596"],
          ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
          ["Mauritius (Moris)", "mu", "230"],
          ["Mayotte", "yt", "262", 1],
          ["Mexico (México)", "mx", "52"],
          ["Micronesia", "fm", "691"],
          ["Moldova (Republica Moldova)", "md", "373"],
          ["Monaco", "mc", "377"],
          ["Mongolia (Монгол)", "mn", "976"],
          ["Montenegro (Crna Gora)", "me", "382"],
          ["Montserrat", "ms", "1664"],
          ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
          ["Mozambique (Moçambique)", "mz", "258"],
          ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
          ["Namibia (Namibië)", "na", "264"],
          ["Nauru", "nr", "674"],
          ["Nepal (नेपाल)", "np", "977"],
          ["Netherlands (Nederland)", "nl", "31"],
          ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
          ["New Zealand", "nz", "64"],
          ["Nicaragua", "ni", "505"],
          ["Niger (Nijar)", "ne", "227"],
          ["Nigeria", "ng", "234"],
          ["Niue", "nu", "683"],
          ["Norfolk Island", "nf", "672"],
          ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
          ["Northern Mariana Islands", "mp", "1670"],
          ["Norway (Norge)", "no", "47", 0],
          ["Oman (‫عُمان‬‎)", "om", "968"],
          ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
          ["Palau", "pw", "680"],
          ["Palestine (‫فلسطين‬‎)", "ps", "970"],
          ["Panama (Panamá)", "pa", "507"],
          ["Papua New Guinea", "pg", "675"],
          ["Paraguay", "py", "595"],
          ["Peru (Perú)", "pe", "51"],
          ["Philippines", "ph", "63"],
          ["Poland (Polska)", "pl", "48"],
          ["Portugal", "pt", "351"],
          ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
          ["Qatar (‫قطر‬‎)", "qa", "974"],
          ["Réunion (La Réunion)", "re", "262", 0],
          ["Romania (România)", "ro", "40"],
          ["Russia (Россия)", "ru", "7", 0],
          ["Rwanda", "rw", "250"],
          ["Saint Barthélemy", "bl", "590", 1],
          ["Saint Helena", "sh", "290"],
          ["Saint Kitts and Nevis", "kn", "1869"],
          ["Saint Lucia", "lc", "1758"],
          ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
          ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
          ["Saint Vincent and the Grenadines", "vc", "1784"],
          ["Samoa", "ws", "685"],
          ["San Marino", "sm", "378"],
          ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
          ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
          ["Senegal (Sénégal)", "sn", "221"],
          ["Serbia (Србија)", "rs", "381"],
          ["Seychelles", "sc", "248"],
          ["Sierra Leone", "sl", "232"],
          ["Singapore", "sg", "65"],
          ["Sint Maarten", "sx", "1721"],
          ["Slovakia (Slovensko)", "sk", "421"],
          ["Slovenia (Slovenija)", "si", "386"],
          ["Solomon Islands", "sb", "677"],
          ["Somalia (Soomaaliya)", "so", "252"],
          ["South Africa", "za", "27"],
          ["South Korea (대한민국)", "kr", "82"],
          ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
          ["Spain (España)", "es", "34"],
          ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
          ["Sudan (‫السودان‬‎)", "sd", "249"],
          ["Suriname", "sr", "597"],
          ["Svalbard and Jan Mayen", "sj", "47", 1],
          ["Swaziland", "sz", "268"],
          ["Sweden (Sverige)", "se", "46"],
          ["Switzerland (Schweiz)", "ch", "41"],
          ["Syria (‫سوريا‬‎)", "sy", "963"],
          ["Taiwan (台灣)", "tw", "886"],
          ["Tajikistan", "tj", "992"],
          ["Tanzania", "tz", "255"],
          ["Thailand (ไทย)", "th", "66"],
          ["Timor-Leste", "tl", "670"],
          ["Togo", "tg", "228"],
          ["Tokelau", "tk", "690"],
          ["Tonga", "to", "676"],
          ["Trinidad and Tobago", "tt", "1868"],
          ["Tunisia (‫تونس‬‎)", "tn", "216"],
          ["Turkey (Türkiye)", "tr", "90"],
          ["Turkmenistan", "tm", "993"],
          ["Turks and Caicos Islands", "tc", "1649"],
          ["Tuvalu", "tv", "688"],
          ["U.S. Virgin Islands", "vi", "1340"],
          ["Uganda", "ug", "256"],
          ["Ukraine (Україна)", "ua", "380"],
          ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
          ["United Kingdom", "gb", "44", 0],
          ["United States", "us", "1", 0],
          ["Uruguay", "uy", "598"],
          ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
          ["Vanuatu", "vu", "678"],
          ["Vatican City (Città del Vaticano)", "va", "39", 1],
          ["Venezuela", "ve", "58"],
          ["Vietnam (Việt Nam)", "vn", "84"],
          ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
          ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
          ["Yemen (‫اليمن‬‎)", "ye", "967"],
          ["Zambia", "zm", "260"],
          ["Zimbabwe", "zw", "263"],
          ["Åland Islands", "ax", "358", 1],
        ],
        b = 0;
      b < y.length;
      b++
    ) {
      var w = y[b];
      y[b] = {
        name: w[0],
        iso2: w[1],
        dialCode: w[2],
        priority: w[3] || 0,
        areaCodes: w[4] || null,
      };
    }
  }),
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self).LazyLoad = t());
  })(this, function () {
    "use strict";
    function t() {
      return (t =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              i = arguments[t];
            for (n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    function r(e) {
      return t({}, W, e);
    }
    function e(t, e) {
      var n,
        i = "LazyLoad::Initialized",
        t = new t(e);
      try {
        n = new CustomEvent(i, {
          detail: {
            instance: t,
          },
        });
      } catch (e) {
        (n = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
          instance: t,
        });
      }
      window.dispatchEvent(n);
    }
    function o(e) {
      return $(e, U);
    }
    function s(e) {
      k(e, null);
    }
    function d(e) {
      return o(e) === V;
    }
    function l(e, t) {
      R
        ? e.classList.remove(t)
        : (e.className = e.className
            .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    }
    function c(e) {
      return e.llTempImage;
    }
    function a(e, t) {
      e && (e.toLoadCount = t);
    }
    function n(e, t) {
      e.removeAttribute(t);
    }
    function i(e) {
      var t;
      te(e) ||
        (((t = {}).src = e.getAttribute("src")),
        (t.srcset = e.getAttribute("srcset")),
        (t.sizes = e.getAttribute("sizes")),
        (e.llOriginalAttrs = t));
    }
    function u(e) {
      var t;
      te(e) &&
        ((t = e.llOriginalAttrs),
        A(e, "src", t.src),
        A(e, "srcset", t.srcset),
        A(e, "sizes", t.sizes));
    }
    function p(e, t) {
      A(e, "sizes", $(e, t.data_sizes)),
        A(e, "srcset", $(e, t.data_srcset)),
        A(e, "src", $(e, t.data_src));
    }
    function h(e) {
      n(e, "src"), n(e, "srcset"), n(e, "sizes");
    }
    function f(e, t) {
      (e = e.parentNode) && "PICTURE" === e.tagName && ee(e).forEach(t);
    }
    function z(e, t, n) {
      D(e, t.class_applied),
        k(e, X),
        t.unobserve_completed && L(e, t),
        I(t.callback_applied, e, n);
    }
    function m(e, t) {
      !t || 0 < t.loadingCount || 0 < t.toLoadCount || I(e.callback_finish, t);
    }
    function g(e, t, n) {
      e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
    }
    function v(e) {
      return !!e.llEvLisnrs;
    }
    function y(e) {
      if (v(e)) {
        var t,
          n,
          i = e.llEvLisnrs;
        for (t in i) {
          var a = i[t];
          (n = t), e.removeEventListener(n, a);
        }
        delete e.llEvLisnrs;
      }
    }
    function b(e, t, n) {
      var i;
      delete e.llTempImage,
        P(n, -1),
        (i = n) && --i.toLoadCount,
        l(e, t.class_loading),
        t.unobserve_completed && L(e, n);
    }
    function w(e, t, n) {
      var i, a, s;
      -1 < oe.indexOf(e.tagName)
        ? (N((i = e), (a = t), (s = n)), se(i, a), re(i, a, s))
        : ((i = t), (a = n), Z((s = e)), N(s, i, a), ie(s, i, a), ae(s, i, a));
    }
    function O(e, t, n, i) {
      var a;
      n.cancel_on_exit &&
        o(e) === S &&
        "IMG" === e.tagName &&
        (y(e),
        f((a = e), function (e) {
          h(e);
        }),
        h(a),
        f((a = e), function (e) {
          u(e);
        }),
        u(a),
        l(e, n.class_loading),
        P(i, -1),
        s(e),
        I(n.callback_cancel, e, t, i));
    }
    function j(e, t, n, i) {
      var a, s;
      k(e, "entered"),
        D(e, n.class_entered),
        l(e, n.class_exited),
        (a = e),
        (s = i),
        n.unobserve_entered && L(a, s),
        I(n.callback_enter, e, t, i),
        0 <= Q.indexOf(o(e)) || w(e, n, i);
    }
    function H(e, n, i) {
      e.forEach(function (e) {
        var t;
        -1 !== le.indexOf(e.tagName) &&
          (e.setAttribute("loading", "lazy"),
          N((e = e), (t = n), i),
          se(e, t),
          k(e, V));
      }),
        a(i, 0);
    }
    function x(e) {
      return e.container.querySelectorAll(e.elements_selector);
    }
    function q(e) {
      return o(e) === M;
    }
    function C(e, t) {
      return (e = e || x(t)), pe(e).filter(J);
    }
    function T(e, t) {
      var n,
        i,
        a,
        s,
        e = r(e);
      (this._settings = e),
        (this.loadingCount = 0),
        (n = e),
        (i = this),
        B &&
          !de(n) &&
          (i._observer = new IntersectionObserver(function (e) {
            ue(e, n, i);
          }, ce(n))),
        (a = e),
        (s = this),
        E &&
          window.addEventListener("online", function () {
            he(a, s);
          }),
        this.update(t);
    }
    var E = "undefined" != typeof window,
      F =
        (E && !("onscroll" in window)) ||
        ("undefined" != typeof navigator &&
          /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
      B = E && "IntersectionObserver" in window,
      R = E && "classList" in document.createElement("p"),
      G = E && 1 < window.devicePixelRatio,
      W = {
        elements_selector: ".lazy",
        container: F || E ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_entered: "entered",
        class_exited: "exited",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1,
      },
      S = "loading",
      X = "applied",
      M = "error",
      V = "native",
      Y = "data-",
      U = "ll-status",
      $ = function (e, t) {
        return e.getAttribute(Y + t);
      },
      K = function (e, t, n) {
        t = Y + t;
        null === n ? e.removeAttribute(t) : e.setAttribute(t, n);
      },
      k = function (e, t) {
        return K(e, U, t);
      },
      J = function (e) {
        return null === o(e);
      },
      Q = [S, "loaded", X, M],
      I = function (e, t, n, i) {
        e && (void 0 !== i ? e(t, n, i) : void 0 !== n ? e(t, n) : e(t));
      },
      D = function (e, t) {
        R ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
      },
      Z = function (e) {
        e.llTempImage = document.createElement("IMG");
      },
      L = function (e, t) {
        !t || ((t = t._observer) && t.unobserve(e));
      },
      P = function (e, t) {
        e && (e.loadingCount += t);
      },
      ee = function (e) {
        for (var t, n = [], i = 0; (t = e.children[i]); i += 1)
          "SOURCE" === t.tagName && n.push(t);
        return n;
      },
      A = function (e, t, n) {
        n && e.setAttribute(t, n);
      },
      te = function (e) {
        return !!e.llOriginalAttrs;
      },
      ne = {
        IMG: function (e, t) {
          f(e, function (e) {
            i(e), p(e, t);
          }),
            i(e),
            p(e, t);
        },
        IFRAME: function (e, t) {
          A(e, "src", $(e, t.data_src));
        },
        VIDEO: function (e, t) {
          var n;
          (n = function (e) {
            A(e, "src", $(e, t.data_src));
          }),
            ee(e).forEach(n),
            A(e, "poster", $(e, t.data_poster)),
            A(e, "src", $(e, t.data_src)),
            e.load();
        },
      },
      ie = function (e, t, n) {
        var i = $(e, t.data_bg),
          a = $(e, t.data_bg_hidpi),
          a = G && a ? a : i;
        a &&
          ((e.style.backgroundImage = 'url("'.concat(a, '")')),
          c(e).setAttribute("src", a),
          re(e, t, n));
      },
      ae = function (e, t, n) {
        var i = $(e, t.data_bg_multi),
          a = $(e, t.data_bg_multi_hidpi),
          a = G && a ? a : i;
        a && ((e.style.backgroundImage = a), z(e, t, n));
      },
      se = function (e, t) {
        var n = ne[e.tagName];
        n && n(e, t);
      },
      re = function (e, t, n) {
        P(n, 1), D(e, t.class_loading), k(e, S), I(t.callback_loading, e, n);
      },
      oe = ["IMG", "IFRAME", "VIDEO"],
      N = function (s, r, o) {
        var e,
          t,
          n,
          i,
          l = c(s) || s;
        v(l) ||
          ((t = function (e) {
            var t, n, i, a;
            (n = r),
              (i = o),
              (a = d((t = s))),
              b(t, n, i),
              D(t, n.class_loaded),
              k(t, "loaded"),
              I(n.callback_loaded, t, i),
              a || m(n, i),
              y(l);
          }),
          (n = function (e) {
            var t, n, i, a;
            (n = r),
              (i = o),
              (a = d((t = s))),
              b(t, n, i),
              D(t, n.class_error),
              k(t, M),
              I(n.callback_error, t, i),
              a || m(n, i),
              y(l);
          }),
          v((e = l)) || (e.llEvLisnrs = {}),
          (i = "VIDEO" === e.tagName ? "loadeddata" : "load"),
          g(e, i, t),
          g(e, "error", n));
      },
      le = ["IMG", "IFRAME"],
      de = function (e) {
        return e.use_native && "loading" in HTMLImageElement.prototype;
      },
      ce = function (e) {
        return {
          root: e.container === document ? null : e.container,
          rootMargin: e.thresholds || e.threshold + "px",
        };
      },
      ue = function (e, a, s) {
        e.forEach(function (e) {
          return (i = e).isIntersecting || 0 < i.intersectionRatio
            ? j(e.target, e, a, s)
            : ((i = e.target),
              (e = e),
              (t = a),
              (n = s),
              void (
                J(i) ||
                (D(i, t.class_exited),
                O(i, e, t, n),
                I(t.callback_exit, i, e, n))
              ));
          var t, n, i;
        });
      },
      pe = function (e) {
        return Array.prototype.slice.call(e);
      },
      he = function (t, e) {
        var n;
        (n = x(t)),
          pe(n)
            .filter(q)
            .forEach(function (e) {
              l(e, t.class_error), s(e);
            }),
          e.update();
      };
    if (
      ((T.prototype = {
        update: function (e) {
          var t,
            n = this._settings,
            e = C(e, n);
          a(this, e.length),
            F || !B
              ? this.loadAll(e)
              : de(n)
              ? H(e, n, this)
              : ((n = this._observer),
                (e = e),
                n.disconnect(),
                (t = n),
                e.forEach(function (e) {
                  t.observe(e);
                }));
        },
        destroy: function () {
          this._observer && this._observer.disconnect(),
            x(this._settings).forEach(function (e) {
              delete e.llOriginalAttrs;
            }),
            delete this._observer,
            delete this._settings,
            delete this.loadingCount,
            delete this.toLoadCount;
        },
        loadAll: function (e) {
          var t = this,
            n = this._settings;
          C(e, n).forEach(function (e) {
            L(e, t), w(e, n, t);
          });
        },
      }),
      (T.load = function (e, t) {
        t = r(t);
        w(e, t);
      }),
      (T.resetStatus = function (e) {
        s(e);
      }),
      E)
    ) {
      var fe = T,
        _ = window.lazyLoadOptions;
      if (_)
        if (_.length) for (var me, ge = 0; (me = _[ge]); ge += 1) e(fe, me);
        else e(fe, _);
    }
    return T;
  }),
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
          t());
  })(this, function () {
    "use strict";
    function i(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function a(t, n) {
      void 0 === t && (t = {}),
        void 0 === n && (n = {}),
        Object.keys(n).forEach((e) => {
          void 0 === t[e]
            ? (t[e] = n[e])
            : i(n[e]) &&
              i(t[e]) &&
              0 < Object.keys(n[e]).length &&
              a(t[e], n[e]);
        });
    }
    const t = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: {
        blur() {},
        nodeName: "",
      },
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      getElementById() {
        return null;
      },
      createEvent() {
        return {
          initEvent() {},
        };
      },
      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName() {
            return [];
          },
        };
      },
      createElementNS() {
        return {};
      },
      importNode() {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function E() {
      var e = "undefined" != typeof document ? document : {};
      return a(e, t), e;
    }
    const _ = {
      document: t,
      navigator: {
        userAgent: "",
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {},
      },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle() {
        return {
          getPropertyValue() {
            return "";
          },
        };
      },
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia() {
        return {};
      },
      requestAnimationFrame(e) {
        return "undefined" == typeof setTimeout
          ? (e(), null)
          : setTimeout(e, 0);
      },
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function L() {
      var e = "undefined" != typeof window ? window : {};
      return a(e, _), e;
    }
    class o extends Array {
      constructor(e) {
        if ("number" != typeof e) {
          super(...(e || []));
          {
            var t = this;
            const n = t.__proto__;
            Object.defineProperty(t, "__proto__", {
              get() {
                return n;
              },
              set(e) {
                n.__proto__ = e;
              },
            });
          }
        } else super(e);
      }
    }
    function s(e) {
      const t = [];
      return (
        (e = void 0 === e ? [] : e).forEach((e) => {
          Array.isArray(e) ? t.push(...s(e)) : t.push(e);
        }),
        t
      );
    }
    function r(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function P(e, t) {
      var n = L();
      const i = E();
      let a = [];
      if (!t && e instanceof o) return e;
      if (!e) return new o(a);
      if ("string" == typeof e) {
        const s = e.trim();
        if (0 <= s.indexOf("<") && 0 <= s.indexOf(">")) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const r = i.createElement(e);
          r.innerHTML = s;
          for (let e = 0; e < r.childNodes.length; e += 1)
            a.push(r.childNodes[e]);
        } else
          a = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [];
            var i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) a.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof o) return e;
        a = e;
      }
      return new o(
        (function (t) {
          const n = [];
          for (let e = 0; e < t.length; e += 1)
            -1 === n.indexOf(t[e]) && n.push(t[e]);
          return n;
        })(a)
      );
    }
    P.fn = o.prototype;
    const n = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const i = s(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...i);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const i = s(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...i);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const i = s(t.map((e) => e.split(" ")));
        return (
          0 <
          r(this, (t) => 0 < i.filter((e) => t.classList.contains(e)).length)
            .length
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const i = s(t.map((e) => e.split(" ")));
        this.forEach((t) => {
          i.forEach((e) => {
            t.classList.toggle(e);
          });
        });
      },
      attr: function (t, n) {
        if (1 === arguments.length && "string" == typeof t)
          return this[0] ? this[0].getAttribute(t) : void 0;
        for (let e = 0; e < this.length; e += 1)
          if (2 === arguments.length) this[e].setAttribute(t, n);
          else
            for (const i in t)
              (this[e][i] = t[i]), this[e].setAttribute(i, t[i]);
        return this;
      },
      removeAttr: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
        return this;
      },
      transform: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
        return this;
      },
      transition: function (t) {
        for (let e = 0; e < this.length; e += 1)
          this[e].style.transitionDuration =
            "string" != typeof t ? t + "ms" : t;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let [i, a, s, r] = t;
        function o(e) {
          var t = e.target;
          if (t) {
            const i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), P(t).is(a))) s.apply(t, i);
            else {
              var n = P(t).parents();
              for (let e = 0; e < n.length; e += 1)
                P(n[e]).is(a) && s.apply(n[e], i);
            }
          }
        }
        function l(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        "function" == typeof t[1] && (([i, s, r] = t), (a = void 0)),
          (r = r || !1);
        var d = i.split(" ");
        let c;
        for (let e = 0; e < this.length; e += 1) {
          const h = this[e];
          if (a)
            for (c = 0; c < d.length; c += 1) {
              var u = d[c];
              h.dom7LiveListeners || (h.dom7LiveListeners = {}),
                h.dom7LiveListeners[u] || (h.dom7LiveListeners[u] = []),
                h.dom7LiveListeners[u].push({
                  listener: s,
                  proxyListener: o,
                }),
                h.addEventListener(u, o, r);
            }
          else
            for (c = 0; c < d.length; c += 1) {
              var p = d[c];
              h.dom7Listeners || (h.dom7Listeners = {}),
                h.dom7Listeners[p] || (h.dom7Listeners[p] = []),
                h.dom7Listeners[p].push({
                  listener: s,
                  proxyListener: l,
                }),
                h.addEventListener(p, l, r);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let [i, a, s, r] = t;
        "function" == typeof t[1] && (([i, s, r] = t), (a = void 0)),
          (r = r || !1);
        var o = i.split(" ");
        for (let e = 0; e < o.length; e += 1) {
          var l = o[e];
          for (let e = 0; e < this.length; e += 1) {
            const c = this[e];
            let t;
            if (
              (!a && c.dom7Listeners
                ? (t = c.dom7Listeners[l])
                : a && c.dom7LiveListeners && (t = c.dom7LiveListeners[l]),
              t && t.length)
            )
              for (let e = t.length - 1; 0 <= e; --e) {
                var d = t[e];
                ((s && d.listener === s) ||
                  (s &&
                    d.listener &&
                    d.listener.dom7proxy &&
                    d.listener.dom7proxy === s) ||
                  !s) &&
                  (c.removeEventListener(l, d.proxyListener, r),
                  t.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function () {
        const t = L();
        for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
          n[i] = arguments[i];
        var a = n[0].split(" "),
          s = n[1];
        for (let e = 0; e < a.length; e += 1) {
          var r,
            o = a[e];
          for (let e = 0; e < this.length; e += 1) {
            const l = this[e];
            t.CustomEvent &&
              ((r = new t.CustomEvent(o, {
                detail: s,
                bubbles: !0,
                cancelable: !0,
              })),
              (l.dom7EventData = n.filter((e, t) => 0 < t)),
              l.dispatchEvent(r),
              (l.dom7EventData = []),
              delete l.dom7EventData);
          }
        }
        return this;
      },
      transitionEnd: function (n) {
        const i = this;
        return (
          n &&
            i.on("transitionend", function e(t) {
              t.target === this && (n.call(this, t), i.off("transitionend", e));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (0 < this.length) {
          if (e) {
            const t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (0 < this.length) {
          if (e) {
            const t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = L();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (0 < this.length) {
          var e = L(),
            t = E();
          const s = this[0];
          var n = s.getBoundingClientRect(),
            t = t.body,
            i = s.clientTop || t.clientTop || 0,
            t = s.clientLeft || t.clientLeft || 0,
            a = s === e ? e.scrollY : s.scrollTop,
            e = s === e ? e.scrollX : s.scrollLeft;
          return {
            top: n.top + a - i,
            left: n.left + e - t,
          };
        }
        return null;
      },
      css: function (e, t) {
        const n = L();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const a in e) this[i].style[a] = e[a];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 !== arguments.length || "string" != typeof e) return this;
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      },
      each: function (n) {
        return (
          n &&
            this.forEach((e, t) => {
              n.apply(e, [e, t]);
            }),
          this
        );
      },
      html: function (t) {
        if (void 0 === t) return this[0] ? this[0].innerHTML : null;
        for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
        return this;
      },
      text: function (t) {
        if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
        for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
        return this;
      },
      is: function (e) {
        var t = L(),
          n = E();
        const i = this[0];
        let a, s;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (a = P(e), s = 0; s < a.length; s += 1) if (a[s] === i) return !0;
          return !1;
        }
        if (e === n) return i === n;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof o) {
          for (a = e.nodeType ? [e] : e, s = 0; s < a.length; s += 1)
            if (a[s] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e = this[0],
          t;
        if (e) {
          for (t = 0; null !== (e = e.previousSibling); )
            1 === e.nodeType && (t += 1);
          return t;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        return P(
          t - 1 < e
            ? []
            : e < 0
            ? (t = t + e) < 0
              ? []
              : [this[t]]
            : [this[e]]
        );
      },
      append: function () {
        var n;
        const i = E();
        for (let e = 0; e < arguments.length; e += 1) {
          n = e < 0 || arguments.length <= e ? void 0 : arguments[e];
          for (let t = 0; t < this.length; t += 1)
            if ("string" == typeof n) {
              const a = i.createElement("div");
              for (a.innerHTML = n; a.firstChild; )
                this[t].appendChild(a.firstChild);
            } else if (n instanceof o)
              for (let e = 0; e < n.length; e += 1) this[t].appendChild(n[e]);
            else this[t].appendChild(n);
        }
        return this;
      },
      prepend: function (e) {
        const t = E();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const a = t.createElement("div");
            for (a.innerHTML = e, i = a.childNodes.length - 1; 0 <= i; --i)
              this[n].insertBefore(a.childNodes[i], this[n].childNodes[0]);
          } else if (e instanceof o)
            for (i = 0; i < e.length; i += 1)
              this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return 0 < this.length
          ? e
            ? this[0].nextElementSibling && P(this[0].nextElementSibling).is(e)
              ? P([this[0].nextElementSibling])
              : P([])
            : this[0].nextElementSibling
            ? P([this[0].nextElementSibling])
            : P([])
          : P([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return P([]);
        for (; n.nextElementSibling; ) {
          var i = n.nextElementSibling;
          (!e || P(i).is(e)) && t.push(i), (n = i);
        }
        return P(t);
      },
      prev: function (e) {
        var t;
        return 0 < this.length
          ? ((t = this[0]),
            e
              ? t.previousElementSibling && P(t.previousElementSibling).is(e)
                ? P([t.previousElementSibling])
                : P([])
              : t.previousElementSibling
              ? P([t.previousElementSibling])
              : P([]))
          : P([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return P([]);
        for (; n.previousElementSibling; ) {
          var i = n.previousElementSibling;
          (!e || P(i).is(e)) && t.push(i), (n = i);
        }
        return P(t);
      },
      parent: function (t) {
        const n = [];
        for (let e = 0; e < this.length; e += 1)
          null === this[e].parentNode ||
            (t && !P(this[e].parentNode).is(t)) ||
            n.push(this[e].parentNode);
        return P(n);
      },
      parents: function (n) {
        const i = [];
        for (let t = 0; t < this.length; t += 1) {
          let e = this[t].parentNode;
          for (; e; ) (n && !P(e).is(n)) || i.push(e), (e = e.parentNode);
        }
        return P(i);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? P([]) : (t = t.is(e) ? t : t.parents(e).eq(0));
      },
      find: function (t) {
        const n = [];
        for (let e = 0; e < this.length; e += 1) {
          var i = this[e].querySelectorAll(t);
          for (let e = 0; e < i.length; e += 1) n.push(i[e]);
        }
        return P(n);
      },
      children: function (t) {
        const n = [];
        for (let e = 0; e < this.length; e += 1) {
          var i = this[e].children;
          for (let e = 0; e < i.length; e += 1)
            (t && !P(i[e]).is(t)) || n.push(i[e]);
        }
        return P(n);
      },
      filter: function (e) {
        return P(r(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    function S(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function v() {
      return Date.now();
    }
    function A(e, t) {
      void 0 === t && (t = "x");
      const n = L();
      let i, a, s;
      const r = (function (e) {
        const t = L();
        let n;
        return (n =
          (n =
            !(n = t.getComputedStyle ? t.getComputedStyle(e, null) : n) &&
            e.currentStyle
              ? e.currentStyle
              : n) || e.style);
      })(e);
      return (
        n.WebKitCSSMatrix
          ? (6 < (a = r.transform || r.webkitTransform).split(",").length &&
              (a = a
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (s = new n.WebKitCSSMatrix("none" === a ? "" : a)))
          : ((s =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = s.toString().split(","))),
        "x" === t &&
          (a = n.WebKitCSSMatrix
            ? s.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        (a =
          "y" === t
            ? n.WebKitCSSMatrix
              ? s.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])
            : a) || 0
      );
    }
    function l(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function u(e) {
      const n = Object(arguments.length <= 0 ? void 0 : e),
        t = ["__proto__", "constructor", "prototype"];
      for (let e = 1; e < arguments.length; e += 1) {
        var i = e < 0 || arguments.length <= e ? void 0 : arguments[e];
        if (
          null != i &&
          ((o = i),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? o instanceof HTMLElement
            : o && (1 === o.nodeType || 11 === o.nodeType)))
        ) {
          var a = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let e = 0, t = a.length; e < t; e += 1) {
            var s = a[e],
              r = Object.getOwnPropertyDescriptor(i, s);
            void 0 !== r &&
              r.enumerable &&
              (l(n[s]) && l(i[s])
                ? i[s].__swiper__
                  ? (n[s] = i[s])
                  : u(n[s], i[s])
                : !l(n[s]) && l(i[s])
                ? ((n[s] = {}), i[s].__swiper__ ? (n[s] = i[s]) : u(n[s], i[s]))
                : (n[s] = i[s]));
          }
        }
      }
      var o;
      return n;
    }
    function R(e, t, n) {
      e.style.setProperty(t, n);
    }
    function C(e) {
      let { swiper: n, targetPosition: i, side: a } = e;
      const s = L(),
        r = -n.translate;
      let o = null,
        l;
      const d = n.params.speed,
        c =
          ((n.wrapperEl.style.scrollSnapType = "none"),
          s.cancelAnimationFrame(n.cssModeFrameID),
          i > r ? "next" : "prev"),
        u = (e, t) => ("next" === c && t <= e) || ("prev" === c && e <= t),
        p = () => {
          (l = new Date().getTime()), null === o && (o = l);
          var e = Math.max(Math.min((l - o) / d, 1), 0),
            e = 0.5 - Math.cos(e * Math.PI) / 2;
          let t = r + e * (i - r);
          if (
            (u(t, i) && (t = i),
            n.wrapperEl.scrollTo({
              [a]: t,
            }),
            u(t, i))
          )
            return (
              (n.wrapperEl.style.overflow = "hidden"),
              (n.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (n.wrapperEl.style.overflow = ""),
                  n.wrapperEl.scrollTo({
                    [a]: t,
                  });
              }),
              void s.cancelAnimationFrame(n.cssModeFrameID)
            );
          n.cssModeFrameID = s.requestAnimationFrame(p);
        };
      p();
    }
    Object.keys(n).forEach((e) => {
      Object.defineProperty(P.fn, e, {
        value: n[e],
        writable: !0,
      });
    });
    let e;
    function p() {
      return (e =
        e ||
        (function () {
          const n = L();
          var e = E();
          return {
            smoothScroll:
              e.documentElement && "scrollBehavior" in e.documentElement.style,
            touch: !!(
              "ontouchstart" in n ||
              (n.DocumentTouch && e instanceof n.DocumentTouch)
            ),
            passiveListener: (function () {
              let e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get() {
                    e = !0;
                  },
                });
                n.addEventListener("testPassiveListener", null, t);
              } catch (e) {}
              return e;
            })(),
            gestures: "ongesturestart" in n,
          };
        })());
    }
    let d;
    function z(e) {
      return (
        void 0 === e && (e = {}),
        (d =
          d ||
          (function (e) {
            var e = (void 0 === e ? {} : e)["userAgent"],
              t = p(),
              n = (s = L()).navigator.platform;
            const i = e || s.navigator.userAgent,
              a = {
                ios: !1,
                android: !1,
              };
            var e = s.screen.width,
              s = s.screen.height,
              r = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let o = i.match(/(iPad).*OS\s([\d_]+)/);
            var l = i.match(/(iPod)(.*OS\s([\d_]+))?/),
              d = !o && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              c = "Win32" === n;
            let u = "MacIntel" === n;
            return (
              !o &&
                u &&
                t.touch &&
                0 <=
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(e + "x" + s) &&
                ((o = (o = i.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"]),
                (u = !1)),
              r && !c && ((a.os = "android"), (a.android = !0)),
              (o || d || l) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e))
      );
    }
    let c;
    function O() {
      const t = L();
      return {
        isSafari: (function () {
          const e = t.navigator.userAgent.toLowerCase();
          return (
            0 <= e.indexOf("safari") &&
            e.indexOf("chrome") < 0 &&
            e.indexOf("android") < 0
          );
        })(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          t.navigator.userAgent
        ),
      };
    }
    function h(e) {
      let { swiper: t, runCallbacks: n, direction: i, step: a } = e;
      var { activeIndex: e, previousIndex: s } = t;
      let r = i;
      (r = r || (s < e ? "next" : e < s ? "prev" : "reset")),
        t.emit("transition" + a),
        n &&
          e !== s &&
          ("reset" === r
            ? t.emit("slideResetTransition" + a)
            : (t.emit("slideChangeTransition" + a),
              "next" === r
                ? t.emit("slideNextTransition" + a)
                : t.emit("slidePrevTransition" + a)));
    }
    function j(i, e) {
      return (function e(t) {
        if (!t || t === E() || t === L()) return null;
        var n = (t = t.assignedSlot || t).closest(i);
        return n || t.getRootNode ? n || e(t.getRootNode().host) : null;
      })((e = void 0 === e ? this : e));
    }
    function f() {
      var e,
        t,
        n = this,
        { params: i, el: a } = n;
      (a && 0 === a.offsetWidth) ||
        (i.breakpoints && n.setBreakpoint(),
        ({ allowSlideNext: a, allowSlidePrev: e, snapGrid: t } = n),
        (n.allowSlideNext = !0),
        (n.allowSlidePrev = !0),
        n.updateSize(),
        n.updateSlides(),
        n.updateSlidesClasses(),
        ("auto" === i.slidesPerView || 1 < i.slidesPerView) &&
        n.isEnd &&
        !n.isBeginning &&
        !n.params.centeredSlides
          ? n.slideTo(n.slides.length - 1, 0, !1, !0)
          : n.slideTo(n.activeIndex, 0, !1, !0),
        n.autoplay &&
          n.autoplay.running &&
          n.autoplay.paused &&
          n.autoplay.run(),
        (n.allowSlidePrev = e),
        (n.allowSlideNext = a),
        n.params.watchOverflow && t !== n.snapGrid && n.checkOverflow());
    }
    let m = !1;
    function H() {}
    const g = (e, t) => {
      const n = E(),
        {
          params: i,
          touchEvents: a,
          el: s,
          wrapperEl: r,
          device: o,
          support: l,
        } = e;
      var d,
        c = !!i.nested,
        u = "on" === t ? "addEventListener" : "removeEventListener";
      l.touch
        ? ((d = !(
            "touchstart" !== a.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && {
            passive: !0,
            capture: !1,
          }),
          s[u](a.start, e.onTouchStart, d),
          s[u](
            a.move,
            e.onTouchMove,
            l.passiveListener
              ? {
                  passive: !1,
                  capture: c,
                }
              : c
          ),
          s[u](a.end, e.onTouchEnd, d),
          a.cancel && s[u](a.cancel, e.onTouchEnd, d))
        : (s[u](a.start, e.onTouchStart, !1),
          n[u](a.move, e.onTouchMove, c),
          n[u](a.end, e.onTouchEnd, !1)),
        (i.preventClicks || i.preventClicksPropagation) &&
          s[u]("click", e.onClick, !0),
        i.cssMode && r[u]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[t](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              f,
              !0
            )
          : e[t]("observerUpdate", f, !0);
    };
    const y = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
    var b = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    const w = {
        eventsEmitter: {
          on(e, t, n) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const a = n ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][a](t);
              }),
              i
            );
          },
          once(i, a, e) {
            const s = this;
            return !s.eventsListeners || s.destroyed || "function" != typeof a
              ? s
              : ((r.__emitterProxy = a), s.on(i, r, e));
            function r() {
              s.off(i, r), r.__emitterProxy && delete r.__emitterProxy;
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              a.apply(s, t);
            }
          },
          onAny(e, t) {
            var n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            t = t ? "unshift" : "push";
            return (
              n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[t](e),
              n
            );
          },
          offAny(e) {
            var t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            e = t.eventsAnyListeners.indexOf(e);
            return 0 <= e && t.eventsAnyListeners.splice(e, 1), t;
          },
          off(e, i) {
            const a = this;
            return (
              !a.eventsListeners ||
                a.destroyed ||
                (a.eventsListeners &&
                  e.split(" ").forEach((n) => {
                    void 0 === i
                      ? (a.eventsListeners[n] = [])
                      : a.eventsListeners[n] &&
                        a.eventsListeners[n].forEach((e, t) => {
                          (e === i ||
                            (e.__emitterProxy && e.__emitterProxy === i)) &&
                            a.eventsListeners[n].splice(t, 1);
                        });
                  })),
              a
            );
          },
          emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, n, i;
            for (var a = arguments.length, s = new Array(a), r = 0; r < a; r++)
              s[r] = arguments[r];
            (i =
              "string" == typeof s[0] || Array.isArray(s[0])
                ? ((t = s[0]), (n = s.slice(1, s.length)), e)
                : ((t = s[0].events), (n = s[0].data), s[0].context || e)),
              n.unshift(i);
            const o = Array.isArray(t) ? t : t.split(" ");
            return (
              o.forEach((t) => {
                e.eventsAnyListeners &&
                  e.eventsAnyListeners.length &&
                  e.eventsAnyListeners.forEach((e) => {
                    e.apply(i, [t, ...n]);
                  }),
                  e.eventsListeners &&
                    e.eventsListeners[t] &&
                    e.eventsListeners[t].forEach((e) => {
                      e.apply(i, n);
                    });
              }),
              e
            );
          },
        },
        update: {
          updateSize: function () {
            var e = this;
            let t, n;
            const i = e.$el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : i[0].clientWidth),
              (n =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : i[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === n && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(i.css("padding-left") || 0, 10) -
                  parseInt(i.css("padding-right") || 0, 10)),
                (n =
                  n -
                  parseInt(i.css("padding-top") || 0, 10) -
                  parseInt(i.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(n) && (n = 0),
                Object.assign(e, {
                  width: t,
                  height: n,
                  size: e.isHorizontal() ? t : n,
                }));
          },
          updateSlides: function () {
            const n = this;
            function i(e) {
              return n.isHorizontal()
                ? e
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[e];
            }
            function a(e, t) {
              return parseFloat(e.getPropertyValue(i(t)) || 0);
            }
            const s = n.params,
              { $wrapperEl: e, size: r, rtlTranslate: o, wrongRTL: O } = n;
            var l = n.virtual && s.virtual.enabled,
              d = (l ? n.virtual : n).slides.length;
            const c = e.children("." + n.params.slideClass);
            var u = (l ? n.virtual.slides : c).length;
            let p = [];
            const h = [],
              f = [];
            let m = s.slidesOffsetBefore,
              g =
                ("function" == typeof m && (m = s.slidesOffsetBefore.call(n)),
                s.slidesOffsetAfter);
            "function" == typeof g && (g = s.slidesOffsetAfter.call(n));
            var j = n.snapGrid.length,
              H = n.slidesGrid.length;
            let v = s.spaceBetween,
              y = -m,
              b = 0,
              w = 0;
            if (void 0 !== r) {
              "string" == typeof v &&
                0 <= v.indexOf("%") &&
                (v = (parseFloat(v.replace("%", "")) / 100) * r),
                (n.virtualSize = -v),
                o
                  ? c.css({
                      marginLeft: "",
                      marginBottom: "",
                      marginTop: "",
                    })
                  : c.css({
                      marginRight: "",
                      marginBottom: "",
                      marginTop: "",
                    }),
                s.centeredSlides &&
                  s.cssMode &&
                  (R(n.wrapperEl, "--swiper-centered-offset-before", ""),
                  R(n.wrapperEl, "--swiper-centered-offset-after", ""));
              var x = s.grid && 1 < s.grid.rows && n.grid;
              x && n.grid.initSlides(u);
              let t;
              var C,
                q =
                  "auto" === s.slidesPerView &&
                  s.breakpoints &&
                  0 <
                    Object.keys(s.breakpoints).filter(
                      (e) => void 0 !== s.breakpoints[e].slidesPerView
                    ).length;
              for (let e = 0; e < u; e += 1) {
                t = 0;
                const P = c.eq(e);
                if (
                  (x && n.grid.updateSlide(e, P, u, i),
                  "none" !== P.css("display"))
                ) {
                  if ("auto" === s.slidesPerView) {
                    q && (c[e].style[i("width")] = "");
                    const A = getComputedStyle(P[0]);
                    var T,
                      E,
                      S,
                      M,
                      $,
                      k,
                      I,
                      D = P[0].style.transform,
                      L = P[0].style.webkitTransform;
                    D && (P[0].style.transform = "none"),
                      L && (P[0].style.webkitTransform = "none"),
                      (t = s.roundLengths
                        ? n.isHorizontal()
                          ? P.outerWidth(!0)
                          : P.outerHeight(!0)
                        : ((T = a(A, "width")),
                          (E = a(A, "padding-left")),
                          (S = a(A, "padding-right")),
                          (M = a(A, "margin-left")),
                          ($ = a(A, "margin-right")),
                          (k = A.getPropertyValue("box-sizing")) &&
                          "border-box" === k
                            ? T + M + $
                            : (({ clientWidth: k, offsetWidth: I } = P[0]),
                              T + E + S + M + $ + (I - k)))),
                      D && (P[0].style.transform = D),
                      L && (P[0].style.webkitTransform = L),
                      s.roundLengths && (t = Math.floor(t));
                  } else
                    (t = (r - (s.slidesPerView - 1) * v) / s.slidesPerView),
                      s.roundLengths && (t = Math.floor(t)),
                      c[e] && (c[e].style[i("width")] = t + "px");
                  c[e] && (c[e].swiperSlideSize = t),
                    f.push(t),
                    s.centeredSlides
                      ? ((y = y + t / 2 + b / 2 + v),
                        0 === b && 0 !== e && (y = y - r / 2 - v),
                        0 === e && (y = y - r / 2 - v),
                        Math.abs(y) < 0.001 && (y = 0),
                        s.roundLengths && (y = Math.floor(y)),
                        w % s.slidesPerGroup == 0 && p.push(y),
                        h.push(y))
                      : (s.roundLengths && (y = Math.floor(y)),
                        (w - Math.min(n.params.slidesPerGroupSkip, w)) %
                          n.params.slidesPerGroup ==
                          0 && p.push(y),
                        h.push(y),
                        (y = y + t + v)),
                    (n.virtualSize += t + v),
                    (b = t),
                    (w += 1);
                }
              }
              if (
                ((n.virtualSize = Math.max(n.virtualSize, r) + g),
                o &&
                  O &&
                  ("slide" === s.effect || "coverflow" === s.effect) &&
                  e.css({
                    width: n.virtualSize + s.spaceBetween + "px",
                  }),
                s.setWrapperSize &&
                  e.css({
                    [i("width")]: n.virtualSize + s.spaceBetween + "px",
                  }),
                x && n.grid.updateWrapperSize(t, p, i),
                !s.centeredSlides)
              ) {
                const N = [];
                for (let t = 0; t < p.length; t += 1) {
                  let e = p[t];
                  s.roundLengths && (e = Math.floor(e)),
                    p[t] <= n.virtualSize - r && N.push(e);
                }
                (p = N),
                  1 <
                    Math.floor(n.virtualSize - r) -
                      Math.floor(p[p.length - 1]) && p.push(n.virtualSize - r);
              }
              if (
                (0 === p.length && (p = [0]),
                0 !== s.spaceBetween &&
                  ((C =
                    n.isHorizontal() && o ? "marginLeft" : i("marginRight")),
                  c
                    .filter((e, t) => !s.cssMode || t !== c.length - 1)
                    .css({
                      [C]: v + "px",
                    })),
                s.centeredSlides && s.centeredSlidesBounds)
              ) {
                let t = 0;
                f.forEach((e) => {
                  t += e + (s.spaceBetween || 0);
                });
                const _ = (t -= s.spaceBetween) - r;
                p = p.map((e) => (e < 0 ? -m : e > _ ? _ + g : e));
              }
              if (s.centerInsufficientSlides) {
                let t = 0;
                if (
                  (f.forEach((e) => {
                    t += e + (s.spaceBetween || 0);
                  }),
                  (t -= s.spaceBetween) < r)
                ) {
                  const z = (r - t) / 2;
                  p.forEach((e, t) => {
                    p[t] = e - z;
                  }),
                    h.forEach((e, t) => {
                      h[t] = e + z;
                    });
                }
              }
              if (
                (Object.assign(n, {
                  slides: c,
                  snapGrid: p,
                  slidesGrid: h,
                  slidesSizesGrid: f,
                }),
                s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
              ) {
                R(n.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
                  R(
                    n.wrapperEl,
                    "--swiper-centered-offset-after",
                    n.size / 2 - f[f.length - 1] / 2 + "px"
                  );
                const F = -n.snapGrid[0],
                  B = -n.slidesGrid[0];
                (n.snapGrid = n.snapGrid.map((e) => e + F)),
                  (n.slidesGrid = n.slidesGrid.map((e) => e + B));
              }
              u !== d && n.emit("slidesLengthChange"),
                p.length !== j &&
                  (n.params.watchOverflow && n.checkOverflow(),
                  n.emit("snapGridLengthChange")),
                h.length !== H && n.emit("slidesGridLengthChange"),
                s.watchSlidesProgress && n.updateSlidesOffset(),
                l ||
                  s.cssMode ||
                  ("slide" !== s.effect && "fade" !== s.effect) ||
                  ((C = s.containerModifierClass + "backface-hidden"),
                  (d = n.$el.hasClass(C)),
                  u <= s.maxBackfaceHiddenSlides
                    ? d || n.$el.addClass(C)
                    : d && n.$el.removeClass(C));
            }
          },
          updateAutoHeight: function (e) {
            const n = this,
              t = [],
              i = n.virtual && n.params.virtual.enabled;
            let a = 0,
              s;
            "number" == typeof e
              ? n.setTransition(e)
              : !0 === e && n.setTransition(n.params.speed);
            var r,
              o = (t) =>
                (i
                  ? n.slides.filter(
                      (e) =>
                        parseInt(
                          e.getAttribute("data-swiper-slide-index"),
                          10
                        ) === t
                    )
                  : n.slides.eq(t))[0];
            if ("auto" !== n.params.slidesPerView && 1 < n.params.slidesPerView)
              if (n.params.centeredSlides)
                (n.visibleSlides || P([])).each((e) => {
                  t.push(e);
                });
              else
                for (s = 0; s < Math.ceil(n.params.slidesPerView); s += 1) {
                  var l = n.activeIndex + s;
                  if (l > n.slides.length && !i) break;
                  t.push(o(l));
                }
            else t.push(o(n.activeIndex));
            for (s = 0; s < t.length; s += 1)
              void 0 !== t[s] && ((r = t[s].offsetHeight), (a = r > a ? r : a));
            (!a && 0 !== a) || n.$wrapperEl.css("height", a + "px");
          },
          updateSlidesOffset: function () {
            const t = this.slides;
            for (let e = 0; e < t.length; e += 1)
              t[e].swiperSlideOffset = this.isHorizontal()
                ? t[e].offsetLeft
                : t[e].offsetTop;
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var i = this,
              a = i.params;
            const { slides: s, rtlTranslate: r, snapGrid: o } = i;
            if (0 !== s.length) {
              void 0 === s[0].swiperSlideOffset && i.updateSlidesOffset();
              let n = r ? e : -e;
              s.removeClass(a.slideVisibleClass),
                (i.visibleSlidesIndexes = []),
                (i.visibleSlides = []);
              for (let t = 0; t < s.length; t += 1) {
                const p = s[t];
                let e = p.swiperSlideOffset;
                a.cssMode && a.centeredSlides && (e -= s[0].swiperSlideOffset);
                var l =
                    (n + (a.centeredSlides ? i.minTranslate() : 0) - e) /
                    (p.swiperSlideSize + a.spaceBetween),
                  d =
                    (n - o[0] + (a.centeredSlides ? i.minTranslate() : 0) - e) /
                    (p.swiperSlideSize + a.spaceBetween),
                  c = -(n - e),
                  u = c + i.slidesSizesGrid[t];
                ((0 <= c && c < i.size - 1) ||
                  (1 < u && u <= i.size) ||
                  (c <= 0 && u >= i.size)) &&
                  (i.visibleSlides.push(p),
                  i.visibleSlidesIndexes.push(t),
                  s.eq(t).addClass(a.slideVisibleClass)),
                  (p.progress = r ? -l : l),
                  (p.originalProgress = r ? -d : d);
              }
              i.visibleSlides = P(i.visibleSlides);
            }
          },
          updateProgress: function (e) {
            var t = this,
              n =
                (void 0 === e &&
                  ((n = t.rtlTranslate ? -1 : 1),
                  (e = (t && t.translate && t.translate * n) || 0)),
                t.params),
              i = t.maxTranslate() - t.minTranslate();
            let { progress: a, isBeginning: s, isEnd: r } = t;
            var o = s,
              l = r;
            (r =
              0 == i
                ? ((a = 0), (s = !0))
                : ((a = (e - t.minTranslate()) / i), (s = a <= 0), 1 <= a)),
              Object.assign(t, {
                progress: a,
                isBeginning: s,
                isEnd: r,
              }),
              (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
                t.updateSlidesProgress(e),
              s && !o && t.emit("reachBeginning toEdge"),
              r && !l && t.emit("reachEnd toEdge"),
              ((o && !s) || (l && !r)) && t.emit("fromEdge"),
              t.emit("progress", a);
          },
          updateSlidesClasses: function () {
            const {
              slides: e,
              params: t,
              $wrapperEl: n,
              activeIndex: i,
              realIndex: a,
            } = this;
            var s = this.virtual && t.virtual.enabled;
            e.removeClass(
              `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ` +
                t.slideDuplicatePrevClass
            );
            let r,
              o =
                ((r = s
                  ? this.$wrapperEl.find(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]`
                    )
                  : e.eq(i)).addClass(t.slideActiveClass),
                t.loop &&
                  (r.hasClass(t.slideDuplicateClass)
                    ? n.children(
                        `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                      )
                    : n.children(
                        `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                      )
                  ).addClass(t.slideDuplicateActiveClass),
                r
                  .nextAll("." + t.slideClass)
                  .eq(0)
                  .addClass(t.slideNextClass)),
              l =
                (t.loop &&
                  0 === o.length &&
                  (o = e.eq(0)).addClass(t.slideNextClass),
                r
                  .prevAll("." + t.slideClass)
                  .eq(0)
                  .addClass(t.slidePrevClass));
            t.loop &&
              0 === l.length &&
              (l = e.eq(-1)).addClass(t.slidePrevClass),
              t.loop &&
                ((o.hasClass(t.slideDuplicateClass)
                  ? n.children(
                      `.${t.slideClass}:not(.${
                        t.slideDuplicateClass
                      })[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                  : n.children(
                      `.${t.slideClass}.${
                        t.slideDuplicateClass
                      }[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                ).addClass(t.slideDuplicateNextClass),
                (l.hasClass(t.slideDuplicateClass)
                  ? n.children(
                      `.${t.slideClass}:not(.${
                        t.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                  : n.children(
                      `.${t.slideClass}.${
                        t.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                ).addClass(t.slideDuplicatePrevClass)),
              this.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            var t = this,
              n = t.rtlTranslate ? t.translate : -t.translate;
            const {
              slidesGrid: i,
              snapGrid: a,
              params: s,
              activeIndex: r,
              realIndex: o,
              snapIndex: l,
            } = t;
            let d = e,
              c;
            if (void 0 === d) {
              for (let e = 0; e < i.length; e += 1)
                void 0 !== i[e + 1]
                  ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                    ? (d = e)
                    : n >= i[e] && n < i[e + 1] && (d = e + 1)
                  : n >= i[e] && (d = e);
              s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
            }
            (c =
              0 <= a.indexOf(n)
                ? a.indexOf(n)
                : (e = Math.min(s.slidesPerGroupSkip, d)) +
                  Math.floor((d - e) / s.slidesPerGroup)) >= a.length &&
              (c = a.length - 1),
              d === r
                ? c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
                : ((e = parseInt(
                    t.slides.eq(d).attr("data-swiper-slide-index") || d,
                    10
                  )),
                  Object.assign(t, {
                    snapIndex: c,
                    realIndex: e,
                    previousIndex: r,
                    activeIndex: d,
                  }),
                  t.emit("activeIndexChange"),
                  t.emit("snapIndexChange"),
                  o !== e && t.emit("realIndexChange"),
                  (t.initialized || t.params.runCallbacksOnInit) &&
                    t.emit("slideChange"));
          },
          updateClickedSlide: function (e) {
            var t = this,
              n = t.params,
              i = P(e).closest("." + n.slideClass)[0];
            let a = !1,
              s;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  (a = !0), (s = e);
                  break;
                }
            if (!i || !a)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    P(i).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = s),
              n.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var {
              params: t,
              rtlTranslate: n,
              translate: i,
              $wrapperEl: a,
            } = this;
            if (t.virtualTranslate) return n ? -i : i;
            if (t.cssMode) return i;
            let s = A(a[0], e);
            return (s = n ? -s : s) || 0;
          },
          setTranslate: function (e, t) {
            var n = this;
            const {
              rtlTranslate: i,
              params: a,
              $wrapperEl: s,
              wrapperEl: r,
              progress: o,
            } = n;
            let l = 0,
              d = 0;
            n.isHorizontal() ? (l = i ? -e : e) : (d = e),
              a.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
              a.cssMode
                ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    n.isHorizontal() ? -l : -d)
                : a.virtualTranslate ||
                  s.transform(`translate3d(${l}px, ${d}px, 0px)`),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? l : d);
            let c;
            var u = n.maxTranslate() - n.minTranslate();
            (c = 0 == u ? 0 : (e - n.minTranslate()) / u) !== o &&
              n.updateProgress(e),
              n.emit("setTranslate", n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, n, i, a) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0),
              void 0 === i && (i = !0);
            const s = this,
              { params: r, wrapperEl: o } = s;
            if (s.animating && r.preventInteractionOnTransition) return !1;
            var l = s.minTranslate(),
              d = s.maxTranslate();
            let c;
            if (
              ((c = i && l < e ? l : i && e < d ? d : e),
              s.updateProgress(c),
              r.cssMode)
            ) {
              l = s.isHorizontal();
              if (0 === t) o[l ? "scrollLeft" : "scrollTop"] = -c;
              else {
                if (!s.support.smoothScroll)
                  return (
                    C({
                      swiper: s,
                      targetPosition: -c,
                      side: l ? "left" : "top",
                    }),
                    !0
                  );
                o.scrollTo({
                  [l ? "left" : "top"]: -c,
                  behavior: "smooth",
                });
              }
              return !0;
            }
            return (
              0 === t
                ? (s.setTransition(0),
                  s.setTranslate(c),
                  n &&
                    (s.emit("beforeTransitionStart", t, a),
                    s.emit("transitionEnd")))
                : (s.setTransition(t),
                  s.setTranslate(c),
                  n &&
                    (s.emit("beforeTransitionStart", t, a),
                    s.emit("transitionStart")),
                  s.animating ||
                    ((s.animating = !0),
                    s.onTranslateToWrapperTransitionEnd ||
                      (s.onTranslateToWrapperTransitionEnd = function (e) {
                        s &&
                          !s.destroyed &&
                          e.target === this &&
                          (s.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            s.onTranslateToWrapperTransitionEnd
                          ),
                          s.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            s.onTranslateToWrapperTransitionEnd
                          ),
                          (s.onTranslateToWrapperTransitionEnd = null),
                          delete s.onTranslateToWrapperTransitionEnd,
                          n && s.emit("transitionEnd"));
                      }),
                    s.$wrapperEl[0].addEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    s.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      s.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
              this.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var n = this["params"];
            n.cssMode ||
              (n.autoHeight && this.updateAutoHeight(),
              h({
                swiper: this,
                runCallbacks: e,
                direction: t,
                step: "Start",
              }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var n = this["params"];
            (this.animating = !1),
              n.cssMode ||
                (this.setTransition(0),
                h({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "End",
                }));
          },
        },
        slide: {
          slideTo: function (e, t, n, i, a) {
            if (
              (void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0),
              "number" != typeof (e = void 0 === e ? 0 : e) &&
                "string" != typeof e)
            )
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
              );
            if ("string" == typeof e) {
              var s = parseInt(e, 10);
              if (!isFinite(s))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = s;
            }
            const r = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: d,
              slidesGrid: c,
              previousIndex: u,
              activeIndex: p,
              rtlTranslate: h,
              wrapperEl: f,
              enabled: m,
            } = r;
            if (
              (r.animating && l.preventInteractionOnTransition) ||
              (!m && !i && !a)
            )
              return !1;
            let g =
              (s = Math.min(r.params.slidesPerGroupSkip, o)) +
              Math.floor((o - s) / r.params.slidesPerGroup);
            var v = -d[(g = g >= d.length ? d.length - 1 : g)];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                var y = -Math.floor(100 * v),
                  b = Math.floor(100 * c[e]),
                  w = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1]
                  ? b <= y && y < w - (w - b) / 2
                    ? (o = e)
                    : b <= y && y < w && (o = e + 1)
                  : b <= y && (o = e);
              }
            if (r.initialized && o !== p) {
              if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
                return !1;
              if (
                !r.allowSlidePrev &&
                v > r.translate &&
                v > r.maxTranslate() &&
                (p || 0) !== o
              )
                return !1;
            }
            o !== (u || 0) && n && r.emit("beforeSlideChangeStart"),
              r.updateProgress(v);
            let x;
            if (
              ((x = o > p ? "next" : o < p ? "prev" : "reset"),
              (h && -v === r.translate) || (!h && v === r.translate))
            )
              return (
                r.updateActiveIndex(o),
                l.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== l.effect && r.setTranslate(v),
                "reset" !== x &&
                  (r.transitionStart(n, x), r.transitionEnd(n, x)),
                !1
              );
            if (l.cssMode) {
              (e = r.isHorizontal()), (a = h ? v : -v);
              if (0 === t) {
                s = r.virtual && r.params.virtual.enabled;
                s &&
                  ((r.wrapperEl.style.scrollSnapType = "none"),
                  (r._immediateVirtual = !0)),
                  (f[e ? "scrollLeft" : "scrollTop"] = a),
                  s &&
                    requestAnimationFrame(() => {
                      (r.wrapperEl.style.scrollSnapType = ""),
                        (r._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!r.support.smoothScroll)
                  return (
                    C({
                      swiper: r,
                      targetPosition: a,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                f.scrollTo({
                  [e ? "left" : "top"]: a,
                  behavior: "smooth",
                });
              }
              return !0;
            }
            return (
              r.setTransition(t),
              r.setTranslate(v),
              r.updateActiveIndex(o),
              r.updateSlidesClasses(),
              r.emit("beforeTransitionStart", t, i),
              r.transitionStart(n, x),
              0 === t
                ? r.transitionEnd(n, x)
                : r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(n, x));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (e, t, n, i) {
            if (
              (void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0),
              "string" == typeof (e = void 0 === e ? 0 : e))
            ) {
              var a = parseInt(e, 10);
              if (!isFinite(a))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = a;
            }
            let s = e;
            return (
              this.params.loop && (s += this.loopedSlides),
              this.slideTo(s, t, n, i)
            );
          },
          slideNext: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
              { animating: a, enabled: s, params: r } = i;
            if (!s) return i;
            let o = r.slidesPerGroup;
            if (
              ("auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                (o = Math.max(i.slidesPerViewDynamic("current", !0), 1)),
              (s = i.activeIndex < r.slidesPerGroupSkip ? 1 : o),
              r.loop)
            ) {
              if (a && r.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return r.rewind && i.isEnd
              ? i.slideTo(0, e, t, n)
              : i.slideTo(i.activeIndex + s, e, t, n);
          },
          slidePrev: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i,
              a = this;
            const {
              params: s,
              animating: r,
              snapGrid: o,
              slidesGrid: l,
              rtlTranslate: d,
              enabled: c,
            } = a;
            if (!c) return a;
            if (s.loop) {
              if (r && s.loopPreventsSlide) return !1;
              a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
            }
            function u(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const p = u(d ? a.translate : -a.translate),
              h = o.map((e) => u(e));
            let f = o[h.indexOf(p) - 1];
            if (void 0 === f && s.cssMode) {
              let n;
              o.forEach((e, t) => {
                p >= e && (n = t);
              }),
                void 0 !== n && (f = o[0 < n ? n - 1 : n]);
            }
            let m = 0;
            return (
              void 0 !== f &&
                ((m = l.indexOf(f)) < 0 && (m = a.activeIndex - 1),
                "auto" === s.slidesPerView &&
                  1 === s.slidesPerGroup &&
                  s.slidesPerGroupAuto &&
                  ((m = m - a.slidesPerViewDynamic("previous", !0) + 1),
                  (m = Math.max(m, 0)))),
              s.rewind && a.isBeginning
                ? ((i =
                    a.params.virtual && a.params.virtual.enabled && a.virtual
                      ? a.virtual.slides.length - 1
                      : a.slides.length - 1),
                  a.slideTo(i, e, t, n))
                : a.slideTo(m, e, t, n)
            );
          },
          slideReset: function (e, t, n) {
            return (
              void 0 === e && (e = this.params.speed),
              this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), n)
            );
          },
          slideToClosest: function (e, t, n, i) {
            void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              void 0 === i && (i = 0.5);
            var a = this;
            let s = a.activeIndex;
            var r,
              o =
                (o = Math.min(a.params.slidesPerGroupSkip, s)) +
                Math.floor((s - o) / a.params.slidesPerGroup),
              l = a.rtlTranslate ? a.translate : -a.translate;
            return (
              l >= a.snapGrid[o]
                ? ((r = a.snapGrid[o]),
                  (a.snapGrid[o + 1] - r) * i < l - r &&
                    (s += a.params.slidesPerGroup))
                : l - (r = a.snapGrid[o - 1]) <= (a.snapGrid[o] - r) * i &&
                  (s -= a.params.slidesPerGroup),
              (s = Math.max(s, 0)),
              (s = Math.min(s, a.slidesGrid.length - 1)),
              a.slideTo(s, e, t, n)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: n } = e;
            var i,
              a =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let s = e.clickedIndex;
            t.loop
              ? e.animating ||
                ((i = parseInt(
                  P(e.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                t.centeredSlides
                  ? s < e.loopedSlides - a / 2 ||
                    s > e.slides.length - e.loopedSlides + a / 2
                    ? (e.loopFix(),
                      (s = n
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      S(() => {
                        e.slideTo(s);
                      }))
                    : e.slideTo(s)
                  : s > e.slides.length - a
                  ? (e.loopFix(),
                    (s = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    S(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s))
              : e.slideTo(s);
          },
        },
        loop: {
          loopCreate: function () {
            var t = this;
            const n = E(),
              { params: i, $wrapperEl: e } = t,
              a = 0 < e.children().length ? P(e.children()[0].parentNode) : e;
            a.children(`.${i.slideClass}.` + i.slideDuplicateClass).remove();
            let s = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
              var r = i.slidesPerGroup - (s.length % i.slidesPerGroup);
              if (r !== i.slidesPerGroup) {
                for (let e = 0; e < r; e += 1) {
                  var o = P(n.createElement("div")).addClass(
                    i.slideClass + " " + i.slideBlankClass
                  );
                  a.append(o);
                }
                s = a.children("." + i.slideClass);
              }
            }
            "auto" !== i.slidesPerView ||
              i.loopedSlides ||
              (i.loopedSlides = s.length),
              (t.loopedSlides = Math.ceil(
                parseFloat(i.loopedSlides || i.slidesPerView, 10)
              )),
              (t.loopedSlides += i.loopAdditionalSlides),
              t.loopedSlides > s.length &&
                t.params.loopedSlidesLimit &&
                (t.loopedSlides = s.length);
            const l = [],
              d = [];
            s.each((e, t) => {
              const n = P(e);
              n.attr("data-swiper-slide-index", t);
            });
            for (let e = 0; e < t.loopedSlides; e += 1) {
              var c = e - Math.floor(e / s.length) * s.length;
              d.push(s.eq(c)[0]), l.unshift(s.eq(s.length - c - 1)[0]);
            }
            for (let e = 0; e < d.length; e += 1)
              a.append(P(d[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (let e = l.length - 1; 0 <= e; --e)
              a.prepend(P(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
          },
          loopFix: function () {
            var e = this,
              {
                activeIndex: t,
                slides: n,
                loopedSlides: i,
                allowSlidePrev: a,
                allowSlideNext: s,
                snapGrid: r,
                rtlTranslate: o,
              } = (e.emit("beforeLoopFix"), e);
            let l;
            (e.allowSlidePrev = !0),
              (e.allowSlideNext = !0),
              (r = -r[t] - e.getTranslate()),
              t < i
                ? ((l = n.length - 3 * i + t),
                  (l += i),
                  e.slideTo(l, 0, !1, !0) &&
                    0 != r &&
                    e.setTranslate((o ? -e.translate : e.translate) - r))
                : t >= n.length - i &&
                  ((l = -n.length + t + i),
                  (l += i),
                  e.slideTo(l, 0, !1, !0) &&
                    0 != r &&
                    e.setTranslate((o ? -e.translate : e.translate) - r)),
              (e.allowSlidePrev = a),
              (e.allowSlideNext = s),
              e.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: n } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.` +
                  t.slideBlankClass
              )
              .remove(),
              n.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            var t = this;
            if (
              !(
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
            ) {
              const n =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "grabbing" : "grab");
            }
          },
          unsetGrabCursor: function () {
            var e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: {
          attachEvents: function () {
            var e = this;
            const t = E();
            var { params: n, support: i } = e;
            (e.onTouchStart = function (e) {
              var i = this;
              const a = E();
              var s = L();
              const r = i.touchEventsData,
                { params: o, touches: l, enabled: t } = i;
              if (t && (!i.animating || !o.preventInteractionOnTransition)) {
                !i.animating && o.cssMode && o.loop && i.loopFix();
                let t = e,
                  n = P((t = t.originalEvent ? t.originalEvent : t).target);
                if (
                  ("wrapper" !== o.touchEventsTarget ||
                    n.closest(i.wrapperEl).length) &&
                  ((r.isTouchEvent = "touchstart" === t.type),
                  (r.isTouchEvent || !("which" in t) || 3 !== t.which) &&
                    !(
                      (!r.isTouchEvent && "button" in t && 0 < t.button) ||
                      (r.isTouched && r.isMoved)
                    ))
                ) {
                  var d = !!o.noSwipingClass && "" !== o.noSwipingClass,
                    c = e.composedPath ? e.composedPath() : e.path,
                    d =
                      (d &&
                        t.target &&
                        t.target.shadowRoot &&
                        c &&
                        (n = P(c[0])),
                      o.noSwipingSelector || "." + o.noSwipingClass),
                    c = !(!t.target || !t.target.shadowRoot);
                  if (o.noSwiping && (c ? j(d, n[0]) : n.closest(d)[0]))
                    i.allowClick = !0;
                  else if (!o.swipeHandler || n.closest(o.swipeHandler)[0]) {
                    (l.currentX = (
                      "touchstart" === t.type ? t.targetTouches[0] : t
                    ).pageX),
                      (l.currentY = (
                        "touchstart" === t.type ? t.targetTouches[0] : t
                      ).pageY);
                    var c = l.currentX,
                      d = l.currentY,
                      u = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                      p = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                    if (u && (c <= p || c >= s.innerWidth - p)) {
                      if ("prevent" !== u) return;
                      e.preventDefault();
                    }
                    if (
                      (Object.assign(r, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0,
                      }),
                      (l.startX = c),
                      (l.startY = d),
                      (r.touchStartTime = v()),
                      (i.allowClick = !0),
                      i.updateSize(),
                      (i.swipeDirection = void 0),
                      0 < o.threshold && (r.allowThresholdMove = !1),
                      "touchstart" !== t.type)
                    ) {
                      let e = !0;
                      n.is(r.focusableElements) &&
                        ((e = !1),
                        "SELECT" === n[0].nodeName && (r.isTouched = !1)),
                        a.activeElement &&
                          P(a.activeElement).is(r.focusableElements) &&
                          a.activeElement !== n[0] &&
                          a.activeElement.blur();
                      s = e && i.allowTouchMove && o.touchStartPreventDefault;
                      (!o.touchStartForcePreventDefault && !s) ||
                        n[0].isContentEditable ||
                        t.preventDefault();
                    }
                    i.params.freeMode &&
                      i.params.freeMode.enabled &&
                      i.freeMode &&
                      i.animating &&
                      !o.cssMode &&
                      i.freeMode.onTouchStart(),
                      i.emit("touchStart", t);
                  }
                }
              }
            }.bind(e)),
              (e.onTouchMove = function (e) {
                var a = E(),
                  s = this;
                const r = s.touchEventsData,
                  { params: o, touches: l, rtlTranslate: d, enabled: t } = s;
                if (t) {
                  let i = e;
                  if ((i.originalEvent && (i = i.originalEvent), r.isTouched)) {
                    if (!r.isTouchEvent || "touchmove" === i.type) {
                      var e =
                          "touchmove" === i.type &&
                          i.targetTouches &&
                          (i.targetTouches[0] || i.changedTouches[0]),
                        c = ("touchmove" === i.type ? e : i).pageX,
                        e = ("touchmove" === i.type ? e : i).pageY;
                      if (i.preventedByNestedSwiper)
                        return (l.startX = c), void (l.startY = e);
                      if (!s.allowTouchMove)
                        return (
                          P(i.target).is(r.focusableElements) ||
                            (s.allowClick = !1),
                          void (
                            r.isTouched &&
                            (Object.assign(l, {
                              startX: c,
                              startY: e,
                              currentX: c,
                              currentY: e,
                            }),
                            (r.touchStartTime = v()))
                          )
                        );
                      if (r.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
                        if (s.isVertical()) {
                          if (
                            (e < l.startY && s.translate <= s.maxTranslate()) ||
                            (e > l.startY && s.translate >= s.minTranslate())
                          )
                            return (r.isTouched = !1), void (r.isMoved = !1);
                        } else if (
                          (c < l.startX && s.translate <= s.maxTranslate()) ||
                          (c > l.startX && s.translate >= s.minTranslate())
                        )
                          return;
                      if (
                        r.isTouchEvent &&
                        a.activeElement &&
                        i.target === a.activeElement &&
                        P(i.target).is(r.focusableElements)
                      )
                        return (r.isMoved = !0), void (s.allowClick = !1);
                      if (
                        (r.allowTouchCallbacks && s.emit("touchMove", i),
                        !(i.targetTouches && 1 < i.targetTouches.length))
                      ) {
                        (l.currentX = c), (l.currentY = e);
                        (a = l.currentX - l.startX),
                          (c = l.currentY - l.startY);
                        if (
                          !(
                            s.params.threshold &&
                            Math.sqrt(a ** 2 + c ** 2) < s.params.threshold
                          )
                        )
                          if (
                            (void 0 === r.isScrolling &&
                              ((s.isHorizontal() && l.currentY === l.startY) ||
                              (s.isVertical() && l.currentX === l.startX)
                                ? (r.isScrolling = !1)
                                : 25 <= a * a + c * c &&
                                  ((e =
                                    (180 *
                                      Math.atan2(Math.abs(c), Math.abs(a))) /
                                    Math.PI),
                                  (r.isScrolling = s.isHorizontal()
                                    ? e > o.touchAngle
                                    : 90 - e > o.touchAngle))),
                            r.isScrolling && s.emit("touchMoveOpposite", i),
                            void 0 !== r.startMoving ||
                              (l.currentX === l.startX &&
                                l.currentY === l.startY) ||
                              (r.startMoving = !0),
                            r.isScrolling)
                          )
                            r.isTouched = !1;
                          else if (r.startMoving) {
                            (s.allowClick = !1),
                              !o.cssMode && i.cancelable && i.preventDefault(),
                              o.touchMoveStopPropagation &&
                                !o.nested &&
                                i.stopPropagation(),
                              r.isMoved ||
                                (o.loop && !o.cssMode && s.loopFix(),
                                (r.startTranslate = s.getTranslate()),
                                s.setTransition(0),
                                s.animating &&
                                  s.$wrapperEl.trigger(
                                    "webkitTransitionEnd transitionend"
                                  ),
                                (r.allowMomentumBounce = !1),
                                !o.grabCursor ||
                                  (!0 !== s.allowSlideNext &&
                                    !0 !== s.allowSlidePrev) ||
                                  s.setGrabCursor(!0),
                                s.emit("sliderFirstMove", i)),
                              s.emit("sliderMove", i),
                              (r.isMoved = !0);
                            let e = s.isHorizontal() ? a : c,
                              t =
                                ((l.diff = e),
                                (e *= o.touchRatio),
                                d && (e = -e),
                                (s.swipeDirection = 0 < e ? "prev" : "next"),
                                (r.currentTranslate = e + r.startTranslate),
                                !0),
                              n = o.resistanceRatio;
                            if (
                              (o.touchReleaseOnEdges && (n = 0),
                              0 < e && r.currentTranslate > s.minTranslate()
                                ? ((t = !1),
                                  o.resistance &&
                                    (r.currentTranslate =
                                      s.minTranslate() -
                                      1 +
                                      (-s.minTranslate() +
                                        r.startTranslate +
                                        e) **
                                        n))
                                : e < 0 &&
                                  r.currentTranslate < s.maxTranslate() &&
                                  ((t = !1),
                                  o.resistance &&
                                    (r.currentTranslate =
                                      s.maxTranslate() +
                                      1 -
                                      (s.maxTranslate() -
                                        r.startTranslate -
                                        e) **
                                        n)),
                              t && (i.preventedByNestedSwiper = !0),
                              !s.allowSlideNext &&
                                "next" === s.swipeDirection &&
                                r.currentTranslate < r.startTranslate &&
                                (r.currentTranslate = r.startTranslate),
                              !s.allowSlidePrev &&
                                "prev" === s.swipeDirection &&
                                r.currentTranslate > r.startTranslate &&
                                (r.currentTranslate = r.startTranslate),
                              s.allowSlidePrev ||
                                s.allowSlideNext ||
                                (r.currentTranslate = r.startTranslate),
                              0 < o.threshold)
                            ) {
                              if (
                                !(
                                  Math.abs(e) > o.threshold ||
                                  r.allowThresholdMove
                                )
                              )
                                return void (r.currentTranslate =
                                  r.startTranslate);
                              if (!r.allowThresholdMove)
                                return (
                                  (r.allowThresholdMove = !0),
                                  (l.startX = l.currentX),
                                  (l.startY = l.currentY),
                                  (r.currentTranslate = r.startTranslate),
                                  void (l.diff = s.isHorizontal()
                                    ? l.currentX - l.startX
                                    : l.currentY - l.startY)
                                );
                            }
                            o.followFinger &&
                              !o.cssMode &&
                              (((o.freeMode &&
                                o.freeMode.enabled &&
                                s.freeMode) ||
                                o.watchSlidesProgress) &&
                                (s.updateActiveIndex(),
                                s.updateSlidesClasses()),
                              s.params.freeMode &&
                                o.freeMode.enabled &&
                                s.freeMode &&
                                s.freeMode.onTouchMove(),
                              s.updateProgress(r.currentTranslate),
                              s.setTranslate(r.currentTranslate));
                          }
                      }
                    }
                  } else
                    r.startMoving &&
                      r.isScrolling &&
                      s.emit("touchMoveOpposite", i);
                }
              }.bind(e)),
              (e.onTouchEnd = function (r) {
                const o = this,
                  e = o.touchEventsData;
                var {
                  params: l,
                  touches: t,
                  rtlTranslate: n,
                  slidesGrid: d,
                  enabled: i,
                } = o;
                if (i) {
                  let a = r;
                  if (
                    (a.originalEvent && (a = a.originalEvent),
                    e.allowTouchCallbacks && o.emit("touchEnd", a),
                    (e.allowTouchCallbacks = !1),
                    !e.isTouched)
                  )
                    return (
                      e.isMoved && l.grabCursor && o.setGrabCursor(!1),
                      (e.isMoved = !1),
                      void (e.startMoving = !1)
                    );
                  l.grabCursor &&
                    e.isMoved &&
                    e.isTouched &&
                    (!0 === o.allowSlideNext || !0 === o.allowSlidePrev) &&
                    o.setGrabCursor(!1);
                  (i = v()), (r = i - e.touchStartTime);
                  if (
                    (o.allowClick &&
                      ((c = a.path || (a.composedPath && a.composedPath())),
                      o.updateClickedSlide((c && c[0]) || a.target),
                      o.emit("tap click", a),
                      r < 300 &&
                        i - e.lastClickTime < 300 &&
                        o.emit("doubleTap doubleClick", a)),
                    (e.lastClickTime = v()),
                    S(() => {
                      o.destroyed || (o.allowClick = !0);
                    }),
                    !e.isTouched ||
                      !e.isMoved ||
                      !o.swipeDirection ||
                      0 === t.diff ||
                      e.currentTranslate === e.startTranslate)
                  )
                    return (
                      (e.isTouched = !1),
                      (e.isMoved = !1),
                      void (e.startMoving = !1)
                    );
                  (e.isTouched = !1), (e.isMoved = !1), (e.startMoving = !1);
                  let s;
                  if (
                    ((s = l.followFinger
                      ? n
                        ? o.translate
                        : -o.translate
                      : -e.currentTranslate),
                    !l.cssMode)
                  )
                    if (o.params.freeMode && l.freeMode.enabled)
                      o.freeMode.onTouchEnd({
                        currentPos: s,
                      });
                    else {
                      let t = 0,
                        n = o.slidesSizesGrid[0];
                      for (
                        let e = 0;
                        e < d.length;
                        e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
                      ) {
                        const u =
                          e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                        void 0 !== d[e + u]
                          ? s >= d[e] &&
                            s < d[e + u] &&
                            ((t = e), (n = d[e + u] - d[e]))
                          : s >= d[e] &&
                            ((t = e), (n = d[d.length - 1] - d[d.length - 2]));
                      }
                      let e = null,
                        i = null;
                      l.rewind &&
                        (o.isBeginning
                          ? (i =
                              o.params.virtual &&
                              o.params.virtual.enabled &&
                              o.virtual
                                ? o.virtual.slides.length - 1
                                : o.slides.length - 1)
                          : o.isEnd && (e = 0));
                      var c = (s - d[t]) / n;
                      const u =
                        t < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                      r > l.longSwipesMs
                        ? l.longSwipes
                          ? ("next" === o.swipeDirection &&
                              (c >= l.longSwipesRatio
                                ? o.slideTo(l.rewind && o.isEnd ? e : t + u)
                                : o.slideTo(t)),
                            "prev" === o.swipeDirection &&
                              (c > 1 - l.longSwipesRatio
                                ? o.slideTo(t + u)
                                : null !== i &&
                                  c < 0 &&
                                  Math.abs(c) > l.longSwipesRatio
                                ? o.slideTo(i)
                                : o.slideTo(t)))
                          : o.slideTo(o.activeIndex)
                        : l.shortSwipes
                        ? o.navigation &&
                          (a.target === o.navigation.nextEl ||
                            a.target === o.navigation.prevEl)
                          ? a.target === o.navigation.nextEl
                            ? o.slideTo(t + u)
                            : o.slideTo(t)
                          : ("next" === o.swipeDirection &&
                              o.slideTo(null !== e ? e : t + u),
                            "prev" === o.swipeDirection &&
                              o.slideTo(null !== i ? i : t))
                        : o.slideTo(o.activeIndex);
                    }
                }
              }.bind(e)),
              n.cssMode &&
                (e.onScroll = function () {
                  var t = this,
                    { wrapperEl: n, rtlTranslate: i, enabled: a } = t;
                  if (a) {
                    (t.previousTranslate = t.translate),
                      t.isHorizontal()
                        ? (t.translate = -n.scrollLeft)
                        : (t.translate = -n.scrollTop),
                      0 === t.translate && (t.translate = 0),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                    let e;
                    a = t.maxTranslate() - t.minTranslate();
                    (e = 0 == a ? 0 : (t.translate - t.minTranslate()) / a) !==
                      t.progress &&
                      t.updateProgress(i ? -t.translate : t.translate),
                      t.emit("setTranslate", t.translate, !1);
                  }
                }.bind(e)),
              (e.onClick = function (e) {
                var t = this;
                t.enabled &&
                  !t.allowClick &&
                  (t.params.preventClicks && e.preventDefault(),
                  t.params.preventClicksPropagation &&
                    t.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation()));
              }.bind(e)),
              i.touch && !m && (t.addEventListener("touchstart", H), (m = !0)),
              g(e, "on");
          },
          detachEvents: function () {
            g(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const i = this,
              {
                activeIndex: e,
                initialized: t,
                loopedSlides: n = 0,
                params: a,
                $el: s,
              } = i;
            if ((o = a.breakpoints) && 0 !== Object.keys(o).length) {
              var r = i.getBreakpoint(o, i.params.breakpointsBase, i.el);
              if (r && i.currentBreakpoint !== r) {
                const c = (r in o ? o[r] : void 0) || i.originalParams;
                var o = y(i, a),
                  l = y(i, c),
                  d = a.enabled,
                  o =
                    (o && !l
                      ? (s.removeClass(
                          `${a.containerModifierClass}grid ${a.containerModifierClass}grid-column`
                        ),
                        i.emitContainerClasses())
                      : !o &&
                        l &&
                        (s.addClass(a.containerModifierClass + "grid"),
                        ((c.grid.fill && "column" === c.grid.fill) ||
                          (!c.grid.fill && "column" === a.grid.fill)) &&
                          s.addClass(a.containerModifierClass + "grid-column"),
                        i.emitContainerClasses()),
                    ["navigation", "pagination", "scrollbar"].forEach((e) => {
                      var t = a[e] && a[e].enabled,
                        n = c[e] && c[e].enabled;
                      t && !n && i[e].disable(), !t && n && i[e].enable();
                    }),
                    c.direction && c.direction !== a.direction),
                  l = a.loop && (c.slidesPerView !== a.slidesPerView || o),
                  o =
                    (o && t && i.changeDirection(),
                    u(i.params, c),
                    i.params.enabled);
                Object.assign(i, {
                  allowTouchMove: i.params.allowTouchMove,
                  allowSlideNext: i.params.allowSlideNext,
                  allowSlidePrev: i.params.allowSlidePrev,
                }),
                  d && !o ? i.disable() : !d && o && i.enable(),
                  (i.currentBreakpoint = r),
                  i.emit("_beforeBreakpoint", c),
                  l &&
                    t &&
                    (i.loopDestroy(),
                    i.loopCreate(),
                    i.updateSlides(),
                    i.slideTo(e - n + i.loopedSlides, 0, !1)),
                  i.emit("breakpoint", c);
              }
            }
          },
          getBreakpoint: function (e, n, i) {
            if (
              (void 0 === n && (n = "window"), e && ("container" !== n || i))
            ) {
              let t = !1;
              const r = L(),
                o = "window" === n ? r.innerHeight : i.clientHeight,
                l = Object.keys(e).map((e) => {
                  var t;
                  return "string" == typeof e && 0 === e.indexOf("@")
                    ? ((t = parseFloat(e.substr(1))),
                      {
                        value: o * t,
                        point: e,
                      })
                    : {
                        value: e,
                        point: e,
                      };
                });
              l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < l.length; e += 1) {
                var { point: a, value: s } = l[e];
                "window" === n
                  ? r.matchMedia(`(min-width: ${s}px)`).matches && (t = a)
                  : s <= i.clientWidth && (t = a);
              }
              return t || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var e,
              t = this,
              { isLocked: n, params: i } = t,
              a = i["slidesOffsetBefore"];
            a
              ? ((e = t.slides.length - 1),
                (e = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * a),
                (t.isLocked = t.size > e))
              : (t.isLocked = 1 === t.snapGrid.length),
              !0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked),
              !0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
              n && n !== t.isLocked && (t.isEnd = !1),
              n !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const {
              classNames: e,
              params: t,
              rtl: n,
              $el: i,
              device: a,
              support: s,
            } = this;
            var r = (function (e, n) {
              const i = [];
              return (
                e.forEach((t) => {
                  "object" == typeof t
                    ? Object.keys(t).forEach((e) => {
                        t[e] && i.push(n + e);
                      })
                    : "string" == typeof t && i.push(n + t);
                }),
                i
              );
            })(
              [
                "initialized",
                t.direction,
                {
                  "pointer-events": !s.touch,
                },
                {
                  "free-mode": this.params.freeMode && t.freeMode.enabled,
                },
                {
                  autoheight: t.autoHeight,
                },
                {
                  rtl: n,
                },
                {
                  grid: t.grid && 1 < t.grid.rows,
                },
                {
                  "grid-column":
                    t.grid && 1 < t.grid.rows && "column" === t.grid.fill,
                },
                {
                  android: a.android,
                },
                {
                  ios: a.ios,
                },
                {
                  "css-mode": t.cssMode,
                },
                {
                  centered: t.cssMode && t.centeredSlides,
                },
                {
                  "watch-progress": t.watchSlidesProgress,
                },
              ],
              t.containerModifierClass
            );
            e.push(...r),
              i.addClass([...e].join(" ")),
              this.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (e, t, n, i, a, s) {
            const r = L();
            let o;
            function l() {
              s && s();
            }
            !(P(e).parent("picture")[0] || (e.complete && a)) && t
              ? (((o = new r.Image()).onload = l),
                (o.onerror = l),
                i && (o.sizes = i),
                n && (o.srcset = n),
                t && (o.src = t))
              : l();
          },
          preloadImages: function () {
            const t = this;
            function n() {
              void 0 !== t &&
                null !== t &&
                t &&
                !t.destroyed &&
                (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                t.imagesLoaded === t.imagesToLoad.length &&
                  (t.params.updateOnImagesReady && t.update(),
                  t.emit("imagesReady")));
            }
            t.imagesToLoad = t.$el.find("img");
            for (let e = 0; e < t.imagesToLoad.length; e += 1) {
              const i = t.imagesToLoad[e];
              t.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                n
              );
            }
          },
        },
      },
      x = {};
    class T {
      constructor() {
        let e, t;
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
          i[a] = arguments[a];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
          (t = u({}, (t = t || {}))),
          e && !t.el && (t.el = e),
          t.el && 1 < P(t.el).length)
        ) {
          const d = [];
          return (
            P(t.el).each((e) => {
              e = u({}, t, {
                el: e,
              });
              d.push(new T(e));
            }),
            d
          );
        }
        const s = this,
          r =
            ((s.__swiper__ = !0),
            (s.support = p()),
            (s.device = z({
              userAgent: t.userAgent,
            })),
            (s.browser = c = c || O()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              s.modules.push(...t.modules),
            {});
        s.modules.forEach((e) => {
          var i, a;
          e({
            swiper: s,
            extendParams:
              ((i = t),
              (a = r),
              function (e) {
                void 0 === e && (e = {});
                var t = Object.keys(e)[0],
                  n = e[t];
                "object" == typeof n &&
                  null !== n &&
                  (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) &&
                    !0 === i[t] &&
                    (i[t] = {
                      auto: !0,
                    }),
                  t in i &&
                    "enabled" in n &&
                    (!0 === i[t] &&
                      (i[t] = {
                        enabled: !0,
                      }),
                    "object" != typeof i[t] ||
                      "enabled" in i[t] ||
                      (i[t].enabled = !0),
                    i[t] ||
                      (i[t] = {
                        enabled: !1,
                      }))),
                  u(a, e);
              }),
            on: s.on.bind(s),
            once: s.once.bind(s),
            off: s.off.bind(s),
            emit: s.emit.bind(s),
          });
        });
        var o,
          l = u({}, b, r);
        return (
          (s.params = u({}, l, x, t)),
          (s.originalParams = u({}, s.params)),
          (s.passedParams = u({}, t)),
          s.params &&
            s.params.on &&
            Object.keys(s.params.on).forEach((e) => {
              s.on(e, s.params.on[e]);
            }),
          s.params && s.params.onAny && s.onAny(s.params.onAny),
          (s.$ = P),
          Object.assign(s, {
            enabled: s.params.enabled,
            el: e,
            classNames: [],
            slides: P(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
              return "horizontal" === s.params.direction;
            },
            isVertical() {
              return "vertical" === s.params.direction;
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: s.params.allowSlideNext,
            allowSlidePrev: s.params.allowSlidePrev,
            touchEvents:
              ((l = ["touchstart", "touchmove", "touchend", "touchcancel"]),
              (o = ["pointerdown", "pointermove", "pointerup"]),
              (s.touchEventsTouch = {
                start: l[0],
                move: l[1],
                end: l[2],
                cancel: l[3],
              }),
              (s.touchEventsDesktop = {
                start: o[0],
                move: o[1],
                end: o[2],
              }),
              s.support.touch || !s.params.simulateTouch
                ? s.touchEventsTouch
                : s.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: s.params.focusableElements,
              lastClickTime: v(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: s.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          s.emit("_swiper"),
          s.params.init && s.init(),
          s
        );
      }
      enable() {
        var e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        var e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        e = Math.min(Math.max(e, 0), 1);
        var n = this.minTranslate(),
          i = this.maxTranslate();
        this.translateTo((i - n) * e + n, void 0 === t ? 0 : t),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      }
      emitContainerClasses() {
        const t = this;
        if (t.params._emitClasses && t.el) {
          const e = t.el.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper") ||
                0 === e.indexOf(t.params.containerModifierClass)
            );
          t.emit("_containerClasses", e.join(" "));
        }
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const n = this;
        if (n.params._emitClasses && n.el) {
          const i = [];
          n.slides.each((e) => {
            var t = n.getSlideClasses(e);
            i.push({
              slideEl: e,
              classNames: t,
            }),
              n.emit("_slideClass", e, t);
          }),
            n.emit("_slideClasses", i);
        }
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        var {
          params: n,
          slides: i,
          slidesGrid: a,
          slidesSizesGrid: s,
          size: r,
          activeIndex: o,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let t = i[o].swiperSlideSize,
            n;
          for (let e = o + 1; e < i.length; e += 1)
            i[e] &&
              !n &&
              ((t += i[e].swiperSlideSize), (l += 1), t > r && (n = !0));
          for (let e = o - 1; 0 <= e; --e)
            i[e] &&
              !n &&
              ((t += i[e].swiperSlideSize), (l += 1), t > r && (n = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1)
            (t ? a[e] + s[e] - a[o] < r : a[e] - a[o] < r) && (l += 1);
        else for (let e = o - 1; 0 <= e; --e) a[o] - a[e] < r && (l += 1);
        return l;
      }
      update() {
        const t = this;
        if (t && !t.destroyed) {
          var { snapGrid: n, params: i } = t;
          i.breakpoints && t.setBreakpoint(),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses();
          let e;
          function a() {
            var e = t.rtlTranslate ? -1 * t.translate : t.translate,
              e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          t.params.freeMode && t.params.freeMode.enabled
            ? (a(), t.params.autoHeight && t.updateAutoHeight())
            : (e =
                ("auto" === t.params.slidesPerView ||
                  1 < t.params.slidesPerView) &&
                t.isEnd &&
                !t.params.centeredSlides
                  ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                  : t.slideTo(t.activeIndex, 0, !1, !0)) || a(),
            i.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
      }
      changeDirection(t, e) {
        void 0 === e && (e = !0);
        var n = this,
          i = n.params.direction;
        return (
          (t = t || ("horizontal" === i ? "vertical" : "horizontal")) === i ||
            ("horizontal" !== t && "vertical" !== t) ||
            (n.$el
              .removeClass("" + n.params.containerModifierClass + i)
              .addClass("" + n.params.containerModifierClass + t),
            n.emitContainerClasses(),
            (n.params.direction = t),
            n.slides.each((e) => {
              "vertical" === t ? (e.style.width = "") : (e.style.height = "");
            }),
            n.emit("changeDirection"),
            e && n.update()),
          n
        );
      }
      changeLanguageDirection(e) {
        var t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(t) {
        const e = this;
        if (e.mounted) return !0;
        const n = P(t || e.params.el);
        if (!(t = n[0])) return !1;
        t.swiper = e;
        const i = () =>
          "." + (e.params.wrapperClass || "").trim().split(" ").join(".");
        let a = (() => {
          if (t && t.shadowRoot && t.shadowRoot.querySelector) {
            const e = P(t.shadowRoot.querySelector(i()));
            return (e.children = (e) => n.children(e)), e;
          }
          return (n.children ? n : P(n)).children(i());
        })();
        if (0 === a.length && e.params.createElements) {
          const s = E(),
            r = s.createElement("div");
          (a = P(r)),
            (r.className = e.params.wrapperClass),
            n.append(r),
            n.children("." + e.params.slideClass).each((e) => {
              a.append(e);
            });
        }
        return (
          Object.assign(e, {
            $el: n,
            el: t,
            $wrapperEl: a,
            wrapperEl: a[0],
            mounted: !0,
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === e.params.direction &&
              ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === a.css("display"),
          }),
          !0
        );
      }
      init(e) {
        var t = this;
        return (
          t.initialized ||
            (!1 !== t.mount(e) &&
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit"))),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const n = this,
          { params: i, $el: a, $wrapperEl: s, slides: r } = n;
        if (void 0 === n.params || n.destroyed) return null;
        if (
          (n.emit("beforeDestroy"),
          (n.initialized = !1),
          n.detachEvents(),
          i.loop && n.loopDestroy(),
          t &&
            (n.removeClasses(),
            a.removeAttr("style"),
            s.removeAttr("style"),
            r &&
              r.length &&
              r
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          n.emit("destroy"),
          Object.keys(n.eventsListeners).forEach((e) => {
            n.off(e);
          }),
          !1 !== e)
        ) {
          n.$el[0].swiper = null;
          {
            t = n;
            const o = t;
            Object.keys(o).forEach((e) => {
              try {
                o[e] = null;
              } catch (e) {}
              try {
                delete o[e];
              } catch (e) {}
            });
          }
        }
        return (n.destroyed = !0), null;
      }
      static extendDefaults(e) {
        u(x, e);
      }
      static get extendedDefaults() {
        return x;
      }
      static get defaults() {
        return b;
      }
      static installModule(e) {
        T.prototype.__modules__ || (T.prototype.__modules__ = []);
        const t = T.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return (
          Array.isArray(e)
            ? e.forEach((e) => T.installModule(e))
            : T.installModule(e),
          T
        );
      }
    }
    function M(n, i, a, s) {
      const r = E();
      return (
        n.params.createElements &&
          Object.keys(s).forEach((t) => {
            if (!a[t] && !0 === a.auto) {
              let e = n.$el.children("." + s[t])[0];
              e ||
                (((e = r.createElement("div")).className = s[t]),
                n.$el.append(e)),
                (a[t] = e),
                (i[t] = e);
            }
          }),
        a
      );
    }
    function $(e) {
      return (
        "." +
        (e = void 0 === e ? "" : e)
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")
      );
    }
    function k(e) {
      const {
        effect: n,
        swiper: i,
        on: t,
        setTranslate: a,
        setTransition: s,
        overwriteParams: r,
        perspective: o,
        recreateShadows: l,
        getEffectParams: d,
      } = e;
      t("beforeInit", () => {
        var e;
        i.params.effect === n &&
          (i.classNames.push("" + i.params.containerModifierClass + n),
          o && o() && i.classNames.push(i.params.containerModifierClass + "3d"),
          (e = r ? r() : {}),
          Object.assign(i.params, e),
          Object.assign(i.originalParams, e));
      }),
        t("setTranslate", () => {
          i.params.effect === n && a();
        }),
        t("setTransition", (e, t) => {
          i.params.effect === n && s(t);
        }),
        t("transitionEnd", () => {
          i.params.effect === n &&
            l &&
            d &&
            d().slideShadows &&
            (i.slides.each((e) => {
              const t = i.$(e);
              t.find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              ).remove();
            }),
            l());
        });
      let c;
      t("virtualUpdate", () => {
        i.params.effect === n &&
          (i.slides.length || (c = !0),
          requestAnimationFrame(() => {
            c && i.slides && i.slides.length && (a(), (c = !1));
          }));
      });
    }
    function I(e, t) {
      return e.transformEl
        ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
        : t;
    }
    function D(e) {
      let { swiper: n, duration: t, transformEl: i, allSlides: a } = e;
      const { slides: s, activeIndex: r, $wrapperEl: o } = n;
      if (n.params.virtualTranslate && 0 !== t) {
        let e = !1,
          t;
        (t = a
          ? i
            ? s.find(i)
            : s
          : i
          ? s.eq(r).find(i)
          : s.eq(r)).transitionEnd(() => {
          if (!e && n && !n.destroyed) {
            (e = !0), (n.animating = !1);
            var t = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < t.length; e += 1) o.trigger(t[e]);
          }
        });
      }
    }
    function N(e, t, n) {
      var i = "swiper-slide-shadow" + (n ? "-" + n : "");
      const a = e.transformEl ? t.find(e.transformEl) : t;
      let s = a.children("." + i);
      return (
        s.length ||
          ((s = P(
            `<div class="swiper-slide-shadow${n ? "-" + n : ""}"></div>`
          )),
          a.append(s)),
        s
      );
    }
    return (
      Object.keys(w).forEach((t) => {
        Object.keys(w[t]).forEach((e) => {
          T.prototype[e] = w[t][e];
        });
      }),
      T.use([
        function (e) {
          let { swiper: s, on: t, emit: n } = e;
          const i = L();
          let a = null,
            r = null;
          const o = () => {
              s &&
                !s.destroyed &&
                s.initialized &&
                (n("beforeResize"), n("resize"));
            },
            l = () => {
              s && !s.destroyed && s.initialized && n("orientationchange");
            };
          t("init", () => {
            s.params.resizeObserver && void 0 !== i.ResizeObserver
              ? s &&
                !s.destroyed &&
                s.initialized &&
                (a = new ResizeObserver((n) => {
                  r = i.requestAnimationFrame(() => {
                    var { width: e, height: t } = s;
                    let i = e,
                      a = t;
                    n.forEach((e) => {
                      var { contentBoxSize: e, contentRect: t, target: n } = e;
                      (n && n !== s.el) ||
                        ((i = t ? t.width : (e[0] || e).inlineSize),
                        (a = t ? t.height : (e[0] || e).blockSize));
                    }),
                      (i === e && a === t) || o();
                  });
                })).observe(s.el)
              : (i.addEventListener("resize", o),
                i.addEventListener("orientationchange", l));
          }),
            t("destroy", () => {
              r && i.cancelAnimationFrame(r),
                a && a.unobserve && s.el && (a.unobserve(s.el), (a = null)),
                i.removeEventListener("resize", o),
                i.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: n, extendParams: t, on: i, emit: a } = e;
          function s(e, t) {
            void 0 === t && (t = {});
            const n = o.MutationObserver || o.WebkitMutationObserver,
              i = new n((e) => {
                var t;
                1 === e.length
                  ? a("observerUpdate", e[0])
                  : ((t = function () {
                      a("observerUpdate", e[0]);
                    }),
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0));
              });
            i.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              r.push(i);
          }
          const r = [],
            o = L();
          t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1,
          }),
            i("init", () => {
              if (n.params.observer) {
                if (n.params.observeParents) {
                  var t = n.$el.parents();
                  for (let e = 0; e < t.length; e += 1) s(t[e]);
                }
                s(n.$el[0], {
                  childList: n.params.observeSlideChildren,
                }),
                  s(n.$wrapperEl[0], {
                    attributes: !1,
                  });
              }
            }),
            i("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]),
      T.use([
        function (e) {
          let { swiper: w, extendParams: t, on: n, emit: x } = e;
          t({
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: !0,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          });
          let i;
          function C(e, t) {
            const n = w.params.virtual;
            if (n.cache && w.virtual.cache[t]) return w.virtual.cache[t];
            const i = n.renderSlide
              ? P(n.renderSlide.call(w, e, t))
              : P(
                  `<div class="${w.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
                );
            return (
              i.attr("data-swiper-slide-index") ||
                i.attr("data-swiper-slide-index", t),
              n.cache && (w.virtual.cache[t] = i),
              i
            );
          }
          function r(t) {
            var {
                slidesPerView: e,
                slidesPerGroup: n,
                centeredSlides: i,
              } = w.params,
              { addSlidesBefore: a, addSlidesAfter: s } = w.params.virtual;
            const {
              from: r,
              to: o,
              slides: l,
              slidesGrid: d,
              offset: c,
            } = w.virtual;
            w.params.cssMode || w.updateActiveIndex();
            var u = w.activeIndex || 0;
            let p;
            p = w.rtlTranslate ? "right" : w.isHorizontal() ? "left" : "top";
            let h, f;
            f = i
              ? ((h = Math.floor(e / 2) + n + s), Math.floor(e / 2) + n + a)
              : ((h = e + (n - 1) + s), n + a);
            const m = Math.max((u || 0) - f, 0),
              g = Math.min((u || 0) + h, l.length - 1);
            i = (w.slidesGrid[m] || 0) - (w.slidesGrid[0] || 0);
            function v() {
              w.updateSlides(),
                w.updateProgress(),
                w.updateSlidesClasses(),
                w.lazy && w.params.lazy.enabled && w.lazy.load(),
                x("virtualUpdate");
            }
            if (
              (Object.assign(w.virtual, {
                from: m,
                to: g,
                offset: i,
                slidesGrid: w.slidesGrid,
              }),
              r === m && o === g && !t)
            )
              return (
                w.slidesGrid !== d && i !== c && w.slides.css(p, i + "px"),
                w.updateProgress(),
                void x("virtualUpdate")
              );
            if (w.params.virtual.renderExternal)
              return (
                w.params.virtual.renderExternal.call(w, {
                  offset: i,
                  from: m,
                  to: g,
                  slides: (function () {
                    const t = [];
                    for (let e = m; e <= g; e += 1) t.push(l[e]);
                    return t;
                  })(),
                }),
                void (w.params.virtual.renderExternalUpdate
                  ? v()
                  : x("virtualUpdate"))
              );
            const y = [],
              b = [];
            if (t) w.$wrapperEl.find("." + w.params.slideClass).remove();
            else
              for (let e = r; e <= o; e += 1)
                (e < m || e > g) &&
                  w.$wrapperEl
                    .find(
                      `.${w.params.slideClass}[data-swiper-slide-index="${e}"]`
                    )
                    .remove();
            for (let e = 0; e < l.length; e += 1)
              e >= m &&
                e <= g &&
                (void 0 === o || t
                  ? b.push(e)
                  : (e > o && b.push(e), e < r && y.push(e)));
            b.forEach((e) => {
              w.$wrapperEl.append(C(l[e], e));
            }),
              y
                .sort((e, t) => t - e)
                .forEach((e) => {
                  w.$wrapperEl.prepend(C(l[e], e));
                }),
              w.$wrapperEl.children(".swiper-slide").css(p, i + "px"),
              v();
          }
          (w.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: [],
          }),
            n("beforeInit", () => {
              w.params.virtual.enabled &&
                ((w.virtual.slides = w.params.virtual.slides),
                w.classNames.push(w.params.containerModifierClass + "virtual"),
                (w.params.watchSlidesProgress = !0),
                (w.originalParams.watchSlidesProgress = !0),
                w.params.initialSlide || r());
            }),
            n("setTranslate", () => {
              w.params.virtual.enabled &&
                (w.params.cssMode && !w._immediateVirtual
                  ? (clearTimeout(i),
                    (i = setTimeout(() => {
                      r();
                    }, 100)))
                  : r());
            }),
            n("init update resize", () => {
              w.params.virtual.enabled &&
                w.params.cssMode &&
                R(w.wrapperEl, "--swiper-virtual-size", w.virtualSize + "px");
            }),
            Object.assign(w.virtual, {
              appendSlide: function (t) {
                if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1)
                    t[e] && w.virtual.slides.push(t[e]);
                else w.virtual.slides.push(t);
                r(!0);
              },
              prependSlide: function (t) {
                var e = w.activeIndex;
                let n = e + 1,
                  i = 1;
                if (Array.isArray(t)) {
                  for (let e = 0; e < t.length; e += 1)
                    t[e] && w.virtual.slides.unshift(t[e]);
                  (n = e + t.length), (i = t.length);
                } else w.virtual.slides.unshift(t);
                if (w.params.virtual.cache) {
                  const a = w.virtual.cache,
                    s = {};
                  Object.keys(a).forEach((e) => {
                    const t = a[e];
                    var n = t.attr("data-swiper-slide-index");
                    n && t.attr("data-swiper-slide-index", parseInt(n, 10) + i),
                      (s[parseInt(e, 10) + i] = t);
                  }),
                    (w.virtual.cache = s);
                }
                r(!0), w.slideTo(n, 0);
              },
              removeSlide: function (n) {
                if (null != n) {
                  let t = w.activeIndex;
                  if (Array.isArray(n))
                    for (let e = n.length - 1; 0 <= e; --e)
                      w.virtual.slides.splice(n[e], 1),
                        w.params.virtual.cache && delete w.virtual.cache[n[e]],
                        n[e] < t && --t,
                        (t = Math.max(t, 0));
                  else
                    w.virtual.slides.splice(n, 1),
                      w.params.virtual.cache && delete w.virtual.cache[n],
                      n < t && --t,
                      (t = Math.max(t, 0));
                  r(!0), w.slideTo(t, 0);
                }
              },
              removeAllSlides: function () {
                (w.virtual.slides = []),
                  w.params.virtual.cache && (w.virtual.cache = {}),
                  r(!0),
                  w.slideTo(0, 0);
              },
              update: r,
            });
        },
        function (e) {
          let { swiper: g, extendParams: t, on: n, emit: v } = e;
          const y = E(),
            b = L();
          function i(t) {
            if (g.enabled) {
              var n = g["rtlTranslate"];
              let e = t;
              var t =
                  (e = e.originalEvent ? e.originalEvent : e).keyCode ||
                  e.charCode,
                i = g.params.keyboard.pageUpDown,
                a = i && 33 === t,
                i = i && 34 === t,
                s = 37 === t,
                r = 39 === t,
                o = 38 === t,
                l = 40 === t;
              if (
                !g.allowSlideNext &&
                ((g.isHorizontal() && r) || (g.isVertical() && l) || i)
              )
                return !1;
              if (
                !g.allowSlidePrev &&
                ((g.isHorizontal() && s) || (g.isVertical() && o) || a)
              )
                return !1;
              if (
                !(
                  e.shiftKey ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  (y.activeElement &&
                    y.activeElement.nodeName &&
                    ("input" === y.activeElement.nodeName.toLowerCase() ||
                      "textarea" === y.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (
                  g.params.keyboard.onlyInViewport &&
                  (a || i || s || r || o || l)
                ) {
                  let t = !1;
                  if (
                    0 < g.$el.parents("." + g.params.slideClass).length &&
                    0 === g.$el.parents("." + g.params.slideActiveClass).length
                  )
                    return;
                  var d = g.$el,
                    c = d[0].clientWidth,
                    d = d[0].clientHeight,
                    u = b.innerWidth,
                    p = b.innerHeight;
                  const m = g.$el.offset();
                  n && (m.left -= g.$el[0].scrollLeft);
                  var h = [
                    [m.left, m.top],
                    [m.left + c, m.top],
                    [m.left, m.top + d],
                    [m.left + c, m.top + d],
                  ];
                  for (let e = 0; e < h.length; e += 1) {
                    var f = h[e];
                    0 <= f[0] &&
                      f[0] <= u &&
                      0 <= f[1] &&
                      f[1] <= p &&
                      ((0 === f[0] && 0 === f[1]) || (t = !0));
                  }
                  if (!t) return;
                }
                g.isHorizontal()
                  ? ((a || i || s || r) &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1)),
                    (((i || r) && !n) || ((a || s) && n)) && g.slideNext(),
                    (((a || s) && !n) || ((i || r) && n)) && g.slidePrev())
                  : ((a || i || o || l) &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1)),
                    (i || l) && g.slideNext(),
                    (a || o) && g.slidePrev()),
                  v("keyPress", t);
              }
            }
          }
          function a() {
            g.keyboard.enabled ||
              (P(y).on("keydown", i), (g.keyboard.enabled = !0));
          }
          function s() {
            g.keyboard.enabled &&
              (P(y).off("keydown", i), (g.keyboard.enabled = !1));
          }
          (g.keyboard = {
            enabled: !1,
          }),
            t({
              keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0,
              },
            }),
            n("init", () => {
              g.params.keyboard.enabled && a();
            }),
            n("destroy", () => {
              g.keyboard.enabled && s();
            }),
            Object.assign(g.keyboard, {
              enable: a,
              disable: s,
            });
        },
        function (e) {
          let { swiper: c, extendParams: t, on: n, emit: u } = e;
          const i = L();
          t({
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: "container",
              thresholdDelta: null,
              thresholdTime: null,
            },
          }),
            (c.mousewheel = {
              enabled: !1,
            });
          let p,
            a = v(),
            h;
          const f = [];
          function s() {
            c.enabled && (c.mouseEntered = !0);
          }
          function r() {
            c.enabled && (c.mouseEntered = !1);
          }
          function m(e) {
            (c.params.mousewheel.thresholdDelta &&
              e.delta < c.params.mousewheel.thresholdDelta) ||
              (c.params.mousewheel.thresholdTime &&
                v() - a < c.params.mousewheel.thresholdTime) ||
              (6 <= e.delta && v() - a < 60) ||
              (e.direction < 0
                ? (c.isEnd && !c.params.loop) ||
                  c.animating ||
                  (c.slideNext(), u("scroll", e.raw))
                : (c.isBeginning && !c.params.loop) ||
                  c.animating ||
                  (c.slidePrev(), u("scroll", e.raw)),
              (a = new i.Date().getTime()));
          }
          function o(i) {
            let a = i;
            if (c.enabled) {
              var s = c.params.mousewheel;
              c.params.cssMode && a.preventDefault();
              let e = c.$el;
              if (
                ("container" !== c.params.mousewheel.eventsTarget &&
                  (e = P(c.params.mousewheel.eventsTarget)),
                !c.mouseEntered &&
                  !e[0].contains(a.target) &&
                  !s.releaseOnEdges)
              )
                return !0;
              a.originalEvent && (a = a.originalEvent);
              let t = 0;
              var r = c.rtlTranslate ? -1 : 1,
                o = (function (e) {
                  let t = 0,
                    n = 0,
                    i = 0,
                    a = 0;
                  return (
                    "detail" in e && (n = e.detail),
                    "wheelDelta" in e && (n = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e &&
                      e.axis === e.HORIZONTAL_AXIS &&
                      ((t = n), (n = 0)),
                    (i = 10 * t),
                    (a = 10 * n),
                    "deltaY" in e && (a = e.deltaY),
                    "deltaX" in e && (i = e.deltaX),
                    e.shiftKey && !i && ((i = a), (a = 0)),
                    (i || a) &&
                      e.deltaMode &&
                      (1 === e.deltaMode
                        ? ((i *= 40), (a *= 40))
                        : ((i *= 800), (a *= 800))),
                    i && !t && (t = i < 1 ? -1 : 1),
                    a && !n && (n = a < 1 ? -1 : 1),
                    {
                      spinX: t,
                      spinY: n,
                      pixelX: i,
                      pixelY: a,
                    }
                  );
                })(a);
              if (s.forceToAxis)
                if (c.isHorizontal()) {
                  if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                  t = -o.pixelX * r;
                } else {
                  if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                  t = -o.pixelY;
                }
              else
                t =
                  Math.abs(o.pixelX) > Math.abs(o.pixelY)
                    ? -o.pixelX * r
                    : -o.pixelY;
              if (0 === t) return !0;
              s.invert && (t = -t);
              let n = c.getTranslate() + t * s.sensitivity;
              if (
                ((n = n >= c.minTranslate() ? c.minTranslate() : n) <=
                  c.maxTranslate() && (n = c.maxTranslate()),
                (!!c.params.loop ||
                  !(n === c.minTranslate() || n === c.maxTranslate())) &&
                  c.params.nested &&
                  a.stopPropagation(),
                c.params.freeMode && c.params.freeMode.enabled)
              ) {
                const l = {
                  time: v(),
                  delta: Math.abs(t),
                  direction: Math.sign(t),
                };
                r =
                  h &&
                  l.time < h.time + 500 &&
                  l.delta <= h.delta &&
                  l.direction === h.direction;
                if (!r) {
                  (h = void 0), c.params.loop && c.loopFix();
                  let e = c.getTranslate() + t * s.sensitivity;
                  (o = c.isBeginning), (s = c.isEnd);
                  if (
                    ((e = e >= c.minTranslate() ? c.minTranslate() : e) <=
                      c.maxTranslate() && (e = c.maxTranslate()),
                    c.setTransition(0),
                    c.setTranslate(e),
                    c.updateProgress(),
                    c.updateActiveIndex(),
                    c.updateSlidesClasses(),
                    ((!o && c.isBeginning) || (!s && c.isEnd)) &&
                      c.updateSlidesClasses(),
                    c.params.freeMode.sticky)
                  ) {
                    clearTimeout(p), (p = void 0), 15 <= f.length && f.shift();
                    (o = f.length ? f[f.length - 1] : void 0), (s = f[0]);
                    if (
                      (f.push(l),
                      o && (l.delta > o.delta || l.direction !== o.direction))
                    )
                      f.splice(0);
                    else if (
                      15 <= f.length &&
                      l.time - s.time < 500 &&
                      1 <= s.delta - l.delta &&
                      l.delta <= 6
                    ) {
                      const d = 0 < t ? 0.8 : 0.2;
                      (h = l),
                        f.splice(0),
                        (p = S(() => {
                          c.slideToClosest(c.params.speed, !0, void 0, d);
                        }, 0));
                    }
                    p =
                      p ||
                      S(() => {
                        (h = l),
                          f.splice(0),
                          c.slideToClosest(c.params.speed, !0, void 0, 0.5);
                      }, 500);
                  }
                  if (
                    (r || u("scroll", a),
                    c.params.autoplay &&
                      c.params.autoplayDisableOnInteraction &&
                      c.autoplay.stop(),
                    e === c.minTranslate() || e === c.maxTranslate())
                  )
                    return !0;
                }
              } else {
                (o = {
                  time: v(),
                  delta: Math.abs(t),
                  direction: Math.sign(t),
                  raw: i,
                }),
                  (s =
                    (2 <= f.length && f.shift(),
                    f.length ? f[f.length - 1] : void 0));
                if (
                  (f.push(o),
                  (!s ||
                    o.direction !== s.direction ||
                    o.delta > s.delta ||
                    o.time > s.time + 150) &&
                    m(o),
                  (function (e) {
                    var t = c.params.mousewheel;
                    if (e.direction < 0) {
                      if (c.isEnd && !c.params.loop && t.releaseOnEdges)
                        return 1;
                    } else if (
                      c.isBeginning &&
                      !c.params.loop &&
                      t.releaseOnEdges
                    )
                      return 1;
                  })(o))
                )
                  return !0;
              }
              return (
                a.preventDefault ? a.preventDefault() : (a.returnValue = !1), !1
              );
            }
          }
          function l(e) {
            let t = c.$el;
            (t =
              "container" !== c.params.mousewheel.eventsTarget
                ? P(c.params.mousewheel.eventsTarget)
                : t)[e]("mouseenter", s),
              t[e]("mouseleave", r),
              t[e]("wheel", o);
          }
          function d() {
            return c.params.cssMode
              ? (c.wrapperEl.removeEventListener("wheel", o), !0)
              : !c.mousewheel.enabled && (l("on"), (c.mousewheel.enabled = !0));
          }
          function g() {
            return c.params.cssMode
              ? (c.wrapperEl.addEventListener(event, o), !0)
              : !!c.mousewheel.enabled &&
                  (l("off"), !(c.mousewheel.enabled = !1));
          }
          n("init", () => {
            !c.params.mousewheel.enabled && c.params.cssMode && g(),
              c.params.mousewheel.enabled && d();
          }),
            n("destroy", () => {
              c.params.cssMode && d(), c.mousewheel.enabled && g();
            }),
            Object.assign(c.mousewheel, {
              enable: d,
              disable: g,
            });
        },
        function (e) {
          let { swiper: a, extendParams: t, on: n, emit: s } = e;
          function i(e) {
            let t;
            return (
              e &&
                ((t = P(e)),
                a.params.uniqueNavElements &&
                  "string" == typeof e &&
                  1 < t.length &&
                  1 === a.$el.find(e).length &&
                  (t = a.$el.find(e))),
              t
            );
          }
          function r(e, t) {
            var n = a.params.navigation;
            e &&
              0 < e.length &&
              (e[t ? "addClass" : "removeClass"](n.disabledClass),
              e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t),
              a.params.watchOverflow &&
                a.enabled &&
                e[a.isLocked ? "addClass" : "removeClass"](n.lockClass));
          }
          function o() {
            var e, t;
            a.params.loop ||
              (({ $nextEl: e, $prevEl: t } = a.navigation),
              r(t, a.isBeginning && !a.params.rewind),
              r(e, a.isEnd && !a.params.rewind));
          }
          function l(e) {
            e.preventDefault(),
              (a.isBeginning && !a.params.loop && !a.params.rewind) ||
                (a.slidePrev(), s("navigationPrev"));
          }
          function d(e) {
            e.preventDefault(),
              (a.isEnd && !a.params.loop && !a.params.rewind) ||
                (a.slideNext(), s("navigationNext"));
          }
          function c() {
            var e = a.params.navigation;
            if (
              ((a.params.navigation = M(
                a,
                a.originalParams.navigation,
                a.params.navigation,
                {
                  nextEl: "swiper-button-next",
                  prevEl: "swiper-button-prev",
                }
              )),
              e.nextEl || e.prevEl)
            ) {
              const t = i(e.nextEl),
                n = i(e.prevEl);
              t && 0 < t.length && t.on("click", d),
                n && 0 < n.length && n.on("click", l),
                Object.assign(a.navigation, {
                  $nextEl: t,
                  nextEl: t && t[0],
                  $prevEl: n,
                  prevEl: n && n[0],
                }),
                a.enabled ||
                  (t && t.addClass(e.lockClass), n && n.addClass(e.lockClass));
            }
          }
          function u() {
            const { $nextEl: e, $prevEl: t } = a.navigation;
            e &&
              e.length &&
              (e.off("click", d),
              e.removeClass(a.params.navigation.disabledClass)),
              t &&
                t.length &&
                (t.off("click", l),
                t.removeClass(a.params.navigation.disabledClass));
          }
          t({
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
              navigationDisabledClass: "swiper-navigation-disabled",
            },
          }),
            (a.navigation = {
              nextEl: null,
              $nextEl: null,
              prevEl: null,
              $prevEl: null,
            }),
            n("init", () => {
              !1 === a.params.navigation.enabled ? p() : (c(), o());
            }),
            n("toEdge fromEdge lock unlock", () => {
              o();
            }),
            n("destroy", () => {
              u();
            }),
            n("enable disable", () => {
              const { $nextEl: e, $prevEl: t } = a.navigation;
              e &&
                e[a.enabled ? "removeClass" : "addClass"](
                  a.params.navigation.lockClass
                ),
                t &&
                  t[a.enabled ? "removeClass" : "addClass"](
                    a.params.navigation.lockClass
                  );
            }),
            n("click", (e, t) => {
              const { $nextEl: n, $prevEl: i } = a.navigation;
              t = t.target;
              if (
                a.params.navigation.hideOnClick &&
                !P(t).is(i) &&
                !P(t).is(n) &&
                (!(
                  a.pagination &&
                  a.params.pagination &&
                  a.params.pagination.clickable
                ) ||
                  (a.pagination.el !== t && !a.pagination.el.contains(t)))
              ) {
                let e;
                n
                  ? (e = n.hasClass(a.params.navigation.hiddenClass))
                  : i && (e = i.hasClass(a.params.navigation.hiddenClass)),
                  !0 === e ? s("navigationShow") : s("navigationHide"),
                  n && n.toggleClass(a.params.navigation.hiddenClass),
                  i && i.toggleClass(a.params.navigation.hiddenClass);
              }
            });
          const p = () => {
            a.$el.addClass(a.params.navigation.navigationDisabledClass), u();
          };
          Object.assign(a.navigation, {
            enable: () => {
              a.$el.removeClass(a.params.navigation.navigationDisabledClass),
                c(),
                o();
            },
            disable: p,
            update: o,
            init: c,
            destroy: u,
          });
        },
        function (e) {
          let { swiper: p, extendParams: t, on: n, emit: h } = e;
          (e = "swiper-pagination"),
            t({
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: (e) => e,
                formatFractionTotal: (e) => e,
                bulletClass: e + "-bullet",
                bulletActiveClass: e + "-bullet-active",
                modifierClass: e + "-",
                currentClass: e + "-current",
                totalClass: e + "-total",
                hiddenClass: e + "-hidden",
                progressbarFillClass: e + "-progressbar-fill",
                progressbarOppositeClass: e + "-progressbar-opposite",
                clickableClass: e + "-clickable",
                lockClass: e + "-lock",
                horizontalClass: e + "-horizontal",
                verticalClass: e + "-vertical",
                paginationDisabledClass: e + "-disabled",
              },
            }),
            (p.pagination = {
              el: null,
              $el: null,
              bullets: [],
            });
          let f,
            m = 0;
          function g() {
            return (
              !p.params.pagination.el ||
              !p.pagination.el ||
              !p.pagination.$el ||
              0 === p.pagination.$el.length
            );
          }
          function v(e, t) {
            var n = p.params.pagination["bulletActiveClass"];
            e[t]()
              .addClass(n + "-" + t)
              [t]()
              .addClass(n + `-${t}-` + t);
          }
          function i() {
            var t = p.rtl;
            const s = p.params.pagination;
            if (!g()) {
              var r = (p.virtual && p.params.virtual.enabled ? p.virtual : p)
                .slides.length;
              const d = p.pagination.$el;
              let a;
              var i = p.params.loop
                ? Math.ceil((r - 2 * p.loopedSlides) / p.params.slidesPerGroup)
                : p.snapGrid.length;
              if (
                (p.params.loop
                  ? ((a = Math.ceil(
                      (p.activeIndex - p.loopedSlides) / p.params.slidesPerGroup
                    )) >
                      r - 1 - 2 * p.loopedSlides &&
                      (a -= r - 2 * p.loopedSlides),
                    a > i - 1 && (a -= i),
                    a < 0 &&
                      "bullets" !== p.params.paginationType &&
                      (a = i + a))
                  : (a =
                      void 0 !== p.snapIndex
                        ? p.snapIndex
                        : p.activeIndex || 0),
                "bullets" === s.type &&
                  p.pagination.bullets &&
                  0 < p.pagination.bullets.length)
              ) {
                const c = p.pagination.bullets;
                let n, i, e;
                if (
                  (s.dynamicBullets &&
                    ((f = c
                      .eq(0)
                      [p.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    d.css(
                      p.isHorizontal() ? "width" : "height",
                      f * (s.dynamicMainBullets + 4) + "px"
                    ),
                    1 < s.dynamicMainBullets &&
                      void 0 !== p.previousIndex &&
                      ((m += a - (p.previousIndex - p.loopedSlides || 0)) >
                      s.dynamicMainBullets - 1
                        ? (m = s.dynamicMainBullets - 1)
                        : m < 0 && (m = 0)),
                    (n = Math.max(a - m, 0)),
                    (i = n + (Math.min(c.length, s.dynamicMainBullets) - 1)),
                    (e = (i + n) / 2)),
                  c.removeClass(
                    ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                      .map((e) => "" + s.bulletActiveClass + e)
                      .join(" ")
                  ),
                  1 < d.length)
                )
                  c.each((e) => {
                    const t = P(e);
                    e = t.index();
                    e === a && t.addClass(s.bulletActiveClass),
                      s.dynamicBullets &&
                        (e >= n &&
                          e <= i &&
                          t.addClass(s.bulletActiveClass + "-main"),
                        e === n && v(t, "prev"),
                        e === i && v(t, "next"));
                  });
                else {
                  const u = c.eq(a);
                  var r = u.index();
                  if ((u.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                    var o = c.eq(n),
                      l = c.eq(i);
                    for (let e = n; e <= i; e += 1)
                      c.eq(e).addClass(s.bulletActiveClass + "-main");
                    if (p.params.loop)
                      if (r >= c.length) {
                        for (let e = s.dynamicMainBullets; 0 <= e; --e)
                          c.eq(c.length - e).addClass(
                            s.bulletActiveClass + "-main"
                          );
                        c.eq(c.length - s.dynamicMainBullets - 1).addClass(
                          s.bulletActiveClass + "-prev"
                        );
                      } else v(o, "prev"), v(l, "next");
                    else v(o, "prev"), v(l, "next");
                  }
                }
                s.dynamicBullets &&
                  ((r = Math.min(c.length, s.dynamicMainBullets + 4)),
                  (o = (f * r - f) / 2 - e * f),
                  (l = t ? "right" : "left"),
                  c.css(p.isHorizontal() ? l : "top", o + "px"));
              }
              if (
                ("fraction" === s.type &&
                  (d
                    .find($(s.currentClass))
                    .text(s.formatFractionCurrent(a + 1)),
                  d.find($(s.totalClass)).text(s.formatFractionTotal(i))),
                "progressbar" === s.type)
              ) {
                let e;
                e = s.progressbarOpposite
                  ? p.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : p.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                r = (a + 1) / i;
                let t = 1,
                  n = 1;
                "horizontal" === e ? (t = r) : (n = r),
                  d
                    .find($(s.progressbarFillClass))
                    .transform(`translate3d(0,0,0) scaleX(${t}) scaleY(${n})`)
                    .transition(p.params.speed);
              }
              "custom" === s.type && s.renderCustom
                ? (d.html(s.renderCustom(p, a + 1, i)),
                  h("paginationRender", d[0]))
                : h("paginationUpdate", d[0]),
                p.params.watchOverflow &&
                  p.enabled &&
                  d[p.isLocked ? "addClass" : "removeClass"](s.lockClass);
            }
          }
          function a() {
            const i = p.params.pagination;
            if (!g()) {
              var e = (p.virtual && p.params.virtual.enabled ? p.virtual : p)
                .slides.length;
              const a = p.pagination.$el;
              let n = "";
              if ("bullets" === i.type) {
                let t = p.params.loop
                  ? Math.ceil(
                      (e - 2 * p.loopedSlides) / p.params.slidesPerGroup
                    )
                  : p.snapGrid.length;
                p.params.freeMode &&
                  p.params.freeMode.enabled &&
                  !p.params.loop &&
                  t > e &&
                  (t = e);
                for (let e = 0; e < t; e += 1)
                  i.renderBullet
                    ? (n += i.renderBullet.call(p, e, i.bulletClass))
                    : (n += `<${i.bulletElement} class="${i.bulletClass}"></${i.bulletElement}>`);
                a.html(n), (p.pagination.bullets = a.find($(i.bulletClass)));
              }
              "fraction" === i.type &&
                ((n = i.renderFraction
                  ? i.renderFraction.call(p, i.currentClass, i.totalClass)
                  : `<span class="${i.currentClass}"></span>` +
                    " / " +
                    `<span class="${i.totalClass}"></span>`),
                a.html(n)),
                "progressbar" === i.type &&
                  ((n = i.renderProgressbar
                    ? i.renderProgressbar.call(p, i.progressbarFillClass)
                    : `<span class="${i.progressbarFillClass}"></span>`),
                  a.html(n)),
                "custom" !== i.type &&
                  h("paginationRender", p.pagination.$el[0]);
            }
          }
          function s() {
            p.params.pagination = M(
              p,
              p.originalParams.pagination,
              p.params.pagination,
              {
                el: "swiper-pagination",
              }
            );
            const t = p.params.pagination;
            if (t.el) {
              let e = P(t.el);
              0 !== e.length &&
                (p.params.uniqueNavElements &&
                  "string" == typeof t.el &&
                  1 < e.length &&
                  1 < (e = p.$el.find(t.el)).length &&
                  (e = e.filter((e) => P(e).parents(".swiper")[0] === p.el)),
                "bullets" === t.type &&
                  t.clickable &&
                  e.addClass(t.clickableClass),
                e.addClass(t.modifierClass + t.type),
                e.addClass(
                  p.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (e.addClass("" + t.modifierClass + t.type + "-dynamic"),
                  (m = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  e.addClass(t.progressbarOppositeClass),
                t.clickable &&
                  e.on("click", $(t.bulletClass), function (e) {
                    e.preventDefault();
                    let t = P(this).index() * p.params.slidesPerGroup;
                    p.params.loop && (t += p.loopedSlides), p.slideTo(t);
                  }),
                Object.assign(p.pagination, {
                  $el: e,
                  el: e[0],
                }),
                p.enabled || e.addClass(t.lockClass));
            }
          }
          function r() {
            var e = p.params.pagination;
            if (!g()) {
              const t = p.pagination.$el;
              t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                t.removeClass(
                  p.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                p.pagination.bullets &&
                  p.pagination.bullets.removeClass &&
                  p.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", $(e.bulletClass));
            }
          }
          n("init", () => {
            !1 === p.params.pagination.enabled ? o() : (s(), a(), i());
          }),
            n("activeIndexChange", () => {
              (p.params.loop || void 0 === p.snapIndex) && i();
            }),
            n("snapIndexChange", () => {
              p.params.loop || i();
            }),
            n("slidesLengthChange", () => {
              p.params.loop && (a(), i());
            }),
            n("snapGridLengthChange", () => {
              p.params.loop || (a(), i());
            }),
            n("destroy", () => {
              r();
            }),
            n("enable disable", () => {
              const e = p.pagination["$el"];
              e &&
                e[p.enabled ? "removeClass" : "addClass"](
                  p.params.pagination.lockClass
                );
            }),
            n("lock unlock", () => {
              i();
            }),
            n("click", (e, t) => {
              t = t.target;
              const n = p.pagination["$el"];
              p.params.pagination.el &&
                p.params.pagination.hideOnClick &&
                n &&
                0 < n.length &&
                !P(t).hasClass(p.params.pagination.bulletClass) &&
                ((p.navigation &&
                  ((p.navigation.nextEl && t === p.navigation.nextEl) ||
                    (p.navigation.prevEl && t === p.navigation.prevEl))) ||
                  (!0 === n.hasClass(p.params.pagination.hiddenClass)
                    ? h("paginationShow")
                    : h("paginationHide"),
                  n.toggleClass(p.params.pagination.hiddenClass)));
            });
          const o = () => {
            p.$el.addClass(p.params.pagination.paginationDisabledClass),
              p.pagination.$el &&
                p.pagination.$el.addClass(
                  p.params.pagination.paginationDisabledClass
                ),
              r();
          };
          Object.assign(p.pagination, {
            enable: () => {
              p.$el.removeClass(p.params.pagination.paginationDisabledClass),
                p.pagination.$el &&
                  p.pagination.$el.removeClass(
                    p.params.pagination.paginationDisabledClass
                  ),
                s(),
                a(),
                i();
            },
            disable: o,
            render: a,
            update: i,
            init: s,
            destroy: r,
          });
        },
        function (e) {
          let { swiper: o, extendParams: t, on: n, emit: r } = e;
          const l = E();
          let d = !1,
            c = null,
            u = null,
            p,
            h,
            f,
            i;
          function a() {
            if (o.params.scrollbar.el && o.scrollbar.el) {
              var { scrollbar: n, rtlTranslate: i, progress: a } = o;
              const { $dragEl: s, $el: r } = n;
              n = o.params.scrollbar;
              let e = h,
                t = (f - h) * a;
              i
                ? 0 < (t = -t)
                  ? ((e = h - t), (t = 0))
                  : -t + h > f && (e = f + t)
                : t < 0
                ? ((e = h + t), (t = 0))
                : t + h > f && (e = f - t),
                o.isHorizontal()
                  ? (s.transform(`translate3d(${t}px, 0, 0)`),
                    (s[0].style.width = e + "px"))
                  : (s.transform(`translate3d(0px, ${t}px, 0)`),
                    (s[0].style.height = e + "px")),
                n.hide &&
                  (clearTimeout(c),
                  (r[0].style.opacity = 1),
                  (c = setTimeout(() => {
                    (r[0].style.opacity = 0), r.transition(400);
                  }, 1e3)));
            }
          }
          function s() {
            if (o.params.scrollbar.el && o.scrollbar.el) {
              const e = o["scrollbar"],
                { $dragEl: t, $el: n } = e;
              (t[0].style.width = ""),
                (t[0].style.height = ""),
                (f = o.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight),
                (i =
                  o.size /
                  (o.virtualSize +
                    o.params.slidesOffsetBefore -
                    (o.params.centeredSlides ? o.snapGrid[0] : 0))),
                (h =
                  "auto" === o.params.scrollbar.dragSize
                    ? f * i
                    : parseInt(o.params.scrollbar.dragSize, 10)),
                o.isHorizontal()
                  ? (t[0].style.width = h + "px")
                  : (t[0].style.height = h + "px"),
                1 <= i
                  ? (n[0].style.display = "none")
                  : (n[0].style.display = ""),
                o.params.scrollbar.hide && (n[0].style.opacity = 0),
                o.params.watchOverflow &&
                  o.enabled &&
                  e.$el[o.isLocked ? "addClass" : "removeClass"](
                    o.params.scrollbar.lockClass
                  );
            }
          }
          function m(e) {
            return o.isHorizontal()
              ? ("touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0]
                  : e
                ).clientX
              : ("touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0]
                  : e
                ).clientY;
          }
          function g(e) {
            var { scrollbar: t, rtlTranslate: n } = o;
            const i = t["$el"];
            let a;
            (a =
              (m(e) -
                i.offset()[o.isHorizontal() ? "left" : "top"] -
                (null !== p ? p : h / 2)) /
              (f - h)),
              (a = Math.max(Math.min(a, 1), 0)),
              n && (a = 1 - a);
            t = o.minTranslate() + (o.maxTranslate() - o.minTranslate()) * a;
            o.updateProgress(t),
              o.setTranslate(t),
              o.updateActiveIndex(),
              o.updateSlidesClasses();
          }
          function v(e) {
            var t = o.params.scrollbar;
            const { scrollbar: n, $wrapperEl: i } = o,
              { $el: a, $dragEl: s } = n;
            (d = !0),
              (p =
                e.target === s[0] || e.target === s
                  ? m(e) -
                    e.target.getBoundingClientRect()[
                      o.isHorizontal() ? "left" : "top"
                    ]
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              i.transition(100),
              s.transition(100),
              g(e),
              clearTimeout(u),
              a.transition(0),
              t.hide && a.css("opacity", 1),
              o.params.cssMode && o.$wrapperEl.css("scroll-snap-type", "none"),
              r("scrollbarDragStart", e);
          }
          function y(e) {
            const { scrollbar: t, $wrapperEl: n } = o,
              { $el: i, $dragEl: a } = t;
            d &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              g(e),
              n.transition(0),
              i.transition(0),
              a.transition(0),
              r("scrollbarDragMove", e));
          }
          function b(e) {
            var t = o.params.scrollbar;
            const { scrollbar: n, $wrapperEl: i } = o,
              a = n["$el"];
            d &&
              ((d = !1),
              o.params.cssMode &&
                (o.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
              t.hide &&
                (clearTimeout(u),
                (u = S(() => {
                  a.css("opacity", 0), a.transition(400);
                }, 1e3))),
              r("scrollbarDragEnd", e),
              t.snapOnRelease && o.slideToClosest());
          }
          function w(e) {
            var {
                scrollbar: t,
                touchEventsTouch: n,
                touchEventsDesktop: i,
                params: a,
                support: s,
              } = o,
              t = t.$el;
            if (t) {
              const r = t[0];
              (t = !(!s.passiveListener || !a.passiveListeners) && {
                passive: !1,
                capture: !1,
              }),
                (a = !(!s.passiveListener || !a.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                });
              r &&
                ((e = "on" === e ? "addEventListener" : "removeEventListener"),
                s.touch
                  ? (r[e](n.start, v, t), r[e](n.move, y, t), r[e](n.end, b, a))
                  : (r[e](i.start, v, t),
                    l[e](i.move, y, t),
                    l[e](i.end, b, a)));
            }
          }
          function x() {
            const { scrollbar: n, $el: i } = o;
            o.params.scrollbar = M(
              o,
              o.originalParams.scrollbar,
              o.params.scrollbar,
              {
                el: "swiper-scrollbar",
              }
            );
            var a = o.params.scrollbar;
            if (a.el) {
              let e = P(a.el),
                t =
                  ((e =
                    o.params.uniqueNavElements &&
                    "string" == typeof a.el &&
                    1 < e.length &&
                    1 === i.find(a.el).length
                      ? i.find(a.el)
                      : e).addClass(
                    o.isHorizontal() ? a.horizontalClass : a.verticalClass
                  ),
                  e.find("." + o.params.scrollbar.dragClass));
              0 === t.length &&
                ((t = P(`<div class="${o.params.scrollbar.dragClass}"></div>`)),
                e.append(t)),
                Object.assign(n, {
                  $el: e,
                  el: e[0],
                  $dragEl: t,
                  dragEl: t[0],
                }),
                a.draggable &&
                  o.params.scrollbar.el &&
                  o.scrollbar.el &&
                  w("on"),
                e &&
                  e[o.enabled ? "removeClass" : "addClass"](
                    o.params.scrollbar.lockClass
                  );
            }
          }
          function C() {
            var e = o.params.scrollbar;
            const t = o.scrollbar.$el;
            t &&
              t.removeClass(
                o.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              o.params.scrollbar.el && o.scrollbar.el && w("off");
          }
          t({
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
              scrollbarDisabledClass: "swiper-scrollbar-disabled",
              horizontalClass: "swiper-scrollbar-horizontal",
              verticalClass: "swiper-scrollbar-vertical",
            },
          }),
            (o.scrollbar = {
              el: null,
              dragEl: null,
              $el: null,
              $dragEl: null,
            }),
            n("init", () => {
              !1 === o.params.scrollbar.enabled ? T() : (x(), s(), a());
            }),
            n("update resize observerUpdate lock unlock", () => {
              s();
            }),
            n("setTranslate", () => {
              a();
            }),
            n("setTransition", (e, t) => {
              (t = t),
                o.params.scrollbar.el &&
                  o.scrollbar.el &&
                  o.scrollbar.$dragEl.transition(t);
            }),
            n("enable disable", () => {
              const e = o.scrollbar["$el"];
              e &&
                e[o.enabled ? "removeClass" : "addClass"](
                  o.params.scrollbar.lockClass
                );
            }),
            n("destroy", () => {
              C();
            });
          const T = () => {
            o.$el.addClass(o.params.scrollbar.scrollbarDisabledClass),
              o.scrollbar.$el &&
                o.scrollbar.$el.addClass(
                  o.params.scrollbar.scrollbarDisabledClass
                ),
              C();
          };
          Object.assign(o.scrollbar, {
            enable: () => {
              o.$el.removeClass(o.params.scrollbar.scrollbarDisabledClass),
                o.scrollbar.$el &&
                  o.scrollbar.$el.removeClass(
                    o.params.scrollbar.scrollbarDisabledClass
                  ),
                x(),
                s(),
                a();
            },
            disable: T,
            updateSize: s,
            setTranslate: a,
            init: x,
            destroy: C,
          });
        },
        function (e) {
          let { swiper: l, extendParams: t, on: n } = e;
          t({
            parallax: {
              enabled: !1,
            },
          });
          const s = (e, t) => {
              var n = l["rtl"];
              const i = P(e);
              (e = n ? -1 : 1), (n = i.attr("data-swiper-parallax") || "0");
              let a = i.attr("data-swiper-parallax-x"),
                s = i.attr("data-swiper-parallax-y");
              var r = i.attr("data-swiper-parallax-scale"),
                o = i.attr("data-swiper-parallax-opacity");
              a || s
                ? ((a = a || "0"), (s = s || "0"))
                : l.isHorizontal()
                ? ((a = n), (s = "0"))
                : ((s = n), (a = "0")),
                (a =
                  0 <= a.indexOf("%")
                    ? parseInt(a, 10) * t * e + "%"
                    : a * t * e + "px"),
                (s =
                  0 <= s.indexOf("%")
                    ? parseInt(s, 10) * t + "%"
                    : s * t + "px"),
                null != o &&
                  ((n = o - (o - 1) * (1 - Math.abs(t))),
                  (i[0].style.opacity = n)),
                null == r
                  ? i.transform(`translate3d(${a}, ${s}, 0px)`)
                  : ((e = r - (r - 1) * (1 - Math.abs(t))),
                    i.transform(`translate3d(${a}, ${s}, 0px) scale(${e})`));
            },
            i = () => {
              const { $el: e, slides: t, progress: i, snapGrid: a } = l;
              e
                .children(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each((e) => {
                  s(e, i);
                }),
                t.each((e, t) => {
                  let n = e.progress;
                  1 < l.params.slidesPerGroup &&
                    "auto" !== l.params.slidesPerView &&
                    (n += Math.ceil(t / 2) - i * (a.length - 1)),
                    (n = Math.min(Math.max(n, -1), 1)),
                    P(e)
                      .find(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                      )
                      .each((e) => {
                        s(e, n);
                      });
                });
            };
          n("beforeInit", () => {
            l.params.parallax.enabled &&
              ((l.params.watchSlidesProgress = !0),
              (l.originalParams.watchSlidesProgress = !0));
          }),
            n("init", () => {
              l.params.parallax.enabled && i();
            }),
            n("setTranslate", () => {
              l.params.parallax.enabled && i();
            }),
            n("setTransition", (e, t) => {
              if (l.params.parallax.enabled) {
                var i = t;
                void 0 === i && (i = l.params.speed);
                const n = l["$el"];
                n.find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                ).each((e) => {
                  const t = P(e);
                  let n =
                    parseInt(t.attr("data-swiper-parallax-duration"), 10) || i;
                  0 === i && (n = 0), t.transition(n);
                });
              }
            });
        },
        function (e) {
          let { swiper: u, extendParams: t, on: n, emit: i } = e;
          const p = L();
          t({
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          }),
            (u.zoom = {
              enabled: !1,
            });
          let h = 1,
            s = !1,
            a,
            r,
            o;
          const f = {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3,
            },
            m = {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {},
            },
            l = {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0,
            };
          let d = 1;
          function c(e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX,
              n = e.targetTouches[0].pageY,
              i = e.targetTouches[1].pageX,
              e = e.targetTouches[1].pageY;
            return Math.sqrt((i - t) ** 2 + (e - n) ** 2);
          }
          function g(e) {
            var t = u.support,
              n = u.params.zoom;
            if (((r = !1), (o = !1), !t.gestures)) {
              if (
                "touchstart" !== e.type ||
                ("touchstart" === e.type && e.targetTouches.length < 2)
              )
                return;
              (r = !0), (f.scaleStart = c(e));
            }
            (f.$slideEl && f.$slideEl.length) ||
            ((f.$slideEl = P(e.target).closest("." + u.params.slideClass)),
            0 === f.$slideEl.length &&
              (f.$slideEl = u.slides.eq(u.activeIndex)),
            (f.$imageEl = f.$slideEl
              .find("." + n.containerClass)
              .eq(0)
              .find("picture, img, svg, canvas, .swiper-zoom-target")
              .eq(0)),
            (f.$imageWrapEl = f.$imageEl.parent("." + n.containerClass)),
            (f.maxRatio =
              f.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio),
            0 !== f.$imageWrapEl.length)
              ? (f.$imageEl && f.$imageEl.transition(0), (s = !0))
              : (f.$imageEl = void 0);
          }
          function v(e) {
            var t = u.support,
              n = u.params.zoom;
            const i = u.zoom;
            if (!t.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              (o = !0), (f.scaleMove = c(e));
            }
            f.$imageEl && 0 !== f.$imageEl.length
              ? (t.gestures
                  ? (i.scale = e.scale * h)
                  : (i.scale = (f.scaleMove / f.scaleStart) * h),
                i.scale > f.maxRatio &&
                  (i.scale =
                    f.maxRatio - 1 + (i.scale - f.maxRatio + 1) ** 0.5),
                i.scale < n.minRatio &&
                  (i.scale =
                    n.minRatio + 1 - (n.minRatio - i.scale + 1) ** 0.5),
                f.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
              : "gesturechange" === e.type && g(e);
          }
          function y(e) {
            var t = u.device,
              n = u.support,
              i = u.params.zoom;
            const a = u.zoom;
            if (!n.gestures) {
              if (!r || !o) return;
              if (
                "touchend" !== e.type ||
                ("touchend" === e.type &&
                  e.changedTouches.length < 2 &&
                  !t.android)
              )
                return;
              (r = !1), (o = !1);
            }
            f.$imageEl &&
              0 !== f.$imageEl.length &&
              ((a.scale = Math.max(Math.min(a.scale, f.maxRatio), i.minRatio)),
              f.$imageEl
                .transition(u.params.speed)
                .transform(`translate3d(0,0,0) scale(${a.scale})`),
              (h = a.scale),
              (s = !1),
              1 === a.scale && (f.$slideEl = void 0));
          }
          function b(e) {
            var t = u.zoom;
            if (
              f.$imageEl &&
              0 !== f.$imageEl.length &&
              ((u.allowClick = !1), m.isTouched && f.$slideEl)
            ) {
              m.isMoved ||
                ((m.width = f.$imageEl[0].offsetWidth),
                (m.height = f.$imageEl[0].offsetHeight),
                (m.startX = A(f.$imageWrapEl[0], "x") || 0),
                (m.startY = A(f.$imageWrapEl[0], "y") || 0),
                (f.slideWidth = f.$slideEl[0].offsetWidth),
                (f.slideHeight = f.$slideEl[0].offsetHeight),
                f.$imageWrapEl.transition(0));
              var n = m.width * t.scale,
                t = m.height * t.scale;
              if (!(n < f.slideWidth && t < f.slideHeight)) {
                if (
                  ((m.minX = Math.min(f.slideWidth / 2 - n / 2, 0)),
                  (m.maxX = -m.minX),
                  (m.minY = Math.min(f.slideHeight / 2 - t / 2, 0)),
                  (m.maxY = -m.minY),
                  (m.touchesCurrent.x = (
                    "touchmove" === e.type ? e.targetTouches[0] : e
                  ).pageX),
                  (m.touchesCurrent.y = (
                    "touchmove" === e.type ? e.targetTouches[0] : e
                  ).pageY),
                  !m.isMoved && !s)
                ) {
                  if (
                    u.isHorizontal() &&
                    ((Math.floor(m.minX) === Math.floor(m.startX) &&
                      m.touchesCurrent.x < m.touchesStart.x) ||
                      (Math.floor(m.maxX) === Math.floor(m.startX) &&
                        m.touchesCurrent.x > m.touchesStart.x))
                  )
                    return void (m.isTouched = !1);
                  if (
                    !u.isHorizontal() &&
                    ((Math.floor(m.minY) === Math.floor(m.startY) &&
                      m.touchesCurrent.y < m.touchesStart.y) ||
                      (Math.floor(m.maxY) === Math.floor(m.startY) &&
                        m.touchesCurrent.y > m.touchesStart.y))
                  )
                    return void (m.isTouched = !1);
                }
                e.cancelable && e.preventDefault(),
                  e.stopPropagation(),
                  (m.isMoved = !0),
                  (m.currentX =
                    m.touchesCurrent.x - m.touchesStart.x + m.startX),
                  (m.currentY =
                    m.touchesCurrent.y - m.touchesStart.y + m.startY),
                  m.currentX < m.minX &&
                    (m.currentX =
                      m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8),
                  m.currentX > m.maxX &&
                    (m.currentX =
                      m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8),
                  m.currentY < m.minY &&
                    (m.currentY =
                      m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8),
                  m.currentY > m.maxY &&
                    (m.currentY =
                      m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8),
                  l.prevPositionX || (l.prevPositionX = m.touchesCurrent.x),
                  l.prevPositionY || (l.prevPositionY = m.touchesCurrent.y),
                  l.prevTime || (l.prevTime = Date.now()),
                  (l.x =
                    (m.touchesCurrent.x - l.prevPositionX) /
                    (Date.now() - l.prevTime) /
                    2),
                  (l.y =
                    (m.touchesCurrent.y - l.prevPositionY) /
                    (Date.now() - l.prevTime) /
                    2),
                  Math.abs(m.touchesCurrent.x - l.prevPositionX) < 2 &&
                    (l.x = 0),
                  Math.abs(m.touchesCurrent.y - l.prevPositionY) < 2 &&
                    (l.y = 0),
                  (l.prevPositionX = m.touchesCurrent.x),
                  (l.prevPositionY = m.touchesCurrent.y),
                  (l.prevTime = Date.now()),
                  f.$imageWrapEl.transform(
                    `translate3d(${m.currentX}px, ${m.currentY}px,0)`
                  );
              }
            }
          }
          function w() {
            const e = u.zoom;
            f.$slideEl &&
              u.previousIndex !== u.activeIndex &&
              (f.$imageEl &&
                f.$imageEl.transform("translate3d(0,0,0) scale(1)"),
              f.$imageWrapEl && f.$imageWrapEl.transform("translate3d(0,0,0)"),
              (e.scale = 1),
              (h = 1),
              (f.$slideEl = void 0),
              (f.$imageEl = void 0),
              (f.$imageWrapEl = void 0));
          }
          function x(a) {
            const s = u.zoom;
            var r,
              o,
              l,
              d,
              c = u.params.zoom;
            if (
              (f.$slideEl ||
                (a &&
                  a.target &&
                  (f.$slideEl = P(a.target).closest("." + u.params.slideClass)),
                f.$slideEl ||
                  (u.params.virtual && u.params.virtual.enabled && u.virtual
                    ? (f.$slideEl = u.$wrapperEl.children(
                        "." + u.params.slideActiveClass
                      ))
                    : (f.$slideEl = u.slides.eq(u.activeIndex))),
                (f.$imageEl = f.$slideEl
                  .find("." + c.containerClass)
                  .eq(0)
                  .find("picture, img, svg, canvas, .swiper-zoom-target")
                  .eq(0)),
                (f.$imageWrapEl = f.$imageEl.parent("." + c.containerClass))),
              f.$imageEl &&
                0 !== f.$imageEl.length &&
                f.$imageWrapEl &&
                0 !== f.$imageWrapEl.length)
            ) {
              u.params.cssMode &&
                ((u.wrapperEl.style.overflow = "hidden"),
                (u.wrapperEl.style.touchAction = "none")),
                f.$slideEl.addClass("" + c.zoomedSlideClass);
              let e, t;
              let n, i;
              (t =
                void 0 === m.touchesStart.x && a
                  ? ((e = ("touchend" === a.type ? a.changedTouches[0] : a)
                      .pageX),
                    ("touchend" === a.type ? a.changedTouches[0] : a).pageY)
                  : ((e = m.touchesStart.x), m.touchesStart.y)),
                (s.scale =
                  f.$imageWrapEl.attr("data-swiper-zoom") || c.maxRatio),
                (h = f.$imageWrapEl.attr("data-swiper-zoom") || c.maxRatio),
                a
                  ? ((c = f.$slideEl[0].offsetWidth),
                    (a = f.$slideEl[0].offsetHeight),
                    (r = f.$slideEl.offset().left + p.scrollX),
                    (o = f.$slideEl.offset().top + p.scrollY),
                    (r = r + c / 2 - e),
                    (o = o + a / 2 - t),
                    (l = f.$imageEl[0].offsetWidth),
                    (d = f.$imageEl[0].offsetHeight),
                    (l = l * s.scale),
                    (d = d * s.scale),
                    (l = -(c = Math.min(c / 2 - l / 2, 0))),
                    (d = -(a = Math.min(a / 2 - d / 2, 0))),
                    (n = r * s.scale),
                    (i = o * s.scale),
                    (n = n < c ? c : n) > l && (n = l),
                    (i = i < a ? a : i) > d && (i = d))
                  : ((n = 0), (i = 0)),
                f.$imageWrapEl
                  .transition(300)
                  .transform(`translate3d(${n}px, ${i}px,0)`),
                f.$imageEl
                  .transition(300)
                  .transform(`translate3d(0,0,0) scale(${s.scale})`);
            }
          }
          function C() {
            const e = u.zoom;
            var t = u.params.zoom;
            f.$slideEl ||
              (u.params.virtual && u.params.virtual.enabled && u.virtual
                ? (f.$slideEl = u.$wrapperEl.children(
                    "." + u.params.slideActiveClass
                  ))
                : (f.$slideEl = u.slides.eq(u.activeIndex)),
              (f.$imageEl = f.$slideEl
                .find("." + t.containerClass)
                .eq(0)
                .find("picture, img, svg, canvas, .swiper-zoom-target")
                .eq(0)),
              (f.$imageWrapEl = f.$imageEl.parent("." + t.containerClass))),
              f.$imageEl &&
                0 !== f.$imageEl.length &&
                f.$imageWrapEl &&
                0 !== f.$imageWrapEl.length &&
                (u.params.cssMode &&
                  ((u.wrapperEl.style.overflow = ""),
                  (u.wrapperEl.style.touchAction = "")),
                (e.scale = 1),
                (h = 1),
                f.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                f.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(1)"),
                f.$slideEl.removeClass("" + t.zoomedSlideClass),
                (f.$slideEl = void 0));
          }
          function T(e) {
            var t = u.zoom;
            t.scale && 1 !== t.scale ? C() : x(e);
          }
          function E() {
            var e = u.support;
            return {
              passiveListener: !(
                "touchstart" !== u.touchEvents.start ||
                !e.passiveListener ||
                !u.params.passiveListeners
              ) && {
                passive: !0,
                capture: !1,
              },
              activeListenerWithCapture: !e.passiveListener || {
                passive: !1,
                capture: !0,
              },
            };
          }
          function S() {
            return "." + u.params.slideClass;
          }
          function M(e) {
            var t = E()["passiveListener"],
              n = S();
            u.$wrapperEl[e]("gesturestart", n, g, t),
              u.$wrapperEl[e]("gesturechange", n, v, t),
              u.$wrapperEl[e]("gestureend", n, y, t);
          }
          function $() {
            a || ((a = !0), M("on"));
          }
          function k() {
            a && ((a = !1), M("off"));
          }
          function I() {
            const e = u.zoom;
            var t, n, i, a;
            e.enabled ||
              ((e.enabled = !0),
              (t = u.support),
              ({ passiveListener: n, activeListenerWithCapture: i } = E()),
              (a = S()),
              t.gestures
                ? (u.$wrapperEl.on(u.touchEvents.start, $, n),
                  u.$wrapperEl.on(u.touchEvents.end, k, n))
                : "touchstart" === u.touchEvents.start &&
                  (u.$wrapperEl.on(u.touchEvents.start, a, g, n),
                  u.$wrapperEl.on(u.touchEvents.move, a, v, i),
                  u.$wrapperEl.on(u.touchEvents.end, a, y, n),
                  u.touchEvents.cancel &&
                    u.$wrapperEl.on(u.touchEvents.cancel, a, y, n)),
              u.$wrapperEl.on(
                u.touchEvents.move,
                "." + u.params.zoom.containerClass,
                b,
                i
              ));
          }
          function D() {
            const e = u.zoom;
            var t, n, i, a;
            e.enabled &&
              ((t = u.support),
              ({ passiveListener: n, activeListenerWithCapture: i } =
                ((e.enabled = !1), E())),
              (a = S()),
              t.gestures
                ? (u.$wrapperEl.off(u.touchEvents.start, $, n),
                  u.$wrapperEl.off(u.touchEvents.end, k, n))
                : "touchstart" === u.touchEvents.start &&
                  (u.$wrapperEl.off(u.touchEvents.start, a, g, n),
                  u.$wrapperEl.off(u.touchEvents.move, a, v, i),
                  u.$wrapperEl.off(u.touchEvents.end, a, y, n),
                  u.touchEvents.cancel &&
                    u.$wrapperEl.off(u.touchEvents.cancel, a, y, n)),
              u.$wrapperEl.off(
                u.touchEvents.move,
                "." + u.params.zoom.containerClass,
                b,
                i
              ));
          }
          Object.defineProperty(u.zoom, "scale", {
            get() {
              return d;
            },
            set(e) {
              var t, n;
              d !== e &&
                ((t = f.$imageEl ? f.$imageEl[0] : void 0),
                (n = f.$slideEl ? f.$slideEl[0] : void 0),
                i("zoomChange", e, t, n)),
                (d = e);
            },
          }),
            n("init", () => {
              u.params.zoom.enabled && I();
            }),
            n("destroy", () => {
              D();
            }),
            n("touchStart", (e, t) => {
              var n;
              u.zoom.enabled &&
                ((t = t),
                (n = u.device),
                f.$imageEl &&
                  0 !== f.$imageEl.length &&
                  !m.isTouched &&
                  (n.android && t.cancelable && t.preventDefault(),
                  (m.isTouched = !0),
                  (m.touchesStart.x = (
                    "touchstart" === t.type ? t.targetTouches[0] : t
                  ).pageX),
                  (m.touchesStart.y = (
                    "touchstart" === t.type ? t.targetTouches[0] : t
                  ).pageY)));
            }),
            n("touchEnd", (e, t) => {
              if (u.zoom.enabled) {
                var n = u.zoom;
                if (f.$imageEl && 0 !== f.$imageEl.length) {
                  if (!m.isTouched || !m.isMoved)
                    return void ((m.isTouched = !1), (m.isMoved = !1));
                  (m.isTouched = !1), (m.isMoved = !1);
                  let e = 300,
                    t = 300;
                  var i = l.x * e,
                    i = m.currentX + i,
                    a = l.y * t,
                    a = m.currentY + a,
                    s =
                      (0 !== l.x && (e = Math.abs((i - m.currentX) / l.x)),
                      0 !== l.y && (t = Math.abs((a - m.currentY) / l.y)),
                      Math.max(e, t)),
                    i = ((m.currentX = i), (m.currentY = a), m.width * n.scale),
                    a = m.height * n.scale;
                  (m.minX = Math.min(f.slideWidth / 2 - i / 2, 0)),
                    (m.maxX = -m.minX),
                    (m.minY = Math.min(f.slideHeight / 2 - a / 2, 0)),
                    (m.maxY = -m.minY),
                    (m.currentX = Math.max(
                      Math.min(m.currentX, m.maxX),
                      m.minX
                    )),
                    (m.currentY = Math.max(
                      Math.min(m.currentY, m.maxY),
                      m.minY
                    )),
                    f.$imageWrapEl
                      .transition(s)
                      .transform(
                        `translate3d(${m.currentX}px, ${m.currentY}px,0)`
                      );
                }
              }
            }),
            n("doubleTap", (e, t) => {
              !u.animating &&
                u.params.zoom.enabled &&
                u.zoom.enabled &&
                u.params.zoom.toggle &&
                T(t);
            }),
            n("transitionEnd", () => {
              u.zoom.enabled && u.params.zoom.enabled && w();
            }),
            n("slideChange", () => {
              u.zoom.enabled &&
                u.params.zoom.enabled &&
                u.params.cssMode &&
                w();
            }),
            Object.assign(u.zoom, {
              enable: I,
              disable: D,
              in: x,
              out: C,
              toggle: T,
            });
        },
        function (e) {
          let { swiper: p, extendParams: t, on: n, emit: h } = e,
            d =
              (t({
                lazy: {
                  checkInView: !1,
                  enabled: !1,
                  loadPrevNext: !1,
                  loadPrevNextAmount: 1,
                  loadOnTransitionStart: !1,
                  scrollingElement: "",
                  elementClass: "swiper-lazy",
                  loadingClass: "swiper-lazy-loading",
                  loadedClass: "swiper-lazy-loaded",
                  preloaderClass: "swiper-lazy-preloader",
                },
              }),
              !(p.lazy = {})),
            u = !1;
          function f(e, d) {
            void 0 === d && (d = !0);
            const c = p.params.lazy;
            if (void 0 !== e && 0 !== p.slides.length) {
              const u =
                  p.virtual && p.params.virtual.enabled
                    ? p.$wrapperEl.children(
                        `.${p.params.slideClass}[data-swiper-slide-index="${e}"]`
                      )
                    : p.slides.eq(e),
                t = u.find(
                  `.${c.elementClass}:not(.${c.loadedClass}):not(.${c.loadingClass})`
                );
              !u.hasClass(c.elementClass) ||
                u.hasClass(c.loadedClass) ||
                u.hasClass(c.loadingClass) ||
                t.push(u[0]),
                0 !== t.length &&
                  t.each((e) => {
                    const i = P(e),
                      a =
                        (i.addClass(c.loadingClass), i.attr("data-background")),
                      s = i.attr("data-src"),
                      r = i.attr("data-srcset"),
                      o = i.attr("data-sizes"),
                      l = i.parent("picture");
                    p.loadImage(i[0], s || a, r, o, !1, () => {
                      if (
                        void 0 !== p &&
                        null !== p &&
                        p &&
                        (!p || p.params) &&
                        !p.destroyed
                      ) {
                        if (
                          (a
                            ? (i.css("background-image", `url("${a}")`),
                              i.removeAttr("data-background"))
                            : (r &&
                                (i.attr("srcset", r),
                                i.removeAttr("data-srcset")),
                              o &&
                                (i.attr("sizes", o),
                                i.removeAttr("data-sizes")),
                              l.length &&
                                l.children("source").each((e) => {
                                  const t = P(e);
                                  t.attr("data-srcset") &&
                                    (t.attr("srcset", t.attr("data-srcset")),
                                    t.removeAttr("data-srcset"));
                                }),
                              s &&
                                (i.attr("src", s), i.removeAttr("data-src"))),
                          i.addClass(c.loadedClass).removeClass(c.loadingClass),
                          u.find("." + c.preloaderClass).remove(),
                          p.params.loop && d)
                        ) {
                          var e = u.attr("data-swiper-slide-index");
                          if (u.hasClass(p.params.slideDuplicateClass)) {
                            const t = p.$wrapperEl.children(
                              `[data-swiper-slide-index="${e}"]:not(.${p.params.slideDuplicateClass})`
                            );
                            f(t.index(), !1);
                          } else {
                            const n = p.$wrapperEl.children(
                              `.${p.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                            );
                            f(n.index(), !1);
                          }
                        }
                        h("lazyImageReady", u[0], i[0]),
                          p.params.autoHeight && p.updateAutoHeight();
                      }
                    }),
                      h("lazyImageLoad", u[0], i[0]);
                  });
            }
          }
          function c() {
            const { $wrapperEl: t, params: n, slides: i, activeIndex: a } = p,
              s = p.virtual && n.virtual.enabled;
            var r = n.lazy;
            let o = n.slidesPerView;
            function l(e) {
              if (s) {
                if (
                  t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`)
                    .length
                )
                  return 1;
              } else if (i[e]) return 1;
            }
            function e(e) {
              return s ? P(e).attr("data-swiper-slide-index") : P(e).index();
            }
            if (
              ("auto" === o && (o = 0),
              (u = u || !0),
              p.params.watchSlidesProgress)
            )
              t.children("." + n.slideVisibleClass).each((e) => {
                f(s ? P(e).attr("data-swiper-slide-index") : P(e).index());
              });
            else if (1 < o) for (let e = a; e < a + o; e += 1) l(e) && f(e);
            else f(a);
            if (r.loadPrevNext)
              if (1 < o || (r.loadPrevNextAmount && 1 < r.loadPrevNextAmount)) {
                var r = r.loadPrevNextAmount,
                  d = Math.ceil(o),
                  c = Math.min(a + d + Math.max(r, d), i.length),
                  r = Math.max(a - Math.max(d, r), 0);
                for (let e = a + d; e < c; e += 1) l(e) && f(e);
                for (let e = r; e < a; e += 1) l(e) && f(e);
              } else {
                (d = t.children("." + n.slideNextClass)),
                  (r =
                    (0 < d.length && f(e(d)),
                    t.children("." + n.slidePrevClass)));
                0 < r.length && f(e(r));
              }
          }
          function m() {
            var e = L();
            if (p && !p.destroyed) {
              const o = p.params.lazy.scrollingElement
                ? P(p.params.lazy.scrollingElement)
                : P(e);
              var n = o[0] === e,
                i = n ? e.innerWidth : o[0].offsetWidth,
                a = n ? e.innerHeight : o[0].offsetHeight;
              const l = p.$el.offset();
              n = p["rtlTranslate"];
              let t = !1;
              n && (l.left -= p.$el[0].scrollLeft);
              var s = [
                [l.left, l.top],
                [l.left + p.width, l.top],
                [l.left, l.top + p.height],
                [l.left + p.width, l.top + p.height],
              ];
              for (let e = 0; e < s.length; e += 1) {
                var r = s[e];
                0 <= r[0] &&
                  r[0] <= i &&
                  0 <= r[1] &&
                  r[1] <= a &&
                  ((0 === r[0] && 0 === r[1]) || (t = !0));
              }
              e = !(
                "touchstart" !== p.touchEvents.start ||
                !p.support.passiveListener ||
                !p.params.passiveListeners
              ) && {
                passive: !0,
                capture: !1,
              };
              t
                ? (c(), o.off("scroll", m, e))
                : d || ((d = !0), o.on("scroll", m, e));
            }
          }
          n("beforeInit", () => {
            p.params.lazy.enabled &&
              p.params.preloadImages &&
              (p.params.preloadImages = !1);
          }),
            n("init", () => {
              p.params.lazy.enabled && (p.params.lazy.checkInView ? m : c)();
            }),
            n("scroll", () => {
              p.params.freeMode &&
                p.params.freeMode.enabled &&
                !p.params.freeMode.sticky &&
                c();
            }),
            n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
              p.params.lazy.enabled && (p.params.lazy.checkInView ? m : c)();
            }),
            n("transitionStart", () => {
              !p.params.lazy.enabled ||
                (!p.params.lazy.loadOnTransitionStart &&
                  (p.params.lazy.loadOnTransitionStart || u)) ||
                (p.params.lazy.checkInView ? m : c)();
            }),
            n("transitionEnd", () => {
              p.params.lazy.enabled &&
                !p.params.lazy.loadOnTransitionStart &&
                (p.params.lazy.checkInView ? m : c)();
            }),
            n("slideChange", () => {
              var {
                lazy: e,
                cssMode: t,
                watchSlidesProgress: n,
                touchReleaseOnEdges: i,
                resistanceRatio: a,
              } = p.params;
              e.enabled && (t || (n && (i || 0 === a))) && c();
            }),
            n("destroy", () => {
              p.$el &&
                p.$el
                  .find("." + p.params.lazy.loadingClass)
                  .removeClass(p.params.lazy.loadingClass);
            }),
            Object.assign(p.lazy, {
              load: c,
              loadInSlide: f,
            });
        },
        function (e) {
          let { swiper: o, extendParams: t, on: n } = e;
          function l(e, t) {
            const n = (function () {
              let n, i, a;
              return (e, t) => {
                for (i = -1, n = e.length; 1 < n - i; )
                  e[(a = (n + i) >> 1)] <= t ? (i = a) : (n = a);
                return n;
              };
            })();
            (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
            let i, a;
            return (
              (this.interpolate = function (e) {
                return e
                  ? ((a = n(this.x, e)),
                    (i = a - 1),
                    ((e - this.x[i]) * (this.y[a] - this.y[i])) /
                      (this.x[a] - this.x[i]) +
                      this.y[i])
                  : 0;
              }),
              this
            );
          }
          function i() {
            o.controller.control &&
              o.controller.spline &&
              ((o.controller.spline = void 0), delete o.controller.spline);
          }
          t({
            controller: {
              control: void 0,
              inverse: !1,
              by: "slide",
            },
          }),
            (o.controller = {
              control: void 0,
            }),
            n("beforeInit", () => {
              o.controller.control = o.params.controller.control;
            }),
            n("update", () => {
              i();
            }),
            n("resize", () => {
              i();
            }),
            n("observerUpdate", () => {
              i();
            }),
            n("setTranslate", (e, t, n) => {
              o.controller.control && o.controller.setTranslate(t, n);
            }),
            n("setTransition", (e, t, n) => {
              o.controller.control && o.controller.setTransition(t, n);
            }),
            Object.assign(o.controller, {
              setTranslate: function (e, t) {
                var n = o.controller.control;
                let i, a;
                var s = o.constructor;
                function r(e) {
                  var t,
                    n = o.rtlTranslate ? -o.translate : o.translate;
                  "slide" === o.params.controller.by &&
                    ((t = e),
                    o.controller.spline ||
                      (o.controller.spline = o.params.loop
                        ? new l(o.slidesGrid, t.slidesGrid)
                        : new l(o.snapGrid, t.snapGrid)),
                    (a = -o.controller.spline.interpolate(-n))),
                    (a && "container" !== o.params.controller.by) ||
                      ((i =
                        (e.maxTranslate() - e.minTranslate()) /
                        (o.maxTranslate() - o.minTranslate())),
                      (a = (n - o.minTranslate()) * i + e.minTranslate())),
                    o.params.controller.inverse && (a = e.maxTranslate() - a),
                    e.updateProgress(a),
                    e.setTranslate(a, o),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                }
                if (Array.isArray(n))
                  for (let e = 0; e < n.length; e += 1)
                    n[e] !== t && n[e] instanceof s && r(n[e]);
                else n instanceof s && t !== n && r(n);
              },
              setTransition: function (t, e) {
                var n = o.constructor;
                const i = o.controller.control;
                let a;
                function s(e) {
                  e.setTransition(t, o),
                    0 !== t &&
                      (e.transitionStart(),
                      e.params.autoHeight &&
                        S(() => {
                          e.updateAutoHeight();
                        }),
                      e.$wrapperEl.transitionEnd(() => {
                        i &&
                          (e.params.loop &&
                            "slide" === o.params.controller.by &&
                            e.loopFix(),
                          e.transitionEnd());
                      }));
                }
                if (Array.isArray(i))
                  for (a = 0; a < i.length; a += 1)
                    i[a] !== e && i[a] instanceof n && s(i[a]);
                else i instanceof n && e !== i && s(i);
              },
            });
        },
        function (e) {
          let { swiper: r, extendParams: t, on: n } = e,
            o =
              (t({
                a11y: {
                  enabled: !0,
                  notificationClass: "swiper-notification",
                  prevSlideMessage: "Previous slide",
                  nextSlideMessage: "Next slide",
                  firstSlideMessage: "This is the first slide",
                  lastSlideMessage: "This is the last slide",
                  paginationBulletMessage: "Go to slide {{index}}",
                  slideLabelMessage: "{{index}} / {{slidesLength}}",
                  containerMessage: null,
                  containerRoleDescriptionMessage: null,
                  itemRoleDescriptionMessage: null,
                  slideRole: "group",
                  id: null,
                },
              }),
              (r.a11y = {
                clicked: !1,
              }),
              null);
          function i(e) {
            const t = o;
            0 !== t.length && (t.html(""), t.html(e));
          }
          function a(e) {
            e.attr("tabIndex", "0");
          }
          function s(e) {
            e.attr("tabIndex", "-1");
          }
          function l(e, t) {
            e.attr("role", t);
          }
          function d(e, t) {
            e.attr("aria-roledescription", t);
          }
          function c(e, t) {
            e.attr("aria-label", t);
          }
          function u(e) {
            e.attr("aria-disabled", !0);
          }
          function p(e) {
            e.attr("aria-disabled", !1);
          }
          function h(e) {
            if (13 === e.keyCode || 32 === e.keyCode) {
              var t = r.params.a11y;
              const n = P(e.target);
              r.navigation &&
                r.navigation.$nextEl &&
                n.is(r.navigation.$nextEl) &&
                ((r.isEnd && !r.params.loop) || r.slideNext(),
                r.isEnd ? i(t.lastSlideMessage) : i(t.nextSlideMessage)),
                r.navigation &&
                  r.navigation.$prevEl &&
                  n.is(r.navigation.$prevEl) &&
                  ((r.isBeginning && !r.params.loop) || r.slidePrev(),
                  r.isBeginning
                    ? i(t.firstSlideMessage)
                    : i(t.prevSlideMessage)),
                r.pagination &&
                  n.is($(r.params.pagination.bulletClass)) &&
                  n[0].click();
            }
          }
          function f() {
            return (
              r.pagination &&
              r.pagination.bullets &&
              r.pagination.bullets.length
            );
          }
          function m() {
            return f() && r.params.pagination.clickable;
          }
          const g = (e, t, n) => {
              a(e),
                "BUTTON" !== e[0].tagName &&
                  (l(e, "button"), e.on("keydown", h)),
                c(e, n),
                e.attr("aria-controls", t);
            },
            v = () => {
              r.a11y.clicked = !0;
            },
            y = () => {
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  r.destroyed || (r.a11y.clicked = !1);
                });
              });
            },
            b = (e) => {
              var t, n, i;
              r.a11y.clicked ||
                ((t = e.target.closest("." + r.params.slideClass)) &&
                  r.slides.includes(t) &&
                  ((n = r.slides.indexOf(t) === r.activeIndex),
                  (i =
                    r.params.watchSlidesProgress &&
                    r.visibleSlides &&
                    r.visibleSlides.includes(t)),
                  n ||
                    i ||
                    (e.sourceCapabilities &&
                      e.sourceCapabilities.firesTouchEvents) ||
                    (r.isHorizontal()
                      ? (r.el.scrollLeft = 0)
                      : (r.el.scrollTop = 0),
                    r.slideTo(r.slides.indexOf(t), 0))));
            },
            w = () => {
              const i = r.params.a11y,
                a =
                  (i.itemRoleDescriptionMessage &&
                    d(P(r.slides), i.itemRoleDescriptionMessage),
                  i.slideRole && l(P(r.slides), i.slideRole),
                  (r.params.loop
                    ? r.slides.filter(
                        (e) =>
                          !e.classList.contains(r.params.slideDuplicateClass)
                      )
                    : r.slides
                  ).length);
              i.slideLabelMessage &&
                r.slides.each((e, t) => {
                  const n = P(e);
                  (e = r.params.loop
                    ? parseInt(n.attr("data-swiper-slide-index"), 10)
                    : t),
                    (t = i.slideLabelMessage
                      .replace(/\{\{index\}\}/, e + 1)
                      .replace(/\{\{slidesLength\}\}/, a));
                  c(n, t);
                });
            },
            x = () => {
              var e = r.params.a11y,
                t = (r.$el.append(o), r.$el);
              e.containerRoleDescriptionMessage &&
                d(t, e.containerRoleDescriptionMessage),
                e.containerMessage && c(t, e.containerMessage);
              const n = r.$wrapperEl;
              var t =
                  e.id ||
                  n.attr("id") ||
                  "swiper-wrapper-" +
                    "x"
                      .repeat((t = void 0 === (t = 16) ? 16 : t))
                      .replace(/x/g, () =>
                        Math.round(16 * Math.random()).toString(16)
                      ),
                i =
                  r.params.autoplay && r.params.autoplay.enabled
                    ? "off"
                    : "polite";
              n.attr("id", t), n.attr("aria-live", i), w();
              let a, s;
              r.navigation &&
                r.navigation.$nextEl &&
                (a = r.navigation.$nextEl),
                r.navigation &&
                  r.navigation.$prevEl &&
                  (s = r.navigation.$prevEl),
                a && a.length && g(a, t, e.nextSlideMessage),
                s && s.length && g(s, t, e.prevSlideMessage),
                m() &&
                  r.pagination.$el.on(
                    "keydown",
                    $(r.params.pagination.bulletClass),
                    h
                  ),
                r.$el.on("focus", b, !0),
                r.$el.on("pointerdown", v, !0),
                r.$el.on("pointerup", y, !0);
            };
          n("beforeInit", () => {
            o = P(
              `<span class="${r.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
            );
          }),
            n("afterInit", () => {
              r.params.a11y.enabled && x();
            }),
            n(
              "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
              () => {
                r.params.a11y.enabled && w();
              }
            ),
            n("fromEdge toEdge afterInit lock unlock", () => {
              var e, t;
              r.params.a11y.enabled &&
                !r.params.loop &&
                !r.params.rewind &&
                r.navigation &&
                (({ $nextEl: e, $prevEl: t } = r.navigation),
                t &&
                  0 < t.length &&
                  (r.isBeginning ? (u(t), s(t)) : (p(t), a(t))),
                e && 0 < e.length && (r.isEnd ? (u(e), s(e)) : (p(e), a(e))));
            }),
            n("paginationUpdate", () => {
              if (r.params.a11y.enabled) {
                const n = r.params.a11y;
                f() &&
                  r.pagination.bullets.each((e) => {
                    const t = P(e);
                    r.params.pagination.clickable &&
                      (a(t),
                      r.params.pagination.renderBullet ||
                        (l(t, "button"),
                        c(
                          t,
                          n.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            t.index() + 1
                          )
                        ))),
                      t.is("." + r.params.pagination.bulletActiveClass)
                        ? t.attr("aria-current", "true")
                        : t.removeAttr("aria-current");
                  });
              }
            }),
            n("destroy", () => {
              if (r.params.a11y.enabled) {
                o && 0 < o.length && o.remove();
                let e, t;
                r.navigation &&
                  r.navigation.$nextEl &&
                  (e = r.navigation.$nextEl),
                  r.navigation &&
                    r.navigation.$prevEl &&
                    (t = r.navigation.$prevEl),
                  e && e.off("keydown", h),
                  t && t.off("keydown", h),
                  m() &&
                    r.pagination.$el.off(
                      "keydown",
                      $(r.params.pagination.bulletClass),
                      h
                    ),
                  r.$el.off("focus", b, !0),
                  r.$el.off("pointerdown", v, !0),
                  r.$el.off("pointerup", y, !0);
              }
            });
        },
        function (e) {
          let { swiper: o, extendParams: t, on: n } = e,
            r =
              (t({
                history: {
                  enabled: !1,
                  root: "",
                  replaceState: !1,
                  key: "slides",
                  keepQuery: !1,
                },
              }),
              !1),
            i = {};
          const l = (e) =>
              e
                .toString()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "")
                .replace(/--+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, ""),
            a = (e) => {
              var t = L();
              let n;
              (e = (n = e ? new URL(e) : t.location).pathname
                .slice(1)
                .split("/")
                .filter((e) => "" !== e)),
                (t = e.length);
              return {
                key: e[t - 2],
                value: e[t - 1],
              };
            },
            s = (n, i) => {
              const a = L();
              if (r && o.params.history.enabled) {
                let e;
                e = o.params.url ? new URL(o.params.url) : a.location;
                const s = o.slides.eq(i);
                let t = l(s.attr("data-history"));
                if (0 < o.params.history.root.length) {
                  let e = o.params.history.root;
                  "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)),
                    (t = e + `/${n}/` + t);
                } else e.pathname.includes(n) || (t = n + "/" + t);
                o.params.history.keepQuery && (t += e.search);
                i = a.history.state;
                (i && i.value === t) ||
                  (o.params.history.replaceState
                    ? a.history.replaceState(
                        {
                          value: t,
                        },
                        null,
                        t
                      )
                    : a.history.pushState(
                        {
                          value: t,
                        },
                        null,
                        t
                      ));
              }
            },
            d = (n, i, a) => {
              if (i)
                for (let e = 0, t = o.slides.length; e < t; e += 1) {
                  const r = o.slides.eq(e);
                  var s;
                  l(r.attr("data-history")) !== i ||
                    r.hasClass(o.params.slideDuplicateClass) ||
                    ((s = r.index()), o.slideTo(s, n, a));
                }
              else o.slideTo(0, n, a);
            },
            c = () => {
              (i = a(o.params.url)), d(o.params.speed, i.value, !1);
            };
          n("init", () => {
            if (o.params.history.enabled) {
              const e = L();
              if (o.params.history) {
                if (!e.history || !e.history.pushState)
                  return void ((o.params.history.enabled = !1),
                  (o.params.hashNavigation.enabled = !0));
                (r = !0),
                  ((i = a(o.params.url)).key || i.value) &&
                    (d(0, i.value, o.params.runCallbacksOnInit),
                    o.params.history.replaceState ||
                      e.addEventListener("popstate", c));
              }
            }
          }),
            n("destroy", () => {
              if (o.params.history.enabled) {
                const e = L();
                o.params.history.replaceState ||
                  e.removeEventListener("popstate", c);
              }
            }),
            n("transitionEnd _freeModeNoMomentumRelease", () => {
              r && s(o.params.history.key, o.activeIndex);
            }),
            n("slideChange", () => {
              r && o.params.cssMode && s(o.params.history.key, o.activeIndex);
            });
        },
        function (e) {
          let { swiper: s, extendParams: t, emit: n, on: i } = e,
            r = !1;
          const o = E(),
            l = L(),
            d =
              (t({
                hashNavigation: {
                  enabled: !1,
                  replaceState: !1,
                  watchState: !1,
                },
              }),
              () => {
                n("hashChange");
                var e = o.location.hash.replace("#", "");
                e !== s.slides.eq(s.activeIndex).attr("data-hash") &&
                  void 0 !==
                    (e = s.$wrapperEl
                      .children(`.${s.params.slideClass}[data-hash="${e}"]`)
                      .index()) &&
                  s.slideTo(e);
              }),
            a = () => {
              if (r && s.params.hashNavigation.enabled)
                if (
                  s.params.hashNavigation.replaceState &&
                  l.history &&
                  l.history.replaceState
                )
                  l.history.replaceState(
                    null,
                    null,
                    "#" + s.slides.eq(s.activeIndex).attr("data-hash") || ""
                  ),
                    n("hashSet");
                else {
                  const t = s.slides.eq(s.activeIndex);
                  var e = t.attr("data-hash") || t.attr("data-history");
                  (o.location.hash = e || ""), n("hashSet");
                }
            };
          i("init", () => {
            if (
              s.params.hashNavigation.enabled &&
              !(
                !s.params.hashNavigation.enabled ||
                (s.params.history && s.params.history.enabled)
              )
            ) {
              r = !0;
              var n = o.location.hash.replace("#", "");
              if (n) {
                var i;
                for (let e = 0, t = s.slides.length; e < t; e += 1) {
                  const a = s.slides.eq(e);
                  (a.attr("data-hash") || a.attr("data-history")) !== n ||
                    a.hasClass(s.params.slideDuplicateClass) ||
                    ((i = a.index()),
                    s.slideTo(i, 0, s.params.runCallbacksOnInit, !0));
                }
              }
              s.params.hashNavigation.watchState && P(l).on("hashchange", d);
            }
          }),
            i("destroy", () => {
              s.params.hashNavigation.enabled &&
                s.params.hashNavigation.watchState &&
                P(l).off("hashchange", d);
            }),
            i("transitionEnd _freeModeNoMomentumRelease", () => {
              r && a();
            }),
            i("slideChange", () => {
              r && s.params.cssMode && a();
            });
        },
        function (e) {
          let { swiper: i, extendParams: t, on: n, emit: a } = e,
            s;
          function r() {
            if (!i.size)
              return (i.autoplay.running = !1), void (i.autoplay.paused = !1);
            const e = i.slides.eq(i.activeIndex);
            let t = i.params.autoplay.delay;
            e.attr("data-swiper-autoplay") &&
              (t = e.attr("data-swiper-autoplay") || i.params.autoplay.delay),
              clearTimeout(s),
              (s = S(() => {
                let e;
                i.params.autoplay.reverseDirection
                  ? i.params.loop
                    ? (i.loopFix(),
                      (e = i.slidePrev(i.params.speed, !0, !0)),
                      a("autoplay"))
                    : i.isBeginning
                    ? i.params.autoplay.stopOnLastSlide
                      ? l()
                      : ((e = i.slideTo(
                          i.slides.length - 1,
                          i.params.speed,
                          !0,
                          !0
                        )),
                        a("autoplay"))
                    : ((e = i.slidePrev(i.params.speed, !0, !0)), a("autoplay"))
                  : i.params.loop
                  ? (i.loopFix(),
                    (e = i.slideNext(i.params.speed, !0, !0)),
                    a("autoplay"))
                  : i.isEnd
                  ? i.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((e = i.slideTo(0, i.params.speed, !0, !0)),
                      a("autoplay"))
                  : ((e = i.slideNext(i.params.speed, !0, !0)), a("autoplay")),
                  ((i.params.cssMode && i.autoplay.running) || !1 === e) && r();
              }, t));
          }
          function o() {
            return (
              void 0 === s &&
              !i.autoplay.running &&
              ((i.autoplay.running = !0), a("autoplayStart"), r(), !0)
            );
          }
          function l() {
            return (
              !!i.autoplay.running &&
              void 0 !== s &&
              (s && (clearTimeout(s), (s = void 0)),
              (i.autoplay.running = !1),
              a("autoplayStop"),
              !0)
            );
          }
          function d(e) {
            !i.autoplay.running ||
              i.autoplay.paused ||
              (s && clearTimeout(s),
              (i.autoplay.paused = !0),
              0 !== e && i.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    i.$wrapperEl[0].addEventListener(e, u);
                  })
                : ((i.autoplay.paused = !1), r()));
          }
          function c() {
            var e = E();
            "hidden" === e.visibilityState && i.autoplay.running && d(),
              "visible" === e.visibilityState &&
                i.autoplay.paused &&
                (r(), (i.autoplay.paused = !1));
          }
          function u(e) {
            i &&
              !i.destroyed &&
              i.$wrapperEl &&
              e.target === i.$wrapperEl[0] &&
              (["transitionend", "webkitTransitionEnd"].forEach((e) => {
                i.$wrapperEl[0].removeEventListener(e, u);
              }),
              (i.autoplay.paused = !1),
              (i.autoplay.running ? r : l)());
          }
          function p() {
            i.params.autoplay.disableOnInteraction
              ? l()
              : (a("autoplayPause"), d()),
              ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                i.$wrapperEl[0].removeEventListener(e, u);
              });
          }
          function h() {
            i.params.autoplay.disableOnInteraction ||
              ((i.autoplay.paused = !1), a("autoplayResume"), r());
          }
          (i.autoplay = {
            running: !1,
            paused: !1,
          }),
            t({
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
              },
            }),
            n("init", () => {
              if (i.params.autoplay.enabled) {
                o();
                const e = E();
                e.addEventListener("visibilitychange", c),
                  i.params.autoplay.pauseOnMouseEnter &&
                    (i.$el.on("mouseenter", p), i.$el.on("mouseleave", h));
              }
            }),
            n("beforeTransitionStart", (e, t, n) => {
              i.autoplay.running &&
                (n || !i.params.autoplay.disableOnInteraction
                  ? i.autoplay.pause(t)
                  : l());
            }),
            n("sliderFirstMove", () => {
              i.autoplay.running &&
                (i.params.autoplay.disableOnInteraction ? l : d)();
            }),
            n("touchEnd", () => {
              i.params.cssMode &&
                i.autoplay.paused &&
                !i.params.autoplay.disableOnInteraction &&
                r();
            }),
            n("destroy", () => {
              i.$el.off("mouseenter", p),
                i.$el.off("mouseleave", h),
                i.autoplay.running && l();
              const e = E();
              e.removeEventListener("visibilitychange", c);
            }),
            Object.assign(i.autoplay, {
              pause: d,
              run: r,
              start: o,
              stop: l,
            });
        },
        function (e) {
          let { swiper: c, extendParams: t, on: n } = e,
            i =
              (t({
                thumbs: {
                  swiper: null,
                  multipleActiveThumbs: !0,
                  autoScrollOffset: 0,
                  slideThumbActiveClass: "swiper-slide-thumb-active",
                  thumbsContainerClass: "swiper-thumbs",
                },
              }),
              !1),
            a = !1;
          function s() {
            var n = c.thumbs.swiper;
            if (n && !n.destroyed) {
              var e = n.clickedIndex,
                i = n.clickedSlide;
              if (
                !(
                  (i && P(i).hasClass(c.params.thumbs.slideThumbActiveClass)) ||
                  null == e
                )
              ) {
                let t;
                if (
                  ((t = n.params.loop
                    ? parseInt(
                        P(n.clickedSlide).attr("data-swiper-slide-index"),
                        10
                      )
                    : e),
                  c.params.loop)
                ) {
                  let e = c.activeIndex;
                  c.slides.eq(e).hasClass(c.params.slideDuplicateClass) &&
                    (c.loopFix(),
                    (c._clientLeft = c.$wrapperEl[0].clientLeft),
                    (e = c.activeIndex));
                  (i = c.slides
                    .eq(e)
                    .prevAll(`[data-swiper-slide-index="${t}"]`)
                    .eq(0)
                    .index()),
                    (n = c.slides
                      .eq(e)
                      .nextAll(`[data-swiper-slide-index="${t}"]`)
                      .eq(0)
                      .index());
                  t = void 0 === i || (void 0 !== n && n - e < e - i) ? n : i;
                }
                c.slideTo(t);
              }
            }
          }
          function r() {
            var e = c.params["thumbs"];
            if (i) return !1;
            i = !0;
            const t = c.constructor;
            return (
              e.swiper instanceof t
                ? ((c.thumbs.swiper = e.swiper),
                  Object.assign(c.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  Object.assign(c.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }))
                : l(e.swiper) &&
                  ((e = Object.assign({}, e.swiper)),
                  Object.assign(e, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  (c.thumbs.swiper = new t(e)),
                  (a = !0)),
              c.thumbs.swiper.$el.addClass(
                c.params.thumbs.thumbsContainerClass
              ),
              c.thumbs.swiper.on("tap", s),
              !0
            );
          }
          function o(i) {
            const a = c.thumbs.swiper;
            if (a && !a.destroyed) {
              var s =
                "auto" === a.params.slidesPerView
                  ? a.slidesPerViewDynamic()
                  : a.params.slidesPerView;
              let t = 1;
              var n = c.params.thumbs.slideThumbActiveClass;
              if (
                (1 < c.params.slidesPerView &&
                  !c.params.centeredSlides &&
                  (t = c.params.slidesPerView),
                c.params.thumbs.multipleActiveThumbs || (t = 1),
                (t = Math.floor(t)),
                a.slides.removeClass(n),
                a.params.loop || (a.params.virtual && a.params.virtual.enabled))
              )
                for (let e = 0; e < t; e += 1)
                  a.$wrapperEl
                    .children(`[data-swiper-slide-index="${c.realIndex + e}"]`)
                    .addClass(n);
              else
                for (let e = 0; e < t; e += 1)
                  a.slides.eq(c.realIndex + e).addClass(n);
              var r,
                o,
                l = c.params.thumbs.autoScrollOffset,
                d = l && !a.params.loop;
              if (c.realIndex !== a.realIndex || d) {
                let e = a.activeIndex,
                  t,
                  n;
                (n = a.params.loop
                  ? (a.slides.eq(e).hasClass(a.params.slideDuplicateClass) &&
                      (a.loopFix(),
                      (a._clientLeft = a.$wrapperEl[0].clientLeft),
                      (e = a.activeIndex)),
                    (r = a.slides
                      .eq(e)
                      .prevAll(`[data-swiper-slide-index="${c.realIndex}"]`)
                      .eq(0)
                      .index()),
                    (o = a.slides
                      .eq(e)
                      .nextAll(`[data-swiper-slide-index="${c.realIndex}"]`)
                      .eq(0)
                      .index()),
                    (t =
                      void 0 === r
                        ? o
                        : void 0 === o
                        ? r
                        : o - e == e - r
                        ? 1 < a.params.slidesPerGroup
                          ? o
                          : e
                        : o - e < e - r
                        ? o
                        : r),
                    c.activeIndex > c.previousIndex ? "next" : "prev")
                  : (t = c.realIndex) > c.previousIndex
                  ? "next"
                  : "prev"),
                  d && (t += "next" === n ? l : -1 * l),
                  a.visibleSlidesIndexes &&
                    a.visibleSlidesIndexes.indexOf(t) < 0 &&
                    (a.params.centeredSlides
                      ? (t =
                          t > e
                            ? t - Math.floor(s / 2) + 1
                            : t + Math.floor(s / 2) - 1)
                      : t > e && a.params.slidesPerGroup,
                    a.slideTo(t, i ? 0 : void 0));
              }
            }
          }
          (c.thumbs = {
            swiper: null,
          }),
            n("beforeInit", () => {
              var e = c.params["thumbs"];
              e && e.swiper && (r(), o(!0));
            }),
            n("slideChange update resize observerUpdate", () => {
              o();
            }),
            n("setTransition", (e, t) => {
              const n = c.thumbs.swiper;
              n && !n.destroyed && n.setTransition(t);
            }),
            n("beforeDestroy", () => {
              const e = c.thumbs.swiper;
              e && !e.destroyed && a && e.destroy();
            }),
            Object.assign(c.thumbs, {
              init: r,
              update: o,
            });
        },
        function (e) {
          let { swiper: h, extendParams: t, emit: f, once: m } = e;
          t({
            freeMode: {
              enabled: !1,
              momentum: !0,
              momentumRatio: 1,
              momentumBounce: !0,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: !1,
              minimumVelocity: 0.02,
            },
          }),
            Object.assign(h, {
              freeMode: {
                onTouchStart: function () {
                  var e = h.getTranslate();
                  h.setTranslate(e),
                    h.setTransition(0),
                    (h.touchEventsData.velocities.length = 0),
                    h.freeMode.onTouchEnd({
                      currentPos: h.rtl ? h.translate : -h.translate,
                    });
                },
                onTouchMove: function () {
                  const { touchEventsData: e, touches: t } = h;
                  0 === e.velocities.length &&
                    e.velocities.push({
                      position: t[h.isHorizontal() ? "startX" : "startY"],
                      time: e.touchStartTime,
                    }),
                    e.velocities.push({
                      position: t[h.isHorizontal() ? "currentX" : "currentY"],
                      time: v(),
                    });
                },
                onTouchEnd: function (s) {
                  s = s.currentPos;
                  const {
                    params: r,
                    $wrapperEl: o,
                    rtlTranslate: l,
                    snapGrid: d,
                    touchEventsData: c,
                  } = h;
                  var e = v() - c.touchStartTime;
                  if (s < -h.minTranslate()) h.slideTo(h.activeIndex);
                  else if (s > -h.maxTranslate())
                    h.slides.length < d.length
                      ? h.slideTo(d.length - 1)
                      : h.slideTo(h.slides.length - 1);
                  else {
                    if (r.freeMode.momentum) {
                      1 < c.velocities.length
                        ? ((s = c.velocities.pop()),
                          (p = c.velocities.pop()),
                          (u = s.position - p.position),
                          (p = s.time - p.time),
                          (h.velocity = u / p),
                          (h.velocity /= 2),
                          Math.abs(h.velocity) < r.freeMode.minimumVelocity &&
                            (h.velocity = 0),
                          (150 < p || 300 < v() - s.time) && (h.velocity = 0))
                        : (h.velocity = 0),
                        (h.velocity *= r.freeMode.momentumVelocityRatio),
                        (c.velocities.length = 0);
                      let e = 1e3 * r.freeMode.momentumRatio;
                      var u = h.velocity * e;
                      let n = h.translate + u,
                        t = (l && (n = -n), !1),
                        i;
                      var p =
                        20 *
                        Math.abs(h.velocity) *
                        r.freeMode.momentumBounceRatio;
                      let a;
                      if (n < h.maxTranslate())
                        r.freeMode.momentumBounce
                          ? (n + h.maxTranslate() < -p &&
                              (n = h.maxTranslate() - p),
                            (i = h.maxTranslate()),
                            (t = !0),
                            (c.allowMomentumBounce = !0))
                          : (n = h.maxTranslate()),
                          r.loop && r.centeredSlides && (a = !0);
                      else if (n > h.minTranslate())
                        r.freeMode.momentumBounce
                          ? (n - h.minTranslate() > p &&
                              (n = h.minTranslate() + p),
                            (i = h.minTranslate()),
                            (t = !0),
                            (c.allowMomentumBounce = !0))
                          : (n = h.minTranslate()),
                          r.loop && r.centeredSlides && (a = !0);
                      else if (r.freeMode.sticky) {
                        let t;
                        for (let e = 0; e < d.length; e += 1)
                          if (d[e] > -n) {
                            t = e;
                            break;
                          }
                        n = -(n =
                          Math.abs(d[t] - n) < Math.abs(d[t - 1] - n) ||
                          "next" === h.swipeDirection
                            ? d[t]
                            : d[t - 1]);
                      }
                      if (
                        (a &&
                          m("transitionEnd", () => {
                            h.loopFix();
                          }),
                        0 !== h.velocity)
                      )
                        (e = l
                          ? Math.abs((-n - h.translate) / h.velocity)
                          : Math.abs((n - h.translate) / h.velocity)),
                          r.freeMode.sticky &&
                            ((s = Math.abs((l ? -n : n) - h.translate)),
                            (u = h.slidesSizesGrid[h.activeIndex]),
                            (e =
                              s < u
                                ? r.speed
                                : s < 2 * u
                                ? 1.5 * r.speed
                                : 2.5 * r.speed));
                      else if (r.freeMode.sticky)
                        return void h.slideToClosest();
                      r.freeMode.momentumBounce && t
                        ? (h.updateProgress(i),
                          h.setTransition(e),
                          h.setTranslate(n),
                          h.transitionStart(!0, h.swipeDirection),
                          (h.animating = !0),
                          o.transitionEnd(() => {
                            h &&
                              !h.destroyed &&
                              c.allowMomentumBounce &&
                              (f("momentumBounce"),
                              h.setTransition(r.speed),
                              setTimeout(() => {
                                h.setTranslate(i),
                                  o.transitionEnd(() => {
                                    h && !h.destroyed && h.transitionEnd();
                                  });
                              }, 0));
                          }))
                        : h.velocity
                        ? (f("_freeModeNoMomentumRelease"),
                          h.updateProgress(n),
                          h.setTransition(e),
                          h.setTranslate(n),
                          h.transitionStart(!0, h.swipeDirection),
                          h.animating ||
                            ((h.animating = !0),
                            o.transitionEnd(() => {
                              h && !h.destroyed && h.transitionEnd();
                            })))
                        : h.updateProgress(n),
                        h.updateActiveIndex(),
                        h.updateSlidesClasses();
                    } else {
                      if (r.freeMode.sticky) return void h.slideToClosest();
                      r.freeMode && f("_freeModeNoMomentumRelease");
                    }
                    (!r.freeMode.momentum || e >= r.longSwipesMs) &&
                      (h.updateProgress(),
                      h.updateActiveIndex(),
                      h.updateSlidesClasses());
                  }
                },
              },
            });
        },
        function (e) {
          let { swiper: p, extendParams: t } = e;
          t({
            grid: {
              rows: 1,
              fill: "column",
            },
          });
          let h, f, m;
          p.grid = {
            initSlides: (e) => {
              var t = p.params["slidesPerView"],
                { rows: n, fill: i } = p.params.grid;
              (f = h / n),
                (m = Math.floor(e / n)),
                (h = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
                "auto" !== t && "row" === i && (h = Math.max(h, t * n));
            },
            updateSlide: (e, t, n, i) => {
              var a,
                s,
                { slidesPerGroup: r, spaceBetween: o } = p.params,
                { rows: l, fill: d } = p.params.grid;
              let c, u;
              "row" === d && 1 < r
                ? ((s = e - l * r * (a = Math.floor(e / (r * l)))),
                  (n =
                    0 === a ? r : Math.min(Math.ceil((n - a * l * r) / l), r)),
                  (u = Math.floor(s / n)),
                  (s = (c = s - u * n + a * r) + (u * h) / l),
                  t.css({
                    "-webkit-order": s,
                    order: s,
                  }))
                : "column" === d
                ? ((c = Math.floor(e / l)),
                  (u = e - c * l),
                  (c > m || (c === m && u === l - 1)) &&
                    (u += 1) >= l &&
                    ((u = 0), (c += 1)))
                : ((u = Math.floor(e / f)), (c = e - u * f)),
                t.css(i("margin-top"), 0 !== u ? o && o + "px" : "");
            },
            updateWrapperSize: (e, n, t) => {
              var {
                  spaceBetween: i,
                  centeredSlides: a,
                  roundLengths: s,
                } = p.params,
                r = p.params.grid["rows"];
              if (
                ((p.virtualSize = (e + i) * h),
                (p.virtualSize = Math.ceil(p.virtualSize / r) - i),
                p.$wrapperEl.css({
                  [t("width")]: p.virtualSize + i + "px",
                }),
                a)
              ) {
                n.splice(0, n.length);
                const o = [];
                for (let t = 0; t < n.length; t += 1) {
                  let e = n[t];
                  s && (e = Math.floor(e)),
                    n[t] < p.virtualSize + n[0] && o.push(e);
                }
                n.push(...o);
              }
            },
          };
        },
        function (e) {
          (e = e.swiper),
            Object.assign(e, {
              appendSlide: function (t) {
                const { $wrapperEl: n, params: e } = this;
                if (
                  (e.loop && this.loopDestroy(),
                  "object" == typeof t && "length" in t)
                )
                  for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
                else n.append(t);
                e.loop && this.loopCreate(), e.observer || this.update();
              }.bind(e),
              prependSlide: function (t) {
                const { params: e, $wrapperEl: n, activeIndex: i } = this;
                e.loop && this.loopDestroy();
                let a = i + 1;
                if ("object" == typeof t && "length" in t) {
                  for (let e = 0; e < t.length; e += 1) t[e] && n.prepend(t[e]);
                  a = i + t.length;
                } else n.prepend(t);
                e.loop && this.loopCreate(),
                  e.observer || this.update(),
                  this.slideTo(a, 0, !1);
              }.bind(e),
              addSlide: function (t, n) {
                var i = this;
                const { $wrapperEl: a, params: s, activeIndex: e } = i;
                let r = e;
                s.loop &&
                  ((r -= i.loopedSlides),
                  i.loopDestroy(),
                  (i.slides = a.children("." + s.slideClass)));
                var o = i.slides.length;
                if (t <= 0) i.prependSlide(n);
                else if (o <= t) i.appendSlide(n);
                else {
                  let e = r > t ? r + 1 : r;
                  const l = [];
                  for (let e = o - 1; e >= t; --e) {
                    const d = i.slides.eq(e);
                    d.remove(), l.unshift(d);
                  }
                  if ("object" == typeof n && "length" in n) {
                    for (let e = 0; e < n.length; e += 1)
                      n[e] && a.append(n[e]);
                    e = r > t ? r + n.length : r;
                  } else a.append(n);
                  for (let e = 0; e < l.length; e += 1) a.append(l[e]);
                  s.loop && i.loopCreate(),
                    s.observer || i.update(),
                    s.loop
                      ? i.slideTo(e + i.loopedSlides, 0, !1)
                      : i.slideTo(e, 0, !1);
                }
              }.bind(e),
              removeSlide: function (t) {
                var n = this;
                const { params: e, $wrapperEl: i, activeIndex: a } = n;
                let s = a,
                  r =
                    (e.loop &&
                      ((s -= n.loopedSlides),
                      n.loopDestroy(),
                      (n.slides = i.children("." + e.slideClass))),
                    s),
                  o;
                if ("object" == typeof t && "length" in t) {
                  for (let e = 0; e < t.length; e += 1)
                    (o = t[e]),
                      n.slides[o] && n.slides.eq(o).remove(),
                      o < r && --r;
                  r = Math.max(r, 0);
                } else
                  (o = t),
                    n.slides[o] && n.slides.eq(o).remove(),
                    o < r && --r,
                    (r = Math.max(r, 0));
                e.loop && n.loopCreate(),
                  e.observer || n.update(),
                  e.loop
                    ? n.slideTo(r + n.loopedSlides, 0, !1)
                    : n.slideTo(r, 0, !1);
              }.bind(e),
              removeAllSlides: function () {
                const t = [];
                for (let e = 0; e < this.slides.length; e += 1) t.push(e);
                this.removeSlide(t);
              }.bind(e),
            });
        },
        function (e) {
          let { swiper: o, extendParams: t, on: n } = e;
          t({
            fadeEffect: {
              crossFade: !1,
              transformEl: null,
            },
          }),
            k({
              effect: "fade",
              swiper: o,
              on: n,
              setTranslate: () => {
                var e = o["slides"],
                  i = o.params.fadeEffect;
                for (let n = 0; n < e.length; n += 1) {
                  var a = o.slides.eq(n);
                  let e = -a[0].swiperSlideOffset,
                    t = (o.params.virtualTranslate || (e -= o.translate), 0);
                  o.isHorizontal() || ((t = e), (e = 0));
                  var s = o.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(a[0].progress), 0)
                    : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                  const r = I(i, a);
                  r.css({
                    opacity: s,
                  }).transform(`translate3d(${e}px, ${t}px, 0px)`);
                }
              },
              setTransition: (e) => {
                var t = o.params.fadeEffect["transformEl"];
                const n = t ? o.slides.find(t) : o.slides;
                n.transition(e),
                  D({
                    swiper: o,
                    duration: e,
                    transformEl: t,
                    allSlides: !0,
                  });
              },
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !o.params.cssMode,
              }),
            });
        },
        function (e) {
          let { swiper: b, extendParams: t, on: n } = e;
          t({
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          });
          const w = (e, t, n) => {
            let i = n
                ? e.find(".swiper-slide-shadow-left")
                : e.find(".swiper-slide-shadow-top"),
              a = n
                ? e.find(".swiper-slide-shadow-right")
                : e.find(".swiper-slide-shadow-bottom");
            0 === i.length &&
              ((i = P(
                `<div class="swiper-slide-shadow-${n ? "left" : "top"}"></div>`
              )),
              e.append(i)),
              0 === a.length &&
                ((a = P(
                  `<div class="swiper-slide-shadow-${
                    n ? "right" : "bottom"
                  }"></div>`
                )),
                e.append(a)),
              i.length && (i[0].style.opacity = Math.max(-t, 0)),
              a.length && (a[0].style.opacity = Math.max(t, 0));
          };
          k({
            effect: "cube",
            swiper: b,
            on: n,
            setTranslate: () => {
              const {
                $el: e,
                $wrapperEl: t,
                slides: o,
                width: n,
                height: i,
                rtlTranslate: l,
                size: d,
                browser: a,
              } = b;
              var s,
                r,
                c = b.params.cubeEffect,
                u = b.isHorizontal(),
                p = b.virtual && b.params.virtual.enabled;
              let h = 0,
                f;
              c.shadow &&
                (u
                  ? (0 === (f = t.find(".swiper-cube-shadow")).length &&
                      ((f = P('<div class="swiper-cube-shadow"></div>')),
                      t.append(f)),
                    f.css({
                      height: n + "px",
                    }))
                  : 0 === (f = e.find(".swiper-cube-shadow")).length &&
                    ((f = P('<div class="swiper-cube-shadow"></div>')),
                    e.append(f)));
              for (let r = 0; r < o.length; r += 1) {
                const y = o.eq(r);
                let e = r,
                  t =
                    90 *
                    (e = p
                      ? parseInt(y.attr("data-swiper-slide-index"), 10)
                      : e),
                  n = Math.floor(t / 360);
                l && ((t = -t), (n = Math.floor(-t / 360)));
                var m = Math.max(Math.min(y[0].progress, 1), -1);
                let i = 0,
                  a = 0,
                  s = 0;
                e % 4 == 0
                  ? ((i = 4 * -n * d), (s = 0))
                  : (e - 1) % 4 == 0
                  ? ((i = 0), (s = 4 * -n * d))
                  : (e - 2) % 4 == 0
                  ? ((i = d + 4 * n * d), (s = d))
                  : (e - 3) % 4 == 0 && ((i = -d), (s = 3 * d + 4 * d * n)),
                  l && (i = -i),
                  u || ((a = i), (i = 0));
                var g = `rotateX(${u ? 0 : -t}deg) rotateY(${
                  u ? t : 0
                }deg) translate3d(${i}px, ${a}px, ${s}px)`;
                m <= 1 &&
                  -1 < m &&
                  ((h = 90 * e + 90 * m), l && (h = 90 * -e - 90 * m)),
                  y.transform(g),
                  c.slideShadows && w(y, m, u);
              }
              t.css({
                "-webkit-transform-origin": `50% 50% -${d / 2}px`,
                "transform-origin": `50% 50% -${d / 2}px`,
              }),
                c.shadow &&
                  (u
                    ? f.transform(
                        `translate3d(0px, ${n / 2 + c.shadowOffset}px, ${
                          -n / 2
                        }px) rotateX(90deg) rotateZ(0deg) scale(${
                          c.shadowScale
                        })`
                      )
                    : ((s = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)),
                      (s =
                        1.5 -
                        (Math.sin((2 * s * Math.PI) / 360) / 2 +
                          Math.cos((2 * s * Math.PI) / 360) / 2)),
                      (v = c.shadowScale),
                      (s = c.shadowScale / s),
                      (r = c.shadowOffset),
                      f.transform(
                        `scale3d(${v}, 1, ${s}) translate3d(0px, ${
                          i / 2 + r
                        }px, ${-i / 2 / s}px) rotateX(-90deg)`
                      )));
              var v = a.isSafari || a.isWebView ? -d / 2 : 0;
              t.transform(
                `translate3d(0px,0,${v}px) rotateX(${
                  b.isHorizontal() ? 0 : h
                }deg) rotateY(${b.isHorizontal() ? -h : 0}deg)`
              ),
                t[0].style.setProperty("--swiper-cube-translate-z", v + "px");
            },
            setTransition: (e) => {
              const { $el: t, slides: n } = b;
              n
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                b.params.cubeEffect.shadow &&
                  !b.isHorizontal() &&
                  t.find(".swiper-cube-shadow").transition(e);
            },
            recreateShadows: () => {
              const n = b.isHorizontal();
              b.slides.each((e) => {
                var t = Math.max(Math.min(e.progress, 1), -1);
                w(P(e), t, n);
              });
            },
            getEffectParams: () => b.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            }),
          });
        },
        function (e) {
          let { swiper: p, extendParams: t, on: n } = e;
          t({
            flipEffect: {
              slideShadows: !0,
              limitRotation: !0,
              transformEl: null,
            },
          });
          const h = (e, t, n) => {
            let i = p.isHorizontal()
                ? e.find(".swiper-slide-shadow-left")
                : e.find(".swiper-slide-shadow-top"),
              a = p.isHorizontal()
                ? e.find(".swiper-slide-shadow-right")
                : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = N(n, e, p.isHorizontal() ? "left" : "top")),
              0 === a.length &&
                (a = N(n, e, p.isHorizontal() ? "right" : "bottom")),
              i.length && (i[0].style.opacity = Math.max(-t, 0)),
              a.length && (a[0].style.opacity = Math.max(t, 0));
          };
          k({
            effect: "flip",
            swiper: p,
            on: n,
            setTranslate: () => {
              const { slides: r, rtlTranslate: o } = p;
              var l = p.params.flipEffect;
              for (let s = 0; s < r.length; s += 1) {
                const c = r.eq(s);
                let e = c[0].progress;
                p.params.flipEffect.limitRotation &&
                  (e = Math.max(Math.min(c[0].progress, 1), -1));
                var d = c[0].swiperSlideOffset;
                let t = -180 * e,
                  n = 0,
                  i = p.params.cssMode ? -d - p.translate : -d,
                  a = 0;
                p.isHorizontal()
                  ? o && (t = -t)
                  : ((a = i), (i = 0), (n = -t), (t = 0)),
                  (c[0].style.zIndex = -Math.abs(Math.round(e)) + r.length),
                  l.slideShadows && h(c, e, l);
                d = `translate3d(${i}px, ${a}px, 0px) rotateX(${n}deg) rotateY(${t}deg)`;
                const u = I(l, c);
                u.transform(d);
              }
            },
            setTransition: (e) => {
              var t = p.params.flipEffect["transformEl"];
              const n = t ? p.slides.find(t) : p.slides;
              n
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                D({
                  swiper: p,
                  duration: e,
                  transformEl: t,
                });
            },
            recreateShadows: () => {
              const i = p.params.flipEffect;
              p.slides.each((e) => {
                var t = P(e);
                let n = t[0].progress;
                p.params.flipEffect.limitRotation &&
                  (n = Math.max(Math.min(e.progress, 1), -1)),
                  h(t, n, i);
              });
            },
            getEffectParams: () => p.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !p.params.cssMode,
            }),
          });
        },
        function (e) {
          let { swiper: i, extendParams: t, on: n } = e;
          t({
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
              transformEl: null,
            },
          }),
            k({
              effect: "coverflow",
              swiper: i,
              on: n,
              setTranslate: () => {
                const {
                    width: e,
                    height: t,
                    slides: l,
                    slidesSizesGrid: d,
                  } = i,
                  c = i.params.coverflowEffect;
                var u = i.isHorizontal(),
                  n = i.translate,
                  p = u ? e / 2 - n : t / 2 - n,
                  h = u ? c.rotate : -c.rotate,
                  f = c.depth;
                for (let o = 0, e = l.length; o < e; o += 1) {
                  const v = l.eq(o);
                  var m = d[o],
                    g = (p - v[0].swiperSlideOffset - m / 2) / m,
                    g =
                      "function" == typeof c.modifier
                        ? c.modifier(g)
                        : g * c.modifier;
                  let e = u ? h * g : 0,
                    t = u ? 0 : h * g,
                    n = -f * Math.abs(g),
                    i = c.stretch,
                    a =
                      ("string" == typeof i &&
                        -1 !== i.indexOf("%") &&
                        (i = (parseFloat(c.stretch) / 100) * m),
                      u ? 0 : i * g),
                    s = u ? i * g : 0,
                    r = 1 - (1 - c.scale) * Math.abs(g);
                  Math.abs(s) < 0.001 && (s = 0),
                    Math.abs(a) < 0.001 && (a = 0),
                    Math.abs(n) < 0.001 && (n = 0),
                    Math.abs(e) < 0.001 && (e = 0),
                    Math.abs(t) < 0.001 && (t = 0),
                    Math.abs(r) < 0.001 && (r = 0);
                  m = `translate3d(${s}px,${a}px,${n}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${r})`;
                  const y = I(c, v);
                  if (
                    (y.transform(m),
                    (v[0].style.zIndex = 1 - Math.abs(Math.round(g))),
                    c.slideShadows)
                  ) {
                    let e = u
                        ? v.find(".swiper-slide-shadow-left")
                        : v.find(".swiper-slide-shadow-top"),
                      t = u
                        ? v.find(".swiper-slide-shadow-right")
                        : v.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = N(c, v, u ? "left" : "top")),
                      0 === t.length && (t = N(c, v, u ? "right" : "bottom")),
                      e.length && (e[0].style.opacity = 0 < g ? g : 0),
                      t.length && (t[0].style.opacity = 0 < -g ? -g : 0);
                  }
                }
              },
              setTransition: (e) => {
                var t = i.params.coverflowEffect["transformEl"];
                const n = t ? i.slides.find(t) : i.slides;
                n.transition(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(e);
              },
              perspective: () => !0,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
              }),
            });
        },
        function (e) {
          let { swiper: v, extendParams: t, on: n } = e;
          t({
            creativeEffect: {
              transformEl: null,
              limitProgress: 1,
              shadowPerProgress: !1,
              progressMultiplier: 1,
              perspective: !0,
              prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1,
              },
              next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1,
              },
            },
          }),
            k({
              effect: "creative",
              swiper: v,
              on: n,
              setTranslate: () => {
                const { slides: a, $wrapperEl: e, slidesSizesGrid: t } = v;
                var s = v.params.creativeEffect;
                const r = s["progressMultiplier"];
                var n,
                  o = v.params.centeredSlides;
                o &&
                  ((n = t[0] / 2 - v.params.slidesOffsetBefore || 0),
                  e.transform(`translateX(calc(50% - ${n}px))`));
                for (let i = 0; i < a.length; i += 1) {
                  const p = a.eq(i);
                  var l = p[0].progress;
                  const h = Math.min(
                    Math.max(p[0].progress, -s.limitProgress),
                    s.limitProgress
                  );
                  let e = h;
                  o ||
                    (e = Math.min(
                      Math.max(p[0].originalProgress, -s.limitProgress),
                      s.limitProgress
                    ));
                  var d = p[0].swiperSlideOffset;
                  const f = [v.params.cssMode ? -d - v.translate : -d, 0, 0],
                    m = [0, 0, 0];
                  let t = !1,
                    n =
                      (v.isHorizontal() || ((f[1] = f[0]), (f[0] = 0)),
                      {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1,
                      });
                  h < 0
                    ? ((n = s.next), (t = !0))
                    : 0 < h && ((n = s.prev), (t = !0)),
                    f.forEach((e, t) => {
                      f[t] = `calc(${e}px + (${
                        ((e = n.translate[t]),
                        "string" == typeof e ? e : e + "px")
                      } * ${Math.abs(h * r)}))`;
                    }),
                    m.forEach((e, t) => {
                      m[t] = n.rotate[t] * Math.abs(h * r);
                    }),
                    (p[0].style.zIndex = -Math.abs(Math.round(l)) + a.length);
                  var d = f.join(", "),
                    l = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
                    c =
                      e < 0
                        ? `scale(${1 + (1 - n.scale) * e * r})`
                        : `scale(${1 - (1 - n.scale) * e * r})`,
                    u =
                      e < 0
                        ? 1 + (1 - n.opacity) * e * r
                        : 1 - (1 - n.opacity) * e * r,
                    d = `translate3d(${d}) ${l} ` + c;
                  if ((t && n.shadow) || !t) {
                    let e = p.children(".swiper-slide-shadow");
                    (e = 0 === e.length && n.shadow ? N(s, p) : e).length &&
                      ((l = s.shadowPerProgress
                        ? h * (1 / s.limitProgress)
                        : h),
                      (e[0].style.opacity = Math.min(
                        Math.max(Math.abs(l), 0),
                        1
                      )));
                  }
                  const g = I(s, p);
                  g.transform(d).css({
                    opacity: u,
                  }),
                    n.origin && g.css("transform-origin", n.origin);
                }
              },
              setTransition: (e) => {
                var t = v.params.creativeEffect["transformEl"];
                const n = t ? v.slides.find(t) : v.slides;
                n.transition(e).find(".swiper-slide-shadow").transition(e),
                  D({
                    swiper: v,
                    duration: e,
                    transformEl: t,
                    allSlides: !0,
                  });
              },
              perspective: () => v.params.creativeEffect.perspective,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !v.params.cssMode,
              }),
            });
        },
        function (e) {
          let { swiper: w, extendParams: t, on: n } = e;
          t({
            cardsEffect: {
              slideShadows: !0,
              transformEl: null,
              rotate: !0,
              perSlideRotate: 2,
              perSlideOffset: 8,
            },
          }),
            k({
              effect: "cards",
              swiper: w,
              on: n,
              setTranslate: () => {
                const { slides: o, activeIndex: l } = w;
                var d = w.params.cardsEffect,
                  { startTranslate: c, isTouched: u } = w.touchEventsData,
                  p = w.translate;
                for (let r = 0; r < o.length; r += 1) {
                  const y = o.eq(r);
                  var h = y[0].progress,
                    f = Math.min(Math.max(h, -4), 4);
                  let e = y[0].swiperSlideOffset,
                    t =
                      (w.params.centeredSlides &&
                        !w.params.cssMode &&
                        w.$wrapperEl.transform(
                          `translateX(${w.minTranslate()}px)`
                        ),
                      w.params.centeredSlides &&
                        w.params.cssMode &&
                        (e -= o[0].swiperSlideOffset),
                      w.params.cssMode ? -e - w.translate : -e),
                    n = 0;
                  var m = -100 * Math.abs(f);
                  let i = 1,
                    a = -d.perSlideRotate * f,
                    s = d.perSlideOffset - 0.75 * Math.abs(f);
                  var g =
                      w.virtual && w.params.virtual.enabled
                        ? w.virtual.from + r
                        : r,
                    v =
                      (g === l || g === l - 1) &&
                      0 < f &&
                      f < 1 &&
                      (u || w.params.cssMode) &&
                      p < c,
                    g =
                      (g === l || g === l + 1) &&
                      f < 0 &&
                      -1 < f &&
                      (u || w.params.cssMode) &&
                      c < p,
                    v =
                      ((v || g) &&
                        ((v = (1 - Math.abs((Math.abs(f) - 0.5) / 0.5)) ** 0.5),
                        (a += -28 * f * v),
                        (i += -0.5 * v),
                        (s += 96 * v),
                        (n = -25 * v * Math.abs(f) + "%")),
                      f < 0
                        ? (t = `calc(${t}px + (${s * Math.abs(f)}%))`)
                        : 0 < f
                        ? (t = `calc(${t}px + (-${s * Math.abs(f)}%))`)
                        : (t += "px"),
                      w.isHorizontal() || ((g = n), (n = t), (t = g)),
                      f < 0 ? "" + (1 + (1 - i) * f) : "" + (1 - (1 - i) * f)),
                    g = `
        translate3d(${t}, ${n}, ${m}px)
        rotateZ(${d.rotate ? a : 0}deg)
        scale(${v})
      `;
                  if (d.slideShadows) {
                    let e = y.find(".swiper-slide-shadow");
                    (e = 0 === e.length ? N(d, y) : e).length &&
                      (e[0].style.opacity = Math.min(
                        Math.max((Math.abs(f) - 0.5) / 0.5, 0),
                        1
                      ));
                  }
                  y[0].style.zIndex = -Math.abs(Math.round(h)) + o.length;
                  const b = I(d, y);
                  b.transform(g);
                }
              },
              setTransition: (e) => {
                var t = w.params.cardsEffect["transformEl"];
                const n = t ? w.slides.find(t) : w.slides;
                n.transition(e).find(".swiper-slide-shadow").transition(e),
                  D({
                    swiper: w,
                    duration: e,
                    transformEl: t,
                  });
              },
              perspective: () => !0,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !w.params.cssMode,
              }),
            });
        },
      ]),
      T
    );
  });
