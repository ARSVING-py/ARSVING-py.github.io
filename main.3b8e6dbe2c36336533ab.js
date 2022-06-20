! function () {
    "use strict";
    var t, e, n, r, o = {
        997: function (t, e, n) {
            e.z = void 0;
            var r = n(655);
            e.z = function (t, e) {
                return void 0 === e && (e = "HG_WEB_SDK_SCRIPT_ELEMENT"),
                    function n(o) {
                        return r.__awaiter(this, void 0, void 0, (function () {
                            var i = this;
                            return r.__generator(this, (function (a) {
                                return [2, new Promise((function (a, u) {
                                    var c = window.HG_SDK;
                                    if (c) return null == o || o(c), void a(c);
                                    window._HG_SDK_CALLBACK_QUEUE = window._HG_SDK_CALLBACK_QUEUE || [], window._HG_SDK_CALLBACK_QUEUE.push((function () {
                                        return r.__awaiter(i, void 0, void 0, (function () {
                                            var t;
                                            return r.__generator(this, (function (e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return t = a, [4, n(o)];
                                                    case 1:
                                                        return t.apply(void 0, [e.sent()]), [2]
                                                }
                                            }))
                                        }))
                                    }));
                                    var f = window.document.getElementById(e);
                                    f || ((f = window.document.createElement("script"))
                                        .defer = !0, f.src = t + "?ts=" + Date.now(), f.id = e, window.document.head.appendChild(f)), f.addEventListener("error", u)
                                }))]
                            }))
                        }))
                    }
            }
        },
        655: function (t, e, n) {
            n.r(e), n.d(e, {
                __extends: function () {
                    return o
                },
                __assign: function () {
                    return i
                },
                __rest: function () {
                    return a
                },
                __decorate: function () {
                    return u
                },
                __param: function () {
                    return c
                },
                __metadata: function () {
                    return f
                },
                __awaiter: function () {
                    return l
                },
                __generator: function () {
                    return s
                },
                __createBinding: function () {
                    return d
                },
                __exportStar: function () {
                    return p
                },
                __values: function () {
                    return v
                },
                __read: function () {
                    return y
                },
                __spread: function () {
                    return h
                },
                __spreadArrays: function () {
                    return m
                },
                __spreadArray: function () {
                    return b
                },
                __await: function () {
                    return _
                },
                __asyncGenerator: function () {
                    return w
                },
                __asyncDelegator: function () {
                    return g
                },
                __asyncValues: function () {
                    return j
                },
                __makeTemplateObject: function () {
                    return S
                },
                __importStar: function () {
                    return P
                },
                __importDefault: function () {
                    return E
                },
                __classPrivateFieldGet: function () {
                    return x
                },
                __classPrivateFieldSet: function () {
                    return T
                }
            });
            var r = function (t, e) {
                return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            };

            function o(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var i = function () {
                return (i = Object.assign || function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                })
                    .apply(this, arguments)
            };

            function a(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                }
                return n
            }

            function u(t, e, n, r) {
                var o, i = arguments.length,
                    a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                else
                    for (var u = t.length - 1; u >= 0; u--)(o = t[u]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            }

            function c(t, e) {
                return function (n, r) {
                    e(n, r, t)
                }
            }

            function f(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function l(t, e, n, r) {
                return new (n || (n = Promise))((function (o, i) {
                    function a(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                            t(e)
                        })))
                            .then(a, u)
                    }
                    c((r = r.apply(t, e || []))
                        .next())
                }))
            }

            function s(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function u(i) {
                    return function (u) {
                        return function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1]))
                                    .done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                    n = o = 0
                                }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }
            var d = Object.create ? function (t, e, n, r) {
                void 0 === r && (r = n), Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                        return e[n]
                    }
                })
            } : function (t, e, n, r) {
                void 0 === r && (r = n), t[r] = e[n]
            };

            function p(t, e) {
                for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || d(e, t, n)
            }

            function v(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function () {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function y(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next())
                            .done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function h() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(y(arguments[e]));
                return t
            }

            function m() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                    o = 0;
                for (e = 0; e < n; e++)
                    for (var i = arguments[e], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a];
                return r
            }

            function b(t, e, n) {
                if (n || 2 === arguments.length)
                    for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                return t.concat(r || Array.prototype.slice.call(e))
            }

            function _(t) {
                return this instanceof _ ? (this.v = t, this) : new _(t)
            }

            function w(t, e, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, o = n.apply(t, e || []),
                    i = [];
                return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function () {
                    return this
                }, r;

                function a(t) {
                    o[t] && (r[t] = function (e) {
                        return new Promise((function (n, r) {
                            i.push([t, e, n, r]) > 1 || u(t, e)
                        }))
                    })
                }

                function u(t, e) {
                    try {
                        (n = o[t](e))
                            .value instanceof _ ? Promise.resolve(n.value.v)
                                .then(c, f) : l(i[0][2], n)
                    } catch (t) {
                        l(i[0][3], t)
                    }
                    var n
                }

                function c(t) {
                    u("next", t)
                }

                function f(t) {
                    u("throw", t)
                }

                function l(t, e) {
                    t(e), i.shift(), i.length && u(i[0][0], i[0][1])
                }
            }

            function g(t) {
                var e, n;
                return e = {}, r("next"), r("throw", (function (t) {
                    throw t
                })), r("return"), e[Symbol.iterator] = function () {
                    return this
                }, e;

                function r(r, o) {
                    e[r] = t[r] ? function (e) {
                        return (n = !n) ? {
                            value: _(t[r](e)),
                            done: "return" === r
                        } : o ? o(e) : e
                    } : o
                }
            }

            function j(t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, n = t[Symbol.asyncIterator];
                return n ? n.call(t) : (t = v(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function () {
                    return this
                }, e);

                function r(n) {
                    e[n] = t[n] && function (e) {
                        return new Promise((function (r, o) {
                            (function (t, e, n, r) {
                                Promise.resolve(r)
                                    .then((function (e) {
                                        t({
                                            value: e,
                                            done: n
                                        })
                                    }), e)
                            })(r, o, (e = t[n](e))
                                .done, e.value)
                        }))
                    }
                }
            }

            function S(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }
            var O = Object.create ? function (t, e) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                })
            } : function (t, e) {
                t.default = e
            };

            function P(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && d(e, t, n);
                return O(e, t), e
            }

            function E(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function x(t, e, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t)
            }

            function T(t, e, n, r, o) {
                if ("m" === r) throw new TypeError("Private method is not writable");
                if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? o.call(t, n) : o ? o.value = n : e.set(t, n), n
            }
        },
        391: function (t, e, n) {
            t.exports = n.p + "assets/share.73d910.jpg"
        }
    },
        i = {};

    function a(t) {
        var e = i[t];
        if (void 0 !== e) return e.exports;
        var n = i[t] = {
            exports: {}
        };
        return o[t].call(n.exports, n, n.exports, a), n.exports
    }
    a.m = o, e = Object.getPrototypeOf ? function (t) {
        return Object.getPrototypeOf(t)
    } : function (t) {
        return t.__proto__
    }, a.t = function (n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var o = Object.create(null);
        a.r(o);
        var i = {};
        t = t || [null, e({}), e([]), e(e)];
        for (var u = 2 & r && n;
            "object" == typeof u && !~t.indexOf(u); u = e(u)) Object.getOwnPropertyNames(u)
                .forEach((function (t) {
                    i[t] = function () {
                        return n[t]
                    }
                }));
        return i.default = function () {
            return n
        }, a.d(o, i), o
    }, a.d = function (t, e) {
        for (var n in e) a.o(e, n) && !a.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, a.f = {}, a.e = function (t) {
        return Promise.all(Object.keys(a.f)
            .reduce((function (e, n) {
                return a.f[n](t, e), e
            }), []))
    }, a.u = function (t) {
        return t + ".e6f11b256d1e77503da1.js"
    }, a.miniCssF = function (t) { }, a.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n = {}, r = "elrond-web:", a.l = function (t, e, o, i) {
        if (n[t]) n[t].push(e);
        else {
            var u, c;
            if (void 0 !== o)
                for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                    var s = f[l];
                    if (s.getAttribute("src") == t || s.getAttribute("data-webpack") == r + o) {
                        u = s;
                        break
                    }
                }
            u || (c = !0, (u = document.createElement("script"))
                .charset = "utf-8", u.timeout = 120, a.nc && u.setAttribute("nonce", a.nc), u.setAttribute("data-webpack", r + o), u.src = t), n[t] = [e];
            var d = function (e, r) {
                u.onerror = u.onload = null, clearTimeout(p);
                var o = n[t];
                if (delete n[t], u.parentNode && u.parentNode.removeChild(u), o && o.forEach((function (t) {
                    return t(r)
                })), e) return e(r)
            },
                p = setTimeout(d.bind(null, void 0, {
                    type: "timeout",
                    target: u
                }), 12e4);
            u.onerror = d.bind(null, u.onerror), u.onload = d.bind(null, u.onload), c && document.head.appendChild(u)
        }
    }, a.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.p = "#",
        function () {
            var t = {
                179: 0
            };
            a.f.j = function (e, n) {
                var r = a.o(t, e) ? t[e] : void 0;
                if (0 !== r)
                    if (r) n.push(r[2]);
                    else {
                        var o = new Promise((function (n, o) {
                            r = t[e] = [n, o]
                        }));
                        n.push(r[2] = o);
                        var i = a.p + a.u(e),
                            u = new Error;
                        a.l(i, (function (n) {
                            if (a.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
                                var o = n && ("load" === n.type ? "missing" : n.type),
                                    i = n && n.target && n.target.src;
                                u.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")", u.name = "ChunkLoadError", u.type = o, u.request = i, r[1](u)
                            }
                        }), "chunk-" + e, e)
                    }
            };
            var e = function (e, n) {
                var r, o, i = n[0],
                    u = n[1],
                    c = n[2],
                    f = 0;
                if (i.some((function (e) {
                    return 0 !== t[e]
                }))) {
                    for (r in u) a.o(u, r) && (a.m[r] = u[r]);
                    if (c) c(a)
                }
                for (e && e(n); f < i.length; f++) o = i[f], a.o(t, o) && t[o] && t[o][0](), t[i[f]] = 0
            },
                n = self.webpackChunkelrond_web = self.webpackChunkelrond_web || [];
            n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
        }(),
        function () {
            var t = a(655);
            var e = function (t) {
                var e = this.constructor;
                return this.then((function (n) {
                    return e.resolve(t())
                        .then((function () {
                            return n
                        }))
                }), (function (n) {
                    return e.resolve(t())
                        .then((function () {
                            return e.reject(n)
                        }))
                }))
            };
            var n = function (t) {
                return new this((function (e, n) {
                    if (!t || void 0 === t.length) return n(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                    var r = Array.prototype.slice.call(t);
                    if (0 === r.length) return e([]);
                    var o = r.length;

                    function i(t, n) {
                        if (n && ("object" == typeof n || "function" == typeof n)) {
                            var a = n.then;
                            if ("function" == typeof a) return void a.call(n, (function (e) {
                                i(t, e)
                            }), (function (n) {
                                r[t] = {
                                    status: "rejected",
                                    reason: n
                                }, 0 == --o && e(r)
                            }))
                        }
                        r[t] = {
                            status: "fulfilled",
                            value: n
                        }, 0 == --o && e(r)
                    }
                    for (var a = 0; a < r.length; a++) i(a, r[a])
                }))
            },
                r = setTimeout;

            function o(t) {
                return Boolean(t && void 0 !== t.length)
            }

            function i() { }

            function u(t) {
                if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(t, this)
            }

            function c(t, e) {
                for (; 3 === t._state;) t = t._value;
                0 !== t._state ? (t._handled = !0, u._immediateFn((function () {
                    var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                    if (null !== n) {
                        var r;
                        try {
                            r = n(t._value)
                        } catch (t) {
                            return void l(e.promise, t)
                        }
                        f(e.promise, r)
                    } else (1 === t._state ? f : l)(e.promise, t._value)
                }))) : t._deferreds.push(e)
            }

            function f(t, e) {
                try {
                    if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if (e instanceof u) return t._state = 3, t._value = e, void s(t);
                        if ("function" == typeof n) return void p((r = n, o = e, function () {
                            r.apply(o, arguments)
                        }), t)
                    }
                    t._state = 1, t._value = e, s(t)
                } catch (e) {
                    l(t, e)
                }
                var r, o
            }

            function l(t, e) {
                t._state = 2, t._value = e, s(t)
            }

            function s(t) {
                2 === t._state && 0 === t._deferreds.length && u._immediateFn((function () {
                    t._handled || u._unhandledRejectionFn(t._value)
                }));
                for (var e = 0, n = t._deferreds.length; e < n; e++) c(t, t._deferreds[e]);
                t._deferreds = null
            }

            function d(t, e, n) {
                this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
            }

            function p(t, e) {
                var n = !1;
                try {
                    t((function (t) {
                        n || (n = !0, f(e, t))
                    }), (function (t) {
                        n || (n = !0, l(e, t))
                    }))
                } catch (t) {
                    if (n) return;
                    n = !0, l(e, t)
                }
            }
            u.prototype.catch = function (t) {
                return this.then(null, t)
            }, u.prototype.then = function (t, e) {
                var n = new this.constructor(i);
                return c(this, new d(t, e, n)), n
            }, u.prototype.finally = e, u.all = function (t) {
                return new u((function (e, n) {
                    if (!o(t)) return n(new TypeError("Promise.all accepts an array"));
                    var r = Array.prototype.slice.call(t);
                    if (0 === r.length) return e([]);
                    var i = r.length;

                    function a(t, o) {
                        try {
                            if (o && ("object" == typeof o || "function" == typeof o)) {
                                var u = o.then;
                                if ("function" == typeof u) return void u.call(o, (function (e) {
                                    a(t, e)
                                }), n)
                            }
                            r[t] = o, 0 == --i && e(r)
                        } catch (t) {
                            n(t)
                        }
                    }
                    for (var u = 0; u < r.length; u++) a(u, r[u])
                }))
            }, u.allSettled = n, u.resolve = function (t) {
                return t && "object" == typeof t && t.constructor === u ? t : new u((function (e) {
                    e(t)
                }))
            }, u.reject = function (t) {
                return new u((function (e, n) {
                    n(t)
                }))
            }, u.race = function (t) {
                return new u((function (e, n) {
                    if (!o(t)) return n(new TypeError("Promise.race accepts an array"));
                    for (var r = 0, i = t.length; r < i; r++) u.resolve(t[r])
                        .then(e, n)
                }))
            }, u._immediateFn = "function" == typeof setImmediate && function (t) {
                setImmediate(t)
            } || function (t) {
                r(t, 0)
            }, u._unhandledRejectionFn = function (t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            };
            var v = u,
                y = function () {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== a.g) return a.g;
                    throw new Error("unable to locate global object")
                }();

            function h(t, e) {
                var n, r, o = t.from,
                    i = t.to,
                    a = t.duration,
                    u = void 0 === a ? 1e3 : a,
                    c = (i - o) / u,
                    f = {
                        id: NaN
                    };
                return f.id = requestAnimationFrame((function t(i) {
                    n || (n = i);
                    if (r) {
                        if (i - r < 16) return void (f.id = requestAnimationFrame(t))
                    } else r = i;
                    var a = i - n,
                        l = o + c * a * (s = a / u, s * (2 - s));
                    var s;
                    e(l), a < u && (f.id = requestAnimationFrame(t))
                })), f
            }
            "function" != typeof y.Promise ? y.Promise = v : y.Promise.prototype.finally ? y.Promise.allSettled || (y.Promise.allSettled = n) : y.Promise.prototype.finally = e, Object.entries || (Object.entries = function (t) {
                for (var e = Object.keys(t), n = e.length, r = new Array(n); n--;) r[n] = [e[n], t[e[n]]];
                return r
            }), String.prototype.endsWith || (String.prototype.endsWith = function (t, e) {
                return (void 0 === e || e > this.length) && (e = this.length), this.substring(e - t.length, e) === t
            });
            var m = function (t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            },
                b = "object" == typeof global && global && global.Object === Object && global,
                _ = "object" == typeof self && self && self.Object === Object && self,
                w = b || _ || Function("return this")(),
                g = function () {
                    return w.Date.now()
                },
                j = /\s/;
            var S = function (t) {
                for (var e = t.length; e-- && j.test(t.charAt(e)););
                return e
            },
                O = /^\s+/;
            var P = function (t) {
                return t ? t.slice(0, S(t) + 1)
                    .replace(O, "") : t
            },
                E = w.Symbol,
                x = Object.prototype,
                T = x.hasOwnProperty,
                A = x.toString,
                k = E ? E.toStringTag : void 0;
            var L = function (t) {
                var e = T.call(t, k),
                    n = t[k];
                try {
                    t[k] = void 0;
                    var r = !0
                } catch (t) { }
                var o = A.call(t);
                return r && (e ? t[k] = n : delete t[k]), o
            },
                F = Object.prototype.toString;
            var I = function (t) {
                return F.call(t)
            },
                C = E ? E.toStringTag : void 0;
            var q = function (t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : C && C in Object(t) ? L(t) : I(t)
            };
            var M = function (t) {
                return null != t && "object" == typeof t
            };
            var N = function (t) {
                return "symbol" == typeof t || M(t) && "[object Symbol]" == q(t)
            },
                R = /^[-+]0x[0-9a-f]+$/i,
                D = /^0b[01]+$/i,
                B = /^0o[0-7]+$/i,
                G = parseInt;
            var H = function (t) {
                if ("number" == typeof t) return t;
                if (N(t)) return NaN;
                if (m(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = m(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = P(t);
                var n = D.test(t);
                return n || B.test(t) ? G(t.slice(2), n ? 2 : 8) : R.test(t) ? NaN : +t
            },
                K = Math.max,
                U = Math.min;
            var W = function (t, e, n) {
                var r, o, i, a, u, c, f = 0,
                    l = !1,
                    s = !1,
                    d = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");

                function p(e) {
                    var n = r,
                        i = o;
                    return r = o = void 0, f = e, a = t.apply(i, n)
                }

                function v(t) {
                    return f = t, u = setTimeout(h, e), l ? p(t) : a
                }

                function y(t) {
                    var n = t - c;
                    return void 0 === c || n >= e || n < 0 || s && t - f >= i
                }

                function h() {
                    var t = g();
                    if (y(t)) return b(t);
                    u = setTimeout(h, function (t) {
                        var n = e - (t - c);
                        return s ? U(n, i - (t - f)) : n
                    }(t))
                }

                function b(t) {
                    return u = void 0, d && r ? p(t) : (r = o = void 0, a)
                }

                function _() {
                    var t = g(),
                        n = y(t);
                    if (r = arguments, o = this, c = t, n) {
                        if (void 0 === u) return v(c);
                        if (s) return clearTimeout(u), u = setTimeout(h, e), p(c)
                    }
                    return void 0 === u && (u = setTimeout(h, e)), a
                }
                return e = H(e) || 0, m(n) && (l = !!n.leading, i = (s = "maxWait" in n) ? K(H(n.maxWait) || 0, e) : i, d = "trailing" in n ? !!n.trailing : d), _.cancel = function () {
                    void 0 !== u && clearTimeout(u), f = 0, r = c = o = u = void 0
                }, _.flush = function () {
                    return void 0 === u ? a : b(g())
                }, _
            };
            var z = function (t, e, n) {
                var r = !0,
                    o = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return m(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), W(t, e, {
                    leading: r,
                    maxWait: e,
                    trailing: o
                })
            },
                Q = (0, a(997)
                    .z)("sdk.entry.js"); // TODO 拖慢加载, 故禁用
            (0, t.__awaiter)(void 0, void 0, void 0, (function () {
                return (0, t.__generator)(this, (function (e) {
                    return [2, new Promise((function (e) {
                        var n, r, o, i, u = function () {
                            if (navigator.platform && navigator.appVersion && /iPhone|iPad|iPod|Mac/.test(navigator.platform) && navigator.maxTouchPoints > 4) {
                                var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                if (t) return [parseInt(t[1], 10) || 0, parseInt(t[2], 10) || 0, parseInt(t[3], 10) || 0]
                            }
                        }();
                        u && 13 === u[0] && document.body.classList.add("iOS-13");
                        var c = [],
                            f = document.querySelectorAll("img"),
                            l = function (t) {
                                var e = t.dataset,
                                    n = e.src,
                                    r = e.preload;
                                n && r && c.push((function () {
                                    return function (t) {
                                        return new Promise((function (e, n) {
                                            var r = new Image;
                                            r.onload = function () {
                                                e(r)
                                            }, r.onerror = function () {
                                                n(null)
                                            }, r.src = t
                                        }))
                                    }(n)
                                }))
                            };
                        try {
                            for (var s = (0, t.__values)(f), d = s.next(); !d.done; d = s.next()) l(d.value)
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                d && !d.done && (r = s.return) && r.call(s)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        var p = document.getElementById("loading"),
                            v = p.querySelector(".ring"),
                            y = p.querySelector(".bar"),
                            m = p.querySelector(".value"),
                            b = {
                                total: c.length,
                                loaded: 0,
                                progress: 0
                            },
                            _ = function () {
                                var n, r, o, i, u;
                                setTimeout((function () {
                                    document.body.classList.add("loaded"), setTimeout((function () {
                                        p.style.display = "none"
                                    }), 1e3)
                                }), 200);
                                try {
                                    for (var c = (0, t.__values)(f), l = c.next(); !l.done; l = c.next()) {
                                        var s = l.value,
                                            d = s.dataset.src;
                                        d && (s.src = d)
                                    }
                                } catch (t) {
                                    n = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (r = c.return) && r.call(c)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                var v = document.querySelector("#main"),
                                    y = document.querySelector("#background .bg");
                                v && y && v.addEventListener("scroll", z((function () {
                                    y.style.transform = "translate3d(-50%, " + -Math.max(0, Math.min(.5 * v.scrollTop, y.clientHeight - window.innerHeight)) + "px, 0)"
                                })), {
                                    passive: !0
                                });
                                var h = (0, t.__spreadArray)([], (0, t.__read)(document.querySelectorAll(".fade-in-text")), !1);
                                try {
                                    for (var m = (0, t.__values)(h), b = m.next(); !b.done; b = m.next()) b.value.classList.add("hidden")
                                } catch (t) {
                                    o = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        b && !b.done && (i = m.return) && i.call(m)
                                    } finally {
                                        if (o) throw o.error
                                    }
                                }
                                var _ = z((function () {
                                    for (var t = v.scrollTop + window.innerHeight - 30, e = 0; e < h.length; e++) {
                                        var n = h[e];
                                        t > n.offsetTop && (n.classList.remove("hidden"), h.splice(e, 1), e--)
                                    }
                                    h.length || v.removeEventListener("scroll", _)
                                }));
                                v.addEventListener("scroll", _, {
                                    passive: !0
                                });
                                var w = null,
                                    g = "",
                                    j = document.querySelector("#video-layer"),
                                    S = j.querySelector("#video-mask"),
                                    O = j.querySelector("video"),
                                    P = function (e, n) {
                                        return (0, t.__awaiter)(void 0, void 0, void 0, (function () {
                                            var r;
                                            return (0, t.__generator)(this, (function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return e.endsWith(".mp4") ? (g === e || (n.src = e, g = e), [2]) : [4, a.e(990)
                                                            .then(a.t.bind(a, 990, 23))
                                                        ];
                                                    case 1:
                                                        return r = t.sent()
                                                            .default, e.endsWith(".m3u8") && !n.canPlayType("application/vnd.apple.mpegurl") ? (g === e || ((w = new r)
                                                                .loadSource(e), w.attachMedia(n), g = e), [2]) : (n.src = e, g = e, [2])
                                                }
                                            }))
                                        }))
                                    };
                                null === (u = document.querySelector("#pv-play-trigger")) || void 0 === u || u.addEventListener("click", (function () {
                                    return (0, t.__awaiter)(void 0, void 0, void 0, (function () {
                                        var e;
                                        return (0, t.__generator)(this, (function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return (e = O.dataset.src) ? [4, P(e, O)] : [3, 2];
                                                case 1:
                                                    t.sent(), j.classList.add("visible"), O.play(), t.label = 2;
                                                case 2:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                })), S.addEventListener("click", (function () {
                                    O.pause(), j.classList.remove("visible")
                                })), e(void 0)
                            };
                        if (c.length) {
                            var w = {
                                id: NaN
                            };
                            try {
                                for (var g = (0, t.__values)(c), j = g.next(); !j.done; j = g.next())(0, j.value)()
                                    .finally((function () {
                                        cancelAnimationFrame(w.id), ++b.loaded, w = h({
                                            from: b.progress,
                                            to: Math.round(100 * b.loaded / b.total)
                                        }, (function (t) {
                                            t = Math.min(100, t), b.progress = t, m.innerText = t.toFixed(0) + "%", y.style.width = t.toFixed(0) + "%", v.style.opacity = (t / 100)
                                                .toFixed(2), v.style.transform = "translate3d(-50%, -45%, 0) scale(" + Math.max(1, 1.1 - .001 * t) + ")", t >= 100 && _()
                                        }))
                                    }))
                            } catch (t) {
                                o = {
                                    error: t
                                }
                            } finally {
                                try {
                                    j && !j.done && (i = g.return) && i.call(g)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                        } else _()
                    }))]
                }))
            }))
                .then((function () {
                    var t = document.documentElement.dataset.ga_id;
                    Q((function (e) {
                        e.EXA.insertFooter("#footer", {
                            lang: "zh-cn"
                        }), e.Analytics({
                            gTag: {
                                AppID: t
                            }
                        });
                        var n = document.querySelector('meta[name="description"]');
                        e.Share.setShareInfo({
                            channels: ["wx"],
                            image: a(391),
                            title: document.title,
                            description: (null == n ? void 0 : n.content) || ""
                        })
                    }))
                }))
        }()
}();