/*! hg-web-sdk@1.6.4 Copyright (C) 2017 - 2022 Hypergryph Co.,Ltd. All Rights Reserved. Published at 2022-06-10 19:37:29 */
! function () {
	"use strict";
	var e, t, n, r, o = {},
		u = {};

	function i(e) {
		if (u[e]) return u[e].exports;
		var t = u[e] = {
			id: e,
			exports: {}
		};
		return o[e].call(t.exports, t, t.exports, i), t.exports
	}
	i.m = o, i.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return i.d(t, {
			a: t
		}), t
	}, t = Object.getPrototypeOf ? function (e) {
		return Object.getPrototypeOf(e)
	} : function (e) {
		return e.__proto__
	}, i.t = function (n, r) {
		if (1 & r && (n = this(n)), 8 & r) return n;
		if ("object" == typeof n && n) {
			if (4 & r && n.__esModule) return n;
			if (16 & r && "function" == typeof n.then) return n
		}
		var o = Object.create(null);
		i.r(o);
		var u = {};
		e = e || [null, t({}), t([]), t(t)];
		for (var a = 2 & r && n;
			"object" == typeof a && !~e.indexOf(a); a = t(a)) Object.getOwnPropertyNames(a)
				.forEach((function (e) {
					u[e] = function () {
						return n[e]
					}
				}));
		return u.default = function () {
			return n
		}, i.d(o, u), o
	}, i.d = function (e, t) {
		for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, i.f = {}, i.e = function (e) {
		return Promise.all(Object.keys(i.f)
			.reduce((function (t, n) {
				return i.f[n](e, t), t
			}), []))
	}, i.u = function (e) {
		return e + "." + {
			2: "1110f816421989ea6aa5",
			223: "3e547f33997c1f6502b2",
			315: "fb4683113c88453bc38d",
			485: "3fecd4f67d48fd2a7465",
			503: "beaf4165931cf851897b",
			553: "92e085ec24f95fb8ffc8",
			688: "03a7079facf9af87e88c",
			853: "979a462897d4c810294b",
			938: "23ac82c96f7cce64cb2a"
		}[e] + ".js"
	}, i.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n = {}, r = "@hg/hg-web-sdk:", i.l = function (e, t, o, u) {
		if (n[e]) n[e].push(t);
		else {
			var a, f;
			if (void 0 !== o)
				for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
					var l = c[d];
					if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == r + o) {
						a = l;
						break
					}
				}
			a || (f = !0, (a = document.createElement("script"))
				.charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.setAttribute("data-webpack", r + o), a.src = e), n[e] = [t];
			var b = function (t, r) {
				a.onerror = a.onload = null, clearTimeout(s);
				var o = n[e];
				if (delete n[e], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((function (e) {
					return e(r)
				})), t) return t(r)
			},
				s = setTimeout(b.bind(null, void 0, {
					type: "timeout",
					target: a
				}), 12e4);
			a.onerror = b.bind(null, a.onerror), a.onload = b.bind(null, a.onload), f && document.head.appendChild(a)
		}
	}, i.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i.p = "https://web.hycdn.cn/hg_web_sdk/lib/",
		function () {
			var e = {
				650: 0
			};
			i.f.j = function (t, n) {
				var r = i.o(e, t) ? e[t] : void 0;
				if (0 !== r)
					if (r) n.push(r[2]);
					else {
						var o = new Promise((function (n, o) {
							r = e[t] = [n, o]
						}));
						n.push(r[2] = o);
						var u = i.p + i.u(t),
							a = new Error;
						i.l(u, (function (n) {
							if (i.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
								var o = n && ("load" === n.type ? "missing" : n.type),
									u = n && n.target && n.target.src;
								a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + u + ")", a.name = "ChunkLoadError", a.type = o, a.request = u, r[1](a)
							}
						}), "chunk-" + t, t)
					}
			};
			var t = function (t, n) {
				for (var r, o, u = n[0], a = n[1], f = n[2], c = 0, d = []; c < u.length; c++) o = u[c], i.o(e, o) && e[o] && d.push(e[o][0]), e[o] = 0;
				for (r in a) i.o(a, r) && (i.m[r] = a[r]);
				for (f && f(i), t && t(n); d.length;) d.shift()()
			},
				n = self.webpackChunk_hg_hg_web_sdk = self.webpackChunk_hg_hg_web_sdk || [];
			n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
		}(), i.e(2)
			.then(i.bind(i, 2))
}();