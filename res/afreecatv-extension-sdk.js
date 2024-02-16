!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).AFREECA = e.AFREECA || {}, e.AFREECA.ext = t());
}(this, function() {
  "use strict";

  function n(e) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e;
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
  }

  function a(e) {
    e = function(e, t) {
      if ("object" != n(e) || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 === r) return ("string" === t ? String : Number)(e);
      if ("object" != n(r = r.call(e, t || "default"))) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }(e, "string");
    return "symbol" == n(e) ? e : String(e);
  }

  !function() {
    var e = {
      NODE_ENV: "prod",
      EXTENSION_HOST: "https://file.ext-afreecatv.com",
      EXTENSION_HOSTING_HOST: "https://hosting.ext-afreecatv.com",
      PERMITTED_PARENT_ORIGIN_REGEX: {}
    };
    try {
      if (process) return process.env = Object.assign({}, process.env), Object.assign(process.env, e);
    } catch (e) {
    }
    globalThis.process = { env: e };
  }();
  var e = "afext-handle-extension-loaded", h = "afext-handle-broadcast-received", U = "afext-handle-chat-received",
    N = "afext-handle-hogu-received", D = "afext-handle-error", z = "afext-init-extension", M = "afext-set-auth",
    J = "afext-set-broad-info", L = "afext-set-player-property", Z = "afext-set-cursor", G = "afext-set-visibility",
    H = "afext-set-hover", V = "afext-forward-broadcast", X = "afext-forward-chat", $ = "afext-forward-hogu";

  function c(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, a(n.key), n);
    }
  }

  function i(e, t) {
    return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function q(e, t) {
    if (t && ("object" === n(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    t = e;
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function u(e, t, r) {
    return (u = function() {
      if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
        if ("function" == typeof Proxy) return 1;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), 1;
        } catch (e) {
        }
      }
    }() ? Reflect.construct.bind() : function(e, t, r) {
      var n = [null];
      n.push.apply(n, t);
      t = new (Function.bind.apply(e, n));
      return r && i(t, r.prototype), t;
    }).apply(null, arguments);
  }

  function K(e) {
    var r = "function" == typeof Map ? new Map : void 0;
    return function(e) {
      if (null === e || !function(t) {
        try {
          return -1 !== Function.toString.call(t).indexOf("[native code]");
        } catch (e) {
          return "function" == typeof t;
        }
      }(e)) return e;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(e)) return r.get(e);
        r.set(e, t);
      }

      function t() {
        return u(e, arguments, o(this).constructor);
      }

      return t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), i(t, e);
    }(e);
  }

  function Q(r) {
    var n = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function() {
      var e, t = o(r);
      return q(this, n ? (e = o(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
    };
  }

  var g = function(e) {
      var t = a;
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", { writable: !1 }), e && i(t, e);
      var r, n, o = Q(a);

      function a(e, t) {
        if (this instanceof a) return (t = o.call(this, t)).name = "sdk-error", t.code = e, t;
        throw new TypeError("Cannot call a class as a function");
      }

      return t = a, r && c(t.prototype, r), n && c(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
    }(K(Error)), W = "3.7.5", Y = "function" == typeof atob, t = "function" == typeof btoa,
    r = "function" == typeof Buffer;
  const f = "function" == typeof TextDecoder ? new TextDecoder : void 0,
    s = "function" == typeof TextEncoder ? new TextEncoder : void 0;
  const l = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="), d = (e => {
      let r = {};
      return e.forEach((e, t) => r[e] = t), r;
    })(l), ee = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    p = String.fromCharCode.bind(String),
    y = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : e => new Uint8Array(Array.prototype.slice.call(e, 0)),
    b = e => e.replace(/=/g, "").replace(/[+\/]/g, e => "+" == e ? "-" : "_"),
    v = e => e.replace(/[^A-Za-z0-9\+\/]/g, "");
  var m = t => {
    let r, n, o, a, c = "";
    var e = t.length % 3;
    for (let e = 0; e < t.length;) {
      if (255 < (n = t.charCodeAt(e++)) || 255 < (o = t.charCodeAt(e++)) || 255 < (a = t.charCodeAt(e++))) throw new TypeError("invalid character found");
      r = n << 16 | o << 8 | a, c += l[r >> 18 & 63] + l[r >> 12 & 63] + l[r >> 6 & 63] + l[63 & r];
    }
    return e ? c.slice(0, e - 3) + "===".substring(e) : c;
  };
  const O = t ? e => btoa(e) : r ? e => Buffer.from(e, "binary").toString("base64") : m,
    A = r ? e => Buffer.from(e).toString("base64") : r => {
      var n = [];
      for (let e = 0, t = r.length; e < t; e += 4096) n.push(p.apply(null, r.subarray(e, e + 4096)));
      return O(n.join(""));
    }, x = (e, t = !1) => t ? b(A(e)) : A(e), te = e => {
      var t;
      return e.length < 2 ? (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? p(192 | t >>> 6) + p(128 | 63 & t) : p(224 | t >>> 12 & 15) + p(128 | t >>> 6 & 63) + p(128 | 63 & t) : (t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320), p(240 | t >>> 18 & 7) + p(128 | t >>> 12 & 63) + p(128 | t >>> 6 & 63) + p(128 | 63 & t));
    }, re = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, w = e => e.replace(re, te),
    E = r ? e => Buffer.from(e, "utf8").toString("base64") : s ? e => A(s.encode(e)) : e => O(w(e)),
    S = (e, t = !1) => t ? b(E(e)) : E(e);
  t = e => S(e, !0);
  const ne = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, oe = e => {
    switch (e.length) {
      case 4:
        var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
        return p(55296 + (t >>> 10)) + p(56320 + (1023 & t));
      case 3:
        return p((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
      default:
        return p((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
    }
  }, j = e => e.replace(ne, oe);
  var T = t => {
    if (t = t.replace(/\s+/g, ""), !ee.test(t)) throw new TypeError("malformed base64.");
    t += "==".slice(2 - (3 & t.length));
    let r, n = "", o, a;
    for (let e = 0; e < t.length;) r = d[t.charAt(e++)] << 18 | d[t.charAt(e++)] << 12 | (o = d[t.charAt(e++)]) << 6 | (a = d[t.charAt(e++)]), n += 64 === o ? p(r >> 16 & 255) : 64 === a ? p(r >> 16 & 255, r >> 8 & 255) : p(r >> 16 & 255, r >> 8 & 255, 255 & r);
    return n;
  };
  const C = Y ? e => atob(v(e)) : r ? e => Buffer.from(e, "base64").toString("binary") : T,
    P = r ? e => y(Buffer.from(e, "base64")) : e => y(C(e).split("").map(e => e.charCodeAt(0))), B = e => P(R(e)),
    ae = r ? e => Buffer.from(e, "base64").toString("utf8") : f ? e => f.decode(P(e)) : e => j(C(e)),
    R = e => v(e.replace(/[-_]/g, e => "-" == e ? "+" : "/")), I = e => ae(R(e));

  function k() {
    var e = (e, t) => Object.defineProperty(String.prototype, e, F(t));
    e("fromBase64", function() {
      return I(this);
    }), e("toBase64", function(e) {
      return S(this, e);
    }), e("toBase64URI", function() {
      return S(this, !0);
    }), e("toBase64URL", function() {
      return S(this, !0);
    }), e("toUint8Array", function() {
      return B(this);
    });
  }

  function _() {
    var e = (e, t) => Object.defineProperty(Uint8Array.prototype, e, F(t));
    e("toBase64", function(e) {
      return x(this, e);
    }), e("toBase64URI", function() {
      return x(this, !0);
    }), e("toBase64URL", function() {
      return x(this, !0);
    });
  }

  const F = e => ({ value: e, enumerable: !1, writable: !0, configurable: !0 });
  const ce = {
    version: W,
    VERSION: "3.7.5",
    atob: C,
    atobPolyfill: T,
    btoa: O,
    btoaPolyfill: m,
    fromBase64: I,
    toBase64: S,
    encode: S,
    encodeURI: t,
    encodeURL: t,
    utob: w,
    btou: j,
    decode: I,
    isValid: e => {
      return "string" == typeof e && (e = e.replace(/\s+/g, "").replace(/={0,2}$/, ""), !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e));
    },
    fromUint8Array: x,
    toUint8Array: B,
    extendString: k,
    extendUint8Array: _,
    extendBuiltins: () => {
      k(), _();
    }
  };

  function ie(t, e) {
    var r, n = Object.keys(t);
    return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, r)), n;
  }

  function ue(n) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2 ? ie(Object(o), !0).forEach(function(e) {
        var t, r;
        t = n, r = o[e = e], (e = a(e)) in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : ie(Object(o)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
      });
    }
    return n;
  }

  return function() {
    function o(e) {
      try {
        var t = JSON.parse(ce.decode(e.split(".")[1]));
        return { isBJ: t.is_bj, obscureUserId: t.obscure_user_id };
      } catch (e) {
      }
      return { isBJ: !1, obscureUserId: null };
    }

    function n(e, t) {
      window.parent.postMessage({ action: e, payload: t }, "*");
    }

    var a = function() {
    }, c = function() {
    }, i = function() {
    }, u = function() {
    }, f = function() {
    }, s = function() {
    }, l = function() {
    }, d = function() {
    }, p = function() {
    }, y = function() {
    }, b = function() {
    };
    window.addEventListener("message", function(e) {
      var e = e.data, t = e.action, r = e.payload;
      switch (t) {
        case z:
          if (null != (n = r.authInfo) && n.userInfo) throw new g("missing-auth-info", "만료된 스펙의 데이터가 전달되었습니다. 문서를 확인해주세요. 230801 ");
          var n = ue({
            accessToken: r.authInfo.accessToken,
            userAgreeToken: r.authInfo.userAgreeToken
          }, o(r.authInfo.accessToken));
          a(n, r.broadInfo, r.playerInfo);
          break;
        case M:
          c(ue({ accessToken: r.accessToken, userAgreeToken: r.userAgreeToken }, o(r.accessToken)));
          break;
        case J:
          i(r);
          break;
        case L:
          u(r);
          break;
        case Z:
          f(r);
          break;
        case G:
          s(r);
          break;
        case H:
          l(r);
          break;
        case D:
          d(r);
          break;
        case V:
          try {
            p(r.action, JSON.parse(r.message || null), r.fromId);
          } catch (e) {
            n = decodeURIComponent(r.message);
            r.message !== n ? p(r.action, JSON.parse(n || null), r.fromId) : d(e);
          }
          break;
        case X:
          y(r.action, r.message);
          break;
        case $:
          b(r.action, r.message);
      }
    });
    return "loading" !== document.readyState ? n(e, null) : document.addEventListener("DOMContentLoaded", function() {
      n(e, null);
    }), {
      handleInitialization: function(e) {
        a = e;
      }, handleAuthorized: function(e) {
        c = e;
      }, handleBroadInfoChanged: function(e) {
        i = e;
      }, handlePlayerPropertyChanged: function(e) {
        u = e;
      }, handleCursorMoved: function(e) {
        f = e;
      }, handleVisibilityChanged: function(e) {
        s = e;
      }, handleHovered: function(e) {
        l = e;
      }, handleError: function(e) {
        d = e;
      }, broadcast: {
        listen: function(e) {
          p = e;
        }, send: function(e, t) {
          n(h, { action: e, message: JSON.stringify(t) });
        }, whisper: function(e, t, r) {
          n(h, { action: t, message: JSON.stringify(r), userId: e });
        }
      }, chat: {
        listen: function(e) {
          y = e;
        }, send: function(e, t) {
          "MESSAGE" === e ? n(U, {
            action: e,
            message: t
          }) : d(new g("invalid-service-code", "잘못된 채팅 서비스 코드입니다. (발신은 \"MESSAGE\"만 가능)"));
        }
      }, hogu: {
        listen: function(e) {
          b = e;
        }, send: function(e, t) {
          n(N, { action: e, message: t });
        }
      }
    };
  };
});
